import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";
import type { Topic } from "../types";

const statusColors: Record<string, string> = {
  hot: "#ef4444",
  active: "#10b981",
  moderate: "#f59e0b",
  low: "#64748b",
  dormant: "#334155",
};

function activityScore(topic: Topic): number {
  const hoursAgo = (Date.now() - new Date(topic.lastActive).getTime()) / 3600000;
  if (hoursAgo < 6) return 95;
  if (hoursAgo < 12) return 85;
  if (hoursAgo < 24) return 70;
  if (hoursAgo < 48) return 50;
  if (hoursAgo < 168) return 25;
  return 10;
}

export function TopicActivityChart({ topics }: { topics: Topic[] }) {
  const data = topics.map((t) => ({
    name: t.nameEn,
    messages: activityScore(t),
    status: t.status,
  }));

  return (
    <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-5">
      <h3 className="text-sm font-semibold text-slate-200 mb-1">Topic Activity</h3>
      <p className="text-xs text-slate-500 mb-4">Relative activity score based on recency</p>
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={data} layout="vertical" margin={{ left: 20, right: 20 }}>
          <XAxis type="number" hide />
          <YAxis type="category" dataKey="name" width={120} tick={{ fill: "#94a3b8", fontSize: 12 }} axisLine={false} tickLine={false} />
          <Tooltip
            contentStyle={{ background: "#1e293b", border: "1px solid #334155", borderRadius: 8, fontSize: 12 }}
            labelStyle={{ color: "#f1f5f9" }}
            cursor={{ fill: "rgba(99,102,241,0.08)" }}
          />
          <Bar dataKey="messages" radius={[0, 4, 4, 0]} barSize={20}>
            {data.map((entry, i) => (
              <Cell key={i} fill={statusColors[entry.status]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <div className="flex gap-4 mt-3 flex-wrap">
        {Object.entries(statusColors).map(([status, color]) => (
          <div key={status} className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-sm" style={{ background: color }} />
            <span className="text-xs text-slate-400 capitalize">{status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
