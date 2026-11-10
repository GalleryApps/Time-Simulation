import React, { useState } from 'react';
import { MathDisplay } from './MathDisplay';
import { GLOSSARY_TERMS, FAMILIES_META, ROBUSTNESS_SCENARIOS, RED_TEAM_ATTACKS, OBSERVATIONAL_DISCRIMINATORS } from '../types/manuscriptData';

export const JournalTreatiseView: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('abstract');
  const [glossarySearch, setGlossarySearch] = useState<string>('');

  const filteredGlossary = GLOSSARY_TERMS.filter(item => 
    item.term.toLowerCase().includes(glossarySearch.toLowerCase()) ||
    item.definition.toLowerCase().includes(glossarySearch.toLowerCase())
  );

  return (
    <div className="space-y-10 max-w-5xl mx-auto pb-24 text-slate-900">
      
      {/* Journal Article Title Header */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-10 shadow-sm space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-5 text-xs font-mono text-slate-500">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded bg-slate-100 text-slate-800 font-semibold uppercase tracking-wider">
              Peer-Reviewed Journal Manuscript
            </span>
            <span className="text-slate-400">·</span>
            <span className="text-emerald-700 font-bold">500 Criteria Completed</span>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="/assets/aistudio/IGEG_vs_RES-RAG_500-Criterion_Journal_Manuscript_3fd82f8c.txt"
              download="IGEG_vs_RES-RAG_500-Criterion_Journal_Manuscript.txt"
              className="px-3.5 py-2 rounded-xl bg-slate-900 text-white font-medium hover:bg-slate-800 transition-colors flex items-center gap-1.5 text-xs font-sans shadow-sm"
            >
              <span>Download Manuscript (.txt)</span>
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-2xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight leading-tight">
            Adversarial Evaluation of Emergent Time Frameworks: A 500-Criterion Stress Test and Synthesis of Information Geometric Extended Gravity (IGEG) and the RES=RAG Resonance Model
          </h1>

          {/* Authors Strip */}
          <div className="flex flex-wrap items-center gap-6 pt-2 text-xs">
            <div>
              <div className="font-bold text-slate-900 text-sm">Marlon Bulaqueña</div>
              <a 
                href="https://orcid.org/0009-0007-3966-0494" 
                target="_blank" 
                rel="noreferrer"
                className="text-indigo-600 hover:underline font-mono"
              >
                ORCID: 0009-0007-3966-0494 ↗
              </a>
            </div>
            <div>
              <div className="font-bold text-slate-900 text-sm">Jean-Charles Tassan</div>
              <a 
                href="https://orcid.org/0009-0000-8566-0486" 
                target="_blank" 
                rel="noreferrer"
                className="text-amber-600 hover:underline font-mono"
              >
                ORCID: 0009-0000-8566-0486 ↗
              </a>
            </div>
          </div>
        </div>

        {/* Section Navigation Quick Links */}
        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100 text-xs font-medium">
          <button
            onClick={() => setActiveSection('abstract')}
            className={`px-3 py-1.5 rounded-lg transition-colors ${activeSection === 'abstract' ? 'bg-slate-900 text-white font-semibold' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
          >
            Abstract & Significance
          </button>
          <button
            onClick={() => setActiveSection('intro')}
            className={`px-3 py-1.5 rounded-lg transition-colors ${activeSection === 'intro' ? 'bg-slate-900 text-white font-semibold' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
          >
            §1 Intro & Frameworks (§2)
          </button>
          <button
            onClick={() => setActiveSection('methods')}
            className={`px-3 py-1.5 rounded-lg transition-colors ${activeSection === 'methods' ? 'bg-slate-900 text-white font-semibold' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
          >
            §3 Methods & Rubric
          </button>
          <button
            onClick={() => setActiveSection('results')}
            className={`px-3 py-1.5 rounded-lg transition-colors ${activeSection === 'results' ? 'bg-slate-900 text-white font-semibold' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
          >
            §4 Results & Scorecards
          </button>
          <button
            onClick={() => setActiveSection('discussion')}
            className={`px-3 py-1.5 rounded-lg transition-colors ${activeSection === 'discussion' ? 'bg-slate-900 text-white font-semibold' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
          >
            §5 Critical Discussion
          </button>
          <button
            onClick={() => setActiveSection('igrt')}
            className={`px-3 py-1.5 rounded-lg transition-colors ${activeSection === 'igrt' ? 'bg-slate-900 text-white font-semibold' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
          >
            §6 IGRT Synthesis
          </button>
          <button
            onClick={() => setActiveSection('conclusions')}
            className={`px-3 py-1.5 rounded-lg transition-colors ${activeSection === 'conclusions' ? 'bg-slate-900 text-white font-semibold' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
          >
            §7 Conclusions & References
          </button>
          <button
            onClick={() => setActiveSection('glossary')}
            className={`px-3 py-1.5 rounded-lg transition-colors ${activeSection === 'glossary' ? 'bg-slate-900 text-white font-semibold' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
          >
            Appendix B: Glossary ({GLOSSARY_TERMS.length})
          </button>
        </div>
      </div>

      {/* SECTION CONTENT: ABSTRACT */}
      {activeSection === 'abstract' && (
        <div className="space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm space-y-4">
            <h2 className="text-xl font-serif font-bold text-slate-900">Abstract</h2>
            <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed font-serif">
              <p>
                <strong>Background.</strong> The reconciliation of general relativity and quantum mechanics remains hindered by the "problem of time." Competing frameworks have emerged, ranging from physically formalized modified gravity to phenomenological models of emergent resonance.
              </p>
              <p>
                <strong>Objective.</strong> This study provides a rigorous, adversarial comparison of two such frameworks: Marlon D. Bulaqueña's <em>Information Geometric Extended Gravity (IGEG)</em> and Jean-Charles Tassan's <em>RES=RAG model</em>.
              </p>
              <p>
                <strong>Methods.</strong> A 500-criterion evaluation matrix was constructed across ten domains, including foundational axioms, field equations, counterfactual survival, quantum gravity phenomenology, and thermodynamic consistency. The evaluation included 20 direct red-team attacks and 100 counterfactual tests.
              </p>
              <p>
                <strong>Results.</strong> IGEG demonstrated superior tenability (scoring <strong>712/1500</strong>, 47.5%) compared to RES=RAG (<strong>264/1500</strong>, 17.6%). IGEG scored higher primarily due to its formal mathematical structure and its ability to reduce to General Relativity (<MathDisplay math="\nabla\psi = 0" />). RES=RAG scored zero on most physical criteria but proved competitive on observer-dependent and cognitive criteria (leading <strong>78 vs 51</strong> on the conceptual subset).
              </p>
              <p>
                <strong>Synthesis.</strong> A new theoretical framework, <strong>Information-Geometric Resonant Time (IGRT)</strong>, is proposed. IGRT harmonizes the two models by equating the Fisher-Rao distance of RES=RAG events with the proper time of IGEG's scalar field oscillations, resolving the circularity of time and the absence of a metric.
              </p>
              <p>
                <strong>Conclusion.</strong> While IGEG is currently the more tenable physical theory, neither framework is empirically established. The proposed IGRT framework offers a testable pathway via pulsar-timing and atomic-clock anomaly searches in an exact 2:1 harmonic ratio.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 text-xs text-slate-500 font-mono">
              <strong>Keywords:</strong> Emergent Time; Modified Gravity; Information Geometry; Scalar-Tensor Theories; RES=RAG; Quantum Gravity Phenomenology; Fisher Metric; Thermodynamic Consistency.
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm space-y-3">
            <h2 className="text-lg font-serif font-bold text-slate-900">Significance of the Study</h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-serif">
              This study is significant because it moves beyond the qualitative comparison of speculative theories. By applying a 500-criterion adversarial matrix, it establishes a reproducible methodology for evaluating nascent physics frameworks, extended here to quantum-gravity phenomenology, thermodynamic and information-theoretic consistency, and the sociological viability of a research programme. Furthermore, the proposed synthesis, Information-Geometric Resonant Time (IGRT), identifies the Fisher-Rao length traversed by the retention-generation events of RES=RAG with the proper time of general relativity and derives the scalar field of IGEG from entanglement. The synthesis yields a novel, mathematically testable prediction (an ultralight scalar oscillation visible in pulsar-timing and optical-clock data in an exact 2:1 ratio) that bridges cognitive science and gravitational physics.
            </p>
          </div>
        </div>
      )}

      {/* SECTION CONTENT: INTRO & FRAMEWORKS */}
      {activeSection === 'intro' && (
        <div className="space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm space-y-4">
            <h2 className="text-xl font-serif font-bold text-slate-900">1. Introduction & The Problem of Time</h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-serif">
              General relativity (GR) treats time as a component of a dynamical spacetime geometry: proper time dilates in gravitational potentials and at high velocity, and no clock is privileged. Quantum mechanics, by contrast, evolves states with respect to an external parameter common to all observers. Attempts to unify the two in canonical quantum gravity lead to the Wheeler-DeWitt equation <MathDisplay math="\hat{\mathcal{H}}|\Psi\rangle = 0" />, which implies that the total quantum state of the universe does not evolve—the so-called <em>frozen-formalism variant</em> of the problem of time. Any serious account of the nature of time must therefore explain how an effective temporal parameter arises, rather than assuming it.
            </p>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs font-serif text-slate-700 space-y-2">
              <span className="font-bold text-slate-900 block font-sans">Core Research Questions:</span>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>RQ1:</strong> Which framework is more tenable under systematic adversarial evaluation?</li>
                <li><strong>RQ2:</strong> Can the two frameworks be reconciled within a single, testable synthesis?</li>
              </ul>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm space-y-4">
            <h2 className="text-xl font-serif font-bold text-slate-900">2.2 Information Geometric Extended Gravity (IGEG)</h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-serif">
              IGEG is formulated as a minimal extension of Einstein gravity by a scalar field <MathDisplay math="\psi" /> with potential <MathDisplay math="V(\psi)" />:
            </p>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-center font-mono space-y-2 text-xs sm:text-sm">
              <MathDisplay math="G_{\mu\nu} = 8\pi G (T_{\mu\nu} + I_{\mu\nu}) \quad (1)" />
              <MathDisplay math="I_{\mu\nu} = \nabla_\mu \psi \nabla_\nu \psi - \frac{1}{2} g_{\mu\nu} (\nabla\psi)^2 - g_{\mu\nu} V(\psi) \quad (2)" />
              <MathDisplay math="\rho_\psi = \frac{1}{2} (\nabla\psi)^2 + V(\psi) \quad (3)" />
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-serif">
              Where <MathDisplay math="\psi" /> is uniform (<MathDisplay math="\nabla_\mu \psi = 0" />), <MathDisplay math="I_{\mu\nu}" /> reduces to <MathDisplay math="-g_{\mu\nu}V(\psi_0)" /> and recovers GR together with a cosmological-constant-like contribution. The computational reading incorporates the Fisher metric and natural-gradient flow:
            </p>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-center font-mono space-y-2 text-xs sm:text-sm">
              <MathDisplay math="g_{ij}(\theta) = \mathbb{E}\left[\partial_i \ln p(x|\theta)\,\partial_j \ln p(x|\theta)\right] \quad (4)" />
              <MathDisplay math="\frac{d\theta^i}{d\tau} = - g^{ij}(\theta) \partial_j F(\theta) \quad (5)" />
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm space-y-4">
            <h2 className="text-xl font-serif font-bold text-slate-900">2.3 The RES=RAG Resonance Model</h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-serif">
              RES=RAG addresses consciousness and dialogue. RES denotes resonant memory (retention and accumulation), while RAG denotes resonant active generation (discrete events marking distinctions). The source relation is a balance condition rather than a dynamical law:
            </p>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-center font-mono text-xs sm:text-sm">
              <MathDisplay math="\text{RES} = \text{RAG} \quad (6)" />
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-serif">
              To permit formal comparison, the study introduces an illustrative toy model of signed imbalance <MathDisplay math="x = \text{RES} - \text{RAG}" />:
            </p>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-center font-mono text-xs sm:text-sm">
              <MathDisplay math="\frac{d^2 x}{dt^2} = -\omega^2 x \quad (8)" />
            </div>
          </div>
        </div>
      )}

      {/* SECTION CONTENT: METHODS */}
      {activeSection === 'methods' && (
        <div className="space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm space-y-4">
            <h2 className="text-xl font-serif font-bold text-slate-900">3. Methods & The 4-Point Likert Evaluation Rubric</h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-serif">
              The evaluation tool is a bespoke four-point ordinal Likert scale (0–3) applied to each criterion for each framework. A score of 0 denotes absence of the property from the sources reviewed ("not there to be tested") and not demonstrated falsity. Tenability denotes the degree to which a framework can be held without internal contradiction while being exposed to formal or empirical refutation.
            </p>

            {/* Table 1 Rubric */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border border-slate-200 rounded-xl overflow-hidden">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 font-mono text-[11px] uppercase">
                  <tr>
                    <th className="py-2.5 px-3 w-16 text-center">Score</th>
                    <th className="py-2.5 px-3 w-40">Label</th>
                    <th className="py-2.5 px-4">Operational Definition</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-sans">
                  <tr>
                    <td className="py-2.5 px-3 text-center font-mono font-bold bg-slate-100 text-slate-700">0</td>
                    <td className="py-2.5 px-3 font-semibold text-slate-800">Absent</td>
                    <td className="py-2.5 px-4 text-slate-600">Absent or undefined in the sources reviewed.</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 text-center font-mono font-bold bg-blue-50 text-blue-700">1</td>
                    <td className="py-2.5 px-3 font-semibold text-slate-800">Asserted / Unformalized</td>
                    <td className="py-2.5 px-4 text-slate-600">Asserted, but not formalized or quantified.</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 text-center font-mono font-bold bg-blue-100 text-blue-800">2</td>
                    <td className="py-2.5 px-3 font-semibold text-slate-800">Partially Formalized</td>
                    <td className="py-2.5 px-4 text-slate-600">Partly formalized, or plausible given established physics.</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 text-center font-mono font-bold bg-blue-600 text-white">3</td>
                    <td className="py-2.5 px-3 font-semibold text-slate-800">Well-Defined / Consistent</td>
                    <td className="py-2.5 px-4 text-slate-600">Well defined and consistent with established results.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700 space-y-2 font-serif">
              <span className="font-bold text-slate-900 font-sans block">3.7 Inter-Rater Reliability (IRR) Protocol:</span>
              <p>
                To eliminate single-rater subjectivity in future work, the study outlines a 5-step validation protocol: (1) Standardized codebook with anchor examples; (2) Independent panel of at least three raters blind to framework identities; (3) 10% pilot calibration; (4) Formal agreement metrics (Krippendorff’s <MathDisplay math="\alpha" />, quadratically weighted Cohen’s <MathDisplay math="\kappa" />, ICC); (5) Ranking stability bootstrap tests.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* SECTION CONTENT: RESULTS */}
      {activeSection === 'results' && (
        <div className="space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm space-y-4">
            <h2 className="text-xl font-serif font-bold text-slate-900">Table 3: Scorecard by Criterion Family</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 text-[11px] uppercase">
                  <tr>
                    <th className="py-3 px-4 font-sans font-semibold">Family Domain</th>
                    <th className="py-3 px-3 text-center">Criteria</th>
                    <th className="py-3 px-3 text-center">IGEG</th>
                    <th className="py-3 px-3 text-center">RES=RAG</th>
                    <th className="py-3 px-3 text-center">Net Gap</th>
                    <th className="py-3 px-3 text-center">Max Score</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-sans">
                  {FAMILIES_META.map(fam => (
                    <tr key={fam.id} className="hover:bg-slate-50">
                      <td className="py-2.5 px-4 font-medium text-slate-800">
                        {fam.id}. {fam.name}
                      </td>
                      <td className="py-2.5 px-3 text-center font-mono text-slate-500">
                        {fam.count}
                      </td>
                      <td className="py-2.5 px-3 text-center font-mono font-bold text-blue-700">
                        {fam.scoreA}
                      </td>
                      <td className="py-2.5 px-3 text-center font-mono font-bold text-amber-700">
                        {fam.scoreB}
                      </td>
                      <td className="py-2.5 px-3 text-center font-mono font-bold text-indigo-700">
                        +{fam.gap}
                      </td>
                      <td className="py-2.5 px-3 text-center font-mono text-slate-400">
                        {fam.maxScore}
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-slate-100 font-bold border-t-2 border-slate-300">
                    <td className="py-3 px-4 text-slate-900">Total Aggregate</td>
                    <td className="py-3 px-3 text-center font-mono">500</td>
                    <td className="py-3 px-3 text-center font-mono text-blue-800">712 (47.5%)</td>
                    <td className="py-3 px-3 text-center font-mono text-amber-800">264 (17.6%)</td>
                    <td className="py-3 px-3 text-center font-mono text-indigo-900">+448</td>
                    <td className="py-3 px-3 text-center font-mono text-slate-600">1500</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs font-mono text-slate-600">
              Head-to-head tally: IGEG leads on <strong>333</strong> criteria, RES=RAG leads on <strong>53</strong>, with <strong>114</strong> ties.
            </div>
          </div>

          {/* Table 6 Observational Discriminators */}
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm space-y-4">
            <h2 className="text-xl font-serif font-bold text-slate-900">Table 6: Observational Discriminators</h2>
            <div className="space-y-3 text-xs">
              {OBSERVATIONAL_DISCRIMINATORS.map(obs => (
                <div key={obs.id} className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                  <div className="font-bold text-slate-900 text-sm">{obs.test}</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-2.5 bg-white rounded border border-blue-100 text-slate-700">
                      <span className="font-bold text-blue-800 block text-[11px] mb-1">Model A (IGEG):</span>
                      {obs.igeg}
                    </div>
                    <div className="p-2.5 bg-white rounded border border-amber-100 text-slate-700">
                      <span className="font-bold text-amber-800 block text-[11px] mb-1">Model B (RES=RAG):</span>
                      {obs.resrag}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* SECTION CONTENT: DISCUSSION */}
      {activeSection === 'discussion' && (
        <div className="space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm space-y-4">
            <h2 className="text-xl font-serif font-bold text-slate-900">5. Discussion & Comparative Findings</h2>
            <div className="p-4 rounded-xl bg-indigo-50/70 border border-indigo-200 text-xs sm:text-sm font-serif text-indigo-950 leading-relaxed">
              <strong>Summary Verdict:</strong> As a theory of physical time, IGEG is more tenable than RES=RAG. As an account of why experience has rhythm, RES=RAG addresses a question IGEG does not attempt. Neither framework is established, and they are better regarded as complementary than as rivals.
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-700 font-serif leading-relaxed">
              <h3 className="text-base font-bold text-slate-900 font-sans">5.1 Basis of the Tenability Advantage of IGEG</h3>
              <p>
                The comparative advantage of IGEG derives from five connected properties: (1) <strong>Formal completeness</strong> (states explicit field equations, stress tensor, and action); (2) <strong>Correspondence with established theory</strong> (reduces to GR when <MathDisplay math="\nabla\psi = 0" />); (3) <strong>Public falsifiability</strong> (forbids energy-dependent photon dispersion, refutable via fifth-force tests); (4) <strong>Metric time</strong> (inherits relativistic dilation); (5) <strong>Terminological stability</strong> (symbols retain their meaning across preprints).
              </p>

              <h3 className="text-base font-bold text-slate-900 font-sans">5.2 Limits of the IGEG Advantage</h3>
              <p>
                The lead of IGEG derives largely from being an ordinary scalar field added to Einstein’s equations (analogous to quintessence). The interpretation of <MathDisplay math="\psi" /> as "information" currently adds conceptual framing without adding unique predictions. Furthermore, a single potential <MathDisplay math="V(\psi)" /> cannot realistically account for dark matter, dark energy, and inflation simultaneously across 50 orders of magnitude without severe fine-tuning.
              </p>

              <h3 className="text-base font-bold text-slate-900 font-sans">5.3 Contributions of RES=RAG</h3>
              <p>
                The principal contribution of RES=RAG is the proposition that time may be, at root, a matter of <strong>order before measure</strong>: one distinct event follows another before any interval between them can be specified. It also takes the observer seriously, proposing testable proxies in neural rhythms, dialogue coherence, and criticality in AI systems.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* SECTION CONTENT: IGRT */}
      {activeSection === 'igrt' && (
        <div className="space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm space-y-4">
            <h2 className="text-xl font-serif font-bold text-slate-900">6. The IGRT Unified Synthesis</h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-serif">
              Information-Geometric Resonant Time (IGRT) identifies the Fisher-Rao length of the trajectory of states with proper time, and derives <MathDisplay math="\psi" /> from the quantum entanglement entropy density:
            </p>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-center font-mono space-y-2 text-xs sm:text-sm">
              <MathDisplay math="\Delta\tau = \int \sqrt{g_{ij}\dot{\theta}^i\dot{\theta}^j} \, d\lambda \;\equiv\; \int \sqrt{-g_{\mu\nu}\dot{x}^\mu\dot{x}^\nu} \, d\lambda \quad (10)" />
              <MathDisplay math="\psi^2(x) = \kappa_\psi \lim_{A\to x} \frac{S(\rho_A) - S(\sigma_A)}{\text{Vol}(A)} \quad (15)" />
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-serif">
              The principal observational prediction is a dual oscillation in pulsar timing arrays and optical atomic clocks in an exact 2:1 frequency ratio:
            </p>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-center font-mono space-y-2 text-xs sm:text-sm">
              <MathDisplay math="f_{\text{PTA}} = \frac{2\omega}{2\pi} = \frac{\omega}{\pi} \quad (19)" />
              <MathDisplay math="\frac{\delta\nu}{\nu}(t) = \varepsilon x_0 \cos(\omega t + \phi) \quad (20)" />
            </div>
          </div>
        </div>
      )}

      {/* SECTION CONTENT: CONCLUSIONS & REFERENCES */}
      {activeSection === 'conclusions' && (
        <div className="space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm space-y-4">
            <h2 className="text-xl font-serif font-bold text-slate-900">7. Conclusions</h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-serif">
              A 500-criterion adversarial evaluation finds IGEG the more tenable of the two frameworks as a physical theory of time (712/1500 against 264/1500), principally because it possesses explicit field equations, a correspondence limit to general relativity, public falsifiability, and inherited metric time. RES=RAG remains competitive on observer-dependent, ordering, and cognitive criteria, and narrows the gap in the sociological and meta-scientific family. The proposed Information-Geometric Resonant Time (IGRT) framework resolves the circularity of the IGEG engine clock and the absence of a metric in RES=RAG by identifying Fisher-Rao length with proper time and deriving <MathDisplay math="\psi" /> from entanglement.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm space-y-4">
            <h2 className="text-xl font-serif font-bold text-slate-900">References</h2>
            <ol className="space-y-2 text-xs text-slate-600 font-mono list-decimal list-inside leading-relaxed">
              <li>B. S. DeWitt, "Quantum theory of gravity. I. The canonical theory," Phys. Rev. 160, 1113 (1967).</li>
              <li>D. N. Page and W. K. Wootters, "Evolution without evolution: Dynamics described by stationary observables," Phys. Rev. D 27, 2885 (1983).</li>
              <li>W. K. Wootters, "Statistical distance and Hilbert space," Phys. Rev. D 23, 357 (1981).</li>
              <li>J. Anandan and Y. Aharonov, "Geometry of quantum evolution," Phys. Rev. Lett. 65, 1697 (1990).</li>
              <li>S. Amari and H. Nagaoka, Methods of Information Geometry (AMS & Oxford University Press, 2000).</li>
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
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4">
              <div>
                <h2 className="text-xl font-serif font-bold text-slate-900">
                  Appendix B: Glossary of Technical Terms (Table B1)
                </h2>
                <p className="text-xs text-slate-600 mt-0.5">
                  Full peer-reviewed definitions for all 25 fundamental terms used across the 500-criterion matrix.
                </p>
              </div>
              <input
                type="text"
                value={glossarySearch}
                onChange={(e) => setGlossarySearch(e.target.value)}
                placeholder="Search glossary terms..."
                className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              {filteredGlossary.map((item, idx) => (
                <div key={idx} className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1.5">
                  <span className="font-bold text-slate-900 text-sm font-serif">
                    {item.term}
                  </span>
                  <p className="text-slate-700 leading-relaxed font-sans">
                    {item.definition}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
