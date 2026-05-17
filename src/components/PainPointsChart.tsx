import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { PriorityBadge } from "./PriorityBadge";

const COLORS = ["#ef4444", "#f59e0b", "#6366f1", "#3b82f6", "#64748b", "#10b981", "#8b5cf6", "#ec4899"];

interface Props {
  keywords: Record<string, number>;
}

const keywordLabels: Record<string, string> = {
  vpn: "VPN / AI Access",
  resume: "Resume & CV",
  ai: "AI Tools",
  reject: "Rejections",
  visa: "Visa & Immigration",
  interview: "Interview Prep",
  salary: "Salary & Comp",
  job: "Job Search",
};

const keywordUrgency: Record<string, "critical" | "high" | "moderate"> = {
  vpn: "critical",
  resume: "high",
  ai: "high",
  reject: "critical",
  visa: "high",
  interview: "moderate",
  salary: "moderate",
  job: "high",
};

export function PainPointsChart({ keywords }: Props) {
  const sorted = Object.entries(keywords).sort((a, b) => b[1] - a[1]);
  const pieData = sorted.map(([key, value]) => ({
    category: keywordLabels[key] || key,
    percentage: value,
  }));

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-5">
        <h3 className="text-sm font-semibold text-slate-200 mb-1">Pain Point Distribution</h3>
        <p className="text-xs text-slate-500 mb-4">Keyword mentions in recent messages</p>
        <ResponsiveContainer width="100%" height={220}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="percentage"
              nameKey="category"
              cx="50%"
              cy="50%"
              innerRadius={55}
              outerRadius={90}
              strokeWidth={2}
              stroke="#0f172a"
            >
              {pieData.map((_, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{ background: "#1e293b", border: "1px solid #334155", borderRadius: 8, fontSize: 12 }}
            />
          </PieChart>
        </ResponsiveContainer>
        <div className="grid grid-cols-2 gap-2 mt-2">
          {pieData.map((p, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-sm shrink-0" style={{ background: COLORS[i % COLORS.length] }} />
              <span className="text-xs text-slate-400 truncate">{p.category}</span>
              <span className="text-xs text-slate-500 ml-auto">{p.percentage}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-5">
        <h3 className="text-sm font-semibold text-slate-200 mb-1">Challenge Details</h3>
        <p className="text-xs text-slate-500 mb-4">Keywords ranked by mention count</p>
        <div className="space-y-2.5 overflow-y-auto max-h-[320px]">
          {sorted.map(([key, count], i) => (
            <div key={i} className="flex items-start gap-3 p-2.5 rounded-lg bg-slate-900/50">
              <PriorityBadge priority={keywordUrgency[key] || "moderate"} />
              <div className="min-w-0 flex-1">
                <p className="text-xs text-slate-200 leading-tight">{keywordLabels[key] || key}</p>
                <p className="text-xs text-slate-500 mt-0.5">{count} mentions today</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
