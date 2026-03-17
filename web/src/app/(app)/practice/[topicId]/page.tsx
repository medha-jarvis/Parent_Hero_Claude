"use client";

import { useState, useEffect, useCallback } from "react";
import { useParams, useSearchParams, useRouter } from "next/navigation";
import { loadState, markStepComplete } from "@/lib/store";
import { TOPICS, getTopicContent } from "@/lib/data";
import { getSubjectColor } from "@/lib/utils";
import { PracticeQuestion } from "@/lib/types";

type Phase = "handoff" | "practice" | "result";
type AnswerState = "unanswered" | "correct" | "wrong";

export default function PracticePadPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();
  const topicId = params.topicId as string;
  const day = parseInt(searchParams.get("day") || "1");
  const mode = searchParams.get("mode") || "practice";

  const [phase, setPhase] = useState<Phase>("handoff");
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answerState, setAnswerState] = useState<AnswerState>("unanswered");
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<boolean[]>([]);
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

  const questions: PracticeQuestion[] = dayContent?.practiceQuestions || [];

  const handleAnswer = useCallback(
    (idx: number) => {
      if (answerState !== "unanswered") return;
      setSelected(idx);
      const correct = idx === questions[currentQ].correctIndex;
      setAnswerState(correct ? "correct" : "wrong");
      if (correct) setScore((s) => s + 1);
      setAnswers((a) => [...a, correct]);
    },
    [answerState, currentQ, questions]
  );

  const handleNext = useCallback(() => {
    if (currentQ < questions.length - 1) {
      setCurrentQ((q) => q + 1);
      setSelected(null);
      setAnswerState("unanswered");
    } else {
      // Save progress
      const finalScore = answers.filter(Boolean).length + (answerState === "correct" ? 0 : 0);
      markStepComplete(day, "practiceCompleted", finalScore);
      setPhase("result");
    }
  }, [currentQ, questions.length, answers, answerState, day]);

  if (!topic || questions.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-400">No questions available</p>
      </div>
    );
  }

  // HANDOFF screen
  if (phase === "handoff") {
    return (
      <div
        className="flex flex-col items-center justify-center min-h-screen px-6 text-center"
        style={{ background: `linear-gradient(135deg, ${color}20, white 60%)` }}
      >
        <div className="text-7xl mb-5">🙌</div>
        <h2 className="text-3xl font-black text-gray-900 mb-2">
          Time for {childName}'s turn!
        </h2>
        <p className="text-gray-500 text-lg mb-1">Hand the phone to {childName}.</p>
        <p className="text-sm text-gray-400 mb-10">
          {questions.length} questions · {topic.name}
        </p>

        <div className="w-full max-w-xs space-y-2 mb-10 text-left">
          {[
            "Read each question carefully",
            "Tap your answer",
            "See if you got it right!",
          ].map((tip, i) => (
            <div key={i} className="flex items-center gap-3 bg-white/80 rounded-xl px-4 py-3">
              <div
                className="w-6 h-6 rounded-full text-white text-xs font-bold flex items-center justify-center"
                style={{ backgroundColor: color }}
              >
                {i + 1}
              </div>
              <span className="text-sm text-gray-700">{tip}</span>
            </div>
          ))}
        </div>

        <button
          onClick={() => setPhase("practice")}
          className="w-full max-w-xs py-5 rounded-2xl font-black text-2xl text-white active:scale-95 transition-transform shadow-lg"
          style={{ backgroundColor: color, fontFamily: "Nunito, system-ui, sans-serif" }}
        >
          READY, {childName.toUpperCase()}! ▶
        </button>
      </div>
    );
  }

  // RESULT screen
  if (phase === "result") {
    const pct = Math.round((score / questions.length) * 100);
    const stars = pct >= 80 ? 3 : pct >= 60 ? 2 : 1;
    return (
      <div
        className="flex flex-col items-center justify-center min-h-screen px-6 text-center"
        style={{ background: `linear-gradient(135deg, ${color}15, white)` }}
      >
        <div className="text-7xl mb-4">
          {"⭐".repeat(stars)}
        </div>
        <h2 className="text-3xl font-black text-gray-900 mb-2 font-kid">
          {pct >= 80 ? "Amazing! 🎉" : pct >= 60 ? "Good job! 👍" : "Keep practicing! 💪"}
        </h2>
        <p className="text-xl font-bold text-gray-600 mb-1 font-kid">
          {score} out of {questions.length} correct
        </p>
        <p className="text-gray-400 text-sm mb-8">+30 XP earned!</p>

        {/* Question review */}
        <div className="w-full max-w-xs space-y-2 mb-8 text-left">
          {answers.map((correct, i) => (
            <div
              key={i}
              className="flex items-center gap-2 bg-white rounded-xl px-3 py-2 text-sm"
            >
              <span>{correct ? "✅" : "❌"}</span>
              <span className="text-gray-600 text-xs flex-1 truncate">
                Q{i + 1}: {questions[i]?.question.slice(0, 40)}...
              </span>
            </div>
          ))}
        </div>

        <div className="w-full max-w-xs space-y-3">
          <button
            onClick={() => {
              setPhase("handoff");
              setCurrentQ(0);
              setSelected(null);
              setAnswerState("unanswered");
              setScore(0);
              setAnswers([]);
            }}
            className="w-full py-3 rounded-2xl border-2 font-bold text-base active:scale-95 transition-transform"
            style={{ borderColor: color, color }}
          >
            Play Again
          </button>
          <button
            onClick={() => router.push(`/campaign/${topicId}/${day}`)}
            className="w-full py-4 rounded-2xl font-bold text-lg text-white active:scale-95 transition-transform"
            style={{ backgroundColor: color }}
          >
            Give Phone to Parent →
          </button>
        </div>
      </div>
    );
  }

  // PRACTICE screen
  const q = questions[currentQ];
  const progress = ((currentQ + (answerState !== "unanswered" ? 1 : 0)) / questions.length) * 100;

  return (
    <div className="flex flex-col min-h-screen bg-white" style={{ fontFamily: "Nunito, system-ui, sans-serif" }}>
      {/* Kid Mode Banner */}
      <div
        className="px-4 py-3 flex items-center justify-center gap-2"
        style={{ backgroundColor: color }}
      >
        <span className="text-lg">🧒</span>
        <span className="text-white font-black text-sm tracking-wide uppercase">
          {childName}'s Turn
        </span>
      </div>

      {/* Progress */}
      <div className="px-4 pt-4 pb-2">
        <div className="flex justify-between items-center mb-2">
          <span className="text-base font-black text-gray-900">
            {topic.icon} {topic.name}
          </span>
          <span className="text-sm font-bold text-gray-400">
            {currentQ + 1} / {questions.length}
          </span>
        </div>
        <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{ width: `${progress}%`, backgroundColor: color }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="flex-1 flex flex-col px-4 py-4">
        <div
          className="bg-gray-50 rounded-2xl p-5 mb-5"
          style={{ borderLeft: `4px solid ${color}` }}
        >
          <p className="text-xl font-black text-gray-900 leading-tight">
            {q.question}
          </p>
        </div>

        {/* Options */}
        <div className="space-y-3 flex-1">
          {q.options.map((option, i) => {
            let bgColor = "white";
            let borderColor = "#E5E7EB";
            let textColor = "#111827";

            if (answerState !== "unanswered") {
              if (i === q.correctIndex) {
                bgColor = "#F0FFF4";
                borderColor = "#22C55E";
                textColor = "#166534";
              } else if (i === selected && selected !== q.correctIndex) {
                bgColor = "#FEF2F2";
                borderColor = "#EF4444";
                textColor = "#991B1B";
              }
            }

            return (
              <button
                key={i}
                onClick={() => handleAnswer(i)}
                disabled={answerState !== "unanswered"}
                className="w-full text-left px-5 py-4 rounded-2xl border-2 font-bold text-base transition-all active:scale-95"
                style={{ backgroundColor: bgColor, borderColor, color: textColor }}
              >
                <span className="mr-3">
                  {answerState !== "unanswered"
                    ? i === q.correctIndex
                      ? "✅"
                      : i === selected
                      ? "❌"
                      : "○"
                    : ["A", "B", "C", "D"][i]}
                </span>
                {option}
              </button>
            );
          })}
        </div>

        {/* Explanation */}
        {answerState !== "unanswered" && (
          <div
            className="mt-4 p-4 rounded-2xl"
            style={{
              backgroundColor: answerState === "correct" ? "#F0FFF4" : "#FEF2F2",
            }}
          >
            <p className="font-bold text-sm mb-1">
              {answerState === "correct" ? "✅ Correct!" : "❌ Not quite!"}
            </p>
            <p className="text-sm text-gray-600">{q.explanation}</p>
          </div>
        )}

        {answerState !== "unanswered" && (
          <button
            onClick={handleNext}
            className="mt-4 w-full py-4 rounded-2xl font-black text-xl text-white active:scale-95 transition-transform"
            style={{ backgroundColor: color }}
          >
            {currentQ < questions.length - 1 ? "Next →" : "See Results! 🎉"}
          </button>
        )}
      </div>
    </div>
  );
}
