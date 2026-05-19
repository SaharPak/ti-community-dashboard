type Priority = "critical" | "high" | "moderate" | "medium" | "low" | "done";

const styles: Record<Priority, string> = {
  critical: "bg-red-500/15 text-red-400 border-red-500/30",
  high: "bg-amber-500/15 text-amber-400 border-amber-500/30",
  moderate: "bg-blue-500/15 text-blue-400 border-blue-500/30",
  medium: "bg-blue-500/15 text-blue-400 border-blue-500/30",
  low: "bg-slate-500/15 text-slate-400 border-slate-500/30",
  done: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
};

export function PriorityBadge({ priority }: { priority: Priority }) {
  return (
    <span className={`px-2 py-0.5 text-xs font-medium rounded border ${styles[priority]}`}>
      {priority}
    </span>
  );
}
