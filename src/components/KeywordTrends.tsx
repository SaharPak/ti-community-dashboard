import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";
import type { HistoryEntry } from "../types";

const KEYWORD_COLORS: Record<string, string> = {
  vpn: "#ef4444",
  resume: "#f59e0b",
  ai: "#6366f1",
  visa: "#3b82f6",
  job: "#10b981",
  reject: "#ec4899",
  interview: "#8b5cf6",
  salary: "#64748b",
};

export function KeywordTrends({ history }: { history: HistoryEntry[] }) {
  if (history.length < 2) return null;

  const data = history.map((entry) => ({
    date: entry.date.slice(5),
    ...entry.keywords,
  }));

  const allKeywords = Object.keys(history[0]?.keywords || {});
  const topKeywords = allKeywords
    .sort((a, b) => {
      const latest = history[history.length - 1].keywords;
      return (latest[b] || 0) - (latest[a] || 0);
    })
    .slice(0, 5);

  return (
    <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-5">
      <h3 className="text-sm font-semibold text-slate-200 mb-1">Keyword Trends — Pain Point Tracker</h3>
      <p className="text-xs text-slate-500 mb-4">Daily mention frequency of key topics</p>
      <ResponsiveContainer width="100%" height={220}>
        <LineChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 0 }}>
          <XAxis dataKey="date" tick={{ fill: "#94a3b8", fontSize: 11 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: "#64748b", fontSize: 11 }} axisLine={false} tickLine={false} width={30} />
          <Tooltip
            contentStyle={{ background: "#1e293b", border: "1px solid #334155", borderRadius: 8, fontSize: 12 }}
          />
          <Legend wrapperStyle={{ fontSize: 11 }} />
          {topKeywords.map((keyword) => (
            <Line
              key={keyword}
              type="monotone"
              dataKey={keyword}
              stroke={KEYWORD_COLORS[keyword] || "#94a3b8"}
              strokeWidth={2}
              dot={{ r: 3 }}
              name={keyword.toUpperCase()}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
      <div className="mt-3 p-3 rounded-lg bg-red-500/10 border border-red-500/20">
        <p className="text-xs text-red-300">
          VPN mentions spiked from 5 to 42 in 5 days — members in Iran are facing increased AI tool access issues.
        </p>
      </div>
    </div>
  );
}
