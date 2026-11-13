/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Single Self-Contained HTML Monograph Exporter (Print-to-PDF Ready, A4 25mm margins)
 * - Zero LaTeX: pure Unicode/HTML typography
 * - CSS variables scaling body to 30px (14px + 16px), headings Playfair Display Regular (weight 400)
 * - Clean inline SVG figures (Figures 1–8) embedded natively
 * - Strict orphan/widow & heading keep-with-next pagination rules
 */

import {
  PAPER_META,
  MASTER_EQUATION_ABSTRACT,
  PAPER_APA,
  PAPER_BIBTEX,
  PAPER_POSTULATES,
  PAPER_CHAPTERS,
  AUDITED_TEST_PROTOCOLS,
  AUDITED_CLOSURE_THEOREMS,
  PAPER_APPENDICES,
  PAPER_REFERENCES,
  type PaperEquation
} from '../types/harmonizedPaperData';
import {
  PLAIN_LANGUAGE_SUMMARY,
  SHORTENED_ABSTRACT,
  SCOPE_AND_NON_CLAIMS,
  LIST_OF_SYMBOLS,
  ACRONYMS_GLOSSARY,
  LIST_OF_TABLES,
  DIMENSIONAL_ANALYSIS_TABLE,
  EQUATION_INDEX,
  FRAMEWORKS_COMPARISON_TABLE,
  ETHICS_AND_GOVERNANCE,
  VERSION_CHANGE_LOG
} from '../types/harmonizedPaperApparatus';
import { PAPER_FIGURES } from '../components/HarmonizedPaperFigures';

