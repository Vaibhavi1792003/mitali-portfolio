"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

interface HeroProps {
  onOpenContact?: () => void;
}

export function Hero({ onOpenContact }: HeroProps) {
  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-between pt-28 sm:pt-36 pb-12 sm:pb-16 border-b border-stone-200/80 overflow-hidden">
      {/* Background architectural ambiance dots */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035] bg-[radial-gradient(#0F141C_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <Container size="wide" className="relative z-10 flex-1 flex flex-col justify-between">
        {/* Top Eyebrow & Live Status Metadata */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-stone-200/60">
          <div className="flex items-center gap-3 text-xs tracking-mega uppercase font-mono text-ink-muted">
            <span className="w-2 h-2 rounded-full bg-accent"></span>
            <span>Senior FP&amp;A Lead @ GEICO</span>
            <span className="text-stone-300">•</span>
            <span>$25M Business Unit</span>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-ink-muted">
            <span className="text-stone-400">COORDINATES</span>
            <span className="text-ink font-semibold">41.8781° N, 87.6298° W</span>
          </div>
        </div>

        {/* Center Grand Editorial Title (Minimal text, monumental scale) */}
        <div className="my-auto py-12 sm:py-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6 max-w-5xl"
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-ink leading-[0.98] uppercase">
              QUANTITATIVE
              <br />
              <span className="font-light italic tracking-tight font-serif text-ink-muted">
                Intelligence.
              </span>
              <br />
              CAPITAL RIGOR.
            </h1>

            {/* Ultra-distilled one-sentence statement (No content heaviness) */}
            <p className="text-base sm:text-xl text-ink-muted max-w-2xl font-normal leading-relaxed pt-2">
              Directing multi-year forecasting models, P&amp;L governance, and predictive capital analytics for GEICO&apos;s $25M emerging business portfolio.
            </p>

            {/* Focal Point CTAs: ONE primary button + subtle link */}
            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <Button
                size="lg"
                variant="primary"
                onClick={onOpenContact}
                className="text-xs uppercase tracking-widest px-8 h-12 shadow-elevated"
              >
                Initiate Conversation
              </Button>

              <a
                href="#works"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-accent hover:text-accent-hover transition-colors"
              >
                <span>Explore Curated Works</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Editorial Bar: Coordinates & Scroll cue */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pt-8 border-t border-stone-200/60 text-xs font-mono text-ink-muted">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-12">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-stone-400 block mb-0.5">
                Location
              </span>
              <span className="text-ink font-medium">Chicago, Illinois</span>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-stone-400 block mb-0.5">
                Education
              </span>
              <span className="text-ink font-medium">MS Quant Finance (3.92)</span>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-stone-400 block mb-0.5">
                Credential
              </span>
              <span className="text-ink font-medium">FINRA SIE Certified</span>
            </div>
          </div>

          <a
            href="#thesis"
            className="flex items-center gap-2 hover:text-ink transition-colors group self-start sm:self-auto"
          >
            <span className="text-[11px] uppercase tracking-widest">Scroll to explore</span>
            <div className="w-6 h-6 rounded-full border border-stone-300 flex items-center justify-center group-hover:border-ink transition-colors">
              <ArrowDown className="w-3 h-3 animate-bounce" />
            </div>
          </a>
        </div>
      </Container>
    </section>
  );
}
