const fs = require('fs');

const raw = fs.readFileSync('public/assets/aistudio/IGEG_vs_RES-RAG_500-Criterion_Journal_Manuscript_3fd82f8c.txt', 'utf8');

const familyConfigs = [
  { id: 1, name: "Foundational Axioms", count: 53, start: 1, end: 53, expA: 90, expB: 31, max: 159, tableNum: "A1" },
  { id: 2, name: "Field Equations", count: 53, start: 54, end: 106, expA: 82, expB: 9, max: 159, tableNum: "A2" },
  { id: 3, name: "Cosmological Scale-Up", count: 53, start: 107, end: 159, expA: 63, expB: 9, max: 159, tableNum: "A3" },
  { id: 4, name: "Falsifiability", count: 53, start: 160, end: 212, expA: 55, expB: 21, max: 159, tableNum: "A4" },
  { id: 5, name: "Counterfactual Survival", count: 64, start: 213, end: 276, expA: 102, expB: 63, max: 192, tableNum: "A5" },
  { id: 6, name: "Methodology and Epistemic Hygiene", count: 42, start: 277, end: 318, expA: 51, expB: 33, max: 126, tableNum: "A6" },
  { id: 7, name: "Harmonization Readiness", count: 22, start: 319, end: 340, expA: 42, expB: 23, max: 66, tableNum: "A7" },
  { id: 8, name: "Quantum Gravity Phenomenology", count: 60, start: 341, end: 400, expA: 86, expB: 10, max: 180, tableNum: "A8" },
  { id: 9, name: "Thermodynamic and Information Consistency", count: 60, start: 401, end: 460, expA: 88, expB: 21, max: 180, tableNum: "A9" },
  { id: 10, name: "Sociological and Meta-Scientific Viability", count: 40, start: 461, end: 500, expA: 53, expB: 44, max: 120, tableNum: "A10" }
];

const allCriteria = [];

for (const fam of familyConfigs) {
  const tableHeader = `Table ${fam.tableNum}.`;
  const tableIdx = raw.indexOf(tableHeader);
  if (tableIdx === -1) {
    console.error(`Table ${fam.tableNum} not found!`);
    continue;
  }
  // Find "Adversarial note\r" after tableHeader
  const advIdx = raw.indexOf("Adversarial note\r", tableIdx);
  if (advIdx === -1) {
    console.error(`Adversarial note\\r not found for ${fam.tableNum}`);
    continue;
  }
  const bodyStart = advIdx + "Adversarial note\r".length;
  // Subtotal marker
  const subtotalMarker = `Family subtotal: IGEG ${fam.expA}`;
  const subtotalIdx = raw.indexOf(subtotalMarker, bodyStart);
  if (subtotalIdx === -1) {
    console.error(`Subtotal marker not found for ${fam.tableNum}`);
    continue;
  }

  const tableBody = raw.slice(bodyStart, subtotalIdx);
  // Split cells by \r
  // Note: some cells might have trailing or leading newlines or whitespace
  const rawCells = tableBody.split(/\r/).map(c => c.replace(/\n/g, '').trim()).filter(c => c.length > 0);

  // Each row has 5 cells: id, criterion, scoreA, scoreB, note
  // Let us iterate and collect rows
  let idx = 0;
  let parsedInFam = 0;

  while (idx < rawCells.length) {
    const cId = parseInt(rawCells[idx], 10);
    if (isNaN(cId) || cId < fam.start || cId > fam.end) {
      // Maybe end of table or extra cell
      break;
    }
    const criterionRaw = rawCells[idx + 1] || '';
    const scoreA = parseInt(rawCells[idx + 2], 10);
    const scoreB = parseInt(rawCells[idx + 3], 10);
    const note = rawCells[idx + 4] || '';

    const isConceptual = criterionRaw.includes('†');
    const cleanCriterion = criterionRaw.replace(/†/g, '').trim();

    allCriteria.push({
      id: cId,
      familyId: fam.id,
      familyName: fam.name,
      criterion: cleanCriterion,
      scoreA,
      scoreB,
      note,
      isConceptual,
      isCounterfactual: fam.id === 5 || cleanCriterion.startsWith('If ')
    });

    parsedInFam++;
    idx += 5;
  }

  const famParsed = allCriteria.filter(c => c.familyId === fam.id);
  const sumA = famParsed.reduce((acc, c) => acc + c.scoreA, 0);
  const sumB = famParsed.reduce((acc, c) => acc + c.scoreB, 0);
  console.log(`Family ${fam.id} (${fam.name}): ${famParsed.length}/${fam.count} criteria. Sum A: ${sumA}/${fam.expA}, Sum B: ${sumB}/${fam.expB} -> ${sumA === fam.expA && sumB === fam.expB ? 'MATCH ✅' : 'MISMATCH ❌'}`);
}

console.log('Total parsed:', allCriteria.length);
const totalA = allCriteria.reduce((acc, c) => acc + c.scoreA, 0);
const totalB = allCriteria.reduce((acc, c) => acc + c.scoreB, 0);
console.log(`Total IGEG: ${totalA}/712, Total RES=RAG: ${totalB}/264`);
console.log(`Match total: ${totalA === 712 && totalB === 264 ? 'PERFECT MATCH ✅' : 'MISMATCH ❌'}`);

const headToHead = {
  aWins: allCriteria.filter(c => c.scoreA > c.scoreB).length,
  bWins: allCriteria.filter(c => c.scoreB > c.scoreA).length,
  ties: allCriteria.filter(c => c.scoreA === c.scoreB).length
};
console.log('Head to head:', headToHead);
console.log(`Expected: A=333, B=53, Ties=114 -> ${headToHead.aWins === 333 && headToHead.bWins === 53 && headToHead.ties === 114 ? 'PERFECT MATCH ✅' : 'MISMATCH ❌'}`);

const conceptual = allCriteria.filter(c => c.isConceptual);
console.log('Conceptual subset count:', conceptual.length, 'expected 53');
const conceptualA = conceptual.reduce((acc, c) => acc + c.scoreA, 0);
const conceptualB = conceptual.reduce((acc, c) => acc + c.scoreB, 0);
console.log(`Conceptual scores: A=${conceptualA}/51, B=${conceptualB}/78 -> ${conceptualA === 51 && conceptualB === 78 ? 'PERFECT MATCH ✅' : 'MISMATCH ❌'}`);

const counterfactual = allCriteria.filter(c => c.isCounterfactual);
console.log('Counterfactual count:', counterfactual.length, 'expected 100');
const cfA = counterfactual.reduce((acc, c) => acc + c.scoreA, 0);
const cfB = counterfactual.reduce((acc, c) => acc + c.scoreB, 0);
console.log(`Counterfactual scores: A=${cfA}/142, B=${cfB}/87 -> ${cfA === 142 && cfB === 87 ? 'PERFECT MATCH ✅' : 'MISMATCH ❌'}`);

// Write JSON out
fs.writeFileSync('src/types/criteria500.json', JSON.stringify(allCriteria, null, 2));
console.log('Saved src/types/criteria500.json successfully!');
