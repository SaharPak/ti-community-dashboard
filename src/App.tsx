import { Users, Radio, Globe, TrendingUp } from "lucide-react";
import { StatCard } from "./components/StatCard";
import { TopicActivityChart } from "./components/TopicActivityChart";
import { PainPointsChart } from "./components/PainPointsChart";
import { EngagementChart } from "./components/EngagementChart";
import { ContentPerformance } from "./components/ContentPerformance";
import { MonetizationChart } from "./components/MonetizationChart";
import { ActionItems } from "./components/ActionItems";
import { AdminTeam } from "./components/AdminTeam";
import { GrowthLevers } from "./components/GrowthLevers";
import { MemberGrowthChart } from "./components/MemberGrowthChart";
import { KeywordTrends } from "./components/KeywordTrends";
import { UnansweredQuestions } from "./components/UnansweredQuestions";
import { useSnapshot, useHistory } from "./hooks/useData";

function App() {
  const snapshot = useSnapshot();
  const history = useHistory();

  const lastUpdated = new Date(snapshot.timestamp).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="min-h-screen bg-slate-900 p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-end md:justify-between gap-2">
          <div>
            <h1 className="text-2xl font-bold text-slate-50">Tech Immigrants</h1>
            <p className="text-sm text-slate-400 mt-1">Community Management Dashboard</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <p className="text-xs text-slate-500">Last updated: {lastUpdated}</p>
          </div>
        </header>

        {/* KPI Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          <StatCard
            label="Group Members"
            value={snapshot.kpis.groupMembers}
            trend="up"
            trendValue={history.length >= 2 ? `+${snapshot.kpis.groupMembers - history[0].kpis.groupMembers} this week` : undefined}
            icon={<Users size={18} />}
          />
          <StatCard
            label="Channel Subscribers"
            value={snapshot.kpis.channelSubscribers}
            icon={<Radio size={18} />}
          />
          <StatCard
            label="Cross-Platform"
            value={snapshot.kpis.crossPlatformReach.toLocaleString() + "+"}
            trend="up"
            trendValue="All organic"
            icon={<Globe size={18} />}
          />
          <StatCard
            label="Messages Sampled"
            value={snapshot.messagesSampled}
            icon={<TrendingUp size={18} />}
          />
        </div>

        {/* Growth Trend */}
        <MemberGrowthChart history={history} />

        {/* Topic Activity */}
        <TopicActivityChart topics={snapshot.topics} />

        {/* Pain Points */}
        <section>
          <h2 className="text-lg font-semibold text-slate-100 mb-3">Community Pain Points</h2>
          <PainPointsChart keywords={snapshot.keywords} />
        </section>

        {/* Keyword Trends */}
        <KeywordTrends history={history} />

        {/* Unanswered Questions */}
        <UnansweredQuestions questions={snapshot.unansweredQuestions} />

        {/* Engagement + Content */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
          <EngagementChart />
          <ContentPerformance />
        </div>

        {/* Growth & Monetization */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
          <GrowthLevers />
          <MonetizationChart />
        </div>

        {/* Actions */}
        <section>
          <h2 className="text-lg font-semibold text-slate-100 mb-3">Management Actions</h2>
          <ActionItems />
        </section>

        {/* Admin Team */}
        <AdminTeam admins={snapshot.admins} />

        {/* Footer */}
        <footer className="pt-4 border-t border-slate-800">
          <p className="text-xs text-slate-600 text-center">
            Tech Immigrants Community Dashboard — Auto-updated via n8n + Telegram Bot API
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
