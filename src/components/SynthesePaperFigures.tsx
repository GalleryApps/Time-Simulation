/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Restrained Museum-Editorial Visual Apparatus for Paper 15 (Synthese Journal):
 * - 4 Muted Archival Plates (Toned harmoniously against Warm Ecru)
 * - 6 Pure Vector Conceptual Diagrams from synthesePaperFigures.ts
 */

import React, { useState } from 'react';
import coverPlateImg from '../assets/images/synthese_cover_plate_1795681229780.jpg';
import conventionalismPlateImg from '../assets/images/synthese_conventionalism_plate_1795681229330.jpg';
import moritaPlateImg from '../assets/images/synthese_morita_plate_1795681229768.jpg';
import functionalismPlateImg from '../assets/images/synthese_functionalism_plate_1795681231606.jpg';
import { formatSvgMathMarkup } from '../utils/formatMathUnicode';
import { SYNTHESE_FIGURES, type SyntheseFigureSpec } from '../types/synthesePaperFigures';

export { SYNTHESE_FIGURES, type SyntheseFigureSpec };

export interface SynthesePlateSpec {
  id: string;
  plateNumber: string;
  anchorChapter: number;
  title: string;
  imagePath: string;
  caption: string;
}

export const SYNTHESE_PLATES: SynthesePlateSpec[] = [
  {
    id: 'synthese-plate-1',
    plateNumber: 'Plate I',
    anchorChapter: 1,
    title: 'The Divided Observer: Transcendental Pole vs. Physical Measurement Cut',
    imagePath: coverPlateImg,
    caption:
      'Editorial plate contrasting transcendental constitutive structures with localized physical measurement boundaries bridged across a single horizon.'
  },
  {
    id: 'synthese-plate-2',
    plateNumber: 'Plate II',
    anchorChapter: 3,
    title: 'Trace, Split, and Horizon Geometry Across Non-Coincident Perspectives',
    imagePath: conventionalismPlateImg,
    caption:
      'Visual synthesis of Part III: replacing an illusory punctual zero-point with deferred boundary traces and operationally separated horizons.'
  },
  {
    id: 'synthese-plate-3',
    plateNumber: 'Plate III',
    anchorChapter: 7,
    title: 'Perspective Manifold and Overlapping Local Reference Horizons',
    imagePath: moritaPlateImg,
    caption:
      'Illustrating the constructive resolution of Part VII: overlapping local reference perspectives united by relational consistency across finite boundaries.'
  },
  {
    id: 'synthese-plate-4',
    plateNumber: 'Plate IV',
    anchorChapter: 8,
    title: 'Chronometric Reference Horizons and the Structural Measure of Temporal Thickness',
    imagePath: functionalismPlateImg,
    caption:
      'Precision chronometric baselines bridging philosophical claims of living-present thickness to testable falsification conditions in philosophy of science.'
  }
];

export const SynthesePlateCard: React.FC<{ plate: SynthesePlateSpec }> = ({ plate }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <figure className="my-10 border border-[#CBBBA0] dark:border-[#186876]/50 bg-[#FDFBF7] dark:bg-[#062429] p-5 sm:p-7">
      <div className="pb-2.5 mb-4 border-b border-[#E2D6C1] dark:border-[#11505C]/40 flex items-center justify-between gap-4 text-xs font-mono">
        <span className="text-[#4A0E33] dark:text-[#C974A6] tracking-wide">
          {plate.plateNumber} · Part {plate.anchorChapter}
        </span>
      </div>

      {!imgError ? (
        <div className="overflow-hidden border border-[#CBBBA0]/80 dark:border-[#11505C]/40 bg-[#FAF6EC]">
          <img
            src={plate.imagePath}
            alt={plate.title}
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
            className="w-full h-auto object-cover saturate-[0.52] sepia-[0.14] contrast-[0.96]"
          />
        </div>
      ) : (
        <div className="aspect-[4/3] w-full border border-[#CBBBA0] bg-[#FAF6EC] flex flex-col items-center justify-center p-8 text-center">
          <span className="font-mono text-xs text-[#4A0E33]">{plate.plateNumber}</span>
          <span className="font-['Playfair_Display'] text-lg text-[#062429] mt-2 font-normal">{plate.title}</span>
        </div>
      )}

      <figcaption className="mt-5 space-y-1.5">
        <div className="font-['Playfair_Display'] text-lg text-[#161A1D] dark:text-[#F9EEF4] font-normal">
          {plate.title}
        </div>
        <p className="text-sm leading-relaxed text-[#0B3942] dark:text-[#6CB2BD]">
          {plate.caption}
        </p>
      </figcaption>
    </figure>
  );
};

export const SyntheseFigureCard: React.FC<{ fig: SyntheseFigureSpec }> = ({ fig }) => {
  const formattedSvg = formatSvgMathMarkup(fig.svgMarkup);

  return (
    <figure className="my-10 border border-[#CBBBA0] dark:border-[#186876]/55 bg-[#FDFBF7] dark:bg-[#062429] p-5 sm:p-7">
      <div className="pb-2.5 mb-4 border-b border-[#E2D6C1] dark:border-[#11505C]/40 flex items-center justify-between gap-4 text-xs font-mono">
        <span className="text-[#11505C] dark:text-[#6CB2BD] tabular-nums">
          {fig.figureNumber}
        </span>
      </div>

      <div
        className="w-full overflow-x-auto border border-[#E2D6C1] dark:border-[#11505C]/40 bg-[#FAF6EC]"
        dangerouslySetInnerHTML={{ __html: formattedSvg }}
      />

      <figcaption className="mt-5 space-y-1.5">
        <div className="font-['Playfair_Display'] text-lg text-[#161A1D] dark:text-[#FAF6EC] font-normal">
          {fig.title}
        </div>
        <p className="text-sm leading-relaxed text-[#0B3942] dark:text-[#6CB2BD]">
          {fig.caption}
        </p>
      </figcaption>
    </figure>
  );
};