function esc(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function equationBoxHtml(eq: PaperEquation): string {
  return `<div class="eq-box">
  <div class="eq-row">
    <div class="eq-main">${eq.unicodeHtml}</div>
    <div class="eq-num">${esc(eq.label)}</div>
  </div>
  <div class="eq-caption">${esc(eq.caption)}</div>
</div>`;
}

export function buildSelfContainedMonographHtml(): string {
  const chaptersHtml = PAPER_CHAPTERS.map((ch) => {
    const subsectionsHtml = ch.subsections
      .map((sub) => {
        const paras = sub.paragraphs.map((p) => `<p>${esc(p)}</p>`).join('\n');

        const thm = sub.theoremBox
          ? `<div class="theorem-box">
  <div class="box-header">${esc(sub.theoremBox.number)}: ${esc(sub.theoremBox.title)}</div>
  <div class="box-sub"><strong>Hypotheses:</strong>
    <ul>${sub.theoremBox.hypotheses.map((h) => `<li>${esc(h)}</li>`).join('')}</ul>
  </div>
  <p style="margin-bottom:0;"><strong>Statement:</strong> ${esc(sub.theoremBox.statement)}</p>
</div>`
          : '';

        const eq = sub.equation ? equationBoxHtml(sub.equation) : '';

        const worked = sub.workedExample
          ? `<div class="worked-box">
  <div class="box-header">${esc(sub.workedExample.title)}</div>
  <p>${esc(sub.workedExample.setup)}</p>
  <ol>${sub.workedExample.steps.map((st) => `<li>${esc(st)}</li>`).join('')}</ol>
  ${equationBoxHtml(sub.workedExample.resultEquation)}
  <p style="margin-bottom:0;"><strong>Interpretation:</strong> ${esc(sub.workedExample.takeaway)}</p>
</div>`
          : '';

        const bullets = sub.bulletPoints
          ? `<ul>${sub.bulletPoints.map((b) => `<li><strong>${esc(b.label)}:</strong> ${esc(b.text)}</li>`).join('')}</ul>`
          : '';

        let specialTables = '';
        if (sub.anchorId === 'sec-1-3') {
          specialTables += `<table class="data-table">
  <caption>Table 1.1: Foundational Principles of Information-Geometric Resonant Time</caption>
  <thead><tr><th>Principle</th><th>Name</th><th>Statement</th></tr></thead>
  <tbody>${PAPER_POSTULATES.map(
    (p) =>
      `<tr><td>${esc(p.code)}</td><td>${esc(p.name)}</td><td>${esc(p.statement)}</td></tr>`
  ).join('')}</tbody>
</table>`;
        }

        if (sub.anchorId === 'sec-7-3') {
          specialTables += `<table class="data-table">
  <caption>Table 7.1: Six Experimental &amp; Observational Protocols (2026–2032+ Window)</caption>
  <thead><tr><th>ID</th><th>Protocol &amp; Facility</th><th>Observable Formula</th><th>Signal Budget &amp; Falsification Criterion</th></tr></thead>
  <tbody>${AUDITED_TEST_PROTOCOLS.map(
    (pr) =>
      `<tr><td>P${pr.id}</td><td><strong>${esc(pr.name)}</strong><br/>${esc(pr.facility)}</td><td>${pr.formulaHtml}</td><td>${esc(pr.predictedSignal)}<br/><em>Note:</em> ${esc(pr.noiseAndAuditNote)}<br/><em>Falsification:</em> ${esc(pr.falsificationCriterion)}</td></tr>`
  ).join('')}</tbody>
</table>`;
        }

        if (sub.anchorId === 'sec-8-1') {
          specialTables += `<table class="data-table">
  <caption>Table 8.1: Comparison With Competing Approaches to the Problem of Time</caption>
  <thead><tr><th>Framework</th><th>Mechanism</th><th>4D Lorentzian</th><th>WDW Unfreezing</th><th>Open Limitations</th></tr></thead>
  <tbody>${FRAMEWORKS_COMPARISON_TABLE.map(
    (r) =>
      `<tr><td>${esc(r.framework)}</td><td>${esc(r.keyMechanism)}</td><td>${esc(r.preserves4DLorentzian)}</td><td>${esc(r.wdwUnfreezing)}</td><td>${esc(r.openLimitations)}</td></tr>`
  ).join('')}</tbody>
</table>
<table class="data-table">
  <caption>Table 8.2: Core Formal Results Summary</caption>
  <thead><tr><th>Result</th><th>Domain</th><th>Summary</th></tr></thead>
  <tbody>${AUDITED_CLOSURE_THEOREMS.map(
    (t) =>
      `<tr><td>${esc(t.title)}</td><td>${esc(t.domain)}</td><td>${esc(t.summary)}</td></tr>`
  ).join('')}</tbody>
</table>`;
        }

        const matchedFigs = PAPER_FIGURES.filter(
          (f) => f.afterSubsectionAnchor === sub.anchorId
        )
          .map(
            (fig) => `<figure id="${fig.anchorId}">
  ${fig.svgMarkup}
  <figcaption>${esc(fig.caption)}</figcaption>
</figure>`
          )
          .join('\n');

        return `<section id="${sub.anchorId}" class="subsection">
  <h3>${esc(sub.number)} &nbsp; ${esc(sub.title)}</h3>
  ${paras}
  ${thm}
  ${eq}
  ${worked}
  ${bullets}
  ${specialTables}
  ${matchedFigs}
</section>`;
      })
      .join('\n');

    return `<section id="${ch.anchorId}" class="chapter-start">
  <div class="chapter-kicker">Chapter ${ch.number}</div>
  <h2>${esc(ch.title)}</h2>
  <p class="lead-summary">${esc(ch.leadSummary)}</p>
  ${subsectionsHtml}
</section>`;
  }).join('\n');

  const appendicesHtml = PAPER_APPENDICES.map(
    (app) => `<div id="${app.anchorId}" class="appendix-block keep-together">
  <h3>Appendix ${esc(app.letter)}: ${esc(app.title)}</h3>
  <p><strong>Statement (${esc(app.tag)}):</strong> ${esc(app.theoremStatement)}</p>
  ${app.proofParagraphs.map((p) => `<p>${esc(p)}</p>`).join('')}
  ${app.equations
    .map(
      (e) => `<div class="eq-box"><div class="eq-row"><div class="eq-main">${e.unicodeHtml}</div><div class="eq-num">${esc(e.label || '')}</div></div></div>`
    )
    .join('')}
</div>`
  ).join('\n');

  const referencesHtml = PAPER_REFERENCES.map((r) => {
    const idHtml = r.identifier ? ` <span class="ref-ident">${esc(r.identifier)}.</span>` : '';
    return `<li><span class="ref-id">[${r.id}]</span> <strong>${esc(r.authors)}</strong> (${esc(r.year)}). <em>${esc(r.title)}</em>. ${esc(r.venue)}.${idHtml}</li>`;
  }).join('\n');

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${esc(PAPER_META.title)}</title>
<style>
  :root {
    --paper-font-body: "Source Serif 4", "Libre Baskerville", Georgia, "Times New Roman", serif;
    --paper-font-head: "Playfair Display", Georgia, serif;
    --paper-font-mono: "IBM Plex Mono", ui-monospace, SFMono-Regular, monospace;
    --paper-body-size: 30px;      /* +16px over 14px original */
    --paper-h1-size: 54px;        /* +16px over 38px original */
    --paper-h2-size: 54px;        /* +16px over 38px original */
    --paper-h3-size: 38px;        /* +16px over 22px original */
    --paper-h4-size: 34px;        /* +16px over 18px original */
    --paper-caption-size: 28px;   /* +16px over 12px original */
    --paper-meta-size: 26px;      /* +16px over 10-11px original */
    --paper-accent: #8B4513;
    --paper-ink: #111827;
    --paper-muted: #475569;
    --paper-rule: #D6CABE;
    --paper-eq-bg: #FAF6EE;
  }

  @page {
    size: A4 portrait;
    margin: 25mm;
    @top-center {
      content: "Information-Geometric Resonant Time (IGRT) — Harmonized Research Monograph";
      font-family: Georgia, serif;
      font-size: 9pt;
      color: #64748B;
    }
    @bottom-center {
      content: "Page " counter(page) " of " counter(pages);
      font-family: Georgia, serif;
      font-size: 9pt;
      color: #64748B;
    }
  }
  @page :first {
    @top-center { content: normal; }
  }

  * { box-sizing: border-box; }

  body {
    margin: 0 auto;
    padding: 36px 28px;
    max-width: 1120px;
    background: #FFFFFF;
    color: var(--paper-ink);
    font-family: var(--paper-font-body);
    font-size: var(--paper-body-size);
    line-height: 1.5;
    orphans: 3;
    widows: 3;
  }

  p {
    margin: 0 0 1.5em 0;
    text-indent: 0;
  }

  h1, h2, h3, h4 {
    font-family: var(--paper-font-head);
    font-weight: 400;
    color: #0F172A;
    break-after: avoid;
    page-break-after: avoid;
    margin: 0 0 0.55em 0;
  }
  h1 { font-size: var(--paper-h1-size); line-height: 1.18; }
  h2 { font-size: var(--paper-h2-size); line-height: 1.2; border-bottom: 1px solid var(--paper-rule); padding-bottom: 0.35em; margin-bottom: 0.7em; }
  h3 { font-size: var(--paper-h3-size); line-height: 1.28; margin-top: 1.2em; }

  .masthead-meta {
    font-size: var(--paper-meta-size);
    color: var(--paper-accent);
    letter-spacing: 0.06em;
    text-transform: uppercase;
    border-bottom: 2px solid #0F172A;
    padding-bottom: 12px;
    margin-bottom: 24px;
  }

  .sub-meta {
    font-size: var(--paper-meta-size);
    color: var(--paper-muted);
  }

  .authors-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 16px;
    margin: 24px 0 32px 0;
  }
  .author-card {
    border: 1px solid var(--paper-rule);
    background: #FAF8F3;
    padding: 16px 20px;
    border-radius: 6px;
    font-size: var(--paper-meta-size);
  }

  .chapter-start {
    break-before: page;
    page-break-before: always;
  }
  .page-break-after {
    break-after: page;
    page-break-after: always;
  }
  .chapter-kicker {
    font-size: var(--paper-meta-size);
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--paper-accent);
    margin-bottom: 8px;
  }
  .lead-summary {
    font-style: italic;
    color: var(--paper-muted);
  }

  .eq-box {
    break-inside: avoid;
    page-break-inside: avoid;
    margin: 40px 0;
    padding: 22px 28px;
    border: 1px solid var(--paper-rule);
    background: var(--paper-eq-bg);
    border-radius: 6px;
  }
  .eq-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }
  .eq-main {
    flex: 1;
    text-align: center;
    font-size: 0.95em;
  }
  .eq-num {
    font-family: var(--paper-font-mono);
    font-size: 0.85em;
    color: var(--paper-accent);
    white-space: nowrap;
  }
  .eq-caption {
    margin-top: 14px;
    padding-top: 12px;
    border-top: 1px solid #E5DDD0;
    font-style: italic;
    text-align: center;
    font-size: var(--paper-caption-size);
    color: var(--paper-muted);
  }

  .theorem-box, .worked-box, figure, .keep-together {
    break-inside: avoid;
    page-break-inside: avoid;
    margin: 30px 0;
  }
  .theorem-box, .worked-box {
    border: 1px solid var(--paper-rule);
    border-left: 4px solid var(--paper-accent);
    background: #FDFBF7;
    padding: 20px 24px;
    border-radius: 6px;
  }
  .box-header {
    font-family: var(--paper-font-head);
    font-size: var(--paper-h4-size);
    margin-bottom: 12px;
    color: #0F172A;
  }

  figure {
    border: 1px solid var(--paper-rule);
    background: #FAF8F3;
    padding: 18px;
    border-radius: 6px;
  }
  figcaption {
    font-size: var(--paper-caption-size);
    font-style: italic;
    color: var(--paper-muted);
    margin-top: 14px;
    line-height: 1.45;
  }

  table.data-table {
    width: 100%;
    border-collapse: collapse;
    margin: 32px 0;
    font-size: 0.82em;
    break-inside: auto;
  }
  table.data-table caption {
    font-family: var(--paper-font-head);
    font-size: var(--paper-caption-size);
    text-align: left;
    margin-bottom: 10px;
    color: #0F172A;
  }
  table.data-table th, table.data-table td {
    border: 1px solid var(--paper-rule);
    padding: 12px 14px;
    text-align: left;
    vertical-align: top;
  }
  table.data-table th {
    background: #FAF6EE;
    font-weight: 400;
    color: #0F172A;
  }
  table.data-table tr {
    break-inside: avoid;
    page-break-inside: avoid;
  }

  ul, ol {
    margin: 0 0 1.5em 1.2em;
    padding: 0;
  }
  li { margin-bottom: 0.6em; }

  ol.refs-list {
    list-style: none;
    margin-left: 0;
  }
  ol.refs-list li {
    margin-bottom: 0.75em;
    padding-left: 1.8em;
    text-indent: -1.8em;
    font-size: 19px;
    line-height: 1.45;
  }
  .ref-id {
    font-family: var(--paper-font-mono);
    color: var(--paper-accent);
  }
  .ref-ident {
    font-family: var(--paper-font-mono);
    font-size: 16px;
    color: var(--paper-muted);
  }
  .cited-version-box {
    margin: 24px 0 28px 0;
    padding: 16px 20px;
    border: 1px solid var(--paper-rule);
    background: #FAF8F3;
    border-radius: 6px;
    font-size: 18px;
    line-height: 1.45;
  }
  .cited-version-box pre {
    font-family: var(--paper-font-mono);
    font-size: 14px;
    line-height: 1.4;
    background: #0F172A;
    color: #F8FAFC;
    padding: 12px 14px;
    border-radius: 5px;
    overflow-x: auto;
    margin: 10px 0 0 0;
  }
