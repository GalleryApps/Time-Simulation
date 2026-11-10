import React, { useState, useMemo } from 'react';
import { COUNTERFACTUAL_WORLDS, CounterfactualWorld } from '../types/manuscriptData';

export const CounterfactualWorldsView: React.FC = () => {
  const [selectedEdge, setSelectedEdge] = useState<string>('all');
  const [expandedWorldId, setExpandedWorldId] = useState<number | null>(1);

  const filteredWorlds = useMemo(() => {
    return COUNTERFACTUAL_WORLDS.filter(w => {
      if (selectedEdge === 'all') return true;
      if (selectedEdge === 'IGEG' && w.edge.includes('IGEG')) return true;
      if (selectedEdge === 'RES=RAG' && w.edge.includes('RES=RAG')) return true;
      if (selectedEdge === 'Level' && w.edge.includes('Level')) return true;
      if (selectedEdge === 'Neither' && w.edge.includes('Neither')) return true;
      return false;
    });
  }, [selectedEdge]);

  return (
    <div className="space-y-8 max-w-6xl mx-auto pb-20">
      
      {/* Header Banner */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-5">
          <div className="space-y-1">
            <span className="text-xs font-mono font-semibold text-emerald-600 uppercase tracking-wider">
              Section 4.4 & Table 5 · Counterfactual Testing
            </span>
            <h1 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 tracking-tight">
              14 Counterfactual Universes & Stress-Testing Time
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">
              A direct test of a theory of time is to remove time, or its supposed source, and ask what the theory implies should remain. In each world, one fundamental physical law is altered. The "edge" goes to the framework giving the more definite and self-consistent answer.
            </p>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs text-slate-500">
            <span className="px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 font-semibold">
              100 Counterfactual Tests (142 vs 87)
            </span>
          </div>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
          <div className="flex flex-wrap items-center gap-1.5 text-xs font-medium">
            <span className="text-slate-500 mr-1 font-mono uppercase text-[10px]">Filter Edge:</span>
            <button
              onClick={() => setSelectedEdge('all')}
              className={`px-3 py-1.5 rounded-lg border transition-colors ${
                selectedEdge === 'all'
                  ? 'bg-slate-900 text-white border-slate-900 font-semibold'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
              }`}
            >
              All 14 Universes
            </button>
            <button
              onClick={() => setSelectedEdge('IGEG')}
              className={`px-3 py-1.5 rounded-lg border transition-colors ${
                selectedEdge === 'IGEG'
                  ? 'bg-blue-700 text-white border-blue-700 font-semibold'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
              }`}
            >
              IGEG Edge (4)
            </button>
            <button
              onClick={() => setSelectedEdge('RES=RAG')}
              className={`px-3 py-1.5 rounded-lg border transition-colors ${
                selectedEdge === 'RES=RAG'
                  ? 'bg-amber-700 text-white border-amber-700 font-semibold'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
              }`}
            >
              RES=RAG Edge (2)
            </button>
            <button
              onClick={() => setSelectedEdge('Level')}
              className={`px-3 py-1.5 rounded-lg border transition-colors ${
                selectedEdge === 'Level'
                  ? 'bg-purple-700 text-white border-purple-700 font-semibold'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
              }`}
            >
              Level / Tie (6)
            </button>
            <button
              onClick={() => setSelectedEdge('Neither')}
              className={`px-3 py-1.5 rounded-lg border transition-colors ${
                selectedEdge === 'Neither'
                  ? 'bg-slate-700 text-white border-slate-700 font-semibold'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
              }`}
            >
              Neither (2)
            </button>
          </div>
          <div className="text-xs font-mono text-slate-500">
            Showing {filteredWorlds.length} of 14 scenarios
          </div>
        </div>
      </div>

      {/* Universes Cards */}
      <div className="grid grid-cols-1 gap-5">
        {filteredWorlds.map((w) => {
          const isExpanded = expandedWorldId === w.id;
          const isIgegEdge = w.edge.includes('IGEG') && !w.edge.includes('Level');
          const isResRagEdge = w.edge.includes('RES=RAG') && !w.edge.includes('Level');

          let edgeBadge = 'bg-slate-100 text-slate-700 border-slate-200';
          if (isIgegEdge) edgeBadge = 'bg-blue-100 text-blue-800 border-blue-200 font-bold';
          else if (isResRagEdge) edgeBadge = 'bg-amber-100 text-amber-800 border-amber-200 font-bold';
          else if (w.edge.includes('Level')) edgeBadge = 'bg-purple-100 text-purple-800 border-purple-200 font-semibold';

          return (
            <div
              key={w.id}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-4 hover:border-slate-300 transition-all"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                    Scenario #{w.id}
                  </span>
                  <h3 className="text-base font-serif font-bold text-slate-900">
                    {w.world}
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-500 font-mono">Evaluation Edge:</span>
                  <span className={`px-2.5 py-1 rounded-md text-xs font-mono border ${edgeBadge}`}>
                    {w.edge}
                  </span>
                </div>
              </div>

              {/* Side-by-side Response Columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* Model A Column */}
                <div className={`p-4 rounded-xl border ${isIgegEdge ? 'border-blue-300 bg-blue-50/50' : 'border-slate-200 bg-slate-50/50'} space-y-2`}>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xs uppercase font-mono text-blue-800">
                      Model A: Bulaqueña IGEG
                    </span>
                    {isIgegEdge && (
                      <span className="text-[10px] font-mono px-1.5 py-0.5 bg-blue-200 text-blue-900 rounded font-bold">
                        ★ Distinct Edge
                      </span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
                    {w.igegAnswer}
                  </p>
                </div>

                {/* Model B Column */}
                <div className={`p-4 rounded-xl border ${isResRagEdge ? 'border-amber-300 bg-amber-50/50' : 'border-slate-200 bg-slate-50/50'} space-y-2`}>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xs uppercase font-mono text-amber-800">
                      Model B: Tassan RES=RAG
                    </span>
                    {isResRagEdge && (
                      <span className="text-[10px] font-mono px-1.5 py-0.5 bg-amber-200 text-amber-900 rounded font-bold">
                        ★ Distinct Edge
                      </span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
                    {w.resragAnswer}
                  </p>
                </div>

              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
