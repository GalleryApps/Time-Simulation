/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
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

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('universesim');
  const [showExportModal, setShowExportModal] = useState<boolean>(false);

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
      />

      {/* Oxford Scholarly Masthead Secondary Nav */}
      <div className="border-b border-[#EAE2D2] bg-[#FDFBF7]/95 px-4 sm:px-6 py-2.5 backdrop-blur-md sticky top-[57px] z-40">
        <div className="max-w-6xl mx-auto flex items-center justify-between overflow-x-auto text-xs gap-3">
          
          <div className="flex items-center gap-1.5 shrink-0 p-1 bg-[#F4EFE6] rounded-xl border border-[#EAE2D2]">
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

    </div>
  );
}
