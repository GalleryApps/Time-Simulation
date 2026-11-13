/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Publication-Grade Inline SVG Figures (Figures 1–8) for the IGRT Monograph.
 * Zero LaTeX markup; pure Unicode symbols; schematics explicitly labeled.
 */

import React from 'react';

export interface PaperFigureSpec {
  id: number;
  anchorId: string;
  chapterAnchor: string;
  afterSubsectionAnchor: string;
  title: string;
  caption: string;
  isSchematic: boolean;
  svgMarkup: string;
}

export const PAPER_FIGURES: PaperFigureSpec[] = [
  {
    id: 1,
    anchorId: 'fig-1',
    chapterAnchor: 'chapter-1',
    afterSubsectionAnchor: 'sec-1-3',
    title: 'Logical Architecture and Chapter Roadmap of the IGRT Monograph',
    caption:
      'Figure 1. Logical architecture connecting the seven axioms (Chapter 1) to fiber-bundle geometry (Chapter 2), ghost-free DHOST and Type III₁ dynamics (Chapter 3), Tomita–Takesaki and Connes spectral correspondences (Chapter 4), canonical BRST unfreezing (Chapter 5), singularity regularization (Chapter 6), observational protocols (Chapter 7), and closure synthesis (Chapter 8).',
    isSchematic: true,
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 860 360" width="100%" height="auto" role="img" aria-label="Chapter roadmap of the IGRT monograph">
  <rect x="0" y="0" width="860" height="360" fill="#FAF8F3" stroke="#D6CABE" stroke-width="1"/>
  <text x="20" y="26" font-family="Georgia, serif" font-size="13" fill="#8B4513" letter-spacing="1.2">SCHEMATIC ARCHITECTURE — LOGICAL DEPENDENCY MAP</text>
  <rect x="28" y="48" width="180" height="68" rx="6" fill="#FFFFFF" stroke="#1E293B" stroke-width="1.4"/>
  <text x="118" y="72" text-anchor="middle" font-family="Georgia, serif" font-size="13" fill="#0F172A">Ch. 1: Axioms I–VII</text>
  <text x="118" y="92" text-anchor="middle" font-family="Georgia, serif" font-size="11" fill="#475569">4D Base (M, g_μν) + Scope</text>

  <rect x="240" y="48" width="180" height="68" rx="6" fill="#FFFFFF" stroke="#1E293B" stroke-width="1.4"/>
  <text x="330" y="72" text-anchor="middle" font-family="Georgia, serif" font-size="13" fill="#0F172A">Ch. 2: Fiber Bundle P</text>
  <text x="330" y="92" text-anchor="middle" font-family="Georgia, serif" font-size="11" fill="#475569">SLD QFI &amp; 4·g_FS Limit</text>

  <rect x="452" y="48" width="180" height="68" rx="6" fill="#FFFFFF" stroke="#1E293B" stroke-width="1.4"/>
  <text x="542" y="72" text-anchor="middle" font-family="Georgia, serif" font-size="13" fill="#0F172A">Ch. 3: DHOST + Araki</text>
  <text x="542" y="92" text-anchor="middle" font-family="Georgia, serif" font-size="11" fill="#475569">Type III₁ ψ²(x) &amp; Screening</text>

  <rect x="664" y="48" width="168" height="68" rx="6" fill="#FFFFFF" stroke="#1E293B" stroke-width="1.4"/>
  <text x="748" y="72" text-anchor="middle" font-family="Georgia, serif" font-size="13" fill="#0F172A">Ch. 4: Calibration</text>
  <text x="748" y="92" text-anchor="middle" font-family="Georgia, serif" font-size="11" fill="#475569">σ(K_ξ), E_mod &amp; Spectral D_C</text>

  <line x1="208" y1="82" x2="236" y2="82" stroke="#8B4513" stroke-width="1.6"/>
  <polygon points="236,78 242,82 236,86" fill="#8B4513"/>
  <line x1="420" y1="82" x2="448" y2="82" stroke="#8B4513" stroke-width="1.6"/>
  <polygon points="448,78 454,82 448,86" fill="#8B4513"/>
  <line x1="632" y1="82" x2="660" y2="82" stroke="#8B4513" stroke-width="1.6"/>
  <polygon points="660,78 666,82 660,86" fill="#8B4513"/>

  <path d="M 748 116 L 748 144 L 118 144 L 118 168" fill="none" stroke="#8B4513" stroke-width="1.4" stroke-dasharray="4,3"/>
  <polygon points="114,166 118,173 122,166" fill="#8B4513"/>

  <rect x="28" y="174" width="180" height="72" rx="6" fill="#FFFFFF" stroke="#1E293B" stroke-width="1.4"/>
  <text x="118" y="198" text-anchor="middle" font-family="Georgia, serif" font-size="13" fill="#0F172A">Ch. 5: WDW Unfreezing</text>
  <text x="118" y="218" text-anchor="middle" font-family="Georgia, serif" font-size="11" fill="#475569">BRST &amp; CPTP Time Arrow</text>

  <rect x="240" y="174" width="180" height="72" rx="6" fill="#FFFFFF" stroke="#1E293B" stroke-width="1.4"/>
  <text x="330" y="198" text-anchor="middle" font-family="Georgia, serif" font-size="13" fill="#0F172A">Ch. 6: Regularity</text>
  <text x="330" y="218" text-anchor="middle" font-family="Georgia, serif" font-size="11" fill="#475569">Bounce, Hayward Core, QES</text>

  <rect x="452" y="174" width="180" height="72" rx="6" fill="#FFFFFF" stroke="#1E293B" stroke-width="1.4"/>
  <text x="542" y="198" text-anchor="middle" font-family="Georgia, serif" font-size="13" fill="#0F172A">Ch. 7: Phenomenology</text>
  <text x="542" y="218" text-anchor="middle" font-family="Georgia, serif" font-size="11" fill="#475569">w(z), c_GW=c, 2:1 Protocols</text>

  <rect x="664" y="174" width="168" height="72" rx="6" fill="#FFF7ED" stroke="#8B4513" stroke-width="1.6"/>
  <text x="748" y="198" text-anchor="middle" font-family="Georgia, serif" font-size="13" fill="#0F172A">Ch. 8: Closure</text>
  <text x="748" y="218" text-anchor="middle" font-family="Georgia, serif" font-size="11" fill="#7C2D12">Synthesis &amp; Conclusions</text>

  <line x1="208" y1="210" x2="236" y2="210" stroke="#8B4513" stroke-width="1.6"/>
  <polygon points="236,206 242,210 236,214" fill="#8B4513"/>
  <line x1="420" y1="210" x2="448" y2="210" stroke="#8B4513" stroke-width="1.6"/>
  <polygon points="448,206 454,210 448,214" fill="#8B4513"/>
  <line x1="632" y1="210" x2="660" y2="210" stroke="#8B4513" stroke-width="1.6"/>
  <polygon points="660,206 666,210 660,214" fill="#8B4513"/>

  <rect x="28" y="276" width="804" height="58" rx="6" fill="#F4EFE6" stroke="#D6CABE" stroke-width="1.2"/>
  <text x="430" y="300" text-anchor="middle" font-family="Georgia, serif" font-size="12.5" fill="#0F172A">Appendices A–F: Formal Proofs &amp; Metrology Budgets   |   Appendices G–J: CODATA Units, Numerical Derivations &amp; Technical FAQ</text>
  <text x="430" y="320" text-anchor="middle" font-family="Georgia, serif" font-size="11.5" fill="#64748B">Unified Program: Principal Bundle Geometry → Covariant Field Equations → Empirical Falsification</text>
</svg>`
  },
  {
    id: 2,
    anchorId: 'fig-2',
    chapterAnchor: 'chapter-2',
    afterSubsectionAnchor: 'sec-2-1',
    title: 'Principal Statistical Fiber Bundle P(M, S_Fisher) Over 4D Lorentzian Spacetime',
    caption:
      'Figure 2. Schematic principal fiber bundle P(M, S_Fisher) projecting onto the 4D Lorentzian base manifold (M, g_μν) with signature (−,+,+,+). Over each event x ∈ M sits the quantum statistical fiber S_x equipped with SLD metric g_ij^QFI; horizontal curves lifted via the Ehresmann connection A_μ synchronize worldline proper duration dτ with modular-calibrated statistical arc length.',
    isSchematic: true,
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 860 380" width="100%" height="auto" role="img" aria-label="Principal fiber bundle P(M, S_Fisher) over Lorentzian base manifold M">
  <rect x="0" y="0" width="860" height="380" fill="#FAF8F3" stroke="#D6CABE" stroke-width="1"/>
  <text x="20" y="26" font-family="Georgia, serif" font-size="13" fill="#8B4513" letter-spacing="1">SCHEMATIC GEOMETRY — PRINCIPAL STATISTICAL FIBER BUNDLE P(M, S_Fisher)</text>

  <path d="M 90 295 C 240 265, 580 325, 760 280 L 795 340 C 600 375, 220 330, 55 352 Z" fill="#EFE9DD" stroke="#1E293B" stroke-width="1.6"/>
  <text x="72" y="340" font-family="Georgia, serif" font-size="14" fill="#0F172A">Base Spacetime (M, g_μν), signature (−,+,+,+)</text>

  <path d="M 190 318 C 330 298, 490 315, 650 296" fill="none" stroke="#8B4513" stroke-width="2.4"/>
  <circle cx="240" cy="312" r="4.5" fill="#0F172A"/>
  <text x="240" y="330" text-anchor="middle" font-family="Georgia, serif" font-size="12" fill="#0F172A">x(λ₁)</text>
  <circle cx="585" cy="302" r="4.5" fill="#0F172A"/>
  <text x="585" y="321" text-anchor="middle" font-family="Georgia, serif" font-size="12" fill="#0F172A">x(λ₂)</text>
  <text x="415" y="294" text-anchor="middle" font-family="Georgia, serif" font-size="12" fill="#8B4513">Timelike worldline ds² = g_μν dx^μ dx^ν &lt; 0</text>

  <line x1="240" y1="312" x2="215" y2="275" stroke="#64748B" stroke-width="1.2" stroke-dasharray="3,2"/>
  <line x1="240" y1="312" x2="265" y2="275" stroke="#64748B" stroke-width="1.2" stroke-dasharray="3,2"/>
  <ellipse cx="240" cy="275" rx="25" ry="5" fill="none" stroke="#64748B" stroke-width="1.1"/>
  <text x="200" y="269" font-family="Georgia, serif" font-size="11" fill="#475569">Light cone</text>

  <ellipse cx="240" cy="140" rx="68" ry="86" fill="#FFFFFF" fill-opacity="0.92" stroke="#1E293B" stroke-width="1.6"/>
  <line x1="240" y1="226" x2="240" y2="306" stroke="#1E293B" stroke-width="1.4" stroke-dasharray="5,3"/>
  <text x="240" y="72" text-anchor="middle" font-family="Georgia, serif" font-size="13" fill="#0F172A">Fiber S_x₁</text>
  <text x="240" y="92" text-anchor="middle" font-family="Georgia, serif" font-size="11" fill="#475569">Density states ρ(θ)</text>
  <circle cx="248" cy="155" r="4" fill="#8B4513"/>
  <path d="M 222 175 Q 246 156 264 132" fill="none" stroke="#15803D" stroke-width="2"/>
  <text x="240" y="202" text-anchor="middle" font-family="Georgia, serif" font-size="11" fill="#15803D">Metric g_ij^QFI</text>

  <ellipse cx="585" cy="134" rx="68" ry="86" fill="#FFFFFF" fill-opacity="0.92" stroke="#1E293B" stroke-width="1.6"/>
  <line x1="585" y1="220" x2="585" y2="296" stroke="#1E293B" stroke-width="1.4" stroke-dasharray="5,3"/>
  <text x="585" y="66" text-anchor="middle" font-family="Georgia, serif" font-size="13" fill="#0F172A">Fiber S_x₂</text>
  <text x="585" y="86" text-anchor="middle" font-family="Georgia, serif" font-size="11" fill="#475569">Pure boundary → 4·g_FS</text>
  <circle cx="595" cy="144" r="4" fill="#8B4513"/>
  <path d="M 565 162 Q 592 146 612 122" fill="none" stroke="#15803D" stroke-width="2"/>

  <path d="M 248 155 C 365 112, 480 120, 595 144" fill="none" stroke="#8B4513" stroke-width="2.4"/>
  <text x="415" y="114" text-anchor="middle" font-family="Georgia, serif" font-size="12.5" fill="#8B4513">Horizontal Lift via Ehresmann Connection A_μ</text>
  <text x="415" y="132" text-anchor="middle" font-family="Georgia, serif" font-size="11.5" fill="#475569">dτ = (ħ / (E_mod · σ(K_ξ))) · √(g_ij^QFI θ̇^i θ̇^j) dλ</text>

  <text x="415" y="232" text-anchor="middle" font-family="Georgia, serif" font-size="12" fill="#0F172A">Bundle Projection π : P(M, S_Fisher) → M</text>
</svg>`
  },
  {
    id: 3,
    anchorId: 'fig-3',
    chapterAnchor: 'chapter-6',
    afterSubsectionAnchor: 'sec-6-1',
    title: 'Schematic FLRW Quantum Bounce Scale-Factor Evolution Across ρ = ρ_max',
    caption:
      'Figure 3. Schematic cosmological bounce trajectory (not to scale). Solid curve: IGRT non-singular scale factor a(t) obeying H² = (8πG/3)ρ(1 − ρ/ρ_max), reversing contraction smoothly at a_min > 0 with H = 0 and exact turnaround acceleration ä/a = +4πGρ_max(1 + w) > 0. Dashed curves indicate classical GR singular collapse (a → 0).',
    isSchematic: true,
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 860 330" width="100%" height="auto" role="img" aria-label="Schematic FLRW bounce scale factor evolution">
  <rect x="0" y="0" width="860" height="330" fill="#FAF8F3" stroke="#D6CABE" stroke-width="1"/>
  <text x="20" y="26" font-family="Georgia, serif" font-size="13" fill="#8B4513" letter-spacing="1">SCHEMATIC EVOLUTION (NOT TO SCALE) — NON-SINGULAR FLRW BOUNCE</text>

  <line x1="90" y1="270" x2="790" y2="270" stroke="#334155" stroke-width="1.5"/>
  <line x1="430" y1="50" x2="430" y2="285" stroke="#94A3B8" stroke-width="1.2" stroke-dasharray="4,3"/>
  <line x1="90" y1="50" x2="90" y2="270" stroke="#334155" stroke-width="1.5"/>

  <text x="795" y="274" font-family="Georgia, serif" font-size="13" fill="#0F172A">Cosmic time t</text>
  <text x="84" y="42" text-anchor="middle" font-family="Georgia, serif" font-size="13" fill="#0F172A">Scale factor a(t)</text>
  <text x="430" y="302" text-anchor="middle" font-family="Georgia, serif" font-size="12" fill="#8B4513">t = t_bounce (H = 0, ρ = ρ_max)</text>

  <path d="M 150 75 Q 340 205 430 270" fill="none" stroke="#94A3B8" stroke-width="1.8" stroke-dasharray="6,4"/>
  <path d="M 430 270 Q 520 205 710 75" fill="none" stroke="#94A3B8" stroke-width="1.8" stroke-dasharray="6,4"/>
  <text x="255" y="236" font-family="Georgia, serif" font-size="11.5" fill="#64748B">Classical GR singularity (a → 0)</text>

  <path d="M 135 68 C 260 155, 345 215, 430 215 C 515 215, 600 155, 725 68" fill="none" stroke="#8B4513" stroke-width="2.8"/>
  <circle cx="430" cy="215" r="5" fill="#8B4513"/>
  <line x1="90" y1="215" x2="430" y2="215" stroke="#8B4513" stroke-width="1" stroke-dasharray="3,3"/>
  <text x="96" y="208" font-family="Georgia, serif" font-size="12" fill="#8B4513">a_min &gt; 0</text>
  <text x="430" y="192" text-anchor="middle" font-family="Georgia, serif" font-size="12" fill="#0F172A">ä / a = +4πG ρ_max (1 + w) &gt; 0</text>
  <text x="615" y="110" font-family="Georgia, serif" font-size="12" fill="#15803D">k_phys ≤ M_Pl (MB dispersion cutoff)</text>
</svg>`
  },
  {
    id: 4,
    anchorId: 'fig-4',
    chapterAnchor: 'chapter-7',
    afterSubsectionAnchor: 'sec-7-1',
    title: 'Thawing Dark-Energy Equation of State w(z) Across z ∈ [0, 3] vs. ΛCDM',
    caption:
      'Figure 4. Schematic evolution (not to scale vertically) of the shift-protected thawing dark-energy equation of state w(z) = −0.982 + 0.018 z/(1 + z), reaching w(0) = −0.982 at present epoch and asymptoting to −0.964 at high redshift while strictly respecting the non-phantom barrier w ≥ −1 (ΛCDM reference).',
    isSchematic: true,
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 860 320" width="100%" height="auto" role="img" aria-label="Dark energy equation of state w(z)">
  <rect x="0" y="0" width="860" height="320" fill="#FAF8F3" stroke="#D6CABE" stroke-width="1"/>
  <text x="20" y="26" font-family="Georgia, serif" font-size="13" fill="#8B4513" letter-spacing="1">THAWING DARK ENERGY TRAJECTORY — w(z) VS. ΛCDM (w = −1)</text>

  <rect x="110" y="55" width="660" height="200" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1.2"/>

  <line x1="110" y1="85" x2="770" y2="85" stroke="#E2E8F0" stroke-width="1"/>
  <text x="98" y="89" text-anchor="end" font-family="Georgia, serif" font-size="11.5" fill="#475569">−0.96</text>

  <line x1="110" y1="145" x2="770" y2="145" stroke="#E2E8F0" stroke-width="1"/>
  <text x="98" y="149" text-anchor="end" font-family="Georgia, serif" font-size="11.5" fill="#475569">−0.98</text>

  <line x1="110" y1="205" x2="770" y2="205" stroke="#334155" stroke-width="1.5" stroke-dasharray="6,4"/>
  <text x="98" y="209" text-anchor="end" font-family="Georgia, serif" font-size="11.5" fill="#0F172A">−1.00 (ΛCDM)</text>

  <text x="48" y="155" text-anchor="middle" font-family="Georgia, serif" font-size="13" fill="#0F172A" transform="rotate(-90 48 155)">w(z)</text>

  <text x="110" y="275" text-anchor="middle" font-family="Georgia, serif" font-size="11.5" fill="#475569">z = 0</text>
  <line x1="330" y1="55" x2="330" y2="255" stroke="#F1F5F9" stroke-width="1"/>
  <text x="330" y="275" text-anchor="middle" font-family="Georgia, serif" font-size="11.5" fill="#475569">z = 1</text>
  <line x1="550" y1="55" x2="550" y2="255" stroke="#F1F5F9" stroke-width="1"/>
  <text x="550" y="275" text-anchor="middle" font-family="Georgia, serif" font-size="11.5" fill="#475569">z = 2</text>
  <text x="770" y="275" text-anchor="middle" font-family="Georgia, serif" font-size="11.5" fill="#475569">z = 3</text>
  <text x="440" y="298" text-anchor="middle" font-family="Georgia, serif" font-size="12.5" fill="#0F172A">Cosmological Redshift z</text>

  <path d="M 110 151 Q 220 133, 330 124 T 550 115 T 770 110.5" fill="none" stroke="#8B4513" stroke-width="2.8"/>
  <circle cx="110" cy="151" r="4" fill="#8B4513"/>
  <text x="200" y="168" font-family="Georgia, serif" font-size="11.5" fill="#8B4513">w(0) = −0.982 (non-phantom thawing)</text>
  <text x="555" y="96" font-family="Georgia, serif" font-size="11.5" fill="#15803D">Strictly w(z) ≥ −1 across z ∈ [0, ∞)</text>
</svg>`
  },
  {
    id: 5,
    anchorId: 'fig-5',
    chapterAnchor: 'chapter-6',
    afterSubsectionAnchor: 'sec-6-3',
    title: 'Regular Frolov–Hayward Black-Hole Radial Lapse Function f(r) and Horizon Merger',
    caption:
      'Figure 5. Schematic radial profile of the Frolov–Hayward lapse function f(r) = 1 − 2GMr²/(r³ + 2GMℓ₀²). At r = 0, f(0) = 1 replaces the Schwarzschild −∞ divergence with a regular de Sitter core (K(0) = 24/ℓ₀⁴ = 48/ℓ_Pl⁴ for ℓ₀ = 2⁻¹/⁴ ℓ_Pl). Sub-extremal masses (M > M_rem) possess inner (r_−) and outer (r_+) horizons that coalesce at r_* = √3 ℓ₀ with vanishing surface gravity κ_± = 0.',
    isSchematic: true,
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 860 330" width="100%" height="auto" role="img" aria-label="Regular Frolov-Hayward lapse function f(r)">
  <rect x="0" y="0" width="860" height="330" fill="#FAF8F3" stroke="#D6CABE" stroke-width="1"/>
  <text x="20" y="26" font-family="Georgia, serif" font-size="13" fill="#8B4513" letter-spacing="1">SCHEMATIC METRIC PROFILE — FROLOV–HAYWARD HORIZON MERGER</text>

  <line x1="100" y1="65" x2="100" y2="280" stroke="#334155" stroke-width="1.5"/>
  <line x1="100" y1="200" x2="790" y2="200" stroke="#334155" stroke-width="1.5"/>
  <line x1="100" y1="90" x2="790" y2="90" stroke="#94A3B8" stroke-width="1" stroke-dasharray="4,3"/>

  <text x="90" y="94" text-anchor="end" font-family="Georgia, serif" font-size="12" fill="#0F172A">f = +1</text>
  <text x="90" y="204" text-anchor="end" font-family="Georgia, serif" font-size="12" fill="#0F172A">f = 0</text>
  <text x="790" y="218" text-anchor="end" font-family="Georgia, serif" font-size="12.5" fill="#0F172A">Radial coordinate r / ℓ₀</text>

  <path d="M 380 280 Q 430 165, 760 100" fill="none" stroke="#94A3B8" stroke-width="1.6" stroke-dasharray="5,4"/>
  <text x="355" y="272" font-family="Georgia, serif" font-size="11" fill="#64748B">Schwarzschild (singular as r → 0)</text>

  <path d="M 100 90 C 170 90, 215 245, 290 245 C 365 245, 450 120, 760 95" fill="none" stroke="#1E293B" stroke-width="2.4"/>
  <circle cx="215" cy="200" r="4" fill="#1E293B"/>
  <text x="208" y="186" text-anchor="end" font-family="Georgia, serif" font-size="11.5" fill="#0F172A">r_−</text>
  <circle cx="385" cy="200" r="4" fill="#1E293B"/>
  <text x="392" y="186" text-anchor="start" font-family="Georgia, serif" font-size="11.5" fill="#0F172A">r_+</text>

  <path d="M 100 90 C 165 90, 225 200, 280 200 C 335 200, 440 112, 760 93" fill="none" stroke="#8B4513" stroke-width="2.6"/>
  <circle cx="280" cy="200" r="5" fill="#8B4513"/>
  <text x="280" y="218" text-anchor="middle" font-family="Georgia, serif" font-size="12" fill="#8B4513">r_* = √3 ℓ₀ (M_rem, T_H = 0)</text>

  <text x="530" y="74" font-family="Georgia, serif" font-size="11.5" fill="#1E293B">── M &gt; M_rem (Inner + Outer Horizons)</text>
  <text x="530" y="138" font-family="Georgia, serif" font-size="11.5" fill="#8B4513">── M = M_rem (Extremal Zero-T Remnant)</text>
  <text x="112" y="78" font-family="Georgia, serif" font-size="11.5" fill="#15803D">Regular de Sitter Core (r → 0)</text>
</svg>`
  },
  {
    id: 6,
    anchorId: 'fig-6',
    chapterAnchor: 'chapter-6',
    afterSubsectionAnchor: 'sec-6-4',
    title: 'Penrose Conformal Diagram of a Regular Evaporating Black Hole With Extremal Remnant',
    caption:
      'Figure 6. Schematic Penrose conformal diagram illustrating non-singular collapse and unitary evaporation: a regular timelike core at r = 0 supports outer apparent and inner horizons enclosing an interior Quantum Extremal Island region before smoothly merging into a zero-temperature extremal remnant trajectory toward future timelike infinity i⁺.',
    isSchematic: true,
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 860 360" width="100%" height="auto" role="img" aria-label="Penrose conformal diagram of a regular evaporating black hole">
  <rect x="0" y="0" width="860" height="360" fill="#FAF8F3" stroke="#D6CABE" stroke-width="1"/>
  <text x="20" y="26" font-family="Georgia, serif" font-size="13" fill="#8B4513" letter-spacing="1">CONFORMAL CAUSAL STRUCTURE — REGULAR EVAPORATING REMNANT</text>

  <line x1="250" y1="45" x2="250" y2="335" stroke="#15803D" stroke-width="3"/>
  <text x="240" y="195" text-anchor="end" font-family="Georgia, serif" font-size="12" fill="#15803D">Regular r = 0 core (no singularity)</text>

  <line x1="250" y1="335" x2="460" y2="190" stroke="#1E293B" stroke-width="1.6"/>
  <line x1="460" y1="190" x2="250" y2="45" stroke="#1E293B" stroke-width="1.6"/>
  <text x="385" y="280" font-family="Georgia, serif" font-size="13" fill="#0F172A">ℐ⁻ (Past null infinity)</text>
  <text x="385" y="110" font-family="Georgia, serif" font-size="13" fill="#0F172A">ℐ⁺ (Future null infinity)</text>
  <circle cx="460" cy="190" r="4" fill="#0F172A"/>
  <text x="472" y="194" font-family="Georgia, serif" font-size="13" fill="#0F172A">i⁰ (Spatial infinity)</text>
  <circle cx="250" cy="45" r="4" fill="#0F172A"/>
  <text x="262" y="49" font-family="Georgia, serif" font-size="13" fill="#0F172A">i⁺ (Remnant asymptote)</text>

  <line x1="250" y1="255" x2="365" y2="175" stroke="#8B4513" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="372" y="177" font-family="Georgia, serif" font-size="11" fill="#8B4513">Collapsing shell</text>

  <path d="M 250 230 C 315 215, 340 165, 300 130 C 275 110, 260 125, 250 140" fill="#FDE68A" fill-opacity="0.45" stroke="#8B4513" stroke-width="2"/>
  <text x="520" y="140" font-family="Georgia, serif" font-size="12" fill="#0F172A">1. Trapped core bounded by regular r_− and r_+</text>
  <text x="520" y="164" font-family="Georgia, serif" font-size="12" fill="#0F172A">2. QES Island saddle inside core recovers Page unitarity</text>
  <text x="520" y="188" font-family="Georgia, serif" font-size="12" fill="#15803D">3. Horizons coalesce at M_rem = (3√3/4) M_Pl (κ_± = 0)</text>
  <text x="520" y="212" font-family="Georgia, serif" font-size="11.5" fill="#475569">4. Vanishing surface gravity κ_− → 0 stabilizes inner</text>
  <text x="520" y="230" font-family="Georgia, serif" font-size="11.5" fill="#475569">    Cauchy boundary against Poisson–Israel mass inflation.</text>
</svg>`
  },
  {
    id: 7,
    anchorId: 'fig-7',
    chapterAnchor: 'chapter-7',
    afterSubsectionAnchor: 'sec-7-2',
    title: '2:1 Lissajous Phase Portrait Between Optical-Clock Dipole and PTA Quadrupole Modes',
    caption:
      'Figure 7. Schematic 2:1 Lissajous figure-8 phase portrait generated by dipolar optical lattice clock modulation x(t) = sin(ω t / 2) against quadrupolar pulsar-timing strain y(t) = sin(ω t). Multi-year synchronous lock-in observation (T_obs ≥ 5 yr) resolves the T ≈ 4.95 yr carrier cycle at f_clock = 6.4 nHz above the per-epoch 10⁴ s clock stability floor.',
    isSchematic: true,
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 860 320" width="100%" height="auto" role="img" aria-label="2:1 Lissajous harmonic phase portrait">
  <rect x="0" y="0" width="860" height="320" fill="#FAF8F3" stroke="#D6CABE" stroke-width="1"/>
  <text x="20" y="26" font-family="Georgia, serif" font-size="13" fill="#8B4513" letter-spacing="1">PHASE LOCK PORTRAIT — 2:1 LISSAJOUS HARMONIC (f_PTA = 2 · f_clock)</text>

  <line x1="120" y1="168" x2="460" y2="168" stroke="#94A3B8" stroke-width="1.2"/>
  <line x1="290" y1="52" x2="290" y2="284" stroke="#94A3B8" stroke-width="1.2"/>
  <text x="466" y="172" font-family="Georgia, serif" font-size="11.5" fill="#0F172A">Clock dipole x = sin(ωt/2)</text>
  <text x="290" y="44" text-anchor="middle" font-family="Georgia, serif" font-size="11.5" fill="#0F172A">PTA quadrupole y = sin(ωt)</text>

  <path d="M 290 168 C 345 73, 420 73, 420 168 C 420 263, 345 263, 290 168 C 235 73, 160 73, 160 168 C 160 263, 235 263, 290 168 Z" fill="none" stroke="#8B4513" stroke-width="2.8"/>
  <circle cx="290" cy="168" r="4.5" fill="#0F172A"/>

  <rect x="495" y="75" width="335" height="190" rx="6" fill="#FFFFFF" stroke="#D6CABE" stroke-width="1.2"/>
  <text x="515" y="102" font-family="Georgia, serif" font-size="13" fill="#0F172A">Quadratic Scalar Back-Reaction</text>
  <text x="515" y="126" font-family="Georgia, serif" font-size="11.5" fill="#475569">□ h̄_μν = 16πG (δT_μν + δI_μν[δψ²])</text>
  <text x="515" y="150" font-family="Georgia, serif" font-size="11.5" fill="#475569">cos²(ωt/2) = ½ [1 + cos(ωt)] → exact 2:1</text>
  <text x="515" y="178" font-family="Georgia, serif" font-size="11.5" fill="#15803D">Resolved Baseline Budget:</text>
  <text x="515" y="198" font-family="Georgia, serif" font-size="11" fill="#475569">• f_clock = 6.4 nHz ⇒ T ≈ 4.95 years</text>
  <text x="515" y="216" font-family="Georgia, serif" font-size="11" fill="#475569">• 10⁴ s calibrates per-epoch σ_y = 4.2×10⁻¹⁹</text>
  <text x="515" y="234" font-family="Georgia, serif" font-size="11" fill="#475569">• 5-yr clock–IPTA stack resolves 2:1 peak at &gt;5σ.</text>
</svg>`
  },
  {
    id: 8,
    anchorId: 'fig-8',
    chapterAnchor: 'chapter-7',
    afterSubsectionAnchor: 'sec-7-3',
    title: 'Overview of the Six Observational & Laboratory Falsification Protocols (P1–P6)',
    caption:
      'Figure 8. Schematic experimental roadmap summarizing Protocols P1–P6 across IPTA and cryogenic ⁸⁷Sr optical lattice clocks (P1), 10m VLBAI atom interferometry (P2), Simons Observatory & LiteBIRD CMB polarimetry (P3), LVK O5 / CE / ET gravitational-wave ringdowns (P4), sub-millimeter clock redshift tests (P5), and HL-LHC scalar portal & deep-space tracking (P6).',
    isSchematic: true,
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 860 340" width="100%" height="auto" role="img" aria-label="Six experimental and observational falsification protocols schematic">
  <rect x="0" y="0" width="860" height="340" fill="#FAF8F3" stroke="#D6CABE" stroke-width="1"/>
  <text x="20" y="26" font-family="Georgia, serif" font-size="13" fill="#8B4513" letter-spacing="1">EXPERIMENTAL ROADMAP — PROTOCOLS P1 TO P6</text>

  <rect x="24" y="48" width="260" height="122" rx="6" fill="#FFFFFF" stroke="#1E293B" stroke-width="1.3"/>
  <text x="38" y="70" font-family="Georgia, serif" font-size="12.5" fill="#8B4513">P1: IPTA + ⁸⁷Sr Lattice Clocks</text>
  <text x="38" y="92" font-family="Georgia, serif" font-size="11" fill="#0F172A">Test: 2:1 harmonic lock (f_PTA / f_clock = 2)</text>
  <text x="38" y="112" font-family="Georgia, serif" font-size="11" fill="#475569">Baseline: Multi-yr sync (T ≥ 5 yr for 6.4 nHz);</text>
  <text x="38" y="128" font-family="Georgia, serif" font-size="11" fill="#475569">per-epoch floor σ_y(10⁴ s) = 4.2 × 10⁻¹⁹.</text>
  <text x="38" y="152" font-family="Georgia, serif" font-size="10.5" fill="#15803D">[Derived · 5σ Falsification Protocol]</text>

  <rect x="300" y="48" width="260" height="122" rx="6" fill="#FFFFFF" stroke="#1E293B" stroke-width="1.3"/>
  <text x="314" y="70" font-family="Georgia, serif" font-size="12.5" fill="#8B4513">P2: 10m VLBAI Atom Interferometry</text>
  <text x="314" y="92" font-family="Georgia, serif" font-size="11" fill="#0F172A">Test: Araki gradient fringe decoherence</text>
  <text x="314" y="112" font-family="Georgia, serif" font-size="11" fill="#475569">Target: Δx &gt; 15 cm visibility contrast;</text>
  <text x="314" y="128" font-family="Georgia, serif" font-size="11" fill="#475569">1.34× excess damping over BBR/gas baseline.</text>
  <text x="314" y="152" font-family="Georgia, serif" font-size="10.5" fill="#15803D">[Derived · VLBAI 2028 Window]</text>

  <rect x="576" y="48" width="260" height="122" rx="6" fill="#FFFFFF" stroke="#1E293B" stroke-width="1.3"/>
  <text x="590" y="70" font-family="Georgia, serif" font-size="12.5" fill="#8B4513">P3: Simons Obs. / LiteBIRD CMB</text>
  <text x="590" y="92" font-family="Georgia, serif" font-size="11" fill="#0F172A">Test: Bounce B-modes &amp; tilt n_s ≈ 0.9649</text>
  <text x="590" y="112" font-family="Georgia, serif" font-size="11" fill="#475569">Target: r ≈ 0.0032 at high ℓ,</text>
  <text x="590" y="128" font-family="Georgia, serif" font-size="11" fill="#475569">f_NL(equilateral) = −3.2 ± 0.4.</text>
  <text x="590" y="152" font-family="Georgia, serif" font-size="10.5" fill="#15803D">[Derived · 2026–2032 Window]</text>

  <rect x="24" y="190" width="260" height="122" rx="6" fill="#FFFFFF" stroke="#1E293B" stroke-width="1.3"/>
  <text x="38" y="212" font-family="Georgia, serif" font-size="12.5" fill="#8B4513">P4: LVK O5 / CE / ET Ringdowns</text>
  <text x="38" y="234" font-family="Georgia, serif" font-size="11" fill="#0F172A">Test: Hayward-core echo delay Δt_echo</text>
  <text x="38" y="254" font-family="Georgia, serif" font-size="11" fill="#475569">18.4 ms echo delay for 60 M_⊙ remnant;</text>
  <text x="38" y="270" font-family="Georgia, serif" font-size="11" fill="#475569">all-pass reflectivity K ≈ 0.18 from H(z).</text>
  <text x="38" y="294" font-family="Georgia, serif" font-size="10.5" fill="#15803D">[Derived · O5 Stacking Protocol]</text>

  <rect x="300" y="190" width="260" height="122" rx="6" fill="#FFFFFF" stroke="#1E293B" stroke-width="1.3"/>
  <text x="314" y="212" font-family="Georgia, serif" font-size="12.5" fill="#8B4513">P5: Sub-mm Clock Redshift Test</text>
  <text x="314" y="234" font-family="Georgia, serif" font-size="11" fill="#0F172A">Test: Δν/ν at h &lt; 10 cm vacuum separation</text>
  <text x="314" y="254" font-family="Georgia, serif" font-size="11" fill="#475569">Unscreened (2.1 ± 0.3)×10⁻⁴ below 10 cm;</text>
  <text x="314" y="270" font-family="Georgia, serif" font-size="11" fill="#475569">Solar System screened: |γ_PPN−1| ≤ 2.8×10⁻⁷.</text>
  <text x="314" y="294" font-family="Georgia, serif" font-size="10.5" fill="#15803D">[Derived · Thin-Shell Screened]</text>

  <rect x="576" y="190" width="260" height="122" rx="6" fill="#FFFFFF" stroke="#1E293B" stroke-width="1.3"/>
  <text x="590" y="212" font-family="Georgia, serif" font-size="12.5" fill="#8B4513">P6: HL-LHC Portal &amp; Deep-Space</text>
  <text x="590" y="234" font-family="Georgia, serif" font-size="11" fill="#0F172A">Test: Heavy radial Φ_portal (1.84 TeV)</text>
  <text x="590" y="254" font-family="Georgia, serif" font-size="11" fill="#475569">Distinct spectral-action Higgs portal mode</text>
  <text x="590" y="270" font-family="Georgia, serif" font-size="11" fill="#475569">+ outer-heliosphere unscreened acceleration.</text>
  <text x="590" y="294" font-family="Georgia, serif" font-size="10.5" fill="#15803D">[Derived · Two-Scale EFT Spectrum]</text>
</svg>`
  }
];

export const HarmonizedPaperFigure: React.FC<{ figure: PaperFigureSpec }> = ({ figure }) => {
  return (
    <figure
      id={figure.anchorId}
      className="igrt-keep-together my-10 rounded-xl border border-[#D6CABE] dark:border-[#334155] bg-[#FAF8F3] dark:bg-[#0B1530] p-5 space-y-4 scroll-mt-32"
    >
      <div
        className="w-full overflow-x-auto"
        dangerouslySetInnerHTML={{ __html: figure.svgMarkup }}
      />
      <figcaption className="text-[28px] leading-[1.5] text-[#475569] dark:text-[#CBD5E1] italic border-t border-[#E2D9C8] dark:border-[#1E293B] pt-3">
        {figure.caption}
      </figcaption>
    </figure>
  );
};
