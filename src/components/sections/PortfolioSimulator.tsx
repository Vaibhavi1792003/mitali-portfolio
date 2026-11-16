"use client";

import * as React from "react";
import { Container, SectionHeader } from "@/components/ui/Container";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Badge";
import { NumberFlowWrapper } from "@/components/ui/NumberFlowWrapper";
import { SlidersHorizontal } from "lucide-react";

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
    name: "Naïve Equal-Weight (1/N)",
    badge: "Benchmark",
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
    badge: "Active Growth",
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
    name: "Markowitz Optimal (Max Sharpe)",
    badge: "Efficient Frontier",
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
    <section id="simulator" className="py-16 sm:py-20 border-b border-neutral-200/80 bg-white">
      <Container size="default">
        <SectionHeader
          eyebrow="Interactive Project Demo"
          title="Markowitz portfolio allocation model"
          description="A working model based on my academic project at UT Arlington, comparing Naïve, Custom, and Markowitz Optimal asset allocation in R."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Controls */}
          <div className="lg:col-span-5 space-y-4">
            <Card className="p-6">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3">
                <SlidersHorizontal className="w-4 h-4 text-accent" />
                Portfolio Model
              </div>

              {/* Strategy Selector */}
              <div className="space-y-2 mb-4">
                <label className="text-xs font-semibold text-neutral-700 block">
                  Select Allocation Strategy
                </label>
                <div className="grid grid-cols-3 gap-1.5">
                  {(Object.keys(portfolioStrategies) as StrategyKey[]).map((key) => {
                    const isSelected = selectedStrategy === key;
                    return (
                      <button
                        key={key}
                        type="button"
                        onClick={() => setSelectedStrategy(key)}
                        className={`p-2 text-xs font-medium rounded-super-sm border transition-all capitalize text-center ${
                          isSelected
                            ? "bg-neutral-900 text-white border-neutral-900"
                            : "bg-neutral-50 border-neutral-200 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100"
                        }`}
                      >
                        {key}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Capital Base Selector */}
              <div className="space-y-2 mb-4">
                <label className="text-xs font-semibold text-neutral-700 block">
                  Simulated Capital Base (USD)
                </label>
                <div className="grid grid-cols-3 gap-1.5">
                  {capitalBases.map((cap) => {
                    const isSelected = capitalBase === cap;
                    const label = `$${cap / 1_000}K`;
                    return (
                      <button
                        key={cap}
                        type="button"
                        onClick={() => setCapitalBase(cap)}
                        className={`p-2 text-xs font-medium rounded-super-sm border transition-all text-center ${
                          isSelected
                            ? "bg-accent text-accent-foreground border-accent font-semibold"
                            : "bg-neutral-50 border-neutral-200 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100"
                        }`}
                      >
                        {label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="pt-3 border-t border-neutral-100 flex items-center justify-between text-xs">
                <span className="text-neutral-500 font-medium">Selected Model:</span>
                <Chip variant="accent">{currentStrategy.badge}</Chip>
              </div>
            </Card>
          </div>

          {/* Results Display */}
          <div className="lg:col-span-7 space-y-4">
            {/* Live Metrics */}
            <div className="grid grid-cols-3 gap-3">
              <Card className="p-4 bg-neutral-50/60">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 block mb-1">
                  Expected Return
                </span>
                <div className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 flex items-baseline">
                  <NumberFlowWrapper
                    value={currentStrategy.expectedReturn}
                    format={{ minimumFractionDigits: 1, maximumFractionDigits: 1 }}
                    suffix="%"
                  />
                </div>
              </Card>

              <Card className="p-4 bg-neutral-50/60">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 block mb-1">
                  Expected Gain
                </span>
                <div className="text-xl sm:text-2xl font-bold tracking-tight text-accent flex items-baseline">
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
              </Card>

              <Card className="p-4 bg-neutral-50/60">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 block mb-1">
                  Sharpe Ratio
                </span>
                <div className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 flex items-baseline">
                  <NumberFlowWrapper
                    value={currentStrategy.sharpeRatio}
                    format={{ minimumFractionDigits: 2, maximumFractionDigits: 2 }}
                  />
                </div>
              </Card>
            </div>

            {/* Asset Allocation Weights */}
            <Card className="p-5">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-700">
                  Stock Weights in {currentStrategy.name}
                </h4>
                <span className="text-xs text-neutral-400">
                  Vol: {currentStrategy.volatility}%
                </span>
              </div>

              <div className="space-y-2.5">
                {currentStrategy.weights.map((asset) => (
                  <div key={asset.ticker} className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1.5">
                        <span className="font-mono font-bold text-neutral-900 w-12">
                          {asset.ticker}
                        </span>
                        <span className="text-neutral-500">{asset.name}</span>
                      </div>
                      <span className="font-mono font-semibold text-neutral-700">
                        {asset.weight}% (${((capitalBase * asset.weight) / 100).toLocaleString()})
                      </span>
                    </div>
                    <div className="w-full bg-neutral-100 h-1.5 rounded-super-sm overflow-hidden">
                      <div
                        className="bg-accent h-full rounded-super-sm transition-all duration-300"
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
