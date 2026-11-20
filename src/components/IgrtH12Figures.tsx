/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * IGRT-H12 Archival Plates & Clean Minimalist Vector Illustrations:
 * - Preserves BOTH user-provided plates from /assets/aistudio/ untouched
 * - Provides 10 minimalist 4-color muted-earth architectural SVG figures across Chapters 1–13
 * - Provides 11 Appendix J device schematics (Figures H12-J1 through H12-J11)
 *   plus high-resolution cutaway illustrations for Devices G–K
 */

import React from 'react';
import type { H12EpistemicCategory } from '../types/igrtH12Apparatus';
import { MathText } from './MathText';
import deviceGImg from '../assets/images/device_g_portal_cavity_1795137575186.jpg';
import deviceHImg from '../assets/images/device_h_timemachine_loop_1795137576302.jpg';
import deviceIImg from '../assets/images/device_i_vacuum_harvester_1795137575458.jpg';
import deviceJImg from '../assets/images/device_j_unruh_engine_1795137575957.jpg';
import deviceKImg from '../assets/images/device_k_weyl_bridge_1795137577055.jpg';

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
 * Ten clean, minimalist architectural vector diagrams in a strict 4-color muted earth palette:
 *   Umber #3A2E26 | Terracotta #8F5B4A | Sage #64705B | Warm Stone #8E7F6B (ground #F6F2EA)
 */
