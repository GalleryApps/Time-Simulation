/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Self-contained Scientific Magazine HTML, Markdown, and Pure-ASCII LaTeX Exporters
 * for Paper 15 (Synthese Journal):
 * "Structural Equivalence, Geometric Conventionalism, and Emergent Chronometry"
 */

import {
  SYNTHESE_META,
  SYNTHESE_ABSTRACT,
  SYNTHESE_CHAPTERS,
  TABLE_2_1_CONVENTIONALISM,
  TABLE_3_1_PPN_UNDERDETERMINATION,
  TABLE_4_1_MORITA_LEDGER,
  TABLE_5_1_FUNCTIONALISM_MATRIX,
  TABLE_6_1_STRONG_FIELD_ONTOLOGY,
  TABLE_7_1_BAYESIAN_MDL,
  TABLE_8_1_CRUCIAL_EXPERIMENTS,
  SYNTHESE_SYMBOL_GLOSSARY,
  SYNTHESE_GLOSSARY,
  SYNTHESE_APPENDICES,
  SYNTHESE_REFERENCES,
  type SyntheseEquation,
  type SyntheseTheoremBox,
  type SyntheseWorkedExample
} from '../types/synthesePaperData';
import { SYNTHESE_FIGURES } from '../types/synthesePaperFigures';
import { formatSvgMathMarkup } from './formatMathUnicode';

const SYNTHESE_PLATES_INDEX = [
  {
    plateNumber: 'Plate I',
    anchorChapter: 1,
    title: 'Dual Manifolds Across an Archival Meridian: Lorentzian Light Cones & Fisher-Rao Bundles',
    caption:
      'Editorial cover plate contrasting warped Lorentzian null-cone geometry (left) with information-geometric Fisher-Rao statistical state fibers (right) bridged across a brass meridian.'
  },
  {
    plateNumber: 'Plate II',
    anchorChapter: 2,
    title: 'Poincare-Reichenbach Disk Duality: Hyperbolic Geodesic Chords vs. Scalar Rod Distortion',
    caption:
      'Geometric conventionalism dissected: trading curved hyperbolic chords for deformed flat-space ellipses succeeds only when spatial impedance enforces gamma = 1.'
  },
  {
    plateNumber: 'Plate III',
    anchorChapter: 4,
    title: 'Categorical Morita Bridge: Exterior Functorial Parity & Core Horizon Split',
    caption:
      'Constructive Morita equivalence functor F: Lor_ext <-> InfoGeom_ext translating spacetime metric tensors into dual Amari statistical bundles up to regular core boundaries.'
  },
  {
    plateNumber: 'Plate IV',
    anchorChapter: 5,
    title: 'Optical Chronometric Functionalism: 87Sr Lattice Resonator Probing Regular Photon Spheres',
    caption:
      'Operational optical-lattice atomic clock ensembles calibrating local inertial-frame realization (Knox functionalism) against smooth regular Hayward black hole horizons.'
  }
];

