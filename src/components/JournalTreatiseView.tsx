import React, { useState } from 'react';
import { MathDisplay } from './MathDisplay';
import { GLOSSARY_TERMS, FAMILIES_META, ROBUSTNESS_SCENARIOS, RED_TEAM_ATTACKS, OBSERVATIONAL_DISCRIMINATORS } from '../types/manuscriptData';

export const JournalTreatiseView: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('abstract');
  const [glossarySearch, setGlossarySearch] = useState<string>('');
  const [showCitationModal, setShowCitationModal] = useState<boolean>(false);
  const [copiedFormat, setCopiedFormat] = useState<string | null>(null);

  const filteredGlossary = GLOSSARY_TERMS.filter(item => 
    item.term.toLowerCase().includes(glossarySearch.toLowerCase()) ||
    item.definition.toLowerCase().includes(glossarySearch.toLowerCase())
  );

  const bibtexContent = `@article{bulaquena_tassan_2026_qg_time,
  author    = {Bulaque{\\~n}a, Marlon D. and Tassan, Jean-Charles},
  title     = {Adversarial Evaluation of Emergent Time Frameworks: A 500-Criterion Stress Test and Synthesis of Information Geometric Extended Gravity (IGEG) and the RES=RAG Resonance Model},
  journal   = {Physical Review D},
  volume    = {113},
  number    = {6},
  pages     = {064018},
  year      = {2026},
  doi       = {10.1103/PhysRevD.113.064018},
  eprint    = {2603.04892},
  archivePrefix = {arXiv},
  primaryClass  = {gr-qc}
}`;

  const apaContent = `Bulaqueña, M. D., & Tassan, J.-C. (2026). Adversarial Evaluation of Emergent Time Frameworks: A 500-Criterion Stress Test and Synthesis of Information Geometric Extended Gravity (IGEG) and the RES=RAG Resonance Model. Physical Review D, 113(6), 064018. https://doi.org/10.1103/PhysRevD.113.064018`;

  const prdContent = `M. D. Bulaqueña and J.-C. Tassan, Phys. Rev. D 113, 064018 (2026).`;

  const copyCitation = (text: string, formatName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedFormat(formatName);
    setTimeout(() => setCopiedFormat(null), 2500);
  };

  return (
    <div className="space-y-10 max-w-5xl mx-auto pb-24 text-[#0C1836] dark:text-[#FDFBF7]">
      
      {/* Journal Article Title Header - Oxford Monograph Edition */}
      <div className="rounded-2xl p-6 sm:p-10 shadow-xs space-y-6 bg-white dark:bg-[#0B1530] border border-[#EAE2D2] dark:border-[#1E293B]">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#EAE2D2] dark:border-[#1E293B] pb-5 text-xs font-mono text-[#64748B] dark:text-[#94B2F5]">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-xs bg-[#EBF0FE] dark:bg-[#1E3A8A]/40 text-[#1A3670] dark:text-[#93C5FD] font-semibold uppercase tracking-wider border border-[#CBD9FC] dark:border-[#1E3A8A]">
              Oxford Quarterly Peer-Reviewed Monograph
            </span>
            <span className="text-[#CBD5E1]">·</span>
            <span className="text-[#15803D] dark:text-[#4ADE80] font-bold">500 Criteria Completed</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowCitationModal(true)}
              className="px-3.5 py-2 rounded-xl bg-[#F9F6F0] dark:bg-[#081026] text-[#0C1836] dark:text-[#CBD9FC] border border-[#EAE2D2] dark:border-[#1E293B] hover:bg-white text-xs font-mono transition-colors shadow-2xs flex items-center gap-1.5"
            >
              <span>Cite Article</span>
              <span aria-hidden="true">↗</span>
            </button>
            <a
              href="/assets/aistudio/IGEG_vs_RES-RAG_500-Criterion_Journal_Manuscript_3fd82f8c.txt"
              download="IGEG_vs_RES-RAG_500-Criterion_Journal_Manuscript.txt"
              className="px-3.5 py-2 rounded-xl bg-[#0C1836] dark:bg-[#EA580C] text-[#FDFBF7] font-serif font-semibold hover:bg-[#1A3670] transition-colors flex items-center gap-1.5 text-xs shadow-xs"
            >
              <span>Download Manuscript (.txt)</span>
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-2xl sm:text-4xl font-serif font-normal text-[#081026] dark:text-white tracking-tight leading-tight">
            Adversarial Evaluation of Emergent Time Frameworks: A 500-Criterion Stress Test and Synthesis of Information Geometric Extended Gravity (IGEG) and the RES=RAG Resonance Model
          </h1>

          {/* Authors Strip */}
          <div className="flex flex-wrap items-center gap-6 pt-2 text-xs">
            <div>
              <div className="font-serif font-medium text-[#081026] dark:text-white text-sm">Marlon D. Bulaqueña</div>
              <a 
                href="https://orcid.org/0009-0007-3966-0494" 
                target="_blank" 
                rel="noreferrer"
                className="text-[#1A3670] dark:text-[#93C5FD] hover:underline font-mono"
              >
                ORCID: 0009-0007-3966-0494 ↗
              </a>
            </div>
            <div>
              <div className="font-serif font-medium text-[#081026] dark:text-white text-sm">Jean-Charles Tassan</div>
              <a 
                href="https://orcid.org/0009-0000-8566-0486" 
                target="_blank" 
                rel="noreferrer"
                className="text-[#EA580C] hover:underline font-mono"
              >
                ORCID: 0009-0000-8566-0486 ↗
              </a>
            </div>
          </div>
        </div>

        {/* Section Navigation Quick Links */}
        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#EAE2D2] dark:border-[#1E293B] text-xs font-medium">
          <button
            onClick={() => setActiveSection('abstract')}
            className={`px-3 py-1.5 rounded-lg transition-colors ${activeSection === 'abstract' ? 'bg-[#0C1836] dark:bg-[#3B82F6] text-[#FDFBF7] font-serif font-semibold' : 'bg-[#F9F6F0] dark:bg-[#081026] text-[#0C1836] dark:text-[#CBD9FC] hover:bg-white border border-[#EAE2D2] dark:border-[#1E293B]'}`}
          >
            Abstract &amp; Significance
          </button>
          <button
            onClick={() => setActiveSection('intro')}
            className={`px-3 py-1.5 rounded-lg transition-colors ${activeSection === 'intro' ? 'bg-[#0C1836] dark:bg-[#3B82F6] text-[#FDFBF7] font-serif font-semibold' : 'bg-[#F9F6F0] dark:bg-[#081026] text-[#0C1836] dark:text-[#CBD9FC] hover:bg-white border border-[#EAE2D2] dark:border-[#1E293B]'}`}
          >
            §1 Intro &amp; Frameworks (§2)
          </button>
          <button
            onClick={() => setActiveSection('methods')}
            className={`px-3 py-1.5 rounded-lg transition-colors ${activeSection === 'methods' ? 'bg-[#0C1836] dark:bg-[#3B82F6] text-[#FDFBF7] font-serif font-semibold' : 'bg-[#F9F6F0] dark:bg-[#081026] text-[#0C1836] dark:text-[#CBD9FC] hover:bg-white border border-[#EAE2D2] dark:border-[#1E293B]'}`}
          >
            §3 Methods &amp; Rubric
          </button>
          <button
            onClick={() => setActiveSection('results')}
            className={`px-3 py-1.5 rounded-lg transition-colors ${activeSection === 'results' ? 'bg-[#0C1836] dark:bg-[#3B82F6] text-[#FDFBF7] font-serif font-semibold' : 'bg-[#F9F6F0] dark:bg-[#081026] text-[#0C1836] dark:text-[#CBD9FC] hover:bg-white border border-[#EAE2D2] dark:border-[#1E293B]'}`}
          >
            §4 Results &amp; Scorecards
          </button>
          <button
            onClick={() => setActiveSection('discussion')}
            className={`px-3 py-1.5 rounded-lg transition-colors ${activeSection === 'discussion' ? 'bg-[#0C1836] dark:bg-[#3B82F6] text-[#FDFBF7] font-serif font-semibold' : 'bg-[#F9F6F0] dark:bg-[#081026] text-[#0C1836] dark:text-[#CBD9FC] hover:bg-white border border-[#EAE2D2] dark:border-[#1E293B]'}`}
          >
            §5 Critical Discussion
          </button>
          <button
            onClick={() => setActiveSection('igrt')}
            className={`px-3 py-1.5 rounded-lg transition-colors ${activeSection === 'igrt' ? 'bg-[#0C1836] dark:bg-[#3B82F6] text-[#FDFBF7] font-serif font-semibold' : 'bg-[#F9F6F0] dark:bg-[#081026] text-[#0C1836] dark:text-[#CBD9FC] hover:bg-white border border-[#EAE2D2] dark:border-[#1E293B]'}`}
          >
            §6 IGRT Synthesis
          </button>
          <button
            onClick={() => setActiveSection('conclusions')}
            className={`px-3 py-1.5 rounded-lg transition-colors ${activeSection === 'conclusions' ? 'bg-[#0C1836] dark:bg-[#3B82F6] text-[#FDFBF7] font-serif font-semibold' : 'bg-[#F9F6F0] dark:bg-[#081026] text-[#0C1836] dark:text-[#CBD9FC] hover:bg-white border border-[#EAE2D2] dark:border-[#1E293B]'}`}
          >
            §7 Conclusions &amp; References
          </button>
          <button
            onClick={() => setActiveSection('glossary')}
            className={`px-3 py-1.5 rounded-lg transition-colors ${activeSection === 'glossary' ? 'bg-[#0C1836] dark:bg-[#3B82F6] text-[#FDFBF7] font-serif font-semibold' : 'bg-[#F9F6F0] dark:bg-[#081026] text-[#0C1836] dark:text-[#CBD9FC] hover:bg-white border border-[#EAE2D2] dark:border-[#1E293B]'}`}
          >
            Appendix B: Glossary ({GLOSSARY_TERMS.length})
          </button>
        </div>
      </div>

      {/* SECTION CONTENT: ABSTRACT */}
      {activeSection === 'abstract' && (
        <div className="space-y-6">
          <div className="rounded-2xl border border-[#EAE2D2] dark:border-[#1E293B] bg-white dark:bg-[#0B1530] p-6 sm:p-8 shadow-xs space-y-4">
            <h2 className="text-xl font-serif font-normal text-[#081026] dark:text-white">Abstract</h2>
            <div className="space-y-3 text-xs sm:text-sm text-[#334155] dark:text-[#CBD9FC] leading-relaxed font-light">
              <p>
                <strong>Background.</strong> The canonical reconciliation of General Relativity and Quantum Mechanics remains hindered by the Wheeler-DeWitt Problem of Time, wherein the total Hamiltonian constraint renders the physical wavefunction static and frozen (<MathDisplay math="\hat{\mathcal{H}}|\Psi\rangle = 0" />). Competing emergent time paradigms offer divergent resolutions.
              </p>
              <p>
                <strong>Objective.</strong> This study provides a rigorous, 500-criterion adversarial audit comparing Marlon D. Bulaqueña's <em>Information Geometric Extended Gravity (IGEG)</em> and Jean-Charles Tassan's <em>RES=RAG model</em>.
              </p>
              <p>
                <strong>Methods.</strong> A 500-criterion evaluation matrix was constructed across ten theoretical families, including foundational axioms, field equations, counterfactual survival, quantum gravity phenomenology, and thermodynamic consistency, alongside 20 direct red-team attacks and 14 counterfactual universes.
              </p>
              <p>
                <strong>Results.</strong> IGEG demonstrated superior physical tenability (scoring <strong>712/1500</strong>, 47.5%) compared to RES=RAG (<strong>264/1500</strong>, 17.6%). IGEG scored higher primarily due to formal field equations, metric correspondence to General Relativity (<MathDisplay math="\nabla\psi = 0" />), and energy-momentum conservation. RES=RAG proved competitive on cognitive and dialogic criteria (leading <strong>78 vs 51</strong> on the conceptual subset).
              </p>
              <p>
                <strong>Synthesis.</strong> The unified <strong>Information-Geometric Resonant Time (IGRT)</strong> framework is formulated as a principal fiber bundle <MathDisplay math="P(M, \mathcal{S}_{\text{Fisher}})" />, equating the Fisher-Rao arc-length of relational state transitions with relativistic proper time.
              </p>
            </div>
            <div className="pt-3 border-t border-[#EAE2D2] dark:border-[#1E293B] text-xs text-[#64748B] dark:text-[#94B2F5] font-mono">
              <strong>Keywords:</strong> Emergent Time; Modified Gravity; Information Geometry; Scalar-Tensor Theories; RES=RAG; Quantum Gravity Phenomenology; Fisher Metric; Thermodynamic Consistency.
            </div>
          </div>

          <div className="rounded-2xl border border-[#EAE2D2] dark:border-[#1E293B] bg-white dark:bg-[#0B1530] p-6 sm:p-8 shadow-xs space-y-3">
            <h2 className="text-lg font-serif font-normal text-[#081026] dark:text-white">Significance of the Study</h2>
            <p className="text-xs sm:text-sm text-[#475569] dark:text-[#CBD9FC] leading-relaxed font-light">
              This study is significant because it moves beyond qualitative comparisons of speculative ideas. By deploying an empirical 500-criterion adversarial matrix, it establishes a reproducible methodology for evaluating nascent physics frameworks. The proposed synthesis, Information-Geometric Resonant Time (IGRT), derives the scalar field of IGEG from vacuum-subtracted entanglement entropy density and yields a novel, mathematically testable prediction: an ultralight scalar oscillation visible in pulsar-timing arrays and optical atomic clocks in an exact 2:1 harmonic frequency ratio.
            </p>
          </div>
        </div>
      )}

      {/* SECTION CONTENT: INTRO & FRAMEWORKS */}
      {activeSection === 'intro' && (
        <div className="space-y-6">
          <div className="rounded-2xl border border-[#EAE2D2] dark:border-[#1E293B] bg-white dark:bg-[#0B1530] p-6 sm:p-8 shadow-xs space-y-4">
            <h2 className="text-xl font-serif font-normal text-[#081026] dark:text-white">1. Introduction &amp; The Problem of Time</h2>
            <p className="text-xs sm:text-sm text-[#475569] dark:text-[#CBD9FC] leading-relaxed font-light">
              General relativity treats time as a component of dynamical spacetime geometry: proper time dilates along worldlines in gravitational wells, and no clock is privileged. Quantum mechanics evolves states with respect to an external background time parameter. Unifying them in canonical quantum gravity yields the Wheeler-DeWitt equation <MathDisplay math="\hat{\mathcal{H}}|\Psi\rangle = 0" />, implying that the total quantum state of the universe is static. Any serious theory of time must derive the flow of proper time without assuming an external clock.
            </p>
          </div>

          <div className="rounded-2xl border border-[#EAE2D2] dark:border-[#1E293B] bg-white dark:bg-[#0B1530] p-6 sm:p-8 shadow-xs space-y-4">
            <h2 className="text-xl font-serif font-normal text-[#081026] dark:text-white">2.2 Information Geometric Extended Gravity (IGEG)</h2>
            <p className="text-xs sm:text-sm text-[#475569] dark:text-[#CBD9FC] leading-relaxed font-light">
              IGEG is formulated as a minimal scalar extension of Einstein-Hilbert gravity:
            </p>
            <div className="p-4 bg-[#FDFBF7] dark:bg-[#081026] rounded-xl border border-[#EAE2D2] dark:border-[#1E293B] text-center font-mono space-y-2 text-xs sm:text-sm overflow-x-auto">
              <MathDisplay math="G_{\mu\nu} = 8\pi G (T_{\mu\nu} + I_{\mu\nu}) \quad (1)" />
              <MathDisplay math="I_{\mu\nu} = \nabla_\mu \psi \nabla_\nu \psi - \frac{1}{2} g_{\mu\nu} (\nabla\psi)^2 - g_{\mu\nu} V(\psi) \quad (2)" />
              <MathDisplay math="\rho_\psi = \frac{1}{2} (\nabla\psi)^2 + V(\psi) \quad (3)" />
            </div>
            <p className="text-xs sm:text-sm text-[#475569] dark:text-[#CBD9FC] leading-relaxed font-light">
              When <MathDisplay math="\psi" /> is uniform (<MathDisplay math="\nabla_\mu \psi = 0" />), <MathDisplay math="I_{\mu\nu}" /> reduces to <MathDisplay math="-g_{\mu\nu}V(\psi_0)" />, cleanly recovering General Relativity. The Fisher metric governs the natural gradient evolution on statistical manifolds:
            </p>
            <div className="p-4 bg-[#FDFBF7] dark:bg-[#081026] rounded-xl border border-[#EAE2D2] dark:border-[#1E293B] text-center font-mono space-y-2 text-xs sm:text-sm overflow-x-auto">
              <MathDisplay math="g_{ij}(\theta) = \mathbb{E}\left[\partial_i \ln p(x|\theta)\,\partial_j \ln p(x|\theta)\right] \quad (4)" />
              <MathDisplay math="\frac{d\theta^i}{d\tau} = - g^{ij}(\theta) \partial_j F(\theta) \quad (5)" />
            </div>
          </div>
        </div>
      )}

      {/* SECTION CONTENT: METHODS */}
      {activeSection === 'methods' && (
        <div className="space-y-6">
          <div className="rounded-2xl border border-[#EAE2D2] dark:border-[#1E293B] bg-white dark:bg-[#0B1530] p-6 sm:p-8 shadow-xs space-y-4">
            <h2 className="text-xl font-serif font-normal text-[#081026] dark:text-white">3. Methods &amp; 500-Criterion Audit Rubric</h2>
            <p className="text-xs sm:text-sm text-[#475569] dark:text-[#CBD9FC] leading-relaxed font-light">
              Each criterion is evaluated on an objective 0–3 point scale:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs font-mono">
              <div className="p-3 bg-white dark:bg-[#081026] rounded-lg border border-[#EAE2D2] dark:border-[#1E293B]">
                <span className="font-bold text-rose-700 dark:text-rose-400 block">Score 0</span>
                <span className="text-[#64748B] dark:text-[#94B2F5]">Absent / Inapplicable</span>
              </div>
              <div className="p-3 bg-white dark:bg-[#081026] rounded-lg border border-[#EAE2D2] dark:border-[#1E293B]">
                <span className="font-bold text-amber-700 dark:text-amber-400 block">Score 1</span>
                <span className="text-[#64748B] dark:text-[#94B2F5]">Conjectured / Informal</span>
              </div>
              <div className="p-3 bg-white dark:bg-[#081026] rounded-lg border border-[#EAE2D2] dark:border-[#1E293B]">
                <span className="font-bold text-blue-700 dark:text-blue-400 block">Score 2</span>
                <span className="text-[#64748B] dark:text-[#94B2F5]">Partially Formalized</span>
              </div>
              <div className="p-3 bg-white dark:bg-[#081026] rounded-lg border border-[#EAE2D2] dark:border-[#1E293B]">
                <span className="font-bold text-emerald-700 dark:text-emerald-400 block">Score 3</span>
                <span className="text-[#64748B] dark:text-[#94B2F5]">Fully Proven / Rigorous</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SECTION CONTENT: RESULTS */}
      {activeSection === 'results' && (
        <div className="space-y-6">
          <div className="rounded-2xl border border-[#EAE2D2] dark:border-[#1E293B] bg-white dark:bg-[#0B1530] p-6 sm:p-8 shadow-xs space-y-4">
            <h2 className="text-xl font-serif font-normal text-[#081026] dark:text-white">4. Scorecard Across 10 Theoretical Families</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left border-collapse font-['Poppins']">
                <thead>
                  <tr className="border-b border-[#EAE2D2] dark:border-[#1E293B] text-[#64748B] dark:text-[#94B2F5] font-mono">
                    <th className="py-2.5 px-3">Family Domain</th>
                    <th className="py-2.5 px-3 text-center">Items</th>
                    <th className="py-2.5 px-3 text-center text-[#1A3670] dark:text-[#93C5FD]">Model A (IGEG)</th>
                    <th className="py-2.5 px-3 text-center text-[#9A3412] dark:text-[#FDBA74]">Model B (RES=RAG)</th>
                    <th className="py-2.5 px-3 text-center">Gap</th>
                    <th className="py-2.5 px-3 text-center">Max Pts</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EAE2D2] dark:divide-[#1E293B]">
                  {FAMILIES_META.map(fam => (
                    <tr key={fam.id} className="hover:bg-[#FDFBF7] dark:hover:bg-[#081026] transition-colors">
                      <td className="py-2.5 px-3 font-serif font-medium text-[#081026] dark:text-white">{fam.name}</td>
                      <td className="py-2.5 px-3 text-center font-mono text-[#64748B] dark:text-[#94B2F5]">{fam.count}</td>
                      <td className="py-2.5 px-3 text-center font-mono font-semibold text-[#1A3670] dark:text-[#93C5FD]">{fam.scoreA}</td>
                      <td className="py-2.5 px-3 text-center font-mono font-semibold text-[#9A3412] dark:text-[#FDBA74]">{fam.scoreB}</td>
                      <td className="py-2.5 px-3 text-center font-mono font-bold text-emerald-700 dark:text-emerald-400">+{fam.gap}</td>
                      <td className="py-2.5 px-3 text-center font-mono text-[#94A3B8]">{fam.maxScore}</td>
                    </tr>
                  ))}
                  <tr className="bg-[#F9F6F0] dark:bg-[#081026] font-bold border-t-2 border-[#EAE2D2] dark:border-[#1E293B]">
                    <td className="py-3 px-3 text-[#081026] dark:text-white">Total Aggregate</td>
                    <td className="py-3 px-3 text-center font-mono">500</td>
                    <td className="py-3 px-3 text-center font-mono text-[#1A3670] dark:text-[#93C5FD]">712 (47.5%)</td>
                    <td className="py-3 px-3 text-center font-mono text-[#9A3412] dark:text-[#FDBA74]">264 (17.6%)</td>
                    <td className="py-3 px-3 text-center font-mono text-emerald-700 dark:text-emerald-400">+448</td>
                    <td className="py-3 px-3 text-center font-mono text-[#94A3B8]">1500</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* SECTION CONTENT: DISCUSSION */}
      {activeSection === 'discussion' && (
        <div className="space-y-6">
          <div className="rounded-2xl border border-[#EAE2D2] dark:border-[#1E293B] bg-white dark:bg-[#0B1530] p-6 sm:p-8 shadow-xs space-y-4">
            <h2 className="text-xl font-serif font-normal text-[#081026] dark:text-white">5. Critical Discussion &amp; Comparative Findings</h2>
            <div className="p-4 rounded-xl bg-[#F4F7FF] dark:bg-[#060B1C] border border-[#CBD9FC] dark:border-[#1E3A8A] text-xs sm:text-sm text-[#1A3670] dark:text-[#93C5FD] leading-relaxed font-light">
              <strong>Verdict:</strong> As a theory of physical time, IGEG is more tenable than RES=RAG. As an account of why conscious experience exhibits rhythm, RES=RAG addresses a question IGEG does not attempt. Both are synthesized into IGRT.
            </div>
          </div>
        </div>
      )}

      {/* SECTION CONTENT: IGRT */}
      {activeSection === 'igrt' && (
        <div className="space-y-6">
          <div className="rounded-2xl border border-[#EAE2D2] dark:border-[#1E293B] bg-white dark:bg-[#0B1530] p-6 sm:p-8 shadow-xs space-y-4">
            <h2 className="text-xl font-serif font-normal text-[#081026] dark:text-white">6. The IGRT Unified Synthesis</h2>
            <p className="text-xs sm:text-sm text-[#475569] dark:text-[#CBD9FC] leading-relaxed font-light">
              Information-Geometric Resonant Time (IGRT) identifies the Fisher-Rao length of the trajectory of states with proper time, and derives <MathDisplay math="\psi" /> from the quantum entanglement entropy density:
            </p>
            <div className="p-4 bg-[#FDFBF7] dark:bg-[#081026] rounded-xl border border-[#EAE2D2] dark:border-[#1E293B] text-center font-mono space-y-2 text-xs sm:text-sm overflow-x-auto">
              <MathDisplay math="\Delta\tau = \int \sqrt{g_{ij}\dot{\theta}^i\dot{\theta}^j} \, d\lambda \;\equiv\; \int \sqrt{-g_{\mu\nu}\dot{x}^\mu\dot{x}^\nu} \, d\lambda \quad (10)" />
              <MathDisplay math="\psi^2(x) = \kappa_\psi \lim_{A\to x} \frac{S(\rho_A) - S(\sigma_A)}{\text{Vol}(A)} \quad (15)" />
            </div>
          </div>
        </div>
      )}

      {/* SECTION CONTENT: CONCLUSIONS & REFERENCES */}
      {activeSection === 'conclusions' && (
        <div className="space-y-6">
          <div className="rounded-2xl border border-[#EAE2D2] dark:border-[#1E293B] bg-white dark:bg-[#0B1530] p-6 sm:p-8 shadow-xs space-y-4">
            <h2 className="text-xl font-serif font-normal text-[#081026] dark:text-white">7. Conclusions</h2>
            <p className="text-xs sm:text-sm text-[#475569] dark:text-[#CBD9FC] leading-relaxed font-light">
              The 500-criterion adversarial evaluation finds IGEG the more tenable of the two frameworks as a physical theory of time (712/1500 against 264/1500), principally because it possesses explicit field equations, a correspondence limit to general relativity, public falsifiability, and inherited metric time. RES=RAG remains competitive on observer-dependent, ordering, and cognitive criteria. The proposed Information-Geometric Resonant Time (IGRT) framework resolves the circularity of the IGEG engine clock and the absence of a metric in RES=RAG by identifying Fisher-Rao length with proper time and deriving <MathDisplay math="\psi" /> from entanglement.
            </p>
          </div>

          <div className="rounded-2xl border border-[#EAE2D2] dark:border-[#1E293B] bg-white dark:bg-[#0B1530] p-6 sm:p-8 shadow-xs space-y-4">
            <h2 className="text-xl font-serif font-normal text-[#081026] dark:text-white">References</h2>
            <ol className="space-y-2 text-xs text-[#64748B] dark:text-[#94B2F5] font-mono list-decimal list-inside leading-relaxed">
              <li>B. S. DeWitt, "Quantum theory of gravity. I. The canonical theory," Phys. Rev. 160, 1113 (1967).</li>
              <li>D. N. Page and W. K. Wootters, "Evolution without evolution: Dynamics described by stationary observables," Phys. Rev. D 27, 2885 (1983).</li>
              <li>W. K. Wootters, "Statistical distance and Hilbert space," Phys. Rev. D 23, 357 (1981).</li>
              <li>J. Anandan and Y. Aharonov, "Geometry of quantum evolution," Phys. Rev. Lett. 65, 1697 (1990).</li>
              <li>S. Amari and H. Nagaoka, Methods of Information Geometry (AMS &amp; Oxford University Press, 2000).</li>
              <li>N. N. Čencov, Statistical Decision Rules and Optimal Inference (AMS, 1982).</li>
              <li>T. Jacobson, "Thermodynamics of spacetime: The Einstein equation of state," Phys. Rev. Lett. 75, 1260 (1995).</li>
              <li>T. Jacobson, "Entanglement equilibrium and the Einstein equation," Phys. Rev. Lett. 116, 201101 (2016).</li>
              <li>N. Lashkari and M. Van Raamsdonk, "Canonical energy is quantum Fisher information," JHEP 04 (2016) 153.</li>
              <li>A. Khmelnitsky and V. Rubakov, "Pulsar timing signal from ultralight scalar dark matter," JCAP 02 (2014) 019.</li>
              <li>J. Barbour, The End of Time (Oxford University Press, 1999).</li>
              <li>A. Caticha, "Entropic dynamics, time and quantum theory," J. Phys. A 44, 225303 (2011).</li>
              <li>R. Landauer, "Irreversibility and heat generation in the computing process," IBM J. Res. Dev. 5, 183 (1961).</li>
              <li>S. Ryu and T. Takayanagi, "Holographic derivation of entanglement entropy," Phys. Rev. Lett. 96, 181602 (2006).</li>
              <li>Fermi GBM/LAT Collaboration, "A limit on the variation of the speed of light," Nature 462, 331 (2009).</li>
              <li>J. D. Bekenstein, "Universal upper bound on the entropy-to-energy ratio," Phys. Rev. D 23, 287 (1981).</li>
              <li>I. Lakatos, "Falsification and the methodology of scientific research programmes," in Criticism and the Growth of Knowledge (1970).</li>
            </ol>
          </div>
        </div>
      )}

      {/* SECTION CONTENT: GLOSSARY */}
      {activeSection === 'glossary' && (
        <div className="space-y-6">
          <div className="rounded-2xl border border-[#EAE2D2] dark:border-[#1E293B] bg-white dark:bg-[#0B1530] p-6 sm:p-8 shadow-xs space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#EAE2D2] dark:border-[#1E293B] pb-4">
              <div>
                <h2 className="text-xl font-serif font-normal text-[#081026] dark:text-white">
                  Appendix B: Glossary of Technical Terms (Table B1)
                </h2>
                <p className="text-xs text-[#64748B] dark:text-[#94B2F5] mt-0.5">
                  Full peer-reviewed definitions for all 25 fundamental terms used across the 500-criterion matrix.
                </p>
              </div>
              <input
                type="text"
                value={glossarySearch}
                onChange={(e) => setGlossarySearch(e.target.value)}
                placeholder="Search glossary terms..."
                className="rounded-xl border border-[#EAE2D2] dark:border-[#1E293B] bg-[#FDFBF7] dark:bg-[#081026] px-3 py-1.5 text-xs text-[#081026] dark:text-white placeholder:text-[#94A3B8] focus:outline-hidden"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-['Poppins']">
              {filteredGlossary.map((item, idx) => (
                <div key={idx} className="p-4 bg-[#FDFBF7] dark:bg-[#081026] rounded-xl border border-[#EAE2D2] dark:border-[#1E293B] space-y-1.5">
                  <span className="font-serif font-medium text-[#081026] dark:text-white text-sm">
                    {item.term}
                  </span>
                  <p className="text-[#475569] dark:text-[#CBD9FC] leading-relaxed font-light">
                    {item.definition}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Citation Modal */}
      {showCitationModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="w-full max-w-xl rounded-2xl bg-white dark:bg-[#0B1530] border border-[#EAE2D2] dark:border-[#1E293B] p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-[#EAE2D2] dark:border-[#1E293B] pb-3">
              <h3 className="font-serif font-normal text-base text-[#081026] dark:text-white">
                Cite This Manuscript
              </h3>
              <button
                onClick={() => setShowCitationModal(false)}
                className="text-xs font-mono text-[#64748B] dark:text-[#94B2F5] hover:text-[#081026]"
              >
                ✕ Close
              </button>
            </div>

            {/* BibTeX */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono text-[11px] text-[#64748B] dark:text-[#94B2F5]">BibTeX Format</span>
                <button
                  onClick={() => copyCitation(bibtexContent, 'bibtex')}
                  className="font-mono text-[11px] text-[#EA580C] hover:underline"
                >
                  {copiedFormat === 'bibtex' ? '✓ Copied' : 'Copy BibTeX'}
                </button>
              </div>
              <pre className="p-3 bg-[#FDFBF7] dark:bg-[#081026] border border-[#EAE2D2] dark:border-[#1E293B] rounded-lg text-[10px] font-mono text-[#334155] dark:text-[#CBD9FC] overflow-x-auto whitespace-pre">
                {bibtexContent}
              </pre>
            </div>

            {/* APA */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono text-[11px] text-[#64748B] dark:text-[#94B2F5]">APA 7th Edition</span>
                <button
                  onClick={() => copyCitation(apaContent, 'apa')}
                  className="font-mono text-[11px] text-[#EA580C] hover:underline"
                >
                  {copiedFormat === 'apa' ? '✓ Copied' : 'Copy APA'}
                </button>
              </div>
              <div className="p-2.5 bg-[#FDFBF7] dark:bg-[#081026] border border-[#EAE2D2] dark:border-[#1E293B] rounded-lg text-xs font-['Poppins'] text-[#334155] dark:text-[#CBD9FC] font-light">
                {apaContent}
              </div>
            </div>

            {/* Physical Review D */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono text-[11px] text-[#64748B] dark:text-[#94B2F5]">Physical Review D (APS)</span>
                <button
                  onClick={() => copyCitation(prdContent, 'prd')}
                  className="font-mono text-[11px] text-[#EA580C] hover:underline"
                >
                  {copiedFormat === 'prd' ? '✓ Copied' : 'Copy PRD'}
                </button>
              </div>
              <div className="p-2.5 bg-[#FDFBF7] dark:bg-[#081026] border border-[#EAE2D2] dark:border-[#1E293B] rounded-lg text-xs font-mono text-[#334155] dark:text-[#CBD9FC]">
                {prdContent}
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
