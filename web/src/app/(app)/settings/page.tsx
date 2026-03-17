"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { loadState, resetAll, setChildProfile } from "@/lib/store";
import { AppState, Grade, Board } from "@/lib/types";
import { getAvatarColor } from "@/lib/utils";

export default function SettingsPage() {
  const router = useRouter();
  const [state, setState] = useState<AppState | null>(null);
  const [showReset, setShowReset] = useState(false);
  const [editChild, setEditChild] = useState(false);
  const [name, setName] = useState("");
  const [grade, setGrade] = useState<Grade | null>(null);
  const [board, setBoard] = useState<Board | null>(null);

  useEffect(() => {
    const s = loadState();
    if (!s.onboardingComplete) {
      router.replace("/onboarding");
      return;
    }
    setState(s);
    if (s.childProfile) {
      setName(s.childProfile.name);
      setGrade(s.childProfile.grade);
      setBoard(s.childProfile.board);
    }
  }, [router]);

  if (!state || !state.childProfile) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-3xl animate-pulse">⚙️</div>
      </div>
    );
  }

  const { childProfile, xp, streak, masteredTopics } = state;

  function handleSaveChild() {
    if (!name.trim() || !grade || !board) return;
    setChildProfile({
      id: childProfile.id,
      name: name.trim(),
      grade,
      board,
      avatarColor: getAvatarColor(name.trim()),
    });
    setState(loadState());
    setEditChild(false);
  }

  function handleReset() {
    resetAll();
    router.replace("/onboarding");
  }

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Header */}
      <div className="bg-white px-4 pt-12 pb-5">
        <h1 className="text-2xl font-black text-gray-900">⚙️ Settings</h1>
      </div>

      <div className="px-4 py-4 space-y-4">
        {/* Child Profile */}
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-black text-gray-900">👧 Child Profile</h3>
            <button
              onClick={() => setEditChild(!editChild)}
              className="text-[#1CB0F6] text-sm font-bold"
            >
              {editChild ? "Cancel" : "Edit"}
            </button>
          </div>

          {editChild ? (
            <div className="space-y-4">
              <div>
                <label className="text-xs font-bold text-gray-500 block mb-1">Name</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border-2 border-gray-200 rounded-xl px-3 py-2 text-base focus:outline-none focus:border-[#1CB0F6]"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-500 block mb-1">Grade</label>
                <div className="flex gap-2">
                  {([1, 2, 3, 4, 5] as Grade[]).map((g) => (
                    <button
                      key={g}
                      onClick={() => setGrade(g)}
                      className="flex-1 py-2 rounded-xl border-2 font-bold text-sm transition-all"
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
              <div>
                <label className="text-xs font-bold text-gray-500 block mb-1">Board</label>
                <div className="grid grid-cols-2 gap-2">
                  {(["CBSE", "ICSE", "Common Core", "Other"] as Board[]).map((b) => (
                    <button
                      key={b}
                      onClick={() => setBoard(b)}
                      className="py-2 rounded-xl border-2 font-semibold text-sm transition-all"
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
              <button
                onClick={handleSaveChild}
                className="w-full py-3 rounded-xl bg-[#1CB0F6] text-white font-bold"
              >
                Save Changes
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-white text-2xl font-black"
                style={{ backgroundColor: childProfile.avatarColor }}
              >
                {childProfile.name.charAt(0).toUpperCase()}
              </div>
              <div>
                <p className="font-black text-xl text-gray-900">{childProfile.name}</p>
                <p className="text-sm text-gray-400">Grade {childProfile.grade} · {childProfile.board}</p>
              </div>
            </div>
          )}
        </div>

        {/* Stats */}
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <h3 className="font-black text-gray-900 mb-3">📈 Your Stats</h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: "⭐", label: "Total XP", value: xp },
              { icon: "🔥", label: "Best Streak", value: `${streak.count} days` },
              { icon: "🏆", label: "Topics Mastered", value: masteredTopics.length },
            ].map((s) => (
              <div key={s.label} className="bg-gray-50 rounded-xl p-3">
                <p className="text-lg mb-1">{s.icon}</p>
                <p className="font-black text-gray-900">{s.value}</p>
                <p className="text-xs text-gray-400">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* About */}
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <h3 className="font-black text-gray-900 mb-3">ℹ️ About</h3>
          <div className="space-y-2 text-sm text-gray-600">
            <p>ParentHero v0.1</p>
            <p className="text-gray-400">
              Helping parents become their child's school superhero. Follow your school's curriculum with ready-made scripts, practice tools, and certificates.
            </p>
          </div>
        </div>

        {/* Danger zone */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-red-100">
          <h3 className="font-black text-red-600 mb-3">⚠️ Danger Zone</h3>
          {!showReset ? (
            <button
              onClick={() => setShowReset(true)}
              className="w-full py-3 rounded-xl border-2 border-red-200 text-red-600 font-bold text-sm"
            >
              Reset All Data
            </button>
          ) : (
            <div>
              <p className="text-sm text-gray-600 mb-3">
                This will delete all progress, campaigns, and streak data. This cannot be undone.
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => setShowReset(false)}
                  className="flex-1 py-2.5 rounded-xl border-2 border-gray-200 text-gray-600 font-bold text-sm"
                >
                  Cancel
                </button>
                <button
                  onClick={handleReset}
                  className="flex-1 py-2.5 rounded-xl bg-red-500 text-white font-bold text-sm"
                >
                  Yes, Reset
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
