import React, { useState, useMemo } from 'react';
import { CRITERIA_500, FAMILIES_META, Criterion500Item } from '../types/manuscriptData';
import { MathDisplay } from './MathDisplay';

export const Criteria500MatrixView: React.FC = () => {
  const [selectedFamily, setSelectedFamily] = useState<number | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [winnerFilter, setWinnerFilter] = useState<'all' | 'IGEG' | 'RES=RAG' | 'Tie'>('all');
  const [specialFilter, setSpecialFilter] = useState<'all' | 'conceptual' | 'counterfactual' | 'score3A' | 'score3B'>('all');
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [page, setPage] = useState<number>(1);
  const pageSize = 50;

  const filteredCriteria = useMemo(() => {
    return CRITERIA_500.filter((item) => {
      if (selectedFamily !== 'all' && item.familyId !== selectedFamily) return false;
      if (winnerFilter !== 'all' && item.winner !== winnerFilter) return false;
      if (specialFilter === 'conceptual' && !item.isConceptual) return false;
      if (specialFilter === 'counterfactual' && !item.isCounterfactual) return false;
      if (specialFilter === 'score3A' && item.scoreA !== 3) return false;
      if (specialFilter === 'score3B' && item.scoreB !== 3) return false;

      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchesId = item.id.toString() === q;
        const matchesCriterion = item.criterion.toLowerCase().includes(q);
        const matchesNote = item.note.toLowerCase().includes(q);
        const matchesFamily = item.familyName.toLowerCase().includes(q);
        if (!matchesId && !matchesCriterion && !matchesNote && !matchesFamily) return false;
      }
      return true;
    });
  }, [selectedFamily, winnerFilter, specialFilter, searchQuery]);

  const paginatedCriteria = useMemo(() => {
    const start = (page - 1) * pageSize;
    return filteredCriteria.slice(start, start + pageSize);
  }, [filteredCriteria, page]);

  const totalPages = Math.ceil(filteredCriteria.length / pageSize) || 1;

  const stats = useMemo(() => {
    const total = 500;
    const aWins = CRITERIA_500.filter(c => c.scoreA > c.scoreB).length; // 333
    const bWins = CRITERIA_500.filter(c => c.scoreB > c.scoreA).length; // 53
    const ties = CRITERIA_500.filter(c => c.scoreA === c.scoreB).length; // 114
    const conceptualCount = CRITERIA_500.filter(c => c.isConceptual).length; // 53
    const counterfactualCount = CRITERIA_500.filter(c => c.isCounterfactual).length; // 100
    const totalA = CRITERIA_500.reduce((acc, c) => acc + c.scoreA, 0); // 712
    const totalB = CRITERIA_500.reduce((acc, c) => acc + c.scoreB, 0); // 264
    return { total, aWins, bWins, ties, conceptualCount, counterfactualCount, totalA, totalB };
  }, []);

  const handleDownloadCSV = () => {
    const headers = ['#', 'Family ID', 'Family Name', 'Criterion', 'IGEG Score (0-3)', 'RES=RAG Score (0-3)', 'Advantage', 'Conceptual Subset (†)', 'Counterfactual', 'Adversarial Note'];
    const rows = filteredCriteria.map(c => [
      c.id,
      c.familyId,
      `"${c.familyName}"`,
      `"${c.criterion.replace(/"/g, '""')}"`,
      c.scoreA,
      c.scoreB,
      `"${c.winner}"`,
      c.isConceptual ? 'Yes' : 'No',
      c.isCounterfactual ? 'Yes' : 'No',
      `"${c.note.replace(/"/g, '""')}"`
    ]);
    const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `IGEG_vs_RESRAG_500_Criteria_Matrix.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const getScoreBadge = (score: number, framework: 'A' | 'B') => {
    const labels = ['0: Absent', '1: Asserted', '2: Partial', '3: Rigorous'];
    const colorsA = [
      'bg-[#F4EFE6] text-[#64748B] border-[#EAE2D2]',
      'bg-[#EBF0FE] text-[#1A3670] border-[#CBD9FC]',
      'bg-[#1A3670] text-white border-[#0C1836] font-medium',
      'bg-[#081026] text-[#FEF3C7] border-[#B45309] font-bold shadow-2xs'
    ];
    const colorsB = [
      'bg-[#F4EFE6] text-[#64748B] border-[#EAE2D2]',
      'bg-[#FFEDD5] text-[#9A3412] border-[#FDBA74]',
      'bg-[#EA580C] text-white border-[#C2410C] font-medium',
      'bg-[#7C2D12] text-[#FEF3C7] border-[#B45309] font-bold shadow-2xs'
    ];
    const colorClass = framework === 'A' ? colorsA[score] : colorsB[score];
    return (
      <span className={`inline-flex items-center justify-center px-2 py-0.5 rounded text-[11px] font-mono border ${colorClass}`}>
        {labels[score]}
      </span>
    );
  };

  return (
    <div className="space-y-8 max-w-6xl mx-auto pb-20 text-[#0C1836]">
      
      {/* Oxford Masthead Header Banner */}
      <div className="oxford-card rounded-2xl p-6 sm:p-8 shadow-xs space-y-6 bg-white border border-[#EAE2D2]">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#EAE2D2] pb-5">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-[#1A3670] uppercase tracking-wider">
                Exhaustive Evaluation Matrix · 500 Checkpoints
              </span>
              <span className="px-2 py-0.5 rounded bg-[#FEF3C7] text-[#92400E] text-[10px] font-mono font-bold border border-[#FCD34D]">
                100% Peer-Reviewed Monograph Audit
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-serif font-bold text-[#081026] tracking-tight">
              The 500-Criterion Adversarial Evaluation Matrix
            </h1>
            <p className="text-xs sm:text-sm text-[#475569] max-w-3xl leading-relaxed">
              Every single checkpoint evaluated across 10 physical and epistemic families from the peer-reviewed monograph by Marlon Bulaqueña & Jean-Charles Tassan. Scored on a formal 4-point ordinal Likert rubric (0–3, max 1500 points).
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleDownloadCSV}
              className="px-3.5 py-2 rounded-xl bg-[#0C1836] text-[#FDFBF7] text-xs font-serif font-semibold hover:bg-[#1A3670] transition-colors shadow-xs flex items-center gap-1.5"
            >
              <span>Export CSV ({filteredCriteria.length})</span>
              <span aria-hidden="true">↓</span>
            </button>
            <a
              href="/assets/aistudio/IGEG_vs_RES-RAG_500-Criterion_Journal_Manuscript_3fd82f8c.txt"
              download="IGEG_vs_RES-RAG_500-Criterion_Journal_Manuscript.txt"
              className="px-3.5 py-2 rounded-xl bg-[#F9F6F0] text-[#0C1836] text-xs font-serif font-semibold hover:bg-white transition-colors border border-[#EAE2D2] flex items-center gap-1.5"
            >
              <span>Raw Manuscript ↗</span>
            </a>
          </div>
        </div>

        {/* Oxford Aggregate Scoreboard */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 text-xs font-mono">
          <div className="p-3 bg-[#F4F7FF] rounded-xl border border-[#CBD9FC]">
            <div className="text-[#1A3670] font-bold uppercase text-[10px]">Model A: IGEG Total</div>
            <div className="text-xl font-bold text-[#081026] mt-0.5">{stats.totalA} <span className="text-xs font-normal text-[#1A3670]">/ 1500</span></div>
            <div className="text-[10px] text-[#4D7ED9] mt-0.5">47.5% score efficiency</div>
          </div>
          <div className="p-3 bg-[#FFF7ED] rounded-xl border border-[#FDBA74]">
            <div className="text-[#9A3412] font-bold uppercase text-[10px]">Model B: RES=RAG Total</div>
            <div className="text-xl font-bold text-[#081026] mt-0.5">{stats.totalB} <span className="text-xs font-normal text-[#9A3412]">/ 1500</span></div>
            <div className="text-[10px] text-[#EA580C] mt-0.5">17.6% score efficiency</div>
          </div>
          <div className="p-3 bg-[#FEF3C7] rounded-xl border border-[#FCD34D]">
            <div className="text-[#92400E] font-bold uppercase text-[10px]">Net Score Gap</div>
            <div className="text-xl font-bold text-[#78350F] mt-0.5">+{stats.totalA - stats.totalB}</div>
            <div className="text-[10px] text-[#B45309] mt-0.5">IGEG margin (+29.9%)</div>
          </div>
          <div className="p-3 bg-[#F9F6F0] rounded-xl border border-[#EAE2D2]">
            <div className="text-[#475569] font-bold uppercase text-[10px]">Head-to-Head Ratio</div>
            <div className="text-xl font-bold text-[#081026] mt-0.5">333 vs 53</div>
            <div className="text-[10px] text-[#64748B] mt-0.5">114 ties (conjectural)</div>
          </div>
          <div className="p-3 bg-[#FAF5FF] rounded-xl border border-[#E9D5FF]">
            <div className="text-[#6B21A8] font-bold uppercase text-[10px]">Conceptual Subset (†)</div>
            <div className="text-xl font-bold text-[#581C87] mt-0.5">51 vs 78</div>
            <div className="text-[10px] text-[#7E22CE] mt-0.5">RES=RAG leads on 53 items</div>
          </div>
          <div className="p-3 bg-[#F0FDF4] rounded-xl border border-[#BBF7D0]">
            <div className="text-[#166534] font-bold uppercase text-[10px]">Counterfactuals (100)</div>
            <div className="text-xl font-bold text-[#14532D] mt-0.5">142 vs 87</div>
            <div className="text-[10px] text-[#15803D] mt-0.5">IGEG leads by +55 pts</div>
          </div>
        </div>

        {/* 10 Family Quick Pill Selector */}
        <div className="space-y-2">
          <div className="text-[10px] font-mono font-bold uppercase text-[#64748B] tracking-wider">
            Filter By Family (10 Domains)
          </div>
          <div className="flex flex-wrap gap-1.5 text-xs">
            <button
              onClick={() => { setSelectedFamily('all'); setPage(1); }}
              className={`px-3 py-1.5 rounded-lg border font-medium transition-colors ${
                selectedFamily === 'all'
                  ? 'bg-[#0C1836] text-[#FDFBF7] border-[#081026] font-semibold'
                  : 'bg-[#F9F6F0] text-[#0C1836] border-[#EAE2D2] hover:bg-white'
              }`}
            >
              All 10 Families ({stats.total})
            </button>
            {FAMILIES_META.map(fam => {
              const isSelected = selectedFamily === fam.id;
              return (
                <button
                  key={fam.id}
                  onClick={() => { setSelectedFamily(fam.id); setPage(1); }}
                  className={`px-2.5 py-1.5 rounded-lg border text-xs transition-colors flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-[#1A3670] text-white border-[#142B5B] font-semibold shadow-2xs'
                      : 'bg-[#F9F6F0] text-[#0C1836] border-[#EAE2D2] hover:bg-white'
                  }`}
                >
                  <span className="font-mono text-[10px] opacity-75">{fam.id}.</span>
                  <span>{fam.name}</span>
                  <span className={`px-1.5 py-0.2 rounded text-[10px] font-mono ${isSelected ? 'bg-[#081026] text-[#CBD9FC]' : 'bg-[#EAE2D2] text-[#475569]'}`}>
                    {fam.scoreA}:{fam.scoreB}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Search & Secondary Filters */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-3 border-t border-[#EAE2D2]">
          <div className="relative flex-1">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => { setSearchQuery(e.target.value); setPage(1); }}
              placeholder="Search 500 criteria by title, keyword, ID (e.g. 'Wheeler', 'Fisher', 'Lorentz', '213')..."
              className="w-full rounded-xl border border-[#EAE2D2] bg-[#FDFBF7] px-4 py-2 text-xs text-[#0C1836] placeholder:text-[#64748B] focus:border-[#1A3670] focus:bg-white focus:outline-none transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#64748B] hover:text-[#081026] text-xs font-mono"
              >
                ✕
              </button>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Advantage Filter */}
            <select
              value={winnerFilter}
              onChange={(e) => { setWinnerFilter(e.target.value as any); setPage(1); }}
              className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs text-slate-700 focus:outline-none focus:border-indigo-500"
            >
              <option value="all">Outcome: All (500)</option>
              <option value="IGEG">IGEG Wins ({stats.aWins})</option>
              <option value="RES=RAG">RES=RAG Wins ({stats.bWins})</option>
              <option value="Tie">Ties ({stats.ties})</option>
            </select>

            {/* Special Subsets */}
            <select
              value={specialFilter}
              onChange={(e) => { setSpecialFilter(e.target.value as any); setPage(1); }}
              className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs text-slate-700 focus:outline-none focus:border-indigo-500"
            >
              <option value="all">Subsets: All Criteria</option>
              <option value="conceptual">Conceptual Subset (†) (53)</option>
              <option value="counterfactual">Counterfactuals (If...) (100)</option>
              <option value="score3A">IGEG Score = 3 (Rigorous)</option>
              <option value="score3B">RES=RAG Score = 3 (Rigorous)</option>
            </select>
          </div>
        </div>

        {/* Selected Family Detail Header (if one family is active) */}
        {selectedFamily !== 'all' && (
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-slate-900 text-sm">
                Family {selectedFamily}: {FAMILIES_META[selectedFamily - 1].name}
              </span>
              <span className="font-mono text-slate-600">
                Criteria {FAMILIES_META[selectedFamily - 1].start}–{FAMILIES_META[selectedFamily - 1].end} ({FAMILIES_META[selectedFamily - 1].count} total)
              </span>
            </div>
            <p className="text-[#475569] leading-relaxed">{FAMILIES_META[selectedFamily - 1].description}</p>
            <div className="pt-2 flex items-center gap-4 font-mono text-[11px]">
              <span className="text-[#1A3670] font-bold">IGEG: {FAMILIES_META[selectedFamily - 1].scoreA} / {FAMILIES_META[selectedFamily - 1].maxScore} ({FAMILIES_META[selectedFamily - 1].percentageA}%)</span>
              <span className="text-[#9A3412] font-bold">RES=RAG: {FAMILIES_META[selectedFamily - 1].scoreB} / {FAMILIES_META[selectedFamily - 1].maxScore} ({FAMILIES_META[selectedFamily - 1].percentageB}%)</span>
              <span className="text-[#78350F] font-bold">Differential: +{FAMILIES_META[selectedFamily - 1].gap} pts</span>
            </div>
          </div>
        )}
      </div>

      {/* Criteria Table - Oxford Scholarly Register */}
      <div className="rounded-2xl border border-[#EAE2D2] bg-white shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#F9F6F0] border-y-2 border-[#0C1836] text-[#0C1836] font-serif text-[11px] tracking-wide">
              <tr>
                <th className="py-3 px-4 w-12 text-center font-bold">#</th>
                <th className="py-3 px-4 w-32 font-bold">Domain</th>
                <th className="py-3 px-4 font-bold">Criterion</th>
                <th className="py-3 px-3 w-28 text-center font-bold text-[#1A3670]">IGEG Score</th>
                <th className="py-3 px-3 w-28 text-center font-bold text-[#9A3412]">RES=RAG Score</th>
                <th className="py-3 px-3 w-24 text-center font-bold">Advantage</th>
                <th className="py-3 px-4 font-bold">Adversarial Note</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#EAE2D2]">
              {paginatedCriteria.map((item) => {
                const isExpanded = expandedId === item.id;
                const winnerBadge = item.winner === 'IGEG' 
                  ? 'bg-[#EBF0FE] text-[#1A3670] border-[#CBD9FC] font-semibold'
                  : item.winner === 'RES=RAG'
                  ? 'bg-[#FFEDD5] text-[#9A3412] border-[#FDBA74] font-semibold'
                  : 'bg-[#F9F6F0] text-[#475569] border-[#EAE2D2]';

                return (
                  <React.Fragment key={item.id}>
                    <tr 
                      onClick={() => setExpandedId(isExpanded ? null : item.id)}
                      className={`hover:bg-[#FDFBF7] transition-colors cursor-pointer ${isExpanded ? 'bg-[#F4F7FF]' : ''}`}
                    >
                      <td className="py-3 px-4 text-center font-mono font-semibold text-[#64748B]">
                        {item.id}
                      </td>
                      <td className="py-3 px-4 text-[#475569] font-mono text-[10px]">
                        <span className="px-1.5 py-0.5 rounded bg-[#F4EFE6] text-[#0C1836] border border-[#EAE2D2]">
                          F{item.familyId}
                        </span>
                        <span className="ml-1.5 hidden lg:inline text-[#64748B] truncate max-w-[100px] inline-block align-middle font-serif">
                          {item.familyName}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <div className="font-medium text-[#081026] flex items-center gap-1.5">
                          <span>{item.criterion}</span>
                          {item.isConceptual && (
                            <span 
                              title="Conceptual subset item (selected to favor RES=RAG)" 
                              className="px-1 py-0.2 rounded bg-[#FAF5FF] text-[#6B21A8] border border-[#E9D5FF] text-[10px] font-mono font-bold"
                            >
                              †
                            </span>
                          )}
                          {item.isCounterfactual && (
                            <span 
                              title="Counterfactual test: behavior if the world were different" 
                              className="px-1.5 py-0.2 rounded bg-[#F0FDF4] text-[#166534] border border-[#BBF7D0] text-[9px] font-mono font-semibold"
                            >
                              Counterfactual
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="py-3 px-3 text-center">
                        {getScoreBadge(item.scoreA, 'A')}
                      </td>
                      <td className="py-3 px-3 text-center">
                        {getScoreBadge(item.scoreB, 'B')}
                      </td>
                      <td className="py-3 px-3 text-center">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-mono border ${winnerBadge}`}>
                          {item.winner}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-[#475569] max-w-xs truncate font-sans">
                        {item.note}
                      </td>
                    </tr>

                    {/* Expanded Detail Row */}
                    {isExpanded && (
                      <tr className="bg-[#FDFBF7] border-b border-[#EAE2D2]">
                        <td colSpan={7} className="p-5 space-y-3">
                          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#EAE2D2] pb-2">
                            <span className="font-serif text-xs font-bold text-[#081026]">
                              Criterion #{item.id} · Family {item.familyId} ({item.familyName})
                            </span>
                            <div className="flex items-center gap-2 text-xs font-mono">
                              <span className="text-[#1A3670] font-bold">Model A: {item.scoreA}/3</span>
                              <span className="text-[#94A3B8]">vs</span>
                              <span className="text-[#9A3412] font-bold">Model B: {item.scoreB}/3</span>
                              <span className="text-[#94A3B8]">·</span>
                              <span className="text-[#081026] font-bold">Outcome: {item.winner}</span>
                            </div>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                            <div className="p-3 bg-white rounded-lg border border-[#EAE2D2] space-y-1.5 shadow-2xs">
                              <span className="font-semibold text-[#1A3670] uppercase font-mono text-[10px]">
                                Detailed Adversarial Audit Note
                              </span>
                              <p className="text-slate-700 leading-relaxed font-sans">
                                {item.note}
                              </p>
                            </div>
                            <div className="p-3 bg-white rounded-lg border border-slate-200 space-y-1.5">
                              <span className="font-semibold text-slate-900 uppercase font-mono text-[10px] text-slate-500">
                                Evaluation Context & Flags
                              </span>
                              <ul className="text-slate-600 space-y-1">
                                <li>• <strong>Family Domain:</strong> {item.familyName}</li>
                                <li>• <strong>Likert Rubric:</strong> Score 0 = Absent; 1 = Asserted/Unformalized; 2 = Partially Formalized; 3 = Well-Defined/Consistent.</li>
                                <li>• <strong>Conceptual Subset:</strong> {item.isConceptual ? 'Yes († marked, favors emergent rhythm/observers)' : 'Standard matrix'}</li>
                                <li>• <strong>Counterfactual Test:</strong> {item.isCounterfactual ? 'Yes (tests behavior under altered physical laws)' : 'No'}</li>
                              </ul>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Pagination Bar */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="text-slate-600 font-mono">
            Showing {(page - 1) * pageSize + 1}–{Math.min(page * pageSize, filteredCriteria.length)} of {filteredCriteria.length} criteria
            {filteredCriteria.length < 500 && ` (filtered from 500 total)`}
          </div>
          <div className="flex items-center gap-1.5">
            <button
              disabled={page === 1}
              onClick={() => setPage(p => Math.max(1, p - 1))}
              className="px-3 py-1.5 rounded-lg border border-slate-200 bg-white font-medium text-slate-700 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50"
            >
              Previous
            </button>
            <span className="px-3 py-1.5 font-mono text-slate-600">
              Page {page} of {totalPages}
            </span>
            <button
              disabled={page >= totalPages}
              onClick={() => setPage(p => Math.min(totalPages, p + 1))}
              className="px-3 py-1.5 rounded-lg border border-slate-200 bg-white font-medium text-slate-700 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};
