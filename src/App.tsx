import { useState, useCallback } from "react";
import { GridLayout, verticalCompactor, type LayoutItem } from "react-grid-layout";
import { RotateCcw, Lock, Unlock } from "lucide-react";
import { KpiGrid } from "./components/KpiGrid";
import { TopicActivityChart } from "./components/TopicActivityChart";
import { PainPointsChart } from "./components/PainPointsChart";
import { EngagementChart } from "./components/EngagementChart";
import { ContentPerformance } from "./components/ContentPerformance";
import { MonetizationChart } from "./components/MonetizationChart";
import { ActionItems } from "./components/ActionItems";
import { AdminTeam } from "./components/AdminTeam";
import { GrowthLevers } from "./components/GrowthLevers";
import { MemberGrowthChart } from "./components/MemberGrowthChart";
import { KeywordTrends } from "./components/KeywordTrends";
import { UnansweredQuestions } from "./components/UnansweredQuestions";
import { DashboardWidget } from "./components/DashboardWidget";
import { useSnapshot, useHistory } from "./hooks/useData";
import { DEFAULT_LAYOUT, loadLayout, saveLayout, resetLayout } from "./layouts";
import "react-grid-layout/css/styles.css";

function useGridWidth() {
  const [width, setWidth] = useState(1200);
  const ref = useCallback((node: HTMLDivElement | null) => {
    if (!node) return;
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setWidth(entry.contentRect.width);
      }
    });
    observer.observe(node);
    setWidth(node.clientWidth);
  }, []);
  return { width, ref };
}

function App() {
  const snapshot = useSnapshot();
  const history = useHistory();
  const [layout, setLayout] = useState<LayoutItem[]>(loadLayout);
  const [locked, setLocked] = useState(true);
  const { width, ref } = useGridWidth();

  const lastUpdated = new Date(snapshot.timestamp).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const handleLayoutChange = (newLayout: readonly LayoutItem[]) => {
    const mutable = newLayout.map((item) => ({ ...item }));
    setLayout(mutable);
    saveLayout(newLayout);
  };

  const handleReset = () => {
    resetLayout();
    setLayout([...DEFAULT_LAYOUT]);
  };

  const tg = snapshot.telegramStats;
  const kpiStats = [
    { label: "Members", value: "17,4K", change: tg.membersChange, percent: tg.membersPercent },
    { label: "Messages", value: "184K", change: tg.messagesChange, percent: tg.messagesPercent },
    { label: "Viewing Members", value: "2,8K", change: tg.viewingMembersChange, percent: tg.viewingMembersPercent },
    { label: "Posting Members", value: String(tg.postingMembers), change: tg.postingMembersChange, percent: tg.postingMembersPercent },
  ];

  const widgetMap: Record<string, React.ReactNode> = {
    kpis: <KpiGrid stats={kpiStats} dateRange={`${tg.periodStart} – ${tg.periodEnd}`} />,
    "member-growth": <MemberGrowthChart history={history} />,
    "topic-activity": <TopicActivityChart topics={snapshot.topics} />,
    "pain-points": (
      <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-5 h-full">
        <h2 className="text-sm font-semibold text-slate-100 mb-3">Community Pain Points</h2>
        <PainPointsChart keywords={snapshot.keywords} />
      </div>
    ),
    "keyword-trends": <KeywordTrends history={history} />,
    unanswered: <UnansweredQuestions questions={snapshot.unansweredQuestions} />,
    engagement: <EngagementChart />,
    content: <ContentPerformance />,
    growth: <GrowthLevers />,
    monetization: <MonetizationChart />,
    actions: (
      <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-5 h-full">
        <h2 className="text-sm font-semibold text-slate-100 mb-3">Management Actions</h2>
        <ActionItems />
      </div>
    ),
    admins: <AdminTeam admins={snapshot.admins} />,
  };

  return (
    <div className="min-h-screen bg-slate-900 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="flex flex-col md:flex-row md:items-end md:justify-between gap-2 mb-4">
          <div className="flex items-center gap-3">
            <img src="/favicon.svg" alt="Tech Immigrants logo" className="w-9 h-9" />
            <div>
              <h1 className="text-2xl font-bold text-slate-50">Tech Immigrants</h1>
              <p className="text-sm text-slate-400 mt-1">Community Management Dashboard</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setLocked(!locked)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                locked
                  ? "bg-slate-800/50 border-slate-700/50 text-slate-400 hover:text-slate-200 hover:border-slate-600"
                  : "bg-indigo-500/15 border-indigo-500/30 text-indigo-300"
              }`}
            >
              {locked ? <Lock size={12} /> : <Unlock size={12} />}
              {locked ? "Locked" : "Editing"}
            </button>
            {!locked && (
              <button
                onClick={handleReset}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors bg-slate-800/50 border-slate-700/50 text-slate-400 hover:text-slate-200 hover:border-slate-600"
              >
                <RotateCcw size={12} />
                Reset
              </button>
            )}
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <p className="text-xs text-slate-500">Last updated: {lastUpdated}</p>
            </div>
          </div>
        </header>

        <div ref={ref}>
          <GridLayout
            layout={layout}
            width={width}
            gridConfig={{ cols: 12, rowHeight: 30, margin: [12, 12] as const }}
            dragConfig={{ enabled: !locked, handle: ".widget-drag-handle" }}
            resizeConfig={{ enabled: !locked }}
            compactor={verticalCompactor}
            onLayoutChange={handleLayoutChange}
            autoSize
          >
            {layout.map((item) => (
              <div key={item.i}>
                <DashboardWidget locked={locked}>
                  {widgetMap[item.i]}
                </DashboardWidget>
              </div>
            ))}
          </GridLayout>
        </div>

        <footer className="pt-4 border-t border-slate-800 mt-4">
          <p className="text-xs text-slate-600 text-center">
            Tech Immigrants Community Dashboard — Auto-updated via n8n + Telegram Bot API
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
