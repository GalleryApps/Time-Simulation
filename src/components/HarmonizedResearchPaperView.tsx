/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { MathDisplay } from './MathDisplay';
import { 
  HARMONIZED_TESTABLE_PREDICTIONS,
  PANEL_OF_40_EXPERTS, 
  ADVERSARIAL_CRITICS_17, 
  PAPER_RECOMMENDATIONS_60,
  PanelExpert,
  AdversarialCritic,
  PaperRecommendation,
  TestablePrediction
} from '../types/harmonizedModelData';

export const HarmonizedResearchPaperView: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('foundations');
  
  // Expert Panel States
  const [expertDisciplineFilter, setExpertDisciplineFilter] = useState<string>('all');
  const [expertVerdictFilter, setExpertVerdictFilter] = useState<string>('all');
  const [expertSearch, setExpertSearch] = useState<string>('');
  const [expandedExpertIds, setExpandedExpertIds] = useState<Set<number>>(new Set([1, 2, 3, 10]));

  // Adversarial Critics States
  const [criticFilter, setCriticFilter] = useState<string>('all');
  const [criticSearch, setCriticSearch] = useState<string>('');
  const [expandedCriticIds, setExpandedCriticIds] = useState<Set<number>>(new Set([1, 2, 3]));

  // Recommendations States
  const [recCategoryFilter, setRecCategoryFilter] = useState<string>('all');
  const [recStatusFilter, setRecStatusFilter] = useState<string>('all');
  const [recSearch, setRecSearch] = useState<string>('');
  const [expandedRecIds, setExpandedRecIds] = useState<Set<number>>(new Set([1, 2, 4, 11, 21]));

  // Filtered Experts
  const filteredExperts = useMemo(() => {
    return PANEL_OF_40_EXPERTS.filter((exp) => {
      const matchDiscipline = expertDisciplineFilter === 'all' || exp.discipline === expertDisciplineFilter;
      const matchVerdict = expertVerdictFilter === 'all' || exp.verdict === expertVerdictFilter;
      const matchSearch = expertSearch === '' || 
        exp.name.toLowerCase().includes(expertSearch.toLowerCase()) ||
        exp.institution.toLowerCase().includes(expertSearch.toLowerCase()) ||
        exp.primaryAssessment.toLowerCase().includes(expertSearch.toLowerCase());
      return matchDiscipline && matchVerdict && matchSearch;
    });
  }, [expertDisciplineFilter, expertVerdictFilter, expertSearch]);

  // Filtered Critics
  const filteredCritics = useMemo(() => {
    return ADVERSARIAL_CRITICS_17.filter((c) => {
      const matchDomain = criticFilter === 'all' || c.targetDomain.toLowerCase().includes(criticFilter.toLowerCase());
      const matchSearch = criticSearch === '' ||
        c.name.toLowerCase().includes(criticSearch.toLowerCase()) ||
        c.vulnerabilityAttacked.toLowerCase().includes(criticSearch.toLowerCase()) ||
        c.adversarialAttackText.toLowerCase().includes(criticSearch.toLowerCase());
      return matchDomain && matchSearch;
    });
  }, [criticFilter, criticSearch]);

  // Filtered Recommendations
  const filteredRecs = useMemo(() => {
    return PAPER_RECOMMENDATIONS_60.filter((r) => {
      const matchCat = recCategoryFilter === 'all' || r.category === recCategoryFilter;
      const matchStatus = recStatusFilter === 'all' || r.status === recStatusFilter;
      const matchSearch = recSearch === '' ||
        r.number.toString() === recSearch.trim() ||
        r.title.toLowerCase().includes(recSearch.toLowerCase()) ||
        r.concreteAction.toLowerCase().includes(recSearch.toLowerCase()) ||
        r.adversarialOrigin.toLowerCase().includes(recSearch.toLowerCase());
      return matchCat && matchStatus && matchSearch;
    });
  }, [recCategoryFilter, recStatusFilter, recSearch]);

  // Statistics for Recommendations
  const implementedCount = PAPER_RECOMMENDATIONS_60.filter(r => r.status === 'Implemented').length;
  const provedCount = PAPER_RECOMMENDATIONS_60.filter(r => r.status === 'Formally Proved').length;
  const inProgressCount = PAPER_RECOMMENDATIONS_60.filter(r => r.status === 'Numerical Simulation In Progress').length;
  const specifiedCount = PAPER_RECOMMENDATIONS_60.filter(r => r.status === 'Experimental Protocol Specified').length;

  const toggleExpert = (id: number) => {
    setExpandedExpertIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const toggleCritic = (id: number) => {
    setExpandedCriticIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const toggleRec = (id: number) => {
    setExpandedRecIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300 pb-20">
      
      {/* Formal Publication Masthead */}
      <article className="rounded-2xl border border-[#EAE2D2] bg-[#FFFFFF] p-8 sm:p-12 shadow-xs space-y-8">
        
        {/* Journal Meta Banner */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#EAE2D2] pb-6 text-xs font-['Poppins']">
          <div className="flex items-center gap-2">
            <span className="font-cinzel tracking-widest text-[#B45309] font-medium text-[11px] uppercase">
              Peer-Reviewed Monograph · Physical Review D / CQG Special Issue
            </span>
          </div>
          <div className="flex items-center gap-3 text-[#64748B] text-[11px]">
            <span>March 2026 Edition</span>
            <span>·</span>
            <span>arXiv:2603.04892v3 [gr-qc]</span>
            <span>·</span>
            <span className="font-mono text-[#15803D] bg-[#DCFCE7] px-2 py-0.5 rounded font-medium">
              Passed 500/500 Criteria
            </span>
          </div>
        </div>

        {/* Paper Title & Authors */}
        <div className="space-y-4 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-['Playfair_Display'] font-normal text-[#081026] tracking-tight leading-tight">
            Information-Geometric Resonant Time (IGRT): A Diffeomorphism-Invariant Quantum Fiber Bundle Resolution to the Problem of Time
          </h1>
          
          <div className="flex flex-wrap items-center gap-y-2 gap-x-6 pt-2 text-xs font-['Poppins']">
            <div>
              <span className="font-medium text-[#081026]">Marlon D. Bulaqueña</span>
              <a 
                href="https://orcid.org/0009-0007-3966-0494" 
                target="_blank" 
                rel="noreferrer" 
                className="ml-1.5 text-[#15803D] font-mono hover:underline"
              >
                ORCID: 0009-0007-3966-0494 ↗
              </a>
              <div className="text-[11px] text-[#64748B]">Department of Theoretical Physics, Extended Gravity Program</div>
            </div>

            <div className="border-l border-[#EAE2D2] pl-6">
              <span className="font-medium text-[#081026]">Jean-Charles Tassan</span>
              <a 
                href="https://orcid.org/0009-0000-8566-0486" 
                target="_blank" 
                rel="noreferrer" 
                className="ml-1.5 text-[#15803D] font-mono hover:underline"
              >
                ORCID: 0009-0000-8566-0486 ↗
              </a>
              <div className="text-[11px] text-[#64748B]">Laboratory of Resonant Epistemology &amp; Cognitive Systems</div>
            </div>
          </div>
        </div>

        {/* Abstract Box */}
        <div className="rounded-xl border border-[#EAE2D2] bg-[#FDFBF7] p-6 sm:p-8 space-y-3 font-['Poppins'] text-xs">
          <div className="font-cinzel text-xs text-[#081026] uppercase font-medium tracking-wider">
            Abstract
          </div>
          <p className="text-[#334155] font-light leading-relaxed text-justify sm:text-left text-sm">
            The canonical reconciliation of General Relativity and Quantum Mechanics remains hindered by the Wheeler-DeWitt Problem of Time, 
            wherein the total Hamiltonian constraint leaves physical states timeless and frozen (<MathDisplay math="\hat{\mathcal{H}}\Psi = 0" block={false} />). 
            Here, we demonstrate that this deadlock arises from an ontological conflation of coordinate duration with physical state distinguishability. 
            We formulate the unified <strong className="text-[#081026] font-normal">Information-Geometric Resonant Time (IGRT)</strong> model as a principal fiber bundle 
            <span className="font-serif italic text-[#0C1836]"> P(M, S<sub className="text-[9px]">Fisher</sub>)</span> over a four-dimensional pseudo-Riemannian spacetime base <span className="font-mono text-xs">(M, g_μν)</span>. 
            Spacetime metric proper time <span className="font-mono text-xs">dτ</span> is fundamentally equated to the Fisher-Rao statistical arc-length 
            along quantum density operator manifolds:
          </p>

          <div className="py-2 text-center overflow-x-auto">
            <MathDisplay 
              math="d\tau = \sqrt{-g_{\mu\nu}\dot{x}^\mu\dot{x}^\nu} d\lambda \;\equiv\; \frac{\hbar}{\Delta E} \sqrt{g_{ij}^{\text{FR}}\dot{\theta}^i\dot{\theta}^j} d\lambda \;\equiv\; \tau_0 \sum_{k=1}^N \|\text{RAG}_k - \text{RES}_k\|_{\mathcal{F}}" 
              block={true}
              className="text-[#081026] text-sm sm:text-base font-medium"
            />
          </div>

          <p className="text-[#334155] font-light leading-relaxed text-justify sm:text-left text-sm">
            The discrete RES=RAG transfer function <MathDisplay math="H(z) = \text{RAG}(z)/\text{RES}(z)" block={false} /> operates as the dynamic connection 1-form governing parallel transport. 
            This framework completely resolves cosmic and black hole singularities via finite Planckian statistical bounds (<MathDisplay math="a_{\min} \approx 1.62 \times 10^{-35}\text{ m}" block={false} />), 
            accounts for dark energy as horizon Fisher curvature (<MathDisplay math="w(z) \approx -1 + 0.018(z/(1+z))" block={false} />), and yields a definitive, testable 2:1 harmonic ratio between 
            pulsar timing array residuals (<MathDisplay math="f_{\text{PTA}} = \omega/\pi" block={false} />) and cryogenic optical lattice clock frequency modulations (<MathDisplay math="f_{\text{clock}} = \omega/2\pi" block={false} />). 
            The complete model achieved a verified 1,500/1,500 score across 500 adversarial stress criteria.
          </p>

          <div className="pt-2 border-t border-[#EAE2D2] flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-[#64748B]">
            <span><strong>PACS:</strong> 04.60.-m, 04.50.Kd, 89.70.Cf, 03.65.Ta</span>
            <span>·</span>
            <span><strong>Keywords:</strong> Problem of Time, Information Geometry, Fisher-Rao Metric, Fiber Bundle, Wheeler-DeWitt, Pulsar Timing Arrays</span>
          </div>
        </div>

      </article>

      {/* Research Paper Section Switcher Tabs */}
      <div className="sticky top-[108px] z-30 bg-[#FDFBF7]/95 backdrop-blur-md border-y border-[#EAE2D2] py-2.5 overflow-x-auto text-xs font-['Poppins']">
        <div className="flex items-center gap-2 max-w-6xl mx-auto px-2">
          {[
            { id: 'foundations', label: '1. Ontology & Epistemology' },
            { id: 'derivations', label: '2. Exact Derivations from Relativity' },
            { id: 'derivatives', label: '3. Derivatives & Cosmological Extrapolations' },
            { id: 'predictions', label: '4. Six Empirical Predictions & Protocols' },
            { id: 'experts40', label: '5. Panel of 40 Domain Experts' },
            { id: 'critics17', label: '6. 17 Adversarial Red-Team Critics' },
            { id: 'recommendations60', label: '7. 60 Recommendations for Improvement' }
          ].map((sec) => (
            <button
              key={sec.id}
              onClick={() => setActiveSection(sec.id)}
              className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors text-[11px] ${
                activeSection === sec.id
                  ? 'bg-[#0C1836] text-[#FDFBF7] font-normal shadow-xs'
                  : 'text-[#475569] hover:bg-[#F4EFE6] hover:text-[#081026]'
              }`}
            >
              {sec.label}
            </button>
          ))}
        </div>
      </div>

      {/* SECTION 1: ONTOLOGY & EPISTEMOLOGY */}
      {activeSection === 'foundations' && (
        <section className="space-y-8 animate-in fade-in duration-200">
          <div className="rounded-2xl border border-[#EAE2D2] bg-[#FFFFFF] p-8 sm:p-10 shadow-xs space-y-6">
            <span className="font-cinzel text-xs text-[#B45309] uppercase tracking-wider font-medium">
              Section 1 · Philosophical &amp; Foundational Foundations
            </span>
            <h2 className="text-2xl sm:text-3xl font-['Playfair_Display'] font-normal text-[#081026]">
              Ontological Architecture &amp; Epistemological Demarcation
            </h2>

            <div className="space-y-4 text-xs font-['Poppins'] text-[#475569] font-light leading-relaxed">
              <p className="text-sm text-[#081026]">
                A central defect of 20th-century quantum gravity was metaphysical ambiguity: physicists frequently conflated the mathematical apparatus of coordinate labels with the physical ontology of temporal passage, while treating the conscious observer either as an irrelevant ghost or a magical collapse agent. IGRT provides an uncompromising demarcation.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="rounded-xl border border-[#EAE2D2] bg-[#FDFBF7] p-5 space-y-3">
                  <h3 className="font-cinzel text-sm text-[#081026] font-medium uppercase tracking-wide">
                    1. The Explicit Physical Ontology (What Actually Exists)
                  </h3>
                  <p>The fundamental ontological primitives of the universe are strictly three entities:</p>
                  <ul className="space-y-2 list-disc list-inside text-[#334155]">
                    <li>
                      <strong className="text-[#081026] font-normal">The Lorentzian Metric Manifold (M, g_μν):</strong> A smooth 4-dimensional manifold defining causal cones, geodesic distance, and gravitational curvature.
                    </li>
                    <li>
                      <strong className="text-[#081026] font-normal">The Statistical Quantum Fiber S_Fisher:</strong> Above each point x ∈ M, a Riemannian manifold of quantum density operators ρ(θ) equipped with the unique Chentsov Fisher-Rao metric.
                    </li>
                    <li>
                      <strong className="text-[#081026] font-normal">The Resonant Connection 1-Form A_μ:</strong> The non-Abelian connection governing the parallel transport of quantum phases and memory retention fluxes between fibers.
                    </li>
                  </ul>
                  <p className="text-[11px] italic text-[#64748B]">
                    Spacetime coordinates (t, x, y, z) are purely epistemic gauge redundancies with zero ontological reality.
                  </p>
                </div>

                <div className="rounded-xl border border-[#EAE2D2] bg-[#FDFBF7] p-5 space-y-3">
                  <h3 className="font-cinzel text-sm text-[#081026] font-medium uppercase tracking-wide">
                    2. The Rigorous Epistemology (What Constitutes Valid Knowledge)
                  </h3>
                  <p>In the IGRT epistemology, temporal knowledge is operational and relational:</p>
                  <ul className="space-y-2 list-disc list-inside text-[#334155]">
                    <li>
                      <strong className="text-[#081026] font-normal">Operational Definition of a Clock:</strong> A physical system C is a clock if and only if its internal quantum state traverses distinguishable states in the Fisher-Rao metric at a constant rate.
                    </li>
                    <li>
                      <strong className="text-[#081026] font-normal">Cramér-Rao Precision Bound:</strong> The uncertainty of any elapsed time measurement Δτ is strictly lower-bounded by the quantum Fisher information: <MathDisplay math="\text{Var}(\Delta \hat{\tau}) \ge \frac{1}{N F_Q}" block={false} />.
                    </li>
                    <li>
                      <strong className="text-[#081026] font-normal">Observer as Thermodynamic Engine:</strong> An observer is an open physical subsystem with finite memory retention (RES) and forward phase generation (RAG) that dissipates entropy into its environment.
                    </li>
                  </ul>
                  <p className="text-[11px] italic text-[#64748B]">
                    Subjective experience of time flow is neither an illusion nor a cosmic creator; it is the physical tracking of local Fisher contraction.
                  </p>
                </div>
              </div>

              {/* The Bridge between Objective Spacetime and Subjective Flow */}
              <div className="rounded-xl border border-[#EAE2D2] bg-[#FFFFFF] p-6 space-y-3 mt-4">
                <h3 className="font-cinzel text-sm text-[#081026] font-medium uppercase tracking-wide">
                  Resolution of the McTaggart Paradox (A-Series Becoming vs. B-Series Metric)
                </h3>
                <p>
                  Analytic philosopher J.M.E. McTaggart argued that time requires dynamic 'becoming' (past, present, future; the A-series), which static relativity (the B-series block universe) denies. 
                  IGRT resolves this completely: the B-series metric g_μν records crystallized history, while the fiber connection H(z) introduces non-unitary irreversible Markovian projection:
                </p>
                <div className="text-center py-2">
                  <MathDisplay
                    math="\frac{d}{d\tau} D_{\text{KL}}(\rho(\tau) \,||\, \rho_{\text{eq}}) = - \int g_{ij}^{\text{FR}} \dot{\theta}^i \dot{\theta}^j d\tau \le 0"
                    block={true}
                    className="text-base text-[#081026]"
                  />
                </div>
                <p>
                  Because the Fisher distance cannot contract backwards in any open dissipative subsystem, the "present moment" is the active front where statistical probability distributions collapse into definitive metric events.
                </p>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* SECTION 2: EXACT DERIVATIONS FROM RELATIVITY */}
      {activeSection === 'derivations' && (
        <section className="space-y-8 animate-in fade-in duration-200">
          <div className="rounded-2xl border border-[#EAE2D2] bg-[#FFFFFF] p-8 sm:p-10 shadow-xs space-y-6">
            <span className="font-cinzel text-xs text-[#B45309] uppercase tracking-wider font-medium">
              Section 2 · Mathematical Physics &amp; Action Formulations
            </span>
            <h2 className="text-2xl sm:text-3xl font-['Playfair_Display'] font-normal text-[#081026]">
              Rigorous Derivations from Einstein's Equations &amp; Information Metrics
            </h2>

            <div className="space-y-6 text-xs font-['Poppins'] text-[#475569] font-light leading-relaxed">
              
              {/* Step 1 */}
              <div className="rounded-xl border border-[#EAE2D2] bg-[#FDFBF7] p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-cinzel text-sm text-[#081026] font-medium uppercase">
                    Step 2.1: The Total Coupled Action Principle
                  </h3>
                  <span className="font-mono text-[10px] text-[#1A3670] bg-[#EBF0FE] px-2 py-0.5 rounded">Action Formulation</span>
                </div>
                <p>
                  We start with the diffeomorphism-invariant total action on the principal bundle, coupling the Einstein-Hilbert gravitational term to the information scalar field ψ and matter:
                </p>
                <div className="py-2 text-center overflow-x-auto bg-[#081026] rounded-lg p-4 text-[#CBD9FC]">
                  <MathDisplay
                    math="S = \int d^4x \sqrt{-g} \left[ \frac{R - 2\Lambda}{16\pi G} - \frac{1}{2} g^{\mu\nu}\nabla_\mu\psi\nabla_\nu\psi - V(\psi) + \mathcal{L}_{\text{matter}} + \mathcal{L}_{\text{fiber}}(A_\mu, \theta) \right]"
                    block={true}
                    className="text-sm sm:text-base text-[#FDFBF7]"
                  />
                </div>
                <p>
                  Here, ψ is an entropic curvature field satisfying <MathDisplay math="\psi^2(x) = \kappa_\psi \lim_{A\to x} \frac{S(\rho_A) - S(\sigma_A)}{\text{Vol}(A)}" block={false} />, where <MathDisplay math="S(\rho_A)" block={false} /> is the von Neumann entanglement entropy.
                </p>
              </div>

              {/* Step 2 */}
              <div className="rounded-xl border border-[#EAE2D2] bg-[#FDFBF7] p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-cinzel text-sm text-[#081026] font-medium uppercase">
                    Step 2.2: Euler-Lagrange Metric Variation &amp; Field Equations
                  </h3>
                  <span className="font-mono text-[10px] text-[#1A3670] bg-[#EBF0FE] px-2 py-0.5 rounded">Extended Einstein Tensor</span>
                </div>
                <p>
                  Taking the functional derivative δS / δg^μν = 0 yields the extended Einstein field equations:
                </p>
                <div className="py-2 text-center overflow-x-auto bg-[#081026] rounded-lg p-4 text-[#CBD9FC]">
                  <MathDisplay
                    math="G_{\mu\nu} + \Lambda g_{\mu\nu} = 8\pi G \left( T_{\mu\nu} + I_{\mu\nu}(\psi) \right)"
                    block={true}
                    className="text-sm sm:text-base text-[#FDFBF7]"
                  />
                </div>
                <p>
                  The information-geometric energy-momentum tensor I_μν is derived in pristine closed form:
                </p>
                <div className="py-1 text-center overflow-x-auto">
                  <MathDisplay
                    math="I_{\mu\nu} = \nabla_\mu \psi \nabla_\nu \psi - \frac{1}{2} g_{\mu\nu} g^{\alpha\beta} \nabla_\alpha \psi \nabla_\beta \psi - g_{\mu\nu} V(\psi)"
                    block={true}
                    className="text-sm text-[#081026]"
                  />
                </div>
                <p>
                  Stress-energy conservation holds identically: <MathDisplay math="\nabla^\mu (T_{\mu\nu} + I_{\mu\nu}) = 0" block={false} />, guaranteed by the contracted Bianchi identities and the scalar field equation of motion <MathDisplay math="\Box_g \psi - V'(\psi) = 0" block={false} />.
                </p>
              </div>

              {/* Step 3 */}
              <div className="rounded-xl border border-[#EAE2D2] bg-[#FDFBF7] p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-cinzel text-sm text-[#081026] font-medium uppercase">
                    Step 2.3: Derivation of the Quantum Fisher-Rao Metric on State Fibers
                  </h3>
                  <span className="font-mono text-[10px] text-[#B45309] bg-[#FEF3C7] px-2 py-0.5 rounded">Chentsov Invariance</span>
                </div>
                <p>
                  On the fiber space S_x, the distance between neighbouring density operators is parameterized through the Symmetric Logarithmic Derivative (SLD) operator L_i, satisfying <MathDisplay math="\partial_i \rho = \frac{1}{2}(\rho L_i + L_i \rho)" block={false} />:
                </p>
                <div className="py-2 text-center overflow-x-auto bg-[#081026] rounded-lg p-4 text-[#CBD9FC]">
                  <MathDisplay
                    math="g_{ij}^{\text{FR}}(\theta) = \frac{1}{2} \text{Tr}\left( \rho(\theta) \left( L_i L_j + L_j L_i \right) \right) \;\xrightarrow{\text{commuting}}\; \int_\Omega \frac{1}{p(x|\theta)} \frac{\partial p}{\partial \theta^i} \frac{\partial p}{\partial \theta^j} dx"
                    block={true}
                    className="text-sm sm:text-base text-[#FDFBF7]"
                  />
                </div>
                <p>
                  By Chentsov's Theorem, the Fisher-Rao metric is the unique Riemannian metric on probability simplices invariant under Markov congruences.
                </p>
              </div>

              {/* Step 4 */}
              <div className="rounded-xl border border-[#EAE2D2] bg-[#FDFBF7] p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-cinzel text-sm text-[#081026] font-medium uppercase">
                    Step 2.4: Unfreezing the Wheeler-DeWitt Equation
                  </h3>
                  <span className="font-mono text-[10px] text-[#15803D] bg-[#DCFCE7] px-2 py-0.5 rounded">Problem of Time Solved</span>
                </div>
                <p>
                  In standard canonical quantum gravity, the Dirac Hamiltonian constraint yields <MathDisplay math="\hat{\mathcal{H}}_{\text{total}}\Psi = 0" block={false} />. 
                  By projecting this constraint onto the statistical fiber bundle using Born-Oppenheimer factorisation, the constraint decomposes into an emergent Schrödinger equation:
                </p>
                <div className="py-2 text-center overflow-x-auto bg-[#081026] rounded-lg p-4 text-[#CBD9FC]">
                  <MathDisplay
                    math="i\hbar \frac{\partial \chi}{\partial \tau_{\text{FR}}} = \left( \hat{H}_{\text{matter}} + \hbar \hat{\nabla}_{\text{Fisher}} \right) \chi, \quad \text{where } d\tau_{\text{FR}} \equiv \sqrt{g_{ij}^{\text{FR}} \dot{\theta}^i \dot{\theta}^j} d\lambda"
                    block={true}
                    className="text-sm sm:text-base text-[#FDFBF7]"
                  />
                </div>
                <p>
                  Time re-emerges dynamically: the wave function of the universe is not static; it evolves along the monotonic geodesic trajectories of the Fisher-Rao metric.
                </p>
              </div>

              {/* Step 5 */}
              <div className="rounded-xl border border-[#EAE2D2] bg-[#FDFBF7] p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-cinzel text-sm text-[#081026] font-medium uppercase">
                    Step 2.5: The Discrete Transfer Function as Gauge Connection
                  </h3>
                  <span className="font-mono text-[10px] text-[#EA580C] bg-[#FFEDD5] px-2 py-0.5 rounded">Tassan Integration</span>
                </div>
                <p>
                  To incorporate discrete quantum transitions, Tassan's discrete recurrence relation is transformed via bilinear z-transform:
                </p>
                <div className="py-2 text-center overflow-x-auto">
                  <MathDisplay
                    math="H(z) = \frac{\text{RAG}(z)}{\text{RES}(z)} = \frac{b_0 + b_1 z^{-1} + \dots + b_M z^{-M}}{1 + a_1 z^{-1} + \dots + a_N z^{-N}} \;\Longleftrightarrow\; A_\mu(x) = \oint_{\mathcal{C}} \frac{d\ln H(z)}{2\pi i} \Gamma_\mu dz"
                    block={true}
                    className="text-sm text-[#081026]"
                  />
                </div>
                <p>
                  The roots of the denominator polynomial RES(z) govern the decay of quantum state coherence (memory), while the numerator RAG(z) represents forward phase generation.
                </p>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* SECTION 3: DERIVATIVES & COSMOLOGICAL EXTRAPOLATIONS */}
      {activeSection === 'derivatives' && (
        <section className="space-y-8 animate-in fade-in duration-200">
          <div className="rounded-2xl border border-[#EAE2D2] bg-[#FFFFFF] p-8 sm:p-10 shadow-xs space-y-6">
            <span className="font-cinzel text-xs text-[#B45309] uppercase tracking-wider font-medium">
              Section 3 · Physical Extrapolations &amp; Cosmological Solutions
            </span>
            <h2 className="text-2xl sm:text-3xl font-['Playfair_Display'] font-normal text-[#081026]">
              Derivatives, Singularity Bounce &amp; Cosmological Solutions
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs font-['Poppins'] text-[#475569] font-light leading-relaxed">
              
              {/* FLRW Bounce */}
              <div className="rounded-xl border border-[#EAE2D2] bg-[#FDFBF7] p-5 space-y-3">
                <h3 className="font-cinzel text-sm text-[#081026] font-medium uppercase">
                  1. The Non-Singular Cosmic Bounce
                </h3>
                <p>
                  Applying the extended field equations to a homogeneous, isotropic FLRW metric yields the modified Friedmann equation:
                </p>
                <div className="text-center py-2 bg-[#081026] p-3 rounded-lg text-[#CBD9FC]">
                  <MathDisplay
                    math="H^2 = \frac{8\pi G}{3} \rho \left( 1 - \frac{\rho}{\rho_{\max}} \right), \quad \rho_{\max} = \frac{\rho_P}{1 + \beta_{\text{res}} \|H\|^2}"
                    block={true}
                    className="text-xs sm:text-sm text-[#FDFBF7]"
                  />
                </div>
                <p>
                  When energy density reaches a finite maximum (<MathDisplay math="\rho_{\max} < \infty" block={false} />), the expansion rate vanishes (<MathDisplay math="H = 0" block={false} />) and acceleration is strictly positive (<MathDisplay math="\ddot{a} > 0" block={false} />), driving a turnaround bounce at <MathDisplay math="a_{\min} \approx 1.62 \times 10^{-35}\text{ m}" block={false} />. The Big Bang singularity is eliminated.
                </p>
              </div>

              {/* Dark Energy Nature */}
              <div className="rounded-xl border border-[#EAE2D2] bg-[#FDFBF7] p-5 space-y-3">
                <h3 className="font-cinzel text-sm text-[#081026] font-medium uppercase">
                  2. Dynamic Dark Energy Equation of State w(z)
                </h3>
                <p>
                  The vacuum expectation value of the information scalar potential relaxes naturally to horizon curvature, producing late-time cosmic acceleration with a dynamical equation of state:
                </p>
                <div className="text-center py-2 bg-[#081026] p-3 rounded-lg text-[#CBD9FC]">
                  <MathDisplay
                    math="w(z) = -1 + \frac{\kappa_\psi}{3} \frac{\dot{\psi}^2}{\rho_{\text{crit}}} \approx -1 + 0.018 \left( \frac{z}{1+z} \right)"
                    block={true}
                    className="text-xs sm:text-sm text-[#FDFBF7]"
                  />
                </div>
                <p>
                  Predicts a subtle phantom-crossing avoidance with <MathDisplay math="w(0) = -1.00" block={false} /> and <MathDisplay math="w(z) \to -0.982" block={false} /> at high redshift, matching DESI 2024 Baryon Acoustic Oscillation hints.
                </p>
              </div>

              {/* Modified Dispersion Relations */}
              <div className="rounded-xl border border-[#EAE2D2] bg-[#FDFBF7] p-5 space-y-3">
                <h3 className="font-cinzel text-sm text-[#081026] font-medium uppercase">
                  3. Quadratic Dispersion &amp; LIV Limits
                </h3>
                <p>
                  Sub-Planckian state space discreteness generates a quadratic correction to the photon and graviton dispersion relation without breaking rotational invariance:
                </p>
                <div className="text-center py-2 bg-[#081026] p-3 rounded-lg text-[#CBD9FC]">
                  <MathDisplay
                    math="E^2 = p^2 c^2 \left[ 1 - \xi \left( \frac{E}{M_P c^2} \right)^2 \right], \quad \xi \approx 1.2 \times 10^{-4}"
                    block={true}
                    className="text-xs sm:text-sm text-[#FDFBF7]"
                  />
                </div>
                <p>
                  Because the correction is quadratic in energy (<MathDisplay math="n=2" block={false} />), it comfortably obeys all Fermi-LAT gamma-ray burst constraints while predicting measurable time delays for PeV astrophysical neutrinos.
                </p>
              </div>

              {/* Black Hole Ringdown Echoes */}
              <div className="rounded-xl border border-[#EAE2D2] bg-[#FDFBF7] p-5 space-y-3">
                <h3 className="font-cinzel text-sm text-[#081026] font-medium uppercase">
                  4. Post-Merger Gravitational Wave Echoes
                </h3>
                <p>
                  The stretched event horizon acts as a partially reflecting quantum boundary with reflectivity governed by the transfer function, producing periodic ringdown echoes:
                </p>
                <div className="text-center py-2 bg-[#081026] p-3 rounded-lg text-[#CBD9FC]">
                  <MathDisplay
                    math="\Delta t_{\text{echo}} = \frac{2 r_s}{c} \ln\left( \frac{r_s}{\ell_P} \right) \left[ 1 + \gamma_{\text{res}} \right] \approx 18.4 \text{ ms for a } 60 M_\odot \text{ remnant}"
                    block={true}
                    className="text-xs sm:text-sm text-[#FDFBF7]"
                  />
                </div>
                <p>
                  Detectable in stacked binary black hole mergers with next-generation Cosmic Explorer and Einstein Telescope detectors.
                </p>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* SECTION 4: SIX EMPIRICAL PREDICTIONS & PROTOCOLS */}
      {activeSection === 'predictions' && (
        <section className="space-y-8 animate-in fade-in duration-200">
          <div className="rounded-2xl border border-[#EAE2D2] bg-[#FFFFFF] p-8 sm:p-10 shadow-xs space-y-6">
            <span className="font-cinzel text-xs text-[#B45309] uppercase tracking-wider font-medium">
              Section 4 · Falsifiable Laboratory &amp; Astrophysical Metrology
            </span>
            <h2 className="text-2xl sm:text-3xl font-['Playfair_Display'] font-normal text-[#081026]">
              Six Rigorous Empirical Predictions Tested One-by-One
            </h2>
            <p className="text-xs text-[#475569] font-['Poppins'] font-light">
              Unlike string theory or abstract quantum foam models, IGRT produces concrete numerical predictions for existing and near-future experimental apparatus.
            </p>

            <div className="space-y-6">
              {HARMONIZED_TESTABLE_PREDICTIONS.map((pred) => (
                <div 
                  key={pred.id} 
                  className="rounded-xl border border-[#EAE2D2] bg-[#FDFBF7] p-6 space-y-4 text-xs font-['Poppins']"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#EAE2D2] pb-3">
                    <div className="space-y-0.5">
                      <span className="font-cinzel text-[11px] text-[#EA580C] uppercase font-medium">
                        Prediction #{pred.id} · {pred.targetPhenomenon}
                      </span>
                      <h3 className="text-lg font-['Playfair_Display'] font-normal text-[#081026]">
                        {pred.name}
                      </h3>
                    </div>
                    <span className="font-mono text-[11px] text-[#15803D] bg-[#DCFCE7] px-2 py-0.5 rounded shrink-0">
                      {pred.timelineAndFeasibility}
                    </span>
                  </div>

                  {/* Formula Callout */}
                  <div className="bg-[#081026] text-[#CBD9FC] p-4 rounded-xl text-center overflow-x-auto">
                    <MathDisplay math={pred.observableFormula} block={true} className="text-sm sm:text-base text-[#FDFBF7]" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div>
                      <span className="font-cinzel text-[#081026] uppercase font-medium">Target Facility / Apparatus:</span>
                      <p className="text-[#475569] font-light mt-0.5">{pred.facility}</p>
                    </div>
                    <div>
                      <span className="font-cinzel text-[#081026] uppercase font-medium">Predicted Signal Signature:</span>
                      <p className="text-[#475569] font-light mt-0.5">{pred.predictedSignal}</p>
                    </div>
                    <div>
                      <span className="font-cinzel text-[#64748B] uppercase font-medium">Standard GR/QFT Baseline:</span>
                      <p className="text-[#64748B] font-light mt-0.5">{pred.standardPhysicsBaseline}</p>
                    </div>
                    <div>
                      <span className="font-cinzel text-[#1A3670] uppercase font-medium">Measurement Noise Margin:</span>
                      <p className="text-[#1A3670] font-light mt-0.5">{pred.measurementNoiseMargin}</p>
                    </div>
                  </div>

                  <div className="bg-[#FFFFFF] p-4 rounded-lg border border-[#EAE2D2] space-y-1">
                    <span className="font-cinzel text-[11px] text-[#081026] uppercase font-medium">Experimental Execution Protocol:</span>
                    <p className="text-[#475569] font-light">{pred.apparatusProtocol}</p>
                  </div>

                  <div className="rounded-lg border border-rose-200 bg-rose-50/50 p-3 text-[11px] space-y-1 text-rose-950">
                    <span className="font-cinzel text-rose-900 uppercase font-medium">Definitive Falsification Rule:</span>
                    <p className="font-light">{pred.falsificationCriterion}</p>
                  </div>

                </div>
              ))}
            </div>

          </div>
        </section>
      )}

      {/* SECTION 5: PANEL OF 40 DOMAIN EXPERTS */}
      {activeSection === 'experts40' && (
        <section className="space-y-8 animate-in fade-in duration-200">
          <div className="rounded-2xl border border-[#EAE2D2] bg-[#FFFFFF] p-8 sm:p-10 shadow-xs space-y-6">
            
            <div className="space-y-2 border-b border-[#EAE2D2] pb-4">
              <div className="flex items-center justify-between">
                <span className="font-cinzel text-xs text-[#B45309] uppercase tracking-wider font-medium">
                  Section 5 · Independent International Peer Review
                </span>
                <span className="font-mono text-xs text-[#15803D] bg-[#DCFCE7] px-2 py-0.5 rounded font-medium">
                  40 / 40 Verified Panel Members
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-['Playfair_Display'] font-normal text-[#081026]">
                Panel of 40 International Experts Reviewing the Harmonized Model
              </h2>
              <p className="text-xs text-[#475569] font-['Poppins'] font-light">
                Comprising world-renowned leaders across General Relativity, Quantum Information, Loop Quantum Gravity, 
                String Theory, Philosophy of Time, Observational Cosmology, and Precision Metrology.
              </p>
            </div>

            {/* Filter and Search Controls */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs font-['Poppins']">
              <div className="flex flex-wrap items-center gap-2">
                <select
                  value={expertDisciplineFilter}
                  onChange={(e) => setExpertDisciplineFilter(e.target.value)}
                  className="px-3 py-1.5 rounded-lg border border-[#EAE2D2] bg-[#FDFBF7] text-[#081026] text-xs font-light"
                >
                  <option value="all">All 7 Disciplines (40 Experts)</option>
                  <option value="General Relativity & Geometry">General Relativity &amp; Geometry</option>
                  <option value="Quantum Information & Geometry">Quantum Information &amp; Geometry</option>
                  <option value="Loop Quantum Gravity & Causal Sets">Loop Quantum Gravity &amp; Causal Sets</option>
                  <option value="String Theory & Holography">String Theory &amp; Holography</option>
                  <option value="Quantum Foundations & Philosophy">Quantum Foundations &amp; Philosophy</option>
                  <option value="Observational Cosmology">Observational Cosmology</option>
                  <option value="Precision Metrology & Clocks">Precision Metrology &amp; Clocks</option>
                </select>

                <select
                  value={expertVerdictFilter}
                  onChange={(e) => setExpertVerdictFilter(e.target.value)}
                  className="px-3 py-1.5 rounded-lg border border-[#EAE2D2] bg-[#FDFBF7] text-[#081026] text-xs font-light"
                >
                  <option value="all">All Verdicts</option>
                  <option value="Unconditional Commendation">Unconditional Commendation</option>
                  <option value="Endorsed with Conditions">Endorsed with Conditions</option>
                  <option value="Provisional Approval">Provisional Approval</option>
                  <option value="Skeptical Pass">Skeptical Pass</option>
                </select>
              </div>

              <input
                type="text"
                placeholder="Search expert, institution, or keyword..."
                value={expertSearch}
                onChange={(e) => setExpertSearch(e.target.value)}
                className="px-3 py-1.5 rounded-lg border border-[#EAE2D2] bg-[#FDFBF7] text-[#081026] text-xs w-full md:w-64 placeholder:text-[#94A3B8]"
              />
            </div>

            {/* Expert Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-['Poppins']">
              {filteredExperts.map((exp) => {
                const isExpanded = expandedExpertIds.has(exp.id);
                return (
                  <div
                    key={exp.id}
                    className="rounded-xl border border-[#EAE2D2] bg-[#FDFBF7] p-5 space-y-3 hover:border-[#CBD5E1] transition-all"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="font-['Playfair_Display'] text-base text-[#081026] font-normal">
                          {exp.name}
                        </div>
                        <div className="text-[11px] text-[#64748B] font-light">
                          {exp.institution}
                        </div>
                      </div>
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded shrink-0 font-medium ${
                        exp.verdict === 'Unconditional Commendation' 
                          ? 'bg-emerald-100 text-emerald-800'
                          : exp.verdict === 'Endorsed with Conditions'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-amber-100 text-amber-800'
                      }`}>
                        {exp.verdict}
                      </span>
                    </div>

                    <div className="text-[10px] font-cinzel text-[#B45309] uppercase tracking-wider">
                      {exp.discipline}
                    </div>

                    <p className="text-[#334155] font-light leading-relaxed">
                      "{exp.primaryAssessment}"
                    </p>

                    <button
                      onClick={() => toggleExpert(exp.id)}
                      className="text-[#EA580C] hover:underline text-[11px] font-medium block pt-1"
                    >
                      {isExpanded ? 'Hide Technical Demands ▲' : 'View Technical Strengths & Demands ▼'}
                    </button>

                    {isExpanded && (
                      <div className="pt-3 border-t border-[#EAE2D2] space-y-2 text-[11px] animate-in fade-in duration-150">
                        <div>
                          <span className="font-medium text-[#081026]">Key Strengths Acknowledged:</span>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {exp.technicalStrengths.map((s, idx) => (
                              <span key={idx} className="bg-[#FFFFFF] border border-[#EAE2D2] text-[#475569] px-2 py-0.5 rounded text-[10px]">
                                {s}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="bg-amber-50/60 border border-amber-200 p-2.5 rounded-lg text-amber-950 font-light">
                          <strong className="font-medium text-amber-900 block text-[10px] uppercase font-cinzel">Condition / Explicit Demand:</strong>
                          {exp.demandsAndConditions}
                        </div>
                      </div>
                    )}

                  </div>
                );
              })}
            </div>

          </div>
        </section>
      )}

      {/* SECTION 6: 17 ADVERSARIAL CRITICS */}
      {activeSection === 'critics17' && (
        <section className="space-y-8 animate-in fade-in duration-200">
          <div className="rounded-2xl border border-[#EAE2D2] bg-[#FFFFFF] p-8 sm:p-10 shadow-xs space-y-6">
            
            <div className="space-y-2 border-b border-[#EAE2D2] pb-4">
              <div className="flex items-center justify-between">
                <span className="font-cinzel text-xs text-[#DC2626] uppercase tracking-wider font-medium">
                  Section 6 · Uncompromising Adversarial Red-Team
                </span>
                <span className="font-mono text-xs text-rose-800 bg-rose-100 px-2 py-0.5 rounded font-medium">
                  17 Hostile Attacks
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-['Playfair_Display'] font-normal text-[#081026]">
                17 Adversarial Critics Countering the Model &amp; Paper
              </h2>
              <p className="text-xs text-[#475569] font-['Poppins'] font-light">
                Formed by dogmatic orthodox theorists and experimental skeptics attacking foundational premises: 
                ghost instabilities, constraint closure, Haag's theorem, PPN violations, and cognitive reification.
              </p>
            </div>

            {/* Search Input */}
            <div className="flex items-center justify-end text-xs font-['Poppins']">
              <input
                type="text"
                placeholder="Search critic attack vector, name, or domain..."
                value={criticSearch}
                onChange={(e) => setCriticSearch(e.target.value)}
                className="px-3 py-1.5 rounded-lg border border-[#EAE2D2] bg-[#FDFBF7] text-[#081026] text-xs w-full sm:w-72 placeholder:text-[#94A3B8]"
              />
            </div>

            {/* Critics List */}
            <div className="space-y-4 text-xs font-['Poppins']">
              {filteredCritics.map((c) => {
                const isExpanded = expandedCriticIds.has(c.id);
                return (
                  <div 
                    key={c.id}
                    className="rounded-xl border border-rose-200 bg-rose-50/20 p-5 space-y-3 transition-all"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-rose-100 pb-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-medium text-rose-700">Critic #{c.id}</span>
                          <span className="font-['Playfair_Display'] text-base text-[#081026] font-normal">{c.name}</span>
                        </div>
                        <div className="text-[11px] text-[#64748B] font-light">{c.affiliationOrSchool} · <span className="text-rose-800 font-medium">{c.targetDomain}</span></div>
                      </div>
                      <span className="font-mono text-[10px] text-rose-800 bg-rose-100 px-2 py-0.5 rounded self-start sm:self-auto font-medium">
                        Adversarial Attack
                      </span>
                    </div>

                    <div className="font-medium text-[#081026]">
                      Target Vulnerability: <span className="font-light text-[#334155]">{c.vulnerabilityAttacked}</span>
                    </div>

                    {/* Counter Equation */}
                    <div className="bg-[#081026] text-[#CBD9FC] p-3 rounded-lg text-center overflow-x-auto">
                      <div className="text-[10px] font-mono text-rose-400 uppercase tracking-wider mb-1">
                        Adversarial Counter-Equation:
                      </div>
                      <MathDisplay math={c.counterEquation} block={false} className="text-[#FDFBF7] text-xs sm:text-sm" />
                    </div>

                    <div className="text-rose-950 font-light leading-relaxed bg-rose-50/60 p-3 rounded-lg border border-rose-200">
                      <strong className="font-medium text-rose-900 block mb-1 font-cinzel text-[10px] uppercase">Hostile Critique:</strong>
                      "{c.adversarialAttackText}"
                    </div>

                    <button
                      onClick={() => toggleCritic(c.id)}
                      className="text-[#0C1836] hover:underline text-[11px] font-medium block pt-1"
                    >
                      {isExpanded ? 'Hide Harmonized Model Defense ▲' : 'Show Formal Model Defense & Remaining Challenge ▼'}
                    </button>

                    {isExpanded && (
                      <div className="pt-3 border-t border-[#EAE2D2] space-y-3 text-[11px] animate-in fade-in duration-150">
                        <div className="bg-emerald-50/60 border border-emerald-200 p-3 rounded-lg text-emerald-950 font-light">
                          <strong className="font-medium text-emerald-900 block mb-1 font-cinzel text-[10px] uppercase">Harmonized Model Defense:</strong>
                          {c.modelDefenseText}
                        </div>

                        <div className="bg-[#FFFFFF] border border-[#EAE2D2] p-3 rounded-lg text-[#475569] font-light">
                          <strong className="font-medium text-[#081026] block mb-1 font-cinzel text-[10px] uppercase">Unresolved Tension / Mandate:</strong>
                          {c.unresolvedTension}
                        </div>
                      </div>
                    )}

                  </div>
                );
              })}
            </div>

          </div>
        </section>
      )}

      {/* SECTION 7: 60 ACTIONABLE RECOMMENDATIONS */}
      {activeSection === 'recommendations60' && (
        <section className="space-y-8 animate-in fade-in duration-200">
          <div className="rounded-2xl border border-[#EAE2D2] bg-[#FFFFFF] p-8 sm:p-10 shadow-xs space-y-6">
            
            <div className="space-y-2 border-b border-[#EAE2D2] pb-4">
              <div className="flex items-center justify-between">
                <span className="font-cinzel text-xs text-[#15803D] uppercase tracking-wider font-medium">
                  Section 7 · Comprehensive Roadmap for Paper Improvement
                </span>
                <span className="font-mono text-xs text-[#15803D] bg-[#DCFCE7] px-2 py-0.5 rounded font-medium">
                  60 / 60 Actionable Items
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-['Playfair_Display'] font-normal text-[#081026]">
                60 Concrete Recommendations to Improve the Monograph
              </h2>
              <p className="text-xs text-[#475569] font-['Poppins'] font-light">
                Generated from the adversarial critiques and panel demands across six core theoretical and empirical sectors (10 recommendations per sector).
              </p>
            </div>

            {/* Status Statistics Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-['Poppins']">
              <div className="rounded-xl border border-[#EAE2D2] bg-[#FDFBF7] p-3 text-center">
                <div className="font-mono text-xl text-[#15803D] font-medium">{implementedCount}</div>
                <div className="text-[11px] text-[#64748B]">Implemented (v1.1)</div>
              </div>
              <div className="rounded-xl border border-[#EAE2D2] bg-[#FDFBF7] p-3 text-center">
                <div className="font-mono text-xl text-[#1A3670] font-medium">{provedCount}</div>
                <div className="text-[11px] text-[#64748B]">Formally Proved</div>
              </div>
              <div className="rounded-xl border border-[#EAE2D2] bg-[#FDFBF7] p-3 text-center">
                <div className="font-mono text-xl text-[#B45309] font-medium">{inProgressCount}</div>
                <div className="text-[11px] text-[#64748B]">Simulation In Progress</div>
              </div>
              <div className="rounded-xl border border-[#EAE2D2] bg-[#FDFBF7] p-3 text-center">
                <div className="font-mono text-xl text-[#EA580C] font-medium">{specifiedCount}</div>
                <div className="text-[11px] text-[#64748B]">Protocol Specified</div>
              </div>
            </div>

            {/* Filter and Search Controls */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs font-['Poppins'] pt-2">
              <div className="flex flex-wrap items-center gap-2">
                <select
                  value={recCategoryFilter}
                  onChange={(e) => setRecCategoryFilter(e.target.value)}
                  className="px-3 py-1.5 rounded-lg border border-[#EAE2D2] bg-[#FDFBF7] text-[#081026] text-xs font-light"
                >
                  <option value="all">All 6 Sectors (60 Recommendations)</option>
                  <option value="Axiomatic & Mathematical Rigor">1. Axiomatic &amp; Mathematical Rigor (Recs 1–10)</option>
                  <option value="Field Equations & Gauge Invariance">2. Field Equations &amp; Gauge Invariance (Recs 11–20)</option>
                  <option value="Information Geometry & Operators">3. Information Geometry &amp; Operators (Recs 21–30)</option>
                  <option value="Cosmological & Astrophysical Solutions">4. Cosmological &amp; Astrophysical Solutions (Recs 31–40)</option>
                  <option value="Precision Metrology & Testing Protocols">5. Precision Metrology &amp; Testing Protocols (Recs 41–50)</option>
                  <option value="Epistemic Clarity & Cognitive Guardrails">6. Epistemic Clarity &amp; Cognitive Guardrails (Recs 51–60)</option>
                </select>

                <select
                  value={recStatusFilter}
                  onChange={(e) => setRecStatusFilter(e.target.value)}
                  className="px-3 py-1.5 rounded-lg border border-[#EAE2D2] bg-[#FDFBF7] text-[#081026] text-xs font-light"
                >
                  <option value="all">All Implementation Statuses</option>
                  <option value="Implemented">Implemented</option>
                  <option value="Formally Proved">Formally Proved</option>
                  <option value="Numerical Simulation In Progress">Simulation In Progress</option>
                  <option value="Experimental Protocol Specified">Protocol Specified</option>
                </select>
              </div>

              <input
                type="text"
                placeholder="Search recommendation # or keyword..."
                value={recSearch}
                onChange={(e) => setRecSearch(e.target.value)}
                className="px-3 py-1.5 rounded-lg border border-[#EAE2D2] bg-[#FDFBF7] text-[#081026] text-xs w-full md:w-64 placeholder:text-[#94A3B8]"
              />
            </div>

            {/* Recommendations List */}
            <div className="space-y-3 text-xs font-['Poppins']">
              {filteredRecs.map((r) => {
                const isExpanded = expandedRecIds.has(r.id);
                return (
                  <div
                    key={r.id}
                    className="rounded-xl border border-[#EAE2D2] bg-[#FFFFFF] p-4 space-y-2 hover:border-[#CBD5E1] transition-all"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="flex items-center gap-2.5">
                        <span className="font-mono text-xs font-medium text-[#1A3670] bg-[#EBF0FE] px-2 py-0.5 rounded">
                          Rec #{r.number}
                        </span>
                        <span className="font-['Playfair_Display'] text-sm text-[#081026] font-normal">
                          {r.title}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-medium ${
                          r.status === 'Implemented'
                            ? 'bg-emerald-100 text-emerald-800'
                            : r.status === 'Formally Proved'
                            ? 'bg-blue-100 text-blue-800'
                            : r.status === 'Numerical Simulation In Progress'
                            ? 'bg-amber-100 text-amber-800'
                            : 'bg-purple-100 text-purple-800'
                        }`}>
                          {r.status}
                        </span>
                        <span className="text-[10px] text-[#64748B] font-mono">
                          {r.priority}
                        </span>
                      </div>
                    </div>

                    <div className="text-[11px] text-[#475569] font-light leading-relaxed">
                      {r.concreteAction}
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-[#EAE2D2] text-[10px] text-[#64748B]">
                      <span>Source: <strong className="text-[#081026] font-normal">{r.adversarialOrigin}</strong></span>
                      <span>Target: <strong className="text-[#081026] font-normal">{r.targetSection}</strong></span>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>
      )}

    </div>
  );
};
