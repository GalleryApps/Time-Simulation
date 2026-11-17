/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * IGRT-H12 Archival Plates & Analytical Vector Figures:
 * - Embeds both user-uploaded conceptual synthesis plates from /assets/aistudio/
 *   with explicit Category C/D visual-synthesis captions and generous spacing above captions
 * - Four publication-grade SVG figures plotted directly from scripts/verify-igrt-h12.mjs outputs
 */

import React from 'react';
import type { H12EpistemicCategory } from '../types/igrtH12Apparatus';
import { MathText } from './MathText';
import plateH12BeltramiImg from '../assets/images/plate_h12_beltrami_folding_1794953764201.jpg';
import plateH12HaywardImg from '../assets/images/plate_h12_hayward_wormhole_1794953764917.jpg';
import plateH12QfiImg from '../assets/images/plate_h12_qfi_complementarity_1794953765530.jpg';
import plateH12CosmicImg from '../assets/images/plate_h12_cosmic_extrapolations_1794953766440.jpg';

export interface H12PlateSpec {
  id: string;
  figureNumber: string;
  anchorChapter: number;
  title: string;
  imagePath: string;
  bundleFilename: string;
  category: H12EpistemicCategory;
  description: string;
}

export interface H12FigureSpec {
  id: string;
  figureNumber: string;
  anchorChapter: number;
  title: string;
  category: H12EpistemicCategory;
  caption: string;
  svgMarkup: string;
}

