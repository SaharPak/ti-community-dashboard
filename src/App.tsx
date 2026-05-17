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
import { kpis } from "./data/community-data";

function App() {
  return (
    <div className="min-h-screen bg-slate-900 p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-end md:justify-between gap-2">
          <div>
            <h1 className="text-2xl font-bold text-slate-50">Tech Immigrants</h1>
            <p className="text-sm text-slate-400 mt-1">Community Management Dashboard</p>
          </div>
          <p className="text-xs text-slate-500">Last updated: May 17, 2026</p>
        </header>

        {/* KPI Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          <StatCard
            label="Group Members"
            value={kpis.groupMembers}
            trend="up"
            trendValue={`+${kpis.recentGrowth} recent`}
            icon={<Users size={18} />}
          />
          <StatCard
            label="Channel Subscribers"
            value={kpis.channelSubscribers}
            icon={<Radio size={18} />}
          />
          <StatCard
            label="Cross-Platform"
            value={kpis.crossPlatformReach}
            trend="up"
            trendValue="All organic"
            icon={<Globe size={18} />}
          />
          <StatCard
            label="YouTube Episodes"
            value={`${kpis.youtubeEpisodes}+`}
            trend="up"
            trendValue={kpis.youtubeViews + " views"}
            icon={<TrendingUp size={18} />}
          />
        </div>

        {/* Topic Activity */}
        <TopicActivityChart />

        {/* Pain Points */}
        <section>
          <h2 className="text-lg font-semibold text-slate-100 mb-3">Community Pain Points</h2>
          <PainPointsChart />
        </section>

        {/* Engagement + Content side by side on large screens */}
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
        <AdminTeam />

        {/* Footer */}
        <footer className="pt-4 border-t border-slate-800">
          <p className="text-xs text-slate-600 text-center">
            Tech Immigrants Community Dashboard — Data sourced from Telegram MCP live analysis
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
