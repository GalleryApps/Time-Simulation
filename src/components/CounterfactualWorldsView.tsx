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
    <div className="space-y-8 max-w-6xl mx-auto pb-20 text-[#0C1836]">
      
      {/* Header Banner - Oxford Scholarly Masthead */}
      <div className="oxford-card rounded-2xl p-6 sm:p-8 shadow-xs space-y-6 bg-white border border-[#EAE2D2]">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#EAE2D2] pb-5">
          <div className="space-y-1">
            <span className="text-xs font-mono font-bold text-[#15803D] uppercase tracking-wider">
              Section 4.4 & Table 5 · Counterfactual Testing
            </span>
            <h1 className="text-2xl sm:text-3xl font-serif font-bold text-[#081026] tracking-tight">
              14 Counterfactual Universes & Stress-Testing Time
            </h1>
            <p className="text-xs sm:text-sm text-[#475569] max-w-3xl leading-relaxed">
              A direct test of a theory of time is to remove time, or its supposed source, and ask what the theory implies should remain. In each world, one fundamental physical law is altered. The "edge" goes to the framework giving the more definite and self-consistent answer.
            </p>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs">
            <span className="px-3 py-1.5 rounded-lg bg-[#DCFCE7] text-[#14532D] border border-[#86EFAC] font-bold">
              100 Counterfactual Tests (142 vs 87)
            </span>
          </div>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
          <div className="flex flex-wrap items-center gap-1.5 text-xs font-medium">
            <span className="text-[#64748B] mr-1 font-mono uppercase text-[10px]">Filter Edge:</span>
            <button
              onClick={() => setSelectedEdge('all')}
              className={`px-3 py-1.5 rounded-lg border transition-colors ${
                selectedEdge === 'all'
                  ? 'bg-[#0C1836] text-[#FDFBF7] border-[#081026] font-semibold'
                  : 'bg-[#F9F6F0] text-[#0C1836] border-[#EAE2D2] hover:bg-white'
              }`}
            >
              All 14 Universes
            </button>
            <button
              onClick={() => setSelectedEdge('IGEG')}
              className={`px-3 py-1.5 rounded-lg border transition-colors ${
                selectedEdge === 'IGEG'
                  ? 'bg-[#1A3670] text-white border-[#142B5B] font-semibold'
                  : 'bg-[#F9F6F0] text-[#0C1836] border-[#EAE2D2] hover:bg-white'
              }`}
            >
              IGEG Edge (4)
            </button>
            <button
              onClick={() => setSelectedEdge('RES=RAG')}
              className={`px-3 py-1.5 rounded-lg border transition-colors ${
                selectedEdge === 'RES=RAG'
                  ? 'bg-[#EA580C] text-white border-[#C2410C] font-semibold'
                  : 'bg-[#F9F6F0] text-[#0C1836] border-[#EAE2D2] hover:bg-white'
              }`}
            >
              RES=RAG Edge (2)
            </button>
            <button
              onClick={() => setSelectedEdge('Level')}
              className={`px-3 py-1.5 rounded-lg border transition-colors ${
                selectedEdge === 'Level'
                  ? 'bg-[#6D28D9] text-white border-[#5B21B6] font-semibold'
                  : 'bg-[#F9F6F0] text-[#0C1836] border-[#EAE2D2] hover:bg-white'
              }`}
            >
              Level / Tie (6)
            </button>
            <button
              onClick={() => setSelectedEdge('Neither')}
              className={`px-3 py-1.5 rounded-lg border transition-colors ${
                selectedEdge === 'Neither'
                  ? 'bg-[#475569] text-white border-[#334155] font-semibold'
                  : 'bg-[#F9F6F0] text-[#0C1836] border-[#EAE2D2] hover:bg-white'
              }`}
            >
              Neither (2)
            </button>
          </div>
          <div className="text-xs font-mono text-[#64748B]">
            Showing {filteredWorlds.length} of 14 scenarios
          </div>
        </div>
      </div>

      {/* Universes Cards */}
      <div className="grid grid-cols-1 gap-5">
        {filteredWorlds.map((w) => {
          const isIgegEdge = w.edge.includes('IGEG') && !w.edge.includes('Level');
          const isResRagEdge = w.edge.includes('RES=RAG') && !w.edge.includes('Level');

          let edgeBadge = 'bg-[#F9F6F0] text-[#475569] border-[#EAE2D2]';
          if (isIgegEdge) edgeBadge = 'bg-[#EBF0FE] text-[#1A3670] border-[#CBD9FC] font-bold';
          else if (isResRagEdge) edgeBadge = 'bg-[#FFEDD5] text-[#9A3412] border-[#FDBA74] font-bold';
          else if (w.edge.includes('Level')) edgeBadge = 'bg-[#FAF5FF] text-[#6B21A8] border-[#E9D5FF] font-semibold';

          return (
            <div
              key={w.id}
              className="oxford-card rounded-2xl p-6 shadow-xs space-y-4 hover:border-[#CBD5E1] transition-all bg-white border border-[#EAE2D2]"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#EAE2D2] pb-3">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-[#F4EFE6] text-[#0C1836] border border-[#EAE2D2]">
                    Scenario #{w.id}
                  </span>
                  <h3 className="text-base font-serif font-bold text-[#081026]">
                    {w.world}
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-[#64748B] font-mono">Evaluation Edge:</span>
                  <span className={`px-2.5 py-1 rounded-md text-xs font-mono border ${edgeBadge}`}>
                    {w.edge}
                  </span>
                </div>
              </div>

              {/* Side-by-side Response Columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* Model A Column */}
                <div className={`p-4 rounded-xl border ${isIgegEdge ? 'border-[#CBD9FC] bg-[#F4F7FF]' : 'border-[#EAE2D2] bg-[#FDFBF7]'} space-y-2`}>
                  <div className="flex items-center justify-between">
                    <span className="font-serif font-bold text-xs uppercase text-[#1A3670]">
                      Model A: Bulaqueña IGEG
                    </span>
                    {isIgegEdge && (
                      <span className="text-[10px] font-mono px-1.5 py-0.5 bg-[#CBD9FC] text-[#0C1836] rounded font-bold">
                        ★ Distinct Edge
                      </span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-[#334155] leading-relaxed font-sans">
                    {w.igegAnswer}
                  </p>
                </div>

                {/* Model B Column */}
                <div className={`p-4 rounded-xl border ${isResRagEdge ? 'border-[#FDBA74] bg-[#FFF7ED]' : 'border-[#EAE2D2] bg-[#FDFBF7]'} space-y-2`}>
                  <div className="flex items-center justify-between">
                    <span className="font-serif font-bold text-xs uppercase text-[#9A3412]">
                      Model B: Tassan RES=RAG
                    </span>
                    {isResRagEdge && (
                      <span className="text-[10px] font-mono px-1.5 py-0.5 bg-[#FDBA74] text-[#7C2D12] rounded font-bold">
                        ★ Distinct Edge
                      </span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-[#334155] leading-relaxed font-sans">
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
