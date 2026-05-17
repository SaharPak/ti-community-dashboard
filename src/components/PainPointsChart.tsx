import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { painPoints, detailedChallenges } from "../data/community-data";
import { PriorityBadge } from "./PriorityBadge";

const COLORS = ["#ef4444", "#f59e0b", "#6366f1", "#3b82f6", "#64748b"];

export function PainPointsChart() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-5">
        <h3 className="text-sm font-semibold text-slate-200 mb-1">Pain Point Distribution</h3>
        <p className="text-xs text-slate-500 mb-4">What members struggle with most</p>
        <ResponsiveContainer width="100%" height={220}>
          <PieChart>
            <Pie
              data={painPoints}
              dataKey="percentage"
              nameKey="category"
              cx="50%"
              cy="50%"
              innerRadius={55}
              outerRadius={90}
              strokeWidth={2}
              stroke="#0f172a"
            >
              {painPoints.map((_, i) => (
                <Cell key={i} fill={COLORS[i]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{ background: "#1e293b", border: "1px solid #334155", borderRadius: 8, fontSize: 12 }}
            />
          </PieChart>
        </ResponsiveContainer>
        <div className="grid grid-cols-2 gap-2 mt-2">
          {painPoints.map((p, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-sm shrink-0" style={{ background: COLORS[i] }} />
              <span className="text-xs text-slate-400 truncate">{p.category}</span>
              <span className="text-xs text-slate-500 ml-auto">{p.percentage}%</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-5">
        <h3 className="text-sm font-semibold text-slate-200 mb-1">Challenge Details</h3>
        <p className="text-xs text-slate-500 mb-4">Specific issues by urgency and frequency</p>
        <div className="space-y-2.5 overflow-y-auto max-h-[320px]">
          {detailedChallenges.map((c, i) => (
            <div key={i} className="flex items-start gap-3 p-2.5 rounded-lg bg-slate-900/50">
              <PriorityBadge priority={c.urgency} />
              <div className="min-w-0 flex-1">
                <p className="text-xs text-slate-200 leading-tight">{c.challenge}</p>
                <p className="text-xs text-slate-500 mt-0.5">{c.frequency} · #{c.topic}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
