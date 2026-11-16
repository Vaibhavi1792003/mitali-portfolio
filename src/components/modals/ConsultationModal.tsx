"use client";

import * as React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { X, CheckCircle2, Mail } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ConsultationModal({ isOpen, onClose }: ContactModalProps) {
  const [submitted, setSubmitted] = React.useState(false);
  const [formData, setFormData] = React.useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-900/30 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-md">
        <Card className="bg-white border-neutral-200 shadow-elevated rounded-super">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-neutral-900 rounded-super-sm transition-colors border border-neutral-200 hover:bg-neutral-100"
            aria-label="Close dialog"
          >
            <X className="w-4 h-4" />
          </button>

          {!submitted ? (
            <>
              <CardHeader className="p-6 pb-2">
                <CardTitle className="text-lg text-neutral-900">
                  Send a message
                </CardTitle>
                <CardDescription>
                  Reach out directly to Mitali Bardolia regarding opportunities or collaboration.
                </CardDescription>
              </CardHeader>

              <CardContent className="p-6 pt-2">
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div>
                    <label className="text-xs font-semibold text-neutral-700 block mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      placeholder="e.g. Alex Miller"
                      className="w-full h-10 px-3 text-sm bg-neutral-50 border border-neutral-200 rounded-super-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-accent"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-neutral-700 block mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="alex@example.com"
                      className="w-full h-10 px-3 text-sm bg-neutral-50 border border-neutral-200 rounded-super-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-accent"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-neutral-700 block mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      placeholder="FP&A Opportunity / Discussion"
                      className="w-full h-10 px-3 text-sm bg-neutral-50 border border-neutral-200 rounded-super-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-accent"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-neutral-700 block mb-1">
                      Message
                    </label>
                    <textarea
                      rows={3}
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Write your note here..."
                      className="w-full p-3 text-sm bg-neutral-50 border border-neutral-200 rounded-super-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-accent resize-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <a
                      href="mailto:mitalibardolia@gmail.com"
                      className="text-xs text-neutral-400 hover:text-neutral-700 flex items-center gap-1"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      Email directly instead
                    </a>
                    <Button type="submit" variant="primary" size="sm">
                      Send
                    </Button>
                  </div>
                </form>
              </CardContent>
            </>
          ) : (
            <div className="p-8 text-center space-y-4">
              <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 mx-auto flex items-center justify-center text-accent">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900">
                Message received
              </h3>
              <p className="text-xs text-neutral-500 max-w-xs mx-auto leading-relaxed">
                Thank you, {formData.fullName}. Your note has been logged. Mitali will get back to you shortly.
              </p>
              <div className="pt-2">
                <Button variant="secondary" size="sm" onClick={handleReset}>
                  Close
                </Button>
              </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
