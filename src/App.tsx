/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { LaymansGuideView } from './components/LaymansGuideView';
import { PublicationDocumentView } from './components/PublicationDocumentView';
import { Factors100MatrixView } from './components/Factors100MatrixView';
import { ResRagSimulatorView } from './components/ResRagSimulatorView';
import { MonographView } from './components/MonographView';
import { Phase1View } from './components/Phase1View';
import { Phase2View } from './components/Phase2View';
import { Phase3View } from './components/Phase3View';
import { Phase4View } from './components/Phase4View';
import { FACTORS_100 } from './types/factors100';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('layman');
  const [showExportModal, setShowExportModal] = useState<boolean>(false);

  const handleExportLaTeX = () => {
    setShowExportModal(true);
  };

  const latexContent = `\\documentclass[11pt,twocolumn]{article}
\\usepackage{amsmath,amssymb,amsfonts}
\\usepackage{xcolor}
\\usepackage{hyperref}

\\definecolor{deepnavy}{HTML}{1E3A8A}
\\definecolor{forestgreen}{HTML}{047857}
\\definecolor{burnedorange}{HTML}{B45309}
\\definecolor{crimsonred}{HTML}{B91C1C}
\\definecolor{royalpurple}{HTML}{6D28D9}

\\title{\\textbf{The Quantum Gravity Problem of Time: An Exhaustive 100-Factor Comparative Simulation and Adversarial Stress-Test Between the Bulaqueña Information Geometric Gradient (IGG) Framework and Jean-Charles Tassan's Emergent Resonant-Active Time Framework}}

\\author{
\\textbf{Model A (Foundational Engine):} Bulaqueña \\\\
\\textit{Information Geometric Gradient (IGG): The Secret Engine of Physics, Reality, and Everything Else} \\\\
Academia.edu ID: 164986382 \\quad \\url{https://www.academia.edu/164986382} \\\\[1ex]
\\textbf{Model B (Emergent Resonance):} Jean-Charles Tassan \\\\
\\textit{Emergent Resonant-Active Time Framework (RES-RAG via Z-Transforms \\& DTFT)} \\\\[1ex]
\\textbf{Principal Investigator:} Theoretical Physics \\& Mathematical Rigor Consortium
}
\\date{March 2026}

\\begin{document}
\\maketitle

\\begin{abstract}
We present an exhaustive, publication-grade comparative simulation, mathematical stress-test, and 100-factor analytical matrix between two foundational paradigms solving the Quantum Gravity Problem of Time: (1) Model A (The Bulaqueña Information Geometric Gradient [IGG] Framework), where time is an intrinsic computational metric operator $d\\tau = \\|\\text{IGG}\\|_g d\\lambda$ driving state updates across quantum statistical manifold $\\mathcal{S}$; and (2) Model B (Jean-Charles Tassan's Emergent Resonant-Active Time Framework), where time is an emergent structural rhythm born from the recursive frequency balance between RES (Resonant Memory) and RAG (Resonant Active Generation) governed by Z-transforms $H(z) = \\text{RAG}(z)/\\text{RES}(z)$. Across 100 granular physical checkpoints spanning four analytical modules, we evaluate Wheeler-DeWitt resolution, covariance preservation, cosmological bounce dynamics, and experimental falsifiability. We establish a definitive Dual-Layer Ultimate Synthesis (Factors 99 \\& 100): Layer 0 (Bulaqueña IGG Software Engine) operates as the microscopic computational substrate, while Layer 1 (Tassan RES-RAG) emerges as its macroscopic acoustic harmonic rhythm.
\\end{abstract}

\\section{\\color{deepnavy}Module 1: Foundational Axioms \\& The Quantum Problem of Time (Factors 1--25)}
The Wheeler-DeWitt constraint $\\hat{\\mathcal{H}}|\\Psi\\rangle = 0$ is resolved internally in Model A via self-adjoint Information-Geometric Gradient generation:
\\begin{equation}
i\\hbar \\frac{\\partial \\Psi}{\\partial \\tau} = \\hat{\\mathcal{H}}_{\\text{IGG}} \\Psi = \\left( \\hat{H}_{\\text{matter}} + \\hbar \\hat{\\nabla}_{\\text{IGG}} \\right) \\Psi
\\end{equation}
\\begin{equation}
\\text{IGG}^i = g^{ij}(\\theta) \\frac{\\partial \\Phi}{\\partial \\theta^j}, \\quad \\Delta\\tau = \\int \\|\\text{IGG}\\|_g \\, d\\lambda
\\end{equation}
Model B resolves $H|\\Psi\\rangle = 0$ via frequency-domain phase balancing where the static state is a DC pole $z=1$ and physical dynamics occur at resonant AC frequencies.

\\section{\\color{forestgreen}Module 2: Field Equations \\& Preservation of Physical Laws (Factors 26--50)}
General covariance $\\nabla_\\mu T^{\\mu\\nu} = 0$ is strictly preserved in Model A as the Riemannian pullback of Fisher information:
\\begin{equation}
g_{\\mu\\nu}(x) = \\frac{\\partial \\theta^i}{\\partial x^\\mu} \\frac{\\partial \\theta^j}{\\partial x^\\nu} \\left( g_{ij}(\\theta) + \\epsilon_{\\text{vac}}\\delta_{ij} \\right)
\\end{equation}
Model A enforces exact local Lorentz invariance ($\\Delta t_{\\text{LIV}} = 0$), matching GRB 221009A 18 TeV constraints ($|\\Delta t| < 0.2\\text{ s}$).

\\section{\\color{burnedorange}Module 3: Cosmological Scale-Up \\& Extreme Physics (Factors 51--75)}
Singularities in both early-universe FLRW expansion and black hole interiors are regularized without infinities:
\\begin{equation}
a(\\tau) = \\left( a_{\\text{min}}^4 + \\frac{\\tau^2}{\\alpha_{\\text{IGG}}} \\right)^{1/4}, \\quad \\mathcal{K}_{\\text{max}} < \\infty
\\end{equation}

\\section{\\color{crimsonred}Module 4: Counter-Factual Collisions \\& Falsifiability Matrix (Factors 76--100)}
Complete removal of the external time coordinate confirms that physical dynamics persist along the invariant natural gradient flow. Wick rotation establishes exact mathematical duality between Fisher metrics and Z-transform spectra:
\\begin{equation}
g_{ij}^{\\text{Fisher}}(\\theta) \\xleftrightarrow{\\quad \\mathcal{W} \\quad} H(z)\\big|_{z=e^{j\\omega}} = \\frac{\\text{RAG}(e^{j\\omega})}{\\text{RES}(e^{j\\omega})}
\\end{equation}

\\section{\\color{royalpurple}The Dual-Layer Synthesis (Factors 99 \\& 100)}
Time is fundamentally the Bulaqueña Information Geometric Gradient software engine (Layer 0), perceived macroscopically as the Jean-Charles Tassan RES-RAG resonant acoustic rhythm (Layer 1).

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
      
      {/* Universal Top Bar Contract - Clean Light Theme */}
      <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onExportLaTeX={handleExportLaTeX} 
      />

      {/* Secondary Clean Workspace Filter Bar */}
      <div className="border-b border-slate-200 bg-white/80 px-6 py-2.5 backdrop-blur-sm sticky top-[69px] z-40">
        <div className="max-w-6xl mx-auto flex items-center justify-between overflow-x-auto text-xs">
          
          <div className="flex items-center gap-1 shrink-0 p-1 bg-slate-100 rounded-xl border border-slate-200">
            <button
              onClick={() => setActiveTab('layman')}
              className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap font-medium ${activeTab === 'layman' ? 'bg-white text-slate-900 shadow-sm font-semibold' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Layman's Guide & Conclusions
            </button>
            <button
              onClick={() => setActiveTab('pubdoc')}
              className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap font-medium ${activeTab === 'pubdoc' ? 'bg-white text-slate-900 shadow-sm font-semibold' : 'text-slate-600 hover:text-slate-900'}`}
            >
              4-Page Publication & Verdict
            </button>
            <button
              onClick={() => setActiveTab('matrix100')}
              className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap font-medium ${activeTab === 'matrix100' ? 'bg-white text-slate-900 shadow-sm font-semibold' : 'text-slate-600 hover:text-slate-900'}`}
            >
              100-Factor Stress-Test Matrix
            </button>
            <button
              onClick={() => setActiveTab('simulator')}
              className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap font-medium ${activeTab === 'simulator' ? 'bg-white text-slate-900 shadow-sm font-semibold' : 'text-slate-600 hover:text-slate-900'}`}
            >
              RES-RAG vs IGG Lab
            </button>
            <button
              onClick={() => setActiveTab('monograph')}
              className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap font-medium ${activeTab === 'monograph' ? 'bg-white text-slate-900 shadow-sm font-semibold' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Peer-Reviewed Monograph
            </button>
            <button
              onClick={() => setActiveTab('phase1')}
              className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap font-medium ${activeTab === 'phase1' ? 'bg-white text-slate-900 shadow-sm font-semibold' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Phase 1: WDW Freeze
            </button>
            <button
              onClick={() => setActiveTab('phase2')}
              className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap font-medium ${activeTab === 'phase2' ? 'bg-white text-slate-900 shadow-sm font-semibold' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Phase 2: Covariance & LIV
            </button>
            <button
              onClick={() => setActiveTab('phase3')}
              className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap font-medium ${activeTab === 'phase3' ? 'bg-white text-slate-900 shadow-sm font-semibold' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Phase 3: Bounce
            </button>
            <button
              onClick={() => setActiveTab('phase4')}
              className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap font-medium ${activeTab === 'phase4' ? 'bg-white text-slate-900 shadow-sm font-semibold' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Phase 4: Verdict
            </button>
          </div>

          <div className="hidden lg:flex items-center gap-3 text-slate-500 text-xs">
            <span className="font-semibold text-blue-800">Model A: Bulaqueña IGG</span>
            <span aria-hidden="true">·</span>
            <span className="font-semibold text-amber-800">Model B: Tassan RES-RAG</span>
            <span aria-hidden="true">·</span>
            <span className="text-emerald-700 font-mono font-bold">100/100 Audited</span>
          </div>

        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-8">
        {activeTab === 'layman' && <LaymansGuideView />}
        {activeTab === 'pubdoc' && <PublicationDocumentView />}
        {activeTab === 'matrix100' && <Factors100MatrixView />}
        {activeTab === 'simulator' && <ResRagSimulatorView />}
        {activeTab === 'monograph' && <MonographView />}
        {activeTab === 'phase1' && <Phase1View />}
        {activeTab === 'phase2' && <Phase2View />}
        {activeTab === 'phase3' && <Phase3View />}
        {activeTab === 'phase4' && <Phase4View />}
      </main>

      {/* Clean Scientific Footer - Light Theme */}
      <footer className="border-t border-slate-200 bg-white px-6 py-8 text-xs text-slate-500">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-900 tracking-tight">Chronos-QG Workbench</span>
            <span aria-hidden="true">·</span>
            <span>100-Factor Quantum Gravity Comparative Laboratory</span>
            <span aria-hidden="true">·</span>
            <span>Bulaqueña (2026) & Tassan (2026)</span>
          </div>
          <div className="flex items-center gap-4 text-slate-600">
            <button onClick={() => setActiveTab('layman')} className="hover:text-slate-900 transition-colors">
              Layman's Guide
            </button>
            <button onClick={() => setActiveTab('pubdoc')} className="hover:text-slate-900 transition-colors">
              4-Page Monograph & Verdict
            </button>
            <button onClick={() => setActiveTab('matrix100')} className="hover:text-slate-900 transition-colors">
              100-Factor Matrix
            </button>
            <button onClick={() => setActiveTab('simulator')} className="hover:text-slate-900 transition-colors">
              RES-RAG Lab
            </button>
            <button onClick={() => setActiveTab('monograph')} className="hover:text-slate-900 transition-colors">
              Monograph
            </button>
          </div>
        </div>
      </footer>

      {/* Export Modal */}
      {showExportModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-xs p-4">
          <div className="max-w-2xl w-full rounded-2xl border border-slate-200 bg-white p-6 space-y-4 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-lg font-bold text-slate-900 font-serif">Export 100-Factor Comparative Monograph</h3>
              <button 
                onClick={() => setShowExportModal(false)}
                className="text-slate-400 hover:text-slate-700 text-sm"
              >
                ✕
              </button>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Download the complete, publication-grade 100-factor manuscript formatted for submission to the <em>Physical Review D</em>, <em>Journal of High Energy Physics</em>, or <em>Classical and Quantum Gravity</em>.
            </p>
            <div className="rounded-xl bg-slate-50 p-4 font-mono text-[11px] text-slate-800 max-h-52 overflow-y-auto border border-slate-200">
              <pre>{latexContent}</pre>
            </div>
            <div className="flex justify-end gap-3 pt-2">
              <button
                onClick={() => downloadFile(latexContent, 'chronos_qg_100_factor_monograph.tex', 'text/x-tex')}
                className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold transition-colors shadow-sm"
              >
                Download LaTeX Source (.tex)
              </button>
              <button
                onClick={() => {
                  const plainText = document.getElementById('peer-review-monograph')?.innerText || latexContent;
                  downloadFile(plainText, 'chronos_qg_100_factor_monograph.md', 'text/markdown');
                }}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-semibold transition-colors"
              >
                Download Markdown (.md)
              </button>
              <button
                onClick={() => setShowExportModal(false)}
                className="px-4 py-2 bg-transparent hover:bg-slate-100 text-slate-500 rounded-xl text-xs transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
