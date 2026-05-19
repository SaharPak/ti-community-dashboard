import { Users, Radio, Globe, TrendingUp } from "lucide-react";
import { StatCard } from "./StatCard";
import type { Snapshot, HistoryEntry } from "../types";

interface KpiGridProps {
  snapshot: Snapshot;
  history: HistoryEntry[];
}

export function KpiGrid({ snapshot, history }: KpiGridProps) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 h-full p-1">
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
  );
}
