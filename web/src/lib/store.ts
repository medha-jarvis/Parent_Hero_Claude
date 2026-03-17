"use client";

import { AppState, Campaign, DayProgress, ChildProfile } from "./types";

const STORAGE_KEY = "parenthero_state";

export const DEFAULT_STATE: AppState = {
  childProfile: null,
  activeCampaign: null,
  masteredTopics: [],
  streak: { count: 0, lastActivityDate: "" },
  xp: 0,
  onboardingComplete: false,
};

export function loadState(): AppState {
  if (typeof window === "undefined") return DEFAULT_STATE;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_STATE;
    return { ...DEFAULT_STATE, ...JSON.parse(raw) };
  } catch {
    return DEFAULT_STATE;
  }
}

export function saveState(state: AppState): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function setChildProfile(profile: ChildProfile): AppState {
  const state = loadState();
  const next = { ...state, childProfile: profile, onboardingComplete: true };
  saveState(next);
  return next;
}

export function startCampaign(topicId: string, childId: string): AppState {
  const state = loadState();
  const campaign: Campaign = {
    topicId,
    childId,
    startDate: new Date().toISOString().split("T")[0],
    currentDay: 1,
    dayProgress: {},
    completed: false,
  };
  const next = { ...state, activeCampaign: campaign };
  saveState(next);
  return next;
}

export function markStepComplete(
  day: number,
  step: keyof DayProgress,
  value: number | boolean = true
): AppState {
  const state = loadState();
  if (!state.activeCampaign) return state;

  const existing = state.activeCampaign.dayProgress[day] || {
    scriptCompleted: false,
    riddleCompleted: false,
    practiceCompleted: false,
    quizCompleted: false,
  };

  const updatedDayProgress = {
    ...existing,
    [step]: value,
  };

  const updatedCampaign: Campaign = {
    ...state.activeCampaign,
    dayProgress: {
      ...state.activeCampaign.dayProgress,
      [day]: updatedDayProgress,
    },
  };

  // Check if all steps for this day are done
  const allDone =
    updatedDayProgress.scriptCompleted &&
    updatedDayProgress.practiceCompleted &&
    updatedDayProgress.quizCompleted;

  let xpGain = 0;
  if (step === "scriptCompleted" && value === true) xpGain = 20;
  if (step === "riddleCompleted" && value === true) xpGain = 10;
  if (step === "practiceCompleted") xpGain = 30;
  if (step === "quizCompleted") xpGain = 40;

  // Update streak
  const today = new Date().toISOString().split("T")[0];
  let streak = state.streak;
  if (allDone || xpGain > 0) {
    if (streak.lastActivityDate === today) {
      // already counted today, no change
    } else {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yStr = yesterday.toISOString().split("T")[0];
      if (streak.lastActivityDate === yStr) {
        streak = { count: streak.count + 1, lastActivityDate: today };
      } else if (streak.lastActivityDate === "") {
        streak = { count: 1, lastActivityDate: today };
      } else {
        streak = { count: 1, lastActivityDate: today };
      }
    }
  }

  // Move to next day if today is fully done
  let finalCampaign = { ...updatedCampaign };
  if (allDone && updatedCampaign.currentDay === day) {
    if (day < 5) {
      finalCampaign = { ...finalCampaign, currentDay: day + 1 };
    } else {
      finalCampaign = { ...finalCampaign, completed: true };
    }
  }

  // If campaign completed, add to mastered topics
  const isNowMastered = finalCampaign.completed;

  const next: AppState = {
    ...state,
    activeCampaign: isNowMastered ? null : finalCampaign,
    xp: state.xp + xpGain,
    streak,
    masteredTopics: isNowMastered
      ? [...new Set([...state.masteredTopics, finalCampaign.topicId])]
      : state.masteredTopics,
  };

  saveState(next);
  return next;
}

export function clearCampaign(): AppState {
  const state = loadState();
  const next = { ...state, activeCampaign: null };
  saveState(next);
  return next;
}

export function resetAll(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(STORAGE_KEY);
}
