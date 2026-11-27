/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Full-Page A4 Scientific & Philosophical Illustration Component for Paper 17:
 * "Consciousness as a Thermodynamic Compression Artifact"
 *
 * Renders 24 static JPEG plates plus 6 bespoke 3:4 etching SVG fallback plates
 * over the 34-shade Dark Muted Blue / Magenta / Teal / Tan pigment system.
 */

import React, { useState } from 'react';
import mindP01 from '../assets/images/mind_p01_observer_1795801698492.jpg';
import mindP02 from '../assets/images/mind_p02_loop_1795801698997.jpg';
import mindP03 from '../assets/images/mind_p03_diagonalization_1795801699233.jpg';
import mindP04 from '../assets/images/mind_p04_erasure_1795801701839.jpg';
import mindP05 from '../assets/images/mind_p05_realtime_1795801702315.jpg';
import mindP06 from '../assets/images/mind_p06_manifold_1795801702489.jpg';
import mindP07 from '../assets/images/mind_p07_noninjective_1795801704389.jpg';
import mindP08 from '../assets/images/mind_p08_opacity_1795801704999.jpg';
import mindP09 from '../assets/images/mind_p09_qualityspace_1795801705174.jpg';
import mindP10 from '../assets/images/mind_p10_relational_1795801704876.jpg';
import mindP11 from '../assets/images/mind_p11_microcosm_1795801706655.jpg';
import mindP12 from '../assets/images/mind_p12_inheritance_1795801825060.jpg';
import mindP13 from '../assets/images/mind_p13_restriction_1795801826666.jpg';
import mindP14 from '../assets/images/mind_p14_submanifold_1795801805509.jpg';
import mindP15 from '../assets/images/mind_p15_cosmicgeo_1795801827185.jpg';
import mindP16 from '../assets/images/mind_p16_locus_1795801710064.jpg';
import mindP17 from '../assets/images/mind_p17_dissipation_1795801712635.jpg';
import mindP18 from '../assets/images/mind_p18_ownership_1795801827578.jpg';
import mindP19 from '../assets/images/mind_p19_fractal_1795801714324.jpg';
import mindP22 from '../assets/images/mind_p22_zombie_1795801830134.jpg';
import mindP25 from '../assets/images/mind_p25_minimal_1795801805552.jpg';
import mindP26 from '../assets/images/mind_p26_hiddensoul_1795801804793.jpg';
import mindP27 from '../assets/images/mind_p27_unity_1795801805567.jpg';
import mindP29 from '../assets/images/mind_p29_bottleneck_1795801806279.jpg';

import {
  MIND_PLATES_META,
  type MindPlateMetaSpec,
  type MindSeriesKey
} from '../types/mindCompressionPaperFigures';
import { formatSvgMathMarkup } from '../utils/formatMathUnicode';

export { MIND_PLATES_META, type MindPlateMetaSpec, type MindSeriesKey };

export interface MindPlateSpec extends MindPlateMetaSpec {
  imagePath: string;
}

const PLATE_IMAGE_BY_FILE: Record<string, string> = {
  'mind_p01_observer_1795801698492.jpg': mindP01,
  'mind_p02_loop_1795801698997.jpg': mindP02,
  'mind_p03_diagonalization_1795801699233.jpg': mindP03,
  'mind_p04_erasure_1795801701839.jpg': mindP04,
  'mind_p05_realtime_1795801702315.jpg': mindP05,
  'mind_p06_manifold_1795801702489.jpg': mindP06,
  'mind_p07_noninjective_1795801704389.jpg': mindP07,
  'mind_p08_opacity_1795801704999.jpg': mindP08,
  'mind_p09_qualityspace_1795801705174.jpg': mindP09,
  'mind_p10_relational_1795801704876.jpg': mindP10,
  'mind_p11_microcosm_1795801706655.jpg': mindP11,
  'mind_p12_inheritance_1795801825060.jpg': mindP12,
  'mind_p13_restriction_1795801826666.jpg': mindP13,
  'mind_p14_submanifold_1795801805509.jpg': mindP14,
  'mind_p15_cosmicgeo_1795801827185.jpg': mindP15,
  'mind_p16_locus_1795801710064.jpg': mindP16,
  'mind_p17_dissipation_1795801712635.jpg': mindP17,
  'mind_p18_ownership_1795801827578.jpg': mindP18,
  'mind_p19_fractal_1795801714324.jpg': mindP19,
  'mind_p22_zombie_1795801830134.jpg': mindP22,
  'mind_p25_minimal_1795801805552.jpg': mindP25,
  'mind_p26_hiddensoul_1795801804793.jpg': mindP26,
  'mind_p27_unity_1795801805567.jpg': mindP27,
  'mind_p29_bottleneck_1795801806279.jpg': mindP29
};

