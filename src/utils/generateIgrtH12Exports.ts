/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * IGRT-H12 Exporters:
 * - Self-Contained Archival HTML (Main Monograph Ch. 1–13 + Appendices L–N + Supp. Vol. II A–K)
 * - Standalone ASCII-Safe LaTeX Monograph (IGRT_H12_Monograph.tex)
 * - Modular LaTeX + Verification Script ZIP Bundle:
 *   main.tex, preamble.tex, sections/00_frontmatter.tex, sections/01_chapters.tex,
 *   sections/02_appendices_LMN.tex, supplementary_appendices_A_K.tex,
 *   illustrations/*.png, figures/*.svg/.png, scripts/verify-igrt-h12.mjs, Makefile, README.md
 */

import {
  H12_META,
  H12_MASTER_EQUATIONS,
  H12_ABSTRACT_PARAGRAPHS,
  H12_NON_SPECIALIST_SUMMARY,
  H12_SCOPE_AND_NON_CLAIMS,
  H11_TWELVE_COMPONENTS_AUDIT,
  COMPARISON_4D_VS_5D_IGRT,
  GLOSSARY_5D_TERMS,
  SUMMARY_FOR_PHYSICISTS,
  TIMELINE_5D_PHYSICS,
  SEVEN_TEMPORAL_NOTIONS,
  POSITIVE_CONJECTURES_SUMMARY,
  SIX_BLACK_HOLE_CLASSES,
  NEGATIVE_RESULTS_SUMMARY,
  GLOSSARY_NEGATIVE_THEOREMS,
  WHAT_IS_UNIQUE_TO_5D,
  FIVE_D_OBSERVATIONAL_BOUNDS,
  WHAT_IS_NOT_DERIVED_LEDGER,
  H12_ALL_PROTOCOLS,
  P7_TO_P10_TIMELINE_TABLE,
  P7_TO_P10_FALSIFICATION_TABLE,
  P7_TO_P10_CONFIRMATION_TABLE,
  P7_TO_P10_DECISION_MATRIX,
  H11_VS_H12_PROTOCOLS_COMPARISON,
  H12_FALSIFICATION_CHECKLIST,
  H12_CONFIRMATION_CHECKLIST,
  H12_FUNDING_AGENCY_SUMMARY,
  ELEVEN_PORTAL_MECHANISMS,
  SIX_PROPOSED_DEVICES,
  TWELVE_EXTRAPOLATIONS,
  H12_DEFINITIONS_LIST,
  H12_THEOREMS_LIST,
  H12_OPEN_PROBLEMS_LIST,
  H12_PRIOR_AUDIT_RESPONSES,
  H12_APPENDICES,
  H12_REFERENCES,
  EPISTEMIC_BC_GREY_AREA_RUBRIC,
  H11_665_ASSERTIONS_CATALOG,
  REGULATOR_SENSITIVITY_TABLE,
  MODEL2B_CONVERGENCE_AND_MICROCAUSALITY_TABLE,
  P7_TO_P10_NOISE_BUDGET_TABLE,
  H12_PROTOCOL_ANALYSIS_SECTIONS
} from '../types/igrtH12Apparatus';
import {
  H12_CHAPTERS,
  H12_MAIN_APPENDICES_LMN,
  H12_FRONTMATTER_TABLES_LIST,
  H12_FRONTMATTER_EQUATIONS_LIST
} from '../types/igrtH12Data';
import {
  H12_TEN_DOMAIN_AUDITS,
  H12_SIXTEEN_REDTEAM_ATTACKS,
  H12_STRESS_TEST_SUMMARY
} from '../types/igrtH12StressTest';
import { H12_ARCHIVAL_PLATES, H12_FIGURES } from '../components/IgrtH12Figures';
import {
  proseToLatex,
  equationToLatex,
  buildZipArchive,
  type ZipEntryInput
} from './generateHarmonizedPaperLatex';
import { formatSvgMathMarkup, pdfBmpSafeUnicode } from './formatMathUnicode';
import verifyH12ScriptSource from '../../scripts/verify-igrt-h12.mjs?raw';

// ---------------------------------------------------------------------------
// 1. ASCII-Safety Guard for H12 LaTeX Generation
// ---------------------------------------------------------------------------

function toLatex(raw: string): string {
  const s = proseToLatex(raw, { allowCitations: false });
  return s
    .replace(/ℓ/g, '$\\ell$')
    .replace(/ℏ/g, '$\\hbar$')
    .replace(/ℋ/g, '$\\mathcal{H}$')
    .replace(/𝒜/g, '$\\mathcal{A}$')
    .replace(/ℱ/g, '$\\mathcal{F}$')
    .replace(/ℒ/g, '$\\mathcal{L}$')
    .replace(/𝒪/g, '$\\mathcal{O}$')
    .replace(/ℤ/g, '$\\mathbb{Z}$')
    .replace(/□/g, '$\\Box$')
    .replace(/‖/g, '$\\|$')
    .replace(/⟨/g, '$\\langle$')
    .replace(/⟩/g, '$\\rangle$')
    .replace(/⊥/g, '$\\perp$')
    .replace(/⊙/g, '$\\odot$')
    .replace(/×/g, '$\\times$')
    .replace(/±/g, '$\\pm$')
    .replace(/≤/g, '$\\le$')
    .replace(/≥/g, '$\\ge$')
    .replace(/≪/g, '$\\ll$')
    .replace(/≫/g, '$\\gg$')
    .replace(/≠/g, '$\\neq$')
    .replace(/≈/g, '$\\approx$')
    .replace(/≡/g, '$\\equiv$')
    .replace(/∮/g, '$\\oint$')
    .replace(/≅/g, '$\\cong$')
    .replace(/⊂/g, '$\\subset$')
    .replace(/∪/g, '$\\cup$')
    .replace(/⊗/g, '$\\otimes$')
    .replace(/↦/g, '$\\mapsto$')
    .replace(/↔/g, '$\\leftrightarrow$')
    .replace(/∂/g, '$\\partial$')
    .replace(/∇/g, '$\\nabla$')
    .replace(/⇒/g, '$\\Rightarrow$')
    .replace(/→/g, '$\\to$')
    .replace(/ñ/g, '\\~{n}')
    .replace(/Ñ/g, '\\~{N}')
    .replace(/−/g, '-')
    .replace(/–|—/g, '--')
    .replace(/[^\x00-\x7F]/g, '');
}

function toEqLatex(unicodeHtml: string, label: string, caption?: string): string {
  return equationToLatex(unicodeHtml, label, caption)
    .replace(/ℱ/g, '\\mathcal{F}')
    .replace(/𝒜/g, '\\mathcal{A}')
    .replace(/𝒪/g, '\\mathcal{O}')
    .replace(/ℋ/g, '\\mathcal{H}')
    .replace(/ℒ/g, '\\mathcal{L}')
    .replace(/ℤ/g, '\\mathbb{Z}')
    .replace(/∮/g, '\\oint ')
    .replace(/≅/g, '\\cong ')
    .replace(/⊂/g, '\\subset ')
    .replace(/∪/g, '\\cup ')
    .replace(/⊗/g, '\\otimes ')
    .replace(/⊙/g, '\\odot ')
    .replace(/↦/g, '\\mapsto ')
    .replace(/↔/g, '\\leftrightarrow ')
    .replace(/∂/g, '\\partial ')
    .replace(/∇/g, '\\nabla ')
    .replace(/⊥/g, '\\perp ')
    .replace(/−/g, '-')
    .replace(/–|—/g, '-')
    .replace(/[^\x00-\x7F]/g, '');
}

function buildH12Preamble(): string {
  return `% Auto-generated Preamble for IGRT-H12 Monograph (pdflatex / xelatex / lualatex)
\\usepackage{iftex}
\\ifPDFTeX
  \\usepackage[T1]{fontenc}
  \\usepackage[utf8]{inputenc}
  \\usepackage{lmodern}
\\else
  \\usepackage{fontspec}
\\fi
\\usepackage{amsmath,amssymb,amsthm,mathtools}
\\usepackage{geometry}
\\geometry{a4paper,margin=24mm,top=26mm,bottom=26mm}
\\usepackage{booktabs,array,longtable}
\\usepackage{graphicx}
\\usepackage{xcolor}
\\usepackage{enumitem}
\\usepackage{hyperref}
\\hypersetup{
  colorlinks=true,
  linkcolor=blue!45!black,
  citecolor=green!40!black,
  urlcolor=blue!50!black,
  pdftitle={${toLatex(H12_META.title)}},
  pdfauthor={Jean-Charles Tassan, Marlon D. Bulaquena, Wilson John Sterking Lauret}
}
\\usepackage{fancyhdr}
\\pagestyle{fancy}
\\fancyhf{}
\\fancyhead[L]{\\small\\textit{IGRT-2026-H12 -- Folding Time Across Hidden Dimensions -- Tassan, Bulaque\\~{n}a, Lauret}}
\\fancyhead[R]{\\small\\thepage}
\\renewcommand{\\headrulewidth}{0.4pt}
\\newtheorem{theorem}{Theorem}[section]
\\newtheorem{nogo}{No-Go Theorem}[section]
`;
}

