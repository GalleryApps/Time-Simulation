import React from 'react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onExportLaTeX: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab, onExportLaTeX }) => {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between gap-8 border-b border-slate-200 bg-white/95 px-6 py-4 backdrop-blur-md">
      {/* Zone 1: Single text element wordmark */}
      <button 
        onClick={() => setActiveTab('layman')}
        className="text-lg font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 text-left hover:text-indigo-600 transition-colors"
      >
        Chronos-QG
      </button>

      {/* Zone 2: 4-5 clean single-line text navigation links */}
      <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
        <button
          onClick={() => setActiveTab('layman')}
          className={`hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 ${activeTab === 'layman' ? 'text-indigo-600 font-semibold' : ''}`}
        >
          Layman's Guide
        </button>
        <button
          onClick={() => setActiveTab('pubdoc')}
          className={`hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 ${activeTab === 'pubdoc' ? 'text-indigo-600 font-semibold' : ''}`}
        >
          4-Page Monograph & Verdict
        </button>
        <button
          onClick={() => setActiveTab('matrix100')}
          className={`hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 ${activeTab === 'matrix100' ? 'text-indigo-600 font-semibold' : ''}`}
        >
          100-Factor Matrix
        </button>
        <button
          onClick={() => setActiveTab('simulator')}
          className={`hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 ${activeTab === 'simulator' ? 'text-indigo-600 font-semibold' : ''}`}
        >
          RES-RAG Lab
        </button>
        <button
          onClick={() => setActiveTab('monograph')}
          className={`hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 ${activeTab === 'monograph' ? 'text-indigo-600 font-semibold' : ''}`}
        >
          Journal Treatise
        </button>
      </nav>

      {/* Zone 3: 1 primary action */}
      <div className="flex items-center gap-3 shrink-0">
        <button
          onClick={onExportLaTeX}
          className="rounded-xl bg-slate-900 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-slate-800 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 shadow-sm"
        >
          Export Monograph
        </button>
      </div>
    </header>
  );
};
