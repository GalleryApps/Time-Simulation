import React from 'react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onExportLaTeX: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab, onExportLaTeX }) => {
  return (
import React from 'react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onExportLaTeX: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab, onExportLaTeX }) => {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between gap-6 border-b border-[#EAE2D2] bg-[#FDFBF7]/95 px-6 py-3.5 backdrop-blur-md">
      {/* Zone 1: Single text element wordmark */}
      <div className="flex items-center gap-3">
        <button 
          onClick={() => setActiveTab('universesim')}
          className="text-xl font-['Playfair_Display'] font-normal tracking-tight text-[#081026] whitespace-nowrap shrink-0 text-left hover:text-[#EA580C] transition-colors"
        >
          Chronos-QG
        </button>
        <span className="hidden sm:inline-block font-cinzel text-[10px] tracking-widest uppercase text-[#B45309] bg-[#FEF3C7]/60 px-2.5 py-0.5 rounded border border-[#B45309]/20">
          Oxford Academic Suite
        </span>
      </div>

      {/* Zone 2: Clean single-line text navigation links */}
      <nav className="hidden lg:flex items-center gap-5 text-xs font-['Poppins'] font-light text-[#475569]">
        <button
          onClick={() => setActiveTab('criteria500')}
          className={`hover:text-[#081026] transition-colors whitespace-nowrap shrink-0 ${activeTab === 'criteria500' ? 'text-[#081026] font-normal border-b-2 border-[#081026] pb-0.5' : ''}`}
        >
          500-Criterion Matrix
        </button>
        <button
          onClick={() => setActiveTab('universesim')}
          className={`hover:text-[#EA580C] transition-colors whitespace-nowrap shrink-0 ${activeTab === 'universesim' ? 'text-[#EA580C] font-normal border-b-2 border-[#EA580C] pb-0.5' : 'text-[#0C1836]'}`}
        >
          Universe Sim (A vs B)
        </button>
        <button
          onClick={() => setActiveTab('harmonization')}
          className={`hover:text-[#B45309] transition-colors whitespace-nowrap shrink-0 ${activeTab === 'harmonization' ? 'text-[#B45309] font-normal border-b-2 border-[#B45309] pb-0.5' : ''}`}
        >
          1,500 Harmonization & 6 Studies
        </button>
        <button
          onClick={() => setActiveTab('harmonized-stresstest')}
          className={`hover:text-[#166534] transition-colors whitespace-nowrap shrink-0 ${activeTab === 'harmonized-stresstest' ? 'text-[#166534] font-normal border-b-2 border-[#16A34A] pb-0.5' : ''}`}
        >
          Harmonized 500 Stress-Test
        </button>
        <button
          onClick={() => setActiveTab('redteam')}
          className={`hover:text-[#081026] transition-colors whitespace-nowrap shrink-0 ${activeTab === 'redteam' ? 'text-[#081026] font-normal border-b-2 border-[#081026] pb-0.5' : ''}`}
        >
          20 Red-Team Attacks
        </button>
        <button
          onClick={() => setActiveTab('counterfactual')}
          className={`hover:text-[#081026] transition-colors whitespace-nowrap shrink-0 ${activeTab === 'counterfactual' ? 'text-[#081026] font-normal border-b-2 border-[#081026] pb-0.5' : ''}`}
        >
          14 Counterfactual Worlds
        </button>
        <button
          onClick={() => setActiveTab('igrt')}
          className={`hover:text-[#081026] transition-colors whitespace-nowrap shrink-0 ${activeTab === 'igrt' ? 'text-[#081026] font-normal border-b-2 border-[#081026] pb-0.5' : ''}`}
        >
          IGRT Synthesis & Lab
        </button>
        <button
          onClick={() => setActiveTab('robustness')}
          className={`hover:text-[#081026] transition-colors whitespace-nowrap shrink-0 ${activeTab === 'robustness' ? 'text-[#081026] font-normal border-b-2 border-[#081026] pb-0.5' : ''}`}
        >
          Robustness (Monte Carlo)
        </button>
        <button
          onClick={() => setActiveTab('journal')}
          className={`hover:text-[#081026] transition-colors whitespace-nowrap shrink-0 ${activeTab === 'journal' ? 'text-[#081026] font-normal border-b-2 border-[#081026] pb-0.5' : ''}`}
        >
          Journal Manuscript
        </button>
        <button
          onClick={() => setActiveTab('matrix100')}
          className={`hover:text-[#081026] transition-colors whitespace-nowrap shrink-0 ${activeTab === 'matrix100' ? 'text-[#081026] font-normal border-b-2 border-[#081026] pb-0.5' : ''}`}
        >
          500-Factor Stress-Test Matrix
        </button>
        <button
          onClick={() => setActiveTab('layman')}
          className={`hover:text-[#081026] transition-colors whitespace-nowrap shrink-0 ${activeTab === 'layman' ? 'text-[#081026] font-normal border-b-2 border-[#081026] pb-0.5' : ''}`}
        >
          Layman's Guide
        </button>
      </nav>

      {/* Zone 3: Actions */}
      <div className="flex items-center gap-2.5 shrink-0">
        <a
          href="/assets/aistudio/IGEG_vs_RES-RAG_500-Criterion_Journal_Manuscript_3fd82f8c.txt"
          download="IGEG_vs_RES-RAG_500-Criterion_Journal_Manuscript.txt"
          className="rounded-lg border border-[#EAE2D2] bg-[#FFFFFF] px-3 py-1.5 text-xs font-['Poppins'] font-normal text-[#0C1836] transition-colors hover:bg-[#F9F6F0] whitespace-nowrap shrink-0"
        >
          Download .txt
        </a>
        <button
          onClick={onExportLaTeX}
          className="rounded-lg bg-[#0C1836] px-3.5 py-1.5 text-xs font-cinzel text-[#FDFBF7] transition-colors hover:bg-[#1A3670] whitespace-nowrap shrink-0 shadow-xs"
        >
          Export LaTeX
        </button>
      </div>
    </header>
  );
};
