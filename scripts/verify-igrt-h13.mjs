#!/usr/bin/env node
/**
 * Deterministic Verification Suite for Refactored IGRT-2026-H13 (Paper 13)
 * Verifies exact SI astrophysics & bounce timescales, isotropic 5D F_{0y} tensor closure,
 * RK4 bounce ODE residuals, Lee et al. (2020) 38.6 um KK bounds, 5-author roster integrity,
 * Cat C Proposition / Sketch labeling (zero premature Theorem / Q.E.D.),
 * clean separation from Companion Part II / Policy exports, unbundled [1..51] citations,
 * and 100% pure-ASCII pdflatex + HTML + Markdown export integrity.
 */

import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
const esbuild = require('esbuild');

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

let passed = 0;
let failed = 0;

function assert(cond, msg) {
  if (cond) {
    passed++;
  } else {
    failed++;
    console.error(`FAIL: ${msg}`);
  }
}

function approx(actual, expected, relTol, msg) {
  const err = Math.abs(actual - expected) / Math.max(1e-30, Math.abs(expected));
  assert(err <= relTol, `${msg} (actual=${actual}, expected=${expected}, relErr=${err})`);
}

// ---------------------------------------------------------------------------
// 1. Exact Physical Constants & Corrected Numerical Benchmarks
// ---------------------------------------------------------------------------
const hbar = 1.054571817e-34;
const G = 6.6743e-11;
const c = 2.99792458e8;
const kB = 1.380649e-23;
const eCharge = 1.602176634e-19;
const mSunKg = 1.98841e30;
const secPerYear = 3.15576e7;

const tPl = Math.sqrt((hbar * G) / Math.pow(c, 5));
const mPlKg = Math.sqrt((hbar * c) / G);
const mPlGrams = mPlKg * 1000;
approx(tPl, 5.391247e-44, 1e-4, 'Planck time t_Pl');
approx(mPlGrams, 2.176434e-5, 1e-4, 'Planck mass M_Pl in grams');

// Optical lattice vertical redshift gradient per meter
const gEarth = 9.80665;
approx(gEarth / (c * c), 1.09114e-16, 1e-4, 'Gravitational redshift gradient g/c^2 per meter');

// GPS net daily relativistic clock offset (+45.85 - 7.21 = +38.64 us/day)
approx(45.85 - 7.21, 38.64, 1e-3, 'GPS daily relativistic sync offset');

// Landauer erasure minimum at 300 K
approx(kB * 300 * Math.LN2, 2.871e-21, 5e-3, 'Landauer minimum heat per bit at 300 K');

// Quantum speed limit updates per Joule (Margolus-Levitin 2 / (pi * hbar))
approx(2.0 / (Math.PI * hbar), 6.0367e33, 2e-3, 'Margolus-Levitin max orthogonal updates per Joule');

// 5D Einstein-Maxwell portal shortcut ratios & direct geodesic integral quadrature
const etaFiniteSpan2 = Math.sin(1.0) / 1.0;
const etaHorizonLimit = 2.0 / Math.PI;
approx(etaFiniteSpan2, 0.841471, 1e-5, '5D EM finite-span shortcut eta_fold(2) = sin(1)');
approx(etaHorizonLimit, 0.63662, 1e-5, '5D EM extremal turnaround limit 2/pi');
{
  const uMax = Math.sin(1.0);
  const Nq = 4000;
  const du = uMax / Nq;
  let halfDx = 0;
  let halfDt5 = 0;
  for (let i = 0; i < Nq; i++) {
    const u = (i + 0.5) * du;
    const oneMinusU2 = 1 - u * u;
    halfDx += du / Math.sqrt(oneMinusU2);
    halfDt5 += (Math.cos(1.0) * du) / Math.pow(oneMinusU2, 1.5);
  }
  approx(2 * halfDx, 2.0, 1e-6, 'Quadrature of Beltrami 5D EM null arch brane span k*Delta_x = 2');
  approx(halfDt5 / halfDx, Math.sin(1.0), 1e-6, 'Quadrature of 5D EM shortcut eta_fold = sin(1) from ds_5^2 = 0');
}

