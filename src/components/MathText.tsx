/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { parseMathSegments, type MathSegment } from '../utils/formatMathUnicode';

function renderSegments(segs: MathSegment[], keyPrefix: string): React.ReactNode {
  return segs.map((seg, idx) => {
    const k = `${keyPrefix}-${idx}`;
    if (seg.type === 'text') {
      return <React.Fragment key={k}>{seg.text}</React.Fragment>;
    }
    if (seg.type === 'sub') {
      return (
        <sub key={k} className="text-[0.74em] leading-none align-baseline relative top-[0.22em]">
          {renderSegments(seg.children, k)}
        </sub>
      );
    }
    if (seg.type === 'sup') {
      return (
        <sup key={k} className="text-[0.74em] leading-none align-baseline relative -top-[0.34em]">
          {renderSegments(seg.children, k)}
        </sup>
      );
    }
    return <i key={k}>{renderSegments(seg.children, k)}</i>;
  });
}

export const MathText: React.FC<{ text: string }> = ({ text }) => {
  const segs = React.useMemo(() => parseMathSegments(text), [text]);
  return <>{renderSegments(segs, 'mt')}</>;
};
