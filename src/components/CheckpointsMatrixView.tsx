import React, { useState, useMemo } from 'react';
import { MathDisplay } from './MathDisplay';
import { CHECKPOINTS_60, CheckpointItem } from '../types/checkpoints60';

export const CheckpointsMatrixView: React.FC = () => {
  const [selectedModule, setSelectedModule] = useState<number | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedVerdict, setSelectedVerdict] = useState<string>('all');
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const filteredCheckpoints = useMemo(() => {
    return CHECKPOINTS_60.filter((item) => {
      const matchesModule = selectedModule === 'all' || item.module === selectedModule;
      const matchesVerdict = selectedVerdict === 'all' || item.verdict === selectedVerdict;
      const matchesSearch = searchQuery === '' || 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.physicalImpact.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.modelADerivation.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.modelBDerivation.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesModule && matchesVerdict && matchesSearch;
    });
  }, [selectedModule, selectedVerdict, searchQuery]);

  const stats = useMemo(() => {
    const total = CHECKPOINTS_60.length;
    const modelASuperior = CHECKPOINTS_60.filter(c => c.verdict === 'Model A Superior').length;
    const modelBDisproven = CHECKPOINTS_60.filter(c => c.verdict === 'Model B Disproven').length;
    const equivalent = CHECKPOINTS_60.filter(c => c.verdict === 'Equivalent / Dual').length;
    return { total, modelASuperior, modelBDisproven, equivalent };
  }, []);

  return (
    <div className="space-y-8 pb-16">
      {/* Banner */}
      <div className="rounded-xl border border-indigo-900/60 bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-950 p-6 shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-wider text-indigo-400">
                Exhaustive 60-Point Stress-Test Matrix · Physical Review D Standard
              </span>
              <a
                href="https://www.academia.edu/164986382/Information_Geometric_Gradient_IGG_The_Secret_Engine_of_Physics_Reality_and_Everything_Else"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-mono text-indigo-300 underline hover:text-indigo-200"
              >
                Academia.edu #164986382 ↗
              </a>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-white font-serif">
              The Bulaqueña IGG (Information Geometric Gradient) vs. Causal-Set 60+ Parameter Audit
            </h2>
            <div className="text-xs text-slate-400">
              Model A is formulated on: <em>Information Geometric Gradient (IGG): The Secret Engine of Physics, Reality, and Everything Else</em> by Bulaqueña.
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="px-3 py-1.5 rounded-lg bg-emerald-950/80 border border-emerald-800/60 text-emerald-300 font-semibold">
              Model A Victorious: {stats.modelASuperior + stats.modelBDisproven}/60
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-red-950/80 border border-red-800/60 text-red-300 font-semibold">
              Model B Disproven: {stats.modelBDisproven}
            </span>
          </div>
        </div>
        <p className="mt-3 text-sm text-slate-300 leading-relaxed max-w-5xl">
          An unsparing physical and mathematical cross-examination across all 60 established fundamentals, field equation derivations, cosmological scaling laws, and counterfactuals. Inspect every individual checkpoint below with closed-form equations.
        </p>
      </div>

      {/* Filter Toolbar */}
      <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* Module Selectors */}
          <div className="flex flex-wrap gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800 text-xs">
            <button
              onClick={() => setSelectedModule('all')}
              className={`px-3 py-1.5 rounded-md font-medium transition-colors ${selectedModule === 'all' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'}`}
            >
              All 60 Checkpoints
            </button>
            <button
              onClick={() => setSelectedModule(1)}
              className={`px-3 py-1.5 rounded-md font-medium transition-colors ${selectedModule === 1 ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'}`}
            >
              Mod 1: Axioms (1–15)
            </button>
            <button
              onClick={() => setSelectedModule(2)}
              className={`px-3 py-1.5 rounded-md font-medium transition-colors ${selectedModule === 2 ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'}`}
            >
              Mod 2: Field Laws (16–30)
            </button>
            <button
              onClick={() => setSelectedModule(3)}
              className={`px-3 py-1.5 rounded-md font-medium transition-colors ${selectedModule === 3 ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'}`}
            >
              Mod 3: Cosmology (31–45)
            </button>
            <button
              onClick={() => setSelectedModule(4)}
              className={`px-3 py-1.5 rounded-md font-medium transition-colors ${selectedModule === 4 ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'}`}
            >
              Mod 4: Falsifiability (46–60)
            </button>
          </div>

          {/* Search Box */}
          <div className="flex-1 min-w-[200px] max-w-sm">
            <input
              type="text"
              placeholder="Search equations, axioms, LIV, WDW..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-slate-800 bg-slate-950 px-3 py-1.5 text-xs text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Secondary Filter: Verdict */}
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <span>Filter by Status:</span>
          {['all', 'Model A Superior', 'Model B Disproven', 'Equivalent / Dual'].map((v) => (
            <button
              key={v}
              onClick={() => setSelectedVerdict(v)}
              className={`px-2.5 py-1 rounded transition-colors ${selectedVerdict === v ? 'bg-slate-800 text-white font-semibold' : 'hover:text-slate-200'}`}
            >
              {v === 'all' ? 'All Statuses' : v}
            </button>
          ))}
          <span className="ml-auto font-mono text-[11px] text-slate-500">
            Showing {filteredCheckpoints.length} of 60 items
          </span>
        </div>
      </div>

      {/* Checkpoints Grid */}
      <div className="space-y-3">
        {filteredCheckpoints.map((item) => {
          const isExpanded = expandedId === item.id;
          return (
            <div
              key={item.id}
              className={`rounded-xl border transition-all ${isExpanded ? 'border-indigo-500/80 bg-slate-900/90 shadow-xl' : 'border-slate-800/80 bg-slate-900/40 hover:border-slate-700'}`}
            >
              {/* Header Row */}
              <div
                onClick={() => setExpandedId(isExpanded ? null : item.id)}
                className="flex items-center justify-between p-4 cursor-pointer select-none gap-4"
              >
                <div className="flex items-center gap-3">
                  <span className="flex items-center justify-center h-7 w-7 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono font-bold text-indigo-400 shrink-0">
                    #{item.id}
                  </span>
                  <div>
                    <div className="text-xs font-mono text-slate-400">
                      Module {item.module} · Checkpoint #{item.id}
                    </div>
                    <h3 className="text-sm font-bold text-white tracking-tight">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <span
                    className={`px-2.5 py-1 rounded text-[11px] font-mono font-semibold ${
                      item.verdict === 'Model A Superior'
                        ? 'bg-emerald-950 text-emerald-300 border border-emerald-800/50'
                        : item.verdict === 'Model B Disproven'
                        ? 'bg-red-950 text-red-300 border border-red-800/50'
                        : 'bg-slate-800 text-slate-300 border border-slate-700'
                    }`}
                  >
                    {item.verdict}
                  </span>
                  <span className="text-slate-400 text-xs">
                    {isExpanded ? '▲' : '▼'}
                  </span>
                </div>
              </div>

              {/* Expanded Detail Body */}
              {isExpanded && (
                <div className="px-4 pb-6 pt-2 border-t border-slate-800/80 space-y-4 text-xs text-slate-200">
                  {/* Key Equation Box */}
                  <div className="rounded-lg bg-slate-950 p-3 border border-slate-800 text-center">
                    <div className="text-[10px] font-mono uppercase text-slate-500 mb-1">Analytical Formula</div>
                    <MathDisplay block math={item.keyEquation} />
                  </div>

                  {/* Two Column Comparative Breakdown */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="rounded-lg bg-slate-950/70 p-3.5 border border-emerald-950 space-y-1.5">
                      <div className="text-[11px] font-mono font-bold text-emerald-400 uppercase">
                        Model A (Bulaqueña IGEG Framework)
                      </div>
                      <p className="text-slate-300 leading-relaxed">{item.modelADerivation}</p>
                    </div>

                    <div className="rounded-lg bg-slate-950/70 p-3.5 border border-amber-950 space-y-1.5">
                      <div className="text-[11px] font-mono font-bold text-amber-400 uppercase">
                        Model B (Emergent Causal-Set Time)
                      </div>
                      <p className="text-slate-300 leading-relaxed">{item.modelBDerivation}</p>
                    </div>
                  </div>

                  {/* Physical Consequence Strip */}
                  <div className="p-3 rounded-lg bg-indigo-950/30 border border-indigo-900/40 text-indigo-200 flex items-center justify-between">
                    <div>
                      <strong className="text-white">Physical Impact on the Universe: </strong>
                      <span>{item.physicalImpact}</span>
                    </div>
                    <span className="font-mono text-[10px] text-indigo-300 shrink-0 ml-4">
                      PRD Status: Audited
                    </span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
