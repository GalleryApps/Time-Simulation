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
    anchorChapter: 1,
    title: 'Cosmic Code Stack: Quantum Information Lattice Compiling Local Light Cones & Clock Throttling',
    imagePath: plateCompilerImg,
    category: 'CATEGORY B — DERIVED',
    description:
      'Illustrates Principles 1, 2, 4, and 12: an underlying quantum register mesh compiles upward through discrete update slices into emergent curved spacetime and tilted observer light cones whose frame ticks compress wherever local information density peaks.'
  },
  {
    id: 'h13-plate-2',
    figureNumber: 'Plate H13-II',
    anchorChapter: 8,
    title: 'Dynamically Stabilized 5D Bulk Portal Bridge vs. Sealed Spherical Compression Vault',
    imagePath: platePortalImg,
    category: 'CATEGORY C — CONJECTURAL',
    description:
      'Contrasts a Class P2 stabilized 5D Einstein–Maxwell / Horndeski hourglass portal throat linking two curved 4D brane sheets across bulk coordinate y (left, η_fold ∈ [0.63662, 0.84147]) against an isolated Class S Hayward black-hole horizon (right) obeying standard NEC.'
  },
  {
    id: 'h13-plate-3',
    figureNumber: 'Plate H13-III',
    anchorChapter: 9,
    title: 'Black-Hole-to-White-Hole Hourglass Bounce Across a Limiting-Curvature Planck Core',
    imagePath: plateWhiteHoleImg,
    category: 'CATEGORY C — CONJECTURAL',
    description:
      'Cross-section of Principle 9: inward collapsing shells compress to non-singular capacity ceiling ρ_max = 0.4094 ρ_Pl (K_max = 48 / ℓ_Pl⁴), execute a split-second core rebound in proper time, and erupt into an expanding white-hole flare cone over τ_WH^(3) or τ_WH^(2).'
  },
  {
    id: 'h13-plate-4',
    figureNumber: 'Plate H13-IV',
    anchorChapter: 12,
    title: 'Unrendered Wave Branches, Append-Only Causal Chain & Autopoietic RES=RAG Life Loop',
    imagePath: plateAutopoieticImg,
    category: 'CATEGORY C — CONJECTURAL',
    description:
      'Synthesizes Principles 10, 11, and 12: uncompiled interference modes funnel through interaction into a locked append-only BKM causal log chain while a helical self-updating RES=RAG torus harvests free-energy gradients against ambient thermal noise.'
  },
  {
    id: 'h13-plate-5',
    figureNumber: 'Plate H13-V',
    anchorChapter: 2,
    title: 'Proof Apparatus D13-A: Differential Cryogenic ⁸⁷Sr / ¹⁷¹Yb Optical-Lattice Clock Tower',
    imagePath: plateDeviceOpticalClockImg,
    category: 'CATEGORY A — ESTABLISHED',
    description:
      'Vertical baseline proof instrument for Principle 2, Principle 4, and Protocol P15: dual 4 K shielded magneto-optical trap vacuum towers linked across Δh ≥ 100 m by phase-noise-canceled optical fiber verify gravitational frame throttling Δν/ν = gΔh/c² = 1.0911×10⁻¹⁶ m⁻¹ and KMS split-algebra synchronization.'
  },
  {
    id: 'h13-plate-6',
    figureNumber: 'Plate H13-VI',
    anchorChapter: 8,
    title: 'Proof Apparatus D13-B: Cryogenic CANNEX-Class Faraday-Shielded Sub-50 μm Planar Force Balance',
    imagePath: plateDeviceCannexImg,
    category: 'CATEGORY C — CONJECTURAL',
    description:
      'Precision short-range gravity probe for Protocol P14 and Appendix H: piezo-positioned gold-coated silicon test plates at 4.2 K separated by 10–44 μm with an interleaved 1 μm electrostatic Faraday shield and Fabry–Pérot cavity interferometer isolate Goldberger–Wise / Kaluza–Klein Yukawa couplings (m_1 ≥ 4.485 meV) from thermal Casimir drift.'
  },
  {
    id: 'h13-plate-7',
    figureNumber: 'Plate H13-VII',
    anchorChapter: 8,
    title: 'Proof Apparatus D13-C: Coupled Dual-Rail Transmon & Tunable Josephson GJW Portal Simulator',
    imagePath: plateDeviceGjwCavityImg,
    category: 'CATEGORY C — CONJECTURAL',
    description:
      'Laboratory quantum-analog apparatus for Theorem H13.8, Protocol P18, and Appendix I: two μ-metal shielded 3D superconducting transmon cavities (L and R) at 10 mK linked by a sign-tunable parametric Josephson coupler g_int O_L O_R verify negative-ANEC shockwave defocusing ΔU < 0, transfer fidelity F > 0.72, and strict causal preservation Δt_ext ≥ d_ext/c.'
  },
  {
    id: 'h13-plate-8',
    figureNumber: 'Plate H13-VIII',
    anchorChapter: 9,
    title: 'Proof Apparatus D13-D: Coordinated CHIME / DSA-2000 Radio Dispersion & CTAO Cherenkov TeV Array',
    imagePath: plateDeviceWhObservatoryImg,
    category: 'CATEGORY C — CONJECTURAL',
    description:
      'Multimessenger astrophysical testbed for Principle 9, Protocol P17, and Appendix J: low-latency (< 200 ms) wide-field radio dispersion filtering triggers Cherenkov TeV gamma-ray telescope follow-up to detect or falsify cubic-branch primordial white-hole bounces (M_crit ≈ 1.730×10¹⁴ g, τ_WH^(3) = 13.8 Gyr) via inverse-mass spectral-lag anticorrelations.'
  },
  {
    id: 'h13-plate-9',
    figureNumber: 'Plate H13-IX',
    anchorChapter: 10,
    title: 'Proof Apparatus D13-E: Weak-QND Double-Slit Interferometer & Nanoscale BKM Calorimeter',
    imagePath: plateDeviceQfiCalorimeterImg,
    category: 'CATEGORY A — ESTABLISHED',
    description:
      'Integrated quantum-information and thermodynamic testbench for Principles 10–11, Theorems H13.10–H13.11, and Protocol P18: tunable weak QND microwave cavity coupling sweeps interference visibility V against Fisher distinguishability D_QFI on V² + D_QFI² = 1 while an AuPd Coulomb-blockade nanothermometer resolves append-only Landauer erasure heat ≥ 2.871×10⁻²¹ J/bit.'
  }
];

