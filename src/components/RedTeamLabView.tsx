import React, { useState, useMemo } from 'react';
import { RED_TEAM_ATTACKS, RedTeamAttack } from '../types/manuscriptData';

export const RedTeamLabView: React.FC = () => {
  const [selectedTarget, setSelectedTarget] = useState<'all' | 'IGEG' | 'RES=RAG'>('all');
  const [selectedOutcome, setSelectedOutcome] = useState<string>('all');
  const [activeAttackId, setActiveAttackId] = useState<number | null>(null);

  const filteredAttacks = useMemo(() => {
    return RED_TEAM_ATTACKS.filter(item => {
      if (selectedTarget !== 'all' && item.target !== selectedTarget) return false;
      if (selectedOutcome !== 'all' && item.outcome !== selectedOutcome) return false;
      return true;
    });
  }, [selectedTarget, selectedOutcome]);

  const stats = useMemo(() => {
    const igeg = RED_TEAM_ATTACKS.filter(a => a.target === 'IGEG');
    const resrag = RED_TEAM_ATTACKS.filter(a => a.target === 'RES=RAG');

    const igegFails = igeg.filter(a => a.outcome.startsWith('Fails')).length; // 1
    const igegWounded = igeg.filter(a => a.outcome === 'Wounded').length; // 6
    const igegOpen = igeg.filter(a => a.outcome === 'Open').length; // 3

    const resragFails = resrag.filter(a => a.outcome.startsWith('Fails')).length; // 3
    const resragWounded = resrag.filter(a => a.outcome === 'Wounded').length; // 5
    const resragOpen = resrag.filter(a => a.outcome === 'Open').length; // 2

    return { igegFails, igegWounded, igegOpen, resragFails, resragWounded, resragOpen };
  }, []);

  const getOutcomeBadge = (outcome: string) => {
    if (outcome.startsWith('Fails')) {
      return (
        <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-rose-100 text-rose-800 border border-rose-200">
          {outcome}
        </span>
      );
    }
    if (outcome === 'Wounded') {
      return (
        <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-amber-100 text-amber-800 border border-amber-200">
          Wounded (Must Adapt)
        </span>
      );
    }
    if (outcome === 'Survives') {
      return (
        <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
          Survives
        </span>
      );
    }
    return (
      <span className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-slate-100 text-slate-700 border border-slate-200">
        Open (Undecided)
      </span>
    );
  };

  return (
    <div className="space-y-8 max-w-6xl mx-auto pb-20">
      
      {/* Header Banner */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-5">
          <div className="space-y-1">
            <span className="text-xs font-mono font-semibold text-rose-600 uppercase tracking-wider">
              Section 4.3 · Table 4 Red-Team Round
            </span>
            <h1 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 tracking-tight">
              20 Direct Adversarial Attacks & Vulnerability Audit
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">
              Scores measure what a framework possesses; attacks measure whether what it possesses survives a determined opponent. 20 of the strongest possible theoretical objections were formulated (10 per framework) and rated as Survives, Wounded, Fails (as stated/as physics), or Open.
            </p>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs text-slate-500">
            <span className="px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200">
              10 Attacks on IGEG
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200">
              10 Attacks on RES=RAG
            </span>
          </div>
        </div>

        {/* Attack Outcome Breakdown Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* IGEG Card */}
          <div className="p-4 rounded-xl border border-blue-200 bg-blue-50/40 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-bold text-sm text-blue-900">Model A: Bulaqueña IGEG</span>
              <span className="text-xs font-mono text-blue-700">10 Attacks Total</span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono">
              <div className="p-2 bg-white rounded-lg border border-blue-200">
                <div className="text-rose-700 font-bold text-base">{stats.igegFails}</div>
                <div className="text-[10px] text-slate-500">Fails (as stated)</div>
              </div>
              <div className="p-2 bg-white rounded-lg border border-blue-200">
                <div className="text-amber-700 font-bold text-base">{stats.igegWounded}</div>
                <div className="text-[10px] text-slate-500">Wounded</div>
              </div>
              <div className="p-2 bg-white rounded-lg border border-blue-200">
                <div className="text-slate-700 font-bold text-base">{stats.igegOpen}</div>
                <div className="text-[10px] text-slate-500">Open</div>
              </div>
            </div>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              <strong>Key Defect:</strong> One potential V(ψ) cannot honestly unify dark matter, dark energy, and inflation simultaneously across 50 orders of magnitude without severe fine-tuning.
            </p>
          </div>

          {/* RES=RAG Card */}
          <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/40 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-bold text-sm text-amber-900">Model B: Tassan RES=RAG</span>
              <span className="text-xs font-mono text-amber-700">10 Attacks Total</span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono">
              <div className="p-2 bg-white rounded-lg border border-amber-200">
                <div className="text-rose-700 font-bold text-base">{stats.resragFails}</div>
                <div className="text-[10px] text-slate-500">Fails (physics/stated)</div>
              </div>
              <div className="p-2 bg-white rounded-lg border border-amber-200">
                <div className="text-amber-700 font-bold text-base">{stats.resragWounded}</div>
                <div className="text-[10px] text-slate-500">Wounded</div>
              </div>
              <div className="p-2 bg-white rounded-lg border border-amber-200">
                <div className="text-slate-700 font-bold text-base">{stats.resragOpen}</div>
                <div className="text-[10px] text-slate-500">Open</div>
              </div>
            </div>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              <strong>Key Defects:</strong> (1) Cannot explain cosmic history prior to observers; (2) Has no spacetime metric to state how much time passed; (3) Lacks an entropy functional for generation costs.
            </p>
          </div>

        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-100">
          <div className="flex items-center gap-1.5 text-xs font-medium">
            <span className="text-slate-500 mr-1 font-mono uppercase text-[10px]">Target:</span>
            <button
              onClick={() => setSelectedTarget('all')}
              className={`px-3 py-1.5 rounded-lg border transition-colors ${
                selectedTarget === 'all'
                  ? 'bg-slate-900 text-white border-slate-900 font-semibold'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
              }`}
            >
              All 20 Attacks
            </button>
            <button
              onClick={() => setSelectedTarget('IGEG')}
              className={`px-3 py-1.5 rounded-lg border transition-colors ${
                selectedTarget === 'IGEG'
                  ? 'bg-blue-700 text-white border-blue-700 font-semibold'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
              }`}
            >
              IGEG Attacks (10)
            </button>
            <button
              onClick={() => setSelectedTarget('RES=RAG')}
              className={`px-3 py-1.5 rounded-lg border transition-colors ${
                selectedTarget === 'RES=RAG'
                  ? 'bg-amber-700 text-white border-amber-700 font-semibold'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
              }`}
            >
              RES=RAG Attacks (10)
            </button>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-slate-500 font-mono text-xs">Outcome:</span>
            <select
              value={selectedOutcome}
              onChange={(e) => setSelectedOutcome(e.target.value)}
              className="rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-700 focus:outline-none focus:border-indigo-500"
            >
              <option value="all">All Outcomes</option>
              <option value="Fails (as stated)">Fails (as stated)</option>
              <option value="Fails (as physics)">Fails (as physics)</option>
              <option value="Wounded">Wounded</option>
              <option value="Open">Open</option>
            </select>
          </div>
        </div>
      </div>

      {/* Attack List Cards */}
      <div className="grid grid-cols-1 gap-4">
        {filteredAttacks.map((attack) => {
          const isTargetA = attack.target === 'IGEG';
          const cardBorder = isTargetA ? 'hover:border-blue-300' : 'hover:border-amber-300';
          const badgeTarget = isTargetA 
            ? 'bg-blue-50 text-blue-700 border-blue-200' 
            : 'bg-amber-50 text-amber-700 border-amber-200';

          return (
            <div
              key={attack.id}
              className={`rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm transition-all ${cardBorder} space-y-3`}
            >
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-slate-400">#{attack.id}</span>
                  <span className={`px-2.5 py-0.5 rounded text-xs font-mono font-bold border ${badgeTarget}`}>
                    {attack.target}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900">
                    {attack.attack}
                  </h3>
                </div>
                <div>
                  {getOutcomeBadge(attack.outcome)}
                </div>
              </div>

              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
                <span className="font-mono text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
                  Adversarial Audit Reasoning
                </span>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {attack.reasoning}
                </p>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
