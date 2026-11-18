"use client";

import { Container } from "@/components/ui/Container";
import { Chip } from "@/components/ui/Badge";
import {
  PythonIcon,
  SqlIcon,
  SnowflakeIcon,
  PowerBiIcon,
  ExcelIcon,
} from "@/components/ui/TechIcons";

interface TrajectoryItem {
  period: string;
  role: string;
  company: string;
  location: string;
  scope: string;
  summary: string;
  chips: { name: string; icon?: React.ElementType }[];
}

const trajectory: TrajectoryItem[] = [
  {
    period: "2026 - Present",
    role: "Senior Financial Planning & Analysis Analyst",
    company: "GEICO",
    location: "Chicago, IL",
    scope: "$25M Portfolio Lead",
    summary:
      "Directing comprehensive FP&A for the $25M Emerging Business unit. Architected forecasting models targeting 40% YoY volume growth, automated Snowflake data pipelines, and engineered dynamic workforce capacity models.",
    chips: [
      { name: "Snowflake", icon: SnowflakeIcon },
      { name: "SQL", icon: SqlIcon },
      { name: "Python", icon: PythonIcon },
      { name: "Power BI", icon: PowerBiIcon },
    ],
  },
  {
    period: "2024 - 2026",
    role: "Financial Planning & Analysis Analyst",
    company: "GEICO",
    location: "Chicago, IL",
    scope: "Auto Claims (35% Volume)",
    summary:
      "Conducted financial analytics for regional claims handling ~35% volume. Built CPI-linked Python scripts to eliminate manual inflation tracking, forecasted 14% cost escalation across EV/Tesla trends, and reduced ad-hoc reporting turnaround by 45%.",
    chips: [
      { name: "Python CPI", icon: PythonIcon },
      { name: "Risk Modeling" },
      { name: "SQL Querying", icon: SqlIcon },
    ],
  },
  {
    period: "2024",
    role: "Analyst Intern",
    company: "Skywalker Property Partners",
    location: "Bedford, TX",
    scope: "Real Estate & M&A",
    summary:
      "Developed comprehensive M&A cash flow forecasts in Excel, verified 1,000+ commercial invoices with zero errors, and assisted in interest-rate scenario modeling.",
    chips: [
      { name: "M&A Modeling", icon: ExcelIcon },
      { name: "Cash Flow Forecasting" },
    ],
  },
  {
    period: "2021 - 2022",
    role: "Finance Analyst",
    company: "Ranjit Galledar & Company",
    location: "Gujarat, India",
    scope: "100+ Corporate Portfolios",
    summary:
      "Formulated DCF, NPV, and IRR models evaluating investment capital feasibility across 100+ companies, driving 30% cost savings through automated financial reporting.",
    chips: [
      { name: "DCF / NPV / IRR", icon: ExcelIcon },
      { name: "Variance Analysis" },
    ],
  },
];

export function Experience() {
  return (
    <section id="trajectory" className="py-24 sm:py-36 border-b border-stone-200/80 bg-stone-50">
      <Container size="wide">
        {/* Section Header */}
        <div className="flex items-center justify-between pb-6 border-b border-stone-200/60 mb-16 sm:mb-24">
          <span className="text-xs uppercase tracking-mega font-mono text-ink-muted">
            04 / Trajectory
          </span>
          <span className="text-xs uppercase tracking-widest font-mono text-stone-400">
            Professional Experience
          </span>
        </div>

        {/* Minimal Editorial Rows */}
        <div className="divide-y divide-stone-200/80">
          {trajectory.map((item) => (
            <div
              key={item.role + item.company}
              className="py-10 sm:py-14 transition-colors hover:bg-stone-100/40 rounded-super-sm px-2 sm:px-6"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
                {/* Time & Scope */}
                <div className="lg:col-span-3 space-y-1">
                  <span className="text-xs font-mono uppercase tracking-widest text-stone-400 block">
                    {item.period}
                  </span>
                  <span className="text-xs font-mono font-medium text-accent">
                    {item.scope}
                  </span>
                </div>

                {/* Role & Company */}
                <div className="lg:col-span-4 space-y-1">
                  <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-ink">
                    {item.role}
                  </h3>
                  <div className="flex items-center gap-2 text-xs font-mono text-ink-muted">
                    <span className="text-ink font-semibold">{item.company}</span>
                    <span>•</span>
                    <span>{item.location}</span>
                  </div>
                </div>

                {/* Summary & Chips */}
                <div className="lg:col-span-5 space-y-4">
                  <p className="text-sm text-ink-muted leading-relaxed">
                    {item.summary}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.chips.map((chip) => {
                      const Icon = chip.icon;
                      return (
                        <Chip
                          key={chip.name}
                          variant="neutral"
                          className="inline-flex items-center gap-1.5 py-1 px-2.5 bg-white text-[11px]"
                        >
                          {Icon && <Icon className="w-3.5 h-3.5 shrink-0" />}
                          <span>{chip.name}</span>
                        </Chip>
                      );
                    })}
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
