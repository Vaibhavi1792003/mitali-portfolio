"use client";

import { Container, SectionHeader } from "@/components/ui/Container";
import { Card, CardTitle } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Badge";
import { GraduationCap, Award, CheckCircle } from "lucide-react";

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  gpa?: string;
  coursework: string;
}

const educationList: EducationItem[] = [
  {
    degree: "Master of Science in Quantitative Finance",
    institution: "University of Texas at Arlington (Arlington, TX)",
    period: "Jan 2023 - Aug 2024",
    gpa: "GPA 3.92",
    coursework:
      "Investment Banking, Portfolio Construction, Mathematical Finance, Financial Derivatives, Options & Equities, Modeling & Analytics, Risk Management.",
  },
  {
    degree: "Bachelor of Commerce in Accounting & Finance",
    institution: "Veer Narmad South Gujarat University (Gujarat, India)",
    period: "Jun 2018 - Jul 2021",
    coursework:
      "Advanced Statistics, Advanced Accounting and Finance, Economics, Investment Principles.",
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
    issuer: "The Institute of Chartered Accountants of India (ICAI)",
    date: "Nov 2018",
  },
];

export function Credentials() {
  return (
    <section id="education" className="py-16 sm:py-20 border-b border-neutral-200/80 bg-white">
      <Container size="default">
        <SectionHeader
          eyebrow="Credentials"
          title="Education & certifications"
          description="Academic foundation in quantitative finance and professional certifications in capital markets and financial analysis."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Education */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 flex items-center gap-1.5 mb-2">
              <GraduationCap className="w-4 h-4 text-accent" />
              Degrees
            </h3>

            {educationList.map((edu) => (
              <Card key={edu.degree} className="p-6 bg-white">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs text-neutral-400 font-medium">
                    {edu.period}
                  </span>
                  {edu.gpa && <Chip variant="accent">{edu.gpa}</Chip>}
                </div>

                <CardTitle className="text-base font-semibold text-neutral-900 mb-1">
                  {edu.degree}
                </CardTitle>
                <p className="text-xs font-medium text-neutral-600 mb-3">
                  {edu.institution}
                </p>

                <div className="pt-3 border-t border-neutral-100 text-xs text-neutral-500 leading-relaxed">
                  <span className="font-semibold text-neutral-700 block mb-1">
                    Coursework:
                  </span>
                  {edu.coursework}
                </div>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 flex items-center gap-1.5 mb-2">
              <Award className="w-4 h-4 text-accent" />
              Certifications
            </h3>

            <Card className="p-5 bg-white space-y-3.5">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="flex items-start justify-between gap-2 pb-3 border-b border-neutral-100 last:border-none last:pb-0"
                >
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-semibold text-neutral-900 leading-snug">
                        {cert.name}
                      </h4>
                      <p className="text-[11px] text-neutral-400">{cert.issuer}</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-neutral-400 shrink-0">
                    {cert.date}
                  </span>
                </div>
              ))}
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}
