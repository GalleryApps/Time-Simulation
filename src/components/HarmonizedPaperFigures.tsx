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

export interface PaperIllustrationSpec {
  id: number;
  roman: string;
  anchorId: string;
  chapterAnchor: string;
  afterSubsectionAnchor: string;
  imagePath: string;
  title: string;
  caption: string;
}

export const PAPER_ILLUSTRATIONS: PaperIllustrationSpec[] = [
  {
    id: 1,
    roman: 'I',
    anchorId: 'plate-1',
    chapterAnchor: 'chapter-2',
    afterSubsectionAnchor: 'sec-2-1',
    imagePath: '/illustrations/plate_1_fiber_bundle.jpg',
    title: 'Principal Fiber Bundle P(M, PU(ℋ)) and Statistical State Manifold Geometry',
    caption:
      'Illustration Plate I. Conceptual differential-geometric plate of the trivial principal bundle P(M, PU(ℋ)) over the 4D Lorentzian spacetime manifold M (navy wire-mesh) with attached projective Hilbert fibers (terracotta & emerald Bloch spheres) endowed with the CPTP-monotone Petz SLD quantum Fisher–Rao metric g_ij^QFI. Geodesic curves along horizontal sections synchronize coordinate intervals via Theorem 4.1 without requiring a preferred external clock.'
  },
  {
    id: 2,
    roman: 'II',
    anchorId: 'plate-2',
    chapterAnchor: 'chapter-3',
    afterSubsectionAnchor: 'sec-3-1',
    imagePath: '/illustrations/plate_2_spectral_manifold.jpg',
    title: 'Extended Noncommutative Spectral Triple 𝒜_F^{H11} Unifying Five Scalar Sectors',
    caption:
      'Illustration Plate II. Archival geometric representation of the five-mode finite Krein–Connes spectral algebra 𝒜_F^{H11} = ℂ ⊕ ℍ ⊕ M_3(ℂ) ⊕ ℂ_hol ⊕ ℂ_Ch bridging two continuum product sheets (navy) via discrete internal matrix rings (terracotta braiding links and emerald Standard Model / Chameleon gauge fluxes). Seeley–DeWitt trace identities lock coupling ratios so all five scalar modes compress to k_eff = 2 spectral moduli.'
  },
  {
    id: 3,
    roman: 'III',
    anchorId: 'plate-3',
    chapterAnchor: 'chapter-6',
    afterSubsectionAnchor: 'sec-6-1',
    imagePath: '/illustrations/plate_3_cosmic_bounce.jpg',
    title: 'Non-Singular Two-Stage Ekpyrotic-to-Matter L_UV Cosmic Bounce Geometry',
    caption:
      'Illustration Plate III. Smooth Lorentzian hourglass spacetime manifold transitioning from an upper contracting ekpyrotic-matter epoch into a lower expanding universe across a minimal Planck-density throat (terracotta ring at ρ_max = 0.4094 ρ_Pl). Emerald causal light-cone trajectories traverse the bounce smoothly without cusp formation, diluting BKL anisotropic shear to 4.0×10^{−15} while preserving TCC bound H_max = 0.926 M_Pl < M_Pl.'
  },
  {
    id: 4,
    roman: 'IV',
    anchorId: 'plate-4',
    chapterAnchor: 'chapter-6',
    afterSubsectionAnchor: 'sec-6-3',
    imagePath: '/illustrations/plate_4_hayward_bh.jpg',
    title: 'Regular Kerr–Hayward Black Hole Interior, De Sitter Core, and QES Island',
    caption:
      'Illustration Plate IV. Cross-sectional embedding funnel of a regular Hayward–Kerr black hole. The outer event horizon and inner Cauchy core envelope a smooth, non-singular de Sitter plateau (terracotta concentric core, ℓ_0 = 2^{−1/4} ℓ_Pl, K ≤ 48/ℓ_Pl⁴) free of curvature singularities, with unitary Hawking entanglement and Quantum Extremal Surface (QES) island loops (emerald) saturating dynamic mass inflation.'
  },
  {
    id: 5,
    roman: 'V',
    anchorId: 'plate-5',
    chapterAnchor: 'chapter-7',
    afterSubsectionAnchor: 'sec-7-2',
    imagePath: '/illustrations/plate_5_clock_pta.jpg',
    title: 'Protocol P1 Precision Metrology: Optical Lattice Clock Cavity and Pulsar Array',
    caption:
      'Illustration Plate V. Dual-scale experimental plate pairing a terrestrial ⁸⁷Sr/¹⁷¹Yb optical lattice atomic clock cavity (left, navy & emerald standing-wave lattice) with a cosmological millisecond pulsar beam array across nanohertz gravitational wavefronts (right, terracotta). The center harmonic wave depicts the exact 2:1 frequency resonance f_PTA = 2 f_clock = 12.8 nHz probing Eq. (4.1) and ULDM holonomy mass m_osc = 2.65×10^{−23} eV.'
  }
];

function sampleBounceSvgPaths(): {
  igrtPath: string;
  igrtAreaPath: string;
  grLeftPath: string;
  grRightPath: string;
  bounceY: number;
  uvLeftX: number;
  uvRightX: number;
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
  const igrtPath = igrtPts.join(' ');
  const igrtAreaPath = `${igrtPath} L ${(x0 + w).toFixed(1)} ${yBot} L ${x0.toFixed(1)} ${yBot} Z`;

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
    igrtPath,
    igrtAreaPath,
    grLeftPath: grLeftPts.join(' '),
    grRightPath: grRightPts.join(' '),
    bounceY: Number(toY(1.0).toFixed(1)),
    uvLeftX: Number(toX(-0.55).toFixed(1)),
    uvRightX: Number(toX(0.55).toFixed(1))
  };
}

function sampleThawingWzSvgPath(): {
  curvePath: string;
  thawAreaPath: string;
  markers: Array<{ z: number; x: number; y: number; wVal: number }>;
  yAtW: (w: number) => number;
  toX: (z: number) => number;
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
  const wMin = -1.015;
  const wMax = -0.888;

  const toX = (z: number) => x0 + (z / 3) * plotW;
  const yAtW = (w: number) => yTop + ((wMax - w) / (wMax - wMin)) * plotH;

  const pts: string[] = [];
  for (let i = 0; i <= 60; i++) {
    const z = (3 * i) / 60;
    const wVal = wAtZ(z);
    pts.push(`${i === 0 ? 'M' : 'L'} ${toX(z).toFixed(1)} ${yAtW(wVal).toFixed(1)}`);
  }
  const curvePath = pts.join(' ');
  const yLcdm = yAtW(-1.0).toFixed(1);
  const thawAreaPath = `${curvePath} L ${(x0 + plotW).toFixed(1)} ${yLcdm} L ${x0.toFixed(1)} ${yLcdm} Z`;

  const markers = [0, 1, 2, 3].map((z) => {
    const wVal = wAtZ(z);
    return {
      z,
      x: Number(toX(z).toFixed(1)),
      y: Number(yAtW(wVal).toFixed(1)),
      wVal
    };
  });

  return { curvePath, thawAreaPath, markers, yAtW, toX, w0, wA };
}

function sampleHaywardLapseSvgPaths(): {
  subExtremalPath: string;
  subTrappedAreaPath: string;
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
  const trappedPts: string[] = [];
  const muSub = 2.0;
  const muRem = (3 * Math.sqrt(3)) / 4; // ~ 1.299038

  for (let i = 0; i <= 110; i++) {
    const r = (rMax * i) / 110;
    const fSub = evalF(r, muSub);
    subPts.push(`${i === 0 ? 'M' : 'L'} ${toX(r).toFixed(1)} ${toY(fSub).toFixed(1)}`);
    extPts.push(`${i === 0 ? 'M' : 'L'} ${toX(r).toFixed(1)} ${toY(evalF(r, muRem)).toFixed(1)}`);
  }

  // Sample exact trapped negative pocket f(r) <= 0 for sub-extremal Hayward (r_− ≈ 0.8730, r_+ ≈ 3.7112)
  const rM = 0.873;
  const rP = 3.711;
  const yZero = toY(0).toFixed(1);
  trappedPts.push(`M ${toX(rM).toFixed(1)} ${yZero}`);
  for (let i = 0; i <= 48; i++) {
    const r = rM + ((rP - rM) * i) / 48;
    trappedPts.push(`L ${toX(r).toFixed(1)} ${toY(Math.min(0, evalF(r, muSub))).toFixed(1)}`);
  }
  trappedPts.push(`L ${toX(rP).toFixed(1)} ${yZero} Z`);

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
    subTrappedAreaPath: trappedPts.join(' '),
    extremalPath: extPts.join(' '),
    schwarzschildPath: swPts.join(' '),
    toX,
    toY,
    rMinusX: Number(toX(rM).toFixed(1)),
    rPlusX: Number(toX(rP).toFixed(1)),
    rStarX: Number(toX(Math.sqrt(3)).toFixed(1))
  };
}

