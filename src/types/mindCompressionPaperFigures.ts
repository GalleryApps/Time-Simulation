/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Full-Page A4 Scientific & Philosophical Illustration Registry for Paper 17:
 * "Consciousness as a Thermodynamic Compression Artifact"
 *
 * 30 full-page plates (Plates I–XXX across Series A–D) distributed across Chapters 1–8
 * (>= 2 plates per chapter), built on the 34-shade Dark Muted Blue, Dark Muted Magenta,
 * Dark Muted Teal, Dark Muted Tan, and 30 named muted pigment extension palette.
 */

import { MIND_34_SHADES, type MindShadeToken, type MindShadeGroup } from '../physics/mindCompressionPaper';

export type MindSeriesKey =
  | 'Series A · Compression Architecture (Theorems 1 & 2)'
  | 'Series B · Localized Compression Locus (Theorem 3)'
  | 'Series C · Dissolution of Classical Puzzles'
  | 'Series D · Falsifiability and Empirical Prediction';

export interface MindPlateMetaSpec {
  id: string;
  plateNumber: string;
  anchorChapter: number;
  anchorSection: string;
  series: MindSeriesKey;
  title: string;
  hueGroup: MindShadeGroup;
  shadeName: string;
  bgHex: string;
  bgRgb: [number, number, number];
  accentShadeName: string;
  accentHex: string;
  accentRgb: [number, number, number];
  layeredShades: string[];
  imageFile: string | null;
  svgMarkup?: string;
  caption: string;
}

const SHADE_MAP = new Map(MIND_34_SHADES.map((s) => [s.name.toLowerCase(), s]));

function findShade(name: string): MindShadeToken {
  const tok = SHADE_MAP.get(name.toLowerCase());
  if (!tok) throw new Error(`Unknown Paper 17 palette shade: ${name}`);
  return tok;
}

// ---------------------------------------------------------------------------
// Bespoke 3:4 (896 x 1200) Museum Etching SVG Generators for Plates 20, 21, 23, 24, 28, 30
// ---------------------------------------------------------------------------

function makePlateSvgDefs(idSuffix: string, bgHex: string, secondaryHex: string, tertiaryHex: string): string {
  return `
  <defs>
    <linearGradient id="bg-${idSuffix}" x1="0" y1="0" x2="0.4" y2="1">
      <stop offset="0%" stop-color="${bgHex}" />
      <stop offset="55%" stop-color="${secondaryHex}" />
      <stop offset="100%" stop-color="${tertiaryHex}" />
    </linearGradient>
    <radialGradient id="glow-${idSuffix}" cx="50%" cy="46%" r="52%">
      <stop offset="0%" stop-color="#FAF8F4" stop-opacity="0.16" />
      <stop offset="48%" stop-color="${secondaryHex}" stop-opacity="0.28" />
      <stop offset="100%" stop-color="${bgHex}" stop-opacity="0" />
    </radialGradient>
    <pattern id="hatch-${idSuffix}" width="12" height="12" patternUnits="userSpaceOnUse" patternTransform="rotate(34)">
      <line x1="0" y1="0" x2="0" y2="12" stroke="#FAF8F4" stroke-width="0.65" stroke-opacity="0.24" />
    </pattern>
    <pattern id="cross-${idSuffix}" width="10" height="10" patternUnits="userSpaceOnUse">
      <path d="M0 0 L10 10 M10 0 L0 10" stroke="#FAF8F4" stroke-width="0.55" stroke-opacity="0.22" />
    </pattern>
  </defs>`;
}

// Plate XX (p20): The Endogenous Perspectival Manifold
const SVG_PLATE_20 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 896 1200" width="896" height="1200">
  ${makePlateSvgDefs('p20', '#0F223D', '#3B1E26', '#070E1C')}
  <rect width="896" height="1200" fill="url(#bg-p20)" />
  <path d="M0,0 H896 V1200 H0 Z M448,175 C648,175 765,365 765,595 C765,830 630,995 448,995 C266,995 131,830 131,595 C131,365 248,175 448,175 Z" fill="#3D132B" fill-rule="evenodd" opacity="0.65" />
  <path d="M0,0 H896 V1200 H0 Z M448,210 C622,210 732,385 732,595 C732,808 612,960 448,960 C284,960 164,808 164,595 C164,385 274,210 448,210 Z" fill="url(#cross-p20)" fill-rule="evenodd" />
  <!-- Storm hatching outside manifold -->
  <g stroke="#FAF8F4" stroke-opacity="0.45" stroke-width="1.3" fill="none">
    ${Array.from({ length: 28 }, (_, i) => `<path d="M${20 + (i % 7) * 14},${60 + i * 38} Q${115 + (i % 5) * 18},${95 + i * 38} ${178},${70 + i * 38}" />`).join('')}
    ${Array.from({ length: 28 }, (_, i) => `<path d="M${876 - (i % 6) * 15},${55 + i * 39} Q${785 - (i % 4) * 16},${88 + i * 39} ${718},${64 + i * 39}" />`).join('')}
  </g>
  <rect width="896" height="1200" fill="url(#glow-p20)" />
  <!-- Protective endogenous compression manifold shells -->
  <ellipse cx="448" cy="585" rx="298" ry="390" fill="#0E122B" fill-opacity="0.72" stroke="#FAF8F4" stroke-width="2.4" stroke-dasharray="6 7" />
  <ellipse cx="448" cy="585" rx="276" ry="364" fill="none" stroke="#FAF8F4" stroke-width="1.4" stroke-dasharray="3 9" opacity="0.82" />
  <ellipse cx="448" cy="585" rx="252" ry="335" fill="none" stroke="#472115" stroke-width="18" opacity="0.28" />
  <ellipse cx="448" cy="585" rx="242" ry="324" fill="none" stroke="#FAF8F4" stroke-width="1.1" stroke-dasharray="2 10" opacity="0.65" />
  <!-- Curled fetal figure inside manifold -->
  <g fill="none" stroke="#FAF8F4" stroke-linecap="round" stroke-linejoin="round">
    <path d="M402,438 C355,446 322,492 325,545 C328,596 362,626 408,632 C450,637 478,608 482,566 C486,515 450,432 402,438 Z" fill="url(#hatch-p20)" stroke-width="2.6" />
    <path d="M358,478 C365,454 394,442 424,448 C452,454 468,480 468,512 C468,546 446,568 416,568" stroke-width="1.4" opacity="0.8" />
    <path d="M348,542 C366,544 378,546 390,542" stroke-width="1.6" />
    <!-- Spine and torso curled inward -->
    <path d="M452,620 C520,636 565,698 552,772 C538,848 468,882 396,866 C332,852 308,790 326,728 C342,672 384,650 425,658" fill="url(#hatch-p20)" stroke-width="2.6" />
    <!-- Folded knees and calves -->
    <path d="M412,796 C366,772 356,724 388,690 C420,656 474,664 494,704 C512,740 486,788 438,808" stroke-width="2.4" />
    <path d="M396,698 C422,686 456,698 468,728 C478,754 458,782 424,794" stroke-width="1.4" opacity="0.7" />
    <!-- Arms cradling the inner candle -->
    <path d="M430,645 C478,655 512,684 522,718 C528,738 512,756 490,746 C474,738 460,718 446,708" stroke-width="2.3" />
    <path d="M412,670 C454,678 482,698 494,724" stroke-width="1.6" />
  </g>
  <!-- Warm candle and inner glow flame inside manifold -->
  <g>
    <circle cx="536" cy="596" r="46" fill="#FAF8F4" opacity="0.14" />
    <circle cx="536" cy="596" r="22" fill="#FFFDF7" opacity="0.28" />
    <rect x="525" y="620" width="22" height="72" rx="3" fill="#0F223D" stroke="#FAF8F4" stroke-width="2" />
    <path d="M525,628 Q536,635 547,628" fill="none" stroke="#FAF8F4" stroke-width="1.3" />
    <line x1="536" y1="620" x2="536" y2="608" stroke="#FAF8F4" stroke-width="1.8" />
    <path d="M536,564 C548,582 550,602 536,610 C522,602 524,582 536,564 Z" fill="#FFF8EA" stroke="#FFFFFF" stroke-width="1.5" />
    <path d="M536,576 C542,586 542,598 536,603 C530,598 530,586 536,576 Z" fill="#FFFFFF" />
  </g>
  <!-- Metric rings and coordinate ticks -->
  <g fill="#FAF8F4" font-family="monospace" font-size="14" opacity="0.78">
    <text x="448" y="148" text-anchor="middle">Z_S = Phi_S(Sigma_S)  &lt;-&gt;  g_S = iota* g_U</text>
    <text x="448" y="1055" text-anchor="middle">ENDOGENOUS PERSPECTIVAL MANIFOLD  (d_t Z_S bounded by k_B T ln 2)</text>
  </g>