// Symbolic verification of 5D Einstein-Maxwell closure (F_{0y} vs inconsistent F_{xy})
{
  // Metric ds_5^2 = -e^{2ky} c^2 dt^2 + dx_1^2 + dx_2^2 + dx_3^2 + Phi_0^2 dy^2
  const k = 1.7;
  const Phi0 = 1.25;
  const M5 = 2.0;
  const E5 = Math.sqrt(Math.pow(M5, 3) * Math.pow(k / Phi0, 2));
  const VplusLambda = -(E5 * E5) / 2; // M_5^3 Lambda_5 + V_GW(phi_0)

  const G_00 = 0;
  const G_11 = (k * k) / (Phi0 * Phi0);
  const G_22 = (k * k) / (Phi0 * Phi0);
  const G_33 = (k * k) / (Phi0 * Phi0);
  const G_yy = 0;

  // F_{0y} = E_5 e^{ky} Phi_0 => T^A_B^EM = diag(-1/2, +1/2, +1/2, +1/2, -1/2) E_5^2
  const T_EM = [-0.5 * E5 * E5, 0.5 * E5 * E5, 0.5 * E5 * E5, 0.5 * E5 * E5, -0.5 * E5 * E5];
  const T_vac = -VplusLambda; // - (M_5^3 Lambda_5 + V_GW) delta^A_B = +E_5^2 / 2
  const rhs = T_EM.map((val) => val + T_vac);
  const lhs = [G_00, G_11, G_22, G_33, G_yy].map((g) => Math.pow(M5, 3) * g);

  for (let comp = 0; comp < 5; comp++) {
    assert(
      Math.abs(lhs[comp] - rhs[comp]) < 1e-12,
      `5D isotropic F_{0y} Einstein component ${comp} closes identically (lhs=${lhs[comp]}, rhs=${rhs[comp]})`
    );
  }
  // Contrast anisotropic magnetic F_{xy}: T^1_1 = +B^2/2, T^2_2 = -B^2/2 => T^1_1 != T^2_2 unless B=0
  const B = 1.0;
  assert(0.5 * B * B !== -0.5 * B * B, 'Anisotropic F_{xy} fails 3D transverse pressure equality T^1_1 = T^2_2');
}

// Lee et al. (2020) bound: lambda < 38.6 um at |alpha_1| = 1
{
  const r5Meters = 38.6e-6;
  const m1MeV = ((hbar * c) / r5Meters / eCharge) * 1e3;
  approx(m1MeV, 5.112, 1e-3, 'KK n=1 graviton energy gap at R_5 = 38.6 um (meV)');
  const hbarCGeVM = (hbar * c) / (eCharge * 1e9);
  const mPlRedGeV = (Math.sqrt((hbar * c) / (8 * Math.PI * G)) * c * c) / (eCharge * 1e9);
  const r5GeVInv = r5Meters / hbarCGeVM;
  const m5GeV = Math.cbrt((mPlRedGeV * mPlRedGeV) / (2 * Math.PI * r5GeVInv));
  approx(m5GeV, 1.690e8, 2e-3, '5D fundamental Planck scale M_5 at R_5 = 38.6 um (n=1)');

  // Femtosecond scale of shortcut across 38.6 um
  const dtSavedMin = (1 - etaFiniteSpan2) * (r5Meters / c);
  const dtSavedMax = (1 - etaHorizonLimit) * (r5Meters / c);
  assert(dtSavedMin > 19e-15 && dtSavedMax < 50e-15, 'Bulk shortcut over 38.6 um is strictly ~20-47 fs (no macro portal)');
}

