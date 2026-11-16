"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ArrowRight, Mail, MapPin } from "lucide-react";

interface ContactCTAProps {
  onOpenContact?: () => void;
}

export function ConsultationCTA({ onOpenContact }: ContactCTAProps) {
  return (
    <section className="py-16 sm:py-20 border-b border-neutral-200/80 bg-white">
      <Container size="default">
        <Card className="p-8 sm:p-10 border border-neutral-200/90 bg-neutral-50/70 shadow-subtle rounded-super">
          <div className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-accent block mb-2">
              Contact
            </span>
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">
              Let&apos;s connect.
            </h2>
            <p className="mt-2 text-sm text-neutral-500 leading-relaxed">
              Whether you want to discuss FP&amp;A opportunities, financial modeling, or quantitative research, feel free to reach out directly.
            </p>

            {/* Focal Point: ONE primary button, second button as a text link */}
            <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <Button
                size="md"
                variant="primary"
                onClick={onOpenContact}
                className="w-full sm:w-auto"
              >
                Send a message
              </Button>

              <a
                href="mailto:mitalibardolia@gmail.com"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
              >
                <Mail className="w-4 h-4" />
                mitalibardolia@gmail.com
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="mt-8 pt-4 border-t border-neutral-200/80 flex items-center gap-4 text-xs text-neutral-400">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                Based in Chicago, IL
              </span>
              <span>•</span>
              <span>Open to US relocation and remote work</span>
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
}
