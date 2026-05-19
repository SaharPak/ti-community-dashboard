import { useState } from "react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import type { HistoryEntry } from "../types";

type DateRange = "3d" | "7d" | "14d" | "30d" | "all";

const RANGE_OPTIONS: { value: DateRange; label: string }[] = [
  { value: "3d", label: "3D" },
  { value: "7d", label: "7D" },
  { value: "14d", label: "14D" },
  { value: "30d", label: "30D" },
  { value: "all", label: "All" },
];

function filterByRange(history: HistoryEntry[], range: DateRange): HistoryEntry[] {
  if (range === "all") return history;
  const days = parseInt(range);
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - days);
  const cutoffStr = cutoff.toISOString().slice(0, 10);
  const filtered = history.filter((e) => e.date >= cutoffStr);
  return filtered.length >= 2 ? filtered : history.slice(-2);
}

export function MemberGrowthChart({ history }: { history: HistoryEntry[] }) {
  const [range, setRange] = useState<DateRange>("7d");

  if (history.length < 2) return null;

  const filtered = filterByRange(history, range);
  const data = filtered.map((entry) => ({
    date: entry.date.slice(5),
    members: entry.kpis.groupMembers,
    channel: entry.kpis.channelSubscribers,
  }));

  const growth = filtered[filtered.length - 1].kpis.groupMembers - filtered[0].kpis.groupMembers;
  const channelGrowth = filtered[filtered.length - 1].kpis.channelSubscribers - filtered[0].kpis.channelSubscribers;

  return (
    <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-5">
      <div className="flex items-center justify-between mb-1">
        <h3 className="text-sm font-semibold text-slate-200">Member Growth</h3>
        <div className="flex items-center gap-1">
          {RANGE_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setRange(opt.value)}
              className={`px-2 py-0.5 text-[10px] font-medium rounded transition-colors ${
                range === opt.value
                  ? "bg-indigo-500/20 text-indigo-300 border border-indigo-500/30"
                  : "text-slate-500 hover:text-slate-300 border border-transparent"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-4 mb-4">
        <span className={`text-xs font-medium ${growth >= 0 ? "text-emerald-400" : "text-red-400"}`}>
          Group {growth >= 0 ? "+" : ""}{growth}
        </span>
        <span className={`text-xs font-medium ${channelGrowth >= 0 ? "text-emerald-400" : "text-red-400"}`}>
          Channel {channelGrowth >= 0 ? "+" : ""}{channelGrowth}
        </span>
        <span className="text-xs text-slate-500">
          in {filtered.length} days
        </span>
      </div>
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