export const H12_ARCHIVAL_PLATES: H12PlateSpec[] = [
  {
    id: 'h12-plate-1',
    figureNumber: 'Plate H12-I',
    anchorChapter: 2,
    title: 'Conceptual Synthesis: Layered 4D Brane, Projective Hilbert Fiber & Resonant Coupling',
    imagePath: '/assets/aistudio/IGRT__Resonance_Across_Dimensions__2__d69e7395.png',
    bundleFilename: 'h12_plate_1_resonance_across_dimensions.png',
    category: 'CATEGORY C — CONJECTURAL',
    description:
      'Editorial conceptual overview illustrating the hierarchical relationship between a higher-dimensional 5D bulk brane (top sheet), our 4D spacetime layer (middle sheet), and the local quantum fiber ℋ (bottom oscillators), alongside double-slit superposition, Pauli exclusion antisymmetry, barrier tunneling, and topological-qubit metaphors. Formal distinction note: the visual "portal" transition on the right represents speculative Category C/D resonant state coupling rather than a Category A/B physical wormhole—exact NEC constraints (10⁻⁷¹ Casimir deficit at 1 m) and the Born rule (Category A) are treated rigorously in Chapters 6–7.'
  },
  {
    id: 'h12-plate-2',
    figureNumber: 'Plate H12-II',
    anchorChapter: 5,
    title: 'Conceptual Atlas: Compactified Bulk M_5 = M_4 × K_1, Compact Fiber & Resonance Portals',
    imagePath: '/assets/aistudio/Information-Geometric_Resonant_Time_Infographic_83db2666.png',
    bundleFilename: 'h12_plate_2_atlas_of_resonant_dimensions.png',
    category: 'CATEGORY D — SPECULATIVE ENGINEERING',
    description:
      'Editorial architectural atlas juxtaposing the compactified 5D bulk (M_5 = M_4 × K_1), the 4D Lorentzian fabric (G_{μν} = 8π G T_{μν} + Λ g_{μν}), the Kaluza–Klein information-geometric metric ds² = g_{μν} dx^μ dx^ν + Φ²(dy + A_μ dx^μ)², modular proper-time folding Δτ = ∮ α_mod ds_QFI, dimensional closure torus, and hypothetical frequency-matched "resonance portals" (4D → 5D/3D/2D/0D). Formal epistemic caveat: while resonant mode coupling and optical/BEC analog simulators (Devices C & F) operate on rigorous dispersive metrics (Category B/D), macroscopic traversal between spacetime sheets remains unestablished (Category C/D) and strictly governed by 5D microcausality and null energy theorems.'
  },
  {
    id: 'h12-plate-3',
    figureNumber: 'Plate H12-III',
    anchorChapter: 4,
    title: 'Beltrami Bulk Geodesic Dip: Why Only Asymmetric 5D Warping Folds Arrival Time',
    imagePath: plateH12BeltramiImg,
    bundleFilename: 'h12_plate_3_beltrami_folding.jpg',
    category: 'CATEGORY C — CONJECTURAL',
    description:
      'Architectural cross-section contrasting a 4D light ray confined to the brane mesh (dashed blue upper path) against a curved Beltrami geodesic (burnished copper) plunging down through an asymmetrically warped 5D bulk valley (α_t + α_x > 0). Because bulk time dilation increases the local coordinate light speed c_eff(y) = c e^{(α_t + α_x)k|y|} without altering the local 5D null condition ds_5² = 0, a dipping bulk pulse overtakes its brane counterpart (η_fold = 0.34279 at k Δx = 10 and 0.07770 at k Δx = 50; Category C mathematical possibilities on an assumed metric), whereas flat S¹ and conformal RS bulks strictly forbid any shortcut (Category B).'
  },
  {
    id: 'h12-plate-4',
    figureNumber: 'Plate H12-IV',
    anchorChapter: 6,
    title: 'Regular Hayward Core vs. Open Morris–Thorne Wormhole Throat Geometry',
    imagePath: plateH12HaywardImg,
    bundleFilename: 'h12_plate_4_hayward_wormhole.jpg',
    category: 'CATEGORY B — DERIVED',
    description:
      'Direct topological and causal comparison proved in Chapters 5–6. Left: the 4D H11 Hayward regular black hole smoothly caps gravitational collapse inside a golden de Sitter core (r_core = 2.5389 × 10⁻²² m for 30 M_⊙) obeying radial and transverse Null Energy Conditions (ρ + p_r = 0, ρ + p_⊥ > 0)—making it an echo-bearing horizon remnant (K_echo = 0.184), NOT a portal. Right: a genuine Morris–Thorne wormhole throat requires concentric NEC-violating negative energy rings (−1.0637 × 10⁻³ M_⊙ at r_0 = 1 m), exceeding laboratory Casimir vacuum density by 71 orders of magnitude.'
  },
  {
    id: 'h12-plate-5',
    figureNumber: 'Plate H12-V',
    anchorChapter: 7,
    title: 'Twin-Slit Wave–Particle Complementarity on the Orthogonal Hilbert Fiber PU(ℋ)',
    imagePath: plateH12QfiImg,
    bundleFilename: 'h12_plate_5_qfi_complementarity.jpg',
    category: 'CATEGORY B — DERIVED',
    description:
      'Geometric decoupling between spatial wave diffraction and internal quantum state-space curvature. Coherent matter waves traversing twin apertures (left) generate interference fringes governed by the SLD Quantum Fisher Information F_Q(φ) = V² = γ_coh² along geodesic trajectories on the projective Bloch fiber PU(ℋ) (right), yielding the exact complementarity circle V² + D_QFI² = 1. As Chapter 7 proves, this fiber sits strictly orthogonal to any physical fifth coordinate y (PU(ℋ) ⊥ ∂/∂y), and Born’s probability law remains an independent Category A quantum postulate.'
  },
  {
    id: 'h12-plate-6',
    figureNumber: 'Plate H12-VI',
    anchorChapter: 13,
    title: 'Twelve Mind-Blowing Extrapolations: Ekpyrotic Branes, Planck Foam & 3G Echo Horizons',
    imagePath: plateH12CosmicImg,
    bundleFilename: 'h12_plate_6_cosmic_extrapolations.jpg',
    category: 'CATEGORY C — CONJECTURAL',
    description:
      'Synthesis plate illustrating the twelve disciplined research frontiers mapped in Chapter 13: colliding crystalline orbifold branes (Extrapolation 10), Planck-scale quantum-foam wormhole fluctuations where Casimir density reaches 0.2436 parity at r_0 = ℓ_0 = 1.3591 × 10⁻³⁵ m (Extrapolation 5), radiating gravitational-wave Kaluza–Klein ringdown echoes targeted by Einstein Telescope and Cosmic Explorer (Extrapolation 7), and precision optical-lattice clock networks probing 10⁻¹⁹ modular folding and holographic bulk-volume complexity (Extrapolations 8–9).'
  }
];

