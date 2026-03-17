"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { loadState, startCampaign } from "@/lib/store";
import { TOPICS } from "@/lib/data";
import { AppState, Grade, Board } from "@/lib/types";
import { getSubjectColor } from "@/lib/utils";

type Subject = "math" | "english" | "science";

export default function LibraryPage() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><div className="text-3xl animate-pulse">📚</div></div>}>
      <LibraryContent />
    </Suspense>
  );
}

function LibraryContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [state, setState] = useState<AppState | null>(null);
  const [activeSubject, setActiveSubject] = useState<Subject>("math");
  const [selectedTopic, setSelectedTopic] = useState<string | null>(
    searchParams.get("topic")
  );

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
        <div className="text-3xl animate-pulse">📚</div>
      </div>
    );
  }

  const { childProfile, masteredTopics, activeCampaign } = state;

  const filteredTopics = TOPICS.filter(
    (t) =>
      t.subject === activeSubject &&
      t.grades.includes(childProfile.grade) &&
      t.boards.includes(childProfile.board)
  ).sort((a, b) => a.typicalMonth - b.typicalMonth);

  const selectedTopicData = selectedTopic
    ? TOPICS.find((t) => t.id === selectedTopic)
    : null;
  const color = selectedTopicData
    ? getSubjectColor(selectedTopicData.subject)
    : "#1CB0F6";

  function handleStartCampaign(topicId: string) {
    startCampaign(topicId, childProfile!.id);
    setState(loadState());
    setSelectedTopic(null);
    router.push(`/campaign/${topicId}/1`);
  }

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Header */}
      <div className="bg-white px-4 pt-12 pb-4">
        <h1 className="text-2xl font-black text-gray-900">📚 Library</h1>
        <p className="text-gray-400 text-sm mt-0.5">
          Grade {childProfile.grade} · {childProfile.board}
        </p>
      </div>

      {/* Subject tabs */}
      <div className="bg-white px-4 pb-4 flex gap-2">
        {(["math", "english", "science"] as Subject[]).map((s) => {
          const c = getSubjectColor(s);
          const label = s === "math" ? "📐 Math" : s === "english" ? "📖 English" : "🔬 Science";
          return (
            <button
              key={s}
              onClick={() => setActiveSubject(s)}
              className="px-4 py-2 rounded-full font-bold text-sm transition-all"
              style={{
                backgroundColor: activeSubject === s ? c : "#F3F4F6",
                color: activeSubject === s ? "white" : "#6B7280",
              }}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* Topics grid */}
      <div className="px-4 py-4">
        <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-3">
          {filteredTopics.length} topics available
        </p>
        {filteredTopics.length === 0 ? (
          <div className="text-center py-16 text-gray-400">
            <p className="text-4xl mb-3">🌱</p>
            <p className="font-bold">No topics yet</p>
            <p className="text-sm mt-1">We're adding {childProfile.board} content soon!</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3">
            {filteredTopics.map((topic) => {
              const c = getSubjectColor(topic.subject);
              const isMastered = masteredTopics.includes(topic.id);
              const isActive = activeCampaign?.topicId === topic.id;

              return (
                <button
                  key={topic.id}
                  onClick={() => setSelectedTopic(topic.id)}
                  className="bg-white rounded-2xl p-4 text-left border transition-all active:scale-95"
                  style={{
                    borderColor: isActive ? c : isMastered ? "#FFC80040" : "#E5E7EB",
                    borderWidth: isActive || isMastered ? 2 : 1,
                  }}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                      style={{ backgroundColor: `${c}15` }}
                    >
                      {topic.icon}
                    </div>
                    {isMastered && <span className="text-lg">✅</span>}
                    {isActive && !isMastered && (
                      <div
                        className="text-xs font-bold px-1.5 py-0.5 rounded-full"
                        style={{ backgroundColor: `${c}20`, color: c }}
                      >
                        Active
                      </div>
                    )}
                  </div>
                  <p className="font-black text-gray-900 text-sm">{topic.name}</p>
                  <p className="text-xs text-gray-400 mt-0.5 leading-tight">{topic.description}</p>
                  <p className="text-xs text-gray-300 mt-1.5">{topic.familyCount} families</p>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Topic Detail Sheet */}
      {selectedTopicData && (
        <div className="fixed inset-0 z-50 flex items-end" onClick={() => setSelectedTopic(null)}>
          <div className="absolute inset-0 bg-black/40" />
          <div
            className="relative w-full max-w-[480px] mx-auto bg-white rounded-t-3xl p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-10 h-1 bg-gray-200 rounded-full mx-auto mb-5" />

            <div className="flex items-center gap-4 mb-4">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
                style={{ backgroundColor: `${color}20` }}
              >
                {selectedTopicData.icon}
              </div>
              <div>
                <h3 className="text-2xl font-black text-gray-900">{selectedTopicData.name}</h3>
                <p className="text-gray-400 text-sm">{selectedTopicData.description}</p>
              </div>
            </div>

            <div className="space-y-2 mb-6">
              {[
                { icon: "📅", label: "Duration", value: "5 days · ~15 min/day" },
                { icon: "👨‍👩‍👧", label: "Families", value: `${selectedTopicData.familyCount} families currently learning` },
                {
                  icon: "🎯",
                  label: "Grade",
                  value: `Grade ${selectedTopicData.grades.join(", ")} · ${childProfile.board}`,
                },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-2.5">
                  <span className="text-lg">{item.icon}</span>
                  <div>
                    <p className="text-xs text-gray-400">{item.label}</p>
                    <p className="text-sm font-bold text-gray-700">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {masteredTopics.includes(selectedTopicData.id) ? (
              <div className="text-center py-3 bg-green-50 rounded-2xl">
                <p className="font-bold text-green-700">✅ Already mastered!</p>
                <p className="text-sm text-green-600 mt-1">Start again to review</p>
                <button
                  onClick={() => handleStartCampaign(selectedTopicData.id)}
                  className="mt-2 px-5 py-2 rounded-xl font-bold text-sm"
                  style={{ backgroundColor: color, color: "white" }}
                >
                  Review Campaign
                </button>
              </div>
            ) : activeCampaign?.topicId === selectedTopicData.id ? (
              <Link
                href={`/campaign/${selectedTopicData.id}/${activeCampaign.currentDay}`}
              >
                <button
                  className="w-full py-4 rounded-2xl font-bold text-lg text-white active:scale-95 transition-transform"
                  style={{ backgroundColor: color }}
                >
                  Continue Campaign →
                </button>
              </Link>
            ) : (
              <button
                onClick={() => handleStartCampaign(selectedTopicData.id)}
                className="w-full py-4 rounded-2xl font-bold text-lg text-white active:scale-95 transition-transform"
                style={{ backgroundColor: color }}
              >
                🚀 Start 5-Day Campaign
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
