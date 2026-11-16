"use client";

import { Container, SectionHeader } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Badge";
import {
  Calculator,
  TrendingUp,
  Database,
  Award,
  Activity,
  GitBranch,
  Target,
  Dices,
  SlidersHorizontal,
  Layers,
  PieChart,
  DollarSign,
  Building2,
  FileText,
  Briefcase,
  Percent,
  LineChart,
  RefreshCw,
  BookOpen,
  Users,
  Crosshair,
  Presentation,
  Compass,
  GraduationCap,
  Network,
  Zap,
} from "lucide-react";
import {
  PythonIcon,
  SqlIcon,
  SnowflakeIcon,
  PowerBiIcon,
  TableauIcon,
  RIcon,
  ExcelIcon,
  BloombergIcon,
  StataIcon,
  GoogleSuiteIcon,
} from "@/components/ui/TechIcons";

interface SkillItem {
  name: string;
  icon: React.ElementType;
  iconColor?: string;
  isCustomColorSvg?: boolean;
}

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  skills: SkillItem[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Data Analysis & Software",
    icon: Database,
    skills: [
      { name: "Python", icon: PythonIcon, isCustomColorSvg: true },
      { name: "SQL", icon: SqlIcon, isCustomColorSvg: true },
      { name: "Snowflake", icon: SnowflakeIcon, isCustomColorSvg: true },
      { name: "Power BI", icon: PowerBiIcon, isCustomColorSvg: true },
      { name: "Tableau", icon: TableauIcon, isCustomColorSvg: true },
      { name: "R Programming", icon: RIcon, isCustomColorSvg: true },
      { name: "Excel VBA & Macros", icon: ExcelIcon, isCustomColorSvg: true },
      { name: "Bloomberg Terminal", icon: BloombergIcon, isCustomColorSvg: true },
      { name: "STATA", icon: StataIcon, isCustomColorSvg: true },
      { name: "Google Suite", icon: GoogleSuiteIcon, isCustomColorSvg: true },
    ],
  },
  {
    title: "Financial Modeling",
    icon: Calculator,
    skills: [
      { name: "Black-Scholes", icon: Activity, iconColor: "#2563EB" },
      { name: "Binomial Options", icon: GitBranch, iconColor: "#7C3AED" },
      { name: "Real Options", icon: Target, iconColor: "#DC2626" },
      { name: "Monte Carlo Simulations", icon: Dices, iconColor: "#D97706" },
      { name: "Sensitivity Analysis", icon: SlidersHorizontal, iconColor: "#059669" },
      { name: "Scenario Planning", icon: Layers, iconColor: "#0284C7" },
      { name: "Regression Analysis", icon: TrendingUp, iconColor: "#4F46E5" },
      { name: "Variance Decomposition", icon: PieChart, iconColor: "#DB2777" },
    ],
  },
  {
    title: "Investment & Valuation",
    icon: TrendingUp,
    skills: [
      { name: "Discounted Cash Flow (DCF)", icon: DollarSign, iconColor: "#059669" },
      { name: "Comparable Companies", icon: Building2, iconColor: "#3B82F6" },
      { name: "Precedent Transactions", icon: FileText, iconColor: "#8B5CF6" },
      { name: "Leveraged Buyout (LBO)", icon: Briefcase, iconColor: "#B45309" },
      { name: "Net Present Value (NPV)", icon: Calculator, iconColor: "#047857" },
      { name: "Internal Rate of Return (IRR)", icon: Percent, iconColor: "#EA580C" },
      { name: "CAPM", icon: LineChart, iconColor: "#4338CA" },
      { name: "Working Capital Modeling", icon: RefreshCw, iconColor: "#0891B2" },
    ],
  },
  {
    title: "Professional Strengths",
    icon: Award,
    skills: [
      { name: "P&L Management", icon: BookOpen, iconColor: "#047857" },
      { name: "Workforce Planning", icon: Users, iconColor: "#2563EB" },
      { name: "Unit Cost & Break-Even", icon: Crosshair, iconColor: "#DC2626" },
      { name: "Executive Presentations", icon: Presentation, iconColor: "#7C3AED" },
      { name: "Strategic Problem-Solving", icon: Compass, iconColor: "#D97706" },
      { name: "Peer Mentorship", icon: GraduationCap, iconColor: "#059669" },
      { name: "Cross-Functional Leadership", icon: Network, iconColor: "#0284C7" },
      { name: "Process Optimization", icon: Zap, iconColor: "#F59E0B" },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-20 border-b border-neutral-200/80 bg-neutral-50/50">
      <Container size="default">
        <SectionHeader
          eyebrow="Skills & Toolkit"
          title="Technical skills & analytical capabilities"
          description="Tools, modeling methods, and analytical software used across my daily workflow and quantitative research."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat) => {
            const HeaderIcon = cat.icon;
            return (
              <Card key={cat.title} className="p-6 bg-white">
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-8 h-8 rounded-super-sm bg-neutral-100 border border-neutral-200/80 flex items-center justify-center text-accent">
                    <HeaderIcon className="w-4 h-4" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-base font-semibold text-neutral-900">
                    {cat.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 pt-2 border-t border-neutral-100">
                  {cat.skills.map((skill) => {
                    const SkillIcon = skill.icon;
                    return (
                      <Chip
                        key={skill.name}
                        variant="neutral"
                        className="inline-flex items-center gap-2 py-1.5 px-3 bg-white hover:bg-neutral-50 hover:border-neutral-300 text-neutral-800 shadow-subtle transition-all"
                      >
                        {skill.isCustomColorSvg ? (
                          <SkillIcon className="w-4 h-4 shrink-0" />
                        ) : (
                          <SkillIcon
                            className="w-3.5 h-3.5 shrink-0"
                            style={{ color: skill.iconColor }}
                          />
                        )}
                        <span className="font-medium">{skill.name}</span>
                      </Chip>
                    );
                  })}
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