</svg>`;

// Plate XXI (p21): The Explanatory Gap as Non-Invertibility
const SVG_PLATE_21 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 896 1200" width="896" height="1200">
  ${makePlateSvgDefs('p21', '#0D2F36', '#0B2428', '#232F3B')}
  <rect width="896" height="1200" fill="url(#bg-p21)" />
  <rect x="0" y="830" width="896" height="370" fill="#1E3336" opacity="0.55" />
  <!-- Perspective floor grid -->
  <g stroke="#FAF8F4" stroke-opacity="0.32" stroke-width="1.1">
    ${Array.from({ length: 13 }, (_, i) => `<line x1="${448 + (i - 6) * 42}" y1="830" x2="${448 + (i - 6) * 125}" y2="1200" />`).join('')}
    ${Array.from({ length: 6 }, (_, i) => `<line x1="0" y1="${860 + i * 56}" x2="896" y2="${860 + i * 56}" />`).join('')}
  </g>
  <!-- Monumental Dark Muted Magenta Door -->
  <g>
    <rect x="255" y="140" width="390" height="690" fill="#3D132B" stroke="#FAF8F4" stroke-width="2.8" />
    <rect x="275" y="160" width="350" height="650" fill="#36142A" stroke="#FAF8F4" stroke-width="1.5" />
    <rect x="305" y="195" width="235" height="250" fill="url(#hatch-p21)" stroke="#FAF8F4" stroke-width="1.4" />
    <rect x="305" y="485" width="235" height="275" fill="url(#cross-p21)" stroke="#FAF8F4" stroke-width="1.4" />
    <!-- Vertical door crack revealing simplified flat silhouette on far side -->
    <rect x="572" y="162" width="48" height="646" fill="#0F223D" stroke="#FAF8F4" stroke-width="1.6" />
    <ellipse cx="596" cy="390" rx="14" ry="18" fill="#FAF8F4" opacity="0.88" />
    <path d="M578,420 H614 V620 H578 Z" fill="#FAF8F4" opacity="0.82" />
    <!-- Eye-shaped keyhole -->
    <path d="M476,475 Q520,445 564,475 Q520,505 476,475 Z" fill="#070E1C" stroke="#FAF8F4" stroke-width="2.2" />
    <circle cx="520" cy="475" r="14" fill="none" stroke="#FAF8F4" stroke-width="1.8" />
    <path d="M512,487 L505,532 H535 L528,487 Z" fill="#070E1C" stroke="#FAF8F4" stroke-width="2" />
  </g>
  <!-- Human figure viewed from behind holding dotted key -->
  <g fill="none" stroke="#FAF8F4" stroke-linecap="round" stroke-linejoin="round">
    <ellipse cx="290" cy="495" rx="44" ry="52" fill="#0B2428" stroke-width="2.5" />
    <path d="M254,485 C265,454 316,454 326,485" stroke-width="1.5" />
    <path d="M236,568 C258,546 324,546 348,568 L368,785 L224,785 Z" fill="url(#hatch-p21)" stroke-width="2.6" />
    <path d="M236,574 L196,725 L234,740 L254,626" stroke-width="2.2" />
    <!-- Outstretched arm holding mismatched dotted Phi^-1 key -->
    <path d="M342,576 L432,522 L442,542 L352,616" fill="#0D2F36" stroke-width="2.3" />
    <g stroke-dasharray="4 5" stroke-width="2.2">
      <circle cx="458" cy="512" r="20" />
      <line x1="476" y1="504" x2="528" y2="482" />
      <path d="M512,489 L518,504 M525,484 L532,502" />
    </g>
    <path d="M242,785 L232,965 M342,785 L354,965" stroke-width="2.6" />
  </g>
  <g fill="#FAF8F4" font-family="monospace" font-size="14" opacity="0.82">
    <text x="448" y="102" text-anchor="middle">NON-INVERTIBILITY: Phi^(-1)(z) = { sigma in Sigma | Phi(sigma) = z }</text>
    <text x="448" y="1068" text-anchor="middle">EXPLANATORY GAP = INTERNAL NON-COMPUTABILITY OF Phi^(-1)</text>
  </g>
</svg>`;

