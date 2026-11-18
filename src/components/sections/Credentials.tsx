"use client";

import { Container } from "@/components/ui/Container";
import { Chip } from "@/components/ui/Badge";
import { GraduationCap, Award, CheckCircle } from "lucide-react";

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  gpa?: string;
  focus: string;
}

const educationList: EducationItem[] = [
  {
    degree: "Master of Science in Quantitative Finance",
    institution: "University of Texas at Arlington",
    period: "2023 - 2024",
    gpa: "GPA 3.92",
    focus:
      "Mathematical Finance, Portfolio Construction, Derivatives, Options & Equities, Risk Analytics.",
  },
  {
    degree: "Bachelor of Commerce in Accounting & Finance",
    institution: "Veer Narmad South Gujarat University",
    period: "2018 - 2021",
    focus:
      "Advanced Statistics, Financial Accounting, Economics, and Portfolio Principles.",
  },
];

interface CertItem {
  name: string;
  issuer: string;
  date: string;
}

const certifications: CertItem[] = [
  {
    name: "SIE (Securities Industry Essentials)",
    issuer: "FINRA",
    date: "Jan 2026",
  },
  {
    name: "Financial Modeling and Forecasting Financial Statements",
    issuer: "LinkedIn Learning",
    date: "Apr 2024",
  },
  {
    name: "Understanding of Capital Markets",
    issuer: "LinkedIn Learning",
    date: "Aug 2023",
  },
  {
    name: "Bloomberg Market Concepts (BMC)",
    issuer: "Bloomberg",
    date: "Apr 2023",
  },
  {
    name: "Chartered Accountant Intermediate & Foundation",
    issuer: "ICAI",
    date: "Nov 2018",
  },
];

export function Credentials() {
  return (
    <section id="credentials" className="py-24 sm:py-36 border-b border-stone-200/80 bg-stone-100/50">
      <Container size="wide">
        {/* Section Header */}
        <div className="flex items-center justify-between pb-6 border-b border-stone-200/60 mb-16 sm:mb-24">
          <span className="text-xs uppercase tracking-mega font-mono text-ink-muted">
            05 / Pedigree
          </span>
          <span className="text-xs uppercase tracking-widest font-mono text-stone-400">
            Education &amp; Credentials
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start">
          {/* Degrees */}
          <div className="lg:col-span-7 space-y-8">
            <h3 className="text-xs font-mono uppercase tracking-widest text-stone-400 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-accent" />
              Academic Degrees
            </h3>

            <div className="space-y-6">
              {educationList.map((edu) => (
                <div
                  key={edu.degree}
                  className="p-8 bg-white border border-stone-200/90 rounded-super shadow-card space-y-3"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-mono text-stone-400">
                      {edu.period}
                    </span>
                    {edu.gpa && (
                      <Chip variant="accent" className="font-mono text-xs">
                        {edu.gpa}
                      </Chip>
                    )}
                  </div>

                  <h4 className="text-xl font-semibold tracking-tight text-ink">
                    {edu.degree}
                  </h4>
                  <p className="text-xs font-mono text-ink-muted">
                    {edu.institution}
                  </p>

                  <div className="pt-3 border-t border-stone-100 text-xs text-ink-muted leading-relaxed">
                    <span className="font-semibold text-ink block mb-0.5">
                      Curriculum Core:
                    </span>
                    {edu.focus}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="lg:col-span-5 space-y-8">
            <h3 className="text-xs font-mono uppercase tracking-widest text-stone-400 flex items-center gap-2">
              <Award className="w-4 h-4 text-accent" />
              Certifications &amp; Licenses
            </h3>

            <div className="p-8 bg-white border border-stone-200/90 rounded-super shadow-card space-y-4">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="flex items-start justify-between gap-3 pb-3.5 border-b border-stone-100 last:border-none last:pb-0"
                >
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-xs sm:text-sm font-semibold text-ink leading-snug">
                        {cert.name}
                      </h5>
                      <p className="text-[11px] font-mono text-ink-muted">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-stone-400 shrink-0">
                    {cert.date}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
