/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Deterministic Verification Suite for Paper 16:
 * "The Universe Remembers Its Future: Retrocausality, Temporal Boundary Conditions,
 *  and the Architecture of Causal Reality"
 */

import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {
  PALETTE_40_SHADES,
  evaluateTemporalConsistency,
  evaluateTemporalBridge,
  computeAblTwoBoundaryProbability,
  type TemporalRegimeKey
} from './retrocausalityPaper.ts';
import {
  RETRO_META,
  RETRO_ABSTRACT,
  RETRO_IMPLICATION_AND_CONCLUSION,
  RETRO_CHAPTERS,
  RETRO_RESEARCH_QUESTIONS,
  RETRO_PRINCIPLES_TABLE,
  TABLE_A1_INDEPENDENCE_RELATIONS,
  TABLE_A2_FORMAL_SYMBOLS_AND_CLAUSES,
  TABLE_1_1_FOURFOLD_TAXONOMY,
  TABLE_1_2_TAXONOMY_TO_PRINCIPLES,
  TABLE_8_3_CHAPTER_1_ANSWERS,
  RETRO_APPENDICES,
  RETRO_REFERENCES,
  RETRO_GLOSSARY,
  RETRO_SYMBOL_GLOSSARY,
  RETRO_INDEX_OF_NAMES,
  RETRO_INDEX_OF_CONCEPTS
} from '../types/retrocausalityPaperData.ts';
import {
  ILLUSTRATION_40_SHADES,
  ILLUSTRATION_WARM_SHADES,
  ILLUSTRATION_ALL_SHADES,
  RETRO_FIGURES,
  RETRO_PLATES_META
} from '../types/retrocausalityPaperFigures.ts';
import {
  buildRetrocausalitySelfContainedHtml,
  buildRetrocausalityMarkdown,
  buildRetrocausalityLatex
} from '../utils/generateRetrocausalityPaperExports.ts';
import { buildRetrocausalityPdfDocument } from '../utils/generateRetrocausalityPaperPdf.ts';

test('Paper 16 includes Paper 15 team plus Mirza Adnan Mohtashim (7 authors), disclosures, IGRT references, and 40-shade palette', () => {
  assert.equal(RETRO_META.authors.length, 7);
  const seventh = RETRO_META.authors[6];
  assert.equal(seventh.name, 'Mirza Adnan Mohtashim');
  assert.equal(seventh.affiliation, 'Independent Researcher');
  assert.equal(seventh.orcid, '0009-0004-2823-5976');
  assert.equal(seventh.orcidUrl, 'https://orcid.org/0009-0004-2823-5976');
  assert.ok(RETRO_META.institutionalDisclaimer.includes('do not imply institutional endorsement'));
  assert.ok(RETRO_META.venueFormatNote.includes('Synthese'));
  assert.ok(RETRO_META.venueFormatNote.includes('29-plate'));

  assert.equal(PALETTE_40_SHADES.length, 40);
  assert.equal(RETRO_META.title, 'The Universe Remembers Its Future');
  assert.equal(RETRO_ABSTRACT.length, 5);
  assert.equal(RETRO_RESEARCH_QUESTIONS.length, 7);
  assert.equal(RETRO_PRINCIPLES_TABLE.length, 4);
  assert.equal(RETRO_CHAPTERS.length, 8);
  assert.equal(RETRO_APPENDICES.length, 3);
  assert.equal(TABLE_A1_INDEPENDENCE_RELATIONS.length, 4);
  assert.equal(TABLE_A2_FORMAL_SYMBOLS_AND_CLAUSES.length, 6);
  assert.equal(TABLE_1_2_TAXONOMY_TO_PRINCIPLES.length, 8);
  assert.ok(RETRO_REFERENCES.length >= 70, `Expected >= 70 references, got ${RETRO_REFERENCES.length}`);

  const refsJoined = RETRO_REFERENCES.map((r) => r.citation).join(' ');
  assert.ok(refsJoined.includes('IGRT-2026-H11'), 'References must include Bulaqueña IGRT monograph IGRT-2026-H11');
  assert.ok(refsJoined.includes('Information Geometric Gradient (IGG)'), 'References must include Bulaqueña IGG/IGEG preprint');
});

