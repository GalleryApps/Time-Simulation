import React from 'react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onExportLaTeX: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab, onExportLaTeX }) => {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between gap-4 border-b border-slate-200 bg-white/95 px-6 py-3.5 backdrop-blur-md">
      {/* Zone 1: Single text element wordmark */}
      <div className="flex items-center gap-3">
        <button 
          onClick={() => setActiveTab('universesim')}
          className="text-lg font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 text-left hover:text-indigo-600 transition-colors flex items-center gap-2"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-blue-600 inline-block animate-pulse" />
          <span>Chronos-QG</span>
        </button>
        <span className="hidden sm:inline-block px-2 py-0.5 rounded bg-blue-50 text-blue-700 text-[11px] font-mono font-bold border border-blue-200">
          Dual Universe Simulator (LIVE)
        </span>
      </div>

      {/* Zone 2: Clean single-line text navigation links */}
      <nav className="hidden lg:flex items-center gap-5 text-xs font-medium text-slate-600">
        <button
          onClick={() => setActiveTab('criteria500')}
          className={`hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 ${activeTab === 'criteria500' ? 'text-indigo-600 font-bold border-b-2 border-indigo-600 pb-0.5' : ''}`}
        >
          500-Criterion Matrix
        </button>
        <button
          onClick={() => setActiveTab('universesim')}
          className={`hover:text-blue-700 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${activeTab === 'universesim' ? 'text-blue-600 font-bold border-b-2 border-blue-600 pb-0.5' : 'text-blue-700 font-medium'}`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
          <span>Universe Sim (A vs B)</span>
        </button>
        <button
          onClick={() => setActiveTab('harmonization')}
          className={`hover:text-emerald-700 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${activeTab === 'harmonization' ? 'text-emerald-600 font-bold border-b-2 border-emerald-600 pb-0.5' : 'text-emerald-700 font-medium'}`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 inline-block animate-pulse" />
          <span>1,500 Harmonization & Studies</span>
        </button>
        <button
          onClick={() => setActiveTab('redteam')}
          className={`hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 ${activeTab === 'redteam' ? 'text-indigo-600 font-bold border-b-2 border-indigo-600 pb-0.5' : ''}`}
        >
          20 Red-Team Attacks
        </button>
        <button
          onClick={() => setActiveTab('counterfactual')}
          className={`hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 ${activeTab === 'counterfactual' ? 'text-indigo-600 font-bold border-b-2 border-indigo-600 pb-0.5' : ''}`}
        >
          14 Counterfactual Worlds
        </button>
        <button
          onClick={() => setActiveTab('igrt')}
          className={`hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 ${activeTab === 'igrt' ? 'text-indigo-600 font-bold border-b-2 border-indigo-600 pb-0.5' : ''}`}
        >
          IGRT Synthesis & Lab
        </button>
        <button
          onClick={() => setActiveTab('robustness')}
          className={`hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 ${activeTab === 'robustness' ? 'text-indigo-600 font-bold border-b-2 border-indigo-600 pb-0.5' : ''}`}
        >
          Robustness (Monte Carlo)
        </button>
        <button
          onClick={() => setActiveTab('journal')}
          className={`hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 ${activeTab === 'journal' ? 'text-indigo-600 font-bold border-b-2 border-indigo-600 pb-0.5' : ''}`}
        >
          Journal Manuscript
        </button>
        <button
          onClick={() => setActiveTab('matrix100')}
          className={`hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 ${activeTab === 'matrix100' ? 'text-indigo-600 font-bold border-b-2 border-indigo-600 pb-0.5' : ''}`}
        >
          100-Factor Matrix
        </button>
        <button
          onClick={() => setActiveTab('layman')}
          className={`hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 ${activeTab === 'layman' ? 'text-indigo-600 font-bold border-b-2 border-indigo-600 pb-0.5' : ''}`}
        >
          Layman's Guide
        </button>
      </nav>

      {/* Zone 3: Actions */}
      <div className="flex items-center gap-2 shrink-0">
        <a
          href="/assets/aistudio/IGEG_vs_RES-RAG_500-Criterion_Journal_Manuscript_3fd82f8c.txt"
          download="IGEG_vs_RES-RAG_500-Criterion_Journal_Manuscript.txt"
          className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-100 whitespace-nowrap shrink-0"
        >
          Download .txt
        </a>
        <button
          onClick={onExportLaTeX}
          className="rounded-xl bg-slate-900 px-3.5 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-slate-800 whitespace-nowrap shrink-0 shadow-sm"
        >
          Export LaTeX
        </button>
      </div>
    </header>
  );
};
