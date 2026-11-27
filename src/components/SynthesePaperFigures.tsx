/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Full-Page A4 Scientific & Philosophical Visual Apparatus for Paper 15 (Synthese Journal):
 * - 22 Full-Page A4 Portrait Scientific Engraving Plates (Chapters 1–9)
 * - 22 Full-Page A4 Pure Vector Scientific Diagrams from synthesePaperFigures.ts
 * = 44 Full-Page A4 Illustrations Total (>= 3 per Chapter 1–9)
 * Palette: Strictly Dark Blue (#08182E, #0B203B), Slate Gray Blue (#51677B, #8B9FAF),
 *          Muted Blue-Green (#48827E, #87B9B2), and Frost Ice Ink (#E5EFF5, #F0F6FA).
 */

import React, { useState } from 'react';
import plate01Img from '../assets/images/synthese_p15_r3_p01_1795786547427.jpg';
import plate02Img from '../assets/images/synthese_p15_r3_p02_v2_1795786649735.jpg';
import plate03Img from '../assets/images/synthese_p15_r3_p03_1795786548689.jpg';
import plate04Img from '../assets/images/synthese_p15_r3_p04_1795786549355.jpg';
import plate05Img from '../assets/images/synthese_p15_r3_p05_v2_1795786651145.jpg';
import plate06Img from '../assets/images/synthese_p15_r3_p06_1795786552657.jpg';
import plate07Img from '../assets/images/synthese_p15_r3_p07_1795786553164.jpg';
import plate08Img from '../assets/images/synthese_p15_r3_p08_1795786554664.jpg';
import plate09Img from '../assets/images/synthese_p15_r3_p09_1795786555765.jpg';
import plate10Img from '../assets/images/synthese_p15_r3_p10_1795786575235.jpg';
import plate11Img from '../assets/images/synthese_p15_r3_p11_1795786577124.jpg';
import plate12Img from '../assets/images/synthese_p15_r3_p12_1795786625742.jpg';
import plate13Img from '../assets/images/synthese_p15_r3_p13_v2_1795786651097.jpg';
import plate14Img from '../assets/images/synthese_p15_r3_p14_v2_1795786651333.jpg';
import plate15Img from '../assets/images/synthese_p15_r3_p15_1795786626900.jpg';
import plate16Img from '../assets/images/synthese_p15_r3_p16_1795786626319.jpg';
import plate17Img from '../assets/images/synthese_p15_r3_p17_1795786626267.jpg';
import plate18Img from '../assets/images/synthese_p15_r3_p18_1795786582350.jpg';
import plate19Img from '../assets/images/synthese_plate_19_varying_domains_1795789066980.jpg';
import plate20Img from '../assets/images/synthese_plate_20_cut_taxonomy_1795789069521.jpg';
import plate21Img from '../assets/images/synthese_plate_21_anomaly_zone_1795789069701.jpg';
import plate22Img from '../assets/images/synthese_plate_22_falsification_matrix_1795789070654.jpg';
import { formatSvgMathMarkup } from '../utils/formatMathUnicode';
import { SYNTHESE_FIGURES, type SyntheseFigureSpec } from '../types/synthesePaperFigures';

export { SYNTHESE_FIGURES, type SyntheseFigureSpec };

export interface SynthesePlateSpec {
  id: string;
  plateNumber: string;
  anchorChapter: number;
  title: string;
  imagePath: string;
  cropDeckledEdge?: boolean;
  caption: string;
}

export const SYNTHESE_PLATES: SynthesePlateSpec[] = [
  // Chapter 1
  {
    id: 'synthese-plate-1',
    plateNumber: 'Plate I',
    anchorChapter: 1,
    title: 'Kant & Husserl: Situated Astronomical Horizon, Armillary Sphere & Modal S4 ⟨W, R, D(w)⟩',
    imagePath: plate01Img,
    caption:
      'Immanuel Kant and Edmund Husserl flanking a brass armillary sphere and concentric varying-domain modal S4 horizon ⟨W, R, D(w)⟩: illustrating Axiom A1 (Perspectival Immanence) and the impossibility of an unsituated global view (§1).'
  },
  {
    id: 'synthese-plate-2',
    plateNumber: 'Plate II',
    anchorChapter: 1,
    title: 'Aristotle, Dignāga & Leibniz: Non-Monotonic Domains D(w₀) ⊈ D(w₁) & Breuer’s Diagonal Limit',
    imagePath: plate02Img,
    caption:
      'Portraits of Aristotle, Dignāga (svasaṃvedana), and G. W. Leibniz (perspectival monadology) framing the Barcan-blocking varying-domain lattice D(w₀) = ∅ → D(w₁) and Breuer’s subsystem self-measurement blind spot (§1, Theorem 1.1).'
  },
  // Chapter 2
  {
    id: 'synthese-plate-3',
    plateNumber: 'Plate III',
    anchorChapter: 2,
    title: 'Humans Experiencing Lived Time: Musical Melody Unfolded Across Husserl’s Bernau Zeitdiagramm',
    imagePath: plate03Img,
    caption:
      'An embodied human listener experiencing musical pitch succession mapped geometrically onto Edmund Husserl’s diagonal Bernau time diagram (retentional tails E′, E″, primal impression Urimp, and open protentional horizon, §§3–5).'
  },
  {
    id: 'synthese-plate-4',
    plateNumber: 'Plate IV',
    anchorChapter: 2,
    title: 'Heidegger, Merleau-Ponty, Henry & Levinas: Chiasmic Écart, Clearing Cone & Ethical Face',
    imagePath: plate04Img,
    caption:
      'Four phenomenological masterworks synthesized: Martin Heidegger’s ecstatic clearing (Lichtung), Maurice Merleau-Ponty’s touching–touched hand chiasm around quartz, Michel Henry’s immanent auto-affection ring, and Emmanuel Levinas’s asymmetrical Face (§§6–9).'
  },
  // Chapter 3
  {
    id: 'synthese-plate-5',
    plateNumber: 'Plate V',
    anchorChapter: 3,
    title: 'Derrida, Foucault & Lacan: Möbius Trace, Barred Subject ($) & Panopticon Dispositif',
    imagePath: plate05Img,
    cropDeckledEdge: true,
    caption:
      'Portraits of Jacques Derrida, Michel Foucault, and Jacques Lacan surrounding a continuous Möbius topology, the barred subject under erasure ($), the optical rays of Velázquez’s Las Meninas, and radial Benthamite dispositif geometry (§§10–12).'
  },
  {
    id: 'synthese-plate-6',
    plateNumber: 'Plate VI',
    anchorChapter: 3,
    title: 'Deleuze, Nancy & Marion: Bergsonian Memory Cones, Le Pli & Saturated Aperture Overflow',
    imagePath: plate06Img,
    caption:
      'Gilles Deleuze’s virtual pure-past memory cone and invaginated fold (le pli), Jean-Luc Nancy’s co-original plural-pole boundary exposure (être-avec), and Jean-Luc Marion’s saturated ray bundle overflowing finite aperture cuts (§§13–15a).'
  },
  // Chapter 4
  {
    id: 'synthese-plate-7',
    plateNumber: 'Plate VII',
    anchorChapter: 4,
    title: 'Bohr, Von Neumann & Heisenberg: Solvay Photon-Box & Covariant Movable Cuts c₁, c₂',
    imagePath: plate07Img,
    caption:
      'Niels Bohr, John von Neumann, and Werner Heisenberg surrounding the 1930 Solvay gravitational photon-box and sliding measurement boundaries c₁, c₂ along H_S ⊗ H_A ⊗ H_O: empirical probability remains cut-shift invariant (§§16–17).'
  },
  {
    id: 'synthese-plate-8',
    plateNumber: 'Plate VIII',
    anchorChapter: 4,
    title: 'Everett, Wigner & Wheeler: Wigner’s Friend Interferometer & Cosmic Participatory U-Eye',
    imagePath: plate08Img,
    caption:
      'Hugh Everett III, Eugene Wigner, and John Archibald Wheeler framing Wigner’s sealed Friend inside a nested Mach–Zehnder interferometer beneath Wheeler’s self-observing cosmic U-loop: refuting absolute observer-independent macro-facts (§§18–20).'
  },
  // Chapter 5
  {
    id: 'synthese-plate-9',
    plateNumber: 'Plate IX',
    anchorChapter: 5,
    title: 'Rovelli, Fuchs & Zurek: Doplicher–Longo Type I Split Collar & No-Go Theorem 5.1 Circuit',
    imagePath: plate09Img,
    caption:
      'Carlo Rovelli, Christopher Fuchs, and Wojciech Zurek framing the Doplicher–Longo Type I algebraic split collar M(O₁) ⊂ N ⊂ M(O₂)′, the two-qubit Bell witness for No-Go Theorem 5.1 (F > 1/2 vs. r = m), Quantum Darwinism pointer fragments, and QBism’s Born simplex (§§21–23).'
  },
  {
    id: 'synthese-plate-10',
    plateNumber: 'Plate X',
    anchorChapter: 5,
    title: 'Cramer, Griffiths & Hartle: Bilateral Spacetime Handshake, History Lattice & IGUS Engine',
    imagePath: plate10Img,
    caption:
      'John Cramer, Robert Griffiths, and James Hartle uniting the bilateral emitter–absorber handshake (ψ and ψ*), orthogonal consistent Boolean history chains D(α, α′) = 0, and Gell-Mann–Hartle’s negentropic IGUS record cycle (§§24–27).'
  },
  // Chapter 6
  {
    id: 'synthese-plate-11',
    plateNumber: 'Plate XI',
    anchorChapter: 6,
    title: 'Maturana, Varela & Friston: Embodied Human Brain–Torso & Markov Blanket Closure (S/A)',
    imagePath: plate11Img,
    caption:
      'Humberto Maturana, Francisco Varela, and Karl Friston enclosing an embodied human nervous system connected via bidirectional sensory (S) and active (A) states across a conditional Markov blanket isolating internal autonomous metabolism (§§27, 30–31).'
  },
  {
    id: 'synthese-plate-12',
    plateNumber: 'Plate XII',
    anchorChapter: 6,
    title: 'Von Foerster, Luhmann, Metzinger & Dennett: Eigenbehavior Fixed Point & Retinal Blind Spot',
    imagePath: plate12Img,
    caption:
      'Heinz von Foerster’s recursive eigenbehavior O(O(x)) = x*, Niklas Luhmann’s Spencer-Brown unmarked-exterior re-entry, Thomas Metzinger’s transparent Phenomenal Self-Model, and Daniel Dennett’s narrative gravity around the optical blind spot (§§28–29, 32–33).'
  },
  // Chapter 7
  {
    id: 'synthese-plate-13',
    plateNumber: 'Plate XIII',
    anchorChapter: 7,
    title: 'The Thick Living Now: Human Subject in EEG Cap & Stratified Allen Intervals (I_ret, I_now, I_prot)',
    imagePath: plate13Img,
    caption:
      'A human observer wearing a neural EEG sensor array experiencing the 100–3000 ms Varela–Pöppel integration window mapped directly onto Allen’s interval temporal relations Overlaps(I_ret, I_now) and Meets(I_now, I_prot) alongside Francisco Varela (§37).'
  },
  {
    id: 'synthese-plate-14',
    plateNumber: 'Plate XIV',
    anchorChapter: 7,
    title: 'Four Separating Countermodels (M_~A1..M_~A4) & Stratified Four-Axiom Logic Architecture',
    imagePath: plate14Img,
    caption:
      'Archival cutaway of the stratified modal lattice A1–A4 proving minimal non-redundancy via the four explicit separating countermodels: Archimedean sensor M_~A1, Leibnizian bubble M_~A2, cut-free continuum M_~A3, and static block cut M_~A4 (§§34–37).'
  },
  // Chapter 8
  {
    id: 'synthese-plate-15',
    plateNumber: 'Plate XV',
    anchorChapter: 8,
    title: 'Structural Identity Thesis (SIT): Faithful Functors Phen, Quant, Sys Converging on Σ_Obs',
    imagePath: plate15Img,
    caption:
      'Husserl (Phen), Rovelli (Quant), and Varela (Sys) projecting their respective categories through three commutative functor beams onto the shared invariant observer prism Σ_Obs while preserving composition F(g ∘ f) = F(g) ∘ F(f) (§38).'
  },
  {
    id: 'synthese-plate-16',
    plateNumber: 'Plate XVI',
    anchorChapter: 8,
    title: 'Anti-Holism Crucibles: Interferometer, Lipid Vesicle Calorimeter, EEG Masking & Pulsar Timing',
    imagePath: plate16Img,
    caption:
      'Four physically disjoint experimental falsification apparatuses decoupling Axioms A1–A4 against Duhem–Quine evasion: Local Friendliness interferometry (A1/A2), active lipid vesicle persistence (A3), psychophysical EEG masking (A4a), and optical–pulsar chronometry (§40).'
  },
  // Chapter 9
  {
    id: 'synthese-plate-17',
    plateNumber: 'Plate XVII',
    anchorChapter: 9,
    title: 'Resolution of Constitutive Absence: Interlocked Celestial Meridian & Optical Retina Prism',
    imagePath: plate17Img,
    caption:
      'A human retina aligned along an interlocked astronomical meridian prism: resolving the Paradox of Constitutive Absence by showing why an observer inhabits a relational, finite, asymmetric horizon rather than sitting inside or outside reality (§§41, 43).'
  },
  {
    id: 'synthese-plate-18',
    plateNumber: 'Plate XVIII',
    anchorChapter: 9,
    title: 'Nāgārjuna, Haraway & Kant: Svasaṃvedana Mirror-Eye & Situated Standpoint Reticle',
    imagePath: plate18Img,
    caption:
      'Nāgārjuna (emptiness/interdependence), Donna Haraway (situated partial knowledges against the "god trick"), and Immanuel Kant converging on Dignāga’s reflexive svasaṃvedana mirror-eye and multi-perspective parity without Eurocentric privilege (§§42–43).'
  },
  // Additional Specialized Plates (XIX–XXII)
  {
    id: 'synthese-plate-19',
    plateNumber: 'Plate XIX',
    anchorChapter: 7,
    title: 'Existence Predicate E(x) and Non-Monotonic Varying Domains D(w₀) ⊈ D(w₁)',
    imagePath: plate19Img,
    caption:
      'Varying-domain modal S4 Kripke frame ⟨W, R, D(w)⟩ illustrating objects entering and exiting world domains via existence predicate E(x) across accessible contexts R, explicitly blocking Barcan (BF) and Converse Barcan (CBF) schemas (Appendix E & §1).'
  },
  {
    id: 'synthese-plate-20',
    plateNumber: 'Plate XX',
    anchorChapter: 4,
    title: 'Quantum Measurement-Cut Taxonomy: Bohr, Von Neumann, Heisenberg & Rovelli',
    imagePath: plate20Img,
    caption:
      'Fourfold structural taxonomy contrasting Bohr’s epistemic-pragmatic classical boundary, von Neumann’s Hilbert-space Process I/II partition, Heisenberg’s shiftable observer/object cut, and Rovelli’s relational bipartite interaction cut under Axiom A3 (§§16–17, §21).'
  },
  {
    id: 'synthese-plate-21',
    plateNumber: 'Plate XXI',
    anchorChapter: 3,
    title: 'The Levinas–Marion Anomaly Zone: Ethical Asymmetry & Saturated Aperture Overflow',
    imagePath: plate21Img,
    caption:
      'Spatial demarcation of scope limits: Emmanuel Levinas’s asymmetrical ethical Face (§9) and Jean-Luc Marion’s Saturated Phenomenon (§15, I(Phen : B_o) ≫ C(B_o)) overflowing the bounded epistemic horizon H_o and cut B_o of Axioms A1–A4.'
  },
  {
    id: 'synthese-plate-22',
    plateNumber: 'Plate XXII',
    anchorChapter: 8,
    title: 'Operationalized Empirical Falsification Protocol Matrix Across Axioms A1–A4',
    imagePath: plate22Img,
    caption:
      'Four-channel laboratory crucible mapping each axiom (A1–A4) to physically disjoint experimental apparatuses—Local Friendliness interferometry (η > 2/3), Bell-frame covariance polarizers, dissipative lipid-vesicle micro-calorimetry, and EEG temporal-binding oscillometry (§40).'
  }
];

export const SynthesePlateCard: React.FC<{ plate: SynthesePlateSpec }> = ({ plate }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <figure className="my-10 bg-[#08182E] text-[#F0F6FA] border border-[#51677B]/60 p-5 sm:p-8 shadow-lg">
      <div className="pb-3 mb-5 border-b border-[#51677B]/50 flex items-center justify-between gap-4 text-xs font-mono">
        <span className="text-[#E5EFF5] tracking-widest uppercase">
          {plate.plateNumber} · Chapter {plate.anchorChapter}
        </span>
        <span className="text-[#87B9B2] tracking-wider uppercase">
          Full-Page A4 Scientific Plate
        </span>
      </div>

      {!imgError ? (
        <div className="w-full aspect-[210/297] bg-[#08182E] overflow-hidden flex items-center justify-center">
          <img
            src={plate.imagePath}
            alt={plate.title}
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
            className={`w-full h-full object-contain bg-[#08182E] ${
              plate.cropDeckledEdge ? 'scale-[1.04]' : ''
            }`}
          />
        </div>
      ) : (
        <div className="aspect-[210/297] w-full border border-[#51677B]/60 bg-[#0B203B] flex flex-col items-center justify-center p-8 text-center">
          <span className="font-mono text-xs text-[#87B9B2]">{plate.plateNumber}</span>
          <span className="font-['Playfair_Display'] text-lg text-[#F0F6FA] mt-2 font-normal">{plate.title}</span>
        </div>
      )}

      <figcaption className="mt-5 pt-4 border-t border-[#51677B]/50 space-y-1.5">
        <div className="font-['Playfair_Display'] text-lg text-[#F0F6FA] font-normal">
          {plate.title}
        </div>
        <p className="text-sm leading-relaxed text-[#BFD0DA]">
          {plate.caption}
        </p>
      </figcaption>
    </figure>
  );
};

export const SyntheseFigureCard: React.FC<{ fig: SyntheseFigureSpec }> = ({ fig }) => {
  const formattedSvg = formatSvgMathMarkup(fig.svgMarkup);

  return (
    <figure className="my-10 bg-[#08182E] text-[#F0F6FA] border border-[#51677B]/60 p-5 sm:p-8 shadow-lg">
      <div className="pb-3 mb-5 border-b border-[#51677B]/50 flex items-center justify-between gap-4 text-xs font-mono">
        <span className="text-[#E5EFF5] tracking-widest uppercase tabular-nums">
          {fig.figureNumber} · {fig.anchorChapter === 0 ? 'Abstract' : `Chapter ${fig.anchorChapter}`}
        </span>
        <span className="text-[#87B9B2] tracking-wider uppercase">
          Full-Page A4 Vector Diagram
        </span>
      </div>

      <div
        className="w-full aspect-[210/297] bg-[#08182E] overflow-hidden [&>svg]:w-full [&>svg]:h-full [&>svg]:block"
        dangerouslySetInnerHTML={{ __html: formattedSvg }}
      />

      <figcaption className="mt-5 pt-4 border-t border-[#51677B]/50 space-y-1.5">
        <div className="font-['Playfair_Display'] text-lg text-[#F0F6FA] font-normal">
          {fig.title}
        </div>
        <p className="text-sm leading-relaxed text-[#BFD0DA]">
          {fig.caption}
        </p>
      </figcaption>
    </figure>
  );
};
