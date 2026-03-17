"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { loadState, markStepComplete } from "@/lib/store";
import { TOPICS, getTopicContent } from "@/lib/data";
import { getSubjectColor } from "@/lib/utils";
import { PracticeQuestion } from "@/lib/types";

type Phase = "intro" | "quiz" | "result";

export default function QuizPage() {
  const params = useParams();
  const router = useRouter();
  const topicId = params.topicId as string;
  const day = parseInt(params.day as string);

  const [phase, setPhase] = useState<Phase>("intro");
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [childName, setChildName] = useState("your child");

  useEffect(() => {
    const s = loadState();
    if (!s.onboardingComplete) {
      router.replace("/onboarding");
      return;
    }
    if (s.childProfile) setChildName(s.childProfile.name);
  }, [router]);

  const topic = TOPICS.find((t) => t.id === topicId);
  const dayContent = getTopicContent(topicId, day);
  const color = topic ? getSubjectColor(topic.subject) : "#1CB0F6";
  const questions: PracticeQuestion[] = dayContent?.quizQuestions || [];

  const isLastDay = day === 5;

  if (!topic || questions.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-400">Quiz not available</p>
      </div>
    );
  }

  function handleAnswer(idx: number) {
    if (answered) return;
    setSelected(idx);
    setAnswered(true);
    if (idx === questions[currentQ].correctIndex) setScore((s) => s + 1);
  }

  function handleNext() {
    if (currentQ < questions.length - 1) {
      setCurrentQ((q) => q + 1);
      setSelected(null);
      setAnswered(false);
    } else {
      const finalScore = score + (selected === questions[currentQ].correctIndex && !answered ? 0 : 0);
      markStepComplete(day, "quizCompleted");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      markStepComplete(day, "quizScore" as any, score);
      setPhase("result");
    }
  }

  // Intro screen
  if (phase === "intro") {
    return (
      <div
        className="flex flex-col items-center justify-center min-h-screen px-6 text-center"
        style={{ background: `linear-gradient(135deg, ${color}15, white)` }}
      >
        <div className="text-6xl mb-4">{isLastDay ? "🏆" : "🎯"}</div>
        <h2 className="text-3xl font-black text-gray-900 mb-2">
          {isLastDay ? "Legend Quiz!" : `Day ${day} Quiz`}
        </h2>
        <p className="text-gray-500 mb-1">
          {isLastDay
            ? "Final mastery challenge for " + topic.name
            : `Test what you learned today about ${topic.name}`}
        </p>
        <div
          className="mt-6 mb-8 px-5 py-3 rounded-2xl font-bold"
          style={{ backgroundColor: `${color}15`, color }}
        >
          {questions.length} questions · 1 point each
        </div>
        <div className="w-full max-w-xs space-y-2 mb-8 text-left">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Rules:</p>
          {[
            "Read each question carefully",
            "No time pressure — think it through",
            `Pass with ${Math.ceil(questions.length * 0.6)}+ correct to advance`,
          ].map((rule, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
              <span style={{ color }}>•</span> {rule}
            </div>
          ))}
        </div>
        <button
          onClick={() => setPhase("quiz")}
          className="w-full max-w-xs py-4 rounded-2xl font-bold text-lg text-white active:scale-95 transition-transform"
          style={{ backgroundColor: color }}
        >
          Start Quiz ▶
        </button>
        <button
          onClick={() => router.push(`/campaign/${topicId}/${day}`)}
          className="mt-3 text-gray-400 text-sm underline"
        >
          Back to Campaign
        </button>
      </div>
    );
  }

  // Result screen
  if (phase === "result") {
    const pct = Math.round((score / questions.length) * 100);
    const passed = pct >= 60;
    const isMastered = day === 5 && passed;

    return (
      <div
        className="flex flex-col items-center justify-center min-h-screen px-6 text-center"
        style={{ background: `linear-gradient(135deg, ${color}15, white)` }}
      >
        {isMastered ? (
          <>
            <div className="text-7xl mb-4">🏆</div>
            <h2 className="text-4xl font-black text-gray-900 mb-2">
              {childName} MASTERED
            </h2>
            <h1 className="text-4xl font-black mb-1" style={{ color }}>
              {topic.name}!
            </h1>
            <div className="flex items-center justify-center gap-1 text-2xl mt-2 mb-4">
              🌟🌟🌟
            </div>
          </>
        ) : (
          <>
            <div className="text-6xl mb-4">
              {pct >= 80 ? "🌟" : pct >= 60 ? "👍" : "💪"}
            </div>
            <h2 className="text-3xl font-black text-gray-900 mb-2">
              {pct >= 80 ? "Excellent!" : pct >= 60 ? "Well done!" : "Almost there!"}
            </h2>
          </>
        )}

        <div
          className="w-24 h-24 rounded-full flex items-center justify-center mb-4 mt-2"
          style={{
            backgroundColor: passed ? "#F0FFF4" : "#FEF2F2",
            border: `4px solid ${passed ? "#22C55E" : "#EF4444"}`,
          }}
        >
          <div className="text-center">
            <p className="text-2xl font-black" style={{ color: passed ? "#166534" : "#991B1B" }}>
              {score}/{questions.length}
            </p>
            <p className="text-xs font-bold" style={{ color: passed ? "#166534" : "#991B1B" }}>
              {pct}%
            </p>
          </div>
        </div>

        <p className="text-gray-500 mb-2">+40 XP earned!</p>

        {isMastered && (
          <div
            className="my-4 px-6 py-4 rounded-2xl text-center"
            style={{ backgroundColor: `${color}15` }}
          >
            <p className="font-bold text-gray-900">🎓 Certificate earned!</p>
            <p className="text-sm text-gray-500 mt-1">
              You've completed the 5-Day {topic.name} Campaign!
            </p>
          </div>
        )}

        <div className="w-full max-w-xs space-y-3 mt-4">
          {!passed && (
            <button
              onClick={() => {
                setPhase("intro");
                setCurrentQ(0);
                setSelected(null);
                setAnswered(false);
                setScore(0);
              }}
              className="w-full py-3 rounded-2xl border-2 font-bold text-sm active:scale-95 transition-transform"
              style={{ borderColor: color, color }}
            >
              Try Again
            </button>
          )}
          <button
            onClick={() => router.push(`/campaign/${topicId}/${day}`)}
            className="w-full py-4 rounded-2xl font-bold text-lg text-white active:scale-95 transition-transform"
            style={{ backgroundColor: color }}
          >
            {isMastered ? "View Campaign →" : "Back to Campaign →"}
          </button>
          {isMastered && (
            <button
              onClick={() => router.push("/dashboard")}
              className="w-full py-3 rounded-2xl border-2 border-gray-200 font-bold text-sm text-gray-600 active:scale-95 transition-transform"
            >
              🏠 Go to Dashboard
            </button>
          )}
        </div>
      </div>
    );
  }

  // Quiz screen
  const q = questions[currentQ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <div
        className="px-4 pt-12 pb-4"
        style={{ borderBottom: `3px solid ${color}30` }}
      >
        <div className="flex items-center gap-3 mb-3">
          <button
            onClick={() => router.push(`/campaign/${topicId}/${day}`)}
            className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100"
          >
            ←
          </button>
          <div className="flex-1">
            <p className="text-xs text-gray-400">
              {isLastDay ? "🏆 Legend Quiz" : `Day ${day} Quiz`} · {topic.icon} {topic.name}
            </p>
          </div>
          <span className="font-bold text-sm" style={{ color }}>
            {currentQ + 1} / {questions.length}
          </span>
        </div>
        <div className="flex gap-1.5">
          {questions.map((_, i) => (
            <div
              key={i}
              className="h-2 flex-1 rounded-full transition-all"
              style={{
                backgroundColor: i < currentQ ? color : i === currentQ ? `${color}80` : "#E5E7EB",
              }}
            />
          ))}
        </div>
      </div>

      {/* Question */}
      <div className="flex-1 flex flex-col px-4 py-6">
        <div
          className="bg-gray-50 rounded-2xl p-5 mb-5"
          style={{ borderLeft: `4px solid ${color}` }}
        >
          <p className="text-lg font-black text-gray-900 leading-tight">{q.question}</p>
        </div>

        <div className="space-y-3">
          {q.options.map((option, i) => {
            let bg = "white";
            let border = "#E5E7EB";
            let text = "#111827";

            if (answered) {
              if (i === q.correctIndex) {
                bg = "#F0FFF4";
                border = "#22C55E";
                text = "#166534";
              } else if (i === selected && selected !== q.correctIndex) {
                bg = "#FEF2F2";
                border = "#EF4444";
                text = "#991B1B";
              }
            }

            return (
              <button
                key={i}
                onClick={() => handleAnswer(i)}
                disabled={answered}
                className="w-full text-left px-5 py-4 rounded-2xl border-2 font-bold text-base transition-all active:scale-95"
                style={{ backgroundColor: bg, borderColor: border, color: text }}
              >
                <span className="mr-3 font-black">
                  {answered ? (i === q.correctIndex ? "✅" : i === selected ? "❌" : ["A","B","C","D"][i]) : ["A","B","C","D"][i]}
                </span>
                {option}
              </button>
            );
          })}
        </div>

        {answered && (
          <>
            <div
              className="mt-4 p-4 rounded-2xl"
              style={{
                backgroundColor: selected === q.correctIndex ? "#F0FFF4" : "#FEF2F2",
              }}
            >
              <p className="font-bold text-sm mb-1">
                {selected === q.correctIndex ? "✅ Correct!" : "❌ Incorrect"}
              </p>
              <p className="text-sm text-gray-600">{q.explanation}</p>
            </div>
            <button
              onClick={handleNext}
              className="mt-4 w-full py-4 rounded-2xl font-bold text-lg text-white active:scale-95 transition-transform"
              style={{ backgroundColor: color }}
            >
              {currentQ < questions.length - 1 ? "Next Question →" : "See Results 🎯"}
            </button>
          </>
        )}
      </div>
    </div>
  );
}