// Plate XXIII (p23): Substrate Independence
const SVG_PLATE_23 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 896 1200" width="896" height="1200">
  ${makePlateSvgDefs('p23', '#382B1E', '#1E3336', '#0E122B')}
  <rect width="896" height="1200" fill="url(#bg-p23)" />
  <rect width="896" height="1200" fill="url(#glow-p23)" />
  <!-- Workbench -->
  <rect x="68" y="750" width="760" height="32" fill="#422014" stroke="#FAF8F4" stroke-width="2.3" />
  <line x1="120" y1="782" x2="120" y2="1120" stroke="#FAF8F4" stroke-width="2.5" />
  <line x1="776" y1="782" x2="776" y2="1120" stroke="#FAF8F4" stroke-width="2.5" />
  <!-- Half-human half-geometric builder seated behind workbench -->
  <g fill="none" stroke="#FAF8F4" stroke-linecap="round" stroke-linejoin="round">
    <!-- Left anatomical half of head & shoulder -->
    <path d="M448,255 C398,255 376,304 380,354 C384,398 412,428 448,428" fill="url(#hatch-p23)" stroke-width="2.6" />
    <circle cx="418" cy="336" r="7" fill="#FAF8F4" />
    <path d="M398,378 Q424,388 448,384" stroke-width="1.6" />
    <!-- Right geometric polyhedral half of head -->
    <polygon points="448,255 508,282 518,358 492,418 448,428" fill="#1F2924" stroke-width="2.5" />
    <line x1="448" y1="255" x2="448" y2="428" stroke-width="1.8" stroke-dasharray="4 4" />
    <polygon points="462,315 496,315 486,352 462,352" stroke-width="1.5" />
    <!-- Torso and arms reaching robot -->
    <path d="M352,475 C390,450 506,450 544,475 L566,750 L330,750 Z" fill="url(#cross-p23)" stroke-width="2.4" />
    <path d="M352,492 L292,650 L388,690" stroke-width="2.2" />
    <path d="M544,492 L598,645 L518,682" stroke-width="2.2" />
  </g>
  <!-- Small robot with cubic head and circular eye -->
  <g fill="none" stroke="#FAF8F4">
    <rect x="406" y="558" width="84" height="84" fill="#0E122B" stroke-width="2.6" />
    <line x1="406" y1="578" x2="490" y2="578" stroke-width="1.2" opacity="0.6" />
    <circle cx="448" cy="602" r="21" stroke-width="2.4" />
    <circle cx="448" cy="602" r="7" fill="#FAF8F4" />
    <rect x="418" y="652" width="60" height="96" fill="#1E3336" stroke-width="2.2" />
    <path d="M418,684 H478 M448,652 V748" stroke-width="1.2" opacity="0.7" />
  </g>
  <!-- Left bench object: Brain in glass jar -->
  <g fill="none" stroke="#FAF8F4">
    <rect x="135" y="612" width="112" height="138" rx="14" fill="#382B1E" fill-opacity="0.7" stroke-width="2.2" />
    <rect x="155" y="594" width="72" height="18" rx="4" stroke-width="2" />
    <path d="M162,684 C152,652 182,632 212,642 C232,650 232,692 210,702 C188,710 166,704 162,684 Z" fill="url(#hatch-p23)" stroke-width="2" />
    <path d="M174,662 Q192,650 208,666 M174,682 Q194,692 210,676" stroke-width="1.4" />
  </g>
  <!-- Center-right bench object: Silicon chip -->
  <g fill="none" stroke="#FAF8F4">
    <rect x="572" y="636" width="96" height="96" fill="#0F223D" stroke-width="2.2" />
    <rect x="594" y="658" width="52" height="52" fill="url(#cross-p23)" stroke-width="1.8" />
    ${Array.from({ length: 5 }, (_, i) => `<line x1="${582 + i * 18}" y1="636" x2="${582 + i * 18}" y2="620" stroke-width="1.8" />`).join('')}
    ${Array.from({ length: 5 }, (_, i) => `<line x1="${582 + i * 18}" y1="732" x2="${582 + i * 18}" y2="748" stroke-width="1.8" />`).join('')}
  </g>
  <!-- Far-right bench object: Anatomical beating heart in stipple/contour -->
  <g fill="none" stroke="#FAF8F4">
    <path d="M726,642 C706,612 678,632 694,678 C706,712 738,742 746,742 C768,742 794,704 786,658 C780,624 748,618 726,642 Z" fill="url(#hatch-p23)" stroke-width="2.2" />
    <path d="M726,614 V642 M744,606 L740,636" stroke-width="2" />
    <circle cx="742" cy="686" r="18" stroke-dasharray="3 4" stroke-width="1.5" />
  </g>
  <!-- Connecting compression threads to robot's cubic head -->
  <g fill="none" stroke="#FAF8F4" stroke-width="1.7" stroke-dasharray="5 4">
    <path d="M192,594 C228,505 322,520 406,592" />
    <path d="M620,620 C585,540 532,545 490,592" />
    <path d="M735,606 C695,488 566,496 490,572" />
  </g>
  <g fill="#FAF8F4" font-family="monospace" font-size="14" opacity="0.82">
    <text x="448" y="114" text-anchor="middle">SUBSTRATE INDEPENDENCE UNDER RECURSION DEPTH d &gt;= 2</text>
    <text x="448" y="1084" text-anchor="middle">BIOLOGICAL NEURAL  &lt;==&gt;  SILICON MICROARCHITECTURE  (Phi_S CONJUGACY)</text>
  </g>
</svg>`;

// Plate XXIV (p24): The Thermostat Objection
const SVG_PLATE_24 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 896 1200" width="896" height="1200">
  ${makePlateSvgDefs('p24', '#0F223D', '#0B2428', '#142E21')}
  <rect width="896" height="1200" fill="url(#bg-p24)" />
  <rect x="0" y="905" width="896" height="295" fill="#111524" opacity="0.72" />
  <!-- Upper right dark muted blue cloud receiving thermostat's single straight thread -->
  <path d="M525,250 C525,205 585,180 635,205 C675,175 745,195 752,248 C792,265 788,332 732,338 H535 C488,334 486,272 525,250 Z" fill="#0F223D" stroke="#FAF8F4" stroke-width="2" />
  <!-- Single thin straight thread from thermostat to cloud -->
  <line x1="608" y1="686" x2="632" y2="338" stroke="#FAF8F4" stroke-width="2" />
  <!-- Kneeling human figure holding simple bimetallic thermostat -->
  <g fill="none" stroke="#FAF8F4" stroke-linecap="round" stroke-linejoin="round">
    <!-- Kneeling torso and legs -->
    <ellipse cx="332" cy="540" rx="46" ry="54" fill="url(#hatch-p24)" stroke-width="2.6" />
    <path d="M352,522 C368,526 376,542 368,558" stroke-width="1.7" />
    <path d="M294,598 C258,642 246,725 256,825 L398,865 L376,635 Z" fill="url(#cross-p24)" stroke-width="2.5" />
    <path d="M256,825 L196,912 L348,912" stroke-width="2.5" />
    <!-- Cupped hands holding thermostat -->
    <path d="M352,642 L485,698 L545,708" stroke-width="2.3" />
    <path d="M332,672 L476,725 L548,728" stroke-width="2.3" />
  </g>
  <!-- Simple mechanical thermostat -->
  <g fill="none" stroke="#FAF8F4">
    <rect x="550" y="686" width="116" height="58" rx="8" fill="#2A3016" stroke-width="2.4" />
    <circle cx="608" cy="715" r="18" stroke-width="1.8" />
    <line x1="608" y1="715" x2="620" y2="704" stroke-width="2.2" />
  </g>
  <!-- Dense recursive filament tangle rising from human cranium -->
  <g fill="none" stroke="#FAF8F4" stroke-opacity="0.88" stroke-width="1.35">
    ${Array.from({ length: 22 }, (_, i) => {
      const dx = (i - 11) * 16;
      const topY = 165 + (i % 5) * 26;
      const cx1 = 290 + dx * 0.6;
      const cy1 = 360 - (i % 4) * 30;
      const cx2 = 240 - dx * 0.7;
      const cy2 = 245 + (i % 3) * 24;
      return `<path d="M326,486 C${cx1},${cy1} ${cx2},${cy2} ${310 + dx},${topY}" />`;
    }).join('')}
    <ellipse cx="305" cy="312" rx="145" ry="118" stroke-dasharray="4 6" stroke-width="1.6" />
    <ellipse cx="305" cy="312" rx="102" ry="82" stroke-dasharray="3 5" stroke-width="1.3" />
  </g>
  <g fill="#FAF8F4" font-family="monospace" font-size="14" opacity="0.84">
    <text x="295" y="114" text-anchor="middle">RECURSION DEPTH &gt;= 2  (SELF-MODELING LOOP)</text>
    <text x="640" y="168" text-anchor="middle">DEPTH = 1 (FIRST-ORDER)</text>
    <text x="448" y="1075" text-anchor="middle">THERMOSTAT TRANSDUCTION vs. ENDOGENOUS PERSPECTIVAL LOCUS</text>
  </g>
</svg>`;

