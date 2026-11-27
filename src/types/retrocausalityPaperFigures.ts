/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Visual Illustration Metadata Registry for Paper 16:
 * "The Universe Remembers Its Future"
 *
 * 27 full-page A4 philosophical and physical illustrations spanning every chapter (Parts 1–8),
 * with at least two illustrations per chapter and a curated 40-shade dark palette across
 * five families: Dark Blue, Dark Magenta, Dark Teal, Dark Slate Gray Blue, and Dark Pine Green.
 */

export interface RetrocausalityFigureSpec {
  id: string;
  figureNumber: string;
  anchorChapter: number;
  title: string;
  caption: string;
  svgMarkup: string;
}

export type RetroHueFamily =
  | 'Dark Blue'
  | 'Dark Magenta'
  | 'Dark Teal'
  | 'Dark Slate Gray Blue'
  | 'Dark Pine Green'
  | 'Dark Red'
  | 'Dark Orange';

export interface IllustrationShadeToken {
  id: number;
  family: RetroHueFamily;
  name: string;
  hex: string;
  rgb: [number, number, number];
}

export const ILLUSTRATION_40_SHADES: IllustrationShadeToken[] = [
  // Dark Blue (8 shades)
  { id: 1, family: 'Dark Blue', name: 'Abyssal Midnight Blue', hex: '#061530', rgb: [6, 21, 48] },
  { id: 2, family: 'Dark Blue', name: 'Deep Sapphire Blue', hex: '#081B38', rgb: [8, 27, 56] },
  { id: 3, family: 'Dark Blue', name: 'Atlantic Blueprint Blue', hex: '#09244B', rgb: [9, 36, 75] },
  { id: 4, family: 'Dark Blue', name: 'Observatory Dark Blue', hex: '#0A2144', rgb: [10, 33, 68] },
  { id: 5, family: 'Dark Blue', name: 'Cobalt Midnight Blue', hex: '#0D2852', rgb: [13, 40, 82] },
  { id: 6, family: 'Dark Blue', name: 'Indigo Royal Blue', hex: '#0E2D5C', rgb: [14, 45, 92] },
  { id: 7, family: 'Dark Blue', name: 'Admiral Dark Blue', hex: '#103266', rgb: [16, 50, 102] },
  { id: 8, family: 'Dark Blue', name: 'Prussian Celestial Blue', hex: '#123A75', rgb: [18, 58, 117] },

  // Dark Magenta (8 shades)
  { id: 9, family: 'Dark Magenta', name: 'Deep Mulberry Magenta', hex: '#2A081E', rgb: [42, 8, 30] },
  { id: 10, family: 'Dark Magenta', name: 'Burgundy Plum Magenta', hex: '#330B25', rgb: [51, 11, 37] },
  { id: 11, family: 'Dark Magenta', name: 'Velvet Aubergine Magenta', hex: '#380D29', rgb: [56, 13, 41] },
  { id: 12, family: 'Dark Magenta', name: 'Nocturnal Dark Magenta', hex: '#3D0E2D', rgb: [61, 14, 45] },
  { id: 13, family: 'Dark Magenta', name: 'Imperial Dark Magenta', hex: '#471134', rgb: [71, 17, 52] },
  { id: 14, family: 'Dark Magenta', name: 'Tyrian Crimson Magenta', hex: '#4C1338', rgb: [76, 19, 56] },
  { id: 15, family: 'Dark Magenta', name: 'Garnet Dark Magenta', hex: '#52143C', rgb: [82, 20, 60] },
  { id: 16, family: 'Dark Magenta', name: 'Regal Wine Magenta', hex: '#5B1743', rgb: [91, 23, 67] },

  // Dark Teal (8 shades)
  { id: 17, family: 'Dark Teal', name: 'Abyssal Petrol Teal', hex: '#062429', rgb: [6, 36, 41] },
  { id: 18, family: 'Dark Teal', name: 'Nocturnal Marine Teal', hex: '#082E36', rgb: [8, 46, 54] },
  { id: 19, family: 'Dark Teal', name: 'Deep Maritime Teal', hex: '#0B3942', rgb: [11, 57, 66] },
  { id: 20, family: 'Dark Teal', name: 'Harbor Petrol Teal', hex: '#0E444F', rgb: [14, 68, 79] },
  { id: 21, family: 'Dark Teal', name: 'Veridian Dark Teal', hex: '#11505C', rgb: [17, 80, 92] },
  { id: 22, family: 'Dark Teal', name: 'Pelagic Dark Teal', hex: '#145B68', rgb: [20, 91, 104] },
  { id: 23, family: 'Dark Teal', name: 'Oceanic Petrol Teal', hex: '#186876', rgb: [24, 104, 118] },
  { id: 24, family: 'Dark Teal', name: 'Boreal Deep Teal', hex: '#1D7685', rgb: [29, 118, 133] },

  // Dark Slate Gray Blue (8 shades)
  { id: 25, family: 'Dark Slate Gray Blue', name: 'Storm Slate Gray Blue', hex: '#14222E', rgb: [20, 34, 46] },
  { id: 26, family: 'Dark Slate Gray Blue', name: 'Basalt Slate Gray Blue', hex: '#162633', rgb: [22, 38, 51] },
  { id: 27, family: 'Dark Slate Gray Blue', name: 'Charcoal Slate Gray Blue', hex: '#182938', rgb: [24, 41, 56] },
  { id: 28, family: 'Dark Slate Gray Blue', name: 'Petrol Slate Gray Blue', hex: '#1B3042', rgb: [27, 48, 66] },
  { id: 29, family: 'Dark Slate Gray Blue', name: 'Harbor Slate Gray Blue', hex: '#1F364B', rgb: [31, 54, 75] },
  { id: 30, family: 'Dark Slate Gray Blue', name: 'Steel Slate Gray Blue', hex: '#233C53', rgb: [35, 60, 83] },
  { id: 31, family: 'Dark Slate Gray Blue', name: 'Nordic Slate Gray Blue', hex: '#27435C', rgb: [39, 67, 92] },
  { id: 32, family: 'Dark Slate Gray Blue', name: 'Iron Slate Gray Blue', hex: '#2B4964', rgb: [43, 73, 100] },

  // Dark Pine Green (8 shades)
  { id: 33, family: 'Dark Pine Green', name: 'Boreal Dark Pine Green', hex: '#082419', rgb: [8, 36, 25] },
  { id: 34, family: 'Dark Pine Green', name: 'Deep Conifer Pine Green', hex: '#0C3022', rgb: [12, 48, 34] },
  { id: 35, family: 'Dark Pine Green', name: 'Sylvan Dark Pine Green', hex: '#0F3D2B', rgb: [15, 61, 43] },
  { id: 36, family: 'Dark Pine Green', name: 'Highland Pine Green', hex: '#134733', rgb: [19, 71, 51] },
  { id: 37, family: 'Dark Pine Green', name: 'Forest Canopy Pine Green', hex: '#17573E', rgb: [23, 87, 62] },
  { id: 38, family: 'Dark Pine Green', name: 'Alpine Needle Pine Green', hex: '#1B6146', rgb: [27, 97, 70] },
  { id: 39, family: 'Dark Pine Green', name: 'Evergreen Mineral Pine', hex: '#1F6B4E', rgb: [31, 107, 78] },
  { id: 40, family: 'Dark Pine Green', name: 'Veridian Pine Green', hex: '#227252', rgb: [34, 114, 82] }
];

