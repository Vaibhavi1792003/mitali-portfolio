"use client";

import { Container } from "@/components/ui/Container";

export function Manifesto() {
  return (
    <section id="thesis" className="py-24 sm:py-36 border-b border-stone-200/80 bg-stone-100/50">
      <Container size="wide">
        {/* Section Header */}
        <div className="flex items-center justify-between pb-6 border-b border-stone-200/60 mb-16 sm:mb-24">
          <span className="text-xs uppercase tracking-mega font-mono text-ink-muted">
            01 / The Thesis
          </span>
          <span className="text-xs uppercase tracking-widest font-mono text-stone-400">
            Fiduciary Discipline
          </span>
        </div>

        {/* Grand Editorial Pullquote (Airy, expansive, luxury) */}
        <div className="max-w-4xl mb-20 sm:mb-28">
          <p className="text-2xl sm:text-4xl md:text-5xl font-light text-ink leading-[1.18] tracking-tight">
            &ldquo;Precision in corporate finance is not about observing the past. It is the disciplined intersection of{" "}
            <span className="font-serif italic font-normal text-accent">mathematical modeling</span>, automated big-data pipelines, and actionable executive certainty.&rdquo;
          </p>
        </div>

        {/* 3 Monumental Stat Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-16 pt-12 border-t border-stone-200/80">
          <div className="space-y-3">
            <span className="text-5xl sm:text-6xl md:text-7xl font-light font-mono text-ink tracking-tight">
              $25M
            </span>
            <div className="space-y-1">
              <h3 className="text-xs uppercase tracking-widest font-semibold text-ink">
                Portfolio P&amp;L Directorship
              </h3>
              <p className="text-xs text-ink-muted leading-relaxed">
                Directing strategic planning, workforce capacity modeling, and unit-cost break-even for GEICO&apos;s emerging business unit.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <span className="text-5xl sm:text-6xl md:text-7xl font-light font-mono text-accent tracking-tight">
              40%
            </span>
            <div className="space-y-1">
              <h3 className="text-xs uppercase tracking-widest font-semibold text-ink">
                YoY Growth Architecture
              </h3>
              <p className="text-xs text-ink-muted leading-relaxed">
                Engineered full-cycle multi-year forecasting models projecting revenue and volume across 6+ client portfolios.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <span className="text-5xl sm:text-6xl md:text-7xl font-light font-mono text-ink tracking-tight">
              3.92
            </span>
            <div className="space-y-1">
              <h3 className="text-xs uppercase tracking-widest font-semibold text-ink">
                Master of Science GPA
              </h3>
              <p className="text-xs text-ink-muted leading-relaxed">
                Quantitative Finance at UT Arlington. Focused on financial derivatives, Black-Scholes, Monte Carlo, and portfolio theory.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
