"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";

interface FooterProps {
  onOpenContact?: () => void;
}

export function Footer({ onOpenContact }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-stone-100 pt-24 sm:pt-36 pb-12 sm:pb-16 border-t border-stone-800">
      <Container size="wide">
        {/* Grand Editorial Call to Action */}
        <div className="pb-20 sm:pb-28 border-b border-stone-800">
          <div className="flex items-center gap-3 text-xs tracking-mega uppercase font-mono text-stone-400 mb-8">
            <span className="w-2 h-2 rounded-full bg-accent"></span>
            <span>Initiate an Engagement</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end justify-between">
            <div className="lg:col-span-8 space-y-4">
              <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-stone-50 uppercase leading-[0.95]">
                LET&apos;S ARCHITECT
                <br />
                <span className="font-light italic tracking-tight font-serif text-accent-gold">
                  Value Together.
                </span>
              </h2>
              <p className="text-sm sm:text-base text-stone-400 max-w-xl font-normal leading-relaxed pt-2">
                Open to executive discussions regarding Senior FP&amp;A leadership, Corporate Development, Quantitative Strategy, and Capital Allocation.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start gap-4">
              <Button
                size="lg"
                variant="primary"
                onClick={onOpenContact}
                className="w-full text-xs uppercase tracking-widest h-14 bg-accent hover:bg-accent-hover text-white px-8"
              >
                Send a Message
              </Button>
              <a
                href="mailto:mitalibardolia@gmail.com"
                className="w-full inline-flex items-center justify-center gap-2 p-4 text-xs uppercase tracking-widest font-mono text-stone-300 hover:text-white border border-stone-800 rounded-super-sm hover:bg-stone-850 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-accent" />
                <span>mitalibardolia@gmail.com</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Metadata & Sitemap */}
        <div className="pt-12 grid grid-cols-1 md:grid-cols-4 gap-8 text-xs font-mono text-stone-400">
          <div className="space-y-2 md:col-span-2">
            <span className="text-stone-100 font-semibold tracking-tight text-sm block">
              MITALI BARDOLIA
            </span>
            <p className="text-stone-400 text-xs max-w-sm leading-relaxed">
              Senior Financial Planning &amp; Analysis Analyst • MS Quantitative Finance (GPA 3.92) • GEICO Emerging Business
            </p>
            <div className="flex items-center gap-2 text-stone-500 pt-1">
              <MapPin className="w-3.5 h-3.5" />
              <span>Chicago, IL • 41.8781° N, 87.6298° W</span>
            </div>
          </div>

          <div className="space-y-2">
            <span className="text-stone-300 uppercase tracking-widest block text-[11px]">
              Navigation
            </span>
            <ul className="space-y-1.5 text-stone-400">
              <li><a href="#works" className="hover:text-stone-100 transition-colors">Selected Works</a></li>
              <li><a href="#thesis" className="hover:text-stone-100 transition-colors">The Thesis</a></li>
              <li><a href="#simulator" className="hover:text-stone-100 transition-colors">Simulator</a></li>
              <li><a href="#trajectory" className="hover:text-stone-100 transition-colors">Trajectory</a></li>
              <li><a href="#credentials" className="hover:text-stone-100 transition-colors">Credentials</a></li>
            </ul>
          </div>

          <div className="space-y-2">
            <span className="text-stone-300 uppercase tracking-widest block text-[11px]">
              Direct Inquiries
            </span>
            <ul className="space-y-1.5 text-stone-400">
              <li><a href="mailto:mitalibardolia@gmail.com" className="hover:text-stone-100 transition-colors">mitalibardolia@gmail.com</a></li>
              <li><span className="text-stone-500">Chicago, IL (US Relocation Ready)</span></li>
              <li><span className="text-stone-500">FINRA SIE Certified</span></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-12 mt-12 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-stone-500">
          <p>© {currentYear} Mitali Bardolia. Designed with architectural typography and continuous curves.</p>
          <p>Built with Next.js, Lenis, and GSAP standards.</p>
        </div>
      </Container>
    </footer>
  );
}
