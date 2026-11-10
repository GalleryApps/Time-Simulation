import React, { useState, useMemo } from 'react';
import { MathDisplay } from './MathDisplay';
import { FACTORS_100, FactorItem } from '../types/factors100';

export const Factors100MatrixView: React.FC = () => {
  const [selectedModule, setSelectedModule] = useState<number | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedVerdict, setSelectedVerdict] = useState<string>('all');
  const [expandedIds, setExpandedIds] = useState<Set<number>>(new Set([1, 2, 3])); // First few expanded by default

  const filteredFactors = useMemo(() => {
    return FACTORS_100.filter((item) => {
      const matchesModule = selectedModule === 'all' || item.module === selectedModule;
      const matchesVerdict = selectedVerdict === 'all' || item.verdict === selectedVerdict;
      const matchesSearch = searchQuery === '' ||
        item.id.toString() === searchQuery.trim() ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.physicalImpact.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.modelADerivation.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.modelBDerivation.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.keyEquation.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.adversarialAudit && item.adversarialAudit.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesModule && matchesVerdict && matchesSearch;
    });
  }, [selectedModule, selectedVerdict, searchQuery]);

  const stats = useMemo(() => {
    const total = FACTORS_100.length;
    const modelASuperior = FACTORS_100.filter(f => f.verdict === 'Model A Superior').length;
    const dualSynthesis = FACTORS_100.filter(f => f.verdict === 'Dual-Layer Synthesis').length;
    const modelBSuperior = FACTORS_100.filter(f => f.verdict === 'Model B Superior').length;
    const modelBDisproven = FACTORS_100.filter(f => f.verdict === 'Model B Disproven').length;
    return { total, modelASuperior, dualSynthesis, modelBSuperior, modelBDisproven };
  }, []);

  const toggleExpand = (id: number) => {
    setExpandedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const expandAll = () => {
    setExpandedIds(new Set(filteredFactors.map(f => f.id)));
  };

  const collapseAll = () => {
    setExpandedIds(new Set());
  };

  const handleDownloadCSV = () => {
    const headers = ['Factor #', 'Module', 'Title', 'Model A (Bulaqueña IGG)', 'Model B (Tassan RES-RAG)', 'Verdict', 'Key Equation', 'Physical Impact', 'Adversarial Audit'];
    const rows = FACTORS_100.map(f => [
      f.id,
      f.module,
      `"${f.title.replace(/"/g, '""')}"`,
      `"${f.modelADerivation.replace(/"/g, '""')}"`,
      `"${f.modelBDerivation.replace(/"/g, '""')}"`,
      `"${f.verdict}"`,
      `"${f.keyEquation.replace(/"/g, '""')}"`,
      `"${f.physicalImpact.replace(/"/g, '""')}"`,
      `"${(f.adversarialAudit || '').replace(/"/g, '""')}"`
    ]);
    const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'quantum_time_100_factor_matrix_adversarial.csv';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-8 max-w-6xl mx-auto pb-20">
      
      {/* SECTION 2 HEADER - Clean Light Aesthetic */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-10 shadow-sm space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-5">
          <div className="space-y-1">
            <span className="text-xs font-mono font-semibold text-indigo-600 uppercase tracking-wider">
              Section 2 · 100-Factor Technical Stress-Test Matrix
            </span>
            <h1 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 tracking-tight">
              100-Factor Physical Stress-Test & Adversarial Review Matrix
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">
              Exhaustive comparative stress-test between Model A (Bulaqueña Information Geometric Gradient) and Model B (Jean-Charles Tassan RES=RAG). Every factor includes master equations, side-by-side derivations, physical impacts, and rigorous adversarial red-team audits.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadCSV}
              className="px-3.5 py-2 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-colors shadow-sm flex items-center gap-1.5 shrink-0"
            >
              <span>Download CSV (100 Factors)</span>
              <span aria-hidden="true">↓</span>
            </button>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
            <div className="text-slate-500 uppercase text-[10px]">Total Checkpoints</div>
            <div className="text-lg font-bold text-slate-900 mt-0.5">{stats.total} Factors</div>
            <div className="text-[10px] text-slate-400">100% Fully Documented</div>
          </div>
          <div className="p-3 bg-blue-50/70 rounded-xl border border-blue-200">
            <div className="text-blue-700 uppercase text-[10px]">Model A Advantage</div>
            <div className="text-lg font-bold text-blue-900 mt-0.5">{stats.modelASuperior} Factors</div>
            <div className="text-[10px] text-blue-600">Metric & Tensor Covariance</div>
          </div>
          <div className="p-3 bg-indigo-50/70 rounded-xl border border-indigo-200">
            <div className="text-indigo-700 uppercase text-[10px]">Dual-Layer Synthesis</div>
            <div className="text-lg font-bold text-indigo-900 mt-0.5">{stats.dualSynthesis} Factors</div>
            <div className="text-[10px] text-indigo-600">Micro Engine + Macro Rhythm</div>
          </div>
          <div className="p-3 bg-amber-50/70 rounded-xl border border-amber-200">
            <div className="text-amber-700 uppercase text-[10px]">Model B / Disproven</div>
            <div className="text-lg font-bold text-amber-900 mt-0.5">{stats.modelBSuperior + stats.modelBDisproven} Factors</div>
            <div className="text-[10px] text-amber-600">LIV Dispersion & Observers</div>
          </div>
        </div>
      </div>

      {/* FILTER TOOLBAR */}
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm space-y-4">
        {/* Module Selector Buttons */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap gap-1.5 p-1 bg-slate-100 rounded-xl text-xs font-medium">
            <button
              onClick={() => setSelectedModule('all')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${selectedModule === 'all' ? 'bg-white text-slate-900 shadow-sm font-semibold' : 'text-slate-600 hover:text-slate-900'}`}
            >
              All 100 Factors
            </button>
            <button
              onClick={() => setSelectedModule(1)}
              className={`px-3 py-1.5 rounded-lg transition-colors ${selectedModule === 1 ? 'bg-white text-slate-900 shadow-sm font-semibold' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Module 1: Foundations (1–25)
            </button>
            <button
              onClick={() => setSelectedModule(2)}
              className={`px-3 py-1.5 rounded-lg transition-colors ${selectedModule === 2 ? 'bg-white text-slate-900 shadow-sm font-semibold' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Module 2: Field Equations (26–50)
            </button>
            <button
              onClick={() => setSelectedModule(3)}
              className={`px-3 py-1.5 rounded-lg transition-colors ${selectedModule === 3 ? 'bg-white text-slate-900 shadow-sm font-semibold' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Module 3: Cosmology & Extremes (51–75)
            </button>
            <button
              onClick={() => setSelectedModule(4)}
              className={`px-3 py-1.5 rounded-lg transition-colors ${selectedModule === 4 ? 'bg-white text-slate-900 shadow-sm font-semibold' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Module 4: Collisions & Verdict (76–100)
            </button>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono">
            <button
              onClick={expandAll}
              className="px-2.5 py-1.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
            >
              Expand All
            </button>
            <button
              onClick={collapseAll}
              className="px-2.5 py-1.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
            >
              Collapse All
            </button>
          </div>
        </div>

        {/* Search & Verdict Filters */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-1 border-t border-slate-100">
          <div className="flex-1 min-w-[240px]">
            <input
              type="text"
              placeholder="Search across all 100 factors (title, equations, physical impact, or adversarial audits)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
            />
          </div>

          <div className="flex items-center gap-2 text-xs">
            <span className="text-slate-500">Filter Verdict:</span>
            <select
              value={selectedVerdict}
              onChange={(e) => setSelectedVerdict(e.target.value)}
              className="px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
            >
              <option value="all">All Verdicts</option>
              <option value="Model A Superior">Model A Superior</option>
              <option value="Dual-Layer Synthesis">Dual-Layer Synthesis</option>
              <option value="Model B Superior">Model B Superior</option>
            </select>
          </div>
        </div>
      </div>

      {/* 100-FACTOR ACCORDION LIST */}
      <div className="space-y-3">
        {filteredFactors.length === 0 ? (
          <div className="rounded-2xl border border-slate-200 bg-white p-12 text-center text-slate-500 text-sm">
            No factors matching your search criteria. Try resetting the filters.
          </div>
        ) : (
          filteredFactors.map((factor) => {
            const isExpanded = expandedIds.has(factor.id);
            return (
              <div
                key={factor.id}
                className={`rounded-xl border transition-all ${isExpanded ? 'border-indigo-300 bg-white shadow-md' : 'border-slate-200 bg-white hover:border-slate-300 shadow-xs'}`}
              >
                {/* Header Row */}
                <div
                  onClick={() => toggleExpand(factor.id)}
                  className="p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4 cursor-pointer select-none"
                >
                  <div className="flex items-center gap-3">
                    <span className="h-7 w-7 rounded-lg bg-slate-100 flex items-center justify-center text-xs font-mono font-bold text-slate-700 shrink-0">
                      #{factor.id}
                    </span>
                    <div>
                      <span className="text-xs font-mono text-slate-500 block">
                        Module {factor.module}
                      </span>
                      <h3 className="text-sm sm:text-base font-semibold text-slate-900">
                        {factor.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-mono font-semibold ${
                        factor.verdict === 'Model A Superior'
                          ? 'bg-blue-50 text-blue-700 border border-blue-200'
                          : factor.verdict === 'Dual-Layer Synthesis'
                          ? 'bg-indigo-50 text-indigo-700 border border-indigo-200'
                          : 'bg-amber-50 text-amber-700 border border-amber-200'
                      }`}
                    >
                      {factor.verdict}
                    </span>
                    <span className="text-slate-400 text-xs font-mono">
                      {isExpanded ? '▲ Collapse' : '▼ Expand'}
                    </span>
                  </div>
                </div>

                {/* Expanded Detailed Breakdown */}
                {isExpanded && (
                  <div className="border-t border-slate-100 p-5 sm:p-6 bg-slate-50/50 space-y-5 rounded-b-xl text-xs text-slate-700">
                    
                    {/* Key Master Equation */}
                    <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-2xs space-y-1">
                      <span className="text-[10px] font-mono uppercase font-bold text-slate-400 block">
                        Master Mathematical Formalism:
                      </span>
                      <div className="text-sm font-mono text-slate-900 py-1">
                        <MathDisplay block math={factor.keyEquation} />
                      </div>
                    </div>

                    {/* Comparative Two-Column Derivation */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      
                      {/* Model A Breakdown */}
                      <div className="p-4 bg-white rounded-xl border border-blue-100 shadow-2xs space-y-2">
                        <span className="font-bold text-blue-800 uppercase font-mono block text-[11px]">
                          Model A: Bulaqueña IGG Framework
                        </span>
                        <p className="leading-relaxed text-slate-700">
                          {factor.modelADerivation}
                        </p>
                      </div>

                      {/* Model B Breakdown */}
                      <div className="p-4 bg-white rounded-xl border border-amber-100 shadow-2xs space-y-2">
                        <span className="font-bold text-amber-800 uppercase font-mono block text-[11px]">
                          Model B: Jean-Charles Tassan RES-RAG
                        </span>
                        <p className="leading-relaxed text-slate-700">
                          {factor.modelBDerivation}
                        </p>
                      </div>

                    </div>

                    {/* Physical Impact */}
                    <div className="p-3 bg-indigo-50/60 rounded-lg border border-indigo-100 text-indigo-950 flex items-start gap-2">
                      <span className="font-semibold shrink-0">Impact on Universe:</span>
                      <span>{factor.physicalImpact}</span>
                    </div>

                    {/* Adversarial Red-Team Audit */}
                    {factor.adversarialAudit && (
                      <div className="p-3.5 bg-rose-50/50 rounded-xl border border-rose-200 text-slate-800 space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded bg-rose-100 text-rose-800 font-mono text-[10px] font-bold uppercase">
                            Adversarial Red-Team Audit
                          </span>
                        </div>
                        <p className="text-xs text-rose-950 leading-relaxed font-sans mt-1">
                          {factor.adversarialAudit}
                        </p>
                      </div>
                    )}

                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

    </div>
  );
};
