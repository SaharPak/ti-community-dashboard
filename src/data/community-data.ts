export const kpis = {
  groupMembers: 17421,
  channelSubscribers: 7270,
  crossPlatformReach: "53K+",
  recentGrowth: 134,
  youtubeEpisodes: 200,
  youtubeViews: "349K+",
  hoursWatched: "69K+",
  admins: 7,
};

export const topicActivity = [
  { name: "VPN / AI Access", messages: 95, lastActive: "2026-05-18", status: "hot" as const },
  { name: "General", messages: 85, lastActive: "2026-05-19", status: "active" as const },
  { name: "Resume", messages: 80, lastActive: "2026-05-19", status: "active" as const },
  { name: "Technical", messages: 55, lastActive: "2026-05-18", status: "active" as const },
  { name: "Suggestions", messages: 40, lastActive: "2026-05-18", status: "moderate" as const },
  { name: "Language", messages: 35, lastActive: "2026-05-17", status: "moderate" as const },
  { name: "Job Openings", messages: 30, lastActive: "2026-05-17", status: "active" as const },
  { name: "Announcements", messages: 10, lastActive: "2026-05-15", status: "low" as const },
  { name: "Interview", messages: 5, lastActive: "2026-05-08", status: "dormant" as const },
];

export const painPoints = [
  { category: "Access to AI Tools", percentage: 38, urgency: "critical" as const, frequency: "Multiple daily" },
  { category: "Resume/CV Quality", percentage: 24, urgency: "high" as const, frequency: "3-4x/week" },
  { category: "Job Market Competition", percentage: 18, urgency: "high" as const, frequency: "2-3x/week" },
  { category: "Immigration Process", percentage: 12, urgency: "moderate" as const, frequency: "Weekly" },
  { category: "Language Proficiency", percentage: 8, urgency: "moderate" as const, frequency: "Weekly" },
];

export const detailedChallenges = [
  { challenge: "Accessing Claude/Cursor/ChatGPT from Iran", urgency: "critical" as const, frequency: "Multiple daily", topic: "VPN" },
  { challenge: "Shekan vs VPN — which bypasses sanctions?", urgency: "critical" as const, frequency: "Daily", topic: "VPN" },
  { challenge: "Writing ATS-friendly CVs for EU market", urgency: "high" as const, frequency: "3-4x/week", topic: "Resume" },
  { challenge: "Finding visa-sponsoring employers", urgency: "high" as const, frequency: "2-3x/week", topic: "Job Openings" },
  { challenge: "Rejection due to nationality / visa appeals", urgency: "critical" as const, frequency: "Weekly", topic: "General" },
  { challenge: "AI-based interview screening", urgency: "moderate" as const, frequency: "Bi-weekly", topic: "Interview" },
  { challenge: "Iran IP for banking from abroad", urgency: "moderate" as const, frequency: "Weekly", topic: "VPN" },
  { challenge: "Choosing stepping-stone country (Armenia/Turkey)", urgency: "moderate" as const, frequency: "Bi-weekly", topic: "General" },
];

export const weeklyEngagement = [
  { day: "Mon", messages: 42, uniqueSenders: 18 },
  { day: "Tue", messages: 58, uniqueSenders: 26 },
  { day: "Wed", messages: 48, uniqueSenders: 20 },
  { day: "Thu", messages: 55, uniqueSenders: 25 },
  { day: "Fri", messages: 38, uniqueSenders: 16 },
  { day: "Sat", messages: 72, uniqueSenders: 34 },
  { day: "Sun", messages: 88, uniqueSenders: 40 },
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
  { platform: "Telegram Group", value: 17421, color: "#3b82f6" },
  { platform: "Telegram Channel", value: 7270, color: "#6366f1" },
  { platform: "YouTube", value: 20000, color: "#ef4444" },
  { platform: "LinkedIn/X", value: 5000, color: "#10b981" },
  { platform: "GitHub", value: 36, color: "#f59e0b" },
];

export const monetizationReadiness = [
  { stream: "CV Builder", demand: 92, readiness: 70 },
  { stream: "Sponsorships", demand: 70, readiness: 30 },
  { stream: "Mentor Marketplace", demand: 60, readiness: 15 },
  { stream: "Donations", demand: 40, readiness: 50 },
];

export const actionItems = {
  quickWins: [
    { action: "Pin 'AI Tools Access Guide' in VPN topic", priority: "critical" as const },
    { action: "Pin 'Resume Toolkit 2026' in Resume topic", priority: "high" as const },
    { action: "Auto-publish Telegram channel posts to X/LinkedIn", priority: "high" as const },
    { action: "Create job posting template for Job Openings", priority: "medium" as const },
    { action: "Add English welcome message for international members", priority: "medium" as const },
  ],
  strategic: [
    { action: "ti-helper-bot repo live — open for contributions", priority: "done" as const },
    { action: "Launch CV Builder beta to community", priority: "high" as const },
    { action: "Revive Interview topic with mock interview sessions", priority: "high" as const },
    { action: "Start English-language topic/thread", priority: "medium" as const },
    { action: "Build n8n automation for content distribution", priority: "medium" as const },
    { action: "Develop sponsorship media kit", priority: "low" as const },
  ],
};

export const admins = [
  { name: "Sahar", role: "Founder / Content Lead", suggestion: "Delegate moderation, focus on strategy & content" },
  { name: "Moderator A", role: "Technical Moderator", suggestion: "Lead VPN/Technical topic curation" },
  { name: "Moderator B", role: "General Moderator", suggestion: "Active daily — spam cleanup, welcomes" },
  { name: "Moderator C", role: "Moderator", suggestion: "Assign: Job Openings topic ownership" },
  { name: "Moderator D", role: "Moderator", suggestion: "Assign: Resume topic moderation" },
  { name: "Moderator E", role: "Moderator", suggestion: "Assign: Language topic moderation" },
  { name: "Community Bot", role: "Bot", suggestion: "Silent mode 10PM-7:30AM + auto-moderation" },
];