export const H12_FIGURES: H12FigureSpec[] = [
  {
    id: 'h12-fig-1',
    figureNumber: 'Figure H12-1',
    anchorChapter: 4,
    title: '5D Geodesic Arrival Ratio η_fold = Δt_5 / Δt_4 Across Metric Classes',
    category: 'CATEGORY C — CONJECTURAL',
    caption:
      'Direct Beltrami variational solver output (scripts/verify-igrt-h12.mjs). Flat compact M_4 × S¹ (1.001249) and conformally flat Randall–Sundrum AdS_5 excursions (1.010321) strictly satisfy Δt_5 ≥ Δt_4 (Category B Negative No-Go Theorems). Only an assumed asymmetrically warped bulk geometry (Model 2B, α_t = α_x = 0.5) lowers arrival ratio η_fold = 0.86634 (k Δx = 2), 0.34279 (k Δx = 10), and 0.07770 (k Δx = 50) while preserving ds_5² = 0 (Category C mathematical possibilities, not physical predictions).',
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 320" width="760" height="320" style="background:#FDFBF7;font-family:'Source Serif 4','DejaVu Serif',Georgia,serif">
  <rect x="0" y="0" width="760" height="320" fill="#FDFBF7"/>
  <text x="380" y="28" text-anchor="middle" font-size="14" font-weight="600" fill="#0F172A">5D Null Geodesic Arrival Ratio eta_fold = dt_5 / dt_4 (No-Go vs Asymmetric Bulk)</text>
  <line x1="80" y1="255" x2="710" y2="255" stroke="#334155" stroke-width="1.5"/>
  <line x1="80" y1="50" x2="80" y2="255" stroke="#334155" stroke-width="1.5"/>
  <line x1="80" y1="95" x2="710" y2="95" stroke="#DC2626" stroke-width="1.4" stroke-dasharray="6,4"/>
  <text x="705" y="88" text-anchor="end" font-size="11" font-weight="600" fill="#DC2626">Brane Light Limit (eta_fold = 1.000 — No Shortcut Threshold)</text>
  <rect x="110" y="94" width="78" height="161" fill="#94A3B8" rx="4"/>
  <text x="149" y="85" text-anchor="middle" font-size="11" font-weight="600" fill="#334155">1.00125</text>
  <text x="149" y="275" text-anchor="middle" font-size="11" fill="#0F172A">Model 1: Flat S1</text>
  <text x="149" y="290" text-anchor="middle" font-size="10" fill="#64748B">(No Shortcut)</text>
  <rect x="225" y="92" width="78" height="163" fill="#64748B" rx="4"/>
  <text x="264" y="83" text-anchor="middle" font-size="11" font-weight="600" fill="#334155">1.01032</text>
  <text x="264" y="275" text-anchor="middle" font-size="11" fill="#0F172A">Model 2A: RS AdS5</text>
  <text x="264" y="290" text-anchor="middle" font-size="10" fill="#64748B">(Conformal No-Go)</text>
  <rect x="355" y="116" width="78" height="139" fill="#EA580C" rx="4"/>
  <text x="394" y="108" text-anchor="middle" font-size="11" font-weight="600" fill="#9A3412">0.86634</text>
  <text x="394" y="275" text-anchor="middle" font-size="11" fill="#0F172A">Model 2B (k dx=2)</text>
  <text x="394" y="290" text-anchor="middle" font-size="10" fill="#9A3412">c_eff = 1.154c</text>
  <rect x="470" y="200" width="78" height="55" fill="#D97706" rx="4"/>
  <text x="509" y="192" text-anchor="middle" font-size="11" font-weight="600" fill="#92400E">0.34279</text>
  <text x="509" y="275" text-anchor="middle" font-size="11" fill="#0F172A">Model 2B (k dx=10)</text>
  <text x="509" y="290" text-anchor="middle" font-size="10" fill="#92400E">c_eff = 2.917c</text>
  <rect x="585" y="242" width="78" height="13" fill="#15803D" rx="3"/>
  <text x="624" y="234" text-anchor="middle" font-size="11" font-weight="600" fill="#166534">0.07770</text>
  <text x="624" y="275" text-anchor="middle" font-size="11" fill="#0F172A">Model 2B (k dx=50)</text>
  <text x="624" y="290" text-anchor="middle" font-size="10" fill="#166534">c_eff = 12.87c</text>
  <text x="45" y="160" text-anchor="middle" font-size="11" fill="#334155" transform="rotate(-90 45 160)">Arrival Ratio eta_fold</text>
</svg>`
  },
  {
    id: 'h12-fig-2',
    figureNumber: 'Figure H12-2',
    anchorChapter: 6,
    title: 'Morris–Thorne Exotic Mass & Casimir Energy Deficit Across Throat Scales',
    category: 'CATEGORY B — DERIVED',
    caption:
      'Logarithmic comparison of the Casimir-to-wormhole energy density ratio |ρ_Casimir / (ρc² + p_r)| computed in scripts/verify-igrt-h12.mjs. Macroscopic throats (r_0 = 1 m requiring −1.0637 × 10⁻³ M_⊙, r_0 = 3 km requiring −3.1912 M_⊙) suffer a 71-order-of-magnitude Casimir shortfall (4.50 × 10⁻⁷¹). Parity O(1) (0.2436) occurs strictly at the H11 Planck core scale ℓ_0 = 1.359 × 10⁻³⁵ m.',
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 310" width="760" height="310" style="background:#FDFBF7;font-family:'Source Serif 4','DejaVu Serif',Georgia,serif">
  <rect x="0" y="0" width="760" height="310" fill="#FDFBF7"/>
  <text x="380" y="28" text-anchor="middle" font-size="14" font-weight="600" fill="#0F172A">Casimir-to-Wormhole NEC Energy Ratio: log10 |rho_Casimir / (rho c2 + p_r)|</text>
  <line x1="95" y1="60" x2="700" y2="60" stroke="#15803D" stroke-width="1.5" stroke-dasharray="6,4"/>
  <text x="695" y="53" text-anchor="end" font-size="11" font-weight="600" fill="#15803D">O(1) Quantum Parity Threshold (log10 = 0)</text>
  <line x1="95" y1="60" x2="95" y2="250" stroke="#334155" stroke-width="1.5"/>
  <line x1="95" y1="250" x2="700" y2="250" stroke="#334155" stroke-width="1.5"/>
  <text x="86" y="64" text-anchor="end" font-size="10" fill="#475569">0</text>
  <text x="86" y="123" text-anchor="end" font-size="10" fill="#475569">-25</text>
  <text x="86" y="182" text-anchor="end" font-size="10" fill="#475569">-50</text>
  <text x="86" y="242" text-anchor="end" font-size="10" fill="#475569">-75</text>
  <rect x="135" y="60" width="90" height="5" fill="#15803D"/>
  <circle cx="180" cy="61.5" r="5" fill="#15803D"/>
  <text x="180" y="82" text-anchor="middle" font-size="11" font-weight="600" fill="#166534">Ratio = 0.2436</text>
  <text x="180" y="270" text-anchor="middle" font-size="11" fill="#0F172A">r0 = l0 (1.36e-35 m)</text>
  <text x="180" y="286" text-anchor="middle" font-size="10" fill="#166534">Planck Quantum Foam</text>
  <rect x="335" y="60" width="90" height="138" fill="#D97706" opacity="0.85"/>
  <text x="380" y="214" text-anchor="middle" font-size="11" font-weight="600" fill="#92400E">4.50e-59 (-58.35)</text>
  <text x="380" y="270" text-anchor="middle" font-size="11" fill="#0F172A">r0 = 1 um</text>
  <text x="380" y="286" text-anchor="middle" font-size="10" fill="#92400E">M_ex = -2.12e21 kg</text>
  <rect x="535" y="60" width="90" height="166" fill="#991B1B" opacity="0.85"/>
  <text x="580" y="242" text-anchor="middle" font-size="11" font-weight="600" fill="#991B1B">4.50e-71 (-70.35)</text>
  <text x="580" y="270" text-anchor="middle" font-size="11" fill="#0F172A">r0 = 1 m</text>
  <text x="580" y="286" text-anchor="middle" font-size="10" fill="#991B1B">M_ex = -1.06e-3 M_sun</text>
</svg>`
  },
  {
    id: 'h12-fig-3',
    figureNumber: 'Figure H12-3',
    anchorChapter: 7,
    title: 'Double-Slit SLD Fisher Complementarity Circle: V² + D_QFI² = 1',
    category: 'CATEGORY B — DERIVED',
    caption:
      'Exact six-point sweep from scripts/verify-igrt-h12.mjs (γ_coh ∈ {0, 0.25, 0.5, 0.75, 0.9, 1.0}). Fringe visibility V = γ_coh and path distinguishability D_QFI = √(1 − γ_coh²) lie strictly on the unit complementarity quarter-circle with SLD Fisher Information F_Q(φ) = V². Born’s rule remains an independent Category A postulate.',
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 310" width="760" height="310" style="background:#FDFBF7;font-family:'Source Serif 4','DejaVu Serif',Georgia,serif">
  <rect x="0" y="0" width="760" height="310" fill="#FDFBF7"/>
  <text x="380" y="28" text-anchor="middle" font-size="14" font-weight="600" fill="#0F172A">Double-Slit SLD Quantum Fisher Complementarity: V2 + D_QFI2 = 1</text>
  <line x1="110" y1="255" x2="350" y2="255" stroke="#334155" stroke-width="1.5"/>
  <line x1="110" y1="55" x2="110" y2="255" stroke="#334155" stroke-width="1.5"/>
  <path d="M 110 55 A 200 200 0 0 1 310 255" fill="none" stroke="#1E3A8A" stroke-width="2.5"/>
  <circle cx="110" cy="55" r="5" fill="#EA580C"/>
  <circle cx="160" cy="61.4" r="5" fill="#EA580C"/>
  <circle cx="210" cy="81.8" r="5" fill="#EA580C"/>
  <circle cx="260" cy="122.7" r="5" fill="#EA580C"/>
  <circle cx="290" cy="167.8" r="5" fill="#EA580C"/>
  <circle cx="310" cy="255" r="5" fill="#EA580C"/>
  <text x="210" y="280" text-anchor="middle" font-size="11" fill="#0F172A">Fringe Visibility V = gamma_coh</text>
  <text x="72" y="155" text-anchor="middle" font-size="11" fill="#0F172A" transform="rotate(-90 72 155)">Path Distinguishability D_QFI</text>
  <rect x="395" y="60" width="320" height="195" fill="#FFFFFF" stroke="#CBD5E1" rx="8"/>
  <text x="555" y="84" text-anchor="middle" font-size="12" font-weight="600" fill="#0F172A">Verified Solver Points (2x2 SLD)</text>
  <text x="415" y="108" font-size="11" font-family="monospace" fill="#334155">gamma_coh=0.00 : V=0.00  D=1.000  F_Q=0.0000</text>
  <text x="415" y="130" font-size="11" font-family="monospace" fill="#334155">gamma_coh=0.25 : V=0.25  D=0.968  F_Q=0.0625</text>
  <text x="415" y="152" font-size="11" font-family="monospace" fill="#334155">gamma_coh=0.50 : V=0.50  D=0.866  F_Q=0.2500</text>
  <text x="415" y="174" font-size="11" font-family="monospace" fill="#334155">gamma_coh=0.75 : V=0.75  D=0.661  F_Q=0.5625</text>
  <text x="415" y="196" font-size="11" font-family="monospace" fill="#334155">gamma_coh=0.90 : V=0.90  D=0.436  F_Q=0.8100</text>
  <text x="415" y="218" font-size="11" font-family="monospace" fill="#334155">gamma_coh=1.00 : V=1.00  D=0.000  F_Q=1.0000</text>
  <text x="555" y="242" text-anchor="middle" font-size="10.5" font-weight="600" fill="#15803D">All points obey V2 + D_QFI2 = 1.000000000000</text>
</svg>`
  },
  {
    id: 'h12-fig-4',
    figureNumber: 'Figure H12-4',
    anchorChapter: 12,
    title: 'Experimental Falsification Architecture: H11 Protocols P1–P6 vs. H12 Protocols P7–P10',
    category: 'CATEGORY B — DERIVED',
    caption:
      'Strict separation between four-dimensional H11 tests (P1–P6) and five-dimensional H12 falsification probes (P7: 10 μm / 19.733 meV Yukawa; P8: 10⁻¹⁹ optical/nuclear clock folding; P9: 10⁻⁶ double-slit visibility; P10: 10⁻³ 3G GW scalar/KK leakage).',
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 280" width="760" height="280" style="background:#FDFBF7;font-family:'Source Serif 4','DejaVu Serif',Georgia,serif">
  <rect x="0" y="0" width="760" height="280" fill="#FDFBF7"/>
  <text x="380" y="26" text-anchor="middle" font-size="14" font-weight="600" fill="#0F172A">Empirical Falsification Boundary: H11 (4D Base EFT) vs. H12 (5D Extensions)</text>
  <rect x="35" y="50" width="320" height="195" rx="10" fill="#F0FDF4" stroke="#15803D" stroke-width="1.5"/>
  <text x="195" y="75" text-anchor="middle" font-size="12.5" font-weight="700" fill="#166534">IGRT-H11 Preregistered (4D Only)</text>
  <text x="55" y="102" font-size="11" fill="#1E293B">P1: Dual-Clock 2:1 ULDM Lock (SNR 25.1)</text>
  <text x="55" y="124" font-size="11" fill="#1E293B">P2: R0 = 1.028 um SiO2 DP Collapse (SNR 23.5)</text>
  <text x="55" y="146" font-size="11" fill="#1E293B">P3: LiteBIRD Ekpyrotic B-Modes (SNR 12.3)</text>
  <text x="55" y="168" font-size="11" fill="#1E293B">P4: WKB K_echo = 0.184 GW Echoes (SNR 9.2)</text>
  <text x="55" y="190" font-size="11" fill="#1E293B">P5: CANNEX Chameleon M_Ch = 2.44 meV</text>
  <text x="55" y="212" font-size="11" fill="#1E293B">P6: HL-LHC Phi_portal (4.7 sigma)</text>
  <text x="195" y="234" text-anchor="middle" font-size="10" font-weight="600" fill="#15803D">Tests 4D H11 — Does NOT Confirm 5D</text>
  <rect x="405" y="50" width="320" height="195" rx="10" fill="#FFF7ED" stroke="#EA580C" stroke-width="1.5"/>
  <text x="565" y="75" text-anchor="middle" font-size="12.5" font-weight="700" fill="#9A3412">IGRT-H12 Dedicated 5D Probes</text>
  <text x="425" y="108" font-size="11" fill="#1E293B">P7: 10 um KK Yukawa (m_KK = 19.733 meV)</text>
  <text x="425" y="136" font-size="11" fill="#1E293B">P8: Optical/Nuclear Clock Fold (10^-19)</text>
  <text x="425" y="164" font-size="11" fill="#1E293B">P9: Double-Slit QFI Bound (|dV_5D| &lt; 10^-6)</text>
  <text x="425" y="192" font-size="11" fill="#1E293B">P10: 3G ET/CE GW Bulk Leakage (&lt; 10^-3)</text>
  <text x="565" y="234" text-anchor="middle" font-size="10" font-weight="600" fill="#9A3412">Dedicated 5D Signatures (Devices A, B, D, E)</text>
  <path d="M 358 148 L 400 148" stroke="#475569" stroke-width="2" marker-end="url(#arrow)"/>
  <defs><marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L6,3 z" fill="#475569"/></marker></defs>
</svg>`
  }
];

