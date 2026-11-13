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
  // Exact UV-saturated bounce profile for w = 0: a(u) = (1 + u^2)^(1/3), a_max = (1 + 2.3^2)^(1/3) ≈ 1.846
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
  w0: number;
  wA: number;
} {
  // Exact numerical RK2 integration of scalar Klein-Gordon ODE: phi'' + 3H phi' + (V_0/f_phi)sin(phi/f_phi) = 0
  // with theta_i = 1.95 rad, alpha_f = f_phi/Mbar_Pl = 1.0, Omega_m = 0.315 (yielding w_0 = -0.9083, w_a = -0.1765).
  const Om = 0.315;
  const Ode = 1 - Om;
  const thetaI = 1.95;
  const alphaF = 1.0;

  const integrate = (vScale: number) => {
    let N = -7.0;
    const dN = 0.001;
    let th = thetaI;
    let thp = 0;
    const samples: Array<{ z: number; a: number; w: number; OdeNow: number }> = [];
    const steps = Math.round((0 - N) / dN);
    for (let i = 0; i <= steps; i++) {
      const z = Math.exp(-N) - 1;
      const a = Math.exp(N);
      const pot = vScale * (1 - Math.cos(th));
      const h2 = (Om * Math.exp(-3 * N) + pot) / (1 - (alphaF * alphaF * thp * thp) / 6);
      const kin = (alphaF * alphaF * h2 * thp * thp) / 6;
      const wVal = (kin - pot) / (kin + pot);
      if (z <= 3.05 || i === steps) {
        samples.push({ z, a, w: wVal, OdeNow: (kin + pot) / h2 });
      }
      if (i === steps) break;
      const deriv = (nv: number, t: number, tp: number): [number, number] => {
        const pt = vScale * (1 - Math.cos(t));
        const hh = (Om * Math.exp(-3 * nv) + pt) / (1 - (alphaF * alphaF * tp * tp) / 6);
        const hph = -1.5 * (Om * Math.exp(-3 * nv) + (alphaF * alphaF * hh * tp * tp) / 3) / hh;
        const tpp = -(3 + hph) * tp - ((vScale * 3) / (alphaF * alphaF * hh)) * Math.sin(t);
        return [tp, tpp];
      };
      const [k1t, k1p] = deriv(N, th, thp);
      const [k2t, k2p] = deriv(N + 0.5 * dN, th + 0.5 * dN * k1t, thp + 0.5 * dN * k1p);
      th += dN * k2t;
      thp += dN * k2p;
      N += dN;
    }
    return samples;
  };

  let vs = Ode / (1 - Math.cos(thetaI));
  for (let it = 0; it < 10; it++) {
    const s = integrate(vs);
    vs *= Ode / s[s.length - 1].OdeNow;
  }
  const fullSamples = integrate(vs);
  const last = fullSamples[fullSamples.length - 1];
  const prev = fullSamples[fullSamples.length - 2];
  const w0 = last.w;
  const wA = -(last.w - prev.w) / (last.a - prev.a);

  const wAtZ = (zTarget: number): number => {
    let best = last;
    let bestDiff = Infinity;
    for (const s of fullSamples) {
      const diff = Math.abs(s.z - zTarget);
      if (diff < bestDiff) {
        bestDiff = diff;
        best = s;
      }
    }
    return best.w;
  };

  const x0 = 115;
  const plotW = 650;
  const yTop = 58;
  const plotH = 198;
  const wMin = -1.01;
  const wMax = -0.895;

  const toX = (z: number) => x0 + (z / 3) * plotW;
  const yAtW = (w: number) => yTop + ((wMax - w) / (wMax - wMin)) * plotH;

  const pts: string[] = [];
  for (let i = 0; i <= 60; i++) {
    const z = (3 * i) / 60;
    const wVal = wAtZ(z);
    pts.push(`${i === 0 ? 'M' : 'L'} ${toX(z).toFixed(1)} ${yAtW(wVal).toFixed(1)}`);
  }

  const markers = [0, 1, 2, 3].map((z) => {
    const wVal = wAtZ(z);
    return {
      z,
      x: Number(toX(z).toFixed(1)),
      y: Number(yAtW(wVal).toFixed(1)),
      wVal
    };
  });

  return { curvePath: pts.join(' '), markers, yAtW, w0, wA };
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
      'Figure 1. Logical architecture connecting the historical foundation, HL-LHC spectral test, emerging technologies, and seven postulates (Chapter 1) to principal PU(H) and split-included associated E_stat = P ×_{PU(H)} S(N) bundles (Chapter 2), luminal Type Ia five-scalar Horndeski gravity and Type III₁ Araki matter-diamond dynamics (Chapter 3), Tomita–Takesaki single-mode and smeared Krein correspondences (Chapter 4), canonical BFV BRST unfreezing and detailed-balance BKM dissipation (Chapter 5), explicit L_UV bounce and Hayward/QES/QFC-conditional regularity (Chapter 6), observational protocols P1–P6 (Chapter 7), and closure synthesis with epistemic ledger Table 8.3 and Appendices A–J (Chapter 8).',
    isSchematic: true,
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 860 374" width="100%" height="auto" role="img" aria-label="Chapter roadmap of the IGRT monograph">
  <rect x="0" y="0" width="860" height="374" fill="#FAF8F3" stroke="#D6CABE" stroke-width="1"/>
  <text x="22" y="27" font-family="'DejaVu Sans', Arial, sans-serif" font-size="12.5" font-weight="600" fill="#8B4513" letter-spacing="0.8">SCHEMATIC ARCHITECTURE — LOGICAL DEPENDENCY MAP</text>
  <line x1="22" y1="37" x2="838" y2="37" stroke="#E2D9C8" stroke-width="1"/>

  <rect x="22" y="52" width="190" height="76" rx="4" fill="#FFFFFF" stroke="#1E293B" stroke-width="1.3"/>
  <text x="117" y="76" text-anchor="middle" font-family="'DejaVu Sans', Arial, sans-serif" font-size="12.8" font-weight="600" fill="#0F172A">Ch. 1: Scope &amp; Tests</text>
  <text x="117" y="97" text-anchor="middle" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.2" fill="#475569">4D Base, LHC &amp; Tech (§1.1–1.4)</text>
  <text x="117" y="116" text-anchor="middle" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11" fill="#8B4513">Eq. (1.1) · Table 1.1</text>

  <rect x="230" y="52" width="190" height="76" rx="4" fill="#FFFFFF" stroke="#1E293B" stroke-width="1.3"/>
  <text x="325" y="76" text-anchor="middle" font-family="'DejaVu Sans', Arial, sans-serif" font-size="12.8" font-weight="600" fill="#0F172A">Ch. 2: PU(H) &amp; E_stat</text>
  <text x="325" y="97" text-anchor="middle" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.2" fill="#475569">SLD QFI, Split N &amp; S³</text>
  <text x="325" y="116" text-anchor="middle" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11" fill="#8B4513">Est. Result 2.1 · Eqs. (2.1)–(2.3)</text>

  <rect x="438" y="52" width="192" height="76" rx="4" fill="#FFFFFF" stroke="#1E293B" stroke-width="1.3"/>
  <text x="534" y="76" text-anchor="middle" font-family="'DejaVu Sans', Arial, sans-serif" font-size="12.8" font-weight="600" fill="#0F172A">Ch. 3: Horndeski + Araki</text>
  <text x="534" y="97" text-anchor="middle" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11" fill="#475569">5-Scalar · κ_ψ=2.17×10⁻²¹ GeV⁻¹</text>
  <text x="534" y="116" text-anchor="middle" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11" fill="#8B4513">Theorem 3.1 · Eqs. (3.1)–(3.3)</text>

  <rect x="648" y="52" width="190" height="76" rx="4" fill="#FFFFFF" stroke="#1E293B" stroke-width="1.3"/>
  <text x="743" y="76" text-anchor="middle" font-family="'DejaVu Sans', Arial, sans-serif" font-size="12.8" font-weight="600" fill="#0F172A">Ch. 4: Calibration</text>
  <text x="743" y="97" text-anchor="middle" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11" fill="#475569">Ansatz σ_1, E_mod &amp; Smeared D_C</text>
  <text x="743" y="116" text-anchor="middle" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11" fill="#8B4513">Theorem 4.1 · Eqs. (4.1)–(4.3)</text>

  <line x1="212" y1="90" x2="224" y2="90" stroke="#8B4513" stroke-width="1.5"/>
  <polygon points="224,86 230,90 224,94" fill="#8B4513"/>
  <line x1="420" y1="90" x2="432" y2="90" stroke="#8B4513" stroke-width="1.5"/>
  <polygon points="432,86 438,90 432,94" fill="#8B4513"/>
  <line x1="630" y1="90" x2="642" y2="90" stroke="#8B4513" stroke-width="1.5"/>
  <polygon points="642,86 648,90 642,94" fill="#8B4513"/>

  <path d="M 743 128 L 743 154 L 117 154 L 117 175" fill="none" stroke="#8B4513" stroke-width="1.3" stroke-dasharray="4,3"/>
  <polygon points="113,173 117,180 121,173" fill="#8B4513"/>

  <rect x="22" y="182" width="190" height="78" rx="4" fill="#FFFFFF" stroke="#1E293B" stroke-width="1.3"/>
  <text x="117" y="206" text-anchor="middle" font-family="'DejaVu Sans', Arial, sans-serif" font-size="12.8" font-weight="600" fill="#0F172A">Ch. 5: WDW Unfreezing</text>
  <text x="117" y="227" text-anchor="middle" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.2" fill="#475569">Unbounded S¹ &amp; DB-BKM</text>
  <text x="117" y="246" text-anchor="middle" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11" fill="#8B4513">Est. Result 5.1 · Eqs. (5.1)–(5.2)</text>

  <rect x="230" y="182" width="190" height="78" rx="4" fill="#FFFFFF" stroke="#1E293B" stroke-width="1.3"/>
  <text x="325" y="206" text-anchor="middle" font-family="'DejaVu Sans', Arial, sans-serif" font-size="12.8" font-weight="600" fill="#0F172A">Ch. 6: Regularity</text>
  <text x="325" y="227" text-anchor="middle" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.2" fill="#475569">L_UV, Red n_T &amp; QES</text>
  <text x="325" y="246" text-anchor="middle" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11" fill="#8B4513">Theorem 6.1 · Eqs. (6.1)–(6.3)</text>

  <rect x="438" y="182" width="192" height="78" rx="4" fill="#FFFFFF" stroke="#1E293B" stroke-width="1.3"/>
  <text x="534" y="206" text-anchor="middle" font-family="'DejaVu Sans', Arial, sans-serif" font-size="12.8" font-weight="600" fill="#0F172A">Ch. 7: Phenomenology</text>
  <text x="534" y="227" text-anchor="middle" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11" fill="#475569">KG ODE w_a&lt;0, Y_00 P1–P6</text>
  <text x="534" y="246" text-anchor="middle" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11" fill="#8B4513">Eq. (7.1) · Table 7.1</text>

  <rect x="648" y="182" width="190" height="78" rx="4" fill="#FFF7ED" stroke="#8B4513" stroke-width="1.5"/>
  <text x="743" y="206" text-anchor="middle" font-family="'DejaVu Sans', Arial, sans-serif" font-size="12.8" font-weight="600" fill="#0F172A">Ch. 8: Closure</text>
  <text x="743" y="227" text-anchor="middle" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.2" fill="#7C2D12">Ledger &amp; Conclusions</text>
  <text x="743" y="246" text-anchor="middle" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11" fill="#8B4513">Eq. (8.1) · Tables 8.1–8.3</text>

  <line x1="212" y1="221" x2="224" y2="221" stroke="#8B4513" stroke-width="1.5"/>
  <polygon points="224,217 230,221 224,225" fill="#8B4513"/>
  <line x1="420" y1="221" x2="432" y2="221" stroke="#8B4513" stroke-width="1.5"/>
  <polygon points="432,217 438,221 432,225" fill="#8B4513"/>
  <line x1="630" y1="221" x2="642" y2="221" stroke="#8B4513" stroke-width="1.5"/>
  <polygon points="642,217 648,221 642,225" fill="#8B4513"/>

  <rect x="22" y="284" width="816" height="66" rx="4" fill="#F4EFE6" stroke="#D6CABE" stroke-width="1.2"/>
  <text x="430" y="311" text-anchor="middle" font-family="'DejaVu Sans', Arial, sans-serif" font-size="12" fill="#0F172A">Appendices A–F: Formal Proofs &amp; Metrology Budgets   |   Appendices G–J: CODATA Units, Reproducible ODE &amp; Audit Registry</text>
  <text x="430" y="334" text-anchor="middle" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.5" fill="#64748B">Program Closure: P(M, PU(H)) &amp; E_stat(N) → Covariant Field Equations → Epistemic Ledger &amp; Empirical Falsification</text>
</svg>`
  },
  {
    id: 2,
    anchorId: 'fig-2',
    chapterAnchor: 'chapter-2',
    afterSubsectionAnchor: 'sec-2-1',
    title: 'Principal PU(H)-Bundle P(M, PU(H)) & Associated Statistical Bundle E_stat Over 4D Spacetime',
    caption:
      'Figure 2. Schematic trivial principal projective-unitary bundle P(M, PU(H)) (δ(P) = 0 ∈ H³(M, ℤ)) and associated statistical state bundle E_stat = P ×_{PU(H)} S(N) over split-included Type I detector factor N ⊂ A(O_ext) projecting via π : E_stat → M onto the 4D Lorentzian base manifold (M, g_μν) of signature (−,+,+,+), where Diff⁺(M) acts cleanly on base M. Over each event x ∈ M sits the normal statistical fiber S_x(N) equipped with SLD metric g_ij^QFI; horizontal curves lifted via A_μ follow the synchronization ansatz dτ = (1/c)√(−g_μν dx^μ dx^ν) = α_mod ds_QFI.',
    isSchematic: true,
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 860 395" width="100%" height="auto" role="img" aria-label="Principal PU(H)-bundle and associated statistical bundle E_stat over Lorentzian base manifold M">
  <rect x="0" y="0" width="860" height="395" fill="#FAF8F3" stroke="#D6CABE" stroke-width="1"/>
  <text x="24" y="27" font-family="'DejaVu Sans', Arial, sans-serif" font-size="12.5" font-weight="600" fill="#8B4513" letter-spacing="0.6">SCHEMATIC GEOMETRY — PRINCIPAL P(M, PU(H)) &amp; ASSOCIATED BUNDLE E_stat</text>
  <line x1="24" y1="36" x2="836" y2="36" stroke="#E2D9C8" stroke-width="1"/>

  <path d="M 85 296 C 240 268, 580 326, 770 282 L 802 350 C 600 382, 220 338, 52 360 Z" fill="#EFE9DD" stroke="#1E293B" stroke-width="1.5"/>
  <path d="M 140 292 C 295 274, 560 314, 730 286" fill="none" stroke="#D6CABE" stroke-width="0.9"/>
  <path d="M 105 329 C 260 311, 540 351, 755 320" fill="none" stroke="#D6CABE" stroke-width="0.9"/>
  <text x="72" y="350" font-family="'DejaVu Sans', Arial, sans-serif" font-size="13" fill="#0F172A">Base Spacetime (M, g_μν), signature (−,+,+,+), Diff⁺(M) action</text>

  <path d="M 110 322 C 300 302, 520 319, 745 298" fill="none" stroke="#8B4513" stroke-width="2.4"/>
  <circle cx="178" cy="316" r="4.5" fill="#0F172A"/>
  <text x="178" y="335" text-anchor="middle" font-family="'DejaVu Sans', Arial, sans-serif" font-size="12" fill="#0F172A">x(λ₁)</text>
  <circle cx="682" cy="304" r="4.5" fill="#0F172A"/>
  <text x="682" y="323" text-anchor="middle" font-family="'DejaVu Sans', Arial, sans-serif" font-size="12" fill="#0F172A">x(λ₂)</text>
  <text x="430" y="298" text-anchor="middle" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.8" fill="#8B4513">Timelike worldline ds² = g_μν dx^μ dx^ν &lt; 0</text>

  <line x1="178" y1="316" x2="152" y2="279" stroke="#64748B" stroke-width="1.1" stroke-dasharray="3,2"/>
  <line x1="178" y1="316" x2="204" y2="279" stroke="#64748B" stroke-width="1.1" stroke-dasharray="3,2"/>
  <ellipse cx="178" cy="279" rx="26" ry="5" fill="none" stroke="#64748B" stroke-width="1.1"/>
  <text x="142" y="273" text-anchor="end" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.5" fill="#475569">Light cone</text>

  <ellipse cx="178" cy="144" rx="74" ry="82" fill="#FFFFFF" fill-opacity="0.96" stroke="#1E293B" stroke-width="1.5"/>
  <line x1="178" y1="226" x2="178" y2="309" stroke="#1E293B" stroke-width="1.3" stroke-dasharray="5,3"/>
  <polygon points="174,305 178,312 182,305" fill="#1E293B"/>
  <text x="178" y="84" text-anchor="middle" font-family="'DejaVu Sans', Arial, sans-serif" font-size="13" font-weight="600" fill="#0F172A">Fiber S_x₁(N)</text>
  <text x="178" y="103" text-anchor="middle" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.5" fill="#475569">PU(H) states ρ(θ) ∈ S(N)</text>
  <circle cx="186" cy="156" r="4" fill="#8B4513"/>
  <path d="M 160 178 Q 184 158 204 132" fill="none" stroke="#15803D" stroke-width="2"/>
  <text x="178" y="203" text-anchor="middle" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.5" fill="#15803D">Metric g_ij^QFI</text>

  <ellipse cx="682" cy="138" rx="74" ry="82" fill="#FFFFFF" fill-opacity="0.96" stroke="#1E293B" stroke-width="1.5"/>
  <line x1="682" y1="220" x2="682" y2="297" stroke="#1E293B" stroke-width="1.3" stroke-dasharray="5,3"/>
  <polygon points="678,293 682,300 686,293" fill="#1E293B"/>
  <text x="682" y="78" text-anchor="middle" font-family="'DejaVu Sans', Arial, sans-serif" font-size="13" font-weight="600" fill="#0F172A">Fiber S_x₂(N)</text>
  <text x="682" y="97" text-anchor="middle" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.5" fill="#475569">Rank-const. → 4·g_FS (S³)</text>
  <circle cx="674" cy="146" r="4" fill="#8B4513"/>
  <path d="M 652 166 Q 674 148 696 124" fill="none" stroke="#15803D" stroke-width="2"/>
  <text x="682" y="198" text-anchor="middle" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.5" fill="#15803D">Covariant shift D_μ</text>

  <path d="M 186 156 C 330 112, 530 120, 674 146" fill="none" stroke="#8B4513" stroke-width="2.4"/>
  <text x="430" y="96" text-anchor="middle" font-family="'DejaVu Sans', Arial, sans-serif" font-size="12" fill="#8B4513">Horizontal Lift via PU(H) Connection A_μ</text>

  <rect x="200" y="192" width="460" height="36" rx="3" fill="#FFFFFF" stroke="#D6CABE" stroke-width="1"/>
  <text x="430" y="214" text-anchor="middle" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.5" fill="#0F172A">dτ = (1/c)√(−g_μν dx^μ dx^ν) = [ℏ/(E_mod·σ_1(K_ξ))] √(g_ij^QFI θ̇^i θ̇^j) dλ</text>

  <text x="430" y="254" text-anchor="middle" font-family="'DejaVu Sans', Arial, sans-serif" font-size="12" fill="#0F172A">Projection π : E_stat = P ×_{PU(H)} S(N) → M  (δ(P) = 0)</text>
</svg>`
  },
  {
    id: 3,
    anchorId: 'fig-3',
    chapterAnchor: 'chapter-6',
    afterSubsectionAnchor: 'sec-6-1',
    title: 'Analytical FLRW Quantum Bounce Scale-Factor Profile (w = 0) Across ρ = ρ_max',
    caption:
      'Figure 3. Analytical FLRW bounce solution from the UV limiting-curvature sector L_UV at dust equation of state w = 0: a(t)/a_min = [1 + (t/t_0)²]¹/³ (general w: [1 + (t/t_w)²]^{1/(3(1+w))}) satisfying H² = (8πG/3)ρ(1 − ρ/ρ_max) (solid terracotta), plotted against classical GR singular collapse |t/t_0|²/³ → 0 (dashed slate). At t = t_bounce, H = 0, ρ = ρ_max, and turnaround acceleration ä/a = +4πGρ_max(1 + w) > 0 prevents geodesic focusing.',
    isSchematic: false,
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 860 340" width="100%" height="auto" role="img" aria-label="Analytical FLRW bounce scale factor evolution">
  <rect x="0" y="0" width="860" height="340" fill="#FAF8F3" stroke="#D6CABE" stroke-width="1"/>
  <text x="24" y="27" font-family="'DejaVu Sans', Arial, sans-serif" font-size="12.5" font-weight="600" fill="#8B4513" letter-spacing="0.6">ANALYTICAL SOLUTION (L_UV, w = 0) — FLRW BOUNCE a(t)/a_min = [1 + (t/t₀)²]¹/³</text>
  <line x1="24" y1="36" x2="836" y2="36" stroke="#E2D9C8" stroke-width="1"/>

  <rect x="115" y="58" width="650" height="207" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1.2"/>
  <line x1="440" y1="58" x2="440" y2="265" stroke="#94A3B8" stroke-width="1.1" stroke-dasharray="4,3"/>
  <line x1="115" y1="${BOUNCE_DATA.bounceY}" x2="765" y2="${BOUNCE_DATA.bounceY}" stroke="#E2D9C8" stroke-width="1" stroke-dasharray="3,3"/>

  <text x="105" y="${BOUNCE_DATA.bounceY + 4}" text-anchor="end" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.8" fill="#8B4513">a_min (1.0)</text>
  <text x="105" y="269" text-anchor="end" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.8" fill="#475569">0</text>
  <text x="105" y="66" text-anchor="end" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.8" fill="#475569">1.85</text>
  <text x="52" y="162" text-anchor="middle" font-family="'DejaVu Sans', Arial, sans-serif" font-size="13" fill="#0F172A" transform="rotate(-90 52 162)">a(t) / a_min</text>

  <text x="115" y="285" text-anchor="middle" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.5" fill="#475569">−2.3</text>
  <text x="277" y="285" text-anchor="middle" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.5" fill="#475569">−1.15</text>
  <text x="440" y="285" text-anchor="middle" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.8" fill="#8B4513">t = t_bounce (0)</text>
  <text x="602" y="285" text-anchor="middle" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.5" fill="#475569">+1.15</text>
  <text x="765" y="285" text-anchor="middle" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.5" fill="#475569">+2.3</text>
  <text x="440" y="311" text-anchor="middle" font-family="'DejaVu Sans', Arial, sans-serif" font-size="12.5" fill="#0F172A">Dimensionless Cosmic Time (t − t_bounce) / t₀</text>

  <path d="${BOUNCE_DATA.grLeftPath}" fill="none" stroke="#94A3B8" stroke-width="1.8" stroke-dasharray="6,4"/>
  <path d="${BOUNCE_DATA.grRightPath}" fill="none" stroke="#94A3B8" stroke-width="1.8" stroke-dasharray="6,4"/>
  <path d="${BOUNCE_DATA.igrtPath}" fill="none" stroke="#8B4513" stroke-width="2.6"/>

  <circle cx="440" cy="${BOUNCE_DATA.bounceY}" r="5" fill="#8B4513"/>
  <circle cx="440" cy="265" r="4" fill="#64748B"/>
  <text x="366" y="128" text-anchor="middle" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.5" fill="#0F172A">ä/a = +4πGρ_max(1 + w) &gt; 0</text>
  <text x="440" y="253" text-anchor="middle" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.5" fill="#64748B">Classical GR singularity (a → 0)</text>

  <rect x="498" y="68" width="256" height="60" rx="3" fill="#FAF8F3" stroke="#D6CABE" stroke-width="1"/>
  <line x1="508" y1="86" x2="532" y2="86" stroke="#8B4513" stroke-width="2.5"/>
  <text x="540" y="90" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.5" fill="#0F172A">IGRT Bounce (L_UV, k_phys ≤ M_Pl)</text>
  <line x1="508" y1="110" x2="532" y2="110" stroke="#94A3B8" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="540" y="114" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.5" fill="#475569">Classical GR Singular Limit (w = 0)</text>
</svg>`
  },
  {
    id: 4,
    anchorId: 'fig-4',
    chapterAnchor: 'chapter-7',
    afterSubsectionAnchor: 'sec-7-1',
    title: 'Numerical Klein–Gordon Thawing Dark-Energy Trajectory w(z) Across z ∈ [0, 3] vs. ΛCDM',
    caption:
      'Figure 4. Linear-scale plot of the numerically integrated PNGB Klein–Gordon thawing dark-energy trajectory w(z) across redshift z ∈ [0, 3] (θ_i = 1.95 rad, f_φ = M̄_Pl = 2.435 × 10¹⁸ GeV, m_DE ≈ 1.30 H_0 ≈ 1.94 × 10⁻³³ eV), obeying early freezing 1 + w ∝ (1 + z)⁻³ and thawing to w_0 = −0.908 today with CPL tangent w_a = −0.177 < 0 while strictly satisfying w(z) ≥ −1 (falsified by P3 if DESI phantom crossing w_a < −0.4 persists >3σ).',
    isSchematic: false,
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 860 330" width="100%" height="auto" role="img" aria-label="Numerical Klein-Gordon thawing dark energy equation of state w(z)">
  <rect x="0" y="0" width="860" height="330" fill="#FAF8F3" stroke="#D6CABE" stroke-width="1"/>
  <text x="24" y="27" font-family="'DejaVu Sans', Arial, sans-serif" font-size="12.5" font-weight="600" fill="#8B4513" letter-spacing="0.6">NUMERICAL KLEIN–GORDON ODE — PNGB THAWING w(z) (θ_i = 1.95, w₀ = ${THAW_DATA.w0.toFixed(3)}, w_a = ${THAW_DATA.wA.toFixed(3)})</text>
  <line x1="24" y1="36" x2="836" y2="36" stroke="#E2D9C8" stroke-width="1"/>

  <rect x="115" y="58" width="650" height="198" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1.2"/>

  <line x1="115" y1="${THAW_DATA.yAtW(-0.91).toFixed(1)}" x2="765" y2="${THAW_DATA.yAtW(-0.91).toFixed(1)}" stroke="#E2E8F0" stroke-width="1"/>
  <text x="105" y="${(THAW_DATA.yAtW(-0.91) + 4).toFixed(1)}" text-anchor="end" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.8" fill="#475569">−0.91</text>
  <text x="758" y="${(THAW_DATA.yAtW(-0.91) - 7).toFixed(1)}" text-anchor="end" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.5" fill="#8B4513">Present Thaw w₀ = −0.908 (w_a = −0.177 &lt; 0)</text>

  <line x1="115" y1="${THAW_DATA.yAtW(-0.96).toFixed(1)}" x2="765" y2="${THAW_DATA.yAtW(-0.96).toFixed(1)}" stroke="#E2E8F0" stroke-width="1"/>
  <text x="105" y="${(THAW_DATA.yAtW(-0.96) + 4).toFixed(1)}" text-anchor="end" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.8" fill="#475569">−0.96</text>

  <line x1="115" y1="${THAW_DATA.yAtW(-1.00).toFixed(1)}" x2="765" y2="${THAW_DATA.yAtW(-1.00).toFixed(1)}" stroke="#334155" stroke-width="1.4" stroke-dasharray="6,4"/>
  <text x="105" y="${(THAW_DATA.yAtW(-1.00) + 4).toFixed(1)}" text-anchor="end" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.8" fill="#0F172A">−1.00 (ΛCDM)</text>

  <line x1="331.7" y1="58" x2="331.7" y2="256" stroke="#F1F5F9" stroke-width="1"/>
  <line x1="548.3" y1="58" x2="548.3" y2="256" stroke="#F1F5F9" stroke-width="1"/>

  <text x="48" y="157" text-anchor="middle" font-family="'DejaVu Sans', Arial, sans-serif" font-size="13" fill="#0F172A" transform="rotate(-90 48 157)">w(z)</text>
  <text x="115" y="276" text-anchor="middle" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.8" fill="#475569">z = 0</text>
  <text x="331.7" y="276" text-anchor="middle" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.8" fill="#475569">z = 1</text>
  <text x="548.3" y="276" text-anchor="middle" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.8" fill="#475569">z = 2</text>
  <text x="765" y="276" text-anchor="middle" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.8" fill="#475569">z = 3</text>
  <text x="440" y="305" text-anchor="middle" font-family="'DejaVu Sans', Arial, sans-serif" font-size="12.5" fill="#0F172A">Cosmological Redshift z</text>

  <path d="${THAW_DATA.curvePath}" fill="none" stroke="#8B4513" stroke-width="2.7"/>
  ${THAW_DATA.markers
    .map(
      (m) =>
        `<circle cx="${m.x}" cy="${m.y}" r="3.8" fill="#8B4513"/><text x="${
          m.z === 0 ? m.x + 10 : m.z === 3 ? m.x - 6 : m.x
        }" y="${m.y + (m.z === 0 ? 18 : -11)}" text-anchor="${
          m.z === 0 ? 'start' : m.z === 3 ? 'end' : 'middle'
        }" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.5" fill="#475569">${m.wVal.toFixed(4)}</text>`
    )
    .join('\n  ')}
  <text x="520" y="148" text-anchor="middle" font-family="'DejaVu Sans', Arial, sans-serif" font-size="12" fill="#15803D">Ghost-free non-phantom thawing: 1 + w ∝ (1 + z)⁻³, w(z) ≥ −1</text>
</svg>`
  },
  {
    id: 5,
    anchorId: 'fig-5',
    chapterAnchor: 'chapter-6',
    afterSubsectionAnchor: 'sec-6-3',
    title: 'Regular Frolov–Hayward Black-Hole Radial Lapse Function f(r) and Horizon Merger',
    caption:
      'Figure 5. Exact radial lapse profiles f(r) = 1 − 2GMr²/(r³ + 2GMℓ₀²) plotted across r/ℓ₀ ∈ [0, 5.5] with free phenomenological UV core parameter ℓ₀ = ξ₀ ℓ_Pl (ansatz ξ₀ = 2⁻¹/⁴ sets K(0) = 24/ℓ₀⁴ = 48/ℓ_Pl⁴). Sub-extremal masses (M > M_rem) possess inner (r_−) and outer (r_+) horizons coalescing at r_* = √3 ℓ₀ with vanishing surface gravity κ_± = 0; dynamical back-reaction truncates collapse prior to Cauchy extension.',
    isSchematic: false,
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 860 340" width="100%" height="auto" role="img" aria-label="Regular Frolov-Hayward lapse function f(r)">
  <rect x="0" y="0" width="860" height="340" fill="#FAF8F3" stroke="#D6CABE" stroke-width="1"/>
  <text x="24" y="27" font-family="'DejaVu Sans', Arial, sans-serif" font-size="12.5" font-weight="600" fill="#8B4513" letter-spacing="0.6">ANALYTICAL METRIC PROFILE — FROLOV–HAYWARD HORIZON MERGER (ℓ₀ = ξ₀ ℓ_Pl)</text>
  <line x1="24" y1="36" x2="836" y2="36" stroke="#E2D9C8" stroke-width="1"/>

  <rect x="105" y="56" width="670" height="212" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1.2"/>
  <line x1="105" y1="${HAYWARD_DATA.toY(1).toFixed(1)}" x2="775" y2="${HAYWARD_DATA.toY(1).toFixed(1)}" stroke="#94A3B8" stroke-width="1" stroke-dasharray="4,3"/>
  <line x1="105" y1="${HAYWARD_DATA.toY(0).toFixed(1)}" x2="775" y2="${HAYWARD_DATA.toY(0).toFixed(1)}" stroke="#334155" stroke-width="1.3"/>
  <text x="96" y="${(HAYWARD_DATA.toY(1) + 4).toFixed(1)}" text-anchor="end" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.8" fill="#0F172A">f = +1.0</text>
  <text x="96" y="${(HAYWARD_DATA.toY(0) + 4).toFixed(1)}" text-anchor="end" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.8" fill="#0F172A">f = 0.0</text>
  <text x="96" y="${(HAYWARD_DATA.toY(-0.5) + 4).toFixed(1)}" text-anchor="end" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.8" fill="#475569">−0.5</text>

  <text x="${HAYWARD_DATA.toX(0).toFixed(1)}" y="286" text-anchor="middle" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.5" fill="#475569">0</text>
  <text x="${HAYWARD_DATA.toX(1).toFixed(1)}" y="286" text-anchor="middle" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.5" fill="#475569">1</text>
  <text x="${HAYWARD_DATA.toX(2).toFixed(1)}" y="286" text-anchor="middle" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.5" fill="#475569">2</text>
  <text x="${HAYWARD_DATA.toX(3).toFixed(1)}" y="286" text-anchor="middle" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.5" fill="#475569">3</text>
  <text x="${HAYWARD_DATA.toX(4).toFixed(1)}" y="286" text-anchor="middle" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.5" fill="#475569">4</text>
  <text x="${HAYWARD_DATA.toX(5).toFixed(1)}" y="286" text-anchor="middle" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.5" fill="#475569">5</text>
  <text x="440" y="311" text-anchor="middle" font-family="'DejaVu Sans', Arial, sans-serif" font-size="12.5" fill="#0F172A">Radial Coordinate r / ℓ₀</text>

  <path d="${HAYWARD_DATA.schwarzschildPath}" fill="none" stroke="#94A3B8" stroke-width="1.7" stroke-dasharray="5,4"/>
  <path d="${HAYWARD_DATA.subExtremalPath}" fill="none" stroke="#1E293B" stroke-width="2.4"/>
  <path d="${HAYWARD_DATA.extremalPath}" fill="none" stroke="#8B4513" stroke-width="2.6"/>

  <circle cx="${HAYWARD_DATA.rMinusX}" cy="${HAYWARD_DATA.toY(0).toFixed(1)}" r="4" fill="#1E293B"/>
  <text x="${HAYWARD_DATA.rMinusX - 6}" y="${(HAYWARD_DATA.toY(0) - 10).toFixed(1)}" text-anchor="end" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.8" fill="#0F172A">r_−</text>
  <circle cx="${HAYWARD_DATA.rPlusX}" cy="${HAYWARD_DATA.toY(0).toFixed(1)}" r="4" fill="#1E293B"/>
  <text x="${HAYWARD_DATA.rPlusX + 8}" y="${(HAYWARD_DATA.toY(0) - 10).toFixed(1)}" text-anchor="start" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.8" fill="#0F172A">r_+</text>
  <circle cx="${HAYWARD_DATA.rStarX}" cy="${HAYWARD_DATA.toY(0).toFixed(1)}" r="4.8" fill="#8B4513"/>
  <text x="${HAYWARD_DATA.rStarX + 8}" y="${(HAYWARD_DATA.toY(0) - 12).toFixed(1)}" text-anchor="start" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.5" fill="#8B4513">r_* = √3 ℓ₀ (κ_± = 0)</text>

  <text x="115" y="${(HAYWARD_DATA.toY(1) - 8).toFixed(1)}" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.8" fill="#15803D">Regular de Sitter Core f(0) = 1</text>

  <rect x="434" y="174" width="328" height="82" rx="3" fill="#FAF8F3" stroke="#D6CABE" stroke-width="1"/>
  <line x1="446" y1="194" x2="472" y2="194" stroke="#1E293B" stroke-width="2.4"/>
  <text x="480" y="198" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.5" fill="#0F172A">M &gt; M_rem (GM/ℓ₀ = 2.0: r_− &amp; r_+)</text>
  <line x1="446" y1="216" x2="472" y2="216" stroke="#8B4513" stroke-width="2.6"/>
  <text x="480" y="220" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.5" fill="#8B4513">M = M_rem (Extremal Zero-T_H Core)</text>
  <line x1="446" y1="238" x2="472" y2="238" stroke="#94A3B8" stroke-width="1.7" stroke-dasharray="5,4"/>
  <text x="480" y="242" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.5" fill="#475569">Classical Schwarzschild (Divergent r → 0)</text>
</svg>`
  },
  {
    id: 6,
    anchorId: 'fig-6',
    chapterAnchor: 'chapter-6',
    afterSubsectionAnchor: 'sec-6-4',
    title: 'Penrose Conformal Diagram of a Regular Evaporating Black Hole With Extremal Remnant',
    caption:
      'Figure 6. True 45° Penrose conformal causal diagram illustrating non-singular collapse and unitary evaporation: a regular timelike core at r = 0 supports outer apparent and dynamical horizons enclosing an interior Quantum Extremal Island that bounds remnant entropy S_rem ≤ 3π/√2 ≈ 6.66 nats (under benchmark ansatz ξ_0 = 2⁻¹/⁴) while preserving the Generalized Second Law conditional on the Quantum Focusing Conjecture / QNEC before coalescing into a zero-temperature extremal remnant approaching i⁺.',
    isSchematic: true,
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 860 370" width="100%" height="auto" role="img" aria-label="Penrose conformal diagram of a regular evaporating black hole">
  <rect x="0" y="0" width="860" height="370" fill="#FAF8F3" stroke="#D6CABE" stroke-width="1"/>
  <text x="24" y="27" font-family="'DejaVu Sans', Arial, sans-serif" font-size="12.5" font-weight="600" fill="#8B4513" letter-spacing="0.6">CONFORMAL CAUSAL STRUCTURE (45° NULL RAYS) — REGULAR EVAPORATING REMNANT</text>
  <line x1="24" y1="36" x2="836" y2="36" stroke="#E2D9C8" stroke-width="1"/>

  <line x1="210" y1="54" x2="210" y2="334" stroke="#15803D" stroke-width="3"/>
  <text x="200" y="198" text-anchor="end" font-family="'DejaVu Sans', Arial, sans-serif" font-size="12" fill="#15803D">Regular r = 0</text>
  <text x="200" y="216" text-anchor="end" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.5" fill="#15803D">timelike core</text>

  <!-- Exact 45-degree null boundaries: (210,334)->(350,194)->(210,54) -->
  <line x1="210" y1="334" x2="350" y2="194" stroke="#1E293B" stroke-width="1.6"/>
  <line x1="350" y1="194" x2="210" y2="54" stroke="#1E293B" stroke-width="1.6"/>
  <text x="295" y="276" font-family="'DejaVu Sans', Arial, sans-serif" font-size="12.5" fill="#0F172A">ℐ⁻ (Past null ∞)</text>
  <text x="295" y="122" font-family="'DejaVu Sans', Arial, sans-serif" font-size="12.5" fill="#0F172A">ℐ⁺ (Future null ∞)</text>

  <circle cx="210" cy="334" r="3.8" fill="#0F172A"/>
  <text x="222" y="340" font-family="'DejaVu Sans', Arial, sans-serif" font-size="12" fill="#0F172A">i⁻</text>
  <circle cx="350" cy="194" r="4" fill="#0F172A"/>
  <text x="362" y="198" font-family="'DejaVu Sans', Arial, sans-serif" font-size="12.2" fill="#0F172A">i⁰ (Spatial ∞)</text>
  <circle cx="210" cy="54" r="4" fill="#0F172A"/>
  <text x="222" y="58" font-family="'DejaVu Sans', Arial, sans-serif" font-size="12.2" fill="#0F172A">i⁺ (Remnant asymptote)</text>

  <!-- Inward 45-degree collapsing null shell from ℐ⁻ to r=0 -->
  <line x1="302" y1="242" x2="210" y2="150" stroke="#8B4513" stroke-width="2.1" stroke-dasharray="5,3"/>
  <text x="265" y="218" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.5" fill="#8B4513">45° Infalling</text>
  <text x="265" y="233" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.5" fill="#8B4513">null shell</text>

  <!-- Trapped Core + QES Island bounded by r_- and r_+ -->
  <path d="M 210 150 C 258 174, 276 146, 256 122 C 240 104, 222 94, 210 90 Z" fill="#FDE68A" fill-opacity="0.55" stroke="#8B4513" stroke-width="1.8"/>
  <text x="219" y="136" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.5" fill="#7C2D12">QES</text>
  <text x="216" y="150" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.2" fill="#7C2D12">Island</text>

  <!-- Outward 45-degree Hawking radiation rays to ℐ⁺ -->
  <line x1="242" y1="138" x2="292" y2="88" stroke="#2563EB" stroke-width="1.2" stroke-dasharray="3,2"/>
  <line x1="256" y1="126" x2="306" y2="76" stroke="#2563EB" stroke-width="1.2" stroke-dasharray="3,2"/>
  <text x="304" y="84" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.5" fill="#1D4ED8">Hawking quanta</text>

  <rect x="432" y="82" width="406" height="214" rx="4" fill="#FFFFFF" stroke="#D6CABE" stroke-width="1.1"/>
  <text x="448" y="109" font-family="'DejaVu Sans', Arial, sans-serif" font-size="12.5" font-weight="600" fill="#8B4513">CAUSAL &amp; UNITARITY INVARIANTS</text>
  <line x1="448" y1="118" x2="822" y2="118" stroke="#E2D9C8" stroke-width="1"/>
  <text x="448" y="141" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.5" fill="#0F172A">1. Postulate I holds on outer r &gt; r_+ &amp; physical domains</text>
  <text x="448" y="165" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.5" fill="#0F172A">2. QES Island bounds S_rem ≤ 6.66 nats (ξ₀=2⁻¹/⁴); QFC-GSL</text>
  <text x="448" y="189" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.3" fill="#15803D">3. Remnant M_rem = (3√3/4)(ℓ₀c²/G) ≈ 2.38×10⁻⁸ kg (κ_± = 0)</text>
  <text x="448" y="215" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.3" fill="#475569">4. Dynamical evaporation r_± → r_* truncates spacetime</text>
  <text x="448" y="234" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.3" fill="#475569">    prior to Cauchy extension (κ_− → 0 kills mass inflation).</text>
  <text x="448" y="262" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.5" fill="#1D4ED8">5. Outgoing 45° radiation carries entanglement to ℐ⁺.</text>
</svg>`
  },
  {
    id: 7,
    anchorId: 'fig-7',
    chapterAnchor: 'chapter-7',
    afterSubsectionAnchor: 'sec-7-2',
    title: '2:1 Lissajous Phase Portrait Between Dual-Clock Differential and PTA Monopole Modes',
    caption:
      'Figure 7. Exact parametric 2:1 Lissajous figure-8 phase portrait generated by input underdamped holonomy ULDM phase φ_osc (m_osc = h f_clock / c² ≈ 2.65 × 10⁻²³ eV, sub-dominant halo fraction f_DM ≤ 0.02 with λ_dB ≈ 2.07 kpc, ε₀ ≈ 1.4 × 10⁻¹⁸): differential ⁸⁷Sr/¹⁷¹Yb optical clock modulation x(t) = sin(ωt/2) at f_clock = 6.4 nHz against isotropic Y_{00} monopole pulsar-timing strain y(t) = sin(ωt) at f_PTA = 2f_clock = 12.8 nHz (a 2:1 signature shared generically by quadratically coupled ULDM). Accounting for realistic clock flicker/drift noise plus steep PTA red noise S_red ∝ f⁻¹³/³, 5-yr (1.01 cycles, Δf = 6.34 nHz) and 15-yr (3.03 cycles) joint Cramér–Rao ratio uncertainties are 2.00 ± 0.25 and 2.00 ± 0.08.',
    isSchematic: false,
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 860 330" width="100%" height="auto" role="img" aria-label="2:1 Lissajous harmonic phase portrait">
  <rect x="0" y="0" width="860" height="330" fill="#FAF8F3" stroke="#D6CABE" stroke-width="1"/>
  <text x="24" y="27" font-family="'DejaVu Sans', Arial, sans-serif" font-size="12.5" font-weight="600" fill="#8B4513" letter-spacing="0.6">ANALYTICAL PHASE PORTRAIT — 2:1 MONOPOLE LOCK (f_PTA = 2·f_clock = 12.8 nHz)</text>
  <line x1="24" y1="36" x2="836" y2="36" stroke="#E2D9C8" stroke-width="1"/>

  <rect x="135" y="64" width="280" height="208" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1"/>
  <line x1="115" y1="168" x2="435" y2="168" stroke="#64748B" stroke-width="1.2"/>
  <line x1="275" y1="50" x2="275" y2="288" stroke="#64748B" stroke-width="1.2"/>
  <text x="275" y="306" text-anchor="middle" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.5" fill="#0F172A">Dual-clock diff. x(t) = sin(ωt/2), f_clock = 6.4 nHz</text>
  <text x="64" y="168" text-anchor="middle" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.5" fill="#0F172A" transform="rotate(-90 64 168)">PTA Y₀₀ monopole y(t) = sin(ωt), f_PTA = 12.8 nHz</text>

  <path d="${LISSAJOUS_PATH}" fill="none" stroke="#8B4513" stroke-width="2.6"/>
  <circle cx="275" cy="168" r="4.5" fill="#0F172A"/>
  <polygon points="366,61 376,64 368,70" fill="#8B4513"/>
  <polygon points="184,275 174,272 182,266" fill="#8B4513"/>

  <rect x="454" y="68" width="384" height="208" rx="4" fill="#FFFFFF" stroke="#D6CABE" stroke-width="1.2"/>
  <text x="470" y="96" font-family="'DejaVu Sans', Arial, sans-serif" font-size="12.5" font-weight="600" fill="#0F172A">Input ULDM φ_osc &amp; Joint Red-Noise Budget</text>
  <line x1="470" y1="106" x2="822" y2="106" stroke="#E2D9C8" stroke-width="1"/>
  <text x="470" y="129" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.3" fill="#475569">□ h̄_μν = 16πG (δT_μν + δI_μν[δφ_osc²])  (generic 2:1 ULDM)</text>
  <text x="470" y="151" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.3" fill="#475569">m_osc ≈ 2.65×10⁻²³ eV; f_DM ≤ 0.02 (λ_dB ≈ 2.07 kpc)</text>
  <text x="470" y="178" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.5" font-weight="600" fill="#15803D">Joint Clock Flicker + PTA Red-Noise Cramér–Rao:</text>
  <text x="470" y="200" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.3" fill="#475569">• Isotropic Y₀₀ monopole (f_PTA = 12.8 nHz = 2·f_clock)</text>
  <text x="470" y="220" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.3" fill="#475569">• 5 yr (1.01 cyc, Δf = 6.34 nHz): 2.00 ± 0.25</text>
  <text x="470" y="240" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.3" fill="#475569">• 15 yr (3.03 cyc, Δf = 2.11 nHz): 2.00 ± 0.08</text>
  <text x="470" y="260" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.3" fill="#475569">• Dual ⁸⁷Sr/¹⁷¹Yb clock drift-mitigated budget [106]</text>
</svg>`
  },
  {
    id: 8,
    anchorId: 'fig-8',
    chapterAnchor: 'chapter-7',
    afterSubsectionAnchor: 'sec-7-3',
    title: 'Overview of the Six Non-Null Observational & Laboratory Protocols (P1–P6)',
    caption:
      'Figure 8. Experimental roadmap summarizing non-null Protocols P1–P6 across IPTA and dual ⁸⁷Sr/¹⁷¹Yb optical lattice clocks (P1), 10⁻¹⁴ kg levitated silica nanosphere (R_0 = 1.028 μm) & 10m VLBAI interferometry (P2), Simons Observatory, LiteBIRD & DESI DR2 (P3), LVK O5 / CE / ET gravitational-wave ringdowns (P4), CANNEX / Eöt-Wash Chameleon force-gradient metrology (P5), and HL-LHC scalar portal & outer-heliosphere tracking (P6).',
    isSchematic: true,
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 860 442" width="100%" height="auto" role="img" aria-label="Six experimental and observational falsification protocols schematic">
  <rect x="0" y="0" width="860" height="442" fill="#FAF8F3" stroke="#D6CABE" stroke-width="1"/>
  <text x="22" y="28" font-family="'DejaVu Sans', Arial, sans-serif" font-size="13" font-weight="600" fill="#8B4513" letter-spacing="0.6">EXPERIMENTAL ROADMAP — NON-NULL FALSIFICATION PROTOCOLS (P1–P6)</text>
  <line x1="22" y1="38" x2="838" y2="38" stroke="#E2D9C8" stroke-width="1"/>

  <!-- Row 1: P1, P2, P3 (3 cards x 264w x 172h, 12px gaps) -->
  <rect x="22" y="52" width="264" height="172" rx="5" fill="#FFFFFF" stroke="#1E293B" stroke-width="1.3"/>
  <text x="34" y="77" font-family="'DejaVu Sans', Arial, sans-serif" font-size="13.2" font-weight="600" fill="#8B4513">P1: IPTA + ⁸⁷Sr/¹⁷¹Yb Clocks</text>
  <line x1="34" y1="86" x2="274" y2="86" stroke="#E2D9C8" stroke-width="1"/>
  <text x="34" y="108" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.3" fill="#0F172A">Test: 2:1 lock (f_PTA = 2f_clock = 12.8 nHz)</text>
  <text x="34" y="132" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.3" fill="#475569">Signal: Y₀₀ monopole; m_osc = 2.65×10⁻²³ eV</text>
  <text x="34" y="156" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.0" fill="#475569">Bound: f_DM ≤ 0.02; 2.00 ± 0.25 (5y) / ±0.08 (15y)</text>
  <text x="34" y="198" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.2" font-weight="600" fill="#15803D">Window: 2026–2035 (Flicker + Red Noise)</text>

  <rect x="298" y="52" width="264" height="172" rx="5" fill="#FFFFFF" stroke="#1E293B" stroke-width="1.3"/>
  <text x="310" y="77" font-family="'DejaVu Sans', Arial, sans-serif" font-size="13.2" font-weight="600" fill="#8B4513">P2: 10⁻¹⁴ kg Nanospheres &amp; VLBAI</text>
  <line x1="310" y1="86" x2="550" y2="86" stroke="#E2D9C8" stroke-width="1"/>
  <text x="310" y="108" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.3" fill="#0F172A">Test: Γ_Araki = (4/3) Γ_DP (overlap sphere)</text>
  <text x="310" y="132" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.3" fill="#475569">Target: R₀ = 1.028 μm SiO₂; Δx = 180 nm</text>
  <text x="310" y="156" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.3" fill="#475569">Rate: Γ = 1.18 s⁻¹ (η_Araki = 4/3)</text>
  <text x="310" y="198" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.2" font-weight="600" fill="#15803D">Falsifier: Γ &gt; 0.05 s⁻¹ (&lt;10⁻¹² Pa UHV)</text>

  <rect x="574" y="52" width="264" height="172" rx="5" fill="#FFFFFF" stroke="#1E293B" stroke-width="1.3"/>
  <text x="586" y="77" font-family="'DejaVu Sans', Arial, sans-serif" font-size="13.2" font-weight="600" fill="#8B4513">P3: SO / LiteBIRD / DESI DR2</text>
  <line x1="586" y1="86" x2="826" y2="86" stroke="#E2D9C8" stroke-width="1"/>
  <text x="586" y="108" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.3" fill="#0F172A">Bounce: n_s = 0.964; red n_T = −0.036</text>
  <text x="586" y="132" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.3" fill="#475569">Tensor/NG: r = 24c_s³ = 0.012; f_NL^{eq} = −4.38</text>
  <text x="586" y="156" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.3" fill="#475569">KG Thaw: w₀ = −0.908; w_a = −0.177</text>
  <text x="586" y="198" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.2" font-weight="600" fill="#15803D">Falsifier: r ∉ [0.004, 0.025] or w_a &lt; −0.4</text>

  <!-- Row 2: P4, P5, P6 -->
  <rect x="22" y="242" width="264" height="172" rx="5" fill="#FFFFFF" stroke="#1E293B" stroke-width="1.3"/>
  <text x="34" y="267" font-family="'DejaVu Sans', Arial, sans-serif" font-size="13.2" font-weight="600" fill="#8B4513">P4: LVK O5 / CE / ET Ringdowns</text>
  <line x1="34" y1="276" x2="274" y2="276" stroke="#E2D9C8" stroke-width="1"/>
  <text x="34" y="298" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.3" fill="#0F172A">Test: Hayward-core echo delay Δt_echo</text>
  <text x="34" y="322" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.3" fill="#475569">Delays: 17.8 ms (10 M_⊙); 109.2 ms (60 M_⊙)</text>
  <text x="34" y="346" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.3" fill="#475569">Input: K_echo = |R_eff| = 0.18 (|H| = 1)</text>
  <text x="34" y="388" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.2" font-weight="600" fill="#15803D">Falsifier: |R_eff| &lt; 0.03 (3G Coherent Stack)</text>

  <rect x="298" y="242" width="264" height="172" rx="5" fill="#FFFFFF" stroke="#1E293B" stroke-width="1.3"/>
  <text x="310" y="267" font-family="'DejaVu Sans', Arial, sans-serif" font-size="13.2" font-weight="600" fill="#8B4513">P5: CANNEX &amp; Eöt-Wash Metrology</text>
  <line x1="310" y1="276" x2="550" y2="276" stroke="#E2D9C8" stroke-width="1"/>
  <text x="310" y="298" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.3" fill="#0F172A">Test: Plate pressure ΔP_Ch (10 μm–1 cm)</text>
  <text x="310" y="322" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.3" fill="#475569">Sector: M_Ch = 2.4 meV; ΔP_Ch ~ 0.1–2 nN/m²</text>
  <text x="310" y="346" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.2" fill="#475569">Screening: Z_ψ = 7.05×10¹⁴; Λ_local = 4.67 μeV</text>
  <text x="310" y="388" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.2" font-weight="600" fill="#15803D">PPN: |γ_PPN − 1| = 1.77×10⁻¹¹ (1 AU)</text>

  <rect x="574" y="242" width="264" height="172" rx="5" fill="#FFFFFF" stroke="#1E293B" stroke-width="1.3"/>
  <text x="586" y="267" font-family="'DejaVu Sans', Arial, sans-serif" font-size="13.2" font-weight="600" fill="#8B4513">P6: HL-LHC Portal &amp; Deep-Space</text>
  <line x1="586" y1="276" x2="826" y2="276" stroke="#E2D9C8" stroke-width="1"/>
  <text x="586" y="298" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.3" fill="#0F172A">Portal: Φ_portal (m_portal = 1.84 ± 0.18 TeV)</text>
  <text x="586" y="322" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.3" fill="#475569">Rates: sin θ_H = 0.04–0.08; σ = 0.18–0.70 fb</text>
  <text x="586" y="346" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.3" fill="#475569">Coupling: δσ_Zh &gt; 1.5% vs. κ_Z ≈ 1.5% (1σ)</text>
  <text x="586" y="388" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.2" font-weight="600" fill="#15803D">Window: HL-LHC 3000 fb⁻¹ / Deep Space</text>
</svg>`
  }
];

export const HarmonizedPaperFigure: React.FC<{ figure: PaperFigureSpec }> = ({ figure }) => {
  const formattedSvg = React.useMemo(() => formatSvgMathMarkup(figure.svgMarkup), [figure.svgMarkup]);
  return (
    <figure
      id={figure.anchorId}
      className="igrt-keep-together my-8 rounded-lg border border-[#D6CABE] dark:border-[#334155] bg-[#FAF8F3] dark:bg-[#0B1530] p-5 space-y-3 scroll-mt-32 shadow-xs"
    >
      <div
        className="w-full overflow-x-auto rounded border border-[#E2D9C8] dark:border-[#334155]"
        dangerouslySetInnerHTML={{ __html: formattedSvg }}
      />
      <figcaption className="text-[14.5px] leading-relaxed text-[#475569] dark:text-[#94A3B8] italic">
        <MathText text={figure.caption} />
      </figcaption>
    </figure>
  );
};
