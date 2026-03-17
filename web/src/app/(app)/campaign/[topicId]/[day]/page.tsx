"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { loadState, markStepComplete } from "@/lib/store";
import { TOPICS } from "@/lib/data";
import { getTopicContent } from "@/lib/data";
import { AppState, DayProgress } from "@/lib/types";
import { getSubjectColor, formatDate, getTargetDate } from "@/lib/utils";

export default function CampaignDayPage() {
  const params = useParams();
  const router = useRouter();
  const topicId = params.topicId as string;
  const day = parseInt(params.day as string);
  const [state, setState] = useState<AppState | null>(null);

  useEffect(() => {
    const s = loadState();
    if (!s.onboardingComplete) {
      router.replace("/onboarding");
      return;
    }
    setState(s);
  }, [router]);

  const refreshState = () => setState(loadState());

  if (!state) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-3xl animate-pulse">🎯</div>
      </div>
    );
  }

  const topic = TOPICS.find((t) => t.id === topicId);
  const campaign = state.activeCampaign;
  const dayContent = getTopicContent(topicId, day);
  const color = topic ? getSubjectColor(topic.subject) : "#1CB0F6";

  if (!topic || !dayContent) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <p className="text-4xl mb-4">😕</p>
        <p className="font-bold text-gray-900">Topic not found</p>
        <Link href="/dashboard">
          <button className="mt-4 bg-[#1CB0F6] text-white font-bold px-6 py-3 rounded-xl">
            Back to Dashboard
          </button>
        </Link>
      </div>
    );
  }

  const progress: DayProgress = campaign?.dayProgress[day] || {
    scriptCompleted: false,
    riddleCompleted: false,
    practiceCompleted: false,
    quizCompleted: false,
  };

  const completedDays = campaign
    ? Object.values(campaign.dayProgress).filter(
        (d) => d.scriptCompleted && d.practiceCompleted && d.quizCompleted
      ).length
    : 0;

  const dayComplete = progress.scriptCompleted && progress.practiceCompleted && progress.quizCompleted;
  const isCurrentDay = !campaign || campaign.currentDay === day;

  // Mission steps configuration
  const steps = [
    {
      num: 1,
      icon: "📜",
      title: "Teaching Script",
      subtitle: `"${dayContent.title}"`,
      time: "5 min",
      locked: false,
      completed: progress.scriptCompleted,
      href: `/script/${topicId}/${day}`,
    },
    {
      num: 2,
      icon: "🧩",
      title: "Quick Riddle",
      subtitle: "A fun brain teaser",
      time: "1 min",
      locked: !progress.scriptCompleted,
      completed: progress.riddleCompleted,
      href: null, // inline riddle
      isRiddle: true,
    },
    {
      num: 3,
      icon: "✏️",
      title: "Practice Pad · 10 Questions",
      subtitle: "Hands-on practice",
      time: "10 min",
      locked: !progress.scriptCompleted,
      completed: progress.practiceCompleted,
      href: `/practice/${topicId}?day=${day}&mode=practice`,
    },
    {
      num: 4,
      icon: "🎯",
      title: day < 5 ? "Daily Quiz · 5 Questions" : "Legend Quiz · 5 Questions 🏆",
      subtitle: day < 5 ? "Test what you learned" : "Final mastery challenge!",
      time: "5 min",
      locked: !progress.practiceCompleted,
      completed: progress.quizCompleted,
      href: `/quiz/${topicId}/${day}`,
    },
  ];

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Header */}
      <div className="bg-white px-4 pt-12 pb-4" style={{ borderBottom: `3px solid ${color}30` }}>
        <div className="flex items-center gap-3 mb-4">
          <Link href="/dashboard">
            <button className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors">
              <span className="text-lg">←</span>
            </button>
          </Link>
          <div className="flex-1">
            <p className="text-xs text-gray-400 font-medium">Campaign</p>
            <h1 className="font-black text-xl text-gray-900 flex items-center gap-2">
              <span>{topic.icon}</span> {topic.name}
            </h1>
          </div>
          <div
            className="text-xs font-bold px-2 py-1 rounded-full"
            style={{ backgroundColor: `${color}20`, color }}
          >
            Day {day} of 5
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-700"
            style={{
              width: `${(completedDays / 5) * 100}%`,
              backgroundColor: color,
            }}
          />
        </div>
        <div className="flex justify-between mt-1">
          <p className="text-xs text-gray-400">
            {campaign ? `Started ${formatDate(campaign.startDate)}` : ""}
          </p>
          <p className="text-xs text-gray-400">
            {campaign ? `Target: ${getTargetDate(campaign.startDate)}` : ""}
          </p>
        </div>
      </div>

      <div className="px-4 py-4 space-y-3">
        {/* Completed banner */}
        {dayComplete && (
          <div
            className="rounded-2xl p-4 text-center"
            style={{ backgroundColor: `${color}15`, border: `2px solid ${color}30` }}
          >
            <p className="text-2xl mb-1">🎉</p>
            <p className="font-bold text-gray-900">Day {day} Complete!</p>
            <p className="text-sm text-gray-500 mt-0.5">
              {progress.quizScore !== undefined
                ? `Quiz score: ${progress.quizScore}/5`
                : ""}
            </p>
            {day < 5 ? (
              <Link href={`/campaign/${topicId}/${day + 1}`}>
                <button
                  className="mt-3 px-5 py-2 rounded-xl font-bold text-sm text-white"
                  style={{ backgroundColor: color }}
                >
                  Day {day + 1} Mission →
                </button>
              </Link>
            ) : (
              <div>
                <p className="text-lg font-black text-gray-900 mt-2">
                  🏆 Campaign Complete! {topic.name} Mastered!
                </p>
                <Link href="/dashboard">
                  <button
                    className="mt-3 px-5 py-2 rounded-xl font-bold text-sm text-white"
                    style={{ backgroundColor: color }}
                  >
                    View Your Certificate →
                  </button>
                </Link>
              </div>
            )}
          </div>
        )}

        {/* TODAY'S MISSION section title */}
        <div className="flex items-center gap-2">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Today's Mission</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* Mission Steps */}
        {steps.map((step, i) => (
          <MissionStep
            key={i}
            step={step}
            color={color}
            topicId={topicId}
            day={day}
            dayContent={dayContent}
            onRiddleComplete={() => {
              markStepComplete(day, "riddleCompleted");
              refreshState();
            }}
            progress={progress}
          />
        ))}

        {/* BONUS section */}
        <div className="flex items-center gap-2 mt-2">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Bonus Activities</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        <div className="flex gap-2">
          <Link href={`/practice/${topicId}?day=${day}&mode=arcade`} className="flex-1">
            <div className="bg-white border border-gray-100 rounded-xl p-3 text-center active:scale-95 transition-transform">
              <p className="text-xl">🎮</p>
              <p className="text-xs font-bold text-gray-700 mt-1">Arcade</p>
            </div>
          </Link>
          <Link href="/library" className="flex-1">
            <div className="bg-white border border-gray-100 rounded-xl p-3 text-center active:scale-95 transition-transform">
              <p className="text-xl">📚</p>
              <p className="text-xs font-bold text-gray-700 mt-1">Library</p>
            </div>
          </Link>
          <Link href="/progress" className="flex-1">
            <div className="bg-white border border-gray-100 rounded-xl p-3 text-center active:scale-95 transition-transform">
              <p className="text-xl">📊</p>
              <p className="text-xs font-bold text-gray-700 mt-1">Progress</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