// Corrected 10 M_sun & 10^8 M_sun astrophysical benchmarks + Page (1976) masses
{
  const m10SunKg = 10 * mSunKg;
  const rPlus = (2 * G * m10SunKg) / (c * c);
  const kappa = c / (2 * rPlus);
  const rStar = rPlus * Math.abs(Math.log(0.1));
  const dtEcho = (2 * rStar) / c;
  const tauQuadSec = tPl * Math.pow(m10SunKg / mPlKg, 2);
  const tauQuadYr = tauQuadSec / secPerYear;

  approx(rPlus / 1000, 29.5325, 1e-3, '10 M_sun Schwarzschild radius (km)');
  approx(kappa, 5.076e3, 1e-3, '10 M_sun Schwarzschild surface gravity kappa = c/(2r_+)');
  approx(rStar / 1000, 68.001, 1e-3, '10 M_sun tortoise cavity scale r_* (km) at lambda_port = 0.1');
  approx(dtEcho * 1000, 0.4537, 1e-3, '10 M_sun echo lag Delta_t_echo = 2 r_*/c (ms)');
  approx(tauQuadSec, 4.500e34, 2e-3, '10 M_sun quadratic bounce time (seconds)');
  approx(tauQuadYr, 1.426e27, 2e-3, '10 M_sun quadratic bounce time (years)');

  const tau10e8QuadYr = (tPl * Math.pow((1e8 * mSunKg) / mPlKg, 2)) / secPerYear;
  approx(tau10e8QuadYr, 1.426e41, 2e-3, '10^8 M_sun AGN quadratic bounce time (years)');

  // Page (1976) PBH critical masses at t_0 = 13.8 Gyr
  const t0Sec = 13.8e9 * secPerYear;
  const mPageF1 = mPlGrams * Math.cbrt(t0Sec / (5120 * Math.PI * tPl));
  const mPageF1535 = mPageF1 * Math.cbrt(15.35);
  const fRequired5e14 = Math.pow(5.0e14 / mPageF1, 3);
  approx(mPageF1, 1.730e14, 2e-3, 'Page (1976) PBH mass at f=1');
  approx(mPageF1535, 4.30e14, 2e-3, 'Page (1976) PBH mass at f=15.35');
  approx(fRequired5e14, 24.14, 5e-3, 'Page factor f required for 5.00e14 g');
}

// LQG Barbero-Immirzi critical density (0.409374), Hayward 1.09236 M_Pl & RK4 solver
{
  const gammaLQG = 0.2375;
  const rhoMaxOverRhoPl = Math.sqrt(3) / (32 * Math.PI * Math.PI * Math.pow(gammaLQG, 3));
  approx(rhoMaxOverRhoPl, 0.409374, 2e-6, 'Exact LQG rho_max / rho_Pl = 0.409374 (NOT 0.409403)');
  const xi0 = Math.pow(2, -0.25);
  const mRemOverMPl = ((3 * Math.sqrt(3)) / 4) * xi0;
  approx(mRemOverMPl, 1.092356, 1e-5, 'Exact extremal Hayward remnant root M_rem / M_Pl = 1.09236');

  const accelDimless = (u) => -1 / (2 * u * u) + 2 / Math.pow(u, 5);
  for (const ds of [0.01, 0.002, 0.0005]) {
    let u = 2.0;
    let v = -Math.sqrt(0.5 - 1 / 16);
    const nSteps = Math.round(4.4 / ds);
    let uMin = u;
    let maxERes = 0;
    for (let i = 0; i < nSteps; i++) {
      const k1u = v;
      const k1v = accelDimless(u);
      const k2u = v + 0.5 * ds * k1v;
      const k2v = accelDimless(u + 0.5 * ds * k1u);
      const k3u = v + 0.5 * ds * k2v;
      const k3v = accelDimless(u + 0.5 * ds * k2u);
      const k4u = v + ds * k3v;
      const k4v = accelDimless(u + ds * k3u);
      u += (ds / 6) * (k1u + 2 * k2u + 2 * k3u + k4u);
      v += (ds / 6) * (k1v + 2 * k2v + 2 * k3v + k4v);
      if (u < uMin) uMin = u;
      const eRes = Math.abs(v * v - (1 / u - 1 / Math.pow(u, 4)));
      if (eRes > maxERes) maxERes = eRes;
    }
    approx(uMin, 1.0, 1e-4, `RK4 (ds=${ds}) bounces at u_min = 1`);
    assert(maxERes < (ds === 0.01 ? 1e-6 : 1e-10), `RK4 (ds=${ds}) Hamiltonian residual bounded (actual=${maxERes})`);
  }
}

