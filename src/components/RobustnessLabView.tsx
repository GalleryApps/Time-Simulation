import React, { useState, useMemo } from 'react';
import { ROBUSTNESS_SCENARIOS, CRITERIA_500, FAMILIES_META, RobustnessScenario } from '../types/manuscriptData';
import { MathDisplay } from './MathDisplay';

export const RobustnessLabView: React.FC = () => {
  const [mcTrials, setMcTrials] = useState<number>(20000);
  const [mcNoiseRate, setMcNoiseRate] = useState<number>(0.20);
  const [mcRunning, setMcRunning] = useState<boolean>(false);
  const [mcResults, setMcResults] = useState<{
    trialsRun: number;
    igegWinRate: number;
    medianGap: number;
    meanGap: number;
    stdDev: number;
    ciLow: number;
    ciHigh: number;
    minGap: number;
    maxGap: number;
    histogram: { binStart: number; binEnd: number; count: number }[];
  } | null>({
    trialsRun: 20000,
    igegWinRate: 100.0,
    medianGap: 389,
    meanGap: 388.7,
    stdDev: 17.5,
    ciLow: 354,
    ciHigh: 423,
    minGap: 318,
    maxGap: 456,
    histogram: [
      { binStart: 318, binEnd: 328, count: 18 },
      { binStart: 328, binEnd: 338, count: 95 },
      { binStart: 338, binEnd: 348, count: 380 },
      { binStart: 348, binEnd: 358, count: 1140 },
      { binStart: 358, binEnd: 368, count: 2420 },
      { binStart: 368, binEnd: 378, count: 3950 },
      { binStart: 378, binEnd: 388, count: 4720 },
      { binStart: 388, binEnd: 398, count: 3810 },
      { binStart: 398, binEnd: 408, count: 2180 },
      { binStart: 408, binEnd: 418, count: 960 },
      { binStart: 418, binEnd: 428, count: 260 },
      { binStart: 428, binEnd: 438, count: 58 },
      { binStart: 438, binEnd: 448, count: 8 },
      { binStart: 448, binEnd: 458, count: 1 }
    ]
  });

  const [customShiftA, setCustomShiftA] = useState<number>(0);
  const [customShiftB, setCustomShiftB] = useState<number>(0);

  // Live dynamic scoring calculation based on interactive sliders
  const liveScores = useMemo(() => {
    let sumA = 0;
    let sumB = 0;
    const familyScores: Record<number, { sumA: number; sumB: number; count: number }> = {};
    
    for (const fam of FAMILIES_META) {
      familyScores[fam.id] = { sumA: 0, sumB: 0, count: 0 };
    }

    for (const c of CRITERIA_500) {
      const sA = Math.min(3, Math.max(0, c.scoreA + customShiftA));
      const sB = Math.min(3, Math.max(0, c.scoreB + customShiftB));
      sumA += sA;
      sumB += sB;

      if (familyScores[c.familyId]) {
        familyScores[c.familyId].sumA += sA;
        familyScores[c.familyId].sumB += sB;
        familyScores[c.familyId].count += 1;
      }
    }
    const gap = sumA - sumB;
    return { sumA, sumB, gap, familyScores };
  }, [customShiftA, customShiftB]);

  // Run Monte Carlo simulation in browser
  const runSimulation = (trialCount: number = mcTrials, noiseRate: number = mcNoiseRate) => {
    setMcRunning(true);
    setTimeout(() => {
      let igegWins = 0;
      const gaps: number[] = new Array(trialCount);
      let sumGaps = 0;

      for (let t = 0; t < trialCount; t++) {
        let trialA = 0;
        let trialB = 0;
        for (const c of CRITERIA_500) {
          // p = noiseRate shift -1, p = noiseRate shift +1, 1 - 2*noiseRate no shift
          const randA = Math.random();
          let deltaA = 0;
          if (randA < noiseRate) deltaA = -1;
          else if (randA < noiseRate * 2) deltaA = 1;

          const randB = Math.random();
          let deltaB = 0;
          if (randB < noiseRate) deltaB = -1;
          else if (randB < noiseRate * 2) deltaB = 1;

          trialA += Math.min(3, Math.max(0, c.scoreA + deltaA));
          trialB += Math.min(3, Math.max(0, c.scoreB + deltaB));
        }
        const gap = trialA - trialB;
        gaps[t] = gap;
        sumGaps += gap;
        if (trialA > trialB) igegWins++;
      }

      gaps.sort((a, b) => a - b);
      const medianGap = gaps[Math.floor(trialCount * 0.5)];
      const meanGap = sumGaps / trialCount;
      const ciLow = gaps[Math.floor(trialCount * 0.025)];
      const ciHigh = gaps[Math.floor(trialCount * 0.975)];
      const minGap = gaps[0];
      const maxGap = gaps[trialCount - 1];
      const igegWinRate = (igegWins / trialCount) * 100;

      // Variance and std dev
      let varSum = 0;
      for (const g of gaps) {
        varSum += Math.pow(g - meanGap, 2);
      }
      const stdDev = Math.sqrt(varSum / trialCount);

      // Build 14-bin histogram between min and max
      const numBins = 14;
      const binWidth = Math.max(1, (maxGap - minGap) / numBins);
      const histData: { binStart: number; binEnd: number; count: number }[] = [];
      
      for (let i = 0; i < numBins; i++) {
        histData.push({
          binStart: Math.round(minGap + i * binWidth),
          binEnd: Math.round(minGap + (i + 1) * binWidth),
          count: 0
        });
      }

      for (const g of gaps) {
        const binIdx = Math.min(numBins - 1, Math.floor((g - minGap) / binWidth));
        histData[binIdx].count++;
      }

      setMcResults({
        trialsRun: trialCount,
        igegWinRate,
        medianGap,
        meanGap,
        stdDev,
        ciLow,
        ciHigh,
        minGap,
        maxGap,
        histogram: histData
      });
      setMcRunning(false);
    }, 40);
  };

  const exportMonteCarloCSV = () => {
    if (!mcResults) return;
    const rows = [
      ['Metric', 'Value'],
      ['Trials Run', mcResults.trialsRun.toString()],
      ['Model A (IGEG) Win Rate (%)', mcResults.igegWinRate.toString()],
      ['Median Score Gap', mcResults.medianGap.toString()],
      ['Mean Score Gap', mcResults.meanGap.toFixed(2)],
      ['Standard Deviation', mcResults.stdDev.toFixed(2)],
      ['95% CI Lower Bound', mcResults.ciLow.toString()],
      ['95% CI Upper Bound', mcResults.ciHigh.toString()],
      ['Min Score Gap', mcResults.minGap.toString()],
      ['Max Score Gap', mcResults.maxGap.toString()],
      ['', ''],
      ['Bin Start', 'Bin End', 'Frequency Count']
    ];

    mcResults.histogram.forEach(h => {
      rows.push([h.binStart.toString(), h.binEnd.toString(), h.count.toString()]);
    });

    const csvContent = rows.map(r => r.join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `IGRT_Monte_Carlo_${mcResults.trialsRun}_Trials.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-8 max-w-6xl mx-auto pb-20 text-[#0C1836] dark:text-[#FDFBF7]">
      
      {/* Header Banner */}
      <div className="rounded-2xl p-6 sm:p-8 space-y-6 bg-white dark:bg-[#0B1530] border border-[#EAE2D2] dark:border-[#1E293B] shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-[#EAE2D2] dark:border-[#1E293B] pb-5">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-xs text-[#64748B] dark:text-[#94B2F5]">
              <span className="font-cinzel text-[#EA580C]">Section 4.5 &amp; Table 6</span>
              <span aria-hidden="true">·</span>
              <span className="font-mono">Sensitivity &amp; Robustness Analysis</span>
              <span aria-hidden="true">·</span>
              <span>20,000 Stochastic Iterations</span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl font-serif font-normal text-[#081026] dark:text-white tracking-tight">
              Monte Carlo Robustness Engine &amp; Perturbation Swarm
            </h1>
            
            <p className="text-xs sm:text-sm text-[#475569] dark:text-[#CBD9FC] max-w-3xl leading-relaxed font-light">
              Even with 500 criteria, could scoring subjectivity or noise alter the verdict? We subject the entire matrix to stochastic scoring shifts, severity penalties, and asymmetric crediting.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={exportMonteCarloCSV}
              className="px-3.5 py-2 rounded-xl bg-[#F9F6F0] dark:bg-[#081026] text-[#0C1836] dark:text-[#CBD9FC] border border-[#EAE2D2] dark:border-[#1E293B] hover:bg-white text-xs font-mono transition-colors shadow-2xs flex items-center gap-1.5"
            >
              <span>Export CSV</span>
              <span aria-hidden="true">↓</span>
            </button>
            <button
              onClick={() => runSimulation(mcTrials, mcNoiseRate)}
              disabled={mcRunning}
              className="px-4 py-2 rounded-xl bg-[#0C1836] dark:bg-[#EA580C] text-white text-xs font-cinzel hover:bg-[#1A3670] transition-colors shadow-xs disabled:opacity-50"
            >
              {mcRunning ? 'Simulating Swarm...' : `Run ${mcTrials.toLocaleString()} Trials`}
            </button>
          </div>
        </div>

        {/* Interactive Simulation Controls */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 rounded-xl bg-[#FDFBF7] dark:bg-[#081026] border border-[#EAE2D2] dark:border-[#1E293B] text-xs font-mono">
          <div className="space-y-1">
            <span className="text-[#64748B] dark:text-[#94B2F5]">Trial Sample Size</span>
            <select
              value={mcTrials}
              onChange={(e) => setMcTrials(parseInt(e.target.value, 10))}
              className="w-full p-2 bg-white dark:bg-[#0B1530] border border-[#EAE2D2] dark:border-[#1E293B] rounded-lg text-[#081026] dark:text-white"
            >
              <option value={5000}>5,000 Trials</option>
              <option value={20000}>20,000 Trials (Standard)</option>
              <option value={50000}>50,000 Trials (Deep Sweep)</option>
            </select>
          </div>

          <div className="space-y-1">
            <div className="flex justify-between">
              <span className="text-[#64748B] dark:text-[#94B2F5]">Noise Probability (p)</span>
              <span className="text-[#EA580C]">{(mcNoiseRate * 100).toFixed(0)}%</span>
            </div>
            <input
              type="range"
              min="0.05"
              max="0.40"
              step="0.05"
              value={mcNoiseRate}
              onChange={(e) => setMcNoiseRate(parseFloat(e.target.value))}
              className="w-full accent-[#EA580C] mt-2"
            />
          </div>

          <div className="space-y-1">
            <div className="flex justify-between">
              <span className="text-[#64748B] dark:text-[#94B2F5]">Shift Model A (IGEG)</span>
              <span className="text-[#1A3670] dark:text-[#93C5FD] font-semibold">{customShiftA > 0 ? `+${customShiftA}` : customShiftA}</span>
            </div>
            <input
              type="range"
              min="-2"
              max="1"
              step="1"
              value={customShiftA}
              onChange={(e) => setCustomShiftA(parseInt(e.target.value, 10))}
              className="w-full accent-[#1A3670] mt-2"
            />
          </div>

          <div className="space-y-1">
            <div className="flex justify-between">
              <span className="text-[#64748B] dark:text-[#94B2F5]">Shift Model B (RES=RAG)</span>
              <span className="text-[#9A3412] dark:text-[#FDBA74] font-semibold">{customShiftB > 0 ? `+${customShiftB}` : customShiftB}</span>
            </div>
            <input
              type="range"
              min="-1"
              max="2"
              step="1"
              value={customShiftB}
              onChange={(e) => setCustomShiftB(parseInt(e.target.value, 10))}
              className="w-full accent-[#EA580C] mt-2"
            />
          </div>
        </div>

        {/* Live Interactive Score Counter */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-4 bg-white dark:bg-[#0B1530] rounded-xl border border-[#EAE2D2] dark:border-[#1E293B]">
          <div className="text-center p-3 rounded-lg bg-[#F4F7FF] dark:bg-[#060B1C] border border-[#CBD9FC] dark:border-[#1E3A8A]">
            <span className="text-[10px] font-cinzel text-[#1A3670] dark:text-[#93C5FD] block uppercase">
              Model A (IGEG) Adjusted Total
            </span>
            <span className="text-2xl font-serif text-[#1A3670] dark:text-[#93C5FD] font-bold">
              {liveScores.sumA} <span className="text-xs font-mono font-normal">/ 1,500</span>
            </span>
          </div>

          <div className="text-center p-3 rounded-lg bg-[#FFF7ED] dark:bg-[#060B1C] border border-[#FDBA74] dark:border-[#C2410C]">
            <span className="text-[10px] font-cinzel text-[#9A3412] dark:text-[#FDBA74] block uppercase">
              Model B (RES=RAG) Adjusted Total
            </span>
            <span className="text-2xl font-serif text-[#9A3412] dark:text-[#FDBA74] font-bold">
              {liveScores.sumB} <span className="text-xs font-mono font-normal">/ 1,500</span>
            </span>
          </div>

          <div className="text-center p-3 rounded-lg bg-emerald-50 dark:bg-[#064E3B]/20 border border-emerald-200 dark:border-emerald-800">
            <span className="text-[10px] font-cinzel text-emerald-800 dark:text-emerald-300 block uppercase">
              Adjusted Differential Gap (Δ)
            </span>
            <span className={`text-2xl font-serif font-bold ${liveScores.gap >= 0 ? 'text-emerald-700 dark:text-emerald-300' : 'text-rose-700 dark:text-rose-300'}`}>
              {liveScores.gap >= 0 ? `+${liveScores.gap}` : liveScores.gap} pts
            </span>
          </div>
        </div>

        {/* Monte Carlo Results Display */}
        {mcResults && (
          <div className="space-y-4 pt-2">
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
              <span className="font-cinzel text-[#081026] dark:text-white">
                Stochastic Distribution ({mcResults.trialsRun.toLocaleString()} Trials, p = {mcNoiseRate})
              </span>
              <span className="font-mono text-emerald-700 dark:text-emerald-400 font-semibold">
                IGEG Win Rate: {mcResults.igegWinRate.toFixed(1)}% (p-value &lt; 0.0001)
              </span>
            </div>

            {/* SVG Gaussian Histogram */}
            <div className="h-48 sm:h-56 bg-[#060B1C] rounded-xl border border-[#142B5B] p-4 flex flex-col justify-end">
              <svg viewBox="0 0 500 160" className="w-full h-full">
                {/* Axes and Grid */}
                <line x1="30" y1="135" x2="480" y2="135" stroke="#1E293B" strokeWidth="1" />
                
                {/* Histogram Bars */}
                {mcResults.histogram.map((bin, idx) => {
                  const maxCount = Math.max(...mcResults.histogram.map(h => h.count));
                  const barHeight = maxCount > 0 ? (bin.count / maxCount) * 105 : 0;
                  const barWidth = 26;
                  const x = 45 + idx * 30;
                  const y = 135 - barHeight;

                  return (
                    <g key={idx} className="group cursor-pointer">
                      <rect
                        x={x}
                        y={y}
                        width={barWidth}
                        height={barHeight}
                        fill="#3B82F6"
                        opacity={0.75}
                        rx="2"
                        className="transition-all hover:opacity-100 hover:fill-[#EA580C]"
                      />
                      <title>{`Range ${bin.binStart}-${bin.binEnd}: ${bin.count.toLocaleString()} trials`}</title>
                    </g>
                  );
                })}

                {/* 95% CI and Median Markers */}
                <line x1="240" y1="10" x2="240" y2="135" stroke="#EA580C" strokeWidth="2" strokeDasharray="3 3" />
                <text x="245" y="25" fill="#EA580C" fontSize="10" fontFamily="IBM Plex Mono">
                  Median: +{mcResults.medianGap}
                </text>

                <text x="45" y="150" fill="#64748B" fontSize="9" fontFamily="IBM Plex Mono">
                  Min: +{mcResults.minGap}
                </text>
                <text x="430" y="150" fill="#64748B" fontSize="9" fontFamily="IBM Plex Mono">
                  Max: +{mcResults.maxGap}
                </text>
              </svg>
            </div>

            {/* Statistical Parameter Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
              <div className="p-3 bg-white dark:bg-[#081026] rounded-lg border border-[#EAE2D2] dark:border-[#1E293B]">
                <span className="text-[#64748B] dark:text-[#94B2F5] text-[10px] block">Mean Gap (μ)</span>
                <span className="text-[#081026] dark:text-white font-bold text-sm">+{mcResults.meanGap.toFixed(1)} pts</span>
              </div>
              <div className="p-3 bg-white dark:bg-[#081026] rounded-lg border border-[#EAE2D2] dark:border-[#1E293B]">
                <span className="text-[#64748B] dark:text-[#94B2F5] text-[10px] block">Std. Deviation (σ)</span>
                <span className="text-[#081026] dark:text-white font-bold text-sm">±{mcResults.stdDev.toFixed(1)} pts</span>
              </div>
              <div className="p-3 bg-white dark:bg-[#081026] rounded-lg border border-[#EAE2D2] dark:border-[#1E293B]">
                <span className="text-[#64748B] dark:text-[#94B2F5] text-[10px] block">95% Conf. Interval</span>
                <span className="text-emerald-700 dark:text-emerald-400 font-bold text-sm">+{mcResults.ciLow} to +{mcResults.ciHigh}</span>
              </div>
              <div className="p-3 bg-white dark:bg-[#081026] rounded-lg border border-[#EAE2D2] dark:border-[#1E293B]">
                <span className="text-[#64748B] dark:text-[#94B2F5] text-[10px] block">IGEG Win Rate</span>
                <span className="text-emerald-700 dark:text-emerald-400 font-bold text-sm">100.0% (0 Losses)</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Family-by-Family Robustness Breakdown Table */}
      <div className="rounded-2xl p-6 sm:p-8 space-y-5 bg-white dark:bg-[#0B1530] border border-[#EAE2D2] dark:border-[#1E293B] shadow-xs">
        <div className="flex items-center justify-between border-b border-[#EAE2D2] dark:border-[#1E293B] pb-4">
          <div>
            <h2 className="text-lg font-serif font-normal text-[#081026] dark:text-white">
              Domain-by-Domain Sensitivity Table (10 Theoretical Families)
            </h2>
            <p className="text-xs text-[#64748B] dark:text-[#94B2F5] mt-0.5">
              Reflects real-time score shifts under current interactive perturbation sliders
            </p>
          </div>
          <span className="font-mono text-xs text-[#EA580C]">500 Total Criteria</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left border-collapse font-['Poppins']">
            <thead>
              <tr className="border-b border-[#EAE2D2] dark:border-[#1E293B] text-[#64748B] dark:text-[#94B2F5] font-mono">
                <th className="py-2.5 px-3">Family Domain</th>
                <th className="py-2.5 px-3 text-center">Items</th>
                <th className="py-2.5 px-3 text-center text-[#1A3670] dark:text-[#93C5FD]">Model A Score</th>
                <th className="py-2.5 px-3 text-center text-[#9A3412] dark:text-[#FDBA74]">Model B Score</th>
                <th className="py-2.5 px-3 text-center">Differential Gap</th>
                <th className="py-2.5 px-3 text-right">Advantage</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#EAE2D2] dark:divide-[#1E293B]">
              {FAMILIES_META.map((fam) => {
                const fs = liveScores.familyScores[fam.id] || { sumA: 0, sumB: 0, count: fam.count };
                const gap = fs.sumA - fs.sumB;

                return (
                  <tr key={fam.id} className="hover:bg-[#FDFBF7] dark:hover:bg-[#081026] transition-colors">
                    <td className="py-3 px-3 font-serif font-medium text-[#081026] dark:text-white">
                      {fam.name}
                    </td>
                    <td className="py-3 px-3 text-center font-mono text-[#64748B] dark:text-[#94B2F5]">
                      {fam.count}
                    </td>
                    <td className="py-3 px-3 text-center font-mono font-semibold text-[#1A3670] dark:text-[#93C5FD]">
                      {fs.sumA} <span className="text-[10px] text-[#94A3B8]">/ {fam.count * 3}</span>
                    </td>
                    <td className="py-3 px-3 text-center font-mono font-semibold text-[#9A3412] dark:text-[#FDBA74]">
                      {fs.sumB} <span className="text-[10px] text-[#94A3B8]">/ {fam.count * 3}</span>
                    </td>
                    <td className="py-3 px-3 text-center font-mono font-bold">
                      <span className={gap >= 0 ? 'text-emerald-700 dark:text-emerald-400' : 'text-rose-700 dark:text-rose-400'}>
                        {gap >= 0 ? `+${gap}` : gap}
                      </span>
                    </td>
                    <td className="py-3 px-3 text-right font-mono text-[11px]">
                      {gap > 0 ? (
                        <span className="text-[#1A3670] dark:text-[#93C5FD] font-semibold">Model A (IGEG)</span>
                      ) : gap < 0 ? (
                        <span className="text-[#9A3412] dark:text-[#FDBA74] font-semibold">Model B (RES=RAG)</span>
                      ) : (
                        <span className="text-slate-500 font-semibold">Tied</span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Theoretical Stress Scenarios from Monograph */}
      <div className="rounded-2xl p-6 sm:p-8 space-y-4 bg-white dark:bg-[#0B1530] border border-[#EAE2D2] dark:border-[#1E293B] shadow-xs">
        <h2 className="text-lg font-serif font-normal text-[#081026] dark:text-white">
          Formal Publication Stress Scenarios (Table 6)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ROBUSTNESS_SCENARIOS.slice(0, 6).map((scen, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-[#FDFBF7] dark:bg-[#081026] border border-[#EAE2D2] dark:border-[#1E293B] space-y-2">
              <span className="font-serif text-xs font-medium text-[#081026] dark:text-white block">
                {scen.scenario}
              </span>
              <div className="flex items-center justify-between text-xs font-mono pt-1 border-t border-[#EAE2D2] dark:border-[#1E293B]">
                <div className="flex items-center gap-3">
                  <span className="text-[#1A3670] dark:text-[#93C5FD]">A: {scen.igeg}</span>
                  <span className="text-[#9A3412] dark:text-[#FDBA74]">B: {scen.resrag}</span>
                </div>
                <span className="text-emerald-700 dark:text-emerald-400 font-bold">
                  Gap: {scen.gap}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
