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
  const [time, setTime] = React.useState("");

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };
    window.addEventListener("scroll", handleScroll);

    // Live Chicago Time ticker
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "America/Chicago",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, []);

  const navLinks = [
    { label: "Works", href: "#works" },
    { label: "Thesis", href: "#thesis" },
    { label: "Simulator", href: "#simulator" },
    { label: "Trajectory", href: "#trajectory" },
    { label: "Credentials", href: "#credentials" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-stone-50/85 backdrop-blur-md border-b border-stone-200/80 shadow-subtle"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <Container size="wide">
        <div className="flex h-20 items-center justify-between">
          {/* Brand & Coordinates */}
          <Link
            href="#"
            className="flex items-baseline gap-3 transition-colors text-ink hover:text-accent"
          >
            <span className="font-semibold tracking-tighter text-base sm:text-lg">
              MITALI BARDOLIA
            </span>
            <span className="text-[11px] font-mono tracking-widest text-ink-muted uppercase hidden sm:inline">
              / Chicago {time && `${time} CST`}
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-medium uppercase tracking-widest text-ink-muted hover:text-ink transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions: Primary CTA + Mobile menu button */}
          <div className="flex items-center gap-3">
            <Button
              size="sm"
              variant="primary"
              onClick={onOpenContact}
              className="hidden sm:inline-flex text-xs uppercase tracking-widest px-5 h-10"
            >
              Initiate Contact
            </Button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-super-sm border border-stone-200 bg-white text-ink"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-stone-200 bg-stone-50 py-4 px-3 space-y-3 rounded-b-super">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-xs uppercase tracking-widest rounded-super-sm text-ink hover:bg-stone-200/60 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="pt-2 border-t border-stone-200/60">
              <Button
                size="md"
                variant="primary"
                className="w-full text-xs uppercase tracking-widest"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact?.();
                }}
              >
                Initiate Contact
              </Button>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