function buildH12FrontmatterTex(): string {
  const lines: string[] = [];
  lines.push(`\\begin{abstract}`);
  for (const p of H12_ABSTRACT_PARAGRAPHS) {
    lines.push(toLatex(p));
    lines.push('');
  }
  lines.push(`\\noindent\\textbf{${toLatex('Summary for Non-Specialists:')}} ${toLatex(H12_NON_SPECIALIST_SUMMARY.replace(/^Summary for Non-Specialists:\s*/, ''))}`);
  lines.push(`\\end{abstract}`);
  lines.push('');
  lines.push(`\\section*{Lists of Figures, Tables, Equations, Theorems \\& Definitions}`);
  lines.push(`\\subsection*{List of Figures \\& Archival Plates}`);
  lines.push(`\\begin{itemize}[leftmargin=1.4em]`);
  for (const pl of H12_ARCHIVAL_PLATES) lines.push(`  \\item \\textbf{${toLatex(pl.figureNumber)}} (Ch.${pl.anchorChapter}): ${toLatex(pl.title)} [${toLatex(pl.category)}]`);
  for (const fg of H12_FIGURES) lines.push(`  \\item \\textbf{${toLatex(fg.figureNumber)}} (Ch.${fg.anchorChapter}): ${toLatex(fg.title)} [${toLatex(fg.category)}]`);
  lines.push(`\\end{itemize}`);
  lines.push(`\\subsection*{List of Tables}`);
  lines.push(`\\begin{itemize}[leftmargin=1.4em]`);
  for (const tb of H12_FRONTMATTER_TABLES_LIST) lines.push(`  \\item \\textbf{${toLatex(tb.id)}} (${toLatex(tb.location)}): ${toLatex(tb.title)}`);
  lines.push(`\\end{itemize}`);
  lines.push(`\\subsection*{List of Principal Equations}`);
  lines.push(`\\begin{itemize}[leftmargin=1.4em]`);
  for (const eq of H12_FRONTMATTER_EQUATIONS_LIST) lines.push(`  \\item \\textbf{${toLatex(eq.label)}} (${toLatex(eq.location)}, ${toLatex(eq.category)}): ${toLatex(eq.title)}`);
  lines.push(`\\end{itemize}`);
  lines.push(`\\subsection*{List of Theorems \\& Formal Definitions}`);
  lines.push(`\\begin{itemize}[leftmargin=1.4em]`);
  for (const th of H12_THEOREMS_LIST) lines.push(`  \\item \\textbf{${toLatex(th.id)}} (${toLatex(th.location)}, ${toLatex(th.category)}): ${toLatex(th.title)}`);
  for (const df of H12_DEFINITIONS_LIST) lines.push(`  \\item \\textbf{${toLatex(df.id)}} (${toLatex(df.term)}): ${toLatex(df.formalDefinition)}`);
  lines.push(`\\end{itemize}`);
  lines.push('');
  lines.push(`\\section*{Foundational Five-Dimensional Equations (Category C)}`);
  for (const eq of H12_MASTER_EQUATIONS) {
    lines.push(`\\noindent\\textbf{${toLatex(eq.label)} [${toLatex(eq.category)}]}`);
    lines.push(toEqLatex(eq.unicodeHtml, eq.label, eq.caption));
    lines.push('');
  }
  lines.push(`\\section*{${toLatex(H12_SCOPE_AND_NON_CLAIMS.title)}}`);
  lines.push(`\\begin{itemize}`);
  for (const pt of H12_SCOPE_AND_NON_CLAIMS.points) {
    lines.push(`  \\item ${toLatex(pt)}`);
  }
  lines.push(`\\end{itemize}`);
  return lines.join('\n');
}

