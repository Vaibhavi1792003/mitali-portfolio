"use client";

import { Container } from "@/components/ui/Container";
import { Chip } from "@/components/ui/Badge";
import { ProjectMediaShowcase } from "@/components/ui/ProjectMediaShowcase";
import { RIcon, ExcelIcon, PythonIcon } from "@/components/ui/TechIcons";
import { LineChart, Shield, Calculator } from "lucide-react";

interface ProjectItem {
  id: "portfolio" | "risk" | "agri";
  number: string;
  title: string;
  category: string;
  date: string;
  summary: string;
  metrics: { label: string; value: string }[];
  chips: { name: string; icon?: React.ElementType }[];
}

const projects: ProjectItem[] = [
  {
    id: "portfolio",
    number: "01",
    title: "Portfolio Construction & Efficient Frontier",
    category: "Asset Allocation & Quantitative Finance",
    date: "March 2024",
    summary:
      "Formulated quadratic optimization routines in R to construct Naïve, Custom, and Markowitz Optimal portfolios across a diversified $100K equity universe (AAPL, MSFT, JPM, NVDA, XOM, JNJ, AMZN).",
    metrics: [
      { label: "Optimal Sharpe Ratio", value: "1.34" },
      { label: "Modeled Return", value: "18.2%" },
      { label: "Portfolio Volatility", value: "13.6%" },
    ],
    chips: [
      { name: "R Programming", icon: RIcon },
      { name: "CAPM", icon: LineChart },
      { name: "MS Excel", icon: ExcelIcon },
    ],
  },
  {
    id: "risk",
    number: "02",
    title: "Risk Assessment of Global Financial Institutions",
    category: "Institutional Stress-Testing & Governance",
    date: "July 2023",
    summary:
      "A quantitative comparative study analyzing credit, market, liquidity, and interest rate risk profiles of Wells Fargo, UBS, and Goldman Sachs through SEC 10-K disclosures and Basel III capital metrics.",
    metrics: [
      { label: "Monte Carlo Cycles", value: "10,000" },
      { label: "Parametric VaR", value: "99% / 10-Day" },
      { label: "LCR Compliance", value: "> 110%" },
    ],
    chips: [
      { name: "Python", icon: PythonIcon },
      { name: "Value-at-Risk", icon: Shield },
      { name: "Basel III", icon: Shield },
    ],
  },
  {
    id: "agri",
    number: "03",
    title: "Optimal Land Allocation & Agricultural Capital Budgeting",
    category: "Real Assets & DCF Valuation",
    date: "May 2023",
    summary:
      "Evaluated commercial farming capital feasibility using multi-year Discounted Cash Flow models, calculating hurdle rates and 2-way sensitivity bounds across 10% to 20% land acquisition cost swings.",
    metrics: [
      { label: "Base Case NPV", value: "$2.41M" },
      { label: "Internal Rate of Return", value: "17.8%" },
      { label: "Payback Horizon", value: "3.4 Yrs" },
    ],
    chips: [
      { name: "DCF & NPV", icon: Calculator },
      { name: "Sensitivity Models", icon: LineChart },
      { name: "MS Excel", icon: ExcelIcon },
    ],
  },
];

export function Projects() {
  return (
    <section id="works" className="py-24 sm:py-36 border-b border-stone-200/80 bg-stone-50">
      <Container size="wide">
        {/* Section Header */}
        <div className="flex items-center justify-between pb-6 border-b border-stone-200/60 mb-16 sm:mb-24">
          <span className="text-xs uppercase tracking-mega font-mono text-ink-muted">
            02 / Selected Works
          </span>
          <span className="text-xs uppercase tracking-widest font-mono text-stone-400">
            Interactive Simulations
          </span>
        </div>

        {/* Architectural Gallery List */}
        <div className="space-y-24 sm:space-y-36">
          {projects.map((proj) => (
            <div key={proj.id} className="group">
              {/* Top Meta Bar */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-6 border-b border-stone-200/60 mb-8">
                <div className="flex items-baseline gap-4">
                  <span className="text-3xl sm:text-5xl font-light font-mono text-stone-400 group-hover:text-accent transition-colors">
                    {proj.number}
                  </span>
                  <div>
                    <span className="text-[11px] uppercase tracking-widest text-accent font-mono block">
                      {proj.category}
                    </span>
                    <h3 className="text-2xl sm:text-4xl font-semibold tracking-tight text-ink">
                      {proj.title}
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-mono text-ink-muted">
                  {proj.date}
                </span>
              </div>

              {/* Grid: Media Walkthrough + Clean Editorial Column */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
                {/* Media Showcase (Interactive Video Walkthrough & High-Res Graphic) */}
                <div className="lg:col-span-8">
                  <ProjectMediaShowcase
                    projectId={proj.id}
                    title={proj.title}
                  />
                </div>

                {/* Editorial Details & Key Metrics (No long paragraphs) */}
                <div className="lg:col-span-4 space-y-8">
                  <p className="text-sm sm:text-base text-ink-muted leading-relaxed">
                    {proj.summary}
                  </p>

                  {/* Parametric Metric Chips Table */}
                  <div className="space-y-3 pt-6 border-t border-stone-200/60">
                    <span className="text-[10px] uppercase tracking-mega text-stone-400 font-mono block">
                      Parametric Results
                    </span>
                    <div className="space-y-2">
                      {proj.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="flex items-center justify-between text-xs py-1.5 border-b border-stone-200/40"
                        >
                          <span className="text-ink-muted">{m.label}</span>
                          <span className="font-mono font-semibold text-ink">
                            {m.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Software Stack */}
                  <div className="pt-2">
                    <div className="flex flex-wrap gap-2">
                      {proj.chips.map((c) => {
                        const Icon = c.icon;
                        return (
                          <Chip
                            key={c.name}
                            variant="neutral"
                            className="inline-flex items-center gap-1.5 py-1 px-3 bg-white"
                          >
                            {Icon && <Icon className="w-3.5 h-3.5 shrink-0" />}
                            <span>{c.name}</span>
                          </Chip>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
