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
        <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-[#FEF2F2] text-[#991B1B] border border-[#FECACA]">
          {outcome}
        </span>
      );
    }
    if (outcome === 'Wounded') {
      return (
        <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-[#FEF3C7] text-[#92400E] border border-[#FCD34D]">
          Wounded (Must Adapt)
        </span>
      );
    }
    if (outcome === 'Survives') {
      return (
        <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-[#F0FDF4] text-[#166534] border border-[#BBF7D0]">
          Survives
        </span>
      );
    }
    return (
      <span className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-[#F9F6F0] text-[#475569] border border-[#EAE2D2]">
        Open (Undecided)
      </span>
    );
  };

  return (
    <div className="space-y-8 max-w-6xl mx-auto pb-20 text-[#0C1836]">
      
      {/* Header Banner - Oxford Scholarly Masthead */}
      <div className="oxford-card rounded-2xl p-6 sm:p-8 shadow-xs space-y-6 bg-white border border-[#EAE2D2]">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#EAE2D2] pb-5">
          <div className="space-y-1">
            <span className="text-xs font-mono font-bold text-[#EA580C] uppercase tracking-wider">
              Section 4.3 · Table 4 Red-Team Round
            </span>
            <h1 className="text-2xl sm:text-3xl font-serif font-bold text-[#081026] tracking-tight">
              20 Direct Adversarial Attacks & Vulnerability Audit
            </h1>
            <p className="text-xs sm:text-sm text-[#475569] max-w-3xl leading-relaxed">
              Scores measure what a framework possesses; attacks measure whether what it possesses survives a determined opponent. 20 of the strongest possible theoretical objections were formulated (10 per framework) and rated as Survives, Wounded, Fails (as stated/as physics), or Open.
            </p>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs text-[#64748B]">
            <span className="px-3 py-1.5 rounded-lg bg-[#F9F6F0] border border-[#EAE2D2] text-[#0C1836] font-medium">
              10 Attacks on IGEG
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-[#F9F6F0] border border-[#EAE2D2] text-[#0C1836] font-medium">
              10 Attacks on RES=RAG
            </span>
          </div>
        </div>

        {/* Attack Outcome Breakdown Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* IGEG Card */}
          <div className="p-4 rounded-xl border border-[#CBD9FC] bg-[#F4F7FF] space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-serif font-bold text-sm text-[#1A3670]">Model A: Bulaqueña IGEG</span>
              <span className="text-xs font-mono text-[#1A3670]">10 Attacks Total</span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono">
              <div className="p-2 bg-white rounded-lg border border-[#CBD9FC]">
                <div className="text-[#991B1B] font-bold text-base">{stats.igegFails}</div>
                <div className="text-[10px] text-[#64748B]">Fails (as stated)</div>
              </div>
              <div className="p-2 bg-white rounded-lg border border-[#CBD9FC]">
                <div className="text-[#92400E] font-bold text-base">{stats.igegWounded}</div>
                <div className="text-[10px] text-[#64748B]">Wounded</div>
              </div>
              <div className="p-2 bg-white rounded-lg border border-[#CBD9FC]">
                <div className="text-[#475569] font-bold text-base">{stats.igegOpen}</div>
                <div className="text-[10px] text-[#64748B]">Open</div>
              </div>
            </div>
            <p className="text-[11px] text-[#475569] leading-relaxed">
              <strong>Key Defect:</strong> One potential V(ψ) cannot honestly unify dark matter, dark energy, and inflation simultaneously across 50 orders of magnitude without severe fine-tuning.
            </p>
          </div>

          {/* RES=RAG Card */}
          <div className="p-4 rounded-xl border border-[#FDBA74] bg-[#FFF7ED] space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-serif font-bold text-sm text-[#9A3412]">Model B: Tassan RES=RAG</span>
              <span className="text-xs font-mono text-[#9A3412]">10 Attacks Total</span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono">
              <div className="p-2 bg-white rounded-lg border border-[#FDBA74]">
                <div className="text-[#991B1B] font-bold text-base">{stats.resragFails}</div>
                <div className="text-[10px] text-[#64748B]">Fails (physics/stated)</div>
              </div>
              <div className="p-2 bg-white rounded-lg border border-[#FDBA74]">
                <div className="text-[#92400E] font-bold text-base">{stats.resragWounded}</div>
                <div className="text-[10px] text-[#64748B]">Wounded</div>
              </div>
              <div className="p-2 bg-white rounded-lg border border-[#FDBA74]">
                <div className="text-[#475569] font-bold text-base">{stats.resragOpen}</div>
                <div className="text-[10px] text-[#64748B]">Open</div>
              </div>
            </div>
            <p className="text-[11px] text-[#475569] leading-relaxed">
              <strong>Key Defects:</strong> (1) Cannot explain cosmic history prior to observers; (2) Has no spacetime metric to state how much time passed; (3) Lacks an entropy functional for generation costs.
            </p>
          </div>

        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-[#EAE2D2]">
          <div className="flex items-center gap-1.5 text-xs font-medium">
            <span className="text-[#64748B] mr-1 font-mono uppercase text-[10px]">Target:</span>
            <button
              onClick={() => setSelectedTarget('all')}
              className={`px-3 py-1.5 rounded-lg border transition-colors ${
                selectedTarget === 'all'
                  ? 'bg-[#0C1836] text-[#FDFBF7] border-[#081026] font-semibold'
                  : 'bg-[#F9F6F0] text-[#0C1836] border-[#EAE2D2] hover:bg-white'
              }`}
            >
              All 20 Attacks
            </button>
            <button
              onClick={() => setSelectedTarget('IGEG')}
              className={`px-3 py-1.5 rounded-lg border transition-colors ${
                selectedTarget === 'IGEG'
                  ? 'bg-[#1A3670] text-white border-[#142B5B] font-semibold'
                  : 'bg-[#F9F6F0] text-[#0C1836] border-[#EAE2D2] hover:bg-white'
              }`}
            >
              IGEG Attacks (10)
            </button>
            <button
              onClick={() => setSelectedTarget('RES=RAG')}
              className={`px-3 py-1.5 rounded-lg border transition-colors ${
                selectedTarget === 'RES=RAG'
                  ? 'bg-[#EA580C] text-white border-[#C2410C] font-semibold'
                  : 'bg-[#F9F6F0] text-[#0C1836] border-[#EAE2D2] hover:bg-white'
              }`}
            >
              RES=RAG Attacks (10)
            </button>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[#64748B] font-mono text-xs">Outcome:</span>
            <select
              value={selectedOutcome}
              onChange={(e) => setSelectedOutcome(e.target.value)}
              className="rounded-xl border border-[#EAE2D2] bg-[#FDFBF7] px-3 py-1.5 text-xs text-[#0C1836] focus:outline-none focus:border-[#1A3670]"
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
          const cardBorder = isTargetA ? 'hover:border-[#CBD9FC]' : 'hover:border-[#FDBA74]';
          const badgeTarget = isTargetA 
            ? 'bg-[#EBF0FE] text-[#1A3670] border-[#CBD9FC]' 
            : 'bg-[#FFEDD5] text-[#9A3412] border-[#FDBA74]';

          return (
            <div
              key={attack.id}
              className={`rounded-2xl border border-[#EAE2D2] bg-white p-5 sm:p-6 shadow-2xs transition-all ${cardBorder} space-y-3`}
            >
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#EAE2D2] pb-3">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-[#64748B]">#{attack.id}</span>
                  <span className={`px-2.5 py-0.5 rounded text-xs font-mono font-bold border ${badgeTarget}`}>
                    {attack.target}
                  </span>
                  <h3 className="text-sm sm:text-base font-serif font-bold text-[#081026]">
                    {attack.attack}
                  </h3>
                </div>
                <div>
                  {getOutcomeBadge(attack.outcome)}
                </div>
              </div>

              <div className="p-3.5 bg-[#F9F6F0] rounded-xl border border-[#EAE2D2] space-y-1">
                <span className="font-mono text-[10px] font-bold text-[#64748B] uppercase tracking-wider">
                  Adversarial Audit Reasoning
                </span>
                <p className="text-xs sm:text-sm text-[#334155] leading-relaxed font-sans">
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