export const H12PlateCard: React.FC<{ plate: H12PlateSpec }> = ({ plate }) => {
  const [imgFailed, setImgFailed] = React.useState(false);

  return (
    <figure className="my-10 rounded-2xl border border-[#D6CABE] dark:border-[#1E293B] bg-white dark:bg-[#0B1530] p-6 sm:p-8 shadow-xs">
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#EAE2D2] dark:border-[#1E293B] text-xs font-mono">
        <span className="uppercase tracking-[0.14em] text-[#9A3412] dark:text-[#FDBA74]">
          {plate.figureNumber} · Chapter {plate.anchorChapter}
        </span>
        <span className="text-[#64748B] dark:text-[#94A3B8]">
          {plate.category}
        </span>
      </div>
      <h4
        className="font-normal text-[21px] leading-[1.3] text-[#0C1836] dark:text-[#FDFBF7] mt-4 mb-5"
        style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400 }}
      >
        <MathText text={plate.title} />
      </h4>
      <div className="overflow-hidden rounded-xl border border-[#D6CABE] dark:border-[#1E293B] bg-[#FDFBF7] dark:bg-[#081026]">
        {imgFailed ? (
          <div className="aspect-video w-full flex flex-col items-center justify-center p-8 text-center text-[#CBD5E1] bg-gradient-to-br from-[#081026] to-[#172554]">
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#FDBA74] mb-2">
              {plate.figureNumber}
            </span>
            <p className="text-sm max-w-md opacity-85">{plate.title}</p>
          </div>
        ) : (
          <img
            src={plate.imagePath}
            alt={plate.title}
            referrerPolicy="no-referrer"
            onError={() => setImgFailed(true)}
            className="w-full h-auto object-cover block"
            loading="lazy"
          />
        )}
      </div>
      <figcaption className="mt-7 pt-5 border-t border-[#EAE2D2] dark:border-[#1E293B] text-[14.5px] leading-[1.7] text-[#334155] dark:text-[#CBD5E1] text-justify [hyphens:auto]">
        <MathText text={plate.description} />
      </figcaption>
    </figure>
  );
};

