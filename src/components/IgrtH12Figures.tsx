/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * IGRT-H12 Archival Plates, Expanded Chapter Vector Diagrams & Devices A–K Illustrations:
 * - Preserves BOTH user-provided plates from /assets/aistudio/ untouched
 * - Provides 24+ full-detail white-background muted-earth + black scientific vector
 *   diagrams across ALL 13 chapters (Chapters 1–13, >= 2 diagrams per chapter)
 * - Provides all 11 Appendix J device quantitative schematics (Figures H12-J1 .. H12-J11)
 *   AND all 11 high-resolution scientific cutaway illustrations (Devices A–K)
 */

import React from 'react';
import type { H12EpistemicCategory } from '../types/igrtH12Apparatus';
import { MathText } from './MathText';
import { H12_EXPANDED_CHAPTER_FIGURES } from './igrtH12ExpandedDiagrams';
import deviceAImg from '../assets/images/device_a_qfi_clock_1795148324549.jpg';
import deviceBImg from '../assets/images/device_b_cannex_balance_1795148324240.jpg';
import deviceCImg from '../assets/images/device_c_grin_slab_1795148326060.jpg';
import deviceDImg from '../assets/images/device_d_doubleslit_qfi_1795148324972.jpg';
import deviceEImg from '../assets/images/device_e_gw_scrambler_1795148325079.jpg';
import deviceFImg from '../assets/images/device_f_bec_waterfall_1795148325079.jpg';
import deviceGImg from '../assets/images/device_g_portal_cavity_1795148345329.jpg';
import deviceHImg from '../assets/images/device_h_timemachine_loop_1795148324942.jpg';
import deviceIImg from '../assets/images/device_i_vacuum_harvester_1795148345953.jpg';
import deviceJImg from '../assets/images/device_j_unruh_engine_1795148325014.jpg';
import deviceKImg from '../assets/images/device_k_weyl_bridge_1795148325002.jpg';

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

export interface H12DeviceFigureSpec {
  id: string;
  deviceId: string;
  figureNumber: string;
  title: string;
  category: H12EpistemicCategory;
  caption: string;
  svgMarkup: string;
  illustrationPath?: string;
  illustrationTitle?: string;
  illustrationFilename?: string;
}

/**
 * Only user-provided illustrations remain in H12_ARCHIVAL_PLATES.
 */
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
      'User-provided conceptual synthesis illustrating the hierarchical relationship between a higher-dimensional 5D bulk brane (top sheet), our 4D spacetime layer (middle sheet), and the local quantum fiber H (bottom oscillators), alongside double-slit superposition, Pauli exclusion antisymmetry, barrier tunneling, and topological-qubit metaphors. Formal distinction note: the visual "portal" transition on the right represents Category C/D resonant state coupling rather than a Category A/B physical wormhole—exact NEC constraints (10⁻⁷¹ Casimir deficit at 1 m) and the Born rule (Category A) are treated rigorously in Chapters 6–7.'
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
      'User-provided architectural atlas juxtaposing the compactified 5D bulk (M_5 = M_4 × K_1), the 4D Lorentzian fabric (G_{μν} = 8π G T_{μν} + Λ g_{μν}), the Kaluza–Klein information-geometric metric ds² = g_{μν} dx^μ dx^ν + Φ²(dy + A_μ dx^μ)², modular proper-time folding Δτ = ∮ α_mod ds_QFI, dimensional closure torus, and hypothetical frequency-matched "resonance portals" (4D → 5D/3D/2D/0D). Formal epistemic caveat: while resonant mode coupling and optical/BEC analog simulators (Devices C, F & G) operate on rigorous dispersive metrics (Category B/D), macroscopic traversal between spacetime sheets remains unestablished (Category C/D) and strictly governed by 5D microcausality and null energy theorems.'
  }
];

/**
 * Core 10 Architectural Vector Diagrams (Upgraded to Full-Page White Background, Black Ink & Muted Earth Palette)
 */
