"use client";

import * as React from "react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Badge";
import { NumberFlowWrapper } from "@/components/ui/NumberFlowWrapper";
import { SlidersHorizontal, ArrowUpRight } from "lucide-react";

type StrategyKey = "naive" | "custom" | "optimal";

interface PortfolioConfig {
  name: string;
  badge: string;
  expectedReturn: number;
  volatility: number;
  sharpeRatio: number;
  weights: {
    ticker: string;
    name: string;
    weight: number;
  }[];
}

const portfolioStrategies: Record<StrategyKey, PortfolioConfig> = {
  naive: {
    name: "Naïve 1/N Benchmark",
    badge: "Equal Weighted",
    expectedReturn: 12.4,
    volatility: 16.8,
    sharpeRatio: 0.74,
    weights: [
      { ticker: "AAPL", name: "Apple", weight: 14.3 },
      { ticker: "MSFT", name: "Microsoft", weight: 14.3 },
      { ticker: "NVDA", name: "NVIDIA", weight: 14.3 },
      { ticker: "JPM", name: "JPMorgan Chase", weight: 14.3 },
      { ticker: "XOM", name: "Exxon Mobil", weight: 14.3 },
      { ticker: "JNJ", name: "Johnson & Johnson", weight: 14.3 },
      { ticker: "AMZN", name: "Amazon", weight: 14.2 },
    ],
  },
  custom: {
    name: "Custom Sector-Tilted",
    badge: "Active Conviction",
    expectedReturn: 15.8,
    volatility: 15.2,
    sharpeRatio: 1.04,
    weights: [
      { ticker: "MSFT", name: "Microsoft", weight: 22.0 },
      { ticker: "NVDA", name: "NVIDIA", weight: 20.0 },
      { ticker: "JPM", name: "JPMorgan Chase", weight: 18.0 },
      { ticker: "AAPL", name: "Apple", weight: 15.0 },
      { ticker: "AMZN", name: "Amazon", weight: 12.0 },
      { ticker: "XOM", name: "Exxon Mobil", weight: 8.0 },
      { ticker: "JNJ", name: "Johnson & Johnson", weight: 5.0 },
    ],
  },
  optimal: {
    name: "Markowitz Tangency Optimal",
    badge: "Max Sharpe Frontier",
    expectedReturn: 18.2,
    volatility: 13.6,
    sharpeRatio: 1.34,
    weights: [
      { ticker: "MSFT", name: "Microsoft", weight: 26.0 },
      { ticker: "JPM", name: "JPMorgan Chase", weight: 24.0 },
      { ticker: "NVDA", name: "NVIDIA", weight: 19.0 },
      { ticker: "XOM", name: "Exxon Mobil", weight: 14.0 },
      { ticker: "AAPL", name: "Apple", weight: 10.0 },
      { ticker: "JNJ", name: "Johnson & Johnson", weight: 7.0 },
      { ticker: "AMZN", name: "Amazon", weight: 0.0 },
    ],
  },
};

const capitalBases = [50_000, 100_000, 250_000];

