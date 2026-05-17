import { type ReactNode } from "react";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

type StatCardProps = {
  label: string;
  value: string | number;
  trend?: "up" | "down" | "flat";
  trendValue?: string;
  icon?: ReactNode;
};

export function StatCard({ label, value, trend, trendValue, icon }: StatCardProps) {
  const trendColor = trend === "up" ? "text-emerald-400" : trend === "down" ? "text-red-400" : "text-slate-400";
  const TrendIcon = trend === "up" ? TrendingUp : trend === "down" ? TrendingDown : Minus;

  return (
    <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-5">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-slate-400 text-sm font-medium">{label}</p>
          <p className="text-2xl font-bold text-slate-50 mt-1">{typeof value === "number" ? value.toLocaleString() : value}</p>
        </div>
        {icon && <div className="text-indigo-400 opacity-60">{icon}</div>}
      </div>
      {trend && trendValue && (
        <div className={`flex items-center gap-1 mt-2 text-xs ${trendColor}`}>
          <TrendIcon size={12} />
          <span>{trendValue}</span>
        </div>
      )}
    </div>
  );
}
