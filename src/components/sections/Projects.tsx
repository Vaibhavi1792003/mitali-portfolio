"use client";

import { Container, SectionHeader } from "@/components/ui/Container";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Badge";
import { PieChart, ShieldAlert, Sprout, LineChart, Shield, Calculator } from "lucide-react";
import { RIcon, ExcelIcon } from "@/components/ui/TechIcons";
import { ProjectMediaShowcase } from "@/components/ui/ProjectMediaShowcase";

interface ProjectItem {
  id: "portfolio" | "risk" | "agri";
  title: string;
  date: string;
  category: string;
  icon: React.ElementType;
  summary: string;
  chips: string[];
  points: string[];
}

function getProjectChipIcon(name: string) {
  if (name.includes("R Programming")) return RIcon;
  if (name.includes("Excel")) return ExcelIcon;
  if (name.includes("CAPM") || name.includes("Efficient Frontier") || name.includes("Sharpe")) return LineChart;
  if (name.includes("VaR") || name.includes("Basel") || name.includes("Liquidity")) return Shield;
  if (name.includes("DCF") || name.includes("NPV")) return Calculator;
  return null;
}

const projects: ProjectItem[] = [
  {
    id: "portfolio",
    title: "Portfolio Construction and Analysis",
    date: "March 2024",
    category: "Quantitative Asset Allocation",
    icon: PieChart,
    summary:
      "Developed and analyzed three investment portfolios (Naïve, Custom, and Optimal) under an assumption of $100,000 investable capital across diversified equities (AAPL, MSFT, JPM, NVDA, XOM, JNJ, AMZN).",
    chips: ["R Programming", "CAPM", "Efficient Frontier", "Sharpe Ratio", "MS Excel"],
    points: [
      "Evaluated risk-adjusted returns through mean return, standard deviation, and Sharpe ratio.",
      "Applied Capital Asset Pricing Model (CAPM) to evaluate systematic portfolio risk.",
      "Utilized Efficient Frontier theory for optimal asset allocation and weight optimization.",
      "Leveraged R programming and Microsoft Suite for model development and data visualization.",
    ],
  },
  {
    id: "risk",
    title: "Risk Assessment of Financial Institutions",
    date: "July 2023",
    category: "Institutional Risk",
    icon: ShieldAlert,
    summary:
      "Conducted a comparative study of credit, market, liquidity, and interest rate risk management strategies at Wells Fargo, UBS, and Goldman Sachs.",
    chips: ["Value-at-Risk (VaR)", "Liquidity Coverage Ratio", "Basel III", "Financial Statements"],
    points: [
      "Assessed quantitative metrics including Value-at-Risk (VaR), Debt-to-Equity ratios, and Liquidity Coverage Ratios (LCR).",
      "Analyzed qualitative disclosures and risk factor statements from SEC 10-K filings.",
      "Delivered actionable recommendations to enhance institutional risk management practices.",
    ],
  },
  {
    id: "agri",
    title: "Optimal Land Allocation & Risk in Agricultural Investment",
    date: "May 2023",
    category: "Capital Budgeting",
    icon: Sprout,
    summary:
      "Evaluated the profitability of a farming project using DCF analysis, calculated NPV and IRR to determine investment feasibility under uncertain market conditions.",
    chips: ["DCF Modeling", "NPV & IRR", "Sensitivity Analysis", "Scenario Planning"],
    points: [
      "Calculated Net Present Value (NPV) and Internal Rate of Return (IRR) across multi-year cash flow projections.",
      "Conducted scenario analysis for land allocation and crop selection with fixed-price purchase agreements.",
      "Performed sensitivity analysis on land cost variations (10% to 20%) to identify downside boundaries.",
    ],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-20 border-b border-neutral-200/80 bg-neutral-50/50">
      <Container size="default">
        <SectionHeader
          eyebrow="Academic Projects"
          title="Quantitative research & financial modeling"
          description="Selected projects from my Master of Science in Quantitative Finance coursework, featuring interactive video simulations, model graphics, and empirical research."
        />

        <div className="space-y-10">
          {projects.map((proj) => {
            const Icon = proj.icon;
            return (
              <Card key={proj.title} hoverEffect className="p-6 sm:p-8 bg-white overflow-hidden">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-super-sm bg-neutral-100 border border-neutral-200/80 flex items-center justify-center text-accent">
                      <Icon className="w-4 h-4" strokeWidth={1.5} />
                    </div>
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-accent block">
                        {proj.category}
                      </span>
                      <CardTitle className="text-lg sm:text-xl font-semibold text-neutral-900 leading-snug">
                        {proj.title}
                      </CardTitle>
                    </div>
                  </div>

                  <span className="text-xs font-mono text-neutral-400">
                    {proj.date}
                  </span>
                </div>

                <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                  {proj.summary}
                </p>

                {/* Video & Image Showcase Component */}
                <ProjectMediaShowcase
                  projectId={proj.id}
                  title={proj.title}
                />

                {/* Methodology Points & Tech Chips */}
                <div className="pt-4 border-t border-neutral-100 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                  <div className="md:col-span-8">
                    <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400 block mb-2">
                      Key Quantitative Deliverables
                    </span>
                    <ul className="space-y-1.5">
                      {proj.points.map((pt, i) => (
                        <li
                          key={i}
                          className="text-xs sm:text-sm text-neutral-600 flex items-start gap-2 leading-relaxed"
                        >
                          <span className="text-accent font-bold mt-0.5">›</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="md:col-span-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400 block mb-2">
                      Toolkit &amp; Frameworks
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {proj.chips.map((chip) => {
                        const ChipIcon = getProjectChipIcon(chip);
                        return (
                          <Chip
                            key={chip}
                            variant="neutral"
                            className="inline-flex items-center gap-1.5 py-1 px-2.5"
                          >
                            {ChipIcon && <ChipIcon className="w-3.5 h-3.5 shrink-0" />}
                            <span>{chip}</span>
                          </Chip>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