</style>
</head>
<body>

  <!-- PAGE 1: MASTHEAD, TITLE, AUTHORS & ABSTRACT -->
  <header class="page-break-after">
    <div class="masthead-meta">
      ${esc(PAPER_META.publicationStatus)} &nbsp;·&nbsp; ${esc(PAPER_META.edition)}
    </div>
    <h1>${esc(PAPER_META.title)}</h1>
    <div class="sub-meta">
      <strong>Identifiers:</strong> ${esc(PAPER_META.eprint)} &nbsp;|&nbsp; ${esc(PAPER_META.doi)}<br/>
      <strong>PhySH:</strong> ${esc(PAPER_META.physh)} &nbsp;|&nbsp; <strong>MSC 2020:</strong> ${esc(PAPER_META.msc2020)}
    </div>

    <div class="authors-grid">
      ${PAPER_META.authors
        .map(
          (a) => `<div class="author-card">
        <strong>${esc(a.name)}</strong><br/>
        ORCID: https://orcid.org/${esc(a.orcid)}<br/>
        <span>${esc(a.affiliation)}</span>
      </div>`
        )
        .join('')}
    </div>

    <section aria-labelledby="abs-heading">
      <h3 id="abs-heading">Abstract <span class="sub-meta">(${esc(SHORTENED_ABSTRACT.wordCountNote)})</span></h3>
      ${SHORTENED_ABSTRACT.paragraphs.map((p) => `<p>${esc(p)}</p>`).join('\n')}
      ${equationBoxHtml(MASTER_EQUATION_ABSTRACT)}
      <p class="sub-meta"><strong>Keywords:</strong> ${esc(PAPER_META.keywords.join(' · '))}</p>
    </section>
  </header>

  <!-- PAGE 2: DEDICATED TABLE OF CONTENTS -->
  <nav class="chapter-start page-break-after" aria-label="Table of Contents">
    <div class="chapter-kicker">Navigation</div>
    <h2>Table of Contents</h2>
    <ul>
      <li><strong>Frontmatter Apparatus:</strong> Plain-Language Summary · Scope &amp; Architectural Closures · Lists of Figures, Tables &amp; Symbols · Acronyms · Dimensional Analysis · Equation Index</li>
      ${PAPER_CHAPTERS.map(
        (ch) =>
          `<li><strong>Chapter ${ch.number}: ${esc(ch.title)}</strong>
            <ul>${ch.subsections.map((s) => `<li>${esc(s.number)} ${esc(s.title)}</li>`).join('')}</ul>
          </li>`
      ).join('')}
      <li><strong>Appendices A–J:</strong> Formal Theorems, CODATA Constants, Numerical Derivations &amp; Technical FAQ</li>
      <li><strong>Backmatter:</strong> Governance (CRediT, COI, Data, Funding, AI) · Version Change Log · References [1]–[91]</li>
    </ul>
  </nav>

  <!-- FRONTMATTER APPARATUS -->
  <section class="chapter-start">
    <div class="chapter-kicker">Editorial Frontmatter</div>
    <h2>Plain-Language Summary, Scope, Symbols &amp; Indices</h2>

    <h3>Plain-Language Summary</h3>
    <p>${esc(PLAIN_LANGUAGE_SUMMARY)}</p>

    <h3>Scope &amp; Architectural Closures</h3>
    <ul>${SCOPE_AND_NON_CLAIMS.map((s) => `<li><strong>${esc(s.title)}:</strong> ${esc(s.detail)}</li>`).join('')}</ul>

    <h3>List of Figures</h3>
    <ul>${PAPER_FIGURES.map((f) => `<li><strong>Figure ${f.id}:</strong> ${esc(f.title)}</li>`).join('')}</ul>

    <table class="data-table">
      <caption>List of Tables</caption>
      <thead><tr><th>Table</th><th>Title</th><th>Location</th></tr></thead>
      <tbody>${LIST_OF_TABLES.map((t) => `<tr><td>${esc(t.number)}</td><td>${esc(t.title)}</td><td>${esc(t.location)}</td></tr>`).join('')}</tbody>
    </table>

    <table class="data-table">
      <caption>Table 0.1: List of Symbols &amp; Collision Disambiguation</caption>
      <thead><tr><th>Symbol</th><th>Meaning</th><th>Units</th><th>Collision / Disambiguation Rule</th></tr></thead>
      <tbody>${LIST_OF_SYMBOLS.map(
        (sym) =>
          `<tr><td><strong>${esc(sym.symbol)}</strong></td><td>${esc(sym.name)}</td><td>${esc(sym.units)}</td><td>${esc(sym.collisionNote)}</td></tr>`
      ).join('')}</tbody>
    </table>

    <table class="data-table">
      <caption>Acronyms Glossary</caption>
      <thead><tr><th>Acronym</th><th>Expansion</th><th>Definition</th></tr></thead>
      <tbody>${ACRONYMS_GLOSSARY.map(
        (a) => `<tr><td><strong>${esc(a.term)}</strong></td><td>${esc(a.expansion)}</td><td>${esc(a.definition)}</td></tr>`
      ).join('')}</tbody>
    </table>

    <table class="data-table">
      <caption>Table 0.2: Dimensional-Analysis Closure Table</caption>
      <thead><tr><th>Quantity</th><th>Expression</th><th>SI</th><th>Natural Units</th><th>Derivation Note</th></tr></thead>
      <tbody>${DIMENSIONAL_ANALYSIS_TABLE.map(
        (d) =>
          `<tr><td>${esc(d.quantity)}</td><td>${esc(d.expression)}</td><td>${esc(d.siUnits)}</td><td>${esc(d.naturalUnits)}</td><td>${esc(d.auditNote)}</td></tr>`
      ).join('')}</tbody>
    </table>

    <table class="data-table">
      <caption>Table 0.3: Equation Index</caption>
      <thead><tr><th>Label</th><th>Description</th><th>Section</th></tr></thead>
      <tbody>${EQUATION_INDEX.map(
        (e) =>
          `<tr><td>${esc(e.label)}</td><td>${esc(e.title)}</td><td>${esc(e.section)}</td></tr>`
      ).join('')}</tbody>
    </table>
  </section>

  <!-- CHAPTERS 1 TO 8 -->
  ${chaptersHtml}

  <!-- APPENDICES A TO J -->
  <section id="appendices" class="chapter-start">
    <div class="chapter-kicker">Technical &amp; Derivation Appendices</div>
    <h2>Formal Derivations, Constant Register &amp; Technical FAQ (Appendices A–J)</h2>
    ${appendicesHtml}
  </section>

  <!-- GOVERNANCE & CHANGE LOG -->
  <section class="chapter-start">
    <div class="chapter-kicker">Research Integrity &amp; Governance</div>
    <h2>Governance Disclosures &amp; Version Change Log</h2>

    <h3>CRediT Author Contributions</h3>
    <ul>${ETHICS_AND_GOVERNANCE.creditRoles.map((c) => `<li><strong>${esc(c.author)}:</strong> ${esc(c.roles)}</li>`).join('')}</ul>

    <h3>Conflicts of Interest Disclosure</h3>
    <p>${esc(ETHICS_AND_GOVERNANCE.conflictsOfInterest)}</p>

    <h3>Funding Statement</h3>
    <p>${esc(ETHICS_AND_GOVERNANCE.fundingStatement)}</p>

    <h3>Data and Code Availability</h3>
    <p>${esc(ETHICS_AND_GOVERNANCE.dataAndCodeAvailability)}</p>

    <h3>AI-Assistance Disclosure</h3>
    <p>${esc(ETHICS_AND_GOVERNANCE.aiAssistanceDisclosure)}</p>

    <h3>Version Change Log</h3>
    <table class="data-table">
      <thead><tr><th>Edition</th><th>Date</th><th>Summary of Revisions</th></tr></thead>
      <tbody>${VERSION_CHANGE_LOG.map(
        (v) => `<tr><td>${esc(v.version)}</td><td>${esc(v.date)}</td><td>${esc(v.summary)}</td></tr>`
      ).join('')}</tbody>
    </table>
  </section>

  <!-- COMPREHENSIVE REFERENCES [1]–[91] & CITED VERSION (SLIGHTLY SMALLER FONT, NO ORCIDs IN REFERENCES) -->
  <section id="references" class="chapter-start">
    <div class="chapter-kicker">Bibliography &amp; Cited Version</div>
    <h2>References &amp; Citation Record</h2>
    <div class="cited-version-box">
      <strong>Cited Version (APA):</strong> ${esc(PAPER_APA)}
      <pre>${esc(PAPER_BIBTEX)}</pre>
    </div>
    <ol class="refs-list">
      ${referencesHtml}
    </ol>
  </section>

</body>
</html>`;
}
