export const kpis = {
  groupMembers: 17407,
  channelSubscribers: 7149,
  crossPlatformReach: "53K+",
  recentGrowth: 26,
  youtubeEpisodes: 200,
  youtubeViews: "349K+",
  hoursWatched: "69K+",
  admins: 7,
};

export const topicActivity = [
  { name: "VPN / AI Access", messages: 95, lastActive: "2026-05-17", status: "hot" as const },
  { name: "General", messages: 92, lastActive: "2026-05-17", status: "active" as const },
  { name: "Job Openings", messages: 85, lastActive: "2026-05-17", status: "active" as const },
  { name: "Resume", messages: 78, lastActive: "2026-05-17", status: "active" as const },
  { name: "Language", messages: 45, lastActive: "2026-05-17", status: "moderate" as const },
  { name: "Technical", messages: 30, lastActive: "2026-05-16", status: "moderate" as const },
  { name: "Announcements", messages: 20, lastActive: "2026-05-15", status: "low" as const },
  { name: "Interview", messages: 12, lastActive: "2026-05-08", status: "dormant" as const },
  { name: "Suggestions", messages: 8, lastActive: "2026-04-30", status: "dormant" as const },
];

export const painPoints = [
  { category: "Access to AI Tools", percentage: 35, urgency: "critical" as const, frequency: "Daily" },
  { category: "Resume/CV Quality", percentage: 25, urgency: "high" as const, frequency: "3-4x/week" },
  { category: "Job Market Competition", percentage: 20, urgency: "high" as const, frequency: "2-3x/week" },
  { category: "Immigration Process", percentage: 12, urgency: "moderate" as const, frequency: "Weekly" },
  { category: "Language Proficiency", percentage: 8, urgency: "moderate" as const, frequency: "Weekly" },
];

export const detailedChallenges = [
  { challenge: "Accessing Claude/Cursor/ChatGPT from Iran", urgency: "critical" as const, frequency: "Daily", topic: "VPN" },
  { challenge: "Writing ATS-friendly CVs for EU market", urgency: "high" as const, frequency: "3-4x/week", topic: "Resume" },
  { challenge: "Finding visa-sponsoring employers", urgency: "high" as const, frequency: "2-3x/week", topic: "Job Openings" },
  { challenge: "Senior-biased market in 2026", urgency: "moderate" as const, frequency: "Weekly", topic: "General" },
  { challenge: "Rejection due to nationality/location", urgency: "critical" as const, frequency: "Weekly", topic: "General" },
  { challenge: "AI-based interview screening", urgency: "moderate" as const, frequency: "Bi-weekly", topic: "Interview" },
  { challenge: "Iran IP for banking from abroad", urgency: "moderate" as const, frequency: "Weekly", topic: "VPN" },
  { challenge: "Choosing stepping-stone country (Armenia/Turkey)", urgency: "moderate" as const, frequency: "Bi-weekly", topic: "General" },
];

export const weeklyEngagement = [
  { day: "Mon", messages: 45, uniqueSenders: 20 },
  { day: "Tue", messages: 55, uniqueSenders: 25 },
  { day: "Wed", messages: 50, uniqueSenders: 22 },
  { day: "Thu", messages: 60, uniqueSenders: 28 },
  { day: "Fri", messages: 40, uniqueSenders: 18 },
  { day: "Sat", messages: 70, uniqueSenders: 32 },
  { day: "Sun", messages: 85, uniqueSenders: 38 },
];

export const contentPerformance = [
  { type: "Curated resource lists", engagement: "very-high" as const, example: "10 remote job platforms post", insight: "Actionable lists get saved and forwarded" },
  { type: "AI prompt templates", engagement: "very-high" as const, example: "CV review prompt by Kaaveh", insight: "Members want tools, not just advice" },
  { type: "Weekly Google Meet sessions", engagement: "very-high" as const, example: "Resume review + AI chat + demos", insight: "Unrecorded = safe space, builds trust" },
  { type: "Live YouTube with guests", engagement: "high" as const, example: "PhD-to-industry transition", insight: "Authority content, good for reach" },
  { type: "Job postings", engagement: "high" as const, example: "TradingView Android Team Lead", insight: "Direct value but needs curation" },
  { type: "Technical solutions", engagement: "moderate" as const, example: "GitHub relay VPN projects", insight: "Urgent need but off-brand risk" },
];

export const platformDistribution = [
  { platform: "Telegram Group", value: 17407, color: "#3b82f6" },
  { platform: "Telegram Channel", value: 7149, color: "#6366f1" },
  { platform: "YouTube", value: 20000, color: "#ef4444" },
  { platform: "LinkedIn/X", value: 5000, color: "#10b981" },
  { platform: "GitHub", value: 5, color: "#f59e0b" },
];

export const monetizationReadiness = [
  { stream: "CV Builder", demand: 90, readiness: 65 },
  { stream: "Sponsorships", demand: 70, readiness: 30 },
  { stream: "Mentor Marketplace", demand: 60, readiness: 15 },
  { stream: "Donations", demand: 40, readiness: 50 },
];

export const actionItems = {
  quickWins: [
    { action: "Pin 'AI Tools Access Guide' in VPN topic", priority: "critical" as const },
    { action: "Pin 'Resume Toolkit 2026' in Resume topic", priority: "high" as const },
    { action: "Create job posting template for Job Openings", priority: "high" as const },
    { action: "Recruit Kaaveh Mohamedi as CV Builder contributor", priority: "medium" as const },
    { action: "Add English welcome message for international members", priority: "medium" as const },
  ],
  strategic: [
    { action: "Revive Interview topic with mock interview sessions", priority: "high" as const },
    { action: "Launch CV Builder beta to community", priority: "high" as const },
    { action: "Create weekly digest bot for FAQ channel", priority: "medium" as const },
    { action: "Start English-language topic/thread", priority: "medium" as const },
    { action: "Build n8n automation for content distribution", priority: "medium" as const },
    { action: "Develop sponsorship media kit", priority: "low" as const },
  ],
};

export const admins = [
  { name: "Sahar", role: "Founder / Content Lead", suggestion: "Delegate moderation, focus on strategy & content" },
  { name: "Hessam", role: "Technical Moderator", suggestion: "Lead VPN/Technical topic curation" },
  { name: "Ramin", role: "General Moderator", suggestion: "Active daily — spam cleanup, welcomes" },
  { name: "Reza Maghoul", role: "Moderator", suggestion: "Assign: Job Openings topic ownership" },
  { name: "M!n0o", role: "Moderator", suggestion: "Assign: Resume topic moderation" },
  { name: "Boby Cloud", role: "Moderator", suggestion: "Assign: Language topic moderation" },
  { name: "Group Booster", role: "Bot", suggestion: "Configure for auto-welcome sequence" },
];
