/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Publication-Grade Inline SVG Figures (Figures 1–8) for the IGRT Monograph.
 * Zero LaTeX markup; pure Unicode symbols; analytical curves sampled from exact equations.
 */

import React from 'react';
import { formatSvgMathMarkup } from '../utils/formatMathUnicode';
import { MathText } from './MathText';

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

function sampleBounceSvgPaths(): {
  igrtPath: string;
  grLeftPath: string;
  grRightPath: string;
  bounceY: number;
} {
  // Plot box: x in [115, 765], y in [58, 265]; normalized u = t/t_0 in [-2.3, 2.3]
  // Exact loop-quantum / IGRT bounce profile a(u) = (1 + u^2)^(1/3), a_max = (1 + 2.3^2)^(1/3) ≈ 1.846
  const x0 = 115;
  const w = 650;
  const yTop = 58;
  const yBot = 265;
  const uMax = 2.3;
  const aMax = Math.pow(1 + uMax * uMax, 1 / 3);
  const toX = (u: number) => x0 + ((u + uMax) / (2 * uMax)) * w;
  const toY = (a: number) => yBot - (a / aMax) * (yBot - yTop);

  const igrtPts: string[] = [];
  for (let i = 0; i <= 92; i++) {
    const u = -uMax + (2 * uMax * i) / 92;
    const a = Math.pow(1 + u * u, 1 / 3);
    igrtPts.push(`${i === 0 ? 'M' : 'L'} ${toX(u).toFixed(1)} ${toY(a).toFixed(1)}`);
  }

  const grLeftPts: string[] = [];
  const grRightPts: string[] = [];
  for (let i = 0; i <= 40; i++) {
    const uL = -uMax + (uMax * i) / 40;
    const aL = Math.pow(Math.abs(uL), 2 / 3);
    grLeftPts.push(`${i === 0 ? 'M' : 'L'} ${toX(uL).toFixed(1)} ${toY(aL).toFixed(1)}`);

    const uR = (uMax * i) / 40;
    const aR = Math.pow(Math.abs(uR), 2 / 3);
    grRightPts.push(`${i === 0 ? 'M' : 'L'} ${toX(uR).toFixed(1)} ${toY(aR).toFixed(1)}`);
  }

  return {
    igrtPath: igrtPts.join(' '),
    grLeftPath: grLeftPts.join(' '),
    grRightPath: grRightPts.join(' '),
    bounceY: Number(toY(1.0).toFixed(1))
  };
}

function sampleThawingWzSvgPath(): {
  curvePath: string;
  markers: Array<{ z: number; x: number; y: number; wVal: number }>;
  yAtW: (w: number) => number;
} {
  // Exact formula: w(z) = -0.982 + 0.018 * z / (1 + z) on z in [0, 3], linear w in [-1.01, -0.955]
  const x0 = 115;
  const plotW = 650;
  const yTop = 58;
  const plotH = 198;
  const wMin = -1.01;
  const wMax = -0.955;

  const toX = (z: number) => x0 + (z / 3) * plotW;
  const yAtW = (w: number) => yTop + ((wMax - w) / (wMax - wMin)) * plotH;

  const pts: string[] = [];
  for (let i = 0; i <= 60; i++) {
    const z = (3 * i) / 60;
    const wVal = -0.982 + (0.018 * z) / (1 + z);
    pts.push(`${i === 0 ? 'M' : 'L'} ${toX(z).toFixed(1)} ${yAtW(wVal).toFixed(1)}`);
  }

  const markers = [0, 1, 2, 3].map((z) => {
    const wVal = -0.982 + (0.018 * z) / (1 + z);
    return {
      z,
      x: Number(toX(z).toFixed(1)),
      y: Number(yAtW(wVal).toFixed(1)),
      wVal
    };
  });

  return { curvePath: pts.join(' '), markers, yAtW };
}

function sampleHaywardLapseSvgPaths(): {
  subExtremalPath: string;
  extremalPath: string;
  schwarzschildPath: string;
  toX: (r: number) => number;
  toY: (f: number) => number;
  rMinusX: number;
  rPlusX: number;
  rStarX: number;
} {
  // Plot box: x in [105, 775], y in [56, 268]; r/l0 in [0, 5.5], f in [-0.55, 1.15]
  const x0 = 105;
  const plotW = 670;
  const yTop = 56;
  const plotH = 212;
  const rMax = 5.5;
  const fMin = -0.55;
  const fMax = 1.15;

  const toX = (r: number) => x0 + (r / rMax) * plotW;
  const toY = (f: number) => yTop + ((fMax - f) / (fMax - fMin)) * plotH;

  const evalF = (r: number, mu: number) => 1 - (2 * mu * r * r) / (r * r * r + 2 * mu);

  const subPts: string[] = [];
  const extPts: string[] = [];
  const swPts: string[] = [];
  const muSub = 2.0;
  const muRem = (3 * Math.sqrt(3)) / 4; // ~ 1.299038

  for (let i = 0; i <= 110; i++) {
    const r = (rMax * i) / 110;
    subPts.push(`${i === 0 ? 'M' : 'L'} ${toX(r).toFixed(1)} ${toY(evalF(r, muSub)).toFixed(1)}`);
    extPts.push(`${i === 0 ? 'M' : 'L'} ${toX(r).toFixed(1)} ${toY(evalF(r, muRem)).toFixed(1)}`);
  }

  // Schwarzschild f(r) = 1 - 3/r plotted where f >= fMin -> r >= 3/1.55 ≈ 1.9355
  let startedSw = false;
  for (let i = 0; i <= 90; i++) {
    const r = 1.94 + ((rMax - 1.94) * i) / 90;
    const f = 1 - 3 / r;
    if (f >= fMin) {
      swPts.push(`${!startedSw ? 'M' : 'L'} ${toX(r).toFixed(1)} ${toY(f).toFixed(1)}`);
      startedSw = true;
    }
  }

  return {
    subExtremalPath: subPts.join(' '),
    extremalPath: extPts.join(' '),
    schwarzschildPath: swPts.join(' '),
    toX,
    toY,
    rMinusX: Number(toX(0.873).toFixed(1)),
    rPlusX: Number(toX(3.711).toFixed(1)),
    rStarX: Number(toX(Math.sqrt(3)).toFixed(1))
  };
}

function sampleLissajousSvgPath(): string {
  // Exact 2:1 parametric curve: x(theta) = sin(theta), y(theta) = sin(2*theta)
  const cx = 275;
  const cy = 168;
  const rx = 140;
  const ry = 104;
  const pts: string[] = [];
  const N = 120;
  for (let i = 0; i <= N; i++) {
    const theta = (2 * Math.PI * i) / N;
    const x = cx + rx * Math.sin(theta);
    const y = cy - ry * Math.sin(2 * theta);
    pts.push(`${i === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`);
  }
  return pts.join(' ') + ' Z';
}

const BOUNCE_DATA = sampleBounceSvgPaths();
const THAW_DATA = sampleThawingWzSvgPath();
const HAYWARD_DATA = sampleHaywardLapseSvgPaths();
const LISSAJOUS_PATH = sampleLissajousSvgPath();

