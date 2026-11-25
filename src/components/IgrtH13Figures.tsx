/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * IGRT-H13 Archival Raster Plates (9 Generated Museum-Folio & Proof Apparatus Plates)
 * & Chapter Vector Figures (17 White-Ground Muted-Earth Scientific Diagrams)
 */

import React from 'react';
import type { H13EpistemicCategory } from '../types/igrtH13Apparatus';
import { MathText } from './MathText';
import { formatSvgMathMarkup } from '../utils/formatMathUnicode';
import plateCompilerImg from '../assets/images/h13_code_frame_compiler_1795492562228.jpg';
import platePortalImg from '../assets/images/h13_fifth_dim_portal_1795492563092.jpg';
import plateWhiteHoleImg from '../assets/images/h13_white_hole_bounce_1795492563409.jpg';
import plateAutopoieticImg from '../assets/images/h13_autopoietic_subroutine_1795492563723.jpg';
import plateDeviceOpticalClockImg from '../assets/images/h13_device_optical_clock_1795499432467.jpg';
import plateDeviceCannexImg from '../assets/images/h13_device_cannex_balance_1795499432228.jpg';
import plateDeviceGjwCavityImg from '../assets/images/h13_device_gjw_cavity_1795499431063.jpg';
import plateDeviceWhObservatoryImg from '../assets/images/h13_device_wh_observatory_1795499433423.jpg';
import plateDeviceQfiCalorimeterImg from '../assets/images/h13_device_qfi_calorimeter_1795499435047.jpg';

export interface H13PlateSpec {
  id: string;
  figureNumber: string;
  anchorChapter: number;
  title: string;
  imagePath: string;
  category: H13EpistemicCategory;
  description: string;
}

export interface H13FigureSpec {
  id: string;
  figureNumber: string;
  anchorChapter: number;
  title: string;
  category: H13EpistemicCategory;
  caption: string;
  svgMarkup: string;
}

export const H13_ARCHIVAL_PLATES: H13PlateSpec[] = [
  {
    id: 'h13-plate-1',
    figureNumber: 'Plate H13-I',
    anchorChapter: 4,
    title: 'Projective Hilbert Space Lattice: Kinematic Clock Steps & Gravitational Redshift',
    imagePath: plateCompilerImg,
    category: 'CATEGORY B2 — AXIOMATIC / DERIVED WITHIN IGRT',
    description:
      'Illustrates Axiom A1/A2: projective quantum Fisher displacement ds_QFI on PU(H) parametrized by local energy dispersion alongside GR gravitational redshift α_mod = √(−g_00).'
  },
  {
    id: 'h13-plate-2',
    figureNumber: 'Plate H13-II',
    anchorChapter: 9,
    title: 'Isotropic 5D Bulk Bridge (F_{0y}) vs. Sealed Spherical Compression Vault',
    imagePath: platePortalImg,
    category: 'CATEGORY C — CONJECTURAL',
    description:
      'Contrasts a Class P2 stabilized 5D Einstein–Maxwell (F_{0y}) / Horndeski Type Ia (c_GW = c) throat linking curved 4D sheets across y (η_fold ∈ [0.63662, 0.84147]) against an isolated Class S Hayward black-hole horizon obeying standard NEC.'
  },
  {
    id: 'h13-plate-3',
    figureNumber: 'Plate H13-III',
    anchorChapter: 10,
    title: 'Black-Hole-to-White-Hole Bounce Across a Limiting-Curvature Planck Core',
    imagePath: plateWhiteHoleImg,
    category: 'CATEGORY C — CONJECTURAL',
    description:
      'Cross-section of Principle 9: inward collapse reaches LQG capacity ceiling ρ_max = 0.409374 ρ_Pl (γ = 0.2375), reverses smoothly at u_min = 1, and transitions over quadratic τ_WH^(2) or cubic τ_WH^(3) timescales.'
  },
  {
    id: 'h13-plate-4',
    figureNumber: 'Plate H13-IV',
    anchorChapter: 13,
    title: 'BKM Entropy Contraction, Decoupled Biothermodynamics & Empirical Gates',
    imagePath: plateAutopoieticImg,
    category: 'CATEGORY A — ESTABLISHED',
    description:
      'Synthesizes Part I decoherence/BKM irreversibility (Cat B1) and classical Markov-blanket biothermodynamics (Cat A), keeping empirical observables strictly separated from the external Category E companion essay.'
  },
  {
    id: 'h13-plate-5',
    figureNumber: 'Plate H13-V',
    anchorChapter: 5,
    title: 'Proof Apparatus D13-A: Differential Cryogenic ⁸⁷Sr / ¹⁷¹Yb Optical-Lattice Clock Tower',
    imagePath: plateDeviceOpticalClockImg,
    category: 'CATEGORY A — ESTABLISHED',
    description:
      'Vertical baseline instrument for Protocol P15: dual 4 K shielded optical-lattice vacuum towers linked across Δh ≥ 100 m by phase-noise-canceled optical fiber verify GR redshift Δν/ν = gΔh/c² = 1.0911×10⁻¹⁶ m⁻¹.'
  },
  {
    id: 'h13-plate-6',
    figureNumber: 'Plate H13-VI',
    anchorChapter: 9,
    title: 'Proof Apparatus D13-B: Cryogenic CANNEX-Class Faraday-Shielded Sub-50 μm Planar Force Balance',
    imagePath: plateDeviceCannexImg,
    category: 'CATEGORY C — CONJECTURAL',
    description:
      'Precision short-range gravity probe for Protocol P14 and Appendix H: piezo-positioned gold-coated silicon test plates at 4.2 K separated by 10–38.6 μm with a 1 μm Faraday shield isolate Goldberger–Wise / KK Yukawa couplings (m_1 ≥ 5.112 meV) from thermal Casimir drift.'
  },
  {
    id: 'h13-plate-7',
    figureNumber: 'Plate H13-VII',
    anchorChapter: 9,
    title: 'Proof Apparatus D13-C: Coupled Dual-Rail Transmon & Tunable Josephson GJW Circuit Bench',
    imagePath: plateDeviceGjwCavityImg,
    category: 'CATEGORY A — ESTABLISHED',
    description:
      'Circuit-QED analog for Proposition H13.8, Protocol P18, and Appendix I: two μ-metal shielded 3D transmon cavities (L and R) at 10 mK linked by a sign-tunable parametric coupler verify analog TFD transfer fidelity F > 0.72 and Δt_ext ≥ d_ext/c.'
  },
  {
    id: 'h13-plate-8',
    figureNumber: 'Plate H13-VIII',
    anchorChapter: 10,
    title: 'Proof Apparatus D13-D: Coordinated CHIME / DSA-2000 Radio Dispersion & CTAO Cherenkov TeV Array',
    imagePath: plateDeviceWhObservatoryImg,
    category: 'CATEGORY C — CONJECTURAL',
    description:
      'Multimessenger astrophysical testbed for Protocol P17 and Appendix J: low-latency (< 200 ms) radio dispersion alerts trigger CTAO TeV follow-up to constrain primordial white-hole bounces (Page M_crit = 4.30×10¹⁴ g at f=15.35; 5.00×10¹⁴ g at f=24.14).'
  },
  {
    id: 'h13-plate-9',
    figureNumber: 'Plate H13-IX',
    anchorChapter: 11,
    title: 'Proof Apparatus D13-E: Weak-QND Double-Slit Interferometer & Nanoscale BKM Calorimeter',
    imagePath: plateDeviceQfiCalorimeterImg,
    category: 'CATEGORY A — ESTABLISHED',
    description:
      'Quantum-information and thermodynamic baseline for Theorems H13.10–H13.11 and Protocol P18: weak QND coupling sweeps visibility V vs. distinguishability D_QFI on pure V² + D_QFI² = 1 while an AuPd nanothermometer resolves Landauer heat ≥ 2.871×10⁻²¹ J/bit.'
  }
];