test('Temporal consistency evaluator and ABL calculator satisfy no-signalling & boundary rules', () => {
  const full = {
    timeSymmetricLaw: true,
    twoBoundarySelection: true,
    noBackwardSignalling: true,
    thermodynamicGradient: true
  };
  const ok = evaluateTemporalConsistency(full, 'two-state-quantum');
  assert.equal(ok.coherentBidirectionalModel, true);
  assert.equal(ok.conditionsSatisfiedCount, 4);

  const signalFail = evaluateTemporalConsistency({ ...full, noBackwardSignalling: false }, 'two-state-quantum');
  assert.equal(signalFail.coherentBidirectionalModel, false);
  assert.ok(signalFail.statusHeadline.includes('Backward Signalling'));

  const regimes: TemporalRegimeKey[] = [
    'classical-retarded',
    'absorber-symmetric',
    'two-state-quantum',
    'thermodynamic-block'
  ];
  for (const r1 of regimes) {
    for (const r2 of regimes) {
      const b = evaluateTemporalBridge(r1, r2);
      assert.ok(b.formalMapping.length > 5);
    }
  }

  const abl = computeAblTwoBoundaryProbability(0, Math.PI / 2, Math.PI / 4);
  assert.ok(abl.probPlus > 0.96 && abl.probPlus < 0.98);
  assert.ok(Math.abs(abl.probPlus + abl.probMinus - 1) < 1e-9);
});