export const PAPER_FIGURES: PaperFigureSpec[] = [
  {
    id: 1,
    anchorId: 'fig-1',
    chapterAnchor: 'chapter-1',
    afterSubsectionAnchor: 'sec-1-4',
    title: 'Logical Architecture and Chapter Roadmap of the IGRT Monograph',
    caption:
      'Figure 1. Logical architecture connecting the historical foundation, HL-LHC spectral test, emerging technologies, and seven postulates (Chapter 1) to principal fiber-bundle geometry (Chapter 2), ghost-free DHOST and Type III₁ Araki dynamics (Chapter 3), Tomita–Takesaki and Connes spectral correspondences (Chapter 4), canonical BRST unfreezing (Chapter 5), singularity regularization (Chapter 6), observational protocols (Chapter 7), and closure synthesis with Appendices A–J (Chapter 8).',
    isSchematic: true,
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 860 364" width="100%" height="auto" role="img" aria-label="Chapter roadmap of the IGRT monograph">
  <rect x="0" y="0" width="860" height="364" fill="#FAF8F3" stroke="#D6CABE" stroke-width="1"/>
  <text x="24" y="27" font-family="Georgia, serif" font-size="12.5" fill="#8B4513" letter-spacing="1.2">SCHEMATIC ARCHITECTURE — LOGICAL DEPENDENCY MAP</text>
  <line x1="24" y1="36" x2="836" y2="36" stroke="#E2D9C8" stroke-width="1"/>

  <rect x="24" y="52" width="182" height="72" rx="4" fill="#FFFFFF" stroke="#1E293B" stroke-width="1.3"/>
  <text x="115" y="77" text-anchor="middle" font-family="Georgia, serif" font-size="13" fill="#0F172A">Ch. 1: Scope &amp; Tests</text>
  <text x="115" y="97" text-anchor="middle" font-family="Georgia, serif" font-size="11" fill="#475569">4D Base, LHC &amp; Tech (§1.1–1.4)</text>
  <text x="115" y="113" text-anchor="middle" font-family="Georgia, serif" font-size="10" fill="#8B4513">Eq. (1.1) · Table 1.1</text>

  <rect x="234" y="52" width="182" height="72" rx="4" fill="#FFFFFF" stroke="#1E293B" stroke-width="1.3"/>
  <text x="325" y="77" text-anchor="middle" font-family="Georgia, serif" font-size="13" fill="#0F172A">Ch. 2: Fiber Bundle P</text>
  <text x="325" y="97" text-anchor="middle" font-family="Georgia, serif" font-size="11" fill="#475569">SLD QFI &amp; 4·g_FS Limit</text>
  <text x="325" y="113" text-anchor="middle" font-family="Georgia, serif" font-size="10" fill="#8B4513">Theorem 2.1 · Eqs. (2.1)–(2.3)</text>

  <rect x="444" y="52" width="182" height="72" rx="4" fill="#FFFFFF" stroke="#1E293B" stroke-width="1.3"/>
  <text x="535" y="77" text-anchor="middle" font-family="Georgia, serif" font-size="13" fill="#0F172A">Ch. 3: DHOST + Araki</text>
  <text x="535" y="97" text-anchor="middle" font-family="Georgia, serif" font-size="11" fill="#475569">κ_ψ = ħcℓ_Pl/(12π) &amp; Vainshtein</text>
  <text x="535" y="113" text-anchor="middle" font-family="Georgia, serif" font-size="10" fill="#8B4513">Theorem 3.1 · Eqs. (3.1)–(3.3)</text>

  <rect x="654" y="52" width="182" height="72" rx="4" fill="#FFFFFF" stroke="#1E293B" stroke-width="1.3"/>
  <text x="745" y="77" text-anchor="middle" font-family="Georgia, serif" font-size="13" fill="#0F172A">Ch. 4: Calibration</text>
  <text x="745" y="97" text-anchor="middle" font-family="Georgia, serif" font-size="11" fill="#475569">σ(K_ξ), E_mod &amp; Spectral D_C</text>
  <text x="745" y="113" text-anchor="middle" font-family="Georgia, serif" font-size="10" fill="#8B4513">Theorem 4.1 · Eqs. (4.1)–(4.3)</text>

  <line x1="206" y1="88" x2="228" y2="88" stroke="#8B4513" stroke-width="1.5"/>
  <polygon points="228,84 234,88 228,92" fill="#8B4513"/>
  <line x1="416" y1="88" x2="438" y2="88" stroke="#8B4513" stroke-width="1.5"/>
  <polygon points="438,84 444,88 438,92" fill="#8B4513"/>
  <line x1="626" y1="88" x2="648" y2="88" stroke="#8B4513" stroke-width="1.5"/>
  <polygon points="648,84 654,88 648,92" fill="#8B4513"/>

  <path d="M 745 124 L 745 150 L 115 150 L 115 172" fill="none" stroke="#8B4513" stroke-width="1.3" stroke-dasharray="4,3"/>
  <polygon points="111,170 115,177 119,170" fill="#8B4513"/>

  <rect x="24" y="178" width="182" height="74" rx="4" fill="#FFFFFF" stroke="#1E293B" stroke-width="1.3"/>
  <text x="115" y="203" text-anchor="middle" font-family="Georgia, serif" font-size="13" fill="#0F172A">Ch. 5: WDW Unfreezing</text>
  <text x="115" y="223" text-anchor="middle" font-family="Georgia, serif" font-size="11" fill="#475569">BRST &amp; CPTP Time Arrow</text>
  <text x="115" y="239" text-anchor="middle" font-family="Georgia, serif" font-size="10" fill="#8B4513">Theorem 5.1 · Eqs. (5.1)–(5.2)</text>

  <rect x="234" y="178" width="182" height="74" rx="4" fill="#FFFFFF" stroke="#1E293B" stroke-width="1.3"/>
  <text x="325" y="203" text-anchor="middle" font-family="Georgia, serif" font-size="13" fill="#0F172A">Ch. 6: Regularity</text>
  <text x="325" y="223" text-anchor="middle" font-family="Georgia, serif" font-size="11" fill="#475569">Bounce, Hayward Core, QES</text>
  <text x="325" y="239" text-anchor="middle" font-family="Georgia, serif" font-size="10" fill="#8B4513">Theorem 6.1 · Eqs. (6.1)–(6.3)</text>

  <rect x="444" y="178" width="182" height="74" rx="4" fill="#FFFFFF" stroke="#1E293B" stroke-width="1.3"/>
  <text x="535" y="203" text-anchor="middle" font-family="Georgia, serif" font-size="13" fill="#0F172A">Ch. 7: Phenomenology</text>
  <text x="535" y="223" text-anchor="middle" font-family="Georgia, serif" font-size="11" fill="#475569">w(z), c_GW=c, P1–P6</text>
  <text x="535" y="239" text-anchor="middle" font-family="Georgia, serif" font-size="10" fill="#8B4513">Eq. (7.1) · Table 7.1</text>

  <rect x="654" y="178" width="182" height="74" rx="4" fill="#FFF7ED" stroke="#8B4513" stroke-width="1.5"/>
  <text x="745" y="203" text-anchor="middle" font-family="Georgia, serif" font-size="13" fill="#0F172A">Ch. 8: Closure</text>
  <text x="745" y="223" text-anchor="middle" font-family="Georgia, serif" font-size="11" fill="#7C2D12">Differences &amp; Conclusions</text>
  <text x="745" y="239" text-anchor="middle" font-family="Georgia, serif" font-size="10" fill="#8B4513">Eq. (8.1) · Tables 8.1 &amp; 8.2</text>

  <line x1="206" y1="215" x2="228" y2="215" stroke="#8B4513" stroke-width="1.5"/>
  <polygon points="228,211 234,215 228,219" fill="#8B4513"/>
  <line x1="416" y1="215" x2="438" y2="215" stroke="#8B4513" stroke-width="1.5"/>
  <polygon points="438,211 444,215 438,219" fill="#8B4513"/>
  <line x1="626" y1="215" x2="648" y2="215" stroke="#8B4513" stroke-width="1.5"/>
  <polygon points="648,211 654,215 648,219" fill="#8B4513"/>

  <rect x="24" y="278" width="812" height="62" rx="4" fill="#F4EFE6" stroke="#D6CABE" stroke-width="1.2"/>
  <text x="430" y="303" text-anchor="middle" font-family="Georgia, serif" font-size="12" fill="#0F172A">Appendices A–F: Formal Proofs &amp; Metrology Budgets   |   Appendices G–J: CODATA Units, Numerical Derivations &amp; Technical FAQ</text>
  <text x="430" y="324" text-anchor="middle" font-family="Georgia, serif" font-size="11" fill="#64748B">Program Closure: Principal Bundle Geometry → Covariant Field Equations → Empirical Falsification</text>
</svg>`
  },
  {
    id: 2,
    anchorId: 'fig-2',
    chapterAnchor: 'chapter-2',
    afterSubsectionAnchor: 'sec-2-1',
    title: 'Principal Statistical Fiber Bundle P(M, S_Fisher) Over 4D Lorentzian Spacetime',
    caption:
      'Figure 2. Schematic principal fiber bundle P(M, S_Fisher) projecting onto the 4D Lorentzian base manifold (M, g_μν) with signature (−,+,+,+). Over each event x ∈ M sits the quantum statistical fiber S_x equipped with SLD metric g_ij^QFI; horizontal curves lifted via the Ehresmann connection A_μ synchronize worldline proper duration dτ = (1/c)√(−g_μν dx^μ dx^ν) with modular-calibrated statistical arc length.',
    isSchematic: true,
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 860 390" width="100%" height="auto" role="img" aria-label="Principal fiber bundle P(M, S_Fisher) over Lorentzian base manifold M">
  <rect x="0" y="0" width="860" height="390" fill="#FAF8F3" stroke="#D6CABE" stroke-width="1"/>
  <text x="24" y="27" font-family="Georgia, serif" font-size="12.5" fill="#8B4513" letter-spacing="1">SCHEMATIC GEOMETRY — PRINCIPAL STATISTICAL FIBER BUNDLE P(M, S_Fisher)</text>
  <line x1="24" y1="36" x2="836" y2="36" stroke="#E2D9C8" stroke-width="1"/>

  <path d="M 85 292 C 240 264, 580 322, 770 278 L 802 346 C 600 378, 220 334, 52 356 Z" fill="#EFE9DD" stroke="#1E293B" stroke-width="1.5"/>
  <path d="M 140 288 C 295 270, 560 310, 730 282" fill="none" stroke="#D6CABE" stroke-width="0.9"/>
  <path d="M 105 325 C 260 307, 540 347, 755 316" fill="none" stroke="#D6CABE" stroke-width="0.9"/>
  <text x="72" y="346" font-family="Georgia, serif" font-size="13.5" fill="#0F172A">Base Spacetime (M, g_μν), signature (−,+,+,+)</text>

  <path d="M 175 318 C 325 298, 495 315, 675 294" fill="none" stroke="#8B4513" stroke-width="2.4"/>
  <circle cx="240" cy="312" r="4.5" fill="#0F172A"/>
  <text x="240" y="331" text-anchor="middle" font-family="Georgia, serif" font-size="12" fill="#0F172A">x(λ₁)</text>
  <circle cx="600" cy="301" r="4.5" fill="#0F172A"/>
  <text x="600" y="320" text-anchor="middle" font-family="Georgia, serif" font-size="12" fill="#0F172A">x(λ₂)</text>
  <text x="420" y="294" text-anchor="middle" font-family="Georgia, serif" font-size="11.5" fill="#8B4513">Timelike worldline ds² = g_μν dx^μ dx^ν &lt; 0</text>

  <line x1="240" y1="312" x2="214" y2="275" stroke="#64748B" stroke-width="1.1" stroke-dasharray="3,2"/>
  <line x1="240" y1="312" x2="266" y2="275" stroke="#64748B" stroke-width="1.1" stroke-dasharray="3,2"/>
  <ellipse cx="240" cy="275" rx="26" ry="5" fill="none" stroke="#64748B" stroke-width="1.1"/>
  <text x="196" y="269" text-anchor="end" font-family="Georgia, serif" font-size="11" fill="#475569">Light cone</text>

  <ellipse cx="240" cy="144" rx="70" ry="84" fill="#FFFFFF" fill-opacity="0.94" stroke="#1E293B" stroke-width="1.5"/>
  <line x1="240" y1="228" x2="240" y2="305" stroke="#1E293B" stroke-width="1.3" stroke-dasharray="5,3"/>
  <polygon points="236,301 240,308 244,301" fill="#1E293B"/>
  <text x="240" y="80" text-anchor="middle" font-family="Georgia, serif" font-size="13" fill="#0F172A">Fiber S_x₁</text>
  <text x="240" y="99" text-anchor="middle" font-family="Georgia, serif" font-size="11" fill="#475569">Density states ρ(θ)</text>
  <circle cx="248" cy="156" r="4" fill="#8B4513"/>
  <path d="M 222 178 Q 246 158 266 132" fill="none" stroke="#15803D" stroke-width="2"/>
  <text x="240" y="204" text-anchor="middle" font-family="Georgia, serif" font-size="11" fill="#15803D">Metric g_ij^QFI</text>

  <ellipse cx="600" cy="138" rx="70" ry="84" fill="#FFFFFF" fill-opacity="0.94" stroke="#1E293B" stroke-width="1.5"/>
  <line x1="600" y1="222" x2="600" y2="294" stroke="#1E293B" stroke-width="1.3" stroke-dasharray="5,3"/>
  <polygon points="596,290 600,297 604,290" fill="#1E293B"/>
  <text x="600" y="74" text-anchor="middle" font-family="Georgia, serif" font-size="13" fill="#0F172A">Fiber S_x₂</text>
  <text x="600" y="93" text-anchor="middle" font-family="Georgia, serif" font-size="11" fill="#475569">Pure boundary → 4·g_FS</text>
  <circle cx="608" cy="146" r="4" fill="#8B4513"/>
  <path d="M 578 164 Q 604 148 626 124" fill="none" stroke="#15803D" stroke-width="2"/>
  <text x="600" y="198" text-anchor="middle" font-family="Georgia, serif" font-size="11" fill="#15803D">Covariant shift D_μ</text>

  <path d="M 248 156 C 370 116, 488 124, 608 146" fill="none" stroke="#8B4513" stroke-width="2.4"/>
  <text x="424" y="96" text-anchor="middle" font-family="Georgia, serif" font-size="12" fill="#8B4513">Horizontal Lift via Ehresmann Connection A_μ</text>
  <text x="424" y="114" text-anchor="middle" font-family="Georgia, serif" font-size="11" fill="#0F172A">dτ = (1/c)√(−g_μν dx^μ dx^ν) = [ħ / (E_mod · σ(K_ξ))] √(g_ij^QFI θ̇^i θ̇^j) dλ</text>

  <text x="420" y="242" text-anchor="middle" font-family="Georgia, serif" font-size="12" fill="#0F172A">Bundle Projection π : P(M, S_Fisher) → M</text>
</svg>`
  },
  {
    id: 3,
    anchorId: 'fig-3',
    chapterAnchor: 'chapter-6',
    afterSubsectionAnchor: 'sec-6-1',
    title: 'Analytical FLRW Quantum Bounce Scale-Factor Profile Across ρ = ρ_max',
    caption:
      'Figure 3. Exact normalized FLRW bounce solution a(t)/a_min = [1 + (t/t_0)²]¹/³ satisfying H² = (8πG/3)ρ(1 − ρ/ρ_max) (solid terracotta), plotted against classical GR singular collapse |t/t_0|²/³ → 0 (dashed slate). At t = t_bounce, H = 0, ρ = ρ_max, and turnaround acceleration ä/a = +4πGρ_max(1 + w) > 0 prevents geodesic focusing.',
    isSchematic: false,
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 860 340" width="100%" height="auto" role="img" aria-label="Analytical FLRW bounce scale factor evolution">
  <rect x="0" y="0" width="860" height="340" fill="#FAF8F3" stroke="#D6CABE" stroke-width="1"/>
  <text x="24" y="27" font-family="Georgia, serif" font-size="12.5" fill="#8B4513" letter-spacing="1">ANALYTICAL SOLUTION — NON-SINGULAR FLRW BOUNCE a(t)/a_min = [1 + (t/t₀)²]¹/³</text>
  <line x1="24" y1="36" x2="836" y2="36" stroke="#E2D9C8" stroke-width="1"/>

  <rect x="115" y="58" width="650" height="207" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1.2"/>
  <line x1="440" y1="58" x2="440" y2="265" stroke="#94A3B8" stroke-width="1.1" stroke-dasharray="4,3"/>
  <line x1="115" y1="${BOUNCE_DATA.bounceY}" x2="765" y2="${BOUNCE_DATA.bounceY}" stroke="#E2D9C8" stroke-width="1" stroke-dasharray="3,3"/>

  <text x="105" y="${BOUNCE_DATA.bounceY + 4}" text-anchor="end" font-family="Georgia, serif" font-size="11.5" fill="#8B4513">a_min (1.0)</text>
  <text x="105" y="269" text-anchor="end" font-family="Georgia, serif" font-size="11.5" fill="#475569">0</text>
  <text x="105" y="66" text-anchor="end" font-family="Georgia, serif" font-size="11.5" fill="#475569">1.85</text>
  <text x="58" y="162" text-anchor="middle" font-family="Georgia, serif" font-size="13" fill="#0F172A" transform="rotate(-90 58 162)">a(t) / a_min</text>

  <text x="115" y="284" text-anchor="middle" font-family="Georgia, serif" font-size="11" fill="#475569">−2.3</text>
  <text x="277" y="284" text-anchor="middle" font-family="Georgia, serif" font-size="11" fill="#475569">−1.15</text>
  <text x="440" y="284" text-anchor="middle" font-family="Georgia, serif" font-size="11.5" fill="#8B4513">t = t_bounce (0)</text>
  <text x="602" y="284" text-anchor="middle" font-family="Georgia, serif" font-size="11" fill="#475569">+1.15</text>
  <text x="765" y="284" text-anchor="middle" font-family="Georgia, serif" font-size="11" fill="#475569">+2.3</text>
  <text x="440" y="310" text-anchor="middle" font-family="Georgia, serif" font-size="12.5" fill="#0F172A">Dimensionless Cosmic Time (t − t_bounce) / t₀</text>

  <path d="${BOUNCE_DATA.grLeftPath}" fill="none" stroke="#94A3B8" stroke-width="1.8" stroke-dasharray="6,4"/>
  <path d="${BOUNCE_DATA.grRightPath}" fill="none" stroke="#94A3B8" stroke-width="1.8" stroke-dasharray="6,4"/>
  <path d="${BOUNCE_DATA.igrtPath}" fill="none" stroke="#8B4513" stroke-width="2.6"/>

  <circle cx="440" cy="${BOUNCE_DATA.bounceY}" r="5" fill="#8B4513"/>
  <circle cx="440" cy="265" r="4" fill="#64748B"/>
  <text x="440" y="132" text-anchor="middle" font-family="Georgia, serif" font-size="11.5" fill="#0F172A">ä/a = +4πGρ_max(1 + w) &gt; 0</text>
  <text x="440" y="253" text-anchor="middle" font-family="Georgia, serif" font-size="11" fill="#64748B">Classical GR singularity (a → 0)</text>

  <rect x="526" y="68" width="226" height="58" rx="3" fill="#FAF8F3" stroke="#D6CABE" stroke-width="1"/>
  <line x1="538" y1="84" x2="564" y2="84" stroke="#8B4513" stroke-width="2.5"/>
  <text x="572" y="88" font-family="Georgia, serif" font-size="11" fill="#0F172A">IGRT Bounce (k_phys ≤ M_Pl)</text>
  <line x1="538" y1="108" x2="564" y2="108" stroke="#94A3B8" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="572" y="112" font-family="Georgia, serif" font-size="11" fill="#475569">Classical GR Singular Limit</text>
</svg>`
  },
  {
    id: 4,
    anchorId: 'fig-4',
    chapterAnchor: 'chapter-7',
    afterSubsectionAnchor: 'sec-7-1',
    title: 'Thawing Dark-Energy Equation of State w(z) Across z ∈ [0, 3] vs. ΛCDM',
    caption:
      'Figure 4. Exact linear-scale plot of the shift-protected thawing dark-energy trajectory w(z) = −0.982 + 0.018 z/(1 + z) across redshift z ∈ [0, 3], reaching w(0) = −0.982 at the present epoch and asymptoting to w_∞ = −0.964 while strictly respecting the non-phantom stability floor w ≥ −1 (ΛCDM reference).',
    isSchematic: false,
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 860 330" width="100%" height="auto" role="img" aria-label="Dark energy equation of state w(z)">
  <rect x="0" y="0" width="860" height="330" fill="#FAF8F3" stroke="#D6CABE" stroke-width="1"/>
  <text x="24" y="27" font-family="Georgia, serif" font-size="12.5" fill="#8B4513" letter-spacing="1">ANALYTICAL PROFILE — THAWING DARK ENERGY w(z) = −0.982 + 0.018 z/(1 + z)</text>
  <line x1="24" y1="36" x2="836" y2="36" stroke="#E2D9C8" stroke-width="1"/>

  <rect x="115" y="58" width="650" height="198" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1.2"/>

  <line x1="115" y1="${THAW_DATA.yAtW(-0.96).toFixed(1)}" x2="765" y2="${THAW_DATA.yAtW(-0.96).toFixed(1)}" stroke="#E2E8F0" stroke-width="1"/>
  <text x="105" y="${(THAW_DATA.yAtW(-0.96) + 4).toFixed(1)}" text-anchor="end" font-family="Georgia, serif" font-size="11.5" fill="#475569">−0.96</text>

  <line x1="115" y1="${THAW_DATA.yAtW(-0.964).toFixed(1)}" x2="765" y2="${THAW_DATA.yAtW(-0.964).toFixed(1)}" stroke="#15803D" stroke-width="1" stroke-dasharray="3,3"/>
  <text x="758" y="${(THAW_DATA.yAtW(-0.964) - 5).toFixed(1)}" text-anchor="end" font-family="Georgia, serif" font-size="10.5" fill="#15803D">Asymptote w_∞ = −0.964</text>

  <line x1="115" y1="${THAW_DATA.yAtW(-0.98).toFixed(1)}" x2="765" y2="${THAW_DATA.yAtW(-0.98).toFixed(1)}" stroke="#E2E8F0" stroke-width="1"/>
  <text x="105" y="${(THAW_DATA.yAtW(-0.98) + 4).toFixed(1)}" text-anchor="end" font-family="Georgia, serif" font-size="11.5" fill="#475569">−0.98</text>

  <line x1="115" y1="${THAW_DATA.yAtW(-1.00).toFixed(1)}" x2="765" y2="${THAW_DATA.yAtW(-1.00).toFixed(1)}" stroke="#334155" stroke-width="1.4" stroke-dasharray="6,4"/>
  <text x="105" y="${(THAW_DATA.yAtW(-1.00) + 4).toFixed(1)}" text-anchor="end" font-family="Georgia, serif" font-size="11.5" fill="#0F172A">−1.00 (ΛCDM)</text>

  <line x1="331.7" y1="58" x2="331.7" y2="256" stroke="#F1F5F9" stroke-width="1"/>
  <line x1="548.3" y1="58" x2="548.3" y2="256" stroke="#F1F5F9" stroke-width="1"/>

  <text x="52" y="157" text-anchor="middle" font-family="Georgia, serif" font-size="13" fill="#0F172A" transform="rotate(-90 52 157)">w(z)</text>
  <text x="115" y="276" text-anchor="middle" font-family="Georgia, serif" font-size="11.5" fill="#475569">z = 0</text>
  <text x="331.7" y="276" text-anchor="middle" font-family="Georgia, serif" font-size="11.5" fill="#475569">z = 1</text>
  <text x="548.3" y="276" text-anchor="middle" font-family="Georgia, serif" font-size="11.5" fill="#475569">z = 2</text>
  <text x="765" y="276" text-anchor="middle" font-family="Georgia, serif" font-size="11.5" fill="#475569">z = 3</text>
  <text x="440" y="304" text-anchor="middle" font-family="Georgia, serif" font-size="12.5" fill="#0F172A">Cosmological Redshift z</text>

  <path d="${THAW_DATA.curvePath}" fill="none" stroke="#8B4513" stroke-width="2.7"/>
  ${THAW_DATA.markers
    .map(
      (m) =>
        `<circle cx="${m.x}" cy="${m.y}" r="3.8" fill="#8B4513"/><text x="${
          m.z === 0 ? m.x + 10 : m.x
        }" y="${m.y + (m.z === 0 ? 18 : -10)}" text-anchor="${
          m.z === 0 ? 'start' : m.z === 3 ? 'end' : 'middle'
        }" font-family="Georgia, serif" font-size="10.5" fill="#475569">${m.wVal.toFixed(4)}</text>`
    )
    .join('\n  ')}
  <text x="440" y="242" text-anchor="middle" font-family="Georgia, serif" font-size="11" fill="#15803D">Ghost-free non-phantom regime: w(z) ≥ −1 ∀ z ∈ [0, ∞)</text>
