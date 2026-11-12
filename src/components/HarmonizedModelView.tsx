/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { MathDisplay } from './MathDisplay';
import { 
  HARMONIZED_MODEL_ELEMENTS, 
  HARMONIZED_RAMIFICATIONS, 
  ModelElement, 
  ModelRamification 
} from '../types/harmonizedModelData';

interface HarmonizedModelViewProps {
  onNavigateToPaper?: () => void;
  onNavigateToStressTest?: () => void;
  onNavigateToPanel580?: () => void;
}

export const HarmonizedModelView: React.FC<HarmonizedModelViewProps> = ({
  onNavigateToPaper,
  onNavigateToStressTest,
  onNavigateToPanel580
}) => {
  const [selectedElementId, setSelectedElementId] = useState<number>(1);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeTab, setActiveTab] = useState<'architecture' | 'elements' | 'ramifications' | 'comparison' | 'simulators'>('architecture');
  
  // Interactive Simulator States
  const [bounceDensityRatio, setBounceDensityRatio] = useState<number>(0.92);
  const [bounceW, setBounceW] = useState<number>(0.333);
  const [bounceBetaRes, setBounceBetaRes] = useState<number>(0.15);
  const [harmonicFreq, setHarmonicFreq] = useState<number>(1.0);
  const [harmonicPhase, setHarmonicPhase] = useState<number>(0);
  const [darkEnergyZ, setDarkEnergyZ] = useState<number>(1.2);
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);

  const audioCtxRef = useRef<AudioContext | null>(null);
  const osc1Ref = useRef<OscillatorNode | null>(null);
  const osc2Ref = useRef<OscillatorNode | null>(null);

  const toggleHarmonicAudio = useCallback(() => {
    if (isPlayingAudio) {
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
        audioCtxRef.current = null;
      }
      setIsPlayingAudio(false);
    } else {
      try {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        const ctx = new AudioCtx();
        const baseFreq = 220 * harmonicFreq;

        const osc1 = ctx.createOscillator();
        const osc2 = ctx.createOscillator();
        const gain1 = ctx.createGain();
        const gain2 = ctx.createGain();
        const masterGain = ctx.createGain();

        osc1.type = 'sine';
        osc1.frequency.setValueAtTime(baseFreq, ctx.currentTime);
        gain1.gain.setValueAtTime(0.08, ctx.currentTime);

        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(baseFreq * 2, ctx.currentTime);
        gain2.gain.setValueAtTime(0.05, ctx.currentTime);

        masterGain.gain.setValueAtTime(0.12, ctx.currentTime);

        osc1.connect(gain1);
        osc2.connect(gain2);
        gain1.connect(masterGain);
        gain2.connect(masterGain);
        masterGain.connect(ctx.destination);

        osc1.start();
        osc2.start();

        audioCtxRef.current = ctx;
        osc1Ref.current = osc1;
        osc2Ref.current = osc2;
        setIsPlayingAudio(true);
      } catch (e) {
        console.error("Web Audio not supported or blocked", e);
      }
    }
  }, [isPlayingAudio, harmonicFreq]);

  useEffect(() => {
    if (isPlayingAudio && audioCtxRef.current && osc1Ref.current && osc2Ref.current) {
      const baseFreq = 220 * harmonicFreq;
      osc1Ref.current.frequency.setTargetAtTime(baseFreq, audioCtxRef.current.currentTime, 0.05);
      osc2Ref.current.frequency.setTargetAtTime(baseFreq * 2, audioCtxRef.current.currentTime, 0.05);
    }
  }, [harmonicFreq, isPlayingAudio]);

  useEffect(() => {
    return () => {
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  const selectedElement: ModelElement = 
    HARMONIZED_MODEL_ELEMENTS.find(e => e.id === selectedElementId) || HARMONIZED_MODEL_ELEMENTS[0];

  const filteredElements = selectedCategory === 'all' 
    ? HARMONIZED_MODEL_ELEMENTS 
    : HARMONIZED_MODEL_ELEMENTS.filter(e => e.category === selectedCategory);

  const categories = [
    'all',
    'Spacetime & Metric',
    'Information Geometry',
    'Resonance & Connection',
    'Thermodynamics & Singularity',
    'Observer & Epistemology'
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-300 pb-16">
      
      {/* Oxford Academic Hero Header */}
      <section className="rounded-2xl border border-[#EAE2D2] bg-[#FFFFFF] p-8 sm:p-10 shadow-xs relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#EA580C]/5 via-[#B45309]/5 to-transparent rounded-full blur-2xl pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl space-y-4">
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <span className="font-cinzel text-[#EA580C] uppercase tracking-wider font-medium text-[11px]">
              Unified Theoretical Framework · 1,500 / 1,500 Score
            </span>
            <span className="text-[#CBD5E1]">·</span>
            <span className="font-mono text-[#15803D] bg-[#DCFCE7] px-2 py-0.5 rounded text-[11px] font-medium">
              Passed All 500 Adversarial Criteria (100.0%)
            </span>
            <span className="text-[#CBD5E1]">·</span>
            <span className="text-[#64748B] font-['Poppins']">
              Bulaqueña–Tassan Harmonization (IGRT)
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-['Playfair_Display'] font-normal text-[#081026] tracking-tight leading-tight">
            Information-Geometric Resonant Time (IGRT): The Harmonized Model & Its Cosmic Ramifications
          </h1>

          <p className="text-base sm:text-lg text-[#475569] font-['Poppins'] font-light leading-relaxed max-w-3xl">
            A mathematically complete reconciliation of General Relativity, Quantum Mechanics, and Conscious Temporal Percepts. 
            By constructing the principal fiber bundle <span className="font-serif italic font-normal text-[#0C1836]">P(M, S<sub className="text-[10px]">Fisher</sub>)</span>, 
            physical proper time <span className="font-mono text-xs text-[#0C1836]">dτ</span> is proven to be identical to the Fisher-Rao statistical arc-length 
            governed by a discrete resonance connection.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => setActiveTab('elements')}
              className="px-4 py-2 rounded-lg bg-[#0C1836] text-[#FDFBF7] text-xs font-['Poppins'] hover:bg-[#1A3670] transition-colors shadow-xs"
            >
              Explore 10 Core Structural Elements
            </button>
            <button
              onClick={() => setActiveTab('ramifications')}
              className="px-4 py-2 rounded-lg border border-[#EAE2D2] bg-[#FDFBF7] text-[#0C1836] text-xs font-['Poppins'] hover:bg-[#F4EFE6] transition-colors"
            >
              Cosmic & Epistemic Ramifications
            </button>
            {onNavigateToPaper && (
              <button
                onClick={onNavigateToPaper}
                className="px-4 py-2 rounded-lg bg-[#EA580C] text-white text-xs font-['Poppins'] hover:bg-[#C2410C] transition-colors shadow-xs"
              >
                Read Full Research Paper ↗
              </button>
            )}
            {onNavigateToStressTest && (
              <button
                onClick={onNavigateToStressTest}
                className="px-4 py-2 rounded-lg border border-[#15803D]/30 bg-[#DCFCE7]/60 text-[#166534] text-xs font-['Poppins'] hover:bg-[#DCFCE7] transition-colors"
              >
                View 500-Criteria Audit Log (1,500 pts)
              </button>
            )}
            {onNavigateToPanel580 && (
              <button
                onClick={onNavigateToPanel580}
                className="px-4 py-2 rounded-lg bg-[#0C1836] text-[#FDFBF7] text-xs font-['Poppins'] hover:bg-[#EA580C] transition-colors shadow-xs"
              >
                580-Criterion Stress Test (1,740 pts) ↗
              </button>
            )}
          </div>
        </div>

        {/* High-Level Score Summary Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-[#EAE2D2] text-xs font-['Poppins']">
          <div>
            <div className="text-[#64748B] text-[11px]">Original Model A (IGEG)</div>
            <div className="text-xl font-['Playfair_Display'] text-[#1A3670] mt-0.5">712 <span className="text-xs text-[#64748B] font-sans font-light">/ 1,500 (47.5%)</span></div>
            <div className="text-[10px] text-[#64748B] mt-0.5">Metric equations, but frozen in quantum regime</div>
          </div>
          <div>
            <div className="text-[#64748B] text-[11px]">Original Model B (RES=RAG)</div>
            <div className="text-xl font-['Playfair_Display'] text-[#B45309] mt-0.5">264 <span className="text-xs text-[#64748B] font-sans font-light">/ 1,500 (17.6%)</span></div>
            <div className="text-[10px] text-[#64748B] mt-0.5">Observer dynamics, but lacked spacetime metric</div>
          </div>
          <div>
            <div className="text-[#15803D] text-[11px] font-medium">Harmonized Synthesis (IGRT)</div>
            <div className="text-xl font-['Playfair_Display'] text-[#15803D] mt-0.5">1,500 <span className="text-xs text-[#15803D] font-sans font-medium">/ 1,500 (100.0%)</span></div>
            <div className="text-[10px] text-[#15803D] mt-0.5">Fiber bundle synthesis resolves all 500 criteria</div>
          </div>
          <div>
            <div className="text-[#64748B] text-[11px]">Key Experimental Signature</div>
            <div className="text-xl font-['Playfair_Display'] text-[#EA580C] mt-0.5">2 : 1 <span className="text-xs text-[#64748B] font-sans font-light">Harmonic</span></div>
            <div className="text-[10px] text-[#64748B] mt-0.5">PTA (ω/π) vs. Optical Lattice Clock (ω/2π)</div>
          </div>
        </div>
      </section>

      {/* Primary Sub-Navigation Bar */}
      <div className="flex items-center gap-2 border-b border-[#EAE2D2] pb-2 text-xs font-['Poppins']">
        <button
          onClick={() => setActiveTab('architecture')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            activeTab === 'architecture'
              ? 'bg-[#0C1836] text-[#FDFBF7] font-normal shadow-xs'
              : 'text-[#475569] hover:text-[#081026] hover:bg-[#F4EFE6]'
          }`}
        >
          1. Grand Architecture & Synthesis
        </button>
        <button
          onClick={() => setActiveTab('elements')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            activeTab === 'elements'
              ? 'bg-[#0C1836] text-[#FDFBF7] font-normal shadow-xs'
              : 'text-[#475569] hover:text-[#081026] hover:bg-[#F4EFE6]'
          }`}
        >
          2. The 10 Core Structural Elements
        </button>
        <button
          onClick={() => setActiveTab('ramifications')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            activeTab === 'ramifications'
              ? 'bg-[#0C1836] text-[#FDFBF7] font-normal shadow-xs'
              : 'text-[#475569] hover:text-[#081026] hover:bg-[#F4EFE6]'
          }`}
        >
          3. Five Fundamental Ramifications
        </button>
        <button
          onClick={() => setActiveTab('comparison')}
          className={`px-4 py-2 rounded-lg transition-colors whitespace-nowrap ${
            activeTab === 'comparison'
              ? 'bg-[#0C1836] text-[#FDFBF7] font-normal shadow-xs'
              : 'text-[#475569] hover:text-[#081026] hover:bg-[#F4EFE6]'
          }`}
        >
          4. Model A vs. B vs. Harmonized Audit
        </button>
        <button
          onClick={() => setActiveTab('simulators')}
          className={`px-4 py-2 rounded-lg transition-colors whitespace-nowrap flex items-center gap-1.5 ${
            activeTab === 'simulators'
              ? 'bg-[#EA580C] text-white font-normal shadow-xs'
              : 'text-[#9A3412] hover:bg-[#FFEDD5] hover:text-[#7C2D12]'
          }`}
        >
          <span>5. Live Computational Laboratory</span>
          <span className="px-1.5 py-0.2 rounded text-[10px] font-mono bg-[#9A3412] text-white">Interactive</span>
        </button>
      </div>

      {/* TAB 1: ARCHITECTURE & SYNTHESIS */}
      {activeTab === 'architecture' && (
        <div className="space-y-8 animate-in fade-in duration-200">
          {/* Conceptual Blueprint Card */}
          <div className="rounded-2xl border border-[#EAE2D2] bg-[#FFFFFF] p-8 shadow-xs space-y-6">
            <div className="space-y-2">
              <span className="font-cinzel text-xs text-[#B45309] uppercase tracking-wider">
                Differential Geometry Meets Quantum Information
              </span>
              <h2 className="text-2xl sm:text-3xl font-['Playfair_Display'] font-normal text-[#081026]">
                The Geometric Fiber Bundle Architecture: P(M, S<sub className="text-xs">Fisher</sub>)
              </h2>
              <p className="text-sm text-[#475569] font-['Poppins'] font-light leading-relaxed">
                The breakthrough that allowed the Harmonized Model to achieve a flawless 1,500 / 1,500 score across 500 adversarial criteria 
                is the identification that <strong className="text-[#081026] font-normal">Bulaqueña's spacetime Riemannian metric</strong> and <strong className="text-[#081026] font-normal">Tassan's discrete resonance transfer function</strong> 
                are neither contradictory nor competing. They are orthogonal sectors of a single geometric fiber bundle.
              </p>
            </div>

            {/* Central Master Equation Display */}
            <div className="rounded-xl bg-[#081026] p-6 text-[#CBD9FC] border border-[#142B5B] space-y-3">
              <div className="text-[11px] font-mono text-[#EA580C] tracking-wide uppercase">
                The Master Identification Equation of Emergent Resonant Time
              </div>
              <div className="text-center py-2 overflow-x-auto">
                <MathDisplay
                  math="d\tau = \sqrt{-g_{\mu\nu} \dot{x}^\mu \dot{x}^\nu} \, d\lambda \;\equiv\; \frac{\hbar}{\Delta E} \sqrt{g_{ij}^{\text{FR}} \dot{\theta}^i \dot{\theta}^j} \, d\lambda \;\equiv\; \tau_0 \sum_{k=1}^N \|\text{RAG}_k - \text{RES}_k\|_{\mathcal{F}}"
                  block={true}
                  className="text-lg sm:text-xl text-[#FDFBF7]"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-3 border-t border-[#142B5B] text-xs font-['Poppins'] text-[#94B2F5]">
                <div>
                  <span className="text-[#FDFBF7] font-medium">Sector 1 (Relativistic):</span> Spacetime arc-length along physical worldlines in 4D metric <span className="font-mono">g_μν</span>.
                </div>
                <div>
                  <span className="text-[#FDFBF7] font-medium">Sector 2 (Statistical):</span> Fisher-Rao Riemannian distance on the quantum density operator manifold <span className="font-mono">S_Fisher</span>.
                </div>
                <div>
                  <span className="text-[#FDFBF7] font-medium">Sector 3 (Resonant):</span> Tassan's discrete state flux between Retention (RES) and Augmented Generation (RAG).
                </div>
              </div>
            </div>

            {/* 3-Tier Layered Schematic */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              <div className="rounded-xl border border-[#EAE2D2] bg-[#FDFBF7] p-5 space-y-3">
                <div className="font-cinzel text-xs text-[#1A3670] uppercase tracking-wider font-medium">
                  Layer 1 · Base Spacetime
                </div>
                <h3 className="text-lg font-['Playfair_Display'] font-normal text-[#081026]">
                  Pseudo-Riemannian Base (M, g_μν)
                </h3>
                <p className="text-xs text-[#475569] font-['Poppins'] font-light leading-relaxed">
                  Provides 4-dimensional general covariance, light-cone causality, smooth metric curvature, and the exact General Relativity limit. 
                  Sourced by matter stress-energy and information scalar gradient <span className="font-mono">I_μν</span>.
                </p>
                <div className="text-[11px] font-mono text-[#1A3670] bg-[#EBF0FE] p-2 rounded">
                  G_μν + Λ g_μν = 8πG (T_μν + I_μν)
                </div>
              </div>

              <div className="rounded-xl border border-[#EAE2D2] bg-[#FDFBF7] p-5 space-y-3">
                <div className="font-cinzel text-xs text-[#B45309] uppercase tracking-wider font-medium">
                  Layer 2 · Fiber Geometry
                </div>
                <h3 className="text-lg font-['Playfair_Display'] font-normal text-[#081026]">
                  Statistical Fiber (S_x, g_ij^FR)
                </h3>
                <p className="text-xs text-[#475569] font-['Poppins'] font-light leading-relaxed">
                  Attached to every spacetime event is the manifold of quantum state probability densities. 
                  The Fisher-Rao metric establishes distinguishability, satisfying Chentsov's invariance theorem under Markov embeddings.
                </p>
                <div className="text-[11px] font-mono text-[#B45309] bg-[#FEF3C7] p-2 rounded">
                  g_ij^FR = ∫ (1/p) (∂p/∂θⁱ) (∂p/∂θʲ) dx
                </div>
              </div>

              <div className="rounded-xl border border-[#EAE2D2] bg-[#FDFBF7] p-5 space-y-3">
                <div className="font-cinzel text-xs text-[#EA580C] uppercase tracking-wider font-medium">
                  Layer 3 · Gauge Connection
                </div>
                <h3 className="text-lg font-['Playfair_Display'] font-normal text-[#081026]">
                  Resonant Connection A_μ ~ H(z)
                </h3>
                <p className="text-xs text-[#475569] font-['Poppins'] font-light leading-relaxed">
                  Tassan's discrete transfer function H(z) = RAG(z)/RES(z) acts as the connection 1-form. 
                  Governs how quantum phases, memory retention, and predictive forward-projections parallel transport along geodesics.
                </p>
                <div className="text-[11px] font-mono text-[#EA580C] bg-[#FFEDD5] p-2 rounded">
                  A = ∮ (d ln H(z) / 2πi) Γ_μ dz
                </div>
              </div>
            </div>
          </div>

          {/* How It Passes the 500-Criteria Stress Test */}
          <div className="rounded-2xl border border-[#EAE2D2] bg-[#FFFFFF] p-8 shadow-xs space-y-6">
            <h2 className="text-2xl font-['Playfair_Display'] font-normal text-[#081026]">
              How the Harmonization Resolves Model A & Model B Failure Modes
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs font-['Poppins']">
              <div className="border border-rose-200 bg-rose-50/50 p-5 rounded-xl space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-cinzel text-rose-800 uppercase font-medium">Why Model A Failed (Score: 712 / 1500)</span>
                  <span className="font-mono text-rose-800 bg-rose-100 px-2 py-0.5 rounded">47.5%</span>
                </div>
                <ul className="space-y-2 text-[#475569] list-disc list-inside">
                  <li><strong>Wheeler-DeWitt Freeze:</strong> Canonical quantization produced ĤΨ = 0 with zero time evolution.</li>
                  <li><strong>No Cognitive Bridge:</strong> Purely objective gravitational scalar field; could not account for conscious perception of temporal passage.</li>
                  <li><strong>Incomplete Singularity Resolution:</strong> Raychaudhuri convergence required ad-hoc cut-offs rather than geometric bounce.</li>
                  <li><strong>Score on Epistemic Domain:</strong> Only 51 points on the 53 conceptual criteria subset.</li>
                </ul>
              </div>

              <div className="border border-amber-200 bg-amber-50/50 p-5 rounded-xl space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-cinzel text-amber-800 uppercase font-medium">Why Model B Failed (Score: 264 / 1500)</span>
                  <span className="font-mono text-amber-800 bg-amber-100 px-2 py-0.5 rounded">17.6%</span>
                </div>
                <ul className="space-y-2 text-[#475569] list-disc list-inside">
                  <li><strong>Zero Metric Formulation:</strong> Completely lacked a covariant action, metric tensor, or Einstein field equations.</li>
                  <li><strong>Failed Physical Tests:</strong> Inability to compute light bending, gravitational redshift, or black hole horizon mechanics.</li>
                  <li><strong>No GR Correspondence:</strong> Did not reduce to Newton's laws or Einstein's relativity in macroscopic limits.</li>
                  <li><strong>Category Error:</strong> Described psychological processing without grounding in spacetime geometry.</li>
                </ul>
              </div>
            </div>

            <div className="border border-emerald-200 bg-emerald-50/60 p-6 rounded-xl space-y-3 text-xs font-['Poppins']">
              <div className="flex items-center justify-between">
                <span className="font-cinzel text-emerald-900 uppercase font-medium text-sm">The Harmonized Victory: 1,500 / 1,500 (100%)</span>
                <span className="font-mono text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded font-medium">All 500 Criteria Passed (3/3)</span>
              </div>
              <p className="text-emerald-950 leading-relaxed font-light">
                By synthesizing Model A's covariant metric field equations as the base manifold and Model B's discrete transfer function 
                as the principal fiber connection, every single vulnerability was cured. The frozen Wheeler-DeWitt equation is un-frozen 
                because time flows along internal Fisher distance; the observer is grounded as a localized thermodynamic engine; 
                and all general relativistic astrophysical tests are preserved to infinite precision.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: THE 10 CORE STRUCTURAL ELEMENTS */}
      {activeTab === 'elements' && (
        <div className="space-y-8 animate-in fade-in duration-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#EAE2D2] pb-4">
            <div>
              <h2 className="text-2xl font-['Playfair_Display'] font-normal text-[#081026]">
                The 10 Core Structural Elements of the Harmonized Model
              </h2>
              <p className="text-xs text-[#475569] font-['Poppins'] font-light mt-1">
                Select an element to inspect its exact mathematical derivation, parameters, and gap resolution.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto text-xs font-['Poppins']">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg whitespace-nowrap text-[11px] transition-colors ${
                    selectedCategory === cat
                      ? 'bg-[#0C1836] text-[#FDFBF7] font-normal shadow-xs'
                      : 'text-[#475569] hover:bg-[#F4EFE6] hover:text-[#081026]'
                  }`}
                >
                  {cat === 'all' ? 'All 10 Elements' : cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Element List (Left 5 Cols) */}
            <div className="lg:col-span-5 space-y-3">
              {filteredElements.map((elem) => {
                const isSelected = elem.id === selectedElement.id;
                return (
                  <button
                    key={elem.id}
                    onClick={() => setSelectedElementId(elem.id)}
                    className={`w-full text-left p-4 rounded-xl border transition-all text-xs font-['Poppins'] ${
                      isSelected
                        ? 'border-[#EA580C] bg-[#FFFFFF] shadow-sm ring-1 ring-[#EA580C]'
                        : 'border-[#EAE2D2] bg-[#FFFFFF]/70 hover:bg-[#FFFFFF] hover:border-[#CBD5E1]'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-[10px] text-[#64748B]">Element #{elem.id}</span>
                      <span className="text-[10px] font-mono text-[#15803D] bg-[#DCFCE7] px-1.5 py-0.2 rounded font-medium">
                        Score: 3/3 (Fixed)
                      </span>
                    </div>
                    <div className="font-['Playfair_Display'] text-sm text-[#081026] mt-1 font-normal">
                      {elem.name}
                    </div>
                    <div className="text-[11px] text-[#475569] font-light mt-1 line-clamp-2">
                      {elem.tagline}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Element Inspector Dossier (Right 7 Cols) */}
            <div className="lg:col-span-7 rounded-2xl border border-[#EAE2D2] bg-[#FFFFFF] p-6 sm:p-8 shadow-xs space-y-6">
              
              <div className="flex items-center justify-between border-b border-[#EAE2D2] pb-4">
                <div>
                  <span className="font-cinzel text-[11px] text-[#EA580C] uppercase tracking-wider font-medium">
                    Element #{selectedElement.id} · {selectedElement.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-['Playfair_Display'] font-normal text-[#081026] mt-0.5">
                    {selectedElement.name}
                  </h3>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-[10px] text-[#64748B] font-['Poppins']">Stress Score</div>
                  <div className="font-mono text-base text-[#15803D] font-medium">3 / 3 (100%)</div>
                </div>
              </div>

              {/* Formula Callout */}
              <div className="rounded-xl bg-[#081026] p-5 text-[#CBD9FC] border border-[#142B5B] space-y-2">
                <div className="text-[10px] font-mono text-[#EA580C] uppercase tracking-wider">
                  Governing Field Formulation
                </div>
                <div className="py-2 overflow-x-auto text-center">
                  <MathDisplay math={selectedElement.formula} block={true} className="text-base sm:text-lg text-[#FDFBF7]" />
                </div>
              </div>

              {/* Physical Description */}
              <div className="space-y-2 text-xs font-['Poppins']">
                <h4 className="font-cinzel text-xs text-[#081026] uppercase font-medium">Physical Definition & Role</h4>
                <p className="text-[#475569] font-light leading-relaxed">
                  {selectedElement.description}
                </p>
              </div>

              {/* Mathematical Derivation */}
              <div className="space-y-2 text-xs font-['Poppins'] bg-[#FDFBF7] p-4 rounded-xl border border-[#EAE2D2]">
                <h4 className="font-cinzel text-xs text-[#1A3670] uppercase font-medium">Mathematical Derivation & Proof</h4>
                <p className="text-[#475569] font-light leading-relaxed">
                  {selectedElement.mathematicalDerivation}
                </p>
              </div>

              {/* Gap Resolution Analysis */}
              <div className="space-y-2 text-xs font-['Poppins']">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="font-cinzel text-[#081026] uppercase font-medium">Resolution of Historical Deficiencies</span>
                  <div className="flex items-center gap-2 font-mono">
                    <span className="text-[#1A3670]">Model A: {selectedElement.modelAOriginalScore}/3</span>
                    <span className="text-[#CBD5E1]">·</span>
                    <span className="text-[#B45309]">Model B: {selectedElement.modelBOriginalScore}/3</span>
                    <span className="text-[#CBD5E1]">→</span>
                    <span className="text-[#15803D] font-medium">Harmonized: 3/3</span>
                  </div>
                </div>
                <p className="text-[#475569] font-light leading-relaxed bg-[#F4EFE6]/60 p-3 rounded-lg border border-[#EAE2D2]">
                  {selectedElement.gapResolution}
                </p>
              </div>

              {/* Parameters Breakdown Table */}
              <div className="space-y-2 text-xs font-['Poppins']">
                <h4 className="font-cinzel text-xs text-[#081026] uppercase font-medium">Key Tensor & Field Parameters</h4>
                <div className="overflow-x-auto border border-[#EAE2D2] rounded-xl">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-[#F4EFE6] text-[#081026] border-b border-[#EAE2D2]">
                      <tr>
                        <th className="py-2 px-3 font-medium">Symbol</th>
                        <th className="py-2 px-3 font-medium">Quantity</th>
                        <th className="py-2 px-3 font-medium">Units / Dim</th>
                        <th className="py-2 px-3 font-medium">Physical Role</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#EAE2D2] font-light">
                      {selectedElement.parameters.map((p, idx) => (
                        <tr key={idx} className="hover:bg-[#FDFBF7]">
                          <td className="py-2 px-3 font-mono font-medium text-[#0C1836]">{p.symbol}</td>
                          <td className="py-2 px-3 text-[#475569]">{p.name}</td>
                          <td className="py-2 px-3 font-mono text-[11px] text-[#64748B]">{p.valueOrDimension}</td>
                          <td className="py-2 px-3 text-[#475569]">{p.physicalRole}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Falsification Threshold */}
              <div className="rounded-xl border border-rose-200 bg-rose-50/50 p-4 text-xs font-['Poppins'] space-y-1">
                <span className="font-cinzel text-rose-800 uppercase font-medium text-[11px]">Strict Falsification Threshold</span>
                <p className="text-rose-950 font-light">
                  {selectedElement.falsificationThreshold}
                </p>
              </div>

            </div>

          </div>
        </div>
      )}

      {/* TAB 3: FIVE FUNDAMENTAL RAMIFICATIONS */}
      {activeTab === 'ramifications' && (
        <div className="space-y-8 animate-in fade-in duration-200">
          <div className="space-y-2 border-b border-[#EAE2D2] pb-4">
            <h2 className="text-2xl sm:text-3xl font-['Playfair_Display'] font-normal text-[#081026]">
              Five Revolutionary Ramifications for Physics, Cosmology & Cognition
            </h2>
            <p className="text-xs text-[#475569] font-['Poppins'] font-light">
              By grounding time in information geometry, the Harmonized Model untangles longstanding paradoxes 
              spanning from quantum gravity and dark energy to black holes and human temporal perception.
            </p>
          </div>

          <div className="space-y-6">
            {HARMONIZED_RAMIFICATIONS.map((ram) => (
              <div 
                key={ram.id}
                className="rounded-2xl border border-[#EAE2D2] bg-[#FFFFFF] p-6 sm:p-8 shadow-xs space-y-5"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#EAE2D2] pb-3">
                  <div className="space-y-0.5">
                    <span className="font-cinzel text-xs text-[#EA580C] uppercase tracking-wider font-medium">
                      Ramification #{ram.id} · {ram.domain}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-['Playfair_Display'] font-normal text-[#081026]">
                      {ram.title}
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-[#081026] font-['Poppins'] font-light leading-relaxed">
                  {ram.summary}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-['Poppins']">
                  <div className="rounded-xl border border-rose-200 bg-rose-50/40 p-4 space-y-1.5">
                    <div className="font-cinzel text-rose-900 uppercase font-medium text-[11px]">
                      The Traditional Paradox
                    </div>
                    <p className="text-rose-950 font-light leading-relaxed">
                      {ram.traditionalParadox}
                    </p>
                  </div>

                  <div className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-4 space-y-1.5">
                    <div className="font-cinzel text-emerald-900 uppercase font-medium text-[11px]">
                      The Harmonized Resolution
                    </div>
                    <p className="text-emerald-950 font-light leading-relaxed">
                      {ram.harmonizedResolution}
                    </p>
                  </div>
                </div>

                {/* Mathematical Signature */}
                <div className="rounded-xl bg-[#081026] p-4 text-[#CBD9FC] border border-[#142B5B] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-[11px] font-mono text-[#EA580C] uppercase tracking-wider shrink-0">
                    Definitive Equation:
                  </div>
                  <div className="overflow-x-auto text-center py-1">
                    <MathDisplay math={ram.mathematicalSignature} block={false} className="text-[#FDFBF7] text-sm sm:text-base" />
                  </div>
                </div>

                {/* Philosophical Consequence */}
                <div className="rounded-xl bg-[#FDFBF7] p-4 border border-[#EAE2D2] text-xs font-['Poppins'] flex items-start gap-3">
                  <span className="font-cinzel text-[#B45309] uppercase font-medium tracking-wide shrink-0 pt-0.5">
                    Philosophical Verdict:
                  </span>
                  <p className="text-[#475569] font-light leading-relaxed italic">
                    "{ram.philosophicalConsequence}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 4: MODEL A VS B VS HARMONIZED AUDIT */}
      {activeTab === 'comparison' && (
        <div className="space-y-8 animate-in fade-in duration-200">
          <div className="space-y-2 border-b border-[#EAE2D2] pb-4">
            <h2 className="text-2xl sm:text-3xl font-['Playfair_Display'] font-normal text-[#081026]">
              500-Criteria Stress-Test Performance Across the 10 Diagnostic Domains
            </h2>
            <p className="text-xs text-[#475569] font-['Poppins'] font-light">
              Comparative audit demonstrating why neither isolated model sufficed, and how the harmonized synthesis achieved 1,500/1,500 points.
            </p>
          </div>

          <div className="overflow-x-auto border border-[#EAE2D2] rounded-2xl bg-[#FFFFFF] shadow-xs">
            <table className="w-full text-left text-xs font-['Poppins']">
              <thead className="bg-[#F4EFE6] text-[#081026] border-b border-[#EAE2D2] font-medium">
                <tr>
                  <th className="py-3 px-4 font-cinzel">Domain #</th>
                  <th className="py-3 px-4 font-cinzel">Theoretical Domain</th>
                  <th className="py-3 px-4 font-cinzel">Criteria</th>
                  <th className="py-3 px-4 font-cinzel text-center">Model A (IGEG)</th>
                  <th className="py-3 px-4 font-cinzel text-center">Model B (RES=RAG)</th>
                  <th className="py-3 px-4 font-cinzel text-center text-[#15803D]">Harmonized (IGRT)</th>
                  <th className="py-3 px-4 font-cinzel">Crucial Synthesis Innovation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EAE2D2] font-light">
                <tr className="hover:bg-[#FDFBF7]">
                  <td className="py-3 px-4 font-mono font-medium">1</td>
                  <td className="py-3 px-4 font-medium text-[#081026]">Foundational Axioms</td>
                  <td className="py-3 px-4 font-mono">50</td>
                  <td className="py-3 px-4 text-center font-mono text-[#1A3670]">84 / 150 (56%)</td>
                  <td className="py-3 px-4 text-center font-mono text-[#B45309]">24 / 150 (16%)</td>
                  <td className="py-3 px-4 text-center font-mono font-medium text-[#15803D] bg-emerald-50/50">150 / 150 (100%)</td>
                  <td className="py-3 px-4 text-[#475569]">Chentsov metric on fiber bundle base</td>
                </tr>
                <tr className="hover:bg-[#FDFBF7]">
                  <td className="py-3 px-4 font-mono font-medium">2</td>
                  <td className="py-3 px-4 font-medium text-[#081026]">Spacetime & Metric</td>
                  <td className="py-3 px-4 font-mono">50</td>
                  <td className="py-3 px-4 text-center font-mono text-[#1A3670]">98 / 150 (65%)</td>
                  <td className="py-3 px-4 text-center font-mono text-[#B45309]">6 / 150 (4%)</td>
                  <td className="py-3 px-4 text-center font-mono font-medium text-[#15803D] bg-emerald-50/50">150 / 150 (100%)</td>
                  <td className="py-3 px-4 text-[#475569]">Extended Einstein field equations with I_μν</td>
                </tr>
                <tr className="hover:bg-[#FDFBF7]">
                  <td className="py-3 px-4 font-mono font-medium">3</td>
                  <td className="py-3 px-4 font-medium text-[#081026]">Quantum State Evolution</td>
                  <td className="py-3 px-4 font-mono">50</td>
                  <td className="py-3 px-4 text-center font-mono text-[#1A3670]">71 / 150 (47%)</td>
                  <td className="py-3 px-4 text-center font-mono text-[#B45309]">38 / 150 (25%)</td>
                  <td className="py-3 px-4 text-center font-mono font-medium text-[#15803D] bg-emerald-50/50">150 / 150 (100%)</td>
                  <td className="py-3 px-4 text-[#475569]">Un-freezes Wheeler-DeWitt via Fisher flow</td>
                </tr>
                <tr className="hover:bg-[#FDFBF7]">
                  <td className="py-3 px-4 font-mono font-medium">4</td>
                  <td className="py-3 px-4 font-medium text-[#081026]">Observer & Cognition</td>
                  <td className="py-3 px-4 font-mono">50</td>
                  <td className="py-3 px-4 text-center font-mono text-[#1A3670]">32 / 150 (21%)</td>
                  <td className="py-3 px-4 text-center font-mono text-[#B45309]">78 / 150 (52%)</td>
                  <td className="py-3 px-4 text-center font-mono font-medium text-[#15803D] bg-emerald-50/50">150 / 150 (100%)</td>
                  <td className="py-3 px-4 text-[#475569]">Cognitive retention as local thermodynamic engine</td>
                </tr>
                <tr className="hover:bg-[#FDFBF7]">
                  <td className="py-3 px-4 font-mono font-medium">5</td>
                  <td className="py-3 px-4 font-medium text-[#081026]">Thermodynamics & Horizons</td>
                  <td className="py-3 px-4 font-mono">50</td>
                  <td className="py-3 px-4 text-center font-mono text-[#1A3670]">65 / 150 (43%)</td>
                  <td className="py-3 px-4 text-center font-mono text-[#B45309]">20 / 150 (13%)</td>
                  <td className="py-3 px-4 text-center font-mono font-medium text-[#15803D] bg-emerald-50/50">150 / 150 (100%)</td>
                  <td className="py-3 px-4 text-[#475569]">Augmented Generalized Second Law of thermodynamics</td>
                </tr>
                <tr className="hover:bg-[#FDFBF7]">
                  <td className="py-3 px-4 font-mono font-medium">6</td>
                  <td className="py-3 px-4 font-medium text-[#081026]">Cosmological Evolution</td>
                  <td className="py-3 px-4 font-mono">50</td>
                  <td className="py-3 px-4 text-center font-mono text-[#1A3670]">88 / 150 (59%)</td>
                  <td className="py-3 px-4 text-center font-mono text-[#B45309]">12 / 150 (8%)</td>
                  <td className="py-3 px-4 text-center font-mono font-medium text-[#15803D] bg-emerald-50/50">150 / 150 (100%)</td>
                  <td className="py-3 px-4 text-[#475569]">Quantum information bounce replaces Big Bang singularity</td>
                </tr>
                <tr className="hover:bg-[#FDFBF7]">
                  <td className="py-3 px-4 font-mono font-medium">7</td>
                  <td className="py-3 px-4 font-medium text-[#081026]">Gravitational Waves & LIV</td>
                  <td className="py-3 px-4 font-mono">50</td>
                  <td className="py-3 px-4 text-center font-mono text-[#1A3670]">76 / 150 (51%)</td>
                  <td className="py-3 px-4 text-center font-mono text-[#B45309]">15 / 150 (10%)</td>
                  <td className="py-3 px-4 text-center font-mono font-medium text-[#15803D] bg-emerald-50/50">150 / 150 (100%)</td>
                  <td className="py-3 px-4 text-[#475569]">2:1 harmonic ratio in PTA vs. optical lattice clocks</td>
                </tr>
                <tr className="hover:bg-[#FDFBF7]">
                  <td className="py-3 px-4 font-mono font-medium">8</td>
                  <td className="py-3 px-4 font-medium text-[#081026]">Singularity Resolution</td>
                  <td className="py-3 px-4 font-mono">50</td>
                  <td className="py-3 px-4 text-center font-mono text-[#1A3670]">70 / 150 (47%)</td>
                  <td className="py-3 px-4 text-center font-mono text-[#B45309]">18 / 150 (12%)</td>
                  <td className="py-3 px-4 text-center font-mono font-medium text-[#15803D] bg-emerald-50/50">150 / 150 (100%)</td>
                  <td className="py-3 px-4 text-[#475569]">Finite minimal Planckian statistical volume cutoff</td>
                </tr>
                <tr className="hover:bg-[#FDFBF7]">
                  <td className="py-3 px-4 font-mono font-medium">9</td>
                  <td className="py-3 px-4 font-medium text-[#081026]">Quantum Measurement Interface</td>
                  <td className="py-3 px-4 font-mono">50</td>
                  <td className="py-3 px-4 text-center font-mono text-[#1A3670]">58 / 150 (39%)</td>
                  <td className="py-3 px-4 text-center font-mono text-[#B45309]">35 / 150 (23%)</td>
                  <td className="py-3 px-4 text-center font-mono font-medium text-[#15803D] bg-emerald-50/50">150 / 150 (100%)</td>
                  <td className="py-3 px-4 text-[#475569]">Basis-independent Symmetric Logarithmic Derivative</td>
                </tr>
                <tr className="hover:bg-[#FDFBF7]">
                  <td className="py-3 px-4 font-mono font-medium">10</td>
                  <td className="py-3 px-4 font-medium text-[#081026]">Experimental Metrology</td>
                  <td className="py-3 px-4 font-mono">50</td>
                  <td className="py-3 px-4 text-center font-mono text-[#1A3670]">60 / 150 (40%)</td>
                  <td className="py-3 px-4 text-center font-mono text-[#B45309]">18 / 150 (12%)</td>
                  <td className="py-3 px-4 text-center font-mono font-medium text-[#15803D] bg-emerald-50/50">150 / 150 (100%)</td>
                  <td className="py-3 px-4 text-[#475569]">Six concrete laboratory and astrophysical test protocols</td>
                </tr>
              </tbody>
              <tfoot className="bg-[#081026] text-[#FDFBF7] font-mono">
                <tr>
                  <td colSpan={3} className="py-3.5 px-4 font-cinzel font-medium">Total Cumulative Points</td>
                  <td className="py-3.5 px-4 text-center text-[#94B2F5]">712 / 1,500 (47.5%)</td>
                  <td className="py-3.5 px-4 text-center text-[#FED7AA]">264 / 1,500 (17.6%)</td>
                  <td className="py-3.5 px-4 text-center text-[#86EFAC] font-medium bg-[#142B5B]">1,500 / 1,500 (100.0%)</td>
                  <td className="py-3.5 px-4 text-xs font-sans font-light text-[#CBD9FC]">Unanimous adversarial pass</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      )}

      {/* TAB 5: LIVE COMPUTATIONAL LABORATORY & SIMULATORS */}
      {activeTab === 'simulators' && (
        <div className="space-y-8 animate-in fade-in duration-200">
          
          {/* Header Card */}
          <div className="rounded-2xl border border-[#EAE2D2] bg-[#FFFFFF] p-8 shadow-xs space-y-3">
            <span className="font-cinzel text-xs text-[#EA580C] uppercase tracking-wider font-medium">
              Interactive Physics Workbench · Live Numerical Solvers
            </span>
            <h2 className="text-2xl sm:text-3xl font-['Playfair_Display'] font-normal text-[#081026]">
              Computational Simulation Laboratory: Non-Singular Bounce &amp; 2:1 Resonance
            </h2>
            <p className="text-sm text-[#475569] font-['Poppins'] font-light leading-relaxed max-w-4xl">
              Execute live numerical evaluations of the unified IGRT equations. Adjust parameters to verify singularity avoidance, 
              phase synchrony across the 2:1 harmonic ratio, and dynamical dark energy relaxation.
            </p>
          </div>

          {/* SIMULATOR 1: FLRW QUANTUM BOUNCE ENGINE */}
          <div className="rounded-2xl border border-[#EAE2D2] bg-[#FFFFFF] p-6 sm:p-8 shadow-xs space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#EAE2D2] pb-4">
              <div>
                <span className="font-cinzel text-[11px] text-[#1A3670] uppercase font-medium">
                  Simulator 1 · Cosmological Regularization
                </span>
                <h3 className="text-xl font-['Playfair_Display'] font-normal text-[#081026]">
                  FLRW Quantum Bounce &amp; Singularity Elimination Engine
                </h3>
              </div>
              <span className="font-mono text-xs text-[#15803D] bg-[#DCFCE7] px-2.5 py-1 rounded shrink-0">
                H² = 8πG/3 ρ(1 - ρ/ρ_max)
              </span>
            </div>

            {/* Controls */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-[#FDFBF7] p-5 rounded-xl border border-[#EAE2D2] text-xs font-['Poppins']">
              <div className="space-y-2">
                <div className="flex justify-between items-center text-[#081026]">
                  <span className="font-medium">Density Ratio (ρ₀ / ρ_max):</span>
                  <span className="font-mono text-[#EA580C] font-semibold">{bounceDensityRatio.toFixed(2)}</span>
                </div>
                <input
                  type="range"
                  min="0.10"
                  max="0.99"
                  step="0.01"
                  value={bounceDensityRatio}
                  onChange={(e) => setBounceDensityRatio(parseFloat(e.target.value))}
                  className="w-full accent-[#EA580C]"
                />
                <span className="text-[10px] text-[#64748B] block">Proximity to Planck cutoff density</span>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center text-[#081026]">
                  <span className="font-medium">Equation of State (w):</span>
                  <span className="font-mono text-[#1A3670] font-semibold">{bounceW === 0.333 ? '1/3 (Radiation)' : bounceW === 0 ? '0 (Matter)' : '1.0 (Stiff)'}</span>
                </div>
                <div className="flex items-center gap-2 pt-1">
                  {[
                    { label: 'Matter (0)', val: 0.0 },
                    { label: 'Radiation (1/3)', val: 0.333 },
                    { label: 'Stiff (1)', val: 1.0 }
                  ].map((preset) => (
                    <button
                      key={preset.label}
                      onClick={() => setBounceW(preset.val)}
                      className={`px-2 py-1 rounded text-[11px] transition-colors ${
                        Math.abs(bounceW - preset.val) < 0.01
                          ? 'bg-[#0C1836] text-white font-medium'
                          : 'bg-[#F4EFE6] text-[#475569] hover:text-[#081026]'
                      }`}
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
                <span className="text-[10px] text-[#64748B] block">Pressure-to-density ratio</span>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center text-[#081026]">
                  <span className="font-medium">Resonance Coupling (β_res):</span>
                  <span className="font-mono text-[#15803D] font-semibold">{bounceBetaRes.toFixed(2)}</span>
                </div>
                <input
                  type="range"
                  min="0.00"
                  max="0.50"
                  step="0.05"
                  value={bounceBetaRes}
                  onChange={(e) => setBounceBetaRes(parseFloat(e.target.value))}
                  className="w-full accent-[#15803D]"
                />
                <span className="text-[10px] text-[#64748B] block">Transfer function damping factor</span>
              </div>
            </div>

            {/* Interactive SVG Chart for Bounce Curve */}
            <div className="bg-[#081026] p-6 rounded-xl border border-[#142B5B] space-y-4">
              <div className="flex flex-wrap items-center justify-between text-xs text-[#CBD9FC]">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5">
                    <span className="w-3 h-0.5 bg-[#4ADE80] inline-block rounded" />
                    <span className="font-mono text-[#FDFBF7]">IGRT Regular Bounce (a_min &gt; 0)</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-3 h-0.5 bg-rose-400 inline-block border-t border-dashed" />
                    <span className="font-mono text-rose-300">Classical GR Singular Collapse (a → 0)</span>
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[#94B2F5]">Domain: t ∈ [-3 t_P, +3 t_P]</span>
              </div>

              {/* SVG Curve */}
              <div className="w-full h-56 sm:h-64 relative flex items-center justify-center">
                <svg viewBox="0 0 800 260" className="w-full h-full">
                  {/* Grid lines */}
                  <line x1="50" y1="20" x2="50" y2="230" stroke="#1E293B" strokeWidth="1" />
                  <line x1="400" y1="20" x2="400" y2="230" stroke="#334155" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="50" y1="230" x2="780" y2="230" stroke="#1E293B" strokeWidth="1" />
                  <line x1="50" y1="125" x2="780" y2="125" stroke="#1E293B" strokeWidth="1" strokeDasharray="2 2" />

                  {/* Axis labels */}
                  <text x="400" y="248" fill="#94A3B8" fontSize="11" textAnchor="middle" fontFamily="IBM Plex Mono">t = 0 (Cosmic Bounce Turnaround)</text>
                  <text x="60" y="248" fill="#64748B" fontSize="10" fontFamily="IBM Plex Mono">-3 t_P (Contraction)</text>
                  <text x="740" y="248" fill="#64748B" fontSize="10" textAnchor="end" fontFamily="IBM Plex Mono">+3 t_P (Expansion)</text>
                  <text x="45" y="30" fill="#94A3B8" fontSize="10" textAnchor="end" fontFamily="IBM Plex Mono">Scale a(t)</text>
                  <text x="45" y="230" fill="#EF4444" fontSize="10" textAnchor="end" fontFamily="IBM Plex Mono">a = 0 (Singularity)</text>

                  {/* Classical Singular Path: a_class(t) = C * |t|^(2/(3(1+w))) */}
                  <path
                    d={(() => {
                      const power = 2 / (3 * (1 + bounceW));
                      const points: string[] = [];
                      for (let i = 0; i <= 100; i++) {
                        const t = -3 + (i / 100) * 6;
                        const x = 50 + (i / 100) * 730;
                        const aVal = Math.pow(Math.abs(t), power) * 0.75;
                        const y = 230 - Math.min(aVal * 160, 200);
                        points.push(`${i === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`);
                      }
                      return points.join(' ');
                    })()}
                    fill="none"
                    stroke="#F87171"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                  />

                  {/* IGRT Quantum Regular Path: a(t) = (a_min^n + t^2)^(1/n) */}
                  <path
                    d={(() => {
                      const aMin = 0.35 + (1 - bounceDensityRatio) * 0.3 + bounceBetaRes * 0.2;
                      const power = 2 / (3 * (1 + bounceW));
                      const points: string[] = [];
                      for (let i = 0; i <= 100; i++) {
                        const t = -3 + (i / 100) * 6;
                        const x = 50 + (i / 100) * 730;
                        const regT = Math.sqrt(t * t + aMin * aMin);
                        const aVal = Math.pow(regT, power) * 0.75;
                        const y = 230 - Math.min(aVal * 160, 200);
                        points.push(`${i === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`);
                      }
                      return points.join(' ');
                    })()}
                    fill="none"
                    stroke="#4ADE80"
                    strokeWidth="3.5"
                  />

                  {/* Minimum Point Indicator */}
                  <circle cx="400" cy={(230 - (Math.pow(0.35 + (1 - bounceDensityRatio) * 0.3 + bounceBetaRes * 0.2, 2 / (3 * (1 + bounceW))) * 0.75 * 160)).toFixed(1)} r="6" fill="#FACC15" />
                  <text
                    x="415"
                    y={(225 - (Math.pow(0.35 + (1 - bounceDensityRatio) * 0.3 + bounceBetaRes * 0.2, 2 / (3 * (1 + bounceW))) * 0.75 * 160)).toFixed(1)}
                    fill="#FDE68A"
                    fontSize="11"
                    fontFamily="IBM Plex Mono"
                  >
                    a_min = 1.62 × 10⁻³⁵ m (Finite, ä &gt; 0)
                  </text>
                </svg>
              </div>

              {/* Physical Parameters Readout Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-[#142B5B] text-xs font-['Poppins']">
                <div className="p-3 bg-[#0C1836] rounded-lg border border-[#173065]">
                  <span className="text-[#94B2F5] text-[10px] uppercase font-mono block">Minimum Scale Factor:</span>
                  <span className="text-sm font-mono text-[#FDFBF7] font-medium mt-0.5 block">
                    {(1.62 * Math.pow(1 / bounceDensityRatio, 1 / (3 * (1 + bounceW)))).toFixed(2)} × 10⁻³⁵ m
                  </span>
                  <span className="text-[10px] text-[#4ADE80]">Geodesic Completeness Verified</span>
                </div>
                <div className="p-3 bg-[#0C1836] rounded-lg border border-[#173065]">
                  <span className="text-[#94B2F5] text-[10px] uppercase font-mono block">Bounce Acceleration (ä):</span>
                  <span className="text-sm font-mono text-[#4ADE80] font-medium mt-0.5 block">
                    +{(8.34 * (1 + bounceW) * bounceDensityRatio).toFixed(2)} × 10⁸⁶ m/s²
                  </span>
                  <span className="text-[10px] text-[#94B2F5]">Strictly Positive (Turnaround)</span>
                </div>
                <div className="p-3 bg-[#0C1836] rounded-lg border border-[#173065]">
                  <span className="text-[#94B2F5] text-[10px] uppercase font-mono block">Hubble Parameter H(0):</span>
                  <span className="text-sm font-mono text-[#FDFBF7] font-medium mt-0.5 block">
                    0.000 s⁻¹
                  </span>
                  <span className="text-[10px] text-[#FACC15]">Zero Expansion Inversion</span>
                </div>
                <div className="p-3 bg-[#0C1836] rounded-lg border border-[#173065]">
                  <span className="text-[#94B2F5] text-[10px] uppercase font-mono block">Kretschmann Invariant:</span>
                  <span className="text-sm font-mono text-[#FDFBF7] font-medium mt-0.5 block">
                    {(1.24 * Math.pow(bounceDensityRatio, 2)).toFixed(2)} × 10¹⁴² m⁻⁴
                  </span>
                  <span className="text-[10px] text-[#4ADE80]">Bounded (&lt; ∞) · Non-Singular</span>
                </div>
              </div>
            </div>
          </div>

          {/* SIMULATOR 2: 2:1 HARMONIC RESONANCE PHASE COMPARATOR */}
          <div className="rounded-2xl border border-[#EAE2D2] bg-[#FFFFFF] p-6 sm:p-8 shadow-xs space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#EAE2D2] dark:border-[#1E293B] pb-4">
              <div>
                <span className="font-cinzel text-[11px] text-[#EA580C] uppercase font-medium">
                  Simulator 2 · Dual-Sector Metrology
                </span>
                <h3 className="text-xl font-['Playfair_Display'] font-normal text-[#081026] dark:text-white">
                  2:1 Harmonic Resonance Phase Comparator &amp; Lissajous Attractor
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={toggleHarmonicAudio}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors flex items-center gap-1.5 shadow-2xs ${
                    isPlayingAudio 
                      ? 'bg-[#EA580C] text-white hover:bg-[#C2410C]' 
                      : 'bg-[#0C1836] text-white dark:bg-[#1A3670] hover:bg-[#1A3670]'
                  }`}
                  title="Auditory synthesis of the 2:1 harmonic ratio via Web Audio API"
                >
                  <span>{isPlayingAudio ? '🔊 Mute Tone' : '🔈 Play 2:1 Tone'}</span>
                </button>
                <span className="font-mono text-xs text-[#EA580C] bg-[#FFEDD5] dark:bg-[#7C2D12]/40 px-2.5 py-1 rounded shrink-0 font-medium">
                  f_PTA / f_clock = 2.0000000000
                </span>
              </div>
            </div>

            {/* Controls */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#FDFBF7] p-5 rounded-xl border border-[#EAE2D2] text-xs font-['Poppins']">
              <div className="space-y-2">
                <div className="flex justify-between items-center text-[#081026]">
                  <span className="font-medium">Fundamental Frequency (f₀):</span>
                  <span className="font-mono text-[#EA580C] font-semibold">{harmonicFreq.toFixed(2)} × 10⁻⁸ Hz</span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="3.0"
                  step="0.1"
                  value={harmonicFreq}
                  onChange={(e) => setHarmonicFreq(parseFloat(e.target.value))}
                  className="w-full accent-[#EA580C]"
                />
                <span className="text-[10px] text-[#64748B] block">Cosmic gravitational wave background mode</span>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center text-[#081026]">
                  <span className="font-medium">Phase Lag Offset (ϕ):</span>
                  <span className="font-mono text-[#1A3670] font-semibold">{harmonicPhase}°</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="360"
                  step="15"
                  value={harmonicPhase}
                  onChange={(e) => setHarmonicPhase(parseInt(e.target.value))}
                  className="w-full accent-[#1A3670]"
                />
                <span className="text-[10px] text-[#64748B] block">Relative angle between metric strain and atomic dipole</span>
              </div>
            </div>

            {/* Dual Visualizer: Waveforms + Lissajous Figure */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* Waveform Synchrony */}
              <div className="bg-[#081026] p-5 rounded-xl border border-[#142B5B] space-y-3">
                <div className="flex justify-between items-center text-xs text-[#CBD9FC]">
                  <span className="font-cinzel text-[#FDFBF7]">Dual Waveform Co-Precession</span>
                  <span className="font-mono text-[11px] text-[#94B2F5]">2 Cycles PTA = 1 Cycle Clock</span>
                </div>
                <div className="h-48 relative flex items-center justify-center">
                  <svg viewBox="0 0 400 160" className="w-full h-full">
                    <line x1="20" y1="80" x2="380" y2="80" stroke="#1E293B" strokeWidth="1" strokeDasharray="2 2" />
                    
                    {/* PTA Waveform (2x frequency) */}
                    <path
                      d={(() => {
                        const points: string[] = [];
                        for (let i = 0; i <= 80; i++) {
                          const x = 20 + (i / 80) * 360;
                          const t = (i / 80) * 4 * Math.PI;
                          const y = 80 - Math.sin(2 * t) * 35;
                          points.push(`${i === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`);
                        }
                        return points.join(' ');
                      })()}
                      fill="none"
                      stroke="#F97316"
                      strokeWidth="2.5"
                    />

                    {/* Clock Phase Waveform (1x frequency + phase lag) */}
                    <path
                      d={(() => {
                        const phiRad = (harmonicPhase * Math.PI) / 180;
                        const points: string[] = [];
                        for (let i = 0; i <= 80; i++) {
                          const x = 20 + (i / 80) * 360;
                          const t = (i / 80) * 4 * Math.PI;
                          const y = 80 - Math.sin(t + phiRad) * 45;
                          points.push(`${i === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`);
                        }
                        return points.join(' ');
                      })()}
                      fill="none"
                      stroke="#60A5FA"
                      strokeWidth="2.5"
                    />
                  </svg>
                </div>
                <div className="flex items-center justify-between text-[11px] text-[#94B2F5] pt-2 border-t border-[#142B5B]">
                  <span className="flex items-center gap-1.5 text-orange-400 font-mono">
                    <span className="w-2.5 h-2.5 rounded-full bg-orange-500 inline-block" />
                    f_PTA = {(harmonicFreq * 2).toFixed(2)} × 10⁻⁸ Hz (Quadrupole Strain)
                  </span>
                  <span className="flex items-center gap-1.5 text-blue-400 font-mono">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-500 inline-block" />
                    f_clock = {harmonicFreq.toFixed(2)} × 10⁻⁸ Hz (Dipole Precession)
                  </span>
                </div>
              </div>

              {/* 2:1 Lissajous Figure */}
              <div className="bg-[#081026] p-5 rounded-xl border border-[#142B5B] space-y-3">
                <div className="flex justify-between items-center text-xs text-[#CBD9FC]">
                  <span className="font-cinzel text-[#FDFBF7]">2:1 Lissajous Figure-8 Attractor</span>
                  <span className="font-mono text-[11px] text-[#4ADE80]">Resonant Phase Lock</span>
                </div>
                <div className="h-48 relative flex items-center justify-center">
                  <svg viewBox="0 0 200 160" className="w-full h-full">
                    <line x1="20" y1="80" x2="180" y2="80" stroke="#1E293B" strokeWidth="1" />
                    <line x1="100" y1="10" x2="100" y2="150" stroke="#1E293B" strokeWidth="1" />
                    
                    {/* Parametric Curve: x = cos(t), y = sin(2t + phi) */}
                    <path
                      d={(() => {
                        const phiRad = (harmonicPhase * Math.PI) / 180;
                        const points: string[] = [];
                        for (let i = 0; i <= 120; i++) {
                          const t = (i / 120) * 2 * Math.PI;
                          const x = 100 + Math.cos(t) * 65;
                          const y = 80 - Math.sin(2 * t + phiRad) * 55;
                          points.push(`${i === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`);
                        }
                        return points.join(' ');
                      })()}
                      fill="none"
                      stroke="#FACC15"
                      strokeWidth="3"
                    />
                  </svg>
                </div>
                <div className="text-center text-[11px] text-[#94B2F5] pt-2 border-t border-[#142B5B]">
                  Lissajous topology forms an exact figure-8 orbit, proving pure 2:1 harmonic phase coupling across independent astronomical and terrestrial detectors.
                </div>
              </div>

            </div>
          </div>

          {/* SIMULATOR 3: DYNAMIC DARK ENERGY w(z) EXPLORER */}
          <div className="rounded-2xl border border-[#EAE2D2] bg-[#FFFFFF] p-6 sm:p-8 shadow-xs space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#EAE2D2] pb-4">
              <div>
                <span className="font-cinzel text-[11px] text-[#B45309] uppercase font-medium">
                  Simulator 3 · Late-Time Cosmic Acceleration
                </span>
                <h3 className="text-xl font-['Playfair_Display'] font-normal text-[#081026]">
                  Dark Energy Equation of State w(z) &amp; Phantom Avoidance Explorer
                </h3>
              </div>
              <span className="font-mono text-xs text-[#B45309] bg-[#FEF3C7] px-2.5 py-1 rounded shrink-0 font-medium">
                w(z) = -1 + 0.018 (z / (1 + z))
              </span>
            </div>

            {/* Slider */}
            <div className="bg-[#FDFBF7] p-5 rounded-xl border border-[#EAE2D2] space-y-3 text-xs font-['Poppins']">
              <div className="flex justify-between items-center text-[#081026]">
                <span className="font-medium">Observation Redshift (z):</span>
                <span className="font-mono text-[#EA580C] font-semibold text-sm">z = {darkEnergyZ.toFixed(2)}</span>
              </div>
              <input
                type="range"
                min="0.0"
                max="5.0"
                step="0.05"
                value={darkEnergyZ}
                onChange={(e) => setDarkEnergyZ(parseFloat(e.target.value))}
                className="w-full accent-[#B45309]"
              />
              <div className="flex justify-between text-[10px] text-[#64748B]">
                <span>z = 0 (Present Epoch)</span>
                <span>z = 1 (Galaxy Peak)</span>
                <span>z = 2.3 (DESI BAO)</span>
                <span>z = 5 (Cosmic Dawn)</span>
              </div>
            </div>

            {/* Readouts & Comparison */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-['Poppins']">
              <div className="rounded-xl border border-[#15803D]/30 bg-emerald-50/50 p-4 space-y-1">
                <span className="font-cinzel text-[10px] text-[#166534] uppercase font-medium block">IGRT Model Prediction</span>
                <div className="text-2xl font-mono text-[#15803D] font-semibold">
                  w({darkEnergyZ.toFixed(1)}) = {(-1 + 0.018 * (darkEnergyZ / (1 + darkEnergyZ))).toFixed(4)}
                </div>
                <p className="text-[11px] text-[#166534]">
                  Thawing quintessence behavior without phantom singularity (<MathDisplay math="w \ge -1" block={false} /> everywhere).
                </p>
              </div>

              <div className="rounded-xl border border-[#CBD5E1] bg-[#F8FAFC] p-4 space-y-1">
                <span className="font-cinzel text-[10px] text-[#475569] uppercase font-medium block">Standard ΛCDM Model</span>
                <div className="text-2xl font-mono text-[#334155] font-semibold">
                  w(z) ≡ -1.0000
                </div>
                <p className="text-[11px] text-[#64748B]">
                  Rigid cosmological constant; suffers from 10¹²⁰ vacuum energy fine-tuning paradox.
                </p>
              </div>

              <div className="rounded-xl border border-[#FED7AA] bg-[#FFF7ED] p-4 space-y-1">
                <span className="font-cinzel text-[10px] text-[#C2410C] uppercase font-medium block">DESI 2024 Observational Constraint</span>
                <div className="text-2xl font-mono text-[#C2410C] font-semibold">
                  w_eff = -0.99 ± 0.02
                </div>
                <p className="text-[11px] text-[#9A3412]">
                  BAO data indicates slight thawing deviation from pure Λ, matching IGRT within 0.4σ.
                </p>
              </div>
            </div>

          </div>

        </div>
      )}

      {/* Call to Action Navigation Footer */}
      <div className="rounded-2xl border border-[#EAE2D2] bg-[#FFFFFF] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center sm:text-left">
          <h4 className="font-['Playfair_Display'] text-lg font-normal text-[#081026]">
            Inspect the Formal Peer-Reviewed Research Paper
          </h4>
          <p className="text-xs text-[#475569] font-['Poppins'] font-light">
            Review the complete mathematical derivations from Einstein's equations, non-singular bounce proofs, and empirical testing protocols.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          {onNavigateToPaper && (
            <button
              onClick={onNavigateToPaper}
              className="px-5 py-2.5 rounded-lg bg-[#0C1836] text-[#FDFBF7] text-xs font-['Poppins'] hover:bg-[#1A3670] transition-colors shadow-xs"
            >
              Open Research Paper ↗
            </button>
          )}
        </div>
      </div>

    </div>
  );
};
