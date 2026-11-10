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
      'bg-slate-100 text-slate-500 border-slate-200',
      'bg-blue-50 text-blue-700 border-blue-200',
      'bg-blue-100 text-blue-800 border-blue-300 font-medium',
      'bg-blue-600 text-white font-bold'
    ];
    const colorsB = [
      'bg-slate-100 text-slate-500 border-slate-200',
      'bg-amber-50 text-amber-700 border-amber-200',
      'bg-amber-100 text-amber-800 border-amber-300 font-medium',
      'bg-amber-600 text-white font-bold'
    ];
    const colorClass = framework === 'A' ? colorsA[score] : colorsB[score];
    return (
      <span className={`inline-flex items-center justify-center px-2 py-0.5 rounded text-[11px] font-mono border ${colorClass}`}>
        {labels[score]}
      </span>
    );
  };

  return (
    <div className="space-y-8 max-w-6xl mx-auto pb-20">
      
      {/* Header Banner */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-5">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-semibold text-indigo-600 uppercase tracking-wider">
                Exhaustive Evaluation Matrix · 500 Checkpoints
              </span>
              <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-mono font-bold">
                100% Peer-Reviewed Audit
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 tracking-tight">
              The 500-Criterion Adversarial Evaluation Matrix
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 max-w-3xl">
              Every single checkpoint evaluated across 10 physical and epistemic families from the peer-reviewed monograph by Marlon Bulaqueña & Jean-Charles Tassan. Scored on a formal 4-point ordinal Likert rubric (0–3, max 1500 points).
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleDownloadCSV}
              className="px-3.5 py-2 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-colors shadow-sm flex items-center gap-1.5"
            >
              <span>Export CSV ({filteredCriteria.length})</span>
              <span aria-hidden="true">↓</span>
            </button>
            <a
              href="/assets/aistudio/IGEG_vs_RES-RAG_500-Criterion_Journal_Manuscript_3fd82f8c.txt"
              download="IGEG_vs_RES-RAG_500-Criterion_Journal_Manuscript.txt"
              className="px-3.5 py-2 rounded-xl bg-slate-100 text-slate-700 text-xs font-semibold hover:bg-slate-200 transition-colors border border-slate-200 flex items-center gap-1.5"
            >
              <span>Raw Manuscript ↗</span>
            </a>
          </div>
        </div>

        {/* Aggregate Scoreboard */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 text-xs font-mono">
          <div className="p-3 bg-blue-50/70 rounded-xl border border-blue-200/80">
            <div className="text-blue-700 font-semibold uppercase text-[10px]">Model A: IGEG Total</div>
            <div className="text-xl font-bold text-blue-900 mt-0.5">{stats.totalA} <span className="text-xs font-normal text-blue-700">/ 1500</span></div>
            <div className="text-[10px] text-blue-600 mt-0.5">47.5% score efficiency</div>
          </div>
          <div className="p-3 bg-amber-50/70 rounded-xl border border-amber-200/80">
            <div className="text-amber-700 font-semibold uppercase text-[10px]">Model B: RES=RAG Total</div>
            <div className="text-xl font-bold text-amber-900 mt-0.5">{stats.totalB} <span className="text-xs font-normal text-amber-700">/ 1500</span></div>
            <div className="text-[10px] text-amber-600 mt-0.5">17.6% score efficiency</div>
          </div>
          <div className="p-3 bg-indigo-50/70 rounded-xl border border-indigo-200/80">
            <div className="text-indigo-700 font-semibold uppercase text-[10px]">Net Score Gap</div>
            <div className="text-xl font-bold text-indigo-900 mt-0.5">+{stats.totalA - stats.totalB}</div>
            <div className="text-[10px] text-indigo-600 mt-0.5">IGEG margin (+29.9%)</div>
          </div>
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
            <div className="text-slate-600 font-semibold uppercase text-[10px]">Head-to-Head Ratio</div>
            <div className="text-xl font-bold text-slate-900 mt-0.5">333 vs 53</div>
            <div className="text-[10px] text-slate-500 mt-0.5">114 ties (neutral/conjectural)</div>
          </div>
          <div className="p-3 bg-purple-50/70 rounded-xl border border-purple-200/80">
            <div className="text-purple-700 font-semibold uppercase text-[10px]">Conceptual Subset (†)</div>
            <div className="text-xl font-bold text-purple-900 mt-0.5">51 vs 78</div>
            <div className="text-[10px] text-purple-600 mt-0.5">RES=RAG leads by +27 on 53 items</div>
          </div>
          <div className="p-3 bg-emerald-50/70 rounded-xl border border-emerald-200/80">
            <div className="text-emerald-700 font-semibold uppercase text-[10px]">Counterfactuals (100)</div>
            <div className="text-xl font-bold text-emerald-900 mt-0.5">142 vs 87</div>
            <div className="text-[10px] text-emerald-600 mt-0.5">IGEG leads by +55 points</div>
          </div>
        </div>

        {/* 10 Family Quick Pill Selector */}
        <div className="space-y-2">
          <div className="text-[11px] font-mono font-semibold uppercase text-slate-500 tracking-wider">
            Filter By Family (10 Domains)
          </div>
          <div className="flex flex-wrap gap-1.5 text-xs">
            <button
              onClick={() => { setSelectedFamily('all'); setPage(1); }}
              className={`px-3 py-1.5 rounded-lg border font-medium transition-colors ${
                selectedFamily === 'all'
                  ? 'bg-slate-900 text-white border-slate-900'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
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
                      ? 'bg-indigo-600 text-white border-indigo-600 font-semibold shadow-xs'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <span className="font-mono text-[10px] opacity-75">{fam.id}.</span>
                  <span>{fam.name}</span>
                  <span className={`px-1.5 py-0.2 rounded text-[10px] font-mono ${isSelected ? 'bg-indigo-700 text-white' : 'bg-slate-100 text-slate-600'}`}>
                    {fam.scoreA}:{fam.scoreB}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Search & Secondary Filters */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-3 border-t border-slate-100">
          <div className="relative flex-1">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => { setSearchQuery(e.target.value); setPage(1); }}
              placeholder="Search 500 criteria by title, keyword, ID (e.g. 'Wheeler', 'Fisher', 'Lorentz', '213')..."
              className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:outline-none transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs font-mono"
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
            <p className="text-slate-600">{FAMILIES_META[selectedFamily - 1].description}</p>
            <div className="pt-2 flex items-center gap-4 font-mono text-[11px]">
              <span className="text-blue-700 font-bold">IGEG: {FAMILIES_META[selectedFamily - 1].scoreA} / {FAMILIES_META[selectedFamily - 1].maxScore} ({FAMILIES_META[selectedFamily - 1].percentageA}%)</span>
              <span className="text-amber-700 font-bold">RES=RAG: {FAMILIES_META[selectedFamily - 1].scoreB} / {FAMILIES_META[selectedFamily - 1].maxScore} ({FAMILIES_META[selectedFamily - 1].percentageB}%)</span>
              <span className="text-indigo-700 font-bold">Differential: +{FAMILIES_META[selectedFamily - 1].gap} pts</span>
            </div>
          </div>
        )}
      </div>

      {/* Criteria Table */}
      <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-mono text-[11px] uppercase tracking-wider">
              <tr>
                <th className="py-3 px-4 w-12 text-center">#</th>
                <th className="py-3 px-4 w-32">Domain</th>
                <th className="py-3 px-4">Criterion</th>
                <th className="py-3 px-3 w-28 text-center">IGEG Score</th>
                <th className="py-3 px-3 w-28 text-center">RES=RAG Score</th>
                <th className="py-3 px-3 w-24 text-center">Advantage</th>
                <th className="py-3 px-4">Adversarial Note</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {paginatedCriteria.map((item) => {
                const isExpanded = expandedId === item.id;
                const winnerBadge = item.winner === 'IGEG' 
                  ? 'bg-blue-100 text-blue-800 border-blue-200 font-semibold'
                  : item.winner === 'RES=RAG'
                  ? 'bg-amber-100 text-amber-800 border-amber-200 font-semibold'
                  : 'bg-slate-100 text-slate-600 border-slate-200';

                return (
                  <React.Fragment key={item.id}>
                    <tr 
                      onClick={() => setExpandedId(isExpanded ? null : item.id)}
                      className={`hover:bg-slate-50/80 transition-colors cursor-pointer ${isExpanded ? 'bg-indigo-50/30' : ''}`}
                    >
                      <td className="py-3 px-4 text-center font-mono font-semibold text-slate-500">
                        {item.id}
                      </td>
                      <td className="py-3 px-4 text-slate-600 font-mono text-[10px]">
                        <span className="px-1.5 py-0.5 rounded bg-slate-100 text-slate-700">
                          F{item.familyId}
                        </span>
                        <span className="ml-1.5 hidden lg:inline text-slate-500 truncate max-w-[100px] inline-block align-middle">
                          {item.familyName}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <div className="font-medium text-slate-900 flex items-center gap-1.5">
                          <span>{item.criterion}</span>
                          {item.isConceptual && (
                            <span 
                              title="Conceptual subset item (selected to favor RES=RAG)" 
                              className="px-1 py-0.2 rounded bg-purple-100 text-purple-800 text-[10px] font-mono font-bold"
                            >
                              †
                            </span>
                          )}
                          {item.isCounterfactual && (
                            <span 
                              title="Counterfactual test: behavior if the world were different" 
                              className="px-1.5 py-0.2 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 text-[9px] font-mono font-semibold"
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
                      <td className="py-3 px-4 text-slate-600 max-w-xs truncate">
                        {item.note}
                      </td>
                    </tr>

                    {/* Expanded Detail Row */}
                    {isExpanded && (
                      <tr className="bg-slate-50/70 border-b border-slate-200">
                        <td colSpan={7} className="p-5 space-y-3">
                          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-2">
                            <span className="font-mono text-xs font-semibold text-slate-900">
                              Criterion #{item.id} · Family {item.familyId} ({item.familyName})
                            </span>
                            <div className="flex items-center gap-2 text-xs font-mono">
                              <span className="text-blue-700 font-semibold">Model A: {item.scoreA}/3</span>
                              <span className="text-slate-400">vs</span>
                              <span className="text-amber-700 font-semibold">Model B: {item.scoreB}/3</span>
                              <span className="text-slate-400">·</span>
                              <span className="text-indigo-700 font-bold">Outcome: {item.winner}</span>
                            </div>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                            <div className="p-3 bg-white rounded-lg border border-slate-200 space-y-1.5">
                              <span className="font-semibold text-slate-900 uppercase font-mono text-[10px] text-indigo-600">
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