function buildH12ChaptersTex(standalone: boolean): string {
  const out: string[] = [];
  for (const ch of H12_CHAPTERS) {
    out.push(`\\section{${toLatex(ch.title)}}`);
    out.push(`\\vspace{20pt}`);
    out.push(`\\noindent\\textit{${toLatex(ch.leadSummary)}}`);
    out.push('');
    if (ch.number === 2) {
      out.push(`\\subsubsection*{Timeline of Five-Dimensional Physics (1921--2026)}`);
      out.push(`\\begin{itemize}[leftmargin=1.4em]`);
      for (const tm of TIMELINE_5D_PHYSICS) {
        out.push(`  \\item \\textbf{${toLatex(tm.year)} -- ${toLatex(tm.milestone)}}: ${toLatex(tm.contributionToH12)}`);
      }
      out.push(`\\end{itemize}`);
    }
    for (const sub of ch.subsections) {
      out.push(`\\subsection{${toLatex(sub.title)} \\hfill [\\texttt{${toLatex(sub.category)}}]}`);
      for (const p of sub.paragraphs) {
        out.push(toLatex(p));
        out.push('');
      }
      if (sub.equation) {
        out.push(toEqLatex(sub.equation.unicodeHtml, sub.equation.label, sub.equation.caption));
        out.push('');
      }
      if (sub.bulletPoints && sub.bulletPoints.length > 0) {
        out.push(`\\begin{itemize}[leftmargin=1.4em]`);
        for (const bp of sub.bulletPoints) out.push(`  \\item \\textbf{${toLatex(bp.label)}:} ${toLatex(bp.text)}`);
        out.push(`\\end{itemize}`);
        out.push('');
      }
      if (sub.theoremBox) {
        out.push(`\\begin{quote}`);
        out.push(`\\textbf{${toLatex(sub.theoremBox.number)}: ${toLatex(sub.theoremBox.title)}} [${toLatex(sub.theoremBox.category)}]\\\\`);
        if (sub.theoremBox.hypotheses && sub.theoremBox.hypotheses.length > 0) {
          out.push(`\\begin{itemize}[leftmargin=1.2em]`);
          for (const hyp of sub.theoremBox.hypotheses) out.push(`  \\item ${toLatex(hyp)}`);
          out.push(`\\end{itemize}`);
        }
        out.push(`${toLatex(sub.theoremBox.statement)}`);
        out.push(`\\end{quote}`);
        out.push('');
      }
      if (sub.workedExample) {
        out.push(`\\begin{quote}`);
        out.push(`\\textbf{${toLatex(sub.workedExample.title)}}\\\\`);
        out.push(`${toLatex(sub.workedExample.setup)}`);
        out.push(`\\begin{enumerate}`);
        for (const st of sub.workedExample.steps) out.push(`  \\item ${toLatex(st)}`);
        out.push(`\\end{enumerate}`);
        out.push(toEqLatex(sub.workedExample.resultEquation.unicodeHtml, sub.workedExample.resultEquation.label, sub.workedExample.resultEquation.caption));
        out.push(`\\textit{Takeaway:} ${toLatex(sub.workedExample.takeaway)}`);
        out.push(`\\end{quote}`);
        out.push('');
      }
    }

    if (ch.number === 1) {
      out.push(`\\subsubsection*{Table 1.1: Audit of the Twelve Core IGRT-H11 Components}`);
      out.push(`\\begin{itemize}[leftmargin=1.4em]`);
      for (const r of H11_TWELVE_COMPONENTS_AUDIT) out.push(`  \\item \\textbf{${toLatex(r.component)}} (${toLatex(r.h12Status)}, ${toLatex(r.category)}): ${toLatex(r.h12Modification)}`);
      out.push(`\\end{itemize}`);
      out.push(`\\subsubsection*{Table 1.2: Direct Comparison 4D IGRT-H11 vs 5D IGRT-H12}`);
      out.push(`\\begin{itemize}[leftmargin=1.4em]`);
      for (const c of COMPARISON_4D_VS_5D_IGRT) out.push(`  \\item \\textbf{${toLatex(c.dimension)}}: 4D=${toLatex(c.h11FourD)} | 5D=${toLatex(c.h12FiveD)} (${toLatex(c.epistemicDelta)})`);
      out.push(`\\end{itemize}`);
      out.push(`\\subsubsection*{Table 1.3: Epistemic Boundary Rubric Resolving Category B vs. Category C Grey Areas}`);
      out.push(`\\begin{itemize}[leftmargin=1.4em]`);
      for (const g of EPISTEMIC_BC_GREY_AREA_RUBRIC) out.push(`  \\item \\textbf{${toLatex(g.boundaryCase)}} [${toLatex(g.assignedCategory)}]: Derived: ${toLatex(g.derivedAspect)} Conjectural: ${toLatex(g.conjecturalAspect)} --- ${toLatex(g.ruleApplied)}`);
      out.push(`\\end{itemize}`);
      out.push(`\\subsubsection*{Glossary of Five-Dimensional Terms}`);
      out.push(`\\begin{itemize}[leftmargin=1.4em]`);
      for (const g of GLOSSARY_5D_TERMS) out.push(`  \\item \\textbf{${toLatex(g.term)}}: ${toLatex(g.definition)}`);
      out.push(`\\end{itemize}`);
      out.push(`\\begin{quote}${toLatex(SUMMARY_FOR_PHYSICISTS)}\\end{quote}`);
    }
    if (ch.number === 2) {
      out.push(`\\subsubsection*{Table 2.1: Structured Catalog of All 665 Verified IGRT-H11 Assertions}`);
      out.push(`\\begin{itemize}[leftmargin=1.4em]`);
      for (const row of H11_665_ASSERTIONS_CATALOG) out.push(`  \\item \\textbf{${toLatex(row.moduleGroup)}} (${row.assertionCount} assertions): ${toLatex(row.verifiedPhysicalScope)}`);
      out.push(`\\end{itemize}`);
      out.push(`\\subsubsection*{Table 2.2: E\\\"{o}t-Wash Uncertainty, Multi-Regulator Stability \\& Clock Energy Sweep}`);
      out.push(`\\begin{itemize}[leftmargin=1.4em]`);
      for (const row of REGULATOR_SENSITIVITY_TABLE) out.push(`  \\item \\textbf{${toLatex(row.regimeOrRegulator)}} (${toLatex(row.energyOrRadius)}): ${toLatex(row.computedOutput)} --- ${toLatex(row.physicalInterpretation)}`);
      out.push(`\\end{itemize}`);
    }
    if (ch.number === 3) {
      out.push(`\\subsubsection*{Table 3.1: Seven Temporal Notions in IGRT-H12 \\& Standard Literature Correspondence}`);
      out.push(`\\begin{itemize}[leftmargin=1.4em]`);
      for (const t of SEVEN_TEMPORAL_NOTIONS) out.push(`  \\item \\textbf{${toLatex(t.notion)}} (${toLatex(t.symbol)}): ${toLatex(t.mathematicalDefinition)} --- ${toLatex(t.foldsInH12)} | Literature: ${toLatex(t.literatureComparison)}`);
      out.push(`\\end{itemize}`);
    }
    if (ch.number === 4) {
      out.push(`\\subsubsection*{Table 4.1: Positive Conjectures Summary Table (Category C)}`);
      out.push(`\\begin{itemize}[leftmargin=1.4em]`);
      for (const p of POSITIVE_CONJECTURES_SUMMARY) out.push(`  \\item \\textbf{${toLatex(p.conjecture)}} [${toLatex(p.category)}]: ${toLatex(p.statement)} (Test: ${toLatex(p.test)})`);
      out.push(`\\end{itemize}`);
      out.push(`\\subsubsection*{Table 4.2: Model 2B Quadrature Convergence, Euler--Lagrange \\& ds\\_5\\^{}2 = 0 Audit}`);
      out.push(`\\begin{itemize}[leftmargin=1.4em]`);
      for (const row of MODEL2B_CONVERGENCE_AND_MICROCAUSALITY_TABLE) out.push(`  \\item \\textbf{${toLatex(row.benchmarkSpan)}} (${toLatex(row.turningPeak)}): ${toLatex(row.etaFoldAndSpeed)} | ${toLatex(row.elAndNullResidual)}`);
      out.push(`\\end{itemize}`);
    }
    if (ch.number === 5) {
      out.push(`\\subsubsection*{Table 5.1: Six-Class Black-Hole \\& Portal Taxonomy (Classes A--F)}`);
      out.push(`\\begin{itemize}[leftmargin=1.4em]`);
      for (const b of SIX_BLACK_HOLE_CLASSES) out.push(`  \\item \\textbf{${toLatex(b.classId)} --- ${toLatex(b.label)}} [${toLatex(b.category)}]: ${toLatex(b.portalViability)} (${toLatex(b.necStatus)})`);
      out.push(`\\end{itemize}`);
    }
    if (ch.number === 6 || ch.number === 9) {
      out.push(`\\subsubsection*{Table ${ch.number}.1: Negative Results Summary}`);
      out.push(`\\begin{itemize}[leftmargin=1.4em]`);
      for (const n of NEGATIVE_RESULTS_SUMMARY) out.push(`  \\item \\textbf{${toLatex(n.theorem)}} [${toLatex(n.category)}]: ${toLatex(n.statement)} --- ${toLatex(n.implication)}`);
      out.push(`\\end{itemize}`);
      out.push(`\\subsubsection*{Glossary of Negative Theorems}`);
      out.push(`\\begin{itemize}[leftmargin=1.4em]`);
      for (const g of GLOSSARY_NEGATIVE_THEOREMS) out.push(`  \\item \\textbf{${toLatex(g.term)}}: ${toLatex(g.definition)}`);
      out.push(`\\end{itemize}`);
    }
    if (ch.number === 10) {
      out.push(`\\subsubsection*{Table 10.1: What Is Unique to 5D vs Reproduced in 4D H11}`);
      out.push(`\\begin{itemize}[leftmargin=1.4em]`);
      for (const u of WHAT_IS_UNIQUE_TO_5D) out.push(`  \\item \\textbf{${toLatex(u.observable)}}: 4D=${toLatex(u.reproducedIn4DH11)} | 5D=${toLatex(u.uniqueTo5DH12)} [${toLatex(u.empiricalStatus)}]`);
      out.push(`\\end{itemize}`);
      out.push(`\\subsubsection*{Table 10.2: Observational Bounds Consistency Audit}`);
      out.push(`\\begin{itemize}[leftmargin=1.4em]`);
      for (const b of FIVE_D_OBSERVATIONAL_BOUNDS) out.push(`  \\item \\textbf{${toLatex(b.probe)}} (${toLatex(b.bound)}) [${toLatex(b.h12Status)}]: ${toLatex(b.derivationOrAssumption)}`);
      out.push(`\\end{itemize}`);
    }
    if (ch.number === 11) {
      out.push(`\\subsubsection*{Table 11.1: What Is Not Derived Ledger}`);
      out.push(`\\begin{itemize}[leftmargin=1.4em]`);
      for (const w of WHAT_IS_NOT_DERIVED_LEDGER) out.push(`  \\item \\textbf{${toLatex(w.claim)}} [${toLatex(w.category)}]: ${toLatex(w.whyNotDerived)}`);
      out.push(`\\end{itemize}`);
    }
    if (ch.number === 12) {
      out.push(`\\subsubsection*{Table 12.1: H12 Experimental \\& Conceptual Protocols P7--P12}`);
      out.push(`\\begin{itemize}[leftmargin=1.4em]`);
      for (const p of H12_ALL_PROTOCOLS) out.push(`  \\item \\textbf{${toLatex(p.id)} --- ${toLatex(p.name)}} [${toLatex(p.category)}]: ${toLatex(p.numericalSensitivity)}. Falsification: ${toLatex(p.falsificationCriterion)}`);
      out.push(`\\end{itemize}`);
      out.push(`\\subsubsection*{Tables 12.2--12.6: Timeline, Thresholds, Decision Matrix \\& H11 vs H12}`);
      out.push(`\\begin{itemize}[leftmargin=1.4em]`);
      for (const t of P7_TO_P10_TIMELINE_TABLE) out.push(`  \\item ${toLatex(t.protocol)}: ${toLatex(t.currentState)} -> ${toLatex(t.requiredSensitivity)} (${toLatex(t.expectedYear)})`);
      for (const f of P7_TO_P10_FALSIFICATION_TABLE) out.push(`  \\item Falsify ${toLatex(f.protocol)}: ${toLatex(f.nullBound)} --- ${toLatex(f.whatItRulesOut)}`);
      for (const c of P7_TO_P10_CONFIRMATION_TABLE) out.push(`  \\item Confirm ${toLatex(c.protocol)}: ${toLatex(c.signalSignature)} (Control: ${toLatex(c.requiredControl)})`);
      for (const d of P7_TO_P10_DECISION_MATRIX) out.push(`  \\item Outcome [${toLatex(d.outcome)}] -> ${toLatex(d.posteriorStatus)}. Action: ${toLatex(d.mandatoryAction)}`);
      for (const cmp of H11_VS_H12_PROTOCOLS_COMPARISON) out.push(`  \\item ${toLatex(cmp.aspect)}: H11=${toLatex(cmp.h11Protocols)} | H12=${toLatex(cmp.h12Protocols)}`);
      out.push(`\\end{itemize}`);
      out.push(`\\subsubsection*{Table 12.7: Quantitative Noise Budgets \\& Systematic Mitigation (P7--P10)}`);
      out.push(`\\begin{itemize}[leftmargin=1.4em]`);
      for (const nb of P7_TO_P10_NOISE_BUDGET_TABLE) out.push(`  \\item \\textbf{${toLatex(nb.protocol)}}: Sources: ${toLatex(nb.primaryNoiseSources)} | Floor: ${toLatex(nb.quantitativeBudget)} --- ${toLatex(nb.mitigationArchitecture)}`);
      out.push(`\\end{itemize}`);
      out.push(`\\subsubsection*{Protocol Statistical Framework, Joint Likelihood \\& Bayesian Occam Penalty}`);
      out.push(`\\begin{itemize}[leftmargin=1.4em]`);
      for (const sec of H12_PROTOCOL_ANALYSIS_SECTIONS) out.push(`  \\item \\textbf{${toLatex(sec.title)}}: ${toLatex(sec.content)}`);
      out.push(`\\end{itemize}`);
      out.push(`\\subsubsection*{Falsification \\& Confirmation Checklists}`);
      out.push(`\\begin{itemize}[leftmargin=1.4em]`);
      for (const f of H12_FALSIFICATION_CHECKLIST) out.push(`  \\item [Falsify] ${toLatex(f)}`);
      for (const c of H12_CONFIRMATION_CHECKLIST) out.push(`  \\item [Confirm] ${toLatex(c)}`);
      out.push(`\\end{itemize}`);
      out.push(`\\begin{quote}${toLatex(H12_FUNDING_AGENCY_SUMMARY)}\\end{quote}`);
    }
    if (ch.number === 13) {
      out.push(`\\subsubsection*{Table 13.1: Twelve Open Research Extrapolations}`);
      out.push(`\\begin{itemize}[leftmargin=1.4em]`);
      for (const ex of TWELVE_EXTRAPOLATIONS) out.push(`  \\item \\textbf{${ex.id}. ${toLatex(ex.topic)}} [${toLatex(ex.category)}]: ${toLatex(ex.extension)} Obstacle: ${toLatex(ex.keyObstacleOrFalsifier)}`);
      out.push(`\\end{itemize}`);
      out.push(`\\subsubsection*{List of Open Problems (OP-1 to OP-6)}`);
      out.push(`\\begin{itemize}[leftmargin=1.4em]`);
      for (const op of H12_OPEN_PROBLEMS_LIST) out.push(`  \\item \\textbf{${toLatex(op.id)}: ${toLatex(op.problem)}} --- ${toLatex(op.statusNote)}`);
      out.push(`\\end{itemize}`);
      out.push(`\\subsubsection*{Response to Prior Audits}`);
      out.push(`\\begin{itemize}[leftmargin=1.4em]`);
      for (const r of H12_PRIOR_AUDIT_RESPONSES) out.push(`  \\item \\textbf{${toLatex(r.auditScope)}}: ${toLatex(r.panelCritique)} --- Resolution: ${toLatex(r.harmonizedResolution)}`);
      out.push(`\\end{itemize}`);
    }

    if (!standalone) {
      for (const fig of H12_FIGURES.filter((f) => f.anchorChapter === ch.number)) {
        out.push(`\\begin{figure}[htbp]`);
        out.push(`\\centering`);
        out.push(`\\IfFileExists{figures/${fig.id}.png}{\\includegraphics[width=0.92\\textwidth]{figures/${fig.id}.png}}{\\fbox{\\parbox{0.85\\textwidth}{\\centering Figure raster missing; inspect figures/${fig.id}.svg}}}`);
        out.push(`\\vspace{6pt}`);
        out.push(`\\caption{\\textbf{${toLatex(fig.figureNumber)} [${toLatex(fig.category)}]:} ${toLatex(fig.title)}. ${toLatex(fig.caption)}}`);
        out.push(`\\end{figure}`);
      }
      for (const pl of H12_ARCHIVAL_PLATES.filter((p) => p.anchorChapter === ch.number)) {
        out.push(`\\begin{figure}[htbp]`);
        out.push(`\\centering`);
        out.push(`\\IfFileExists{illustrations/${pl.bundleFilename}}{\\includegraphics[width=0.92\\textwidth]{illustrations/${pl.bundleFilename}}}{\\fbox{\\parbox{0.85\\textwidth}{\\centering Archival plate missing: illustrations/${pl.bundleFilename}}}}`);
        out.push(`\\vspace{8pt}`);
        out.push(`\\caption{\\textbf{${toLatex(pl.figureNumber)} [${toLatex(pl.category)}]:} ${toLatex(pl.title)}. ${toLatex(pl.description)}}`);
        out.push(`\\end{figure}`);
      }
    }
    out.push('');
  }
  return out.join('\n');
}

