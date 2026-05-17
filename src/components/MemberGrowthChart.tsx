import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import type { HistoryEntry } from "../types";

export function MemberGrowthChart({ history }: { history: HistoryEntry[] }) {
  if (history.length < 2) return null;

  const data = history.map((entry) => ({
    date: entry.date.slice(5),
    members: entry.kpis.groupMembers,
    channel: entry.kpis.channelSubscribers,
  }));

  const growth = history[history.length - 1].kpis.groupMembers - history[0].kpis.groupMembers;

  return (
    <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-5">
      <div className="flex items-baseline justify-between mb-1">
        <h3 className="text-sm font-semibold text-slate-200">Member Growth</h3>
        <span className={`text-xs font-medium ${growth >= 0 ? "text-emerald-400" : "text-red-400"}`}>
          {growth >= 0 ? "+" : ""}{growth} in {history.length} days
        </span>
      </div>
      <p className="text-xs text-slate-500 mb-4">Group and channel subscriber trend</p>
      <ResponsiveContainer width="100%" height={180}>
        <AreaChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="memberGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="channelGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="date" tick={{ fill: "#94a3b8", fontSize: 11 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: "#64748b", fontSize: 11 }} axisLine={false} tickLine={false} width={50} domain={["dataMin - 20", "dataMax + 20"]} />
          <Tooltip
            contentStyle={{ background: "#1e293b", border: "1px solid #334155", borderRadius: 8, fontSize: 12 }}
            formatter={(value) => typeof value === "number" ? value.toLocaleString() : value}
          />
          <Area type="monotone" dataKey="members" stroke="#6366f1" fill="url(#memberGradient)" strokeWidth={2} name="Group Members" />
          <Area type="monotone" dataKey="channel" stroke="#10b981" fill="url(#channelGradient)" strokeWidth={2} name="Channel Subs" />
        </AreaChart>
      </ResponsiveContainer>
      <div className="flex items-center justify-center gap-6 mt-3">
        <div className="flex items-center gap-2">
          <div className="w-3 h-0.5 bg-indigo-500 rounded" />
          <span className="text-xs text-slate-400">Group Members</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-0.5 bg-emerald-500 rounded" />
          <span className="text-xs text-slate-400">Channel Subscribers</span>
        </div>
      </div>
    </div>
  );
}