const CORE_H12_FIGURES: H12FigureSpec[] = [
  {
    id: 'h12-fig-1',
    figureNumber: 'Figure H12-1',
    anchorChapter: 1,
    title: 'Minimalist Bundle Geometry: 4D Brane M_4, Bulk Coordinate y & Orthogonal Fiber PU(H)',
    category: 'CATEGORY B — DERIVED',
    caption:
      'Geometric decoupling theorem proved in §2.1: extending the 4D spacetime base (M_4, g_μν) along a physical fifth dimension y does not tilt or twist the internal projective-Hilbert fiber PU(H). Cross-metric components vanish identically (G_{Ai} = 0 for A ∈ {0..4}), keeping the H11 SLD Fisher metric independent of bulk position y.',
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 440" width="760" height="440" style="background:#FFFFFF;font-family:'DejaVu Sans','DejaVu Serif',Georgia,sans-serif">
  <rect x="0" y="0" width="760" height="440" fill="#FFFFFF"/>
  <rect x="14" y="14" width="732" height="412" fill="#FFFFFF" stroke="#0F0D0B" stroke-width="1.2"/>
  <text x="380" y="42" text-anchor="middle" font-size="14" font-weight="bold" fill="#0F0D0B">ORTHOGONAL PRINCIPAL BUNDLE DECOMPOSITION: P_5 -&gt; M_4 x K_1 (G_Ai = 0)</text>
  <line x1="36" y1="54" x2="724" y2="54" stroke="#8E7F6B" stroke-width="0.9"/>

  <!-- 5D Bulk Frame & 4D Brane -->
  <polygon points="75,305 265,240 505,240 315,305" fill="#F7F5F0" stroke="#0F0D0B" stroke-width="2"/>
  <text x="195" y="286" font-size="12" font-weight="bold" fill="#0F0D0B">4D Brane Hypersurface M_4 (y = 0)</text>
  <text x="195" y="325" font-size="10.5" fill="#3A2E26">665 Verified IGRT-H11 Laws Unchanged</text>

  <!-- Bulk 5th coordinate y -->
  <line x1="290" y1="272" x2="290" y2="92" stroke="#8F5B4A" stroke-width="2.4" stroke-dasharray="6,4"/>
  <polygon points="290,82 284,96 296,96" fill="#8F5B4A"/>
  <text x="304" y="102" font-size="11.5" font-weight="bold" fill="#8F5B4A">5th Coordinate y (Extra Spatial Bulk Dimension)</text>
  <text x="304" y="122" font-size="10" fill="#3A2E26">Compact S^1 / Warped AdS_5 Throat</text>

  <!-- Right-angle orthogonal symbol -->
  <polyline points="290,250 312,250 312,272" fill="none" stroke="#0F0D0B" stroke-width="1.6"/>
  <circle cx="290" cy="272" r="5" fill="#0F0D0B"/>

  <!-- Projection Fiber Line -->
  <line x1="290" y1="272" x2="538" y2="272" stroke="#64705B" stroke-width="2.2"/>
  <polygon points="545,272 533,267 533,277" fill="#64705B"/>
  <text x="424" y="262" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#64705B">G_Ai = 0 Decoupling</text>

  <!-- Projective Hilbert Fiber Sphere -->
  <circle cx="615" cy="245" r="72" fill="#FAF8F4" stroke="#64705B" stroke-width="2.2"/>
  <ellipse cx="615" cy="245" rx="72" ry="22" fill="none" stroke="#8E7F6B" stroke-width="1.3" stroke-dasharray="4,3"/>
  <circle cx="615" cy="173" r="4.5" fill="#0F0D0B"/>
  <circle cx="668" cy="218" r="4.5" fill="#8F5B4A"/>
  <path d="M 615 173 A 72 72 0 0 1 668 218" fill="none" stroke="#8F5B4A" stroke-width="3"/>
  <text x="615" y="236" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#0F0D0B">Fiber PU(H)</text>
  <text x="615" y="255" text-anchor="middle" font-size="10" fill="#64705B">SLD Fisher Arc s_QFI</text>
  <text x="615" y="338" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#64705B">Fubini–Study Metric Invariant</text>

  <!-- Bottom theorem box -->
  <rect x="44" y="358" width="672" height="50" fill="#F7F5F0" stroke="#8E7F6B" stroke-width="1.1"/>
  <text x="380" y="380" text-anchor="middle" font-size="11" font-weight="bold" fill="#0F0D0B">Theorem 2.1: PU(H) is strictly orthogonal to bulk vector d/dy (Block-Diagonal Bundle Metric)</text>
  <text x="380" y="398" text-anchor="middle" font-size="10" fill="#3A2E26">Born rule Prob = |&lt;k|psi&gt;|^2 and SLD complementarity V^2 + D_QFI^2 = 1 stay unmodified across all y</text>
</svg>`
  },
  {
    id: 'h12-fig-2',
    figureNumber: 'Figure H12-2',
    anchorChapter: 2,
    title: 'Low-Energy KK Form-Factor Decoupling & Eot-Wash 44 um Floor',
    category: 'CATEGORY B — DERIVED',
    caption:
      'Logarithmic decoupling curve δ_KK(E) = (E / m_KK)² / [1 + (E / m_KK)²] computed against the Eöt-Wash torsion-balance floor m_KK(1) ≥ 4.485 meV (R_5 ≤ 44 μm). At atomic and laboratory clock scales (E ≈ 1 neV), Kaluza–Klein corrections shrink to 4.972 × 10⁻¹⁴ (Tree / Pauli–Villars / Heat-Kernel) and 3.149 × 10⁻¹⁶ (FRG Litim), while cryogenic 4 K cavities yield 5.873 × 10⁻³ and 77 K thermal photons sit 1.48× above m_KK(1).',
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 440" width="760" height="440" style="background:#FFFFFF;font-family:'DejaVu Sans','DejaVu Serif',Georgia,sans-serif">
  <rect x="0" y="0" width="760" height="440" fill="#FFFFFF"/>
  <rect x="14" y="14" width="732" height="412" fill="#FFFFFF" stroke="#0F0D0B" stroke-width="1.2"/>
  <text x="380" y="42" text-anchor="middle" font-size="14" font-weight="bold" fill="#0F0D0B">LOW-ENERGY KALUZA–KLEIN DECOUPLING: delta_KK(E) vs. PROBE ENERGY E</text>
  <line x1="36" y1="54" x2="724" y2="54" stroke="#8E7F6B" stroke-width="0.9"/>

  <!-- Grid & Axes -->
  <line x1="108" y1="340" x2="695" y2="340" stroke="#0F0D0B" stroke-width="1.6"/>
  <line x1="108" y1="84" x2="108" y2="340" stroke="#0F0D0B" stroke-width="1.6"/>
  <line x1="108" y1="168" x2="695" y2="168" stroke="#EAE2D2" stroke-width="1"/>
  <line x1="108" y1="254" x2="695" y2="254" stroke="#EAE2D2" stroke-width="1"/>
  <text x="96" y="92" text-anchor="end" font-size="10.5" fill="#0F0D0B">10^0</text>
  <text x="96" y="172" text-anchor="end" font-size="10.5" fill="#0F0D0B">10^-6</text>
  <text x="96" y="258" text-anchor="end" font-size="10.5" fill="#0F0D0B">10^-12</text>
  <text x="96" y="340" text-anchor="end" font-size="10.5" fill="#0F0D0B">10^-18</text>
  <text x="48" y="212" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#0F0D0B" transform="rotate(-90 48 212)">KK Correction Factor delta_KK(E)</text>

  <!-- Main Suppression Curve -->
  <path d="M 124 322 L 265 288 L 430 176 L 568 102 L 680 96" fill="none" stroke="#64705B" stroke-width="3"/>
  <line x1="568" y1="84" x2="568" y2="340" stroke="#8F5B4A" stroke-width="1.8" stroke-dasharray="6,4"/>

  <!-- Callouts & Points -->
  <circle cx="265" cy="288" r="5" fill="#8F5B4A"/>
  <text x="265" y="272" text-anchor="middle" font-size="11" font-weight="bold" fill="#0F0D0B">delta_KK = 4.972e-14</text>
  <circle cx="265" cy="314" r="4" fill="#64705B"/>
  <text x="278" y="318" font-size="10" font-weight="bold" fill="#64705B">FRG Litim Cutoff: 3.149e-16</text>

  <circle cx="516" cy="126" r="4.5" fill="#64705B"/>
  <text x="504" y="118" text-anchor="end" font-size="10" font-weight="bold" fill="#64705B">4 K Cavity: 5.873e-3</text>

  <rect x="578" y="114" width="136" height="68" fill="#FAF8F4" stroke="#8F5B4A" stroke-width="1.2"/>
  <text x="646" y="134" text-anchor="middle" font-size="10" font-weight="bold" fill="#8F5B4A">m_KK &gt;= 4.485 meV</text>
  <text x="646" y="152" text-anchor="middle" font-size="9.5" fill="#0F0D0B">Eot-Wash R_5 &lt;= 44 um</text>
  <text x="646" y="170" text-anchor="middle" font-size="9.5" fill="#8F5B4A">77 K Thermal: 1.48x m_KK</text>

  <!-- X-axis ticks -->
  <text x="130" y="362" text-anchor="middle" font-size="10" fill="#3A2E26">1 peV</text>
  <text x="265" y="362" text-anchor="middle" font-size="10" font-weight="bold" fill="#0F0D0B">1 neV (H11 Clocks)</text>
  <text x="430" y="362" text-anchor="middle" font-size="10" fill="#3A2E26">1 ueV</text>
  <text x="568" y="362" text-anchor="middle" font-size="10" font-weight="bold" fill="#8F5B4A">4.485 meV</text>
  <text x="678" y="362" text-anchor="middle" font-size="10" fill="#3A2E26">1 eV</text>
  <text x="380" y="402" text-anchor="middle" font-size="10.5" fill="#64705B">Exact 4D IGRT-H11 boundary predictions remain untouched below 10^-13 across optical/nuclear probes</text>
</svg>`
  },
  {
    id: 'h12-fig-3',
    figureNumber: 'Figure H12-3',
    anchorChapter: 3,
    title: 'Temporal Folding Architecture: Brane Time tau_4, Bulk Path tau_5 & Modular Law d tau_5 = alpha_mod ds_QFI',
    category: 'CATEGORY C — CONJECTURAL',
    caption:
      'Minimalist decomposition of the seven orthogonal temporal notions (§3.1). While coordinate time t and brane proper duration τ_4 advance along the y = 0 hypersurface, Category C temporal folding compares bulk proper/light transit τ_5 governed by modular QFI flow d τ_5 = α_mod ds_QFI across fixed endpoints without violating 5D Lorentzian microcausality (ds_5² ≤ 0).',
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 440" width="760" height="440" style="background:#FFFFFF;font-family:'DejaVu Sans','DejaVu Serif',Georgia,sans-serif">
  <rect x="0" y="0" width="760" height="440" fill="#FFFFFF"/>
  <rect x="14" y="14" width="732" height="412" fill="#FFFFFF" stroke="#0F0D0B" stroke-width="1.2"/>
  <text x="380" y="42" text-anchor="middle" font-size="14" font-weight="bold" fill="#0F0D0B">THREE OPERATIONAL TEMPORAL LAYERS BETWEEN FIXED EVENTS A &amp; B</text>
  <line x1="36" y1="54" x2="724" y2="54" stroke="#8E7F6B" stroke-width="0.9"/>

  <line x1="110" y1="84" x2="110" y2="352" stroke="#0F0D0B" stroke-width="1.3" stroke-dasharray="4,3"/>
  <line x1="650" y1="84" x2="650" y2="352" stroke="#0F0D0B" stroke-width="1.3" stroke-dasharray="4,3"/>
  <text x="110" y="374" text-anchor="middle" font-size="11" font-weight="bold" fill="#0F0D0B">Event A (x_1, y = 0)</text>
  <text x="650" y="374" text-anchor="middle" font-size="11" font-weight="bold" fill="#0F0D0B">Event B (x_2, y = 0)</text>

  <!-- Track 1: 4D Brane Time -->
  <rect x="140" y="84" width="480" height="58" fill="#FAF8F4" stroke="#0F0D0B" stroke-width="1.1"/>
  <line x1="110" y1="126" x2="650" y2="126" stroke="#0F0D0B" stroke-width="2.5"/>
  <circle cx="110" cy="126" r="5" fill="#0F0D0B"/>
  <circle cx="650" cy="126" r="5" fill="#0F0D0B"/>
  <text x="380" y="108" text-anchor="middle" font-size="11" font-weight="bold" fill="#0F0D0B">1. 4D Brane Geodesic Proper Time tau_4 (Established Cat. A Baseline)</text>

  <!-- Track 2: 5D Bulk Null Excursion -->
  <rect x="140" y="166" width="480" height="76" fill="#FBF7F4" stroke="#8F5B4A" stroke-width="1.2"/>
  <path d="M 110 198 Q 380 256 650 198" fill="none" stroke="#8F5B4A" stroke-width="2.6"/>
  <circle cx="110" cy="198" r="5" fill="#8F5B4A"/>
  <circle cx="650" cy="198" r="5" fill="#8F5B4A"/>
  <text x="380" y="186" text-anchor="middle" font-size="11" font-weight="bold" fill="#8F5B4A">2. 5D Bulk Null Excursion tau_5 (Conjectural Cat. C iff alpha_t + alpha_x &gt; 0)</text>

  <!-- Track 3: Araki Modular Clock Flow -->
  <rect x="140" y="264" width="480" height="72" fill="#F4F6F2" stroke="#64705B" stroke-width="1.2"/>
  <path d="M 110 306 C 245 278, 515 334, 650 306" fill="none" stroke="#64705B" stroke-width="2.6"/>
  <circle cx="110" cy="306" r="5" fill="#64705B"/>
  <circle cx="650" cy="306" r="5" fill="#64705B"/>
  <text x="380" y="286" text-anchor="middle" font-size="11" font-weight="bold" fill="#64705B">3. Araki Modular KMS Clock Flow: d tau_5 = alpha_mod ds_QFI [Eq. (H12.0.2)]</text>

  <text x="380" y="408" text-anchor="middle" font-size="10.5" fill="#3A2E26">Local 5D microcausality ds_5^2 &lt;= 0 holds along every point; chronological order stays strictly intact</text>
</svg>`
  },
  {
    id: 'h12-fig-4',
    figureNumber: 'Figure H12-4',
    anchorChapter: 4,
    title: 'Beltrami Geodesic Profile: Symmetric No-Go (y=0) vs. Asymmetric Bulk Dip y(x)',
    category: 'CATEGORY C — CONJECTURAL',
    caption:
      'Contrasting a brane-confined light ray (top horizontal dashed line, Δt_4 = Δx / c) against a smooth Beltrami arch plunging to depth y_peak into an assumed asymmetrically warped 5D bulk (Model 2B, α_t + α_x > 0). Because local 5D microcausality ds_5² = 0 holds along every point of the arch, coordinate arrival compresses only via the assumed metric coefficient c_eff(y) > c.',
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 440" width="760" height="440" style="background:#FFFFFF;font-family:'DejaVu Sans','DejaVu Serif',Georgia,sans-serif">
  <rect x="0" y="0" width="760" height="440" fill="#FFFFFF"/>
  <rect x="14" y="14" width="732" height="412" fill="#FFFFFF" stroke="#0F0D0B" stroke-width="1.2"/>
  <text x="380" y="42" text-anchor="middle" font-size="14" font-weight="bold" fill="#0F0D0B">BELTRAMI GEODESIC ARCH THROUGH ASYMMETRICALLY WARPED 5D BULK</text>
  <line x1="36" y1="54" x2="724" y2="54" stroke="#8E7F6B" stroke-width="0.9"/>

  <!-- Brane Top Boundary -->
  <line x1="78" y1="120" x2="682" y2="120" stroke="#0F0D0B" stroke-width="2.4" stroke-dasharray="8,5"/>
  <text x="380" y="102" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#0F0D0B">4D Brane Light Path (y = 0): Model 1 &amp; Model 2A Minimum (dt_5 &gt;= dt_4)</text>

  <!-- Bulk Gradient Layers -->
  <rect x="88" y="122" width="584" height="232" fill="#FAF8F4" stroke="#EAE2D2" stroke-width="1"/>
  <path d="M 105 120 Q 380 410 655 120" fill="none" stroke="#8F5B4A" stroke-width="3.2"/>
  <circle cx="105" cy="120" r="5.5" fill="#0F0D0B"/>
  <circle cx="655" cy="120" r="5.5" fill="#0F0D0B"/>
  <circle cx="380" cy="265" r="5.5" fill="#8F5B4A"/>

  <!-- Depth & Velocity Callouts -->
  <line x1="380" y1="120" x2="380" y2="265" stroke="#64705B" stroke-width="1.8" stroke-dasharray="4,3"/>
  <text x="396" y="196" font-size="11" font-weight="bold" fill="#64705B">y_peak (Turning Point dy/dx = 0)</text>
  <text x="380" y="294" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#8F5B4A">Beltrami Shortcut Trajectory (Model 2B, Cat. C)</text>
  <text x="380" y="314" text-anchor="middle" font-size="10.5" fill="#0F0D0B">c_eff(y) = c exp[(alpha_t + alpha_x) k |y|]</text>

  <text x="105" y="96" text-anchor="middle" font-size="10" font-weight="bold" fill="#3A2E26">x = 0</text>
  <text x="655" y="96" text-anchor="middle" font-size="10" font-weight="bold" fill="#3A2E26">x = dx</text>
  <text x="380" y="394" text-anchor="middle" font-size="10.5" fill="#3A2E26">Local 5D null condition ds_5^2 = 0 obeyed identically at every bulk coordinate along the arch</text>
</svg>`
  },
  {
    id: 'h12-fig-5',
    figureNumber: 'Figure H12-5',
    anchorChapter: 4,
    title: '5D Geodesic Arrival Ratio eta_fold = dt_5 / dt_4 Across Metric Classes',
    category: 'CATEGORY C — CONJECTURAL',
    caption:
      'Direct Beltrami variational solver output (scripts/verify-igrt-h12.mjs). Flat compact M_4 × S¹ (1.001249) and conformally flat Randall–Sundrum AdS_5 excursions (1.010321) strictly satisfy Δt_5 ≥ Δt_4 (Category B Negative No-Go Theorems). Ghost-free 5D Einstein–Maxwell (α_t = 1.0, α_x = 0.0) admits exact closed-form shortcuts η_fold = sin(kΔx/2)/(kΔx/2) = 0.84147 at kΔx = 2 inside its finite horizon span kΔx < π (limit 2/π = 0.63662). Extending to unbounded spans requires phenomenological Model 2B (α_t = α_x = 0.5): 0.86634 (k Δx = 2), 0.34279 (10), and 0.07770 (50) while preserving ds_5² = 0 (Category C).',
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 440" width="760" height="440" style="background:#FFFFFF;font-family:'DejaVu Sans','DejaVu Serif',Georgia,sans-serif">
  <rect x="0" y="0" width="760" height="440" fill="#FFFFFF"/>
  <rect x="14" y="14" width="732" height="412" fill="#FFFFFF" stroke="#0F0D0B" stroke-width="1.2"/>
  <text x="380" y="42" text-anchor="middle" font-size="14" font-weight="bold" fill="#0F0D0B">5D NULL GEODESIC ARRIVAL RATIO eta_fold = dt_5 / dt_4 BY METRIC CLASS</text>
  <line x1="36" y1="54" x2="724" y2="54" stroke="#8E7F6B" stroke-width="0.9"/>

  <line x1="86" y1="336" x2="704" y2="336" stroke="#0F0D0B" stroke-width="1.6"/>
  <line x1="86" y1="84" x2="86" y2="336" stroke="#0F0D0B" stroke-width="1.6"/>
  <line x1="86" y1="130" x2="704" y2="130" stroke="#8F5B4A" stroke-width="1.6" stroke-dasharray="6,4"/>
  <text x="698" y="116" text-anchor="end" font-size="10.5" font-weight="bold" fill="#8F5B4A">Brane Speed-of-Light Floor: eta_fold = 1.000 (No Shortcut Boundary)</text>

  <!-- Bars (scale: 1.000 -> height 206px from y=336 to y=130) -->
  <rect x="108" y="128" width="58" height="208" fill="#8E7F6B"/>
  <text x="137" y="118" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#0F0D0B">1.00125</text>
  <text x="137" y="356" text-anchor="middle" font-size="10" fill="#0F0D0B">Model 1: S1</text>
  <text x="137" y="372" text-anchor="middle" font-size="9.5" fill="#64705B">No-Go (Cat. B)</text>

  <rect x="206" y="124" width="58" height="212" fill="#3A2E26"/>
  <text x="235" y="114" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#0F0D0B">1.01032</text>
  <text x="235" y="356" text-anchor="middle" font-size="10" fill="#0F0D0B">Model 2A: RS</text>
  <text x="235" y="372" text-anchor="middle" font-size="9.5" fill="#64705B">No-Go (Cat. B)</text>

  <rect x="304" y="163" width="58" height="173" fill="#64705B"/>
  <text x="333" y="153" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#64705B">0.84147</text>
  <text x="333" y="356" text-anchor="middle" font-size="10" fill="#0F0D0B">EM (1.0, 0.0)</text>
  <text x="333" y="372" text-anchor="middle" font-size="9.5" fill="#64705B">k dx=2 &lt; pi</text>

  <rect x="402" y="158" width="58" height="178" fill="#8F5B4A"/>
  <text x="431" y="148" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#8F5B4A">0.86634</text>
  <text x="431" y="356" text-anchor="middle" font-size="10" fill="#0F0D0B">2B (k dx=2)</text>
  <text x="431" y="372" text-anchor="middle" font-size="9.5" fill="#8F5B4A">Cat. C</text>

  <rect x="500" y="265" width="58" height="71" fill="#64705B"/>
  <text x="529" y="255" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#64705B">0.34279</text>
  <text x="529" y="356" text-anchor="middle" font-size="10" fill="#0F0D0B">2B (k dx=10)</text>
  <text x="529" y="372" text-anchor="middle" font-size="9.5" fill="#64705B">Cat. C</text>

  <rect x="598" y="320" width="58" height="16" fill="#8F5B4A"/>
  <text x="627" y="310" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#8F5B4A">0.07770</text>
  <text x="627" y="356" text-anchor="middle" font-size="10" fill="#0F0D0B">2B (k dx=50)</text>
  <text x="627" y="372" text-anchor="middle" font-size="9.5" fill="#8F5B4A">Cat. C</text>

  <rect x="370" y="196" width="318" height="36" fill="#FAF8F4" stroke="#64705B" stroke-width="1"/>
  <text x="529" y="218" text-anchor="middle" font-size="10" font-weight="bold" fill="#64705B">EM Horizon Ceiling: k dx &lt; pi (Limit 2/pi = 0.63662)</text>

  <text x="380" y="406" text-anchor="middle" font-size="10" fill="#3A2E26">Verified to &lt; 1e-6 by Beltrami Euler-Lagrange shooting quadrature in scripts/verify-igrt-h12.mjs</text>
</svg>`
  },
  {
    id: 'h12-fig-6',
    figureNumber: 'Figure H12-6',
    anchorChapter: 5,
    title: 'Closed Hayward Regular Core vs. Flared Morris–Thorne Wormhole Throat',
    category: 'CATEGORY B — DERIVED',
    caption:
      'Minimalist topological comparison: Left, the 4D H11 Hayward regular black hole smoothly closes gravitational collapse in a de Sitter core (r_core = 2.5389 × 10⁻²² m for 30 M_⊙) obeying radial and transverse NEC (ρ + p_r = 0, ρ + p_⊥ > 0)—producing GW ringdown echoes (K_echo = 0.184), NOT a portal. Right, a Morris–Thorne throat requires NEC-violating negative energy across a flared minimal sphere.',
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 440" width="760" height="440" style="background:#FFFFFF;font-family:'DejaVu Sans','DejaVu Serif',Georgia,sans-serif">
  <rect x="0" y="0" width="760" height="440" fill="#FFFFFF"/>
  <rect x="14" y="14" width="732" height="412" fill="#FFFFFF" stroke="#0F0D0B" stroke-width="1.2"/>
  <text x="380" y="42" text-anchor="middle" font-size="14" font-weight="bold" fill="#0F0D0B">HAYWARD REGULAR CORE (CLOSED) vs. MORRIS–THORNE WORMHOLE THROAT</text>
  <line x1="36" y1="54" x2="724" y2="54" stroke="#8E7F6B" stroke-width="0.9"/>

  <line x1="380" y1="68" x2="380" y2="395" stroke="#8E7F6B" stroke-width="1.4" stroke-dasharray="5,3"/>

  <!-- Left: Hayward -->
  <text x="198" y="88" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#0F0D0B">Hayward Regular Core (Non-Portal)</text>
  <path d="M 65 130 C 118 140, 138 286, 198 286 C 258 286, 278 140, 331 130" fill="none" stroke="#64705B" stroke-width="3"/>
  <ellipse cx="198" cy="282" rx="34" ry="10" fill="#FAF8F4" stroke="#64705B" stroke-width="1.8"/>
  <text x="198" y="216" text-anchor="middle" font-size="10.5" fill="#0F0D0B">Smooth de Sitter Interior</text>
  <text x="198" y="236" text-anchor="middle" font-size="10" fill="#64705B">r_core = 2.5389e-22 m (30 M_sun)</text>
  <text x="198" y="326" text-anchor="middle" font-size="11" font-weight="bold" fill="#64705B">NEC Preserved: rho + p_r = 0</text>
  <text x="198" y="348" text-anchor="middle" font-size="10.5" fill="#0F0D0B">Produces Echoes K_echo = 0.184 (No Throat)</text>

  <!-- Right: Morris-Thorne -->
  <text x="562" y="88" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#0F0D0B">Morris-Thorne Throat (NEC &lt; 0)</text>
  <path d="M 435 122 Q 528 214 435 306" fill="none" stroke="#8F5B4A" stroke-width="3"/>
  <path d="M 689 122 Q 596 214 689 306" fill="none" stroke="#8F5B4A" stroke-width="3"/>
  <ellipse cx="562" cy="214" rx="81" ry="16" fill="none" stroke="#8F5B4A" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="562" y="218" text-anchor="middle" font-size="10" font-weight="bold" fill="#0F0D0B">Flared Sphere r_0</text>
  <text x="562" y="326" text-anchor="middle" font-size="11" font-weight="bold" fill="#8F5B4A">Requires 2.22e70 x Casimir (~10^71 gap)</text>
  <text x="562" y="348" text-anchor="middle" font-size="10.5" fill="#0F0D0B">Macroscopic Throat Closed (Cat. B No-Go)</text>

  <text x="380" y="402" text-anchor="middle" font-size="10.5" fill="#3A2E26">Topology separates closed black-hole core regularization (H11) from exotic inter-brane throats</text>
</svg>`
  },
  {
    id: 'h12-fig-7',
    figureNumber: 'Figure H12-7',
    anchorChapter: 6,
    title: 'Morris–Thorne Exotic Mass & Casimir Energy Deficit Across Throat Scales',
    category: 'CATEGORY B — DERIVED',
    caption:
      'Logarithmic comparison of the Casimir-to-wormhole energy density ratio |ρ_Casimir / (ρc² + p_r)| computed in scripts/verify-igrt-h12.mjs. Macroscopic throats (r_0 = 1 m requiring −1.0637 × 10⁻³ M_⊙) suffer a 71-order-of-magnitude Casimir shortfall (4.50 × 10⁻⁷¹). Parity O(1) (0.2436) occurs strictly at the H11 Planck core scale ℓ_0 = 1.359 × 10⁻³⁵ m.',
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 440" width="760" height="440" style="background:#FFFFFF;font-family:'DejaVu Sans','DejaVu Serif',Georgia,sans-serif">
  <rect x="0" y="0" width="760" height="440" fill="#FFFFFF"/>
  <rect x="14" y="14" width="732" height="412" fill="#FFFFFF" stroke="#0F0D0B" stroke-width="1.2"/>
  <text x="380" y="42" text-anchor="middle" font-size="14" font-weight="bold" fill="#0F0D0B">CASIMIR-TO-WORMHOLE NEC DEFICIT: log10 |rho_Casimir / (rho c^2 + p_r)|</text>
  <line x1="36" y1="54" x2="724" y2="54" stroke="#8E7F6B" stroke-width="0.9"/>

  <line x1="108" y1="92" x2="700" y2="92" stroke="#64705B" stroke-width="1.6" stroke-dasharray="6,4"/>
  <text x="694" y="82" text-anchor="end" font-size="10.5" font-weight="bold" fill="#64705B">O(1) Quantum Parity Threshold (log10 = 0)</text>
  <line x1="108" y1="92" x2="108" y2="338" stroke="#0F0D0B" stroke-width="1.6"/>
  <line x1="108" y1="338" x2="700" y2="338" stroke="#0F0D0B" stroke-width="1.6"/>
  <text x="96" y="96" text-anchor="end" font-size="10" fill="#0F0D0B">0</text>
  <text x="96" y="176" text-anchor="end" font-size="10" fill="#0F0D0B">-25</text>
  <text x="96" y="256" text-anchor="end" font-size="10" fill="#0F0D0B">-50</text>
  <text x="96" y="336" text-anchor="end" font-size="10" fill="#0F0D0B">-75</text>

  <!-- Stem Plot Drops -->
  <line x1="205" y1="92" x2="205" y2="102" stroke="#64705B" stroke-width="10"/>
  <circle cx="205" cy="102" r="6" fill="#64705B"/>
  <text x="205" y="128" text-anchor="middle" font-size="11" font-weight="bold" fill="#64705B">0.2436 (-0.61)</text>
  <text x="205" y="362" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#0F0D0B">r0 = l0 (1.36e-35 m)</text>
  <text x="205" y="380" text-anchor="middle" font-size="9.5" fill="#64705B">Planck Foam Parity</text>

  <line x1="404" y1="92" x2="404" y2="278" stroke="#8E7F6B" stroke-width="10"/>
  <circle cx="404" cy="278" r="6" fill="#8E7F6B"/>
  <text x="404" y="302" text-anchor="middle" font-size="11" font-weight="bold" fill="#0F0D0B">4.50e-59 (-58.35)</text>
  <text x="404" y="362" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#0F0D0B">r0 = 1 um</text>
  <text x="404" y="380" text-anchor="middle" font-size="9.5" fill="#3A2E26">M_exotic = -2.12e21 kg</text>

  <line x1="598" y1="92" x2="598" y2="316" stroke="#8F5B4A" stroke-width="10"/>
  <circle cx="598" cy="316" r="6" fill="#8F5B4A"/>
  <text x="598" y="302" text-anchor="end" font-size="11" font-weight="bold" fill="#8F5B4A">4.50e-71 (-70.35)</text>
  <text x="598" y="362" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#0F0D0B">r0 = 1 m</text>
  <text x="598" y="380" text-anchor="middle" font-size="9.5" fill="#8F5B4A">M_exotic = -1.0637e-3 M_sun</text>
</svg>`
  },
  {
    id: 'h12-fig-8',
    figureNumber: 'Figure H12-8',
    anchorChapter: 7,
    title: 'Double-Slit Wave–Particle Complementarity Circle: V^2 + D_QFI^2 = 1',
    category: 'CATEGORY B — DERIVED',
    caption:
      'Twin-slit interference geometry (left) projects onto the orthogonal projective Bloch fiber PU(H), yielding the six-point SLD Quantum Fisher complementarity quarter-circle V² + D_QFI² = 1 (right). Independent of 5D coordinate y; Born’s rule stays a Category A postulate.',
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 440" width="760" height="440" style="background:#FFFFFF;font-family:'DejaVu Sans','DejaVu Serif',Georgia,sans-serif">
  <rect x="0" y="0" width="760" height="440" fill="#FFFFFF"/>
  <rect x="14" y="14" width="732" height="412" fill="#FFFFFF" stroke="#0F0D0B" stroke-width="1.2"/>
  <text x="380" y="42" text-anchor="middle" font-size="14" font-weight="bold" fill="#0F0D0B">DOUBLE-SLIT SLD QUANTUM FISHER COMPLEMENTARITY: V^2 + D_QFI^2 = 1</text>
  <line x1="36" y1="54" x2="724" y2="54" stroke="#8E7F6B" stroke-width="0.9"/>

  <!-- Left Interferometer Ray Geometry -->
  <line x1="94" y1="100" x2="94" y2="178" stroke="#0F0D0B" stroke-width="3.2"/>
  <line x1="94" y1="202" x2="94" y2="238" stroke="#0F0D0B" stroke-width="3.2"/>
  <line x1="94" y1="262" x2="94" y2="340" stroke="#0F0D0B" stroke-width="3.2"/>
  <circle cx="48" cy="220" r="4.5" fill="#8F5B4A"/>
  <line x1="52" y1="220" x2="94" y2="190" stroke="#3A2E26" stroke-width="1.5"/>
  <line x1="52" y1="220" x2="94" y2="250" stroke="#3A2E26" stroke-width="1.5"/>
  <path d="M 94 190 Q 165 200 225 220" fill="none" stroke="#64705B" stroke-width="2"/>
  <path d="M 94 250 Q 165 240 225 220" fill="none" stroke="#64705B" stroke-width="2"/>
  <line x1="228" y1="104" x2="228" y2="336" stroke="#8E7F6B" stroke-width="2.2"/>
  <text x="142" y="366" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#0F0D0B">Twin-Slit Phase phi -&gt; PU(H)</text>

  <!-- Quarter Circle -->
  <line x1="318" y1="340" x2="520" y2="340" stroke="#0F0D0B" stroke-width="1.6"/>
  <line x1="318" y1="120" x2="318" y2="340" stroke="#0F0D0B" stroke-width="1.6"/>
  <path d="M 318 140 A 200 200 0 0 1 518 340" fill="none" stroke="#64705B" stroke-width="3"/>
  <circle cx="318" cy="140" r="5" fill="#8F5B4A"/>
  <circle cx="368" cy="146" r="5" fill="#8F5B4A"/>
  <circle cx="418" cy="167" r="5" fill="#8F5B4A"/>
  <circle cx="468" cy="208" r="5" fill="#8F5B4A"/>
  <circle cx="498" cy="253" r="5" fill="#8F5B4A"/>
  <circle cx="518" cy="340" r="5" fill="#8F5B4A"/>
  <text x="418" y="366" text-anchor="middle" font-size="11" font-weight="bold" fill="#0F0D0B">Fringe Visibility V = gamma_coh</text>
  <text x="294" y="240" text-anchor="middle" font-size="11" font-weight="bold" fill="#0F0D0B" transform="rotate(-90 294 240)">D_QFI Distinguishability</text>

  <!-- Numerical Table Box -->
  <rect x="540" y="102" width="186" height="238" fill="#FAF8F4" stroke="#0F0D0B" stroke-width="1.2"/>
  <text x="633" y="128" text-anchor="middle" font-size="11" font-weight="bold" fill="#0F0D0B">2x2 SLD Solver Points</text>
  <line x1="556" y1="140" x2="710" y2="140" stroke="#8E7F6B" stroke-width="1"/>
  <text x="556" y="166" font-size="10.5" fill="#0F0D0B">g=0.00 : V=0.00  D=1.000</text>
  <text x="556" y="192" font-size="10.5" fill="#0F0D0B">g=0.25 : V=0.25  D=0.968</text>
  <text x="556" y="218" font-size="10.5" fill="#0F0D0B">g=0.50 : V=0.50  D=0.866</text>
  <text x="556" y="244" font-size="10.5" fill="#0F0D0B">g=0.75 : V=0.75  D=0.661</text>
  <text x="556" y="270" font-size="10.5" fill="#0F0D0B">g=0.90 : V=0.90  D=0.436</text>
  <text x="556" y="296" font-size="10.5" fill="#0F0D0B">g=1.00 : V=1.00  D=0.000</text>
  <text x="633" y="326" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#64705B">Exact to 1e-12 precision</text>

  <text x="380" y="402" text-anchor="middle" font-size="10" fill="#3A2E26">Complementarity identity is independent of the 5D extension; tested by Device D to 1e-6</text>
</svg>`
  },
  {
    id: 'h12-fig-9',
    figureNumber: 'Figure H12-9',
    anchorChapter: 10,
    title: 'Multi-Probe 5D Consistency Audit: Empirical Bounds Across Six Domains',
    category: 'CATEGORY A — ESTABLISHED',
    caption:
      'Summary of six empirical exclusion domains audited in Chapter 10 (Table 10.2). Any viable 5D extension of IGRT-H11 must simultaneously respect sub-44 μm torsion-balance floors, GW170817 tensor speed equality, Cassini Shapiro PPN bounds, BBN relativistic species limits, LHC TeV KK non-observation, and Planck CMB spatial flatness.',
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 440" width="760" height="440" style="background:#FFFFFF;font-family:'DejaVu Sans','DejaVu Serif',Georgia,sans-serif">
  <rect x="0" y="0" width="760" height="440" fill="#FFFFFF"/>
  <rect x="14" y="14" width="732" height="412" fill="#FFFFFF" stroke="#0F0D0B" stroke-width="1.2"/>
  <text x="380" y="42" text-anchor="middle" font-size="14" font-weight="bold" fill="#0F0D0B">MULTI-PROBE OBSERVATIONAL CONSTRAINTS SATISFIED BY IGRT-H12 (CH. 10)</text>
  <line x1="36" y1="54" x2="724" y2="54" stroke="#8E7F6B" stroke-width="0.9"/>

  <text x="48" y="106" font-size="11.5" font-weight="bold" fill="#0F0D0B">1. Eot-Wash Torsion</text>
  <line x1="226" y1="101" x2="465" y2="101" stroke="#64705B" stroke-width="4"/>
  <circle cx="465" cy="101" r="5.5" fill="#8F5B4A"/>
  <text x="482" y="106" font-size="10.5" fill="#0F0D0B">R_5 &lt;= 44 um (m_KK &gt;= 4.485 meV)</text>

  <text x="48" y="158" font-size="11.5" font-weight="bold" fill="#0F0D0B">2. GW170817 Speed</text>
  <line x1="226" y1="153" x2="410" y2="153" stroke="#64705B" stroke-width="4"/>
  <circle cx="410" cy="153" r="5.5" fill="#64705B"/>
  <text x="428" y="158" font-size="10.5" fill="#0F0D0B">|c_GW / c - 1| &lt; 1e-15 (40 Mpc Baseline)</text>

  <text x="48" y="210" font-size="11.5" font-weight="bold" fill="#0F0D0B">3. Cassini PPN Solar</text>
  <line x1="226" y1="205" x2="442" y2="205" stroke="#64705B" stroke-width="4"/>
  <circle cx="442" cy="205" r="5.5" fill="#64705B"/>
  <text x="460" y="210" font-size="10.5" fill="#0F0D0B">|gamma - 1| &lt; 2.3e-5 (Vainshtein Screened)</text>

  <text x="48" y="262" font-size="11.5" font-weight="bold" fill="#0F0D0B">4. BBN Light Species</text>
  <line x1="226" y1="257" x2="454" y2="257" stroke="#64705B" stroke-width="4"/>
  <circle cx="454" cy="257" r="5.5" fill="#8F5B4A"/>
  <text x="472" y="262" font-size="10.5" fill="#0F0D0B">Delta N_eff &lt; 0.28 (Bulk Weyl Dark Rad.)</text>

  <text x="48" y="314" font-size="11.5" font-weight="bold" fill="#0F0D0B">5. HL-LHC TeV Bulk</text>
  <line x1="226" y1="309" x2="508" y2="309" stroke="#8F5B4A" stroke-width="4"/>
  <circle cx="508" cy="309" r="5.5" fill="#8F5B4A"/>
  <text x="526" y="314" font-size="10.5" fill="#0F0D0B">M_5(warped) &gt; TeV; flat 2.985e8 GeV</text>

  <text x="48" y="366" font-size="11.5" font-weight="bold" fill="#0F0D0B">6. Planck CMB Flat</text>
  <line x1="226" y1="361" x2="424" y2="361" stroke="#64705B" stroke-width="4"/>
  <circle cx="424" cy="361" r="5.5" fill="#64705B"/>
  <text x="442" y="366" font-size="10.5" fill="#0F0D0B">|Omega_K| &lt; 0.002 &amp; H11 Preserved</text>

  <text x="380" y="408" text-anchor="middle" font-size="10" fill="#8F5B4A">All six constraints show zero observed 5D signal to date (Reinforces Table 10.3 Empirical Null Baseline)</text>
</svg>`
  },
  {
    id: 'h12-fig-10',
    figureNumber: 'Figure H12-10',
    anchorChapter: 12,
    title: 'Experimental Falsification Architecture: H11 (P1–P6) vs. Bulk (P7–P10) vs. Folding (P11–P13)',
    category: 'CATEGORY B — DERIVED',
    caption:
      'Minimalist synthesis clarifying the strict empirical separation between four-dimensional H11 tests (P1–P6), five-dimensional bulk/KK/decoherence/leakage probes (P7: 10 μm Yukawa; P8: 10⁻¹⁹ clocks; P9: 10⁻⁶ visibility; P10: 10⁻³ 3G GW leakage), currently unachievable active folding concepts (P11–P12), and the immediate passive GW170817/GRB 170817A arrival bound (P13: |η_fold − 1| ≤ 4.129 × 10⁻¹⁶).',
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 440" width="760" height="440" style="background:#FFFFFF;font-family:'DejaVu Sans','DejaVu Serif',Georgia,sans-serif">
  <rect x="0" y="0" width="760" height="440" fill="#FFFFFF"/>
  <rect x="14" y="14" width="732" height="412" fill="#FFFFFF" stroke="#0F0D0B" stroke-width="1.2"/>
  <text x="380" y="42" text-anchor="middle" font-size="14" font-weight="bold" fill="#0F0D0B">EMPIRICAL FALSIFICATION FIREWALL: H11 (4D) vs. H12 BULK vs. FOLDING</text>
  <line x1="36" y1="54" x2="724" y2="54" stroke="#8E7F6B" stroke-width="0.9"/>

  <rect x="40" y="76" width="316" height="302" fill="#F4F6F2" stroke="#64705B" stroke-width="1.8"/>
  <rect x="40" y="76" width="316" height="34" fill="#64705B"/>
  <text x="198" y="98" text-anchor="middle" font-size="12" font-weight="bold" fill="#FFFFFF">IGRT-H11 Preregistered (4D Only)</text>
  <text x="60" y="138" font-size="11" fill="#0F0D0B">P1: Dual-Clock 2:1 ULDM Lock</text>
  <text x="60" y="172" font-size="11" fill="#0F0D0B">P2: SiO2 DP Collapse (1.028 um)</text>
  <text x="60" y="206" font-size="11" fill="#0F0D0B">P3: LiteBIRD Ekpyrotic B-Modes</text>
  <text x="60" y="240" font-size="11" fill="#0F0D0B">P4: WKB K_echo = 0.184 Echoes</text>
  <text x="60" y="274" font-size="11" fill="#0F0D0B">P5: CANNEX Chameleon (2.44 meV)</text>
  <text x="60" y="308" font-size="11" fill="#0F0D0B">P6: HL-LHC Phi_portal (4.7 sigma)</text>
  <text x="198" y="354" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#64705B">Tests 4D Physics — Does NOT Confirm 5D</text>

  <line x1="362" y1="227" x2="398" y2="227" stroke="#0F0D0B" stroke-width="2"/>
  <polygon points="404,227 394,221 394,233" fill="#0F0D0B"/>

  <rect x="404" y="76" width="316" height="302" fill="#FBF7F4" stroke="#8F5B4A" stroke-width="1.8"/>
  <rect x="404" y="76" width="316" height="34" fill="#8F5B4A"/>
  <text x="562" y="98" text-anchor="middle" font-size="12" font-weight="bold" fill="#FFFFFF">IGRT-H12 5D Probes (P7–P13)</text>
  <text x="422" y="138" font-size="11" fill="#0F0D0B">P7: 10 um KK Yukawa (Tests 5D Bulk)</text>
  <text x="422" y="172" font-size="11" fill="#0F0D0B">P8: 10^-19 Clocks (Tests KK Corr.)</text>
  <text x="422" y="206" font-size="11" fill="#0F0D0B">P9: 10^-6 Slits (Tests Decoherence)</text>
  <text x="422" y="240" font-size="11" fill="#0F0D0B">P10: 3G GW Leakage (Graviton Loss)</text>
  <text x="422" y="274" font-size="11" font-weight="bold" fill="#8F5B4A">P11-P12: Folding (Not Yet Testable)</text>
  <text x="422" y="308" font-size="11" font-weight="bold" fill="#64705B">P13: GW170817 (4.129e-16 Passive)</text>
  <text x="562" y="354" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#8F5B4A">P7–P10 Probe Bulk; P11–P13 Isolate Folding</text>

  <text x="380" y="408" text-anchor="middle" font-size="10" fill="#3A2E26">Preserves H11 preregistration SHA-256 while isolating testable bulk probes from unachievable folding</text>
</svg>`
  }
];

