import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { monetizationReadiness } from "../data/community-data";

export function MonetizationChart() {
  return (
    <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-5">
      <h3 className="text-sm font-semibold text-slate-200 mb-1">Monetization Readiness</h3>
      <p className="text-xs text-slate-500 mb-4">Market demand vs execution readiness</p>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={monetizationReadiness} margin={{ top: 5, right: 10, left: 0, bottom: 0 }}>
          <XAxis dataKey="stream" tick={{ fill: "#94a3b8", fontSize: 11 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: "#64748b", fontSize: 11 }} axisLine={false} tickLine={false} width={30} domain={[0, 100]} />
          <Tooltip
            contentStyle={{ background: "#1e293b", border: "1px solid #334155", borderRadius: 8, fontSize: 12 }}
          />
          <Legend wrapperStyle={{ fontSize: 11, color: "#94a3b8" }} />
          <Bar dataKey="demand" name="Market Demand" fill="#6366f1" radius={[3, 3, 0, 0]} barSize={24} />
          <Bar dataKey="readiness" name="Execution Readiness" fill="#10b981" radius={[3, 3, 0, 0]} barSize={24} />
        </BarChart>
      </ResponsiveContainer>
      <div className="mt-3 p-3 rounded-lg bg-amber-500/10 border border-amber-500/20">
        <p className="text-xs text-amber-300">
          CV Builder has the highest demand-to-readiness ratio. 31 contributors interested + daily resume questions = clear product-market fit.
        </p>
      </div>
    </div>
  );
}