export const MIND_PLATES: MindPlateSpec[] = MIND_PLATES_META.map((meta) => ({
  ...meta,
  imagePath: meta.imageFile ? PLATE_IMAGE_BY_FILE[meta.imageFile] ?? '' : ''
}));

export const MindPlateCard: React.FC<{ plate: MindPlateSpec }> = ({ plate }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <figure
      className="my-10 p-6 sm:p-8 text-[#FAF8F4]"
      style={{
        backgroundColor: plate.bgHex,
        borderColor: plate.accentHex,
        borderWidth: '1px',
        borderStyle: 'solid'
      }}
    >
      <div
        className="pb-3 mb-5 border-b flex flex-wrap items-center justify-between gap-4 text-xs font-mono"
        style={{ borderColor: plate.accentHex }}
      >
        <span className="text-[#FAF8F4] tracking-wide">
          {plate.plateNumber} · Chapter {plate.anchorChapter} ({plate.anchorSection})
        </span>
        <span className="text-[#E6ECF5]/85">
          {plate.hueGroup}: {plate.shadeName} ({plate.bgHex}) · Accent: {plate.accentShadeName} ({plate.accentHex})
        </span>
      </div>

      {plate.imagePath && !imgError ? (
        <div
          className="mx-auto w-full max-w-[620px] aspect-[210/297] overflow-hidden flex items-center justify-center"
          style={{
            backgroundColor: plate.bgHex,
            borderColor: plate.accentHex,
            borderWidth: '1px',
            borderStyle: 'solid'
          }}
        >
          <img
            src={plate.imagePath}
            alt={plate.title}
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
            className="w-full h-full object-contain"
          />
        </div>
      ) : plate.svgMarkup ? (
        <div
          className="mx-auto w-full max-w-[620px] aspect-[210/297] overflow-hidden flex items-center justify-center [&>svg]:w-full [&>svg]:h-full"
          style={{
            backgroundColor: plate.bgHex,
            borderColor: plate.accentHex,
            borderWidth: '1px',
            borderStyle: 'solid'
          }}
          dangerouslySetInnerHTML={{ __html: formatSvgMathMarkup(plate.svgMarkup) }}
        />
      ) : (
        <div
          className="mx-auto w-full max-w-[620px] aspect-[210/297] flex flex-col items-center justify-center p-8 text-center"
          style={{
            backgroundColor: plate.bgHex,
            borderColor: plate.accentHex,
            borderWidth: '1px',
            borderStyle: 'solid'
          }}
        >
          <span className="font-mono text-xs text-[#FAF8F4]">{plate.plateNumber}</span>
          <span className="font-['Playfair_Display'] text-lg text-[#FAF8F4] mt-2 font-normal">{plate.title}</span>
        </div>
      )}

      <figcaption
        className="mt-6 pt-4 border-t space-y-2"
        style={{ borderColor: plate.accentHex }}
      >
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <div className="font-['Playfair_Display'] text-lg text-[#FAF8F4] font-normal">
            {plate.title}
          </div>
          <span className="font-mono text-[11px] text-[#E6ECF5]/75">
            {plate.series}
          </span>
        </div>
        <p className="text-sm leading-relaxed text-[#E8EEF8]">
          {plate.caption}
        </p>
        <p className="font-mono text-[11px] text-[#DCE8FF]/75">
          Layered dark grounds: {plate.layeredShades.join(' · ')}
        </p>
      </figcaption>
    </figure>
  );
};