function buildH12MainAppendicesLMNTex(): string {
  const out: string[] = ['\\appendix'];
  for (const app of H12_MAIN_APPENDICES_LMN) {
    out.push(`\\section{${toLatex(app.title)} [${toLatex(app.category)}]}`);
    out.push(`\\noindent\\textit{${toLatex(app.leadSummary)}}`);
    out.push('');
    for (const p of app.paragraphs) {
      out.push(toLatex(p));
      out.push('');
    }
    if (app.letter === 'L') {
      out.push(`\\subsection*{Table L.1: Evaluation of Eleven Candidate Portal Mechanisms}`);
      out.push(`\\begin{itemize}[leftmargin=1.4em]`);
      for (const m of ELEVEN_PORTAL_MECHANISMS) out.push(`  \\item \\textbf{${toLatex(m.mechanism)}} [${toLatex(m.tier)}, ${toLatex(m.category)}]: ${toLatex(m.quantitativeObstacleOrLimit)}`);
      out.push(`\\end{itemize}`);
    }
    if (app.letter === 'M') {
      out.push(`\\subsection*{Table M.1: Devices A--F Ten-Field Technical Specifications}`);
      for (const d of SIX_PROPOSED_DEVICES) {
        out.push(`\\paragraph{${toLatex(d.deviceId)}: ${toLatex(d.name)} [${toLatex(d.category)}]}`);
        out.push(`Principle: ${toLatex(d.physicalPrinciple)} Signal: ${toLatex(d.predictedSignal)} Tests: ${toLatex(d.whatItActuallyTests)} Non-Claim: ${toLatex(d.whatItDoesNotDo)}`);
      }
    }
    if (app.letter === 'N') {
      out.push(`\\subsection*{Table N.1: Ten-Domain Structural Audit (500 Criteria)}`);
      out.push(`\\begin{itemize}[leftmargin=1.4em]`);
      for (const row of H12_TEN_DOMAIN_AUDITS) {
        out.push(
          `  \\item \\textbf{${toLatex(row.domainNumber)} --- ${toLatex(row.domainName)}} [${toLatex(row.verdict)} | ${toLatex(row.category)}]: ` +
            `Self-Contained ${row.selfContainedPoints}/${row.maxPoints}, Applicable ${row.applicablePoints}/${row.maxPoints}. ${toLatex(row.openFrontierNotes)}`
        );
      }
      out.push(`\\end{itemize}`);
      out.push('');
      out.push(`\\subsection*{Table N.2: Sixteen Direct Red-Team Attacks (H12-ATK-01 to H12-ATK-16)}`);
      out.push(`\\begin{itemize}[leftmargin=1.4em]`);
      for (const atk of H12_SIXTEEN_REDTEAM_ATTACKS) {
        out.push(
          `  \\item \\textbf{${toLatex(atk.id)} (${atk.pointsAwarded}/${atk.maxPoints}) --- ${toLatex(atk.attackTitle)}} [${toLatex(atk.technicalStatus)} | ${toLatex(atk.category)}]: ` +
            `${toLatex(atk.h12ResolutionAndCitation)}`
        );
      }
      out.push(`\\end{itemize}`);
    }
  }
  out.push('');
  out.push('\\section*{References}');
  out.push('\\begin{enumerate}');
  for (const ref of H12_REFERENCES) out.push(`  \\item ${toLatex(ref.citation)}`);
  out.push('\\end{enumerate}');
  return out.join('\n');
}

function buildH12SupplementaryAppendicesAKTex(standaloneDoc = false): string {
  const out: string[] = [];
  if (standaloneDoc) {
    out.push('\\documentclass[11pt,a4paper]{article}');
    out.push('\\input{preamble}');
    out.push(`\\title{Supplementary Volume II: Technical Appendices (A--K) \\\\[0.4em] \\large\\textit{${toLatex(H12_META.title)}}}`);
    out.push(`\\author{${H12_META.authorRoster.map((au) => toLatex(au.name)).join(' \\and ')}}`);
    out.push(`\\date{${toLatex(H12_META.date)}}`);
    out.push('\\begin{document}');
    out.push('\\maketitle');
    out.push('\\appendix');
  } else {
    out.push('\\clearpage');
    out.push('\\section*{Supplementary Volume II: Technical Appendices (A--K)}');
  }
  for (const app of H12_APPENDICES) {
    out.push(`\\subsection*{Appendix ${toLatex(app.letter)}: ${toLatex(app.title)} [${toLatex(app.category)}]}`);
    out.push(`\\noindent\\textit{${toLatex(app.summary)}}`);
    out.push('');
    for (const eq of app.equations) out.push(toEqLatex(eq.unicodeHtml, eq.label, eq.caption));
    for (const p of app.bodyParagraphs) {
      out.push(toLatex(p));
      out.push('');
    }
  }
  if (standaloneDoc) out.push('\\end{document}');
  return out.join('\n');
}

export function buildH12StandaloneLatex(): string {
  const latexAuthors = H12_META.authorRoster
    .map(
      (au) =>
        `${toLatex(au.name)}\\\\\n  {\\small ${toLatex(au.affiliation)}}\\\\\n  {\\small ORCID: \\href{${au.orcidUrl}}{${au.orcidUrl}}}`
    )
    .join('\n  \\and\n  ');

  return `\\documentclass[11pt,a4paper]{article}
${buildH12Preamble()}
\\title{${toLatex(H12_META.title)} \\\\[0.5em] \\large\\textit{${toLatex(H12_META.subtitle)}}}
\\author{
  ${latexAuthors}
}
\\date{${toLatex(H12_META.date)} --- Edition H12}
\\begin{document}
\\maketitle
${buildH12FrontmatterTex()}
\\tableofcontents
\\newpage
${buildH12ChaptersTex(true)}
${buildH12MainAppendicesLMNTex()}
${buildH12SupplementaryAppendicesAKTex(false)}
\\end{document}
`;
}

