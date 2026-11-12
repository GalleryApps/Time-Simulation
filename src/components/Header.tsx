import React, { useState } from 'react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onExportLaTeX: () => void;
  onOpenSearch?: () => void;
  isDark?: boolean;
  onToggleTheme?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  activeTab, 
  setActiveTab, 
  onExportLaTeX, 
  onOpenSearch,
  isDark = false,
  onToggleTheme
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navCategories = [
    {
      label: 'Core Synthesis & Papers',
      items: [
        { id: 'refined-model-tech', name: 'Refined Model & Future Tech', badge: '1,740 pts Perfect' },
        { id: 'harmonized-model', name: 'The Harmonized Model (IGRT)', badge: '1,500 pts' },
        { id: 'harmonized-paper', name: 'Harmonized Research Paper', badge: 'PRD / CQG' },
        { id: 'journal', name: 'Full Journal Manuscript', badge: '500-Crit.' },
        { id: 'pubdoc', name: '4-Page Publication & Verdict', badge: 'Archival' },
        { id: 'layman', name: "Layman's Guide", badge: 'Accessible' },
      ]
    },
    {
      label: 'Interactive Simulators',
      items: [
        { id: 'universesim', name: 'Dual Universe Sim (Model A vs B)', badge: 'Live Canvas' },
        { id: 'igrt', name: 'IGRT Synthesis Lab', badge: '2:1 Audio' },
        { id: 'robustness', name: 'Robustness (Monte Carlo Engine)', badge: '20k Runs' },
        { id: 'simulator', name: 'RES-RAG Dynamics Lab', badge: 'Interactive' },
      ]
    },
    {
      label: 'Audits & Matrices',
      items: [
        { id: 'criteria500', name: '500-Criterion Adversarial Matrix', badge: 'Filterable' },
        { id: 'harmonized-stresstest', name: 'Harmonized 500 Stress-Test', badge: '1,500/1,500' },
        { id: 'matrix100', name: '500-Factor Stress-Test Matrix', badge: 'Detailed' },
        { id: 'harmonization', name: '1,500 Harmonization & 6 Studies', badge: 'Theorems' },
      ]
    },
    {
      label: 'Adversarial Stress-Tests',
      items: [
        { id: 'adversarial-panel-580', name: '580-Criterion Adversarial Stress Test', badge: '1,740 pts' },
        { id: 'redteam', name: '20 Red-Team Hard Attacks', badge: '4 Waves' },
        { id: 'counterfactual', name: '14 Counterfactual Worlds', badge: 'Phase Space' },
      ]
    },
    {
      label: 'Four Evolution Phases',
      items: [
        { id: 'phase1', name: 'Phase 1: WDW Freeze', badge: 'Gravity' },
        { id: 'phase2', name: 'Phase 2: Covariance & LIV', badge: 'Astrophysics' },
        { id: 'phase3', name: 'Phase 3: Cosmic Bounce', badge: 'Cosmology' },
        { id: 'phase4', name: 'Phase 4: Empirical Verdict', badge: 'Metrology' },
      ]
    }
  ];

  return (
    <>
      <header className="sticky top-0 z-50 flex items-center justify-between gap-6 border-b border-[#EAE2D2] dark:border-[#1E293B] bg-[#FDFBF7]/95 dark:bg-[#081026]/95 px-4 sm:px-6 py-3 backdrop-blur-md transition-colors">
        {/* Zone 1: Single text element wordmark */}
        <div className="flex items-center gap-4 shrink-0">
          <button 
            onClick={() => setActiveTab('refined-model-tech')}
            className="text-xl font-['Playfair_Display'] font-normal tracking-tight text-[#081026] dark:text-[#FDFBF7] whitespace-nowrap text-left hover:text-[#EA580C] transition-colors"
          >
            Chronos-QG
          </button>
        </div>

        {/* Zone 2: Clean single-line text navigation links */}
        <nav className="hidden lg:flex items-center gap-5 text-xs font-['Poppins'] text-[#475569] dark:text-[#94A3B8]">
          <button
            onClick={() => setActiveTab('refined-model-tech')}
            className={`hover:text-[#EA580C] transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${activeTab === 'refined-model-tech' ? 'text-[#EA580C] font-semibold border-b-2 border-[#EA580C] pb-0.5' : ''}`}
          >
            <span>Refined Model &amp; Future Tech</span>
            <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 font-bold">100% Perfect</span>
          </button>
          <button
            onClick={() => setActiveTab('harmonized-model')}
            className={`hover:text-[#EA580C] transition-colors whitespace-nowrap shrink-0 ${activeTab === 'harmonized-model' ? 'text-[#EA580C] font-semibold border-b-2 border-[#EA580C] pb-0.5' : ''}`}
          >
            The Harmonized Model
          </button>
          <button
            onClick={() => setActiveTab('adversarial-panel-580')}
            className={`hover:text-[#EA580C] transition-colors whitespace-nowrap shrink-0 ${activeTab === 'adversarial-panel-580' ? 'text-[#EA580C] font-semibold border-b-2 border-[#EA580C] pb-0.5' : ''}`}
          >
            580-Criterion Stress Test
          </button>
          <button
            onClick={() => setActiveTab('harmonized-paper')}
            className={`hover:text-[#15803D] transition-colors whitespace-nowrap shrink-0 ${activeTab === 'harmonized-paper' ? 'text-[#15803D] font-semibold border-b-2 border-[#15803D] pb-0.5' : ''}`}
          >
            Research Paper
          </button>
          <button
            onClick={() => setActiveTab('universesim')}
            className={`hover:text-[#EA580C] transition-colors whitespace-nowrap shrink-0 ${activeTab === 'universesim' ? 'text-[#EA580C] font-semibold border-b-2 border-[#EA580C] pb-0.5' : ''}`}
          >
            Universe Sim (A vs B)
          </button>

          {/* All Modules Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1.5 hover:text-[#081026] dark:hover:text-[#FDFBF7] transition-colors whitespace-nowrap shrink-0 font-medium py-1"
            >
              <span>Explore All 18 Modules</span>
              <span className="text-[10px] transform transition-transform" style={{ transform: dropdownOpen ? 'rotate(180deg)' : 'none' }}>▼</span>
            </button>

            {dropdownOpen && (
              <>
                <div 
                  className="fixed inset-0 z-40" 
                  onClick={() => setDropdownOpen(false)} 
                />
                <div className="absolute left-0 mt-2 w-80 rounded-2xl bg-white dark:bg-[#0B1530] border border-[#EAE2D2] dark:border-[#1E293B] shadow-2xl p-3 z-50 space-y-3 max-h-[80vh] overflow-y-auto">
                  {navCategories.map((cat) => (
                    <div key={cat.label} className="space-y-1">
                      <div className="font-cinzel text-[10px] uppercase tracking-wider text-[#9A3412] dark:text-[#FDBA74] px-2 py-1 border-b border-[#F4EFE6] dark:border-[#1A2645]">
                        {cat.label}
                      </div>
                      <div className="space-y-0.5 pt-1">
                        {cat.items.map((item) => (
                          <button
                            key={item.id}
                            onClick={() => {
                              setActiveTab(item.id);
                              setDropdownOpen(false);
                            }}
                            className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs flex items-center justify-between transition-colors ${
                              activeTab === item.id 
                                ? 'bg-[#EA580C] text-white font-medium' 
                                : 'text-[#334155] dark:text-[#CBD5E1] hover:bg-[#FDFBF7] dark:hover:bg-[#142B5B]'
                            }`}
                          >
                            <span className="truncate">{item.name}</span>
                            <span className={`text-[10px] font-mono shrink-0 ml-2 ${activeTab === item.id ? 'text-white' : 'text-[#64748B] dark:text-[#94B2F5]'}`}>
                              {item.badge}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </nav>

        {/* Zone 3: Actions */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Global Search Button */}
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-2 rounded-lg border border-[#EAE2D2] dark:border-[#1E293B] bg-[#FFFFFF] dark:bg-[#0C1836] px-3 py-1.5 text-xs font-['Poppins'] text-[#475569] dark:text-[#CBD9FC] hover:text-[#081026] dark:hover:text-white hover:bg-[#F9F6F0] dark:hover:bg-[#142B5B] transition-colors whitespace-nowrap shrink-0 shadow-2xs"
            title="Search Academic Suite (Ctrl+K)"
          >
            <span>🔍</span>
            <span className="hidden md:inline">Search</span>
            <kbd className="hidden lg:inline-block font-mono text-[9px] bg-[#F4EFE6] dark:bg-[#081026] px-1.5 py-0.2 rounded border border-[#EAE2D2] dark:border-[#173065] text-[#64748B] dark:text-[#94B2F5]">⌘K</kbd>
          </button>

          {/* Theme Toggle Button */}
          {onToggleTheme && (
            <button
              onClick={onToggleTheme}
              className="p-1.5 rounded-lg border border-[#EAE2D2] dark:border-[#1E293B] bg-[#FFFFFF] dark:bg-[#0C1836] text-xs text-[#475569] dark:text-[#CBD9FC] hover:text-[#081026] dark:hover:text-white hover:bg-[#F9F6F0] dark:hover:bg-[#142B5B] transition-colors"
              title={isDark ? 'Switch to Light Ecru Theme' : 'Switch to Dark Obsidian Theme'}
              aria-label="Toggle theme"
            >
              {isDark ? '☀️' : '🌙'}
            </button>
          )}

          {/* Download Text Manuscript */}
          <a
            href="/assets/aistudio/IGEG_vs_RES-RAG_500-Criterion_Journal_Manuscript_3fd82f8c.txt"
            download="IGEG_vs_RES-RAG_500-Criterion_Journal_Manuscript.txt"
            className="hidden sm:inline-flex rounded-lg border border-[#EAE2D2] dark:border-[#1E293B] bg-[#FFFFFF] dark:bg-[#0C1836] px-3 py-1.5 text-xs font-['Poppins'] text-[#0C1836] dark:text-[#CBD9FC] transition-colors hover:bg-[#F9F6F0] dark:hover:bg-[#142B5B] whitespace-nowrap shrink-0"
          >
            .txt
          </a>

          {/* LaTeX Export CTA */}
          <button
            onClick={onExportLaTeX}
            className="rounded-lg bg-[#0C1836] dark:bg-[#EA580C] px-3.5 py-1.5 text-xs font-cinzel text-[#FDFBF7] transition-colors hover:bg-[#1A3670] dark:hover:bg-[#C2410C] whitespace-nowrap shrink-0 shadow-xs"
          >
            Export LaTeX
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg border border-[#EAE2D2] dark:border-[#1E293B] bg-[#FFFFFF] dark:bg-[#0C1836] text-[#0C1836] dark:text-[#FDFBF7] text-sm"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex flex-col justify-end">
          <div className="bg-[#FFFFFF] dark:bg-[#081026] border-t border-[#EAE2D2] dark:border-[#1E293B] rounded-t-3xl max-h-[85vh] overflow-y-auto p-5 space-y-5 animate-in slide-in-from-bottom duration-200">
            <div className="flex items-center justify-between border-b border-[#EAE2D2] dark:border-[#1E293B] pb-3">
              <div>
                <h3 className="font-['Playfair_Display'] text-lg text-[#081026] dark:text-[#FDFBF7]">
                  Navigation &amp; Research Modules
                </h3>
                <p className="text-xs text-[#64748B] dark:text-[#94B2F5]">
                  Select from 18 specialized quantum gravity modules
                </p>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 text-[#64748B] hover:text-[#081026] dark:hover:text-white rounded-lg text-sm"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4">
              {navCategories.map((cat) => (
                <div key={cat.label} className="space-y-1.5">
                  <div className="font-cinzel text-[10px] uppercase tracking-wider text-[#9A3412] dark:text-[#FDBA74]">
                    {cat.label}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    {cat.items.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => {
                          setActiveTab(item.id);
                          setMobileMenuOpen(false);
                        }}
                        className={`text-left px-3 py-2 rounded-xl text-xs flex items-center justify-between border transition-all ${
                          activeTab === item.id 
                            ? 'bg-[#EA580C] text-white border-[#C2410C] font-medium shadow-xs' 
                            : 'bg-[#FDFBF7] dark:bg-[#0C1836] text-[#334155] dark:text-[#CBD9FC] border-[#EAE2D2] dark:border-[#173065] hover:bg-[#F4EFE6]'
                        }`}
                      >
                        <span className="truncate">{item.name}</span>
                        <span className={`text-[10px] font-mono shrink-0 ml-2 ${activeTab === item.id ? 'text-white' : 'text-[#64748B] dark:text-[#94B2F5]'}`}>
                          {item.badge}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-[#EAE2D2] dark:border-[#1E293B] flex items-center justify-between gap-3">
              <a
                href="/assets/aistudio/IGEG_vs_RES-RAG_500-Criterion_Journal_Manuscript_3fd82f8c.txt"
                download="IGEG_vs_RES-RAG_500-Criterion_Journal_Manuscript.txt"
                className="w-full text-center py-2.5 rounded-xl border border-[#EAE2D2] dark:border-[#1E293B] text-xs font-['Poppins'] text-[#0C1836] dark:text-[#CBD9FC]"
              >
                Download .txt Manuscript
              </a>
              <button
                onClick={() => {
                  onExportLaTeX();
                  setMobileMenuOpen(false);
                }}
                className="w-full text-center py-2.5 rounded-xl bg-[#0C1836] dark:bg-[#EA580C] text-white text-xs font-cinzel"
              >
                Export LaTeX
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