test('Paper 16 Chapter 1 meets Synthese >= 4,000 word rigor, fixes (-,+,+,+) spacelike sign, provides plainEquation on every equation, and omits any panel mention', () => {
  const ch1 = RETRO_CHAPTERS[0];
  const ch1Words = [
    ch1.title,
    ch1.leadSummary,
    ...ch1.chapterIntro,
    ...ch1.subsections.flatMap((s) => [s.title, ...s.paragraphs, s.theoremBox?.statement ?? '', ...(s.theoremBox?.proofSteps ?? [])])
  ]
    .join(' ')
    .trim()
    .split(/\s+/).length;
  assert.ok(ch1Words >= 4000, `Expected Chapter 1 to have >= 4000 words, got ${ch1Words}`);

  const allEquations = [
    ...RETRO_CHAPTERS.flatMap((ch) =>
      ch.subsections.flatMap((s) => [
        ...(s.equation ? [s.equation] : []),
        ...(s.workedExample ? [s.workedExample.resultEquation] : [])
      ])
    ),
    ...RETRO_APPENDICES.flatMap((a) => a.equations)
  ];
  assert.equal(allEquations.length, 17, `Expected 17 RetroEquation objects, got ${allEquations.length}`);
  for (const eq of allEquations) {
    assert.ok(eq.plainEquation && eq.plainEquation.trim().length > 8, `Missing plainEquation on Schema ${eq.label}`);
    assert.ok(!/[^\x00-\x7F]/.test(eq.plainEquation), `plainEquation on Schema ${eq.label} should be pure ASCII: ${eq.plainEquation}`);
  }

  const ch2 = RETRO_CHAPTERS[1];
  assert.ok(ch2.subsections.length >= 5);
  const qftSec = ch2.subsections.find((s) => s.number === '2.4');
  assert.ok(qftSec && qftSec.paragraphs.join(' ').includes('Schwinger–Keldysh'));
  assert.ok(qftSec && qftSec.paragraphs.join(' ').includes('Pauli–Jordan'));

  const ch8 = RETRO_CHAPTERS[7];
  assert.ok(ch8.kicker.includes('Concluding Chapter'));
  const sec21 = ch8.subsections.find((s) => s.number === '21');
  assert.ok(sec21, 'Expected Concluding Chapter §21');
  const sec21Text = sec21.paragraphs.join(' ');
  assert.ok(sec21Text.includes('21.1'));
  assert.ok(sec21Text.includes('21.2'));
  assert.ok(sec21Text.includes('21.3'));
  assert.ok(sec21Text.includes('21.4'));
  assert.ok(sec21Text.includes('T1–T5') && sec21Text.includes('C1–C6') && sec21Text.includes('E1–E5') && sec21Text.includes('I1–I5'));

  assert.equal(TABLE_1_1_FOURFOLD_TAXONOMY.length, 21);
  assert.ok(TABLE_8_3_CHAPTER_1_ANSWERS.length >= 10);

  const fullText = [
    ...RETRO_ABSTRACT,
    ...RETRO_IMPLICATION_AND_CONCLUSION.implicationParagraphs,
    ...RETRO_IMPLICATION_AND_CONCLUSION.concludingParagraphs,
    RETRO_PRINCIPLES_TABLE.map((r) => `${r.canonicalFormula} ${r.epistemicStatus} ${r.failureOnDenial} ${r.empiricalSignature}`).join(' '),
    ...RETRO_CHAPTERS.flatMap((ch) => [
      ch.title,
      ch.leadSummary,
      ...ch.chapterIntro,
      ...ch.subsections.flatMap((s) => [
        s.title,
        ...s.paragraphs,
        s.equation?.caption ?? '',
        s.equation?.plainMeaning ?? '',
        s.theoremBox?.statement ?? '',
        ...(s.theoremBox?.proofSteps ?? []),
        s.secondaryTheoremBox?.statement ?? '',
        ...(s.secondaryTheoremBox?.proofSteps ?? []),
        s.workedExample?.title ?? '',
        s.workedExample?.setup ?? '',
        ...(s.workedExample?.steps ?? []),
        s.workedExample?.takeaway ?? ''
      ])
    ]),
    ...RETRO_APPENDICES.flatMap((a) => [...a.paragraphs, ...(a.refereeObjections?.map((o) => `${o.objection} ${o.reply}`) ?? [])]),
    ...RETRO_GLOSSARY.map((g) => `${g.term} ${g.definition}`),
    ...RETRO_SYMBOL_GLOSSARY.map((s) => `${s.symbol} ${s.definition}`),
    ...RETRO_INDEX_OF_NAMES.map((n) => n.entry),
    ...RETRO_INDEX_OF_CONCEPTS.map((c) => c.entry)
  ].join(' ');

  // Verify (-,+,+,+) metric sign consistency for spacelike separation and no malformed set notation
  assert.ok(!fullText.includes('(x − y)² < 0'), 'Found inconsistent spacelike interval sign (x − y)^2 < 0 under (-,+,+,+)');
  assert.ok(!fullText.includes('(x−y)² < 0'), 'Found inconsistent spacelike interval sign (x−y)^2 < 0 under (-,+,+,+)');
  assert.ok(!fullText.includes('H_adm^∧(N)'), 'Found malformed H_adm^∧(N) symbol');
  assert.ok(!/\b(20|twenty|200)[- ]?(expert|member)?\s*panel\b|\bpanel audit\b|\baudit score\b/i.test(fullText), 'Monograph must never mention the internal audit panel');

  const requiredAuditMarkers = [
    'Counterexample 5.1',
    'Theorem 5.0',
    'Lemma 5.1',
    'No-Go Theorem 5.1',
    'Worked Calculation 5.1',
    'U(t_f, t)',
    'W_μ(H_adm^(N))',
    'Three-Box Paradox',
    'Bong et al.',
    'Shimony',
    'Dowe',
    'Hitchcock',
    'Connes',
    'Loewer',
    'Callender',
    'pp. 1–26',
    'structure-preserving conceptual homomorphism',
    'Buchholz',
    'Zurek',
    'Shannon',
    'Kraus',
    'POVM',
    '[Ô(x), Ô(y)] = 0',
    'F_tot = P_post',
    'ds_QFI',
    'Bulaqueña',
    'Crooks',
    'Landauer',
    'C_{αβγδ}',
    'S_G',
    'Boltzmann-brain',
    'Horowitz',
    'Frauchiger',
    'PBR',
    'Sommerfeld',
    'Zermelo',
    'Woodward',
    'Wood and Spekkens',
    'cyclic SCM',
    'Illustration XXVIII',
    'Illustration XXIX',
    'E_err^(N)',
    'ϵ_N^(max)',
    'C_sig(W) = max_{P_M} I(M; R)',
    'Binary Symmetric Channel',
    'complete global Cauchy data',
    'Half-Cauchy',
    'unconstrained resolution of the identity',
    'E_future(t_max)',
    'E_f ≠ I',
    'standard linear quantum mechanics and AQFT',
    '(A1)–(A5)',
    'beyond-QM',
    'Howard Stein',
    'Growing Block',
    'Moving Spotlight',
    'spectral resonances',
    'Hardy’s (1992)',
    'Ferrie and Combes',
    'Dowker and Kent',
    'Earman and Norton',
    'Reeb–Wolf',
    'Mackie',
    'Penington',
    'Oreshkov',
    'Harrigan–Spekkens',
    'Ismael',
    'Holevo',
    'Quine–Duhem',
    'Elga',
    'Knee–Gauger',
    'Hogarth',
    'Janus point',
    'Kuchař',
    'Reeh–Schlieder'
  ];
  for (const marker of requiredAuditMarkers) {
    assert.ok(fullText.includes(marker), `Expected audit marker "${marker}" in Paper 16 monograph`);
  }
});

