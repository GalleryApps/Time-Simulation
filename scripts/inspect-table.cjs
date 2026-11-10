const fs = require('fs');

const raw = fs.readFileSync('public/assets/aistudio/IGEG_vs_RES-RAG_500-Criterion_Journal_Manuscript_3fd82f8c.txt', 'utf8');
const text = raw.replace(/\r/g, '\n');

// Find Table A1
const tIdx = text.indexOf('Table A1. Family I. Foundational Axioms');
console.log('Table A1 at:', tIdx);
const sample = text.slice(tIdx, tIdx + 500);
console.log('Sample with newlines:\n', sample);
