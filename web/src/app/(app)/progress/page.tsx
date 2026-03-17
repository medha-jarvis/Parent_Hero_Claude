"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { loadState } from "@/lib/store";
import { TOPICS, getLevel, getXpForNextLevel, LEVEL_THRESHOLDS } from "@/lib/data";
import { AppState } from "@/lib/types";
import { getSubjectColor } from "@/lib/utils";

export default function ProgressPage() {
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
        <div className="text-3xl animate-pulse">📊</div>
      </div>
    );
  }

  const { childProfile, xp, streak, masteredTopics, activeCampaign } = state;
  const level = getLevel(xp);
  const xpInfo = getXpForNextLevel(xp);
  const masteredTopicData = masteredTopics
    .map((id) => TOPICS.find((t) => t.id === id))
    .filter(Boolean);

  const totalCampaignDays = activeCampaign
    ? Object.values(activeCampaign.dayProgress).filter(
        (d) => d.scriptCompleted && d.practiceCompleted && d.quizCompleted
      ).length
    : 0;

  const subjectBreakdown = ["math", "english", "science"].map((s) => {
    const total = TOPICS.filter(
      (t) =>
        t.subject === s &&
        t.grades.includes(childProfile.grade) &&
        t.boards.includes(childProfile.board)
    ).length;
    const mastered = masteredTopics.filter((id) => {
      const t = TOPICS.find((x) => x.id === id);
      return t?.subject === s;
    }).length;
    return { subject: s, mastered, total };
  });

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Header */}
      <div className="bg-white px-4 pt-12 pb-5">
        <h1 className="text-2xl font-black text-gray-900">📊 Progress</h1>
        <p className="text-gray-400 text-sm mt-0.5">
          {childProfile.name} · Grade {childProfile.grade}
        </p>
      </div>

      <div className="px-4 py-4 space-y-4">
        {/* Hero stats row */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { icon: "🔥", label: "Streak", value: streak.count, unit: "days", color: "#F97316" },
            { icon: "⭐", label: "Level", value: level, unit: `Lv.${level}`, color: "#8B5CF6" },
            { icon: "🏆", label: "Mastered", value: masteredTopics.length, unit: "topics", color: "#FFC800" },
          ].map((stat) => (
            <div key={stat.label} className="bg-white rounded-2xl p-4 text-center shadow-sm">
              <p className="text-3xl mb-1">{stat.icon}</p>
              <p className="text-2xl font-black" style={{ color: stat.color }}>
                {stat.value}
              </p>
              <p className="text-xs text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* XP Progress */}
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h3 className="font-black text-gray-900">⭐ XP Progress</h3>
              <p className="text-xs text-gray-400">{xp} total XP</p>
            </div>
            <div
              className="px-3 py-1 rounded-full font-bold text-sm"
              style={{ backgroundColor: "#8B5CF620", color: "#8B5CF6" }}
            >
              Level {level}
            </div>
          </div>
          <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden mb-2">
            <div
              className="h-full rounded-full"
              style={{
                width: `${Math.min(100, (xpInfo.current / xpInfo.required) * 100)}%`,
                background: "linear-gradient(90deg, #1CB0F6, #8B5CF6)",
              }}
            />
          </div>
          <div className="flex justify-between text-xs text-gray-400">
            <span>{xpInfo.current} XP</span>
            <span>{xpInfo.required} XP needed for Level {level + 1}</span>
          </div>
          {/* Level milestones */}
          <div className="mt-3 grid grid-cols-5 gap-1">
            {LEVEL_THRESHOLDS.slice(0, 5).map((threshold, i) => (
              <div key={i} className="text-center">
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold mx-auto"
                  style={{
                    backgroundColor: xp >= threshold ? "#8B5CF6" : "#F3F4F6",
                    color: xp >= threshold ? "white" : "#9CA3AF",
                  }}
                >
                  {i + 1}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Subject Mastery */}
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <h3 className="font-black text-gray-900 mb-3">📚 Subject Mastery</h3>
          <div className="space-y-3">
            {subjectBreakdown.map(({ subject, mastered, total }) => {
              const c = getSubjectColor(subject);
              const pct = total > 0 ? (mastered / total) * 100 : 0;
              const label = subject === "math" ? "📐 Math" : subject === "english" ? "📖 English" : "🔬 Science";
              return (
                <div key={subject}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-bold text-gray-700">{label}</span>
                    <span className="text-xs text-gray-400">
                      {mastered}/{total} topics
                    </span>
                  </div>
                  <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all"
                      style={{ width: `${pct}%`, backgroundColor: c }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Active Campaign Progress */}
        {activeCampaign && (
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <h3 className="font-black text-gray-900 mb-3">🎯 Active Campaign</h3>
            {(() => {
              const topic = TOPICS.find((t) => t.id === activeCampaign.topicId);
              const color = topic ? getSubjectColor(topic.subject) : "#1CB0F6";
              return (
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                      style={{ backgroundColor: `${color}15` }}
                    >
                      {topic?.icon}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">{topic?.name}</p>
                      <p className="text-xs text-gray-400">
                        Day {activeCampaign.currentDay} of 5
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((d) => {
                      const dp = activeCampaign.dayProgress[d];
                      const done = dp?.scriptCompleted && dp?.practiceCompleted && dp?.quizCompleted;
                      return (
                        <div
                          key={d}
                          className="flex-1 h-8 rounded-xl flex items-center justify-center text-sm font-bold"
                          style={{
                            backgroundColor: done ? color : "#F3F4F6",
                            color: done ? "white" : "#9CA3AF",
                          }}
                        >
                          {done ? "✓" : d}
                        </div>
                      );
                    })}
                  </div>
                  <Link href={`/campaign/${activeCampaign.topicId}/${activeCampaign.currentDay}`}>
                    <button
                      className="w-full mt-3 py-3 rounded-xl font-bold text-sm text-white"
                      style={{ backgroundColor: color }}
                    >
                      Continue →
                    </button>
                  </Link>
                </div>
              );
            })()}
          </div>
        )}

        {/* Mastered Topics */}
        {masteredTopicData.length > 0 ? (
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <h3 className="font-black text-gray-900 mb-3">🏆 Mastered Topics</h3>
            <div className="space-y-2">
              {masteredTopicData.map((topic) => {
                if (!topic) return null;
                const c = getSubjectColor(topic.subject);
                return (
                  <div
                    key={topic.id}
                    className="flex items-center gap-3 bg-gray-50 rounded-xl px-3 py-2.5"
                  >
                    <span className="text-xl">{topic.icon}</span>
                    <div className="flex-1">
                      <p className="font-bold text-sm text-gray-900">{topic.name}</p>
                      <p className="text-xs text-gray-400">{topic.subject}</p>
                    </div>
                    <span className="text-green-500 text-lg">✅</span>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
            <p className="text-4xl mb-3">🎯</p>
            <p className="font-bold text-gray-900">No mastered topics yet</p>
            <p className="text-sm text-gray-400 mt-1">
              Complete a 5-Day Campaign to earn your first mastery!
            </p>
            <Link href="/library">
              <button className="mt-4 bg-[#1CB0F6] text-white font-bold px-5 py-2.5 rounded-xl text-sm">
                Browse Topics →
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
