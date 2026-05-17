import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";

const data = [
  { platform: "Telegram", followers: 17407, potential: 25000, color: "#3b82f6" },
  { platform: "YouTube", followers: 20000, potential: 50000, color: "#ef4444" },
  { platform: "LinkedIn", followers: 3000, potential: 15000, color: "#6366f1" },
  { platform: "X/Twitter", followers: 2000, potential: 10000, color: "#10b981" },
  { platform: "GitHub", followers: 5, potential: 5000, color: "#f59e0b" },
];

export function GrowthLevers() {
  return (
    <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-5">
      <h3 className="text-sm font-semibold text-slate-200 mb-1">Platform Growth Potential</h3>
      <p className="text-xs text-slate-500 mb-4">Current followers vs estimated addressable audience</p>
      <ResponsiveContainer width="100%" height={180}>
        <BarChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 0 }}>
          <XAxis dataKey="platform" tick={{ fill: "#94a3b8", fontSize: 11 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: "#64748b", fontSize: 11 }} axisLine={false} tickLine={false} width={40} />
          <Tooltip
            contentStyle={{ background: "#1e293b", border: "1px solid #334155", borderRadius: 8, fontSize: 12 }}
            formatter={(value) => typeof value === "number" ? value.toLocaleString() : value}
          />
          <Bar dataKey="followers" name="Current" radius={[3, 3, 0, 0]} barSize={20}>
            {data.map((entry, i) => (
              <Cell key={i} fill={entry.color} />
            ))}
          </Bar>
          <Bar dataKey="potential" name="Potential" radius={[3, 3, 0, 0]} barSize={20} opacity={0.25}>
            {data.map((entry, i) => (
              <Cell key={i} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4">
        <div className="p-3 rounded-lg bg-slate-900/50">
          <p className="text-xs font-medium text-slate-300">Telegram</p>
          <p className="text-xs text-slate-500 mt-1">Near ceiling for Persian-only. International expansion needed.</p>
        </div>
        <div className="p-3 rounded-lg bg-slate-900/50">
          <p className="text-xs font-medium text-slate-300">GitHub</p>
          <p className="text-xs text-slate-500 mt-1">5 followers vs 17K community. CV Builder launch is the bridge.</p>
        </div>
        <div className="p-3 rounded-lg bg-slate-900/50">
          <p className="text-xs font-medium text-slate-300">English Content</p>
          <p className="text-xs text-slate-500 mt-1">50% of audience already abroad. Unlocks sponsors + non-Iranian audience.</p>
        </div>
      </div>
    </div>
  );
}
