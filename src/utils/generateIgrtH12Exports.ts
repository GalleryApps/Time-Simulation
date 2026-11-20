/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * IGRT-H12 Exporters:
 * - Self-Contained Archival HTML (Complete Monograph Ch. 1–13 + References + Consolidated Appendices A–L)
 * - Standalone ASCII-Safe LaTeX Monograph (IGRT_H12_Monograph.tex)
 * - Modular LaTeX + Verification Script ZIP Bundle:
 *   main.tex, preamble.tex, sections/00_frontmatter.tex, sections/01_chapters.tex,
 *   sections/02_references.tex, sections/03_appendices_AL.tex,
 *   illustrations/*.png/.jpg, figures/*.svg/.png, scripts/verify-igrt-h12.mjs, Makefile, README.md
 */

import {
  H12_META,
  H12_MASTER_EQUATIONS,
  H12_METRIC_SIGNATURE_BOX,
  H12_FOUNDATIONAL_EQUATIONS_NOTE,
  H12_ABSTRACT_PARAGRAPHS,
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
  FIVE_D_SIGNATURES_TEST_MATRIX,
  WHAT_IS_NOT_DERIVED_LEDGER,
  H12_ALL_PROTOCOLS,
  P7_TO_P13_TIMELINE_TABLE,
  P7_TO_P13_FALSIFICATION_TABLE,
  P7_TO_P13_CONFIRMATION_TABLE,
  P7_TO_P13_DECISION_MATRIX,
  H11_VS_H12_PROTOCOLS_COMPARISON,
  H12_FALSIFICATION_CHECKLIST,
  H12_CONFIRMATION_CHECKLIST,
  H12_FUNDING_AGENCY_SUMMARY,
  ELEVEN_PORTAL_MECHANISMS,
  H12_PROPOSED_DEVICES,
  SEVEN_SOLVED_PHYSICS_PROBLEMS,
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
  P7_TO_P13_NOISE_BUDGET_TABLE,
  P13_SYSTEMATIC_ERROR_BUDGET,
  P13_STATISTICAL_ERROR_BUDGET,
  P7_TO_P13_COMBINED_BOUNDS_TABLE,
  P7_TO_P13_SENSITIVITY_PROJECTION_TABLE,
  P13_SUMMARY_OF_BOUNDS_TABLE,
  H12_PROTOCOL_ANALYSIS_SECTIONS,
  APPENDIX_J_DEVICE_DOSSIERS,
  APPENDIX_J_SYNTHESIS_TABLE
} from '../types/igrtH12Apparatus';
import {
  H12_CHAPTERS,
  H12_FRONTMATTER_TABLES_LIST,
  H12_FRONTMATTER_EQUATIONS_LIST
} from '../types/igrtH12Data';
import {
  H12_TEN_DOMAIN_AUDITS,
  H12_SIXTEEN_REDTEAM_ATTACKS,
  H12_STRESS_TEST_SUMMARY
} from '../types/igrtH12StressTest';
import {
  H12_ARCHIVAL_PLATES,
  H12_FIGURES,
  H12_DEVICE_FIGURES
} from '../components/IgrtH12Figures';
import {
  proseToLatex,
  equationToLatex,
  buildZipArchive,
  type ZipEntryInput
} from './generateHarmonizedPaperLatex';
import { formatMathToHtml, formatSvgMathMarkup, pdfBmpSafeUnicode } from './formatMathUnicode';
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
    .replace(/∀/g, '$\\forall$')
    .replace(/∃/g, '$\\exists$')
    .replace(/∝/g, '$\\propto$')
    .replace(/∈/g, '$\\in$')
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
    .replace(/∀/g, '\\forall ')
    .replace(/∃/g, '\\exists ')
    .replace(/∝/g, '\\propto ')
    .replace(/∈/g, '\\in ')
    .replace(/ℓ/g, '\\ell ')
    .replace(/ℏ/g, '\\hbar ')
    .replace(/□/g, '\\Box ')
    .replace(/⟨/g, '\\langle ')
    .replace(/⟩/g, '\\rangle ')
    .replace(/×/g, '\\times ')
    .replace(/±/g, '\\pm ')
    .replace(/≤/g, '\\le ')
    .replace(/≥/g, '\\ge ')
    .replace(/≪/g, '\\ll ')
    .replace(/≫/g, '\\gg ')
    .replace(/≠/g, '\\ne ')
    .replace(/≈/g, '\\approx ')
    .replace(/≡/g, '\\equiv ')
    .replace(/⇒/g, '\\Rightarrow ')
    .replace(/→/g, '\\to ')
    .replace(/⊥/g, '\\perp ')
    .replace(/−/g, '-')
    .replace(/–|—/g, '-')
    .replace(/[^\x00-\x7F]/g, '');
}

