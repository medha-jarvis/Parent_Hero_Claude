"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { loadState } from "@/lib/store";

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    const state = loadState();
    if (state.onboardingComplete) {
      router.replace("/dashboard");
    } else {
      router.replace("/onboarding");
    }
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F9FAFB]">
      <div className="text-center">
        <div className="text-5xl mb-3 animate-pulse">🦸</div>
        <p className="text-gray-400 text-sm">Loading ParentHero...</p>
      </div>
    </div>
  );
}