export function PortfolioSimulator() {
  const [selectedStrategy, setSelectedStrategy] = React.useState<StrategyKey>("optimal");
  const [capitalBase, setCapitalBase] = React.useState<number>(100_000);

  const currentStrategy = portfolioStrategies[selectedStrategy];
  const projectedReturnAmount = (capitalBase * currentStrategy.expectedReturn) / 100;

  return (
    <section id="simulator" className="py-24 sm:py-36 border-b border-stone-200/80 bg-stone-100/40">
      <Container size="wide">
        {/* Section Header */}
        <div className="flex items-center justify-between pb-6 border-b border-stone-200/60 mb-16 sm:mb-24">
          <span className="text-xs uppercase tracking-mega font-mono text-ink-muted">
            03 / Interactive Lab
          </span>
          <span className="text-xs uppercase tracking-widest font-mono text-stone-400">
            Parametric Allocator
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-[11px] uppercase tracking-widest text-accent font-mono block">
                Quadratic Allocation Engine
              </span>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink">
                Markowitz Efficient Frontier Simulator
              </h2>
              <p className="text-sm text-ink-muted leading-relaxed">
                Test the risk-adjusted variance reduction model formulated in R, comparing equal-weighted Naïve allocation against the optimal tangency portfolio.
              </p>
            </div>

            {/* Strategy Selectors */}
            <div className="space-y-3 pt-6 border-t border-stone-200/60">
              <label className="text-xs font-mono uppercase tracking-widest text-stone-400 block">
                Select Strategy
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(Object.keys(portfolioStrategies) as StrategyKey[]).map((key) => {
                  const isSelected = selectedStrategy === key;
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setSelectedStrategy(key)}
                      className={`p-3 text-xs font-mono uppercase tracking-wider rounded-super-sm border transition-all text-center ${
                        isSelected
                          ? "bg-stone-900 text-stone-100 border-stone-900 shadow-subtle"
                          : "bg-white border-stone-200 text-ink-muted hover:text-ink hover:bg-stone-50"
                      }`}
                    >
                      {key}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Capital Preset Selectors */}
            <div className="space-y-3">
              <label className="text-xs font-mono uppercase tracking-widest text-stone-400 block">
                Investable Capital Base (USD)
              </label>
              <div className="grid grid-cols-3 gap-2">
                {capitalBases.map((cap) => {
                  const isSelected = capitalBase === cap;
                  const label = `$${cap / 1_000}K`;
                  return (
                    <button
                      key={cap}
                      type="button"
                      onClick={() => setCapitalBase(cap)}
                      className={`p-3 text-xs font-mono rounded-super-sm border transition-all text-center ${
                        isSelected
                          ? "bg-accent text-white border-accent font-semibold shadow-subtle"
                          : "bg-white border-stone-200 text-ink-muted hover:text-ink hover:bg-stone-50"
                      }`}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between text-xs font-mono text-ink-muted">
              <span>Selected Frontier:</span>
              <span className="text-ink font-semibold">{currentStrategy.name}</span>
            </div>
          </div>

          {/* Results Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Live Metrics Grid with Monumental Typography */}
            <div className="grid grid-cols-3 gap-4">
              <Card className="p-6 bg-white border border-stone-200/90 shadow-card">
                <span className="text-[10px] uppercase tracking-mega font-mono text-stone-400 block mb-2">
                  Expected Yield
                </span>
                <div className="text-2xl sm:text-4xl font-light font-mono text-ink tracking-tight flex items-baseline">
                  <NumberFlowWrapper
                    value={currentStrategy.expectedReturn}
                    format={{ minimumFractionDigits: 1, maximumFractionDigits: 1 }}
                    suffix="%"
                  />
                </div>
                <span className="text-[11px] text-stone-400 font-mono mt-1 block">
                  CAPM Modeled
                </span>
              </Card>

              <Card className="p-6 bg-white border border-stone-200/90 shadow-card">
                <span className="text-[10px] uppercase tracking-mega font-mono text-stone-400 block mb-2">
                  Projected Gain
                </span>
                <div className="text-2xl sm:text-4xl font-light font-mono text-accent tracking-tight flex items-baseline">
                  <NumberFlowWrapper
                    value={projectedReturnAmount}
                    format={{
                      style: "currency",
                      currency: "USD",
                      notation: "compact",
                      maximumFractionDigits: 1,
                    }}
                  />
                </div>
                <span className="text-[11px] text-stone-400 font-mono mt-1 block">
                  Annual Horizon
                </span>
              </Card>

              <Card className="p-6 bg-white border border-stone-200/90 shadow-card">
                <span className="text-[10px] uppercase tracking-mega font-mono text-stone-400 block mb-2">
                  Sharpe Ratio
                </span>
                <div className="text-2xl sm:text-4xl font-light font-mono text-ink tracking-tight flex items-baseline">
                  <NumberFlowWrapper
                    value={currentStrategy.sharpeRatio}
                    format={{ minimumFractionDigits: 2, maximumFractionDigits: 2 }}
                  />
                </div>
                <span className="text-[11px] text-stone-400 font-mono mt-1 block">
                  Risk-Adjusted
                </span>
              </Card>
            </div>

            {/* Asset Weightings Breakdown */}
            <Card className="p-6 sm:p-8 bg-white border border-stone-200/90 shadow-card">
              <div className="flex items-center justify-between pb-4 border-b border-stone-100 mb-6">
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-semibold text-ink">
                    Weight Distribution by Equity
                  </h4>
                  <p className="text-xs text-ink-muted">
                    7 multi-sector equities solved for optimal quadratic curvature.
                  </p>
                </div>
                <span className="text-xs font-mono text-accent bg-accent-light px-2.5 py-1 rounded-super-sm">
                  Vol: {currentStrategy.volatility}%
                </span>
              </div>

              <div className="space-y-4">
                {currentStrategy.weights.map((asset) => (
                  <div key={asset.ticker} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold text-ink w-12">
                          {asset.ticker}
                        </span>
                        <span className="text-ink-muted">{asset.name}</span>
                      </div>
                      <span className="font-mono font-medium text-ink">
                        {asset.weight}% (${((capitalBase * asset.weight) / 100).toLocaleString()})
                      </span>
                    </div>
                    <div className="w-full bg-stone-100 h-1.5 rounded-full overflow-hidden">
                      <div
                        className="bg-accent h-full rounded-full transition-all duration-300"
                        style={{ width: `${asset.weight}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}
