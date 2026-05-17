import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { topicActivity } from "../data/community-data";

const statusColors: Record<string, string> = {
  hot: "#ef4444",
  active: "#10b981",
  moderate: "#f59e0b",
  low: "#64748b",
  dormant: "#334155",
};

export function TopicActivityChart() {
  return (
    <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-5">
      <h3 className="text-sm font-semibold text-slate-200 mb-1">Topic Activity — Last 7 Days</h3>
      <p className="text-xs text-slate-500 mb-4">Relative message volume by topic</p>
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={topicActivity} layout="vertical" margin={{ left: 20, right: 20 }}>
          <XAxis type="number" hide />
          <YAxis type="category" dataKey="name" width={120} tick={{ fill: "#94a3b8", fontSize: 12 }} axisLine={false} tickLine={false} />
          <Tooltip
            contentStyle={{ background: "#1e293b", border: "1px solid #334155", borderRadius: 8, fontSize: 12 }}
            labelStyle={{ color: "#f1f5f9" }}
            cursor={{ fill: "rgba(99,102,241,0.08)" }}
          />
          <Bar dataKey="messages" radius={[0, 4, 4, 0]} barSize={20}>
            {topicActivity.map((entry, i) => (
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