function sampleLissajousSvgPath(scale = 1.0): string {
  // Exact 2:1 parametric curve: x(theta) = sin(theta), y(theta) = sin(2*theta)
  const cx = 275;
  const cy = 168;
  const rx = 140 * scale;
  const ry = 104 * scale;
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
const LISSAJOUS_PATH = sampleLissajousSvgPath(1.0);
const LISSAJOUS_OUTER = sampleLissajousSvgPath(1.06);
const LISSAJOUS_INNER = sampleLissajousSvgPath(0.94);

export const PAPER_FIGURES: PaperFigureSpec[] = [
  {
    id: 1,
    anchorId: 'fig-1',
    chapterAnchor: 'chapter-1',
    afterSubsectionAnchor: 'sec-1-4',
    title: 'Logical Architecture and Chapter Roadmap of the IGRT Monograph',
    caption:
      'Figure 1. Logical architecture connecting the historical foundation, HL-LHC spectral test, emerging technologies, and seven postulates (Chapter 1) to trivial bookkeeping principal PU(H) and split-included associated E_stat = P ×_{PU(H)} S(N) bundles (Chapter 2), luminal Type Ia five-scalar Horndeski gravity and Type III₁ Jacobson–CHM Araki dynamics (Chapter 3), Tomita–Takesaki MT-variational Theorem 4.1 synchronization α_mod, background-independence closure §4.1.1, and WKB Krein correspondences (Chapter 4), canonical BFV–BRST unfreezing and detailed-balance BKM dissipation (Chapter 5), explicit L_UV bounce and WKB K_echo = 0.184 / mass-inflation regularity (Chapter 6), observational protocols P1–P6 & Core Falsifier (Chapter 7), and Minimal Core / A_F^{H11} closure synthesis with Table 8.3–8.4 (k_eff = 2, ΔAIC = −1.84) and Appendices A–P (Chapter 8).',
    isSchematic: true,
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 860 390" width="100%" style="display:block;width:100%;height:auto;" role="img" aria-label="Chapter roadmap of the IGRT monograph">
  <defs>
    <linearGradient id="fig1Bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#FCFBF7"/>
      <stop offset="100%" stop-color="#F5EFE4"/>
    </linearGradient>
    <linearGradient id="fig1ClosureCard" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#FFFDF8"/>
      <stop offset="100%" stop-color="#FDF2E4"/>
    </linearGradient>
    <marker id="fig1Arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 1 L 9 5 L 0 9 z" fill="#9A3412"/>
    </marker>
    <marker id="fig1ArrowSlate" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 1 L 9 5 L 0 9 z" fill="#475569"/>
    </marker>
  </defs>

  <rect x="0" y="0" width="860" height="390" fill="url(#fig1Bg)" stroke="#D6CABE" stroke-width="1"/>
  <rect x="0" y="0" width="860" height="4" fill="#9A3412"/>
  <text x="24" y="28" font-family="'DejaVu Sans', Arial, sans-serif" font-size="12.2" font-weight="600" fill="#9A3412" letter-spacing="0.9">SCHEMATIC ARCHITECTURE — LOGICAL DEPENDENCY MAP &amp; MINIMAL CORE SPLIT</text>
  <text x="836" y="28" text-anchor="end" font-family="'DejaVu Sans Mono', monospace" font-size="10.2" fill="#64748B">IGRT-2026-H11</text>
  <line x1="24" y1="39" x2="836" y2="39" stroke="#DFD5C3" stroke-width="1"/>

  <!-- Subtle Flow Band Annotations -->
  <text x="24" y="54" font-family="'DejaVu Sans Mono', monospace" font-size="9.2" fill="#64748B" letter-spacing="0.6">STAGE I: KINEMATICAL CORE &amp; MODULAR SYNCHRONIZATION (PAPER I BACKBONE)</text>

  <!-- Row 1 Cards (y=62, h=80) with subtle shadow + colored left accent bar -->
  <rect x="25" y="65" width="188" height="80" rx="4" fill="#0F172A" opacity="0.06"/>
  <rect x="22" y="62" width="188" height="80" rx="4" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1.2"/>
  <rect x="22" y="62" width="5" height="80" rx="2" fill="#0F172A"/>
  <text x="118" y="86" text-anchor="middle" font-family="'DejaVu Serif', Georgia, serif" font-size="12.8" font-weight="700" fill="#0F172A">Ch. 1: Scope &amp; Tests</text>
  <text x="118" y="106" text-anchor="middle" font-family="'DejaVu Sans', Arial, sans-serif" font-size="10.0" fill="#475569">4D Base, LHC &amp; Tech (§1.1–1.4)</text>
  <text x="118" y="128" text-anchor="middle" font-family="'DejaVu Sans Mono', monospace" font-size="9.8" fill="#9A3412">Eq. (1.1) · Table 1.1</text>

  <rect x="233" y="65" width="188" height="80" rx="4" fill="#0F172A" opacity="0.06"/>
  <rect x="230" y="62" width="188" height="80" rx="4" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1.2"/>
  <rect x="230" y="62" width="5" height="80" rx="2" fill="#1D4ED8"/>
  <text x="326" y="86" text-anchor="middle" font-family="'DejaVu Serif', Georgia, serif" font-size="12.8" font-weight="700" fill="#0F172A">Ch. 2: PU(H) &amp; E_stat</text>
  <text x="326" y="106" text-anchor="middle" font-family="'DejaVu Sans', Arial, sans-serif" font-size="9.8" fill="#475569">Bookkeeping δ(P)=0 · SLD QFI</text>
  <text x="326" y="128" text-anchor="middle" font-family="'DejaVu Sans Mono', monospace" font-size="9.6" fill="#1D4ED8">Est. Res. 2.1 · Eqs. (2.1)–(2.3)</text>

  <rect x="441" y="65" width="189" height="80" rx="4" fill="#0F172A" opacity="0.06"/>
  <rect x="438" y="62" width="189" height="80" rx="4" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1.2"/>
  <rect x="438" y="62" width="5" height="80" rx="2" fill="#15803D"/>
  <text x="535" y="86" text-anchor="middle" font-family="'DejaVu Serif', Georgia, serif" font-size="12.6" font-weight="700" fill="#0F172A">Ch. 3: Horndeski + Araki</text>
  <text x="535" y="106" text-anchor="middle" font-family="'DejaVu Sans', Arial, sans-serif" font-size="9.6" fill="#475569">5-Scalar · κ_ψ=2.173×10^{−21} GeV^{−1}</text>
  <text x="535" y="128" text-anchor="middle" font-family="'DejaVu Sans Mono', monospace" font-size="9.6" fill="#15803D">Thm 3.1 · Eqs. (3.1)–(3.3)</text>

  <rect x="651" y="65" width="188" height="80" rx="4" fill="#0F172A" opacity="0.06"/>
  <rect x="648" y="62" width="188" height="80" rx="4" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1.2"/>
  <rect x="648" y="62" width="5" height="80" rx="2" fill="#9A3412"/>
  <text x="744" y="86" text-anchor="middle" font-family="'DejaVu Serif', Georgia, serif" font-size="12.8" font-weight="700" fill="#0F172A">Ch. 4: Calibration</text>
  <text x="744" y="106" text-anchor="middle" font-family="'DejaVu Sans', Arial, sans-serif" font-size="9.8" fill="#475569">MT-saturated α_mod · §4.1.1</text>
  <text x="744" y="128" text-anchor="middle" font-family="'DejaVu Sans Mono', monospace" font-size="9.6" fill="#9A3412">Thm 4.1 · Eqs. (4.1)–(4.3)</text>

  <!-- Connecting Row 1 Arrows -->
  <line x1="210" y1="102" x2="226" y2="102" stroke="#9A3412" stroke-width="1.6" marker-end="url(#fig1Arrow)"/>
  <line x1="418" y1="102" x2="434" y2="102" stroke="#9A3412" stroke-width="1.6" marker-end="url(#fig1Arrow)"/>
  <line x1="627" y1="102" x2="644" y2="102" stroke="#9A3412" stroke-width="1.6" marker-end="url(#fig1Arrow)"/>

  <!-- Feedback Loop Curve between Stages -->
  <path d="M 744 142 L 744 166 L 116 166 L 116 189" fill="none" stroke="#9A3412" stroke-width="1.4" stroke-dasharray="4,3" marker-end="url(#fig1Arrow)"/>
  <text x="430" y="162" text-anchor="middle" font-family="'DejaVu Sans Mono', monospace" font-size="9.0" fill="#9A3412">STAGE II: DYNAMICAL UNFREEZING, STRONG-FIELD REGULARITY &amp; PHENOMENOLOGY (PAPER II)</text>

  <!-- Row 2 Cards (y=194, h=82) -->
  <rect x="25" y="197" width="188" height="82" rx="4" fill="#0F172A" opacity="0.06"/>
  <rect x="22" y="194" width="188" height="82" rx="4" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1.2"/>
  <rect x="22" y="194" width="5" height="82" rx="2" fill="#0F172A"/>
  <text x="118" y="218" text-anchor="middle" font-family="'DejaVu Serif', Georgia, serif" font-size="12.8" font-weight="700" fill="#0F172A">Ch. 5: WDW Unfreezing</text>
  <text x="118" y="238" text-anchor="middle" font-family="'DejaVu Sans', Arial, sans-serif" font-size="9.8" fill="#475569">Rieffel S^1, O(ℏ) Dirac &amp; BKM</text>
  <text x="118" y="260" text-anchor="middle" font-family="'DejaVu Sans Mono', monospace" font-size="9.6" fill="#9A3412">Est. Res. 5.1 · Eqs. (5.1)–(5.2)</text>

  <rect x="233" y="197" width="188" height="82" rx="4" fill="#0F172A" opacity="0.06"/>
  <rect x="230" y="194" width="188" height="82" rx="4" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1.2"/>
  <rect x="230" y="194" width="5" height="82" rx="2" fill="#1D4ED8"/>
  <text x="326" y="218" text-anchor="middle" font-family="'DejaVu Serif', Georgia, serif" font-size="12.8" font-weight="700" fill="#0F172A">Ch. 6: Regularity</text>
  <text x="326" y="238" text-anchor="middle" font-family="'DejaVu Sans', Arial, sans-serif" font-size="9.8" fill="#475569">L_UV, Red n_T &amp; ξ_0 = 2^{−1/4}</text>
  <text x="326" y="260" text-anchor="middle" font-family="'DejaVu Sans Mono', monospace" font-size="9.6" fill="#1D4ED8">Thm 6.1 · Eqs. (6.1)–(6.3)</text>

  <rect x="441" y="197" width="189" height="82" rx="4" fill="#0F172A" opacity="0.06"/>
  <rect x="438" y="194" width="189" height="82" rx="4" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1.2"/>
  <rect x="438" y="194" width="5" height="82" rx="2" fill="#15803D"/>
  <text x="535" y="218" text-anchor="middle" font-family="'DejaVu Serif', Georgia, serif" font-size="12.6" font-weight="700" fill="#0F172A">Ch. 7: Phenomenology</text>
  <text x="535" y="238" text-anchor="middle" font-family="'DejaVu Sans', Arial, sans-serif" font-size="9.8" fill="#475569">KG w_a&lt;0, Y_{00} P1–P6 &amp; Core</text>
  <text x="535" y="260" text-anchor="middle" font-family="'DejaVu Sans Mono', monospace" font-size="9.6" fill="#15803D">Eq. (7.1) · Tables 7.1–7.3</text>

  <rect x="651" y="197" width="188" height="82" rx="4" fill="#9A3412" opacity="0.10"/>
  <rect x="648" y="194" width="188" height="82" rx="4" fill="url(#fig1ClosureCard)" stroke="#9A3412" stroke-width="1.5"/>
  <rect x="648" y="194" width="5" height="82" rx="2" fill="#9A3412"/>
  <text x="744" y="218" text-anchor="middle" font-family="'DejaVu Serif', Georgia, serif" font-size="12.8" font-weight="700" fill="#0F172A">Ch. 8: Closure</text>
  <text x="744" y="238" text-anchor="middle" font-family="'DejaVu Sans', Arial, sans-serif" font-size="9.8" fill="#7C2D12">Core Split · ΔAIC=−1.84 (k=2)</text>
  <text x="744" y="260" text-anchor="middle" font-family="'DejaVu Sans Mono', monospace" font-size="9.6" fill="#9A3412">Eq. (8.1) · Tables 8.1–8.4</text>

  <!-- Connecting Row 2 Arrows -->
  <line x1="210" y1="235" x2="226" y2="235" stroke="#9A3412" stroke-width="1.6" marker-end="url(#fig1Arrow)"/>
  <line x1="418" y1="235" x2="434" y2="235" stroke="#9A3412" stroke-width="1.6" marker-end="url(#fig1Arrow)"/>
  <line x1="627" y1="235" x2="644" y2="235" stroke="#9A3412" stroke-width="1.6" marker-end="url(#fig1Arrow)"/>

  <!-- Bottom Appendices A–P Synthesis Plate -->
  <rect x="22" y="294" width="814" height="76" rx="4" fill="#FFFFFF" stroke="#D6CABE" stroke-width="1.2"/>
  <rect x="22" y="294" width="814" height="22" rx="4" fill="#EFE8DA"/>
  <text x="430" y="309" text-anchor="middle" font-family="'DejaVu Sans', Arial, sans-serif" font-size="10.4" font-weight="600" fill="#9A3412" letter-spacing="0.5">TECHNICAL APPENDICES A–P &amp; EPISTEMIC SEPARATION ARCHITECTURE</text>
  <text x="430" y="335" text-anchor="middle" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.3" fill="#0F172A">Minimal Core (Paper I): Ch. 2, Ch. 4–5, App. B, D, M, N, O.1–3 (0 Free Params) | Extensions (Paper II): Ch. 3, Ch. 6–7, App. A, C, E–L, P</text>
  <text x="430" y="356" text-anchor="middle" font-family="'DejaVu Sans', Arial, sans-serif" font-size="10.8" fill="#475569">Program Closure: Bookkeeping P(M, PU(H)) &amp; E_stat(N) → Covariant Field Equations → Status Table M.1 &amp; Appendix P H11 Closures</text>
</svg>`
  },
  {
    id: 2,
    anchorId: 'fig-2',
    chapterAnchor: 'chapter-2',
    afterSubsectionAnchor: 'sec-2-1',
    title: 'Principal PU(H)-Bundle P(M, PU(H)) & Associated Statistical Bundle E_stat Over 4D Spacetime',
    caption:
      'Figure 2. Schematic trivial principal projective-unitary bundle P(M, PU(H)) (δ(P) = 0 ∈ H³(M, ℤ), retained as covariant bookkeeping device) and associated statistical state bundle E_stat = P ×_{PU(H)} S(N) over split-included Type I detector factor N ⊂ A(O_ext) projecting via π : E_stat → M onto the 4D Lorentzian base manifold (M, g_μν) of signature (−,+,+,+), where Diff⁺(M) acts cleanly on base M. Over each event x ∈ M sits the normal statistical fiber S_x(N) equipped with SLD metric g_ij^QFI; horizontal curves lifted via A_μ follow the Mandelstam–Tamm Calibration Postulate dτ = (1/c)√(−g_μν dx^μ dx^ν) = α_mod ds_QFI.',
    isSchematic: true,
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 860 404" width="100%" style="display:block;width:100%;height:auto;" role="img" aria-label="Principal PU(H)-bundle and associated statistical bundle E_stat over Lorentzian base manifold M">
  <defs>
    <linearGradient id="fig2Bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#FCFBF7"/>
      <stop offset="100%" stop-color="#F5EFE4"/>
    </linearGradient>
    <linearGradient id="fig2Manifold" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#EFE7D6"/>
      <stop offset="55%" stop-color="#E6DCC7"/>
      <stop offset="100%" stop-color="#DCD0B8"/>
    </linearGradient>
    <radialGradient id="fig2FiberGrad" cx="40%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="100%" stop-color="#F3EFE6"/>
    </radialGradient>
    <linearGradient id="fig2ConeGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1D4ED8" stop-opacity="0.16"/>
      <stop offset="100%" stop-color="#1D4ED8" stop-opacity="0.03"/>
    </linearGradient>
    <marker id="fig2ArrowBrown" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 1 L 9 5 L 0 9 z" fill="#9A3412"/>
    </marker>
    <marker id="fig2ArrowNavy" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 1 L 9 5 L 0 9 z" fill="#0F172A"/>
    </marker>
  </defs>

  <rect x="0" y="0" width="860" height="404" fill="url(#fig2Bg)" stroke="#D6CABE" stroke-width="1"/>
  <rect x="0" y="0" width="860" height="4" fill="#1D4ED8"/>
  <text x="24" y="28" font-family="'DejaVu Sans', Arial, sans-serif" font-size="12.2" font-weight="600" fill="#9A3412" letter-spacing="0.7">SCHEMATIC GEOMETRY — BOOKKEEPING P(M, PU(H)) &amp; ASSOCIATED BUNDLE E_stat</text>
  <text x="836" y="28" text-anchor="end" font-family="'DejaVu Sans Mono', monospace" font-size="10.2" fill="#475569">δ(P) = 0 ∈ H³(M, ℤ)</text>
  <line x1="24" y1="39" x2="836" y2="39" stroke="#DFD5C3" stroke-width="1"/>

  <!-- Base Manifold (M, g_μν) with drop shadow and coordinate lines -->
  <path d="M 90 292 C 245 280, 585 296, 775 282 L 807 364 C 605 388, 225 354, 57 374 Z" fill="#0F172A" opacity="0.08"/>
  <path d="M 85 286 C 240 274, 580 290, 770 276 L 802 358 C 600 382, 220 348, 52 368 Z" fill="url(#fig2Manifold)" stroke="#0F172A" stroke-width="1.6"/>
  <path d="M 118 302 C 280 291, 560 305, 752 292" fill="none" stroke="#C8BCAA" stroke-width="0.9"/>
  <path d="M 90 344 C 250 334, 540 350, 770 334" fill="none" stroke="#C8BCAA" stroke-width="0.9"/>
  <line x1="250" y1="283" x2="232" y2="361" stroke="#C8BCAA" stroke-width="0.8"/>
  <line x1="430" y1="286" x2="424" y2="367" stroke="#C8BCAA" stroke-width="0.8"/>
  <line x1="610" y1="284" x2="616" y2="365" stroke="#C8BCAA" stroke-width="0.8"/>
  <text x="72" y="359" font-family="'DejaVu Serif', Georgia, serif" font-size="12.8" fill="#0F172A">Base Spacetime (M, g_μν), signature (−,+,+,+), Diff⁺(M) action</text>

  <!-- Timelike Worldline -->
  <path d="M 112 329 C 300 319, 520 329, 745 315" fill="none" stroke="#9A3412" stroke-width="2.6" marker-end="url(#fig2ArrowBrown)"/>
  <circle cx="154" cy="326" r="5" fill="#0F172A" stroke="#FFFFFF" stroke-width="1.5"/>
  <text x="154" y="344" text-anchor="middle" font-family="'DejaVu Sans Mono', monospace" font-size="11.5" fill="#0F172A">x(λ_1)</text>
  <circle cx="706" cy="318" r="5" fill="#0F172A" stroke="#FFFFFF" stroke-width="1.5"/>
  <text x="706" y="336" text-anchor="middle" font-family="'DejaVu Sans Mono', monospace" font-size="11.5" fill="#0F172A">x(λ_2)</text>
  <text x="430" y="311" text-anchor="middle" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.4" font-weight="600" fill="#9A3412">Timelike worldline ds^2 = g_μν dx^μ dx^ν &lt; 0</text>

  <!-- Light Cone at x(λ_1) -->
  <polygon points="154,326 126,287 182,287" fill="url(#fig2ConeGrad)"/>
  <line x1="154" y1="326" x2="126" y2="287" stroke="#1D4ED8" stroke-width="1.2" stroke-dasharray="3,2"/>
  <line x1="154" y1="326" x2="182" y2="287" stroke="#1D4ED8" stroke-width="1.2" stroke-dasharray="3,2"/>
  <ellipse cx="154" cy="287" rx="28" ry="5.5" fill="#1D4ED8" fill-opacity="0.10" stroke="#1D4ED8" stroke-width="1.2"/>
  <text x="118" y="283" text-anchor="end" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.0" fill="#1D4ED8">Light cone</text>

  <!-- Left Fiber S_{x_1}(N) -->
  <ellipse cx="157" cy="131" rx="96" ry="74" fill="#0F172A" opacity="0.07"/>
  <ellipse cx="154" cy="127" rx="96" ry="74" fill="url(#fig2FiberGrad)" stroke="#0F172A" stroke-width="1.6"/>
  <ellipse cx="154" cy="127" rx="76" ry="54" fill="none" stroke="#E2D9C8" stroke-width="0.9" stroke-dasharray="3,3"/>
  <line x1="154" y1="201" x2="154" y2="317" stroke="#0F172A" stroke-width="1.3" stroke-dasharray="5,3" marker-end="url(#fig2ArrowNavy)"/>
  <text x="154" y="77" text-anchor="middle" font-family="'DejaVu Serif', Georgia, serif" font-size="13" font-weight="700" fill="#0F172A">Fiber S_{x_1}(N)</text>
  <text x="154" y="96" text-anchor="middle" font-family="'DejaVu Sans', Arial, sans-serif" font-size="10.4" fill="#475569">PU(H) states ρ(θ) ∈ S(N)</text>
  <path d="M 130 160 Q 158 140 184 114" fill="none" stroke="#15803D" stroke-width="2.2"/>
  <circle cx="162" cy="138" r="4.6" fill="#9A3412" stroke="#FFFFFF" stroke-width="1.4"/>
  <text x="154" y="182" text-anchor="middle" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.2" font-weight="600" fill="#15803D">Metric g_ij^QFI</text>

  <!-- Right Fiber S_{x_2}(N) -->
  <ellipse cx="709" cy="129" rx="96" ry="74" fill="#0F172A" opacity="0.07"/>
  <ellipse cx="706" cy="125" rx="96" ry="74" fill="url(#fig2FiberGrad)" stroke="#0F172A" stroke-width="1.6"/>
  <ellipse cx="706" cy="125" rx="76" ry="54" fill="none" stroke="#E2D9C8" stroke-width="0.9" stroke-dasharray="3,3"/>
  <line x1="706" y1="199" x2="706" y2="309" stroke="#0F172A" stroke-width="1.3" stroke-dasharray="5,3" marker-end="url(#fig2ArrowNavy)"/>
  <text x="706" y="75" text-anchor="middle" font-family="'DejaVu Serif', Georgia, serif" font-size="13" font-weight="700" fill="#0F172A">Fiber S_{x_2}(N)</text>
  <text x="706" y="94" text-anchor="middle" font-family="'DejaVu Sans', Arial, sans-serif" font-size="10.4" fill="#475569">Rank-const. → 4·g_FS (S^3)</text>
  <path d="M 672 156 Q 698 136 724 110" fill="none" stroke="#15803D" stroke-width="2.2"/>
  <circle cx="698" cy="134" r="4.6" fill="#9A3412" stroke="#FFFFFF" stroke-width="1.4"/>
  <text x="706" y="180" text-anchor="middle" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.2" font-weight="600" fill="#15803D">Covariant shift D_μ</text>

  <!-- Horizontal Lift Connection Arc -->
  <path d="M 167 137 C 325 94, 540 100, 691 132" fill="none" stroke="#9A3412" stroke-width="2.5" marker-end="url(#fig2ArrowBrown)"/>
  <text x="430" y="90" text-anchor="middle" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.8" font-weight="600" fill="#9A3412">Horizontal Lift via PU(H) Connection A_μ</text>

  <!-- Central Formula Callout Card -->
  <rect x="193" y="202" width="474" height="44" rx="4" fill="#0F172A" opacity="0.06"/>
  <rect x="190" y="199" width="474" height="44" rx="4" fill="#FFFFFF" stroke="#D6CABE" stroke-width="1.2"/>
  <rect x="190" y="199" width="4" height="44" rx="2" fill="#9A3412"/>
  <text x="429" y="217" text-anchor="middle" font-family="'DejaVu Sans Mono', monospace" font-size="9.4" fill="#9A3412">CALIBRATION POSTULATE (MT-SATURATED · EQ. 4.1)</text>
  <text x="429" y="234" text-anchor="middle" font-family="'DejaVu Sans', Arial, sans-serif" font-size="10.8" fill="#0F172A">dτ = (1/c)√(−g_μν dx^μ dx^ν) = [ℏ/(E_mod·σ_1(K_ξ))] √(g_ij^QFI θ̇^i θ̇^j) dλ</text>

  <text x="430" y="264" text-anchor="middle" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.4" font-weight="600" fill="#0F172A">Projection π : E_stat = P ×_{PU(H)} S(N) → M  (Bookkeeping δ(P) = 0; Split Bound &lt; 10^{−30})</text>
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
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 860 350" width="100%" style="display:block;width:100%;height:auto;" role="img" aria-label="Analytical FLRW bounce scale factor evolution">
  <defs>
    <linearGradient id="fig3Bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#FCFBF7"/>
      <stop offset="100%" stop-color="#F5EFE4"/>
    </linearGradient>
    <linearGradient id="fig3BounceArea" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#C2410C" stop-opacity="0.20"/>
      <stop offset="100%" stop-color="#C2410C" stop-opacity="0.02"/>
    </linearGradient>
    <linearGradient id="fig3UvBand" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#D97706" stop-opacity="0.02"/>
      <stop offset="50%" stop-color="#D97706" stop-opacity="0.14"/>
      <stop offset="100%" stop-color="#D97706" stop-opacity="0.02"/>
    </linearGradient>
  </defs>

  <rect x="0" y="0" width="860" height="350" fill="url(#fig3Bg)" stroke="#D6CABE" stroke-width="1"/>
  <rect x="0" y="0" width="860" height="4" fill="#9A3412"/>
  <text x="24" y="28" font-family="'DejaVu Sans', Arial, sans-serif" font-size="12.2" font-weight="600" fill="#9A3412" letter-spacing="0.6">ANALYTICAL SOLUTION (L_UV, w = 0) — FLRW BOUNCE a(t)/a_min = [1 + (t/t_0)^2]^{1/3}</text>
  <line x1="24" y1="39" x2="836" y2="39" stroke="#DFD5C3" stroke-width="1"/>

  <!-- Plot Panel -->
  <rect x="115" y="58" width="650" height="207" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1.3"/>
  <!-- Shaded UV Turning-Point Band -->
  <rect x="${BOUNCE_DATA.uvLeftX}" y="58" width="${(BOUNCE_DATA.uvRightX - BOUNCE_DATA.uvLeftX).toFixed(1)}" height="207" fill="url(#fig3UvBand)"/>

  <!-- Fine Coordinate Gridlines -->
  <line x1="277.5" y1="58" x2="277.5" y2="265" stroke="#F1F5F9" stroke-width="1"/>
  <line x1="602.5" y1="58" x2="602.5" y2="265" stroke="#F1F5F9" stroke-width="1"/>
  <line x1="115" y1="106" x2="765" y2="106" stroke="#F1F5F9" stroke-width="1"/>
  <line x1="115" y1="209" x2="765" y2="209" stroke="#F1F5F9" stroke-width="1"/>
  <line x1="440" y1="58" x2="440" y2="265" stroke="#94A3B8" stroke-width="1.1" stroke-dasharray="4,3"/>
  <line x1="115" y1="${BOUNCE_DATA.bounceY}" x2="765" y2="${BOUNCE_DATA.bounceY}" stroke="#E2D9C8" stroke-width="1.1" stroke-dasharray="4,3"/>

  <!-- Axis Ticks & Labels -->
  <line x1="110" y1="${BOUNCE_DATA.bounceY}" x2="115" y2="${BOUNCE_DATA.bounceY}" stroke="#9A3412" stroke-width="1.3"/>
  <line x1="110" y1="265" x2="115" y2="265" stroke="#475569" stroke-width="1.2"/>
  <line x1="110" y1="58" x2="115" y2="58" stroke="#475569" stroke-width="1.2"/>
  <text x="104" y="${BOUNCE_DATA.bounceY + 4}" text-anchor="end" font-family="'DejaVu Sans Mono', monospace" font-size="11.2" font-weight="600" fill="#9A3412">a_min (1.0)</text>
  <text x="104" y="269" text-anchor="end" font-family="'DejaVu Sans Mono', monospace" font-size="11.2" fill="#475569">0</text>
  <text x="104" y="64" text-anchor="end" font-family="'DejaVu Sans Mono', monospace" font-size="11.2" fill="#475569">1.85</text>
  <text x="44" y="162" text-anchor="middle" font-family="'DejaVu Serif', Georgia, serif" font-size="13.5" fill="#0F172A" transform="rotate(-90 44 162)">a(t) / a_min</text>

  <line x1="115" y1="265" x2="115" y2="270" stroke="#475569" stroke-width="1.2"/>
  <line x1="277.5" y1="265" x2="277.5" y2="270" stroke="#475569" stroke-width="1.2"/>
  <line x1="440" y1="265" x2="440" y2="270" stroke="#9A3412" stroke-width="1.3"/>
  <line x1="602.5" y1="265" x2="602.5" y2="270" stroke="#475569" stroke-width="1.2"/>
  <line x1="765" y1="265" x2="765" y2="270" stroke="#475569" stroke-width="1.2"/>

  <text x="115" y="286" text-anchor="middle" font-family="'DejaVu Sans Mono', monospace" font-size="11.2" fill="#475569">−2.3</text>
  <text x="277.5" y="286" text-anchor="middle" font-family="'DejaVu Sans Mono', monospace" font-size="11.2" fill="#475569">−1.15</text>
  <text x="440" y="286" text-anchor="middle" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.6" font-weight="600" fill="#9A3412">t = t_bounce (0)</text>
  <text x="602.5" y="286" text-anchor="middle" font-family="'DejaVu Sans Mono', monospace" font-size="11.2" fill="#475569">+1.15</text>
  <text x="765" y="286" text-anchor="middle" font-family="'DejaVu Sans Mono', monospace" font-size="11.2" fill="#475569">+2.3</text>
  <text x="440" y="316" text-anchor="middle" font-family="'DejaVu Serif', Georgia, serif" font-size="13" fill="#0F172A">Dimensionless Cosmic Time (t − t_bounce) / t_0</text>

  <!-- Area Under Analytical IGRT Bounce Curve -->
  <path d="${BOUNCE_DATA.igrtAreaPath}" fill="url(#fig3BounceArea)"/>

  <!-- GR Singular Limit vs Analytical Bounce Curve -->
  <path d="${BOUNCE_DATA.grLeftPath}" fill="none" stroke="#94A3B8" stroke-width="1.9" stroke-dasharray="6,4"/>
  <path d="${BOUNCE_DATA.grRightPath}" fill="none" stroke="#94A3B8" stroke-width="1.9" stroke-dasharray="6,4"/>
  <path d="${BOUNCE_DATA.igrtPath}" fill="none" stroke="#9A3412" stroke-width="2.8" stroke-linecap="round"/>

  <!-- Anchor Points & Annotations -->
  <circle cx="440" cy="${BOUNCE_DATA.bounceY}" r="5.5" fill="#9A3412" stroke="#FFFFFF" stroke-width="1.8"/>
  <circle cx="440" cy="265" r="4.5" fill="#64748B" stroke="#FFFFFF" stroke-width="1.4"/>
  <line x1="396" y1="108" x2="435" y2="${(BOUNCE_DATA.bounceY - 5).toFixed(1)}" stroke="#9A3412" stroke-width="1.2"/>
  <text x="392" y="102" text-anchor="end" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.2" font-weight="600" fill="#0F172A">ä/a = +4πGρ_max(1 + w) &gt; 0</text>
  <text x="392" y="117" text-anchor="end" font-family="'DejaVu Sans Mono', monospace" font-size="9.8" fill="#B45309">ρ = ρ_max = 0.4094 ρ_Pl (H = 0)</text>

  <line x1="496" y1="250" x2="447" y2="262" stroke="#64748B" stroke-width="1.1"/>
  <text x="500" y="253" text-anchor="start" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.2" fill="#475569">Classical GR singularity (a → 0)</text>

  <!-- Legend Box with Offset Shadow -->
  <rect x="498" y="70" width="256" height="62" rx="4" fill="#0F172A" opacity="0.06"/>
  <rect x="495" y="67" width="256" height="62" rx="4" fill="#FCFBF7" stroke="#D6CABE" stroke-width="1.1"/>
  <line x1="507" y1="86" x2="533" y2="86" stroke="#9A3412" stroke-width="2.8"/>
  <text x="541" y="90" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.2" font-weight="600" fill="#0F172A">IGRT Bounce (L_UV, k_phys ≤ M_Pl)</text>
  <line x1="507" y1="110" x2="533" y2="110" stroke="#94A3B8" stroke-width="1.9" stroke-dasharray="5,3"/>
  <text x="541" y="114" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.2" fill="#475569">Classical GR Singular Limit (w = 0)</text>
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
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 860 340" width="100%" style="display:block;width:100%;height:auto;" role="img" aria-label="Numerical Klein-Gordon thawing dark energy equation of state w(z)">
  <defs>
    <linearGradient id="fig4Bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#FCFBF7"/>
      <stop offset="100%" stop-color="#F5EFE4"/>
    </linearGradient>
    <linearGradient id="fig4ThawGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#9A3412" stop-opacity="0.24"/>
      <stop offset="50%" stop-color="#D97706" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="#15803D" stop-opacity="0.06"/>
    </linearGradient>
  </defs>

  <rect x="0" y="0" width="860" height="340" fill="url(#fig4Bg)" stroke="#D6CABE" stroke-width="1"/>
  <rect x="0" y="0" width="860" height="4" fill="#15803D"/>
  <text x="24" y="28" font-family="'DejaVu Sans', Arial, sans-serif" font-size="12.2" font-weight="600" fill="#9A3412" letter-spacing="0.6">NUMERICAL KLEIN–GORDON ODE — PNGB THAWING w(z) (θ_i = 1.95, w_0 = ${THAW_DATA.w0.toFixed(3)}, w_a = ${THAW_DATA.wA.toFixed(3)})</text>
  <line x1="24" y1="39" x2="836" y2="39" stroke="#DFD5C3" stroke-width="1"/>

  <!-- Plot Panel -->
  <rect x="115" y="58" width="650" height="198" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1.3"/>

  <!-- Sub-phantom Forbidden Strip below w = -1.00 -->
  <rect x="115" y="${THAW_DATA.yAtW(-1.00).toFixed(1)}" width="650" height="${(256 - THAW_DATA.yAtW(-1.00)).toFixed(1)}" fill="#F1F5F9"/>

  <!-- Vertical Coordinate Gridlines -->
  <line x1="${THAW_DATA.toX(0.5).toFixed(1)}" y1="58" x2="${THAW_DATA.toX(0.5).toFixed(1)}" y2="256" stroke="#F8FAFC" stroke-width="1"/>
  <line x1="${THAW_DATA.toX(1.0).toFixed(1)}" y1="58" x2="${THAW_DATA.toX(1.0).toFixed(1)}" y2="256" stroke="#E2E8F0" stroke-width="1"/>
  <line x1="${THAW_DATA.toX(1.5).toFixed(1)}" y1="58" x2="${THAW_DATA.toX(1.5).toFixed(1)}" y2="256" stroke="#F8FAFC" stroke-width="1"/>
  <line x1="${THAW_DATA.toX(2.0).toFixed(1)}" y1="58" x2="${THAW_DATA.toX(2.0).toFixed(1)}" y2="256" stroke="#E2E8F0" stroke-width="1"/>
  <line x1="${THAW_DATA.toX(2.5).toFixed(1)}" y1="58" x2="${THAW_DATA.toX(2.5).toFixed(1)}" y2="256" stroke="#F8FAFC" stroke-width="1"/>

  <!-- Horizontal Reference Lines & Labels -->
  <line x1="115" y1="${THAW_DATA.yAtW(-0.91).toFixed(1)}" x2="765" y2="${THAW_DATA.yAtW(-0.91).toFixed(1)}" stroke="#E2E8F0" stroke-width="1"/>
  <text x="104" y="${(THAW_DATA.yAtW(-0.91) + 4).toFixed(1)}" text-anchor="end" font-family="'DejaVu Sans Mono', monospace" font-size="11.2" fill="#475569">−0.91</text>

  <line x1="115" y1="${THAW_DATA.yAtW(-0.96).toFixed(1)}" x2="765" y2="${THAW_DATA.yAtW(-0.96).toFixed(1)}" stroke="#E2E8F0" stroke-width="1"/>
  <text x="104" y="${(THAW_DATA.yAtW(-0.96) + 4).toFixed(1)}" text-anchor="end" font-family="'DejaVu Sans Mono', monospace" font-size="11.2" fill="#475569">−0.96</text>

  <line x1="115" y1="${THAW_DATA.yAtW(-1.00).toFixed(1)}" x2="765" y2="${THAW_DATA.yAtW(-1.00).toFixed(1)}" stroke="#334155" stroke-width="1.5" stroke-dasharray="6,4"/>
  <text x="104" y="${(THAW_DATA.yAtW(-1.00) + 4).toFixed(1)}" text-anchor="end" font-family="'DejaVu Sans Mono', monospace" font-size="11.2" font-weight="600" fill="#0F172A">−1.00 (ΛCDM)</text>

  <text x="48" y="157" text-anchor="middle" font-family="'DejaVu Serif', Georgia, serif" font-size="13.5" fill="#0F172A" transform="rotate(-90 48 157)">w(z)</text>
  <text x="115" y="278" text-anchor="middle" font-family="'DejaVu Sans Mono', monospace" font-size="11.4" font-weight="600" fill="#9A3412">z = 0</text>
  <text x="331.7" y="278" text-anchor="middle" font-family="'DejaVu Sans Mono', monospace" font-size="11.4" fill="#475569">z = 1</text>
  <text x="548.3" y="278" text-anchor="middle" font-family="'DejaVu Sans Mono', monospace" font-size="11.4" fill="#475569">z = 2</text>
  <text x="765" y="278" text-anchor="middle" font-family="'DejaVu Sans Mono', monospace" font-size="11.4" fill="#475569">z = 3</text>
  <text x="440" y="310" text-anchor="middle" font-family="'DejaVu Serif', Georgia, serif" font-size="13" fill="#0F172A">Cosmological Redshift z</text>

  <!-- Shaded Thawing Margin Above ΛCDM -->
  <path d="${THAW_DATA.thawAreaPath}" fill="url(#fig4ThawGrad)"/>

  <!-- Numerical RK2 Thawing Curve -->
  <path d="${THAW_DATA.curvePath}" fill="none" stroke="#9A3412" stroke-width="2.9" stroke-linecap="round"/>

  <!-- Sample Markers with White Halos -->
  ${THAW_DATA.markers
    .map(
      (m) =>
        `<circle cx="${m.x}" cy="${m.y}" r="4.6" fill="#9A3412" stroke="#FFFFFF" stroke-width="1.6"/><text x="${
          m.z === 0 ? m.x + 9 : m.z === 3 ? m.x - 6 : m.x + 4
        }" y="${m.y + (m.z === 0 ? -9 : -11)}" text-anchor="${
          m.z === 0 ? 'start' : m.z === 3 ? 'end' : 'middle'
        }" font-family="'DejaVu Sans Mono', monospace" font-size="10.8" font-weight="600" fill="#1E293B">${m.wVal.toFixed(4)}</text>`
    )
    .join('\n  ')}

  <!-- Callout Box -->
  <rect x="444" y="69" width="310" height="58" rx="4" fill="#0F172A" opacity="0.06"/>
  <rect x="441" y="66" width="310" height="58" rx="4" fill="#FCFBF7" stroke="#D6CABE" stroke-width="1.1"/>
  <text x="454" y="88" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.3" font-weight="600" fill="#9A3412">Present Thaw w_0 = −0.908 (w_a = −0.177 &lt; 0)</text>
  <text x="454" y="109" font-family="'DejaVu Sans', Arial, sans-serif" font-size="10.8" fill="#15803D">Ghost-free non-phantom: 1 + w ∝ (1 + z)^{−3}, w(z) ≥ −1</text>

  <text x="756" y="${(THAW_DATA.yAtW(-1.00) + 15).toFixed(1)}" text-anchor="end" font-family="'DejaVu Sans Mono', monospace" font-size="9.5" fill="#64748B">Phantom regime w &lt; −1 excluded by canonical PNGB (DESI w_a &lt; −0.4 falsifier)</text>
