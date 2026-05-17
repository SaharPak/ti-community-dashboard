import { useState, useEffect } from "react";
import type { Snapshot, HistoryEntry } from "../types";

import snapshotData from "../../data/snapshot-latest.json";

const historyModules = import.meta.glob<{ default: HistoryEntry }>("../../data/history/*.json", { eager: true });

export function useSnapshot(): Snapshot {
  return snapshotData as unknown as Snapshot;
}

export function useHistory(): HistoryEntry[] {
  const [history, setHistory] = useState<HistoryEntry[]>([]);

  useEffect(() => {
    const entries: HistoryEntry[] = Object.values(historyModules)
      .map((mod) => (mod as unknown as { default: HistoryEntry }).default ?? mod as unknown as HistoryEntry)
      .sort((a, b) => a.date.localeCompare(b.date));
    setHistory(entries);
  }, []);

  return history;
}
