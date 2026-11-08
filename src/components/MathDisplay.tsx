import React, { useMemo } from 'react';
import katex from 'katex';

interface MathDisplayProps {
  math: string;
  block?: boolean;
  className?: string;
}

export const MathDisplay: React.FC<MathDisplayProps> = ({ math, block = false, className = '' }) => {
  const html = useMemo(() => {
    try {
      return katex.renderToString(math, {
        displayMode: block,
        throwOnError: false,
        output: 'htmlAndMathml',
      });
    } catch {
      return `<code class="font-mono text-xs text-amber-400">${math}</code>`;
    }
  }, [math, block]);

  if (block) {
    return (
      <div 
        className={`my-3 overflow-x-auto py-1 text-slate-100 ${className}`}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }

  return (
    <span 
      className={`inline-block px-1 text-slate-100 ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};