test('Paper 16 has 29 full-page A4 illustrations (>=2 per chapter) including Dark Red XXVIII & Dark Orange XXIX with zero banned terms', () => {
  assert.equal(RETRO_PLATES_META.length + RETRO_FIGURES.length, 29);
  assert.equal(RETRO_PLATES_META.length, 29);
  assert.equal(ILLUSTRATION_40_SHADES.length, 40);
  assert.equal(ILLUSTRATION_WARM_SHADES.length, 4);
  assert.equal(ILLUSTRATION_ALL_SHADES.length, 44);

  const ids = new Set(RETRO_PLATES_META.map((p) => p.id));
  const bgHexes = new Set(RETRO_PLATES_META.map((p) => p.bgHex.toUpperCase()));
  assert.equal(ids.size, 29);
  assert.equal(bgHexes.size, 29, 'All 29 illustrations must have distinct background shade hex values');

  const core40Plates = RETRO_PLATES_META.slice(0, 27);
  const usedCore40Hexes = new Set<string>();
  for (const plate of core40Plates) {
    usedCore40Hexes.add(plate.bgHex.toUpperCase());
    usedCore40Hexes.add(plate.accentHex.toUpperCase());
  }
  assert.equal(usedCore40Hexes.size, 40, 'All 40 core shades across the 5 families must remain used across Illustrations I–XXVII');

  const xxviii = RETRO_PLATES_META[27];
  const xxix = RETRO_PLATES_META[28];
  assert.equal(xxviii.plateNumber, 'Illustration XXVIII');
  assert.equal(xxviii.hueFamily, 'Dark Red');
  assert.equal(xxviii.anchorChapter, 6);
  assert.equal(xxix.plateNumber, 'Illustration XXIX');
  assert.equal(xxix.hueFamily, 'Dark Orange');
  assert.equal(xxix.anchorChapter, 7);

  for (const plate of RETRO_PLATES_META) {
    assert.ok(plate.anchorChapter >= 1 && plate.anchorChapter <= 8);
    assert.ok(plate.title.length > 10);
    assert.ok(plate.caption.length > 30);
    assert.ok(/^#[0-9A-F]{6}$/i.test(plate.bgHex));
    assert.ok(/^#[0-9A-F]{6}$/i.test(plate.accentHex));
    assert.equal(plate.bgRgb.length, 3);
    assert.equal(plate.accentRgb.length, 3);
    const fullPath = path.resolve('src/assets/images', plate.imageFile);
    assert.ok(fs.existsSync(fullPath), `Missing image asset: ${fullPath}`);
  }

  for (let ch = 1; ch <= 8; ch++) {
    const count = RETRO_PLATES_META.filter((p) => p.anchorChapter === ch).length;
    assert.ok(count >= 2, `Expected Part ${ch} to have >= 2 illustrations, got ${count}`);
  }

  const bannedPattern = /\b(symbolic|typographic|calligram|obsidian|pure white ink|white-ink)\b/i;
  for (const shade of ILLUSTRATION_ALL_SHADES) {
    assert.ok(!bannedPattern.test(shade.name), `Banned term in shade name: ${shade.name}`);
    assert.ok(!bannedPattern.test(shade.family), `Banned term in shade family: ${shade.family}`);
  }
  for (const plate of RETRO_PLATES_META) {
    const text = `${plate.plateNumber} ${plate.hueFamily} ${plate.shadeName} ${plate.accentShadeName} ${plate.title} ${plate.caption}`;
    assert.ok(!bannedPattern.test(text), `Banned term detected in ${plate.id}: ${text}`);
  }
});

test('Paper 16 HTML, Markdown, and ASCII LaTeX exports compile cleanly with Plain Equation format & balanced braces', () => {
  const bannedPattern = /\b(symbolic|typographic|calligram|obsidian|pure white ink|white-ink)\b/i;
  const html = buildRetrocausalitySelfContainedHtml();
  assert.ok(html.includes('The Universe Remembers Its Future'));
  assert.ok(html.includes('Mirza Adnan Mohtashim'));
  assert.ok(html.includes('do not imply institutional endorsement'));
  assert.ok(html.includes('Temporally Distributed Causal Determination'));
  assert.ok(html.includes('Table A.1'));
  assert.ok(html.includes('Table A.2'));
  assert.ok(html.includes('Table 1.2'));
  assert.ok(html.includes('No-Go Theorem 5.1'));
  assert.ok(html.includes('Table 8.3'));
  assert.ok(html.includes('Illustration XXIX'));
  assert.ok(html.includes('Plain Equation:'));
  assert.ok(html.includes('IGRT-2026-H11'));
  assert.ok(!html.includes('How to Read This Monograph'));
  assert.ok(!html.includes('Recommended Disciplinary Entry Paths'));
  assert.ok(!bannedPattern.test(html), 'Banned term found in HTML export');

  const md = buildRetrocausalityMarkdown();
  assert.ok(md.includes('# The Universe Remembers Its Future'));
  assert.ok(md.includes('Mirza Adnan Mohtashim'));
  assert.ok(md.includes('No-Go Theorem 5.1'));
  assert.ok(md.includes('## Part 8:'));
  assert.ok(md.includes('**Plain Equation:**'));
  assert.ok(!md.includes('How to Read This Monograph'));

  const tex = buildRetrocausalityLatex();
  assert.ok(!/[^\x00-\x7F]/.test(tex), 'LaTeX export contains non-ASCII character');
  assert.ok(tex.includes('Mirza Adnan Mohtashim'));
  assert.ok(tex.includes('Bulaque\\~{n}a'));
  assert.ok(tex.includes('\\models'));
  assert.ok(tex.includes('\\begin{document}') && tex.includes('\\end{document}'));
  assert.ok(tex.includes('\\begin{equation}\\label{eq:1.1}'));
  assert.ok(tex.includes('\\begin{equation}\\label{eq:5.1a}'));
  assert.ok(tex.includes('\\begin{equation}\\label{eq:5.2}'));
  assert.ok(tex.includes('\\begin{equation}\\label{eq:b.1}'));
  assert.ok(tex.includes('\\textbf{Plain Equation:}'));
  assert.ok(tex.includes('Illustration XXIX'));
  assert.ok(tex.includes('\\mathcal{X}') && tex.includes('\\mathcal{R}'), 'LaTeX export missing \\mathcal{X} / \\mathcal{R}');
  assert.ok(tex.includes('\\mathcal{N}') && tex.includes('\\mathcal{B}'), 'LaTeX export missing \\mathcal{N} / \\mathcal{B}');
  assert.ok(tex.includes('\\prod') && tex.includes('\\lceil') && tex.includes('\\rceil'), 'LaTeX export missing \\prod / \\lceil / \\rceil');
  assert.ok(tex.includes('\\setminus'), 'LaTeX export missing \\setminus');
  assert.ok(tex.includes('\\bar{\\epsilon'), 'LaTeX export missing \\bar{\\epsilon}');

  // Verify no unmatched braces in LaTeX equation blocks
  const eqMatches = tex.match(/\\begin\{equation\}[\s\S]*?\\end\{equation\}/g) ?? [];
  assert.equal(eqMatches.length, 17, `Expected 17 \\begin{equation} environments in LaTeX, got ${eqMatches.length}`);
  for (const eqBlock of eqMatches) {
    let depth = 0;
    for (let i = 0; i < eqBlock.length; i++) {
      if (eqBlock[i] === '\\' && (eqBlock[i + 1] === '{' || eqBlock[i + 1] === '}')) {
        i++;
        continue;
      }
      if (eqBlock[i] === '{') depth++;
      else if (eqBlock[i] === '}') depth--;
      assert.ok(depth >= 0, `Negative brace depth inside LaTeX equation: ${eqBlock}`);
    }
    assert.equal(depth, 0, `Unbalanced braces inside LaTeX equation: ${eqBlock}`);
  }
});

test('Paper 16 PDF builds with zero blank pages, exact page numbers on every page (incl. Cover & TOC), and accurate TOC pointers', async () => {
  const sampleJpg = fs.readFileSync(path.resolve('src/assets/images', RETRO_PLATES_META[0].imageFile));
  const dataUrl = `data:image/jpeg;base64,${sampleJpg.toString('base64')}`;
  const plates = RETRO_PLATES_META.map((m) => ({
    ...m,
    imagePath: '',
    dataUrlOverride: { dataUrl, aspect: 1.33 }
  }));

  const doc = await buildRetrocausalityPdfDocument(undefined, plates);
  const totalPages = doc.getNumberOfPages();
  assert.ok(totalPages >= 82, `Expected full monograph with 29 full-page plates >= 82 pages, got ${totalPages}`);

  const extractPageText = (pageNum: number): string => {
    const ops = (doc as unknown as { internal: { pages: Record<number, string[]> } }).internal.pages[pageNum];
    const joined = Array.isArray(ops) ? ops.join('\n') : String(ops ?? '');
    return (joined.match(/\(((?:\\.|[^\\)])*)\)\s*Tj/g) || [])
      .map((s) => s.replace(/^\(|\)\s*Tj$/g, '').replace(/\\([()\\])/g, '$1'))
      .join(' ')
      .replace(/\s+/g, ' ')
      .trim();
  };

  for (let p = 1; p <= totalPages; p++) {
    const ops = (doc as unknown as { internal: { pages: Record<number, string[]> } }).internal.pages[p];
    const joined = Array.isArray(ops) ? ops.join('\n') : String(ops ?? '');
    const tjCount = (joined.match(/\)\s*Tj|\]\s*TJ/g) || []).length;
    assert.ok(tjCount >= 14, `Blank or sparse overflow detected on page ${p} (tjCount=${tjCount})`);
    assert.ok(joined.includes(`Page ${p} of ${totalPages}`), `Missing footer page number on page ${p}`);
  }

  const coverText = extractPageText(1);
  assert.ok(coverText.includes('Mirza Adnan Mohtashim'), 'Cover page missing 7th author Mirza Adnan Mohtashim');
  assert.ok(coverText.includes('0009-0004-2823-5976'), 'Cover page missing Mirza Adnan Mohtashim ORCID');
  assert.ok(extractPageText(2).includes('Abstract'), 'Abstract should appear on page 2');

  let tocPagesText = '';
  for (let p = 3; p <= Math.min(8, totalPages); p++) {
    const txt = extractPageText(p);
    if (!txt.includes('Table of Contents')) break;
    tocPagesText += ` ${txt}`;
  }
  tocPagesText = tocPagesText.trim();
  assert.ok(tocPagesText.includes('Table of Contents'), 'Missing Table of Contents heading on page 3');

  const tocBodyText = tocPagesText.replace(/^Table of Contents\s+/, '');

  const expectTocTarget = (labelSnippet: string, expectedHeading: string) => {
    const escaped = labelSnippet.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const match = tocBodyText.match(new RegExp(`${escaped}(?:\\s*\\([^)]*\\))?\\s+(\\d+)`));
    assert.ok(match, `Missing TOC entry matching "${labelSnippet}"`);
    const targetPage = Number(match[1]);
    assert.ok(targetPage >= 2 && targetPage <= totalPages, `Invalid TOC target page ${targetPage} for ${labelSnippet}`);
    assert.ok(
      extractPageText(targetPage).includes(expectedHeading),
      `TOC pointer mismatch for "${labelSnippet}": pointed to page ${targetPage}, but page text was "${extractPageText(targetPage).slice(0, 120)}"`
    );
  };

  expectTocTarget('Abstract', 'Abstract');
  expectTocTarget('Table of Contents', 'Table of Contents');
  expectTocTarget('& Research Questions', 'Temporal Boundary Principles');
  expectTocTarget('List of Illustrations', 'List of Illustrations');
  expectTocTarget('Part 1: The Temporal Asymmetry of Causal Explanation', 'Part 1:');
  expectTocTarget('Part 8: Concluding Synthesis: Temporally Distributed Causation & Direct Answers to Chapter 1', 'Part 8:');
  expectTocTarget('Glossary', 'Glossary');
  expectTocTarget('Supplementary Appendices', 'Supplementary Appendices');
  expectTocTarget('References', 'References');
  expectTocTarget('Index of Names', 'Index of Names');
  expectTocTarget('Index of Concepts', 'Index of Concepts');
});
