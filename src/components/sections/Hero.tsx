"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Chip } from "@/components/ui/Badge";
import { ArrowRight, MapPin, Mail } from "lucide-react";
import { motion } from "framer-motion";

interface HeroProps {
  onOpenContact?: () => void;
}

export function Hero({ onOpenContact }: HeroProps) {
  return (
    <section id="about" className="pt-28 sm:pt-36 pb-16 sm:pb-20 border-b border-neutral-200/80 bg-white">
      <Container size="default">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="max-w-2xl"
        >
          {/* Status chips (no pulsing dots) */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <Chip variant="accent">
              Senior FP&amp;A Analyst at GEICO
            </Chip>
            <Chip variant="neutral">
              MS Quantitative Finance (GPA 3.92)
            </Chip>
            <Chip variant="neutral">
              FINRA SIE
            </Chip>
          </div>

          {/* Simple, natural personal heading (no em dash) */}
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900 leading-[1.2]">
            Financial analyst specializing in financial modeling, forecasting, and data analytics.
          </h1>

          {/* Natural supporting copy */}
          <p className="mt-4 text-base text-neutral-500 leading-relaxed">
            I lead Financial Planning and Analysis for the $25M Emerging Business unit at GEICO in Chicago. My work connects quantitative methods and corporate finance, building multi-year forecasting models, automated data pipelines in SQL and Snowflake, and executive dashboards for leadership.
          </p>

          {/* Focal Point: ONE primary button, second button as a text link */}
          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <Button
              size="md"
              variant="primary"
              onClick={onOpenContact}
              className="w-full sm:w-auto"
            >
              Get in touch
            </Button>

            <a
              href="#projects"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline transition-colors"
            >
              View selected projects
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Location & direct email */}
          <div className="mt-10 flex flex-wrap items-center gap-4 text-xs text-neutral-400">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              Chicago, IL
            </span>
            <span>•</span>
            <a
              href="mailto:mitalibardolia@gmail.com"
              className="flex items-center gap-1.5 hover:text-neutral-700 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              mitalibardolia@gmail.com
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
