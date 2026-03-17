export type Grade = 1 | 2 | 3 | 4 | 5;
export type Board = "CBSE" | "ICSE" | "Common Core" | "Other";
export type Subject = "math" | "english" | "science";

export interface ChildProfile {
  id: string;
  name: string;
  grade: Grade;
  board: Board;
  avatarColor: string;
}

export interface Topic {
  id: string;
  name: string;
  subject: Subject;
  grades: Grade[];
  boards: Board[];
  icon: string;
  description: string;
  familyCount: number;
  typicalMonth: number; // 0-11 (academic month, 0 = April for India)
}

export interface ScriptCard {
  id: string;
  title: string;
  content: string;
  tip?: string;
}

export interface PracticeQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface DayContent {
  day: number;
  title: string;
  riddle: { question: string; answer: string };
  scriptCards: ScriptCard[];
  practiceQuestions: PracticeQuestion[];
  quizQuestions: PracticeQuestion[];
}

export interface DayProgress {
  scriptCompleted: boolean;
  riddleCompleted: boolean;
  practiceCompleted: boolean;
  quizCompleted: boolean;
  practiceScore?: number;
  quizScore?: number;
}

export interface Campaign {
  topicId: string;
  childId: string;
  startDate: string;
  currentDay: number;
  dayProgress: Record<number, DayProgress>;
  completed: boolean;
}

export interface AppState {
  childProfile: ChildProfile | null;
  activeCampaign: Campaign | null;
  masteredTopics: string[];
  streak: { count: number; lastActivityDate: string };
  xp: number;
  onboardingComplete: boolean;
}
