"use client";

import * as React from "react";
import { Play, Pause, RotateCcw, Video, Image as ImageIcon, Maximize2 } from "lucide-react";

interface ProjectMediaShowcaseProps {
  projectId: "portfolio" | "risk" | "agri";
  title: string;
}

export function ProjectMediaShowcase({ projectId, title }: ProjectMediaShowcaseProps) {
  const [activeTab, setActiveTab] = React.useState<"video" | "image">("video");
  const [isPlaying, setIsPlaying] = React.useState<boolean>(true);
  const [progress, setProgress] = React.useState<number>(35);

  React.useEffect(() => {
    if (!isPlaying || activeTab !== "video") return;
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1.2));
    }, 100);
    return () => clearInterval(interval);
  }, [isPlaying, activeTab]);

  return (
    <div className="w-full rounded-super border border-neutral-200/90 bg-neutral-900 text-white overflow-hidden shadow-card mb-4">
      {/* Top Bar with Window Controls & View Mode Toggle */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-neutral-950 border-b border-neutral-800">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-neutral-700 inline-block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-neutral-700 inline-block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-neutral-700 inline-block"></span>
          </div>
          <span className="text-[11px] font-mono text-neutral-400 ml-2 hidden sm:inline">
            {projectId === "portfolio" && "portfolio_optimization.R - RStudio IDE"}
            {projectId === "risk" && "institutional_var_model.py - Jupyter Notebook"}
            {projectId === "agri" && "dcf_sensitivity_model.xlsx - Financial Analysis"}
          </span>
        </div>

        {/* Media Toggle: Video vs Screenshot */}
        <div className="flex items-center gap-1 bg-neutral-900 p-0.5 rounded-super-sm border border-neutral-800">
          <button
            type="button"
            onClick={() => setActiveTab("video")}
            className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-super-sm transition-all ${
              activeTab === "video"
                ? "bg-neutral-800 text-white shadow-subtle"
                : "text-neutral-400 hover:text-neutral-200"
            }`}
          >
            <Video className="w-3 h-3 text-accent" />
            <span>Video Walkthrough</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("image")}
            className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-super-sm transition-all ${
              activeTab === "image"
                ? "bg-neutral-800 text-white shadow-subtle"
                : "text-neutral-400 hover:text-neutral-200"
            }`}
          >
            <ImageIcon className="w-3 h-3 text-accent" />
            <span>Model Graphic</span>
          </button>
        </div>
      </div>

      {/* Media Canvas / Screen Area */}
      <div className="relative aspect-[16/9] w-full bg-neutral-950 overflow-hidden flex items-center justify-center select-none">
        {activeTab === "video" ? (
          /* Animated Video Screen Walkthrough */
          <div className="relative w-full h-full flex flex-col justify-between p-4 sm:p-6 bg-gradient-to-b from-neutral-900/90 to-neutral-950">
            {/* Project-Specific Live Simulation Graphics */}
            {projectId === "portfolio" && (
              <div className="w-full h-full flex flex-col justify-between">
                <div className="flex justify-between items-center text-xs text-neutral-400 border-b border-neutral-800/80 pb-2">
                  <span className="font-mono text-emerald-400">
                    &gt; Rscript markowitz_frontier.R --assets AAPL,MSFT,JPM,NVDA,XOM,JNJ,AMZN
                  </span>
                  <span className="font-mono text-[11px] bg-neutral-800 px-2 py-0.5 rounded text-neutral-300">
                    Sharpe: 1.34 | Vol: 13.6%
                  </span>
                </div>

                {/* SVG Frontier Animated Graph */}
                <div className="relative flex-1 my-3 flex items-center justify-center">
                  <svg viewBox="0 0 400 160" className="w-full h-full">
                    {/* Grid lines */}
                    <line x1="40" y1="20" x2="380" y2="20" stroke="#262626" strokeDasharray="3 3" />
                    <line x1="40" y1="70" x2="380" y2="70" stroke="#262626" strokeDasharray="3 3" />
                    <line x1="40" y1="120" x2="380" y2="120" stroke="#262626" strokeDasharray="3 3" />
                    {/* Axes */}
                    <line x1="40" y1="140" x2="380" y2="140" stroke="#404040" strokeWidth="1.5" />
                    <line x1="40" y1="10" x2="40" y2="140" stroke="#404040" strokeWidth="1.5" />
                    {/* Markowitz Curve */}
                    <path
                      d="M 60 130 Q 120 40, 220 30 T 360 25"
                      fill="none"
                      stroke="#059669"
                      strokeWidth="2.5"
                      className="transition-all duration-300"
                    />
                    {/* Capital Allocation Line (CAL) */}
                    <line x1="40" y1="110" x2="340" y2="15" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="4 2" />
                    {/* Individual Stocks Scatter */}
                    <circle cx="110" cy="95" r="4.5" fill="#f59e0b" />
                    <text x="118" y="99" fill="#a3a3a3" fontSize="10" fontFamily="monospace">JNJ</text>
                    <circle cx="160" cy="80" r="4.5" fill="#f59e0b" />
                    <text x="168" y="84" fill="#a3a3a3" fontSize="10" fontFamily="monospace">JPM</text>
                    <circle cx="210" cy="55" r="5" fill="#10b981" />
                    <text x="218" y="58" fill="#34d399" fontSize="11" fontWeight="bold" fontFamily="monospace">Optimal</text>
                    <circle cx="270" cy="45" r="4.5" fill="#f59e0b" />
                    <text x="278" y="49" fill="#a3a3a3" fontSize="10" fontFamily="monospace">MSFT</text>
                    <circle cx="330" cy="35" r="4.5" fill="#ef4444" />
                    <text x="338" y="39" fill="#a3a3a3" fontSize="10" fontFamily="monospace">NVDA</text>
                    {/* Animated Scanning Tracker Needle */}
                    <line
                      x1={40 + (progress / 100) * 320}
                      y1="10"
                      x2={40 + (progress / 100) * 320}
                      y2="140"
                      stroke="#10b981"
                      strokeWidth="1.5"
                      strokeDasharray="2 2"
                      opacity="0.8"
                    />
                  </svg>
                </div>

                <div className="flex justify-between items-center text-[11px] font-mono text-neutral-400 pt-2 border-t border-neutral-800/80">
                  <span>Portfolio Variance Matrix: Converged (7 assets)</span>
                  <span className="text-emerald-400">Optimization: 100% complete</span>
                </div>
              </div>
            )}

            {projectId === "risk" && (
              <div className="w-full h-full flex flex-col justify-between">
                <div className="flex justify-between items-center text-xs text-neutral-400 border-b border-neutral-800/80 pb-2">
                  <span className="font-mono text-sky-400">
                    &gt; python risk_var_simulation.py --iterations 10000 --confidence 0.99
                  </span>
                  <span className="font-mono text-[11px] bg-neutral-800 px-2 py-0.5 rounded text-neutral-300">
                    Wells Fargo vs UBS vs Goldman
                  </span>
                </div>

                {/* VaR Distribution Curve */}
                <div className="relative flex-1 my-3 flex items-center justify-center">
                  <svg viewBox="0 0 400 160" className="w-full h-full">
                    {/* Gaussian Bell Curve */}
                    <path
                      d="M 40 140 Q 150 140, 200 20 Q 250 140, 360 140"
                      fill="none"
                      stroke="#38bdf8"
                      strokeWidth="2.5"
                    />
                    {/* Shaded Tail Risk 99% VaR Area */}
                    <path
                      d="M 40 140 Q 110 140, 140 110 L 140 140 Z"
                      fill="#ef4444"
                      fillOpacity="0.4"
                    />
                    <line x1="140" y1="30" x2="140" y2="140" stroke="#ef4444" strokeWidth="2" strokeDasharray="3 2" />
                    <text x="145" y="45" fill="#f87171" fontSize="10" fontFamily="monospace">
                      99% VaR Cutoff (-4.8%)
                    </text>
                    <line x1="40" y1="140" x2="360" y2="140" stroke="#404040" strokeWidth="1.5" />
                    {/* Live Scrubber Needle */}
                    <line
                      x1={40 + (progress / 100) * 320}
                      y1="20"
                      x2={40 + (progress / 100) * 320}
                      y2="140"
                      stroke="#f59e0b"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>

                <div className="flex justify-between items-center text-[11px] font-mono text-neutral-400 pt-2 border-t border-neutral-800/80">
                  <span>LCR Stress Test: Basel III Compliant (&gt;110%)</span>
                  <span className="text-sky-400">10,000 Monte Carlo Iterations</span>
                </div>
              </div>
            )}

            {projectId === "agri" && (
              <div className="w-full h-full flex flex-col justify-between">
                <div className="flex justify-between items-center text-xs text-neutral-400 border-b border-neutral-800/80 pb-2">
                  <span className="font-mono text-emerald-400">
                    &gt; excel_engine.calculate_dcf(discount_rate=0.085, years=10)
                  </span>
                  <span className="font-mono text-[11px] bg-neutral-800 px-2 py-0.5 rounded text-neutral-300">
                    NPV: $2.4M | IRR: 17.8%
                  </span>
                </div>

                {/* DCF Cash Flow Bars */}
                <div className="relative flex-1 my-3 flex items-center justify-center">
                  <svg viewBox="0 0 400 160" className="w-full h-full">
                    {/* Axis */}
                    <line x1="40" y1="130" x2="380" y2="130" stroke="#404040" strokeWidth="1.5" />
                    {/* Cash Flow Bars */}
                    <rect x="60" y="100" width="28" height="30" rx="3" fill="#ef4444" fillOpacity="0.8" />
                    <text x="65" y="95" fill="#f87171" fontSize="9" fontFamily="monospace">-$800K</text>

                    <rect x="110" y="80" width="28" height="50" rx="3" fill="#10b981" />
                    <text x="112" y="75" fill="#34d399" fontSize="9" fontFamily="monospace">+$320K</text>

                    <rect x="160" y="65" width="28" height="65" rx="3" fill="#10b981" />
                    <text x="162" y="60" fill="#34d399" fontSize="9" fontFamily="monospace">+$450K</text>

                    <rect x="210" y="50" width="28" height="80" rx="3" fill="#10b981" />
                    <text x="212" y="45" fill="#34d399" fontSize="9" fontFamily="monospace">+$580K</text>

                    <rect x="260" y="35" width="28" height="95" rx="3" fill="#10b981" />
                    <text x="262" y="30" fill="#34d399" fontSize="9" fontFamily="monospace">+$710K</text>

                    <rect x="310" y="20" width="28" height="110" rx="3" fill="#10b981" />
                    <text x="312" y="15" fill="#34d399" fontSize="9" fontFamily="monospace">+$890K</text>

                    {/* Sensitivity Line */}
                    <path d="M 60 115 Q 160 80, 330 25" fill="none" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3 2" />
                  </svg>
                </div>

                <div className="flex justify-between items-center text-[11px] font-mono text-neutral-400 pt-2 border-t border-neutral-800/80">
                  <span>Sensitivity: +10% to +20% land acquisition variance</span>
                  <span className="text-emerald-400">Payback: 3.4 Years</span>
                </div>
              </div>
            )}
          </div>
        ) : (
          /* High-Resolution Model Screenshot View */
          <div className="w-full h-full p-4 sm:p-6 bg-neutral-900 flex flex-col justify-between">
            <div className="flex items-center justify-between text-xs text-neutral-400 pb-2 border-b border-neutral-800">
              <span className="font-semibold text-neutral-200">
                {title} Architecture &amp; Methodology Diagram
              </span>
              <span className="text-[11px] font-mono bg-neutral-800 px-2 py-0.5 rounded text-accent">
                High-Res Vector Model
              </span>
            </div>

            {/* Model Graphic Content */}
            <div className="flex-1 my-3 flex items-center justify-center p-2 bg-neutral-950/70 rounded-super-sm border border-neutral-800">
              {projectId === "portfolio" && (
                <div className="w-full grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="p-3 bg-neutral-900 border border-neutral-800 rounded-super-sm">
                    <span className="text-neutral-400 text-[11px] block">Mean Return (Optimal)</span>
                    <span className="text-lg font-bold text-emerald-400 font-mono">18.2%</span>
                    <span className="text-[10px] text-neutral-500 block mt-1">CAPM Beta Adjusted</span>
                  </div>
                  <div className="p-3 bg-neutral-900 border border-neutral-800 rounded-super-sm">
                    <span className="text-neutral-400 text-[11px] block">Sharpe Ratio</span>
                    <span className="text-lg font-bold text-white font-mono">1.34</span>
                    <span className="text-[10px] text-neutral-500 block mt-1">Rf = 4.25%</span>
                  </div>
                  <div className="p-3 bg-neutral-900 border border-neutral-800 rounded-super-sm">
                    <span className="text-neutral-400 text-[11px] block">Portfolio Volatility</span>
                    <span className="text-lg font-bold text-sky-400 font-mono">13.6%</span>
                    <span className="text-[10px] text-neutral-500 block mt-1">Quadratic Minimization</span>
                  </div>
                </div>
              )}

              {projectId === "risk" && (
                <div className="w-full grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="p-3 bg-neutral-900 border border-neutral-800 rounded-super-sm">
                    <span className="text-neutral-400 text-[11px] block">Wells Fargo LCR</span>
                    <span className="text-lg font-bold text-emerald-400 font-mono">121%</span>
                    <span className="text-[10px] text-neutral-500 block mt-1">High-Quality Liquid</span>
                  </div>
                  <div className="p-3 bg-neutral-900 border border-neutral-800 rounded-super-sm">
                    <span className="text-neutral-400 text-[11px] block">UBS Debt-to-Equity</span>
                    <span className="text-lg font-bold text-sky-400 font-mono">2.8x</span>
                    <span className="text-[10px] text-neutral-500 block mt-1">Post-Credit Suisse</span>
                  </div>
                  <div className="p-3 bg-neutral-900 border border-neutral-800 rounded-super-sm">
                    <span className="text-neutral-400 text-[11px] block">Goldman 99% VaR</span>
                    <span className="text-lg font-bold text-amber-400 font-mono">$68M</span>
                    <span className="text-[10px] text-neutral-500 block mt-1">Trading Book 1-Day</span>
                  </div>
                </div>
              )}

              {projectId === "agri" && (
                <div className="w-full grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="p-3 bg-neutral-900 border border-neutral-800 rounded-super-sm">
                    <span className="text-neutral-400 text-[11px] block">Base Case NPV</span>
                    <span className="text-lg font-bold text-emerald-400 font-mono">$2,410,000</span>
                    <span className="text-[10px] text-neutral-500 block mt-1">WACC = 8.5%</span>
                  </div>
                  <div className="p-3 bg-neutral-900 border border-neutral-800 rounded-super-sm">
                    <span className="text-neutral-400 text-[11px] block">Project IRR</span>
                    <span className="text-lg font-bold text-white font-mono">17.8%</span>
                    <span className="text-[10px] text-neutral-500 block mt-1">Hurdle = 12.0%</span>
                  </div>
                  <div className="p-3 bg-neutral-900 border border-neutral-800 rounded-super-sm">
                    <span className="text-neutral-400 text-[11px] block">+20% Land Cost NPV</span>
                    <span className="text-lg font-bold text-sky-400 font-mono">$1,680,000</span>
                    <span className="text-[10px] text-neutral-500 block mt-1">Positive Downside Feasibility</span>
                  </div>
                </div>
              )}
            </div>

            <div className="flex justify-between items-center text-[11px] text-neutral-400 pt-2 border-t border-neutral-800">
              <span>Full methodology documented in research thesis.</span>
              <span className="text-accent font-medium">Verified UT Arlington Research</span>
            </div>
          </div>
        )}
      </div>

      {/* Video Player Control Bar (when activeTab is video) */}
      {activeTab === "video" && (
        <div className="px-4 py-2.5 bg-neutral-950 border-t border-neutral-800 flex items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-1.5 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white transition-colors"
              aria-label={isPlaying ? "Pause walkthrough" : "Play walkthrough"}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
            </button>
            <button
              type="button"
              onClick={() => setProgress(0)}
              className="p-1.5 rounded-full hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
              aria-label="Restart simulation"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
            <span className="font-mono text-[11px] text-neutral-400">
              0:{Math.floor(progress / 3).toString().padStart(2, "0")} / 0:33
            </span>
          </div>

          {/* Interactive Scrubber Bar */}
          <div
            className="flex-1 mx-3 h-1.5 bg-neutral-800 rounded-full overflow-hidden cursor-pointer"
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const clickX = e.clientX - rect.left;
              setProgress(Math.max(0, Math.min(100, (clickX / rect.width) * 100)));
            }}
          >
            <div
              className="h-full bg-accent transition-all duration-100 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono text-emerald-400 hidden sm:inline">
              LIVE SIMULATION
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></div>
          </div>
        </div>
      )}
    </div>
  );
}