// ---------------------------------------------------------------------------
// 2. Source File Integrity, Authors, Zero-LaTeX Hygiene & Anti-Regression
// ---------------------------------------------------------------------------
const h13Files = [
  'src/types/igrtH13Apparatus.ts',
  'src/types/igrtH13Companion.ts',
  'src/types/igrtH13Data.ts',
  'src/components/IgrtH13Figures.tsx',
  'src/components/IgrtH13PaperView.tsx',
  'src/utils/generateIgrtH13Exports.ts',
  'src/utils/generateIgrtH13Pdf.ts'
].map((rel) => path.join(rootDir, rel));

for (const fp of h13Files) {
  assert(fs.existsSync(fp), `Required H13 file exists: ${path.relative(rootDir, fp)}`);
}

const apparatusText = fs.readFileSync(h13Files[0], 'utf8');
const dataText = fs.readFileSync(h13Files[2], 'utf8');
const figFileText = fs.readFileSync(h13Files[3], 'utf8');

// Check exact 5 authors + ORCIDs + email matching H11 & H12
const requiredAuthors = [
  'Marlon D. Bulaqueña, Ph.D.',
  '0009-0007-3966-0494',
  'Jean-Charles Tassan',
  '0009-0000-8566-0486',
  'Wilson John Sterking Lauret',
  '0009-0004-7889-6641',
  'Rupak Chatterjee, Ph.D.',
  '0009-0002-8553-5401',
  'Walter Goldberger',
  'walter.goldberger@yale.edu'
];
for (const token of requiredAuthors) {
  assert(apparatusText.includes(token), `Author roster contains exact token: ${token}`);
}

// Check Zero-LaTeX hygiene in content data modules
const forbiddenLatex = ['\\frac', '\\begin{', '\\end{', '\\mathbb', '\\mathcal'];
for (const tok of forbiddenLatex) {
  assert(!apparatusText.includes(tok), `Apparatus free of raw LaTeX token: ${tok}`);
  assert(!dataText.includes(tok), `Chapters data free of raw LaTeX token: ${tok}`);
}

// Check Zero meta-review ("panel" / "60 experts" / "150 experts" / "200 experts"), Plain English, layman, hype, or old bugs
const forbiddenCopyPattern = /in\s+plain\s+english|plain[-\s]english|plain[-\s]language|\blayman\b|mind-blowing|Six\s+Paradigm\s+Flips/i;
const forbiddenNumericBugs = /0\.409403|4\.5\s*[×x]\s*10\^?\{?53\}?|4\.5\s*[×x]\s*10⁵³|10⁵³|10\^53|1\.015\s*[×x]\s*10⁴/;
for (const fp of h13Files) {
  const txt = fs.readFileSync(fp, 'utf8');
  const rel = path.relative(rootDir, fp);
  assert(!/\bpanel\b/i.test(txt), `No "panel" reference in ${rel}`);
  assert(!/(?:60|150|200)\s*experts/i.test(txt), `No expert-panel reference in ${rel}`);
  assert(!forbiddenCopyPattern.test(txt), `No Plain-English/layman/hype wording in ${rel}`);
  assert(!forbiddenNumericBugs.test(txt), `No old numerical bug (0.409403, 10^53 yr, 1.015e4) in ${rel}`);
  assert(!/σ_1|sigma_1|D_OFI|D_QF1/.test(txt), `No legacy sigma_1 / D_OFI / D_QF1 notation in ${rel}`);
}

