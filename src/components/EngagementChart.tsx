import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { weeklyEngagement } from "../data/community-data";

export function EngagementChart() {
  return (
    <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-5">
      <h3 className="text-sm font-semibold text-slate-200 mb-1">Weekly Engagement Pattern</h3>
      <p className="text-xs text-slate-500 mb-4">Messages and unique senders by day of week</p>
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart data={weeklyEngagement} margin={{ top: 5, right: 10, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="msgGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="senderGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="day" tick={{ fill: "#94a3b8", fontSize: 12 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: "#64748b", fontSize: 11 }} axisLine={false} tickLine={false} width={30} />
          <Tooltip
            contentStyle={{ background: "#1e293b", border: "1px solid #334155", borderRadius: 8, fontSize: 12 }}
          />
          <Area type="monotone" dataKey="messages" stroke="#6366f1" fill="url(#msgGradient)" strokeWidth={2} name="Messages" />
          <Area type="monotone" dataKey="uniqueSenders" stroke="#10b981" fill="url(#senderGradient)" strokeWidth={2} name="Unique Senders" />
        </AreaChart>
      </ResponsiveContainer>
      <div className="flex items-center justify-center gap-6 mt-3">
        <div className="flex items-center gap-2">
          <div className="w-3 h-0.5 bg-indigo-500 rounded" />
          <span className="text-xs text-slate-400">Messages</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-0.5 bg-emerald-500 rounded" />
          <span className="text-xs text-slate-400">Unique Senders</span>
        </div>
      </div>
      <div className="mt-3 p-3 rounded-lg bg-indigo-500/10 border border-indigo-500/20">
        <p className="text-xs text-indigo-300">
          Weekend engagement is 40-60% higher than weekdays — schedule key posts and sessions for Sat/Sun.
        </p>
      </div>
    </div>
  );
}
