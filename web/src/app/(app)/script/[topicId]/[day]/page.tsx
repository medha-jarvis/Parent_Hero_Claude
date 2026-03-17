"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { loadState, markStepComplete } from "@/lib/store";
import { TOPICS, getTopicContent } from "@/lib/data";
import { getSubjectColor } from "@/lib/utils";
import { ScriptCard } from "@/lib/types";

export default function ScriptPage() {
  const params = useParams();
  const router = useRouter();
  const topicId = params.topicId as string;
  const day = parseInt(params.day as string);
  const [cardIndex, setCardIndex] = useState(0);
  const [completed, setCompleted] = useState(false);

  const topic = TOPICS.find((t) => t.id === topicId);
  const dayContent = getTopicContent(topicId, day);
  const color = topic ? getSubjectColor(topic.subject) : "#1CB0F6";

  useEffect(() => {
    const s = loadState();
    if (!s.onboardingComplete) router.replace("/onboarding");
  }, [router]);

  if (!topic || !dayContent) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-400">Content not found</p>
      </div>
    );
  }

  const cards: ScriptCard[] = dayContent.scriptCards;
  const currentCard = cards[cardIndex];
  const isLast = cardIndex === cards.length - 1;

  function handleNext() {
    if (isLast) {
      markStepComplete(day, "scriptCompleted");
      setCompleted(true);
    } else {
      setCardIndex((i) => i + 1);
    }
  }

  if (completed) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center"
        style={{ background: `linear-gradient(135deg, ${color}15, white)` }}
      >
        <div className="text-6xl mb-4">🌟</div>
        <h2 className="text-2xl font-black text-gray-900 mb-2">Script Complete!</h2>
        <p className="text-gray-500 mb-2">+20 XP earned</p>
        <p className="text-gray-500 text-sm mb-8">
          You've read through today's teaching script for{" "}
          <span className="font-bold">{topic.name}</span>.
          <br />
          Now it's time for practice!
        </p>
        <button
          onClick={() => router.push(`/campaign/${topicId}/${day}`)}
          className="w-full max-w-xs py-4 rounded-2xl font-bold text-lg text-white active:scale-95 transition-transform"
          style={{ backgroundColor: color }}
        >
          Continue Mission →
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#F9FAFB]">
      {/* Header */}
      <div className="bg-white px-4 pt-12 pb-4" style={{ borderBottom: `2px solid ${color}20` }}>
        <div className="flex items-center gap-3 mb-3">
          <button
            onClick={() => cardIndex > 0 ? setCardIndex((i) => i - 1) : router.back()}
            className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
          >
            ←
          </button>
          <div className="flex-1">
            <p className="text-xs text-gray-400">Teaching Script · {topic.icon} {topic.name}</p>
            <p className="font-bold text-gray-900 text-sm">{dayContent.title}</p>
          </div>
          <div
            className="text-xs font-bold px-2 py-1 rounded-full"
            style={{ backgroundColor: `${color}20`, color }}
          >
            {cardIndex + 1}/{cards.length}
          </div>
        </div>

        {/* Card progress dots */}
        <div className="flex gap-2">
          {cards.map((_, i) => (
            <div
              key={i}
              className="h-1.5 flex-1 rounded-full transition-all duration-300"
              style={{
                backgroundColor: i <= cardIndex ? color : "#E5E7EB",
              }}
            />
          ))}
        </div>
      </div>

      {/* Card content */}
      <div className="flex-1 flex flex-col px-4 py-6">
        <div
          key={cardIndex}
          className="flex-1 bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col animate-[fade-in_0.3s_ease-out]"
        >
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
            style={{ backgroundColor: `${color}15` }}
          >
            {topic.icon}
          </div>
          <h3 className="font-black text-xl text-gray-900 mb-4">{currentCard.title}</h3>
          <div className="flex-1 overflow-y-auto">
            <p className="text-gray-700 leading-relaxed whitespace-pre-line text-base">
              {currentCard.content}
            </p>
            {currentCard.tip && (
              <div
                className="mt-4 p-4 rounded-xl flex gap-3"
                style={{ backgroundColor: `${color}10` }}
              >
                <span className="text-xl flex-shrink-0">💡</span>
                <p className="text-sm text-gray-600 leading-relaxed">{currentCard.tip}</p>
              </div>
            )}
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-4 flex gap-3">
          {cardIndex > 0 && (
            <button
              onClick={() => setCardIndex((i) => i - 1)}
              className="flex-1 py-3 rounded-2xl border-2 border-gray-200 font-bold text-gray-600 active:scale-95 transition-transform"
            >
              ← Previous
            </button>
          )}
          <button
            onClick={handleNext}
            className="flex-1 py-4 rounded-2xl font-bold text-lg text-white active:scale-95 transition-transform"
            style={{ backgroundColor: color }}
          >
            {isLast ? "✓ Done with Script!" : "Next →"}
          </button>
        </div>
      </div>

      {/* Reading tip */}
      <div className="px-4 pb-8 text-center">
        <p className="text-xs text-gray-400">
          📖 Read this aloud to {loadState().childProfile?.name || "your child"}.
          Take your time — there's no rush!
        </p>
      </div>
    </div>
  );
}