function MissionStep({
  step,
  color,
  topicId,
  day,
  dayContent,
  onRiddleComplete,
  progress,
}: {
  step: {
    num: number;
    icon: string;
    title: string;
    subtitle: string;
    time: string;
    locked: boolean;
    completed: boolean;
    href: string | null;
    isRiddle?: boolean;
  };
  color: string;
  topicId: string;
  day: number;
  dayContent: ReturnType<typeof getTopicContent>;
  onRiddleComplete: () => void;
  progress: DayProgress;
}) {
  const [showRiddle, setShowRiddle] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const router = useRouter();

  if (step.isRiddle && showRiddle && dayContent) {
    return (
      <div className="bg-white rounded-2xl p-4 border border-gray-100">
        <div className="text-center">
          <p className="text-3xl mb-3">🧩</p>
          <h3 className="font-bold text-gray-900 mb-3">Quick Riddle!</h3>
          <p className="text-gray-700 bg-gray-50 rounded-xl p-4 text-sm leading-relaxed mb-4">
            {dayContent.riddle.question}
          </p>
          {!showAnswer ? (
            <button
              onClick={() => setShowAnswer(true)}
              className="px-6 py-2 rounded-xl font-bold text-sm text-white"
              style={{ backgroundColor: color }}
            >
              Show Answer 🎉
            </button>
          ) : (
            <div>
              <div
                className="p-3 rounded-xl mb-3"
                style={{ backgroundColor: `${color}15` }}
              >
                <p className="font-bold text-gray-900 text-sm">{dayContent.riddle.answer}</p>
              </div>
              <button
                onClick={() => {
                  onRiddleComplete();
                  setShowRiddle(false);
                }}
                className="px-6 py-2 rounded-xl font-bold text-sm text-white"
                style={{ backgroundColor: color }}
              >
                ✓ Got it! Continue
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div
      className="bg-white rounded-2xl border overflow-hidden transition-all"
      style={{
        borderColor: step.completed ? `${color}40` : step.locked ? "#E5E7EB" : "#E5E7EB",
        opacity: step.locked ? 0.6 : 1,
      }}
    >
      <div className="p-4 flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
          style={{
            backgroundColor: step.completed ? `${color}15` : step.locked ? "#F3F4F6" : `${color}10`,
          }}
        >
          {step.completed ? "✅" : step.locked ? "🔒" : step.icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span
              className="text-xs font-bold"
              style={{ color: step.completed ? color : "#9CA3AF" }}
            >
              {step.num}.
            </span>
            <p className="font-bold text-sm text-gray-900 truncate">{step.title}</p>
          </div>
          <p className="text-xs text-gray-400 mt-0.5">{step.subtitle}</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-400">{step.time}</span>
          {!step.locked && !step.completed && (
            step.isRiddle ? (
              <button
                onClick={() => setShowRiddle(true)}
                className="px-3 py-1.5 rounded-lg font-bold text-xs text-white active:scale-95 transition-transform"
                style={{ backgroundColor: color }}
              >
                START ▶
              </button>
            ) : step.href ? (
              <button
                onClick={() => router.push(step.href!)}
                className="px-3 py-1.5 rounded-lg font-bold text-xs text-white active:scale-95 transition-transform"
                style={{ backgroundColor: color }}
              >
                START ▶
              </button>
            ) : null
          )}
          {step.completed && (
            <span className="text-xs font-bold px-2 py-1 rounded-lg bg-green-50 text-green-600">
              Done ✓
            </span>
          )}
          {step.locked && (
            <span className="text-xs text-gray-400">🔒</span>
          )}
        </div>
      </div>
    </div>
  );
}
