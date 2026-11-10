import React, { useState, useMemo } from 'react';
import { MathDisplay } from './MathDisplay';
import { FACTORS_500, Factor500Item } from '../types/factors500';
import { FAMILIES_META } from '../types/manuscriptData';

export const Factors500MatrixView: React.FC = () => {
  const [selectedFamily, setSelectedFamily] = useState<number | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedVerdict, setSelectedVerdict] = useState<string>('all');
  const [expandedIds, setExpandedIds] = useState<Set<number>>(new Set([1, 2, 3])); // First few expanded by default
  const [visibleCount, setVisibleCount] = useState<number>(50);

  const filteredFactors = useMemo(() => {
    return FACTORS_500.filter((item) => {
      const matchesFamily = selectedFamily === 'all' || item.familyId === selectedFamily;
      const matchesVerdict = selectedVerdict === 'all' || item.verdict === selectedVerdict;
      const matchesSearch = searchQuery === '' ||
        item.id.toString() === searchQuery.trim() ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.physicalImpact.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.modelADerivation.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.modelBDerivation.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.keyEquation.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.adversarialAudit.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesFamily && matchesVerdict && matchesSearch;
    });
  }, [selectedFamily, selectedVerdict, searchQuery]);

  const stats = useMemo(() => {
    const total = FACTORS_500.length;
    const modelASuperior = FACTORS_500.filter(f => f.verdict === 'Model A Superior').length;
    const dualSynthesis = FACTORS_500.filter(f => f.verdict === 'Dual-Layer Synthesis').length;
    const modelBSuperior = FACTORS_500.filter(f => f.verdict === 'Model B Superior').length;
    return { total, modelASuperior, dualSynthesis, modelBSuperior };
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
    const headers = [
      'Factor #',
      'Family ID',
      'Family Name',
      'Title / Criterion',
      'Score Model A (0-3)',
      'Score Model B (0-3)',
      'Verdict',
      'Key Equation',
      'Model A Derivation (Bulaqueña IGEG)',
      'Model B Derivation (Tassan RES-RAG)',
      'Physical Impact',
      'Adversarial Red-Team Audit'
    ];
    const rows = FACTORS_500.map(f => [
      f.id,
      f.familyId,
      `"${f.familyName.replace(/"/g, '""')}"`,
      `"${f.title.replace(/"/g, '""')}"`,
      f.scoreA,
      f.scoreB,
      `"${f.verdict}"`,
      `"${f.keyEquation.replace(/"/g, '""')}"`,
      `"${f.modelADerivation.replace(/"/g, '""')}"`,
      `"${f.modelBDerivation.replace(/"/g, '""')}"`,
      `"${f.physicalImpact.replace(/"/g, '""')}"`,
      `"${f.adversarialAudit.replace(/"/g, '""')}"`
    ]);
    const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'quantum_time_500_factor_physical_stress_test_matrix.csv';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-8 max-w-6xl mx-auto pb-24 text-[#0C1836]">
      
      {/* SECTION HEADER - Oxford Monograph Masthead */}
      <div className="oxford-card rounded-2xl p-6 sm:p-10 shadow-xs space-y-6 bg-white border border-[#EAE2D2]">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#EAE2D2] pb-5">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-[#EA580C] uppercase tracking-wider">
                Oxford Technical Stress-Test Matrix
              </span>
              <span className="px-2.5 py-0.5 rounded-xs bg-[#EBF0FE] text-[#1A3670] text-[10px] font-mono font-bold border border-[#CBD9FC]">
                500 Factors · Complete Audit
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-serif font-bold text-[#081026] tracking-tight">
              500-Factor Physical Stress-Test & Adversarial Review Matrix
            </h1>
            <p className="text-xs sm:text-sm text-[#475569] max-w-3xl leading-relaxed">
              Exhaustive 500-factor comparative stress-test across all 10 physical families comparing <strong>Model A (Marlon Bulaqueña Information Geometric Extended Gravity)</strong> and <strong>Model B (Jean-Charles Tassan RES=RAG Emergent Resonance)</strong>. Every single factor contains master equations, detailed derivations, physical impact on general relativity/quantum cosmology, individual ordinal scores (0-3), and a rigorous adversarial red-team audit.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadCSV}
              className="px-4 py-2 rounded-xl bg-[#0C1836] text-[#FDFBF7] text-xs font-serif font-semibold hover:bg-[#1A3670] transition-colors shadow-xs flex items-center gap-1.5 shrink-0"
            >
              <span>Download CSV (500 Factors)</span>
              <span aria-hidden="true">↓</span>
            </button>
          </div>
        </div>

        {/* STATS OVERVIEW CARDS */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          <div className="p-4 rounded-xl bg-[#F9F6F0] border border-[#EAE2D2]">
            <div className="text-[10px] text-[#64748B] uppercase font-mono font-bold">Total Factors Audited</div>
            <div className="text-2xl font-serif font-bold text-[#081026] mt-1">{stats.total}</div>
            <div className="text-[10px] text-[#64748B] mt-0.5">10 Physical Families</div>
          </div>
          <div className="p-4 rounded-xl bg-[#F4F7FF] border border-[#CBD9FC]">
            <div className="text-[10px] text-[#1A3670] uppercase font-mono font-bold">Model A Superior</div>
            <div className="text-2xl font-serif font-bold text-[#081026] mt-1">{stats.modelASuperior}</div>
            <div className="text-[10px] text-[#1A3670] mt-0.5">Metrics, GR Limits & Covariance</div>
          </div>
          <div className="p-4 rounded-xl bg-[#FFF7ED] border border-[#FDBA74]">
            <div className="text-[10px] text-[#9A3412] uppercase font-mono font-bold">Model B Superior</div>
            <div className="text-2xl font-serif font-bold text-[#78350F] mt-1">{stats.modelBSuperior}</div>
            <div className="text-[10px] text-[#9A3412] mt-0.5">Cognitive Present & Relational Ordering</div>
          </div>
          <div className="p-4 rounded-xl bg-[#FEF3C7] border border-[#FCD34D]">
            <div className="text-[10px] text-[#92400E] uppercase font-mono font-bold">Dual-Layer Synthesis</div>
            <div className="text-2xl font-serif font-bold text-[#78350F] mt-1">{stats.dualSynthesis}</div>
            <div className="text-[10px] text-[#B45309] mt-0.5">Unified Fiber Bundle (IGRT)</div>
          </div>
        </div>

        {/* 10-FAMILY TAB FILTER */}
        <div className="space-y-2 pt-2">
          <div className="flex items-center justify-between text-xs">
            <span className="font-mono text-[#64748B] font-bold uppercase text-[10px]">Filter by Family:</span>
            <div className="flex items-center gap-2">
              <button
                onClick={expandAll}
                className="text-[#1A3670] hover:text-[#081026] text-[11px] font-medium"
              >
                Expand All
              </button>
              <span className="text-[#CBD5E1]">·</span>
              <button
                onClick={collapseAll}
                className="text-[#64748B] hover:text-[#081026] text-[11px] font-medium"
              >
                Collapse All
              </button>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-1.5 text-xs">
            <button
              onClick={() => { setSelectedFamily('all'); setVisibleCount(50); }}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                selectedFamily === 'all'
                  ? 'bg-[#0C1836] text-[#FDFBF7] font-bold shadow-xs'
                  : 'bg-[#F9F6F0] text-[#0C1836] hover:bg-white border border-[#EAE2D2]'
              }`}
            >
              All 10 Families (500)
            </button>
            {FAMILIES_META.map((fam) => (
              <button
                key={fam.id}
                onClick={() => { setSelectedFamily(fam.id); setVisibleCount(50); }}
                className={`px-2.5 py-1.5 rounded-lg font-medium transition-all flex items-center gap-1.5 text-[11px] ${
                  selectedFamily === fam.id
                    ? 'bg-[#1A3670] text-white font-bold shadow-xs'
                    : 'bg-[#F9F6F0] text-[#0C1836] hover:bg-white border border-[#EAE2D2]'
                }`}
              >
                <span>F{fam.id}: {fam.name}</span>
                <span className={`px-1 py-0.2 rounded text-[9px] font-mono ${
                  selectedFamily === fam.id ? 'bg-[#081026] text-[#CBD9FC]' : 'bg-[#EAE2D2] text-[#475569]'
                }`}>
                  {fam.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* SEARCH & VERDICT FILTERS */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search across all 500 factors by title, equation, derivation, or audit..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-[#EAE2D2] bg-[#FDFBF7] text-xs text-[#0C1836] placeholder:text-[#64748B] focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#1A3670]/20 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-2.5 text-xs text-[#64748B] hover:text-[#081026]"
              >
                ✕
              </button>
            )}
          </div>
          
          <div className="flex items-center gap-2">
            <select
              value={selectedVerdict}
              onChange={(e) => setSelectedVerdict(e.target.value)}
              className="px-3 py-2.5 rounded-xl border border-[#EAE2D2] bg-[#FDFBF7] text-xs text-[#0C1836] focus:bg-white focus:outline-hidden"
            >
              <option value="all">All Verdicts</option>
              <option value="Model A Superior">Model A Superior (333)</option>
              <option value="Dual-Layer Synthesis">Dual-Layer Synthesis (114)</option>
              <option value="Model B Superior">Model B Superior (53)</option>
            </select>
          </div>
        </div>

        <div className="text-xs text-[#64748B] font-mono flex items-center justify-between border-t border-[#EAE2D2] pt-3">
          <span>Showing {Math.min(visibleCount, filteredFactors.length)} of {filteredFactors.length} matching factors</span>
          <span>500 of 500 Factors Audited</span>
        </div>
      </div>

      {/* FACTOR CARDS LIST */}
      <div className="space-y-4">
        {filteredFactors.slice(0, visibleCount).map((factor) => {
          const isExpanded = expandedIds.has(factor.id);

          return (
            <div
              key={factor.id}
              className="rounded-2xl border border-[#EAE2D2] bg-white p-5 sm:p-6 shadow-2xs hover:border-[#CBD5E1] transition-all space-y-4"
            >
              {/* Card Header */}
              <div
                onClick={() => toggleExpand(factor.id)}
                className="flex items-start justify-between gap-4 cursor-pointer select-none"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2 font-mono text-[10px]">
                    <span className="px-2 py-0.5 rounded bg-[#F4EFE6] text-[#0C1836] font-bold border border-[#EAE2D2]">
                      Factor #{factor.id}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-[#EBF0FE] text-[#1A3670] font-semibold border border-[#CBD9FC]">
                      F{factor.familyId}: {factor.familyName}
                    </span>
                    <span className="text-[#CBD5E1]">·</span>
                    <span className="text-[#1A3670] font-bold">A: {factor.scoreA}/3</span>
                    <span className="text-[#CBD5E1]">|</span>
                    <span className="text-[#9A3412] font-bold">B: {factor.scoreB}/3</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-serif font-bold text-[#081026] mt-1">
                    {factor.title}
                  </h3>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span
                    className={`px-2.5 py-1 rounded-xs text-xs font-mono font-bold ${
                      factor.verdict === 'Model A Superior'
                        ? 'bg-[#EBF0FE] text-[#1A3670] border border-[#CBD9FC]'
                        : factor.verdict === 'Model B Superior'
                        ? 'bg-[#FFEDD5] text-[#9A3412] border border-[#FDBA74]'
                        : 'bg-[#FEF3C7] text-[#92400E] border border-[#FCD34D]'
                    }`}
                  >
                    {factor.verdict}
                  </span>
                  <button className="text-[#64748B] hover:text-[#081026] text-xs font-mono px-2 py-1 rounded-lg hover:bg-[#F4EFE6]">
                    {isExpanded ? '▲' : '▼'}
                  </button>
                </div>
              </div>

              {/* Master Equation Pill */}
              <div className="p-3 bg-[#F9F6F0] rounded-xl border border-[#EAE2D2] font-mono text-xs overflow-x-auto text-[#081026]">
                <MathDisplay math={factor.keyEquation} block />
              </div>

              {/* Collapsed Preview */}
              {!isExpanded && (
                <div className="text-xs text-[#475569] line-clamp-2 font-sans">
                  <strong>Physical Impact:</strong> {factor.physicalImpact}
                </div>
              )}

              {/* Expanded Detailed Physics Analysis */}
              {isExpanded && (
                <div className="space-y-4 pt-3 border-t border-[#EAE2D2] text-xs">
                  
                  {/* Side-by-Side Model Derivations */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-[#F4F7FF] border border-[#CBD9FC] space-y-2">
                      <div className="flex items-center justify-between font-mono text-[10px] text-[#1A3670] font-bold uppercase">
                        <span>Model A (Bulaqueña IGEG)</span>
                        <span>Score: {factor.scoreA} / 3</span>
                      </div>
                      <p className="text-[#0C1836] leading-relaxed font-sans">
                        {factor.modelADerivation}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#FFF7ED] border border-[#FDBA74] space-y-2">
                      <div className="flex items-center justify-between font-mono text-[10px] text-[#9A3412] font-bold uppercase">
                        <span>Model B (Tassan RES=RAG)</span>
                        <span>Score: {factor.scoreB} / 3</span>
                      </div>
                      <p className="text-[#0C1836] leading-relaxed font-sans">
                        {factor.modelBDerivation}
                      </p>
                    </div>
                  </div>

                  {/* Physical Impact */}
                  <div className="p-3.5 rounded-xl bg-[#F9F6F0] border border-[#EAE2D2] space-y-1">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#64748B]">
                      Physical Impact & Observational Relevance
                    </span>
                    <p className="text-[#475569] leading-relaxed font-sans">
                      {factor.physicalImpact}
                    </p>
                  </div>

                  {/* Adversarial Red-Team Audit Box */}
                  <div className="p-4 rounded-xl bg-[#FEF2F2] border border-[#FECACA] space-y-1.5">
                    <div className="flex items-center gap-1.5 text-[#991B1B] font-mono font-bold text-[10px] uppercase">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
                      <span>Adversarial Red-Team Audit</span>
                    </div>
                    <p className="text-[#7F1D1D] leading-relaxed font-sans">
                      {factor.adversarialAudit}
                    </p>
                  </div>

                </div>
              )}

            </div>
          );
        })}
      </div>

      {/* Pagination Load More Button */}
      {visibleCount < filteredFactors.length && (
        <div className="flex justify-center pt-4">
          <button
            onClick={() => setVisibleCount(prev => Math.min(prev + 50, filteredFactors.length))}
            className="px-6 py-3 rounded-2xl bg-[#0C1836] text-[#FDFBF7] font-serif font-semibold text-xs shadow-sm hover:bg-[#1A3670] transition-all flex items-center gap-2"
          >
            <span>Load More Factors (Showing {visibleCount} of {filteredFactors.length})</span>
            <span>↓</span>
          </button>
        </div>
      )}

      {/* Footer Navigation Back to Top */}
      <div className="p-6 rounded-2xl bg-[#F9F6F0] border border-[#EAE2D2] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
        <div>
          Showing {Math.min(visibleCount, filteredFactors.length)} of 500 factors · Complete coverage across all 10 physical families
        </div>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-[#1A3670] hover:text-[#081026] font-semibold"
        >
          Back to Top ↑
        </button>
      </div>

    </div>
  );
};