export const H12FigureCard: React.FC<{ fig: H12FigureSpec }> = ({ fig }) => (
  <figure className="my-10 rounded-2xl border border-[#D6CABE] dark:border-[#1E293B] bg-white dark:bg-[#0B1530] p-6 sm:p-8 shadow-xs">
    <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#EAE2D2] dark:border-[#1E293B] text-xs font-mono">
      <span className="uppercase tracking-[0.14em] text-[#15803D] dark:text-[#86EFAC]">
        {fig.figureNumber} · Chapter {fig.anchorChapter}
      </span>
      <span className="text-[#64748B] dark:text-[#94A3B8]">
        {fig.category}
      </span>
    </div>
    <h4
      className="font-normal text-[21px] leading-[1.3] text-[#0C1836] dark:text-[#FDFBF7] mt-4 mb-5"
      style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400 }}
    >
      <MathText text={fig.title} />
    </h4>
    <div
      className="w-full overflow-x-auto rounded-xl border border-[#D6CABE] dark:border-[#1E293B] bg-[#FDFBF7] p-3"
      dangerouslySetInnerHTML={{ __html: fig.svgMarkup }}
    />
    <figcaption className="mt-7 pt-5 border-t border-[#EAE2D2] dark:border-[#1E293B] text-[14.5px] leading-[1.7] text-[#334155] dark:text-[#CBD5E1] text-justify [hyphens:auto]">
      <MathText text={fig.caption} />
    </figcaption>
  </figure>
);
