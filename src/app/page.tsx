"use client";

import * as React from "react";
import { Preloader } from "@/components/layout/Preloader";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { Projects } from "@/components/sections/Projects";
import { PortfolioSimulator } from "@/components/sections/PortfolioSimulator";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Credentials } from "@/components/sections/Credentials";
import { Footer } from "@/components/layout/Footer";
import { ConsultationModal } from "@/components/modals/ConsultationModal";

export default function Home() {
  const [isContactOpen, setIsContactOpen] = React.useState(false);

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  return (
    <div className="relative min-h-screen bg-stone-50 text-ink antialiased selection:bg-accent selection:text-white">
      {/* Cinematic Luxury Preloader */}
      <Preloader />

      {/* Navigation */}
      <Navbar onOpenContact={openContact} />

      {/* Main Sections */}
      <main className="flex-1">
        <Hero onOpenContact={openContact} />
        <Manifesto />
        <Projects />
        <PortfolioSimulator />
        <Experience />
        <Skills />
        <Credentials />
      </main>

      {/* Footer */}
      <Footer onOpenContact={openContact} />

      {/* Contact Dialog */}
      <ConsultationModal
        isOpen={isContactOpen}
        onClose={closeContact}
      />
    </div>
  );
}