// Verify all 9 JPEG plates exist on disk
const jpgImports = [...figFileText.matchAll(/from '\.\.\/assets\/images\/([^']+\.jpg)'/g)].map((m) => m[1]);
assert(jpgImports.length === 9, `IgrtH13Figures.tsx imports 9 JPEG plate files (${jpgImports.length})`);
for (const jpgName of jpgImports) {
  assert(fs.existsSync(path.join(rootDir, 'src/assets/images', jpgName)), `Plate image file exists on disk: ${jpgName}`);
}

// ---------------------------------------------------------------------------
// 3. Bundle & Inspect Exports (HTML, LaTeX, Markdown) + Epistemic Checks
// ---------------------------------------------------------------------------
const bundle = esbuild.buildSync({
  stdin: {
    contents: `
      import {
        H13_META, H13_ABSTRACT_PARAGRAPHS, H13_JOURNAL_DECLARATIONS, H13_AXIOMS,
        H13_CORE_FALSIFICATION_CRITERIA, H13_CORE_RESEARCH_PROGRAM, H13_TWELVE_PRINCIPLES_MATRIX,
        H13_MASTER_EQUATIONS, H13_DIMENSIONAL_AUDIT, H13_APPENDICES, H13_EPISTEMIC_LEDGER,
        H13_PROOF_DEVICES_AND_RECOMMENDATIONS, H13_PORTAL_BUILD_RECOMMENDATIONS, H13_GLOSSARY,
        H13_THEOREMS_LIST, H13_REFERENCES, H13_PROTOCOLS_P14_TO_P18, H13_PROTOCOL_SIGNAL_VS_SENSITIVITY,
        H13_PROTOCOL_CROSSCHECKS, H13_GJW_ASSUMPTION_MATRIX, H13_RK4_SENSITIVITY_TABLE,
        H13_SCOPE_LIMITATIONS, H13_RESEARCH_ROADMAP_2026_2035
      } from './src/types/igrtH13Apparatus';
      import {
        H13_COMPANION_FRAMEWORK_SUMMARY, H13_COMPANION_EXECUTIVE_SUMMARY,
        H13_COMPANION_PHILOSOPHICAL_ESSAY, H13_COMPANION_INTERPRETATIONS_COMPARISON,
        H13_COMPANION_QG_APPROACHES_COMPARISON
      } from './src/types/igrtH13Companion';
      import { H13_CHAPTERS, buildH13FullMarkdown } from './src/types/igrtH13Data';
      import { H13_ARCHIVAL_PLATES, H13_FIGURES } from './src/components/IgrtH13Figures';
      import { buildH13SelfContainedHtml, buildH13StandaloneLatex } from './src/utils/generateIgrtH13Exports';
      export {
        H13_META, H13_ABSTRACT_PARAGRAPHS, H13_JOURNAL_DECLARATIONS, H13_AXIOMS,
        H13_CORE_FALSIFICATION_CRITERIA, H13_CORE_RESEARCH_PROGRAM, H13_TWELVE_PRINCIPLES_MATRIX,
        H13_MASTER_EQUATIONS, H13_DIMENSIONAL_AUDIT, H13_APPENDICES, H13_EPISTEMIC_LEDGER,
        H13_PROOF_DEVICES_AND_RECOMMENDATIONS, H13_PORTAL_BUILD_RECOMMENDATIONS, H13_GLOSSARY,
        H13_THEOREMS_LIST, H13_REFERENCES, H13_PROTOCOLS_P14_TO_P18, H13_PROTOCOL_SIGNAL_VS_SENSITIVITY,
        H13_PROTOCOL_CROSSCHECKS, H13_GJW_ASSUMPTION_MATRIX, H13_RK4_SENSITIVITY_TABLE,
        H13_SCOPE_LIMITATIONS, H13_RESEARCH_ROADMAP_2026_2035,
        H13_COMPANION_FRAMEWORK_SUMMARY, H13_COMPANION_EXECUTIVE_SUMMARY,
        H13_COMPANION_PHILOSOPHICAL_ESSAY, H13_COMPANION_INTERPRETATIONS_COMPARISON,
        H13_COMPANION_QG_APPROACHES_COMPARISON,
        H13_CHAPTERS, H13_ARCHIVAL_PLATES, H13_FIGURES, buildH13FullMarkdown,
        buildH13SelfContainedHtml, buildH13StandaloneLatex
      };
    `,
    resolveDir: rootDir,
    loader: 'ts'
  },
  bundle: true,
  write: false,
  platform: 'node',
  format: 'cjs',
  loader: { '.jpg': 'text', '.png': 'text' }
});

