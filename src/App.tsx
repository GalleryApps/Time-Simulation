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
import { Factors100MatrixView } from './components/Factors100MatrixView';
import { LaymansGuideView } from './components/LaymansGuideView';
import { ResRagSimulatorView } from './components/ResRagSimulatorView';
import { PublicationDocumentView } from './components/PublicationDocumentView';
import { Phase1View } from './components/Phase1View';
import { Phase2View } from './components/Phase2View';
import { Phase3View } from './components/Phase3View';
import { Phase4View } from './components/Phase4View';
import { DualUniverseSimulationView } from './components/DualUniverseSimulationView';
import { Harmonization1500LabView } from './components/Harmonization1500LabView';

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
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-indigo-500/20 selection:text-indigo-900">
      
      {/* Universal Top Bar */}
      <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onExportLaTeX={handleExportLaTeX} 
      />

      {/* Secondary Clean Workspace Filter & Tab Bar */}
      <div className="border-b border-slate-200 bg-white/85 px-4 sm:px-6 py-2.5 backdrop-blur-md sticky top-[57px] z-40">
        <div className="max-w-6xl mx-auto flex items-center justify-between overflow-x-auto text-xs gap-3">
          
          <div className="flex items-center gap-1 shrink-0 p-1 bg-slate-100 rounded-xl border border-slate-200">
            <button
              onClick={() => setActiveTab('criteria500')}
              className={`px-3 py-1.5 rounded-lg transition-all whitespace-nowrap font-medium flex items-center gap-1.5 ${
                activeTab === 'criteria500' 
                  ? 'bg-white text-indigo-900 shadow-xs font-bold border border-slate-200/60' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>500-Criterion Matrix</span>
              <span className="px-1.5 py-0.2 rounded bg-indigo-100 text-indigo-800 text-[10px] font-mono font-bold">500</span>
            </button>
            <button
              onClick={() => setActiveTab('universesim')}
              className={`px-3 py-1.5 rounded-lg transition-all whitespace-nowrap font-medium flex items-center gap-1.5 ${
                activeTab === 'universesim' 
                  ? 'bg-white text-blue-900 shadow-xs font-bold border border-blue-200 ring-2 ring-blue-500/20' 
                  : 'text-blue-700 bg-blue-50/70 hover:bg-blue-100/70'
              }`}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              <span>Universe Sim: Model A vs B</span>
              <span className="px-1.5 py-0.2 rounded bg-blue-200 text-blue-900 text-[10px] font-mono font-bold">LIVE</span>
            </button>
            <button
              onClick={() => setActiveTab('harmonization')}
              className={`px-3 py-1.5 rounded-lg transition-all whitespace-nowrap font-medium flex items-center gap-1.5 ${
                activeTab === 'harmonization' 
                  ? 'bg-white text-emerald-900 shadow-xs font-bold border border-emerald-300 ring-2 ring-emerald-500/20' 
                  : 'text-emerald-700 bg-emerald-50/70 hover:bg-emerald-100/70'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-600 inline-block animate-pulse" />
              <span>1,500 Harmonization & 5 Studies</span>
              <span className="px-1.5 py-0.2 rounded bg-emerald-200 text-emerald-900 text-[10px] font-mono font-bold">1,500/1,500</span>
            </button>
            <button
              onClick={() => setActiveTab('redteam')}
              className={`px-3 py-1.5 rounded-lg transition-all whitespace-nowrap font-medium flex items-center gap-1.5 ${
                activeTab === 'redteam' 
                  ? 'bg-white text-rose-900 shadow-xs font-bold border border-slate-200/60' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>20 Red-Team Attacks</span>
              <span className="px-1.5 py-0.2 rounded bg-rose-100 text-rose-800 text-[10px] font-mono font-bold">20</span>
            </button>
            <button
              onClick={() => setActiveTab('counterfactual')}
              className={`px-3 py-1.5 rounded-lg transition-all whitespace-nowrap font-medium flex items-center gap-1.5 ${
                activeTab === 'counterfactual' 
                  ? 'bg-white text-emerald-900 shadow-xs font-bold border border-slate-200/60' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>14 Counterfactual Worlds</span>
              <span className="px-1.5 py-0.2 rounded bg-emerald-100 text-emerald-800 text-[10px] font-mono font-bold">14</span>
            </button>
            <button
              onClick={() => setActiveTab('igrt')}
              className={`px-3 py-1.5 rounded-lg transition-all whitespace-nowrap font-medium flex items-center gap-1.5 ${
                activeTab === 'igrt' 
                  ? 'bg-white text-purple-900 shadow-xs font-bold border border-slate-200/60' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>IGRT Synthesis & Lab</span>
              <span className="px-1.5 py-0.2 rounded bg-purple-100 text-purple-800 text-[10px] font-mono font-bold">2:1</span>
            </button>
            <button
              onClick={() => setActiveTab('robustness')}
              className={`px-3 py-1.5 rounded-lg transition-all whitespace-nowrap font-medium flex items-center gap-1.5 ${
                activeTab === 'robustness' 
                  ? 'bg-white text-slate-900 shadow-xs font-bold border border-slate-200/60' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>Robustness & Monte Carlo</span>
              <span className="px-1.5 py-0.2 rounded bg-slate-200 text-slate-800 text-[10px] font-mono">20k</span>
            </button>
            <button
              onClick={() => setActiveTab('journal')}
              className={`px-3 py-1.5 rounded-lg transition-all whitespace-nowrap font-medium ${
                activeTab === 'journal' 
                  ? 'bg-white text-slate-900 shadow-xs font-bold border border-slate-200/60' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Journal Manuscript
            </button>
            <button
              onClick={() => setActiveTab('matrix100')}
              className={`px-3 py-1.5 rounded-lg transition-all whitespace-nowrap font-medium ${
                activeTab === 'matrix100' 
                  ? 'bg-white text-slate-900 shadow-xs font-bold border border-slate-200/60' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              100-Factor Matrix
            </button>
            <button
              onClick={() => setActiveTab('layman')}
              className={`px-3 py-1.5 rounded-lg transition-all whitespace-nowrap font-medium ${
                activeTab === 'layman' 
                  ? 'bg-white text-slate-900 shadow-xs font-bold border border-slate-200/60' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Layman's Guide
            </button>
            <button
              onClick={() => setActiveTab('simulator')}
              className={`px-3 py-1.5 rounded-lg transition-all whitespace-nowrap font-medium ${
                activeTab === 'simulator' 
                  ? 'bg-white text-slate-900 shadow-xs font-bold border border-slate-200/60' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              RES-RAG Lab
            </button>
            <button
              onClick={() => setActiveTab('pubdoc')}
              className={`px-3 py-1.5 rounded-lg transition-all whitespace-nowrap font-medium ${
                activeTab === 'pubdoc' 
                  ? 'bg-white text-slate-900 shadow-xs font-bold border border-slate-200/60' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              4-Page Publication & Verdict
            </button>
            <button
              onClick={() => setActiveTab('phase1')}
              className={`px-2.5 py-1.5 rounded-lg transition-all whitespace-nowrap font-medium text-[11px] ${
                activeTab === 'phase1' 
                  ? 'bg-white text-slate-900 shadow-xs font-bold border border-slate-200/60' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Phase 1: WDW Freeze
            </button>
            <button
              onClick={() => setActiveTab('phase2')}
              className={`px-2.5 py-1.5 rounded-lg transition-all whitespace-nowrap font-medium text-[11px] ${
                activeTab === 'phase2' 
                  ? 'bg-white text-slate-900 shadow-xs font-bold border border-slate-200/60' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Phase 2: Covariance & LIV
            </button>
            <button
              onClick={() => setActiveTab('phase3')}
              className={`px-2.5 py-1.5 rounded-lg transition-all whitespace-nowrap font-medium text-[11px] ${
                activeTab === 'phase3' 
                  ? 'bg-white text-slate-900 shadow-xs font-bold border border-slate-200/60' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Phase 3: Bounce
            </button>
            <button
              onClick={() => setActiveTab('phase4')}
              className={`px-2.5 py-1.5 rounded-lg transition-all whitespace-nowrap font-medium text-[11px] ${
                activeTab === 'phase4' 
                  ? 'bg-white text-slate-900 shadow-xs font-bold border border-slate-200/60' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Phase 4: Empirical Verdict
            </button>
          </div>

          <div className="hidden xl:flex items-center gap-3 text-slate-500 text-xs shrink-0 font-mono">
            <span className="font-semibold text-blue-700">IGEG: 712 (47.5%)</span>
            <span aria-hidden="true">·</span>
            <span className="font-semibold text-amber-700">RES=RAG: 264 (17.6%)</span>
            <span aria-hidden="true">·</span>
            <span className="text-emerald-700 font-bold">500 / 500 Audited</span>
          </div>

        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-8">
        {activeTab === 'criteria500' && <Criteria500MatrixView />}
        {activeTab === 'universesim' && <DualUniverseSimulationView />}
        {activeTab === 'harmonization' && <Harmonization1500LabView />}
        {activeTab === 'redteam' && <RedTeamLabView />}
        {activeTab === 'counterfactual' && <CounterfactualWorldsView />}
        {activeTab === 'igrt' && <IgrtSynthesisLabView />}
        {activeTab === 'robustness' && <RobustnessLabView />}
        {activeTab === 'journal' && <JournalTreatiseView />}
        {activeTab === 'matrix100' && <Factors100MatrixView />}
        {activeTab === 'layman' && <LaymansGuideView />}
        {activeTab === 'simulator' && <ResRagSimulatorView />}
        {activeTab === 'pubdoc' && <PublicationDocumentView />}
        {activeTab === 'phase1' && <Phase1View />}
        {activeTab === 'phase2' && <Phase2View />}
        {activeTab === 'phase3' && <Phase3View />}
        {activeTab === 'phase4' && <Phase4View />}
      </main>

      {/* Scientific Footer */}
      <footer className="border-t border-slate-200 bg-white px-6 py-8 text-xs text-slate-500">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <div className="font-semibold text-slate-900">
              Chronos-QG: Adversarial Emergent Time Research Suite
            </div>
            <div className="text-slate-500">
              Marlon Bulaqueña (ORCID: 0009-0007-3966-0494) · Jean-Charles Tassan (ORCID: 0009-0000-8566-0486)
            </div>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <a
              href="/assets/aistudio/IGEG_vs_RES-RAG_500-Criterion_Journal_Manuscript_3fd82f8c.txt"
              download="IGEG_vs_RES-RAG_500-Criterion_Journal_Manuscript.txt"
              className="text-indigo-600 hover:underline font-mono"
            >
              Manuscript (.txt) ↗
            </a>
            <button
              onClick={handleExportLaTeX}
              className="text-slate-700 hover:text-slate-900 font-medium"
            >
              Export LaTeX
            </button>
          </div>
        </div>
      </footer>

      {/* Export LaTeX Modal */}
      {showExportModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4">
          <div className="w-full max-w-2xl rounded-2xl bg-white p-6 shadow-xl space-y-4 border border-slate-200">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-lg font-serif font-bold text-slate-900">
                Export Publication-Grade LaTeX Monograph
              </h3>
              <button
                onClick={() => setShowExportModal(false)}
                className="text-slate-400 hover:text-slate-600 text-sm font-mono"
              >
                ✕
              </button>
            </div>
            <p className="text-xs text-slate-600">
              Ready-to-compile LaTeX source code for the 500-criterion study, including all field equations, mathematical definitions, and the IGRT dual-layer synthesis.
            </p>
            <pre className="max-h-60 overflow-y-auto rounded-xl bg-slate-900 p-4 font-mono text-[11px] text-slate-100 leading-relaxed">
              {latexContent}
            </pre>
            <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-100">
              <button
                onClick={() => setShowExportModal(false)}
                className="px-4 py-2 rounded-xl border border-slate-200 text-xs font-medium text-slate-700 hover:bg-slate-50"
              >
                Close
              </button>
              <button
                onClick={() => {
                  downloadFile(latexContent, 'IGEG_vs_RESRAG_500_Criterion_Monograph.tex', 'application/x-tex');
                  setShowExportModal(false);
                }}
                className="px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 shadow-sm"
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
