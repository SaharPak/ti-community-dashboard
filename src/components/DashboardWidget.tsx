import { GripVertical } from "lucide-react";
import type { ReactNode } from "react";

interface DashboardWidgetProps {
  children: ReactNode;
  locked: boolean;
}

export function DashboardWidget({ children, locked }: DashboardWidgetProps) {
  return (
    <div className="relative h-full group/widget">
      {!locked && (
        <div className="widget-drag-handle absolute top-0 left-0 right-0 h-7 z-10 flex items-center justify-center cursor-grab active:cursor-grabbing opacity-0 group-hover/widget:opacity-100 transition-opacity">
          <div className="flex items-center gap-1 px-2 py-0.5 rounded-b-md bg-slate-700/90 backdrop-blur-sm">
            <GripVertical size={11} className="text-slate-400" />
            <span className="text-[10px] text-slate-400 font-medium">drag</span>
          </div>
        </div>
      )}
      <div className="h-full overflow-hidden">
        {children}
      </div>
    </div>
  );
}