export const H12_FIGURES: H12FigureSpec[] = [...CORE_H12_FIGURES, ...H12_EXPANDED_CHAPTER_FIGURES].sort(
  (a, b) => a.anchorChapter - b.anchorChapter
);

/**
 * Eleven Appendix J Device Schematics (Figures H12-J1 .. H12-J11) + Cutaway Plates for ALL Devices A–K.
 */
export const H12_DEVICE_FIGURES: H12DeviceFigureSpec[] = [
  {
    id: 'h12-fig-j1',
    deviceId: 'Device A',
    figureNumber: 'Figure H12-J1',
    title: 'Device A Schematic: Dual Sr-87 / Yb-171 Optical Lattice Clock & Floquet QFI Readout',
    category: 'CATEGORY B — DERIVED',
    illustrationPath: deviceAImg,
    illustrationTitle: 'Device A Cutaway Plate · Dual Sr-87 / Yb-171 Cryogenic Optical Lattice Clock & QFI Cavity',
    illustrationFilename: 'device_a_qfi_clock.jpg',
    caption:
      'Dual cryogenic optical-lattice interrogation comparing ordinary atomic proper duration τ against Raman-driven projective Hilbert Fisher distance s_QFI inside PU(H). Reaching |δν/ν| ≤ 10⁻¹⁹ places direct Protocol P8 limits on unscreened scalar-radion clock drifts without altering spacetime curvature.',
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 440" width="760" height="440" style="background:#FFFFFF;font-family:'DejaVu Sans','DejaVu Serif',Georgia,sans-serif">
  <rect x="0" y="0" width="760" height="440" fill="#FFFFFF"/>
  <rect x="14" y="14" width="732" height="412" fill="#FFFFFF" stroke="#0F0D0B" stroke-width="1.2"/>
  <text x="380" y="42" text-anchor="middle" font-size="14" font-weight="bold" fill="#0F0D0B">DEVICE A: MODULAR RESONANCE DETECTOR (Sr-87 / Yb-171 LATTICE &amp; QFI LOCK)</text>
  <line x1="36" y1="54" x2="724" y2="54" stroke="#8E7F6B" stroke-width="0.9"/>

  <rect x="42" y="92" width="250" height="220" fill="#FAF8F4" stroke="#0F0D0B" stroke-width="1.8"/>
  <text x="167" y="118" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#0F0D0B">77 K Si Shield &amp; 1e-11 Torr UHV</text>
  <line x1="68" y1="168" x2="266" y2="168" stroke="#64705B" stroke-width="1.8" stroke-dasharray="5,3"/>
  <line x1="68" y1="214" x2="266" y2="214" stroke="#8F5B4A" stroke-width="1.8" stroke-dasharray="5,3"/>
  <circle cx="105" cy="168" r="5" fill="#8F5B4A"/>
  <circle cx="145" cy="168" r="5" fill="#8F5B4A"/>
  <circle cx="185" cy="168" r="5" fill="#8F5B4A"/>
  <circle cx="225" cy="168" r="5" fill="#8F5B4A"/>
  <circle cx="125" cy="214" r="5" fill="#64705B"/>
  <circle cx="167" cy="214" r="5" fill="#64705B"/>
  <circle cx="209" cy="214" r="5" fill="#64705B"/>
  <text x="167" y="256" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#64705B">Sr-87 (698 nm) + Yb-171 (578 nm)</text>
  <text x="167" y="278" text-anchor="middle" font-size="10" fill="#3A2E26">Floquet–Raman Modular Drive</text>

  <line x1="292" y1="202" x2="362" y2="202" stroke="#8F5B4A" stroke-width="2.2"/>
  <polygon points="368,202 356,196 356,208" fill="#8F5B4A"/>
  <text x="330" y="188" text-anchor="middle" font-size="10" font-weight="bold" fill="#8F5B4A">ULE Comb</text>

  <circle cx="445" cy="202" r="70" fill="#FAF8F4" stroke="#64705B" stroke-width="2"/>
  <path d="M 445 132 A 70 70 0 0 1 510 228" fill="none" stroke="#8F5B4A" stroke-width="3.2"/>
  <circle cx="445" cy="132" r="5" fill="#0F0D0B"/>
  <circle cx="510" cy="228" r="5" fill="#8F5B4A"/>
  <text x="445" y="198" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#0F0D0B">ds_QFI in PU(H)</text>
  <text x="445" y="218" text-anchor="middle" font-size="10" fill="#64705B">d tau = alpha_mod ds_QFI</text>
  <text x="445" y="298" text-anchor="middle" font-size="10" fill="#3A2E26">Quantum Cramer–Rao Bound</text>

  <line x1="515" y1="202" x2="554" y2="202" stroke="#0F0D0B" stroke-width="2"/>
  <polygon points="560,202 548,197 548,207" fill="#0F0D0B"/>

  <rect x="560" y="114" width="166" height="176" fill="#FFFFFF" stroke="#64705B" stroke-width="1.6"/>
  <text x="643" y="142" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#0F0D0B">Protocol P8 Output</text>
  <line x1="576" y1="154" x2="710" y2="154" stroke="#8E7F6B" stroke-width="1"/>
  <text x="643" y="182" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#64705B">|dv / v| &lt;= 1e-19</text>
  <text x="643" y="210" text-anchor="middle" font-size="10" fill="#8F5B4A">1 neV KK &lt;= 4.972e-14</text>
  <text x="643" y="238" text-anchor="middle" font-size="10" fill="#0F0D0B">ULDM 2:1 Check (P1)</text>
  <text x="643" y="266" text-anchor="middle" font-size="9.5" fill="#3A2E26">Zero Metric Bending</text>

  <text x="380" y="388" text-anchor="middle" font-size="10.5" fill="#0F0D0B">Tests Eq. (H12.0.2) 1:1 QFI-to-clock lock &amp; scalar-radion stability across 1 Hz–100 kHz</text>
</svg>`
  },
  {
    id: 'h12-fig-j2',
    deviceId: 'Device B',
    figureNumber: 'Figure H12-J2',
    title: 'Device B Schematic: CANNEX-Class 4.2 K Shielded Parallel-Plate 5D Force Balance',
    category: 'CATEGORY B — DERIVED',
    illustrationPath: deviceBImg,
    illustrationTitle: 'Device B Cutaway Plate · CANNEX-Class 4.2 K Parallel-Plate 5D Yukawa Force Balance',
    illustrationFilename: 'device_b_cannex_balance.jpg',
    caption:
      'Sub-10 μm Casimir–Yukawa plate architecture (Protocol P7). A grounded 150 nm gold-coated membrane shields stray EM/Casimir photons while letting gravitational Yukawa forces α_KK e^{−d/R_5} cross to the SiC flexure mirror, extending Eöt-Wash limits from 44 μm (4.485 meV) down to 10 μm (19.733 meV).',
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 440" width="760" height="440" style="background:#FFFFFF;font-family:'DejaVu Sans','DejaVu Serif',Georgia,sans-serif">
  <rect x="0" y="0" width="760" height="440" fill="#FFFFFF"/>
  <rect x="14" y="14" width="732" height="412" fill="#FFFFFF" stroke="#0F0D0B" stroke-width="1.2"/>
  <text x="380" y="42" text-anchor="middle" font-size="14" font-weight="bold" fill="#0F0D0B">DEVICE B: 5D GEOMETRIC RESONATOR (4.2 K PARALLEL-PLATE FORCE BALANCE)</text>
  <line x1="36" y1="54" x2="724" y2="54" stroke="#8E7F6B" stroke-width="0.9"/>

  <rect x="130" y="84" width="220" height="36" fill="#FAF8F4" stroke="#64705B" stroke-width="1.6"/>
  <text x="240" y="106" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#64705B">Fabry–Perot Laser (1e-13 m/rtHz)</text>
  <line x1="240" y1="120" x2="240" y2="160" stroke="#8F5B4A" stroke-width="2" stroke-dasharray="4,3"/>

  <rect x="105" y="160" width="270" height="28" fill="#8E7F6B" stroke="#0F0D0B" stroke-width="1.5"/>
  <text x="240" y="179" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#FFFFFF">SiC Sensor Mirror on Flexure Springs</text>

  <line x1="72" y1="226" x2="408" y2="226" stroke="#8F5B4A" stroke-width="3.2"/>
  <text x="240" y="212" text-anchor="middle" font-size="10" font-weight="bold" fill="#8F5B4A">150 nm Au/Si3N4 EM Shield (Blocks Casimir &amp; Patch Fields)</text>

  <rect x="105" y="280" width="270" height="36" fill="#3A2E26"/>
  <text x="240" y="303" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#FFFFFF">W/Au Source Mass (Piezo d = 5–20 um)</text>

  <line x1="160" y1="280" x2="160" y2="194" stroke="#64705B" stroke-width="2"/>
  <polygon points="160,188 155,200 165,200" fill="#64705B"/>
  <line x1="320" y1="280" x2="320" y2="194" stroke="#64705B" stroke-width="2"/>
  <polygon points="320,188 315,200 325,200" fill="#64705B"/>
  <text x="240" y="262" text-anchor="middle" font-size="10" font-weight="bold" fill="#64705B">Gravity + Yukawa alpha_KK exp(-d/R_5)</text>

  <rect x="438" y="88" width="282" height="236" fill="#FAF8F4" stroke="#0F0D0B" stroke-width="1.4"/>
  <text x="579" y="116" text-anchor="middle" font-size="12" font-weight="bold" fill="#0F0D0B">Protocol P7 Reach vs. H11 P5</text>
  <line x1="458" y1="128" x2="700" y2="128" stroke="#8E7F6B" stroke-width="1"/>
  <text x="458" y="158" font-size="10.5" fill="#0F0D0B">2020 Eot-Wash: R_5 &lt;= 44 um (4.485 meV)</text>
  <text x="458" y="188" font-size="10.5" font-weight="bold" fill="#8F5B4A">Device B (P7): R_5 &lt;= 10 um (19.733 meV)</text>
  <text x="458" y="218" font-size="10.5" fill="#64705B">Noise Floor: 3e-11 N/m^2 at 4.2 K</text>
  <text x="458" y="248" font-size="10.5" fill="#0F0D0B">Template: Exponential vs. Chameleon</text>
  <text x="458" y="288" font-size="10" font-weight="bold" fill="#8F5B4A">Does NOT cure 10^59 Casimir deficit</text>

  <text x="380" y="388" text-anchor="middle" font-size="10.5" fill="#0F0D0B">4.4x sensitivity extension over Eot-Wash 5D compactification bounds (2026–2029 horizon)</text>
</svg>`
  },
  {
    id: 'h12-fig-j3',
    deviceId: 'Device C',
    figureNumber: 'Figure H12-J3',
    title: 'Device C Schematic: Graded-Index (GRIN) Photonic Beltrami Shortcut Analog Slab',
    category: 'CATEGORY D — SPECULATIVE ENGINEERING',
    illustrationPath: deviceCImg,
    illustrationTitle: 'Device C Cutaway Plate · Graded-Index Dielectric Slab Waveguide Beltrami Analog',
    illustrationFilename: 'device_c_grin_slab.jpg',
    caption:
      'Photonic crystal slab (W = 500 μm, Δn/n ≈ 0.35 at 1550 nm) demonstrating Chapter 4 Beltrami turning geodesics on a laboratory bench. Pulses diving into lower-index interior layers outrun surface-bound pulses (η_analog ≈ 0.74) strictly below vacuum speed c.',
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 440" width="760" height="440" style="background:#FFFFFF;font-family:'DejaVu Sans','DejaVu Serif',Georgia,sans-serif">
  <rect x="0" y="0" width="760" height="440" fill="#FFFFFF"/>
  <rect x="14" y="14" width="732" height="412" fill="#FFFFFF" stroke="#0F0D0B" stroke-width="1.2"/>
  <text x="380" y="42" text-anchor="middle" font-size="14" font-weight="bold" fill="#0F0D0B">DEVICE C: GRIN WAVEGUIDE BELTRAMI FOLDING ANALOG (1550 nm SLAB)</text>
  <line x1="36" y1="54" x2="724" y2="54" stroke="#8E7F6B" stroke-width="0.9"/>

  <rect x="115" y="118" width="465" height="205" fill="#FAF8F4" stroke="#0F0D0B" stroke-width="1.8"/>
  <rect x="116" y="119" width="463" height="42" fill="#EAE2D2"/>
  <rect x="116" y="161" width="463" height="58" fill="#F3EDE2"/>
  <rect x="116" y="219" width="463" height="103" fill="#FAF8F4"/>

  <line x1="115" y1="138" x2="580" y2="138" stroke="#0F0D0B" stroke-width="2.4" stroke-dasharray="7,4"/>
  <text x="348" y="102" text-anchor="middle" font-size="11" font-weight="bold" fill="#0F0D0B">Surface Pulse (y = 0, slow high index n_0 = 1.95)</text>

  <path d="M 115 138 Q 348 395 580 138" fill="none" stroke="#8F5B4A" stroke-width="3.2"/>
  <text x="348" y="294" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#8F5B4A">Bulk-Diving Arch (low index n_W = 1.45, eta_analog = 0.7436)</text>

  <circle cx="115" cy="138" r="6" fill="#64705B"/>
  <circle cx="580" cy="138" r="6" fill="#64705B"/>
  <text x="64" y="138" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#64705B">1550 nm</text>
  <text x="64" y="156" text-anchor="middle" font-size="10" fill="#3A2E26">120 fs In</text>

  <text x="656" y="138" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#64705B">Cross-Corr</text>
  <text x="656" y="156" text-anchor="middle" font-size="10" fill="#8F5B4A">(+/- 15 fs Out)</text>

  <line x1="612" y1="120" x2="612" y2="314" stroke="#0F0D0B" stroke-width="1.6"/>
  <polygon points="612,322 607,310 617,310" fill="#0F0D0B"/>
  <text x="670" y="218" text-anchor="middle" font-size="10" font-weight="bold" fill="#3A2E26">Depth W = 500 um</text>
  <text x="670" y="236" text-anchor="middle" font-size="9.5" fill="#8E7F6B">n(y) decreases</text>

  <text x="380" y="388" text-anchor="middle" font-size="10.5" fill="#64705B">Gordon optical metric analog solves Beltrami ODE physically with every ray velocity strictly &lt; c_vacuum</text>
</svg>`
  },
  {
    id: 'h12-fig-j4',
    deviceId: 'Device D',
    figureNumber: 'Figure H12-J4',
    title: 'Device D Schematic: Phase-Locked SLD Quantum Fisher Double-Slit Interferometer',
    category: 'CATEGORY B — DERIVED',
    illustrationPath: deviceDImg,
    illustrationTitle: 'Device D Cutaway Plate · UHV Phase-Locked SLD Quantum Fisher Double-Slit Bench',
    illustrationFilename: 'device_d_doubleslit_qfi.jpg',
    caption:
      'Mach–Zehnder / Cs-133 atom interferometer with variable path-marker overlap γ_coh sweeping V² + D_QFI² = 1 across N = 10¹⁴ events (Protocol P9, 10⁻⁶ visibility sensitivity). Directly isolates internal fiber geometry PU(H) ⊥ ∂/∂y.',
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 440" width="760" height="440" style="background:#FFFFFF;font-family:'DejaVu Sans','DejaVu Serif',Georgia,sans-serif">
  <rect x="0" y="0" width="760" height="440" fill="#FFFFFF"/>
  <rect x="14" y="14" width="732" height="412" fill="#FFFFFF" stroke="#0F0D0B" stroke-width="1.2"/>
  <text x="380" y="42" text-anchor="middle" font-size="14" font-weight="bold" fill="#0F0D0B">DEVICE D: PRECISION DOUBLE-SLIT SLD FISHER INTERFEROMETER (P9)</text>
  <line x1="36" y1="54" x2="724" y2="54" stroke="#8E7F6B" stroke-width="0.9"/>

  <circle cx="56" cy="218" r="6" fill="#8F5B4A"/>
  <text x="56" y="244" text-anchor="middle" font-size="10" font-weight="bold" fill="#0F0D0B">Photon / Cs</text>
  <line x1="62" y1="218" x2="128" y2="218" stroke="#0F0D0B" stroke-width="2"/>
  <line x1="116" y1="230" x2="140" y2="206" stroke="#64705B" stroke-width="3"/>

  <polyline points="128,218 128,128 338,128 338,218" fill="none" stroke="#64705B" stroke-width="2.2"/>
  <polyline points="128,218 128,308 338,308 338,218" fill="none" stroke="#8F5B4A" stroke-width="2.2"/>

  <rect x="190" y="106" width="88" height="38" fill="#FAF8F4" stroke="#0F0D0B" stroke-width="1.4"/>
  <text x="234" y="130" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#0F0D0B">Phase Phi</text>
  <rect x="182" y="288" width="104" height="38" fill="#FAF8F4" stroke="#8F5B4A" stroke-width="1.4"/>
  <text x="234" y="312" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#8F5B4A">Ancilla gamma</text>

  <line x1="326" y1="230" x2="350" y2="206" stroke="#64705B" stroke-width="3"/>
  <line x1="338" y1="218" x2="394" y2="218" stroke="#0F0D0B" stroke-width="2"/>

  <rect x="394" y="176" width="82" height="84" fill="#FAF8F4" stroke="#0F0D0B" stroke-width="1.6"/>
  <text x="435" y="212" text-anchor="middle" font-size="11" font-weight="bold" fill="#0F0D0B">SLD QFI</text>
  <text x="435" y="232" text-anchor="middle" font-size="10" fill="#64705B">N = 1e14</text>

  <!-- Quarter circle curve -->
  <line x1="525" y1="308" x2="700" y2="308" stroke="#0F0D0B" stroke-width="1.6"/>
  <line x1="525" y1="118" x2="525" y2="308" stroke="#0F0D0B" stroke-width="1.6"/>
  <path d="M 525 138 A 170 170 0 0 1 695 308" fill="none" stroke="#64705B" stroke-width="2.8"/>
  <circle cx="525" cy="138" r="4.5" fill="#8F5B4A"/>
  <circle cx="568" cy="144" r="4.5" fill="#8F5B4A"/>
  <circle cx="612" cy="164" r="4.5" fill="#8F5B4A"/>
  <circle cx="655" cy="204" r="4.5" fill="#8F5B4A"/>
  <circle cx="680" cy="242" r="4.5" fill="#8F5B4A"/>
  <circle cx="695" cy="308" r="4.5" fill="#8F5B4A"/>
  <text x="615" y="332" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#0F0D0B">V = gamma_coh (P9 &lt; 1e-6)</text>
  <text x="504" y="218" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#0F0D0B" transform="rotate(-90 504 218)">D_QFI</text>

  <text x="380" y="388" text-anchor="middle" font-size="10.5" fill="#64705B">Measures V^2 + D_QFI^2 = 1 to 1e-7 shot-noise precision without extra-dimensional transit</text>
</svg>`
  },
  {
    id: 'h12-fig-j5',
    deviceId: 'Device E',
    figureNumber: 'Figure H12-J5',
    title: 'Device E Schematic: Dual 3G Gravitational-Wave Network (P10/P13) & 50-Qubit Scrambler',
    category: 'CATEGORY C — CONJECTURAL',
    illustrationPath: deviceEImg,
    illustrationTitle: 'Device E Cutaway Plate · Dual-Track 3G ET/CE Gravitational Observatory & 50-Qubit Scrambler',
    illustrationFilename: 'device_e_gw_scrambler.jpg',
    caption:
      'Dual-track connectivity testbed: Track E1 combines triangular Einstein Telescope + Cosmic Explorer polarization null streams (|h_scalar/h_tensor| ≤ 10⁻³) with stacked 150-BNS timing (σ_{η,3G} = 9.916 × 10⁻¹⁹); Track E2 realizes 50-qubit holographic TFD scrambling constrained strictly by classical channel causality.',
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 440" width="760" height="440" style="background:#FFFFFF;font-family:'DejaVu Sans','DejaVu Serif',Georgia,sans-serif">
  <rect x="0" y="0" width="760" height="440" fill="#FFFFFF"/>
  <rect x="14" y="14" width="732" height="412" fill="#FFFFFF" stroke="#0F0D0B" stroke-width="1.2"/>
  <text x="380" y="42" text-anchor="middle" font-size="14" font-weight="bold" fill="#0F0D0B">DEVICE E: 3G GRAVITATIONAL-WAVE ARRAY &amp; 50-QUBIT CAUSAL SCRAMBLER</text>
  <line x1="36" y1="54" x2="724" y2="54" stroke="#8E7F6B" stroke-width="0.9"/>

  <line x1="380" y1="74" x2="380" y2="364" stroke="#8E7F6B" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="198" y="88" text-anchor="middle" font-size="12" font-weight="bold" fill="#64705B">Track E1: 3G GW Network (P10 &amp; P13)</text>

  <polygon points="88,248 218,248 153,128" fill="#FAF8F4" stroke="#0F0D0B" stroke-width="2.2"/>
  <text x="153" y="216" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#0F0D0B">ET 10 km Triangle</text>
  <polyline points="248,248 338,248 338,140" fill="none" stroke="#8F5B4A" stroke-width="2.6"/>
  <text x="296" y="268" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#8F5B4A">CE 40 km L</text>
  <text x="198" y="308" text-anchor="middle" font-size="10.5" fill="#0F0D0B">Scalar Leak |h_s/h_t| &lt;= 1e-3</text>
  <text x="198" y="332" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#64705B">150-BNS Stack: 9.916e-19</text>

  <text x="562" y="88" text-anchor="middle" font-size="12" font-weight="bold" fill="#8F5B4A">Track E2: 50-Qubit TFD Circuit (20 mK)</text>
  <rect x="412" y="130" width="122" height="128" fill="#FAF8F4" stroke="#64705B" stroke-width="1.8"/>
  <text x="473" y="188" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#0F0D0B">Register L</text>
  <text x="473" y="210" text-anchor="middle" font-size="10" fill="#64705B">(25 Transmons)</text>

  <rect x="594" y="130" width="122" height="128" fill="#FAF8F4" stroke="#64705B" stroke-width="1.8"/>
  <text x="655" y="188" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#0F0D0B">Register R</text>
  <text x="655" y="210" text-anchor="middle" font-size="10" fill="#64705B">(25 Transmons)</text>

  <line x1="534" y1="194" x2="594" y2="194" stroke="#8F5B4A" stroke-width="2.6" stroke-dasharray="5,3"/>
  <text x="564" y="180" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#8F5B4A">O_L O_R</text>
  <text x="564" y="308" text-anchor="middle" font-size="10.5" fill="#0F0D0B">Holographic Teleportation Analog</text>
  <text x="564" y="332" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#8F5B4A">Zero FTL Bits (Classical Channel Lock)</text>

  <text x="380" y="394" text-anchor="middle" font-size="10.5" fill="#3A2E26">P10/P13 test cosmic bulk leakage &amp; propagation speed by 2035+; Track E2 verifies causal OTOC bounds today</text>
</svg>`
  },
  {
    id: 'h12-fig-j6',
    deviceId: 'Device F',
    figureNumber: 'Figure H12-J6',
    title: 'Device F Schematic: 50 nK Rb-87 Sonic Waterfall Horizon & Hayward Core Echo Simulator',
    category: 'CATEGORY B — DERIVED',
    illustrationPath: deviceFImg,
    illustrationTitle: 'Device F Cutaway Plate · 50 nK Rb-87 Sonic Waterfall BEC & Hayward Core Echo Cell',
    illustrationFilename: 'device_f_bec_waterfall.jpg',
    caption:
      'Quasi-1D Bose–Einstein condensate accelerating past sound speed c_s ≈ 1.5 mm/s across a sculpted optical waterfall while a secondary Feshbach core step reproduces tortoise-barrier echo pulses (K_echo = 0.184 analog) in connected density correlations G^(2)(x, x\').',
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 440" width="760" height="440" style="background:#FFFFFF;font-family:'DejaVu Sans','DejaVu Serif',Georgia,sans-serif">
  <rect x="0" y="0" width="760" height="440" fill="#FFFFFF"/>
  <rect x="14" y="14" width="732" height="412" fill="#FFFFFF" stroke="#0F0D0B" stroke-width="1.2"/>
  <text x="380" y="42" text-anchor="middle" font-size="14" font-weight="bold" fill="#0F0D0B">DEVICE F: Rb-87 BEC SONIC HORIZON &amp; HAYWARD CORE ECHO SIMULATOR</text>
  <line x1="36" y1="54" x2="724" y2="54" stroke="#8E7F6B" stroke-width="0.9"/>

  <path d="M 60 156 L 280 156 Q 345 156 372 246 L 545 246 L 545 312 L 60 312 Z" fill="#FAF8F4" stroke="#64705B" stroke-width="2.2"/>
  <line x1="336" y1="88" x2="336" y2="336" stroke="#8F5B4A" stroke-width="2.2" stroke-dasharray="6,4"/>
  <text x="336" y="78" text-anchor="middle" font-size="11" font-weight="bold" fill="#8F5B4A">Sonic Horizon (v = c_s = 1.5 mm/s)</text>

  <rect x="486" y="206" width="26" height="106" fill="#8F5B4A" opacity="0.88"/>
  <text x="499" y="192" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#8F5B4A">Core Step</text>

  <text x="172" y="206" text-anchor="middle" font-size="11" font-weight="bold" fill="#0F0D0B">Subsonic Outside (v &lt; c_s)</text>
  <text x="172" y="226" text-anchor="middle" font-size="10" fill="#64705B">Outbound Hawking Phonons</text>

  <path d="M 326 180 L 200 180" stroke="#64705B" stroke-width="2.4"/>
  <polygon points="192,180 205,175 205,185" fill="#64705B"/>
  <path d="M 346 278 L 478 278" stroke="#8F5B4A" stroke-width="2.4"/>
  <polygon points="486,278 473,273 473,283" fill="#8F5B4A"/>
  <path d="M 484 260 Q 412 220 342 232" fill="none" stroke="#0F0D0B" stroke-width="2" stroke-dasharray="4,3"/>
  <text x="412" y="218" text-anchor="middle" font-size="10" font-weight="bold" fill="#0F0D0B">K_echo = 0.184 Analog</text>

  <rect x="572" y="106" width="154" height="206" fill="#FAF8F4" stroke="#0F0D0B" stroke-width="1.4"/>
  <text x="649" y="134" text-anchor="middle" font-size="11" font-weight="bold" fill="#0F0D0B">G^(2)(x, x') Map</text>
  <line x1="586" y1="146" x2="712" y2="146" stroke="#8E7F6B" stroke-width="1"/>
  <line x1="594" y1="274" x2="704" y2="168" stroke="#64705B" stroke-width="2.4"/>
  <line x1="612" y1="274" x2="704" y2="192" stroke="#8F5B4A" stroke-width="2" stroke-dasharray="4,3"/>
  <text x="649" y="298" text-anchor="middle" font-size="9.5" fill="#3A2E26">0.9 um In-Situ Imaging</text>

  <text x="380" y="388" text-anchor="middle" font-size="10.5" fill="#64705B">Acoustic dispersion simulator verifies H11 tortoise-barrier ringdown echoes without curved gravity</text>
</svg>`
  },
  {
    id: 'h12-fig-j7',
    deviceId: 'Device G',
    figureNumber: 'Figure H12-J7',
    title: 'Device G Schematic: Twin-Brane Evanescent Portal Simulator (Si3N4 Microring Pair)',
    category: 'CATEGORY D — SPECULATIVE ENGINEERING',
    illustrationPath: deviceGImg,
    illustrationTitle: 'Device G Cutaway Plate · Evanescent Silicon-Nitride Dual-Brane Optical Portal Cavity',
    illustrationFilename: 'device_g_portal_cavity.jpg',
    caption:
      'Dual vertically stacked Si_3N_4 microring resonators (Q = 1.2 × 10⁷ at 1550 nm, linewidth κ/2π = 16.118 MHz, tunnel coupling J/2π = 4.2 GHz, cooperativity C = 2.716 × 10⁵) realizing an optical evanescent "mathematical portal" analog matching the exact Einstein–Maxwell finite-span geodesic ratio η_fold^EM = sin(1) = 0.84147 strictly below vacuum speed c (v_g ≤ 0.5618c).',
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 440" width="760" height="440" style="background:#FFFFFF;font-family:'DejaVu Sans','DejaVu Serif',Georgia,sans-serif">
  <rect x="0" y="0" width="760" height="440" fill="#FFFFFF"/>
  <rect x="14" y="14" width="732" height="412" fill="#FFFFFF" stroke="#0F0D0B" stroke-width="1.2"/>
  <text x="380" y="42" text-anchor="middle" font-size="14" font-weight="bold" fill="#0F0D0B">DEVICE G: TWIN-BRANE EVANESCENT PORTAL CAVITY (Si3N4 MICRORINGS)</text>
  <line x1="36" y1="54" x2="724" y2="54" stroke="#8E7F6B" stroke-width="0.9"/>

  <line x1="56" y1="130" x2="395" y2="130" stroke="#0F0D0B" stroke-width="2.6"/>
  <text x="155" y="114" text-anchor="middle" font-size="11" font-weight="bold" fill="#0F0D0B">Brane Waveguide A (1550 nm)</text>

  <line x1="56" y1="306" x2="395" y2="306" stroke="#64705B" stroke-width="2.6"/>
  <text x="155" y="330" text-anchor="middle" font-size="11" font-weight="bold" fill="#64705B">Target Brane Waveguide B</text>

  <circle cx="225" cy="176" r="36" fill="#FAF8F4" stroke="#8F5B4A" stroke-width="2.5"/>
  <circle cx="225" cy="260" r="36" fill="#FAF8F4" stroke="#64705B" stroke-width="2.5"/>
  <line x1="225" y1="212" x2="225" y2="224" stroke="#8F5B4A" stroke-width="3.2" stroke-dasharray="2,2"/>
  <text x="322" y="216" font-size="10.5" font-weight="bold" fill="#8F5B4A">J / 2pi = 4.2 GHz</text>
  <text x="322" y="236" font-size="10" fill="#3A2E26">kappa = 16.118 MHz</text>

  <rect x="444" y="102" width="276" height="236" fill="#FAF8F4" stroke="#0F0D0B" stroke-width="1.4"/>
  <text x="582" y="130" text-anchor="middle" font-size="12" font-weight="bold" fill="#0F0D0B">Verified EM Portal Analogs</text>
  <line x1="464" y1="142" x2="700" y2="142" stroke="#8E7F6B" stroke-width="1"/>
  <text x="464" y="172" font-size="10.5" font-weight="bold" fill="#64705B">Q = 1.2e7 | n_eff = 1.78</text>
  <text x="464" y="202" font-size="10.5" font-weight="bold" fill="#8F5B4A">Cooperativity C = 2.716e5</text>
  <text x="464" y="232" font-size="10.5" fill="#0F0D0B">Target eta_EM = sin(1) = 0.84147</text>
  <text x="464" y="262" font-size="10.5" fill="#64705B">Group speed v_g = 0.5618 c &lt; c</text>
  <text x="464" y="298" font-size="10" fill="#3A2E26">Optical mode transfer strictly &lt; c</text>

  <text x="380" y="390" text-anchor="middle" font-size="10.5" fill="#0F0D0B">Resonant multi-brane optical coupling without macroscopic wormholes or superluminal bits</text>
</svg>`
  },
  {
    id: 'h12-fig-j8',
    deviceId: 'Device H',
    figureNumber: 'Figure H12-J8',
    title: 'Device H Schematic: Tabletop Pockels–Ring Deutsch–Lloyd Time-Loop Simulator',
    category: 'CATEGORY D — SPECULATIVE ENGINEERING',
    illustrationPath: deviceHImg,
    illustrationTitle: 'Device H Cutaway Plate · Optical Fiber Polarization Loop & Deutsch–Lloyd CTC Simulator',
    illustrationFilename: 'device_h_timemachine_loop.jpg',
    caption:
      'Optical-table polarization-entangled Pockels loop (τ_loop = 10.0 ns at 1550 nm) solving the Deutsch–Lloyd self-consistency fixed point ρ_CTC = Tr_A[U(ρ_in ⊗ ρ_CTC)U†] for gate U = (H ⊗ I) CNOT_{A→B}, converging cleanly to ρ_CTC = diag(0.5, 0.5) (Frobenius residual < 10⁻¹⁴) without backward physical time travel.',
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 440" width="760" height="440" style="background:#FFFFFF;font-family:'DejaVu Sans','DejaVu Serif',Georgia,sans-serif">
  <rect x="0" y="0" width="760" height="440" fill="#FFFFFF"/>
  <rect x="14" y="14" width="732" height="412" fill="#FFFFFF" stroke="#0F0D0B" stroke-width="1.2"/>
  <text x="380" y="42" text-anchor="middle" font-size="14" font-weight="bold" fill="#0F0D0B">DEVICE H: TABLETOP POCKELS-RING DEUTSCH–LLOYD LOOP SIMULATOR</text>
  <line x1="36" y1="54" x2="724" y2="54" stroke="#8E7F6B" stroke-width="0.9"/>

  <line x1="56" y1="158" x2="180" y2="158" stroke="#0F0D0B" stroke-width="2.4"/>
  <text x="116" y="140" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#0F0D0B">Qubit A (|0&gt;)</text>

  <rect x="180" y="122" width="128" height="106" fill="#FAF8F4" stroke="#8F5B4A" stroke-width="2"/>
  <text x="244" y="166" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#8F5B4A">Pockels Gate U</text>
  <text x="244" y="188" text-anchor="middle" font-size="10" fill="#0F0D0B">(H x I) CNOT_AB</text>

  <line x1="308" y1="158" x2="396" y2="158" stroke="#0F0D0B" stroke-width="2.4"/>
  <rect x="396" y="132" width="90" height="52" fill="#FAF8F4" stroke="#64705B" stroke-width="1.6"/>
  <text x="441" y="163" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#64705B">Tomography</text>

  <path d="M 308 212 L 366 212 L 366 306 L 122 306 L 122 212 L 180 212" fill="none" stroke="#64705B" stroke-width="2.6"/>
  <circle cx="244" cy="306" r="20" fill="#FFFFFF" stroke="#64705B" stroke-width="1.8"/>
  <text x="244" y="310" text-anchor="middle" font-size="10" font-weight="bold" fill="#64705B">10 ns</text>
  <text x="244" y="346" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#64705B">Fiber Feedback Loop B (rho_CTC)</text>

  <rect x="506" y="102" width="218" height="236" fill="#FAF8F4" stroke="#0F0D0B" stroke-width="1.4"/>
  <text x="615" y="130" text-anchor="middle" font-size="12" font-weight="bold" fill="#0F0D0B">Deutsch Fixed Point</text>
  <line x1="524" y1="142" x2="706" y2="142" stroke="#8E7F6B" stroke-width="1"/>
  <text x="526" y="174" font-size="10.5" font-weight="bold" fill="#0F0D0B">rho_CTC = diag(0.5, 0.5)</text>
  <text x="526" y="204" font-size="10.5" font-weight="bold" fill="#64705B">Residual &lt; 1e-14 (Exact)</text>
  <text x="526" y="234" font-size="10.5" fill="#8F5B4A">Grandfather paradox resolved</text>
  <text x="526" y="264" font-size="10" fill="#3A2E26">Zero backward clock reversal</text>

  <text x="380" y="392" text-anchor="middle" font-size="10.5" fill="#3A2E26">Quantum post-selection circuit emulates self-consistency equations inside forward-causal 5D lab time</text>
</svg>`
  },
  {
    id: 'h12-fig-j9',
    deviceId: 'Device I',
    figureNumber: 'Figure H12-J9',
    title: 'Device I Schematic: Parametric Casimir–Modular Vacuum Harvester & Second-Law Calorimeter',
    category: 'CATEGORY B — DERIVED',
    illustrationPath: deviceIImg,
    illustrationTitle: 'Device I Cutaway Plate · Au/SiC MEMS 100 nm Casimir Cavity & Superconducting NIS Calorimeter',
    illustrationFilename: 'device_i_vacuum_harvester.jpg',
    caption:
      'Gold/SiC parallel-plate MEMS cavity at gap d = 100 nm (A = 1 cm², static Casimir pressure P_C = 13.001 Pa, F_C = 1.3001 mN) modulated at 50 MHz (Δd = 10 nm, (v/c)² = 1.098 × 10⁻¹⁶). Paired with a superconducting NIS calorimeter verifying Araki relative-entropy work bound ΔW_out ≤ ΔF_mod (no over-unity free energy).',
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 440" width="760" height="440" style="background:#FFFFFF;font-family:'DejaVu Sans','DejaVu Serif',Georgia,sans-serif">
  <rect x="0" y="0" width="760" height="440" fill="#FFFFFF"/>
  <rect x="14" y="14" width="732" height="412" fill="#FFFFFF" stroke="#0F0D0B" stroke-width="1.2"/>
  <text x="380" y="42" text-anchor="middle" font-size="14" font-weight="bold" fill="#0F0D0B">DEVICE I: PARAMETRIC CASIMIR HARVESTER &amp; 2ND-LAW CALORIMETER</text>
  <line x1="36" y1="54" x2="724" y2="54" stroke="#8E7F6B" stroke-width="0.9"/>

  <rect x="76" y="128" width="286" height="36" fill="#8E7F6B" stroke="#0F0D0B" stroke-width="1.6"/>
  <text x="219" y="151" text-anchor="middle" font-size="11" font-weight="bold" fill="#FFFFFF">Top Au/SiC Membrane (A = 1 cm^2)</text>

  <rect x="76" y="236" width="286" height="40" fill="#3A2E26"/>
  <text x="219" y="261" text-anchor="middle" font-size="11" font-weight="bold" fill="#FFFFFF">Piezo Driver (50 MHz, delta d = 10 nm)</text>

  <line x1="100" y1="166" x2="100" y2="234" stroke="#8F5B4A" stroke-width="2"/>
  <line x1="338" y1="234" x2="338" y2="166" stroke="#8F5B4A" stroke-width="2"/>
  <text x="219" y="206" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#8F5B4A">Gap d = 100 nm (P_C = 13.001 Pa)</text>

  <line x1="362" y1="202" x2="432" y2="202" stroke="#64705B" stroke-width="2.4" stroke-dasharray="5,3"/>
  <polygon points="438,202 426,196 426,208" fill="#64705B"/>

  <rect x="438" y="102" width="282" height="236" fill="#FAF8F4" stroke="#64705B" stroke-width="1.6"/>
  <text x="579" y="130" text-anchor="middle" font-size="12" font-weight="bold" fill="#0F0D0B">Araki Thermodynamic Audit</text>
  <line x1="458" y1="142" x2="700" y2="142" stroke="#8E7F6B" stroke-width="1"/>
  <text x="458" y="174" font-size="10.5" font-weight="bold" fill="#64705B">Force F_C = 1.3001 mN (1 cm^2)</text>
  <text x="458" y="204" font-size="10.5" fill="#8F5B4A">DCE ratio (v/c)^2 = 1.098e-16</text>
  <text x="458" y="234" font-size="10.5" fill="#0F0D0B">Extractable: dW_out &lt;= dF_mod</text>
  <text x="458" y="264" font-size="10.5" font-weight="bold" fill="#8F5B4A">Strict Law: Pump Work &gt;= Output</text>
  <text x="458" y="294" font-size="10" fill="#3A2E26">Zero over-unity "free energy"</text>

  <text x="380" y="390" text-anchor="middle" font-size="10.5" fill="#0F0D0B">Converts mechanical piezo work into DCE microwave photons strictly inside Araki Second Law</text>
</svg>`
  },
  {
    id: 'h12-fig-j10',
    deviceId: 'Device J',
    figureNumber: 'Figure H12-J10',
    title: 'Device J Schematic: Unruh–DeWitt Accelerated Ion-Trap Clock & KMS Engine',
    category: 'CATEGORY C — CONJECTURAL',
    illustrationPath: deviceJImg,
    illustrationTitle: 'Device J Cutaway Plate · Cryogenic Paul-Trap Rindler Accelerometer & KMS Thermal Clock',
    illustrationFilename: 'device_j_unruh_engine.jpg',
    caption:
      'Micro-segmented Paul trap accelerating trapped ions at transient a = 10¹⁶ m/s² (Unruh temperature T_U = 40.55 μK; KMS period β_U ℏ = 2π c / a = 1.88365 × 10⁻⁷ s, scaling linearly to 40.55 K at 10²² m/s² LWFA fields) to directly verify Eq. (H12.0.2) Tomita–Takesaki thermal-time correspondence.',
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 440" width="760" height="440" style="background:#FFFFFF;font-family:'DejaVu Sans','DejaVu Serif',Georgia,sans-serif">
  <rect x="0" y="0" width="760" height="440" fill="#FFFFFF"/>
  <rect x="14" y="14" width="732" height="412" fill="#FFFFFF" stroke="#0F0D0B" stroke-width="1.2"/>
  <text x="380" y="42" text-anchor="middle" font-size="14" font-weight="bold" fill="#0F0D0B">DEVICE J: UNRUH–DEWITT ION-TRAP CLOCK &amp; KMS MODULAR ENGINE</text>
  <line x1="36" y1="54" x2="724" y2="54" stroke="#8E7F6B" stroke-width="0.9"/>

  <rect x="52" y="106" width="320" height="222" fill="#FAF8F4" stroke="#0F0D0B" stroke-width="1.8"/>
  <text x="212" y="136" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#0F0D0B">Segmented RF Paul Trap (4.2 K)</text>
  <line x1="82" y1="216" x2="342" y2="216" stroke="#8E7F6B" stroke-width="1.8" stroke-dasharray="5,3"/>
  <circle cx="144" cy="216" r="6" fill="#8F5B4A"/>
  <circle cx="212" cy="216" r="6" fill="#8F5B4A"/>
  <circle cx="280" cy="216" r="6" fill="#8F5B4A"/>
  <path d="M 144 190 Q 212 162 280 190" fill="none" stroke="#64705B" stroke-width="2.6"/>
  <polygon points="288,194 275,185 280,198" fill="#64705B"/>
  <text x="212" y="264" text-anchor="middle" font-size="11" font-weight="bold" fill="#8F5B4A">Acceleration a = 1e16 m/s^2</text>
  <text x="212" y="286" text-anchor="middle" font-size="10" fill="#64705B">Rindler Horizon Thermality Sensor</text>

  <rect x="404" y="106" width="310" height="222" fill="#FAF8F4" stroke="#64705B" stroke-width="1.6"/>
  <text x="559" y="134" text-anchor="middle" font-size="12" font-weight="bold" fill="#0F0D0B">Exact Araki KMS Equivalence</text>
  <line x1="422" y1="146" x2="696" y2="146" stroke="#8E7F6B" stroke-width="1"/>
  <text x="424" y="178" font-size="10.5" font-weight="bold" fill="#64705B">Trap T_U = 40.55 uK (a = 1e16)</text>
  <text x="424" y="208" font-size="10.5" fill="#8F5B4A">LWFA Ref T_U = 40.55 K (a = 1e22)</text>
  <text x="424" y="238" font-size="10.5" font-weight="bold" fill="#0F0D0B">beta_U * hbar = 2 pi c / a</text>
  <text x="424" y="268" font-size="10.5" fill="#64705B">= 1.88365e-7 s (&lt; 1e-14 error)</text>
  <text x="424" y="298" font-size="9.5" fill="#3A2E26">Driven by external RF laser power</text>

  <text x="380" y="388" text-anchor="middle" font-size="10.5" fill="#0F0D0B">Links accelerated clock Unruh thermality to Tomita–Takesaki modular period Eq. (H12.0.2)</text>
</svg>`
  },
  {
    id: 'h12-fig-j11',
    deviceId: 'Device K',
    figureNumber: 'Figure H12-J11',
    title: 'Device K Schematic: Topological Weyl-Semimetal Gravitational–Gauge Brane Interferometer',
    category: 'CATEGORY C — CONJECTURAL',
    illustrationPath: deviceKImg,
    illustrationTitle: 'Device K Cutaway Plate · TaAs Weyl-Semimetal Chiral Anomaly & 5D Gauge-Stress Interferometer',
    illustrationFilename: 'device_k_weyl_bridge.jpg',
    caption:
      'Epitaxial TaAs Weyl-semimetal Josephson junction (Fermi speed v_F = 4.0 × 10⁵ m/s ≈ 0.00133c) driving parallel E·B axial anomaly charge pumping that mirrors the ghost-free 5D Einstein–Maxwell bulk stress-tensor eigenvalues diag(−1/2, +1/2, +1/2, +1/2, −1/2) E_0² (NEC +1.0 along x, 0.0 along y).',
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 440" width="760" height="440" style="background:#FFFFFF;font-family:'DejaVu Sans','DejaVu Serif',Georgia,sans-serif">
  <rect x="0" y="0" width="760" height="440" fill="#FFFFFF"/>
  <rect x="14" y="14" width="732" height="412" fill="#FFFFFF" stroke="#0F0D0B" stroke-width="1.2"/>
  <text x="380" y="42" text-anchor="middle" font-size="14" font-weight="bold" fill="#0F0D0B">DEVICE K: TaAs WEYL-SEMIMETAL CHIRAL ANOMALY &amp; GAUGE-STRESS BRIDGE</text>
  <line x1="36" y1="54" x2="724" y2="54" stroke="#8E7F6B" stroke-width="0.9"/>

  <polygon points="74,274 222,162 392,162 244,274" fill="#FAF8F4" stroke="#0F0D0B" stroke-width="2"/>
  <text x="234" y="216" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#0F0D0B">TaAs Weyl Crystal</text>
  <text x="234" y="236" text-anchor="middle" font-size="10" fill="#64705B">(v_F = 4.0e5 m/s ~ 0.00133 c)</text>

  <line x1="114" y1="136" x2="348" y2="136" stroke="#8F5B4A" stroke-width="2.6"/>
  <polygon points="356,136 343,130 343,142" fill="#8F5B4A"/>
  <text x="235" y="122" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#8F5B4A">Collinear E // B Drive (Chiral Pumping)</text>

  <rect x="412" y="106" width="302" height="222" fill="#FAF8F4" stroke="#64705B" stroke-width="1.6"/>
  <text x="563" y="134" text-anchor="middle" font-size="12" font-weight="bold" fill="#0F0D0B">5D Einstein–Maxwell Analog</text>
  <line x1="428" y1="146" x2="698" y2="146" stroke="#8E7F6B" stroke-width="1"/>
  <text x="430" y="176" font-size="10" font-weight="bold" fill="#0F0D0B">T^A_B = E_0^2 diag(-1/2, +1/2, +1/2, +1/2, -1/2)</text>
  <text x="430" y="206" font-size="10.5" font-weight="bold" fill="#64705B">Brane NEC along x: +1.0 &gt;= 0</text>
  <text x="430" y="236" font-size="10.5" font-weight="bold" fill="#64705B">Bulk NEC along y:  0.0 &gt;= 0</text>
  <text x="430" y="266" font-size="10" fill="#8F5B4A">Mirrors ghost-free App. B flux F_0y</text>
  <text x="430" y="296" font-size="9.5" fill="#3A2E26">Solid-state analog (Newton G_5 unchanged)</text>

  <text x="380" y="388" text-anchor="middle" font-size="10.5" fill="#0F0D0B">Realizes axial torsion-gravity anomaly inflow matching 5D Einstein–Maxwell NEC boundaries</text>
</svg>`
  }
];

export const H12PlateCard: React.FC<{ plate: H12PlateSpec }> = ({ plate }) => {
  const [imgFailed, setImgFailed] = React.useState(false);

  return (
    <figure className="my-12 rounded-2xl border border-[#D8CFC2] dark:border-[#3A2E26] bg-[#FFFFFF] dark:bg-[#1C1714] p-7 sm:p-9 shadow-xs">
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#EAE2D6] dark:border-[#3A2E26] text-xs font-mono">
        <span className="uppercase tracking-[0.14em] text-[#8F5B4A] dark:text-[#C49684]">
          {plate.figureNumber} · Chapter {plate.anchorChapter}
        </span>
        <span className="text-[#8E7F6B] dark:text-[#A89A86]">
          {plate.category}
        </span>
      </div>
      <h4
        className="font-normal text-[21px] leading-[1.32] text-[#0F0D0B] dark:text-[#F6F2EA] mt-5 mb-6"
        style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400 }}
      >
        <MathText text={plate.title} />
      </h4>
      <div className="overflow-hidden rounded-xl border border-[#D8CFC2] dark:border-[#3A2E26] bg-[#FFFFFF] dark:bg-[#231D18]">
        {imgFailed ? (
          <div className="aspect-video w-full flex flex-col items-center justify-center p-8 text-center text-[#F6F2EA] bg-[#3A2E26]">
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#C49684] mb-2">
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
          />
        )}
      </div>
      <figcaption className="mt-7 pt-5 border-t border-[#EAE2D6] dark:border-[#3A2E26] text-[14.5px] leading-[1.72] text-[#3A2E26] dark:text-[#D8CFC2] text-justify [hyphens:auto]">
        <MathText text={plate.description} />
      </figcaption>
    </figure>
  );
};

export const H12FigureCard: React.FC<{ fig: H12FigureSpec }> = ({ fig }) => (
  <figure className="my-12 rounded-2xl border border-[#D8CFC2] dark:border-[#3A2E26] bg-[#FFFFFF] dark:bg-[#1C1714] p-7 sm:p-9 shadow-xs">
    <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#EAE2D6] dark:border-[#3A2E26] text-xs font-mono">
      <span className="uppercase tracking-[0.14em] text-[#64705B] dark:text-[#A3B19B]">
        {fig.figureNumber} · Chapter {fig.anchorChapter}
      </span>
      <span className="text-[#8E7F6B] dark:text-[#A89A86]">
        {fig.category}
      </span>
    </div>
    <h4
      className="font-normal text-[21px] leading-[1.32] text-[#0F0D0B] dark:text-[#F6F2EA] mt-5 mb-6"
      style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400 }}
    >
      <MathText text={fig.title} />
    </h4>
    <div
      className="w-full overflow-hidden rounded-xl border border-[#D8CFC2] dark:border-[#3A2E26] bg-[#FFFFFF] p-4 [&>svg]:w-full [&>svg]:h-auto [&>svg]:block"
      dangerouslySetInnerHTML={{ __html: fig.svgMarkup }}
    />
    <figcaption className="mt-7 pt-5 border-t border-[#EAE2D6] dark:border-[#3A2E26] text-[14.5px] leading-[1.72] text-[#3A2E26] dark:text-[#D8CFC2] text-justify [hyphens:auto]">
      <MathText text={fig.caption} />
    </figcaption>
  </figure>
);