export function buildH12LatexFilesMap(): Record<string, string> {
  const latexAuthors = H12_META.authorRoster
    .map(
      (au) =>
        `${toLatex(au.name)}\\\\\n  {\\small ${toLatex(au.affiliation)}}\\\\\n  {\\small ORCID: \\href{${au.orcidUrl}}{${au.orcidUrl}}}`
    )
    .join('\n  \\and\n  ');

  const mainTex = `\\documentclass[11pt,a4paper]{article}
\\input{preamble}
\\title{${toLatex(H12_META.title)} \\\\[0.5em] \\large\\textit{${toLatex(H12_META.subtitle)}}}
\\author{
  ${latexAuthors}
}
\\date{${toLatex(H12_META.date)} --- Edition H12}
\\begin{document}
\\maketitle
\\input{sections/00_frontmatter}
\\tableofcontents
\\newpage
\\input{sections/01_chapters}
\\input{sections/02_appendices_LMN}
\\end{document}
`;

  const makefile = `all:
\tpdflatex -interaction=nonstopmode main.tex
\tpdflatex -interaction=nonstopmode main.tex
\tpdflatex -interaction=nonstopmode supplementary_appendices_A_K.tex
\tpdflatex -interaction=nonstopmode supplementary_appendices_A_K.tex

verify:
\tnode scripts/verify-igrt-h12.mjs
`;

  const readme = `# IGRT-H12 LaTeX & Numerical Verification Bundle

Compile Main Monograph (main.tex) & Supplementary Volume II (supplementary_appendices_A_K.tex):
  make        (or upload entire ZIP directly to Overleaf)

Verify all 62 numerical and symbolic physics assertions:
  node scripts/verify-igrt-h12.mjs
`;

  const files: Record<string, string> = {
    'main.tex': mainTex,
    'supplementary_appendices_A_K.tex': buildH12SupplementaryAppendicesAKTex(true),
    'preamble.tex': buildH12Preamble(),
    'sections/00_frontmatter.tex': buildH12FrontmatterTex(),
    'sections/01_chapters.tex': buildH12ChaptersTex(false),
    'sections/02_appendices_LMN.tex': buildH12MainAppendicesLMNTex(),
    'scripts/verify-igrt-h12.mjs': verifyH12ScriptSource,
    Makefile: makefile,
    'README.md': readme
  };

  for (const fig of H12_FIGURES) {
    const formatted = formatSvgMathMarkup(pdfBmpSafeUnicode(fig.svgMarkup));
    files[`figures/${fig.id}.svg`] = formatted.startsWith('<?xml')
      ? formatted
      : `<?xml version="1.0" encoding="UTF-8"?>\n${formatted}\n`;
  }

  return files;
}

async function rasterizeH12Svg(svgMarkup: string): Promise<Uint8Array | null> {
  if (typeof document === 'undefined') return null;
  return new Promise((resolve) => {
    try {
      const formatted = formatSvgMathMarkup(pdfBmpSafeUnicode(svgMarkup));
      const vbMatch = formatted.match(/viewBox="0 0 (\d+) (\d+)"/);
      const vbW = vbMatch ? Number(vbMatch[1]) : 760;
      const vbH = vbMatch ? Number(vbMatch[2]) : 310;
      const pxW = 2000;
      const pxH = Math.max(120, Math.round((pxW * vbH) / vbW));

      const img = new Image();
      const blob = new Blob([formatted], { type: 'image/svg+xml;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const timer = setTimeout(() => {
        URL.revokeObjectURL(url);
        resolve(null);
      }, 4000);

      img.onload = () => {
        clearTimeout(timer);
        try {
          const canvas = document.createElement('canvas');
          canvas.width = pxW;
          canvas.height = pxH;
          const ctx = canvas.getContext('2d');
          if (!ctx) {
            URL.revokeObjectURL(url);
            resolve(null);
            return;
          }
          ctx.fillStyle = '#FFFFFF';
          ctx.fillRect(0, 0, pxW, pxH);
          ctx.drawImage(img, 0, 0, pxW, pxH);
          URL.revokeObjectURL(url);
          canvas.toBlob((b) => {
            if (!b) {
              resolve(null);
              return;
            }
            b.arrayBuffer().then((ab) => resolve(new Uint8Array(ab))).catch(() => resolve(null));
          }, 'image/png');
        } catch {
          URL.revokeObjectURL(url);
          resolve(null);
        }
      };
      img.onerror = () => {
        clearTimeout(timer);
        URL.revokeObjectURL(url);
        resolve(null);
      };
      img.src = url;
    } catch {
      resolve(null);
    }
  });
}

async function fetchImageBytes(urlPath: string): Promise<Uint8Array | null> {
  if (typeof fetch === 'undefined') return null;
  try {
    const res = await fetch(urlPath);
    if (!res.ok) return null;
    return new Uint8Array(await res.arrayBuffer());
  } catch {
    return null;
  }
}

export async function buildH12LatexBundleZipBlob(): Promise<Blob> {
  const encoder = new TextEncoder();
  const filesMap = buildH12LatexFilesMap();
  const entries: ZipEntryInput[] = Object.entries(filesMap).map(([name, content]) => ({
    name,
    data: encoder.encode(content)
  }));

  await Promise.all(
    H12_ARCHIVAL_PLATES.map(async (pl) => {
      const bytes = await fetchImageBytes(pl.imagePath);
      if (bytes) {
        entries.push({ name: `illustrations/${pl.bundleFilename}`, data: bytes });
      }
    })
  );

  for (const fig of H12_FIGURES) {
    const pngBytes = await rasterizeH12Svg(fig.svgMarkup);
    if (pngBytes) {
      entries.push({ name: `figures/${fig.id}.png`, data: pngBytes });
    }
  }

  const zipBytes = buildZipArchive(entries);
  const exactBuffer = zipBytes.buffer.slice(
    zipBytes.byteOffset,
    zipBytes.byteOffset + zipBytes.byteLength
  ) as ArrayBuffer;
  return new Blob([exactBuffer], { type: 'application/zip' });
}

// ---------------------------------------------------------------------------
// 2. Self-Contained Archival HTML Export
// ---------------------------------------------------------------------------