export const ILLUSTRATION_WARM_SHADES: IllustrationShadeToken[] = [
  { id: 41, family: 'Dark Red', name: 'Deep Crimson Dark Red', hex: '#4B0B0E', rgb: [75, 11, 14] },
  { id: 42, family: 'Dark Red', name: 'Venetian Carmine Dark Red', hex: '#7A1921', rgb: [122, 25, 33] },
  { id: 43, family: 'Dark Orange', name: 'Burnt Sienna Dark Orange', hex: '#522106', rgb: [82, 33, 6] },
  { id: 44, family: 'Dark Orange', name: 'Amber Umber Dark Orange', hex: '#8A3D12', rgb: [138, 61, 18] }
];

export const ILLUSTRATION_ALL_SHADES: IllustrationShadeToken[] = [
  ...ILLUSTRATION_40_SHADES,
  ...ILLUSTRATION_WARM_SHADES
];

const SHADE_BY_HEX = new Map(ILLUSTRATION_ALL_SHADES.map((s) => [s.hex.toUpperCase(), s]));

function shade(hex: string): IllustrationShadeToken {
  const tok = SHADE_BY_HEX.get(hex.toUpperCase());
  if (!tok) throw new Error(`Unknown illustration shade hex: ${hex}`);
  return tok;
}

