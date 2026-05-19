import type { LayoutItem } from "react-grid-layout";

export interface WidgetConfig {
  id: string;
  label: string;
}

export const WIDGETS: WidgetConfig[] = [
  { id: "kpis", label: "KPIs" },
  { id: "member-growth", label: "Member Growth" },
  { id: "topic-activity", label: "Topic Activity" },
  { id: "pain-points", label: "Pain Points" },
  { id: "keyword-trends", label: "Keyword Trends" },
  { id: "unanswered", label: "Unanswered Questions" },
  { id: "engagement", label: "Engagement" },
  { id: "content", label: "Content Performance" },
  { id: "growth", label: "Growth Levers" },
  { id: "monetization", label: "Monetization" },
  { id: "actions", label: "Action Items" },
  { id: "admins", label: "Admin Team" },
];

const COLS = 12;

export const DEFAULT_LAYOUT: LayoutItem[] = [
  { i: "kpis",            x: 0,  y: 0,  w: COLS, h: 7,  minH: 5, minW: 6 },
  { i: "member-growth",   x: 0,  y: 3,  w: COLS, h: 7,  minH: 5, minW: 4 },
  { i: "topic-activity",  x: 0,  y: 10, w: COLS, h: 10, minH: 7, minW: 4 },
  { i: "pain-points",     x: 0,  y: 20, w: COLS, h: 8,  minH: 5, minW: 4 },
  { i: "keyword-trends",  x: 0,  y: 28, w: COLS, h: 9,  minH: 6, minW: 4 },
  { i: "unanswered",      x: 0,  y: 37, w: COLS, h: 5,  minH: 3, minW: 4 },
  { i: "engagement",      x: 0,  y: 42, w: 6,    h: 11, minH: 8, minW: 4 },
  { i: "content",         x: 6,  y: 42, w: 6,    h: 11, minH: 8, minW: 4 },
  { i: "growth",          x: 0,  y: 53, w: 6,    h: 12, minH: 8, minW: 4 },
  { i: "monetization",    x: 6,  y: 53, w: 6,    h: 12, minH: 8, minW: 4 },
  { i: "actions",         x: 0,  y: 65, w: COLS, h: 9,  minH: 6, minW: 6 },
  { i: "admins",          x: 0,  y: 74, w: COLS, h: 8,  minH: 5, minW: 4 },
];

const STORAGE_KEY = "ti-dashboard-layout-v2";

export function loadLayout(): LayoutItem[] {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved) as LayoutItem[];
      if (Array.isArray(parsed) && parsed.length === DEFAULT_LAYOUT.length) {
        return parsed.map((item) => {
          const defaults = DEFAULT_LAYOUT.find((d) => d.i === item.i);
          return { ...item, minH: defaults?.minH, minW: defaults?.minW };
        });
      }
    }
  } catch { /* use default */ }
  return DEFAULT_LAYOUT;
}

export function saveLayout(layout: readonly LayoutItem[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(layout));
}

export function resetLayout() {
  localStorage.removeItem(STORAGE_KEY);
}
