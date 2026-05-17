import { MessageCircleQuestion } from "lucide-react";
import type { UnansweredQuestion } from "../types";

export function UnansweredQuestions({ questions }: { questions: UnansweredQuestion[] }) {
  if (questions.length === 0) {
    return (
      <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-5">
        <div className="flex items-center gap-2 mb-2">
          <MessageCircleQuestion size={14} className="text-emerald-400" />
          <h3 className="text-sm font-semibold text-slate-200">Unanswered Questions</h3>
        </div>
        <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-center">
          <p className="text-xs text-emerald-300">All questions have been answered — community is healthy.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-5">
      <div className="flex items-center gap-2 mb-4">
        <MessageCircleQuestion size={14} className="text-amber-400" />
        <h3 className="text-sm font-semibold text-slate-200">Unanswered Questions</h3>
        <span className="ml-auto px-2 py-0.5 text-xs font-medium rounded bg-amber-500/15 text-amber-400 border border-amber-500/30">
          {questions.length} need attention
        </span>
      </div>
      <div className="space-y-2.5">
        {questions.map((q) => (
          <div key={q.id} className="p-3 rounded-lg bg-slate-900/50 border-l-2 border-amber-500/50">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-medium text-slate-300">{q.sender}</span>
              <span className="text-xs text-slate-500">#{q.topic} · {q.hoursUnanswered}h ago</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed" dir="auto">{q.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
