"use client";

import * as React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { PortfolioSimulator } from "@/components/sections/PortfolioSimulator";
import { Skills } from "@/components/sections/Skills";
import { Credentials } from "@/components/sections/Credentials";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";
import { Footer } from "@/components/layout/Footer";
import { ConsultationModal } from "@/components/modals/ConsultationModal";

export default function Home() {
  const [isContactOpen, setIsContactOpen] = React.useState(false);

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  return (
    <div className="relative min-h-screen bg-neutral-50 flex flex-col justify-between">
      {/* Navigation */}
      <Navbar onOpenContact={openContact} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenContact={openContact} />
        <Experience />
        <Projects />
        <PortfolioSimulator />
        <Skills />
        <Credentials />
        <ConsultationCTA onOpenContact={openContact} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Contact Dialog */}
      <ConsultationModal
        isOpen={isContactOpen}
        onClose={closeContact}
      />
    </div>
  );
}
