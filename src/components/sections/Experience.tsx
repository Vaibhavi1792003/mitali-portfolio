"use client";

import { Container, SectionHeader } from "@/components/ui/Container";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Badge";
import { Calendar, MapPin } from "lucide-react";
import {
  PythonIcon,
  SqlIcon,
  SnowflakeIcon,
  PowerBiIcon,
  ExcelIcon,
} from "@/components/ui/TechIcons";

interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  chips: string[];
  points: string[];
}

function getChipIcon(name: string) {
  if (name.includes("Snowflake")) return SnowflakeIcon;
  if (name.includes("Python")) return PythonIcon;
  if (name.includes("SQL")) return SqlIcon;
  if (name.includes("Power BI")) return PowerBiIcon;
  if (name.includes("Excel") || name.includes("M&A")) return ExcelIcon;
  return null;
}

const experiences: ExperienceItem[] = [
  {
    role: "Senior Financial Planning & Analysis Analyst",
    company: "GEICO",
    location: "Chicago, IL",
    period: "Feb 2026 - Present",
    chips: ["$25M P&L", "Snowflake", "SQL", "Python", "Power BI"],
    points: [
      "Direct comprehensive Financial Planning & Analysis (FP&A) for the $25M Emerging Business unit, driving strategic planning, P&L management, and profitability analysis across 6+ client portfolios.",
      "Architect full-cycle analytics frameworks and multi-year forecasting models to project client-level revenue and volume, targeting 40% YoY growth.",
      "Build dynamic workforce planning and capacity models translating operational volume into FTE requirements, directly guiding staffing decisions and optimizing expenses.",
      "Execute pricing strategy and profitability analysis, using unit-cost modeling, break-even analysis, and business-case evaluations.",
      "Extract multi-million row datasets using SQL and Snowflake, automate financial models in Python and Excel, and build Power BI executive dashboards.",
      "Serve as technical lead and peer mentor, training junior analysts in advanced SQL coding, data integrity, and best-practice financial modeling.",
    ],
  },
  {
    role: "Financial Planning & Analysis Analyst",
    company: "GEICO",
    location: "Chicago, IL",
    period: "Sep 2024 - Jan 2026",
    chips: ["Auto Claims (~35% volume)", "Python CPI Scripts", "Risk Modeling"],
    points: [
      "Conducted financial and operational data analysis for GEICO Claims, managing an Auto Damage portfolio representing ~35% of regional claim volume.",
      "Automated inflation-adjusted vehicle trend analysis using CPI-linked Python scripts and Excel Power Query, improving reporting efficiency by 40%.",
      "Evaluated vehicle inventory risks, OEM vs. non-OEM parts impact, and Tesla EV supply chain trends to accurately forecast cost escalation by 14%.",
      "Assessed policy limit adjustments through quantitative risk modeling, reducing operational exposure by up to 20% in alignment with enterprise risk management standards.",
      "Engineered optimized SQL queries and financial models, reducing ad-hoc reporting turnaround time by 45%.",
    ],
  },
  {
    role: "Analyst Intern",
    company: "Skywalker Property Partners",
    location: "Bedford, TX",
    period: "Jan 2024 - May 2024",
    chips: ["M&A Modeling", "Cash Flow Forecasts", "Due Diligence"],
    points: [
      "Developed a comprehensive M&A financial model, analyzing cash flow forecasts in Excel with attention to detail.",
      "Assisted in preparing scenario models that predicted operational and financial results under different market environments.",
      "Administered lease abstraction, verified 1,000+ invoices with zero errors, and improved processing efficiency by 20%.",
    ],
  },
  {
    role: "Finance Analyst",
    company: "Ranjit Galledar & Company",
    location: "Gujarat, India",
    period: "Sep 2021 - Nov 2022",
    chips: ["DCF / NPV / IRR", "100+ Companies", "Variance Analysis"],
    points: [
      "Conducted Discounted Cash Flow (DCF), Net Present Value (NPV), and Internal Rate of Return (IRR) analyses to evaluate investment opportunities.",
      "Performed financial statement analysis and qualitative assessments to support client decision-making.",
      "Managed financial operations and accounting analysis for 100+ companies, improving data accuracy and reducing closing time by 30%.",
      "Prepared financial reports and dashboards, driving 30% cost savings and a 20% increase in client retention.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-20 border-b border-neutral-200/80 bg-white">
      <Container size="default">
        <SectionHeader
          eyebrow="Experience"
          title="Work experience"
          description="Corporate FP&A, quantitative risk modeling, and financial data analytics across enterprise and advisory roles."
        />

        <div className="space-y-6">
          {experiences.map((exp) => (
            <Card key={exp.role + exp.company} hoverEffect className="p-0 overflow-hidden">
              <CardHeader className="p-6 bg-neutral-50/60 border-b border-neutral-100">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent block mb-1">
                      {exp.company}
                    </span>
                    <CardTitle className="text-lg font-semibold text-neutral-900">
                      {exp.role}
                    </CardTitle>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-500">
                    <span className="flex items-center gap-1.5 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Chips with icons */}
                <div className="flex flex-wrap gap-1.5 pt-3">
                  {exp.chips.map((chip) => {
                    const ChipIcon = getChipIcon(chip);
                    return (
                      <Chip
                        key={chip}
                        variant="neutral"
                        className="inline-flex items-center gap-1"
                      >
                        {ChipIcon && <ChipIcon className="w-3 h-3 text-accent shrink-0" />}
                        <span>{chip}</span>
                      </Chip>
                    );
                  })}
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <ul className="space-y-2">
                  {exp.points.map((pt, i) => (
                    <li
                      key={i}
                      className="text-xs sm:text-sm text-neutral-600 leading-relaxed flex items-start gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/70 shrink-0 mt-2"></span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