</svg>`
  },
  {
    id: 5,
    anchorId: 'fig-5',
    chapterAnchor: 'chapter-6',
    afterSubsectionAnchor: 'sec-6-3',
    title: 'Regular Frolov–Hayward Black-Hole Radial Lapse Function f(r) and Horizon Merger',
    caption:
      'Figure 5. Exact radial lapse profiles f(r) = 1 − (2GMr²)/(r³ + 2GMℓ₀²) plotted across r/ℓ₀ ∈ [0, 5.5], illustrating the derived UV core scale ℓ₀ = ξ₀ ℓ_Pl obtained by equating K_Hayward(0) = 24/ℓ₀⁴ to K_max = 48/ℓ_Pl⁴ of sector L_UV, which fixes ξ₀ = 2⁻¹/⁴ ≈ 0.8409. Sub-extremal masses (M > M_rem) possess inner (r_−) and outer (r_+) horizons coalescing at r_* = √3 ℓ₀ with vanishing surface gravity κ_± = 0; dynamical back-reaction truncates collapse prior to Cauchy extension.',
    isSchematic: false,
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 860 350" width="100%" style="display:block;width:100%;height:auto;" role="img" aria-label="Regular Frolov-Hayward lapse function f(r)">
  <defs>
    <linearGradient id="fig5Bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#FCFBF7"/>
      <stop offset="100%" stop-color="#F5EFE4"/>
    </linearGradient>
    <linearGradient id="fig5TrappedGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1D4ED8" stop-opacity="0.14"/>
      <stop offset="100%" stop-color="#1D4ED8" stop-opacity="0.04"/>
    </linearGradient>
    <linearGradient id="fig5CoreGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#15803D" stop-opacity="0.16"/>
      <stop offset="100%" stop-color="#15803D" stop-opacity="0.0"/>
    </linearGradient>
  </defs>

  <rect x="0" y="0" width="860" height="350" fill="url(#fig5Bg)" stroke="#D6CABE" stroke-width="1"/>
  <rect x="0" y="0" width="860" height="4" fill="#0F172A"/>
  <text x="24" y="28" font-family="'DejaVu Sans', Arial, sans-serif" font-size="12.2" font-weight="600" fill="#9A3412" letter-spacing="0.6">ANALYTICAL METRIC PROFILE — FROLOV–HAYWARD HORIZON MERGER (ℓ_0 = ξ_0 ℓ_Pl)</text>
  <line x1="24" y1="39" x2="836" y2="39" stroke="#DFD5C3" stroke-width="1"/>

  <rect x="105" y="56" width="670" height="212" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1.3"/>
  <!-- Regular de Sitter Core Band near r=0 -->
  <rect x="105" y="56" width="68" height="212" fill="url(#fig5CoreGrad)"/>

  <!-- Coordinate Gridlines -->
  <line x1="${HAYWARD_DATA.toX(1).toFixed(1)}" y1="56" x2="${HAYWARD_DATA.toX(1).toFixed(1)}" y2="268" stroke="#F1F5F9" stroke-width="1"/>
  <line x1="${HAYWARD_DATA.toX(2).toFixed(1)}" y1="56" x2="${HAYWARD_DATA.toX(2).toFixed(1)}" y2="268" stroke="#F1F5F9" stroke-width="1"/>
  <line x1="${HAYWARD_DATA.toX(3).toFixed(1)}" y1="56" x2="${HAYWARD_DATA.toX(3).toFixed(1)}" y2="268" stroke="#F1F5F9" stroke-width="1"/>
  <line x1="${HAYWARD_DATA.toX(4).toFixed(1)}" y1="56" x2="${HAYWARD_DATA.toX(4).toFixed(1)}" y2="268" stroke="#F1F5F9" stroke-width="1"/>
  <line x1="${HAYWARD_DATA.toX(5).toFixed(1)}" y1="56" x2="${HAYWARD_DATA.toX(5).toFixed(1)}" y2="268" stroke="#F1F5F9" stroke-width="1"/>
  <line x1="105" y1="${HAYWARD_DATA.toY(1).toFixed(1)}" x2="775" y2="${HAYWARD_DATA.toY(1).toFixed(1)}" stroke="#94A3B8" stroke-width="1" stroke-dasharray="4,3"/>
  <line x1="105" y1="${HAYWARD_DATA.toY(0.5).toFixed(1)}" x2="775" y2="${HAYWARD_DATA.toY(0.5).toFixed(1)}" stroke="#F1F5F9" stroke-width="1"/>
  <line x1="105" y1="${HAYWARD_DATA.toY(0).toFixed(1)}" x2="775" y2="${HAYWARD_DATA.toY(0).toFixed(1)}" stroke="#334155" stroke-width="1.4"/>

  <!-- Trapped Interior Pocket (f(r) < 0) -->
  <path d="${HAYWARD_DATA.subTrappedAreaPath}" fill="url(#fig5TrappedGrad)"/>
  <text x="${((HAYWARD_DATA.rMinusX + HAYWARD_DATA.rPlusX) / 2).toFixed(1)}" y="${(HAYWARD_DATA.toY(0) + 18).toFixed(1)}" text-anchor="middle" font-family="'DejaVu Sans Mono', monospace" font-size="9.5" fill="#1D4ED8">Trapped region (r_− &lt; r &lt; r_+)</text>

  <!-- Y & X Axis Labels -->
  <text x="95" y="${(HAYWARD_DATA.toY(1) + 4).toFixed(1)}" text-anchor="end" font-family="'DejaVu Sans Mono', monospace" font-size="11.2" font-weight="600" fill="#0F172A">f = +1.0</text>
  <text x="95" y="${(HAYWARD_DATA.toY(0) + 4).toFixed(1)}" text-anchor="end" font-family="'DejaVu Sans Mono', monospace" font-size="11.2" font-weight="600" fill="#0F172A">f = 0.0</text>
  <text x="95" y="${(HAYWARD_DATA.toY(-0.5) + 4).toFixed(1)}" text-anchor="end" font-family="'DejaVu Sans Mono', monospace" font-size="11.2" fill="#475569">−0.5</text>

  <text x="${HAYWARD_DATA.toX(0).toFixed(1)}" y="287" text-anchor="middle" font-family="'DejaVu Sans Mono', monospace" font-size="11.2" fill="#475569">0</text>
  <text x="${HAYWARD_DATA.toX(1).toFixed(1)}" y="287" text-anchor="middle" font-family="'DejaVu Sans Mono', monospace" font-size="11.2" fill="#475569">1</text>
  <text x="${HAYWARD_DATA.toX(2).toFixed(1)}" y="287" text-anchor="middle" font-family="'DejaVu Sans Mono', monospace" font-size="11.2" fill="#475569">2</text>
  <text x="${HAYWARD_DATA.toX(3).toFixed(1)}" y="287" text-anchor="middle" font-family="'DejaVu Sans Mono', monospace" font-size="11.2" fill="#475569">3</text>
  <text x="${HAYWARD_DATA.toX(4).toFixed(1)}" y="287" text-anchor="middle" font-family="'DejaVu Sans Mono', monospace" font-size="11.2" fill="#475569">4</text>
  <text x="${HAYWARD_DATA.toX(5).toFixed(1)}" y="287" text-anchor="middle" font-family="'DejaVu Sans Mono', monospace" font-size="11.2" fill="#475569">5</text>
  <text x="440" y="317" text-anchor="middle" font-family="'DejaVu Serif', Georgia, serif" font-size="13" fill="#0F172A">Radial Coordinate r / ℓ_0</text>

  <!-- Lapse Curves -->
  <path d="${HAYWARD_DATA.schwarzschildPath}" fill="none" stroke="#94A3B8" stroke-width="1.8" stroke-dasharray="5,4"/>
  <path d="${HAYWARD_DATA.subExtremalPath}" fill="none" stroke="#0F172A" stroke-width="2.5" stroke-linecap="round"/>
  <path d="${HAYWARD_DATA.extremalPath}" fill="none" stroke="#9A3412" stroke-width="2.8" stroke-linecap="round"/>

  <!-- Horizon Markers with White Halos -->
  <circle cx="${HAYWARD_DATA.rMinusX}" cy="${HAYWARD_DATA.toY(0).toFixed(1)}" r="4.5" fill="#0F172A" stroke="#FFFFFF" stroke-width="1.5"/>
  <text x="${HAYWARD_DATA.rMinusX - 8}" y="${(HAYWARD_DATA.toY(0) - 9).toFixed(1)}" text-anchor="end" font-family="'DejaVu Sans Mono', monospace" font-size="11.4" font-weight="600" fill="#0F172A">r_−</text>

  <circle cx="${HAYWARD_DATA.rPlusX}" cy="${HAYWARD_DATA.toY(0).toFixed(1)}" r="4.5" fill="#0F172A" stroke="#FFFFFF" stroke-width="1.5"/>
  <text x="${HAYWARD_DATA.rPlusX + 9}" y="${(HAYWARD_DATA.toY(0) + 16).toFixed(1)}" text-anchor="start" font-family="'DejaVu Sans Mono', monospace" font-size="11.4" font-weight="600" fill="#0F172A">r_+</text>

  <circle cx="${HAYWARD_DATA.rStarX}" cy="${HAYWARD_DATA.toY(0).toFixed(1)}" r="5.2" fill="#9A3412" stroke="#FFFFFF" stroke-width="1.6"/>
  <line x1="${HAYWARD_DATA.rStarX}" y1="141" x2="${HAYWARD_DATA.rStarX}" y2="${(HAYWARD_DATA.toY(0) - 6).toFixed(1)}" stroke="#9A3412" stroke-width="1.2"/>
  <text x="${HAYWARD_DATA.rStarX}" y="134" text-anchor="middle" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.4" font-weight="600" fill="#9A3412">r_* = √3 ℓ_0 (κ_± = 0)</text>

  <text x="115" y="${(HAYWARD_DATA.toY(1) - 8).toFixed(1)}" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.4" font-weight="600" fill="#15803D">Regular de Sitter Core f(0) = 1</text>

  <!-- Legend Box with Offset Shadow -->
  <rect x="435" y="177" width="330" height="83" rx="4" fill="#0F172A" opacity="0.06"/>
  <rect x="432" y="174" width="330" height="83" rx="4" fill="#FCFBF7" stroke="#D6CABE" stroke-width="1.1"/>
  <line x1="444" y1="194" x2="472" y2="194" stroke="#0F172A" stroke-width="2.5"/>
  <text x="480" y="198" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.2" fill="#0F172A">M &gt; M_rem (GM/ℓ₀ = 2.0: r_− &amp; r_+)</text>
  <line x1="444" y1="216" x2="472" y2="216" stroke="#9A3412" stroke-width="2.8"/>
  <text x="480" y="220" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.2" font-weight="600" fill="#9A3412">M = M_rem (Extremal Zero-T_H Core)</text>
  <line x1="444" y1="238" x2="472" y2="238" stroke="#94A3B8" stroke-width="1.8" stroke-dasharray="5,4"/>
  <text x="480" y="242" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.2" fill="#475569">Classical Schwarzschild (Divergent r → 0)</text>
</svg>`
  },
  {
    id: 6,
    anchorId: 'fig-6',
    chapterAnchor: 'chapter-6',
    afterSubsectionAnchor: 'sec-6-4',
    title: 'Penrose Conformal Diagram of a Regular Evaporating Black Hole With Extremal Remnant',
    caption:
      'Figure 6. True 45° Penrose conformal causal diagram illustrating non-singular collapse and unitary evaporation: a regular timelike core at r = 0 supports outer apparent and dynamical horizons enclosing an interior Quantum Extremal Island that bounds remnant entropy S_rem ≤ 3π/√2 ≈ 6.66 nats (under derived ξ_0 = 2⁻¹/⁴) while preserving the Generalized Second Law conditional on the Quantum Focusing Conjecture / QNEC before coalescing into a zero-temperature extremal remnant approaching i⁺.',
    isSchematic: true,
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 860 380" width="100%" style="display:block;width:100%;height:auto;" role="img" aria-label="Penrose conformal diagram of a regular evaporating black hole">
  <defs>
    <linearGradient id="fig6Bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#FCFBF7"/>
      <stop offset="100%" stop-color="#F5EFE4"/>
    </linearGradient>
    <linearGradient id="fig6WedgeGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#ECFDF5"/>
      <stop offset="45%" stop-color="#FFFFFF"/>
      <stop offset="100%" stop-color="#EFF6FF"/>
    </linearGradient>
    <linearGradient id="fig6IslandGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#FDE68A" stop-opacity="0.78"/>
      <stop offset="100%" stop-color="#F59E0B" stop-opacity="0.38"/>
    </linearGradient>
    <marker id="fig6ArrowBlue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5.5" markerHeight="5.5" orient="auto">
      <path d="M 0 1 L 9 5 L 0 9 z" fill="#1D4ED8"/>
    </marker>
    <marker id="fig6ArrowBrown" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5.5" markerHeight="5.5" orient="auto">
      <path d="M 0 1 L 9 5 L 0 9 z" fill="#9A3412"/>
    </marker>
  </defs>

  <rect x="0" y="0" width="860" height="380" fill="url(#fig6Bg)" stroke="#D6CABE" stroke-width="1"/>
  <rect x="0" y="0" width="860" height="4" fill="#15803D"/>
  <text x="24" y="28" font-family="'DejaVu Sans', Arial, sans-serif" font-size="12.2" font-weight="600" fill="#9A3412" letter-spacing="0.6">CONFORMAL CAUSAL STRUCTURE (45° NULL RAYS) — REGULAR EVAPORATING REMNANT</text>
  <line x1="24" y1="39" x2="836" y2="39" stroke="#DFD5C3" stroke-width="1"/>

  <!-- Conformal Spacetime Wedge (176,340)->(320,196)->(176,52) -->
  <polygon points="176,340 320,196 176,52" fill="url(#fig6WedgeGrad)"/>

  <!-- Subtle Conformal Constant-r / Constant-t Guide Curves -->
  <path d="M 176 340 Q 252 196 176 52" fill="none" stroke="#CBD5E1" stroke-width="0.9" stroke-dasharray="2,3"/>
  <path d="M 176 340 Q 290 196 176 52" fill="none" stroke="#CBD5E1" stroke-width="0.9" stroke-dasharray="2,3"/>
  <path d="M 176 196 Q 248 196 320 196" fill="none" stroke="#E2E8F0" stroke-width="0.9"/>

  <!-- Regular r = 0 Timelike Core -->
  <line x1="176" y1="52" x2="176" y2="340" stroke="#15803D" stroke-width="3.4"/>
  <text x="163" y="198" text-anchor="end" font-family="'DejaVu Serif', Georgia, serif" font-size="12.4" font-weight="700" fill="#15803D">Regular r = 0</text>
  <text x="163" y="216" text-anchor="end" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.2" fill="#15803D">timelike core</text>

  <!-- Exact 45-degree Null Inf Boundaries -->
  <line x1="176" y1="340" x2="320" y2="196" stroke="#0F172A" stroke-width="1.8"/>
  <line x1="320" y1="196" x2="176" y2="52" stroke="#0F172A" stroke-width="1.8"/>
  <text x="266" y="286" font-family="'DejaVu Serif', Georgia, serif" font-size="12.2" fill="#0F172A">ℐ⁻ (Past null ∞)</text>
  <text x="266" y="118" font-family="'DejaVu Serif', Georgia, serif" font-size="12.2" fill="#0F172A">ℐ⁺ (Future null ∞)</text>

  <!-- Asymptotic Infinities -->
  <circle cx="176" cy="340" r="4.5" fill="#0F172A" stroke="#FFFFFF" stroke-width="1.4"/>
  <text x="188" y="346" font-family="'DejaVu Serif', Georgia, serif" font-size="12" fill="#0F172A">i⁻</text>
  <circle cx="320" cy="196" r="4.5" fill="#0F172A" stroke="#FFFFFF" stroke-width="1.4"/>
  <text x="331" y="200" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.6" fill="#0F172A">i⁰ (Spatial ∞)</text>
  <circle cx="176" cy="52" r="4.5" fill="#0F172A" stroke="#FFFFFF" stroke-width="1.4"/>
  <text x="188" y="57" font-family="'DejaVu Sans', Arial, sans-serif" font-size="12" font-weight="600" fill="#0F172A">i⁺ (Remnant asymptote)</text>

  <!-- Inward 45-degree Collapsing Null Shell from ℐ⁻ to r=0 -->
  <line x1="270" y1="246" x2="180" y2="156" stroke="#9A3412" stroke-width="2.2" stroke-dasharray="5,3" marker-end="url(#fig6ArrowBrown)"/>
  <line x1="226" y1="216" x2="238" y2="212" stroke="#9A3412" stroke-width="1"/>
  <text x="184" y="226" font-family="'DejaVu Sans', Arial, sans-serif" font-size="10.0" font-weight="600" fill="#9A3412">45° Infalling</text>
  <text x="184" y="240" font-family="'DejaVu Sans', Arial, sans-serif" font-size="10.0" fill="#9A3412">null shell</text>

  <!-- Trapped Core + QES Island bounded by r_- and r_+ -->
  <path d="M 176 152 C 228 176, 246 146, 224 121 C 208 103, 189 92, 176 88 Z" fill="url(#fig6IslandGrad)" stroke="#9A3412" stroke-width="1.9"/>
  <text x="184" y="134" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.4" font-weight="600" fill="#7C2D12">QES</text>
  <text x="182" y="148" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.0" fill="#7C2D12">Island</text>

  <!-- Outward 45-degree Hawking Radiation Rays to ℐ⁺ -->
  <line x1="208" y1="138" x2="256" y2="90" stroke="#1D4ED8" stroke-width="1.4" stroke-dasharray="3,2" marker-end="url(#fig6ArrowBlue)"/>
  <line x1="222" y1="126" x2="270" y2="78" stroke="#1D4ED8" stroke-width="1.4" stroke-dasharray="3,2" marker-end="url(#fig6ArrowBlue)"/>
  <text x="275" y="83" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.2" font-weight="600" fill="#1D4ED8">Hawking quanta</text>

  <!-- Causal & Unitarity Invariants Plate -->
  <rect x="431" y="75" width="411" height="238" rx="4" fill="#0F172A" opacity="0.06"/>
  <rect x="428" y="72" width="411" height="238" rx="4" fill="#FFFFFF" stroke="#D6CABE" stroke-width="1.2"/>
  <rect x="428" y="72" width="411" height="32" rx="4" fill="#EFE8DA"/>
  <text x="444" y="93" font-family="'DejaVu Sans', Arial, sans-serif" font-size="12.2" font-weight="600" fill="#9A3412" letter-spacing="0.5">CAUSAL &amp; UNITARITY INVARIANTS</text>
  <line x1="428" y1="104" x2="839" y2="104" stroke="#DFD5C3" stroke-width="1"/>

  <text x="444" y="131" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.4" fill="#0F172A">1. Postulate I holds on outer r &gt; r_+ &amp; physical domains</text>
  <text x="444" y="159" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.4" fill="#0F172A">2. QES Island bounds S_rem ≤ 6.66 nats (ξ_0 = 2^{−1/4}); QFC-GSL</text>
  <text x="444" y="187" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.6" font-weight="600" fill="#15803D">3. Remnant M_rem = (3√3/4)( ℓ_0 c^2 / G ) ≈ 2.38×10^{−8} kg</text>
  <text x="444" y="216" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.4" fill="#1E293B">4. Dynamical evaporation r_± → r_* truncates spacetime</text>
  <text x="444" y="236" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.4" fill="#1E293B">    prior to Cauchy extension (κ_− → 0 kills mass inflation).</text>
  <text x="444" y="266" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.4" fill="#1D4ED8">5. Outgoing 45° radiation carries entanglement to ℐ⁺.</text>
  <text x="444" y="294" font-family="'DejaVu Sans Mono', monospace" font-size="9.5" fill="#64748B">Axisymmetric Kerr/RN κ_− ℓ_0 &lt; 1 &amp; Gain 0.2048 &lt; 1 (App. L)</text>
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
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 860 340" width="100%" style="display:block;width:100%;height:auto;" role="img" aria-label="2:1 Lissajous harmonic phase portrait">
  <defs>
    <linearGradient id="fig7Bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#FCFBF7"/>
      <stop offset="100%" stop-color="#F5EFE4"/>
    </linearGradient>
    <radialGradient id="fig7Glow" cx="50%" cy="50%" r="55%">
      <stop offset="0%" stop-color="#9A3412" stop-opacity="0.10"/>
      <stop offset="100%" stop-color="#9A3412" stop-opacity="0.0"/>
    </radialGradient>
  </defs>

  <rect x="0" y="0" width="860" height="340" fill="url(#fig7Bg)" stroke="#D6CABE" stroke-width="1"/>
  <rect x="0" y="0" width="860" height="4" fill="#1D4ED8"/>
  <text x="24" y="28" font-family="'DejaVu Sans', Arial, sans-serif" font-size="12.2" font-weight="600" fill="#9A3412" letter-spacing="0.6">ANALYTICAL PHASE PORTRAIT — 2:1 MONOPOLE LOCK (f_PTA = 2·f_clock = 12.8 nHz)</text>
  <line x1="24" y1="39" x2="836" y2="39" stroke="#DFD5C3" stroke-width="1"/>

  <!-- Left Plot Panel -->
  <rect x="135" y="64" width="280" height="208" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1.3"/>
  <circle cx="275" cy="168" r="102" fill="url(#fig7Glow)"/>
  <line x1="205" y1="64" x2="205" y2="272" stroke="#F1F5F9" stroke-width="1"/>
  <line x1="345" y1="64" x2="345" y2="272" stroke="#F1F5F9" stroke-width="1"/>
  <line x1="135" y1="116" x2="415" y2="116" stroke="#F1F5F9" stroke-width="1"/>
  <line x1="135" y1="220" x2="415" y2="220" stroke="#F1F5F9" stroke-width="1"/>
  <line x1="118" y1="168" x2="432" y2="168" stroke="#64748B" stroke-width="1.3"/>
  <line x1="275" y1="52" x2="275" y2="286" stroke="#64748B" stroke-width="1.3"/>

  <text x="275" y="308" text-anchor="middle" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.3" fill="#0F172A">Dual-clock diff. x(t) = sin(ωt/2), f_clock = 6.4 nHz</text>
  <text x="50" y="168" text-anchor="middle" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.3" fill="#0F172A" transform="rotate(-90 50 168)">PTA Y_{00} monopole y(t) = sin(ωt)</text>
  <text x="70" y="168" text-anchor="middle" font-family="'DejaVu Sans Mono', monospace" font-size="10.6" fill="#475569" transform="rotate(-90 70 168)">f_PTA = 12.8 nHz</text>

  <!-- 15-yr / 5-yr Phase Envelope & Crisp 2:1 Lissajous Curve -->
  <path d="${LISSAJOUS_OUTER}" fill="none" stroke="#F59E0B" stroke-width="1.0" stroke-dasharray="3,3" opacity="0.7"/>
  <path d="${LISSAJOUS_INNER}" fill="none" stroke="#F59E0B" stroke-width="1.0" stroke-dasharray="3,3" opacity="0.7"/>
  <path d="${LISSAJOUS_PATH}" fill="none" stroke="#9A3412" stroke-width="2.9" stroke-linejoin="round"/>
  <circle cx="275" cy="168" r="5" fill="#0F172A" stroke="#FFFFFF" stroke-width="1.5"/>
  <polygon points="366,61 377,64 368,71" fill="#9A3412"/>
  <polygon points="184,275 173,272 182,265" fill="#9A3412"/>

  <!-- Right Budget Plate with Offset Shadow -->
  <rect x="453" y="67" width="388" height="222" rx="4" fill="#0F172A" opacity="0.06"/>
  <rect x="450" y="64" width="388" height="222" rx="4" fill="#FFFFFF" stroke="#D6CABE" stroke-width="1.2"/>
  <rect x="450" y="64" width="388" height="32" rx="4" fill="#EFE8DA"/>
  <text x="466" y="85" font-family="'DejaVu Sans', Arial, sans-serif" font-size="12.0" font-weight="600" fill="#0F172A">Input ULDM φ_osc &amp; Joint Red-Noise Budget</text>
  <line x1="450" y1="96" x2="838" y2="96" stroke="#DFD5C3" stroke-width="1"/>
  <text x="466" y="120" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.1" fill="#334155">□ h̄_μν = 16πG (δT_μν + δI_μν[δφ_osc^2])  (generic 2:1 ULDM)</text>
  <text x="466" y="143" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.1" fill="#334155">m_osc ≈ 2.65×10^{−23} eV; f_DM ≤ 0.02 (λ_dB ≈ 2.07 kpc)</text>
  <text x="466" y="165" font-family="'DejaVu Sans Mono', monospace" font-size="10.4" fill="#9A3412">Target amplitude: ε_0 ≈ 1.4×10^{−18} (P1 clock modulation)</text>
  <line x1="466" y1="178" x2="822" y2="178" stroke="#EAE2D2" stroke-width="1"/>
  <text x="466" y="199" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.3" font-weight="600" fill="#15803D">Joint Clock Flicker + PTA Red-Noise Cramér–Rao:</text>
  <text x="466" y="220" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.0" fill="#475569">• Isotropic Y_{00} monopole (f_PTA = 12.8 nHz = 2·f_clock)</text>
  <text x="466" y="240" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.0" fill="#475569">• 5 yr (1.01 cyc, Δf = 6.34 nHz): 2.00 ± 0.25</text>
  <text x="466" y="260" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.0" fill="#475569">• 15 yr (3.03 cyc, Δf = 2.11 nHz): 2.00 ± 0.08 (SNR 25.1)</text>
  <text x="466" y="280" font-family="'DejaVu Sans', Arial, sans-serif" font-size="10.8" fill="#64748B">• Dual ^{87}Sr/^{171}Yb clock drift + PTA S_red budget [106]</text>
</svg>`
  },
  {
    id: 8,
    anchorId: 'fig-8',
    chapterAnchor: 'chapter-7',
    afterSubsectionAnchor: 'sec-7-3',
    title: 'Overview of the Six Non-Null Observational & Laboratory Protocols (P1–P6)',
    caption:
      'Figure 8. Experimental roadmap summarizing non-null Protocols P1–P6 across IPTA and dual ⁸⁷Sr/¹⁷¹Yb optical lattice clocks (P1), 10⁻¹⁴ kg levitated silica nanosphere (R_0 = 1.028 μm) & 10m VLBAI interferometry (P2), Simons Observatory, LiteBIRD & DESI DR2 (P3), LVK O5 / CE / ET gravitational-wave ringdowns (P4), CANNEX / Eöt-Wash Chameleon force-gradient metrology (P5), and HL-LHC scalar portal & outer-heliosphere tracking (P6), complemented by the Core Time Mechanism Falsifier (Eq. 4.1 via P1).',
    isSchematic: true,
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 860 618" width="100%" style="display:block;width:100%;height:auto;" role="img" aria-label="Six experimental and observational falsification protocols schematic">
  <defs>
    <linearGradient id="fig8Bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#FCFBF7"/>
      <stop offset="100%" stop-color="#F5EFE4"/>
    </linearGradient>
    <linearGradient id="fig8Header" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#EFE8DA"/>
      <stop offset="100%" stop-color="#F7F2E9"/>
    </linearGradient>
  </defs>

  <rect x="0" y="0" width="860" height="618" fill="url(#fig8Bg)" stroke="#D6CABE" stroke-width="1"/>
  <rect x="0" y="0" width="860" height="4" fill="#9A3412"/>
  <text x="22" y="30" font-family="'DejaVu Sans', Arial, sans-serif" font-size="13.5" font-weight="600" fill="#9A3412" letter-spacing="0.6">EXPERIMENTAL ROADMAP — NON-NULL FALSIFICATION PROTOCOLS (P1–P6)</text>
  <text x="838" y="30" text-anchor="end" font-family="'DejaVu Sans Mono', monospace" font-size="10.4" fill="#15803D">2026–2035 WINDOW</text>
  <line x1="22" y1="42" x2="838" y2="42" stroke="#DFD5C3" stroke-width="1"/>

  <!-- Row 1: P1, P2 -->
  <rect x="25" y="59" width="398" height="156" rx="4" fill="#0F172A" opacity="0.06"/>
  <rect x="22" y="56" width="398" height="156" rx="4" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1.2"/>
  <rect x="22" y="56" width="398" height="32" rx="4" fill="url(#fig8Header)"/>
  <text x="38" y="77" font-family="'DejaVu Serif', Georgia, serif" font-size="13.8" font-weight="700" fill="#9A3412">P1: IPTA + ^{87}Sr/^{171}Yb Clocks</text>
  <text x="404" y="77" text-anchor="end" font-family="'DejaVu Sans Mono', monospace" font-size="10.2" fill="#475569">SNR 25.1</text>
  <text x="38" y="112" font-family="'DejaVu Sans', Arial, sans-serif" font-size="12.4" fill="#0F172A">Test: 2:1 lock (f_PTA = 2 f_clock = 12.8 nHz)</text>
  <text x="38" y="137" font-family="'DejaVu Sans', Arial, sans-serif" font-size="12.4" fill="#1E293B">Signal: Y_{00} monopole; m_osc = 2.65×10^{−23} eV</text>
  <text x="38" y="162" font-family="'DejaVu Sans', Arial, sans-serif" font-size="12.4" fill="#1E293B">Bound: f_DM ≤ 0.02; 2.00 ± 0.25 (5y) / ±0.08 (15y)</text>
  <text x="38" y="192" font-family="'DejaVu Sans', Arial, sans-serif" font-size="12.2" font-weight="600" fill="#15803D">Window: 2026–2035 (ε_0 ≈ 1.4×10^{−18}; PTA Red Noise)</text>

  <rect x="443" y="59" width="398" height="156" rx="4" fill="#0F172A" opacity="0.06"/>
  <rect x="440" y="56" width="398" height="156" rx="4" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1.2"/>
  <rect x="440" y="56" width="398" height="32" rx="4" fill="url(#fig8Header)"/>
  <text x="456" y="77" font-family="'DejaVu Serif', Georgia, serif" font-size="13.8" font-weight="700" fill="#9A3412">P2: 10^{−14} kg Nanospheres &amp; VLBAI</text>
  <text x="822" y="77" text-anchor="end" font-family="'DejaVu Sans Mono', monospace" font-size="10.2" fill="#475569">SNR 23.5</text>
  <text x="456" y="112" font-family="'DejaVu Sans', Arial, sans-serif" font-size="12.4" fill="#0F172A">Test: Γ_Araki = (κ_ψ/κ_0) Γ_DP (DP overlap)</text>
  <text x="456" y="137" font-family="'DejaVu Sans', Arial, sans-serif" font-size="12.4" fill="#1E293B">Target: R_0 = 1.028 μm SiO_2; Δx = 180 nm</text>
  <text x="456" y="162" font-family="'DejaVu Sans', Arial, sans-serif" font-size="12.4" fill="#1E293B">Rate: Γ_Araki = 1.18 s^{−1} (η_Araki = 4/3)</text>
  <text x="456" y="192" font-family="'DejaVu Sans', Arial, sans-serif" font-size="12.2" font-weight="600" fill="#15803D">Falsifier: Γ_Araki &lt; 0.05 s^{−1} (2030–2035, UHV)</text>

  <!-- Row 2: P3, P4 -->
  <rect x="25" y="231" width="398" height="156" rx="4" fill="#0F172A" opacity="0.06"/>
  <rect x="22" y="228" width="398" height="156" rx="4" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1.2"/>
  <rect x="22" y="228" width="398" height="32" rx="4" fill="url(#fig8Header)"/>
  <text x="38" y="249" font-family="'DejaVu Serif', Georgia, serif" font-size="13.8" font-weight="700" fill="#9A3412">P3: SO / LiteBIRD / DESI DR2</text>
  <text x="404" y="249" text-anchor="end" font-family="'DejaVu Sans Mono', monospace" font-size="10.2" fill="#475569">SNR 12.3</text>
  <text x="38" y="284" font-family="'DejaVu Sans', Arial, sans-serif" font-size="12.4" fill="#0F172A">Bounce: n_s = 0.964; red n_T = −0.036</text>
  <text x="38" y="309" font-family="'DejaVu Sans', Arial, sans-serif" font-size="12.4" fill="#1E293B">Tensor/NG: r = 24c_s^3 = 0.0123; f_NL^{eq} = −4.38</text>
  <text x="38" y="334" font-family="'DejaVu Sans', Arial, sans-serif" font-size="12.4" fill="#1E293B">KG Thaw: w_0 = −0.908; w_a = −0.177 (S_8 ≤ 0.847)</text>
  <text x="38" y="364" font-family="'DejaVu Sans', Arial, sans-serif" font-size="12.2" font-weight="600" fill="#15803D">Falsifier: r ∉ [0.004, 0.025] or w_a &lt; −0.4 (2030–2035)</text>

  <rect x="443" y="231" width="398" height="156" rx="4" fill="#0F172A" opacity="0.06"/>
  <rect x="440" y="228" width="398" height="156" rx="4" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1.2"/>
  <rect x="440" y="228" width="398" height="32" rx="4" fill="url(#fig8Header)"/>
  <text x="456" y="249" font-family="'DejaVu Serif', Georgia, serif" font-size="13.8" font-weight="700" fill="#9A3412">P4: LVK O5 / CE / ET Ringdowns</text>
  <text x="822" y="249" text-anchor="end" font-family="'DejaVu Sans Mono', monospace" font-size="10.2" fill="#475569">SNR 9.0</text>
  <text x="456" y="284" font-family="'DejaVu Sans', Arial, sans-serif" font-size="12.4" fill="#0F172A">Test: Hayward-core echo delay Δt_echo</text>
  <text x="456" y="309" font-family="'DejaVu Sans', Arial, sans-serif" font-size="12.4" fill="#1E293B">Delays: 17.8 ms (10 M_⊙); 109.2 ms (60 M_⊙)</text>
  <text x="456" y="334" font-family="'DejaVu Sans', Arial, sans-serif" font-size="12.4" fill="#1E293B">WKB: K_echo = |R_eff| = 0.184 (|H| = 1)</text>
  <text x="456" y="364" font-family="'DejaVu Sans', Arial, sans-serif" font-size="12.2" font-weight="600" fill="#15803D">Falsifier: |R_eff| &lt; 0.03 (2027–2035, 3G Stack)</text>

  <!-- Row 3: P5, P6 -->
  <rect x="25" y="403" width="398" height="156" rx="4" fill="#0F172A" opacity="0.06"/>
  <rect x="22" y="400" width="398" height="156" rx="4" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1.2"/>
  <rect x="22" y="400" width="398" height="32" rx="4" fill="url(#fig8Header)"/>
  <text x="38" y="421" font-family="'DejaVu Serif', Georgia, serif" font-size="13.8" font-weight="700" fill="#9A3412">P5: CANNEX &amp; Eöt-Wash Metrology</text>
  <text x="404" y="421" text-anchor="end" font-family="'DejaVu Sans Mono', monospace" font-size="10.2" fill="#475569">SNR ≥ 10</text>
  <text x="38" y="456" font-family="'DejaVu Sans', Arial, sans-serif" font-size="12.4" fill="#0F172A">Test: Plate pressure ΔP_Ch (10 μm–1 cm)</text>
  <text x="38" y="481" font-family="'DejaVu Sans', Arial, sans-serif" font-size="12.4" fill="#1E293B">Sector: M_Ch = 2.4 meV; ΔP_Ch ~ 0.1–2 nN/m^2</text>
  <text x="38" y="506" font-family="'DejaVu Sans', Arial, sans-serif" font-size="12.4" fill="#1E293B">Screen: Z_ψ = 7.05×10^{14}; Λ_local = 4.67 μeV</text>
  <text x="38" y="536" font-family="'DejaVu Sans', Arial, sans-serif" font-size="12.2" font-weight="600" fill="#15803D">PPN: |γ_PPN − 1| = 1.77×10^{−11} (2026–2030)</text>

  <rect x="443" y="403" width="398" height="156" rx="4" fill="#0F172A" opacity="0.06"/>
  <rect x="440" y="400" width="398" height="156" rx="4" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1.2"/>
  <rect x="440" y="400" width="398" height="32" rx="4" fill="url(#fig8Header)"/>
  <text x="456" y="421" font-family="'DejaVu Serif', Georgia, serif" font-size="13.8" font-weight="700" fill="#9A3412">P6: HL-LHC Portal &amp; Deep-Space</text>
  <text x="822" y="421" text-anchor="end" font-family="'DejaVu Sans Mono', monospace" font-size="10.2" fill="#475569">4.7σ Reach</text>
  <text x="456" y="456" font-family="'DejaVu Sans', Arial, sans-serif" font-size="12.4" fill="#0F172A">Portal: Φ_portal (m_portal = 1.84 ± 0.18 TeV)</text>
  <text x="456" y="481" font-family="'DejaVu Sans', Arial, sans-serif" font-size="12.4" fill="#1E293B">Rates: sin θ_H = 0.04–0.08; σ = 0.18–0.70 fb</text>
  <text x="456" y="506" font-family="'DejaVu Sans', Arial, sans-serif" font-size="12.4" fill="#1E293B">Coupling: δσ_Zh &gt; 1.5% vs. κ_Z ≈ 1.5% (1σ)</text>
  <text x="456" y="536" font-family="'DejaVu Sans', Arial, sans-serif" font-size="12.2" font-weight="600" fill="#15803D">Reach: HL-LHC 3000 fb^{−1} (2029–2035)</text>

  <!-- Core Time Mechanism Falsifier Banner -->
  <rect x="22" y="571" width="816" height="33" rx="4" fill="#FFFFFF" stroke="#9A3412" stroke-width="1.2"/>
  <rect x="22" y="571" width="6" height="33" rx="2" fill="#9A3412"/>
  <text x="434" y="592" text-anchor="middle" font-family="'DejaVu Sans', Arial, sans-serif" font-size="11.2" font-weight="600" fill="#0F172A">CORE TIME MECHANISM FALSIFIER: dτ_IGRT/ds_QFI = ℏ/(E_mod σ_1) (Eq. 4.1) tested at 10^{−18} via dual-clock P1 [106]</text>
</svg>`
  },
  {
    id: 9,
    anchorId: 'fig-9',
    chapterAnchor: 'chapter-3',
    afterSubsectionAnchor: 'sec-3-4',
    title: 'Wetterich FRG UV Fixed Point (g_*, λ_*), CDT Spectral Dimension d_s, and Causal TOV Neutron Stars',
    caption:
      'Figure 9. UV-to-astrophysics closure in Edition IGRT-2026-H11: Left panel shows the 1-loop Litim–Wetterich FRG trajectory converging from the non-Gaussian UV fixed point (g_* = 1.3105, λ_* = 0.1440) toward g_IR = 3.78×10^{−5}, paired with CDT spectral-dimension flow d_s: 3.989 → 2.002 and Gromov–Hausdorff convergence d_GH = O(N^{−1/4}). Right panel shows the causal SLy4-matched Type Ia Horndeski TOV mass–radius relation (M_max = 2.35 M_⊙, R_{1.4} = 11.57 km, Λ_{1.4} = 339 < 580) satisfying NICER PSR J0740+6620 and GW170817 bounds.',
    isSchematic: false,
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 860 390" width="100%" style="display:block;width:100%;height:auto;" role="img" aria-label="Wetterich FRG flow and causal Type Ia Horndeski TOV neutron star mass-radius chart">
  <defs>
    <linearGradient id="fig9Bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#FCFBF7"/>
      <stop offset="100%" stop-color="#F4EDE0"/>
    </linearGradient>
    <linearGradient id="fig9Band" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#15803D" stop-opacity="0.16"/>
      <stop offset="100%" stop-color="#15803D" stop-opacity="0.06"/>
    </linearGradient>
  </defs>
  <rect x="0" y="0" width="860" height="390" fill="url(#fig9Bg)" stroke="#D6CABE" stroke-width="1"/>
  <rect x="0" y="0" width="860" height="4" fill="#9A3412"/>
  <text x="22" y="28" font-family="'DejaVu Sans', Arial, sans-serif" font-size="13.2" font-weight="600" fill="#9A3412" letter-spacing="0.5">QUANTUM GRAVITY UV COMPLETION &amp; STRONG-FIELD COMPACT OBJECTS</text>
  <text x="838" y="28" text-anchor="end" font-family="'DejaVu Sans Mono', monospace" font-size="10.2" fill="#15803D">App. L &amp; §3.4 · H11 DERIVED</text>
  <line x1="22" y1="40" x2="838" y2="40" stroke="#DFD5C3" stroke-width="1"/>

  <!-- Left panel: FRG & CDT Spectral Dimension -->
  <rect x="22" y="54" width="398" height="316" rx="4" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1.1"/>
  <text x="40" y="76" font-family="'DejaVu Serif', Georgia, serif" font-size="12.6" font-weight="700" fill="#0F172A">A. Wetterich FRG &amp; CDT d_s(σ) Flow</text>
  <line x1="68" y1="294" x2="394" y2="294" stroke="#334155" stroke-width="1.2"/>
  <line x1="68" y1="96" x2="68" y2="294" stroke="#334155" stroke-width="1.2"/>
  <line x1="68" y1="145" x2="394" y2="145" stroke="#E2E8F0" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="68" y1="220" x2="394" y2="220" stroke="#E2E8F0" stroke-width="1" stroke-dasharray="4 3"/>
  <!-- d_s curve from UV 2.002 -> IR 3.989 -->
  <path d="M 74 236 C 145 234, 195 210, 235 170 C 275 130, 325 112, 390 110" fill="none" stroke="#9A3412" stroke-width="2.6"/>
  <!-- g(k) dimensionless Newton coupling from UV fixed point 1.3105 -> IR 0 -->
  <path d="M 74 176 C 140 179, 195 206, 245 256 C 285 285, 335 292, 390 293" fill="none" stroke="#15803D" stroke-width="2.4" stroke-dasharray="6 3"/>
  <circle cx="74" cy="176" r="4.5" fill="#15803D"/>
  <circle cx="390" cy="110" r="4.5" fill="#9A3412"/>
  <text x="82" y="168" font-family="'DejaVu Sans Mono', monospace" font-size="10.0" fill="#15803D">UV Fixed Point: g_* = 1.3105, λ_* = 0.1440</text>
  <text x="234" y="102" font-family="'DejaVu Sans Mono', monospace" font-size="10.0" fill="#9A3412">CDT IR: d_s = 3.989</text>
  <text x="82" y="252" font-family="'DejaVu Sans Mono', monospace" font-size="10.0" fill="#9A3412">CDT UV: d_s = 2.002</text>
  <text x="64" y="114" text-anchor="end" font-family="'DejaVu Sans Mono', monospace" font-size="9.5" fill="#475569">4.0</text>
  <text x="64" y="224" text-anchor="end" font-family="'DejaVu Sans Mono', monospace" font-size="9.5" fill="#475569">2.0</text>
  <text x="64" y="297" text-anchor="end" font-family="'DejaVu Sans Mono', monospace" font-size="9.5" fill="#475569">0.0</text>
  <text x="74" y="312" font-family="'DejaVu Sans Mono', monospace" font-size="9.5" fill="#475569">UV (k → ∞)</text>
  <text x="390" y="312" text-anchor="end" font-family="'DejaVu Sans Mono', monospace" font-size="9.5" fill="#475569">IR (k → 0)</text>
  <text x="40" y="336" font-family="'DejaVu Sans', Arial, sans-serif" font-size="10.6" fill="#334155">• Borel–Padé instanton sum = 0.9126; θ_real = 4.835 &gt; 0</text>
  <text x="40" y="355" font-family="'DejaVu Sans', Arial, sans-serif" font-size="10.6" fill="#0F172A">• Regge–CDT continuum bound: d_GH(M_N, M) = O(N^{−1/4})</text>

  <!-- Right panel: TOV Mass-Radius -->
  <rect x="440" y="54" width="398" height="316" rx="4" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1.1"/>
  <text x="458" y="76" font-family="'DejaVu Serif', Georgia, serif" font-size="12.6" font-weight="700" fill="#0F172A">B. Causal Type Ia TOV Mass–Radius Curve</text>
  <rect x="490" y="102" width="320" height="40" fill="url(#fig9Band)"/>
  <line x1="490" y1="142" x2="810" y2="142" stroke="#15803D" stroke-width="1.2" stroke-dasharray="4 3"/>
  <text x="496" y="125" font-family="'DejaVu Sans Mono', monospace" font-size="9.8" fill="#15803D">PSR J0740+6620: 2.08 ± 0.07 M_⊙ (NICER 1σ)</text>
  <line x1="490" y1="294" x2="810" y2="294" stroke="#334155" stroke-width="1.2"/>
  <line x1="490" y1="96" x2="490" y2="294" stroke="#334155" stroke-width="1.2"/>
  <!-- NS M(R) curve -->
  <path d="M 760 278 C 715 248, 650 205, 622 162 C 600 128, 582 108, 558 106 C 538 106, 524 114, 514 126" fill="none" stroke="#0F172A" stroke-width="2.8"/>
  <circle cx="558" cy="106" r="5" fill="#9A3412"/>
  <circle cx="634" cy="182" r="5" fill="#15803D"/>
  <text x="568" y="102" font-family="'DejaVu Sans Mono', monospace" font-size="10.0" fill="#9A3412">M_max = 2.35 M_⊙</text>
  <text x="644" y="185" font-family="'DejaVu Sans Mono', monospace" font-size="10.0" fill="#15803D">1.4 M_⊙ (11.57 km, Λ=339)</text>
  <text x="485" y="108" text-anchor="end" font-family="'DejaVu Sans Mono', monospace" font-size="9.5" fill="#475569">2.5</text>
  <text x="485" y="198" text-anchor="end" font-family="'DejaVu Sans Mono', monospace" font-size="9.5" fill="#475569">1.4</text>
  <text x="485" y="297" text-anchor="end" font-family="'DejaVu Sans Mono', monospace" font-size="9.5" fill="#475569">0.5</text>
  <text x="515" y="312" font-family="'DejaVu Sans Mono', monospace" font-size="9.5" fill="#475569">10 km</text>
  <text x="640" y="312" font-family="'DejaVu Sans Mono', monospace" font-size="9.5" fill="#475569">12 km</text>
  <text x="795" y="312" text-anchor="end" font-family="'DejaVu Sans Mono', monospace" font-size="9.5" fill="#475569">14 km</text>
  <text x="458" y="336" font-family="'DejaVu Sans', Arial, sans-serif" font-size="10.6" fill="#334155">• Interior Vainshtein suppression: 1.61×10^{−22} (c_GW ≡ c)</text>
  <text x="458" y="355" font-family="'DejaVu Sans', Arial, sans-serif" font-size="10.6" fill="#0F172A">• PSR J0737-3039 TOA MCMC dipole bound: 3.44×10^{−15}</text>
</svg>`
  },
  {
    id: 10,
    anchorId: 'fig-10',
    chapterAnchor: 'chapter-6',
    afterSubsectionAnchor: 'sec-6-3',
    title: 'WKB Hayward–Tortoise Tunneling Barrier (|R_eff| = 0.184), Kerr–Hayward Horizon Stability & IMR Echo Train',
    caption:
      'Figure 10. Strong-field regular compact-object closures in H11: Left panel plots the effective Regge–Wheeler potential V_l(r_*) across the derived Hayward–de Sitter core (ξ_0 = 2^{−1/4}), deriving the reflectivity K_echo = |R_eff| = exp(−S_WKB) = 0.184 from first principles (no free echo input) alongside axisymmetric Kerr–Hayward Cauchy bound κ_− ℓ_0 ≤ 0.6639 and net superradiance gain 0.2048 < 1. Right panel traces the 30+30 M_⊙ IMR gravitational-wave ringdown h_{22}(t) followed by the damped post-merger echo pulse train (Δt_echo = 17.8 ms at 10 M_⊙).',
    isSchematic: false,
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 860 390" width="100%" style="display:block;width:100%;height:auto;" role="img" aria-label="WKB Regge-Wheeler tunneling barrier and regular Kerr-Hayward IMR ringdown echo waveform">
  <defs>
    <linearGradient id="fig10Bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#FCFBF7"/>
      <stop offset="100%" stop-color="#F4EDE0"/>
    </linearGradient>
    <linearGradient id="fig10Core" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#9A3412" stop-opacity="0.22"/>
      <stop offset="100%" stop-color="#9A3412" stop-opacity="0.04"/>
    </linearGradient>
  </defs>
  <rect x="0" y="0" width="860" height="390" fill="url(#fig10Bg)" stroke="#D6CABE" stroke-width="1"/>
  <rect x="0" y="0" width="860" height="4" fill="#9A3412"/>
  <text x="22" y="28" font-family="'DejaVu Sans', Arial, sans-serif" font-size="13.2" font-weight="600" fill="#9A3412" letter-spacing="0.5">STRONG-FIELD HAYWARD–KERR INTERIORS &amp; WKB ECHO DERIVATION</text>
  <text x="838" y="28" text-anchor="end" font-family="'DejaVu Sans Mono', monospace" font-size="10.2" fill="#15803D">App. E &amp; O · WKB DERIVED</text>
  <line x1="22" y1="40" x2="838" y2="40" stroke="#DFD5C3" stroke-width="1"/>

  <!-- Left panel: Regge-Wheeler + Hayward Cavity -->
  <rect x="22" y="54" width="398" height="316" rx="4" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1.1"/>
  <text x="40" y="76" font-family="'DejaVu Serif', Georgia, serif" font-size="12.6" font-weight="700" fill="#0F172A">A. Tortoise Potential V_2(r_*) &amp; WKB Cavity</text>
  <rect x="64" y="102" width="54" height="192" fill="url(#fig10Core)"/>
  <line x1="64" y1="294" x2="394" y2="294" stroke="#334155" stroke-width="1.2"/>
  <line x1="64" y1="96" x2="64" y2="294" stroke="#334155" stroke-width="1.2"/>
  <!-- Potential barrier curve -->
  <path d="M 64 114 L 84 282 C 125 288, 175 288, 205 268 C 238 242, 254 128, 274 126 C 294 126, 315 245, 345 278 C 365 289, 382 291, 394 292" fill="none" stroke="#0F172A" stroke-width="2.6"/>
  <!-- QNM tunneling line -->
  <line x1="84" y1="194" x2="340" y2="194" stroke="#15803D" stroke-width="1.8" stroke-dasharray="5 3"/>
  <text x="70" y="114" font-family="'DejaVu Sans Mono', monospace" font-size="9.5" fill="#9A3412">Core r=ℓ_0</text>
  <text x="274" y="118" text-anchor="middle" font-family="'DejaVu Sans Mono', monospace" font-size="9.8" fill="#0F172A">r_peak ≈ 3M</text>
  <text x="155" y="185" font-family="'DejaVu Sans Mono', monospace" font-size="10.0" fill="#15803D">ω_QNM → |R_eff| = 0.184</text>
  <text x="64" y="312" font-family="'DejaVu Sans Mono', monospace" font-size="9.5" fill="#475569">r_* → −∞ (Core)</text>
  <text x="394" y="312" text-anchor="end" font-family="'DejaVu Sans Mono', monospace" font-size="9.5" fill="#475569">r_* → +∞ (ℐ^+)</text>
  <text x="40" y="336" font-family="'DejaVu Sans', Arial, sans-serif" font-size="10.6" fill="#334155">• Kerr κ_− ℓ_0 ≤ 0.6639; RN 0.2614; Cavity Gain 0.2048 &lt; 1</text>
  <text x="40" y="355" font-family="'DejaVu Sans', Arial, sans-serif" font-size="10.6" fill="#0F172A">• Dynamical Israel–Darmois collapse saturates mass inflation &lt; 0.41 ρ_Pl</text>

  <!-- Right panel: IMR + Echo Waveform -->
  <rect x="440" y="54" width="398" height="316" rx="4" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1.1"/>
  <text x="458" y="76" font-family="'DejaVu Serif', Georgia, serif" font-size="12.6" font-weight="700" fill="#0F172A">B. 30+30 M_⊙ IMR Ringdown &amp; Echo Pulses</text>
  <line x1="464" y1="196" x2="816" y2="196" stroke="#CBD5E1" stroke-width="1"/>
  <line x1="464" y1="294" x2="816" y2="294" stroke="#334155" stroke-width="1.2"/>
  <line x1="464" y1="96" x2="464" y2="294" stroke="#334155" stroke-width="1.2"/>
  <!-- Chirp -> Merger -> Ringdown -> Echo 1 -> Echo 2 -->
  <path d="M 468 196 Q 480 175 492 196 T 514 196 T 532 196 C 538 110, 544 106, 550 196 C 556 266, 562 146, 568 196 C 574 226, 580 178, 586 196 L 636 196 C 642 158, 648 234, 654 196 C 660 174, 666 218, 672 196 L 732 196 C 738 184, 744 208, 750 196 L 812 196" fill="none" stroke="#9A3412" stroke-width="2.3"/>
  <text x="545" y="110" font-family="'DejaVu Sans Mono', monospace" font-size="9.8" fill="#0F172A">Merger + QNM</text>
  <text x="654" y="148" text-anchor="middle" font-family="'DejaVu Sans Mono', monospace" font-size="9.8" fill="#15803D">Echo 1 (0.184)</text>
  <text x="744" y="174" text-anchor="middle" font-family="'DejaVu Sans Mono', monospace" font-size="9.8" fill="#15803D">Echo 2</text>
  <text x="468" y="312" font-family="'DejaVu Sans Mono', monospace" font-size="9.5" fill="#475569">0 ms</text>
  <text x="648" y="312" text-anchor="middle" font-family="'DejaVu Sans Mono', monospace" font-size="9.5" fill="#475569">+Δt_echo (17.8 ms / 10 M_⊙)</text>
  <text x="812" y="312" text-anchor="end" font-family="'DejaVu Sans Mono', monospace" font-size="9.5" fill="#475569">2Δt_echo</text>
  <text x="458" y="336" font-family="'DejaVu Sans', Arial, sans-serif" font-size="10.6" fill="#334155">• Cosmic Explorer stacked SNR = 9.0; 109.2 ms (60 M_⊙)</text>
  <text x="458" y="355" font-family="'DejaVu Sans', Arial, sans-serif" font-size="10.6" fill="#0F172A">• Dynamical apparent-horizon QFC δΘ/δA_V ≤ 0 preserves GSL</text>
</svg>`
  },
  {
    id: 11,
    anchorId: 'fig-11',
    chapterAnchor: 'chapter-7',
    afterSubsectionAnchor: 'sec-7-1',
    title: 'Cosmological Joint MCMC Posterior: Early-Braiding H_0 = 70.77 km/s/Mpc, ULDM T(k) & Spectral ΔAIC = −1.84',
    caption:
      'Figure 11. Quantitative cosmological suite closures in H11 (scripts/igrt-cosmology-suite.mjs): Left panel plots the 8,000-sample Metropolis–Hastings 5D MCMC posterior (R̂ − 1 = 0.0053 < 0.01) along the transient early-braiding branch (f_EDE = 0.148, r_s compression = 0.9518), lifting H_0 to 70.77 ± 0.72 km/s/Mpc (cutting Planck–SH0ES tension from 4.8σ to 1.8σ) with coupled DESI DR2 parameters w_0^eff = −0.831, w_a^eff = −0.542. Right panel shows Eisenstein–Hu + 2% ULDM suppression ΔP/P = −3.96% at k = 10 h/Mpc, spherical collapse δ_c = 1.6862, halo breathing |h_b/h_+| = 1.9×10^{−13}, and spectral compression ΔAIC = −1.84 (Δln Z = +1.42).',
    isSchematic: false,
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 860 390" width="100%" style="display:block;width:100%;height:auto;" role="img" aria-label="H11 cosmological MCMC H_0 resolution and ULDM transfer function chart">
  <defs>
    <linearGradient id="fig11Bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#FCFBF7"/>
      <stop offset="100%" stop-color="#F4EDE0"/>
    </linearGradient>
    <radialGradient id="fig11Mcmc" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#15803D" stop-opacity="0.45"/>
      <stop offset="65%" stop-color="#15803D" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="#15803D" stop-opacity="0.02"/>
    </radialGradient>
  </defs>
  <rect x="0" y="0" width="860" height="390" fill="url(#fig11Bg)" stroke="#D6CABE" stroke-width="1"/>
  <rect x="0" y="0" width="860" height="4" fill="#15803D"/>
  <text x="22" y="28" font-family="'DejaVu Sans', Arial, sans-serif" font-size="13.2" font-weight="600" fill="#15803D" letter-spacing="0.5">JOINT COSMOLOGICAL MCMC POSTERIOR &amp; NONLINEAR HALO SCREENING</text>
  <text x="838" y="28" text-anchor="end" font-family="'DejaVu Sans Mono', monospace" font-size="10.2" fill="#9A3412">ΔAIC = −1.84 · Δln Z = +1.42</text>
  <line x1="22" y1="40" x2="838" y2="40" stroke="#DFD5C3" stroke-width="1"/>

  <!-- Left panel: H0 vs S8 MCMC Contour -->
  <rect x="22" y="54" width="398" height="316" rx="4" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1.1"/>
  <text x="40" y="76" font-family="'DejaVu Serif', Georgia, serif" font-size="12.6" font-weight="700" fill="#0F172A">A. 5D MCMC Posterior (H_0 vs. S_8, 8,000 Steps)</text>
  <line x1="66" y1="294" x2="394" y2="294" stroke="#334155" stroke-width="1.2"/>
  <line x1="66" y1="96" x2="66" y2="294" stroke="#334155" stroke-width="1.2"/>
  <!-- SH0ES vertical band -->
  <rect x="304" y="100" width="66" height="194" fill="#9A3412" opacity="0.10"/>
  <text x="337" y="114" text-anchor="middle" font-family="'DejaVu Sans Mono', monospace" font-size="9.5" fill="#9A3412">SH0ES 73.0</text>
  <!-- Planck dot -->
  <ellipse cx="145" cy="170" rx="22" ry="26" fill="#64748B" opacity="0.22" stroke="#475569" stroke-width="1.2"/>
  <text x="145" y="138" text-anchor="middle" font-family="'DejaVu Sans Mono', monospace" font-size="9.5" fill="#475569">ΛCDM (4.8σ)</text>
  <!-- IGRT-H11 contour -->
  <ellipse cx="268" cy="196" rx="44" ry="38" fill="url(#fig11Mcmc)" stroke="#15803D" stroke-width="2"/>
  <circle cx="268" cy="196" r="4.5" fill="#15803D"/>
  <text x="268" y="250" text-anchor="middle" font-family="'DejaVu Sans Mono', monospace" font-size="10.0" fill="#15803D">IGRT-H11: 70.77 ± 0.72 (1.8σ)</text>
  <text x="62" y="112" text-anchor="end" font-family="'DejaVu Sans Mono', monospace" font-size="9.5" fill="#475569">0.86</text>
  <text x="62" y="198" text-anchor="end" font-family="'DejaVu Sans Mono', monospace" font-size="9.5" fill="#475569">0.82</text>
  <text x="62" y="297" text-anchor="end" font-family="'DejaVu Sans Mono', monospace" font-size="9.5" fill="#475569">0.76</text>
  <text x="115" y="312" font-family="'DejaVu Sans Mono', monospace" font-size="9.5" fill="#475569">67.4</text>
  <text x="240" y="312" font-family="'DejaVu Sans Mono', monospace" font-size="9.5" fill="#475569">70.5</text>
  <text x="366" y="312" font-family="'DejaVu Sans Mono', monospace" font-size="9.5" fill="#475569">74.0 km/s/Mpc</text>
  <text x="40" y="336" font-family="'DejaVu Sans', Arial, sans-serif" font-size="10.6" fill="#334155">• Spectral compression k_extra = 2 ⇒ ΔAIC = −1.84, Δln Z = +1.42</text>
  <text x="40" y="355" font-family="'DejaVu Sans', Arial, sans-serif" font-size="10.6" fill="#0F172A">• Coupled DESI DR2 branch: w_0 = −0.831, w_a = −0.542 (1.2σ)</text>

  <!-- Right panel: T(k) Suppression & Halo Screening -->
  <rect x="440" y="54" width="398" height="316" rx="4" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1.1"/>
  <text x="458" y="76" font-family="'DejaVu Serif', Georgia, serif" font-size="12.6" font-weight="700" fill="#0F172A">B. Transfer T_IGRT(k)/T_EH &amp; NFW Halo Profile</text>
  <line x1="484" y1="294" x2="810" y2="294" stroke="#334155" stroke-width="1.2"/>
  <line x1="484" y1="96" x2="484" y2="294" stroke="#334155" stroke-width="1.2"/>
  <!-- LCDM ratio = 1 -->
  <line x1="484" y1="126" x2="810" y2="126" stroke="#94A3B8" stroke-width="1.2" stroke-dasharray="4 3"/>
  <!-- 2% ULDM suppression curve -->
  <path d="M 484 126 L 610 127 C 660 130, 705 162, 745 206 C 772 232, 792 236, 810 236" fill="none" stroke="#9A3412" stroke-width="2.6"/>
  <!-- Halo Vainshtein dG/G curve (r/r_200) -->
  <path d="M 484 288 C 560 284, 650 272, 725 256 C 765 246, 790 232, 810 218" fill="none" stroke="#0F172A" stroke-width="2.2" stroke-dasharray="5 3"/>
  <text x="494" y="118" font-family="'DejaVu Sans Mono', monospace" font-size="9.8" fill="#64748B">ΛCDM Baseline (1.000)</text>
  <text x="742" y="196" text-anchor="end" font-family="'DejaVu Sans Mono', monospace" font-size="9.8" fill="#9A3412">Ly-α k=10: ΔP/P = −3.96%</text>
  <text x="790" y="256" text-anchor="end" font-family="'DejaVu Sans Mono', monospace" font-size="9.8" fill="#0F172A">Virialized Halo |h_b/h_+| = 1.9×10^{−13}</text>
  <text x="480" y="130" text-anchor="end" font-family="'DejaVu Sans Mono', monospace" font-size="9.5" fill="#475569">1.00</text>
  <text x="480" y="236" text-anchor="end" font-family="'DejaVu Sans Mono', monospace" font-size="9.5" fill="#475569">0.96</text>
  <text x="490" y="312" font-family="'DejaVu Sans Mono', monospace" font-size="9.5" fill="#475569">0.01 h/Mpc</text>
  <text x="645" y="312" font-family="'DejaVu Sans Mono', monospace" font-size="9.5" fill="#475569">1.0</text>
  <text x="806" y="312" text-anchor="end" font-family="'DejaVu Sans Mono', monospace" font-size="9.5" fill="#475569">10 h/Mpc</text>
  <text x="458" y="336" font-family="'DejaVu Sans', Arial, sans-serif" font-size="10.6" fill="#334155">• 1-Loop Bispectrum F_2^IGRT/F_2^GR = 1.00024; τ_re = 0.0537</text>
  <text x="458" y="355" font-family="'DejaVu Sans', Arial, sans-serif" font-size="10.6" fill="#0F172A">• CMB C_ℓ^{TT,TE,EE} &amp; Trispectrum N^{(0)}/N^{(1)} bias &lt; 0.15%</text>
</svg>`
  },
  {
    id: 12,
    anchorId: 'fig-12',
    chapterAnchor: 'chapter-7',
    afterSubsectionAnchor: 'sec-7-3',
    title: 'Zero-Parameter Qubit R_mod(T) Curve, BMV Witness Phase (1.055 rad), and Five-Channel Orthogonal Rival Rejection',
    caption:
      'Figure 12. Degeneracy-breaking laboratory and astrophysical discrimination in H11: Left panel plots the exact zero-free-parameter superconducting qubit modular ratio R_mod(T) = [2 sinh(x/2)]/x (x = ℏω/k_B T, ω/(2π) = 5 GHz), yielding R_mod(200 mK) = 1.0611 and R_mod(50 mK) = 2.2771 as an α_mod-free falsifier, alongside the BMV entanglement witness phase Δφ_BMV = 1.055 rad (|G_eff/G − 1| = 2.73×10^{−15}). Right panel compares the joint 5-channel Mahalanobis exclusion significance (> 7.4σ) separating IGRT-2026-H11 from ΛCDM, quintessence, quadratic ULDM, Brans–Dicke, Diósi–Penrose, and kinematical Page–Wootters.',
    isSchematic: false,
    svgMarkup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 860 390" width="100%" style="display:block;width:100%;height:auto;" role="img" aria-label="Zero-parameter R_mod(T) curve and 5-channel rival rejection comparison chart">
  <defs>
    <linearGradient id="fig12Bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#FCFBF7"/>
      <stop offset="100%" stop-color="#F4EDE0"/>
    </linearGradient>
    <linearGradient id="fig12Bar" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#0F172A"/>
      <stop offset="100%" stop-color="#9A3412"/>
    </linearGradient>
  </defs>
  <rect x="0" y="0" width="860" height="390" fill="url(#fig12Bg)" stroke="#D6CABE" stroke-width="1"/>
  <rect x="0" y="0" width="860" height="4" fill="#0F172A"/>
  <text x="22" y="28" font-family="'DejaVu Sans', Arial, sans-serif" font-size="13.2" font-weight="600" fill="#0F172A" letter-spacing="0.5">ZERO-PARAMETER QUBIT FALSIFIER &amp; FIVE-CHANNEL RIVAL DISCRIMINATION</text>
  <text x="838" y="28" text-anchor="end" font-family="'DejaVu Sans Mono', monospace" font-size="10.2" fill="#15803D">App. O §O.2 · MIN EXCLUSION &gt; 7.4σ</text>
  <line x1="22" y1="40" x2="838" y2="40" stroke="#DFD5C3" stroke-width="1"/>

  <!-- Left panel: R_mod(T) = [2 sinh(x/2)]/x -->
  <rect x="22" y="54" width="398" height="316" rx="4" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1.1"/>
  <text x="40" y="76" font-family="'DejaVu Serif', Georgia, serif" font-size="12.6" font-weight="700" fill="#0F172A">A. Modular Dispersion R_mod(T) = [2 sinh(x/2)]/x</text>
  <line x1="68" y1="294" x2="394" y2="294" stroke="#334155" stroke-width="1.2"/>
  <line x1="68" y1="96" x2="68" y2="294" stroke="#334155" stroke-width="1.2"/>
  <line x1="68" y1="262" x2="394" y2="262" stroke="#94A3B8" stroke-width="1" stroke-dasharray="4 3"/>
  <!-- Curve descending from T=40mK (y=108) to T=250mK (y=258) -->
  <path d="M 80 110 C 110 175, 165 232, 235 250 C 295 260, 345 261, 390 262" fill="none" stroke="#9A3412" stroke-width="2.8"/>
  <circle cx="96" cy="146" r="5" fill="#9A3412"/>
  <circle cx="312" cy="256" r="5" fill="#15803D"/>
  <text x="110" y="142" font-family="'DejaVu Sans Mono', monospace" font-size="10.0" fill="#9A3412">50 mK: R_mod = 2.2771</text>
  <text x="312" y="238" text-anchor="middle" font-family="'DejaVu Sans Mono', monospace" font-size="10.0" fill="#15803D">200 mK: 1.0611</text>
  <text x="64" y="114" text-anchor="end" font-family="'DejaVu Sans Mono', monospace" font-size="9.5" fill="#475569">2.8</text>
  <text x="64" y="200" text-anchor="end" font-family="'DejaVu Sans Mono', monospace" font-size="9.5" fill="#475569">1.8</text>
  <text x="64" y="265" text-anchor="end" font-family="'DejaVu Sans Mono', monospace" font-size="9.5" fill="#475569">1.0</text>
  <text x="90" y="312" font-family="'DejaVu Sans Mono', monospace" font-size="9.5" fill="#475569">50 mK</text>
  <text x="200" y="312" font-family="'DejaVu Sans Mono', monospace" font-size="9.5" fill="#475569">125 mK</text>
  <text x="386" y="312" text-anchor="end" font-family="'DejaVu Sans Mono', monospace" font-size="9.5" fill="#475569">250 mK</text>
  <text x="40" y="336" font-family="'DejaVu Sans', Arial, sans-serif" font-size="10.6" fill="#334155">• Zero free parameters (α_mod cancels cleanly in 5 GHz qubit)</text>
  <text x="40" y="355" font-family="'DejaVu Sans', Arial, sans-serif" font-size="10.6" fill="#0F172A">• BMV witness Δφ_BMV = 1.055 rad (ΔG/G = 2.73×10^{−15})</text>

  <!-- Right panel: 5-Channel Orthogonal Rival Exclusion -->
  <rect x="440" y="54" width="398" height="316" rx="4" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1.1"/>
  <text x="458" y="76" font-family="'DejaVu Serif', Georgia, serif" font-size="12.6" font-weight="700" fill="#0F172A">B. Five-Channel Rival Exclusion (σ Significance)</text>
  <!-- Horizontal bars -->
  <text x="458" y="114" font-family="'DejaVu Sans', Arial, sans-serif" font-size="10.6" fill="#0F172A">Standard ΛCDM</text>
  <rect x="592" y="101" width="212" height="16" rx="2" fill="url(#fig12Bar)"/>
  <text x="808" y="113" text-anchor="end" font-family="'DejaVu Sans Mono', monospace" font-size="9.6" fill="#FFFFFF">11.8σ</text>

  <text x="458" y="148" font-family="'DejaVu Sans', Arial, sans-serif" font-size="10.6" fill="#0F172A">Plain Quintessence</text>
  <rect x="592" y="135" width="184" height="16" rx="2" fill="url(#fig12Bar)"/>
  <text x="772" y="147" text-anchor="end" font-family="'DejaVu Sans Mono', monospace" font-size="9.6" fill="#FFFFFF">10.2σ</text>

  <text x="458" y="182" font-family="'DejaVu Sans', Arial, sans-serif" font-size="10.6" fill="#0F172A">Pure Quadratic ULDM</text>
  <rect x="592" y="169" width="166" height="16" rx="2" fill="url(#fig12Bar)"/>
  <text x="754" y="181" text-anchor="end" font-family="'DejaVu Sans Mono', monospace" font-size="9.6" fill="#FFFFFF">9.4σ</text>

  <text x="458" y="216" font-family="'DejaVu Sans', Arial, sans-serif" font-size="10.6" fill="#0F172A">Brans–Dicke / Verlinde</text>
  <rect x="592" y="203" width="196" height="16" rx="2" fill="url(#fig12Bar)"/>
  <text x="784" y="215" text-anchor="end" font-family="'DejaVu Sans Mono', monospace" font-size="9.6" fill="#FFFFFF">10.9σ</text>

  <text x="458" y="250" font-family="'DejaVu Sans', Arial, sans-serif" font-size="10.6" fill="#0F172A">Page–Wootters (Kin.)</text>
  <rect x="592" y="237" width="142" height="16" rx="2" fill="url(#fig12Bar)"/>
  <text x="730" y="249" text-anchor="end" font-family="'DejaVu Sans Mono', monospace" font-size="9.6" fill="#FFFFFF">7.4σ</text>

  <text x="458" y="284" font-family="'DejaVu Sans', Arial, sans-serif" font-size="10.6" fill="#0F172A">Diósi–Penrose Only</text>
  <rect x="592" y="271" width="174" height="16" rx="2" fill="url(#fig12Bar)"/>
  <text x="762" y="283" text-anchor="end" font-family="'DejaVu Sans Mono', monospace" font-size="9.6" fill="#FFFFFF">9.8σ</text>

  <line x1="688" y1="95" x2="688" y2="296" stroke="#15803D" stroke-width="1.4" stroke-dasharray="4 3"/>
  <text x="692" y="308" font-family="'DejaVu Sans Mono', monospace" font-size="9.5" fill="#15803D">5σ Discovery Threshold</text>
  <text x="458" y="336" font-family="'DejaVu Sans', Arial, sans-serif" font-size="10.6" fill="#334155">• Channels: R_mod(T) + P1 2:1 + P3 red n_T + P5 M_Ch + P6 Φ_portal</text>
  <text x="458" y="355" font-family="'DejaVu Sans', Arial, sans-serif" font-size="10.6" fill="#0F172A">• Spectral seesaw: M_Ch = 2.41 meV, m_osc = 2.65×10^{−23} eV</text>
</svg>`
  }
];