export const H13_FIGURES: H13FigureSpec[] = [
  {
    id: 'h13-fig-1',
    figureNumber: 'Figure H13-1',
    anchorChapter: 4,
    title: 'Kinematic QFI Reparametrization Steps (Eq. H13.0.1) on PU(H)',
    category: 'CATEGORY B2 — AXIOMATIC / DERIVED WITHIN IGRT',
    caption:
      'Under Axiom A1 (Def H13.1, Prop H13.1), projective state displacement ds_QFI along PU(H) defines dτ_obs := ℏ ds_QFI / (2 ΔH_loc) ≡ dt identically, with orthogonalization interval τ_step = π ℏ / (2 ΔH_loc).',
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 360" width="760" height="360" style="background:#FFFFFF;font-family:'DejaVu Sans',sans-serif">
  <rect width="760" height="360" fill="#FFFFFF"/>
  <rect x="14" y="14" width="732" height="332" fill="#FFFFFF" stroke="#0F0D0B" stroke-width="1.1"/>
  <text x="380" y="42" text-anchor="middle" font-size="13.5" font-weight="bold" fill="#0F0D0B">QFI PROPER-TIME REPARAMETRIZATION (AXIOM A1): d tau_obs := hbar ds_QFI / (2 dH_loc)</text>
  <line x1="40" y1="54" x2="720" y2="54" stroke="#8E7F6B" stroke-width="0.9"/>
  <rect x="52" y="96" width="135" height="145" rx="6" fill="#FAF8F4" stroke="#64705B" stroke-width="1.8"/>
  <text x="119" y="122" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#64705B">State N (rho_0)</text>
  <circle cx="119" cy="172" r="32" fill="none" stroke="#0F0D0B" stroke-width="1.5"/>
  <circle cx="136" cy="154" r="5" fill="#8F5B4A"/>
  <path d="M 192 168 L 266 168" stroke="#8F5B4A" stroke-width="2.4"/>
  <polygon points="272,168 260,162 260,174" fill="#8F5B4A"/>
  <text x="232" y="154" text-anchor="middle" font-size="10" font-weight="bold" fill="#8F5B4A">ds_QFI &gt; 0</text>
  <rect x="278" y="96" width="142" height="145" rx="6" fill="#FAF8F4" stroke="#64705B" stroke-width="1.8"/>
  <text x="349" y="122" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#64705B">State N+1 (rho_1)</text>
  <circle cx="349" cy="172" r="32" fill="none" stroke="#0F0D0B" stroke-width="1.5"/>
  <circle cx="377" cy="172" r="5" fill="#8F5B4A"/>
  <path d="M 426 168 L 516 168" stroke="#64705B" stroke-width="2.2" stroke-dasharray="4,3"/>
  <polygon points="522,168 510,162 510,174" fill="#64705B"/>
  <text x="474" y="150" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#64705B">dt_obs = dt identically</text>
  <rect x="528" y="96" width="182" height="145" rx="6" fill="#FAF8F4" stroke="#0F0D0B" stroke-width="1.8"/>
  <text x="619" y="122" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#0F0D0B">Stationary Check</text>
  <text x="619" y="160" text-anchor="middle" font-size="10.5" fill="#3A2E26">If ds_QFI = 0:</text>
  <text x="619" y="182" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#8F5B4A">Zero Ray Displacement</text>
  <text x="619" y="210" text-anchor="middle" font-size="9.2" fill="#64705B">tau_step = pi*hbar / (2 Delta H_loc)</text>
  <text x="380" y="305" text-anchor="middle" font-size="11" fill="#3A2E26">Axiom A1 (Cat B2): Geometric reparametrization on PU(H); zero deviation from standard QM.</text>
</svg>`
  },
  {
    id: 'h13-fig-2',
    figureNumber: 'Figure H13-2',
    anchorChapter: 5,
    title: 'Gravitational Redshift Lapse Ratio (α_mod = √(−g_00))',
    category: 'CATEGORY A — ESTABLISHED',
    caption:
      'Static Killing clock lapse α_mod = √(1 − 2GM/(c²r)) slows local proper clocks inside deep gravitational potentials (optical lab rate 1.0911×10⁻¹⁶ m⁻¹).',
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 360" width="760" height="360" style="background:#FFFFFF;font-family:'DejaVu Sans',sans-serif">
  <rect width="760" height="360" fill="#FFFFFF"/>
  <rect x="14" y="14" width="732" height="332" fill="#FFFFFF" stroke="#0F0D0B" stroke-width="1.1"/>
  <text x="380" y="42" text-anchor="middle" font-size="13.5" font-weight="bold" fill="#0F0D0B">GRAVITATIONAL REDSHIFT LAPSE: alpha_mod = sqrt(-g_00)</text>
  <line x1="40" y1="54" x2="720" y2="54" stroke="#8E7F6B" stroke-width="0.9"/>
  <line x1="90" y1="275" x2="670" y2="275" stroke="#0F0D0B" stroke-width="1.6"/>
  <line x1="90" y1="90" x2="90" y2="275" stroke="#0F0D0B" stroke-width="1.6"/>
  <path d="M 110 265 Q 230 230 330 165 T 650 112" fill="none" stroke="#8F5B4A" stroke-width="3"/>
  <circle cx="155" cy="242" r="5" fill="#8F5B4A"/>
  <text x="172" y="236" font-size="10.5" fill="#8F5B4A" font-weight="bold">Horizon (alpha_mod -&gt; 0, Slowest Clock)</text>
  <circle cx="585" cy="116" r="5" fill="#64705B"/>
  <text x="485" y="102" font-size="10.5" fill="#64705B" font-weight="bold">Asymptotic Space (alpha_mod -&gt; 1.00)</text>
  <text x="380" y="308" text-anchor="middle" font-size="11" fill="#3A2E26">Optical clock lab rate: d tau / tau = 1.0911e-16 per vertical meter (Standard GR).</text>
</svg>`
  },
  {
    id: 'h13-fig-3',
    figureNumber: 'Figure H13-3',
    anchorChapter: 5,
    title: 'Operational Light-Cone Distance & Mutual Information Envelope',
    category: 'CATEGORY B1 — DERIVED (STANDARD PHYSICS)',
    caption:
      'Operational ping distance d_sync satisfies Riemannian metric axioms, while spatial correlations obey I(A:B) ≤ I_0 e^{−d/ℓ_ent}.',
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 360" width="760" height="360" style="background:#FFFFFF;font-family:'DejaVu Sans',sans-serif">
  <rect width="760" height="360" fill="#FFFFFF"/>
  <rect x="14" y="14" width="732" height="332" fill="#FFFFFF" stroke="#0F0D0B" stroke-width="1.1"/>
  <text x="380" y="42" text-anchor="middle" font-size="13.5" font-weight="bold" fill="#0F0D0B">SPACE AS NETWORK LATENCY: d(A,B) = -l_ent ln(I(A:B)/I_0)</text>
  <line x1="40" y1="54" x2="720" y2="54" stroke="#8E7F6B" stroke-width="0.9"/>
  <polygon points="150,115 215,180 150,245 85,180" fill="#FAF8F4" stroke="#64705B" stroke-width="2"/>
  <text x="150" y="184" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#0F0D0B">Diamond D_A</text>
  <polygon points="610,115 675,180 610,245 545,180" fill="#FAF8F4" stroke="#64705B" stroke-width="2"/>
  <text x="610" y="184" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#0F0D0B">Diamond D_B</text>
  <line x1="222" y1="180" x2="538" y2="180" stroke="#8F5B4A" stroke-width="2.5" stroke-dasharray="7,4"/>
  <text x="380" y="165" text-anchor="middle" font-size="11" font-weight="bold" fill="#8F5B4A">Latency Ping dt_sync = d(A,B) / c</text>
  <path d="M 150 110 Q 380 58 610 110" fill="none" stroke="#64705B" stroke-width="1.8"/>
  <text x="380" y="88" text-anchor="middle" font-size="10" fill="#64705B">Higher Mutual Information I(A:B) =&gt; Shorter Operational Distance</text>
  <text x="380" y="305" text-anchor="middle" font-size="11" fill="#3A2E26">Space emerges as synchronization latency between coupled quantum subsystems.</text>
</svg>`
  },
  {
    id: 'h13-fig-4',
    figureNumber: 'Figure H13-4',
    anchorChapter: 5,
    title: 'AQFT Microcausality [O_A, O_B] = 0 (Cat A) & Local Execution Thread Framing (Cat E)',
    category: 'CATEGORY A — ESTABLISHED',
    caption:
      'Separated by tier: spacelike commutativity [O_A, O_B] = 0 across split Type I local algebras and +38.64 μs/day GPS clock offset are established physics (Cat A), whereas interpreting local KMS generators K_{ξ,A}, K_{ξ,B} as "no universal execution thread" is philosophical framing (Cat E).',
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 360" width="760" height="360" style="background:#FFFFFF;font-family:'DejaVu Sans',sans-serif">
  <rect width="760" height="360" fill="#FFFFFF"/>
  <rect x="14" y="14" width="732" height="332" fill="#FFFFFF" stroke="#0F0D0B" stroke-width="1.1"/>
  <text x="380" y="42" text-anchor="middle" font-size="13" font-weight="bold" fill="#0F0D0B">SPLIT TYPE I MICROCAUSALITY [O_A, O_B] = 0 (CAT A) VS. THREAD LENS (CAT E)</text>
  <line x1="40" y1="54" x2="720" y2="54" stroke="#8E7F6B" stroke-width="0.9"/>
  <rect x="75" y="96" width="250" height="144" rx="8" fill="#FAF8F4" stroke="#0F0D0B" stroke-width="1.8"/>
  <text x="200" y="124" text-anchor="middle" font-size="12" font-weight="bold" fill="#0F0D0B">Region A (Ground Station)</text>
  <text x="200" y="152" text-anchor="middle" font-size="10.2" fill="#64705B">Cat A: Type I Algebra N_A · KMS K_A</text>
  <text x="200" y="178" text-anchor="middle" font-size="10.2" fill="#3A2E26">Proper clock tau_A</text>
  <text x="200" y="208" text-anchor="middle" font-size="9.5" font-style="italic" fill="#8F5B4A">Cat E: Local instance A</text>
  <rect x="435" y="96" width="250" height="144" rx="8" fill="#FAF8F4" stroke="#8F5B4A" stroke-width="1.8"/>
  <text x="560" y="124" text-anchor="middle" font-size="12" font-weight="bold" fill="#8F5B4A">Region B (GPS Orbit)</text>
  <text x="560" y="152" text-anchor="middle" font-size="10.2" fill="#64705B">Cat A: Type I Algebra N_B · KMS K_B</text>
  <text x="560" y="178" text-anchor="middle" font-size="10.2" fill="#3A2E26">Cat A: +38.64 us/day offset</text>
  <text x="560" y="208" text-anchor="middle" font-size="9.5" font-style="italic" fill="#8F5B4A">Cat E: Local instance B</text>
  <path d="M 328 168 L 432 168" stroke="#64705B" stroke-width="2.2"/>
  <polygon points="432,168 421,163 421,173" fill="#64705B"/>
  <polygon points="328,168 339,163 339,173" fill="#64705B"/>
  <text x="380" y="152" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#64705B">Light-Cone Packet</text>
  <text x="380" y="286" text-anchor="middle" font-size="10.5" fill="#0F0D0B">Cat A (Math): [O_A, O_B] = 0 enforces spacelike algebra independence.</text>
  <text x="380" y="310" text-anchor="middle" font-size="10.2" font-style="italic" fill="#8F5B4A">Cat E (Interpretive): No universal "now" execution thread across causal diamonds.</text>
</svg>`
  },
  {
    id: 'h13-fig-5',
    figureNumber: 'Figure H13-5',
    anchorChapter: 6,
    title: 'Renormalization Group Fixed-Point Attractors: Physical Laws as Subroutines',
    category: 'CATEGORY B1 — DERIVED (STANDARD PHYSICS)',
    caption:
      'Microscopic degrees of freedom flow under RG coarse-graining onto stable macroscopic fixed points (Einstein–Horndeski EFT + Chentsov–Petz quantum Fisher family, with SLD selected for pure clocks).',
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 360" width="760" height="360" style="background:#FFFFFF;font-family:'DejaVu Sans',sans-serif">
  <rect width="760" height="360" fill="#FFFFFF"/>
  <rect x="14" y="14" width="732" height="332" fill="#FFFFFF" stroke="#0F0D0B" stroke-width="1.1"/>
  <text x="380" y="42" text-anchor="middle" font-size="13.5" font-weight="bold" fill="#0F0D0B">RG ATTRACTOR BASINS: PHYSICAL LAWS AS SETTLED SUBROUTINES</text>
  <line x1="40" y1="54" x2="720" y2="54" stroke="#8E7F6B" stroke-width="0.9"/>
  <ellipse cx="380" cy="185" rx="235" ry="92" fill="#FAF8F4" stroke="#8E7F6B" stroke-width="1.4" stroke-dasharray="5,3"/>
  <circle cx="380" cy="185" r="28" fill="#8F5B4A" opacity="0.18" stroke="#8F5B4A" stroke-width="2"/>
  <circle cx="380" cy="185" r="6" fill="#8F5B4A"/>
  <path d="M 175 130 Q 270 160 370 182" fill="none" stroke="#64705B" stroke-width="2.2"/>
  <path d="M 585 130 Q 490 160 390 182" fill="none" stroke="#64705B" stroke-width="2.2"/>
  <path d="M 175 240 Q 270 210 370 188" fill="none" stroke="#0F0D0B" stroke-width="2"/>
  <path d="M 585 240 Q 490 210 390 188" fill="none" stroke="#0F0D0B" stroke-width="2"/>
  <text x="380" y="232" text-anchor="middle" font-size="11" font-weight="bold" fill="#0F0D0B">IR Fixed Point: G_uv + S_Horndeski + g_QFI</text>
  <text x="380" y="308" text-anchor="middle" font-size="11" fill="#3A2E26">Macroscopic laws behave as stable ensemble attractors, shifting at Planck bounce scale.</text>
</svg>`
  },
  {
    id: 'h13-fig-6',
    figureNumber: 'Figure H13-6',
    anchorChapter: 7,
    title: 'Planck Tick vs. Macroscopic Instrument & Sensory Integration Window',
    category: 'CATEGORY B1 — DERIVED (STANDARD PHYSICS)',
    caption:
      'Macroscopic instruments and biological sensory windows average over ~1.48×10⁴² Planck times via environmental decoherence and Quantum Darwinism pointer redundancy without invoking speculative neural quantum collapse.',
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 360" width="760" height="360" style="background:#FFFFFF;font-family:'DejaVu Sans',sans-serif">
  <rect width="760" height="360" fill="#FFFFFF"/>
  <rect x="14" y="14" width="732" height="332" fill="#FFFFFF" stroke="#0F0D0B" stroke-width="1.1"/>
  <text x="380" y="42" text-anchor="middle" font-size="13.5" font-weight="bold" fill="#0F0D0B">CACHED RECORDS: 42 ORDERS OF DECOHERENCE COARSE-GRAINING</text>
  <line x1="40" y1="54" x2="720" y2="54" stroke="#8E7F6B" stroke-width="0.9"/>
  <rect x="70" y="105" width="180" height="125" rx="6" fill="#FAF8F4" stroke="#0F0D0B" stroke-width="1.6"/>
  <text x="160" y="138" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#0F0D0B">Planck Scale</text>
  <text x="160" y="168" text-anchor="middle" font-size="11" fill="#8F5B4A">5.391 x 10^-44 s</text>
  <text x="160" y="198" text-anchor="middle" font-size="9.5" fill="#64705B">Microscopic Unitary Flow</text>
  <path d="M 255 168 L 325 168" stroke="#8F5B4A" stroke-width="2.2"/>
  <polygon points="330,168 318,162 318,174" fill="#8F5B4A"/>
  <rect x="335" y="105" width="150" height="125" rx="6" fill="#FAF8F4" stroke="#64705B" stroke-width="1.6"/>
  <text x="410" y="142" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#64705B">Quantum Darwinism</text>
  <text x="410" y="172" text-anchor="middle" font-size="10" fill="#3A2E26">Pointer Redundancy</text>
  <text x="410" y="196" text-anchor="middle" font-size="9.5" fill="#8E7F6B">~10^-21 to 10^-15 s</text>
  <path d="M 490 168 L 545 168" stroke="#64705B" stroke-width="2.2"/>
  <polygon points="550,168 538,162 538,174" fill="#64705B"/>
  <rect x="555" y="105" width="145" height="125" rx="6" fill="#FAF8F4" stroke="#8F5B4A" stroke-width="1.8"/>
  <text x="627" y="138" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#8F5B4A">Macro Detector</text>
  <text x="627" y="168" text-anchor="middle" font-size="11" fill="#0F0D0B">~80 ms Window</text>
  <text x="627" y="198" text-anchor="middle" font-size="9.5" fill="#3A2E26">1.48e42 t_Pl/window</text>
  <text x="380" y="305" text-anchor="middle" font-size="11" fill="#3A2E26">Macroscopic detectors read coarse-grained, environment-redundant pointer records.</text>
</svg>`
  },
  {
    id: 'h13-fig-7',
    figureNumber: 'Figure H13-7',
    anchorChapter: 8,
    title: 'Energy as Computational Update Clock Budget (Margolus–Levitin Bound)',
    category: 'CATEGORY A — ESTABLISHED',
    caption:
      'State update rate ν_max scales linearly with available mean energy ⟨E⟩ via ν_max = 2⟨E⟩ / (π ℏ).',
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 360" width="760" height="360" style="background:#FFFFFF;font-family:'DejaVu Sans',sans-serif">
  <rect width="760" height="360" fill="#FFFFFF"/>
  <rect x="14" y="14" width="732" height="332" fill="#FFFFFF" stroke="#0F0D0B" stroke-width="1.1"/>
  <text x="380" y="42" text-anchor="middle" font-size="13.5" font-weight="bold" fill="#0F0D0B">ENERGY AS PROCESSING BUDGET: v_max &lt;= 2&lt;E&gt; / (pi hbar)</text>
  <line x1="40" y1="54" x2="720" y2="54" stroke="#8E7F6B" stroke-width="0.9"/>
  <line x1="110" y1="265" x2="650" y2="265" stroke="#0F0D0B" stroke-width="1.6"/>
  <line x1="110" y1="88" x2="110" y2="265" stroke="#0F0D0B" stroke-width="1.6"/>
  <polygon points="110,265 620,100 620,265" fill="#64705B" opacity="0.12"/>
  <line x1="110" y1="265" x2="620" y2="100" stroke="#8F5B4A" stroke-width="3"/>
  <text x="395" y="140" font-size="11" font-weight="bold" fill="#8F5B4A">Quantum Speed Limit Boundary</text>
  <text x="415" y="218" font-size="11" font-weight="bold" fill="#64705B">Permitted Frame-Update Rate Zone</text>
  <text x="380" y="305" text-anchor="middle" font-size="11" fill="#3A2E26">1 Joule of excitation supports 6.04e33 orthogonal quantum frame ticks per second.</text>
</svg>`
  },
  {
    id: 'h13-fig-8',
    figureNumber: 'Figure H13-8',
    anchorChapter: 9,
    title: '5D Einstein–Maxwell Portal Ratio & Sealed Hayward Core Distinction',
    category: 'CATEGORY C — CONJECTURAL',
    caption:
      'Compares static bulk slow-down (1.00125) and neutral symmetric RS (1.000) against dynamically stabilized Einstein–Maxwell bulk portal shortcuts (η_fold = sin(kΔx/2)/(kΔx/2) = 0.841471 at kΔx = 2 rad; 2/π = 0.636620 extremal horizon limit, contrasting with UV limit → 1 as kΔx → 0).',
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 360" width="760" height="360" style="background:#FFFFFF;font-family:'DejaVu Sans',sans-serif">
  <rect width="760" height="360" fill="#FFFFFF"/>
  <rect x="14" y="14" width="732" height="332" fill="#FFFFFF" stroke="#0F0D0B" stroke-width="1.1"/>
  <text x="380" y="42" text-anchor="middle" font-size="13.5" font-weight="bold" fill="#0F0D0B">5D PORTAL FOLDING RATIOS: STATIC NO-GO VS. STABILIZED EM BRIDGE</text>
  <line x1="40" y1="54" x2="720" y2="54" stroke="#8E7F6B" stroke-width="0.9"/>
  <rect x="85" y="102" width="160" height="140" fill="#FAF8F4" stroke="#8E7F6B" stroke-width="1.5"/>
  <text x="165" y="145" text-anchor="middle" font-size="11" font-weight="bold" fill="#3A2E26">Flat M_4 x S^1</text>
  <text x="165" y="175" text-anchor="middle" font-size="13" font-weight="bold" fill="#8E7F6B">1.00125</text>
  <text x="165" y="205" text-anchor="middle" font-size="9.5" fill="#64705B">(Slower than 4D)</text>
  <rect x="295" y="102" width="165" height="140" fill="#FAF8F4" stroke="#64705B" stroke-width="1.8"/>
  <text x="377" y="145" text-anchor="middle" font-size="11" font-weight="bold" fill="#64705B">5D EM (k dx = 2)</text>
  <text x="377" y="175" text-anchor="middle" font-size="13" font-weight="bold" fill="#64705B">0.841471</text>
  <text x="377" y="205" text-anchor="middle" font-size="9.5" fill="#3A2E26">(sin(1)/1; 15.85% Gain)</text>
  <rect x="510" y="102" width="165" height="140" fill="#FAF8F4" stroke="#8F5B4A" stroke-width="2"/>
  <text x="592" y="145" text-anchor="middle" font-size="11" font-weight="bold" fill="#8F5B4A">5D Horizon 2/pi</text>
  <text x="592" y="175" text-anchor="middle" font-size="13" font-weight="bold" fill="#8F5B4A">0.636620</text>
  <text x="592" y="205" text-anchor="middle" font-size="9.5" fill="#3A2E26">(Extremal Span Limit)</text>
  <text x="380" y="305" text-anchor="middle" font-size="11" fill="#3A2E26">Horndeski Type Ia locks c_GW = c; dynamic radion R_5 &lt; 38.6 um avoids static blocks.</text>
</svg>`
  },
  {
    id: 'h13-fig-9',
    figureNumber: 'Figure H13-9',
    anchorChapter: 10,
    title: 'White-Hole Bounce Timescale Hierarchy Across Black-Hole Mass Scales',
    category: 'CATEGORY C — CONJECTURAL',
    caption:
      'Log-log scaling comparing interior core bounces against cubic τ_WH^(3) (Page f=15.35 ⇒ 4.30×10¹⁴ g; f=24.14 ⇒ 5.00×10¹⁴ g; photon 1.730×10¹⁴ g) and quadratic τ_WH^(2) delays intersecting 13.8 Gyr today.',
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 360" width="760" height="360" style="background:#FFFFFF;font-family:'DejaVu Sans',sans-serif">
  <rect width="760" height="360" fill="#FFFFFF"/>
  <rect x="14" y="14" width="732" height="332" fill="#FFFFFF" stroke="#0F0D0B" stroke-width="1.1"/>
  <text x="380" y="42" text-anchor="middle" font-size="13.5" font-weight="bold" fill="#0F0D0B">WHITE-HOLE BOUNCE EPOCH SCALING (TODAY t_0 = 13.8 Gyr)</text>
  <line x1="40" y1="54" x2="720" y2="54" stroke="#8E7F6B" stroke-width="0.9"/>
  <line x1="100" y1="265" x2="660" y2="265" stroke="#0F0D0B" stroke-width="1.6"/>
  <line x1="100" y1="90" x2="100" y2="265" stroke="#0F0D0B" stroke-width="1.6"/>
  <line x1="100" y1="175" x2="660" y2="175" stroke="#64705B" stroke-width="1.4" stroke-dasharray="6,4"/>
  <text x="580" y="167" text-anchor="end" font-size="10" font-weight="bold" fill="#64705B">Current Cosmic Age t_0 = 13.8 Gyr</text>
  <line x1="120" y1="255" x2="365" y2="95" stroke="#8F5B4A" stroke-width="2.6"/>
  <line x1="120" y1="255" x2="610" y2="120" stroke="#0F0D0B" stroke-width="2.2"/>
  <circle cx="242" cy="175" r="6" fill="#8F5B4A"/>
  <text x="242" y="155" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#8F5B4A">Cubic 4.30e14 g (f=15.35)</text>
  <circle cx="435" cy="175" r="6" fill="#0F0D0B"/>
  <text x="455" y="196" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#0F0D0B">Quadratic 6.186e25 g</text>
  <text x="380" y="305" text-anchor="middle" font-size="11" fill="#3A2E26">Protocol P17 searches CHIME/CTAO bursts; 10 M_sun stellar holes (1.426e27 yr) outlast cosmic age.</text>
</svg>`
  },
  {
    id: 'h13-fig-10',
    figureNumber: 'Figure H13-10',
    anchorChapter: 11,
    title: 'Pure-State Unrendered Complementarity Circle: V² + D_QFI² = 1',
    category: 'CATEGORY A — ESTABLISHED',
    caption:
      'Interference visibility V vanishes continuously as path Fisher distinguishability D_QFI reaches 1 upon detector rendering interaction.',
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 360" width="760" height="360" style="background:#FFFFFF;font-family:'DejaVu Sans',sans-serif">
  <rect width="760" height="360" fill="#FFFFFF"/>
  <rect x="14" y="14" width="732" height="332" fill="#FFFFFF" stroke="#0F0D0B" stroke-width="1.1"/>
  <text x="380" y="42" text-anchor="middle" font-size="13.5" font-weight="bold" fill="#0F0D0B">UNRENDERED PROBABILITY COMPLEMENTARITY: V^2 + D_QFI^2 = 1</text>
  <line x1="40" y1="54" x2="720" y2="54" stroke="#8E7F6B" stroke-width="0.9"/>
  <line x1="250" y1="265" x2="510" y2="265" stroke="#0F0D0B" stroke-width="1.6"/>
  <line x1="250" y1="100" x2="250" y2="265" stroke="#0F0D0B" stroke-width="1.6"/>
  <path d="M 250 115 A 150 150 0 0 1 400 265" fill="none" stroke="#8F5B4A" stroke-width="3.2"/>
  <circle cx="250" cy="115" r="5" fill="#64705B"/>
  <text x="262" y="114" font-size="10.5" font-weight="bold" fill="#64705B">Unrendered (V=1, D_QFI=0)</text>
  <circle cx="356" cy="159" r="5" fill="#8F5B4A"/>
  <text x="372" y="156" font-size="10.5" font-weight="bold" fill="#8F5B4A">Partial Sync (V^2+D^2 = 1)</text>
  <circle cx="400" cy="265" r="5" fill="#0F0D0B"/>
  <text x="415" y="255" font-size="10.5" font-weight="bold" fill="#0F0D0B">Compiled Path (V=0, D_QFI=1)</text>
  <text x="380" y="305" text-anchor="middle" font-size="11" fill="#3A2E26">Unmeasured superposition stays open until coupling compiles one branch log.</text>
</svg>`
  },
  {
    id: 'h13-fig-11',
    figureNumber: 'Figure H13-11',
    anchorChapter: 12,
    title: 'Append-Only BKM Dissipation Arrow: d S_Araki / dτ ≤ 0',
    category: 'CATEGORY B1 — DERIVED (STANDARD PHYSICS)',
    caption:
      'Petz–Uhlmann CPTP monotonicity and Spohn’s theorem drive dS_Araki/dτ = −σ_BKM ≤ 0 under the Bogoliubov–Kubo–Mori integral metric.',
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 360" width="760" height="360" style="background:#FFFFFF;font-family:'DejaVu Sans',sans-serif">
  <rect width="760" height="360" fill="#FFFFFF"/>
  <rect x="14" y="14" width="732" height="332" fill="#FFFFFF" stroke="#0F0D0B" stroke-width="1.1"/>
  <text x="380" y="42" text-anchor="middle" font-size="13.5" font-weight="bold" fill="#0F0D0B">APPEND-ONLY LOG EXECUTION: BKM MONOTONE ENTROPY CONTRACTION</text>
  <line x1="40" y1="54" x2="720" y2="54" stroke="#8E7F6B" stroke-width="0.9"/>
  <line x1="100" y1="265" x2="660" y2="265" stroke="#0F0D0B" stroke-width="1.6"/>
  <line x1="100" y1="90" x2="100" y2="265" stroke="#0F0D0B" stroke-width="1.6"/>
  <path d="M 120 110 C 210 120 280 230 640 258" fill="none" stroke="#8F5B4A" stroke-width="3.2"/>
  <text x="350" y="148" font-size="11" font-weight="bold" fill="#8F5B4A">S_Araki(rho_tau || omega_xi) Strictly Decreasing</text>
  <text x="515" y="242" font-size="10.5" font-weight="bold" fill="#64705B">Append-Only Equilibrium Lock</text>
  <text x="380" y="305" text-anchor="middle" font-size="11" fill="#3A2E26">Spontaneous un-compilation is blocked by Petz-Uhlmann CPTP &amp; Spohn BKM dissipation.</text>
</svg>`
  },
  {
    id: 'h13-fig-12',
    figureNumber: 'Figure H13-12',
    anchorChapter: 13,
    title: 'Part I Empirical Test Gates (P14–P18) vs. Part II Ontological Lens (Cat E)',
    category: 'CATEGORY E — PHILOSOPHICAL / INTERPRETIVE',
    caption:
      'Separates the Part II philosophical compilation lens (Cat E) and decoupled Markov-blanket biothermodynamics (Cat A) from the Part I quantitative test gates (P14–P18).',
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 360" width="760" height="360" style="background:#FFFFFF;font-family:'DejaVu Sans',sans-serif">
  <rect width="760" height="360" fill="#FFFFFF"/>
  <rect x="14" y="14" width="732" height="332" fill="#FFFFFF" stroke="#0F0D0B" stroke-width="1.1"/>
  <text x="380" y="42" text-anchor="middle" font-size="13" font-weight="bold" fill="#0F0D0B">PART II ONTOLOGICAL LENS (CAT E) &amp; PART I TEST GATES (P14-P18)</text>
  <line x1="40" y1="54" x2="720" y2="54" stroke="#8E7F6B" stroke-width="0.9"/>
  <rect x="65" y="95" width="180" height="140" rx="6" fill="#FAF8F4" stroke="#0F0D0B" stroke-width="1.8"/>
  <text x="155" y="128" text-anchor="middle" font-size="11" font-weight="bold" fill="#0F0D0B">Part II Lens (Cat E)</text>
  <text x="155" y="156" text-anchor="middle" font-size="9.8" fill="#64705B">PU(H), K_xi, S_Araki</text>
  <text x="155" y="186" text-anchor="middle" font-size="9.8" fill="#8F5B4A">Compiler &amp; Qualia Gap</text>
  <path d="M 250 165 L 305 165" stroke="#8F5B4A" stroke-width="2.4"/>
  <polygon points="310,165 298,159 298,171" fill="#8F5B4A"/>
  <rect x="315" y="95" width="175" height="140" rx="6" fill="#FAF8F4" stroke="#64705B" stroke-width="1.8"/>
  <text x="402" y="128" text-anchor="middle" font-size="11" font-weight="bold" fill="#64705B">Part I Physics (A-C)</text>
  <text x="402" y="156" text-anchor="middle" font-size="9.8" fill="#0F0D0B">g_uv, 5D Bulk, WH</text>
  <text x="402" y="186" text-anchor="middle" font-size="9.8" fill="#3A2E26">Decoupled Markov Loops</text>
  <path d="M 495 165 L 545 165" stroke="#64705B" stroke-width="2.4"/>
  <polygon points="550,165 538,159 538,171" fill="#64705B"/>
  <rect x="555" y="95" width="150" height="140" rx="6" fill="#FAF8F4" stroke="#8F5B4A" stroke-width="1.8"/>
  <text x="630" y="128" text-anchor="middle" font-size="11" font-weight="bold" fill="#8F5B4A">Tests P14-P18</text>
  <text x="630" y="156" text-anchor="middle" font-size="9.5" fill="#0F0D0B">10-38.6 um CANNEX / Sr</text>
  <text x="630" y="186" text-anchor="middle" font-size="9.5" fill="#0F0D0B">LVK Echo / CHIME FRB</text>
  <text x="380" y="305" text-anchor="middle" font-size="10.8" fill="#3A2E26">Empirical falsifiability (P14, P16, P17) stands independently of Category E companion essays.</text>
</svg>`
  },
  {
    id: 'h13-fig-13',
    figureNumber: 'Figure H13-13',
    anchorChapter: 3,
    title: 'Unified 5D + 4D Action Architecture & Bianchi Conservation Closure (Appendix G)',
    category: 'CATEGORY B1 — DERIVED (STANDARD PHYSICS)',
    caption:
      'Five variational sectors of S_H13 (5D bulk EH + Goldberger–Wise radion + Type Ia Horndeski braiding + isotropic 5D electric flux F_{0y} + split-algebra matter/BKM) converge to c_GW = c and covariant closure.',
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 360" width="760" height="360" style="background:#FFFFFF;font-family:'DejaVu Sans',sans-serif">
  <rect width="760" height="360" fill="#FFFFFF"/>
  <rect x="14" y="14" width="732" height="332" fill="#FFFFFF" stroke="#0F0D0B" stroke-width="1.1"/>
  <text x="380" y="42" text-anchor="middle" font-size="13" font-weight="bold" fill="#0F0D0B">UNIFIED 5D + 4D ACTION S_H13: FIVE SECTORS &amp; BIANCHI CLOSURE</text>
  <line x1="40" y1="54" x2="720" y2="54" stroke="#8E7F6B" stroke-width="0.9"/>
  <rect x="34" y="76" width="128" height="92" rx="5" fill="#FAF8F4" stroke="#0F0D0B" stroke-width="1.5"/>
  <text x="98" y="100" text-anchor="middle" font-size="10.2" font-weight="bold" fill="#0F0D0B">1. 5D Bulk EH</text>
  <text x="98" y="120" text-anchor="middle" font-size="9.5" fill="#3A2E26">M_5^3 R^(5) - L_5</text>
  <text x="98" y="142" text-anchor="middle" font-size="8.8" fill="#64705B">Israel Junction E_uv</text>
  <rect x="174" y="76" width="132" height="92" rx="5" fill="#FAF8F4" stroke="#64705B" stroke-width="1.5"/>
  <text x="240" y="100" text-anchor="middle" font-size="10.2" font-weight="bold" fill="#64705B">2. GW Radion</text>
  <text x="240" y="120" text-anchor="middle" font-size="9.5" fill="#3A2E26">Phi_rad, V(Phi)</text>
  <text x="240" y="142" text-anchor="middle" font-size="8.8" fill="#64705B">Locks R_5 &lt; 38.6 um</text>
  <rect x="318" y="76" width="132" height="92" rx="5" fill="#FAF8F4" stroke="#8F5B4A" stroke-width="1.5"/>
  <text x="384" y="100" text-anchor="middle" font-size="10.2" font-weight="bold" fill="#8F5B4A">3. Type Ia Horndeski</text>
  <text x="384" y="120" text-anchor="middle" font-size="9.5" fill="#3A2E26">G_4(phi)R + G_3 Box</text>
  <text x="384" y="142" text-anchor="middle" font-size="8.8" fill="#8F5B4A">c_GW = c Locked</text>
  <rect x="462" y="76" width="132" height="92" rx="5" fill="#FAF8F4" stroke="#64705B" stroke-width="1.5"/>
  <text x="528" y="100" text-anchor="middle" font-size="10.2" font-weight="bold" fill="#64705B">4. Bulk Flux F_0y</text>
  <text x="528" y="120" text-anchor="middle" font-size="9.5" fill="#3A2E26">-1/4 F_AB F^AB</text>
  <text x="528" y="142" text-anchor="middle" font-size="8.8" fill="#64705B">SO(3) Isotropic</text>
  <rect x="606" y="76" width="120" height="92" rx="5" fill="#FAF8F4" stroke="#0F0D0B" stroke-width="1.5"/>
  <text x="666" y="100" text-anchor="middle" font-size="10.2" font-weight="bold" fill="#0F0D0B">5. AQFT / BKM</text>
  <text x="666" y="120" text-anchor="middle" font-size="9.5" fill="#3A2E26">L_SM + BKM Open</text>
  <text x="666" y="142" text-anchor="middle" font-size="8.8" fill="#3A2E26">Type I Modular Flow</text>
  <path d="M 98 172 L 98 205 L 666 205 L 666 172" fill="none" stroke="#8E7F6B" stroke-width="1.4"/>
  <line x1="240" y1="172" x2="240" y2="205" stroke="#8E7F6B" stroke-width="1.4"/>
  <line x1="384" y1="172" x2="384" y2="205" stroke="#8E7F6B" stroke-width="1.4"/>
  <line x1="528" y1="172" x2="528" y2="205" stroke="#8E7F6B" stroke-width="1.4"/>
  <path d="M 380 205 L 380 232" stroke="#8F5B4A" stroke-width="2.2"/>
  <polygon points="380,238 374,227 386,227" fill="#8F5B4A"/>
  <rect x="115" y="242" width="530" height="52" rx="6" fill="#FAF8F4" stroke="#8F5B4A" stroke-width="1.8"/>
  <text x="380" y="264" text-anchor="middle" font-size="11" font-weight="bold" fill="#0F0D0B">Variational Closure: G_uv^(4) = 8 pi G (T_uv^SM + T_uv^phi) - E_uv^(5)</text>
  <text x="380" y="283" text-anchor="middle" font-size="10" fill="#64705B">No-Ghost Sign: 1 + 2*G_4,X / M_Pl^2 = 1 exactly (G_4,X = G_5 = 0)</text>
  <text x="380" y="322" text-anchor="middle" font-size="10.5" fill="#3A2E26">Contracted Bianchi identity nabla^u G_uv = 0 guarantees energy-momentum conservation.</text>
</svg>`
  },
  {
    id: 'h13-fig-14',
    figureNumber: 'Figure H13-14',
    anchorChapter: 9,
    title: 'Kaluza–Klein Yukawa Exclusion Plot & Uncharted 10–38.6 μm Window (Appendix H)',
    category: 'CATEGORY C — CONJECTURAL',
    caption:
      'Log-log exclusion boundary |α_1| vs. compactification scale R_5 comparing Lee et al. (2020) Eöt-Wash torsion-balance limits (52 μm probe ⇒ λ < 38.6 μm at |α_1|=1; m_1 = 5.112 meV) against Protocol P14 / CANNEX cryogenic plate reach across 10–38.6 μm.',
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 360" width="760" height="360" style="background:#FFFFFF;font-family:'DejaVu Sans',sans-serif">
  <rect width="760" height="360" fill="#FFFFFF"/>
  <rect x="14" y="14" width="732" height="332" fill="#FFFFFF" stroke="#0F0D0B" stroke-width="1.1"/>
  <text x="380" y="42" text-anchor="middle" font-size="13" font-weight="bold" fill="#0F0D0B">KK YUKAWA BOUNDS: LEE 2020 WALL (38.6 um) &amp; CANNEX P14 WINDOW</text>
  <line x1="40" y1="54" x2="720" y2="54" stroke="#8E7F6B" stroke-width="0.9"/>
  <line x1="105" y1="265" x2="665" y2="265" stroke="#0F0D0B" stroke-width="1.6"/>
  <line x1="105" y1="84" x2="105" y2="265" stroke="#0F0D0B" stroke-width="1.6"/>
  <rect x="445" y="88" width="215" height="176" fill="#8F5B4A" opacity="0.14"/>
  <line x1="445" y1="88" x2="445" y2="265" stroke="#8F5B4A" stroke-width="2.2" stroke-dasharray="5,3"/>
  <text x="552" y="122" text-anchor="middle" font-size="10.2" font-weight="bold" fill="#8F5B4A">Excluded by Lee et al. 2020</text>
  <text x="552" y="140" text-anchor="middle" font-size="9.5" fill="#8F5B4A">(lambda &gt;= 38.6 um at |a_1|=1)</text>
  <rect x="260" y="148" width="185" height="116" fill="#64705B" opacity="0.14"/>
  <text x="352" y="180" text-anchor="middle" font-size="10.2" font-weight="bold" fill="#64705B">Open H13 Window</text>
  <text x="352" y="198" text-anchor="middle" font-size="9.5" fill="#0F0D0B">10 - 38.6 um (P14 CANNEX)</text>
  <path d="M 145 96 Q 310 140 445 205 T 640 248" fill="none" stroke="#0F0D0B" stroke-width="2.6"/>
  <circle cx="445" cy="205" r="5" fill="#8F5B4A"/>
  <text x="435" y="224" text-anchor="end" font-size="9.5" font-weight="bold" fill="#0F0D0B">m_1 = 5.112 meV (38.6 um)</text>
  <text x="385" y="290" text-anchor="middle" font-size="10" fill="#3A2E26">Compactification Radius R_5 (1 um  ---&gt;  10 um  ---&gt;  38.6 um  ---&gt;  100 um)</text>
  <text x="380" y="316" text-anchor="middle" font-size="10.5" fill="#64705B">LHC (&gt;TeV), SN1987A (n=1) &amp; GW170817 satisfied at R_5 &lt; 38.6 um (M_5 = 1.690e8 GeV).</text>
</svg>`
  },
  {
    id: 'h13-fig-15',
    figureNumber: 'Figure H13-15',
    anchorChapter: 9,
    title: 'Non-AdS GJW Kruskal Causal Portrait: Finite Brown–York Screen & No-FTL Sync (Appendix I)',
    category: 'CATEGORY C — CONJECTURAL',
    caption:
      'Kruskal (U, V) diagram showing how finite-radius Brown–York screen coupling (r_c > r_+) shifts a left-to-right null ray across U = 0 via Hadamard negative ANEC pulse ΔU < 0 without asymptotic AdS boundaries, while external sync obeys Δt_ext ≥ d_ext/c.',
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 360" width="760" height="360" style="background:#FFFFFF;font-family:'DejaVu Sans',sans-serif">
  <rect width="760" height="360" fill="#FFFFFF"/>
  <rect x="14" y="14" width="732" height="332" fill="#FFFFFF" stroke="#0F0D0B" stroke-width="1.1"/>
  <text x="380" y="42" text-anchor="middle" font-size="13" font-weight="bold" fill="#0F0D0B">BOUNDARY-FREE GJW PORTAL: FINITE SCREEN r_c &amp; DELTA U &lt; 0</text>
  <line x1="40" y1="54" x2="720" y2="54" stroke="#8E7F6B" stroke-width="0.9"/>
  <line x1="220" y1="265" x2="540" y2="90" stroke="#8E7F6B" stroke-width="1.5" stroke-dasharray="5,4"/>
  <line x1="220" y1="90" x2="540" y2="265" stroke="#8E7F6B" stroke-width="1.5" stroke-dasharray="5,4"/>
  <text x="546" y="96" font-size="9.5" fill="#8E7F6B">U = 0 Horizon</text>
  <path d="M 180 120 Q 150 177 180 235" fill="none" stroke="#0F0D0B" stroke-width="2.2"/>
  <text x="140" y="180" text-anchor="end" font-size="10" font-weight="bold" fill="#0F0D0B">Screen L (r_c)</text>
  <path d="M 580 120 Q 610 177 580 235" fill="none" stroke="#0F0D0B" stroke-width="2.2"/>
  <text x="620" y="180" text-anchor="start" font-size="10" font-weight="bold" fill="#0F0D0B">Screen R (r_c)</text>
  <path d="M 190 220 L 348 134 L 385 154 L 570 118" fill="none" stroke="#8F5B4A" stroke-width="2.8"/>
  <polygon points="574,117 562,113 565,125" fill="#8F5B4A"/>
  <circle cx="348" cy="134" r="4.5" fill="#8F5B4A"/>
  <text x="366" y="122" font-size="10" font-weight="bold" fill="#8F5B4A">Delta U &lt; 0 Shift (ANEC &lt; 0)</text>
  <path d="M 190 250 Q 380 284 570 250" fill="none" stroke="#64705B" stroke-width="2" stroke-dasharray="6,3"/>
  <text x="380" y="286" text-anchor="middle" font-size="10" font-weight="bold" fill="#64705B">External Non-Local Pulse: dt_ext &gt;= d_ext / c</text>
  <text x="380" y="318" text-anchor="middle" font-size="10.5" fill="#3A2E26">Finite Brown-York screen replaces AdS infinity; U_0 + Delta U &lt; 0 opens L-to-R throat causally.</text>
</svg>`
  },
  {
    id: 'h13-fig-16',
    figureNumber: 'Figure H13-16',
    anchorChapter: 10,
    title: 'Reproducible RK4 White-Hole Bounce Trajectory & Hayward Remnant Root (Appendices D & J)',
    category: 'CATEGORY C — CONJECTURAL',
    caption:
      'Dimensionless 4-stage RK4 integration of d²u/ds² = −1/(2u²) + 2/u⁵ showing smooth collapse rebound at exact turning point u_min = 1.000000 with positive turnaround acceleration +3/2 and Hamiltonian residual < 10⁻¹⁰.',
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 360" width="760" height="360" style="background:#FFFFFF;font-family:'DejaVu Sans',sans-serif">
  <rect width="760" height="360" fill="#FFFFFF"/>
  <rect x="14" y="14" width="732" height="332" fill="#FFFFFF" stroke="#0F0D0B" stroke-width="1.1"/>
  <text x="380" y="42" text-anchor="middle" font-size="13" font-weight="bold" fill="#0F0D0B">WHITE-HOLE BOUNCE RK4 PIPELINE: u_min = 1.000000 &amp; ACCEL = +3/2</text>
  <line x1="40" y1="54" x2="720" y2="54" stroke="#8E7F6B" stroke-width="0.9"/>
  <line x1="100" y1="265" x2="660" y2="265" stroke="#0F0D0B" stroke-width="1.6"/>
  <line x1="100" y1="88" x2="100" y2="265" stroke="#0F0D0B" stroke-width="1.6"/>
  <line x1="100" y1="215" x2="660" y2="215" stroke="#64705B" stroke-width="1.4" stroke-dasharray="6,3"/>
  <text x="645" y="230" text-anchor="end" font-size="9.5" font-weight="bold" fill="#64705B">u = 1 (rho_max = 0.409374 rho_Pl)</text>
  <path d="M 125 104 Q 260 155 380 215 Q 500 155 635 104" fill="none" stroke="#8F5B4A" stroke-width="3"/>
  <circle cx="380" cy="215" r="6" fill="#0F0D0B"/>
  <text x="380" y="196" text-anchor="middle" font-size="10.2" font-weight="bold" fill="#0F0D0B">Bounce Turning Point (u_min = 1.000000)</text>
  <text x="200" y="118" text-anchor="middle" font-size="10" font-weight="bold" fill="#8F5B4A">BH Collapse (du/ds &lt; 0)</text>
  <text x="560" y="118" text-anchor="middle" font-size="10" font-weight="bold" fill="#64705B">WH Flare (du/ds &gt; 0)</text>
  <text x="380" y="286" text-anchor="middle" font-size="10" fill="#3A2E26">Normalized Proper Time s = tau / tau_0   |   Hayward Cold Remnant Root: M_rem = 1.09236 M_Pl</text>
  <text x="380" y="316" text-anchor="middle" font-size="10.5" fill="#64705B">Max Hamiltonian residual |v^2 - (1/u - 1/u^4)| &lt; 10^-10 across 4,400 RK4 steps.</text>
</svg>`
  },
  {
    id: 'h13-fig-17',
    figureNumber: 'Figure H13-17',
    anchorChapter: 2,
    title: 'Experimental Proof Devices (D13-A–D13-F), TRL Matrix & 2026–2034 Decision Gates',
    category: 'CATEGORY C — CONJECTURAL',
    caption:
      'Synthesis of Table 13.3: standalone frontier tests (P14 CANNEX 10–38.6 μm, P16 LVK/ET echoes, P17 CHIME/CTAO) contrasted against standard QM/GR consistency benches (P15 optical clocks, P18 transmon GJW + QND/BKM calorimeter).',
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 360" width="760" height="360" style="background:#FFFFFF;font-family:'DejaVu Sans',sans-serif">
  <rect width="760" height="360" fill="#FFFFFF"/>
  <rect x="14" y="14" width="732" height="332" fill="#FFFFFF" stroke="#0F0D0B" stroke-width="1.1"/>
  <text x="380" y="42" text-anchor="middle" font-size="13" font-weight="bold" fill="#0F0D0B">PROOF DEVICES D13-A..F: TRL READINESS &amp; FALSIFICATION GATES</text>
  <line x1="40" y1="54" x2="720" y2="54" stroke="#8E7F6B" stroke-width="0.9"/>
  <rect x="38" y="76" width="218" height="92" rx="6" fill="#FAF8F4" stroke="#64705B" stroke-width="1.6"/>
  <text x="147" y="98" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#64705B">D13-A: Sr/Yb Clock Tower</text>
  <text x="147" y="118" text-anchor="middle" font-size="9.5" fill="#0F0D0B">TRL 8 · P15 (QM/GR Check)</text>
  <text x="147" y="138" text-anchor="middle" font-size="9" fill="#3A2E26">Res &lt; 1e-18 (Blinded Sync)</text>
  <rect x="271" y="76" width="218" height="92" rx="6" fill="#FAF8F4" stroke="#8F5B4A" stroke-width="1.6"/>
  <text x="380" y="98" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#8F5B4A">D13-B: CANNEX 10-38.6 um</text>
  <text x="380" y="118" text-anchor="middle" font-size="9.5" fill="#0F0D0B">TRL 6 · P14 (Frontier Gate)</text>
  <text x="380" y="138" text-anchor="middle" font-size="9" fill="#3A2E26">5-sigma |alpha_1| &lt; 0.5 Null</text>
  <rect x="504" y="76" width="218" height="92" rx="6" fill="#FAF8F4" stroke="#8F5B4A" stroke-width="1.6"/>
  <text x="613" y="98" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#8F5B4A">D13-C: Transmon GJW Bench</text>
  <text x="613" y="118" text-anchor="middle" font-size="9.5" fill="#0F0D0B">TRL 7 · P18 (QM Analog)</text>
  <text x="613" y="138" text-anchor="middle" font-size="9" fill="#3A2E26">F &gt; 0.72 Sign-Flip Control</text>
  <rect x="38" y="186" width="218" height="92" rx="6" fill="#FAF8F4" stroke="#0F0D0B" stroke-width="1.6"/>
  <text x="147" y="208" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#0F0D0B">D13-D: CHIME + CTAO Array</text>
  <text x="147" y="228" text-anchor="middle" font-size="9.5" fill="#0F0D0B">TRL 7-8 · P17 (Frontier Gate)</text>
  <text x="147" y="248" text-anchor="middle" font-size="9" fill="#3A2E26">FRB-TeV Bayes d ln Z &gt;= 5</text>
  <rect x="271" y="186" width="218" height="92" rx="6" fill="#FAF8F4" stroke="#64705B" stroke-width="1.6"/>
  <text x="380" y="208" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#64705B">D13-E: QND + BKM Calorimeter</text>
  <text x="380" y="228" text-anchor="middle" font-size="9.5" fill="#0F0D0B">TRL 7 · P18 (QM Baseline)</text>
  <text x="380" y="248" text-anchor="middle" font-size="9" fill="#3A2E26">V^2 + D^2 = 1 &amp; 2.871e-21 J/bit</text>
  <rect x="504" y="186" width="218" height="92" rx="6" fill="#FAF8F4" stroke="#0F0D0B" stroke-width="1.6"/>
  <text x="613" y="208" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#0F0D0B">D13-F: LVK O5 / ET Echoes</text>
  <text x="613" y="228" text-anchor="middle" font-size="9.5" fill="#0F0D0B">TRL 6-7 · P16 (Frontier Gate)</text>
  <text x="613" y="248" text-anchor="middle" font-size="9" fill="#3A2E26">dt_echo = 0.454 ms (10 M_sun)</text>
  <text x="380" y="315" text-anchor="middle" font-size="10.5" fill="#3A2E26">Standalone new-physics gates (P14, P16, P17) separated from QM/GR baselines (P15, P18).</text>
</svg>`
  }
];

export const H13PlateCard: React.FC<{ plate: H13PlateSpec }> = ({ plate }) => (
  <figure className="my-10 rounded-xl border border-[#D6CABE] dark:border-[#1E293B] bg-[#FFFFFF] dark:bg-[#0B1530] overflow-hidden shadow-xs">
    <div className="px-5 py-3 border-b border-[#EAE2D2] dark:border-[#1E293B] bg-[#FAF8F3] dark:bg-[#081026] flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono">
      <span className="text-[#8B4513] dark:text-[#FB923C] uppercase tracking-wider font-medium">
        {plate.figureNumber} · ARCHIVAL SCIENTIFIC PLATE
      </span>
      <span className="text-[#64748B] dark:text-[#94A3B8]">{plate.category}</span>
    </div>
    <div className="p-5 sm:p-7 space-y-4">
      <h4 className="font-['Playfair_Display'] font-normal text-xl text-[#0F172A] dark:text-[#FDFBF7]">
        <MathText text={plate.title} />
      </h4>
      <div className="rounded-lg border border-[#EAE2D2] dark:border-[#1E293B] bg-white p-2 flex items-center justify-center">
        <img
          src={plate.imagePath}
          alt={plate.title}
          className="w-full max-h-[460px] object-contain"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
      </div>
      <figcaption className="text-[13.5px] leading-[1.65] text-[#475569] dark:text-[#CBD9FC] italic">
        <MathText text={plate.description} />
      </figcaption>
    </div>
  </figure>
);

export const H13FigureCard: React.FC<{ figure: H13FigureSpec }> = ({ figure }) => {
  const formattedSvg = formatSvgMathMarkup(figure.svgMarkup);
  return (
    <figure className="my-9 rounded-xl border border-[#D6CABE] dark:border-[#1E293B] bg-[#FFFFFF] dark:bg-[#0B1530] overflow-hidden shadow-xs">
      <div className="px-5 py-3 border-b border-[#EAE2D2] dark:border-[#1E293B] bg-[#FAF8F3] dark:bg-[#081026] flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono">
        <span className="text-[#15803D] dark:text-[#4ADE80] uppercase tracking-wider font-medium">
          {figure.figureNumber} · VECTOR SCHEMATIC
        </span>
        <span className="text-[#64748B] dark:text-[#94A3B8]">{figure.category}</span>
      </div>
      <div className="p-5 sm:p-6 space-y-3">
        <h4 className="font-['Playfair_Display'] font-normal text-lg text-[#0F172A] dark:text-[#FDFBF7]">
          <MathText text={figure.title} />
        </h4>
        <div
          className="rounded-lg border border-[#EAE2D2] bg-white p-3 overflow-x-auto flex items-center justify-center"
          dangerouslySetInnerHTML={{ __html: formattedSvg }}
        />
        <figcaption className="text-[13px] leading-[1.62] text-[#475569] dark:text-[#CBD9FC] italic">
          <MathText text={figure.caption} />
        </figcaption>
      </div>
    </figure>
  );
};
