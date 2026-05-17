import { admins } from "../data/community-data";
import { Shield } from "lucide-react";

export function AdminTeam() {
  return (
    <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-5">
      <div className="flex items-center gap-2 mb-4">
        <Shield size={14} className="text-indigo-400" />
        <h3 className="text-sm font-semibold text-slate-200">Admin Team</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-slate-700/50">
              <th className="pb-2 text-xs font-medium text-slate-400">Name</th>
              <th className="pb-2 text-xs font-medium text-slate-400">Role</th>
              <th className="pb-2 text-xs font-medium text-slate-400 hidden md:table-cell">Suggested Action</th>
            </tr>
          </thead>
          <tbody>
            {admins.map((admin, i) => (
              <tr key={i} className="border-b border-slate-800/50">
                <td className="py-2.5 text-xs text-slate-200 font-medium">{admin.name}</td>
                <td className="py-2.5 text-xs text-slate-400">{admin.role}</td>
                <td className="py-2.5 text-xs text-slate-500 hidden md:table-cell">{admin.suggestion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
