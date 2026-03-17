import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function getSubjectColor(subject: string): string {
  const colors: Record<string, string> = {
    math: "#1CB0F6",
    english: "#FF6B6B",
    science: "#58CC02",
  };
  return colors[subject] || "#6B7280";
}

export function getSubjectBg(subject: string): string {
  const colors: Record<string, string> = {
    math: "bg-math/10 border-math/20",
    english: "bg-english/10 border-english/20",
    science: "bg-science/10 border-science/20",
  };
  return colors[subject] || "bg-gray-100 border-gray-200";
}

export function getSubjectText(subject: string): string {
  const colors: Record<string, string> = {
    math: "text-math",
    english: "text-english",
    science: "text-science",
  };
  return colors[subject] || "text-gray-600";
}

export function getSubjectBadge(subject: string): string {
  const badges: Record<string, string> = {
    math: "📐 Math",
    english: "📖 English",
    science: "🔬 Science",
  };
  return badges[subject] || subject;
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-IN", { day: "numeric", month: "short" });
}

export function getTargetDate(startDate: string, days = 5): string {
  const date = new Date(startDate);
  date.setDate(date.getDate() + days - 1);
  return date.toLocaleDateString("en-IN", { day: "numeric", month: "short" });
}

export function getAvatarColor(name: string): string {
  const colors = ["#1CB0F6", "#FF6B6B", "#58CC02", "#F97316", "#8B5CF6", "#EC4899"];
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return colors[Math.abs(hash) % colors.length];
}