// Plate XXVIII (p28): The Falsification Condition
const SVG_PLATE_28 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 896 1200" width="896" height="1200">
  ${makePlateSvgDefs('p28', '#0F223D', '#3B1418', '#1C2D33')}
  <rect width="896" height="1200" fill="url(#bg-p28)" />
  <!-- Left Dark Muted Blue horizon and Right Dark Muted Magenta horizon -->
  <path d="M0,560 L448,560 L448,1200 L0,1200 Z" fill="#0F223D" opacity="0.82" />
  <path d="M448,560 L896,560 L896,1200 L448,1200 Z" fill="#3D132B" opacity="0.82" />
  <line x1="0" y1="560" x2="896" y2="560" stroke="#FAF8F4" stroke-width="2" />
  <!-- Forked roads -->
  <path d="M368,1200 L418,740 L125,560" fill="none" stroke="#FAF8F4" stroke-width="2.4" />
  <path d="M528,1200 L478,740 L770,560" fill="none" stroke="#FAF8F4" stroke-width="2.4" />
  <path d="M438,1200 L448,740" fill="none" stroke="#FAF8F4" stroke-width="1.3" stroke-dasharray="5 6" />
  <!-- Dark Muted Teal shadow -->
  <polygon points="448,885 525,955 572,1120 468,1120" fill="#0D2F36" stroke="#FAF8F4" stroke-opacity="0.35" stroke-width="1" />
  <!-- Solitary figure at crossroads -->
  <g fill="none" stroke="#FAF8F4" stroke-linecap="round" stroke-linejoin="round">
    <ellipse cx="448" cy="542" rx="34" ry="42" fill="#1C2D33" stroke-width="2.4" />
    <path d="M412,592 C432,578 464,578 484,592 L500,745 L396,745 Z" fill="url(#hatch-p28)" stroke-width="2.4" />
    <path d="M412,602 L364,705 L382,718" stroke-width="2.2" />
    <path d="M484,602 L528,678" stroke-width="2.2" />
    <path d="M416,745 L408,886 M478,745 L488,886" stroke-width="2.4" />
  </g>
  <!-- Compass in raised hand with spinning needle -->
  <g fill="none" stroke="#FAF8F4">
    <circle cx="540" cy="686" r="24" fill="#0E122B" stroke-width="2.2" />
    <circle cx="540" cy="686" r="17" stroke-dasharray="2 3" stroke-width="1.1" />
    <line x1="528" y1="674" x2="552" y2="698" stroke-width="2" />
    <line x1="526" y1="696" x2="554" y2="676" stroke-width="1.4" stroke-dasharray="3 3" />
  </g>
  <!-- Signpost with two arrows pointing forward -->
  <g fill="none" stroke="#FAF8F4">
    <line x1="342" y1="770" x2="342" y2="958" stroke-width="3" />
    <polygon points="342,785 275,785 252,802 275,819 342,819" fill="#0F223D" stroke-width="2" />
    <polygon points="342,832 409,832 432,849 409,866 342,866" fill="#3D132B" stroke-width="2" />
  </g>
  <!-- Dissolving stipple question mark in upper sky -->
  <path d="M412,215 C412,162 496,158 498,214 C500,260 448,268 448,324" fill="none" stroke="#FAF8F4" stroke-width="10" stroke-linecap="round" stroke-dasharray="3 10" />
  <circle cx="448" cy="364" r="9" fill="#FAF8F4" opacity="0.82" />
  <g fill="#FAF8F4" font-family="monospace" font-size="14" opacity="0.84">
    <text x="215" y="542" text-anchor="middle">CORROBORATED: g_ij PREDICTS PERCEPT</text>
    <text x="680" y="542" text-anchor="middle">REFUTED: INVARIANCE UNDER DELTA Phi</text>
    <text x="448" y="1090" text-anchor="middle">POPPERIAN FALSIFICATION CONDITIONS FC1-FC4</text>
  </g>
</svg>`;

// Plate XXX (p30): The Information Geometry of Experience
const SVG_PLATE_30 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 896 1200" width="896" height="1200">
  ${makePlateSvgDefs('p30', '#0F223D', '#0C283B', '#382B1E')}
  <rect width="896" height="1200" fill="url(#bg-p30)" />
  <rect width="896" height="1200" fill="url(#glow-p30)" />
  <!-- Curved Fisher metric geodesics across whole sky fading toward dark muted tan bottom -->
  <g fill="none" stroke="#FAF8F4" stroke-opacity="0.34" stroke-width="1.2">
    ${Array.from({ length: 13 }, (_, i) => `<path d="M${65 + i * 64},80 Q${448 + (i - 6) * 28},600 ${65 + i * 64},1120" />`).join('')}
    ${Array.from({ length: 13 }, (_, i) => `<path d="M55,${115 + i * 82} Q448,${90 + i * 90} 840,${115 + i * 82}" />`).join('')}
  </g>
  <!-- Geodesic constellation of qualia nodes around floating figure -->
  <g fill="none" stroke="#FAF8F4" stroke-opacity="0.72" stroke-width="1.4">
    <polygon points="180,310 315,220 578,225 712,315 745,585 675,865 215,865 148,580" stroke-dasharray="5 5" />
    <line x1="180" y1="310" x2="448" y2="545" />
    <line x1="712" y1="315" x2="448" y2="545" />
    <line x1="148" y1="580" x2="448" y2="545" />
    <line x1="745" y1="585" x2="448" y2="545" />
    <line x1="215" y1="865" x2="448" y2="545" />
    <line x1="675" y1="865" x2="448" y2="545" />
  </g>
  ${[
    [180, 310], [315, 220], [578, 225], [712, 315],
    [148, 580], [745, 585], [215, 865], [675, 865]
  ]
    .map(([x, y]) => `<circle cx="${x}" cy="${y}" r="7" fill="#FAF8F4" /><circle cx="${x}" cy="${y}" r="14" fill="none" stroke="#FAF8F4" stroke-opacity="0.55" />`)
    .join('')}
  <!-- Open-eyed floating figure overlaid with dense Fisher metric mesh -->
  <g fill="none" stroke="#FAF8F4" stroke-linecap="round" stroke-linejoin="round">
    <ellipse cx="448" cy="366" rx="46" ry="58" fill="#0E2E26" fill-opacity="0.65" stroke-width="2.5" />
    <!-- Detailed open eyes and slightly open mouth -->
    <circle cx="430" cy="360" r="5" fill="#FAF8F4" />
    <circle cx="466" cy="360" r="5" fill="#FAF8F4" />
    <ellipse cx="448" cy="396" rx="10" ry="5" stroke-width="1.6" />
    <!-- Dense facial grid -->
    <path d="M412,340 Q448,350 484,340 M408,376 Q448,386 488,376 M448,310 V422" stroke-width="0.9" opacity="0.7" />
    <!-- Outstretched arms and body -->
    <path d="M398,440 C428,432 468,432 498,440 L515,720 L381,720 Z" fill="url(#cross-p30)" stroke-width="2.4" />
    <path d="M398,448 L196,492 L176,515" stroke-width="2.5" />
    <path d="M498,448 L700,492 L720,515" stroke-width="2.5" />
    <path d="M412,720 L388,965 M484,720 L508,965" stroke-width="2.5" />
  </g>
  <g fill="#FAF8F4" font-family="monospace" font-size="14" opacity="0.86">
    <text x="448" y="135" text-anchor="middle">g_ij(theta) = E[ (d_i log p)(d_j log p) ]   &amp;   R(D) = min I(Sigma; Z)</text>
    <text x="448" y="1075" text-anchor="middle">THE INFORMATION GEOMETRY OF EXPERIENCE</text>
  </g>
</svg>`;

