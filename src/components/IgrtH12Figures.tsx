/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * IGRT-H12 Archival Plates & Clean Minimalist Vector Illustrations:
 * - Preserves BOTH user-provided plates from /assets/aistudio/ untouched
 * - Replaces all non-user raster plates with clean, minimalist, 4-color muted-earth
 *   architectural SVG figures (#3A2E26 Umber, #8F5B4A Terracotta, #64705B Sage,
 *   #8E7F6B Warm Stone on #F6F2EA parchment) anchored across Chapters 1–13.
 */

import React from 'react';
import type { H12EpistemicCategory } from '../types/igrtH12Apparatus';
import { MathText } from './MathText';

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
      'User-provided conceptual synthesis illustrating the hierarchical relationship between a higher-dimensional 5D bulk brane (top sheet), our 4D spacetime layer (middle sheet), and the local quantum fiber ℋ (bottom oscillators), alongside double-slit superposition, Pauli exclusion antisymmetry, barrier tunneling, and topological-qubit metaphors. Formal distinction note: the visual "portal" transition on the right represents speculative Category C/D resonant state coupling rather than a Category A/B physical wormhole—exact NEC constraints (10⁻⁷¹ Casimir deficit at 1 m) and the Born rule (Category A) are treated rigorously in Chapters 6–7.'
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
      'User-provided architectural atlas juxtaposing the compactified 5D bulk (M_5 = M_4 × K_1), the 4D Lorentzian fabric (G_{μν} = 8π G T_{μν} + Λ g_{μν}), the Kaluza–Klein information-geometric metric ds² = g_{μν} dx^μ dx^ν + Φ²(dy + A_μ dx^μ)², modular proper-time folding Δτ = ∮ α_mod ds_QFI, dimensional closure torus, and hypothetical frequency-matched "resonance portals" (4D → 5D/3D/2D/0D). Formal epistemic caveat: while resonant mode coupling and optical/BEC analog simulators (Devices C & F) operate on rigorous dispersive metrics (Category B/D), macroscopic traversal between spacetime sheets remains unestablished (Category C/D) and strictly governed by 5D microcausality and null energy theorems.'
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
    title: 'Minimalist Bundle Geometry: 4D Brane M_4, Bulk Coordinate y & Orthogonal Fiber PU(ℋ)',
    category: 'CATEGORY B — DERIVED',
    caption:
      'Geometric decoupling theorem proved in §2.1: extending the 4D spacetime base (M_4, g_μν) along a physical fifth dimension y does not tilt or twist the internal projective-Hilbert fiber PU(ℋ). Cross-metric components vanish identically (G_{Ai} = 0 for A ∈ {0..4}), keeping the H11 SLD Fisher metric independent of bulk position y.',
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 280" width="760" height="280" style="background:#F6F2EA;font-family:'DejaVu Serif',Georgia,serif">
  <rect x="0" y="0" width="760" height="280" fill="#F6F2EA"/>
  <rect x="16" y="16" width="728" height="248" fill="#FFFFFF" stroke="#8E7F6B" stroke-width="1"/>
  <text x="380" y="42" text-anchor="middle" font-size="13" fill="#3A2E26">Orthogonal Principal Bundle Decomposition: P_5 -> M_4 x K_1  (G_Ai = 0)</text>
  <!-- 4D Brane plane -->
  <polygon points="105,185 275,140 485,140 315,185" fill="#F6F2EA" stroke="#3A2E26" stroke-width="1.6"/>
  <text x="155" y="176" font-size="11" fill="#3A2E26">4D Brane M_4 (y = 0)</text>
  <!-- Fifth coordinate y axis -->
  <line x1="295" y1="162" x2="295" y2="74" stroke="#8F5B4A" stroke-width="1.8" stroke-dasharray="5,4"/>
  <polygon points="295,68 291,78 299,78" fill="#8F5B4A"/>
  <text x="307" y="84" font-size="11" fill="#8F5B4A">5th Coordinate y (Bulk)</text>
  <!-- Right-angle marker at y=0 -->
  <polyline points="295,148 310,148 310,162" fill="none" stroke="#8E7F6B" stroke-width="1.2"/>
  <circle cx="295" cy="162" r="4" fill="#3A2E26"/>
  <!-- Orthogonal Hilbert Fiber PU(H) -->
  <line x1="295" y1="162" x2="545" y2="162" stroke="#64705B" stroke-width="1.6"/>
  <circle cx="595" cy="162" r="46" fill="#F6F2EA" stroke="#64705B" stroke-width="1.8"/>
  <ellipse cx="595" cy="162" rx="46" ry="15" fill="none" stroke="#8E7F6B" stroke-width="1.1" stroke-dasharray="4,3"/>
  <circle cx="595" cy="116" r="3.5" fill="#8F5B4A"/>
  <circle cx="628" cy="144" r="3.5" fill="#64705B"/>
  <path d="M 595 116 A 46 46 0 0 1 628 144" fill="none" stroke="#8F5B4A" stroke-width="2"/>
  <text x="595" y="226" text-anchor="middle" font-size="11" fill="#64705B">Hilbert Fiber PU(H)</text>
  <text x="595" y="241" text-anchor="middle" font-size="10" fill="#8E7F6B">SLD Fisher Arc s_QFI</text>
  <!-- Decoupling callout -->
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
  <!-- Y ticks -->
  <text x="90" y="75" text-anchor="end" font-size="10" fill="#8E7F6B">10^0</text>
  <text x="90" y="124" text-anchor="end" font-size="10" fill="#8E7F6B">10^-6</text>
  <text x="90" y="173" text-anchor="end" font-size="10" fill="#8E7F6B">10^-12</text>
  <text x="90" y="216" text-anchor="end" font-size="10" fill="#8E7F6B">10^-18</text>
  <!-- Horizontal subtle grid -->
  <line x1="100" y1="120" x2="680" y2="120" stroke="#F6F2EA" stroke-width="1"/>
  <line x1="100" y1="168" x2="680" y2="168" stroke="#F6F2EA" stroke-width="1"/>
  <!-- Curve -->
  <path d="M 120 202 L 245 182 L 420 120 L 560 76 L 670 72" fill="none" stroke="#64705B" stroke-width="2.2"/>
  <!-- Eot-Wash wall -->
  <line x1="560" y1="68" x2="560" y2="215" stroke="#8F5B4A" stroke-width="1.4" stroke-dasharray="5,4"/>
  <text x="568" y="102" font-size="10.5" fill="#8F5B4A">m_KK &gt;= 4.485 meV</text>
  <text x="568" y="116" font-size="9.5" fill="#8E7F6B">(Eot-Wash R_5 &lt;= 44 um)</text>
  <text x="568" y="132" font-size="9.5" fill="#8F5B4A">77 K (1.48x) &gt; m_KK</text>
  <!-- 4 K thermal point inside EFT -->
  <circle cx="515" cy="90" r="3.8" fill="#64705B"/>
  <text x="505" y="84" text-anchor="end" font-size="9.5" fill="#64705B">4 K: 5.873e-3</text>
  <!-- 1 neV benchmark (Tree/HK + FRG Litim) -->
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
  <!-- Endpoints -->
  <line x1="120" y1="68" x2="120" y2="226" stroke="#8E7F6B" stroke-width="1.1" stroke-dasharray="3,3"/>
  <line x1="640" y1="68" x2="640" y2="226" stroke="#8E7F6B" stroke-width="1.1" stroke-dasharray="3,3"/>
  <text x="120" y="242" text-anchor="middle" font-size="10.5" fill="#3A2E26">Event A (x_1, y=0)</text>
  <text x="640" y="242" text-anchor="middle" font-size="10.5" fill="#3A2E26">Event B (x_2, y=0)</text>
  <!-- Layer 1: Brane -->
  <line x1="120" y1="92" x2="640" y2="92" stroke="#3A2E26" stroke-width="2"/>
  <circle cx="120" cy="92" r="4" fill="#3A2E26"/>
  <circle cx="640" cy="92" r="4" fill="#3A2E26"/>
  <text x="380" y="82" text-anchor="middle" font-size="11" fill="#3A2E26">1. Brane Proper Time tau_4 (4D geodesic, y = 0)</text>
  <!-- Layer 2: Bulk geodesic -->
  <path d="M 120 144 Q 380 184 640 144" fill="none" stroke="#8F5B4A" stroke-width="2"/>
  <circle cx="120" cy="144" r="4" fill="#8F5B4A"/>
  <circle cx="640" cy="144" r="4" fill="#8F5B4A"/>
  <text x="380" y="132" text-anchor="middle" font-size="11" fill="#8F5B4A">2. 5D Bulk Null Excursion tau_5 (Conjectural if alpha_t + alpha_x &gt; 0)</text>
  <!-- Layer 3: Modular QFI clock -->
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
      'Minimalist cross-section replacing Plate H12-III: contrasting a brane-confined light ray (top horizontal dashed line, Δt_4 = Δx / c) against a smooth Beltrami arch plunging to depth y_peak into an assumed asymmetrically warped 5D bulk (Model 2B, α_t + α_x > 0). Because local 5D microcausality ds_5² = 0 holds along every point of the arch, coordinate arrival compresses only via the assumed metric coefficient c_eff(y) > c.',
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 280" width="760" height="280" style="background:#F6F2EA;font-family:'DejaVu Serif',Georgia,serif">
  <rect x="0" y="0" width="760" height="280" fill="#F6F2EA"/>
  <rect x="16" y="16" width="728" height="248" fill="#FFFFFF" stroke="#8E7F6B" stroke-width="1"/>
  <text x="380" y="42" text-anchor="middle" font-size="13" fill="#3A2E26">Beltrami Geodesic Dip Through Asymmetrically Warped 5D Bulk</text>
  <!-- Brane horizon -->
  <line x1="90" y1="88" x2="670" y2="88" stroke="#3A2E26" stroke-width="1.6" stroke-dasharray="6,4"/>
  <text x="380" y="76" text-anchor="middle" font-size="11" fill="#3A2E26">4D Brane Light Path (y = 0): Model 1 &amp; Model 2A Minimum (No Shortcut)</text>
  <!-- Bulk region -->
  <path d="M 110 88 Q 380 232 650 88" fill="#F6F2EA" stroke="#8F5B4A" stroke-width="2.2"/>
  <circle cx="110" cy="88" r="4.5" fill="#3A2E26"/>
  <circle cx="650" cy="88" r="4.5" fill="#3A2E26"/>
  <circle cx="380" cy="160" r="4" fill="#8F5B4A"/>
  <!-- Turning point guide -->
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
  <!-- Bar 1 -->
  <rect x="108" y="94" width="56" height="136" fill="#8E7F6B"/>
  <text x="136" y="84" text-anchor="middle" font-size="10" fill="#3A2E26">1.00125</text>
  <text x="136" y="248" text-anchor="middle" font-size="9.5" fill="#3A2E26">Model 1: S1</text>
  <text x="136" y="262" text-anchor="middle" font-size="9" fill="#8E7F6B">No-Go (Cat. B)</text>
  <!-- Bar 2 -->
  <rect x="206" y="92" width="56" height="138" fill="#3A2E26"/>
  <text x="234" y="82" text-anchor="middle" font-size="10" fill="#3A2E26">1.01032</text>
  <text x="234" y="248" text-anchor="middle" font-size="9.5" fill="#3A2E26">Model 2A: RS</text>
  <text x="234" y="262" text-anchor="middle" font-size="9" fill="#8E7F6B">No-Go (Cat. B)</text>
  <!-- Bar 3: EM (1.0, 0.0) -->
  <rect x="304" y="116" width="56" height="114" fill="#64705B"/>
  <text x="332" y="106" text-anchor="middle" font-size="10" fill="#64705B">0.84147</text>
  <text x="332" y="248" text-anchor="middle" font-size="9.5" fill="#3A2E26">EM (1.0,0.0)</text>
  <text x="332" y="262" text-anchor="middle" font-size="9" fill="#64705B">k dx=2 &lt; pi</text>
  <!-- Bar 4 -->
  <rect x="402" y="113" width="56" height="117" fill="#8F5B4A"/>
  <text x="430" y="105" text-anchor="middle" font-size="10" fill="#8F5B4A">0.86634</text>
  <text x="430" y="248" text-anchor="middle" font-size="9.5" fill="#3A2E26">2B (k dx=2)</text>
  <text x="430" y="262" text-anchor="middle" font-size="9" fill="#8F5B4A">Cat. C</text>
  <!-- Bar 5 -->
  <rect x="500" y="184" width="56" height="46" fill="#64705B"/>
  <text x="528" y="176" text-anchor="middle" font-size="10" fill="#64705B">0.34279</text>
  <text x="528" y="248" text-anchor="middle" font-size="9.5" fill="#3A2E26">2B (k dx=10)</text>
  <text x="528" y="262" text-anchor="middle" font-size="9" fill="#64705B">Cat. C</text>
  <!-- Bar 6 -->
  <rect x="598" y="219" width="56" height="11" fill="#8F5B4A"/>
  <text x="626" y="211" text-anchor="middle" font-size="10" fill="#8F5B4A">0.07770</text>
  <text x="626" y="248" text-anchor="middle" font-size="9.5" fill="#3A2E26">2B (k dx=50)</text>
  <text x="626" y="262" text-anchor="middle" font-size="9" fill="#8F5B4A">Cat. C</text>
  <!-- Horizon note -->
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
      'Minimalist topological comparison replacing Plate H12-IV. Left: the 4D H11 Hayward regular black hole smoothly closes gravitational collapse in a de Sitter core (r_core = 2.5389 × 10⁻²² m for 30 M_⊙) obeying radial and transverse NEC (ρ + p_r = 0, ρ + p_⊥ > 0)—producing GW ringdown echoes (K_echo = 0.184), NOT a portal. Right: a Morris–Thorne throat requires NEC-violating negative energy across a flared minimal sphere.',
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 280" width="760" height="280" style="background:#F6F2EA;font-family:'DejaVu Serif',Georgia,serif">
  <rect x="0" y="0" width="760" height="280" fill="#F6F2EA"/>
  <rect x="16" y="16" width="728" height="248" fill="#FFFFFF" stroke="#8E7F6B" stroke-width="1"/>
  <line x1="380" y1="32" x2="380" y2="250" stroke="#F6F2EA" stroke-width="1.5"/>
  <!-- Left: Hayward Closed Core -->
  <text x="198" y="44" text-anchor="middle" font-size="12.5" fill="#3A2E26">Hayward Regular Core (Non-Portal)</text>
  <path d="M 80 85 C 125 90, 145 190, 198 190 C 251 190, 271 90, 316 85" fill="none" stroke="#64705B" stroke-width="2.2"/>
  <ellipse cx="198" cy="186" rx="22" ry="7" fill="#F6F2EA" stroke="#64705B" stroke-width="1.2"/>
  <text x="198" y="216" text-anchor="middle" font-size="10.5" fill="#64705B">Smooth dS Core (rho + p_r = 0)</text>
  <text x="198" y="233" text-anchor="middle" font-size="10" fill="#8E7F6B">K_echo = 0.184 | No Throat</text>
  <!-- Right: Morris-Thorne Throat -->
  <text x="562" y="44" text-anchor="middle" font-size="12.5" fill="#3A2E26">Morris-Thorne Throat (NEC &lt; 0)</text>
  <path d="M 445 78 Q 520 132 445 186" fill="none" stroke="#8F5B4A" stroke-width="2.2"/>
  <path d="M 679 78 Q 604 132 679 186" fill="none" stroke="#8F5B4A" stroke-width="2.2"/>
  <ellipse cx="562" cy="132" rx="79" ry="12" fill="none" stroke="#8F5B4A" stroke-width="1.3" stroke-dasharray="4,3"/>
  <text x="562" y="216" text-anchor="middle" font-size="10.5" fill="#8F5B4A">Requires 10^71 x Casimir Deficit</text>
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
  <!-- Stems -->
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
      'Minimalist synthesis replacing Plate H12-V: twin-slit interference geometry (left) projects onto the orthogonal projective Bloch fiber PU(ℋ), yielding the six-point SLD Quantum Fisher complementarity quarter-circle V² + D_QFI² = 1 (right). Independent of 5D coordinate y; Born’s rule stays a Category A postulate.',
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 290" width="760" height="290" style="background:#F6F2EA;font-family:'DejaVu Serif',Georgia,serif">
  <rect x="0" y="0" width="760" height="290" fill="#F6F2EA"/>
  <rect x="16" y="16" width="728" height="258" fill="#FFFFFF" stroke="#8E7F6B" stroke-width="1"/>
  <text x="380" y="42" text-anchor="middle" font-size="13" fill="#3A2E26">Double-Slit SLD Quantum Fisher Complementarity: V^2 + D_QFI^2 = 1</text>
  <!-- Left minimalist double slit -->
  <line x1="90" y1="75" x2="90" y2="122" stroke="#3A2E26" stroke-width="2.5"/>
  <line x1="90" y1="138" x2="90" y2="162" stroke="#3A2E26" stroke-width="2.5"/>
  <line x1="90" y1="178" x2="90" y2="225" stroke="#3A2E26" stroke-width="2.5"/>
  <circle cx="52" cy="150" r="3.5" fill="#8F5B4A"/>
  <line x1="55" y1="150" x2="90" y2="130" stroke="#8E7F6B" stroke-width="1.1"/>
  <line x1="55" y1="150" x2="90" y2="170" stroke="#8E7F6B" stroke-width="1.1"/>
  <path d="M 90 130 Q 155 135 215 150" fill="none" stroke="#64705B" stroke-width="1.4"/>
  <path d="M 90 170 Q 155 165 215 150" fill="none" stroke="#64705B" stroke-width="1.4"/>
  <line x1="218" y1="78" x2="218" y2="222" stroke="#8E7F6B" stroke-width="1.5"/>
  <text x="145" y="246" text-anchor="middle" font-size="10" fill="#8E7F6B">Twin-slit phase phi -> PU(H)</text>
  <!-- Right quarter circle -->
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
  <!-- Table summary right -->
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
  <!-- 6 clean horizontal rows -->
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
  <!-- Left box -->
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
  <!-- Connector -->
  <line x1="358" y1="153" x2="402" y2="153" stroke="#8E7F6B" stroke-width="1.5"/>
  <polygon points="406,153 398,149 398,157" fill="#8E7F6B"/>
  <!-- Right box -->
  <rect x="408" y="64" width="310" height="178" fill="#F6F2EA" stroke="#8F5B4A" stroke-width="1.3"/>
  <text x="563" y="88" text-anchor="middle" font-size="12" fill="#8F5B4A">IGRT-H12 5D Probes (P7-P13)</text>
  <line x1="428" y1="98" x2="698" y2="98" stroke="#8E7F6B" stroke-width="0.8"/>
  <text x="424" y="118" font-size="10" fill="#3A2E26">P7: 10 um KK Yukawa (Tests 5D Bulk)</text>
  <text x="424" y="138" font-size="10" fill="#3A2E26">P8: 10^-19 Clocks (Tests KK Corr.)</text>
  <text x="424" y="158" font-size="10" fill="#3A2E26">P9: 10^-6 Slits (Tests Decoherence)</text>
  <text x="424" y="178" font-size="10" fill="#3A2E26">P10: 3G GW Leakage (Tests Graviton Loss)</text>
  <text x="424" y="198" font-size="10" fill="#8F5B4A">P11-P12: Folding (Not Yet Testable)</text>
  <text x="424" y="218" font-size="10" fill="#64705B">P13: GW170817 Bound (4.129e-16 Active)</text>
  <text x="563" y="236" text-anchor="middle" font-size="9.5" fill="#8F5B4A">P7-P10 Probe Bulk; P11-P13 Isolate Folding</text>
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
