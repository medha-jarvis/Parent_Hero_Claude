"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { setChildProfile, startCampaign } from "@/lib/store";
import { TOPICS } from "@/lib/data";
import { Grade, Board, ChildProfile } from "@/lib/types";
import { getAvatarColor, getSubjectColor } from "@/lib/utils";

type Step = "splash" | "value" | "profile" | "topic" | "kickoff";

export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState<Step>("splash");
  const [childName, setChildName] = useState("");
  const [grade, setGrade] = useState<Grade | null>(null);
  const [board, setBoard] = useState<Board | null>(null);
  const [selectedTopicId, setSelectedTopicId] = useState<string | null>(null);
  const [activeSubject, setActiveSubject] = useState<"math" | "english" | "science">("math");

  // Auto-advance splash
  if (step === "splash") {
    setTimeout(() => setStep("value"), 2000);
  }

  const childId = "child-1";

  function handleFinish() {
    if (!childName || !grade || !board || !selectedTopicId) return;
    const avatarColor = getAvatarColor(childName);
    const profile: ChildProfile = {
      id: childId,
      name: childName,
      grade,
      board,
      avatarColor,
    };
    setChildProfile(profile);
    startCampaign(selectedTopicId, childId);
    router.push("/dashboard");
  }

  const filteredTopics = TOPICS.filter(
    (t) =>
      t.subject === activeSubject &&
      (grade ? t.grades.includes(grade) : true) &&
      (board ? t.boards.includes(board) : true)
  );

  if (step === "splash") {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#1CB0F6] to-[#0E8FC1] text-white px-6">
        <div className="text-8xl mb-6 animate-bounce">🦸</div>
        <h1 className="text-4xl font-bold mb-2">ParentHero</h1>
        <p className="text-white/80 text-lg text-center">Your child's school superhero</p>
        <div className="mt-12 flex gap-1">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-white/40"
              style={{ animation: `pulse 1s ${i * 0.3}s infinite` }}
            />
          ))}
        </div>
      </div>
    );
  }

  if (step === "value") {
    return (
      <div className="flex flex-col min-h-screen bg-white px-6 py-12">
        <div className="flex-1 flex flex-col justify-center">
          <div className="text-5xl mb-6 text-center">🦸</div>
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">
            You're the hero.
          </h2>
          <p className="text-gray-500 text-center mb-10">
            We give you the superpowers.
          </p>
          <div className="space-y-4">
            {[
              { icon: "🎯", title: "Follows your school's curriculum", desc: "We work with what your child is learning, not against it." },
              { icon: "📜", title: "Ready-made teaching scripts", desc: "Just read the script — we've done all the lesson planning for you." },
              { icon: "🏆", title: "Certificates your child will love", desc: "Print certificates and fridge art to celebrate every win." },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 p-4 bg-gray-50 rounded-2xl">
                <div className="text-3xl">{item.icon}</div>
                <div>
                  <p className="font-semibold text-gray-900">{item.title}</p>
                  <p className="text-sm text-gray-500 mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={() => setStep("profile")}
          className="w-full bg-[#1CB0F6] text-white font-bold text-lg py-4 rounded-2xl mt-8 active:scale-95 transition-transform"
        >
          Get Started →
        </button>
      </div>
    );
  }

  if (step === "profile") {
    const isValid = childName.trim().length > 0 && grade && board;
    return (
      <div className="flex flex-col min-h-screen bg-white px-6 pt-12 pb-8">
        <div className="mb-8">
          <div className="flex gap-1 mb-6">
            {["profile", "topic", "kickoff"].map((s, i) => (
              <div
                key={s}
                className="h-1 flex-1 rounded-full"
                style={{ backgroundColor: i === 0 ? "#1CB0F6" : "#E5E7EB" }}
              />
            ))}
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Set up your child's profile</h2>
          <p className="text-gray-500 mt-1">This takes about 30 seconds.</p>
        </div>

        <div className="flex-1 space-y-6">
          {/* Child Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Child's name (or nickname)
            </label>
            <input
              type="text"
              value={childName}
              onChange={(e) => setChildName(e.target.value)}
              placeholder="e.g. Ira, Dev, Sam"
              className="w-full border-2 border-gray-200 rounded-2xl px-4 py-3 text-lg focus:outline-none focus:border-[#1CB0F6] transition-colors"
            />
          </div>

          {/* Grade */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Grade</label>
            <div className="grid grid-cols-5 gap-2">
              {([1, 2, 3, 4, 5] as Grade[]).map((g) => (
                <button
                  key={g}
                  onClick={() => setGrade(g)}
                  className="py-3 rounded-2xl border-2 font-bold text-lg transition-all active:scale-95"
                  style={{
                    borderColor: grade === g ? "#1CB0F6" : "#E5E7EB",
                    backgroundColor: grade === g ? "#EFF9FF" : "white",
                    color: grade === g ? "#1CB0F6" : "#6B7280",
                  }}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>

          {/* Board */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Curriculum / Board
            </label>
            <div className="grid grid-cols-2 gap-2">
              {(["CBSE", "ICSE", "Common Core", "Other"] as Board[]).map((b) => (
                <button
                  key={b}
                  onClick={() => setBoard(b)}
                  className="py-3 px-4 rounded-2xl border-2 font-semibold text-sm transition-all active:scale-95"
                  style={{
                    borderColor: board === b ? "#1CB0F6" : "#E5E7EB",
                    backgroundColor: board === b ? "#EFF9FF" : "white",
                    color: board === b ? "#1CB0F6" : "#6B7280",
                  }}
                >
                  {b}
                </button>
              ))}
            </div>
          </div>
        </div>

        <button
          onClick={() => setStep("topic")}
          disabled={!isValid}
          className="w-full font-bold text-lg py-4 rounded-2xl mt-8 transition-all active:scale-95 disabled:opacity-50"
          style={{
            backgroundColor: isValid ? "#1CB0F6" : "#E5E7EB",
            color: isValid ? "white" : "#9CA3AF",
          }}
        >
          Continue →
        </button>
      </div>
    );
  }

  if (step === "topic") {
    return (
      <div className="flex flex-col min-h-screen bg-white px-6 pt-12 pb-8">
        <div className="mb-6">
          <div className="flex gap-1 mb-6">
            {["profile", "topic", "kickoff"].map((s, i) => (
              <div
                key={s}
                className="h-1 flex-1 rounded-full"
                style={{ backgroundColor: i <= 1 ? "#1CB0F6" : "#E5E7EB" }}
              />
            ))}
          </div>
          <h2 className="text-2xl font-bold text-gray-900">
            What is {childName} learning?
          </h2>
          <p className="text-gray-500 mt-1 text-sm">
            Pick a topic to start a 5-Day Campaign.
          </p>
        </div>

        {/* Subject tabs */}
        <div className="flex gap-2 mb-4">
          {(["math", "english", "science"] as const).map((s) => (
            <button
              key={s}
              onClick={() => setActiveSubject(s)}
              className="px-4 py-2 rounded-full font-semibold text-sm transition-all"
              style={{
                backgroundColor: activeSubject === s ? getSubjectColor(s) : "#F3F4F6",
                color: activeSubject === s ? "white" : "#6B7280",
              }}
            >
              {s === "math" ? "📐" : s === "english" ? "📖" : "🔬"} {s.charAt(0).toUpperCase() + s.slice(1)}
            </button>
          ))}
        </div>

        {/* Topic grid */}
        <div className="flex-1 overflow-y-auto">
          {filteredTopics.length === 0 ? (
            <div className="text-center py-12 text-gray-400">
              <p className="text-4xl mb-3">📚</p>
              <p>No topics found for this grade.</p>
              <p className="text-sm mt-1">Try a different subject or grade.</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3 pb-4">
              {filteredTopics.map((topic) => {
                const color = getSubjectColor(topic.subject);
                const isSelected = selectedTopicId === topic.id;
                return (
                  <button
                    key={topic.id}
                    onClick={() => setSelectedTopicId(topic.id)}
                    className="p-4 rounded-2xl border-2 text-left transition-all active:scale-95"
                    style={{
                      borderColor: isSelected ? color : "#E5E7EB",
                      backgroundColor: isSelected ? `${color}15` : "white",
                    }}
                  >
                    <div className="text-3xl mb-2">{topic.icon}</div>
                    <p className="font-bold text-gray-900 text-sm">{topic.name}</p>
                    <p className="text-xs text-gray-400 mt-1">{topic.familyCount} families</p>
                    {isSelected && (
                      <div
                        className="mt-2 text-xs font-bold px-2 py-0.5 rounded-full inline-block"
                        style={{ backgroundColor: color, color: "white" }}
                      >
                        ✓ Selected
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        <button
          onClick={() => setStep("kickoff")}
          disabled={!selectedTopicId}
          className="w-full font-bold text-lg py-4 rounded-2xl mt-4 transition-all active:scale-95 disabled:opacity-50"
          style={{
            backgroundColor: selectedTopicId ? "#1CB0F6" : "#E5E7EB",
            color: selectedTopicId ? "white" : "#9CA3AF",
          }}
        >
          Start 5-Day Campaign →
        </button>
      </div>
    );
  }

  if (step === "kickoff") {
    const topic = TOPICS.find((t) => t.id === selectedTopicId);
    const color = topic ? getSubjectColor(topic.subject) : "#1CB0F6";
    return (
      <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center"
        style={{ background: `linear-gradient(135deg, ${color}20 0%, white 50%)` }}
      >
        <div className="text-7xl mb-4">{topic?.icon || "🎯"}</div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Your 5-Day Campaign for
        </h2>
        <h1 className="text-4xl font-black mb-4" style={{ color }}>
          {topic?.name}
        </h1>
        <p className="text-gray-500 mb-2">begins now!</p>
        <p className="text-sm text-gray-400 mb-10">
          {childName} will master this topic in just 15 minutes a day.
        </p>

        <div className="w-full max-w-xs space-y-3 mb-10">
          {["Day 1 · What is it?", "Day 2 · Key concepts", "Day 3 · Making amounts", "Day 4 · Challenges", "Day 5 · Mastery quiz 🏆"].map(
            (day, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-sm"
              >
                <div
                  className="w-7 h-7 rounded-full text-white text-xs font-bold flex items-center justify-center"
                  style={{ backgroundColor: i === 0 ? color : "#E5E7EB", color: i === 0 ? "white" : "#9CA3AF" }}
                >
                  {i + 1}
                </div>
                <span className={`text-sm font-medium ${i === 0 ? "text-gray-900" : "text-gray-400"}`}>
                  {day}
                </span>
              </div>
            )
          )}
        </div>

        <button
          onClick={handleFinish}
          className="w-full font-bold text-xl py-5 rounded-2xl text-white active:scale-95 transition-transform shadow-lg"
          style={{ backgroundColor: color }}
        >
          START DAY 1 MISSION ▶
        </button>
      </div>
    );
  }

  return null;
}
