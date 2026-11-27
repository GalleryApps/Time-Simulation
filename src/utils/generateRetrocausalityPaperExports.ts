/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Self-contained Scientific Magazine HTML, Markdown, and Pure-ASCII LaTeX Exporters
 * for Paper 16: "The Universe Remembers Its Future"
 * Includes paired Plain Equation Format alongside every formatted equation across HTML, Markdown, and LaTeX.
 */

import {
  RETRO_META,
  RETRO_ABSTRACT,
  RETRO_CENTRAL_THESIS,
  RETRO_RESEARCH_QUESTIONS,
  RETRO_CONCEPTUAL_CONTRIBUTION,
  RETRO_IMPLICATION_AND_CONCLUSION,
  RETRO_PRINCIPLES_TABLE,
  TABLE_A1_INDEPENDENCE_RELATIONS,
  TABLE_A2_FORMAL_SYMBOLS_AND_CLAUSES,
  RETRO_ARGUMENT_MAP,
  RETRO_CHAPTERS,
  TABLE_1_1_FOURFOLD_TAXONOMY,
  TABLE_1_2_TAXONOMY_TO_PRINCIPLES,
  TABLE_2_1_SOLUTIONS,
  TABLE_2_2_PHILOSOPHY_TO_PHYSICS,
  TABLE_3_1_BOUNDARY,
  TABLE_5_1_INFLUENCE_VS_CONSISTENCY,
  TABLE_6_1_QUANTUM_RETRO,
  TABLE_7_1_THERMO_ARROWS,
  TABLE_8_1_FIVE_RELATIONS,
  TABLE_8_2_EMPIRICAL_PROTOCOLS,
  TABLE_8_3_CHAPTER_1_ANSWERS,
  RETRO_SYMBOL_GLOSSARY,
  RETRO_GLOSSARY,
  RETRO_APPENDICES,
  RETRO_REFERENCES,
  RETRO_INDEX_OF_NAMES,
  RETRO_INDEX_OF_CONCEPTS,
  type RetroEquation,
  type RetroTheoremBox,
  type RetroWorkedExample
} from '../types/retrocausalityPaperData';
import { RETRO_FIGURES, RETRO_PLATES_META } from '../types/retrocausalityPaperFigures';
import { formatSvgMathMarkup } from './formatMathUnicode';