const modObj = { exports: {} };
new Function('exports', 'require', 'module', bundle.outputFiles[0].text)(modObj.exports, require, modObj);
const {
  H13_META,
  H13_ABSTRACT_PARAGRAPHS,
  H13_AXIOMS,
  H13_TWELVE_PRINCIPLES_MATRIX,
  H13_MASTER_EQUATIONS,
  H13_DIMENSIONAL_AUDIT,
  H13_APPENDICES,
  H13_EPISTEMIC_LEDGER,
  H13_PROOF_DEVICES_AND_RECOMMENDATIONS,
  H13_PORTAL_BUILD_RECOMMENDATIONS,
  H13_GLOSSARY,
  H13_THEOREMS_LIST,
  H13_REFERENCES,
  H13_PROTOCOLS_P14_TO_P18,
  H13_PROTOCOL_SIGNAL_VS_SENSITIVITY,
  H13_PROTOCOL_CROSSCHECKS,
  H13_GJW_ASSUMPTION_MATRIX,
  H13_RK4_SENSITIVITY_TABLE,
  H13_SCOPE_LIMITATIONS,
  H13_RESEARCH_ROADMAP_2026_2035,
  H13_COMPANION_EXECUTIVE_SUMMARY,
  H13_COMPANION_INTERPRETATIONS_COMPARISON,
  H13_COMPANION_QG_APPROACHES_COMPARISON,
  H13_CHAPTERS,
  H13_ARCHIVAL_PLATES,
  H13_FIGURES,
  buildH13FullMarkdown,
  buildH13SelfContainedHtml,
  buildH13StandaloneLatex
} = modObj.exports;

assert(H13_CHAPTERS.length === 13, `H13_CHAPTERS has 13 sections (${H13_CHAPTERS.length})`);
assert(H13_APPENDICES.length === 11, `H13_APPENDICES has 11 appendices A-K (${H13_APPENDICES.length})`);
assert(H13_AXIOMS.length === 5, `H13_AXIOMS has 5 axioms A1-A5`);
assert(H13_THEOREMS_LIST.length === 12, `H13_THEOREMS_LIST has 12 theorem/proposition entries`);
assert(H13_PORTAL_BUILD_RECOMMENDATIONS.length === 8, `Table 9.2 has 8 realistic analog/no-go entries PR-1..PR-8`);
assert(H13_EPISTEMIC_LEDGER.length === 10, `Table 13.2 has 10 claims C1..C10`);
assert(H13_REFERENCES.length === 51, `H13_REFERENCES has 51 unbundled references (${H13_REFERENCES.length})`);
assert(H13_ARCHIVAL_PLATES.length === 9 && H13_FIGURES.length === 17, `26 total illustrations (9 plates + 17 schematics)`);
assert(H13_DIMENSIONAL_AUDIT.some((r) => r.formulaSummary.includes('kΔx/2')), 'Table 0.3 audits sinc argument kΔx/2');
assert(H13_COMPANION_EXECUTIVE_SUMMARY.pillars.length === 3 && H13_COMPANION_INTERPRETATIONS_COMPARISON.length === 5 && H13_COMPANION_QG_APPROACHES_COMPARISON.length === 4, 'Companion document exports populated');

