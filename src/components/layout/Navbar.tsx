"use client";

import * as React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  onOpenContact?: () => void;
}

export function Navbar({ onOpenContact }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-neutral-200/80 shadow-subtle"
          : "bg-transparent border-b border-neutral-200/40"
      }`}
    >
      <Container size="default">
        <div className="flex h-16 items-center justify-between">
          {/* Personal name (no pulsing dot) */}
          <Link
            href="#"
            className="text-neutral-900 font-semibold tracking-tight text-base hover:text-accent transition-colors"
          >
            Mitali Bardolia
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Personal Contact Button & Mobile trigger */}
          <div className="flex items-center gap-3">
            <Button
              size="sm"
              variant="primary"
              onClick={onOpenContact}
              className="hidden sm:inline-flex"
            >
              Get in touch
            </Button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-neutral-600 hover:text-neutral-900 border border-neutral-200 rounded-super-sm bg-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-neutral-200 bg-white py-3 px-2 space-y-2 shadow-card rounded-b-super">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 rounded-super-sm transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="pt-2 border-t border-neutral-100">
              <Button
                size="md"
                variant="primary"
                className="w-full"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact?.();
                }}
              >
                Get in touch
              </Button>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