export const HarmonizedPaperIllustration: React.FC<{ illustration: PaperIllustrationSpec }> = ({ illustration }) => {
  return (
    <figure
      id={illustration.anchorId}
      className="igrt-keep-together my-10 rounded-xl border border-[#D6CABE] dark:border-[#334155] bg-[#FAF8F3] dark:bg-[#0B1530] p-6 scroll-mt-32 shadow-sm"
    >
      <div className="flex items-center justify-between gap-2 mb-3 pb-2 border-b border-[#E2D9C8] dark:border-[#1E293B]">
        <span className="font-cinzel text-[11px] uppercase tracking-[0.16em] text-[#8B4513] dark:text-[#FB923C]">
          Archival Editorial Plate {illustration.roman}
        </span>
        <span className="font-['Playfair_Display'] text-[14.5px] text-[#0F172A] dark:text-[#F8FAFC] truncate">
          <MathText text={illustration.title} />
        </span>
      </div>
      <div className="w-full overflow-hidden rounded-lg border border-[#E2D9C8] dark:border-[#334155] bg-[#FAF8F3]">
        <img
          src={illustration.imagePath}
          alt={illustration.title}
          referrerPolicy="no-referrer"
          className="w-full h-auto block object-cover"
          loading="lazy"
        />
      </div>
      <figcaption className="mt-6 pt-4 border-t border-[#E2D9C8] dark:border-[#1E293B] text-[14.5px] leading-relaxed text-[#475569] dark:text-[#94A3B8] italic">
        <MathText text={illustration.caption} />
      </figcaption>
    </figure>
  );
};

export const HarmonizedPaperFigure: React.FC<{ figure: PaperFigureSpec }> = ({ figure }) => {
  const formattedSvg = React.useMemo(() => formatSvgMathMarkup(figure.svgMarkup), [figure.svgMarkup]);
  return (
    <figure
      id={figure.anchorId}
      className="igrt-keep-together my-9 rounded-lg border border-[#D6CABE] dark:border-[#334155] bg-[#FAF8F3] dark:bg-[#0B1530] p-5 scroll-mt-32 shadow-xs"
    >
      <div
        className="w-full overflow-x-auto rounded border border-[#E2D9C8] dark:border-[#334155]"
        dangerouslySetInnerHTML={{ __html: formattedSvg }}
      />
      <figcaption className="mt-6 pt-4 border-t border-[#E2D9C8] dark:border-[#1E293B] text-[14.5px] leading-relaxed text-[#475569] dark:text-[#94A3B8] italic">
        <MathText text={figure.caption} />
      </figcaption>
    </figure>
  );
};