export const H13_FIGURES: H13FigureSpec[] = [
  {
    id: 'h13-fig-1',
    figureNumber: 'Figure H13-1',
    anchorChapter: 1,
    title: 'Frame-by-Frame Cosmic Software vs. Static Block Container',
    category: 'CATEGORY B — DERIVED',
    caption:
      'Discrete Fisher–Rao step lengths ds_QFI along projective Hilbert space PU(H) render sequential frames of τ_obs whenever states change distinguishably (τ_step = 2ℏ / (E_mod σ_1)).',
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 360" width="760" height="360" style="background:#FFFFFF;font-family:'DejaVu Sans',sans-serif">
  <rect width="760" height="360" fill="#FFFFFF"/>
  <rect x="14" y="14" width="732" height="332" fill="#FFFFFF" stroke="#0F0D0B" stroke-width="1.1"/>
  <text x="380" y="42" text-anchor="middle" font-size="13.5" font-weight="bold" fill="#0F0D0B">COSMIC OPERATING SOFTWARE: FRAME-BY-FRAME QFI COMPILATION</text>
  <line x1="40" y1="54" x2="720" y2="54" stroke="#8E7F6B" stroke-width="0.9"/>
  <rect x="52" y="96" width="135" height="145" rx="6" fill="#FAF8F4" stroke="#64705B" stroke-width="1.8"/>
  <text x="119" y="122" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#64705B">Frame N (rho_0)</text>
  <circle cx="119" cy="172" r="32" fill="none" stroke="#0F0D0B" stroke-width="1.5"/>
  <circle cx="136" cy="154" r="5" fill="#8F5B4A"/>
  <path d="M 192 168 L 272 168" stroke="#8F5B4A" stroke-width="2.4"/>
  <polygon points="278,168 266,162 266,174" fill="#8F5B4A"/>
  <text x="235" y="154" text-anchor="middle" font-size="10" font-weight="bold" fill="#8F5B4A">ds_QFI &gt; 0</text>
  <rect x="284" y="96" width="145" height="145" rx="6" fill="#FAF8F4" stroke="#64705B" stroke-width="1.8"/>
  <text x="356" y="122" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#64705B">Frame N+1 (rho_1)</text>
  <circle cx="356" cy="172" r="32" fill="none" stroke="#0F0D0B" stroke-width="1.5"/>
  <circle cx="384" cy="172" r="5" fill="#8F5B4A"/>
  <path d="M 434 168 L 514 168" stroke="#64705B" stroke-width="2.2" stroke-dasharray="4,3"/>
  <polygon points="520,168 508,162 508,174" fill="#64705B"/>
  <text x="477" y="154" text-anchor="middle" font-size="10" font-weight="bold" fill="#64705B">dt_obs = hbar*ds / E_mod</text>
  <rect x="526" y="96" width="182" height="145" rx="6" fill="#FAF8F4" stroke="#0F0D0B" stroke-width="1.8"/>
  <text x="617" y="122" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#0F0D0B">Freeze Check (H*Psi=0)</text>
  <text x="617" y="160" text-anchor="middle" font-size="10.5" fill="#3A2E26">If ds_QFI = 0:</text>
  <text x="617" y="182" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#8F5B4A">Zero Frame Rendered</text>
  <text x="617" y="210" text-anchor="middle" font-size="9.5" fill="#64705B">tau_step = 5.391e-44 s (Planck)</text>
  <text x="380" y="305" text-anchor="middle" font-size="11" fill="#3A2E26">Time renders only when quantum states move distinguishably on PU(H).</text>
</svg>`
  },
  {
    id: 'h13-fig-2',
    figureNumber: 'Figure H13-2',
    anchorChapter: 2,
    title: 'Gravity as Frame-Rate Throttling Near Dense Information Regions',
    category: 'CATEGORY A — ESTABLISHED',
    caption:
      'High local Araki modular entropy density ψ²/κ_ψ throttles α_mod = √(1 − 2GM/(c²r)), causing matter waves to refract toward slower clock rates.',
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 360" width="760" height="360" style="background:#FFFFFF;font-family:'DejaVu Sans',sans-serif">
  <rect width="760" height="360" fill="#FFFFFF"/>
  <rect x="14" y="14" width="732" height="332" fill="#FFFFFF" stroke="#0F0D0B" stroke-width="1.1"/>
  <text x="380" y="42" text-anchor="middle" font-size="13.5" font-weight="bold" fill="#0F0D0B">GRAVITY AS FRAME-RATE THROTTLING: alpha_mod = sqrt(-g_00)</text>
  <line x1="40" y1="54" x2="720" y2="54" stroke="#8E7F6B" stroke-width="0.9"/>
  <line x1="90" y1="275" x2="670" y2="275" stroke="#0F0D0B" stroke-width="1.6"/>
  <line x1="90" y1="90" x2="90" y2="275" stroke="#0F0D0B" stroke-width="1.6"/>
  <path d="M 110 265 Q 230 230 330 165 T 650 112" fill="none" stroke="#8F5B4A" stroke-width="3"/>
  <circle cx="155" cy="242" r="5" fill="#8F5B4A"/>
  <text x="172" y="236" font-size="10.5" fill="#8F5B4A" font-weight="bold">Horizon (alpha_mod -&gt; 0, Slowest Frame)</text>
  <circle cx="585" cy="116" r="5" fill="#64705B"/>
  <text x="485" y="102" font-size="10.5" fill="#64705B" font-weight="bold">Deep Space (alpha_mod -&gt; 1.00, 100% Rate)</text>
  <text x="380" y="308" text-anchor="middle" font-size="11" fill="#3A2E26">Optical clock lab rate: d tau / tau = 1.0911e-16 per vertical meter.</text>
</svg>`
  },
  {
    id: 'h13-fig-3',
    figureNumber: 'Figure H13-3',
    anchorChapter: 3,
    title: 'Space as Network Sync Latency Across Entangled AQFT Diamonds',
    category: 'CATEGORY B — DERIVED',
    caption:
      'Operational distance d(A,B) scales inversely with mutual information I(A:B), making spatial separation a measure of channel latency.',
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
    anchorChapter: 4,
    title: 'Split Type I Local Algebras: No Universal "Now" Execution Thread',
    category: 'CATEGORY A — ESTABLISHED',
    caption:
      'Observers A and B run independent KMS clock generators K_{ξ,A} and K_{ξ,B} with spacelike commutativity [O_A, O_B] = 0.',
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 360" width="760" height="360" style="background:#FFFFFF;font-family:'DejaVu Sans',sans-serif">
  <rect width="760" height="360" fill="#FFFFFF"/>
  <rect x="14" y="14" width="732" height="332" fill="#FFFFFF" stroke="#0F0D0B" stroke-width="1.1"/>
  <text x="380" y="42" text-anchor="middle" font-size="13.5" font-weight="bold" fill="#0F0D0B">OBSERVER-LOCAL SOFTWARE INSTANCES: [O_A, O_B] = 0</text>
  <line x1="40" y1="54" x2="720" y2="54" stroke="#8E7F6B" stroke-width="0.9"/>
  <rect x="75" y="100" width="250" height="150" rx="8" fill="#FAF8F4" stroke="#0F0D0B" stroke-width="1.8"/>
  <text x="200" y="130" text-anchor="middle" font-size="12" font-weight="bold" fill="#0F0D0B">Observer A Thread (Ground)</text>
  <text x="200" y="160" text-anchor="middle" font-size="10.5" fill="#64705B">Type I Algebra N_A · KMS K_A</text>
  <text x="200" y="190" text-anchor="middle" font-size="10.5" fill="#3A2E26">Local tick tau_A</text>
  <rect x="435" y="100" width="250" height="150" rx="8" fill="#FAF8F4" stroke="#8F5B4A" stroke-width="1.8"/>
  <text x="560" y="130" text-anchor="middle" font-size="12" font-weight="bold" fill="#8F5B4A">Observer B Thread (GPS Orbit)</text>
  <text x="560" y="160" text-anchor="middle" font-size="10.5" fill="#64705B">Type I Algebra N_B · KMS K_B</text>
  <text x="560" y="190" text-anchor="middle" font-size="10.5" fill="#3A2E26">+38.6 us/day offset before sync</text>
  <path d="M 328 175 L 432 175" stroke="#64705B" stroke-width="2.2"/>
  <polygon points="432,175 421,170 421,180" fill="#64705B"/>
  <polygon points="328,175 339,170 339,180" fill="#64705B"/>
  <text x="380" y="158" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#64705B">Light-Cone Packet</text>
  <text x="380" y="305" text-anchor="middle" font-size="11" fill="#3A2E26">Synchronization happens exclusively via physical channel exchange.</text>
</svg>`
  },
  {
    id: 'h13-fig-5',
    figureNumber: 'Figure H13-5',
    anchorChapter: 5,
    title: 'Renormalization Group Fixed-Point Attractors: Physical Laws as Subroutines',
    category: 'CATEGORY B — DERIVED',
    caption:
      'Microscopic degrees of freedom flow under RG coarse-graining onto stable macroscopic subroutines (Einstein–Horndeski EFT + Chentsov Fisher metric).',
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
    anchorChapter: 6,
    title: 'Planck Tick vs. Neural Cached Log File Integration Window',
    category: 'CATEGORY B — DERIVED',
    caption:
      'Macroscopic instruments and brains average over ~1.48×10⁴² Planck compilation cycles via decoherence and BKM thermal log caching.',
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 360" width="760" height="360" style="background:#FFFFFF;font-family:'DejaVu Sans',sans-serif">
  <rect width="760" height="360" fill="#FFFFFF"/>
  <rect x="14" y="14" width="732" height="332" fill="#FFFFFF" stroke="#0F0D0B" stroke-width="1.1"/>
  <text x="380" y="42" text-anchor="middle" font-size="13.5" font-weight="bold" fill="#0F0D0B">CACHED REALITY LOGS: 42 ORDERS OF COARSE-GRAINING</text>
  <line x1="40" y1="54" x2="720" y2="54" stroke="#8E7F6B" stroke-width="0.9"/>
  <rect x="70" y="105" width="180" height="125" rx="6" fill="#FAF8F4" stroke="#0F0D0B" stroke-width="1.6"/>
  <text x="160" y="138" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#0F0D0B">Raw Planck Tick</text>
  <text x="160" y="168" text-anchor="middle" font-size="11" fill="#8F5B4A">5.391 x 10^-44 s</text>
  <text x="160" y="198" text-anchor="middle" font-size="9.5" fill="#64705B">Unobserved Live Execution</text>
  <path d="M 255 168 L 325 168" stroke="#8F5B4A" stroke-width="2.2"/>
  <polygon points="330,168 318,162 318,174" fill="#8F5B4A"/>
  <rect x="335" y="105" width="150" height="125" rx="6" fill="#FAF8F4" stroke="#64705B" stroke-width="1.6"/>
  <text x="410" y="142" text-anchor="middle" font-size="11" font-weight="bold" fill="#64705B">BKM Decoherence</text>
  <text x="410" y="172" text-anchor="middle" font-size="10" fill="#3A2E26">Pointer Log Lock</text>
  <text x="410" y="196" text-anchor="middle" font-size="9.5" fill="#8E7F6B">~10^-21 to 10^-15 s</text>
  <path d="M 490 168 L 545 168" stroke="#64705B" stroke-width="2.2"/>
  <polygon points="550,168 538,162 538,174" fill="#64705B"/>
  <rect x="555" y="105" width="145" height="125" rx="6" fill="#FAF8F4" stroke="#8F5B4A" stroke-width="1.8"/>
  <text x="627" y="138" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#8F5B4A">Cached Human Log</text>
  <text x="627" y="168" text-anchor="middle" font-size="11" fill="#0F0D0B">~80 ms Window</text>
  <text x="627" y="198" text-anchor="middle" font-size="9.5" fill="#3A2E26">1.48e42 ticks/frame</text>
  <text x="380" y="305" text-anchor="middle" font-size="11" fill="#3A2E26">Conscious experience reads coarse-grained, already-compiled pointer records.</text>
</svg>`
  },
  {
    id: 'h13-fig-7',
    figureNumber: 'Figure H13-7',
    anchorChapter: 7,
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
    anchorChapter: 8,
    title: '5D Einstein–Maxwell Portal Ratio & Sealed Hayward Core Distinction',
    category: 'CATEGORY C — CONJECTURAL',
    caption:
      'Compares static bulk slow-down (1.00125) and neutral symmetric RS (1.000) against dynamically stabilized Einstein–Maxwell bulk portal shortcuts (0.84147 finite span; 0.63662 horizon limit).',
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
  <text x="377" y="175" text-anchor="middle" font-size="13" font-weight="bold" fill="#64705B">0.84147</text>
  <text x="377" y="205" text-anchor="middle" font-size="9.5" fill="#3A2E26">(15.85% Shortcut)</text>
  <rect x="510" y="102" width="165" height="140" fill="#FAF8F4" stroke="#8F5B4A" stroke-width="2"/>
  <text x="592" y="145" text-anchor="middle" font-size="11" font-weight="bold" fill="#8F5B4A">5D Horizon 2/pi</text>
  <text x="592" y="175" text-anchor="middle" font-size="13" font-weight="bold" fill="#8F5B4A">0.63662</text>
  <text x="592" y="205" text-anchor="middle" font-size="9.5" fill="#3A2E26">(36.34% Shortcut)</text>
  <text x="380" y="305" text-anchor="middle" font-size="11" fill="#3A2E26">Dynamic radion stabilization within R_5 &lt;= 44 um avoids static H12 blocks.</text>
</svg>`
  },
  {
    id: 'h13-fig-9',
    figureNumber: 'Figure H13-9',
    anchorChapter: 9,
    title: 'White-Hole Bounce Timescale Hierarchy Across Black-Hole Mass Scales',
    category: 'CATEGORY C — CONJECTURAL',
    caption:
      'Log-log scaling comparing sub-millisecond interior frame bounces against cubic τ_WH^(3) and quadratic τ_WH^(2) exterior delays intersecting 13.8 Gyr today.',
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
  <text x="242" y="155" text-anchor="middle" font-size="9.8" font-weight="bold" fill="#8F5B4A">Cubic M = 1.73e14 g</text>
  <circle cx="435" cy="175" r="6" fill="#0F0D0B"/>
  <text x="455" y="196" text-anchor="middle" font-size="9.8" font-weight="bold" fill="#0F0D0B">Quadratic M = 6.18e25 g</text>
  <text x="380" y="305" text-anchor="middle" font-size="11" fill="#3A2E26">Protocol P17 searches CHIME FRBs &amp; CTAO TeV gamma flares at cubic PBH bounce scale.</text>
</svg>`
  },
  {
    id: 'h13-fig-10',
    figureNumber: 'Figure H13-10',
    anchorChapter: 10,
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
    anchorChapter: 11,
    title: 'Append-Only BKM Dissipation Arrow: d S_Araki / dτ ≤ 0',
    category: 'CATEGORY B — DERIVED',
    caption:
      'Bogoliubov–Kubo–Mori contraction drives open quantum trajectories strictly forward onto classicalized attractors.',
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
  <text x="380" y="305" text-anchor="middle" font-size="11" fill="#3A2E26">Spontaneous un-compilation is blocked by BKM open-channel dissipation.</text>
</svg>`
  },
  {
    id: 'h13-fig-12',
    figureNumber: 'Figure H13-12',
    anchorChapter: 12,
    title: 'Code-First Compilation Pipeline & Protocols P14–P18 Decision Architecture',
    category: 'CATEGORY C — CONJECTURAL',
    caption:
      'Summarizes Principle 12 (PU(H) + K_ξ compiling G_μν and T_μν), autopoietic RES=RAG resilience, and five experimental test gates (P14–P18).',
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 360" width="760" height="360" style="background:#FFFFFF;font-family:'DejaVu Sans',sans-serif">
  <rect width="760" height="360" fill="#FFFFFF"/>
  <rect x="14" y="14" width="732" height="332" fill="#FFFFFF" stroke="#0F0D0B" stroke-width="1.1"/>
  <text x="380" y="42" text-anchor="middle" font-size="13.5" font-weight="bold" fill="#0F0D0B">CODE-FIRST ONTOLOGY &amp; PROTOCOLS P14-P18 TEST GATEWAY</text>
  <line x1="40" y1="54" x2="720" y2="54" stroke="#8E7F6B" stroke-width="0.9"/>
  <rect x="65" y="95" width="180" height="140" rx="6" fill="#FAF8F4" stroke="#0F0D0B" stroke-width="1.8"/>
  <text x="155" y="132" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#0F0D0B">Informational Code</text>
  <text x="155" y="160" text-anchor="middle" font-size="10" fill="#64705B">PU(H), K_xi, S_Araki</text>
  <text x="155" y="190" text-anchor="middle" font-size="10" fill="#8F5B4A">RES=RAG Autopoiesis</text>
  <path d="M 250 165 L 305 165" stroke="#8F5B4A" stroke-width="2.4"/>
  <polygon points="310,165 298,159 298,171" fill="#8F5B4A"/>
  <rect x="315" y="95" width="175" height="140" rx="6" fill="#FAF8F4" stroke="#64705B" stroke-width="1.8"/>
  <text x="402" y="132" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#64705B">Compiled Physics</text>
  <text x="402" y="160" text-anchor="middle" font-size="10" fill="#0F0D0B">g_uv, 5D Bulk, WH</text>
  <text x="402" y="190" text-anchor="middle" font-size="10" fill="#3A2E26">Class P Portal Nodes</text>
  <path d="M 495 165 L 545 165" stroke="#64705B" stroke-width="2.4"/>
  <polygon points="550,165 538,159 538,171" fill="#64705B"/>
  <rect x="555" y="95" width="150" height="140" rx="6" fill="#FAF8F4" stroke="#8F5B4A" stroke-width="1.8"/>
  <text x="630" y="132" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#8F5B4A">Tests P14-P18</text>
  <text x="630" y="160" text-anchor="middle" font-size="9.5" fill="#0F0D0B">10-44 um Force / Sr</text>
  <text x="630" y="186" text-anchor="middle" font-size="9.5" fill="#0F0D0B">LVK Echo / CHIME FRB</text>
  <text x="380" y="305" text-anchor="middle" font-size="11" fill="#3A2E26">Informational equilibrium compiles geometry downward; P14-P18 test all extensions.</text>
</svg>`
  },
  {
    id: 'h13-fig-13',
    figureNumber: 'Figure H13-13',
    anchorChapter: 5,
    title: 'Unified 5D + 4D Action Architecture & Bianchi Conservation Closure (Appendix G)',
    category: 'CATEGORY B — DERIVED',
    caption:
      'Five variational sectors of S_H13 (Einstein–Hilbert + Goldberger–Wise radion + Type Ia Horndeski braiding + 5D Einstein–Maxwell flux + split-algebra matter/BKM) converge to c_GW = c and exact covariant closure ∇^μ(T_μν + I_μν − E_μν^(5)/8πG) = 0.',
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
  <text x="240" y="142" text-anchor="middle" font-size="8.8" fill="#64705B">Locks R_5 &lt;= 44 um</text>
  <rect x="318" y="76" width="132" height="92" rx="5" fill="#FAF8F4" stroke="#8F5B4A" stroke-width="1.5"/>
  <text x="384" y="100" text-anchor="middle" font-size="10.2" font-weight="bold" fill="#8F5B4A">3. Type Ia Horndeski</text>
  <text x="384" y="120" text-anchor="middle" font-size="9.5" fill="#3A2E26">G_4(phi)R + G_3 Box</text>
  <text x="384" y="142" text-anchor="middle" font-size="8.8" fill="#8F5B4A">c_GW = c Locked</text>
  <rect x="462" y="76" width="132" height="92" rx="5" fill="#FAF8F4" stroke="#64705B" stroke-width="1.5"/>
  <text x="528" y="100" text-anchor="middle" font-size="10.2" font-weight="bold" fill="#64705B">4. 5D Maxwell Flux</text>
  <text x="528" y="120" text-anchor="middle" font-size="9.5" fill="#3A2E26">-1/4 F_AB F^AB</text>
  <text x="528" y="142" text-anchor="middle" font-size="8.8" fill="#64705B">Asymmetric Warp</text>
  <rect x="606" y="76" width="120" height="92" rx="5" fill="#FAF8F4" stroke="#0F0D0B" stroke-width="1.5"/>
  <text x="666" y="100" text-anchor="middle" font-size="10.2" font-weight="bold" fill="#0F0D0B">5. AQFT / BKM</text>
  <text x="666" y="120" text-anchor="middle" font-size="9.5" fill="#3A2E26">L_SM + I_info</text>
  <text x="666" y="142" text-anchor="middle" font-size="8.8" fill="#3A2E26">Type I Modular Flow</text>
  <path d="M 98 172 L 98 205 L 666 205 L 666 172" fill="none" stroke="#8E7F6B" stroke-width="1.4"/>
  <line x1="240" y1="172" x2="240" y2="205" stroke="#8E7F6B" stroke-width="1.4"/>
  <line x1="384" y1="172" x2="384" y2="205" stroke="#8E7F6B" stroke-width="1.4"/>
  <line x1="528" y1="172" x2="528" y2="205" stroke="#8E7F6B" stroke-width="1.4"/>
  <path d="M 380 205 L 380 232" stroke="#8F5B4A" stroke-width="2.2"/>
  <polygon points="380,238 374,227 386,227" fill="#8F5B4A"/>
  <rect x="115" y="242" width="530" height="52" rx="6" fill="#FAF8F4" stroke="#8F5B4A" stroke-width="1.8"/>
  <text x="380" y="264" text-anchor="middle" font-size="11" font-weight="bold" fill="#0F0D0B">Variational Closure: G_uv^(4) = 8 pi G (T_uv^SM + T_uv^psi + I_uv^info) + E_uv^(5)</text>
  <text x="380" y="283" text-anchor="middle" font-size="10" fill="#64705B">No-Ghost Sign: 1 + 2*G_4,X / M_Pl^2 = 1 exactly (G_4,X = G_5 = 0)</text>
  <text x="380" y="322" text-anchor="middle" font-size="10.5" fill="#3A2E26">Contracted Bianchi identity nabla^u G_uv = 0 guarantees energy-momentum-information conservation.</text>
</svg>`
  },
  {
    id: 'h13-fig-14',
    figureNumber: 'Figure H13-14',
    anchorChapter: 8,
    title: 'Kaluza–Klein Yukawa Exclusion Plot & Uncharted 10–44 μm Window (Appendix H)',
    category: 'CATEGORY C — CONJECTURAL',
    caption:
      'Log-log exclusion boundary |α_1| vs. compactification scale R_5 comparing Eöt-Wash torsion-balance limits (R_5 ≤ 44 μm at |α_1|=1; m_1 = 4.485 meV) against Protocol P14 / CANNEX cryogenic plate reach across 10–44 μm.',
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 360" width="760" height="360" style="background:#FFFFFF;font-family:'DejaVu Sans',sans-serif">
  <rect width="760" height="360" fill="#FFFFFF"/>
  <rect x="14" y="14" width="732" height="332" fill="#FFFFFF" stroke="#0F0D0B" stroke-width="1.1"/>
  <text x="380" y="42" text-anchor="middle" font-size="13" font-weight="bold" fill="#0F0D0B">KK YUKAWA BOUNDS: EOT-WASH WALL (44 um) &amp; CANNEX P14 WINDOW</text>
  <line x1="40" y1="54" x2="720" y2="54" stroke="#8E7F6B" stroke-width="0.9"/>
  <line x1="105" y1="265" x2="665" y2="265" stroke="#0F0D0B" stroke-width="1.6"/>
  <line x1="105" y1="84" x2="105" y2="265" stroke="#0F0D0B" stroke-width="1.6"/>
  <rect x="445" y="88" width="215" height="176" fill="#8F5B4A" opacity="0.14"/>
  <line x1="445" y1="88" x2="445" y2="265" stroke="#8F5B4A" stroke-width="2.2" stroke-dasharray="5,3"/>
  <text x="552" y="122" text-anchor="middle" font-size="10.2" font-weight="bold" fill="#8F5B4A">Excluded by Eot-Wash</text>
  <text x="552" y="140" text-anchor="middle" font-size="9.5" fill="#8F5B4A">(R_5 &gt; 44 um at |a_1|=1)</text>
  <rect x="260" y="148" width="185" height="116" fill="#64705B" opacity="0.14"/>
  <text x="352" y="180" text-anchor="middle" font-size="10.2" font-weight="bold" fill="#64705B">Open H13 Window</text>
  <text x="352" y="198" text-anchor="middle" font-size="9.5" fill="#0F0D0B">10 - 44 um (P14 CANNEX)</text>
  <path d="M 145 96 Q 310 140 445 205 T 640 248" fill="none" stroke="#0F0D0B" stroke-width="2.6"/>
  <circle cx="445" cy="205" r="5" fill="#8F5B4A"/>
  <text x="435" y="224" text-anchor="end" font-size="9.5" font-weight="bold" fill="#0F0D0B">m_1 = 4.485 meV (44 um)</text>
  <text x="385" y="290" text-anchor="middle" font-size="10" fill="#3A2E26">Compactification Radius R_5 (1 um  ---&gt;  10 um  ---&gt;  44 um  ---&gt;  100 um)</text>
  <text x="380" y="316" text-anchor="middle" font-size="10.5" fill="#64705B">LHC (&gt;TeV), SN1987A &amp; GW170817 remain trivially satisfied for R_5 &lt;= 44 um (M_5 ~ 1.6e8 GeV).</text>
</svg>`
  },
  {
    id: 'h13-fig-15',
    figureNumber: 'Figure H13-15',
    anchorChapter: 8,
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
    anchorChapter: 9,
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
  <text x="645" y="230" text-anchor="end" font-size="9.5" font-weight="bold" fill="#64705B">u = 1 (rho_max = 0.4094 rho_Pl)</text>
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
    anchorChapter: 12,
    title: 'Experimental Proof Devices (D13-A–D13-F), TRL Matrix & 2026–2034 Decision Gates',
    category: 'CATEGORY C — CONJECTURAL',
    caption:
      'Synthesis of Table 12.3: six experimental proof instruments (Optical Clock Tower, CANNEX Balance, Josephson GJW Simulator, CHIME/CTAO Trigger, QND-BKM Calorimeter, and LVK/ET Ringdown Archive) mapped to TRL readiness and Δ ln Z ≥ 5 confirmation gates.',
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 360" width="760" height="360" style="background:#FFFFFF;font-family:'DejaVu Sans',sans-serif">
  <rect width="760" height="360" fill="#FFFFFF"/>
  <rect x="14" y="14" width="732" height="332" fill="#FFFFFF" stroke="#0F0D0B" stroke-width="1.1"/>
  <text x="380" y="42" text-anchor="middle" font-size="13" font-weight="bold" fill="#0F0D0B">PROOF DEVICES D13-A..F: TRL READINESS &amp; 2026-2034 FALSIFICATION ROADMAP</text>
  <line x1="40" y1="54" x2="720" y2="54" stroke="#8E7F6B" stroke-width="0.9"/>
  <rect x="38" y="76" width="218" height="92" rx="6" fill="#FAF8F4" stroke="#64705B" stroke-width="1.6"/>
  <text x="147" y="98" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#64705B">D13-A: Sr/Yb Clock Tower</text>
  <text x="147" y="118" text-anchor="middle" font-size="9.5" fill="#0F0D0B">TRL 8 · P15 (Ch. 2, 4, 7)</text>
  <text x="147" y="138" text-anchor="middle" font-size="9" fill="#3A2E26">Res &lt; 1e-18 (Blinded Sync)</text>
  <rect x="271" y="76" width="218" height="92" rx="6" fill="#FAF8F4" stroke="#8F5B4A" stroke-width="1.6"/>
  <text x="380" y="98" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#8F5B4A">D13-B: CANNEX 10-44 um</text>
  <text x="380" y="118" text-anchor="middle" font-size="9.5" fill="#0F0D0B">TRL 6 · P14 (Ch. 8, App. H)</text>
  <text x="380" y="138" text-anchor="middle" font-size="9" fill="#3A2E26">5-sigma |alpha_1| &lt; 0.5 Null</text>
  <rect x="504" y="76" width="218" height="92" rx="6" fill="#FAF8F4" stroke="#8F5B4A" stroke-width="1.6"/>
  <text x="613" y="98" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#8F5B4A">D13-C: Transmon GJW Bench</text>
  <text x="613" y="118" text-anchor="middle" font-size="9.5" fill="#0F0D0B">TRL 7 · P18 (Ch. 8, App. I)</text>
  <text x="613" y="138" text-anchor="middle" font-size="9" fill="#3A2E26">Delta U &lt; 0, F &gt; 0.72 Sign Test</text>
  <rect x="38" y="186" width="218" height="92" rx="6" fill="#FAF8F4" stroke="#0F0D0B" stroke-width="1.6"/>
  <text x="147" y="208" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#0F0D0B">D13-D: CHIME + CTAO Array</text>
  <text x="147" y="228" text-anchor="middle" font-size="9.5" fill="#0F0D0B">TRL 7-8 · P17 (Ch. 9, App. J)</text>
  <text x="147" y="248" text-anchor="middle" font-size="9" fill="#3A2E26">FRB-TeV Bayes d ln Z &gt;= 5</text>
  <rect x="271" y="186" width="218" height="92" rx="6" fill="#FAF8F4" stroke="#64705B" stroke-width="1.6"/>
  <text x="380" y="208" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#64705B">D13-E: QND + BKM Calorimeter</text>
  <text x="380" y="228" text-anchor="middle" font-size="9.5" fill="#0F0D0B">TRL 7 · P18 (Ch. 10, 11)</text>
  <text x="380" y="248" text-anchor="middle" font-size="9" fill="#3A2E26">V^2 + D^2 = 1 &amp; 2.871e-21 J/bit</text>
  <rect x="504" y="186" width="218" height="92" rx="6" fill="#FAF8F4" stroke="#0F0D0B" stroke-width="1.6"/>
  <text x="613" y="208" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#0F0D0B">D13-F: LVK O5 / ET Echoes</text>
  <text x="613" y="228" text-anchor="middle" font-size="9.5" fill="#0F0D0B">TRL 6-7 · P16 (Ch. 9, App. J)</text>
  <text x="613" y="248" text-anchor="middle" font-size="9" fill="#3A2E26">K_echo = 0.184 (&gt;= 30 Mergers)</text>
  <text x="380" y="315" text-anchor="middle" font-size="10.5" fill="#3A2E26">All Frontier Claims (Cat C) require pre-registered blinding, null controls &amp; open raw archive release.</text>
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
