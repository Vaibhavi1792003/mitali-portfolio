"use client";

import { Container } from "@/components/ui/Container";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-neutral-200/80 py-10 sm:py-12 text-neutral-500">
      <Container size="default">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-neutral-100">
          <div>
            <span className="text-neutral-900 font-semibold tracking-tight text-sm">
              Mitali Bardolia
            </span>
            <p className="text-xs text-neutral-400 mt-0.5">
              Financial Planning &amp; Analysis • Quantitative Finance
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-5 text-xs text-neutral-500">
            <a href="#about" className="hover:text-accent transition-colors">
              About
            </a>
            <a href="#experience" className="hover:text-accent transition-colors">
              Experience
            </a>
            <a href="#projects" className="hover:text-accent transition-colors">
              Projects
            </a>
            <a href="#skills" className="hover:text-accent transition-colors">
              Skills
            </a>
            <a href="#education" className="hover:text-accent transition-colors">
              Education
            </a>
            <a
              href="mailto:mitalibardolia@gmail.com"
              className="hover:text-accent transition-colors"
            >
              Email
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-400">
          <p>© {currentYear} Mitali Bardolia. All rights reserved.</p>
          <p className="text-[11px] text-neutral-400">
            Built with Next.js, Tailwind CSS, and Geist.
          </p>
        </div>
      </Container>
    </footer>
  );
}
