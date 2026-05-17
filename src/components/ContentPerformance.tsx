import { contentPerformance } from "../data/community-data";

const engagementStyles: Record<string, string> = {
  "very-high": "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  high: "bg-blue-500/15 text-blue-400 border-blue-500/30",
  moderate: "bg-amber-500/15 text-amber-400 border-amber-500/30",
};

export function ContentPerformance() {
  return (
    <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-5">
      <h3 className="text-sm font-semibold text-slate-200 mb-1">Content That Drives Engagement</h3>
      <p className="text-xs text-slate-500 mb-4">Ranked by community response</p>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-slate-700/50">
              <th className="pb-2 text-xs font-medium text-slate-400">Content Type</th>
              <th className="pb-2 text-xs font-medium text-slate-400">Engagement</th>
              <th className="pb-2 text-xs font-medium text-slate-400 hidden md:table-cell">Example</th>
              <th className="pb-2 text-xs font-medium text-slate-400 hidden lg:table-cell">Insight</th>
            </tr>
          </thead>
          <tbody>
            {contentPerformance.map((item, i) => (
              <tr key={i} className="border-b border-slate-800/50">
                <td className="py-2.5 text-xs text-slate-200">{item.type}</td>
                <td className="py-2.5">
                  <span className={`px-2 py-0.5 text-xs rounded border ${engagementStyles[item.engagement]}`}>
                    {item.engagement.replace("-", " ")}
                  </span>
                </td>
                <td className="py-2.5 text-xs text-slate-400 hidden md:table-cell">{item.example}</td>
                <td className="py-2.5 text-xs text-slate-500 hidden lg:table-cell">{item.insight}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
