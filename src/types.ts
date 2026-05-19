export type TopicStatus = "hot" | "active" | "moderate" | "low" | "dormant";
export type Priority = "critical" | "high" | "moderate" | "medium" | "low" | "done";

export interface Snapshot {
  timestamp: string;
  date: string;
  kpis: {
    groupMembers: number;
    channelSubscribers: number;
    crossPlatformReach: number;
    adminsCount: number;
  };
  topics: Topic[];
  keywords: Record<string, number>;
  admins: Admin[];
  unansweredQuestions: UnansweredQuestion[];
  messagesSampled: number;
}

export interface Topic {
  id: number;
  name: string;
  nameEn: string;
  lastActive: string;
  status: TopicStatus;
}

export interface Admin {
  name: string;
  username: string | null;
  status: string;
  isBot: boolean;
}

export interface UnansweredQuestion {
  id: number;
  text: string;
  sender: string;
  topic: string;
  date: string;
  hoursUnanswered: number;
}

export interface HistoryEntry {
  timestamp: string;
  date: string;
  kpis: {
    groupMembers: number;
    channelSubscribers: number;
    crossPlatformReach: number;
    adminsCount: number;
  };
  keywords: Record<string, number>;
  messagesSampled: number;
}