</svg>`
  },
  {
    id: 5,
    anchorId: 'fig-5',
    chapterAnchor: 'chapter-6',
    afterSubsectionAnchor: 'sec-6-3',
    title: 'Regular Frolov–Hayward Black-Hole Radial Lapse Function f(r) and Horizon Merger',
    caption:
      'Figure 5. Exact radial lapse profiles f(r) = 1 − 2GMr²/(r³ + 2GMℓ₀²) plotted across r/ℓ₀ ∈ [0, 5.5]. At r = 0, f(0) = 1 replaces the Schwarzschild −∞ divergence with a regular de Sitter core (K(0) = 24/ℓ₀⁴ = 48/ℓ_Pl⁴ for ℓ₀ = 2⁻¹/⁴ ℓ_Pl). Sub-extremal masses (M > M_rem) possess inner (r_−) and outer (r_+) horizons that coalesce at r_* = √3 ℓ₀ with vanishing surface gravity κ_± = 0.',
    isSchematic: false,
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 860 340" width="100%" height="auto" role="img" aria-label="Regular Frolov-Hayward lapse function f(r)">
  <rect x="0" y="0" width="860" height="340" fill="#FAF8F3" stroke="#D6CABE" stroke-width="1"/>
  <text x="24" y="27" font-family="Georgia, serif" font-size="12.5" fill="#8B4513" letter-spacing="1">ANALYTICAL METRIC PROFILE — FROLOV–HAYWARD HORIZON MERGER</text>
  <line x1="24" y1="36" x2="836" y2="36" stroke="#E2D9C8" stroke-width="1"/>

  <rect x="105" y="56" width="670" height="212" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1.2"/>
  <line x1="105" y1="${HAYWARD_DATA.toY(1).toFixed(1)}" x2="775" y2="${HAYWARD_DATA.toY(1).toFixed(1)}" stroke="#94A3B8" stroke-width="1" stroke-dasharray="4,3"/>
  <line x1="105" y1="${HAYWARD_DATA.toY(0).toFixed(1)}" x2="775" y2="${HAYWARD_DATA.toY(0).toFixed(1)}" stroke="#334155" stroke-width="1.3"/>
  <text x="96" y="${(HAYWARD_DATA.toY(1) + 4).toFixed(1)}" text-anchor="end" font-family="Georgia, serif" font-size="11.5" fill="#0F172A">f = +1.0</text>
  <text x="96" y="${(HAYWARD_DATA.toY(0) + 4).toFixed(1)}" text-anchor="end" font-family="Georgia, serif" font-size="11.5" fill="#0F172A">f = 0.0</text>
  <text x="96" y="${(HAYWARD_DATA.toY(-0.5) + 4).toFixed(1)}" text-anchor="end" font-family="Georgia, serif" font-size="11.5" fill="#475569">−0.5</text>

  <text x="${HAYWARD_DATA.toX(0).toFixed(1)}" y="286" text-anchor="middle" font-family="Georgia, serif" font-size="11" fill="#475569">0</text>
  <text x="${HAYWARD_DATA.toX(1).toFixed(1)}" y="286" text-anchor="middle" font-family="Georgia, serif" font-size="11" fill="#475569">1</text>
  <text x="${HAYWARD_DATA.toX(2).toFixed(1)}" y="286" text-anchor="middle" font-family="Georgia, serif" font-size="11" fill="#475569">2</text>
  <text x="${HAYWARD_DATA.toX(3).toFixed(1)}" y="286" text-anchor="middle" font-family="Georgia, serif" font-size="11" fill="#475569">3</text>
  <text x="${HAYWARD_DATA.toX(4).toFixed(1)}" y="286" text-anchor="middle" font-family="Georgia, serif" font-size="11" fill="#475569">4</text>
  <text x="${HAYWARD_DATA.toX(5).toFixed(1)}" y="286" text-anchor="middle" font-family="Georgia, serif" font-size="11" fill="#475569">5</text>
  <text x="440" y="310" text-anchor="middle" font-family="Georgia, serif" font-size="12.5" fill="#0F172A">Radial Coordinate r / ℓ₀</text>

  <path d="${HAYWARD_DATA.schwarzschildPath}" fill="none" stroke="#94A3B8" stroke-width="1.7" stroke-dasharray="5,4"/>
  <path d="${HAYWARD_DATA.subExtremalPath}" fill="none" stroke="#1E293B" stroke-width="2.4"/>
  <path d="${HAYWARD_DATA.extremalPath}" fill="none" stroke="#8B4513" stroke-width="2.6"/>

  <circle cx="${HAYWARD_DATA.rMinusX}" cy="${HAYWARD_DATA.toY(0).toFixed(1)}" r="4" fill="#1E293B"/>
  <text x="${HAYWARD_DATA.rMinusX - 6}" y="${(HAYWARD_DATA.toY(0) - 10).toFixed(1)}" text-anchor="end" font-family="Georgia, serif" font-size="11.5" fill="#0F172A">r_−</text>
  <circle cx="${HAYWARD_DATA.rPlusX}" cy="${HAYWARD_DATA.toY(0).toFixed(1)}" r="4" fill="#1E293B"/>
  <text x="${HAYWARD_DATA.rPlusX + 8}" y="${(HAYWARD_DATA.toY(0) - 10).toFixed(1)}" text-anchor="start" font-family="Georgia, serif" font-size="11.5" fill="#0F172A">r_+</text>
  <circle cx="${HAYWARD_DATA.rStarX}" cy="${HAYWARD_DATA.toY(0).toFixed(1)}" r="4.8" fill="#8B4513"/>
  <text x="${HAYWARD_DATA.rStarX + 6}" y="${(HAYWARD_DATA.toY(0) + 18).toFixed(1)}" text-anchor="start" font-family="Georgia, serif" font-size="11.5" fill="#8B4513">r_* = √3 ℓ₀ (κ_± = 0)</text>

  <text x="115" y="${(HAYWARD_DATA.toY(1) - 8).toFixed(1)}" font-family="Georgia, serif" font-size="11" fill="#15803D">Regular de Sitter Core f(0) = 1</text>

  <rect x="462" y="176" width="298" height="78" rx="3" fill="#FAF8F3" stroke="#D6CABE" stroke-width="1"/>
  <line x1="474" y1="194" x2="500" y2="194" stroke="#1E293B" stroke-width="2.4"/>
  <text x="508" y="198" font-family="Georgia, serif" font-size="11" fill="#0F172A">M &gt; M_rem (GM/ℓ₀ = 2.0: r_− &amp; r_+)</text>
  <line x1="474" y1="216" x2="500" y2="216" stroke="#8B4513" stroke-width="2.6"/>
  <text x="508" y="220" font-family="Georgia, serif" font-size="11" fill="#8B4513">M = M_rem (Extremal Zero-T_H Core)</text>
  <line x1="474" y1="238" x2="500" y2="238" stroke="#94A3B8" stroke-width="1.7" stroke-dasharray="5,4"/>
  <text x="508" y="242" font-family="Georgia, serif" font-size="11" fill="#475569">Classical Schwarzschild (Divergent r → 0)</text>
</svg>`
  },
  {
    id: 6,
    anchorId: 'fig-6',
    chapterAnchor: 'chapter-6',
    afterSubsectionAnchor: 'sec-6-4',
    title: 'Penrose Conformal Diagram of a Regular Evaporating Black Hole With Extremal Remnant',
    caption:
      'Figure 6. True 45° Penrose conformal causal diagram illustrating non-singular collapse and unitary evaporation: a regular timelike core at r = 0 supports outer apparent and inner horizons enclosing an interior Quantum Extremal Island before coalescing into a zero-temperature extremal remnant approaching future timelike infinity i⁺.',
    isSchematic: true,
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 860 370" width="100%" height="auto" role="img" aria-label="Penrose conformal diagram of a regular evaporating black hole">
  <rect x="0" y="0" width="860" height="370" fill="#FAF8F3" stroke="#D6CABE" stroke-width="1"/>
  <text x="24" y="27" font-family="Georgia, serif" font-size="12.5" fill="#8B4513" letter-spacing="1">CONFORMAL CAUSAL STRUCTURE (45° NULL RAYS) — REGULAR EVAPORATING REMNANT</text>
  <line x1="24" y1="36" x2="836" y2="36" stroke="#E2D9C8" stroke-width="1"/>

  <line x1="220" y1="54" x2="220" y2="334" stroke="#15803D" stroke-width="3"/>
  <text x="210" y="200" text-anchor="end" font-family="Georgia, serif" font-size="12" fill="#15803D">Regular r = 0</text>
  <text x="210" y="216" text-anchor="end" font-family="Georgia, serif" font-size="11" fill="#15803D">timelike core</text>

  <!-- Exact 45-degree null boundaries: (220,334)->(360,194)->(220,54) -->
  <line x1="220" y1="334" x2="360" y2="194" stroke="#1E293B" stroke-width="1.6"/>
  <line x1="360" y1="194" x2="220" y2="54" stroke="#1E293B" stroke-width="1.6"/>
  <text x="305" y="276" font-family="Georgia, 'DejaVu Sans', serif" font-size="12.5" fill="#0F172A">ℐ⁻ (Past null ∞)</text>
  <text x="305" y="122" font-family="Georgia, 'DejaVu Sans', serif" font-size="12.5" fill="#0F172A">ℐ⁺ (Future null ∞)</text>

  <circle cx="220" cy="334" r="3.8" fill="#0F172A"/>
  <text x="232" y="340" font-family="Georgia, serif" font-size="12" fill="#0F172A">i⁻</text>
  <circle cx="360" cy="194" r="4" fill="#0F172A"/>
  <text x="372" y="198" font-family="Georgia, serif" font-size="12.5" fill="#0F172A">i⁰ (Spatial ∞)</text>
  <circle cx="220" cy="54" r="4" fill="#0F172A"/>
  <text x="232" y="58" font-family="Georgia, serif" font-size="12.5" fill="#0F172A">i⁺ (Remnant asymptote)</text>

  <!-- Inward 45-degree collapsing null shell from ℐ⁻ to r=0 -->
  <line x1="312" y1="242" x2="220" y2="150" stroke="#8B4513" stroke-width="2.1" stroke-dasharray="5,3"/>
  <text x="275" y="218" font-family="Georgia, serif" font-size="11" fill="#8B4513">45° Infalling</text>
  <text x="275" y="232" font-family="Georgia, serif" font-size="11" fill="#8B4513">null shell</text>

  <!-- Trapped Core + QES Island bounded by r_- and r_+ -->
  <path d="M 220 150 C 268 174, 286 146, 266 122 C 250 104, 232 94, 220 90 Z" fill="#FDE68A" fill-opacity="0.55" stroke="#8B4513" stroke-width="1.8"/>
  <text x="230" y="138" font-family="Georgia, serif" font-size="10.5" fill="#7C2D12">QES</text>
  <text x="227" y="150" font-family="Georgia, serif" font-size="10" fill="#7C2D12">Island</text>

  <!-- Outward 45-degree Hawking radiation rays to ℐ⁺ -->
  <line x1="252" y1="138" x2="302" y2="88" stroke="#2563EB" stroke-width="1.2" stroke-dasharray="3,2"/>
  <line x1="266" y1="126" x2="316" y2="76" stroke="#2563EB" stroke-width="1.2" stroke-dasharray="3,2"/>
  <text x="314" y="84" font-family="Georgia, serif" font-size="10.5" fill="#1D4ED8">Hawking quanta</text>

  <rect x="462" y="88" width="374" height="202" rx="4" fill="#FFFFFF" stroke="#D6CABE" stroke-width="1.1"/>
  <text x="480" y="114" font-family="Georgia, serif" font-size="12.5" fill="#8B4513">CAUSAL &amp; UNITARITY INVARIANTS</text>
  <line x1="480" y1="122" x2="818" y2="122" stroke="#E2D9C8" stroke-width="1"/>
  <text x="480" y="144" font-family="Georgia, serif" font-size="11.5" fill="#0F172A">1. Trapped core bounded by regular r_− and r_+</text>
  <text x="480" y="168" font-family="Georgia, serif" font-size="11.5" fill="#0F172A">2. QES Island saddle recovers unitary Page curve</text>
  <text x="480" y="192" font-family="Georgia, serif" font-size="11.5" fill="#15803D">3. Horizons coalesce at M_rem = (3√3/4)M_Pl (κ_± = 0)</text>
  <text x="480" y="218" font-family="Georgia, serif" font-size="11" fill="#475569">4. Vanishing inner surface gravity κ_− → 0 stabilizes</text>
  <text x="480" y="236" font-family="Georgia, serif" font-size="11" fill="#475569">    Cauchy boundary against Poisson–Israel mass inflation.</text>
  <text x="480" y="264" font-family="Georgia, serif" font-size="11" fill="#1D4ED8">5. Outgoing 45° radiation carries entanglement to ℐ⁺.</text>
</svg>`
  },
  {
    id: 7,
    anchorId: 'fig-7',
    chapterAnchor: 'chapter-7',
    afterSubsectionAnchor: 'sec-7-2',
    title: '2:1 Lissajous Phase Portrait Between Optical-Clock Dipole and PTA Quadrupole Modes',
    caption:
      'Figure 7. Exact parametric 2:1 Lissajous figure-8 phase portrait generated by dipolar optical lattice clock modulation x(t) = sin(ωt/2) at f_clock = ω/(4π) ≈ 6.4 nHz against quadrupolar pulsar-timing strain y(t) = sin(ωt) at f_PTA = ω/(2π) = 2f_clock ≈ 12.8 nHz. A T_obs = 5 yr synchronous lock-in provides Δf = 1/T_obs ≈ 6.34 nHz bin width, resolving the T ≈ 4.95 yr carrier above per-epoch 10⁴ s stability.',
    isSchematic: false,
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 860 330" width="100%" height="auto" role="img" aria-label="2:1 Lissajous harmonic phase portrait">
  <rect x="0" y="0" width="860" height="330" fill="#FAF8F3" stroke="#D6CABE" stroke-width="1"/>
  <text x="24" y="27" font-family="Georgia, serif" font-size="12.5" fill="#8B4513" letter-spacing="1">ANALYTICAL PHASE PORTRAIT — 2:1 LISSAJOUS HARMONIC (f_PTA = ω/(2π) = 2·f_clock)</text>
  <line x1="24" y1="36" x2="836" y2="36" stroke="#E2D9C8" stroke-width="1"/>

  <rect x="135" y="64" width="280" height="208" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1"/>
  <line x1="115" y1="168" x2="435" y2="168" stroke="#64748B" stroke-width="1.2"/>
  <line x1="275" y1="50" x2="275" y2="288" stroke="#64748B" stroke-width="1.2"/>
  <text x="275" y="305" text-anchor="middle" font-family="Georgia, serif" font-size="11.5" fill="#0F172A">Clock dipole x(t) = sin(ωt/2), f_clock = ω/(4π)</text>
  <text x="72" y="168" text-anchor="middle" font-family="Georgia, serif" font-size="11.5" fill="#0F172A" transform="rotate(-90 72 168)">PTA quadrupole y(t) = sin(ωt), f_PTA = ω/(2π)</text>

  <path d="${LISSAJOUS_PATH}" fill="none" stroke="#8B4513" stroke-width="2.6"/>
  <circle cx="275" cy="168" r="4.5" fill="#0F172A"/>
  <polygon points="366,61 376,64 368,70" fill="#8B4513"/>
  <polygon points="184,275 174,272 182,266" fill="#8B4513"/>

  <rect x="466" y="72" width="368" height="204" rx="4" fill="#FFFFFF" stroke="#D6CABE" stroke-width="1.2"/>
  <text x="486" y="99" font-family="Georgia, serif" font-size="13" fill="#0F172A">Quadratic Scalar Back-Reaction</text>
  <line x1="486" y1="108" x2="814" y2="108" stroke="#E2D9C8" stroke-width="1"/>
  <text x="486" y="131" font-family="Georgia, serif" font-size="11.5" fill="#475569">□ h̄_μν = 16πG (δT_μν + δI_μν[δψ²])</text>
  <text x="486" y="153" font-family="Georgia, serif" font-size="11.5" fill="#475569">cos²(ωt/2) = ½[1 + cos(ωt)] → f_PTA = ω/(2π) = 2f_clock</text>
  <text x="486" y="180" font-family="Georgia, serif" font-size="11.5" fill="#15803D">Resolved Baseline Budget (T_obs ≥ 5 yr):</text>
  <text x="486" y="201" font-family="Georgia, serif" font-size="11" fill="#475569">• f_clock = 6.4 nHz (T ≈ 4.95 yr); f_PTA = 12.8 nHz</text>
  <text x="486" y="220" font-family="Georgia, serif" font-size="11" fill="#475569">• Spectral bin width Δf = 1/T_obs ≈ 6.34 nHz</text>
  <text x="486" y="239" font-family="Georgia, serif" font-size="11" fill="#475569">• Per-epoch clock floor σ_y(10⁴ s) = 4.2 × 10⁻¹⁹</text>
  <text x="486" y="258" font-family="Georgia, serif" font-size="11" fill="#475569">• Synchronous lock-in resolves 2:1 peak at &gt;5σ.</text>
</svg>`
  },
  {
    id: 8,
    anchorId: 'fig-8',
    chapterAnchor: 'chapter-7',
    afterSubsectionAnchor: 'sec-7-3',
    title: 'Overview of the Six Observational & Laboratory Falsification Protocols (P1–P6)',
    caption:
      'Figure 8. Experimental roadmap summarizing Protocols P1–P6 across IPTA and cryogenic ⁸⁷Sr optical lattice clocks (P1), 10m VLBAI atom interferometry (P2), Simons Observatory & LiteBIRD CMB polarimetry (P3), LVK O5 / CE / ET gravitational-wave ringdowns (P4), sub-millimeter clock redshift tests (P5), and HL-LHC scalar portal & deep-space tracking (P6).',
    isSchematic: true,
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 860 352" width="100%" height="auto" role="img" aria-label="Six experimental and observational falsification protocols schematic">
  <rect x="0" y="0" width="860" height="352" fill="#FAF8F3" stroke="#D6CABE" stroke-width="1"/>
  <text x="24" y="27" font-family="Georgia, serif" font-size="12.5" fill="#8B4513" letter-spacing="1">EXPERIMENTAL ROADMAP — OBSERVATIONAL &amp; LABORATORY PROTOCOLS (P1–P6)</text>
  <line x1="24" y1="36" x2="836" y2="36" stroke="#E2D9C8" stroke-width="1"/>

  <rect x="24" y="50" width="260" height="128" rx="4" fill="#FFFFFF" stroke="#1E293B" stroke-width="1.2"/>
  <text x="38" y="73" font-family="Georgia, serif" font-size="12.5" fill="#8B4513">P1: IPTA + ⁸⁷Sr Lattice Clocks</text>
  <text x="38" y="94" font-family="Georgia, serif" font-size="11" fill="#0F172A">Test: 2:1 harmonic (f_PTA = ω/(2π) = 2f_clock)</text>
  <text x="38" y="114" font-family="Georgia, serif" font-size="10.8" fill="#475569">Baseline: T_obs ≥ 5 yr (Δf ≈ 6.34 nHz);</text>
  <text x="38" y="131" font-family="Georgia, serif" font-size="10.8" fill="#475569">per-epoch floor σ_y(10⁴ s) = 4.2 × 10⁻¹⁹.</text>
  <text x="38" y="159" font-family="Georgia, serif" font-size="10.5" fill="#15803D">Window: 2026–2031 (&gt;5σ Lock-In)</text>

  <rect x="300" y="50" width="260" height="128" rx="4" fill="#FFFFFF" stroke="#1E293B" stroke-width="1.2"/>
  <text x="314" y="73" font-family="Georgia, serif" font-size="12.5" fill="#8B4513">P2: 10m VLBAI Atom Interferometry</text>
  <text x="314" y="94" font-family="Georgia, serif" font-size="11" fill="#0F172A">Test: Γ_decohere = (1.34/ħ)m²G∫|Δ|φ|²|²/|x−x′|</text>
  <text x="314" y="114" font-family="Georgia, serif" font-size="10.8" fill="#475569">Target: Δx &gt; 15 cm visibility contrast;</text>
  <text x="314" y="131" font-family="Georgia, serif" font-size="10.8" fill="#475569">η_Araki = 1.34× Diósi–Penrose damping floor.</text>
  <text x="314" y="159" font-family="Georgia, serif" font-size="10.5" fill="#15803D">Window: 2027–2029 (10⁻⁶ Pa Floor)</text>

  <rect x="576" y="50" width="260" height="128" rx="4" fill="#FFFFFF" stroke="#1E293B" stroke-width="1.2"/>
  <text x="590" y="73" font-family="Georgia, serif" font-size="12.5" fill="#8B4513">P3: Simons Obs. / LiteBIRD CMB</text>
  <text x="590" y="94" font-family="Georgia, serif" font-size="11" fill="#0F172A">Test: Bounce B-modes &amp; tilt n_s ≈ 0.9649</text>
  <text x="590" y="114" font-family="Georgia, serif" font-size="10.8" fill="#475569">Target: r ≈ 0.0032 at high ℓ,</text>
  <text x="590" y="131" font-family="Georgia, serif" font-size="10.8" fill="#475569">f_NL(equilateral) = −3.2 ± 0.4.</text>
  <text x="590" y="159" font-family="Georgia, serif" font-size="10.5" fill="#15803D">Window: 2026–2032 Polarimetry</text>

  <rect x="24" y="196" width="260" height="132" rx="4" fill="#FFFFFF" stroke="#1E293B" stroke-width="1.2"/>
  <text x="38" y="219" font-family="Georgia, serif" font-size="12.5" fill="#8B4513">P4: LVK O5 / CE / ET Ringdowns</text>
  <text x="38" y="240" font-family="Georgia, serif" font-size="11" fill="#0F172A">Test: Hayward-core echo delay Δt_echo</text>
  <text x="38" y="260" font-family="Georgia, serif" font-size="10.8" fill="#475569">Δt_echo ≈ 18.4 ms for 60 M_⊙ remnant;</text>
  <text x="38" y="277" font-family="Georgia, serif" font-size="10.8" fill="#475569">all-pass reflectivity K_echo ≈ 0.18 from H(z).</text>
  <text x="38" y="308" font-family="Georgia, serif" font-size="10.5" fill="#15803D">Window: O5 Coherent Stacking</text>

  <rect x="300" y="196" width="260" height="132" rx="4" fill="#FFFFFF" stroke="#1E293B" stroke-width="1.2"/>
  <text x="314" y="219" font-family="Georgia, serif" font-size="12.5" fill="#8B4513">P5: Sub-mm Clock Redshift Test</text>
  <text x="314" y="240" font-family="Georgia, serif" font-size="11" fill="#0F172A">Test: Δν/ν at h &lt; 10 cm vacuum separation</text>
  <text x="314" y="260" font-family="Georgia, serif" font-size="10.8" fill="#475569">Unscreened (2.1 ± 0.3)×10⁻⁴ below 10 cm;</text>
  <text x="314" y="277" font-family="Georgia, serif" font-size="10.8" fill="#475569">r_V ≈ 370 ly ⇒ |γ_PPN−1| ≤ 2.8×10⁻⁷ at 1 AU.</text>
  <text x="314" y="308" font-family="Georgia, serif" font-size="10.5" fill="#15803D">Mechanism: Chameleon–Vainshtein</text>

  <rect x="576" y="196" width="260" height="132" rx="4" fill="#FFFFFF" stroke="#1E293B" stroke-width="1.2"/>
  <text x="590" y="219" font-family="Georgia, serif" font-size="12.5" fill="#8B4513">P6: HL-LHC Portal &amp; Deep-Space</text>
  <text x="590" y="240" font-family="Georgia, serif" font-size="11" fill="#0F172A">Test: Heavy radial Φ_portal (1.84 TeV)</text>
  <text x="590" y="260" font-family="Georgia, serif" font-size="10.8" fill="#475569">Two-scale spectral-action Higgs portal</text>
  <text x="590" y="277" font-family="Georgia, serif" font-size="10.8" fill="#475569">+ outer-heliosphere unscreened tracking.</text>
  <text x="590" y="308" font-family="Georgia, serif" font-size="10.5" fill="#15803D">Window: HL-LHC Run 4 / Space</text>
</svg>`
  }
];

export const HarmonizedPaperFigure: React.FC<{ figure: PaperFigureSpec }> = ({ figure }) => {
  const formattedSvg = React.useMemo(() => formatSvgMathMarkup(figure.svgMarkup), [figure.svgMarkup]);
  return (
    <figure
      id={figure.anchorId}
      className="igrt-keep-together my-8 rounded-lg border border-[#D6CABE] dark:border-[#334155] bg-[#FAF8F3] dark:bg-[#0B1530] p-5 space-y-3 scroll-mt-32"
    >
      <div
        className="w-full overflow-x-auto"
        dangerouslySetInnerHTML={{ __html: formattedSvg }}
      />
      <figcaption className="text-[14.5px] leading-[1.55] text-[#475569] dark:text-[#CBD5E1] italic border-t border-[#E2D9C8] dark:border-[#1E293B] pt-3 text-justify">
        <MathText text={figure.caption} />
      </figcaption>
    </figure>
  );
};
