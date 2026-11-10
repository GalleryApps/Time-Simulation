import React, { useState, useMemo } from 'react';
import { CRITERIA_500, FAMILIES_META, Criterion500Item } from '../types/manuscriptData';
import { MathDisplay } from './MathDisplay';

type SortField = 'id' | 'criterion' | 'scoreA' | 'scoreB' | 'delta';

export const Criteria500MatrixView: React.FC = () => {
  const [selectedFamily, setSelectedFamily] = useState<number | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [winnerFilter, setWinnerFilter] = useState<'all' | 'IGEG' | 'RES=RAG' | 'Tie'>('all');
  const [specialFilter, setSpecialFilter] = useState<'all' | 'conceptual' | 'counterfactual' | 'score3A' | 'score3B'>('all');
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [inspectItem, setInspectItem] = useState<Criterion500Item | null>(null);
  const [sortField, setSortField] = useState<SortField>('id');
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc');
  const [page, setPage] = useState<number>(1);
  const pageSize = 50;

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDir(sortDir === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDir('asc');
    }
  };

  const filteredCriteria = useMemo(() => {
    let result = CRITERIA_500.filter((item) => {
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

    result.sort((a, b) => {
      let valA: number | string = a.id;
      let valB: number | string = b.id;

      if (sortField === 'id') {
        valA = a.id;
        valB = b.id;
      } else if (sortField === 'criterion') {
        valA = a.criterion.toLowerCase();
        valB = b.criterion.toLowerCase();
      } else if (sortField === 'scoreA') {
        valA = a.scoreA;
        valB = b.scoreA;
      } else if (sortField === 'scoreB') {
        valA = a.scoreB;
        valB = b.scoreB;
      } else if (sortField === 'delta') {
        valA = a.scoreA - a.scoreB;
        valB = b.scoreA - b.scoreB;
      }

      if (valA < valB) return sortDir === 'asc' ? -1 : 1;
      if (valA > valB) return sortDir === 'asc' ? 1 : -1;
      return 0;
    });

    return result;
  }, [selectedFamily, winnerFilter, specialFilter, searchQuery, sortField, sortDir]);

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

  const handleDownloadJSON = () => {
    const blob = new Blob([JSON.stringify(filteredCriteria, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `IGEG_vs_RESRAG_500_Criteria_Matrix.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const highlightMatch = (text: string, query: string) => {
    if (!query.trim()) return text;
    const parts = text.split(new RegExp(`(${query.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')})`, 'gi'));
    return parts.map((part, i) => 
      part.toLowerCase() === query.toLowerCase() ? (
        <mark key={i} className="bg-amber-200 dark:bg-amber-900/60 text-[#081026] dark:text-amber-200 px-0.5 rounded">
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  const getScoreDisplay = (score: number, framework: 'A' | 'B') => {
    const labels = ['0: Absent', '1: Asserted', '2: Partial', '3: Rigorous'];
    const colorA = ['text-slate-400', 'text-[#1A3670] dark:text-[#93C5FD]', 'text-[#2563EB] font-medium', 'text-[#1D4ED8] dark:text-[#60A5FA] font-bold'];
    const colorB = ['text-slate-400', 'text-[#C2410C] dark:text-[#FDBA74]', 'text-[#EA580C] font-medium', 'text-[#9A3412] dark:text-[#FB923C] font-bold'];
    const cls = framework === 'A' ? colorA[score] : colorB[score];
    return (
      <span className={`font-mono text-xs tabular-nums ${cls}`}>
        {labels[score]}
      </span>
    );
  };

  return (
    <div className="space-y-8 max-w-6xl mx-auto pb-20 text-[#0C1836] dark:text-[#FDFBF7]">
      
      {/* Masthead Header Banner */}
      <div className="rounded-2xl p-6 sm:p-8 space-y-6 bg-white dark:bg-[#0B1530] border border-[#EAE2D2] dark:border-[#1E293B] shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#EAE2D2] dark:border-[#1E293B] pb-5">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-xs text-[#64748B] dark:text-[#94B2F5]">
              <span className="font-cinzel text-[#1A3670] dark:text-[#93C5FD]">Exhaustive Evaluation Matrix</span>
              <span aria-hidden="true">·</span>
              <span className="font-mono text-[#15803D] dark:text-[#4ADE80]">500 Calibrated Checkpoints</span>
              <span aria-hidden="true">·</span>
              <span>Formal Likert Rubric (0–3)</span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl font-serif font-normal text-[#081026] dark:text-white tracking-tight">
              The 500-Criterion Adversarial Evaluation Matrix
            </h1>
            
            <p className="text-xs sm:text-sm text-[#475569] dark:text-[#CBD9FC] max-w-3xl leading-relaxed font-light">
              Granular point-by-point audit across 10 physical and epistemic domains comparing Marlon Bulaqueña's Information-Geometric Extended Gravity (IGEG) and Jean-Charles Tassan's RES=RAG model.
            </p>
          </div>
          
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleDownloadCSV}
              className="px-3.5 py-2 rounded-xl bg-[#0C1836] dark:bg-[#EA580C] text-[#FDFBF7] text-xs font-cinzel hover:bg-[#1A3670] dark:hover:bg-[#C2410C] transition-colors shadow-xs"
            >
              Export CSV ({filteredCriteria.length})
            </button>
            <button
              onClick={handleDownloadJSON}
              className="px-3.5 py-2 rounded-xl border border-[#EAE2D2] dark:border-[#1E293B] bg-[#F9F6F0] dark:bg-[#081026] text-[#0C1836] dark:text-[#CBD9FC] text-xs font-mono hover:bg-white"
            >
              JSON
            </button>
          </div>
        </div>

        {/* Aggregate Scoreboard */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 text-xs font-mono">
          <div className="p-3 bg-[#F4F7FF] dark:bg-[#060B1C] rounded-xl border border-[#CBD9FC] dark:border-[#1E3A8A]">
            <div className="text-[#1A3670] dark:text-[#93C5FD] font-cinzel text-[10px]">Model A: IGEG</div>
            <div className="text-xl font-bold text-[#081026] dark:text-white mt-0.5 tabular-nums">{stats.totalA} <span className="text-xs font-normal text-[#1A3670] dark:text-[#93C5FD]">/ 1500</span></div>
            <div className="text-[10px] text-[#4D7ED9] mt-0.5">47.5% efficiency</div>
          </div>
          <div className="p-3 bg-[#FFF7ED] dark:bg-[#060B1C] rounded-xl border border-[#FDBA74] dark:border-[#C2410C]">
            <div className="text-[#9A3412] dark:text-[#FDBA74] font-cinzel text-[10px]">Model B: RES=RAG</div>
            <div className="text-xl font-bold text-[#081026] dark:text-white mt-0.5 tabular-nums">{stats.totalB} <span className="text-xs font-normal text-[#9A3412] dark:text-[#FDBA74]">/ 1500</span></div>
            <div className="text-[10px] text-[#EA580C] mt-0.5">17.6% efficiency</div>
          </div>
          <div className="p-3 bg-[#FEF3C7] dark:bg-[#060B1C] rounded-xl border border-[#FCD34D] dark:border-[#D97706]">
            <div className="text-[#92400E] dark:text-[#FDE68A] font-cinzel text-[10px]">Net Score Gap</div>
            <div className="text-xl font-bold text-[#78350F] dark:text-[#FDE68A] mt-0.5 tabular-nums">+{stats.totalA - stats.totalB}</div>
            <div className="text-[10px] text-[#B45309] dark:text-[#F59E0B] mt-0.5">+29.9% IGEG margin</div>
          </div>
          <div className="p-3 bg-[#F9F6F0] dark:bg-[#060B1C] rounded-xl border border-[#EAE2D2] dark:border-[#1E293B]">
            <div className="text-[#475569] dark:text-[#94A3B8] font-cinzel text-[10px]">Head-to-Head</div>
            <div className="text-xl font-bold text-[#081026] dark:text-white mt-0.5 tabular-nums">333 vs 53</div>
            <div className="text-[10px] text-[#64748B] dark:text-[#94A3B8] mt-0.5">114 parity ties</div>
          </div>
          <div className="p-3 bg-[#FAF5FF] dark:bg-[#060B1C] rounded-xl border border-[#E9D5FF] dark:border-[#7E22CE]">
            <div className="text-[#6B21A8] dark:text-[#D8B4FE] font-cinzel text-[10px]">Conceptual Subset (†)</div>
            <div className="text-xl font-bold text-[#581C87] dark:text-[#D8B4FE] mt-0.5 tabular-nums">51 vs 78</div>
            <div className="text-[10px] text-[#7E22CE] dark:text-[#C084FC] mt-0.5">RES=RAG leads (53)</div>
          </div>
          <div className="p-3 bg-[#F0FDF4] dark:bg-[#060B1C] rounded-xl border border-[#BBF7D0] dark:border-[#059669]">
            <div className="text-[#166534] dark:text-[#86EFAC] font-cinzel text-[10px]">Counterfactuals</div>
            <div className="text-xl font-bold text-[#14532D] dark:text-[#86EFAC] mt-0.5 tabular-nums">142 vs 87</div>
            <div className="text-[10px] text-[#15803D] dark:text-[#4ADE80] mt-0.5">100 gedanken tests</div>
          </div>
        </div>

        {/* 10 Family Filter Selector */}
        <div className="space-y-2">
          <div className="text-[10px] font-cinzel text-[#64748B] dark:text-[#94B2F5] tracking-wider uppercase">
            Filter By Domain Family (10 Domains)
          </div>
          <div className="flex flex-wrap gap-1.5 text-xs">
            <button
              onClick={() => { setSelectedFamily('all'); setPage(1); }}
              className={`px-3 py-1.5 rounded-lg border transition-colors ${
                selectedFamily === 'all'
                  ? 'bg-[#0C1836] dark:bg-[#3B82F6] text-white border-transparent font-medium'
                  : 'bg-[#F9F6F0] dark:bg-[#081026] text-[#0C1836] dark:text-[#CBD9FC] border-[#EAE2D2] dark:border-[#1E293B] hover:bg-white'
              }`}
            >
              All 10 Domains ({stats.total})
            </button>
            {FAMILIES_META.map(fam => {
              const isSelected = selectedFamily === fam.id;
              return (
                <button
                  key={fam.id}
                  onClick={() => { setSelectedFamily(fam.id); setPage(1); }}
                  className={`px-2.5 py-1.5 rounded-lg border text-xs transition-colors flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-[#1A3670] dark:bg-[#1E3A8A] text-white border-transparent font-medium'
                      : 'bg-[#F9F6F0] dark:bg-[#081026] text-[#0C1836] dark:text-[#CBD9FC] border-[#EAE2D2] dark:border-[#1E293B] hover:bg-white'
                  }`}
                >
                  <span className="font-mono text-[10px] opacity-80">F{fam.id}</span>
                  <span>{fam.name.split(':')[0] || fam.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Secondary Filters & Search Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2 border-t border-[#EAE2D2] dark:border-[#1E293B]">
          {/* Text Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search criteria, notes, or IDs..."
              value={searchQuery}
              onChange={(e) => { setSearchQuery(e.target.value); setPage(1); }}
              className="w-full pl-8 pr-3 py-2 bg-[#FDFBF7] dark:bg-[#081026] border border-[#EAE2D2] dark:border-[#1E293B] rounded-xl text-xs text-[#081026] dark:text-white placeholder-[#94A3B8] focus:outline-hidden"
            />
            <span className="absolute left-2.5 top-2.5 text-xs text-[#94A3B8]">🔍</span>
          </div>

          {/* Advantage Filter */}
          <div className="flex items-center gap-1 p-1 bg-[#F9F6F0] dark:bg-[#081026] rounded-xl border border-[#EAE2D2] dark:border-[#1E293B] text-xs">
            <button
              onClick={() => { setWinnerFilter('all'); setPage(1); }}
              className={`flex-1 py-1 rounded-lg text-center transition-colors ${winnerFilter === 'all' ? 'bg-white dark:bg-[#173065] text-[#081026] dark:text-white font-medium shadow-2xs' : 'text-[#64748B]'}`}
            >
              All Winners
            </button>
            <button
              onClick={() => { setWinnerFilter('IGEG'); setPage(1); }}
              className={`flex-1 py-1 rounded-lg text-center transition-colors ${winnerFilter === 'IGEG' ? 'bg-white dark:bg-[#173065] text-[#1A3670] dark:text-[#93C5FD] font-medium shadow-2xs' : 'text-[#64748B]'}`}
            >
              IGEG Leads
            </button>
            <button
              onClick={() => { setWinnerFilter('RES=RAG'); setPage(1); }}
              className={`flex-1 py-1 rounded-lg text-center transition-colors ${winnerFilter === 'RES=RAG' ? 'bg-white dark:bg-[#173065] text-[#9A3412] dark:text-[#FDBA74] font-medium shadow-2xs' : 'text-[#64748B]'}`}
            >
              RES Leads
            </button>
            <button
              onClick={() => { setWinnerFilter('Tie'); setPage(1); }}
              className={`flex-1 py-1 rounded-lg text-center transition-colors ${winnerFilter === 'Tie' ? 'bg-white dark:bg-[#173065] text-[#475569] font-medium shadow-2xs' : 'text-[#64748B]'}`}
            >
              Ties
            </button>
          </div>

          {/* Subset Filter */}
          <div className="flex items-center gap-1 p-1 bg-[#F9F6F0] dark:bg-[#081026] rounded-xl border border-[#EAE2D2] dark:border-[#1E293B] text-xs">
            <button
              onClick={() => { setSpecialFilter('all'); setPage(1); }}
              className={`flex-1 py-1 rounded-lg text-center transition-colors ${specialFilter === 'all' ? 'bg-white dark:bg-[#173065] text-[#081026] dark:text-white font-medium shadow-2xs' : 'text-[#64748B]'}`}
            >
              All Sets
            </button>
            <button
              onClick={() => { setSpecialFilter('conceptual'); setPage(1); }}
              className={`flex-1 py-1 rounded-lg text-center transition-colors ${specialFilter === 'conceptual' ? 'bg-white dark:bg-[#173065] text-[#6B21A8] dark:text-[#D8B4FE] font-medium shadow-2xs' : 'text-[#64748B]'}`}
            >
              Conceptual (†)
            </button>
            <button
              onClick={() => { setSpecialFilter('counterfactual'); setPage(1); }}
              className={`flex-1 py-1 rounded-lg text-center transition-colors ${specialFilter === 'counterfactual' ? 'bg-white dark:bg-[#173065] text-[#166534] dark:text-[#86EFAC] font-medium shadow-2xs' : 'text-[#64748B]'}`}
            >
              Counterfactuals
            </button>
          </div>
        </div>
      </div>

      {/* Main Table */}
      <div className="rounded-2xl border border-[#EAE2D2] dark:border-[#1E293B] bg-white dark:bg-[#0B1530] overflow-hidden shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-['Poppins']">
            <thead className="bg-[#F9F6F0] dark:bg-[#081026] border-b border-[#EAE2D2] dark:border-[#1E293B] text-[#081026] dark:text-[#CBD9FC] font-cinzel text-[11px]">
              <tr>
                <th 
                  onClick={() => handleSort('id')}
                  className="py-3 px-4 w-14 text-center cursor-pointer hover:text-[#EA580C]"
                >
                  # {sortField === 'id' && (sortDir === 'asc' ? '▲' : '▼')}
                </th>
                <th className="py-3 px-4 w-28">Domain</th>
                <th 
                  onClick={() => handleSort('criterion')}
                  className="py-3 px-4 cursor-pointer hover:text-[#EA580C]"
                >
                  Criterion Statement {sortField === 'criterion' && (sortDir === 'asc' ? '▲' : '▼')}
                </th>
                <th 
                  onClick={() => handleSort('scoreA')}
                  className="py-3 px-3 text-center cursor-pointer hover:text-[#1A3670]"
                >
                  IGEG {sortField === 'scoreA' && (sortDir === 'asc' ? '▲' : '▼')}
                </th>
                <th 
                  onClick={() => handleSort('scoreB')}
                  className="py-3 px-3 text-center cursor-pointer hover:text-[#9A3412]"
                >
                  RES=RAG {sortField === 'scoreB' && (sortDir === 'asc' ? '▲' : '▼')}
                </th>
                <th 
                  onClick={() => handleSort('delta')}
                  className="py-3 px-3 text-center cursor-pointer hover:text-[#081026]"
                >
                  Advantage {sortField === 'delta' && (sortDir === 'asc' ? '▲' : '▼')}
                </th>
                <th className="py-3 px-4">Adversarial Finding</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#EAE2D2] dark:divide-[#1E293B]">
              {paginatedCriteria.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-12 text-center text-xs text-[#64748B]">
                    No criteria match the active query or filters.
                  </td>
                </tr>
              ) : (
                paginatedCriteria.map((item) => {
                  const isExpanded = expandedId === item.id;
                  return (
                    <React.Fragment key={item.id}>
                      <tr
                        onClick={() => setExpandedId(isExpanded ? null : item.id)}
                        className={`hover:bg-[#FDFBF7] dark:hover:bg-[#060B1C] transition-colors cursor-pointer ${isExpanded ? 'bg-[#F4F7FF] dark:bg-[#081026]' : ''}`}
                      >
                        <td className="py-3 px-4 text-center font-mono text-[#64748B] dark:text-[#94B2F5]">
                          {item.id}
                        </td>
                        <td className="py-3 px-4 font-mono text-[10px] text-[#475569] dark:text-[#94B2F5]">
                          F{item.familyId} · {item.familyName.slice(0, 10)}
                        </td>
                        <td className="py-3 px-4">
                          <div className="font-normal text-[#081026] dark:text-white flex items-center gap-2">
                            <span>{highlightMatch(item.criterion, searchQuery)}</span>
                            {item.isConceptual && (
                              <span title="Conceptual subset" className="text-[10px] font-mono text-[#6B21A8] dark:text-[#D8B4FE]">
                                †
                              </span>
                            )}
                            {item.isCounterfactual && (
                              <span className="text-[9px] font-mono text-[#166534] dark:text-[#4ADE80]">
                                [CF]
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="py-3 px-3 text-center">
                          {getScoreDisplay(item.scoreA, 'A')}
                        </td>
                        <td className="py-3 px-3 text-center">
                          {getScoreDisplay(item.scoreB, 'B')}
                        </td>
                        <td className="py-3 px-3 text-center font-mono text-xs">
                          <span className={item.winner === 'IGEG' ? 'text-[#1A3670] dark:text-[#93C5FD] font-medium' : item.winner === 'RES=RAG' ? 'text-[#9A3412] dark:text-[#FDBA74] font-medium' : 'text-slate-400'}>
                            {item.winner}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-[#475569] dark:text-[#CBD9FC] max-w-xs truncate font-light">
                          {highlightMatch(item.note, searchQuery)}
                        </td>
                      </tr>

                      {isExpanded && (
                        <tr className="bg-[#FDFBF7] dark:bg-[#081026] border-b border-[#EAE2D2] dark:border-[#1E293B]">
                          <td colSpan={7} className="p-5 space-y-3">
                            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#EAE2D2] dark:border-[#1E293B] pb-2">
                              <span className="font-serif text-sm text-[#081026] dark:text-white">
                                Criterion #{item.id} · Domain Family {item.familyId}: {item.familyName}
                              </span>
                              <div className="flex items-center gap-2 text-xs font-mono text-[#64748B] dark:text-[#94B2F5]">
                                <span>IGEG: {item.scoreA}/3</span>
                                <span>vs</span>
                                <span>RES=RAG: {item.scoreB}/3</span>
                                <span>·</span>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setInspectItem(item);
                                  }}
                                  className="text-[#EA580C] hover:underline"
                                >
                                  Open Full Modal ↗
                                </button>
                              </div>
                            </div>
                            <div className="p-3 bg-white dark:bg-[#0B1530] rounded-xl border border-[#EAE2D2] dark:border-[#1E293B] space-y-1">
                              <span className="font-cinzel text-[10px] text-[#1A3670] dark:text-[#93C5FD] uppercase">
                                Full Adversarial Review Note
                              </span>
                              <p className="text-xs text-[#334155] dark:text-[#CBD9FC] leading-relaxed font-light">
                                {item.note}
                              </p>
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Bar */}
        <div className="p-4 border-t border-[#EAE2D2] dark:border-[#1E293B] bg-[#F9F6F0] dark:bg-[#081026] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="text-[#64748B] dark:text-[#94B2F5] font-mono">
            Showing {(page - 1) * pageSize + 1}–{Math.min(page * pageSize, filteredCriteria.length)} of {filteredCriteria.length} criteria
          </div>
          <div className="flex items-center gap-2">
            <button
              disabled={page === 1}
              onClick={() => setPage(p => Math.max(1, p - 1))}
              className="px-3 py-1.5 rounded-lg border border-[#EAE2D2] dark:border-[#1E293B] bg-white dark:bg-[#0B1530] text-[#0C1836] dark:text-white disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            <span className="font-mono text-[#64748B] dark:text-[#94B2F5]">
              Page {page} of {totalPages}
            </span>
            <button
              disabled={page >= totalPages}
              onClick={() => setPage(p => Math.min(totalPages, p + 1))}
              className="px-3 py-1.5 rounded-lg border border-[#EAE2D2] dark:border-[#1E293B] bg-white dark:bg-[#0B1530] text-[#0C1836] dark:text-white disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Inspect Item Modal */}
      {inspectItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
          <div className="w-full max-w-xl rounded-2xl bg-white dark:bg-[#0B1530] border border-[#EAE2D2] dark:border-[#1E293B] p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-[#EAE2D2] dark:border-[#1E293B] pb-3">
              <div>
                <span className="font-cinzel text-[10px] text-[#EA580C] uppercase">
                  Criterion #{inspectItem.id} Audit
                </span>
                <h3 className="font-serif text-lg text-[#081026] dark:text-white">
                  {inspectItem.criterion}
                </h3>
              </div>
              <button
                onClick={() => setInspectItem(null)}
                className="text-[#64748B] hover:text-black dark:hover:text-white text-sm"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-3 bg-[#F4F7FF] dark:bg-[#060B1C] rounded-xl border border-[#CBD9FC] dark:border-[#1E3A8A]">
                <span className="font-cinzel text-[10px] text-[#1A3670] dark:text-[#93C5FD] block">Model A (IGEG)</span>
                <span className="text-lg font-bold text-[#081026] dark:text-white">{inspectItem.scoreA} / 3</span>
              </div>
              <div className="p-3 bg-[#FFF7ED] dark:bg-[#060B1C] rounded-xl border border-[#FDBA74] dark:border-[#C2410C]">
                <span className="font-cinzel text-[10px] text-[#9A3412] dark:text-[#FDBA74] block">Model B (RES=RAG)</span>
                <span className="text-lg font-bold text-[#081026] dark:text-white">{inspectItem.scoreB} / 3</span>
              </div>
            </div>

            <div className="space-y-1.5 text-xs text-[#334155] dark:text-[#CBD9FC] font-light">
              <span className="font-cinzel text-[10px] text-[#64748B] dark:text-[#94B2F5] uppercase block">Audit Finding &amp; Mathematical Analysis</span>
              <p className="leading-relaxed bg-[#FDFBF7] dark:bg-[#081026] p-3 rounded-xl border border-[#EAE2D2] dark:border-[#1E293B]">
                {inspectItem.note}
              </p>
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setInspectItem(null)}
                className="px-4 py-2 rounded-lg bg-[#0C1836] dark:bg-[#EA580C] text-white text-xs font-cinzel"
              >
                Close Inspection
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
