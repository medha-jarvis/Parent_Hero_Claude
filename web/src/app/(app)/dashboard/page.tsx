"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { loadState, clearCampaign } from "@/lib/store";
import { TOPICS, SUBJECT_COLORS, getLevel, getXpForNextLevel } from "@/lib/data";
import { AppState } from "@/lib/types";
import { formatDate, getTargetDate, getSubjectColor, getSubjectBadge } from "@/lib/utils";

export default function DashboardPage() {
  const router = useRouter();
  const [state, setState] = useState<AppState | null>(null);

  useEffect(() => {
    const s = loadState();
    if (!s.onboardingComplete) {
      router.replace("/onboarding");
      return;
    }
    setState(s);
  }, [router]);

  if (!state || !state.childProfile) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-3xl animate-pulse">🦸</div>
      </div>
    );
  }

  const { childProfile, activeCampaign, streak, xp, masteredTopics } = state;
  const activeTopic = activeCampaign
    ? TOPICS.find((t) => t.id === activeCampaign.topicId)
    : null;
  const level = getLevel(xp);
  const xpInfo = getXpForNextLevel(xp);

  // Flame state
  const today = new Date().toISOString().split("T")[0];
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yStr = yesterday.toISOString().split("T")[0];
  const streakActive = streak.lastActivityDate === today;
  const streakValid = streakActive || streak.lastActivityDate === yStr;

  // What kids are learning — top topics
  const popularTopics = TOPICS.filter(
    (t) => t.grades.includes(childProfile.grade) && t.boards.includes(childProfile.board)
  )
    .sort((a, b) => b.familyCount - a.familyCount)
    .slice(0, 8);

  const completedDays = activeCampaign
    ? Object.values(activeCampaign.dayProgress).filter(
        (d) => d.scriptCompleted && d.practiceCompleted && d.quizCompleted
      ).length
    : 0;

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Top Bar */}
      <div className="bg-white px-4 pt-12 pb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm"
            style={{ backgroundColor: childProfile.avatarColor }}
          >
            {childProfile.name.charAt(0).toUpperCase()}
          </div>
          <div>
            <p className="text-xs text-gray-400">Learning for</p>
            <p className="font-bold text-gray-900 text-sm leading-tight">
              {childProfile.name} · Grade {childProfile.grade}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <span
              className={`text-xl ${streakActive ? "animate-[flame-pulse_1.5s_ease-in-out_infinite]" : ""}`}
            >
              {streakValid ? "🔥" : "💤"}
            </span>
            <span className={`font-bold text-sm ${streakActive ? "text-streak" : "text-gray-400"}`}>
              {streak.count}
            </span>
          </div>
          <div className="flex items-center gap-1 bg-purple-50 px-2 py-1 rounded-full">
            <span className="text-xs">⭐</span>
            <span className="text-xs font-bold text-purple-700">Lv.{level}</span>
          </div>
          <Link href="/settings">
            <button className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors">
              <span className="text-lg">⚙️</span>
            </button>
          </Link>
        </div>
      </div>

      <div className="px-4 py-4 space-y-6">
        {/* XP Bar */}
        <div className="bg-white rounded-2xl p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-semibold text-gray-500">Level {level} → {level + 1}</span>
            <span className="text-xs text-gray-400">{xpInfo.current} / {xpInfo.required} XP</span>
          </div>
          <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{
                width: `${Math.min(100, (xpInfo.current / xpInfo.required) * 100)}%`,
                background: "linear-gradient(90deg, #1CB0F6, #8B5CF6)",
              }}
            />
          </div>
          <p className="text-xs text-gray-400 mt-1.5 text-right">{xp} total XP</p>
        </div>

        {/* Active Campaign Hero Card */}
        {activeCampaign && activeTopic ? (
          <div>
            <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
              Active Campaign
            </h2>
            <div
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100"
              style={{ borderLeft: `4px solid ${getSubjectColor(activeTopic.subject)}` }}
            >
              <div className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                      style={{ backgroundColor: `${getSubjectColor(activeTopic.subject)}20` }}
                    >
                      {activeTopic.icon}
                    </div>
                    <div>
                      <p className="font-black text-xl text-gray-900">{activeTopic.name}</p>
                      <p className="text-xs text-gray-400 mt-0.5">
                        {getSubjectBadge(activeTopic.subject)} · Grade {childProfile.grade} · {childProfile.board}
                      </p>
                    </div>
                  </div>
                  <span
                    className="text-xs font-bold px-2 py-1 rounded-full"
                    style={{
                      backgroundColor: "#6B21A820",
                      color: "#6B21A8",
                    }}
                  >
                    ACTIVE
                  </span>
                </div>

                {/* Progress bar */}
                <div className="mb-3">
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-xs font-semibold text-gray-500">
                      Day {activeCampaign.currentDay} of 5
                    </span>
                    <span className="text-xs text-gray-400">
                      {completedDays}/5 days complete
                    </span>
                  </div>
                  <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{
                        width: `${(completedDays / 5) * 100}%`,
                        backgroundColor: getSubjectColor(activeTopic.subject),
                      }}
                    />
                  </div>
                  <p className="text-xs text-gray-400 mt-1">
                    Started {formatDate(activeCampaign.startDate)} · Target{" "}
                    {getTargetDate(activeCampaign.startDate)}
                  </p>
                </div>

                <Link href={`/campaign/${activeCampaign.topicId}/${activeCampaign.currentDay}`}>
                  <button
                    className="w-full py-3.5 rounded-xl font-bold text-base text-white transition-all active:scale-95"
                    style={{ backgroundColor: getSubjectColor(activeTopic.subject) }}
                  >
                    ▶ CONTINUE TODAY'S MISSION
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
              Active Campaign
            </h2>
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100">
              <div className="text-5xl mb-3">🎯</div>
              <p className="font-bold text-gray-900 mb-1">
                What is {childProfile.name} learning in school right now?
              </p>
              <p className="text-sm text-gray-400 mb-4">
                Start a 5-Day Campaign and become the teaching hero!
              </p>
              <div className="flex gap-2">
                <Link href="/library" className="flex-1">
                  <button className="w-full py-3 rounded-xl bg-[#1CB0F6] text-white font-bold text-sm active:scale-95 transition-transform">
                    📚 Browse Topics
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* What Kids Are Learning */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
              📊 What Kids Are Learning
            </h2>
            <span className="text-xs text-gray-400">Grade {childProfile.grade} · {childProfile.board}</span>
          </div>
          <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
            {popularTopics.map((topic) => {
              const color = getSubjectColor(topic.subject);
              const isMastered = masteredTopics.includes(topic.id);
              const isActive = activeCampaign?.topicId === topic.id;
              return (
                <Link
                  key={topic.id}
                  href={`/library?topic=${topic.id}`}
                  className="flex-shrink-0"
                >
                  <div
                    className="w-28 p-3 rounded-2xl border transition-all active:scale-95"
                    style={{
                      backgroundColor: `${color}10`,
                      borderColor: `${color}30`,
                    }}
                  >
                    <div className="text-2xl mb-1.5">{topic.icon}</div>
                    <p className="font-bold text-xs text-gray-900 leading-tight">{topic.name}</p>
                    <p className="text-xs text-gray-400 mt-1">{topic.familyCount} families</p>
                    {isMastered && (
                      <div className="mt-1.5 text-xs">✅ Mastered</div>
                    )}
                    {isActive && !isMastered && (
                      <div
                        className="mt-1.5 text-xs font-bold px-1.5 py-0.5 rounded-full inline-block"
                        style={{ backgroundColor: "#6B21A820", color: "#6B21A8" }}
                      >
                        Active
                      </div>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Mastered Topics */}
        {masteredTopics.length > 0 && (
          <div>
            <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
              🏆 Mastered Topics
            </h2>
            <div className="flex gap-2 flex-wrap">
              {masteredTopics.map((id) => {
                const t = TOPICS.find((x) => x.id === id);
                if (!t) return null;
                return (
                  <div
                    key={id}
                    className="flex items-center gap-1.5 bg-white border border-gold/30 px-3 py-1.5 rounded-full"
                  >
                    <span className="text-sm">{t.icon}</span>
                    <span className="text-xs font-bold text-gray-700">{t.name}</span>
                    <span className="text-xs">✅</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Streak section */}
        <div className="bg-white rounded-2xl p-4 flex items-center gap-4">
          <div className="text-4xl">{streak.count > 0 ? "🔥" : "💤"}</div>
          <div className="flex-1">
            <p className="font-bold text-gray-900">
              {streak.count > 0 ? `${streak.count}-day streak!` : "Start your first streak!"}
            </p>
            <p className="text-xs text-gray-400 mt-0.5">
              {streakActive
                ? "You've already learned today! 🌟"
                : streak.count > 0
                ? "Complete a lesson today to keep your streak"
                : "Complete a lesson to begin your streak"}
            </p>
          </div>
          {!streakActive && (
            <Link href={activeCampaign ? `/campaign/${activeCampaign.topicId}/${activeCampaign.currentDay}` : "/library"}>
              <button className="bg-streak text-white text-xs font-bold px-3 py-2 rounded-xl active:scale-95 transition-transform">
                Go! →
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