function escapeHtml(raw: string): string {
  return raw
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function renderHtmlNonBoldTokens(raw: string): string {
  const codeSplit = raw.split(/(`[^`]+`)/g);
  return codeSplit
    .map((seg, i) => {
      if (!seg) return '';
      if (i % 2 === 1) return `<code>${escapeHtml(seg.slice(1, -1))}</code>`;
      const italicSplit = seg.split(/(\*(?!\s)[^*\n]+?(?<!\s)\*)/g);
      return italicSplit
        .map((itSeg, k) => {
          if (!itSeg) return '';
          if (k % 2 === 1) return `<em>${escapeHtml(itSeg.slice(1, -1))}</em>`;
          return escapeHtml(itSeg);
        })
        .join('');
    })
    .join('');
}

function renderHtmlInlineTokens(raw: string): string {
  const boldSplit = raw.split(/(\*\*[^\n]+?\*\*)/g);
  return boldSplit
    .map((bSeg, j) => {
      if (!bSeg) return '';
      if (j % 2 === 1) return `<strong>${renderHtmlNonBoldTokens(bSeg.slice(2, -2))}</strong>`;
      return renderHtmlNonBoldTokens(bSeg);
    })
    .join('');
}

function renderHtmlRichParagraph(raw: string): string {
  return raw
    .split('\n')
    .map((line) => {
      if (line.startsWith('### ')) {
        return `<h4 class="sub-head">${renderHtmlInlineTokens(line.slice(4))}</h4>`;
      }
      return `<p>${renderHtmlInlineTokens(line)}</p>`;
    })
    .join('');
}

function renderHtmlEquation(eq: RetroEquation): string {
  return `<div class="eq-box">
    <div class="eq-math">${eq.unicodeHtml} <span class="eq-num">Logical Schema ${escapeHtml(eq.label)}</span></div>
    <div class="eq-plain"><strong>Plain Equation:</strong> <code>${escapeHtml(eq.plainEquation)}</code></div>
    <div class="eq-cap">${escapeHtml(eq.caption)}</div>
    <div class="eq-meaning">${escapeHtml(eq.plainMeaning)}</div>
    ${
      eq.derivationSteps?.length
        ? `<ol class="deriv-list">${eq.derivationSteps.map((s) => `<li>${renderHtmlInlineTokens(s)}</li>`).join('')}</ol>`
        : ''
    }
  </div>`;
}

function renderHtmlTheorem(tb: RetroTheoremBox): string {
  return `<div class="theorem-box">
    <div class="box-title">${escapeHtml(tb.kind)} ${escapeHtml(tb.number)} · ${escapeHtml(tb.title)}</div>
    <p>${renderHtmlInlineTokens(tb.statement)}</p>
    <ol>${tb.proofSteps.map((s) => `<li>${renderHtmlInlineTokens(s)}</li>`).join('')}</ol>
    <div class="box-note">${escapeHtml(tb.sourceNote)}</div>
  </div>`;
}

function renderHtmlWorkedExample(wx: RetroWorkedExample): string {
  return `<div class="worked-box">
    <div class="box-title">${escapeHtml(wx.title)}</div>
    <p class="epigraph">${renderHtmlInlineTokens(wx.setup)}</p>
    <ol>${wx.steps.map((s) => `<li>${renderHtmlInlineTokens(s)}</li>`).join('')}</ol>
    ${renderHtmlEquation(wx.resultEquation)}
    <p class="lead"><strong>Conclusion:</strong> ${renderHtmlInlineTokens(wx.takeaway)}</p>
  </div>`;
}

function renderHtmlChapterTable(chapterNum: number): string {
  if (chapterNum === 1) {
    return `
      <h3>Table 1.1 · Comprehensive Four-Domain Philosophical Taxonomy: Time, Causation, Explanation &amp; Information</h3>
      <table>
        <thead><tr><th>Domain</th><th>Taxonomic Sub-Classes</th><th>Symmetry &amp; Boundary Profile</th><th>Category Mistake if Conflated</th></tr></thead>
        <tbody>${TABLE_1_1_FOURFOLD_TAXONOMY.map((r) => `<tr><td>${escapeHtml(r.domain)}</td><td>${escapeHtml(r.subClass)}</td><td>${escapeHtml(r.symmetryProfile)}</td><td>${escapeHtml(r.explanatoryMisstep)}</td></tr>`).join('')}</tbody>
      </table>
      <h3>Table 1.2 · Structure-Preserving Conceptual Crosswalk: Four-Domain Taxonomy (T/C/E/I) to Principles R1–R4</h3>
      <table>
        <thead><tr><th>Taxonomy Stratum</th><th>Primary Principle(s)</th><th>Functional Role in TDCD</th></tr></thead>
        <tbody>${TABLE_1_2_TAXONOMY_TO_PRINCIPLES.map((r) => `<tr><td>${escapeHtml(r.stratumGroup)}</td><td>${escapeHtml(r.primaryPrinciple)}</td><td>${escapeHtml(r.functionalRole)}</td></tr>`).join('')}</tbody>
      </table>`;
  }
  if (chapterNum === 2) {
    return `
      <h3>Table 2.1 · Retarded, Advanced, Symmetric &amp; QFT Propagator Solutions</h3>
      <table>
        <thead><tr><th>Formulation</th><th>Green’s Kernel</th><th>Boundary Role</th><th>Physical Realizability</th></tr></thead>
        <tbody>${TABLE_2_1_SOLUTIONS.map((r) => `<tr><td>${escapeHtml(r.framework)}</td><td>${escapeHtml(r.greenKernel)}</td><td>${escapeHtml(r.boundaryRole)}</td><td>${escapeHtml(r.realizabilityStatus)}</td></tr>`).join('')}</tbody>
      </table>
      <h3>Table 2.2 · Crosswalk Expanding Chapter 1’s Philosophical Taxonomy into Chapter 2 Physical Formalisms</h3>
      <table>
        <thead><tr><th>Chapter 1 Node</th><th>Core Philosophical Question</th><th>Chapter 2 Physical Formalism</th><th>Key Result</th></tr></thead>
        <tbody>${TABLE_2_2_PHILOSOPHY_TO_PHYSICS.map((r) => `<tr><td>${escapeHtml(r.philosophicalNode)}</td><td>${escapeHtml(r.chapter1Question)}</td><td>${escapeHtml(r.physicalFormalism)}</td><td>${escapeHtml(r.keyResult)}</td></tr>`).join('')}</tbody>
      </table>`;
  }
  if (chapterNum === 3) {
    return `
      <h3>Table 3.1 · Cauchy Unfolding vs. Two-Boundary Variational Formulations</h3>
      <table>
        <thead><tr><th>Formulation</th><th>Boundary Data</th><th>Determination Mode</th><th>Conceptual Risk</th></tr></thead>
        <tbody>${TABLE_3_1_BOUNDARY.map((r) => `<tr><td>${escapeHtml(r.formulation)}</td><td>${escapeHtml(r.boundaryData)}</td><td>${escapeHtml(r.determinationMode)}</td><td>${escapeHtml(r.conceptualRisk)}</td></tr>`).join('')}</tbody>
      </table>`;
  }
  if (chapterNum === 5) {
    return `
      <h3>Table 5.1 · Backward Causal Influence vs. Global Consistency</h3>
      <table>
        <thead><tr><th>Dimension</th><th>Backward Influence (P1)</th><th>Global Consistency (P2)</th></tr></thead>
        <tbody>${TABLE_5_1_INFLUENCE_VS_CONSISTENCY.map((r) => `<tr><td>${escapeHtml(r.dimension)}</td><td>${escapeHtml(r.backwardInfluence)}</td><td>${escapeHtml(r.globalConsistency)}</td></tr>`).join('')}</tbody>
      </table>`;
  }
  if (chapterNum === 6) {
    return `
      <h3>Table 6.1 · Quantum Measurement &amp; Temporal Boundary Protocols</h3>
      <table>
        <thead><tr><th>Protocol</th><th>Boundary Structure</th><th>Observable Consequence</th><th>Signalling Status</th></tr></thead>
        <tbody>${TABLE_6_1_QUANTUM_RETRO.map((r) => `<tr><td>${escapeHtml(r.protocol)}</td><td>${escapeHtml(r.boundaryStructure)}</td><td>${escapeHtml(r.observableConsequence)}</td><td>${escapeHtml(r.signallingStatus)}</td></tr>`).join('')}</tbody>
      </table>`;
  }
  if (chapterNum === 7) {
    return `
      <h3>Table 7.1 · Arrows of Time in Temporally Distributed Causation</h3>
      <table>
        <thead><tr><th>Arrow</th><th>Symmetry Status</th><th>Physical Source</th><th>Role in TDCD</th></tr></thead>
        <tbody>${TABLE_7_1_THERMO_ARROWS.map((r) => `<tr><td>${escapeHtml(r.arrow)}</td><td>${escapeHtml(r.symmetryStatus)}</td><td>${escapeHtml(r.physicalSource)}</td><td>${escapeHtml(r.roleInTDCD)}</td></tr>`).join('')}</tbody>
      </table>`;
  }
  if (chapterNum === 8) {
    return `
      <h3>Table 8.1 · Five-Fold Conceptual Taxonomy of Temporally Distributed Causation</h3>
      <table>
        <thead><tr><th>Relation</th><th>Temporal Locus</th><th>Formal Signature</th><th>Explanatory Function</th></tr></thead>
        <tbody>${TABLE_8_1_FIVE_RELATIONS.map((r) => `<tr><td>${escapeHtml(r.relation)}</td><td>${escapeHtml(r.temporalLocus)}</td><td>${escapeHtml(r.formalSignature)}</td><td>${escapeHtml(r.explanatoryFunction)}</td></tr>`).join('')}</tbody>
      </table>
      <h3>Table 8.2 · Empirical Discriminators</h3>
      <table>
        <thead><tr><th>Domain</th><th>Target Observable</th><th>Past-Only Model</th><th>Two-Boundary Model</th></tr></thead>
        <tbody>${TABLE_8_2_EMPIRICAL_PROTOCOLS.map((r) => `<tr><td>${escapeHtml(r.domain)}</td><td>${escapeHtml(r.observable)}</td><td>${escapeHtml(r.pastOnlyModel)}</td><td>${escapeHtml(r.twoBoundaryModel)}</td></tr>`).join('')}</tbody>
      </table>
      <h3>Table 8.3 · Direct Answer Key: Chapter 1 Historical Puzzles &amp; Taxonomic Strata Resolved by TDCD</h3>
      <table>
        <thead><tr><th>Chapter 1 Lineage / Node</th><th>Foundational Puzzle</th><th>Physical &amp; Formal Mechanism</th><th>TDCD Resolution</th></tr></thead>
        <tbody>${TABLE_8_3_CHAPTER_1_ANSWERS.map((r) => `<tr><td>${escapeHtml(r.chapter1Node)}</td><td>${escapeHtml(r.legacyPuzzle)}</td><td>${escapeHtml(r.mechanism)}</td><td>${escapeHtml(r.tdcdResolution)}</td></tr>`).join('')}</tbody>
      </table>`;
  }
  return '';
}

export function buildRetrocausalitySelfContainedHtml(): string {
  const plateBlock = (p: (typeof RETRO_PLATES_META)[number]) => `
    <figure class="a4-plate" style="background:${escapeHtml(p.bgHex)};border-color:${escapeHtml(p.accentHex)};">
      <div class="plate-meta" style="border-color:${escapeHtml(p.accentHex)};">${escapeHtml(p.plateNumber)} · ${p.anchorChapter === 0 ? 'Graphical Abstract' : `Part ${p.anchorChapter}`} · ${escapeHtml(p.hueFamily)}: ${escapeHtml(p.shadeName)} (${escapeHtml(p.bgHex)}) · Accent: ${escapeHtml(p.accentShadeName)} (${escapeHtml(p.accentHex)})</div>
      <div class="plate-title">${escapeHtml(p.title)}</div>
      <figcaption>${escapeHtml(p.caption)}</figcaption>
    </figure>`;

  const graphicalAbstractHtml = [
    ...RETRO_PLATES_META.filter((p) => p.anchorChapter === 0).map(plateBlock),
    ...RETRO_FIGURES.filter((f) => f.anchorChapter === 0).map(
      (fg) => `
    <figure>
      <div class="fig-meta">${escapeHtml(fg.figureNumber)} · ${escapeHtml(fg.title)}</div>
      ${formatSvgMathMarkup(fg.svgMarkup)}
      <figcaption>${escapeHtml(fg.caption)}</figcaption>
    </figure>`
    )
  ].join('\n');

  const chaptersHtml = RETRO_CHAPTERS.map((ch) => {
    const plates = RETRO_PLATES_META.filter((p) => p.anchorChapter === ch.number);
    const figs = RETRO_FIGURES.filter((f) => f.anchorChapter === ch.number);
    return `
      <section class="chapter">
        <h2>Part ${ch.number}: ${escapeHtml(ch.title)}</h2>
        <p class="epigraph">${escapeHtml(ch.epigraph)}</p>
        <blockquote class="pull-quote">${escapeHtml(ch.pullQuote)}</blockquote>
        <p class="lead">${escapeHtml(ch.leadSummary)}</p>
        ${ch.chapterIntro.length ? `<div class="chapter-intro">${ch.chapterIntro.map((p) => renderHtmlRichParagraph(p)).join('')}</div>` : ''}
        ${ch.subsections
          .map(
            (sub) => `
          <div class="subsec">
            <h3>§${escapeHtml(sub.number)} · ${escapeHtml(sub.title)}</h3>
            ${sub.paragraphs.map((p) => renderHtmlRichParagraph(p)).join('')}
            ${sub.equation ? renderHtmlEquation(sub.equation) : ''}
            ${sub.theoremBox ? renderHtmlTheorem(sub.theoremBox) : ''}
            ${sub.secondaryTheoremBox ? renderHtmlTheorem(sub.secondaryTheoremBox) : ''}
            ${sub.workedExample ? renderHtmlWorkedExample(sub.workedExample) : ''}
          </div>`
          )
          .join('')}
        ${renderHtmlChapterTable(ch.number)}
        ${plates.map(plateBlock).join('\n')}
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

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>${escapeHtml(RETRO_META.title)}</title>
<style>
  body { font-family: Georgia, "Times New Roman", serif; color: #161A1D; background: #FAF6EC; margin: 0; padding: 3rem 1.5rem; line-height: 1.78; }
  main { max-width: 860px; margin: 0 auto; background: #FDFBF7; padding: 3.5rem; border: 1px solid #CBBBA0; }
  h1, h2, h3, h4 { font-weight: 400; color: #161A1D; }
  h1 { font-size: 2.25rem; line-height: 1.18; margin: 0.4rem 0 0.75rem; }
  h2 { font-size: 1.58rem; border-bottom: 1px solid #CBBBA0; padding-bottom: 0.45rem; margin-top: 2.8rem; }
  h3 { font-size: 1.18rem; color: #0B3942; margin-top: 1.9rem; }
  .masthead-rule { border-top: 3px solid #11505C; border-bottom: 1px solid #661447; height: 4px; margin-bottom: 1.8rem; }
  .layman-deck { font-size: 1.12rem; color: #4A0E33; font-style: italic; margin: 0.5rem 0 1.2rem; }
  .epigraph { font-style: italic; color: #11505C; }
  .pull-quote { border-top: 1px solid #CBBBA0; border-bottom: 1px solid #CBBBA0; margin: 1.4rem 0; padding: 0.9rem 0; font-size: 1.15rem; font-style: italic; color: #4A0E33; text-align: center; }
  .lead { color: #0F3D2B; font-style: italic; }
  .chapter-intro { border-top: 1px solid #CBBBA0; border-bottom: 1px solid #CBBBA0; background: #FAF6EC; padding: 1rem 1.35rem; margin: 1.4rem 0 2rem; }
  .eq-box, .theorem-box, .worked-box { background: #FAF6EC; border: 1px solid #CBBBA0; padding: 1rem 1.25rem; margin: 1.5rem 0; }
  .theorem-box { background: #F9EEF4; border-color: #831B5B; }
  .eq-math { font-size: 1.05rem; border-bottom: 1px solid #E2D6C1; padding-bottom: 0.5rem; margin-bottom: 0.5rem; }
  .eq-plain { font-family: monospace; font-size: 0.84rem; color: #0B3942; background: #F4EFE6; padding: 0.35rem 0.6rem; margin-bottom: 0.45rem; border-left: 2px solid #11505C; overflow-x: auto; }
  .eq-num { float: right; font-family: monospace; font-size: 0.8rem; color: #661447; }
  .eq-cap { font-style: italic; font-size: 0.9rem; color: #11505C; }
  .eq-meaning { font-size: 0.9rem; color: #0F3D2B; margin-top: 0.25rem; }
  table { width: 100%; border-collapse: collapse; margin: 1.4rem 0; font-size: 0.85rem; }
  th, td { border: 1px solid #CBBBA0; padding: 0.5rem 0.6rem; text-align: left; }
  th { background: #EDF5F6; color: #0B3942; }
  figure { border: 1px solid #CBBBA0; padding: 1rem; margin: 1.8rem 0; background: #FAF6EC; }
  figure.a4-plate { background: #081B38; color: #FFFFFF; border-color: #173668; padding: 1.4rem; }
  figure.a4-plate .plate-meta { font-family: monospace; font-size: 0.78rem; color: #DCE8FF; border-bottom: 1px solid rgba(255,255,255,0.22); padding-bottom: 0.45rem; margin-bottom: 0.75rem; }
  figure.a4-plate .plate-title { font-size: 1.15rem; color: #FFFFFF; margin-bottom: 0.45rem; }
  figure.a4-plate figcaption { color: #DCE8FF; margin-top: 0.4rem; }
  figcaption { font-size: 0.88rem; color: #0B3942; margin-top: 0.6rem; }
  .fig-meta { font-family: monospace; font-size: 0.8rem; color: #11505C; margin-bottom: 0.5rem; }
</style>
</head>
<body>
<main>
  <div class="masthead-rule"></div>
  <h1>${escapeHtml(RETRO_META.title)}</h1>
  <p class="layman-deck">${escapeHtml(RETRO_META.laymanDeck)}</p>
  <p><strong>Authors:</strong> ${RETRO_META.authors.map((a) => `${escapeHtml(a.name)} (${escapeHtml(a.affiliation)}${a.orcid ? `, ORCID: ${escapeHtml(a.orcid)}` : ''})`).join(' · ')}</p>
  <p style="font-size:0.84rem;color:#11505C;">${escapeHtml(RETRO_META.institutionalDisclaimer)}</p>
  <p style="font-size:0.84rem;color:#4A0E33;font-style:italic;">${escapeHtml(RETRO_META.venueFormatNote)}</p>
  <h2>Abstract</h2>
  ${RETRO_ABSTRACT.map((p) => `<p>${escapeHtml(p)}</p>`).join('\n')}
  <p><strong>Keywords:</strong> ${escapeHtml(RETRO_META.keywords.join('; '))}</p>
  <div class="worked-box">
    <div class="box-title">${escapeHtml(RETRO_CENTRAL_THESIS.title)}</div>
    <p><strong>${escapeHtml(RETRO_CENTRAL_THESIS.lead)}</strong></p>
    ${RETRO_CENTRAL_THESIS.elaboration.map((p) => `<p>${escapeHtml(p)}</p>`).join('')}
  </div>
  ${graphicalAbstractHtml}
  <h2>Temporal Boundary Principles (R1–R4)</h2>
  <table>
    <thead><tr><th>Principle</th><th>Canonical Formula</th><th>Epistemic Status</th><th>Failure Mode</th><th>Empirical Signature</th></tr></thead>
    <tbody>${RETRO_PRINCIPLES_TABLE.map((r) => `<tr><td>${escapeHtml(r.code)} · ${escapeHtml(r.name)}</td><td>${escapeHtml(r.canonicalFormula)}</td><td>${escapeHtml(r.epistemicStatus)}</td><td>${escapeHtml(r.failureOnDenial)}</td><td>${escapeHtml(r.empiricalSignature)}</td></tr>`).join('')}</tbody>
  </table>
  <h3>Table A.1 · Independence Relations Among Principles R1–R4</h3>
  <table>
    <thead><tr><th>Principle Pair</th><th>Logical Status</th><th>Formal Justification</th></tr></thead>
    <tbody>${TABLE_A1_INDEPENDENCE_RELATIONS.map((r) => `<tr><td>${escapeHtml(r.pair)}</td><td>${escapeHtml(r.status)}</td><td>${escapeHtml(r.justification)}</td></tr>`).join('')}</tbody>
  </table>
  <h3>Table A.2 · Formal Satisfaction Clauses &amp; Mathematical Function Spaces</h3>
  <table>
    <thead><tr><th>Symbol / Clause</th><th>Formal Definition</th><th>Underlying Space &amp; Scope</th></tr></thead>
    <tbody>${TABLE_A2_FORMAL_SYMBOLS_AND_CLAUSES.map((r) => `<tr><td><code>${escapeHtml(r.symbol)}</code></td><td>${escapeHtml(r.formalDefinition)}</td><td>${escapeHtml(r.mathematicalSpace)}</td></tr>`).join('')}</tbody>
  </table>
  <h2>The Questions That Drive the Research</h2>
  <ol>${RETRO_RESEARCH_QUESTIONS.map((q) => `<li>${escapeHtml(q)}</li>`).join('')}</ol>
  ${chaptersHtml}
  <h2>${escapeHtml(RETRO_CONCEPTUAL_CONTRIBUTION.title)}</h2>
  ${RETRO_CONCEPTUAL_CONTRIBUTION.paragraphs.map((p) => `<p>${escapeHtml(p)}</p>`).join('')}
  <h2>${escapeHtml(RETRO_IMPLICATION_AND_CONCLUSION.implicationTitle)}</h2>
  ${RETRO_IMPLICATION_AND_CONCLUSION.implicationParagraphs.map((p) => `<p>${escapeHtml(p)}</p>`).join('')}
  <h2>${escapeHtml(RETRO_IMPLICATION_AND_CONCLUSION.concludingTitle)}</h2>
  ${RETRO_IMPLICATION_AND_CONCLUSION.concludingParagraphs.map((p) => `<p>${escapeHtml(p)}</p>`).join('')}
  <h2>Symbol Glossary</h2>
  <table>
    <thead><tr><th>Symbol</th><th>Concept</th><th>Domain</th><th>Definition</th></tr></thead>
    <tbody>${RETRO_SYMBOL_GLOSSARY.map((s) => `<tr><td><code>${escapeHtml(s.symbol)}</code></td><td>${escapeHtml(s.name)}</td><td>${escapeHtml(s.domain)}</td><td>${escapeHtml(s.definition)}</td></tr>`).join('')}</tbody>
  </table>
  <h2>Glossary</h2>
  ${RETRO_GLOSSARY.map((g) => `<p><strong>${escapeHtml(g.term)}${g.acronym ? ` (${escapeHtml(g.acronym)})` : ''}:</strong> ${escapeHtml(g.definition)}</p>`).join('\n')}
  <h2>Appendices</h2>
  ${RETRO_APPENDICES.map((a) => `<h3>Appendix ${escapeHtml(a.letter)}: ${escapeHtml(a.title)}</h3><p><em>${escapeHtml(a.summary)}</em></p>${a.paragraphs.map((p) => `<p>${escapeHtml(p)}</p>`).join('')}${a.equations.map(renderHtmlEquation).join('')}${a.refereeObjections ? a.refereeObjections.map((o) => `<p><strong>${escapeHtml(o.objection)}</strong><br/>${escapeHtml(o.reply)}</p>`).join('') : ''}`).join('\n')}
  <h2>References</h2>
  <ol>${RETRO_REFERENCES.map((r) => `<li>${escapeHtml(r.citation)}</li>`).join('')}</ol>
  <h2>Index of Names &amp; Concepts</h2>
  <p><strong>Names:</strong> ${RETRO_INDEX_OF_NAMES.map((n) => `${escapeHtml(n.entry)} (${escapeHtml(n.sections)})`).join('; ')}</p>
  <p><strong>Concepts:</strong> ${RETRO_INDEX_OF_CONCEPTS.map((c) => `${escapeHtml(c.entry)} (${escapeHtml(c.sections)})`).join('; ')}</p>
</main>
</body>
</html>`;
}

export function buildRetrocausalityMarkdown(): string {
  const parts: string[] = [];
  parts.push(`# ${RETRO_META.title}`);
  parts.push(`*${RETRO_META.laymanDeck}*`);
  parts.push('');
  parts.push(`**Authors:** ${RETRO_META.authors.map((a) => `${a.name} (${a.affiliation}${a.orcid ? `, ORCID: ${a.orcid}` : ''})`).join('; ')}`);
  parts.push('');
  parts.push(`*${RETRO_META.institutionalDisclaimer}*`);
  parts.push(`*${RETRO_META.venueFormatNote}*`);
  parts.push('');
  parts.push('## Abstract');
  RETRO_ABSTRACT.forEach((p) => parts.push(p, ''));
  parts.push(`**Keywords:** ${RETRO_META.keywords.join('; ')}`);
  parts.push('');
  parts.push(`## ${RETRO_CENTRAL_THESIS.title}`);
  parts.push(`> ${RETRO_CENTRAL_THESIS.lead}`);
  RETRO_CENTRAL_THESIS.elaboration.forEach((p) => parts.push('', p));
  parts.push('');
  parts.push('## The Questions That Drive the Research');
  RETRO_RESEARCH_QUESTIONS.forEach((q, i) => parts.push(`${i + 1}. ${q}`));
  parts.push('');

  for (const ch of RETRO_CHAPTERS) {
    parts.push(`## Part ${ch.number}: ${ch.title}`);
    parts.push(`*${ch.epigraph}*`);
    parts.push(`> ${ch.pullQuote}`);
    parts.push(ch.leadSummary, '');
    ch.chapterIntro.forEach((p) => parts.push(p, ''));
    for (const sub of ch.subsections) {
      parts.push(`### §${sub.number} · ${sub.title}`);
      sub.paragraphs.forEach((p) => parts.push(p, ''));
      if (sub.equation) {
        parts.push(`**Logical Schema ${sub.equation.label}:**`);
        parts.push(`- **Plain Equation:** \`${sub.equation.plainEquation}\``);
        parts.push(`- *${sub.equation.caption}* — ${sub.equation.plainMeaning}`, '');
      }
      if (sub.theoremBox) {
        parts.push(`**${sub.theoremBox.kind} ${sub.theoremBox.number} (${sub.theoremBox.title}):** ${sub.theoremBox.statement}`);
        sub.theoremBox.proofSteps.forEach((s, i) => parts.push(`${i + 1}. ${s}`));
        parts.push('');
      }
      if (sub.secondaryTheoremBox) {
        parts.push(`**${sub.secondaryTheoremBox.kind} ${sub.secondaryTheoremBox.number} (${sub.secondaryTheoremBox.title}):** ${sub.secondaryTheoremBox.statement}`);
        sub.secondaryTheoremBox.proofSteps.forEach((s, i) => parts.push(`${i + 1}. ${s}`));
        parts.push('');
      }
      if (sub.workedExample) {
        parts.push(`**${sub.workedExample.title}:** ${sub.workedExample.setup}`);
        sub.workedExample.steps.forEach((s, i) => parts.push(`${i + 1}. ${s}`));
        parts.push(`- **Plain Equation (${sub.workedExample.resultEquation.label}):** \`${sub.workedExample.resultEquation.plainEquation}\``);
        parts.push(`- *Conclusion:* ${sub.workedExample.takeaway}`, '');
      }
    }
    if (ch.number === 1) {
      parts.push('### Table 1.2 · Structure-Preserving Conceptual Crosswalk (T/C/E/I to R1–R4)');
      TABLE_1_2_TAXONOMY_TO_PRINCIPLES.forEach((r) =>
        parts.push(`- **${r.stratumGroup}** -> *${r.primaryPrinciple}*: ${r.functionalRole}`)
      );
      parts.push('');
    }
  }

  parts.push(`## ${RETRO_CONCEPTUAL_CONTRIBUTION.title}`);
  RETRO_CONCEPTUAL_CONTRIBUTION.paragraphs.forEach((p) => parts.push(p, ''));
  parts.push(`## ${RETRO_IMPLICATION_AND_CONCLUSION.implicationTitle}`);
  RETRO_IMPLICATION_AND_CONCLUSION.implicationParagraphs.forEach((p) => parts.push(p, ''));
  parts.push(`## ${RETRO_IMPLICATION_AND_CONCLUSION.concludingTitle}`);
  RETRO_IMPLICATION_AND_CONCLUSION.concludingParagraphs.forEach((p) => parts.push(p, ''));
  parts.push('## Appendices');
  for (const app of RETRO_APPENDICES) {
    parts.push(`### Appendix ${app.letter}: ${app.title}`);
    parts.push(app.summary, '');
    app.paragraphs.forEach((p) => parts.push(p, ''));
    for (const eq of app.equations) {
      parts.push(`- **Equation ${eq.label} Plain Equation:** \`${eq.plainEquation}\``);
      parts.push(`- *${eq.caption}* — ${eq.plainMeaning}`, '');
    }
  }
  parts.push('## References');
  RETRO_REFERENCES.forEach((r) => parts.push(`[${r.id}] ${r.citation}`));
  return parts.join('\n');
}

// ---------------------------------------------------------------------------
// Hardened Pure 7-Bit ASCII LaTeX Engine + Readable Plain Equation Output
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
  'ú': "\\'{u}", 'û': '\\^{u}', 'ü': '\\"{u}', 'ç': '\\c{c}', 'É': "\\'{E}",
  'Ä': '\\"{A}', 'Ö': '\\"{O}', 'Ü': '\\"{U}', 'ß': '\\ss{}',
  'ē': '\\={e}', 'Č': '\\v{C}', 'č': '\\v{c}', 'ř': '\\v{r}', 'š': '\\v{s}', 'ž': '\\v{z}', 'ł': '\\l{}'
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
  '⋯': '\\cdots{}',
  '•': '\\textbullet{} ',
  '✓': '$\\checkmark$',
  '✗': '$\\times$'
};

const MATH_UNICODE_MAP: Record<string, string> = {
  'Γ': '\\Gamma ', 'Δ': '\\Delta ', 'Θ': '\\Theta ', 'Λ': '\\Lambda ',
  'Φ': '\\Phi ', 'Ω': '\\Omega ', 'Π': '\\Pi ', 'Ψ': '\\Psi ', 'Σ': '\\Sigma ',
  'α': '\\alpha ', 'β': '\\beta ', 'γ': '\\gamma ', 'δ': '\\delta ',
  'ε': '\\varepsilon ', 'ϵ': '\\epsilon ', 'η': '\\eta ', 'θ': '\\theta ',
  'κ': '\\kappa ', 'λ': '\\lambda ', 'μ': '\\mu ', 'ν': '\\nu ',
  'ξ': '\\xi ', 'π': '\\pi ', 'ρ': '\\rho ', 'σ': '\\sigma ',
  'τ': '\\tau ', 'φ': '\\varphi ', 'χ': '\\chi ', 'ψ': '\\psi ', 'ω': '\\omega ',
  '𝒜': '\\mathcal{A}', 'ℬ': '\\mathcal{B}', '𝒟': '\\mathcal{D}', 'ℱ': '\\mathcal{F}', '𝒢': '\\mathcal{G}',
  'ℋ': '\\mathcal{H}', 'ℐ': '\\mathcal{I}', 'ℒ': '\\mathcal{L}', 'ℳ': '\\mathcal{M}', '𝒩': '\\mathcal{N}',
  '𝒪': '\\mathcal{O}', '𝒥': '\\mathcal{J}', '𝓧': '\\mathcal{X}', '𝓡': '\\mathcal{R}',
  '𝒳': '\\mathcal{X}', 'ℛ': '\\mathcal{R}', 'ℝ': '\\mathbb{R}',
  'Ĥ': '\\hat{H}', 'ℏ': '\\hbar ', 'ħ': '\\hbar ',
  '∀': '\\forall ', '∃': '\\exists ', '∄': '\\nexists ', '¬': '\\neg ',
  '∅': '\\emptyset ', '∈': '\\in ', '∉': '\\notin ', '⊂': '\\subset ',
  '⊆': '\\subseteq ', '⊊': '\\subsetneq ', '∩': '\\cap ', '∪': '\\cup ',
  '≺': '\\prec ', '≻': '\\succ ', '≅': '\\cong ', '⟨': '\\langle ', '⟩': '\\rangle ', '⌈': '\\lceil ', '⌉': '\\rceil ',
  '∧': '\\wedge ', '∨': '\\vee ', '⊕': '\\oplus ', '⊗': '\\otimes ', '∮': '\\oint ',
  '⊢': '\\vdash ', '⊨': '\\models ', '⊬': '\\nvdash ', '⊥': '\\bot ', '□': '\\Box ', '◇': '\\Diamond ',
  '†': '^\\dagger ', '↦': '\\mapsto ', '⊣': '\\dashv ', '∝': '\\propto ', '∑': '\\sum ', '∏': '\\prod ',
  'ℓ': '\\ell ', '∇': '\\nabla ', '∂': '\\partial ', '∫': '\\int ',
  '∞': '\\infty ', '×': '\\times ', '·': '\\cdot ', '±': '\\pm ',
  '≈': '\\approx ', '≤': '\\le ', '≥': '\\ge ', '≪': '\\ll ', '≫': '\\gg ',
  '≠': '\\neq ', '≡': '\\equiv ', '⇔': '\\iff ', '⇄': '\\leftrightarrow ', '↔': '\\leftrightarrow ',
  '→': '\\rightarrow ', '←': '\\leftarrow ', '⇒': '\\Rightarrow ', '↑': '\\uparrow ',
  '−': '-', '∖': '\\setminus ', '‖': '\\|', '∘': '\\circ ', '⋯': '\\cdots ',
  '½': '\\frac{1}{2}', '′': '\\prime ', '″': '^{\\prime\\prime}', '°': '^\\circ '
};

const ROMAN_WORDS = new Set([
  'ret', 'adv', 'sym', 'obs', 'loc', 'eff', 'core', 'ext', 'int', 'past', 'future',
  'present', 'adm', 'phys', 'sig', 'post', 'quant', 'max', 'tot', 'diag', 'Tr',
  'det', 'ln', 'log', 'lim', 'sin', 'cos', 'exp', 'ABL', 'Born', 'TDCD', 'TSVF',
  'QFI', 'rad', 'block', 'eq', 'Mod', 'Sol', 'Adm', 'Dir', 'in', 'out', 'lin', 'ker'
]);

const MATH_TOKEN_UNICODE_RE =
  /[ΓΔΘΛΦΩΠΨΣαβγδεϵηθκλμνξπρστυφχψω𝒜ℬ𝒟ℱ𝒢ℋℐℒℳ𝒩𝒪𝒥𝓧𝓡𝒳ℛℝĤℏħ∀∃∄¬∅∈∉⊂⊆⊊∩∪≺≻≅⟨⟩⌈⌉∧∨⊕⊗∮⊢⊨⊬⊥□◇†↦⊣∝∑∏ℓ∇∂∫∞×·±≈≤≥≪≫≠≡⇔⇄↔→←⇒↑−∖‖∘⋯½′″°√⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻ⁿʳⁱʲ₀₁₂₃₄₅₆₇₈₉₊₋ᵢ\u0302\u0303\u0304\u0307\u20D7]/u;

function expandCombiningMarksForMath(raw: string): string {
  return raw
    .replace(/([A-Za-zα-ωΑ-Ωϵ])\u0302/g, '\\hat{$1}')
    .replace(/([A-Za-zα-ωΑ-Ωϵ])\u0303/g, '\\tilde{$1}')
    .replace(/([A-Za-zα-ωΑ-Ωϵ])\u0304/g, '\\bar{$1}')
    .replace(/([A-Za-zα-ωΑ-Ωϵ])\u0307/g, '\\dot{$1}')
    .replace(/([A-Za-zα-ωΑ-Ωϵ])\u20D7/g, '\\vec{$1}');
}

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
  const pre = s
    .replace(/([A-Za-zϵ])\u0302/g, '$1^')
    .replace(/([A-Za-zϵ])\u0304/g, 'bar($1)')
    .replace(/([A-Za-z])\u0307/g, 'dot($1)')
    .replace(/([A-Za-z])\u20D7/g, 'vec($1)')
    .replace(/ϵ/g, 'eps')
    .replace(/∖/g, '\\')
    .replace(/[𝓧𝒳]/g, 'X')
    .replace(/[𝓡ℛ]/g, 'R')
    .replace(/𝒩/g, 'N')
    .replace(/ℬ/g, 'B')
    .replace(/∏/g, 'prod')
    .replace(/⌈/g, 'ceil(')
    .replace(/⌉/g, ')');
  return [...pre]
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
  const expanded = expandCombiningMarksForMath(rawMath)
    .replace(SUP_RUN_RE, (run) => `^{${[...run].map((c) => UNICODE_SUP_TO_TEX[c] ?? c).join('')}}`)
    .replace(SUB_RUN_RE, (run) => `_{${[...run].map((c) => UNICODE_SUB_TO_TEX[c] ?? c).join('')}}`);
  let s = '';
  for (const ch of expanded) {
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
  s = s.replace(/\b(lim|ln|log|sin|cos|exp|Tr|det|diag|mod|for|in|vs)\b/g, (m) => `\\mathrm{${m}}`);
  s = s.replace(/\^([+-]\d+|\d{2,}|-[A-Za-z])/g, (_, exp) => `^{${exp}}`);
  s = s.replace(/_([A-Za-z0-9]+)/g, (full, word) =>
    ROMAN_WORDS.has(word) || word.length >= 3 ? `_{\\mathrm{${word}}}` : full
  );
  s = balanceSqrt(s);
  s = balanceLiteralBracesInMath(s);
  return s.replace(/[ ]{2,}/g, ' ').trim();
}

function texInlineSegment(segment: string): string {
  return segment
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
}

function texNonBoldLine(content: string): string {
  const chunks = content.split(/(\bBulaqueña\b|`[^`]+`|\*(?!\s)[^*\n]+?(?<!\s)\*)/g);
  return chunks
    .map((chunk) => {
      if (!chunk) return '';
      if (chunk === 'Bulaqueña') return 'Bulaque\\~{n}a';
      if (chunk.startsWith('`') && chunk.endsWith('`') && chunk.length >= 2) {
        const inner = chunk.slice(1, -1);
        if (MATH_TOKEN_UNICODE_RE.test(inner) || /[_^]/.test(inner)) {
          return `$${renderMathBodyToLatex(inner)}$`;
        }
        return `\\texttt{${escapeCodeText(inner)}}`;
      }
      if (chunk.startsWith('*') && chunk.endsWith('*') && chunk.length >= 2) {
        return `\\textit{${texInlineSegment(chunk.slice(1, -1))}}`;
      }
      return texInlineSegment(chunk);
    })
    .join('');
}

function texProse(input: string): string {
  if (!input) return '';
  const lines = input.replace(/\r\n/g, '\n').split('\n');
  return lines
    .map((line) => {
      let headingPrefix = '';
      let content = line;
      if (content.startsWith('### ')) {
        headingPrefix = '\\paragraph{';
        content = content.slice(4);
      }
      const boldSplit = content.split(/(\*\*[^\n]+?\*\*)/g);
      const rendered = boldSplit
        .map((chunk, j) => {
          if (!chunk) return '';
          if (j % 2 === 1) {
            return `\\textbf{${texNonBoldLine(chunk.slice(2, -2))}}`;
          }
          return texNonBoldLine(chunk);
        })
        .join('');
      return headingPrefix ? `${headingPrefix}${rendered}}` : rendered;
    })
    .join('\n\n');
}

function renderTexEquation(eq: RetroEquation): string {
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
    `\\noindent\\textbf{Plain Equation:} \\texttt{${escapeCodeText(eq.plainEquation)}}`,
    `\\noindent{\\small\\textit{${texProse(eq.caption)}}} \\\\ {\\small ${texProse(eq.plainMeaning)}}`
  ];
  if (eq.derivationSteps?.length) {
    parts.push(`\\begin{enumerate}\n${eq.derivationSteps.map((s) => `\\item ${texProse(s)}`).join('\n')}\n\\end{enumerate}`);
  }
  return parts.join('\n\n');
}

function makeTexLongTable(caption: string, colSpec: string, headers: string[], rows: string[][]): string {
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
  if (chapterNum === 1) {
    return [
      makeTexLongTable(
        'Table 1.1: Comprehensive Four-Domain Philosophical Taxonomy (Time, Causation, Explanation, Information)',
        'L{0.16} L{0.26} L{0.28} L{0.24}',
        ['Domain', 'Taxonomic Sub-Classes', 'Symmetry & Boundary', 'Category Mistake'],
        TABLE_1_1_FOURFOLD_TAXONOMY.map((r) => [r.domain, r.subClass, r.symmetryProfile, r.explanatoryMisstep])
      ),
      makeTexLongTable(
        'Table 1.2: Structure-Preserving Conceptual Crosswalk (Four-Domain Taxonomy to Principles R1--R4)',
        'L{0.24} L{0.24} L{0.46}',
        ['Taxonomy Stratum', 'Primary Principle(s)', 'Functional Role in TDCD'],
        TABLE_1_2_TAXONOMY_TO_PRINCIPLES.map((r) => [r.stratumGroup, r.primaryPrinciple, r.functionalRole])
      )
    ].join('\n\n');
  }
  if (chapterNum === 2) {
    return [
      makeTexLongTable(
        'Table 2.1: Retarded, Advanced, Symmetric, and QFT Propagator Solutions',
        'L{0.20} L{0.24} L{0.25} L{0.25}',
        ['Formulation', 'Green Kernel', 'Boundary Role', 'Physical Realizability'],
        TABLE_2_1_SOLUTIONS.map((r) => [r.framework, r.greenKernel, r.boundaryRole, r.realizabilityStatus])
      ),
      makeTexLongTable(
        'Table 2.2: Crosswalk Expanding Chapter 1 Taxonomy into Chapter 2 Physical Formalisms',
        'L{0.18} L{0.25} L{0.26} L{0.25}',
        ['Chapter 1 Node', 'Core Question', 'Physical Formalism', 'Key Result'],
        TABLE_2_2_PHILOSOPHY_TO_PHYSICS.map((r) => [r.philosophicalNode, r.chapter1Question, r.physicalFormalism, r.keyResult])
      )
    ].join('\n\n');
  }
  if (chapterNum === 3) {
    return makeTexLongTable(
      'Table 3.1: Cauchy Unfolding vs. Two-Boundary Variational Formulations',
      'L{0.22} L{0.24} L{0.24} L{0.24}',
      ['Formulation', 'Boundary Data', 'Determination Mode', 'Conceptual Risk'],
      TABLE_3_1_BOUNDARY.map((r) => [r.formulation, r.boundaryData, r.determinationMode, r.conceptualRisk])
    );
  }
  if (chapterNum === 5) {
    return makeTexLongTable(
      'Table 5.1: Backward Causal Influence vs. Global Consistency',
      'L{0.24} L{0.35} L{0.35}',
      ['Dimension', 'Backward Influence (P1)', 'Global Consistency (P2)'],
      TABLE_5_1_INFLUENCE_VS_CONSISTENCY.map((r) => [r.dimension, r.backwardInfluence, r.globalConsistency])
    );
  }
  if (chapterNum === 6) {
    return makeTexLongTable(
      'Table 6.1: Quantum Measurement and Temporal Boundary Protocols',
      'L{0.20} L{0.25} L{0.27} L{0.22}',
      ['Protocol', 'Boundary Structure', 'Observable Consequence', 'Signalling Status'],
      TABLE_6_1_QUANTUM_RETRO.map((r) => [r.protocol, r.boundaryStructure, r.observableConsequence, r.signallingStatus])
    );
  }
  if (chapterNum === 7) {
    return makeTexLongTable(
      'Table 7.1: Arrows of Time in Temporally Distributed Causation',
      'L{0.20} L{0.22} L{0.27} L{0.25}',
      ['Arrow', 'Symmetry Status', 'Physical Source', 'Role in TDCD'],
      TABLE_7_1_THERMO_ARROWS.map((r) => [r.arrow, r.symmetryStatus, r.physicalSource, r.roleInTDCD])
    );
  }
  if (chapterNum === 8) {
    return [
      makeTexLongTable(
        'Table 8.1: Five-Fold Conceptual Taxonomy of Temporally Distributed Causation',
        'L{0.20} L{0.20} L{0.27} L{0.27}',
        ['Relation', 'Temporal Locus', 'Formal Signature', 'Explanatory Function'],
        TABLE_8_1_FIVE_RELATIONS.map((r) => [r.relation, r.temporalLocus, r.formalSignature, r.explanatoryFunction])
      ),
      makeTexLongTable(
        'Table 8.2: Prospective Empirical Discriminators',
        'L{0.18} L{0.24} L{0.25} L{0.27}',
        ['Domain', 'Target Observable', 'Past-Only Account', 'Two-Boundary Account'],
        TABLE_8_2_EMPIRICAL_PROTOCOLS.map((r) => [r.domain, r.observable, r.pastOnlyModel, r.twoBoundaryModel])
      ),
      makeTexLongTable(
        'Table 8.3: Direct Answer Key Resolving Chapter 1 Historical Puzzles & Strata',
        'L{0.20} L{0.24} L{0.26} L{0.24}',
        ['Chapter 1 Node', 'Foundational Puzzle', 'Mechanism', 'TDCD Resolution'],
        TABLE_8_3_CHAPTER_1_ANSWERS.map((r) => [r.chapter1Node, r.legacyPuzzle, r.mechanism, r.tdcdResolution])
      )
    ].join('\n\n');
  }
  return '';
}

export function buildRetrocausalityLatex(): string {
  const lines: string[] = [];
  lines.push('\\documentclass[11pt,a4paper]{article}');
  lines.push('\\usepackage[utf8]{inputenc}');
  lines.push('\\usepackage[T1]{fontenc}');
  lines.push('\\usepackage{amsmath,amssymb,amsthm}');
  lines.push('\\usepackage{booktabs,longtable,array}');
  lines.push('\\usepackage{geometry}');
  lines.push('\\geometry{margin=22mm}');
  lines.push('\\newcolumntype{L}[1]{>{\\raggedright\\arraybackslash}p{#1\\textwidth}}');
  lines.push('');
  lines.push(`\\title{\\textbf{${texProse(RETRO_META.title)}} \\\\ \\large ${texProse(RETRO_META.laymanDeck)}}`);
  lines.push(`\\author{${RETRO_META.authors.map((a) => `${texProse(a.name)} (${texProse(a.affiliation)}${a.orcid ? `, ORCID: ${escapeCodeText(a.orcid)}` : ''})`).join(' \\and ')}}`);
  lines.push('\\date{}');
  lines.push('\\begin{document}');
  lines.push('\\maketitle');
  lines.push(`\\begin{center}\\small ${texProse(RETRO_META.institutionalDisclaimer)} \\\\ \\textit{${texProse(RETRO_META.venueFormatNote)}}\\end{center}`);
  lines.push('\\begin{abstract}');
  RETRO_ABSTRACT.forEach((p) => lines.push(texProse(p), ''));
  lines.push(`\\noindent\\textbf{Keywords:} ${texProse(RETRO_META.keywords.join('; '))}`);
  lines.push('\\end{abstract}');
  lines.push('');
  lines.push(`\\section*{${texProse(RETRO_CENTRAL_THESIS.title)}}`);
  lines.push(`\\begin{quote}\\textbf{${texProse(RETRO_CENTRAL_THESIS.lead)}}\\end{quote}`);
  RETRO_CENTRAL_THESIS.elaboration.forEach((p) => lines.push(texProse(p), ''));
  lines.push('');
  lines.push(
    makeTexLongTable(
      'Canonical Temporal Boundary Principles (R1--R4)',
      'L{0.18} L{0.24} L{0.18} L{0.18} L{0.18}',
      ['Principle', 'Canonical Formula', 'Epistemic Status', 'Failure on Denial', 'Empirical Signature'],
      RETRO_PRINCIPLES_TABLE.map((r) => [`${r.code}: ${r.name}`, r.canonicalFormula, r.epistemicStatus, r.failureOnDenial, r.empiricalSignature])
    )
  );
  lines.push('');
  lines.push(
    makeTexLongTable(
      'Table A.1: Independence Relations Among Principles R1--R4',
      'L{0.24} L{0.22} L{0.48}',
      ['Principle Pair', 'Logical Status', 'Formal Justification'],
      TABLE_A1_INDEPENDENCE_RELATIONS.map((r) => [r.pair, r.status, r.justification])
    )
  );
  lines.push('');
  lines.push(
    makeTexLongTable(
      'Table A.2: Formal Satisfaction Clauses and Mathematical Function Spaces',
      'L{0.20} L{0.34} L{0.40}',
      ['Symbol / Clause', 'Formal Definition', 'Underlying Space & Scope'],
      TABLE_A2_FORMAL_SYMBOLS_AND_CLAUSES.map((r) => [r.symbol, r.formalDefinition, r.mathematicalSpace])
    )
  );
  lines.push('');
  lines.push('\\section*{The Questions That Drive the Research}');
  lines.push('\\begin{enumerate}');
  RETRO_RESEARCH_QUESTIONS.forEach((q) => lines.push(`\\item ${texProse(q)}`));
  lines.push('\\end{enumerate}');
  lines.push('');

  for (const ch of RETRO_CHAPTERS) {
    lines.push(`\\section{Part ${ch.number}: ${texProse(ch.title)}}`);
    lines.push(`\\begin{quote}\\textit{${texProse(ch.epigraph)}} \\\\ \\textbf{Core Claim:} ${texProse(ch.pullQuote)}\\end{quote}`);
    lines.push(`\\noindent\\textit{${texProse(ch.leadSummary)}}`, '');
    ch.chapterIntro.forEach((p) => lines.push(texProse(p), ''));
    for (const sub of ch.subsections) {
      lines.push(`\\subsection{Section ${texProse(sub.number)}: ${texProse(sub.title)}}`);
      sub.paragraphs.forEach((p) => lines.push(texProse(p), ''));
      if (sub.equation) {
        lines.push(renderTexEquation(sub.equation), '');
      }
      if (sub.theoremBox) {
        lines.push(
          `\\begin{quote}\\textbf{${texProse(sub.theoremBox.kind)} ${texProse(sub.theoremBox.number)} (${texProse(sub.theoremBox.title)}):} ${texProse(sub.theoremBox.statement)}`,
          '\\begin{enumerate}',
          ...sub.theoremBox.proofSteps.map((s) => `\\item ${texProse(s)}`),
          '\\end{enumerate}',
          `\\textit{Source: ${texProse(sub.theoremBox.sourceNote)}}\\end{quote}`,
          ''
        );
      }
      if (sub.secondaryTheoremBox) {
        lines.push(
          `\\begin{quote}\\textbf{${texProse(sub.secondaryTheoremBox.kind)} ${texProse(sub.secondaryTheoremBox.number)} (${texProse(sub.secondaryTheoremBox.title)}):} ${texProse(sub.secondaryTheoremBox.statement)}`,
          '\\begin{enumerate}',
          ...sub.secondaryTheoremBox.proofSteps.map((s) => `\\item ${texProse(s)}`),
          '\\end{enumerate}',
          `\\textit{Source: ${texProse(sub.secondaryTheoremBox.sourceNote)}}\\end{quote}`,
          ''
        );
      }
      if (sub.workedExample) {
        lines.push(
          `\\begin{quote}\\textbf{${texProse(sub.workedExample.title)}:} ${texProse(sub.workedExample.setup)}`,
          '\\begin{enumerate}',
          ...sub.workedExample.steps.map((s) => `\\item ${texProse(s)}`),
          '\\end{enumerate}\\end{quote}',
          renderTexEquation(sub.workedExample.resultEquation),
          `\\noindent\\textbf{Takeaway:} ${texProse(sub.workedExample.takeaway)}`,
          ''
        );
      }
    }
    const chTables = renderTexChapterTables(ch.number);
    if (chTables) lines.push(chTables, '');
  }

  lines.push(`\\section{${texProse(RETRO_CONCEPTUAL_CONTRIBUTION.title)}}`);
  RETRO_CONCEPTUAL_CONTRIBUTION.paragraphs.forEach((p) => lines.push(texProse(p), ''));
  lines.push(`\\section{${texProse(RETRO_IMPLICATION_AND_CONCLUSION.implicationTitle)}}`);
  RETRO_IMPLICATION_AND_CONCLUSION.implicationParagraphs.forEach((p) => lines.push(texProse(p), ''));
  lines.push(`\\section{${texProse(RETRO_IMPLICATION_AND_CONCLUSION.concludingTitle)}}`);
  RETRO_IMPLICATION_AND_CONCLUSION.concludingParagraphs.forEach((p) => lines.push(texProse(p), ''));

  lines.push('\\section*{Symbol Glossary}');
  lines.push(
    makeTexLongTable(
      'Mathematical and Conceptual Symbols',
      'L{0.18} L{0.20} L{0.18} L{0.38}',
      ['Symbol', 'Concept', 'Domain', 'Definition'],
      RETRO_SYMBOL_GLOSSARY.map((s) => [s.symbol, s.name, s.domain, s.definition])
    )
  );
  lines.push('\\section*{Glossary}');
  lines.push('\\begin{description}');
  RETRO_GLOSSARY.forEach((g) => {
    const head = `${g.term}${g.acronym ? ` (${g.acronym})` : ''}`;
    lines.push(`\\item[${texProse(head)}] ${texProse(g.definition)}`);
  });
  lines.push('\\end{description}');

  lines.push('\\appendix');
  for (const app of RETRO_APPENDICES) {
    lines.push(`\\section{${texProse(app.title)}}`);
    lines.push(`\\noindent\\textit{${texProse(app.summary)}}`, '');
    app.paragraphs.forEach((p) => lines.push(texProse(p), ''));
    for (const eq of app.equations) {
      lines.push(renderTexEquation(eq), '');
    }
    if (app.reproducibilityLedger?.length) {
      lines.push(
        makeTexLongTable(
          `Appendix ${app.letter} Reproducibility Ledger`,
          'L{0.22} L{0.25} L{0.24} L{0.23}',
          ['Checkpoint', 'Formula', 'Reference Parameters', 'Computed Output'],
          app.reproducibilityLedger.map((r) => [r.checkpoint, r.formula, r.referenceConstants, r.computedOutput])
        )
      );
    }
    if (app.refereeObjections?.length) {
      lines.push('\\begin{description}');
      app.refereeObjections.forEach((o) => {
        lines.push(`\\item[${texProse(o.objection)}] ${texProse(o.reply)}`);
      });
      lines.push('\\end{description}');
    }
  }

  lines.push('\\section*{List of Full-Page Illustrations (Plates I--XXIX)}');
  lines.push('\\begin{enumerate}');
  RETRO_PLATES_META.forEach((pl) => {
    lines.push(
      `\\item \\textbf{${texProse(pl.plateNumber)}} (Part ${pl.anchorChapter} --- ${texProse(pl.hueFamily)}: ${texProse(pl.shadeName)} ${escapeCodeText(pl.bgHex)}): \\textit{${texProse(pl.title)}} --- ${texProse(pl.caption)}`
    );
  });
  lines.push('\\end{enumerate}');

  lines.push('\\section*{References}');
  lines.push('\\begin{enumerate}');
  RETRO_REFERENCES.forEach((r) => lines.push(`\\item ${texProse(r.citation)}`));
  lines.push('\\end{enumerate}');

  lines.push('\\section*{Index of Names}');
  lines.push('\\begin{itemize}');
  RETRO_INDEX_OF_NAMES.forEach((n) => lines.push(`\\item \\textbf{${texProse(n.entry)}} --- ${texProse(n.sections)}`));
  lines.push('\\end{itemize}');

  lines.push('\\section*{Index of Concepts}');
  lines.push('\\begin{itemize}');
  RETRO_INDEX_OF_CONCEPTS.forEach((c) => lines.push(`\\item \\textbf{${texProse(c.entry)}} --- ${texProse(c.sections)}`));
  lines.push('\\end{itemize}');

  lines.push('\\end{document}');
  return lines.join('\n');
}

function triggerDownload(filename: string, content: string, mime: string) {
  const blob = new Blob([content], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export function downloadRetrocausalityHtml(): void {
  triggerDownload('Paper_16_The_Universe_Remembers_Its_Future.html', buildRetrocausalitySelfContainedHtml(), 'text/html;charset=utf-8');
}

export function downloadRetrocausalityLatex(): void {
  triggerDownload('Paper_16_The_Universe_Remembers_Its_Future.tex', buildRetrocausalityLatex(), 'application/x-tex;charset=utf-8');
}

export function downloadRetrocausalityMarkdown(): void {
  triggerDownload('Paper_16_The_Universe_Remembers_Its_Future.md', buildRetrocausalityMarkdown(), 'text/markdown;charset=utf-8');
}