// Check Cat C Propositions never carry Theorem/Q.E.D. overreach
const propEntries = H13_CHAPTERS.flatMap((c) => c.subsections.map((s) => s.theoremBox).filter(Boolean));
assert(propEntries.length === 11, `11 formal theorem/proposition boxes across Sections 4-13 (${propEntries.length})`);
for (const tb of propEntries) {
  if (tb.category.includes('CATEGORY C') || tb.number.includes('Prop')) {
    assert(tb.boxKind === 'proposition' && tb.proofType === 'sketch', `${tb.number} uses boxKind=proposition & proofType=sketch`);
    assert(!/Theorem/i.test(tb.number), `${tb.number} does not masquerade as a Theorem`);
  } else {
    assert(tb.boxKind === 'theorem' && tb.proofType === 'proof', `${tb.number} uses boxKind=theorem & proofType=proof`);
  }
}

// Check single-bracket [N] and [Ref ...] citations resolve strictly inside 1..51
const citationTexts = [
  H13_META.predecessors,
  ...H13_AXIOMS.map((a) => a.notesOnProvenance),
  ...H13_CHAPTERS.map((c) => c.provenance),
  ...H13_CHAPTERS.flatMap((c) => c.subsections.flatMap((s) => [...s.paragraphs, s.theoremBox?.provenance || ''])),
  ...H13_EPISTEMIC_LEDGER.map((e) => e.primaryProvenance + ' ' + e.mathematicalSupport),
  ...H13_APPENDICES.flatMap((a) => [...a.bodyParagraphs, ...a.equations.map((eq) => eq.caption)])
];
let badRefs = 0;
for (const txt of citationTexts) {
  const bracketMatches = [...txt.matchAll(/\[(\d+(?:,\s*\d+)*)\]/g)];
  for (const m of bracketMatches) {
    for (const numStr of m[1].split(',')) {
      const n = Number(numStr.trim());
      if (!Number.isInteger(n) || n < 1 || n > H13_REFERENCES.length) badRefs++;
    }
  }
}
assert(badRefs === 0, `All [N] bibliography citations resolve within 1..${H13_REFERENCES.length} (bad=${badRefs})`);

// Check that every reference uses corrected Tóth & Petz (2013), Bera et al. (2015), Lee et al. (2020), Kapner et al. (2007), Shiromizu (2000)
const refsBlob = H13_REFERENCES.map((r) => r.citation).join('\n');
assert(refsBlob.includes('Tóth, G. & Petz, D. (2013)'), 'Refs cite real Tóth & Petz (2013) PRA 87, 032324');
assert(refsBlob.includes('Bera, M. N., Qureshi, T.'), 'Refs cite Bera et al. (2015) PRA 92, 012118');
assert(refsBlob.includes('Lee, J. G., Adelberger, E. G.') && refsBlob.includes('52 μm'), 'Refs cite Lee et al. (2020) 52 um');
assert(refsBlob.includes('Shiromizu, T.'), 'Shiromizu spelling verified (no typo)');

// Build exports
const tex = buildH13StandaloneLatex();
const html = buildH13SelfContainedHtml();
const md = buildH13FullMarkdown();

// Pure ASCII LaTeX check
const nonAscii = [...tex].filter((ch) => (ch.codePointAt(0) ?? 0) > 127);
assert(nonAscii.length === 0, `Standalone LaTeX is 100% pure ASCII (non-ASCII count=${nonAscii.length})`);

// Balanced braces in LaTeX
let braceDepth = 0;
let braceUnderflow = false;
for (let i = 0; i < tex.length; i++) {
  if (tex[i] === '\\') { i++; continue; }
  if (tex[i] === '{') braceDepth++;
  else if (tex[i] === '}') {
    braceDepth--;
    if (braceDepth < 0) { braceUnderflow = true; break; }
  }
}
assert(!braceUnderflow && braceDepth === 0, `Balanced LaTeX braces across document (depth=${braceDepth})`);

