interface KpiStat {
  label: string;
  value: string;
  change: number;
  percent: string;
}

interface KpiGridProps {
  stats: KpiStat[];
  dateRange: string;
}

export function KpiGrid({ stats, dateRange }: KpiGridProps) {
  return (
    <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-5 h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Overview</h3>
        <span className="text-xs text-slate-500">{dateRange}</span>
      </div>
      <div className="border border-emerald-500/30 rounded-lg flex-1">
        <div className="grid grid-cols-2 h-full">
          {stats.map((stat, idx) => {
            const isPositive = stat.change >= 0;
            const changeColor = isPositive ? "text-emerald-400" : "text-red-400";
            const isRight = idx % 2 === 1;
            const isBottom = idx >= 2;
            return (
              <div
                key={stat.label}
                className={`p-4 ${isRight ? "border-l border-emerald-500/30" : ""} ${isBottom ? "border-t border-emerald-500/30" : ""}`}
              >
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span className="text-xl font-bold text-slate-50">{stat.value}</span>
                  <span className={`text-[11px] font-medium ${changeColor}`}>
                    {isPositive ? "+" : ""}{stat.change.toLocaleString()} ({stat.percent})
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-0.5">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
