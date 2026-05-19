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
    <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-5 h-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Overview</h3>
        <span className="text-xs text-slate-500">{dateRange}</span>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const isPositive = stat.change >= 0;
          const changeColor = isPositive ? "text-emerald-400" : "text-red-400";
          return (
            <div key={stat.label}>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-slate-50">{stat.value}</span>
                <span className={`text-xs font-medium ${changeColor}`}>
                  {isPositive ? "+" : ""}{stat.change.toLocaleString()} ({stat.percent})
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1">{stat.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