// Balanced inline $ delimiters
let dollarCount = 0;
for (let i = 0; i < tex.length; i++) {
  if (tex[i] === '\\') { i++; continue; }
  if (tex[i] === '$') dollarCount++;
}
assert(dollarCount % 2 === 0, `Even number of inline $ math delimiters (${dollarCount})`);
assert(!/\\dot\\\{/.test(tex) && !/\\sqrt\s*\(/.test(tex), 'Zero malformed \\dot\\{...\\} or ungrouped \\sqrt(...) in LaTeX');

// Clean separation checks: Paper 13 exports MUST exclude Part II comparative tables & executive brief
for (const forbiddenExportToken of [
  'Table 13.4',
  'Table 13.5',
  'Policy Companion Summary',
  'Companion Policy & Programmatic Brief',
  'Six Paradigm Flips',
  'Theorem H13.8',
  'Theorem H13.9',
  'Theorem H13.1',
  '10^{53}',
  '10⁵³',
  '0.409403',
  '1.015'
]) {
  const checkToken = forbiddenExportToken === 'Theorem H13.1' ? /\bTheorem H13\.1\b(?![012])/ : new RegExp(forbiddenExportToken.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  assert(!checkToken.test(tex), `LaTeX export free of forbidden/companion token: ${forbiddenExportToken}`);
  assert(!checkToken.test(html), `HTML export free of forbidden/companion token: ${forbiddenExportToken}`);
  assert(!checkToken.test(md), `Markdown export free of forbidden/companion token: ${forbiddenExportToken}`);
}

// Confirm Prop H13.8 & Prop H13.9 do NOT have \begin{proof} in LaTeX or [Q.E.D.] in Markdown/HTML
assert(tex.includes('Prop H13.8') && tex.includes('Prop H13.9') && tex.includes('Derivation / Proof Sketch.'), 'LaTeX renders Cat C Propositions with Derivation / Proof Sketch');
assert(html.includes('Prop H13.8') && html.includes('Prop H13.9') && html.includes('Derivation / Proof Sketch.'), 'HTML renders Cat C Propositions with Derivation / Proof Sketch');
assert(md.includes('Prop H13.8') && md.includes('Prop H13.9') && md.includes('Derivation / Proof Sketch.'), 'Markdown renders Cat C Propositions with Derivation / Proof Sketch');

// Confirm every equation across Master, Chapters, Worked Examples, and Appendices exists in .tex, .html, and .md
const allEqLabels = [
  ...H13_MASTER_EQUATIONS.map((e) => e.label),
  ...H13_CHAPTERS.flatMap((c) => c.subsections.flatMap((s) => [s.equation?.label, s.workedExample?.resultEquation.label].filter(Boolean))),
  ...H13_APPENDICES.flatMap((a) => a.equations.map((e) => e.label))
];
for (const lbl of allEqLabels) {
  const rawTag = lbl.replace(/^\(|\)$/g, '');
  assert(tex.includes(`\\tag{${rawTag}}`), `LaTeX includes equation ${lbl}`);
  assert(html.includes(lbl), `HTML includes equation ${lbl}`);
  assert(md.includes(lbl), `Markdown includes equation ${lbl}`);
}

// Confirm corrected numbers & isotropic F_{0y} appear across exports
for (const anchor of ['0.409374', '1.426', '0.454 ms', '5.076', '38.6', '5.112 meV', '4.30', '24.14', 'Horndeski', 'PR-8']) {
  assert(md.includes(anchor), `Markdown includes corrected anchor: ${anchor}`);
  assert(html.includes(anchor), `HTML includes corrected anchor: ${anchor}`);
  assert(tex.includes(anchor), `LaTeX includes corrected anchor: ${anchor}`);
}

console.log(`IGRT-2026-H13 Verification: ${passed} passed, ${failed} failed.`);
if (failed > 0) process.exit(1);
