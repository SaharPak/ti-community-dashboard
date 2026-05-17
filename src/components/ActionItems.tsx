import { actionItems } from "../data/community-data";
import { PriorityBadge } from "./PriorityBadge";
import { Zap, Target } from "lucide-react";

export function ActionItems() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-5">
        <div className="flex items-center gap-2 mb-4">
          <Zap size={14} className="text-amber-400" />
          <h3 className="text-sm font-semibold text-slate-200">Quick Wins — This Week</h3>
        </div>
        <div className="space-y-2.5">
          {actionItems.quickWins.map((item, i) => (
            <div key={i} className="flex items-start gap-3 p-2.5 rounded-lg bg-slate-900/50">
              <PriorityBadge priority={item.priority} />
              <p className="text-xs text-slate-300 leading-relaxed">{item.action}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-5">
        <div className="flex items-center gap-2 mb-4">
          <Target size={14} className="text-indigo-400" />
          <h3 className="text-sm font-semibold text-slate-200">Strategic — This Month</h3>
        </div>
        <div className="space-y-2.5">
          {actionItems.strategic.map((item, i) => (
            <div key={i} className="flex items-start gap-3 p-2.5 rounded-lg bg-slate-900/50">
              <PriorityBadge priority={item.priority} />
              <p className="text-xs text-slate-300 leading-relaxed">{item.action}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
