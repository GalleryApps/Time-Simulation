/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Converts inline physics notation in prose (e.g. g_μν, Δ_{σ,ρ}, CP^{N-1}, g_ij^QFI, ⟨K_ξ²⟩_Ω)
 * cleanly into typographic HTML subscripts and superscripts without leaving raw underscores or braces.
 */

import React from 'react';

interface RichMathTextProps {
  text: string;
  className?: string;
}

const TOKEN_RE =
  /((?:[A-Za-z0-9α-ωΑ-Ωℏℓ∇∂□⟨⟩∑Ĥ⁾²³¹⁰'\u0300-\u036f]|\|\||\))+?(?:\s*(?:\^|\_)\s*(?:\{[^{}]+\}|[A-Za-z0-9α-ωΑ-Ω+\-*/(),]+)){1,2})/g;

const SUB_SUP_RE = /(\^|\_)\s*(?:\{([^{}]+)\}|([A-Za-z0-9α-ωΑ-Ω+\-*()]+))/g;

function cleanInnerScript(raw: string): string {
  return raw.replace(/\\;/g, ' ').replace(/\\,/g, ' ').trim();
}

export const RichMathText: React.FC<RichMathTextProps> = React.memo(({ text, className = '' }) => {
  // Skip any URLs inside text so underscores in links (like Academia_edu_Paper_Title) are untouched
  const urlSplit = text.split(/(https?:\/\/\S+)/g);

  return (
    <span className={className}>
      {urlSplit.map((chunk, chunkIdx) => {
        if (/^https?:\/\//.test(chunk)) {
          return <React.Fragment key={chunkIdx}>{chunk}</React.Fragment>;
        }

        const parts = chunk.split(TOKEN_RE);
        return (
          <React.Fragment key={chunkIdx}>
            {parts.map((part, idx) => {
              if (!part) return null;
              if (!/[_^]/.test(part)) {
                return <React.Fragment key={idx}>{part}</React.Fragment>;
              }

              // Extract leading base before first _ or ^
              const firstOp = part.search(/[_^]/);
              if (firstOp <= 0) {
                return <React.Fragment key={idx}>{part}</React.Fragment>;
              }

              const base = part.slice(0, firstOp);
              const scriptsPart = part.slice(firstOp);
              const nodes: React.ReactNode[] = [<React.Fragment key="base">{base}</React.Fragment>];

              SUB_SUP_RE.lastIndex = 0;
              let m: RegExpExecArray | null;
              let sIdx = 0;
              while ((m = SUB_SUP_RE.exec(scriptsPart)) !== null) {
                const op = m[1];
                const content = cleanInnerScript(m[2] ?? m[3] ?? '');
                if (op === '_') {
                  nodes.push(
                    <sub key={`s-${sIdx++}`} className="text-[0.75em] leading-none align-sub">
                      {content}
                    </sub>
                  );
                } else {
                  nodes.push(
                    <sup key={`s-${sIdx++}`} className="text-[0.75em] leading-none align-super">
                      {content}
                    </sup>
                  );
                }
              }

              return <React.Fragment key={idx}>{nodes}</React.Fragment>;
            })}
          </React.Fragment>
        );
      })}
    </span>
  );
});