function escHtml(s?: string | null): string {
  return String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

export function buildH12SelfContainedHtml(): string {
  const chapterHtml = H12_CHAPTERS.map((ch) => {
    const subs = ch.subsections
      .map((s) => {
        const eqBlock = s.equation
          ? `<div class="eq-box"><div class="eq-main">${s.equation.unicodeHtml}</div><div class="eq-cap">${escHtml(s.equation.label)} [${escHtml(s.equation.category)}] — ${escHtml(s.equation.caption)}</div></div>`
          : '';
        const bulletsBlock = s.bulletPoints && s.bulletPoints.length > 0
          ? `<ul>${s.bulletPoints.map((bp) => `<li><strong>${escHtml(bp.label)}:</strong> ${escHtml(bp.text)}</li>`).join('')}</ul>`
          : '';
        const thmBlock = s.theoremBox
          ? `<div class="thm-box"><strong>${escHtml(s.theoremBox.number)} — ${escHtml(s.theoremBox.title)}</strong> <code>${escHtml(s.theoremBox.category)}</code><ul>${s.theoremBox.hypotheses.map((h) => `<li>${escHtml(h)}</li>`).join('')}</ul><p>${escHtml(s.theoremBox.statement)}</p></div>`
          : '';
        const exBlock = s.workedExample
          ? `<div class="thm-box"><strong>${escHtml(s.workedExample.title)}</strong><p>${escHtml(s.workedExample.setup)}</p><ol>${s.workedExample.steps.map((st) => `<li>${escHtml(st)}</li>`).join('')}</ol><div class="eq-box"><div class="eq-main">${s.workedExample.resultEquation.unicodeHtml}</div><div class="eq-cap">${escHtml(s.workedExample.resultEquation.label)} — ${escHtml(s.workedExample.resultEquation.caption)}</div></div><p><strong>Takeaway:</strong> ${escHtml(s.workedExample.takeaway)}</p></div>`
          : '';
        return `<section><h3>${escHtml(s.number)} ${escHtml(s.title)} <span class="cat-label">${escHtml(s.category)}</span></h3>${s.paragraphs.map((p) => `<p>${escHtml(p)}</p>`).join('')}${eqBlock}${bulletsBlock}${thmBlock}${exBlock}</section>`;
      })
      .join('');
    let chapterExtras = '';
    if (ch.number === 1) {
      chapterExtras += `<h4>Table 1.1 · Audit of All 12 Core IGRT-H11 Components &amp; H12 Embedding Status</h4><table><thead><tr><th>Component</th><th>H11 Value / Role</th><th>H12 Status</th><th>Category &amp; Modification</th></tr></thead><tbody>${H11_TWELVE_COMPONENTS_AUDIT.map((r) => `<tr><td>${escHtml(r.component)}</td><td>${escHtml(r.h11EquationOrValue)}</td><td>${escHtml(r.h12Status)}</td><td><strong>${escHtml(r.category)}:</strong> ${escHtml(r.h12Modification)}</td></tr>`).join('')}</tbody></table>`;
      chapterExtras += `<h4>Table 1.2 · Direct Comparison: 4D IGRT-H11 vs. 5D IGRT-H12</h4><table><thead><tr><th>Dimension</th><th>4D IGRT-H11</th><th>5D IGRT-H12</th><th>Epistemic Delta</th></tr></thead><tbody>${COMPARISON_4D_VS_5D_IGRT.map((c) => `<tr><td>${escHtml(c.dimension)}</td><td>${escHtml(c.h11FourD)}</td><td>${escHtml(c.h12FiveD)}</td><td>${escHtml(c.epistemicDelta)}</td></tr>`).join('')}</tbody></table>`;
      chapterExtras += `<h4>Table 1.3 · Epistemic Boundary Rubric (Category B vs. C)</h4><table><thead><tr><th>Boundary Case</th><th>Derived Core vs. Conjectural Premise</th><th>Category &amp; Rule</th></tr></thead><tbody>${EPISTEMIC_BC_GREY_AREA_RUBRIC.map((g) => `<tr><td>${escHtml(g.boundaryCase)}</td><td><strong>Derived:</strong> ${escHtml(g.derivedAspect)}<br/><strong>Conjectural:</strong> ${escHtml(g.conjecturalAspect)}</td><td>${escHtml(g.assignedCategory)} — ${escHtml(g.ruleApplied)}</td></tr>`).join('')}</tbody></table>`;
      chapterExtras += `<h4>Glossary of Five-Dimensional Terms</h4><dl>${GLOSSARY_5D_TERMS.map((g) => `<dt><strong>${escHtml(g.term)}</strong></dt><dd>${escHtml(g.definition)}</dd>`).join('')}</dl>`;
      chapterExtras += `<div class="thm-box">${escHtml(SUMMARY_FOR_PHYSICISTS)}</div>`;
    } else if (ch.number === 2) {
      chapterExtras += `<h4>Timeline of Five-Dimensional Physics (1921–2026)</h4><ul>${TIMELINE_5D_PHYSICS.map((tm) => `<li><strong>${escHtml(tm.year)} · ${escHtml(tm.milestone)}:</strong> ${escHtml(tm.contributionToH12)}</li>`).join('')}</ul>`;
      chapterExtras += `<h4>Table 2.1 · Structured Catalog of 665 Verified H11 Assertions</h4><table><thead><tr><th>Group</th><th>Assertions</th><th>Scope</th></tr></thead><tbody>${H11_665_ASSERTIONS_CATALOG.map((c) => `<tr><td>${escHtml(c.moduleGroup)}</td><td>${c.assertionCount}</td><td>${escHtml(c.verifiedPhysicalScope)}</td></tr>`).join('')}</tbody></table>`;
      chapterExtras += `<h4>Table 2.2 · Eöt-Wash Uncertainty, UV Regulators &amp; Clock Energy Sweep</h4><table><thead><tr><th>Regime / Regulator</th><th>Scale</th><th>Output</th><th>Interpretation</th></tr></thead><tbody>${REGULATOR_SENSITIVITY_TABLE.map((r) => `<tr><td>${escHtml(r.regimeOrRegulator)}</td><td>${escHtml(r.energyOrRadius)}</td><td>${escHtml(r.computedOutput)}</td><td>${escHtml(r.physicalInterpretation)}</td></tr>`).join('')}</tbody></table>`;
    } else if (ch.number === 3) {
      chapterExtras += `<h4>Table 3.1 · Seven Orthogonal Temporal Notions &amp; Literature Correspondence</h4><table><thead><tr><th>Notion</th><th>Symbol</th><th>Definition</th><th>Folding &amp; Literature</th></tr></thead><tbody>${SEVEN_TEMPORAL_NOTIONS.map((t) => `<tr><td>${escHtml(t.notion)}</td><td>${escHtml(t.symbol)}</td><td>${escHtml(t.mathematicalDefinition)}</td><td>${escHtml(t.foldsInH12)}<br/><em>Literature:</em> ${escHtml(t.literatureComparison)}</td></tr>`).join('')}</tbody></table>`;
    } else if (ch.number === 4) {
      chapterExtras += `<h4>Table 4.1 · Positive Conjectures Summary Table (Strictly Category C)</h4><table><thead><tr><th>Conjecture</th><th>Conditional Mathematical Statement</th><th>Target Protocol &amp; Status</th></tr></thead><tbody>${POSITIVE_CONJECTURES_SUMMARY.map((p) => `<tr><td>${escHtml(p.conjecture)}</td><td>${escHtml(p.statement)}</td><td><strong>${escHtml(p.category)}:</strong> ${escHtml(p.test)}</td></tr>`).join('')}</tbody></table>`;
      chapterExtras += `<h4>Table 4.2 · Model 2B Quadrature Convergence &amp; ds_5² ≡ 0 Verification</h4><table><thead><tr><th>Span</th><th>Peak Depth</th><th>Folding &amp; Speed</th><th>Residuals</th></tr></thead><tbody>${MODEL2B_CONVERGENCE_AND_MICROCAUSALITY_TABLE.map((m) => `<tr><td>${escHtml(m.benchmarkSpan)}</td><td>${escHtml(m.turningPeak)}</td><td>${escHtml(m.etaFoldAndSpeed)}</td><td>${escHtml(m.elAndNullResidual)}</td></tr>`).join('')}</tbody></table>`;
    } else if (ch.number === 5) {
      chapterExtras += `<h4>Table 5.1 · Six-Class Black-Hole &amp; Portal Geometry Taxonomy (Classes A–F)</h4><table><thead><tr><th>Class</th><th>Metric / NEC Status</th><th>Portal Viability</th><th>Stability &amp; Category</th></tr></thead><tbody>${SIX_BLACK_HOLE_CLASSES.map((b) => `<tr><td><strong>${escHtml(b.classId)}</strong> (${escHtml(b.label)})</td><td>${escHtml(b.metricSignatureAndForm)}<br/>${escHtml(b.necStatus)}</td><td>${escHtml(b.portalViability)}</td><td><strong>${escHtml(b.category)}:</strong> ${escHtml(b.stabilityAndConstraints)}</td></tr>`).join('')}</tbody></table>`;
    } else if (ch.number === 6 || ch.number === 9) {
      chapterExtras += `<h4>Table ${ch.number}.1 · ${ch.number === 6 ? 'Negative Results Summary' : 'Consolidated Negative Results Summary Table (Category A/B)'}</h4><table><thead><tr><th>Negative Theorem</th><th>Category</th><th>Statement</th><th>Physical Implication</th></tr></thead><tbody>${NEGATIVE_RESULTS_SUMMARY.map((n) => `<tr><td>${escHtml(n.theorem)}</td><td>${escHtml(n.category)}</td><td>${escHtml(n.statement)}</td><td>${escHtml(n.implication)}</td></tr>`).join('')}</tbody></table>`;
      chapterExtras += `<h4>Glossary of Negative Theorems</h4><dl>${GLOSSARY_NEGATIVE_THEOREMS.map((g) => `<dt><strong>${escHtml(g.term)}</strong></dt><dd>${escHtml(g.definition)}</dd>`).join('')}</dl>`;
    } else if (ch.number === 10) {
      chapterExtras += `<h4>Table 10.1 · What Is Unique to 5D vs. Already Resolved in 4D IGRT-H11</h4><table><thead><tr><th>Observable</th><th>4D IGRT-H11</th><th>Unique to 5D IGRT-H12</th><th>Empirical Status</th></tr></thead><tbody>${WHAT_IS_UNIQUE_TO_5D.map((u) => `<tr><td>${escHtml(u.observable)}</td><td>${escHtml(u.reproducedIn4DH11)}</td><td>${escHtml(u.uniqueTo5DH12)}</td><td>${escHtml(u.empiricalStatus)}</td></tr>`).join('')}</tbody></table>`;
      chapterExtras += `<h4>Table 10.2 · Observational Bounds Consistency Audit</h4><table><thead><tr><th>Probe</th><th>Quantitative Bound</th><th>H12 Status</th><th>Derived vs. Assumed</th></tr></thead><tbody>${FIVE_D_OBSERVATIONAL_BOUNDS.map((b) => `<tr><td>${escHtml(b.probe)}</td><td>${escHtml(b.bound)}</td><td>${escHtml(b.h12Status)}</td><td>${escHtml(b.derivationOrAssumption)}</td></tr>`).join('')}</tbody></table>`;
    } else if (ch.number === 11) {
      chapterExtras += `<h4>Table 11.1 · Exhaustive Ledger of Non-Derived Claims (Categories A, C &amp; D)</h4><table><thead><tr><th>Claim / Ansatz / Postulate</th><th>Category</th><th>Exact Reason Why Not Derived in H12</th></tr></thead><tbody>${WHAT_IS_NOT_DERIVED_LEDGER.map((w) => `<tr><td>${escHtml(w.claim)}</td><td>${escHtml(w.category)}</td><td>${escHtml(w.whyNotDerived)}</td></tr>`).join('')}</tbody></table>`;
    } else if (ch.number === 12) {
      chapterExtras += `<h4>Table 12.1 · Dedicated IGRT-H12 Experimental &amp; Conceptual Protocols (P7–P12)</h4><table><thead><tr><th>Protocol</th><th>Relation to H11</th><th>Sensitivity</th><th>Falsification Criterion</th></tr></thead><tbody>${H12_ALL_PROTOCOLS.map((p) => `<tr><td><strong>${escHtml(p.id)} · ${escHtml(p.name)}</strong><br/>${escHtml(p.category)} (${escHtml(p.timeline)})</td><td>${escHtml(p.relationToH11)}</td><td>${escHtml(p.numericalSensitivity)}</td><td>${escHtml(p.falsificationCriterion)}</td></tr>`).join('')}</tbody></table>`;
      chapterExtras += `<h4>Table 12.2 · P7–P10 Experimental Timeline</h4><table><thead><tr><th>Protocol</th><th>Current State</th><th>Required Sensitivity</th><th>Expected Window</th></tr></thead><tbody>${P7_TO_P10_TIMELINE_TABLE.map((t) => `<tr><td>${escHtml(t.protocol)}</td><td>${escHtml(t.currentState)}</td><td>${escHtml(t.requiredSensitivity)}</td><td>${escHtml(t.expectedYear)}</td></tr>`).join('')}</tbody></table>`;
      chapterExtras += `<h4>Table 12.3 · Falsification Thresholds &amp; Table 12.4 · Confirmation Thresholds</h4><table><thead><tr><th>Protocol</th><th>Null Falsification Bound</th><th>Rules Out</th><th>Positive Signal &amp; Control</th></tr></thead><tbody>${P7_TO_P10_FALSIFICATION_TABLE.map((f, idx) => { const c = P7_TO_P10_CONFIRMATION_TABLE[idx]; return `<tr><td>${escHtml(f.protocol)}</td><td>${escHtml(f.nullBound)}</td><td>${escHtml(f.whatItRulesOut)}</td><td>${c ? `${escHtml(c.signalSignature)} (Control: ${escHtml(c.requiredControl)})` : ''}</td></tr>`; }).join('')}</tbody></table>`;
      chapterExtras += `<h4>Table 12.5 · Empirical Decision Matrix</h4><table><thead><tr><th>Experimental Outcome</th><th>Posterior Status</th><th>Mandatory Action</th></tr></thead><tbody>${P7_TO_P10_DECISION_MATRIX.map((d) => `<tr><td>${escHtml(d.outcome)}</td><td>${escHtml(d.posteriorStatus)}</td><td>${escHtml(d.mandatoryAction)}</td></tr>`).join('')}</tbody></table>`;
      chapterExtras += `<h4>Table 12.6 · H11 Protocols (P1–P6) vs. H12 Protocols (P7–P12)</h4><table><thead><tr><th>Aspect</th><th>H11 (P1–P6)</th><th>H12 (P7–P12)</th></tr></thead><tbody>${H11_VS_H12_PROTOCOLS_COMPARISON.map((cmp) => `<tr><td>${escHtml(cmp.aspect)}</td><td>${escHtml(cmp.h11Protocols)}</td><td>${escHtml(cmp.h12Protocols)}</td></tr>`).join('')}</tbody></table>`;
      chapterExtras += `<h4>Table 12.7 · Quantitative Noise Budgets &amp; Mitigation (P7–P10)</h4><table><thead><tr><th>Protocol</th><th>Noise Sources</th><th>Floor</th><th>Mitigation</th></tr></thead><tbody>${P7_TO_P10_NOISE_BUDGET_TABLE.map((nb) => `<tr><td>${escHtml(nb.protocol)}</td><td>${escHtml(nb.primaryNoiseSources)}</td><td>${escHtml(nb.quantitativeBudget)}</td><td>${escHtml(nb.mitigationArchitecture)}</td></tr>`).join('')}</tbody></table>`;
      chapterExtras += `<h4>Statistical Significance, Joint Likelihood &amp; Bayesian Occam Penalty</h4><ul>${H12_PROTOCOL_ANALYSIS_SECTIONS.map((sec) => `<li><strong>${escHtml(sec.title)}:</strong> ${escHtml(sec.content)}</li>`).join('')}</ul>`;
      chapterExtras += `<h4>Falsification &amp; Confirmation Checklists</h4><ul>${H12_FALSIFICATION_CHECKLIST.map((f) => `<li><strong>[Falsify]</strong> ${escHtml(f)}</li>`).join('')}${H12_CONFIRMATION_CHECKLIST.map((c) => `<li><strong>[Confirm]</strong> ${escHtml(c)}</li>`).join('')}</ul>`;
      chapterExtras += `<div class="thm-box">${escHtml(H12_FUNDING_AGENCY_SUMMARY)}</div>`;
    } else if (ch.number === 13) {
      chapterExtras += `<h4>Table 13.1 · Twelve Open Research Extrapolations</h4><table><thead><tr><th>Topic</th><th>Category</th><th>Extension</th><th>Obstacle / Falsifier</th></tr></thead><tbody>${TWELVE_EXTRAPOLATIONS.map((ex) => `<tr><td>${ex.id}. ${escHtml(ex.topic)}</td><td>${escHtml(ex.category)}</td><td>${escHtml(ex.extension)}</td><td>${escHtml(ex.keyObstacleOrFalsifier)}</td></tr>`).join('')}</tbody></table>`;
      chapterExtras += `<h4>List of Open Problems (OP-1 to OP-6)</h4><ul>${H12_OPEN_PROBLEMS_LIST.map((op) => `<li><strong>${escHtml(op.id)}: ${escHtml(op.problem)}</strong> — ${escHtml(op.statusNote)}</li>`).join('')}</ul>`;
      chapterExtras += `<h4>Response to Prior Audits</h4><ul>${H12_PRIOR_AUDIT_RESPONSES.map((r) => `<li><strong>${escHtml(r.auditScope)}:</strong> ${escHtml(r.panelCritique)} — <em>Harmonized Resolution:</em> ${escHtml(r.harmonizedResolution)}</li>`).join('')}</ul>`;
    }
    const figs = H12_FIGURES.filter((f) => f.anchorChapter === ch.number)
      .map(
        (f) =>
          `<figure><div class="fig-meta">${escHtml(f.figureNumber)} · ${escHtml(f.category)}</div><h4>${escHtml(f.title)}</h4>${f.svgMarkup}<figcaption>${escHtml(f.caption)}</figcaption></figure>`
      )
      .join('');
    const plates = H12_ARCHIVAL_PLATES.filter((pl) => pl.anchorChapter === ch.number)
      .map(
        (pl) =>
          `<figure><div class="fig-meta">${escHtml(pl.figureNumber)} · ${escHtml(pl.category)}</div><h4>${escHtml(pl.title)}</h4><p class="lead">${escHtml(pl.description)}</p><figcaption><strong>Archival Plate Asset:</strong> <code>${escHtml(pl.imagePath)}</code> (${escHtml(pl.bundleFilename)})</figcaption></figure>`
      )
      .join('');
    return `<article><h2 class="chapter-title">Chapter ${ch.number}. ${escHtml(ch.title)}</h2><p class="lead">${escHtml(ch.leadSummary)}</p>${subs}${chapterExtras}${figs}${plates}</article>`;
  }).join('');

  const frontMatterListsHtml = `
    <h3>List of Figures &amp; Archival Plates</h3>
    <ul>${H12_ARCHIVAL_PLATES.map((pl) => `<li><strong>${escHtml(pl.figureNumber)}</strong> (Ch.${pl.anchorChapter}): ${escHtml(pl.title)} [${escHtml(pl.category)}]</li>`).join('')}${H12_FIGURES.map((fg) => `<li><strong>${escHtml(fg.figureNumber)}</strong> (Ch.${fg.anchorChapter}): ${escHtml(fg.title)} [${escHtml(fg.category)}]</li>`).join('')}</ul>
    <h3>List of Tables</h3>
    <ul>${H12_FRONTMATTER_TABLES_LIST.map((tb) => `<li><strong>${escHtml(tb.id)}</strong> (${escHtml(tb.location)}): ${escHtml(tb.title)}</li>`).join('')}</ul>
    <h3>List of Principal Equations</h3>
    <ul>${H12_FRONTMATTER_EQUATIONS_LIST.map((eq) => `<li><strong>${escHtml(eq.label)}</strong> (${escHtml(eq.location)}, ${escHtml(eq.category)}): ${escHtml(eq.title)}</li>`).join('')}</ul>
    <h3>List of Theorems &amp; Formal Definitions</h3>
    <ul>${H12_THEOREMS_LIST.map((th) => `<li><strong>${escHtml(th.id)}</strong> (${escHtml(th.location)}, ${escHtml(th.category)}): ${escHtml(th.title)}</li>`).join('')}${H12_DEFINITIONS_LIST.map((df) => `<li><strong>${escHtml(df.id)} (${escHtml(df.term)}):</strong> ${escHtml(df.formalDefinition)}</li>`).join('')}</ul>
  `;

  const suppAppHtml = H12_APPENDICES.map(
    (a) =>
      `<article><h3>Appendix ${escHtml(a.letter)}: ${escHtml(a.title)} <span class="cat-label">${escHtml(a.category)}</span></h3><p class="lead">${escHtml(a.summary)}</p>${a.equations.map((eq) => `<div class="eq-box"><div class="eq-main">${eq.unicodeHtml}</div><div class="eq-cap">${escHtml(eq.label)} — ${escHtml(eq.caption)}</div></div>`).join('')}${a.bodyParagraphs.map((p) => `<p>${escHtml(p)}</p>`).join('')}</article>`
  ).join('');

  const domainRowsHtml = H12_TEN_DOMAIN_AUDITS.map(
    (d) =>
      `<tr><td><strong>${escHtml(d.domainNumber)}</strong>: ${escHtml(d.domainName)}</td><td>${d.criteriaCount}</td><td>${d.selfContainedPoints}/${d.maxPoints}</td><td>${d.applicablePoints}/${d.maxPoints}</td><td>${escHtml(d.verdict)}</td></tr>`
  ).join('');
  const attackRowsHtml = H12_SIXTEEN_REDTEAM_ATTACKS.map(
    (a) =>
      `<tr><td><strong>${escHtml(a.id)}</strong></td><td>${escHtml(a.attackTitle)}</td><td>${escHtml(a.technicalStatus)}</td><td>${a.pointsAwarded}/${a.maxPoints}</td><td>${escHtml(a.h12ResolutionAndCitation)}</td></tr>`
  ).join('');

  const authorsHtml = H12_META.authorRoster
    .map(
      (au) =>
        `<div class="author-card"><div class="author-name">${escHtml(au.name)}</div><div class="author-orcid"><a href="${escHtml(au.orcidUrl)}" target="_blank" rel="noopener noreferrer">${escHtml(au.orcidUrl)} ↗</a></div><div class="author-affil">${escHtml(au.affiliation)}</div><div class="author-role">${escHtml(au.role)}</div></div>`
    )
    .join('');

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<title>${escHtml(H12_META.title)}</title>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Playfair+Display:ital,wght@0,400;1,400&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,500;1,8..60,400&display=swap" rel="stylesheet"/>
<style>
  body{font-family:'Book Antiqua','Palatino Linotype',Palatino,'URW Palladio L','Source Serif 4',Georgia,serif;background:#F7F4EC;color:#0F172A;max-width:940px;margin:0 auto;padding:44px 28px;line-height:1.5;font-size:16px;}
  h1,h2,h3,h4{font-family:'Playfair Display',Georgia,serif;color:#081026;font-weight:400;}
  h1{font-size:44px;line-height:1.15;margin:12px 0 18px 0;font-weight:400;}
  h2.chapter-title{font-family:'Playfair Display',Georgia,serif;font-weight:400;font-size:40px;line-height:1.18;margin-top:44px;margin-bottom:44px;padding-bottom:18px;border-bottom:1px solid #D6CABE;}
  p{font-family:'Book Antiqua','Palatino Linotype',Palatino,'URW Palladio L','Source Serif 4',Georgia,serif;font-size:16px;line-height:1.5;text-align:justify;text-justify:inter-word;hyphens:auto;}
  .meta{font-family:'IBM Plex Mono',monospace;font-size:12.5px;color:#9A3412;margin-bottom:16px;}
  .authors-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin:22px 0 28px 0;}
  .author-card{background:#FFFFFF;border:1px solid #D6CABE;border-radius:10px;padding:14px 16px;}
  .author-name{font-family:'Playfair Display',Georgia,serif;font-weight:400;font-size:20px;color:#081026;}
  .author-orcid{font-family:'IBM Plex Mono',monospace;font-size:11px;margin-top:5px;word-break:break-all;}
  .author-orcid a{color:#15803D;text-decoration:none;}
  .author-affil{font-size:12.5px;color:#0F172A;margin-top:6px;font-weight:500;}
  .author-role{font-size:11.5px;color:#9A3412;margin-top:4px;}
  .cat-label{font-family:'IBM Plex Mono',monospace;font-size:11px;color:#64748B;margin-left:8px;letter-spacing:0.04em;}
  .lead{font-style:italic;color:#475569;margin-bottom:24px;}
  .eq-box{background:#FFFFFF;border:1px solid #D6CABE;border-radius:10px;padding:18px;margin:20px 0;text-align:center;}
  .eq-main{font-size:16px;margin-bottom:8px;}
  .eq-cap{font-size:12.5px;color:#64748B;font-style:italic;}
  .thm-box{background:#F4FAF6;border:1px solid #86EFAC;padding:16px 20px;margin:18px 0;border-radius:10px;}
  figure{background:#FFFFFF;border:1px solid #D6CABE;border-radius:12px;padding:22px;margin:28px 0;}
  figcaption{margin-top:26px;padding-top:16px;border-top:1px solid #EAE2D2;font-size:14.5px;color:#334155;text-align:justify;hyphens:auto;}
  table{width:100%;border-collapse:collapse;margin:20px 0;font-size:13.5px;background:#FFFFFF;}
  th,td{border:1px solid #D6CABE;padding:9px 11px;text-align:left;vertical-align:top;}
  th{background:#F4EFE6;color:#0C1836;font-weight:500;}
</style>
</head>
<body>
  <div class="meta">${escHtml(H12_META.monographId)} · ${escHtml(H12_META.date)} · Authors: ${escHtml(H12_META.authors)} · Predecessor: ${escHtml(H12_META.predecessor)}</div>
  <h1>${escHtml(H12_META.title)}</h1>
  <p class="lead">${escHtml(H12_META.subtitle)}</p>
  <div class="authors-grid">${authorsHtml}</div>
  <h2 class="chapter-title">Abstract</h2>
  ${H12_ABSTRACT_PARAGRAPHS.map((p) => `<p>${escHtml(p)}</p>`).join('')}
  <p><strong>${escHtml(H12_NON_SPECIALIST_SUMMARY)}</strong></p>
  <p><strong>Keywords:</strong> ${escHtml(H12_META.keywords.join(' · '))}</p>
  <h2 class="chapter-title">Lists of Figures, Tables, Equations, Theorems &amp; Definitions</h2>
  ${frontMatterListsHtml}
  <h2 class="chapter-title">Foundational Five-Dimensional Equations (Category C)</h2>
  ${H12_MASTER_EQUATIONS.map((eq) => `<div class="eq-box"><div class="eq-main">${eq.unicodeHtml}</div><div class="eq-cap">${escHtml(eq.label)} [${escHtml(eq.category)}] — ${escHtml(eq.caption)}</div></div>`).join('')}
  <div class="thm-box"><h3>${escHtml(H12_SCOPE_AND_NON_CLAIMS.title)}</h3><ul>${H12_SCOPE_AND_NON_CLAIMS.points.map((pt) => `<li>${escHtml(pt)}</li>`).join('')}</ul></div>
  ${chapterHtml}
  <h2 class="chapter-title">Appendix L: ${escHtml(H12_MAIN_APPENDICES_LMN[0].title)}</h2>
  <p class="lead">${escHtml(H12_MAIN_APPENDICES_LMN[0].leadSummary)}</p>
  ${H12_MAIN_APPENDICES_LMN[0].paragraphs.map((p) => `<p>${escHtml(p)}</p>`).join('')}
  <h4>Table L.1 · Five-Tier Assessment of Eleven Candidate Portal Mechanisms</h4>
  <table><thead><tr><th>Mechanism</th><th>Feasibility Tier</th><th>Category</th><th>Quantitative Obstacle / Limit</th></tr></thead><tbody>${ELEVEN_PORTAL_MECHANISMS.map((m) => `<tr><td>${escHtml(m.mechanism)}</td><td>${escHtml(m.tier)}</td><td>${escHtml(m.category)}</td><td>${escHtml(m.quantitativeObstacleOrLimit)}</td></tr>`).join('')}</tbody></table>
  <h2 class="chapter-title">Appendix M: ${escHtml(H12_MAIN_APPENDICES_LMN[1].title)}</h2>
  <p class="lead">${escHtml(H12_MAIN_APPENDICES_LMN[1].leadSummary)}</p>
  ${H12_MAIN_APPENDICES_LMN[1].paragraphs.map((p) => `<p>${escHtml(p)}</p>`).join('')}
  <h4>Table M.1 · Devices A–F Ten-Field Technical Specifications</h4>
  <table><thead><tr><th>Device</th><th>Principle &amp; Equations</th><th>Signal &amp; Floor</th><th>Actually Tests vs. Non-Claim</th></tr></thead><tbody>${SIX_PROPOSED_DEVICES.map((d) => `<tr><td><strong>${escHtml(d.deviceId)}: ${escHtml(d.name)}</strong><br/>${escHtml(d.category)}</td><td>${escHtml(d.physicalPrinciple)}<br/><code>${escHtml(d.governingEquations)}</code></td><td>${escHtml(d.predictedSignal)}<br/><em>Floor:</em> ${escHtml(d.noiseFloor)}</td><td><strong>Tests:</strong> ${escHtml(d.whatItActuallyTests)}<br/><strong>Does NOT do:</strong> ${escHtml(d.whatItDoesNotDo)}</td></tr>`).join('')}</tbody></table>
  <h2 class="chapter-title">Appendix N: ${escHtml(H12_MAIN_APPENDICES_LMN[2].title)}</h2>
  <p class="lead">${escHtml(H12_MAIN_APPENDICES_LMN[2].leadSummary)}</p>
  ${H12_MAIN_APPENDICES_LMN[2].paragraphs.map((p) => `<p>${escHtml(p)}</p>`).join('')}
  <p><strong>Self-Contained Closure:</strong> ${H12_STRESS_TEST_SUMMARY.grandSelfContainedPoints}/${H12_STRESS_TEST_SUMMARY.grandMaxPoints} (${H12_STRESS_TEST_SUMMARY.selfContainedScorePct}%) · <strong>Math/Negative-Theorem Closure:</strong> ${H12_STRESS_TEST_SUMMARY.mathematicalClosurePct.toFixed(1)}% · <strong>Epistemic Applicable Score:</strong> ${H12_STRESS_TEST_SUMMARY.grandApplicablePoints}/${H12_STRESS_TEST_SUMMARY.grandMaxPoints} (${H12_STRESS_TEST_SUMMARY.overallEpistemicScorePct}%)</p>
  <h4>Table N.1 · Ten-Domain Structural Audit (500 Criteria)</h4>
  <table><thead><tr><th>Domain</th><th>Criteria</th><th>Self-Contained</th><th>Applicable</th><th>Verdict</th></tr></thead><tbody>${domainRowsHtml}</tbody></table>
  <h4>Table N.2 · Sixteen Direct Red-Team Attacks (H12-ATK-01 to H12-ATK-16)</h4>
  <table><thead><tr><th>ID</th><th>Challenge</th><th>Status</th><th>Score</th><th>Resolution</th></tr></thead><tbody>${attackRowsHtml}</tbody></table>
  <h2 class="chapter-title">References</h2>
  <ol>${H12_REFERENCES.map((r) => `<li>${escHtml(r.citation)}</li>`).join('')}</ol>
  <h2 class="chapter-title">Supplementary Volume II: Technical Appendices A–K</h2>
  ${suppAppHtml}
</body>
</html>`;
}