function escapeHtml(raw: string): string {
  return raw
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function renderHtmlEquation(eq: SyntheseEquation): string {
  return `<div class="eq-box">
    <div class="eq-math">${eq.unicodeHtml} <span class="eq-num">${escapeHtml(eq.label)}</span></div>
    ${eq.plainMath ? `<div class="eq-plain"><strong>Plain Math Equation:</strong> <code>${escapeHtml(eq.plainMath)}</code></div>` : ''}
    <div class="eq-cap">${escapeHtml(eq.caption)}</div>
    <div class="eq-meaning">${escapeHtml(eq.plainMeaning)}</div>
    ${eq.provenance ? `<div class="box-note"><strong>Provenance:</strong> ${escapeHtml(eq.provenance)}</div>` : ''}
    ${
      eq.derivationSteps?.length
        ? `<ol class="deriv-list">${eq.derivationSteps.map((s) => `<li>${escapeHtml(s)}</li>`).join('')}</ol>`
        : ''
    }
  </div>`;
}

function renderHtmlTheorem(tb: SyntheseTheoremBox): string {
  return `<div class="theorem-box">
    <div class="box-title">${escapeHtml(tb.kind)} ${escapeHtml(tb.number)} · ${escapeHtml(tb.title)}</div>
    <p>${escapeHtml(tb.statement)}</p>
    <ol>${tb.proofSteps.map((s) => `<li>${escapeHtml(s)}</li>`).join('')}</ol>
    <div class="box-note">${escapeHtml(tb.sourceNote)}</div>
  </div>`;
}

function renderHtmlWorkedExample(wx: SyntheseWorkedExample): string {
  return `<div class="worked-box">
    <div class="box-title">${escapeHtml(wx.title)}</div>
    <p class="epigraph">${escapeHtml(wx.setup)}</p>
    <ol>${wx.steps.map((s) => `<li>${escapeHtml(s)}</li>`).join('')}</ol>
    ${renderHtmlEquation(wx.resultEquation)}
    <p class="lead"><strong>Takeaway:</strong> ${escapeHtml(wx.takeaway)}</p>
  </div>`;
}

function renderHtmlChapterTable(chapterNum: number): string {
  if (chapterNum === 2) {
    return `
      <h3>Table 2.1 · Taxonomy of Geometric Conventionalisms (G + F) &amp; Empirical Constraints</h3>
      <table>
        <thead><tr><th>Program</th><th>Metric Choice</th><th>Coordinative Bridge</th><th>Empirical Status</th><th>IGRT Diagnostic</th></tr></thead>
        <tbody>${TABLE_2_1_CONVENTIONALISM.map((r) => `<tr><td>${escapeHtml(r.program)}</td><td>${escapeHtml(r.metricChoice)}</td><td>${escapeHtml(r.coordinativeBridge)}</td><td>${escapeHtml(r.empiricalStatus)}</td><td>${escapeHtml(r.igrtDiagnostic)}</td></tr>`).join('')}</tbody>
      </table>`;
  }
  if (chapterNum === 3) {
    return `
      <h3>Table 3.1 · PPN Bounds &amp; Collapse of Scalar gamma = 0 Underdetermination</h3>
      <table>
        <thead><tr><th>Observable</th><th>Empirical Bound</th><th>Naive Scalar (gamma=0)</th><th>Morita IGRT &amp; GR</th><th>Philosophical Implication</th></tr></thead>
        <tbody>${TABLE_3_1_PPN_UNDERDETERMINATION.map((r) => `<tr><td>${escapeHtml(r.observable)}</td><td>${escapeHtml(r.empiricalBound)}</td><td>${escapeHtml(r.naiveScalar)}</td><td>${escapeHtml(r.moritaIgrtAndGr)}</td><td>${escapeHtml(r.philosophicalImplication)}</td></tr>`).join('')}</tbody>
      </table>`;
  }
  if (chapterNum === 4) {
    return `
      <h3>Table 4.1 · Categorical &amp; Morita Functorial Equivalence Ledger</h3>
      <table>
        <thead><tr><th>Categorical Object</th><th>Lorentzian GR</th><th>InfoGeom IGRT</th><th>Invariant Preserved</th><th>Status</th></tr></thead>
        <tbody>${TABLE_4_1_MORITA_LEDGER.map((r) => `<tr><td>${escapeHtml(r.categoricalObject)}</td><td>${escapeHtml(r.lorentzianGR)}</td><td>${escapeHtml(r.infoGeomIGRT)}</td><td>${escapeHtml(r.invariantPreserved)}</td><td>${escapeHtml(r.status)}</td></tr>`).join('')}</tbody>
      </table>`;
  }
  if (chapterNum === 5) {
    return `
      <h3>Table 5.1 · Functionalist &amp; Structuralist Ontological Matrix</h3>
      <table>
        <thead><tr><th>Stance</th><th>Ontic Commitments</th><th>Functional Role Status</th><th>Response to IGRT</th><th>Synthese Assessment</th></tr></thead>
        <tbody>${TABLE_5_1_FUNCTIONALISM_MATRIX.map((r) => `<tr><td>${escapeHtml(r.stance)}</td><td>${escapeHtml(r.onticCommitments)}</td><td>${escapeHtml(r.functionalRoleStatus)}</td><td>${escapeHtml(r.responseToIGRT)}</td><td>${escapeHtml(r.syntheseAssessment)}</td></tr>`).join('')}</tbody>
      </table>`;
  }
  if (chapterNum === 6) {
    return `
      <h3>Table 6.1 · Strong-Field Horizon &amp; Regular-Core Ontological Scorecard</h3>
      <table>
        <thead><tr><th>Domain Feature</th><th>Standard GR</th><th>Regular IGRT</th><th>Ontological Status</th><th>Empirical Handle</th></tr></thead>
        <tbody>${TABLE_6_1_STRONG_FIELD_ONTOLOGY.map((r) => `<tr><td>${escapeHtml(r.domainFeature)}</td><td>${escapeHtml(r.standardGR)}</td><td>${escapeHtml(r.regularIGRT)}</td><td>${escapeHtml(r.ontologicalStatus)}</td><td>${escapeHtml(r.empiricalHandle)}</td></tr>`).join('')}</tbody>
      </table>`;
  }
  if (chapterNum === 7) {
    return `
      <h3>Table 7.1 · Bayesian Evidence &amp; Fisher MDL Epistemic Audit</h3>
      <table>
        <thead><tr><th>Framework</th><th>Params k</th><th>Chi-Square Data</th><th>Fisher MDL Penalty</th><th>Log Bayes vs GR</th><th>Methodology Lesson</th></tr></thead>
        <tbody>${TABLE_7_1_BAYESIAN_MDL.map((r) => `<tr><td>${escapeHtml(r.framework)}</td><td>${escapeHtml(r.paramsK)}</td><td>${escapeHtml(r.chiSquareData)}</td><td>${escapeHtml(r.fisherMdlPenalty)}</td><td>${escapeHtml(r.logBayesVsGR)}</td><td>${escapeHtml(r.methodologyLesson)}</td></tr>`).join('')}</tbody>
      </table>`;
  }
  if (chapterNum === 8) {
    return `
      <h3>Table 8.1 · 2026–2035 Crucial Experiments &amp; Falsification Thresholds</h3>
      <table>
        <thead><tr><th>Experiment</th><th>Window</th><th>Observable</th><th>If Confirmed</th><th>If Null</th><th>Lakatosian Role</th></tr></thead>
        <tbody>${TABLE_8_1_CRUCIAL_EXPERIMENTS.map((r) => `<tr><td>${escapeHtml(r.experiment)}</td><td>${escapeHtml(r.window)}</td><td>${escapeHtml(r.targetObservable)}</td><td>${escapeHtml(r.ifConfirmed)}</td><td>${escapeHtml(r.ifNull)}</td><td>${escapeHtml(r.lakatosianRole)}</td></tr>`).join('')}</tbody>
      </table>`;
  }
  return '';
}

export function buildSyntheseSelfContainedHtml(): string {
  const graphicalAbstractHtml = SYNTHESE_FIGURES.filter((f) => f.anchorChapter === 0)
    .map(
      (fg) => `
    <figure>
      <div class="fig-meta">${escapeHtml(fg.figureNumber)} · ${escapeHtml(fg.title)}</div>
      ${formatSvgMathMarkup(fg.svgMarkup)}
      <figcaption>${escapeHtml(fg.caption)}</figcaption>
    </figure>`
    )
    .join('\n');

  const chaptersHtml = SYNTHESE_CHAPTERS.map((ch) => {
    const figs = SYNTHESE_FIGURES.filter((f) => f.anchorChapter === ch.number);
    return `
      <section class="chapter">
        <div class="kicker">${escapeHtml(ch.kicker)}</div>
        <h2>Chapter ${ch.number}: ${escapeHtml(ch.title)}</h2>
        <p class="epigraph">${escapeHtml(ch.epigraph)}</p>
        <blockquote class="pull-quote">${escapeHtml(ch.pullQuote)}</blockquote>
        <p class="lead">${escapeHtml(ch.leadSummary)}</p>
        ${
          ch.chapterIntro.length
            ? `<div class="chapter-intro"><div class="intro-label">Editorial Opening</div>${ch.chapterIntro.map((p) => `<p>${escapeHtml(p)}</p>`).join('')}</div>`
            : ''
        }
        ${ch.subsections
          .map(
            (sub) => `
          <div class="subsec">
            <h3>${escapeHtml(sub.number)} · ${escapeHtml(sub.title)}</h3>
            <div class="sub-meta">${escapeHtml(sub.epistemicFocus)}</div>
            ${sub.paragraphs.map((p) => `<p>${escapeHtml(p)}</p>`).join('')}
            ${sub.equation ? renderHtmlEquation(sub.equation) : ''}
            ${sub.theoremBox ? renderHtmlTheorem(sub.theoremBox) : ''}
            ${sub.workedExample ? renderHtmlWorkedExample(sub.workedExample) : ''}
          </div>`
          )
          .join('')}
        ${renderHtmlChapterTable(ch.number)}
        ${figs
          .map(
            (fg) => `
          <figure>
            <div class="fig-meta">${escapeHtml(fg.figureNumber)} · ${escapeHtml(fg.title)}</div>
            ${formatSvgMathMarkup(fg.svgMarkup)}
            <figcaption>${escapeHtml(fg.caption)}</figcaption>
          </figure>`
          )
          .join('')}
      </section>
    `;
  }).join('\n');

  const appendicesHtml = SYNTHESE_APPENDICES.map(
    (a) => `
      <h3>Appendix ${escapeHtml(a.letter)}: ${escapeHtml(a.title)}</h3>
      <p><em>${escapeHtml(a.summary)}</em></p>
      ${a.paragraphs.map((p) => `<p>${escapeHtml(p)}</p>`).join('')}
      ${a.equations.map(renderHtmlEquation).join('')}
      ${a.theoremBoxes ? a.theoremBoxes.map(renderHtmlTheorem).join('') : ''}
      ${
        a.reproducibilityLedger?.length
          ? `<table>
               <thead><tr><th>Checkpoint</th><th>Formula</th><th>Reference Constants</th><th>Computed Output</th></tr></thead>
               <tbody>${a.reproducibilityLedger
                 .map(
                   (row) =>
                     `<tr><td>${escapeHtml(row.checkpoint)}</td><td>${escapeHtml(row.formula)}</td><td>${escapeHtml(row.referenceConstants)}</td><td>${escapeHtml(row.computedOutput)}</td></tr>`
                 )
                 .join('')}</tbody>
             </table>`
          : ''
      }
      ${
        a.refereeObjections?.length
          ? a.refereeObjections
              .map(
                (obj) => `<div class="worked-box"><div class="box-title">${escapeHtml(obj.objection)}</div><p>${escapeHtml(obj.reply)}</p></div>`
              )
              .join('')
          : ''
      }
    `
  ).join('\n');

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>${escapeHtml(SYNTHESE_META.title)}</title>
<style>
  body { font-family: Georgia, "Times New Roman", serif; color: #062429; background: #FAF6EC; margin: 0; padding: 3rem 1.5rem; line-height: 1.78; }
  main { max-width: 840px; margin: 0 auto; background: #FDFBF7; padding: 3.5rem; border: 1px solid #CBBBA0; }
  h1, h2, h3 { font-weight: 400; color: #2E0820; }
  h1 { font-size: 2.25rem; line-height: 1.18; margin: 0.4rem 0 0.75rem; }
  h2 { font-size: 1.58rem; border-bottom: 1px solid #CBBBA0; padding-bottom: 0.45rem; margin-top: 2.8rem; }
  h3 { font-size: 1.18rem; color: #0B3942; margin-top: 1.9rem; }
  .masthead-strip { height: 5px; display: flex; margin-bottom: 1.6rem; }
  .masthead-strip span { flex: 1; }
  .kicker { font-family: monospace; font-size: 0.78rem; color: #831B5B; letter-spacing: 0.08em; text-transform: uppercase; }
  .layman-deck { font-size: 1.12rem; color: #9A3412; font-style: italic; margin: 0.5rem 0 1.2rem; }
  .subtitle { font-style: italic; color: #11505C; font-size: 1.02rem; margin-bottom: 1.4rem; }
  .epigraph { font-style: italic; color: #186876; }
  .pull-quote { border-top: 1px solid #CBBBA0; border-bottom: 1px solid #CBBBA0; margin: 1.4rem 0; padding: 0.9rem 0; font-size: 1.15rem; font-style: italic; color: #4A0E33; text-align: center; }
  .lead { color: #0F3D2B; font-style: italic; }
  .sub-meta { font-family: monospace; font-size: 0.76rem; color: #9A3412; margin-bottom: 0.6rem; }
  .chapter-intro { border-top: 1px solid #17573E; border-bottom: 1px solid #17573E; background: #EEF5F1; padding: 1rem 1.35rem; margin: 1.4rem 0 2rem; }
  .intro-label { font-family: monospace; font-size: 0.75rem; color: #0F3D2B; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 0.4rem; }
  @media print {
    @page { size: A4; margin: 20mm; }
    body { padding: 0; background: #FFFFFF; }
    main { max-width: none; padding: 0; border: none; }
    .chapter { page-break-before: always; }
    .eq-box, .theorem-box, .worked-box, figure { break-inside: avoid; }
  }
  .eq-box { background: #EDF5F6; border: 1px solid #186876; padding: 1rem 1.25rem; margin: 1.4rem 0; }
  .eq-math { text-align: center; font-size: 1.04rem; color: #2E0820; overflow-wrap: anywhere; }
  .eq-num { float: right; font-family: monospace; font-size: 0.85rem; color: #831B5B; }
  .eq-plain { margin-top: 0.55rem; padding: 0.4rem 0.65rem; background: #FDFBF7; border: 1px solid #CBBBA0; font-size: 0.8rem; color: #2E0820; overflow-wrap: anywhere; }
  .eq-plain code { font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 0.78rem; }
  .eq-cap { font-size: 0.86rem; color: #0B3942; margin-top: 0.5rem; text-align: center; font-style: italic; }
  .eq-meaning { font-size: 0.82rem; color: #0F3D2B; margin-top: 0.25rem; text-align: center; }
  .deriv-list { font-size: 0.82rem; color: #062429; margin: 0.6rem 0 0.4rem; padding-left: 1.2rem; }
  .theorem-box { background: #F9EEF4; border: 1px solid #831B5B; padding: 1.1rem 1.35rem; margin: 1.4rem 0; }
  .worked-box { background: #FFF4EB; border: 1px solid #C2410C; padding: 1.1rem 1.35rem; margin: 1.4rem 0; }
  .box-title { color: #4A0E33; margin-bottom: 0.5rem; font-weight: bold; }
  .box-note { font-family: monospace; font-size: 0.78rem; color: #11505C; margin-top: 0.5rem; overflow-wrap: anywhere; }
  table { width: 100%; table-layout: fixed; border-collapse: collapse; margin: 1.6rem 0; font-size: 0.82rem; }
  th { background: #EDF5F6; color: #062429; text-align: left; padding: 0.5rem; border: 1px solid #186876; word-break: break-word; overflow-wrap: anywhere; }
  td { padding: 0.45rem; border: 1px solid #CBBBA0; vertical-align: top; word-break: break-word; overflow-wrap: anywhere; }
  tr:nth-child(even) td { background: #F4EFE6; }
  figure { margin: 2rem 0; padding: 1rem; border: 1px solid #CBBBA0; background: #FAF6EC; }
  figure svg { max-width: 100%; height: auto; display: block; margin: 0 auto; }
  .fig-meta { font-family: monospace; font-size: 0.82rem; color: #831B5B; margin-bottom: 0.6rem; }
  figcaption { font-size: 0.88rem; color: #0B3942; margin-top: 0.6rem; }
</style>
</head>
<body>
<main>
  <div class="masthead-strip">
    <span style="background:#EA580C"></span>
    <span style="background:#4A0E33"></span>
    <span style="background:#0B3942"></span>
    <span style="background:#0F3D2B"></span>
    <span style="background:#1E2D52"></span>
  </div>
  <div class="kicker">${escapeHtml(SYNTHESE_META.paperNumber)} · ${escapeHtml(SYNTHESE_META.journalTarget)}</div>
  <h1>${escapeHtml(SYNTHESE_META.title)}</h1>
  <p class="layman-deck">${escapeHtml(SYNTHESE_META.laymanDeck)}</p>
  <p class="subtitle">${escapeHtml(SYNTHESE_META.subtitle)}</p>
  <p><strong>Authors:</strong> ${escapeHtml(SYNTHESE_META.authors.map((a) => `${a.name} (${a.affiliation})`).join('; '))}</p>
  <h2>Abstract</h2>
  ${SYNTHESE_ABSTRACT.map((p) => `<p>${escapeHtml(p)}</p>`).join('')}
  ${graphicalAbstractHtml}
  ${chaptersHtml}
  <h2>Glossary</h2>
  <h3>Philosophical &amp; Technical Concepts</h3>
  ${SYNTHESE_GLOSSARY.map((g) => `<p><strong>${escapeHtml(g.term)}${g.acronym ? ` (${escapeHtml(g.acronym)})` : ''}:</strong> ${escapeHtml(g.definition)}</p>`).join('')}
  <h3>Glossary of Formal Symbols</h3>
  <table>
    <thead><tr><th>Symbol</th><th>Formal Quantity</th><th>Domain</th><th>Definition</th></tr></thead>
    <tbody>${SYNTHESE_SYMBOL_GLOSSARY.map((s) => `<tr><td>${escapeHtml(s.symbol)}</td><td>${escapeHtml(s.name)}</td><td>${escapeHtml(s.domain)}</td><td>${escapeHtml(s.definition)}</td></tr>`).join('')}</tbody>
  </table>
  <h2>Appendices</h2>
  ${appendicesHtml}
  <h2>References</h2>
  ${SYNTHESE_REFERENCES.map((r) => `<p>[${r.id}] ${escapeHtml(r.citation)}</p>`).join('')}
</main>
</body>
</html>`;
}

export function buildSyntheseMarkdown(): string {
  const lines: string[] = [];
  lines.push(`# ${SYNTHESE_META.title}`);
  lines.push(`*${SYNTHESE_META.laymanDeck}*`);
  lines.push('');
  lines.push(`**Target Journal:** ${SYNTHESE_META.journalTarget}`);
  lines.push(`**Authors:** ${SYNTHESE_META.authors.map((a) => `${a.name} (${a.affiliation})`).join('; ')}`);
  lines.push(`**Keywords:** ${SYNTHESE_META.keywords.join(', ')}`);
  lines.push('');
  lines.push('## Abstract');
  SYNTHESE_ABSTRACT.forEach((p) => lines.push(p, ''));

  SYNTHESE_CHAPTERS.forEach((ch) => {
    lines.push(`## Chapter ${ch.number}: ${ch.title}`);
    lines.push(`> *${ch.epigraph}*`);
    lines.push('');
    lines.push(`> **Pull Quote:** ${ch.pullQuote}`);
    lines.push('');
    lines.push(ch.leadSummary, '');
    ch.chapterIntro.forEach((p) => lines.push(p, ''));
    ch.subsections.forEach((sub) => {
      lines.push(`### ${sub.number} ${sub.title}`);
      sub.paragraphs.forEach((p) => lines.push(p, ''));
      if (sub.equation) {
        lines.push(`**Equation ${sub.equation.label}:** \`${sub.equation.plainMath}\``);
        lines.push(`*${sub.equation.caption}* — ${sub.equation.plainMeaning}`, '');
      }
      if (sub.theoremBox) {
        lines.push(`**${sub.theoremBox.kind} ${sub.theoremBox.number} (${sub.theoremBox.title}):** ${sub.theoremBox.statement}`);
        sub.theoremBox.proofSteps.forEach((s, i) => lines.push(`${i + 1}. ${s}`));
        lines.push('');
      }
      if (sub.workedExample) {
        lines.push(`**${sub.workedExample.title}:** ${sub.workedExample.setup}`);
        sub.workedExample.steps.forEach((s, i) => lines.push(`${i + 1}. ${s}`));
        lines.push(`*Result ${sub.workedExample.resultEquation.label}:* \`${sub.workedExample.resultEquation.plainMath}\``);
        lines.push(`*Takeaway:* ${sub.workedExample.takeaway}`, '');
      }
    });
  });

  lines.push('## Glossary');
  SYNTHESE_GLOSSARY.forEach((g) => {
    lines.push(`- **${g.term}${g.acronym ? ` (${g.acronym})` : ''}:** ${g.definition}`);
  });
  lines.push('');
  SYNTHESE_APPENDICES.forEach((a) => {
    lines.push(`## Appendix ${a.letter}: ${a.title}`);
    lines.push(`*${a.summary}*`, '');
    a.paragraphs.forEach((p) => lines.push(p, ''));
    a.equations.forEach((eq) => {
      lines.push(`**${eq.label}:** \`${eq.plainMath}\` — ${eq.caption}`, '');
    });
    a.refereeObjections?.forEach((o) => {
      lines.push(`- **${o.objection}** ${o.reply}`);
    });
    lines.push('');
  });
  lines.push('## References');
  SYNTHESE_REFERENCES.forEach((r) => lines.push(`${r.id}. ${r.citation}`));
  return lines.join('\n');
}

// ---------------------------------------------------------------------------
// Pure 7-bit ASCII LaTeX Translator (Hardened)
// ---------------------------------------------------------------------------

const UNICODE_SUP_TO_TEX: Record<string, string> = {
  '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4',
  '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9',
  '⁺': '+', '⁻': '-', 'ⁿ': 'n', 'ʳ': 'r', 'ⁱ': 'i', 'ʲ': 'j'
};

const UNICODE_SUB_TO_TEX: Record<string, string> = {
  '₀': '0', '₁': '1', '₂': '2', '₃': '3', '₄': '4',
  '₅': '5', '₆': '6', '₇': '7', '₈': '8', '₉': '9',
  '₊': '+', '₋': '-', 'ᵢ': 'i'
};

const SUP_CHAR_RE = /[⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻ⁿʳⁱʲ]/;
const SUB_CHAR_RE = /[₀₁₂₃₄₅₆₇₈₉₊₋ᵢ]/;
const SUP_RUN_RE = /[⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻ⁿʳⁱʲ]+/g;
const SUB_RUN_RE = /[₀₁₂₃₄₅₆₇₈₉₊₋ᵢ]+/g;

const TEXT_LATIN_ACCENTS: Record<string, string> = {
  'à': '\\`{a}', 'á': "\\'{a}", 'â': '\\^{a}', 'ä': '\\"{a}', 'é': "\\'{e}",
  'è': '\\`{e}', 'ê': '\\^{e}', 'ë': '\\"{e}', 'í': "\\'{i}", 'î': '\\^{i}',
  'ï': '\\"{i}', 'ñ': '\\~{n}', 'ó': "\\'{o}", 'ô': '\\^{o}', 'ö': '\\"{o}',
  'ú': "\\'{u}", 'û': '\\^{u}', 'ü': '\\"{u}', 'ç': '\\c{c}', 'É': "\\'{E}"
};

const TEXT_PUNCT_MAP: Record<string, string> = {
  '§': '\\S{}',
  '–': '--',
  '—': '---',
  '’': "'",
  '‘': '`',
  '“': '``',
  '”': "''",
  '…': '\\ldots{}',
  '•': '\\textbullet{} '
};

const MATH_UNICODE_MAP: Record<string, string> = {
  'Γ': '\\Gamma ', 'Δ': '\\Delta ', 'Θ': '\\Theta ', 'Λ': '\\Lambda ',
  'Φ': '\\Phi ', 'Ω': '\\Omega ', 'α': '\\alpha ', 'β': '\\beta ',
  'γ': '\\gamma ', 'δ': '\\delta ', 'ε': '\\varepsilon ', 'θ': '\\theta ',
  'κ': '\\kappa ', 'λ': '\\lambda ', 'μ': '\\mu ', 'ν': '\\nu ',
  'ξ': '\\xi ', 'π': '\\pi ', 'ρ': '\\rho ', 'σ': '\\sigma ',
  'τ': '\\tau ', 'φ': '\\varphi ', 'χ': '\\chi ', 'ψ': '\\psi ',
  'ω': '\\omega ',
  'ℱ': '\\mathcal{F}', '𝒢': '\\mathcal{G}', 'ℐ': '\\mathcal{I}', 'ℒ': '\\mathcal{L}',
  'ℳ': '\\mathcal{M}', '𝒪': '\\mathcal{O}', '𝒥': '\\mathcal{J}',
  '𝐋': '\\mathbf{L}', '𝐨': '\\mathbf{o}', '𝐫': '\\mathbf{r}',
  '𝐈': '\\mathbf{I}', '𝐧': '\\mathbf{n}', '𝐟': '\\mathbf{f}',
  '𝐆': '\\mathbf{G}', '𝐞': '\\mathbf{e}', '𝐦': '\\mathbf{m}',
  'ℓ': '\\ell ', '∇': '\\nabla ', '∂': '\\partial ', '∫': '\\int ',
  '∞': '\\infty ', '×': '\\times ', '·': '\\cdot ', '±': '\\pm ',
  '≈': '\\approx ', '≤': '\\le ', '≥': '\\ge ', '≪': '\\ll ', '≫': '\\gg ',
  '≠': '\\neq ', '≡': '\\equiv ', '⇔': '\\iff ', '⇄': '\\leftrightarrow ',
  '→': '\\rightarrow ', '⇒': '\\Rightarrow ', '−': '-', '‖': '\\|',
  '⊊': '\\subsetneq ', '⊔': '\\sqcup ', '∘': '\\circ ', '⊙': '\\odot ', '☉': '\\odot ',
  '½': '\\frac{1}{2}', '″': '^{\\prime\\prime}'
};

const ROMAN_WORDS = new Set([
  'upd', 'obs', 'loc', 'eff', 'core', 'ext', 'int', 'sing', 'reg', 'Morita',
  'Gordon', 'Hayward', 'BKM', 'SLD', 'MDL', 'PPN', 'GR', 'IGRT', 'LUH',
  'Lor', 'InfoGeom', 'LC', 'diag', 'Tr', 'det', 'ln', 'log', 'lim', 'echo'
]);

const MATH_TOKEN_UNICODE_RE =
  /[ΓΔΘΛΦΩαβγδεθκλμνξπρστυφχψωℱ𝒢ℐℒℳ𝒪𝒥ℓ∇∂∫∞×·±≈≤≥≪≫≠≡⇔⇄→⇒−‖⊊⊔∘⊙☉½″√⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻ⁿʳⁱʲ₀₁₂₃₄₅₆₇₈₉₊₋ᵢ]/u;

function escapeTextChar(ch: string): string {
  if (ch in TEXT_LATIN_ACCENTS) return TEXT_LATIN_ACCENTS[ch];
  if (ch in TEXT_PUNCT_MAP) return TEXT_PUNCT_MAP[ch];
  switch (ch) {
    case '\\': return '\\textbackslash{}';
    case '{': return '\\{';
    case '}': return '\\}';
    case '$': return '\\$';
    case '&': return '\\&';
    case '#': return '\\#';
    case '%': return '\\%';
    case '_': return '\\_';
    case '^': return '\\textasciicircum{}';
    case '~': return '\\textasciitilde{}';
    case '<': return '\\textless{}';
    case '>': return '\\textgreater{}';
    case '|': return '\\textbar{}';
    default:
      if (ch in MATH_UNICODE_MAP) return `$${MATH_UNICODE_MAP[ch].trim()}$`;
      if (ch.charCodeAt(0) > 127) return '';
      return ch;
  }
}

function escapeRawText(s: string): string {
  let out = '';
  for (const ch of s) out += escapeTextChar(ch);
  return out;
}

function escapeCodeText(s: string): string {
  return [...s]
    .map((ch) => {
      if (ch === '\\') return '\\textbackslash{}';
      if (ch === '{') return '\\{';
      if (ch === '}') return '\\}';
      if (ch === '$') return '\\$';
      if (ch === '&') return '\\&';
      if (ch === '#') return '\\#';
      if (ch === '%') return '\\%';
      if (ch === '_') return '\\_';
      if (ch === '^') return '\\textasciicircum{}';
      if (ch === '~') return '\\textasciitilde{}';
      if (ch === '–' || ch === '−') return '-';
      if (ch === '—') return '--';
      if (ch in TEXT_LATIN_ACCENTS) return TEXT_LATIN_ACCENTS[ch];
      if (ch.charCodeAt(0) > 127) return '';
      return ch;
    })
    .join('');
}

function balanceSqrt(tex: string): string {
  let out = '';
  let i = 0;
  while (i < tex.length) {
    if (tex.startsWith('\\sqrt', i) && !/[A-Za-z]/.test(tex[i + 5] ?? '')) {
      let j = i + 5;
      while (j < tex.length && tex[j] === ' ') j++;
      if (tex[j] === '{') {
        out += '\\sqrt{';
        i = j + 1;
        continue;
      }
      if (tex[j] === '(' || tex[j] === '[') {
        const openCh = tex[j];
        const closeCh = openCh === '(' ? ')' : ']';
        let depth = 1;
        let k = j + 1;
        while (k < tex.length && depth > 0) {
          if (tex[k] === openCh) depth++;
          else if (tex[k] === closeCh) depth--;
          k++;
        }
        const inner = balanceSqrt(tex.slice(j + 1, k - (depth === 0 ? 1 : 0)));
        out += `\\sqrt{${inner}}`;
        i = k;
        continue;
      }
      const matchAtom = tex.slice(j).match(/^(\\[A-Za-z]+|[A-Za-z0-9])/);
      if (matchAtom) {
        out += `\\sqrt{${matchAtom[1]}}`;
        i = j + matchAtom[1].length;
        continue;
      }
      out += '\\sqrt{\\,}';
      i = j;
      continue;
    }
    out += tex[i];
    i++;
  }
  return out;
}

function balanceLiteralBracesInMath(s: string): string {
  // Check brace balance across math expression; escape unmatched braces if any
  let depth = 0;
  let out = '';
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (ch === '\\' && (s[i + 1] === '{' || s[i + 1] === '}')) {
      out += ch + s[i + 1];
      i++;
      continue;
    }
    if (ch === '{') {
      depth++;
      out += ch;
    } else if (ch === '}') {
      if (depth > 0) {
        depth--;
        out += ch;
      } else {
        out += '\\}';
      }
    } else {
      out += ch;
    }
  }
  while (depth > 0) {
    out += '}';
    depth--;
  }
  return out;
}

function renderMathBodyToLatex(rawMath: string): string {
  const withScripts = rawMath
    .replace(SUP_RUN_RE, (run) => `^{${[...run].map((c) => UNICODE_SUP_TO_TEX[c] ?? c).join('')}}`)
    .replace(SUB_RUN_RE, (run) => `_{${[...run].map((c) => UNICODE_SUB_TO_TEX[c] ?? c).join('')}}`);
  let s = '';
  for (const ch of withScripts) {
    if (ch in MATH_UNICODE_MAP) s += MATH_UNICODE_MAP[ch];
    else if (ch === '–' || ch === '—') s += '-';
    else if (ch === '’') s += "'";
    else if (ch === '√') s += '\\sqrt';
    else if (ch === '&') s += '\\&';
    else if (ch === '%') s += '\\%';
    else if (ch === '#') s += '\\#';
    else if (ch.charCodeAt(0) > 127) s += '';
    else s += ch;
  }
  s = s.replace(/\b(lim|ln|log|Tr|det|diag)\b/g, (m) => `\\mathrm{${m}}`);
  s = s.replace(/\^([+-]\d+|\d{2,}|-[A-Za-z])/g, (_, exp) => `^{${exp}}`);
  s = s.replace(/_([A-Za-z0-9]+)/g, (full, word) =>
    ROMAN_WORDS.has(word) || word.length >= 3 ? `_{\\mathrm{${word}}}` : full
  );
  s = balanceSqrt(s);
  s = balanceLiteralBracesInMath(s);
  return s.replace(/[ ]{2,}/g, ' ').trim();
}

function texProse(input: string): string {
  if (!input) return '';
  const chunks = input.replace(/\r\n/g, '\n').split(/(\bBulaqueña\b|`[^`]+`)/g);
  return chunks
    .map((chunk, i) => {
      if (!chunk) return '';
      if (i % 2 === 1) {
        if (chunk === 'Bulaqueña') return 'Bulaque\\~{n}a';
        return `\\texttt{${escapeCodeText(chunk.slice(1, -1))}}`;
      }
      return chunk
        .split(/(\s+)/)
        .map((tok) => {
          if (!tok) return '';
          if (/^\s+$/.test(tok)) return tok;
          if (MATH_TOKEN_UNICODE_RE.test(tok) || (/[_^]/.test(tok) && !tok.includes('http'))) {
            let core = tok;
            let lead = '';
            let trail = '';
            while (core.length > 1 && /[.,;:!?]$/.test(core)) {
              trail = core[core.length - 1] + trail;
              core = core.slice(0, -1);
            }
            if ((core.match(/\(/g) || []).length > (core.match(/\)/g) || []).length && core.startsWith('(')) {
              lead += '(';
              core = core.slice(1);
            } else if ((core.match(/\)/g) || []).length > (core.match(/\(/g) || []).length && core.endsWith(')')) {
              trail = ')' + trail;
              core = core.slice(0, -1);
            }
            if ((core.match(/\{/g) || []).length > (core.match(/\}/g) || []).length && core.startsWith('{')) {
              lead += '{';
              core = core.slice(1);
            } else if ((core.match(/\}/g) || []).length > (core.match(/\{/g) || []).length && core.endsWith('}')) {
              trail = '}' + trail;
              core = core.slice(0, -1);
            }
            if (core && !SUP_CHAR_RE.test(lead) && !SUB_CHAR_RE.test(trail)) {
              return `${escapeRawText(lead)}$${renderMathBodyToLatex(core)}$${escapeRawText(trail)}`;
            }
          }
          return escapeRawText(tok);
        })
        .join('');
    })
    .join('');
}

function renderTexEquation(eq: SyntheseEquation): string {
  const cleanHtml = eq.unicodeHtml
    .replace(/<sup>(.*?)<\/sup>/gi, '^{$1}')
    .replace(/<sub>(.*?)<\/sub>/gi, '_{$1}')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, '; ')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&');

  const body = renderMathBodyToLatex(cleanHtml);
  const cleanTag = eq.label.replace(/^\(|\)$/g, '').trim();
  const safeLabel = cleanTag.replace(/[^A-Za-z0-9.\-]/g, '-').toLowerCase();
  const parts: string[] = [
    `\\begin{equation}\\label{eq:${safeLabel}}\\tag{${cleanTag}}\n  ${body}\n\\end{equation}`,
    `\\noindent\\textbf{Plain Math Equation:} \\texttt{${escapeCodeText(eq.plainMath)}}`,
    `\\noindent{\\small\\textit{${texProse(eq.caption)}}} \\\\ {\\small ${texProse(eq.plainMeaning)}}`
  ];
  if (eq.provenance) parts.push(`\\noindent\\textbf{Provenance:} ${texProse(eq.provenance)}`);
  if (eq.derivationSteps?.length) {
    parts.push(`\\begin{enumerate}\n${eq.derivationSteps.map((s) => `\\item ${texProse(s)}`).join('\n')}\n\\end{enumerate}`);
  }
  return parts.join('\n\n');
}

function makeLongTable(caption: string, colSpec: string, headers: string[], rows: string[][]): string {
  const headerLine = `${headers.map((h) => `\\textbf{${texProse(h)}}`).join(' & ')} \\\\`;
  const rowLines = rows.map((r) => `${r.map((c) => texProse(c)).join(' & ')} \\\\`).join('\n\\midrule\n');
  return `{\\footnotesize\\setlength{\\tabcolsep}{4pt}
\\begin{longtable}{@{} ${colSpec} @{}}
\\caption{${texProse(caption)}} \\\\
\\toprule
${headerLine}
\\midrule
\\endfirsthead
\\multicolumn{${headers.length}}{@{}l}{\\textit{${texProse(caption)} (continued)}} \\\\
\\toprule
${headerLine}
\\midrule
\\endhead
\\bottomrule
\\endfoot
${rowLines}
\\end{longtable}}`;
}

function renderTexChapterTables(chapterNum: number): string {
  if (chapterNum === 2) {
    return makeLongTable(
      'Taxonomy of Geometric Conventionalisms (G + F) and Empirical Constraints',
      'L{0.18} L{0.18} L{0.18} L{0.16} L{0.18}',
      ['Program', 'Metric Choice', 'Coordinative Bridge', 'Empirical Status', 'IGRT Diagnostic'],
      TABLE_2_1_CONVENTIONALISM.map((r) => [r.program, r.metricChoice, r.coordinativeBridge, r.empiricalStatus, r.igrtDiagnostic])
    );
  }
  if (chapterNum === 3) {
    return makeLongTable(
      'PPN Bounds and Collapse of Scalar gamma = 0 Underdetermination',
      'L{0.18} L{0.18} L{0.16} L{0.14} L{0.22}',
      ['Observable', 'Empirical Bound', 'Naive Scalar', 'Morita & GR', 'Philosophical Implication'],
      TABLE_3_1_PPN_UNDERDETERMINATION.map((r) => [r.observable, r.empiricalBound, r.naiveScalar, r.moritaIgrtAndGr, r.philosophicalImplication])
    );
  }
  if (chapterNum === 4) {
    return makeLongTable(
      'Categorical and Morita Functorial Equivalence Ledger',
      'L{0.16} L{0.20} L{0.20} L{0.18} L{0.14}',
      ['Categorical Object', 'Lorentzian GR', 'InfoGeom IGRT', 'Invariant Preserved', 'Status'],
      TABLE_4_1_MORITA_LEDGER.map((r) => [r.categoricalObject, r.lorentzianGR, r.infoGeomIGRT, r.invariantPreserved, r.status])
    );
  }
  if (chapterNum === 5) {
    return makeLongTable(
      'Functionalist and Structuralist Ontological Matrix',
      'L{0.18} L{0.18} L{0.18} L{0.18} L{0.16}',
      ['Stance', 'Ontic Commitments', 'Functional Role', 'Response to IGRT', 'Synthese Verdict'],
      TABLE_5_1_FUNCTIONALISM_MATRIX.map((r) => [r.stance, r.onticCommitments, r.functionalRoleStatus, r.responseToIGRT, r.syntheseAssessment])
    );
  }
  if (chapterNum === 6) {
    return makeLongTable(
      'Strong-Field Horizon and Regular-Core Ontological Scorecard',
      'L{0.16} L{0.18} L{0.18} L{0.18} L{0.18}',
      ['Domain Feature', 'Standard GR', 'Regular IGRT', 'Ontological Status', 'Empirical Handle'],
      TABLE_6_1_STRONG_FIELD_ONTOLOGY.map((r) => [r.domainFeature, r.standardGR, r.regularIGRT, r.ontologicalStatus, r.empiricalHandle])
    );
  }
  if (chapterNum === 7) {
    return makeLongTable(
      'Bayesian Evidence and Fisher MDL Epistemic Audit',
      'L{0.18} L{0.08} L{0.16} L{0.12} L{0.16} L{0.18}',
      ['Framework', 'k', 'Chi2 Data', 'MDL Penalty', 'Log Bayes vs GR', 'Methodology Lesson'],
      TABLE_7_1_BAYESIAN_MDL.map((r) => [r.framework, r.paramsK, r.chiSquareData, r.fisherMdlPenalty, r.logBayesVsGR, r.methodologyLesson])
    );
  }
  if (chapterNum === 8) {
    return makeLongTable(
      '2026-2035 Crucial Experiments and Falsification Thresholds',
      'L{0.16} L{0.09} L{0.17} L{0.16} L{0.15} L{0.15}',
      ['Experiment', 'Window', 'Observable', 'If Confirmed', 'If Null', 'Lakatosian Role'],
      TABLE_8_1_CRUCIAL_EXPERIMENTS.map((r) => [r.experiment, r.window, r.targetObservable, r.ifConfirmed, r.ifNull, r.lakatosianRole])
    );
  }
  return '';
}

export function buildSyntheseLatex(): string {
  const raw = `\\documentclass[11pt,a4paper]{article}
\\usepackage[a4paper,margin=22mm]{geometry}
\\usepackage[T1]{fontenc}
\\usepackage[utf8]{inputenc}
\\usepackage{lmodern}
\\usepackage{amsmath,amssymb,array,booktabs,longtable,ragged2e,xurl,microtype}
\\usepackage[hidelinks,breaklinks=true]{hyperref}
\\emergencystretch=1.5em
\\newcolumntype{L}[1]{>{\\RaggedRight\\arraybackslash}p{#1\\textwidth}}

\\hypersetup{
  pdftitle={${escapeRawText(SYNTHESE_META.title)}},
  pdfauthor={${escapeRawText(SYNTHESE_META.authors.map((a) => a.name).join(', '))}}
}

\\title{${texProse(SYNTHESE_META.title)} \\\\ \\large\\textit{${texProse(SYNTHESE_META.laymanDeck)}}}
\\author{${SYNTHESE_META.authors.map((a) => `${texProse(a.name)} (${texProse(a.affiliation)})`).join(' \\and ')}}
\\date{2026 (Synthese Journal Submission Manuscript)}

\\begin{document}
\\sloppy
\\maketitle

\\begin{abstract}
${SYNTHESE_ABSTRACT.map((p) => texProse(p)).join('\n\n')}
\\end{abstract}

\\noindent\\textbf{Keywords:} ${SYNTHESE_META.keywords.map((k) => texProse(k)).join('; ')}.

\\tableofcontents

\\section*{List of Plates and Figures}
\\begin{description}
${SYNTHESE_PLATES_INDEX.map((pl) => `  \\item[${texProse(pl.plateNumber)} (Ch. ${pl.anchorChapter})] ${texProse(pl.title)}: ${texProse(pl.caption)}`).join('\n')}
${SYNTHESE_FIGURES.map((fg) => `  \\item[${texProse(fg.figureNumber)} (Ch. ${fg.anchorChapter})] ${texProse(fg.title)}: ${texProse(fg.caption)}`).join('\n')}
\\end{description}

${SYNTHESE_CHAPTERS.map(
  (ch) => `\\clearpage
\\section{${texProse(ch.title)}}
\\noindent\\textit{${texProse(ch.leadSummary)}}

\\paragraph*{Editorial Opening}
${ch.chapterIntro.map((p) => texProse(p)).join('\n\n')}

${ch.subsections
  .map(
    (sub) => `\\subsection{${texProse(sub.title)}}
${sub.paragraphs.map((p) => texProse(p)).join('\n\n')}${
      sub.equation ? `\n\n${renderTexEquation(sub.equation)}` : ''
    }${
      sub.theoremBox
        ? `\n\n\\noindent\\textbf{${texProse(sub.theoremBox.kind)} ${texProse(sub.theoremBox.number)}: ${texProse(sub.theoremBox.title)}.} ${texProse(sub.theoremBox.statement)}\n\\begin{enumerate}\n${sub.theoremBox.proofSteps.map((s) => `\\item ${texProse(s)}`).join('\n')}\n\\end{enumerate}\n\\textit{Provenance:} ${texProse(sub.theoremBox.sourceNote)}`
        : ''
    }${
      sub.workedExample
        ? `\n\n\\noindent\\textbf{${texProse(sub.workedExample.title)}.} \\textit{${texProse(sub.workedExample.setup)}}\n\\begin{enumerate}\n${sub.workedExample.steps.map((s) => `\\item ${texProse(s)}`).join('\n')}\n\\end{enumerate}\n${renderTexEquation(sub.workedExample.resultEquation)}\n\\textit{Takeaway:} ${texProse(sub.workedExample.takeaway)}`
        : ''
    }`
  )
  .join('\n\n')}

${renderTexChapterTables(ch.number)}`
).join('\n\n')}

\\clearpage
\\section*{Glossary}
\\begin{description}
${SYNTHESE_GLOSSARY.map((g) => `  \\item[${texProse(g.term)}] ${texProse(g.definition)}`).join('\n')}
\\end{description}

${makeLongTable(
  'Glossary of Formal Symbols',
  'L{0.14} L{0.20} L{0.18} L{0.36}',
  ['Symbol', 'Formal Quantity', 'Domain', 'Definition'],
  SYNTHESE_SYMBOL_GLOSSARY.map((s) => [s.symbol, s.name, s.domain, s.definition])
)}

\\appendix
${SYNTHESE_APPENDICES.map(
  (a) => `\\clearpage
\\section{${texProse(a.title)}}
\\textit{${texProse(a.summary)}}

${a.paragraphs.map((p) => texProse(p)).join('\n\n')}

${a.equations.map((eq) => renderTexEquation(eq)).join('\n\n')}

${
  a.reproducibilityLedger?.length
    ? makeLongTable(
        'Epistemic and Numerical Reproducibility Ledger',
        'L{0.20} L{0.22} L{0.22} L{0.24}',
        ['Checkpoint', 'Formula', 'Reference Constants', 'Computed Output'],
        a.reproducibilityLedger.map((r) => [r.checkpoint, r.formula, r.referenceConstants, r.computedOutput])
      )
    : ''
}

${
  a.refereeObjections?.length
    ? `\\begin{description}\n${a.refereeObjections.map((o) => `  \\item[${texProse(o.objection)}] ${texProse(o.reply)}`).join('\n')}\n\\end{description}`
    : ''
}`
).join('\n\n')}

\\clearpage
\\begin{thebibliography}{99}
${SYNTHESE_REFERENCES.map((r) => `\\bibitem{ref${r.id}} ${texProse(r.citation)}`).join('\n')}
\\end{thebibliography}

\\end{document}
`;
  return raw.replace(/[^\x00-\x7F]/g, '');
}

export function downloadSyntheseHtml(): void {
  const blob = new Blob([buildSyntheseSelfContainedHtml()], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Paper_15_Synthese_Structural_Equivalence.html';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export function downloadSyntheseMarkdown(): void {
  const blob = new Blob([buildSyntheseMarkdown()], { type: 'text/markdown;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Paper_15_Synthese_Structural_Equivalence.md';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export function downloadSyntheseLatex(): void {
  const blob = new Blob([buildSyntheseLatex()], { type: 'application/x-tex;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Paper_15_Synthese_Structural_Equivalence.tex';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