export interface RetroPlateMetaSpec {
  id: string;
  plateNumber: string;
  anchorChapter: number;
  hueFamily: RetroHueFamily;
  shadeName: string;
  bgHex: string;
  bgRgb: [number, number, number];
  accentFamily: RetroHueFamily;
  accentShadeName: string;
  accentHex: string;
  accentRgb: [number, number, number];
  title: string;
  imageFile: string;
  caption: string;
}

interface RawPlateSeed {
  id: string;
  plateNumber: string;
  anchorChapter: number;
  bgHex: string;
  accentHex: string;
  title: string;
  imageFile: string;
  caption: string;
}

const RAW_PLATE_SEEDS: RawPlateSeed[] = [
  // Part 1: 7 Illustrations (I–VII)
  {
    id: 'retro-plate-1',
    plateNumber: 'Illustration I',
    anchorChapter: 1,
    bgHex: '#061530',
    accentHex: '#1D7685',
    title: 'Aristotle: Fourfold Aitia, Teleological Explanation, and the Sea Battle Tomorrow',
    imageFile: 'aristotle_sea_battle_1795773041090.jpg',
    caption:
      'Portrait of Aristotle paired with two analytical diagrams: the four explanatory causes (material, formal, efficient, and teleological) and the branching contingency of tomorrow\'s sea battle. It depicts Chapter 1\'s opening distinction between a settled past, an open future under bivalence, and non-antecedent forms of explanation that do not require backward physical action.'
  },
  {
    id: 'retro-plate-2',
    plateNumber: 'Illustration II',
    anchorChapter: 1,
    bgHex: '#2A081E',
    accentHex: '#2B4964',
    title: 'Chrysippus: Confatalia and Global Co-Determination Across Co-Fated Trajectories',
    imageFile: 'chrysippus_cofated_lattice_1795773044831.jpg',
    caption:
      'Portrait of the Stoic logician Chrysippus linked to an interlocking lattice of co-fated event strands. The plate illustrates the Stoic solution to the Idle Argument (confatalia): local deliberation and distant boundary outcomes belong to a single mutually constraining history rather than an isolated one-way domino push.'
  },
  {
    id: 'retro-plate-3',
    plateNumber: 'Illustration III',
    anchorChapter: 1,
    bgHex: '#062429',
    accentHex: '#123A75',
    title: 'David Hume: Constant Conjunction, Priority Convention, and Empirical Habit',
    imageFile: 'hume_priority_custom_1795773044106.jpg',
    caption:
      'Portrait of David Hume beside an empirical regularity diagram relating contiguity, temporal succession, and customary expectation. It visualizes Hume\'s argument that placing causes strictly before effects originated as an observational convention of habit rather than a logical theorem banning two-boundary physical constraints.'
  },
  {
    id: 'retro-plate-4',
    plateNumber: 'Illustration IV',
    anchorChapter: 1,
    bgHex: '#14222E',
    accentHex: '#4C1338',
    title: 'Immanuel Kant: The Second Analogy and Irreversible Objective Succession',
    imageFile: 'kant_ship_downstream_1795773045875.jpg',
    caption:
      'Portrait of Immanuel Kant juxtaposed with the Second Analogy contrast between surveying a stationary house in arbitrary order and observing a ship descending a river. The diagram poses Kant\'s challenge directly: objective succession depends on lawful rule-governed necessity, which physics must separate from unilateral past-to-future flow.'
  },
  {
    id: 'retro-plate-5',
    plateNumber: 'Illustration V',
    anchorChapter: 1,
    bgHex: '#082419',
    accentHex: '#27435C',
    title: 'Bertrand Russell and Hans Reichenbach: Time-Symmetric Functional Laws vs. Conjunctive Forks',
    imageFile: 'russell_reichenbach_forks_1795773047181.jpg',
    caption:
      'Dual portrait of Bertrand Russell and Hans Reichenbach above diagrams contrasting time-symmetric orbital functional relations against statistically open forks screened off at a past common vertex. It visualizes how fundamental differential laws exhibit no directional arrow while probabilistic screening-off introduces asymmetry through boundary conditions.'
  },
  {
    id: 'retro-plate-6',
    plateNumber: 'Illustration VI',
    anchorChapter: 1,
    bgHex: '#081B38',
    accentHex: '#1F6B4E',
    title: 'Michael Dummett: Bringing About the Past, the Bilking Test, and Non-Controllability',
    imageFile: 'dummett_bilking_test_1795773048913.jpg',
    caption:
      'Portrait of Michael Dummett accompanied by a temporal protocol testing whether a later agent can falsify an already inspected trace. The crossed intervention path demonstrates why controllable backward signalling fails the bilking test while non-interventional two-boundary correlation remains logically coherent.'
  },
  {
    id: 'retro-plate-7',
    plateNumber: 'Illustration VII',
    anchorChapter: 1,
    bgHex: '#330B25',
    accentHex: '#145B68',
    title: 'David Lewis, Huw Price, and Judea Pearl: Counterfactual Forks, Symmetry, and Causal Graphs',
    imageFile: 'lewis_price_pearl_1795773048866.jpg',
    caption:
      'Group portrait of David Lewis, Huw Price, and Judea Pearl paired with diagrams of overdetermined trace-forks, an Archimedean symmetry balance, and structural causal graphs. It anchors Chapter 1\'s comprehensive taxonomy separating temporal precedence, counterfactual dependence, manipulationist control, and lawful constraint.'
  },

  // Part 2: 3 Illustrations (VIII–X)
  {
    id: 'retro-plate-8',
    plateNumber: 'Illustration VIII',
    anchorChapter: 2,
    bgHex: '#0B3942',
    accentHex: '#0E2D5C',
    title: 'Wheeler–Feynman Absorber Electrodynamics: Retarded and Advanced Green\'s Kernels',
    imageFile: 'maxwell_absorber_waves_1795773049174.jpg',
    caption:
      'Field schematic contrasting an outgoing retarded wavefront, an incoming advanced wavefront converging onto an accelerated charge, and a surrounding absorber shell whose interference cancels advanced fields outside the system. It depicts Part 2\'s derivation showing that radiative asymmetry arises from boundary absorbers rather than Maxwell\'s time-symmetric equations.'
  },
  {
    id: 'retro-plate-9',
    plateNumber: 'Illustration IX',
    anchorChapter: 2,
    bgHex: '#1F364B',
    accentHex: '#380D29',
    title: 'Quantum Field Propagators: The Schwinger–Keldysh Closed-Time-Path Contour',
    imageFile: 'feynman_keldysh_contour_1795773049289.jpg',
    caption:
      'Complex-time contour diagram pairing forward time-ordered and backward anti-time-ordered Schwinger–Keldysh branches with vanishing spacelike commutators of the Pauli–Jordan operator. It illustrates Section 2.4\'s separation between standard in–in contour doubling (E_f = I, computing causal expectations from ρ₀ via G_R) and explicit two-boundary extensions (E_f ≠ I) alongside spacelike microcausality.'
  },
  {
    id: 'retro-plate-10',
    plateNumber: 'Illustration X',
    anchorChapter: 2,
    bgHex: '#0F3D2B',
    accentHex: '#186876',
    title: 'Landauer Erasure Bound: Thermodynamic Heat Cost of Irreversible Record Formation',
    imageFile: 'landauer_memory_erasure_1795773050524.jpg',
    caption:
      'Phase-space logic-gate schematic depicting an asymmetric memory reset dissipating at least k_B T ln 2 of heat into a thermal bath. It links Chapter 1\'s informational taxonomy (I1–I5) to statistical field physics by showing why stable physical records require entropy export rather than time-asymmetric microphysics.'
  },

  // Part 3: 3 Illustrations (XI–XIII)
  {
    id: 'retro-plate-11',
    plateNumber: 'Illustration XI',
    anchorChapter: 3,
    bgHex: '#0A2144',
    accentHex: '#1B6146',
    title: 'William Rowan Hamilton and Ken Wharton: Least-Action Extremization Across Fixed Boundaries',
    imageFile: 'hamilton_wharton_action_1795773125930.jpg',
    caption:
      'Portraits of William Rowan Hamilton and Ken Wharton framed above a variational bundle of candidate spacetime worldlines connecting fixed endpoints (q_1, t_1) and (q_2, t_2). Only the stationary action trajectory satisfies δS = 0, illustrating how Lagrangian two-boundary mechanics constrains intermediate events all at once.'
  },
  {
    id: 'retro-plate-12',
    plateNumber: 'Illustration XII',
    anchorChapter: 3,
    bgHex: '#3D0E2D',
    accentHex: '#09244B',
    title: 'Lawrence Schulman: Two-Time Boundary Cosmology and Dual Thermodynamic Gradients',
    imageFile: 'schulman_dual_horizons_1795773127061.jpg',
    caption:
      'Portrait of Lawrence Schulman beside a cosmological hourglass manifold bounded by both a low-entropy Big Bang and a symmetric low-entropy Big Crunch. Trajectory bands show statistical entropy rising from both temporal extremes toward intermediate expansion, illustrating how imposing a second cosmic boundary reshapes thermodynamic arrows.'
  },
  {
    id: 'retro-plate-13',
    plateNumber: 'Illustration XIII',
    anchorChapter: 3,
    bgHex: '#11505C',
    accentHex: '#52143C',
    title: 'Admissible History Intersection: Sol(L) Intersected with Past and Future Boundary Hypersurfaces',
    imageFile: 'cauchy_boundary_intersection_1795773053053.jpg',
    caption:
      'Spacetime geometry diagram comparing a unilateral Cauchy march forward from Σ_- against the global intersection H_adm = Sol(L) ∩ B_past ∩ B_future spanned between past and future constraints. It clarifies why future boundaries filter admissible histories without violating or altering local differential dynamics.'
  },

  // Part 4: 2 Illustrations (XIV–XV)
  {
    id: 'retro-plate-14',
    plateNumber: 'Illustration XIV',
    anchorChapter: 4,
    bgHex: '#233C53',
    accentHex: '#0E444F',
    title: 'Tim Maudlin: Primitive Temporal Passage, Foil-Invariant Production, and Lorentz Light Cones',
    imageFile: 'maudlin_light_cones_1795773068029.jpg',
    caption:
      'Portrait of Tim Maudlin above intersecting Lorentz light cones and spacelike Bell hypersurfaces. It captures Part 4\'s central philosophical debate between primitive forward temporal passage and four-dimensional spacetime structure in which distant simultaneity depends on observer foliation.'
  },
  {
    id: 'retro-plate-15',
    plateNumber: 'Illustration XV',
    anchorChapter: 4,
    bgHex: '#17573E',
    accentHex: '#162633',
    title: 'Keystone Architecture of the Present: Relational Tension Between Antecedent and Terminal Pillars',
    imageFile: 'present_arch_keystone_1795773053679.jpg',
    caption:
      'Structural arch diagram depicting a present physical state as a central keystone locked in mechanical equilibrium between an antecedent boundary pillar and a terminal boundary pillar. Neither pillar alone determines the arch\'s stability, modeling Part 4\'s argument that temporal precedence and causal determination are conceptually distinct relations.'
  },

  // Part 5: 3 Illustrations (XVI–XVIII)
  {
    id: 'retro-plate-16',
    plateNumber: 'Illustration XVI',
    anchorChapter: 5,
    bgHex: '#0D2852',
    accentHex: '#471134',
    title: 'Emily Adlam: All-At-Once Physical Laws and Non-Markovian Spacetime Constraint Networks',
    imageFile: 'adlam_constraint_network_1795773175928.jpg',
    caption:
      'Portrait of Emily Adlam looking across a four-dimensional non-Markovian constraint network bounded by hypersurfaces Σ_- and Σ_+. Bidirectional relational threads show how all-at-once physical laws govern global four-dimensional histories coherently rather than stepping sequentially from past to future.'
  },
  {
    id: 'retro-plate-17',
    plateNumber: 'Illustration XVII',
    anchorChapter: 5,
    bgHex: '#471134',
    accentHex: '#103266',
    title: 'Igor Novikov and Kip Thorne: Closed Timelike Fixed Points Under Action Extremization',
    imageFile: 'novikov_thorne_loop_1795773175155.jpg',
    caption:
      'Dual portrait of Igor Novikov and Kip Thorne above a wormhole geometry contrasting a solid self-consistent billiard loop against a faded paradoxical trajectory suppressed by global consistency. The diagram illustrates Theorem 5.2\'s result that contradictory histories are absent from the admissible solution space.'
  },
  {
    id: 'retro-plate-18',
    plateNumber: 'Illustration XVIII',
    anchorChapter: 5,
    bgHex: '#186876',
    accentHex: '#0C3022',
    title: 'Backward Signalling (P1) vs. No-Signalling Two-Boundary Consistency (P2)',
    imageFile: 'influence_vs_consistency_1795773176984.jpg',
    caption:
      'Comparative causal diagram contrasting a blocked backward signalling arrow from future choice B to past outcome A (left) with a bidirectional constraint network linking preparation λ, intermediate state, and setting b under Σ_b P(a, λ | b) = I (right). It displays why two-boundary consistency precludes backward messaging.'
  },

  // Part 6: 3 Illustrations (XIX–XXI)
  {
    id: 'retro-plate-19',
    plateNumber: 'Illustration XIX',
    anchorChapter: 6,
    bgHex: '#27435C',
    accentHex: '#081B38',
    title: 'Yakir Aharonov and Lev Vaidman: Two-State Vector Formalism and Weak-Value Interference',
    imageFile: 'aharonov_vaidman_tsvf_1795773178088.jpg',
    caption:
      'Dual portrait of Yakir Aharonov and Lev Vaidman above a pre- and post-selected interferometer where forward state |ψ⟩ from the past meets backward state ⟨φ| from the future detector. The deflected dial needle registers weak values conditioned symmetrically on both temporal boundaries without collapsing intermediate coherence.'
  },
  {
    id: 'retro-plate-20',
    plateNumber: 'Illustration XX',
    anchorChapter: 6,
    bgHex: '#227252',
    accentHex: '#1B3042',
    title: 'Matthew Leifer and Matthew Pusey: Time-Symmetric Quantum Retrocausality and Bell Locality',
    imageFile: 'leifer_pusey_bell_1795773178264.jpg',
    caption:
      'Dual portrait of Matthew Leifer and Matthew Pusey over a symmetric EPR-Bell spacetime diamond linking source λ to spacelike detector settings a and b. Subluminal boundary constraints along light cones illustrate how relaxing preparation-independence yields local, Lorentz-covariant Bell correlations without superluminal signalling.'
  },
  {
    id: 'retro-plate-21',
    plateNumber: 'Illustration XXI',
    anchorChapter: 6,
    bgHex: '#0E2D5C',
    accentHex: '#082E36',
    title: 'John Archibald Wheeler: Delayed-Choice Quantum Eraser and Coincidence Conditioning',
    imageFile: 'wheeler_delayed_choice_1795773067778.jpg',
    caption:
      'Portrait of John Archibald Wheeler alongside a delayed-choice quantum eraser routing signal photons to D0 and entangled idler photons to D1–D4. Although D0 records no marginal interference, coincidence sorting by later idler outcomes separates complementary sub-ensembles—clarifying two-boundary correlation without altering past clicks.'
  },

  // Part 7: 3 Illustrations (XXII–XXIV)
  {
    id: 'retro-plate-22',
    plateNumber: 'Illustration XXII',
    anchorChapter: 7,
    bgHex: '#52143C',
    accentHex: '#134733',
    title: 'Ludwig Boltzmann: Exponential Phase-Space Compartments and the Past Hypothesis',
    imageFile: 'boltzmann_phase_volume_1795773181262.jpg',
    caption:
      'Portrait of Ludwig Boltzmann beside nested Liouville phase-space regions expanding via S = k log W from a tiny low-entropy Past Hypothesis seed state toward thermal equilibrium. It explains how immense phase-volume ratios yield reliable macroscopic irreversibility without asymmetry in the microscopic equations of motion.'
  },
  {
    id: 'retro-plate-23',
    plateNumber: 'Illustration XXIII',
    anchorChapter: 7,
    bgHex: '#145B68',
    accentHex: '#2A081E',
    title: 'Carlo Rovelli and David Albert: Thermal Time, Entropy Gradients, and Record Asymmetry',
    imageFile: 'rovelli_albert_records_1795773129322.jpg',
    caption:
      'Dual portrait of Carlo Rovelli and David Albert paired with a record-formation schematic contrasting dense low-entropy past traces against unconstrained future states along an entropy-producing channel. It demonstrates Part 7\'s thesis that human memory faces pastward because thermodynamic records dissipate energy away from an early low-entropy boundary.'
  },
  {
    id: 'retro-plate-24',
    plateNumber: 'Illustration XXIV',
    anchorChapter: 7,
    bgHex: '#182938',
    accentHex: '#061530',
    title: 'Four Emergent Macroscopic Arrows Anchored Above Bidirectional Microphysics',
    imageFile: 'four_arrows_alignment_1795773180810.jpg',
    caption:
      'Architectural schema displaying four parallel macroscopic arrows—thermodynamic, radiative, measurement, and explanatory—originating from a narrow low-entropy cosmic past pillar above a bidirectional microscopic worldline lattice. It synthesizes why everyday explanation tracks forward arrows even though fundamental physics permits two-boundary determination.'
  },

  // Part 8: 3 Illustrations (XXV–XXVII)
  {
    id: 'retro-plate-25',
    plateNumber: 'Illustration XXV',
    anchorChapter: 8,
    bgHex: '#134733',
    accentHex: '#11505C',
    title: 'Fivefold Bridge of Temporally Distributed Causal Determination Between B_past and B_future',
    imageFile: 'tdcd_fivefold_bridge_1795773126931.jpg',
    caption:
      'Structural bridge linking antecedent pillar B_past and consequent pillar B_future through the five taxonomic relations of Temporally Distributed Causal Determination: Antecedent Determination, Consequent Determination, Local Interaction, Global Consistency, and Explanatory Orientation.'
  },
  {
    id: 'retro-plate-26',
    plateNumber: 'Illustration XXVI',
    anchorChapter: 8,
    bgHex: '#103266',
    accentHex: '#3D0E2D',
    title: 'Concluding Resolution Key: Mapping Chapter 1 Taxonomic Nodes to Chapter 8 Findings',
    imageFile: 'chapter1_resolution_key_1795773064119.jpg',
    caption:
      'Analytical answer-key matrix pairing Chapter 1\'s four taxonomic domains—Time (T1–T5), Causation (C1–C6), Explanation (E1–E5), and Information (I1–I5)—with their physical mechanisms and formal resolutions developed in Parts 2–8, indexing Section 21\'s direct answers to the monograph\'s opening questions.'
  },
  {
    id: 'retro-plate-27',
    plateNumber: 'Illustration XXVII',
    anchorChapter: 8,
    bgHex: '#5B1743',
    accentHex: '#233C53',
    title: 'Two-Boundary Cosmic Manifold: Present Reality in Equilibrium Between Antecedent and Terminal Horizons',
    imageFile: 'dual_border_cosmos_1795773183009.jpg',
    caption:
      'Four-dimensional spacetime manifold framed between the Antecedent Horizon of the deep past and the Terminal Horizon of the future, with geodesic trajectories and variational arcs converging onto the Present Event. It encapsulates the study\'s concluding claim: the universe holds coherent order across both temporal borders without backward messaging.'
  },
  {
    id: 'retro-plate-28',
    plateNumber: 'Illustration XXVIII',
    anchorChapter: 6,
    bgHex: '#4B0B0E',
    accentHex: '#7A1921',
    title: 'Quantum Fisher Information Metric and Two-State Vector Pre/Post-Selection Geometry',
    imageFile: 'igrt_tsvf_metric_darkred_1795791950344.jpg',
    caption:
      'Mach-Zehnder interferometer coupling forward preparation ket |Ψ⟩ and backward post-selection bra ⟨Φ| across a weak-coupling meter dial ⟨A⟩_w = ⟨Φ|Â|Ψ⟩ / ⟨Φ|Ψ⟩ linked to geodesics and Fisher-Rao proper-time contours ds² = ∑ g_ij dp_i dp_j on a Riemannian projective Hilbert manifold. Rendered in white geometric linework on a deep crimson dark red background, it bridges two-boundary quantum measurement with Bulaqueña’s information-geometric resonant time (IGRT) metrology.'
  },
  {
    id: 'retro-plate-29',
    plateNumber: 'Illustration XXIX',
    anchorChapter: 7,
    bgHex: '#522106',
    accentHex: '#8A3D12',
    title: 'Cosmological Weyl-Curvature Boundary, Landauer Dissipation Lattice, and Future Horizon',
    imageFile: 'weyl_landauer_horizon_darkorange_1795791949345.jpg',
    caption:
      'Spacetime horizon geometry expanding from initial smoothness (Weyl curvature C_{αβγδ} = 0 at the Past Hypothesis) through a Landauer thermodynamic memory lattice emitting heat ΔQ ≥ k_B T ln 2 from bit-writing registers into phase-space cells, framed against future boundary hypersurface B_future. Rendered in white geometric linework on a burnt dark orange background, it illustrates how irreversible record formation tracks the thermodynamic gradient within a globally bounded cosmos.'
  }
];

export const RETRO_PLATES_META: RetroPlateMetaSpec[] = RAW_PLATE_SEEDS.map((seed) => {
  const bg = shade(seed.bgHex);
  const acc = shade(seed.accentHex);
  return {
    id: seed.id,
    plateNumber: seed.plateNumber,
    anchorChapter: seed.anchorChapter,
    hueFamily: bg.family,
    shadeName: bg.name,
    bgHex: bg.hex,
    bgRgb: bg.rgb,
    accentFamily: acc.family,
    accentShadeName: acc.name,
    accentHex: acc.hex,
    accentRgb: acc.rgb,
    title: seed.title,
    imageFile: seed.imageFile,
    caption: seed.caption
  };
});

export const RETRO_FIGURES: RetrocausalityFigureSpec[] = [];