function toLatexLongTable(
  caption: string,
  headers: string[],
  colWidthsFraction: number[],
  rows: string[][]
): string {
  const sum = colWidthsFraction.reduce((a, b) => a + b, 0) || 1;
  const colSpec =
    '@{}' +
    colWidthsFraction
      .map((w) => `>{\\raggedright\\arraybackslash}p{${((w / sum) * 0.94).toFixed(3)}\\textwidth}`)
      .join(' ') +
    '@{}';
  const cleanCell = (raw: string) => toLatex(raw).replace(/\r?\n/g, ' ');
  const headerLine = headers.map((h) => `\\textbf{${cleanCell(h)}}`).join(' & ') + ' \\\\';
  const bodyLines = rows
    .map((r) => r.map((c) => cleanCell(c ?? '')).join(' & ') + ' \\\\')
    .join('\n\\midrule\n');
  const ncols = headers.length;
  return `
{\\footnotesize
\\setlength{\\LTleft}{0pt}\\setlength{\\LTright}{0pt}
\\begin{longtable}{${colSpec}}
\\multicolumn{${ncols}}{@{}p{0.96\\textwidth}@{}}{\\textbf{${cleanCell(caption)}}} \\\\[4pt]
\\toprule
${headerLine}
\\midrule
\\endfirsthead
\\multicolumn{${ncols}}{@{}p{0.96\\textwidth}@{}}{\\textit{${cleanCell(caption)} (continued)}} \\\\[4pt]
\\toprule
${headerLine}
\\midrule
\\endhead
\\midrule
\\multicolumn{${ncols}}{@{}r@{}}{\\textit{Continued on next page}} \\\\
\\endfoot
\\bottomrule
\\endlastfoot
${bodyLines}
\\end{longtable}
}
`;
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
  lines.push(`\\end{abstract}`);
  lines.push('');
  lines.push(`\\section*{Lists of Figures, Tables, Equations, Theorems \\& Definitions}`);
  lines.push(`\\subsection*{List of Figures \\& Archival Plates}`);
  lines.push(`\\begin{itemize}[leftmargin=1.4em]`);
  for (const pl of H12_ARCHIVAL_PLATES) lines.push(`  \\item \\textbf{${toLatex(pl.figureNumber)}} (Ch.${pl.anchorChapter}): ${toLatex(pl.title)} [${toLatex(pl.category)}]`);
  for (const fg of H12_FIGURES) lines.push(`  \\item \\textbf{${toLatex(fg.figureNumber)}} (Ch.${fg.anchorChapter}): ${toLatex(fg.title)} [${toLatex(fg.category)}]`);
  for (const mfg of H12_DEVICE_FIGURES) lines.push(`  \\item \\textbf{${toLatex(mfg.figureNumber)}} (Appendix J -- ${toLatex(mfg.deviceId)}): ${toLatex(mfg.title)} [${toLatex(mfg.category)}]`);
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
  lines.push(`\\begin{quote}\\textbf{Epistemic Note:} ${toLatex(H12_FOUNDATIONAL_EQUATIONS_NOTE)}\\end{quote}`);
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
    if (ch.number === 1) {
      out.push(`\\begin{quote}\\textbf{Metric Signature Box:} ${toLatex(H12_METRIC_SIGNATURE_BOX)}\\end{quote}`);
      out.push(
        toLatexLongTable(
          'Table 1.3: Category B/C Boundary Rubric Box (Resolving Epistemic Grey Areas)',
          ['Boundary Case', 'Derived Core (Cat. B)', 'Conjectural Premise (Cat. C)', 'Assigned Category & Rule'],
          [0.21, 0.28, 0.28, 0.23],
          EPISTEMIC_BC_GREY_AREA_RUBRIC.map((g) => [
            g.boundaryCase,
            g.derivedAspect,
            g.conjecturalAspect,
            `${g.assignedCategory} -- ${g.ruleApplied}`
          ])
        )
      );
    }
    if (ch.number === 2) {
      out.push(
        toLatexLongTable(
          'Timeline of Five-Dimensional Physics (1921--2026)',
          ['Year & Milestone', 'Contribution to IGRT-H12'],
          [0.26, 0.74],
          TIMELINE_5D_PHYSICS.map((tm) => [`${tm.year} -- ${tm.milestone}`, tm.contributionToH12])
        )
      );
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
      out.push(
        toLatexLongTable(
          'Table 1.1: Audit of the Twelve Core IGRT-H11 Components & H12 Status',
          ['Component', 'H11 Value / Role', 'H12 Status', 'Category & Modification'],
          [0.20, 0.20, 0.20, 0.40],
          H11_TWELVE_COMPONENTS_AUDIT.map((r) => [
            r.component,
            r.h11EquationOrValue,
            r.h12Status,
            `${r.category}: ${r.h12Modification}`
          ])
        )
      );
      out.push(
        toLatexLongTable(
          'Table 1.2: Direct Comparison 4D IGRT-H11 vs 5D IGRT-H12',
          ['Dimension', '4D IGRT-H11', '5D IGRT-H12', 'Epistemic Delta', 'Testable Now?'],
          [0.18, 0.22, 0.24, 0.22, 0.14],
          COMPARISON_4D_VS_5D_IGRT.map((c) => [
            c.dimension,
            c.h11FourD,
            c.h12FiveD,
            c.epistemicDelta,
            c.testableNow
          ])
        )
      );
      out.push(
        toLatexLongTable(
          'Glossary of Five-Dimensional Terms',
          ['Term', 'Formal Definition in IGRT-H12'],
          [0.24, 0.76],
          GLOSSARY_5D_TERMS.map((g) => [g.term, g.definition])
        )
      );
      out.push(`\\begin{quote}${toLatex(SUMMARY_FOR_PHYSICISTS)}\\end{quote}`);
    }
    if (ch.number === 2) {
      out.push(
        toLatexLongTable(
          'Table 2.1: Structured Catalog of All 665 Verified IGRT-H11 Assertions',
          ['Verification Group', 'Assertions', 'Verified Physical Scope'],
          [0.28, 0.12, 0.60],
          H11_665_ASSERTIONS_CATALOG.map((row) => [
            row.moduleGroup,
            String(row.assertionCount),
            row.verifiedPhysicalScope
          ])
        )
      );
      out.push(
        toLatexLongTable(
          'Table 2.2: Eot-Wash Uncertainty, Multi-Regulator Stability & Clock Energy Sweep',
          ['Regime / Regulator', 'Scale / Ratio', 'Computed Output', 'Physical Interpretation'],
          [0.23, 0.18, 0.23, 0.36],
          REGULATOR_SENSITIVITY_TABLE.map((row) => [
            row.regimeOrRegulator,
            row.energyOrRadius,
            row.computedOutput,
            row.physicalInterpretation
          ])
        )
      );
    }
    if (ch.number === 3) {
      out.push(
        toLatexLongTable(
          'Table 3.1: Seven Temporal Notions in IGRT-H12 & Standard Literature Correspondence',
          ['Notion', 'Symbol', 'Mathematical Definition', 'Folding Role & Literature'],
          [0.18, 0.13, 0.33, 0.36],
          SEVEN_TEMPORAL_NOTIONS.map((t) => [
            t.notion,
            t.symbol,
            t.mathematicalDefinition,
            `${t.foldsInH12} | Lit.: ${t.literatureComparison}`
          ])
        )
      );
    }
    if (ch.number === 4) {
      out.push(
        toLatexLongTable(
          'Table 4.1: Positive Conjectures Summary Table (Category C)',
          ['Conjecture', 'Conditional Statement', 'Category & Target Protocol'],
          [0.24, 0.44, 0.32],
          POSITIVE_CONJECTURES_SUMMARY.map((p) => [
            p.conjecture,
            p.statement,
            `${p.category}: ${p.test}`
          ])
        )
      );
      out.push(
        toLatexLongTable(
          'Table 4.2: Model 2B Quadrature Convergence, Euler-Lagrange & ds_5^2 = 0 Audit',
          ['Benchmark Span', 'Peak Depth', 'Folding & Speed', 'Convergence & Null Residual'],
          [0.21, 0.18, 0.28, 0.33],
          MODEL2B_CONVERGENCE_AND_MICROCAUSALITY_TABLE.map((row) => [
            row.benchmarkSpan,
            row.turningPeak,
            row.etaFoldAndSpeed,
            row.elAndNullResidual
          ])
        )
      );
    }
    if (ch.number === 5) {
      out.push(
        toLatexLongTable(
          'Table 5.1: Six-Class Black-Hole & Portal Taxonomy (Classes A--F)',
          ['Class', 'Metric / NEC Status', 'Portal Viability', 'Stability & Category'],
          [0.19, 0.28, 0.26, 0.27],
          SIX_BLACK_HOLE_CLASSES.map((b) => [
            `${b.classId} -- ${b.label}`,
            `${b.metricSignatureAndForm} | ${b.necStatus}`,
            b.portalViability,
            `${b.category}: ${b.stabilityAndConstraints}`
          ])
        )
      );
    }
    if (ch.number === 6 || ch.number === 9) {
      out.push(
        toLatexLongTable(
          `Table ${ch.number}.1: Negative Results Summary`,
          ['Negative Theorem', 'Category', 'Derived Statement', 'Physical Implication'],
          [0.21, 0.15, 0.34, 0.30],
          NEGATIVE_RESULTS_SUMMARY.map((n) => [
            n.theorem,
            n.category,
            n.statement,
            n.implication
          ])
        )
      );
      out.push(
        toLatexLongTable(
          'Glossary of Negative Theorems',
          ['Term', 'Formal Definition'],
          [0.27, 0.73],
          GLOSSARY_NEGATIVE_THEOREMS.map((g) => [g.term, g.definition])
        )
      );
    }
    if (ch.number === 10) {
      out.push(
        toLatexLongTable(
          'Table 10.1: What Is Unique to 5D vs Reproduced in 4D H11',
          ['Observable', '4D IGRT-H11', 'Unique to 5D IGRT-H12', 'Empirical Status'],
          [0.20, 0.26, 0.30, 0.24],
          WHAT_IS_UNIQUE_TO_5D.map((u) => [
            u.observable,
            u.reproducedIn4DH11,
            u.uniqueTo5DH12,
            u.empiricalStatus
          ])
        )
      );
      out.push(
        toLatexLongTable(
          'Table 10.2: Observational Bounds Consistency Audit',
          ['Probe', 'Quantitative Bound', 'H12 Status', 'Derived vs Assumed'],
          [0.20, 0.25, 0.20, 0.35],
          FIVE_D_OBSERVATIONAL_BOUNDS.map((b) => [
            b.probe,
            b.bound,
            b.h12Status,
            b.derivationOrAssumption
          ])
        )
      );
      out.push(
        toLatexLongTable(
          'Table 10.3: Five-Dimensional Signatures, Experimental Tests & Current Observational Constraints',
          ['5D Signature', 'Experiment That Tests It', 'Current Observational Constraint'],
          [0.31, 0.34, 0.35],
          FIVE_D_SIGNATURES_TEST_MATRIX.map((sig) => [
            sig.signature,
            sig.experimentToTestIt,
            sig.currentConstraint
          ])
        )
      );
    }
    if (ch.number === 11) {
      out.push(
        toLatexLongTable(
          'Table 11.1: What Is Not Derived Ledger (Categories A, C & D)',
          ['Claim / Ansatz / Postulate', 'Category', 'Why Not Derived in H12'],
          [0.26, 0.20, 0.54],
          WHAT_IS_NOT_DERIVED_LEDGER.map((w) => [w.claim, w.category, w.whyNotDerived])
        )
      );
    }
    if (ch.number === 12) {
      out.push(
        toLatexLongTable(
          'Table 12.1: H12 Experimental & Conceptual Protocols P7--P13',
          ['Protocol & Category', 'Relation to H11', 'Quantitative Sensitivity', 'Falsification Criterion'],
          [0.22, 0.26, 0.24, 0.28],
          H12_ALL_PROTOCOLS.map((p) => [
            `${p.id} -- ${p.name} [${p.category}]`,
            p.relationToH11,
            p.numericalSensitivity,
            p.falsificationCriterion
          ])
        )
      );
      out.push(
        toLatexLongTable(
          'Table 12.2: P7--P13 Experimental Timeline',
          ['Protocol', 'Current State', 'Required Sensitivity', 'Expected Year'],
          [0.21, 0.27, 0.30, 0.22],
          P7_TO_P13_TIMELINE_TABLE.map((t) => [
            t.protocol,
            t.currentState,
            t.requiredSensitivity,
            t.expectedYear
          ])
        )
      );
      out.push(
        toLatexLongTable(
          'Table 12.3: Falsification Thresholds (P7--P13)',
          ['Protocol', 'Null Falsification Bound', 'What It Rules Out'],
          [0.16, 0.39, 0.45],
          P7_TO_P13_FALSIFICATION_TABLE.map((f) => [f.protocol, f.nullBound, f.whatItRulesOut])
        )
      );
      out.push(
        toLatexLongTable(
          'Table 12.4: Confirmation Thresholds (P7--P13)',
          ['Protocol', 'Positive Signal Signature', 'Required Systematic Control'],
          [0.16, 0.42, 0.42],
          P7_TO_P13_CONFIRMATION_TABLE.map((c) => [c.protocol, c.signalSignature, c.requiredControl])
        )
      );
      out.push(
        toLatexLongTable(
          'Table 12.5: Empirical Decision Matrix (P7--P13)',
          ['Experimental Outcome', 'Posterior Status', 'Mandatory Action'],
          [0.28, 0.31, 0.41],
          P7_TO_P13_DECISION_MATRIX.map((d) => [d.outcome, d.posteriorStatus, d.mandatoryAction])
        )
      );
      out.push(
        toLatexLongTable(
          'Table 12.6: H11 Protocols (P1--P6) vs H12 Protocols (P7--P13)',
          ['Comparison Aspect', 'H11 (P1--P6)', 'H12 (P7--P13)'],
          [0.22, 0.39, 0.39],
          H11_VS_H12_PROTOCOLS_COMPARISON.map((cmp) => [
            cmp.aspect,
            cmp.h11Protocols,
            cmp.h12Protocols
          ])
        )
      );
      out.push(
        toLatexLongTable(
          'Table 12.7: Quantitative Noise Budgets & Systematic Mitigation (P7--P13)',
          ['Protocol', 'Noise Sources', 'Quantitative Floor', 'Mitigation Architecture'],
          [0.18, 0.26, 0.26, 0.30],
          P7_TO_P13_NOISE_BUDGET_TABLE.map((nb) => [
            nb.protocol,
            nb.primaryNoiseSources,
            nb.quantitativeBudget,
            nb.mitigationArchitecture
          ])
        )
      );
      out.push(
        toLatexLongTable(
          'Table 12.8: P13 Systematic Error Budget',
          ['Source', 'Magnitude / Uncertainty', 'Impact on eta_fold', 'Mitigation Strategy'],
          [0.21, 0.22, 0.25, 0.32],
          P13_SYSTEMATIC_ERROR_BUDGET.map((s) => [
            s.source,
            s.magnitudeOrUncertainty,
            s.impactOnEtaFold,
            s.mitigationStrategy
          ])
        )
      );
      out.push(
        toLatexLongTable(
          'Table 12.9: P13 Statistical Error Budget',
          ['Measurement Channel', 'Timing Precision', 'Propagated eta_fold Error', 'Scaling Note'],
          [0.22, 0.24, 0.26, 0.28],
          P13_STATISTICAL_ERROR_BUDGET.map((st) => [
            st.channel,
            st.measurementPrecision,
            st.propagatedEtaFoldError,
            st.sampleScalingNote
          ])
        )
      );
      out.push(
        toLatexLongTable(
          'Table 12.10: Combined Protocol Bounds (P7--P13 Joint Likelihood)',
          ['Protocol Cluster', 'Parameters', 'Joint Likelihood Role', 'Orthogonal Exclusion Power'],
          [0.21, 0.22, 0.27, 0.30],
          P7_TO_P13_COMBINED_BOUNDS_TABLE.map((cb) => [
            cb.protocolPairOrCluster,
            cb.constrainedParameters,
            cb.combinedJointLikelihoodRole,
            cb.orthogonalExclusionPower
          ])
        )
      );
      out.push(
        toLatexLongTable(
          'Table 12.11: Protocol Sensitivity Projections (2026--2035+)',
          ['Protocol', '2026 Baseline', '2027--2032 Window', '2035+ (3G Era)'],
          [0.19, 0.26, 0.27, 0.28],
          P7_TO_P13_SENSITIVITY_PROJECTION_TABLE.map((pr) => [
            pr.protocol,
            pr.currentBaseline2026,
            pr.nearTerm2027_2032,
            pr.longTerm3G2035Plus
          ])
        )
      );
      out.push(
        toLatexLongTable(
          'Table 12.12: Summary of P13 Multi-Messenger Bounds',
          ['Dataset / Regime', 'Distance', 'Arrival Precision', 'eta_fold Limit', 'Status'],
          [0.20, 0.15, 0.21, 0.22, 0.22],
          P13_SUMMARY_OF_BOUNDS_TABLE.map((pb) => [
            pb.datasetOrRegime,
            pb.baselineDistance,
            pb.arrivalBoundOrPrecision,
            pb.etaFoldLimit,
            pb.epistemicNote
          ])
        )
      );
      out.push(`\\subsubsection*{Protocol Statistical Framework, Joint Likelihood \\& Bayesian Occam Penalty}`);
      out.push(`\\begin{itemize}[leftmargin=1.4em]`);
      for (const sec of H12_PROTOCOL_ANALYSIS_SECTIONS) out.push(`  \\item \\textbf{${toLatex(sec.title)}}: ${toLatex(sec.content)}`);
      out.push(`\\end{itemize}`);
      out.push(`\\subsubsection*{Falsification Checklist: What Would Prove H12 Wrong?}`);
      out.push(`\\begin{itemize}[leftmargin=1.4em]`);
      for (const f of H12_FALSIFICATION_CHECKLIST) out.push(`  \\item \\textbf{[Falsify]} ${toLatex(f)}`);
      out.push(`\\end{itemize}`);
      out.push(`\\subsubsection*{Confirmation Checklist: What Would Confirm H12?}`);
      out.push(`\\begin{itemize}[leftmargin=1.4em]`);
      for (const c of H12_CONFIRMATION_CHECKLIST) out.push(`  \\item \\textbf{[Confirm]} ${toLatex(c)}`);
      out.push(`\\end{itemize}`);
      out.push(`\\begin{quote}${toLatex(H12_FUNDING_AGENCY_SUMMARY)}\\end{quote}`);
    }
    if (ch.number === 13) {
      out.push(
        toLatexLongTable(
          'Table 13.1: Twelve Open Research Extrapolations & Obstacles',
          ['Topic', 'Category', 'Extension', 'Key Obstacle / Falsifier'],
          [0.21, 0.18, 0.33, 0.28],
          TWELVE_EXTRAPOLATIONS.map((ex) => [
            `${ex.id}. ${ex.topic}`,
            ex.category,
            ex.extension,
            ex.keyObstacleOrFalsifier
          ])
        )
      );
      out.push(
        toLatexLongTable(
          'Table 13.2: Seven Fundamental Problems in Physics Solved or Revolutionized by IGRT-H12',
          ['Open Problem', 'Governing Equations', 'Resolution & Category', 'Plain-Language Takeaway'],
          [0.22, 0.24, 0.31, 0.23],
          SEVEN_SOLVED_PHYSICS_PROBLEMS.map((sp) => [
            sp.openProblem,
            sp.governingH11H12Equations,
            `${sp.category}: ${sp.coreResolutionAndPrediction}`,
            sp.laymanTakeaway
          ])
        )
      );
      out.push(`\\subsubsection*{List of Open Problems (OP-1 to OP-6)}`);
      out.push(`\\begin{itemize}[leftmargin=1.4em]`);
      for (const op of H12_OPEN_PROBLEMS_LIST) out.push(`  \\item \\textbf{${toLatex(op.id)}: ${toLatex(op.problem)}} --- ${toLatex(op.statusNote)}`);
      out.push(`\\end{itemize}`);
      out.push(`\\subsubsection*{Response to Prior Methodological Audits}`);
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

function buildH12ReferencesTex(): string {
  const out: string[] = [];
  out.push('\\clearpage');
  out.push('\\section*{References}');
  out.push('\\begin{enumerate}');
  for (const ref of H12_REFERENCES) out.push(`  \\item ${toLatex(ref.citation)}`);
  out.push('\\end{enumerate}');
  return out.join('\n');
}

function buildH12ConsolidatedAppendicesALTex(standalone: boolean): string {
  const out: string[] = ['\\clearpage', '\\appendix'];
  for (const app of H12_APPENDICES) {
    out.push(`\\section{${toLatex(app.title)} [${toLatex(app.category)}]}`);
    out.push(`\\noindent\\textit{${toLatex(app.summary)}}`);
    out.push('');
    for (const eq of app.equations) out.push(toEqLatex(eq.unicodeHtml, eq.label, eq.caption));
    for (const p of app.bodyParagraphs) {
      out.push(toLatex(p));
      out.push('');
    }

    if (app.letter === 'I') {
      out.push(
        toLatexLongTable(
          'Table I.1: Evaluation of Eleven Candidate Portal Mechanisms',
          ['Mechanism', 'Feasibility Tier', 'Physical Action', 'Category', 'Quantitative Obstacle / Limit'],
          [0.18, 0.16, 0.24, 0.14, 0.28],
          ELEVEN_PORTAL_MECHANISMS.map((m) => [
            m.mechanism,
            m.tier,
            m.physicalAction,
            m.category,
            m.quantitativeObstacleOrLimit
          ])
        )
      );
    }

    if (app.letter === 'J') {
      out.push(
        toLatexLongTable(
          'Table J.1: Devices A--K Master Ten-Field Technical Specifications',
          ['Device', 'Principle & Equations', 'Signal & Floor', 'Actually Tests vs Non-Claim'],
          [0.20, 0.28, 0.24, 0.28],
          H12_PROPOSED_DEVICES.map((d) => [
            `${d.deviceId}: ${d.name} [${d.category}]`,
            `${d.physicalPrinciple} (${d.governingEquations})`,
            `${d.predictedSignal} | Floor: ${d.noiseFloor}`,
            `Tests: ${d.whatItActuallyTests} | Non-claim: ${d.whatItDoesNotDo}`
          ])
        )
      );
      for (const dos of APPENDIX_J_DEVICE_DOSSIERS) {
        out.push(`\\subsection{${toLatex(dos.title)} [\\texttt{${toLatex(dos.category)}}]}`);
        out.push(`\\noindent\\textit{${toLatex(dos.tagline)}}`);
        out.push('');
        out.push(`\\subsubsection*{How It Works (Plain-Language Guide)}`);
        for (const lp of dos.laymanParagraphs) {
          out.push(toLatex(lp));
          out.push('');
        }
        const mfig = H12_DEVICE_FIGURES.find((f) => f.id === dos.figureId);
        if (mfig) {
          if (!standalone) {
            if (mfig.illustrationFilename) {
              out.push(`\\begin{figure}[htbp]`);
              out.push(`\\centering`);
              out.push(`\\IfFileExists{illustrations/${mfig.illustrationFilename}}{\\includegraphics[width=0.90\\textwidth]{illustrations/${mfig.illustrationFilename}}}{\\fbox{\\parbox{0.85\\textwidth}{\\centering Cutaway illustration missing: illustrations/${mfig.illustrationFilename}}}}`);
              out.push(`\\vspace{6pt}`);
              out.push(`\\caption{\\textbf{Cutaway Plate (${toLatex(mfig.deviceId)}):} ${toLatex(mfig.illustrationTitle || mfig.title)}}`);
              out.push(`\\end{figure}`);
            }
            out.push(`\\begin{figure}[htbp]`);
            out.push(`\\centering`);
            out.push(`\\IfFileExists{figures/${mfig.id}.png}{\\includegraphics[width=0.92\\textwidth]{figures/${mfig.id}.png}}{\\fbox{\\parbox{0.85\\textwidth}{\\centering Schematic raster missing; inspect figures/${mfig.id}.svg}}}`);
            out.push(`\\vspace{6pt}`);
            out.push(`\\caption{\\textbf{${toLatex(mfig.figureNumber)} [${toLatex(mfig.category)}]:} ${toLatex(mfig.title)}. ${toLatex(mfig.caption)}}`);
            out.push(`\\end{figure}`);
          } else {
            out.push(`\\begin{quote}\\textbf{${toLatex(mfig.figureNumber)}:} ${toLatex(mfig.title)} --- ${toLatex(mfig.caption)}\\end{quote}`);
          }
        }
        out.push(`\\subsubsection*{Laboratory Architecture, Equations \\& Metrology}`);
        for (const ep of dos.engineeringParagraphs) {
          out.push(toLatex(ep));
          out.push('');
        }
        out.push(`\\begin{quote}\\textbf{Significance \\& Epistemic Boundary:} ${toLatex(dos.impactParagraph)}\\end{quote}`);
        const spec = H12_PROPOSED_DEVICES.find((d) => d.deviceId === dos.deviceId);
        if (spec) {
          out.push(
            toLatexLongTable(
              `${dos.deviceId}: Ten-Field Specification Matrix`,
              ['Specification Field', 'Quantitative Value & Boundary'],
              [0.26, 0.74],
              [
                ['1. Physical Principle', spec.physicalPrinciple],
                ['2. Governing Equations', spec.governingEquations],
                ['3. Architecture', spec.architecture],
                ['4. Operating Regime', spec.operatingRegime],
                ['5. Predicted Signal', spec.predictedSignal],
                ['6. Noise Floor', spec.noiseFloor],
                ['7. Feasibility', `${spec.engineeringFeasibility} (${spec.category})`],
                ['8. Actually Tests', spec.whatItActuallyTests],
                ['9. Does NOT Do', spec.whatItDoesNotDo],
                ['10. Failure Criteria', spec.failureCriteria]
              ]
            )
          );
        }
      }
      out.push(`\\subsection{Cross-Device Synthesis \\& Coordinated Discovery Horizon}`);
      out.push(
        toLatexLongTable(
          'Table J.2: Cross-Device Sensitivity, Readiness & Discovery Horizon Matrix (Devices A--K)',
          ['Device', 'Target Physics', 'Primary Observable', 'Readiness', 'Breakthrough vs Non-Claim'],
          [0.17, 0.20, 0.20, 0.14, 0.29],
          APPENDIX_J_SYNTHESIS_TABLE.map((row) => [
            row.device,
            row.targetPhysics,
            row.primaryObservable,
            row.readinessAndWindow,
            `${row.breakthroughIfDetected} | Non-claim: ${row.strictNonClaim}`
          ])
        )
      );
    }

    if (app.letter === 'K') {
      out.push(
        toLatexLongTable(
          'Table K.1: Unified Solutions to Seven Open Problems in Physics',
          ['Open Problem', 'Governing H11/H12 Equations', 'Resolution & Category', 'Plain-Language Takeaway'],
          [0.22, 0.24, 0.31, 0.23],
          SEVEN_SOLVED_PHYSICS_PROBLEMS.map((sp) => [
            sp.openProblem,
            sp.governingH11H12Equations,
            `${sp.category}: ${sp.coreResolutionAndPrediction}`,
            sp.laymanTakeaway
          ])
        )
      );
    }

    if (app.letter === 'L') {
      out.push(
        toLatexLongTable(
          'Table L.1: Ten-Domain Structural Audit (500 Criteria)',
          ['Domain', 'Self-Contained', 'Applicable', 'Verdict & Frontier Notes'],
          [0.24, 0.14, 0.14, 0.48],
          H12_TEN_DOMAIN_AUDITS.map((row) => [
            `${row.domainNumber} -- ${row.domainName} [${row.category}]`,
            `${row.selfContainedPoints}/${row.maxPoints}`,
            `${row.applicablePoints}/${row.maxPoints}`,
            `${row.verdict}: ${row.openFrontierNotes}`
          ])
        )
      );
      out.push(
        toLatexLongTable(
          'Table L.2: Sixteen Direct Stress-Test Evaluations (H12-ATK-01 to H12-ATK-16)',
          ['ID & Score', 'Challenge', 'Status & Category', 'H12 Resolution'],
          [0.15, 0.24, 0.20, 0.41],
          H12_SIXTEEN_REDTEAM_ATTACKS.map((atk) => [
            `${atk.id} (${atk.pointsAwarded}/${atk.maxPoints})`,
            atk.attackTitle,
            `${atk.technicalStatus} | ${atk.category}`,
            atk.h12ResolutionAndCitation
          ])
        )
      );
    }
  }
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
${buildH12ReferencesTex()}
${buildH12ConsolidatedAppendicesALTex(true)}
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
\\input{sections/02_references}
\\input{sections/03_appendices_AL}
\\end{document}
`;

  const makefile = `all:
\tpdflatex -interaction=nonstopmode main.tex
\tpdflatex -interaction=nonstopmode main.tex

verify:
\tnode scripts/verify-igrt-h12.mjs
`;

  const readme = `# IGRT-H12 LaTeX & Numerical Verification Bundle

Compile Complete Monograph (main.tex, Chapters 1-13 + References + Consolidated Appendices A-L):
  make        (or upload entire ZIP directly to Overleaf)

Verify all 102 numerical and symbolic physics assertions:
  node scripts/verify-igrt-h12.mjs
`;

  const files: Record<string, string> = {
    'main.tex': mainTex,
    'preamble.tex': buildH12Preamble(),
    'sections/00_frontmatter.tex': buildH12FrontmatterTex(),
    'sections/01_chapters.tex': buildH12ChaptersTex(false),
    'sections/02_references.tex': buildH12ReferencesTex(),
    'sections/03_appendices_AL.tex': buildH12ConsolidatedAppendicesALTex(false),
    'scripts/verify-igrt-h12.mjs': verifyH12ScriptSource,
    Makefile: makefile,
    'README.md': readme
  };

  for (const fig of [...H12_FIGURES, ...H12_DEVICE_FIGURES]) {
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

  await Promise.all([
    ...H12_ARCHIVAL_PLATES.map(async (pl) => {
      const bytes = await fetchImageBytes(pl.imagePath);
      if (bytes) {
        entries.push({ name: `illustrations/${pl.bundleFilename}`, data: bytes });
      }
    }),
    ...H12_DEVICE_FIGURES.filter((f) => f.illustrationPath && f.illustrationFilename).map(async (f) => {
      const bytes = await fetchImageBytes(f.illustrationPath!);
      if (bytes) {
        entries.push({ name: `illustrations/${f.illustrationFilename}`, data: bytes });
      }
    })
  ]);

  for (const fig of [...H12_FIGURES, ...H12_DEVICE_FIGURES]) {
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

function mathHtml(s?: string | null): string {
  return formatMathToHtml(String(s ?? ''));
}

export function buildH12SelfContainedHtml(): string {
  const chapterHtml = H12_CHAPTERS.map((ch) => {
    const subs = ch.subsections
      .map((s) => {
        const eqBlock = s.equation
          ? `<div class="eq-box"><div class="eq-main">${s.equation.unicodeHtml}</div><div class="eq-cap">${mathHtml(s.equation.label)} [${escHtml(s.equation.category)}] — ${mathHtml(s.equation.caption)}</div></div>`
          : '';
        const bulletsBlock = s.bulletPoints && s.bulletPoints.length > 0
          ? `<ul>${s.bulletPoints.map((bp) => `<li><strong>${mathHtml(bp.label)}:</strong> ${mathHtml(bp.text)}</li>`).join('')}</ul>`
          : '';
        const thmBlock = s.theoremBox
          ? `<div class="thm-box"><strong>${mathHtml(s.theoremBox.number)} — ${mathHtml(s.theoremBox.title)}</strong> <code>${escHtml(s.theoremBox.category)}</code><ul>${s.theoremBox.hypotheses.map((h) => `<li>${mathHtml(h)}</li>`).join('')}</ul><p>${mathHtml(s.theoremBox.statement)}</p></div>`
          : '';
        const exBlock = s.workedExample
          ? `<div class="thm-box"><strong>${mathHtml(s.workedExample.title)}</strong><p>${mathHtml(s.workedExample.setup)}</p><ol>${s.workedExample.steps.map((st) => `<li>${mathHtml(st)}</li>`).join('')}</ol><div class="eq-box"><div class="eq-main">${s.workedExample.resultEquation.unicodeHtml}</div><div class="eq-cap">${mathHtml(s.workedExample.resultEquation.label)} — ${mathHtml(s.workedExample.resultEquation.caption)}</div></div><p><strong>Takeaway:</strong> ${mathHtml(s.workedExample.takeaway)}</p></div>`
          : '';
        return `<section><h3>${escHtml(s.number)} ${mathHtml(s.title)} <span class="cat-label">${escHtml(s.category)}</span></h3>${s.paragraphs.map((p) => `<p>${mathHtml(p)}</p>`).join('')}${eqBlock}${bulletsBlock}${thmBlock}${exBlock}</section>`;
      })
      .join('');
    let chapterIntro = '';
    let chapterExtras = '';
    if (ch.number === 1) {
      chapterIntro += `<div class="thm-box"><strong>Metric Signature Box:</strong> ${mathHtml(H12_METRIC_SIGNATURE_BOX)}</div>`;
      chapterIntro += `<h4>Table 1.3 · Category B/C Boundary Rubric Box (Resolving Epistemic Grey Areas)</h4><table><thead><tr><th>Boundary Case</th><th>Derived Core vs. Conjectural Premise</th><th>Category &amp; Rule</th></tr></thead><tbody>${EPISTEMIC_BC_GREY_AREA_RUBRIC.map((g) => `<tr><td>${mathHtml(g.boundaryCase)}</td><td><strong>Derived:</strong> ${mathHtml(g.derivedAspect)}<br/><strong>Conjectural:</strong> ${mathHtml(g.conjecturalAspect)}</td><td>${escHtml(g.assignedCategory)} — ${mathHtml(g.ruleApplied)}</td></tr>`).join('')}</tbody></table>`;
      chapterExtras += `<h4>Table 1.1 · Audit of All 12 Core IGRT-H11 Components &amp; H12 Embedding Status</h4><table><thead><tr><th>Component</th><th>H11 Value / Role</th><th>H12 Status</th><th>Category &amp; Modification</th></tr></thead><tbody>${H11_TWELVE_COMPONENTS_AUDIT.map((r) => `<tr><td>${mathHtml(r.component)}</td><td>${mathHtml(r.h11EquationOrValue)}</td><td>${mathHtml(r.h12Status)}</td><td><strong>${escHtml(r.category)}:</strong> ${mathHtml(r.h12Modification)}</td></tr>`).join('')}</tbody></table>`;
      chapterExtras += `<h4>Table 1.2 · Direct Comparison: 4D IGRT-H11 vs. 5D IGRT-H12</h4><table><thead><tr><th>Dimension</th><th>4D IGRT-H11</th><th>5D IGRT-H12</th><th>Epistemic Delta</th><th>Testable Now?</th></tr></thead><tbody>${COMPARISON_4D_VS_5D_IGRT.map((c) => `<tr><td>${mathHtml(c.dimension)}</td><td>${mathHtml(c.h11FourD)}</td><td>${mathHtml(c.h12FiveD)}</td><td>${mathHtml(c.epistemicDelta)}</td><td>${escHtml(c.testableNow)}</td></tr>`).join('')}</tbody></table>`;
      chapterExtras += `<h4>Glossary of Five-Dimensional Terms</h4><dl>${GLOSSARY_5D_TERMS.map((g) => `<dt><strong>${mathHtml(g.term)}</strong></dt><dd>${mathHtml(g.definition)}</dd>`).join('')}</dl>`;
      chapterExtras += `<div class="thm-box">${mathHtml(SUMMARY_FOR_PHYSICISTS)}</div>`;
    } else if (ch.number === 2) {
      chapterIntro += `<h4>Timeline of Five-Dimensional Physics (1921–2026)</h4><ul>${TIMELINE_5D_PHYSICS.map((tm) => `<li><strong>${escHtml(tm.year)} · ${mathHtml(tm.milestone)}:</strong> ${mathHtml(tm.contributionToH12)}</li>`).join('')}</ul>`;
      chapterExtras += `<h4>Table 2.1 · Structured Catalog of 665 Verified H11 Assertions</h4><table><thead><tr><th>Group</th><th>Assertions</th><th>Scope</th></tr></thead><tbody>${H11_665_ASSERTIONS_CATALOG.map((c) => `<tr><td>${escHtml(c.moduleGroup)}</td><td>${c.assertionCount}</td><td>${mathHtml(c.verifiedPhysicalScope)}</td></tr>`).join('')}</tbody></table>`;
      chapterExtras += `<h4>Table 2.2 · Eöt-Wash Uncertainty, UV Regulators &amp; Clock Energy Sweep</h4><table><thead><tr><th>Regime / Regulator</th><th>Scale</th><th>Output</th><th>Interpretation</th></tr></thead><tbody>${REGULATOR_SENSITIVITY_TABLE.map((r) => `<tr><td>${mathHtml(r.regimeOrRegulator)}</td><td>${mathHtml(r.energyOrRadius)}</td><td>${mathHtml(r.computedOutput)}</td><td>${mathHtml(r.physicalInterpretation)}</td></tr>`).join('')}</tbody></table>`;
    } else if (ch.number === 3) {
      chapterExtras += `<h4>Table 3.1 · Seven Orthogonal Temporal Notions &amp; Literature Correspondence</h4><table><thead><tr><th>Notion</th><th>Symbol</th><th>Definition</th><th>Folding &amp; Literature</th></tr></thead><tbody>${SEVEN_TEMPORAL_NOTIONS.map((t) => `<tr><td>${escHtml(t.notion)}</td><td>${mathHtml(t.symbol)}</td><td>${mathHtml(t.mathematicalDefinition)}</td><td>${mathHtml(t.foldsInH12)}<br/><em>Literature:</em> ${mathHtml(t.literatureComparison)}</td></tr>`).join('')}</tbody></table>`;
    } else if (ch.number === 4) {
      chapterExtras += `<h4>Table 4.1 · Positive Conjectures Summary Table (Strictly Category C)</h4><table><thead><tr><th>Conjecture</th><th>Conditional Mathematical Statement</th><th>Target Protocol &amp; Status</th></tr></thead><tbody>${POSITIVE_CONJECTURES_SUMMARY.map((p) => `<tr><td>${mathHtml(p.conjecture)}</td><td>${mathHtml(p.statement)}</td><td><strong>${escHtml(p.category)}:</strong> ${mathHtml(p.test)}</td></tr>`).join('')}</tbody></table>`;
      chapterExtras += `<h4>Table 4.2 · Model 2B Quadrature Convergence &amp; ds<sub>5</sub><sup>2</sup> ≡ 0 Verification</h4><table><thead><tr><th>Span</th><th>Peak Depth</th><th>Folding &amp; Speed</th><th>Residuals</th></tr></thead><tbody>${MODEL2B_CONVERGENCE_AND_MICROCAUSALITY_TABLE.map((m) => `<tr><td>${mathHtml(m.benchmarkSpan)}</td><td>${mathHtml(m.turningPeak)}</td><td>${mathHtml(m.etaFoldAndSpeed)}</td><td>${mathHtml(m.elAndNullResidual)}</td></tr>`).join('')}</tbody></table>`;
    } else if (ch.number === 5) {
      chapterExtras += `<h4>Table 5.1 · Six-Class Black-Hole &amp; Portal Geometry Taxonomy (Classes A–F)</h4><table><thead><tr><th>Class</th><th>Metric / NEC Status</th><th>Portal Viability</th><th>Stability &amp; Category</th></tr></thead><tbody>${SIX_BLACK_HOLE_CLASSES.map((b) => `<tr><td><strong>${escHtml(b.classId)}</strong> (${escHtml(b.label)})</td><td>${mathHtml(b.metricSignatureAndForm)}<br/>${mathHtml(b.necStatus)}</td><td>${mathHtml(b.portalViability)}</td><td><strong>${escHtml(b.category)}:</strong> ${mathHtml(b.stabilityAndConstraints)}</td></tr>`).join('')}</tbody></table>`;
    } else if (ch.number === 6 || ch.number === 9) {
      chapterExtras += `<h4>Table ${ch.number}.1 · ${ch.number === 6 ? 'Negative Results Summary' : 'Consolidated Negative Results Summary Table (Category A/B)'}</h4><table><thead><tr><th>Negative Theorem</th><th>Category</th><th>Statement</th><th>Physical Implication</th></tr></thead><tbody>${NEGATIVE_RESULTS_SUMMARY.map((n) => `<tr><td>${mathHtml(n.theorem)}</td><td>${escHtml(n.category)}</td><td>${mathHtml(n.statement)}</td><td>${mathHtml(n.implication)}</td></tr>`).join('')}</tbody></table>`;
      chapterExtras += `<h4>Glossary of Negative Theorems</h4><dl>${GLOSSARY_NEGATIVE_THEOREMS.map((g) => `<dt><strong>${mathHtml(g.term)}</strong></dt><dd>${mathHtml(g.definition)}</dd>`).join('')}</dl>`;
    } else if (ch.number === 10) {
      chapterExtras += `<h4>Table 10.1 · What Is Unique to 5D vs. Already Resolved in 4D IGRT-H11</h4><table><thead><tr><th>Observable</th><th>4D IGRT-H11</th><th>Unique to 5D IGRT-H12</th><th>Empirical Status</th></tr></thead><tbody>${WHAT_IS_UNIQUE_TO_5D.map((u) => `<tr><td>${mathHtml(u.observable)}</td><td>${mathHtml(u.reproducedIn4DH11)}</td><td>${mathHtml(u.uniqueTo5DH12)}</td><td>${mathHtml(u.empiricalStatus)}</td></tr>`).join('')}</tbody></table>`;
      chapterExtras += `<h4>Table 10.2 · Observational Bounds Consistency Audit</h4><table><thead><tr><th>Probe</th><th>Quantitative Bound</th><th>H12 Status</th><th>Derived vs. Assumed</th></tr></thead><tbody>${FIVE_D_OBSERVATIONAL_BOUNDS.map((b) => `<tr><td>${mathHtml(b.probe)}</td><td>${mathHtml(b.bound)}</td><td>${mathHtml(b.h12Status)}</td><td>${mathHtml(b.derivationOrAssumption)}</td></tr>`).join('')}</tbody></table>`;
      chapterExtras += `<h4>Table 10.3 · Five-Dimensional Signatures, Experimental Tests &amp; Current Observational Constraints</h4><table><thead><tr><th>5D Signature</th><th>Experiment That Tests It</th><th>Current Observational Constraint</th></tr></thead><tbody>${FIVE_D_SIGNATURES_TEST_MATRIX.map((sig) => `<tr><td>${mathHtml(sig.signature)}</td><td>${mathHtml(sig.experimentToTestIt)}</td><td>${mathHtml(sig.currentConstraint)}</td></tr>`).join('')}</tbody></table>`;
    } else if (ch.number === 11) {
      chapterExtras += `<h4>Table 11.1 · Exhaustive Ledger of Non-Derived Claims (Categories A, C &amp; D)</h4><table><thead><tr><th>Claim / Ansatz / Postulate</th><th>Category</th><th>Exact Reason Why Not Derived in H12</th></tr></thead><tbody>${WHAT_IS_NOT_DERIVED_LEDGER.map((w) => `<tr><td>${mathHtml(w.claim)}</td><td>${escHtml(w.category)}</td><td>${mathHtml(w.whyNotDerived)}</td></tr>`).join('')}</tbody></table>`;
    } else if (ch.number === 12) {
      chapterExtras += `<h4>Table 12.1 · Dedicated IGRT-H12 Experimental &amp; Conceptual Protocols (P7–P13)</h4><table><thead><tr><th>Protocol</th><th>Relation to H11</th><th>Sensitivity</th><th>Falsification Criterion</th></tr></thead><tbody>${H12_ALL_PROTOCOLS.map((p) => `<tr><td><strong>${escHtml(p.id)} · ${mathHtml(p.name)}</strong><br/>${escHtml(p.category)} (${mathHtml(p.timeline)})</td><td>${mathHtml(p.relationToH11)}</td><td>${mathHtml(p.numericalSensitivity)}</td><td>${mathHtml(p.falsificationCriterion)}</td></tr>`).join('')}</tbody></table>`;
      chapterExtras += `<h4>Table 12.2 · P7–P13 Experimental Timeline</h4><table><thead><tr><th>Protocol</th><th>Current State</th><th>Required Sensitivity</th><th>Expected Year</th></tr></thead><tbody>${P7_TO_P13_TIMELINE_TABLE.map((t) => `<tr><td>${mathHtml(t.protocol)}</td><td>${mathHtml(t.currentState)}</td><td>${mathHtml(t.requiredSensitivity)}</td><td>${mathHtml(t.expectedYear)}</td></tr>`).join('')}</tbody></table>`;
      chapterExtras += `<h4>Table 12.3 · Falsification Thresholds &amp; Table 12.4 · Confirmation Thresholds (P7–P13)</h4><table><thead><tr><th>Protocol</th><th>Null Falsification Bound</th><th>Rules Out</th><th>Positive Signal &amp; Control</th></tr></thead><tbody>${P7_TO_P13_FALSIFICATION_TABLE.map((f, idx) => { const c = P7_TO_P13_CONFIRMATION_TABLE[idx]; return `<tr><td>${mathHtml(f.protocol)}</td><td>${mathHtml(f.nullBound)}</td><td>${mathHtml(f.whatItRulesOut)}</td><td>${c ? `${mathHtml(c.signalSignature)} (Control: ${mathHtml(c.requiredControl)})` : ''}</td></tr>`; }).join('')}</tbody></table>`;
      chapterExtras += `<h4>Table 12.5 · Empirical Decision Matrix (P7–P13)</h4><table><thead><tr><th>Experimental Outcome</th><th>Posterior Status</th><th>Mandatory Action</th></tr></thead><tbody>${P7_TO_P13_DECISION_MATRIX.map((d) => `<tr><td>${mathHtml(d.outcome)}</td><td>${mathHtml(d.posteriorStatus)}</td><td>${mathHtml(d.mandatoryAction)}</td></tr>`).join('')}</tbody></table>`;
      chapterExtras += `<h4>Table 12.6 · H11 Protocols (P1–P6) vs. H12 Protocols (P7–P13)</h4><table><thead><tr><th>Aspect</th><th>H11 (P1–P6)</th><th>H12 (P7–P13)</th></tr></thead><tbody>${H11_VS_H12_PROTOCOLS_COMPARISON.map((cmp) => `<tr><td>${mathHtml(cmp.aspect)}</td><td>${mathHtml(cmp.h11Protocols)}</td><td>${mathHtml(cmp.h12Protocols)}</td></tr>`).join('')}</tbody></table>`;
      chapterExtras += `<h4>Table 12.7 · Quantitative Noise Budgets &amp; Mitigation (P7–P13)</h4><table><thead><tr><th>Protocol</th><th>Noise Sources</th><th>Floor</th><th>Mitigation</th></tr></thead><tbody>${P7_TO_P13_NOISE_BUDGET_TABLE.map((nb) => `<tr><td>${mathHtml(nb.protocol)}</td><td>${mathHtml(nb.primaryNoiseSources)}</td><td>${mathHtml(nb.quantitativeBudget)}</td><td>${mathHtml(nb.mitigationArchitecture)}</td></tr>`).join('')}</tbody></table>`;
      chapterExtras += `<h4>Table 12.8 · P13 Systematic Error Budget</h4><table><thead><tr><th>Source</th><th>Magnitude / Uncertainty</th><th>Impact on &eta;<sub>fold</sub></th><th>Mitigation Strategy</th></tr></thead><tbody>${P13_SYSTEMATIC_ERROR_BUDGET.map((s) => `<tr><td>${mathHtml(s.source)}</td><td>${mathHtml(s.magnitudeOrUncertainty)}</td><td>${mathHtml(s.impactOnEtaFold)}</td><td>${mathHtml(s.mitigationStrategy)}</td></tr>`).join('')}</tbody></table>`;
      chapterExtras += `<h4>Table 12.9 · P13 Statistical Error Budget</h4><table><thead><tr><th>Channel</th><th>Timing Precision</th><th>Propagated &eta;<sub>fold</sub> Error</th><th>Scaling Note</th></tr></thead><tbody>${P13_STATISTICAL_ERROR_BUDGET.map((st) => `<tr><td>${mathHtml(st.channel)}</td><td>${mathHtml(st.measurementPrecision)}</td><td>${mathHtml(st.propagatedEtaFoldError)}</td><td>${mathHtml(st.sampleScalingNote)}</td></tr>`).join('')}</tbody></table>`;
      chapterExtras += `<h4>Table 12.10 · Combined Protocol Bounds (P7–P13)</h4><table><thead><tr><th>Cluster</th><th>Parameters</th><th>Joint Likelihood Role</th><th>Exclusion Power</th></tr></thead><tbody>${P7_TO_P13_COMBINED_BOUNDS_TABLE.map((cb) => `<tr><td>${mathHtml(cb.protocolPairOrCluster)}</td><td>${mathHtml(cb.constrainedParameters)}</td><td>${mathHtml(cb.combinedJointLikelihoodRole)}</td><td>${mathHtml(cb.orthogonalExclusionPower)}</td></tr>`).join('')}</tbody></table>`;
      chapterExtras += `<h4>Table 12.11 · Protocol Sensitivity Projections (2026–2035+)</h4><table><thead><tr><th>Protocol</th><th>2026 Baseline</th><th>2027–2032</th><th>2035+ (3G)</th></tr></thead><tbody>${P7_TO_P13_SENSITIVITY_PROJECTION_TABLE.map((pr) => `<tr><td>${mathHtml(pr.protocol)}</td><td>${mathHtml(pr.currentBaseline2026)}</td><td>${mathHtml(pr.nearTerm2027_2032)}</td><td>${mathHtml(pr.longTerm3G2035Plus)}</td></tr>`).join('')}</tbody></table>`;
      chapterExtras += `<h4>Table 12.12 · Summary of P13 Multi-Messenger Bounds</h4><table><thead><tr><th>Dataset / Regime</th><th>Distance</th><th>Arrival Bound</th><th>&eta;<sub>fold</sub> Limit</th><th>Status</th></tr></thead><tbody>${P13_SUMMARY_OF_BOUNDS_TABLE.map((pb) => `<tr><td>${mathHtml(pb.datasetOrRegime)}</td><td>${mathHtml(pb.baselineDistance)}</td><td>${mathHtml(pb.arrivalBoundOrPrecision)}</td><td>${mathHtml(pb.etaFoldLimit)}</td><td>${mathHtml(pb.epistemicNote)}</td></tr>`).join('')}</tbody></table>`;
      chapterExtras += `<h4>Systematics, Statistical Significance, Joint Likelihood &amp; Bayesian Occam Penalty</h4><ul>${H12_PROTOCOL_ANALYSIS_SECTIONS.map((sec) => `<li><strong>${mathHtml(sec.title)}:</strong> ${mathHtml(sec.content)}</li>`).join('')}</ul>`;
      chapterExtras += `<h4>Falsification Checklist: What Would Prove H12 Wrong?</h4><ul>${H12_FALSIFICATION_CHECKLIST.map((f) => `<li><strong>[Falsify]</strong> ${mathHtml(f)}</li>`).join('')}</ul>`;
      chapterExtras += `<h4>Confirmation Checklist: What Would Confirm H12?</h4><ul>${H12_CONFIRMATION_CHECKLIST.map((c) => `<li><strong>[Confirm]</strong> ${mathHtml(c)}</li>`).join('')}</ul>`;
      chapterExtras += `<div class="thm-box">${mathHtml(H12_FUNDING_AGENCY_SUMMARY)}</div>`;
    } else if (ch.number === 13) {
      chapterExtras += `<h4>Table 13.1 · Twelve Open Research Extrapolations</h4><table><thead><tr><th>Topic</th><th>Category</th><th>Extension</th><th>Obstacle / Falsifier</th></tr></thead><tbody>${TWELVE_EXTRAPOLATIONS.map((ex) => `<tr><td>${ex.id}. ${mathHtml(ex.topic)}</td><td>${escHtml(ex.category)}</td><td>${mathHtml(ex.extension)}</td><td>${mathHtml(ex.keyObstacleOrFalsifier)}</td></tr>`).join('')}</tbody></table>`;
      chapterExtras += `<h4>Table 13.2 · Seven Fundamental Problems in Physics Solved or Revolutionized by IGRT–H12</h4><table><thead><tr><th>Open Problem</th><th>Governing H11 / H12 Equations</th><th>Resolution &amp; Category</th><th>Plain-Language Takeaway</th></tr></thead><tbody>${SEVEN_SOLVED_PHYSICS_PROBLEMS.map((sp) => `<tr><td>${mathHtml(sp.openProblem)}</td><td><code>${mathHtml(sp.governingH11H12Equations)}</code></td><td><strong>${escHtml(sp.category)}:</strong> ${mathHtml(sp.coreResolutionAndPrediction)}</td><td>${mathHtml(sp.laymanTakeaway)}</td></tr>`).join('')}</tbody></table>`;
      chapterExtras += `<h4>List of Open Problems (OP-1 to OP-6)</h4><ul>${H12_OPEN_PROBLEMS_LIST.map((op) => `<li><strong>${escHtml(op.id)}: ${mathHtml(op.problem)}</strong> — ${mathHtml(op.statusNote)}</li>`).join('')}</ul>`;
      chapterExtras += `<h4>Response to Prior Methodological Audits</h4><ul>${H12_PRIOR_AUDIT_RESPONSES.map((r) => `<li><strong>${mathHtml(r.auditScope)}:</strong> ${mathHtml(r.panelCritique)} — <em>Harmonized Resolution:</em> ${mathHtml(r.harmonizedResolution)}</li>`).join('')}</ul>`;
    }
    const figs = H12_FIGURES.filter((f) => f.anchorChapter === ch.number)
      .map(
        (f) =>
          `<figure><div class="fig-meta">${escHtml(f.figureNumber)} · ${escHtml(f.category)}</div><h4>${mathHtml(f.title)}</h4>${formatSvgMathMarkup(pdfBmpSafeUnicode(f.svgMarkup))}<figcaption>${mathHtml(f.caption)}</figcaption></figure>`
      )
      .join('');
    const plates = H12_ARCHIVAL_PLATES.filter((pl) => pl.anchorChapter === ch.number)
      .map(
        (pl) =>
          `<figure><div class="fig-meta">${escHtml(pl.figureNumber)} · ${escHtml(pl.category)}</div><h4>${mathHtml(pl.title)}</h4><p class="lead">${mathHtml(pl.description)}</p><figcaption><strong>Archival Plate Asset:</strong> <code>${escHtml(pl.imagePath)}</code> (${escHtml(pl.bundleFilename)})</figcaption></figure>`
      )
      .join('');
    return `<article><h2 class="chapter-title">Chapter ${ch.number}. ${mathHtml(ch.title)}</h2><p class="lead">${mathHtml(ch.leadSummary)}</p>${chapterIntro}${subs}${chapterExtras}${figs}${plates}</article>`;
  }).join('');

  const frontMatterListsHtml = `
    <h3>List of Figures &amp; Archival Plates</h3>
    <ul>${H12_ARCHIVAL_PLATES.map((pl) => `<li><strong>${escHtml(pl.figureNumber)}</strong> (Ch.${pl.anchorChapter}): ${mathHtml(pl.title)} [${escHtml(pl.category)}]</li>`).join('')}${H12_FIGURES.map((fg) => `<li><strong>${escHtml(fg.figureNumber)}</strong> (Ch.${fg.anchorChapter}): ${mathHtml(fg.title)} [${escHtml(fg.category)}]</li>`).join('')}${H12_DEVICE_FIGURES.map((mfg) => `<li><strong>${escHtml(mfg.figureNumber)}</strong> (Appendix J · ${escHtml(mfg.deviceId)}): ${mathHtml(mfg.title)} [${escHtml(mfg.category)}]</li>`).join('')}</ul>
    <h3>List of Tables</h3>
    <ul>${H12_FRONTMATTER_TABLES_LIST.map((tb) => `<li><strong>${escHtml(tb.id)}</strong> (${escHtml(tb.location)}): ${mathHtml(tb.title)}</li>`).join('')}</ul>
    <h3>List of Principal Equations</h3>
    <ul>${H12_FRONTMATTER_EQUATIONS_LIST.map((eq) => `<li><strong>${mathHtml(eq.label)}</strong> (${escHtml(eq.location)}, ${escHtml(eq.category)}): ${mathHtml(eq.title)}</li>`).join('')}</ul>
    <h3>List of Theorems &amp; Formal Definitions</h3>
    <ul>${H12_THEOREMS_LIST.map((th) => `<li><strong>${escHtml(th.id)}</strong> (${escHtml(th.location)}, ${escHtml(th.category)}): ${mathHtml(th.title)}</li>`).join('')}${H12_DEFINITIONS_LIST.map((df) => `<li><strong>${escHtml(df.id)} (${mathHtml(df.term)}):</strong> ${mathHtml(df.formalDefinition)}</li>`).join('')}</ul>
  `;

  const domainRowsHtml = H12_TEN_DOMAIN_AUDITS.map(
    (d) =>
      `<tr><td><strong>${escHtml(d.domainNumber)}</strong>: ${mathHtml(d.domainName)}</td><td>${d.criteriaCount}</td><td>${d.selfContainedPoints}/${d.maxPoints}</td><td>${d.applicablePoints}/${d.maxPoints}</td><td>${mathHtml(d.verdict)}</td></tr>`
  ).join('');
  const attackRowsHtml = H12_SIXTEEN_REDTEAM_ATTACKS.map(
    (a) =>
      `<tr><td><strong>${escHtml(a.id)}</strong></td><td>${mathHtml(a.attackTitle)}</td><td>${escHtml(a.technicalStatus)}</td><td>${a.pointsAwarded}/${a.maxPoints}</td><td>${mathHtml(a.h12ResolutionAndCitation)}</td></tr>`
  ).join('');

  const consolidatedAppendicesHtml = H12_APPENDICES.map((a) => {
    let extras = '';
    if (a.letter === 'I') {
      extras += `<h4>Table I.1 · Five-Tier Assessment of Eleven Candidate Portal Mechanisms</h4><table><thead><tr><th>Mechanism</th><th>Feasibility Tier</th><th>Physical Action</th><th>Category</th><th>Quantitative Obstacle / Limit</th></tr></thead><tbody>${ELEVEN_PORTAL_MECHANISMS.map((m) => `<tr><td>${mathHtml(m.mechanism)}</td><td>${mathHtml(m.tier)}</td><td>${mathHtml(m.physicalAction)}</td><td>${escHtml(m.category)}</td><td>${mathHtml(m.quantitativeObstacleOrLimit)}</td></tr>`).join('')}</tbody></table>`;
    } else if (a.letter === 'J') {
      extras += `<h4>Table J.1 · Devices A–K Master Ten-Field Technical Specifications</h4><table><thead><tr><th>Device</th><th>Principle &amp; Equations</th><th>Signal &amp; Floor</th><th>Actually Tests vs. Non-Claim</th></tr></thead><tbody>${H12_PROPOSED_DEVICES.map((d) => `<tr><td><strong>${escHtml(d.deviceId)}: ${mathHtml(d.name)}</strong><br/>${escHtml(d.category)}</td><td>${mathHtml(d.physicalPrinciple)}<br/><code>${mathHtml(d.governingEquations)}</code></td><td>${mathHtml(d.predictedSignal)}<br/><em>Floor:</em> ${mathHtml(d.noiseFloor)}</td><td><strong>Tests:</strong> ${mathHtml(d.whatItActuallyTests)}<br/><strong>Does NOT do:</strong> ${mathHtml(d.whatItDoesNotDo)}</td></tr>`).join('')}</tbody></table>`;
      extras += APPENDIX_J_DEVICE_DOSSIERS.map((dos) => {
        const mfig = H12_DEVICE_FIGURES.find((f) => f.id === dos.figureId);
        const spec = H12_PROPOSED_DEVICES.find((d) => d.deviceId === dos.deviceId);
        const imgTag = mfig?.illustrationPath
          ? `<div style="margin:12px 0;text-align:center;"><img src="${escHtml(mfig.illustrationPath)}" alt="${escHtml(mfig.illustrationTitle || mfig.title)}" referrerPolicy="no-referrer" style="max-width:100%;max-height:420px;border-radius:8px;border:1px solid #D6CABE;"/>${mfig.illustrationTitle ? `<div class="fig-meta" style="margin-top:6px;">Cutaway Plate: ${escHtml(mfig.illustrationTitle)}</div>` : ''}</div>`
          : '';
        return `<section><h4>${mathHtml(dos.title)} <span class="cat-label">${escHtml(dos.category)}</span></h4><p class="lead">${mathHtml(dos.tagline)}</p><h5>How It Works (Plain-Language Guide)</h5>${dos.laymanParagraphs.map((p) => `<p>${mathHtml(p)}</p>`).join('')}${mfig ? `<figure><div class="fig-meta">${escHtml(mfig.figureNumber)} · ${escHtml(mfig.category)}</div><h4>${mathHtml(mfig.title)}</h4>${imgTag}${formatSvgMathMarkup(pdfBmpSafeUnicode(mfig.svgMarkup))}<figcaption>${mathHtml(mfig.caption)}</figcaption></figure>` : ''}<h5>Laboratory Architecture, Governing Equations &amp; Metrology</h5>${dos.engineeringParagraphs.map((p) => `<p>${mathHtml(p)}</p>`).join('')}<div class="thm-box"><strong>Significance &amp; Epistemic Boundary:</strong> ${mathHtml(dos.impactParagraph)}</div>${spec ? `<table><thead><tr><th>Specification Field</th><th>Quantitative Value &amp; Boundary</th></tr></thead><tbody><tr><td><strong>1. Principle</strong></td><td>${mathHtml(spec.physicalPrinciple)}</td></tr><tr><td><strong>2. Equations</strong></td><td><code>${mathHtml(spec.governingEquations)}</code></td></tr><tr><td><strong>3. Architecture</strong></td><td>${mathHtml(spec.architecture)}</td></tr><tr><td><strong>4. Operating Regime</strong></td><td>${mathHtml(spec.operatingRegime)}</td></tr><tr><td><strong>5. Predicted Signal</strong></td><td>${mathHtml(spec.predictedSignal)}</td></tr><tr><td><strong>6. Noise Floor</strong></td><td>${mathHtml(spec.noiseFloor)}</td></tr><tr><td><strong>7. Feasibility</strong></td><td>${mathHtml(spec.engineeringFeasibility)}</td></tr><tr><td><strong>8. Actually Tests</strong></td><td>${mathHtml(spec.whatItActuallyTests)}</td></tr><tr><td><strong>9. Explicitly Does NOT Do</strong></td><td>${mathHtml(spec.whatItDoesNotDo)}</td></tr><tr><td><strong>10. Failure Criteria</strong></td><td>${mathHtml(spec.failureCriteria)}</td></tr></tbody></table>` : ''}</section>`;
      }).join('');
      extras += `<h4>Table J.2 · Cross-Device Sensitivity, Readiness &amp; Discovery Horizon Matrix (Devices A–K)</h4><table><thead><tr><th>Device</th><th>Target Physics</th><th>Primary Observable</th><th>TRL &amp; Window</th><th>Breakthrough vs. Non-Claim</th></tr></thead><tbody>${APPENDIX_J_SYNTHESIS_TABLE.map((r) => `<tr><td><strong>${mathHtml(r.device)}</strong></td><td>${mathHtml(r.targetPhysics)}</td><td><code>${mathHtml(r.primaryObservable)}</code></td><td>${mathHtml(r.readinessAndWindow)}</td><td><strong>Detection:</strong> ${mathHtml(r.breakthroughIfDetected)}<br/><strong>Non-Claim:</strong> ${mathHtml(r.strictNonClaim)}</td></tr>`).join('')}</tbody></table>`;
    } else if (a.letter === 'K') {
      extras += `<h4>Table K.1 · Unified Solutions to Seven Open Problems in Physics</h4><table><thead><tr><th>Open Problem</th><th>Governing Equations</th><th>Resolution &amp; Category</th><th>Plain-Language Explanation</th></tr></thead><tbody>${SEVEN_SOLVED_PHYSICS_PROBLEMS.map((sp) => `<tr><td><strong>${mathHtml(sp.openProblem)}</strong></td><td><code>${mathHtml(sp.governingH11H12Equations)}</code></td><td><strong>${escHtml(sp.category)}:</strong> ${mathHtml(sp.coreResolutionAndPrediction)}</td><td>${mathHtml(sp.laymanTakeaway)}</td></tr>`).join('')}</tbody></table>`;
    } else if (a.letter === 'L') {
      extras += `<p><strong>Self-Contained Closure:</strong> ${H12_STRESS_TEST_SUMMARY.grandSelfContainedPoints}/${H12_STRESS_TEST_SUMMARY.grandMaxPoints} (${H12_STRESS_TEST_SUMMARY.selfContainedScorePct}%) · <strong>Math/Negative-Theorem Closure:</strong> ${H12_STRESS_TEST_SUMMARY.mathematicalClosurePct.toFixed(1)}% · <strong>Epistemic Applicable Score:</strong> ${H12_STRESS_TEST_SUMMARY.grandApplicablePoints}/${H12_STRESS_TEST_SUMMARY.grandMaxPoints} (${H12_STRESS_TEST_SUMMARY.overallEpistemicScorePct}%)</p>`;
      extras += `<h4>Table L.1 · Ten-Domain Structural Audit (500 Criteria)</h4><table><thead><tr><th>Domain</th><th>Criteria</th><th>Self-Contained</th><th>Applicable</th><th>Verdict</th></tr></thead><tbody>${domainRowsHtml}</tbody></table>`;
      extras += `<h4>Table L.2 · Sixteen Direct Stress-Test Evaluations (H12-ATK-01 to H12-ATK-16)</h4><table><thead><tr><th>ID</th><th>Challenge</th><th>Status</th><th>Score</th><th>Resolution</th></tr></thead><tbody>${attackRowsHtml}</tbody></table>`;
    }
    return `<article><h3>Appendix ${escHtml(a.letter)}: ${mathHtml(a.title)} <span class="cat-label">${escHtml(a.category)}</span></h3><p class="lead">${mathHtml(a.summary)}</p>${a.equations.map((eq) => `<div class="eq-box"><div class="eq-main">${eq.unicodeHtml}</div><div class="eq-cap">${mathHtml(eq.label)} — ${mathHtml(eq.caption)}</div></div>`).join('')}${a.bodyParagraphs.map((p) => `<p>${mathHtml(p)}</p>`).join('')}${extras}</article>`;
  }).join('');

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
  ${H12_ABSTRACT_PARAGRAPHS.map((p) => `<p>${mathHtml(p)}</p>`).join('')}
  <p><strong>Keywords:</strong> ${mathHtml(H12_META.keywords.join(' · '))}</p>
  <h2 class="chapter-title">Lists of Figures, Tables, Equations, Theorems &amp; Definitions</h2>
  ${frontMatterListsHtml}
  <h2 class="chapter-title">Foundational Five-Dimensional Equations (Category C)</h2>
  <div class="thm-box"><strong>Epistemic Note:</strong> ${mathHtml(H12_FOUNDATIONAL_EQUATIONS_NOTE)}</div>
  ${H12_MASTER_EQUATIONS.map((eq) => `<div class="eq-box"><div class="eq-main">${eq.unicodeHtml}</div><div class="eq-cap">${mathHtml(eq.label)} [${escHtml(eq.category)}] — ${mathHtml(eq.caption)}</div></div>`).join('')}
  <div class="thm-box"><h3>${mathHtml(H12_SCOPE_AND_NON_CLAIMS.title)}</h3><ul>${H12_SCOPE_AND_NON_CLAIMS.points.map((pt) => `<li>${mathHtml(pt)}</li>`).join('')}</ul></div>
  ${chapterHtml}
  <h2 class="chapter-title">References</h2>
  <ol>${H12_REFERENCES.map((r) => `<li>${mathHtml(r.citation)}</li>`).join('')}</ol>
  <h2 class="chapter-title">Consolidated Appendices (A–L)</h2>
  ${consolidatedAppendicesHtml}
</body>
</html>`;
}
