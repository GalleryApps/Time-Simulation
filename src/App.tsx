/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import { Header } from './components/Header';
import { Criteria500MatrixView } from './components/Criteria500MatrixView';
import { RedTeamLabView } from './components/RedTeamLabView';
import { CounterfactualWorldsView } from './components/CounterfactualWorldsView';
import { IgrtSynthesisLabView } from './components/IgrtSynthesisLabView';
import { RobustnessLabView } from './components/RobustnessLabView';
import { JournalTreatiseView } from './components/JournalTreatiseView';
import { Factors500MatrixView } from './components/Factors500MatrixView';
import { LaymansGuideView } from './components/LaymansGuideView';
import { ResRagSimulatorView } from './components/ResRagSimulatorView';
import { PublicationDocumentView } from './components/PublicationDocumentView';
import { Phase1View } from './components/Phase1View';
import { Phase2View } from './components/Phase2View';
import { Phase3View } from './components/Phase3View';
import { Phase4View } from './components/Phase4View';
import { DualUniverseSimulationView } from './components/DualUniverseSimulationView';
import { Harmonization1500LabView } from './components/Harmonization1500LabView';
import { Harmonized500StressTestView } from './components/Harmonized500StressTestView';
import { HarmonizedModelView } from './components/HarmonizedModelView';
import { HarmonizedResearchPaperView } from './components/HarmonizedResearchPaperView';

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallbackTab: (tab: string) => void;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Caught error in App view:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="rounded-2xl border border-rose-300 bg-rose-50 p-8 text-center space-y-4 max-w-xl mx-auto my-12">
          <h2 className="text-xl font-['Playfair_Display'] text-rose-900 font-normal">
            View Error Caught
          </h2>
          <p className="text-xs text-rose-800 font-mono">
            {this.state.error?.message || 'An unexpected rendering error occurred.'}
          </p>
          <button
            onClick={() => {
              this.setState({ hasError: false, error: null });
              this.props.fallbackTab('harmonized-model');
            }}
            className="px-4 py-2 bg-[#0C1836] text-white text-xs rounded-lg hover:bg-[#1A3670]"
          >
            Reset to Harmonized Model
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('harmonized-model');
  const [showExportModal, setShowExportModal] = useState<boolean>(false);
  const [showSearchModal, setShowSearchModal] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Global Ctrl+K / Cmd+K listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setShowSearchModal((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setShowSearchModal(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Comprehensive Search Items across all 13 modules, key formulas, and physics topics
  const searchIndex = useMemo(() => [
    { id: 'hm-1', tab: 'harmonized-model', title: 'The Harmonized Model (IGRT)', category: 'Core Synthesis', desc: 'Complete 1,500/1,500 framework: principal fiber bundle P(M, S_Fisher), 10 elements, 5 ramifications.' },
    { id: 'hm-sim', tab: 'harmonized-model', title: 'Live Computational Laboratory & Simulators', category: 'Interactive Simulator', desc: 'FLRW Quantum Bounce engine, 2:1 Lissajous resonance comparator, and w(z) dark energy explorer.' },
    { id: 'hp-1', tab: 'harmonized-paper', title: 'Harmonized Research Paper', category: 'Formal Monograph', desc: 'Peer-reviewed Physical Review D / CQG style paper with derivations, proofs, and 6 empirical testing protocols.' },
    { id: 'c500', tab: 'criteria500', title: '500-Criterion Adversarial Matrix', category: 'Evaluation Matrix', desc: 'Granular point-by-point audit across 10 domains with filterable search and verified scores.' },
    { id: 'usim', tab: 'universesim', title: 'Dual Universe Simulation (Model A vs B)', category: 'Interactive Simulation', desc: 'Side-by-side comparative simulation across 5 physical scenarios: bounce, GRB race, black hole, and observer dynamics.' },
    { id: 'harm1500', tab: 'harmonization', title: '1,500 Harmonization Lab & 6 Studies', category: 'Synthesis Lab', desc: 'Six independent formal studies proving the mathematical closure of the Bulaqueña-Tassan synthesis.' },
    { id: 'hstresstest', tab: 'harmonized-stresstest', title: 'Harmonized 500 Stress-Test Matrix', category: 'Audit Log', desc: 'Full verification log showing how all 500 criteria achieve 3/3 points (1,500/1,500) under IGRT.' },
    { id: 'redteam', tab: 'redteam', title: '20 Red-Team Hard Attacks', category: 'Adversarial Attacks', desc: '20 severe stress attacks across 4 waves testing Wheeler-DeWitt freeze, GRBs, and black hole unitarity.' },
    { id: 'counter', tab: 'counterfactual', title: '14 Counterfactual Worlds', category: 'Gedanken Experiments', desc: 'Explores parameter extremes: Planckian saturation, zero-entropy cosmos, and pure Markovian collapse.' },
    { id: 'eq-master', tab: 'harmonized-paper', title: 'Master Equivalence Identity (dτ = Arc-Length = Flux)', category: 'Key Equation', desc: 'Equates proper time to Fisher-Rao quantum arc length and discrete resonance flux.' },
    { id: 'eq-bounce', tab: 'harmonized-model', title: 'Quantum Singularity Bounce (H² = 8πG/3 ρ(1 - ρ/ρ_max))', category: 'Key Equation', desc: 'Avoids cosmic singularity via finite Planckian statistical bound with positive acceleration ä > 0.' },
    { id: 'eq-21', tab: 'harmonized-paper', title: '2:1 Harmonic Coupling Ratio (f_PTA / f_clock = 2)', category: 'Key Equation', desc: 'Unambiguous empirical smoking gun between pulsar timing residuals and optical lattice clocks.' },
    { id: 'eq-de', tab: 'harmonized-model', title: 'Dynamic Dark Energy Equation of State w(z)', category: 'Key Equation', desc: 'Vacuum horizon relaxation producing w(z) = -1 + 0.018(z/(1+z)) matching DESI 2024.' },
    { id: 'eq-screen', tab: 'harmonized-paper', title: 'Chameleon Screening Mechanism (m_eff²(ρ) = V\'\' + κ ρ)', category: 'Key Equation', desc: 'Suppresses scalar fifth-force in high-density solar system bodies to meet Cassini tracking bounds.' },
    { id: 'eq-bianchi', tab: 'harmonized-paper', title: 'Contracted Bianchi Conservation Proof (∇^μ(T_μν + I_μν) = 0)', category: 'Proof & Theorem', desc: 'Step-by-step tensor proof establishing exact stress-energy conservation from metric variation.' },
    { id: 'eq-chentsov', tab: 'harmonized-paper', title: 'Chentsov-Morozova Uniqueness Theorem for State Fibers', category: 'Proof & Theorem', desc: 'Proof that the Fisher-Rao proper time metric is the unique CPTP-invariant Riemannian structure.' },
    { id: 'igrt-lab', tab: 'igrt', title: 'IGRT Synthesis Lab', category: 'Laboratory', desc: 'Interactive state space trajectory and mathematical parameter sliders.' },
    { id: 'robust', tab: 'robustness', title: 'Robustness Lab (Monte Carlo Engine)', category: 'Sensitivity Analysis', desc: 'Stochastic parameter sweeps validating stability under extreme adversarial perturbations.' },
    { id: 'journal', tab: 'journal', title: 'Full Journal Manuscript', category: 'Publication Monograph', desc: 'Complete publication text evaluating Model A vs Model B with downloadable plain text.' },
    { id: 'f500', tab: 'matrix100', title: '500-Factor Stress-Test Matrix', category: 'Granular Matrix', desc: 'Extensive 500-factor comparative matrix across all ten physical and epistemic domains.' },
    { id: 'layman', tab: 'layman', title: 'Layman\'s Guide', category: 'Accessible Overview', desc: 'Intuitive analogies explaining the Problem of Time, quantum clocks, and the cosmic bounce.' }
  ], []);

  const filteredSearchResults = useMemo(() => {
    if (!searchQuery.trim()) return searchIndex.slice(0, 8);
    const q = searchQuery.toLowerCase();
    return searchIndex.filter(item => 
      item.title.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q) ||
      item.desc.toLowerCase().includes(q)
    );
  }, [searchQuery, searchIndex]);

  const handleExportLaTeX = () => {
    setShowExportModal(true);
  };

  const latexContent = `\\documentclass[11pt,twocolumn]{article}
\\usepackage{amsmath,amssymb,amsfonts}
\\usepackage{xcolor}
\\usepackage{hyperref}

\\title{\\textbf{Adversarial Evaluation of Emergent Time Frameworks: A 500-Criterion Stress Test and Synthesis of Information Geometric Extended Gravity (IGEG) and the RES=RAG Resonance Model}}

\\author{
\\textbf{Marlon Bulaqueña} \\\\
ORCID: 0009-0007-3966-0494 \\quad \\url{https://orcid.org/0009-0007-3966-0494} \\\\[1ex]
\\textbf{Jean-Charles Tassan} \\\\
ORCID: 0009-0000-8566-0486 \\quad \\url{https://orcid.org/0009-0000-8566-0486}
}
\\date{March 2026}

\\begin{document}
\\maketitle

\\begin{abstract}
The reconciliation of general relativity and quantum mechanics remains hindered by the "problem of time." We present a 500-criterion adversarial evaluation across ten physical and epistemic domains comparing Marlon D. Bulaqueña's Information Geometric Extended Gravity (IGEG) and Jean-Charles Tassan's RES=RAG model. IGEG demonstrated superior physical tenability (712/1500, 47.5%) compared to RES=RAG (264/1500, 17.6%), primarily due to explicit field equations, a General Relativity correspondence limit, and metric time. RES=RAG proved competitive on observer-dependent and cognitive criteria (leading 78 to 51 on the 53-criterion conceptual subset). We propose a unified synthesis, Information-Geometric Resonant Time (IGRT), equating the Fisher-Rao length of retention-generation paths with proper time: $d\\tau = \\sqrt{g_{ij}\\dot{\\theta}^i\\dot{\\theta}^j} d\\lambda \\equiv \\sqrt{-g_{\\mu\\nu}\\dot{x}^\\mu\\dot{x}^\\nu} d\\lambda$, predicting a 2:1 harmonic ratio between pulsar-timing residual modulation ($f_{\\text{PTA}} = \\omega/\\pi$) and optical-clock comparisons.
\\end{abstract}

\\section{Framework Formulations}
IGEG is formulated via minimally coupled scalar field $\\psi$:
\\begin{equation}
G_{\\mu\\nu} = 8\\pi G (T_{\\mu\\nu} + I_{\\mu\\nu})
\\end{equation}
\\begin{equation}
I_{\\mu\\nu} = \\nabla_\\mu \\psi \\nabla_\\nu \\psi - \\frac{1}{2} g_{\\mu\\nu} (\\nabla\\psi)^2 - g_{\\mu\\nu} V(\\psi)
\\end{equation}

\\section{The IGRT Core Identification}
\\begin{equation}
\\Delta\\tau = \\int \\sqrt{g_{ij}\\dot{\\theta}^i\\dot{\\theta}^j} \\, d\\lambda \\;\\equiv\\; \\int \\sqrt{-g_{\\mu\\nu}\\dot{x}^\\mu\\dot{x}^\\nu} \\, d\\lambda
\\end{equation}
\\begin{equation}
\\psi^2(x) = \\kappa_\\psi \\lim_{A\\to x} \\frac{S(\\rho_A) - S(\\sigma_A)}{\\text{Vol}(A)}
\\end{equation}

\\section{Experimental 2:1 Harmonic Test}
\\begin{equation}
f_{\\text{PTA}} = \\frac{2\\omega}{2\\pi} = \\frac{\\omega}{\\pi}, \\quad \\frac{\\delta\\nu}{\\nu}(t) = \\varepsilon x_0 \\cos(\\omega t + \\phi)
\\end{equation}

\\end{document}`;

  const downloadFile = (content: string, filename: string, type: string) => {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#0C1836] flex flex-col font-sans selection:bg-[#EA580C]/20 selection:text-[#9A3412]">
      
      {/* Universal Top Bar */}
      <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onExportLaTeX={handleExportLaTeX} 
        onOpenSearch={() => setShowSearchModal(true)}
      />

      {/* Oxford Scholarly Masthead Secondary Nav */}
      <div className="border-b border-[#EAE2D2] bg-[#FDFBF7]/95 px-4 sm:px-6 py-2.5 backdrop-blur-md sticky top-[57px] z-40">
        <div className="max-w-6xl mx-auto flex items-center justify-between overflow-x-auto text-xs gap-3">
          
          <div className="flex items-center gap-1.5 shrink-0 p-1 bg-[#F4EFE6] rounded-xl border border-[#EAE2D2]">
            <button
              onClick={() => setActiveTab('harmonized-model')}
              className={`px-3 py-1.5 rounded-lg transition-all whitespace-nowrap text-xs font-['Poppins'] flex items-center gap-1.5 ${
                activeTab === 'harmonized-model' 
                  ? 'bg-[#EA580C] text-white shadow-xs font-normal ring-2 ring-[#EA580C]/20' 
                  : 'text-[#9A3412] bg-[#FFEDD5]/90 hover:bg-[#FFEDD5] font-light'
              }`}
            >
              <span>The Harmonized Model</span>
              <span className={`px-1.5 py-0.2 rounded text-[10px] font-mono ${activeTab === 'harmonized-model' ? 'bg-[#9A3412] text-white' : 'bg-[#EA580C] text-white'}`}>1,500 pts</span>
            </button>
            <button
              onClick={() => setActiveTab('harmonized-paper')}
              className={`px-3 py-1.5 rounded-lg transition-all whitespace-nowrap text-xs font-['Poppins'] flex items-center gap-1.5 ${
                activeTab === 'harmonized-paper' 
                  ? 'bg-[#15803D] text-white shadow-xs font-normal ring-2 ring-[#15803D]/20' 
                  : 'text-[#166534] bg-[#DCFCE7]/90 hover:bg-[#DCFCE7] font-light'
              }`}
            >
              <span>Harmonized Research Paper</span>
              <span className={`px-1.5 py-0.2 rounded text-[10px] font-mono ${activeTab === 'harmonized-paper' ? 'bg-[#14532D] text-white' : 'bg-[#15803D] text-white'}`}>PRD / CQG</span>
            </button>
            <button
              onClick={() => setActiveTab('criteria500')}
              className={`px-3 py-1.5 rounded-lg transition-all whitespace-nowrap text-xs font-['Poppins'] ${
                activeTab === 'criteria500' 
                  ? 'bg-[#0C1836] text-[#FDFBF7] shadow-xs font-normal' 
                  : 'text-[#475569] hover:text-[#081026] hover:bg-[#EAE2D2]/60 font-light'
              }`}
            >
              <span>500-Criterion Matrix</span>
              <span className={`ml-1.5 px-1.5 py-0.2 rounded text-[10px] font-mono ${activeTab === 'criteria500' ? 'bg-[#1A3670] text-[#CBD9FC]' : 'bg-[#EBF0FE] text-[#1A3670]'}`}>500</span>
            </button>
            <button
              onClick={() => setActiveTab('universesim')}
              className={`px-3 py-1.5 rounded-lg transition-all whitespace-nowrap text-xs font-['Poppins'] flex items-center gap-1.5 ${
                activeTab === 'universesim' 
                  ? 'bg-[#EA580C] text-white shadow-xs font-normal ring-2 ring-[#EA580C]/20' 
                  : 'text-[#9A3412] bg-[#FFEDD5]/80 hover:bg-[#FFEDD5] font-light'
              }`}
            >
              <span>Universe Sim: Model A vs B</span>
              <span className={`px-1.5 py-0.2 rounded text-[10px] font-cinzel ${activeTab === 'universesim' ? 'bg-[#9A3412] text-white' : 'bg-[#FFEDD5] text-[#9A3412]'}`}>LIVE</span>
            </button>
            <button
              onClick={() => setActiveTab('harmonization')}
              className={`px-3 py-1.5 rounded-lg transition-all whitespace-nowrap text-xs font-['Poppins'] flex items-center gap-1.5 ${
                activeTab === 'harmonization' 
                  ? 'bg-[#B45309] text-white shadow-xs font-normal ring-2 ring-[#B45309]/20' 
                  : 'text-[#92400E] bg-[#FEF3C7]/80 hover:bg-[#FEF3C7] font-light'
              }`}
            >
              <span>1,500 Harmonization & 6 Studies</span>
              <span className={`px-1.5 py-0.2 rounded text-[10px] font-mono ${activeTab === 'harmonization' ? 'bg-[#78350F] text-[#FEF3C7]' : 'bg-[#FEF3C7] text-[#92400E]'}`}>1,500/1,500</span>
            </button>
            <button
              onClick={() => setActiveTab('harmonized-stresstest')}
              className={`px-3 py-1.5 rounded-lg transition-all whitespace-nowrap text-xs font-['Poppins'] flex items-center gap-1.5 ${
                activeTab === 'harmonized-stresstest' 
                  ? 'bg-[#15803D] text-white shadow-xs font-normal ring-2 ring-[#15803D]/20' 
                  : 'text-[#166534] bg-[#DCFCE7]/80 hover:bg-[#DCFCE7] font-light'
              }`}
            >
              <span>Harmonized 500 Stress-Test</span>
              <span className={`px-1.5 py-0.2 rounded text-[10px] font-mono ${activeTab === 'harmonized-stresstest' ? 'bg-[#14532D] text-[#DCFCE7]' : 'bg-[#DCFCE7] text-[#14532D]'}`}>1,500 pts</span>
            </button>
            <button
              onClick={() => setActiveTab('matrix100')}
              className={`px-3 py-1.5 rounded-lg transition-all whitespace-nowrap text-xs font-['Poppins'] flex items-center gap-1.5 ${
                activeTab === 'matrix100' 
                  ? 'bg-[#0C1836] text-[#FDFBF7] shadow-xs font-normal' 
                  : 'text-[#475569] hover:text-[#081026] hover:bg-[#EAE2D2]/60 font-light'
              }`}
            >
              <span>500-Factor Stress Matrix</span>
              <span className="px-1.5 py-0.2 rounded bg-[#EBF0FE] text-[#1A3670] text-[10px] font-mono">500</span>
            </button>
            <button
              onClick={() => setActiveTab('redteam')}
              className={`px-3 py-1.5 rounded-lg transition-all whitespace-nowrap text-xs font-['Poppins'] flex items-center gap-1.5 ${
                activeTab === 'redteam' 
                  ? 'bg-[#991B1B] text-white shadow-xs font-normal' 
                  : 'text-[#475569] hover:text-[#081026] hover:bg-[#EAE2D2]/60 font-light'
              }`}
            >
              <span>20 Red-Team Attacks</span>
              <span className="px-1.5 py-0.2 rounded bg-rose-100 text-rose-800 text-[10px] font-mono">20</span>
            </button>
            <button
              onClick={() => setActiveTab('counterfactual')}
              className={`px-3 py-1.5 rounded-lg transition-all whitespace-nowrap text-xs font-['Poppins'] flex items-center gap-1.5 ${
                activeTab === 'counterfactual' 
                  ? 'bg-[#047857] text-white shadow-xs font-normal' 
                  : 'text-[#475569] hover:text-[#081026] hover:bg-[#EAE2D2]/60 font-light'
              }`}
            >
              <span>14 Counterfactual Worlds</span>
              <span className="px-1.5 py-0.2 rounded bg-emerald-100 text-emerald-800 text-[10px] font-mono">14</span>
            </button>
            <button
              onClick={() => setActiveTab('igrt')}
              className={`px-3 py-1.5 rounded-lg transition-all whitespace-nowrap text-xs font-['Poppins'] flex items-center gap-1.5 ${
                activeTab === 'igrt' 
                  ? 'bg-[#6D28D9] text-white shadow-xs font-normal' 
                  : 'text-[#475569] hover:text-[#081026] hover:bg-[#EAE2D2]/60 font-light'
              }`}
            >
              <span>IGRT Synthesis Lab</span>
              <span className="px-1.5 py-0.2 rounded bg-purple-100 text-purple-800 text-[10px] font-mono">2:1</span>
            </button>
            <button
              onClick={() => setActiveTab('robustness')}
              className={`px-3 py-1.5 rounded-lg transition-all whitespace-nowrap text-xs font-['Poppins'] flex items-center gap-1.5 ${
                activeTab === 'robustness' 
                  ? 'bg-[#0C1836] text-[#FDFBF7] shadow-xs font-normal' 
                  : 'text-[#475569] hover:text-[#081026] hover:bg-[#EAE2D2]/60 font-light'
              }`}
            >
              <span>Robustness & Monte Carlo</span>
              <span className="px-1.5 py-0.2 rounded bg-[#EAE2D2] text-[#475569] text-[10px] font-mono">20k</span>
            </button>
            <button
              onClick={() => setActiveTab('journal')}
              className={`px-3 py-1.5 rounded-lg transition-all whitespace-nowrap text-xs font-['Poppins'] ${
                activeTab === 'journal' 
                  ? 'bg-[#0C1836] text-[#FDFBF7] shadow-xs font-normal' 
                  : 'text-[#475569] hover:text-[#081026] hover:bg-[#EAE2D2]/60 font-light'
              }`}
            >
              Journal Manuscript
            </button>
            <button
              onClick={() => setActiveTab('layman')}
              className={`px-3 py-1.5 rounded-lg transition-all whitespace-nowrap text-xs font-['Poppins'] ${
                activeTab === 'layman' 
                  ? 'bg-[#0C1836] text-[#FDFBF7] shadow-xs font-normal' 
                  : 'text-[#475569] hover:text-[#081026] hover:bg-[#EAE2D2]/60 font-light'
              }`}
            >
              Layman's Guide
            </button>
            <button
              onClick={() => setActiveTab('simulator')}
              className={`px-3 py-1.5 rounded-lg transition-all whitespace-nowrap text-xs font-['Poppins'] ${
                activeTab === 'simulator' 
                  ? 'bg-[#0C1836] text-[#FDFBF7] shadow-xs font-normal' 
                  : 'text-[#475569] hover:text-[#081026] hover:bg-[#EAE2D2]/60 font-light'
              }`}
            >
              RES-RAG Lab
            </button>
            <button
              onClick={() => setActiveTab('pubdoc')}
              className={`px-3 py-1.5 rounded-lg transition-all whitespace-nowrap text-xs font-['Poppins'] ${
                activeTab === 'pubdoc' 
                  ? 'bg-[#0C1836] text-[#FDFBF7] shadow-xs font-normal' 
                  : 'text-[#475569] hover:text-[#081026] hover:bg-[#EAE2D2]/60 font-light'
              }`}
            >
              4-Page Publication & Verdict
            </button>
            <button
              onClick={() => setActiveTab('phase1')}
              className={`px-2.5 py-1.5 rounded-lg transition-all whitespace-nowrap text-[11px] font-['Poppins'] ${
                activeTab === 'phase1' 
                  ? 'bg-[#0C1836] text-[#FDFBF7] shadow-xs font-normal' 
                  : 'text-[#64748B] hover:text-[#081026] font-light'
              }`}
            >
              Phase 1: WDW Freeze
            </button>
            <button
              onClick={() => setActiveTab('phase2')}
              className={`px-2.5 py-1.5 rounded-lg transition-all whitespace-nowrap text-[11px] font-['Poppins'] ${
                activeTab === 'phase2' 
                  ? 'bg-[#0C1836] text-[#FDFBF7] shadow-xs font-normal' 
                  : 'text-[#64748B] hover:text-[#081026] font-light'
              }`}
            >
              Phase 2: Covariance & LIV
            </button>
            <button
              onClick={() => setActiveTab('phase3')}
              className={`px-2.5 py-1.5 rounded-lg transition-all whitespace-nowrap text-[11px] font-['Poppins'] ${
                activeTab === 'phase3' 
                  ? 'bg-[#0C1836] text-[#FDFBF7] shadow-xs font-normal' 
                  : 'text-[#64748B] hover:text-[#081026] font-light'
              }`}
            >
              Phase 3: Bounce
            </button>
            <button
              onClick={() => setActiveTab('phase4')}
              className={`px-2.5 py-1.5 rounded-lg transition-all whitespace-nowrap text-[11px] font-['Poppins'] ${
                activeTab === 'phase4' 
                  ? 'bg-[#0C1836] text-[#FDFBF7] shadow-xs font-normal' 
                  : 'text-[#64748B] hover:text-[#081026] font-light'
              }`}
            >
              Phase 4: Empirical Verdict
            </button>
          </div>

          <div className="hidden xl:flex items-center gap-3 text-[#64748B] text-xs shrink-0 font-['Poppins'] font-light">
            <span className="text-[#1A3670] font-normal">IGEG: 712 (47.5%)</span>
            <span aria-hidden="true" className="text-[#CBD5E1]">·</span>
            <span className="text-[#B45309] font-normal">RES=RAG: 264 (17.6%)</span>
            <span aria-hidden="true" className="text-[#CBD5E1]">·</span>
            <span className="text-[#15803D] font-normal">500 / 500 Audited</span>
          </div>

        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-8">
        <ErrorBoundary fallbackTab={setActiveTab}>
          {activeTab === 'harmonized-model' && (
            <HarmonizedModelView 
              onNavigateToPaper={() => setActiveTab('harmonized-paper')}
              onNavigateToStressTest={() => setActiveTab('harmonized-stresstest')}
            />
          )}
          {activeTab === 'harmonized-paper' && <HarmonizedResearchPaperView />}
          {activeTab === 'criteria500' && <Criteria500MatrixView />}
          {activeTab === 'universesim' && <DualUniverseSimulationView />}
          {activeTab === 'harmonization' && <Harmonization1500LabView />}
          {activeTab === 'harmonized-stresstest' && <Harmonized500StressTestView />}
          {activeTab === 'redteam' && <RedTeamLabView />}
          {activeTab === 'counterfactual' && <CounterfactualWorldsView />}
          {activeTab === 'igrt' && <IgrtSynthesisLabView />}
          {activeTab === 'robustness' && <RobustnessLabView />}
          {activeTab === 'journal' && <JournalTreatiseView />}
          {activeTab === 'matrix100' && <Factors500MatrixView />}
          {activeTab === 'layman' && <LaymansGuideView />}
          {activeTab === 'simulator' && <ResRagSimulatorView />}
          {activeTab === 'pubdoc' && <PublicationDocumentView />}
          {activeTab === 'phase1' && <Phase1View />}
          {activeTab === 'phase2' && <Phase2View />}
          {activeTab === 'phase3' && <Phase3View />}
          {activeTab === 'phase4' && <Phase4View />}
        </ErrorBoundary>
      </main>

      {/* Scientific Footer */}
      <footer className="border-t border-[#EAE2D2] bg-[#FDFBF7] px-6 py-8 text-xs text-[#64748B]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <div className="font-['Playfair_Display'] font-normal text-[#081026] text-base">
              Chronos-QG: Adversarial Emergent Time Research Suite
            </div>
            <div className="font-['Poppins'] font-light text-[#64748B]">
              Marlon Bulaqueña (ORCID: 0009-0007-3966-0494) · Jean-Charles Tassan (ORCID: 0009-0000-8566-0486)
            </div>
          </div>
          <div className="flex items-center gap-4 text-xs font-['Poppins'] font-light">
            <a
              href="/assets/aistudio/IGEG_vs_RES-RAG_500-Criterion_Journal_Manuscript_3fd82f8c.txt"
              download="IGEG_vs_RES-RAG_500-Criterion_Journal_Manuscript.txt"
              className="text-[#EA580C] hover:underline"
            >
              Manuscript (.txt) ↗
            </a>
            <button
              onClick={handleExportLaTeX}
              className="text-[#0C1836] hover:text-[#EA580C] font-normal"
            >
              Export LaTeX Monograph
            </button>
          </div>
        </div>
      </footer>

      {/* Export LaTeX Modal */}
      {showExportModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#081026]/70 backdrop-blur-sm p-4">
          <div className="w-full max-w-2xl rounded-2xl bg-[#FFFFFF] p-6 shadow-xl space-y-4 border border-[#EAE2D2]">
            <div className="flex items-center justify-between border-b border-[#EAE2D2] pb-3">
              <h3 className="text-xl font-['Playfair_Display'] font-normal text-[#081026]">
                Export Publication-Grade LaTeX Monograph
              </h3>
              <button
                onClick={() => setShowExportModal(false)}
                className="text-[#64748B] hover:text-[#081026] text-sm font-mono"
              >
                ✕
              </button>
            </div>
            <p className="text-xs font-['Poppins'] font-light text-[#475569]">
              Ready-to-compile LaTeX source code for the 500-criterion study, including all field equations, mathematical definitions, and the IGRT dual-layer synthesis.
            </p>
            <pre className="max-h-60 overflow-y-auto rounded-xl bg-[#081026] p-4 font-mono text-[11px] text-[#CBD9FC] leading-relaxed border border-[#142B5B]">
              {latexContent}
            </pre>
            <div className="flex items-center justify-end gap-2.5 pt-2 border-t border-[#EAE2D2]">
              <button
                onClick={() => setShowExportModal(false)}
                className="px-4 py-2 rounded-lg border border-[#EAE2D2] text-xs font-['Poppins'] font-light text-[#475569] hover:bg-[#F9F6F0]"
              >
                Close
              </button>
              <button
                onClick={() => {
                  downloadFile(latexContent, 'IGEG_vs_RESRAG_500_Criterion_Monograph.tex', 'application/x-tex');
                  setShowExportModal(false);
                }}
                className="px-4 py-2 rounded-lg bg-[#0C1836] text-[#FDFBF7] text-xs font-cinzel hover:bg-[#1A3670] shadow-xs"
              >
                Download .tex File
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Global Academic Search & Quick Jump Palette Modal (Ctrl+K) */}
      {showSearchModal && (
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 backdrop-blur-xs p-4 pt-16 sm:pt-24 animate-in fade-in duration-150">
          <div className="w-full max-w-2xl rounded-2xl bg-[#FFFFFF] border border-[#EAE2D2] shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
            
            {/* Search Input Bar */}
            <div className="flex items-center gap-3 border-b border-[#EAE2D2] px-5 py-3.5 bg-[#FDFBF7]">
              <span className="text-[#64748B] text-base">🔍</span>
              <input
                type="text"
                autoFocus
                placeholder="Search across all 13 views, equations, 500 criteria, or physics topics... (Esc to close)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-sm font-['Poppins'] text-[#081026] placeholder-[#94A3B8] focus:outline-hidden"
              />
              <button
                onClick={() => setShowSearchModal(false)}
                className="text-[#94A3B8] hover:text-[#081026] text-xs font-mono px-2 py-1 rounded hover:bg-[#F4EFE6]"
              >
                ESC
              </button>
            </div>

            {/* Results List */}
            <div className="overflow-y-auto p-3 space-y-1.5 flex-1 divide-y divide-[#F4EFE6]">
              {filteredSearchResults.length === 0 ? (
                <div className="text-center py-10 text-xs text-[#64748B] font-['Poppins']">
                  No matching concepts, equations, or views found for "{searchQuery}".
                </div>
              ) : (
                filteredSearchResults.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.tab);
                      setShowSearchModal(false);
                      setSearchQuery('');
                    }}
                    className="w-full text-left p-3 rounded-xl hover:bg-[#FDFBF7] transition-colors flex items-start justify-between gap-4 group"
                  >
                    <div className="space-y-1 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-['Playfair_Display'] text-[#081026] group-hover:text-[#EA580C] transition-colors">
                          {item.title}
                        </span>
                        <span className="font-cinzel text-[9px] uppercase tracking-wider px-2 py-0.5 rounded bg-[#F4EFE6] text-[#475569]">
                          {item.category}
                        </span>
                      </div>
                      <p className="text-xs text-[#64748B] font-['Poppins'] font-light line-clamp-1">
                        {item.desc}
                      </p>
                    </div>
                    <span className="font-cinzel text-[10px] text-[#B45309] font-medium shrink-0 group-hover:translate-x-0.5 transition-transform">
                      Jump ↗
                    </span>
                  </button>
                ))
              )}
            </div>

            {/* Footer */}
            <div className="bg-[#FDFBF7] px-5 py-2.5 border-t border-[#EAE2D2] flex items-center justify-between text-[11px] text-[#64748B] font-['Poppins']">
              <span>Press <kbd className="font-mono bg-white px-1.5 py-0.5 rounded border border-[#EAE2D2]">↑</kbd> <kbd className="font-mono bg-white px-1.5 py-0.5 rounded border border-[#EAE2D2]">↓</kbd> to navigate, <kbd className="font-mono bg-white px-1.5 py-0.5 rounded border border-[#EAE2D2]">ESC</kbd> to close</span>
              <span className="font-mono text-[#15803D]">{filteredSearchResults.length} Results</span>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