export const H12_FIGURES: H12FigureSpec[] = [
  {
    id: 'h12-fig-1',
    figureNumber: 'Figure H12-1',
    anchorChapter: 1,
    title: 'Minimalist Bundle Geometry: 4D Brane M_4, Bulk Coordinate y & Orthogonal Fiber PU(H)',
    category: 'CATEGORY B — DERIVED',
    caption:
      'Geometric decoupling theorem proved in §2.1: extending the 4D spacetime base (M_4, g_μν) along a physical fifth dimension y does not tilt or twist the internal projective-Hilbert fiber PU(H). Cross-metric components vanish identically (G_{Ai} = 0 for A ∈ {0..4}), keeping the H11 SLD Fisher metric independent of bulk position y.',
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 280" width="760" height="280" style="background:#F6F2EA;font-family:'DejaVu Serif',Georgia,serif">
  <rect x="0" y="0" width="760" height="280" fill="#F6F2EA"/>
  <rect x="16" y="16" width="728" height="248" fill="#FFFFFF" stroke="#8E7F6B" stroke-width="1"/>
  <text x="380" y="42" text-anchor="middle" font-size="13" fill="#3A2E26">Orthogonal Principal Bundle Decomposition: P_5 -&gt; M_4 x K_1  (G_Ai = 0)</text>
  <polygon points="105,185 275,140 485,140 315,185" fill="#F6F2EA" stroke="#3A2E26" stroke-width="1.6"/>
  <text x="155" y="176" font-size="11" fill="#3A2E26">4D Brane M_4 (y = 0)</text>
  <line x1="295" y1="162" x2="295" y2="74" stroke="#8F5B4A" stroke-width="1.8" stroke-dasharray="5,4"/>
  <polygon points="295,68 291,78 299,78" fill="#8F5B4A"/>
  <text x="307" y="84" font-size="11" fill="#8F5B4A">5th Coordinate y (Bulk)</text>
  <polyline points="295,148 310,148 310,162" fill="none" stroke="#8E7F6B" stroke-width="1.2"/>
  <circle cx="295" cy="162" r="4" fill="#3A2E26"/>
  <line x1="295" y1="162" x2="545" y2="162" stroke="#64705B" stroke-width="1.6"/>
  <circle cx="595" cy="162" r="46" fill="#F6F2EA" stroke="#64705B" stroke-width="1.8"/>
  <ellipse cx="595" cy="162" rx="46" ry="15" fill="none" stroke="#8E7F6B" stroke-width="1.1" stroke-dasharray="4,3"/>
  <circle cx="595" cy="116" r="3.5" fill="#8F5B4A"/>
  <circle cx="628" cy="144" r="3.5" fill="#64705B"/>
  <path d="M 595 116 A 46 46 0 0 1 628 144" fill="none" stroke="#8F5B4A" stroke-width="2"/>
  <text x="595" y="226" text-anchor="middle" font-size="11" fill="#64705B">Hilbert Fiber PU(H)</text>
  <text x="595" y="241" text-anchor="middle" font-size="10" fill="#8E7F6B">SLD Fisher Arc s_QFI</text>
  <line x1="115" y1="224" x2="435" y2="224" stroke="#8E7F6B" stroke-width="0.9"/>
  <text x="275" y="241" text-anchor="middle" font-size="10.5" fill="#3A2E26">PU(H) orthogonal to d/dy: fiber geometry unchanged by y</text>
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
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 280" width="760" height="280" style="background:#F6F2EA;font-family:'DejaVu Serif',Georgia,serif">
  <rect x="0" y="0" width="760" height="280" fill="#F6F2EA"/>
  <rect x="16" y="16" width="728" height="248" fill="#FFFFFF" stroke="#8E7F6B" stroke-width="1"/>
  <text x="380" y="42" text-anchor="middle" font-size="13" fill="#3A2E26">Low-Energy Kaluza-Klein Suppression: delta_KK(E) vs. Probe Energy E</text>
  <line x1="100" y1="215" x2="680" y2="215" stroke="#3A2E26" stroke-width="1.3"/>
  <line x1="100" y1="68" x2="100" y2="215" stroke="#3A2E26" stroke-width="1.3"/>
  <text x="90" y="75" text-anchor="end" font-size="10" fill="#8E7F6B">10^0</text>
  <text x="90" y="124" text-anchor="end" font-size="10" fill="#8E7F6B">10^-6</text>
  <text x="90" y="173" text-anchor="end" font-size="10" fill="#8E7F6B">10^-12</text>
  <text x="90" y="216" text-anchor="end" font-size="10" fill="#8E7F6B">10^-18</text>
  <line x1="100" y1="120" x2="680" y2="120" stroke="#F6F2EA" stroke-width="1"/>
  <line x1="100" y1="168" x2="680" y2="168" stroke="#F6F2EA" stroke-width="1"/>
  <path d="M 120 202 L 245 182 L 420 120 L 560 76 L 670 72" fill="none" stroke="#64705B" stroke-width="2.2"/>
  <line x1="560" y1="68" x2="560" y2="215" stroke="#8F5B4A" stroke-width="1.4" stroke-dasharray="5,4"/>
  <text x="568" y="102" font-size="10.5" fill="#8F5B4A">m_KK &gt;= 4.485 meV</text>
  <text x="568" y="116" font-size="9.5" fill="#8E7F6B">(Eot-Wash R_5 &lt;= 44 um)</text>
  <text x="568" y="132" font-size="9.5" fill="#8F5B4A">77 K (1.48x) &gt; m_KK</text>
  <circle cx="515" cy="90" r="3.8" fill="#64705B"/>
  <text x="505" y="84" text-anchor="end" font-size="9.5" fill="#64705B">4 K: 5.873e-3</text>
  <circle cx="245" cy="182" r="4.5" fill="#8F5B4A"/>
  <text x="245" y="168" text-anchor="middle" font-size="10.5" fill="#3A2E26">delta_KK = 4.972e-14</text>
  <circle cx="245" cy="197" r="3.2" fill="#64705B"/>
  <text x="255" y="200" font-size="9.5" fill="#64705B">FRG Litim: 3.149e-16</text>
  <text x="120" y="234" text-anchor="middle" font-size="10" fill="#8E7F6B">1 peV</text>
  <text x="245" y="234" text-anchor="middle" font-size="10" fill="#3A2E26">1 neV (H11 clocks)</text>
  <text x="420" y="234" text-anchor="middle" font-size="10" fill="#8E7F6B">1 ueV</text>
  <text x="560" y="234" text-anchor="middle" font-size="10" fill="#8F5B4A">4.485 meV</text>
  <text x="665" y="234" text-anchor="middle" font-size="10" fill="#8E7F6B">1 eV</text>
  <text x="390" y="254" text-anchor="middle" font-size="10.5" fill="#64705B">H11 4D boundary predictions preserved intact for all E &lt;&lt; m_KK</text>
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
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 280" width="760" height="280" style="background:#F6F2EA;font-family:'DejaVu Serif',Georgia,serif">
  <rect x="0" y="0" width="760" height="280" fill="#F6F2EA"/>
  <rect x="16" y="16" width="728" height="248" fill="#FFFFFF" stroke="#8E7F6B" stroke-width="1"/>
  <text x="380" y="42" text-anchor="middle" font-size="13" fill="#3A2E26">Three Operational Temporal Layers Between Fixed Endpoints A and B</text>
  <line x1="120" y1="68" x2="120" y2="226" stroke="#8E7F6B" stroke-width="1.1" stroke-dasharray="3,3"/>
  <line x1="640" y1="68" x2="640" y2="226" stroke="#8E7F6B" stroke-width="1.1" stroke-dasharray="3,3"/>
  <text x="120" y="242" text-anchor="middle" font-size="10.5" fill="#3A2E26">Event A (x_1, y=0)</text>
  <text x="640" y="242" text-anchor="middle" font-size="10.5" fill="#3A2E26">Event B (x_2, y=0)</text>
  <line x1="120" y1="92" x2="640" y2="92" stroke="#3A2E26" stroke-width="2"/>
  <circle cx="120" cy="92" r="4" fill="#3A2E26"/>
  <circle cx="640" cy="92" r="4" fill="#3A2E26"/>
  <text x="380" y="82" text-anchor="middle" font-size="11" fill="#3A2E26">1. Brane Proper Time tau_4 (4D geodesic, y = 0)</text>
  <path d="M 120 144 Q 380 184 640 144" fill="none" stroke="#8F5B4A" stroke-width="2"/>
  <circle cx="120" cy="144" r="4" fill="#8F5B4A"/>
  <circle cx="640" cy="144" r="4" fill="#8F5B4A"/>
  <text x="380" y="132" text-anchor="middle" font-size="11" fill="#8F5B4A">2. 5D Bulk Null Excursion tau_5 (Conjectural if alpha_t + alpha_x &gt; 0)</text>
  <path d="M 120 202 C 250 184, 510 220, 640 202" fill="none" stroke="#64705B" stroke-width="2"/>
  <circle cx="120" cy="202" r="4" fill="#64705B"/>
  <circle cx="640" cy="202" r="4" fill="#64705B"/>
  <text x="380" y="192" text-anchor="middle" font-size="11" fill="#64705B">3. Araki Modular Clock Flow: d tau_5 = alpha_mod ds_QFI (Eqs. H12.0.2 &amp; 3.1)</text>
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
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 280" width="760" height="280" style="background:#F6F2EA;font-family:'DejaVu Serif',Georgia,serif">
  <rect x="0" y="0" width="760" height="280" fill="#F6F2EA"/>
  <rect x="16" y="16" width="728" height="248" fill="#FFFFFF" stroke="#8E7F6B" stroke-width="1"/>
  <text x="380" y="42" text-anchor="middle" font-size="13" fill="#3A2E26">Beltrami Geodesic Dip Through Asymmetrically Warped 5D Bulk</text>
  <line x1="90" y1="88" x2="670" y2="88" stroke="#3A2E26" stroke-width="1.6" stroke-dasharray="6,4"/>
  <text x="380" y="76" text-anchor="middle" font-size="11" fill="#3A2E26">4D Brane Light Path (y = 0): Model 1 &amp; Model 2A Minimum (No Shortcut)</text>
  <path d="M 110 88 Q 380 232 650 88" fill="#F6F2EA" stroke="#8F5B4A" stroke-width="2.2"/>
  <circle cx="110" cy="88" r="4.5" fill="#3A2E26"/>
  <circle cx="650" cy="88" r="4.5" fill="#3A2E26"/>
  <circle cx="380" cy="160" r="4" fill="#8F5B4A"/>
  <line x1="380" y1="88" x2="380" y2="160" stroke="#64705B" stroke-width="1.2" stroke-dasharray="3,3"/>
  <text x="392" y="128" font-size="10.5" fill="#64705B">y_peak (turning depth)</text>
  <text x="380" y="182" text-anchor="middle" font-size="11" fill="#8F5B4A">Beltrami Arch (Model 2B, Category C): c_eff(y) = c exp[(alpha_t + alpha_x) k |y|]</text>
  <text x="110" y="74" text-anchor="middle" font-size="10" fill="#8E7F6B">x = 0</text>
  <text x="650" y="74" text-anchor="middle" font-size="10" fill="#8E7F6B">x = dx</text>
  <text x="380" y="238" text-anchor="middle" font-size="10.5" fill="#8E7F6B">Local 5D null condition ds_5^2 = 0 preserved identically at every bulk point</text>
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
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 300" width="760" height="300" style="background:#F6F2EA;font-family:'DejaVu Serif',Georgia,serif">
  <rect x="0" y="0" width="760" height="300" fill="#F6F2EA"/>
  <rect x="16" y="16" width="728" height="268" fill="#FFFFFF" stroke="#8E7F6B" stroke-width="1"/>
  <text x="380" y="42" text-anchor="middle" font-size="13" fill="#3A2E26">5D Null Geodesic Arrival Ratio eta_fold = dt_5 / dt_4</text>
  <line x1="85" y1="230" x2="705" y2="230" stroke="#3A2E26" stroke-width="1.3"/>
  <line x1="85" y1="62" x2="85" y2="230" stroke="#3A2E26" stroke-width="1.3"/>
  <line x1="85" y1="95" x2="705" y2="95" stroke="#8F5B4A" stroke-width="1.2" stroke-dasharray="5,4"/>
  <text x="700" y="85" text-anchor="end" font-size="10" fill="#8F5B4A">Brane Light Limit (eta_fold = 1.000 — No Shortcut Threshold)</text>
  <rect x="108" y="94" width="56" height="136" fill="#8E7F6B"/>
  <text x="136" y="84" text-anchor="middle" font-size="10" fill="#3A2E26">1.00125</text>
  <text x="136" y="248" text-anchor="middle" font-size="9.5" fill="#3A2E26">Model 1: S1</text>
  <text x="136" y="262" text-anchor="middle" font-size="9" fill="#8E7F6B">No-Go (Cat. B)</text>
  <rect x="206" y="92" width="56" height="138" fill="#3A2E26"/>
  <text x="234" y="82" text-anchor="middle" font-size="10" fill="#3A2E26">1.01032</text>
  <text x="234" y="248" text-anchor="middle" font-size="9.5" fill="#3A2E26">Model 2A: RS</text>
  <text x="234" y="262" text-anchor="middle" font-size="9" fill="#8E7F6B">No-Go (Cat. B)</text>
  <rect x="304" y="116" width="56" height="114" fill="#64705B"/>
  <text x="332" y="106" text-anchor="middle" font-size="10" fill="#64705B">0.84147</text>
  <text x="332" y="248" text-anchor="middle" font-size="9.5" fill="#3A2E26">EM (1.0,0.0)</text>
  <text x="332" y="262" text-anchor="middle" font-size="9" fill="#64705B">k dx=2 &lt; pi</text>
  <rect x="402" y="113" width="56" height="117" fill="#8F5B4A"/>
  <text x="430" y="105" text-anchor="middle" font-size="10" fill="#8F5B4A">0.86634</text>
  <text x="430" y="248" text-anchor="middle" font-size="9.5" fill="#3A2E26">2B (k dx=2)</text>
  <text x="430" y="262" text-anchor="middle" font-size="9" fill="#8F5B4A">Cat. C</text>
  <rect x="500" y="184" width="56" height="46" fill="#64705B"/>
  <text x="528" y="176" text-anchor="middle" font-size="10" fill="#64705B">0.34279</text>
  <text x="528" y="248" text-anchor="middle" font-size="9.5" fill="#3A2E26">2B (k dx=10)</text>
  <text x="528" y="262" text-anchor="middle" font-size="9" fill="#64705B">Cat. C</text>
  <rect x="598" y="219" width="56" height="11" fill="#8F5B4A"/>
  <text x="626" y="211" text-anchor="middle" font-size="10" fill="#8F5B4A">0.07770</text>
  <text x="626" y="248" text-anchor="middle" font-size="9.5" fill="#3A2E26">2B (k dx=50)</text>
  <text x="626" y="262" text-anchor="middle" font-size="9" fill="#8F5B4A">Cat. C</text>
  <text x="576" y="146" text-anchor="middle" font-size="9.5" fill="#64705B">EM ceiling: k dx &lt; pi (lim 2/pi = 0.63662)</text>
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
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 280" width="760" height="280" style="background:#F6F2EA;font-family:'DejaVu Serif',Georgia,serif">
  <rect x="0" y="0" width="760" height="280" fill="#F6F2EA"/>
  <rect x="16" y="16" width="728" height="248" fill="#FFFFFF" stroke="#8E7F6B" stroke-width="1"/>
  <line x1="380" y1="32" x2="380" y2="250" stroke="#F6F2EA" stroke-width="1.5"/>
  <text x="198" y="44" text-anchor="middle" font-size="12.5" fill="#3A2E26">Hayward Regular Core (Non-Portal)</text>
  <path d="M 80 85 C 125 90, 145 190, 198 190 C 251 190, 271 90, 316 85" fill="none" stroke="#64705B" stroke-width="2.2"/>
  <ellipse cx="198" cy="186" rx="22" ry="7" fill="#F6F2EA" stroke="#64705B" stroke-width="1.2"/>
  <text x="198" y="216" text-anchor="middle" font-size="10.5" fill="#64705B">Smooth dS Core (rho + p_r = 0)</text>
  <text x="198" y="233" text-anchor="middle" font-size="10" fill="#8E7F6B">K_echo = 0.184 | No Throat</text>
  <text x="562" y="44" text-anchor="middle" font-size="12.5" fill="#3A2E26">Morris-Thorne Throat (NEC &lt; 0)</text>
  <path d="M 445 78 Q 520 132 445 186" fill="none" stroke="#8F5B4A" stroke-width="2.2"/>
  <path d="M 679 78 Q 604 132 679 186" fill="none" stroke="#8F5B4A" stroke-width="2.2"/>
  <ellipse cx="562" cy="132" rx="79" ry="12" fill="none" stroke="#8F5B4A" stroke-width="1.3" stroke-dasharray="4,3"/>
  <text x="562" y="216" text-anchor="middle" font-size="10.5" fill="#8F5B4A">Requires 2.22e70 x Casimir (~10^71 gap)</text>
  <text x="562" y="233" text-anchor="middle" font-size="10" fill="#8E7F6B">Macroscopic Throat Closed (Cat. B)</text>
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
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 290" width="760" height="290" style="background:#F6F2EA;font-family:'DejaVu Serif',Georgia,serif">
  <rect x="0" y="0" width="760" height="290" fill="#F6F2EA"/>
  <rect x="16" y="16" width="728" height="258" fill="#FFFFFF" stroke="#8E7F6B" stroke-width="1"/>
  <text x="380" y="42" text-anchor="middle" font-size="13" fill="#3A2E26">Casimir-to-Wormhole NEC Ratio: log10 |rho_Casimir / (rho c^2 + p_r)|</text>
  <line x1="100" y1="68" x2="690" y2="68" stroke="#64705B" stroke-width="1.3" stroke-dasharray="5,4"/>
  <text x="686" y="61" text-anchor="end" font-size="10" fill="#64705B">O(1) Quantum Parity Threshold (log10 = 0)</text>
  <line x1="100" y1="68" x2="100" y2="232" stroke="#3A2E26" stroke-width="1.3"/>
  <line x1="100" y1="232" x2="690" y2="232" stroke="#3A2E26" stroke-width="1.3"/>
  <text x="90" y="72" text-anchor="end" font-size="9.5" fill="#8E7F6B">0</text>
  <text x="90" y="124" text-anchor="end" font-size="9.5" fill="#8E7F6B">-25</text>
  <text x="90" y="176" text-anchor="end" font-size="9.5" fill="#8E7F6B">-50</text>
  <text x="90" y="228" text-anchor="end" font-size="9.5" fill="#8E7F6B">-75</text>
  <line x1="190" y1="68" x2="190" y2="73" stroke="#64705B" stroke-width="6"/>
  <circle cx="190" cy="73" r="4.5" fill="#64705B"/>
  <text x="190" y="92" text-anchor="middle" font-size="10.5" fill="#64705B">0.2436 (-0.61)</text>
  <text x="190" y="248" text-anchor="middle" font-size="10" fill="#3A2E26">r0 = l0 (1.36e-35 m)</text>
  <text x="190" y="262" text-anchor="middle" font-size="9.5" fill="#64705B">Planck Foam Parity</text>
  <line x1="390" y1="68" x2="390" y2="192" stroke="#8E7F6B" stroke-width="6"/>
  <circle cx="390" cy="192" r="4.5" fill="#8E7F6B"/>
  <text x="390" y="209" text-anchor="middle" font-size="10.5" fill="#3A2E26">4.50e-59 (-58.35)</text>
  <text x="390" y="248" text-anchor="middle" font-size="10" fill="#3A2E26">r0 = 1 um</text>
  <text x="390" y="262" text-anchor="middle" font-size="9.5" fill="#8E7F6B">M_ex = -2.12e21 kg</text>
  <line x1="585" y1="68" x2="585" y2="217" stroke="#8F5B4A" stroke-width="6"/>
  <circle cx="585" cy="217" r="4.5" fill="#8F5B4A"/>
  <text x="585" y="209" text-anchor="middle" font-size="10.5" fill="#8F5B4A">4.50e-71 (-70.35)</text>
  <text x="585" y="248" text-anchor="middle" font-size="10" fill="#3A2E26">r0 = 1 m</text>
  <text x="585" y="262" text-anchor="middle" font-size="9.5" fill="#8F5B4A">M_ex = -1.06e-3 M_sun</text>
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
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 290" width="760" height="290" style="background:#F6F2EA;font-family:'DejaVu Serif',Georgia,serif">
  <rect x="0" y="0" width="760" height="290" fill="#F6F2EA"/>
  <rect x="16" y="16" width="728" height="258" fill="#FFFFFF" stroke="#8E7F6B" stroke-width="1"/>
  <text x="380" y="42" text-anchor="middle" font-size="13" fill="#3A2E26">Double-Slit SLD Quantum Fisher Complementarity: V^2 + D_QFI^2 = 1</text>
  <line x1="90" y1="75" x2="90" y2="122" stroke="#3A2E26" stroke-width="2.5"/>
  <line x1="90" y1="138" x2="90" y2="162" stroke="#3A2E26" stroke-width="2.5"/>
  <line x1="90" y1="178" x2="90" y2="225" stroke="#3A2E26" stroke-width="2.5"/>
  <circle cx="52" cy="150" r="3.5" fill="#8F5B4A"/>
  <line x1="55" y1="150" x2="90" y2="130" stroke="#8E7F6B" stroke-width="1.1"/>
  <line x1="55" y1="150" x2="90" y2="170" stroke="#8E7F6B" stroke-width="1.1"/>
  <path d="M 90 130 Q 155 135 215 150" fill="none" stroke="#64705B" stroke-width="1.4"/>
  <path d="M 90 170 Q 155 165 215 150" fill="none" stroke="#64705B" stroke-width="1.4"/>
  <line x1="218" y1="78" x2="218" y2="222" stroke="#8E7F6B" stroke-width="1.5"/>
  <text x="145" y="246" text-anchor="middle" font-size="10" fill="#8E7F6B">Twin-slit phase phi -&gt; PU(H)</text>
  <line x1="330" y1="230" x2="515" y2="230" stroke="#3A2E26" stroke-width="1.3"/>
  <line x1="330" y1="68" x2="330" y2="230" stroke="#3A2E26" stroke-width="1.3"/>
  <path d="M 330 70 A 160 160 0 0 1 490 230" fill="none" stroke="#64705B" stroke-width="2"/>
  <circle cx="330" cy="70" r="4" fill="#8F5B4A"/>
  <circle cx="370" cy="75" r="4" fill="#8F5B4A"/>
  <circle cx="410" cy="91" r="4" fill="#8F5B4A"/>
  <circle cx="450" cy="124" r="4" fill="#8F5B4A"/>
  <circle cx="474" cy="160" r="4" fill="#8F5B4A"/>
  <circle cx="490" cy="230" r="4" fill="#8F5B4A"/>
  <text x="415" y="250" text-anchor="middle" font-size="10" fill="#3A2E26">Visibility V = gamma_coh</text>
  <text x="308" y="150" text-anchor="middle" font-size="10" fill="#3A2E26" transform="rotate(-90 308 150)">D_QFI</text>
  <rect x="530" y="74" width="190" height="156" fill="#F6F2EA" stroke="#8E7F6B" stroke-width="1"/>
  <text x="625" y="96" text-anchor="middle" font-size="10.5" fill="#3A2E26">2x2 SLD Solver Points</text>
  <text x="542" y="118" font-size="9.5" fill="#3A2E26">g=0.00 : V=0.00  D=1.000</text>
  <text x="542" y="136" font-size="9.5" fill="#3A2E26">g=0.25 : V=0.25  D=0.968</text>
  <text x="542" y="154" font-size="9.5" fill="#3A2E26">g=0.50 : V=0.50  D=0.866</text>
  <text x="542" y="172" font-size="9.5" fill="#3A2E26">g=0.75 : V=0.75  D=0.661</text>
  <text x="542" y="190" font-size="9.5" fill="#3A2E26">g=0.90 : V=0.90  D=0.436</text>
  <text x="542" y="208" font-size="9.5" fill="#3A2E26">g=1.00 : V=1.00  D=0.000</text>
  <text x="625" y="248" text-anchor="middle" font-size="9.5" fill="#64705B">Exact to 1e-12 precision</text>
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
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 280" width="760" height="280" style="background:#F6F2EA;font-family:'DejaVu Serif',Georgia,serif">
  <rect x="0" y="0" width="760" height="280" fill="#F6F2EA"/>
  <rect x="16" y="16" width="728" height="248" fill="#FFFFFF" stroke="#8E7F6B" stroke-width="1"/>
  <text x="380" y="42" text-anchor="middle" font-size="13" fill="#3A2E26">Multi-Probe Observational Constraints Satisfied by IGRT-H12 (Ch. 10)</text>
  <text x="48" y="80" font-size="10.5" fill="#3A2E26">Eot-Wash Torsion</text>
  <line x1="210" y1="76" x2="500" y2="76" stroke="#64705B" stroke-width="2.5"/>
  <circle cx="500" cy="76" r="4" fill="#8F5B4A"/>
  <text x="515" y="80" font-size="10" fill="#8E7F6B">R_5 &lt;= 44 um (m_KK &gt;= 4.485 meV)</text>
  <text x="48" y="110" font-size="10.5" fill="#3A2E26">GW170817 Speed</text>
  <line x1="210" y1="106" x2="430" y2="106" stroke="#64705B" stroke-width="2.5"/>
  <circle cx="430" cy="106" r="4" fill="#64705B"/>
  <text x="445" y="110" font-size="10" fill="#8E7F6B">|c_GW / c - 1| &lt; 1e-15</text>
  <text x="48" y="140" font-size="10.5" fill="#3A2E26">Cassini PPN</text>
  <line x1="210" y1="136" x2="465" y2="136" stroke="#64705B" stroke-width="2.5"/>
  <circle cx="465" cy="136" r="4" fill="#64705B"/>
  <text x="480" y="140" font-size="10" fill="#8E7F6B">|gamma - 1| &lt; 2.3e-5 (Vainshtein)</text>
  <text x="48" y="170" font-size="10.5" fill="#3A2E26">BBN Relativistic</text>
  <line x1="210" y1="166" x2="480" y2="166" stroke="#64705B" stroke-width="2.5"/>
  <circle cx="480" cy="166" r="4" fill="#8F5B4A"/>
  <text x="495" y="170" font-size="10" fill="#8E7F6B">Delta N_eff &lt; 0.28 (rho_dark rad)</text>
  <text x="48" y="200" font-size="10.5" fill="#3A2E26">HL-LHC TeV Bulk</text>
  <line x1="210" y1="196" x2="545" y2="196" stroke="#8F5B4A" stroke-width="2.5"/>
  <circle cx="545" cy="196" r="4" fill="#8F5B4A"/>
  <text x="560" y="200" font-size="10" fill="#8E7F6B">M_5(warped) &gt; TeV; flat floor 2.985e8 GeV</text>
  <text x="48" y="230" font-size="10.5" fill="#3A2E26">Planck CMB Flatness</text>
  <line x1="210" y1="226" x2="445" y2="226" stroke="#64705B" stroke-width="2.5"/>
  <circle cx="445" cy="226" r="4" fill="#64705B"/>
  <text x="460" y="230" font-size="10" fill="#8E7F6B">|Omega_K| &lt; 0.002 &amp; H11 preserved</text>
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
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 280" width="760" height="280" style="background:#F6F2EA;font-family:'DejaVu Serif',Georgia,serif">
  <rect x="0" y="0" width="760" height="280" fill="#F6F2EA"/>
  <rect x="16" y="16" width="728" height="248" fill="#FFFFFF" stroke="#8E7F6B" stroke-width="1"/>
  <text x="380" y="42" text-anchor="middle" font-size="13" fill="#3A2E26">Empirical Falsification Boundary: H11 (4D) vs. H12 Bulk (P7-P10) vs. Folding (P11-P13)</text>
  <rect x="42" y="64" width="310" height="178" fill="#F6F2EA" stroke="#64705B" stroke-width="1.3"/>
  <text x="197" y="88" text-anchor="middle" font-size="12" fill="#64705B">IGRT-H11 Preregistered (4D Only)</text>
  <line x1="62" y1="98" x2="332" y2="98" stroke="#8E7F6B" stroke-width="0.8"/>
  <text x="62" y="118" font-size="10.5" fill="#3A2E26">P1: Dual-Clock 2:1 ULDM Lock</text>
  <text x="62" y="138" font-size="10.5" fill="#3A2E26">P2: SiO2 DP Collapse (1.028 um)</text>
  <text x="62" y="158" font-size="10.5" fill="#3A2E26">P3: LiteBIRD Ekpyrotic B-Modes</text>
  <text x="62" y="178" font-size="10.5" fill="#3A2E26">P4: WKB K_echo = 0.184 Echoes</text>
  <text x="62" y="198" font-size="10.5" fill="#3A2E26">P5: CANNEX Chameleon (2.44 meV)</text>
  <text x="62" y="218" font-size="10.5" fill="#3A2E26">P6: HL-LHC Phi_portal (4.7 sigma)</text>
  <text x="197" y="236" text-anchor="middle" font-size="9.5" fill="#64705B">Tests 4D Physics — Does NOT Confirm 5D</text>
  <line x1="358" y1="153" x2="402" y2="153" stroke="#8E7F6B" stroke-width="1.5"/>
  <polygon points="406,153 398,149 398,157" fill="#8E7F6B"/>
  <rect x="408" y="64" width="310" height="178" fill="#F6F2EA" stroke="#8F5B4A" stroke-width="1.3"/>
  <text x="563" y="88" text-anchor="middle" font-size="12" fill="#8F5B4A">IGRT-H12 5D Probes (P7-P13)</text>
  <line x1="428" y1="98" x2="698" y2="98" stroke="#8E7F6B" stroke-width="0.8"/>
  <text x="424" y="118" font-size="10" fill="#3A2E26">P7: 10 um KK Yukawa (Tests 5D Bulk)</text>
  <text x="424" y="138" font-size="10" fill="#3A2E26">P8: 10^-19 Clocks (Tests KK Corr.)</text>
  <text x="424" y="158" font-size="10" fill="#3A2E26">P9: 10^-6 Slits (Tests Decoherence)</text>
  <text x="424" y="178" font-size="10" fill="#3A2E26">P10: 3G GW Leakage (Tests Graviton Loss)</text>
  <text x="424" y="198" font-size="10" fill="#8F5B4A">P11-P12: Folding (Not Yet Testable)</text>
  <text x="424" y="218" font-size="10" fill="#64705B">P13: GW170817 Bound (4.129e-16 Passive)</text>
  <text x="563" y="236" text-anchor="middle" font-size="9.5" fill="#8F5B4A">P7-P10 Probe Bulk; P11-P13 Isolate Folding</text>
</svg>`
  }
];

/**
 * Eleven Appendix J Device Schematics (Figures H12-J1 .. H12-J11) + Cutaway Plates (Devices G–K).
 */
export const H12_DEVICE_FIGURES: H12DeviceFigureSpec[] = [
  {
    id: 'h12-fig-j1',
    deviceId: 'Device A',
    figureNumber: 'Figure H12-J1',
    title: 'Device A Schematic: Dual Sr-87 / Yb-171 Optical Lattice Clock & Floquet QFI Readout',
    category: 'CATEGORY B — DERIVED',
    caption:
      'Dual cryogenic optical-lattice interrogation comparing ordinary atomic proper duration τ against Raman-driven projective Hilbert Fisher distance s_QFI inside PU(H). Reaching |δν/ν| ≤ 10⁻¹⁹ places direct Protocol P8 limits on unscreened scalar-radion clock drifts without altering spacetime curvature.',
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 280" width="760" height="280" style="background:#F6F2EA;font-family:'DejaVu Serif',Georgia,serif">
  <rect x="0" y="0" width="760" height="280" fill="#F6F2EA"/>
  <rect x="16" y="16" width="728" height="248" fill="#FFFFFF" stroke="#8E7F6B" stroke-width="1"/>
  <text x="380" y="42" text-anchor="middle" font-size="13" fill="#3A2E26">Device A: Modular Resonance Detector (Sr-87 / Yb-171 Lattice &amp; QFI Lock)</text>
  <rect x="52" y="72" width="236" height="148" fill="#F6F2EA" stroke="#3A2E26" stroke-width="1.5"/>
  <text x="170" y="92" text-anchor="middle" font-size="10.5" fill="#3A2E26">77 K Si Shield &amp; UHV (1e-11 Torr)</text>
  <line x1="76" y1="128" x2="264" y2="128" stroke="#64705B" stroke-width="1.4" stroke-dasharray="4,3"/>
  <line x1="76" y1="158" x2="264" y2="158" stroke="#64705B" stroke-width="1.4" stroke-dasharray="4,3"/>
  <circle cx="115" cy="128" r="4.5" fill="#8F5B4A"/>
  <circle cx="152" cy="128" r="4.5" fill="#8F5B4A"/>
  <circle cx="189" cy="128" r="4.5" fill="#8F5B4A"/>
  <circle cx="226" cy="128" r="4.5" fill="#8F5B4A"/>
  <circle cx="133" cy="158" r="4" fill="#64705B"/>
  <circle cx="170" cy="158" r="4" fill="#64705B"/>
  <circle cx="207" cy="158" r="4" fill="#64705B"/>
  <text x="170" y="190" text-anchor="middle" font-size="9.5" fill="#64705B">Sr-87 (698 nm) + Yb-171 (578 nm)</text>
  <text x="170" y="206" text-anchor="middle" font-size="9" fill="#8E7F6B">Floquet-Raman Modular Drive</text>
  <line x1="288" y1="146" x2="352" y2="146" stroke="#8F5B4A" stroke-width="1.8"/>
  <polygon points="356,146 347,142 347,150" fill="#8F5B4A"/>
  <text x="322" y="136" text-anchor="middle" font-size="9" fill="#8F5B4A">ULE Comb</text>
  <circle cx="445" cy="146" r="56" fill="#F6F2EA" stroke="#64705B" stroke-width="1.7"/>
  <path d="M 445 90 A 56 56 0 0 1 497 166" fill="none" stroke="#8F5B4A" stroke-width="2.5"/>
  <circle cx="445" cy="90" r="4" fill="#3A2E26"/>
  <circle cx="497" cy="166" r="4" fill="#8F5B4A"/>
  <text x="445" y="144" text-anchor="middle" font-size="10.5" fill="#3A2E26">ds_QFI in PU(H)</text>
  <text x="445" y="160" text-anchor="middle" font-size="9.5" fill="#64705B">d tau = alpha_mod ds_QFI</text>
  <text x="445" y="220" text-anchor="middle" font-size="9.5" fill="#8E7F6B">Quantum Cramer-Rao Limit</text>
  <line x1="501" y1="146" x2="548" y2="146" stroke="#3A2E26" stroke-width="1.6"/>
  <rect x="550" y="88" width="166" height="116" fill="#FFFFFF" stroke="#64705B" stroke-width="1.3"/>
  <text x="633" y="112" text-anchor="middle" font-size="10.5" fill="#3A2E26">Protocol P8 Output</text>
  <line x1="564" y1="120" x2="702" y2="120" stroke="#EAE2D2" stroke-width="1"/>
  <text x="633" y="140" text-anchor="middle" font-size="10" fill="#64705B">|dv / v| &lt;= 1e-19</text>
  <text x="633" y="158" text-anchor="middle" font-size="9.5" fill="#8F5B4A">1 neV KK &lt;= 4.972e-14</text>
  <text x="633" y="176" text-anchor="middle" font-size="9" fill="#8E7F6B">No metric bending</text>
  <text x="380" y="248" text-anchor="middle" font-size="10" fill="#3A2E26">Tests Eq. (H12.0.2) 1:1 QFI-to-clock lock and scalar-radion stability across 1 Hz-100 kHz</text>
</svg>`
  },
  {
    id: 'h12-fig-j2',
    deviceId: 'Device B',
    figureNumber: 'Figure H12-J2',
    title: 'Device B Schematic: CANNEX-Class 4.2 K Shielded Parallel-Plate 5D Force Balance',
    category: 'CATEGORY B — DERIVED',
    caption:
      'Sub-10 μm Casimir–Yukawa plate architecture (Protocol P7). A grounded 150 nm gold-coated membrane shields stray EM/Casimir photons while letting gravitational Yukawa forces α_KK e^{−d/R_5} cross to the SiC flexure mirror, extending Eöt-Wash limits from 44 μm (4.485 meV) down to 10 μm (19.733 meV).',
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 280" width="760" height="280" style="background:#F6F2EA;font-family:'DejaVu Serif',Georgia,serif">
  <rect x="0" y="0" width="760" height="280" fill="#F6F2EA"/>
  <rect x="16" y="16" width="728" height="248" fill="#FFFFFF" stroke="#8E7F6B" stroke-width="1"/>
  <text x="380" y="42" text-anchor="middle" font-size="13" fill="#3A2E26">Device B: 5D Geometric Resonator (Cryogenic 4.2 K Parallel-Plate Force Balance)</text>
  <rect x="160" y="62" width="180" height="24" fill="#F6F2EA" stroke="#64705B" stroke-width="1.2"/>
  <text x="250" y="78" text-anchor="middle" font-size="9.5" fill="#64705B">Fabry-Perot Laser (1e-13 m/rtHz)</text>
  <line x1="250" y1="86" x2="250" y2="112" stroke="#8F5B4A" stroke-width="1.6" stroke-dasharray="3,2"/>
  <rect x="130" y="112" width="240" height="18" fill="#8E7F6B" stroke="#3A2E26" stroke-width="1.2"/>
  <text x="250" y="125" text-anchor="middle" font-size="9.5" fill="#FFFFFF">SiC Sensor Mirror on Flexure Springs</text>
  <line x1="95" y1="152" x2="405" y2="152" stroke="#8F5B4A" stroke-width="2.4"/>
  <text x="250" y="145" text-anchor="middle" font-size="9" fill="#8F5B4A">150 nm Au/Si3N4 EM Shield (Blocks Casimir &amp; Patch Fields)</text>
  <rect x="130" y="178" width="240" height="26" fill="#3A2E26"/>
  <text x="250" y="195" text-anchor="middle" font-size="9.5" fill="#F6F2EA">W/Au Source Mass (Piezo d = 5-20 um)</text>
  <line x1="180" y1="178" x2="180" y2="132" stroke="#64705B" stroke-width="1.6"/>
  <polygon points="180,130 176,138 184,138" fill="#64705B"/>
  <line x1="320" y1="178" x2="320" y2="132" stroke="#64705B" stroke-width="1.6"/>
  <polygon points="320,130 316,138 324,138" fill="#64705B"/>
  <text x="250" y="170" text-anchor="middle" font-size="9" fill="#64705B">Gravity + Yukawa exp(-d/R_5)</text>
  <rect x="442" y="68" width="272" height="156" fill="#F6F2EA" stroke="#8E7F6B" stroke-width="1.2"/>
  <text x="578" y="90" text-anchor="middle" font-size="11" fill="#3A2E26">Protocol P7 Reach vs. H11 P5</text>
  <line x1="462" y1="100" x2="694" y2="100" stroke="#8E7F6B" stroke-width="0.8"/>
  <text x="462" y="122" font-size="9.5" fill="#3A2E26">2020 Eot-Wash: R_5 &lt;= 44 um (4.485 meV)</text>
  <text x="462" y="144" font-size="9.5" fill="#8F5B4A">Device B (P7): R_5 &lt;= 10 um (19.733 meV)</text>
  <text x="462" y="166" font-size="9.5" fill="#64705B">Noise Floor: 3e-11 N/m^2 at 4.2 K</text>
  <text x="462" y="188" font-size="9.5" fill="#3A2E26">Template: Exponential vs. Chameleon (P5)</text>
  <text x="462" y="210" font-size="9" fill="#8E7F6B">Does NOT cure 10^59 Casimir throat deficit</text>
  <text x="380" y="248" text-anchor="middle" font-size="10" fill="#3A2E26">4.4x improvement over current 5D compactification bounds (2026-2029 horizon)</text>
</svg>`
  },
  {
    id: 'h12-fig-j3',
    deviceId: 'Device C',
    figureNumber: 'Figure H12-J3',
    title: 'Device C Schematic: Graded-Index (GRIN) Photonic Beltrami Shortcut Analog Slab',
    category: 'CATEGORY D — SPECULATIVE ENGINEERING',
    caption:
      'Photonic crystal slab (W = 500 μm, Δn/n ≈ 0.35 at 1550 nm) demonstrating Chapter 4 Beltrami turning geodesics on a laboratory bench. Pulses diving into lower-index interior layers outrun surface-bound pulses (η_analog ≈ 0.74) strictly below vacuum speed c.',
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 280" width="760" height="280" style="background:#F6F2EA;font-family:'DejaVu Serif',Georgia,serif">
  <rect x="0" y="0" width="760" height="280" fill="#F6F2EA"/>
  <rect x="16" y="16" width="728" height="248" fill="#FFFFFF" stroke="#8E7F6B" stroke-width="1"/>
  <text x="380" y="42" text-anchor="middle" font-size="13" fill="#3A2E26">Device C: GRIN Waveguide Beltrami Folding Analog (1550 nm Femtosecond Pulsed Slab)</text>
  <rect x="120" y="78" width="470" height="122" fill="#F6F2EA" stroke="#3A2E26" stroke-width="1.6"/>
  <rect x="121" y="79" width="468" height="24" fill="#EAE2D2"/>
  <rect x="121" y="103" width="468" height="32" fill="#F3EDE2"/>
  <rect x="121" y="135" width="468" height="64" fill="#FAF8F3"/>
  <line x1="120" y1="88" x2="590" y2="88" stroke="#3A2E26" stroke-width="2" stroke-dasharray="6,4"/>
  <text x="355" y="72" text-anchor="middle" font-size="10" fill="#3A2E26">Surface Path (y = 0, slow high index n = 1.95)</text>
  <path d="M 120 88 Q 355 232 590 88" fill="none" stroke="#8F5B4A" stroke-width="2.5"/>
  <text x="355" y="176" text-anchor="middle" font-size="10.5" fill="#8F5B4A">Arch Trajectory (fast low index n = 1.45, eta_analog ~ 0.74)</text>
  <circle cx="120" cy="88" r="5" fill="#64705B"/>
  <circle cx="590" cy="88" r="5" fill="#64705B"/>
  <text x="72" y="92" text-anchor="middle" font-size="10" fill="#64705B">1550 nm</text>
  <text x="72" y="106" text-anchor="middle" font-size="9.5" fill="#8E7F6B">120 fs In</text>
  <text x="652" y="88" text-anchor="middle" font-size="10" fill="#64705B">Cross-Corr</text>
  <text x="652" y="102" text-anchor="middle" font-size="9.5" fill="#8F5B4A">(+-15 fs Out)</text>
  <line x1="615" y1="80" x2="615" y2="196" stroke="#8E7F6B" stroke-width="1.3"/>
  <polygon points="615,200 611,192 619,192" fill="#8E7F6B"/>
  <text x="668" y="144" text-anchor="middle" font-size="9.5" fill="#8E7F6B">Depth y (500 um)</text>
  <text x="668" y="158" text-anchor="middle" font-size="9" fill="#8E7F6B">n(y) decreases</text>
  <text x="380" y="244" text-anchor="middle" font-size="10" fill="#64705B">Gordon optical metric analog: solves Beltrami ODE physically while preserving v_g &lt; c_vacuum</text>
</svg>`
  },
  {
    id: 'h12-fig-j4',
    deviceId: 'Device D',
    figureNumber: 'Figure H12-J4',
    title: 'Device D Schematic: Phase-Locked SLD Quantum Fisher Double-Slit Interferometer',
    category: 'CATEGORY B — DERIVED',
    caption:
      'Mach–Zehnder / Cs-133 atom interferometer with variable path-marker overlap γ_coh sweeping V² + D_QFI² = 1 across N = 10¹⁴ events (Protocol P9, 10⁻⁶ visibility sensitivity). Directly isolates internal fiber geometry PU(H) ⊥ ∂/∂y.',
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 280" width="760" height="280" style="background:#F6F2EA;font-family:'DejaVu Serif',Georgia,serif">
  <rect x="0" y="0" width="760" height="280" fill="#F6F2EA"/>
  <rect x="16" y="16" width="728" height="248" fill="#FFFFFF" stroke="#8E7F6B" stroke-width="1"/>
  <text x="380" y="42" text-anchor="middle" font-size="13" fill="#3A2E26">Device D: Precision Double-Slit SLD Fisher Interferometer (Protocol P9)</text>
  <circle cx="62" cy="144" r="5" fill="#8F5B4A"/>
  <text x="62" y="166" text-anchor="middle" font-size="9.5" fill="#3A2E26">Photon / Cs</text>
  <line x1="67" y1="144" x2="130" y2="144" stroke="#3A2E26" stroke-width="1.6"/>
  <line x1="120" y1="154" x2="140" y2="134" stroke="#64705B" stroke-width="2.2"/>
  <polyline points="130,144 130,90 340,90 340,144" fill="none" stroke="#64705B" stroke-width="1.6"/>
  <polyline points="130,144 130,198 340,198 340,144" fill="none" stroke="#8F5B4A" stroke-width="1.6"/>
  <rect x="200" y="76" width="68" height="26" fill="#F6F2EA" stroke="#3A2E26" stroke-width="1.2"/>
  <text x="234" y="93" text-anchor="middle" font-size="9" fill="#3A2E26">Phase Phi</text>
  <rect x="194" y="184" width="80" height="26" fill="#F6F2EA" stroke="#8F5B4A" stroke-width="1.2"/>
  <text x="234" y="201" text-anchor="middle" font-size="9" fill="#8F5B4A">Ancilla gamma</text>
  <line x1="330" y1="154" x2="350" y2="134" stroke="#64705B" stroke-width="2.2"/>
  <line x1="340" y1="144" x2="402" y2="144" stroke="#3A2E26" stroke-width="1.6"/>
  <rect x="402" y="114" width="66" height="60" fill="#F6F2EA" stroke="#3A2E26" stroke-width="1.4"/>
  <text x="435" y="140" text-anchor="middle" font-size="9.5" fill="#3A2E26">SLD QFI</text>
  <text x="435" y="156" text-anchor="middle" font-size="9" fill="#64705B">N = 1e14</text>
  <line x1="525" y1="196" x2="675" y2="196" stroke="#3A2E26" stroke-width="1.3"/>
  <line x1="525" y1="74" x2="525" y2="196" stroke="#3A2E26" stroke-width="1.3"/>
  <path d="M 525 76 A 120 120 0 0 1 645 196" fill="none" stroke="#64705B" stroke-width="2.2"/>
  <circle cx="525" cy="76" r="3.5" fill="#8F5B4A"/>
  <circle cx="555" cy="80" r="3.5" fill="#8F5B4A"/>
  <circle cx="585" cy="92" r="3.5" fill="#8F5B4A"/>
  <circle cx="615" cy="116" r="3.5" fill="#8F5B4A"/>
  <circle cx="634" cy="146" r="3.5" fill="#8F5B4A"/>
  <circle cx="645" cy="196" r="3.5" fill="#8F5B4A"/>
  <text x="595" y="216" text-anchor="middle" font-size="9.5" fill="#3A2E26">V = gamma_coh (P9 &lt; 1e-6)</text>
  <text x="506" y="138" text-anchor="middle" font-size="9.5" fill="#3A2E26" transform="rotate(-90 506 138)">D_QFI</text>
  <text x="380" y="248" text-anchor="middle" font-size="10" fill="#64705B">Measures V^2 + D_QFI^2 = 1 to shot-noise 1e-7 without spatial 5th-dimension transit</text>
</svg>`
  },
  {
    id: 'h12-fig-j5',
    deviceId: 'Device E',
    figureNumber: 'Figure H12-J5',
    title: 'Device E Schematic: Dual 3G Gravitational-Wave Network (P10/P13) & 50-Qubit Scrambler',
    category: 'CATEGORY C — CONJECTURAL',
    caption:
      'Dual-track connectivity testbed: Track E1 combines triangular Einstein Telescope + Cosmic Explorer polarization null streams (|h_scalar/h_tensor| ≤ 10⁻³) with stacked 150-BNS timing (σ_{η,3G} = 9.916 × 10⁻¹⁹); Track E2 realizes 50-qubit holographic TFD scrambling constrained strictly by classical channel causality.',
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 280" width="760" height="280" style="background:#F6F2EA;font-family:'DejaVu Serif',Georgia,serif">
  <rect x="0" y="0" width="760" height="280" fill="#F6F2EA"/>
  <rect x="16" y="16" width="728" height="248" fill="#FFFFFF" stroke="#8E7F6B" stroke-width="1"/>
  <text x="380" y="42" text-anchor="middle" font-size="13" fill="#3A2E26">Device E: 3G Gravitational-Wave Antenna Array &amp; 50-Qubit Causal Scrambler</text>
  <line x1="380" y1="62" x2="380" y2="232" stroke="#EAE2D2" stroke-width="1.5"/>
  <text x="198" y="68" text-anchor="middle" font-size="11" fill="#64705B">Track E1: 3G GW Network (P10 &amp; P13)</text>
  <polygon points="118,176 218,176 168,94" fill="#F6F2EA" stroke="#3A2E26" stroke-width="1.8"/>
  <text x="168" y="152" text-anchor="middle" font-size="9.5" fill="#3A2E26">ET 10 km</text>
  <polyline points="248,176 318,176 318,106" fill="none" stroke="#8F5B4A" stroke-width="2"/>
  <text x="290" y="192" text-anchor="middle" font-size="9.5" fill="#8F5B4A">CE 40 km</text>
  <text x="198" y="214" text-anchor="middle" font-size="9.5" fill="#3A2E26">Scalar Leak |h_s/h_t| &lt;= 1e-3</text>
  <text x="198" y="230" text-anchor="middle" font-size="9.5" fill="#64705B">150-BNS Stack: 9.916e-19</text>
  <text x="562" y="68" text-anchor="middle" font-size="11" fill="#8F5B4A">Track E2: 50-Qubit TFD Circuit (20 mK)</text>
  <rect x="424" y="88" width="110" height="92" fill="#F6F2EA" stroke="#64705B" stroke-width="1.4"/>
  <text x="479" y="130" text-anchor="middle" font-size="10" fill="#3A2E26">Register L</text>
  <text x="479" y="146" text-anchor="middle" font-size="9" fill="#64705B">(25 Transmons)</text>
  <rect x="594" y="88" width="110" height="92" fill="#F6F2EA" stroke="#64705B" stroke-width="1.4"/>
  <text x="649" y="130" text-anchor="middle" font-size="10" fill="#3A2E26">Register R</text>
  <text x="649" y="146" text-anchor="middle" font-size="9" fill="#64705B">(25 Transmons)</text>
  <line x1="534" y1="134" x2="594" y2="134" stroke="#8F5B4A" stroke-width="2" stroke-dasharray="4,2"/>
  <text x="564" y="122" text-anchor="middle" font-size="9" fill="#8F5B4A">O_L O_R</text>
  <text x="564" y="214" text-anchor="middle" font-size="9.5" fill="#3A2E26">Holographic Teleportation Analog</text>
  <text x="564" y="230" text-anchor="middle" font-size="9.5" fill="#8F5B4A">Zero FTL bits (Classical Channel Lock)</text>
  <text x="380" y="252" text-anchor="middle" font-size="9.5" fill="#8E7F6B">P10/P13 test cosmic bulk leakage &amp; speed by 2035+; Track E2 confirms no-signaling today</text>
</svg>`
  },
  {
    id: 'h12-fig-j6',
    deviceId: 'Device F',
    figureNumber: 'Figure H12-J6',
    title: 'Device F Schematic: 50 nK Rb-87 Sonic Waterfall Horizon & Hayward Core Echo Simulator',
    category: 'CATEGORY B — DERIVED',
    caption:
      'Quasi-1D Bose–Einstein condensate accelerating past sound speed c_s ≈ 1.5 mm/s across a sculpted optical waterfall while a secondary Feshbach core step reproduces tortoise-barrier echo pulses (K_echo = 0.184 analog) in connected density correlations G^(2)(x, x\').',
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 280" width="760" height="280" style="background:#F6F2EA;font-family:'DejaVu Serif',Georgia,serif">
  <rect x="0" y="0" width="760" height="280" fill="#F6F2EA"/>
  <rect x="16" y="16" width="728" height="248" fill="#FFFFFF" stroke="#8E7F6B" stroke-width="1"/>
  <text x="380" y="42" text-anchor="middle" font-size="13" fill="#3A2E26">Device F: Rb-87 BEC Sonic Horizon &amp; Regular Core Echo Simulator (T ~ 50 nK)</text>
  <path d="M 70 112 L 290 112 Q 350 112 375 168 L 560 168 L 560 202 L 70 202 Z" fill="#F6F2EA" stroke="#64705B" stroke-width="1.6"/>
  <line x1="340" y1="68" x2="340" y2="218" stroke="#8F5B4A" stroke-width="1.8" stroke-dasharray="5,4"/>
  <text x="340" y="62" text-anchor="middle" font-size="10" fill="#8F5B4A">Sonic Horizon (v = c_s = 1.5 mm/s)</text>
  <rect x="492" y="142" width="22" height="60" fill="#8F5B4A" opacity="0.85"/>
  <text x="503" y="132" text-anchor="middle" font-size="9.5" fill="#8F5B4A">Core Step</text>
  <text x="180" y="148" text-anchor="middle" font-size="10.5" fill="#3A2E26">Subsonic Outside (v &lt; c_s)</text>
  <text x="180" y="164" text-anchor="middle" font-size="9.5" fill="#64705B">Hawking Phonon Outbound</text>
  <path d="M 332 130 L 210 130" stroke="#64705B" stroke-width="1.8"/>
  <polygon points="204,130 214,126 214,134" fill="#64705B"/>
  <path d="M 348 182 L 486 182" stroke="#8F5B4A" stroke-width="1.8"/>
  <polygon points="492,182 482,178 482,186" fill="#8F5B4A"/>
  <path d="M 490 172 Q 420 148 345 154" fill="none" stroke="#3A2E26" stroke-width="1.5" stroke-dasharray="3,2"/>
  <text x="418" y="142" text-anchor="middle" font-size="9" fill="#3A2E26">K_echo = 0.184 Analog</text>
  <rect x="588" y="76" width="132" height="132" fill="#FAF8F3" stroke="#8E7F6B" stroke-width="1.2"/>
  <text x="654" y="98" text-anchor="middle" font-size="10" fill="#3A2E26">G^(2)(x, x') Map</text>
  <line x1="600" y1="108" x2="708" y2="108" stroke="#EAE2D2" stroke-width="1"/>
  <line x1="606" y1="194" x2="702" y2="122" stroke="#64705B" stroke-width="1.8"/>
  <line x1="622" y1="194" x2="702" y2="138" stroke="#8F5B4A" stroke-width="1.5" stroke-dasharray="3,2"/>
  <text x="654" y="198" text-anchor="middle" font-size="8.5" fill="#8E7F6B">0.9 um In-Situ Imaging</text>
  <text x="380" y="246" text-anchor="middle" font-size="10" fill="#64705B">Acoustic dispersion simulator: tests H11 tortoise-barrier scattering without gravitational horizons</text>
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
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 280" width="760" height="280" style="background:#F6F2EA;font-family:'DejaVu Serif',Georgia,serif">
  <rect x="0" y="0" width="760" height="280" fill="#F6F2EA"/>
  <rect x="16" y="16" width="728" height="248" fill="#FFFFFF" stroke="#8E7F6B" stroke-width="1"/>
  <text x="380" y="42" text-anchor="middle" font-size="13" fill="#3A2E26">Device G: Twin-Brane Evanescent Portal Cavity (Si3N4 Microrings, C = 2.716e5)</text>
  <line x1="62" y1="96" x2="360" y2="96" stroke="#3A2E26" stroke-width="2"/>
  <text x="118" y="84" text-anchor="middle" font-size="9.5" fill="#3A2E26">Brane Waveguide A (1550 nm)</text>
  <line x1="62" y1="204" x2="360" y2="204" stroke="#64705B" stroke-width="2"/>
  <text x="118" y="220" text-anchor="middle" font-size="9.5" fill="#64705B">Target Brane Waveguide B</text>
  <circle cx="235" cy="126" r="24" fill="#F6F2EA" stroke="#8F5B4A" stroke-width="2"/>
  <circle cx="235" cy="174" r="24" fill="#F6F2EA" stroke="#64705B" stroke-width="2"/>
  <line x1="235" y1="146" x2="235" y2="154" stroke="#8F5B4A" stroke-width="2.5" stroke-dasharray="2,2"/>
  <text x="315" y="154" font-size="9.5" fill="#8F5B4A">J / 2pi = 4.2 GHz</text>
  <text x="315" y="169" font-size="9" fill="#8E7F6B">kappa = 16.118 MHz</text>
  <rect x="445" y="74" width="265" height="150" fill="#FAF8F3" stroke="#8E7F6B" stroke-width="1.2"/>
  <text x="577" y="96" text-anchor="middle" font-size="11" fill="#3A2E26">Verified EM Portal Analogs</text>
  <line x1="465" y1="106" x2="690" y2="106" stroke="#EAE2D2" stroke-width="1"/>
  <text x="465" y="128" font-size="9.5" fill="#64705B">Q = 1.2e7 | n_eff = 1.78</text>
  <text x="465" y="148" font-size="9.5" fill="#8F5B4A">Cooperativity C = 2.716e5</text>
  <text x="465" y="168" font-size="9.5" fill="#3A2E26">Target eta_EM = sin(1) = 0.84147</text>
  <text x="465" y="188" font-size="9.5" fill="#64705B">Group speed v_g = 0.5618 c &lt; c</text>
  <text x="465" y="208" font-size="9" fill="#8E7F6B">Mathematical mode transfer only</text>
  <text x="380" y="248" text-anchor="middle" font-size="10" fill="#3A2E26">Demonstrates resonant multi-brane state transfer without macroscopic spacetime wormholes</text>
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
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 280" width="760" height="280" style="background:#F6F2EA;font-family:'DejaVu Serif',Georgia,serif">
  <rect x="0" y="0" width="760" height="280" fill="#F6F2EA"/>
  <rect x="16" y="16" width="728" height="248" fill="#FFFFFF" stroke="#8E7F6B" stroke-width="1"/>
  <text x="380" y="42" text-anchor="middle" font-size="13" fill="#3A2E26">Device H: Tabletop Pockels-Ring Deutsch-Lloyd Time-Loop Simulator (tau = 10.0 ns)</text>
  <line x1="65" y1="110" x2="180" y2="110" stroke="#3A2E26" stroke-width="1.8"/>
  <text x="115" y="96" text-anchor="middle" font-size="9.5" fill="#3A2E26">Chronology Qubit A (|0&gt;)</text>
  <rect x="180" y="88" width="110" height="72" fill="#F6F2EA" stroke="#8F5B4A" stroke-width="1.6"/>
  <text x="235" y="118" text-anchor="middle" font-size="10.5" fill="#8F5B4A">Pockels Gate U</text>
  <text x="235" y="136" text-anchor="middle" font-size="9" fill="#3A2E26">(H x I) CNOT_AB</text>
  <line x1="290" y1="110" x2="408" y2="110" stroke="#3A2E26" stroke-width="1.8"/>
  <rect x="408" y="92" width="76" height="36" fill="#FAF8F3" stroke="#64705B" stroke-width="1.3"/>
  <text x="446" y="114" text-anchor="middle" font-size="9.5" fill="#64705B">Tomography</text>
  <path d="M 290 148 L 350 148 L 350 212 L 130 212 L 130 148 L 180 148" fill="none" stroke="#64705B" stroke-width="2"/>
  <circle cx="240" cy="212" r="14" fill="#F6F2EA" stroke="#64705B" stroke-width="1.3"/>
  <text x="240" y="216" text-anchor="middle" font-size="8.5" fill="#64705B">10 ns</text>
  <text x="240" y="238" text-anchor="middle" font-size="9.5" fill="#64705B">Fiber Feedback Loop B (rho_CTC)</text>
  <rect x="506" y="78" width="214" height="146" fill="#FAF8F3" stroke="#8E7F6B" stroke-width="1.2"/>
  <text x="613" y="100" text-anchor="middle" font-size="11" fill="#3A2E26">Deutsch Fixed Point</text>
  <line x1="522" y1="110" x2="704" y2="110" stroke="#EAE2D2" stroke-width="1"/>
  <text x="524" y="132" font-size="9.5" fill="#3A2E26">rho_CTC = diag(0.5, 0.5)</text>
  <text x="524" y="152" font-size="9.5" fill="#64705B">Residual &lt; 1e-14 (Exact)</text>
  <text x="524" y="172" font-size="9.5" fill="#8F5B4A">Grandfather paradox resolved</text>
  <text x="524" y="192" font-size="9" fill="#8E7F6B">No backward clock reversal</text>
  <text x="380" y="254" text-anchor="middle" font-size="9.5" fill="#8E7F6B">Quantum circuit postselection emulates consistency algebra under 5D microcausality</text>
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
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 280" width="760" height="280" style="background:#F6F2EA;font-family:'DejaVu Serif',Georgia,serif">
  <rect x="0" y="0" width="760" height="280" fill="#F6F2EA"/>
  <rect x="16" y="16" width="728" height="248" fill="#FFFFFF" stroke="#8E7F6B" stroke-width="1"/>
  <text x="380" y="42" text-anchor="middle" font-size="13" fill="#3A2E26">Device I: Parametric Casimir Vacuum Harvester &amp; Second-Law Calorimeter (d = 100 nm)</text>
  <rect x="88" y="84" width="270" height="26" fill="#8E7F6B" stroke="#3A2E26" stroke-width="1.3"/>
  <text x="223" y="101" text-anchor="middle" font-size="10" fill="#FFFFFF">Top Au/SiC Membrane (A = 1 cm^2)</text>
  <rect x="88" y="148" width="270" height="28" fill="#3A2E26"/>
  <text x="223" y="166" text-anchor="middle" font-size="10" fill="#F6F2EA">Piezo Driver (50 MHz, delta d = 10 nm)</text>
  <line x1="150" y1="112" x2="150" y2="146" stroke="#8F5B4A" stroke-width="1.5"/>
  <line x1="296" y1="146" x2="296" y2="112" stroke="#8F5B4A" stroke-width="1.5"/>
  <text x="223" y="133" text-anchor="middle" font-size="10" fill="#8F5B4A">Gap d = 100 nm (P_C = 13.001 Pa)</text>
  <line x1="358" y1="130" x2="430" y2="130" stroke="#64705B" stroke-width="1.8" stroke-dasharray="4,2"/>
  <polygon points="436,130 426,126 426,134" fill="#64705B"/>
  <rect x="438" y="74" width="276" height="150" fill="#FAF8F3" stroke="#64705B" stroke-width="1.3"/>
  <text x="576" y="96" text-anchor="middle" font-size="11" fill="#3A2E26">Araki Thermodynamic Audit</text>
  <line x1="454" y1="106" x2="698" y2="106" stroke="#EAE2D2" stroke-width="1"/>
  <text x="456" y="128" font-size="9.5" fill="#64705B">Force F_C = 1.3001 mN across 1 cm^2</text>
  <text x="456" y="148" font-size="9.5" fill="#8F5B4A">DCE ratio (v/c)^2 = 1.098e-16</text>
  <text x="456" y="168" font-size="9.5" fill="#3A2E26">Extractable: dW_out &lt;= dF_mod</text>
  <text x="456" y="188" font-size="9.5" fill="#8F5B4A">Strict Law: Pump Work &gt;= Output</text>
  <text x="456" y="208" font-size="9" fill="#8E7F6B">No perpetual-motion "free energy"</text>
  <text x="380" y="250" text-anchor="middle" font-size="10" fill="#3A2E26">Real microwave vacuum photons harvested from mechanical pump power strictly below 100% eff.</text>
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
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 280" width="760" height="280" style="background:#F6F2EA;font-family:'DejaVu Serif',Georgia,serif">
  <rect x="0" y="0" width="760" height="280" fill="#F6F2EA"/>
  <rect x="16" y="16" width="728" height="248" fill="#FFFFFF" stroke="#8E7F6B" stroke-width="1"/>
  <text x="380" y="42" text-anchor="middle" font-size="13" fill="#3A2E26">Device J: Unruh-DeWitt Ion-Trap Clock &amp; KMS Modular Thermal Engine</text>
  <rect x="64" y="80" width="290" height="140" fill="#F6F2EA" stroke="#3A2E26" stroke-width="1.5"/>
  <text x="209" y="102" text-anchor="middle" font-size="10.5" fill="#3A2E26">Segmented RF Paul Trap (4.2 K)</text>
  <line x1="90" y1="150" x2="328" y2="150" stroke="#8E7F6B" stroke-width="1.4" stroke-dasharray="4,3"/>
  <circle cx="150" cy="150" r="5" fill="#8F5B4A"/>
  <circle cx="209" cy="150" r="5" fill="#8F5B4A"/>
  <circle cx="268" cy="150" r="5" fill="#8F5B4A"/>
  <path d="M 150 132 Q 209 112 268 132" fill="none" stroke="#64705B" stroke-width="2"/>
  <polygon points="274,134 263,128 267,138" fill="#64705B"/>
  <text x="209" y="182" text-anchor="middle" font-size="9.5" fill="#8F5B4A">Acceleration a = 1e16 m/s^2</text>
  <text x="209" y="198" text-anchor="middle" font-size="9" fill="#64705B">Rindler horizon thermality detector</text>
  <rect x="405" y="76" width="305" height="148" fill="#FAF8F3" stroke="#64705B" stroke-width="1.3"/>
  <text x="557" y="98" text-anchor="middle" font-size="11" fill="#3A2E26">Exact Araki KMS Equivalence</text>
  <line x1="422" y1="108" x2="692" y2="108" stroke="#EAE2D2" stroke-width="1"/>
  <text x="424" y="130" font-size="9.5" fill="#64705B">Trap T_U = 40.55 uK (a = 1e16)</text>
  <text x="424" y="150" font-size="9.5" fill="#8F5B4A">LWFA Ref T_U = 40.55 K (a = 1e22)</text>
  <text x="424" y="170" font-size="9.5" fill="#3A2E26">beta_U * hbar = 2 pi c / a</text>
  <text x="424" y="190" font-size="9.5" fill="#64705B">= 1.88365e-7 s (&lt; 1e-14 error)</text>
  <text x="424" y="210" font-size="9" fill="#8E7F6B">Powered strictly by external RF laser drive</text>
  <text x="380" y="250" text-anchor="middle" font-size="10" fill="#3A2E26">Bridges accelerated clock thermality and Tomita-Takesaki modular periodicity Eq. (H12.0.2)</text>
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
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 280" width="760" height="280" style="background:#F6F2EA;font-family:'DejaVu Serif',Georgia,serif">
  <rect x="0" y="0" width="760" height="280" fill="#F6F2EA"/>
  <rect x="16" y="16" width="728" height="248" fill="#FFFFFF" stroke="#8E7F6B" stroke-width="1"/>
  <text x="380" y="42" text-anchor="middle" font-size="13" fill="#3A2E26">Device K: TaAs Weyl-Semimetal Chiral Anomaly &amp; 5D Gauge-Stress Bridge</text>
  <polygon points="88,184 220,100 375,100 243,184" fill="#F6F2EA" stroke="#3A2E26" stroke-width="1.7"/>
  <text x="232" y="144" text-anchor="middle" font-size="10.5" fill="#3A2E26">TaAs Weyl Crystal</text>
  <text x="232" y="160" text-anchor="middle" font-size="9" fill="#64705B">(v_F = 4.0e5 m/s ~ 0.00133 c)</text>
  <line x1="120" y1="86" x2="340" y2="86" stroke="#8F5B4A" stroke-width="2"/>
  <polygon points="346,86 336,82 336,90" fill="#8F5B4A"/>
  <text x="233" y="76" text-anchor="middle" font-size="9.5" fill="#8F5B4A">Collinear E // B Drive (Chiral Pumping)</text>
  <rect x="415" y="76" width="295" height="148" fill="#FAF8F3" stroke="#64705B" stroke-width="1.3"/>
  <text x="562" y="98" text-anchor="middle" font-size="11" fill="#3A2E26">5D Einstein-Maxwell Analog</text>
  <line x1="432" y1="108" x2="694" y2="108" stroke="#EAE2D2" stroke-width="1"/>
  <text x="434" y="130" font-size="9.5" fill="#3A2E26">T^A_B = E_0^2 diag(-1/2, +1/2, +1/2, +1/2, -1/2)</text>
  <text x="434" y="150" font-size="9.5" fill="#64705B">Brane NEC along x: +1.0 &gt;= 0</text>
  <text x="434" y="170" font-size="9.5" fill="#64705B">Bulk NEC along y:  0.0 &gt;= 0</text>
  <text x="434" y="190" font-size="9.5" fill="#8F5B4A">Mirrors ghost-free App. B flux F_0y</text>
  <text x="434" y="210" font-size="9" fill="#8E7F6B">Solid-state anomaly only (G_5 unchanged)</text>
  <text x="380" y="250" text-anchor="middle" font-size="10" fill="#3A2E26">Realizes axial torsion-gravity anomaly inflow matching 5D Einstein-Maxwell NEC boundaries</text>
</svg>`
  }
];

export const H12PlateCard: React.FC<{ plate: H12PlateSpec }> = ({ plate }) => {
  const [imgFailed, setImgFailed] = React.useState(false);

  return (
    <figure className="my-10 rounded-2xl border border-[#D8CFC2] dark:border-[#3A2E26] bg-[#FFFFFF] dark:bg-[#1C1714] p-6 sm:p-8 shadow-xs">
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#EAE2D6] dark:border-[#3A2E26] text-xs font-mono">
        <span className="uppercase tracking-[0.14em] text-[#8F5B4A] dark:text-[#C49684]">
          {plate.figureNumber} · Chapter {plate.anchorChapter}
        </span>
        <span className="text-[#8E7F6B] dark:text-[#A89A86]">
          {plate.category}
        </span>
      </div>
      <h4
        className="font-normal text-[21px] leading-[1.3] text-[#3A2E26] dark:text-[#F6F2EA] mt-4 mb-5"
        style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400 }}
      >
        <MathText text={plate.title} />
      </h4>
      <div className="overflow-hidden rounded-xl border border-[#D8CFC2] dark:border-[#3A2E26] bg-[#F6F2EA] dark:bg-[#231D18]">
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
            loading="lazy"
          />
        )}
      </div>
      <figcaption className="mt-7 pt-5 border-t border-[#EAE2D6] dark:border-[#3A2E26] text-[14.5px] leading-[1.7] text-[#3A2E26] dark:text-[#D8CFC2] text-justify [hyphens:auto]">
        <MathText text={plate.description} />
      </figcaption>
    </figure>
  );
};

export const H12FigureCard: React.FC<{ fig: H12FigureSpec }> = ({ fig }) => (
  <figure className="my-10 rounded-2xl border border-[#D8CFC2] dark:border-[#3A2E26] bg-[#FFFFFF] dark:bg-[#1C1714] p-6 sm:p-8 shadow-xs">
    <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#EAE2D6] dark:border-[#3A2E26] text-xs font-mono">
      <span className="uppercase tracking-[0.14em] text-[#64705B] dark:text-[#A3B19B]">
        {fig.figureNumber} · Chapter {fig.anchorChapter}
      </span>
      <span className="text-[#8E7F6B] dark:text-[#A89A86]">
        {fig.category}
      </span>
    </div>
    <h4
      className="font-normal text-[21px] leading-[1.3] text-[#3A2E26] dark:text-[#F6F2EA] mt-4 mb-5"
      style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400 }}
    >
      <MathText text={fig.title} />
    </h4>
    <div
      className="w-full overflow-x-auto rounded-xl border border-[#D8CFC2] dark:border-[#3A2E26] bg-[#F6F2EA] p-3"
      dangerouslySetInnerHTML={{ __html: fig.svgMarkup }}
    />
    <figcaption className="mt-7 pt-5 border-t border-[#EAE2D6] dark:border-[#3A2E26] text-[14.5px] leading-[1.7] text-[#3A2E26] dark:text-[#D8CFC2] text-justify [hyphens:auto]">
      <MathText text={fig.caption} />
    </figcaption>
  </figure>
);