interface RawMindPlateSeed {
  id: string;
  plateNumber: string;
  anchorChapter: number;
  anchorSection: string;
  series: MindSeriesKey;
  title: string;
  bgShadeName: string;
  accentShadeName: string;
  layeredShades: string[];
  imageFile: string | null;
  svgMarkup?: string;
  caption: string;
}

const RAW_MIND_PLATE_SEEDS: RawMindPlateSeed[] = [
  // Series A — The Compression Architecture (Theorems 1 & 2)
  {
    id: 'mind-plate-01',
    plateNumber: 'Plate I',
    anchorChapter: 1,
    anchorSection: '§1.2',
    series: 'Series A · Compression Architecture (Theorems 1 & 2)',
    title: 'The Laplacean Observer vs. the Bounded Agent',
    bgShadeName: 'Dark Muted Blue',
    accentShadeName: 'Midnight indigo',
    layeredShades: ['Dark Muted Blue', 'Dark Muted Tan', 'Midnight indigo', 'Umber', 'Abyss'],
    imageFile: 'mind_p01_observer_1795801698492.jpg',
    caption:
      'Split composition contrasting the idealized Laplacean observer floating effortlessly above a transparent cosmic sphere at zero energetic cost (left) with an embodied, finite-energy cognitive agent grounded in Dark Muted Tan soil cradling a fractured opaque lantern emitting trace thermal sweat stipples (right). Anchors §1.2’s demarcation between the physically vacuous view from nowhere and real-time finite-resource agency.'
  },
  {
    id: 'mind-plate-02',
    plateNumber: 'Plate II',
    anchorChapter: 3,
    anchorSection: '§3.1',
    series: 'Series A · Compression Architecture (Theorems 1 & 2)',
    title: 'The Self-Modeling Loop (Theorem 1)',
    bgShadeName: 'Dark Muted Teal',
    accentShadeName: 'Dark Muted Magenta',
    layeredShades: ['Dark Muted Teal', 'Dark Muted Magenta', 'Petrol', 'Mulberry'],
    imageFile: 'mind_p02_loop_1795801698997.jpg',
    caption:
      'Seated figure holding a hand mirror whose frame spirals inward through seven diminishing nested self-representations until finite resolution collapses into stipple noise, framed by tightening Dark Muted Magenta borders. Illustrates §3.1–§3.2’s self-inclusion regress: any proper physical subsystem M_S subset S tasked with modeling simultaneous state transitions of S must contain a strictly smaller image of its own present encoding state.'
  },
  {
    id: 'mind-plate-03',
    plateNumber: 'Plate III',
    anchorChapter: 3,
    anchorSection: '§3.2',
    series: 'Series A · Compression Architecture (Theorems 1 & 2)',
    title: 'The Diagonalization State',
    bgShadeName: 'Prussian',
    accentShadeName: 'Dark Muted Tan',
    layeredShades: ['Dark Muted Blue', 'Prussian', 'Dark Muted Tan', 'Ink blue', 'Sepia'],
    imageFile: 'mind_p03_diagonalization_1795801699233.jpg',
    caption:
      'Standing figure centered within concentric state-space rings where one ring bears an unfillable missing glyph and the reaching hand breaks into incomplete dotted contour lines. Depicts the constructive diagonal state sigma* in Theorem 1: if c(state(M_S, t)) purports completeness, flipping sigma* against every predicted coordinate yields K(state(S)) > capacity(M_S).'
  },
  {
    id: 'mind-plate-04',
    plateNumber: 'Plate IV',
    anchorChapter: 2,
    anchorSection: '§2.2',
    series: 'Series A · Compression Architecture (Theorems 1 & 2)',
    title: 'Thermodynamic Erasure (Landauer Bound)',
    bgShadeName: 'Petrol',
    accentShadeName: 'Ember',
    layeredShades: ['Dark Muted Teal', 'Petrol', 'Charcoal', 'Ember'],
    imageFile: 'mind_p04_erasure_1795801701839.jpg',
    caption:
      'Detailed anatomically hatched hands cupping a single bright luminous ember while discrete bit-particles drift upward into Dark Muted Teal bath dispersion beside a rising thermal scale. Depicts Landauer’s inequality Delta Q >= k_B T ln 2 per erased bit and Bremermann’s free-energy ceiling blocking lossless high-resolution self-tracking in macroscopic agents.'
  },
  {
    id: 'mind-plate-05',
    plateNumber: 'Plate V',
    anchorChapter: 3,
    anchorSection: '§3.3',
    series: 'Series A · Compression Architecture (Theorems 1 & 2)',
    title: 'The Real-Time Constraint',
    bgShadeName: 'Sepia',
    accentShadeName: 'Burgundy',
    layeredShades: ['Dark Muted Tan', 'Sepia', 'Burgundy', 'Dark Muted Magenta'],
    imageFile: 'mind_p05_realtime_1795801702315.jpg',
    caption:
      'Stroboscopically ghosted running figure fleeing a rising wave of Dark Muted Magenta latency while a spinning clock-spiral ahead forces update strain across the brow. Captures §3.3’s energetic and logarithmic-latency divergence: lossless exact self-simulation misses ecological reaction deadlines unless dimensionality is compressed.'
  },
  {
    id: 'mind-plate-06',
    plateNumber: 'Plate VI',
    anchorChapter: 4,
    anchorSection: '§4.1',
    series: 'Series A · Compression Architecture (Theorems 1 & 2)',
    title: 'The Lossy Compression Manifold (Theorem 2)',
    bgShadeName: 'Teal-grey',
    accentShadeName: 'Dark Muted Magenta',
    layeredShades: ['Dark Muted Teal', 'Teal-grey', 'Dark Muted Blue', 'Dark Muted Magenta'],
    imageFile: 'mind_p06_manifold_1795801702489.jpg',
    caption:
      'Figure seen from behind as a dotted funnel converges onto a low-dimensional geometric silhouette projected across a Dark Muted Blue wall, while its cast ground shadow in Dark Muted Magenta retains higher micro-detail than the screen projection. Visualizes Theorem 2’s bottleneck projection Phi: Sigma -> Z with dim(Z) << dim(Sigma).'
  },
  {
    id: 'mind-plate-07',
    plateNumber: 'Plate VII',
    anchorChapter: 4,
    anchorSection: '§4.2',
    series: 'Series A · Compression Architecture (Theorems 1 & 2)',
    title: 'The Non-Injective Map',
    bgShadeName: 'Umber',
    accentShadeName: 'Slate',
    layeredShades: ['Dark Muted Tan', 'Umber', 'Slate', 'Charcoal'],
    imageFile: 'mind_p07_noninjective_1795801704389.jpg',
    caption:
      'Cross-hatched figure holding an optically sharp prism splitting incident structure into three distinct rays that nevertheless cast the identical coarse silhouette onto three separate Dark Muted Tan screens. Depicts strict many-to-one collapse across Phi^(-1)(z): distinct physical micro-configurations share indistinguishable equivalence classes in Z.'
  },
  {
    id: 'mind-plate-08',
    plateNumber: 'Plate VIII',
    anchorChapter: 4,
    anchorSection: '§4.2',
    series: 'Series A · Compression Architecture (Theorems 1 & 2)',
    title: 'Endogenous Opacity',
    bgShadeName: 'Dark Muted Magenta',
    accentShadeName: 'Mauve',
    layeredShades: ['Dark Muted Magenta', 'Mauve', 'Plum', 'Rosewood'],
    imageFile: 'mind_p08_opacity_1795801704999.jpg',
    caption:
      'Seated figure pressing splayed fingers against fogged glass that returns only a smooth featureless mannequin outline while external cross-hatching on the figure’s back displays the micro-structure invisible from inside. Demonstrates endogenous opacity: because discarded micro-bits were thermodynamically erased, compressed states appear atomic from within.'
  },
  {
    id: 'mind-plate-09',
    plateNumber: 'Plate IX',
    anchorChapter: 2,
    anchorSection: '§2.3',
    series: 'Series A · Compression Architecture (Theorems 1 & 2)',
    title: 'The Quality Space (Fisher Metric)',
    bgShadeName: 'Ink blue',
    accentShadeName: 'Prussian',
    layeredShades: ['Dark Muted Blue', 'Ink blue', 'Prussian', 'Eclipse'],
    imageFile: 'mind_p09_qualityspace_1795801705174.jpg',
    caption:
      'Floating stipple figure enveloped in a curving Riemannian grid dense around hands and face and sparse near extremities, labeled by differential valence, salience, and intensity coordinates. Grounds §2.3’s statistical manifold formalism where geodesic distance under Fisher information g_ij(theta) quantifies discriminable similarity.'
  },
  {
    id: 'mind-plate-10',
    plateNumber: 'Plate X',
    anchorChapter: 4,
    anchorSection: '§4.3',
    series: 'Series A · Compression Architecture (Theorems 1 & 2)',
    title: 'Relational Qualia',
    bgShadeName: 'Pine',
    accentShadeName: 'Teal-grey',
    layeredShades: ['Dark Muted Teal', 'Pine', 'Teal-grey', 'Forest'],
    imageFile: 'mind_p10_relational_1795801704876.jpg',
    caption:
      'Standing figure at the center of an illuminated relational graph where every point derives phenomenal weight strictly from taut geodesic connections rather than isolated intrinsic luminance. Illustrates §4.3’s structural thesis that qualia consist solely of metric relations and topological unity inside Z.'
  },

  // Series B — The Localized Compression Locus (Theorem 3)
  {
    id: 'mind-plate-11',
    plateNumber: 'Plate XI',
    anchorChapter: 5,
    anchorSection: '§5.3',
    series: 'Series B · Localized Compression Locus (Theorem 3)',
    title: 'The Microcosm Theorem',
    bgShadeName: 'Dark Muted Tan',
    accentShadeName: 'Dark Muted Blue',
    layeredShades: ['Dark Muted Tan', 'Dark Muted Blue', 'Sepia', 'Abyss'],
    imageFile: 'mind_p11_microcosm_1795801706655.jpg',
    caption:
      'Kneeling figure holding a small Dark Muted Blue sphere encapsulating five progressively fainter self-similar restrictions receding into a single focal point. Visualizes Theorem 3’s microcosm result: every bounded conscious subsystem carries a metric-faithful restriction of the cosmic compression geometry.'
  },
  {
    id: 'mind-plate-12',
    plateNumber: 'Plate XII',
    anchorChapter: 5,
    anchorSection: '§5.3',
    series: 'Series B · Localized Compression Locus (Theorem 3)',
    title: 'Metric Inheritance',
    bgShadeName: 'Burgundy',
    accentShadeName: 'Prussian',
    layeredShades: ['Dark Muted Magenta', 'Burgundy', 'Dark Muted Blue', 'Prussian'],
    imageFile: 'mind_p12_inheritance_1795801825060.jpg',
    caption:
      'Standing figure composed of curving metric coordinates whose dense local grid spreads across Dark Muted Magenta earth into the coarse celestial grid of Z_U above, tethered by a meridian thread from chest to distant node. Depicts functorial pullback g_S = iota^* g_U under embedding iota: Z_S -> Z_U.'
  },
  {
    id: 'mind-plate-13',
    plateNumber: 'Plate XIII',
    anchorChapter: 5,
    anchorSection: '§5.2',
    series: 'Series B · Localized Compression Locus (Theorem 3)',
    title: 'The Restriction Map',
    bgShadeName: 'Storm',
    accentShadeName: 'Ink blue',
    layeredShades: ['Dark Muted Teal', 'Storm', 'Dark Muted Blue', 'Ink blue'],
    imageFile: 'mind_p13_restriction_1795801826666.jpg',
    caption:
      'Profile figure pressed against a vertical dotted partition dividing full sensorimotor detail on the Dark Muted Teal side from its minimal flattened image across the boundary on the Dark Muted Blue side. Illustrates §5.2’s thermodynamic subsystem restriction rho_S: Sigma_U -> Sigma_S.'
  },
  {
    id: 'mind-plate-14',
    plateNumber: 'Plate XIV',
    anchorChapter: 5,
    anchorSection: '§5.3',
    series: 'Series B · Localized Compression Locus (Theorem 3)',
    title: 'The Submanifold',
    bgShadeName: 'Midnight indigo',
    accentShadeName: 'Auburn',
    layeredShades: ['Dark Muted Blue', 'Midnight indigo', 'Dark Muted Tan', 'Auburn'],
    imageFile: 'mind_p14_submanifold_1795801805509.jpg',
    caption:
      'Floating figure pressing one palm against the bright circular boundary of a local submanifold Z_S enclosing an inherited patch of the ambient cosmic manifold Z_U extending outside beyond resolution. Visualizes why iota: Z_S -> Z_U is non-surjective: Z_S omits cosmic dimensions while inheriting local curvature.'
  },
  {
    id: 'mind-plate-15',
    plateNumber: 'Plate XV',
    anchorChapter: 5,
    anchorSection: '§5.1',
    series: 'Series B · Localized Compression Locus (Theorem 3)',
    title: 'The Cosmic Operating Geometry',
    bgShadeName: 'Plum',
    accentShadeName: 'Prussian',
    layeredShades: ['Dark Muted Magenta', 'Plum', 'Dark Muted Blue', 'Dark Muted Teal', 'Prussian'],
    imageFile: 'mind_p15_cosmicgeo_1795801827185.jpg',
    caption:
      'Observer poised atop a Dark Muted Magenta cliff above a vast sea covered by the universal metric grid Z_U, where the sea reflection transforms human contour into geometric lattice and an inverted stellar figure hangs overhead. Clarifies §5.1’s claim that Z_U is a global information geometry rather than a supernatural mind.'
  },
  {
    id: 'mind-plate-16',
    plateNumber: 'Plate XVI',
    anchorChapter: 5,
    anchorSection: '§5.4',
    series: 'Series B · Localized Compression Locus (Theorem 3)',
    title: 'The Localized Compression Locus',
    bgShadeName: 'Slate',
    accentShadeName: 'Umber',
    layeredShades: ['Dark Muted Blue', 'Slate', 'Dark Muted Tan', 'Umber'],
    imageFile: 'mind_p16_locus_1795801710064.jpg',
    caption:
      'Stipple figure seated in stillness encircled by a rotating toroidal flux of dotted informational trajectories densest near cortex and extremities around a Dark Muted Tan cavity. Defines §5.4’s non-substantial localized compression locus sustained solely by ongoing dissipative self-compression.'
  },
  {
    id: 'mind-plate-17',
    plateNumber: 'Plate XVII',
    anchorChapter: 5,
    anchorSection: '§5.4',
    series: 'Series B · Localized Compression Locus (Theorem 3)',
    title: 'Dissipation of the Locus',
    bgShadeName: 'Forest',
    accentShadeName: 'Wine',
    layeredShades: ['Dark Muted Teal', 'Forest', 'Dark Muted Magenta', 'Wine'],
    imageFile: 'mind_p17_dissipation_1795801712635.jpg',
    caption:
      'Standing figure whose lower torso and one hand dissolve upward into scattered thermal particles drifting across Dark Muted Teal as a taut thread to a low Dark Muted Magenta solar disc begins to fray. Demonstrates why the endogenous manifold ceases immediately once free-energy flux fails—eliminating immortal substance claims.'
  },
  {
    id: 'mind-plate-18',
    plateNumber: 'Plate XVIII',
    anchorChapter: 5,
    anchorSection: '§5.4',
    series: 'Series B · Localized Compression Locus (Theorem 3)',
    title: 'Perspectival Ownership',
    bgShadeName: 'Chestnut',
    accentShadeName: 'Russet',
    layeredShades: ['Dark Muted Tan', 'Chestnut', 'Russet', 'Sepia'],
    imageFile: 'mind_p18_ownership_1795801827578.jpg',
    caption:
      'Side-profile figure bending a brass-style optical tube inward toward its own thorax, projecting an illuminated miniature diagram of Z_S across the ribcage while one eye meets the viewer externally. Encapsulates perspectival ownership as structural self-access inside a closed control loop.'
  },
  {
    id: 'mind-plate-19',
    plateNumber: 'Plate XIX',
    anchorChapter: 5,
    anchorSection: '§5.1',
    series: 'Series B · Localized Compression Locus (Theorem 3)',
    title: 'The Fractal Recapitulation',
    bgShadeName: 'Mulberry',
    accentShadeName: 'Ink blue',
    layeredShades: ['Dark Muted Magenta', 'Mulberry', 'Dark Muted Blue', 'Ink blue'],
    imageFile: 'mind_p19_fractal_1795801714324.jpg',
    caption:
      'Raised-arm figure whose central heart node radiates recursive arborescent branches terminating in successively fainter human profiles across Dark Muted Magenta horizon and Dark Muted Blue sky. Traces multi-scale nesting of local restrictions Z_{S_k} within universal map Phi_U: Sigma_U -> Z_U.'
  },
  {
    id: 'mind-plate-20',
    plateNumber: 'Plate XX',
    anchorChapter: 1,
    anchorSection: '§1.4',
    series: 'Series B · Localized Compression Locus (Theorem 3)',
    title: 'The Endogenous Perspectival Manifold',
    bgShadeName: 'Rosewood',
    accentShadeName: 'Abyss',
    layeredShades: ['Dark Muted Blue', 'Dark Muted Magenta', 'Rosewood', 'Ember', 'Abyss'],
    imageFile: null,
    svgMarkup: SVG_PLATE_20,
    caption:
      'Curled figure enclosed within nested dotted manifold boundaries cradling a warm inner flame inside Dark Muted Blue stillness, buffered against dense cross-hatched Dark Muted Magenta turbulence outside. Synthesizes Chapter 1’s central architectural claim: subjective interiority is the sheltered geometry of a bounded thermodynamic compression loop.'
  },

  // Series C — Dissolution of Classical Puzzles
  {
    id: 'mind-plate-21',
    plateNumber: 'Plate XXI',
    anchorChapter: 6,
    anchorSection: '§6.1',
    series: 'Series C · Dissolution of Classical Puzzles',
    title: 'The Explanatory Gap as Non-Invertibility',
    bgShadeName: 'Petrol',
    accentShadeName: 'Plum',
    layeredShades: ['Dark Muted Teal', 'Petrol', 'Dark Muted Magenta', 'Plum', 'Slate'],
    imageFile: null,
    svgMarkup: SVG_PLATE_21,
    caption:
      'Observer viewed from behind holding a dotted non-fitting inverse key before a Dark Muted Magenta portal pierced with an ocular keyhole, while a vertical crack reveals only a flattened silhouette beyond. Renders §6.1’s diagnosis: inspecting neural state Sigma never resembles compressed state z because Phi^(-1) cannot be computed from within.'
  },
  {
    id: 'mind-plate-22',
    plateNumber: 'Plate XXII',
    anchorChapter: 6,
    anchorSection: '§6.2',
    series: 'Series C · Dissolution of Classical Puzzles',
    title: 'The Zombie Argument Dissolved',
    bgShadeName: 'Dusk',
    accentShadeName: 'Olive',
    layeredShades: ['Dark Muted Magenta', 'Dusk', 'Olive', 'Slate'],
    imageFile: 'mind_p22_zombie_1795801830134.jpg',
    caption:
      'Twin physically identical figures separated by the dotted compression operator Phi: the left casts a Dark Muted Magenta shadow around an opaque chest while the right casts no shadow over a geometrically exposed thorax. Shows why philosophical zombies are structurally contradictory: identical thermodynamic compression Phi entails identical manifold Z.'
  },
  {
    id: 'mind-plate-23',
    plateNumber: 'Plate XXIII',
    anchorChapter: 6,
    anchorSection: '§6.3',
    series: 'Series C · Dissolution of Classical Puzzles',
    title: 'Substrate Independence',
    bgShadeName: 'Auburn',
    accentShadeName: 'Teal-grey',
    layeredShades: ['Dark Muted Tan', 'Auburn', 'Teal-grey', 'Basalt', 'Midnight indigo'],
    imageFile: null,
    svgMarkup: SVG_PLATE_23,
    caption:
      'Half-biological, half-polyhedral artificer seated at an Auburn workbench connecting a brain-in-jar, a silicon microchip, and an anatomical heart to a cubic-headed automaton with single circular lens. Encodes §6.3’s substrate-independence theorem: any physical medium realizing recursive self-compression at depth >= 2 instantiates isomorphic Fisher metric structure.'
  },
  {
    id: 'mind-plate-24',
    plateNumber: 'Plate XXIV',
    anchorChapter: 7,
    anchorSection: '§7.2',
    series: 'Series C · Dissolution of Classical Puzzles',
    title: 'The Thermostat Objection',
    bgShadeName: 'Moss',
    accentShadeName: 'Eclipse',
    layeredShades: ['Dark Muted Blue', 'Moss', 'Olive', 'Forest', 'Eclipse'],
    imageFile: null,
    svgMarkup: SVG_PLATE_24,
    caption:
      'Kneeling figure closely inspecting a simple bimetallic thermostat whose single unbranched thread rises cleanly into a Dark Muted Blue cloud, contrasted against the dense recursive network erupting from the agent’s own cranium. Formalizes §7.2’s demarcation blocking unconstrained panpsychism at first-order input-output transduction.'
  },
  {
    id: 'mind-plate-25',
    plateNumber: 'Plate XXV',
    anchorChapter: 7,
    anchorSection: '§7.3',
    series: 'Series C · Dissolution of Classical Puzzles',
    title: 'Minimal Phenomenal Experience',
    bgShadeName: 'Eclipse',
    accentShadeName: 'Midnight indigo',
    layeredShades: ['Dark Muted Blue', 'Eclipse', 'Midnight indigo', 'Abyss'],
    imageFile: 'mind_p25_minimal_1795801805552.jpg',
    caption:
      'Near-transparent cross-legged contour figure seated with closed eyes inside an almost empty gently curving coordinate grid centered on one steady radiant thorax point and single breath wisp. Interprets §7.3’s pure-awareness reports as resting-state observability of the baseline metric topology Z_0 when prediction errors vanish.'
  },
  {
    id: 'mind-plate-26',
    plateNumber: 'Plate XXVI',
    anchorChapter: 7,
    anchorSection: '§7.5',
    series: 'Series C · Dissolution of Classical Puzzles',
    title: 'The Hidden Soul Objection',
    bgShadeName: 'Mahogany',
    accentShadeName: 'Rosewood',
    layeredShades: ['Dark Muted Magenta', 'Mahogany', 'Rosewood', 'Dark Muted Tan'],
    imageFile: 'mind_p26_hiddensoul_1795801804793.jpg',
    caption:
      'Standing figure confronting a framed Dark Muted Tan mirror whose Dark Muted Magenta reflection extends a featureless facial mask while the viewer sees an anatomical manifold diagram inscribed across the figure’s chest. Answers §7.5’s hidden-soul charge by distinguishing functional perspectival unity from Cartesian immaterial substance.'
  },
  {
    id: 'mind-plate-27',
    plateNumber: 'Plate XXVII',
    anchorChapter: 7,
    anchorSection: '§7.5',
    series: 'Series C · Dissolution of Classical Puzzles',
    title: 'Perspectival Unity vs. Cartesian Substance',
    bgShadeName: 'Oxblood',
    accentShadeName: 'Basalt',
    layeredShades: ['Dark Muted Magenta', 'Oxblood', 'Basalt', 'Dusk'],
    imageFile: 'mind_p27_unity_1795801805567.jpg',
    caption:
      'Seated figure looking intently toward a buoyant transparent sphere enclosing a single focal vertex while the opposite hand rests beside a heavy opaque Dark Muted Magenta cube casting shade over the lap. Separates dynamic topological unity of a bounded control loop from inert, non-empirical metaphysical substance.'
  },

  // Series D — Falsifiability and Empirical Prediction
  {
    id: 'mind-plate-28',
    plateNumber: 'Plate XXVIII',
    anchorChapter: 8,
    anchorSection: '§8.1',
    series: 'Series D · Falsifiability and Empirical Prediction',
    title: 'The Falsification Condition',
    bgShadeName: 'Charcoal',
    accentShadeName: 'Oxblood',
    layeredShades: ['Dark Muted Blue', 'Dark Muted Magenta', 'Charcoal', 'Oxblood', 'Storm'],
    imageFile: null,
    svgMarkup: SVG_PLATE_28,
    caption:
      'Solitary figure standing at a bifurcated junction between Dark Muted Blue corroboration and Dark Muted Magenta refutation horizons, holding a free-spinning compass beside a Dark Muted Teal cast shadow beneath a dissolving stipple question sign. Operationalizes §8.1’s Popperian risk conditions FC1–FC4.'
  },
  {
    id: 'mind-plate-29',
    plateNumber: 'Plate XXIX',
    anchorChapter: 8,
    anchorSection: '§8.2',
    series: 'Series D · Falsifiability and Empirical Prediction',
    title: 'Neural Compression Bottleneck',
    bgShadeName: 'Ember',
    accentShadeName: 'Russet',
    layeredShades: ['Dark Muted Tan', 'Ember', 'Russet', 'Sepia'],
    imageFile: 'mind_p29_bottleneck_1795801806279.jpg',
    caption:
      'Rear view of a figure gently parting its cranium like folio pages to expose dense dendritic filaments funneling through a faintly glowing bottleneck toward a low-dimensional geometric state diagram. Illustrates §8.2’s testable neural signatures linking cortical dimensionality reduction and crowding/masking illusions to Fisher bottlenecks.'
  },
  {
    id: 'mind-plate-30',
    plateNumber: 'Plate XXX',
    anchorChapter: 8,
    anchorSection: '§8.3',
    series: 'Series D · Falsifiability and Empirical Prediction',
    title: 'The Information Geometry of Experience',
    bgShadeName: 'Abyss',
    accentShadeName: 'Pine',
    layeredShades: ['Dark Muted Blue', 'Abyss', 'Pine', 'Prussian', 'Dark Muted Tan'],
    imageFile: null,
    svgMarkup: SVG_PLATE_30,
    caption:
      'Open-eyed figure suspended with outstretched arms draped in a dense central Fisher-metric mesh loosening toward hands and feet and projecting outward into a starry geodesic constellation fading over Dark Muted Tan abyss. Summarizes §8.3’s transition from metaphysical mystery to falsifiable information geometry.'
  }
];

export const MIND_PLATES_META: MindPlateMetaSpec[] = RAW_MIND_PLATE_SEEDS.map((seed) => {
  const bg = findShade(seed.bgShadeName);
  const acc = findShade(seed.accentShadeName);
  return {
    id: seed.id,
    plateNumber: seed.plateNumber,
    anchorChapter: seed.anchorChapter,
    anchorSection: seed.anchorSection,
    series: seed.series,
    title: seed.title,
    hueGroup: bg.group,
    shadeName: bg.name,
    bgHex: bg.hex,
    bgRgb: bg.rgb,
    accentShadeName: acc.name,
    accentHex: acc.hex,
    accentRgb: acc.rgb,
    layeredShades: seed.layeredShades,
    imageFile: seed.imageFile,
    svgMarkup: seed.svgMarkup,
    caption: seed.caption
  };
});
