import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { SmoothScroll } from "@/components/providers/SmoothScroll";

export const metadata: Metadata = {
  title: "Mitali Bardolia | Senior FP&A & Quantitative Finance Professional",
  description:
    "Portfolio of Mitali Bardolia. Senior FP&A Analyst at GEICO with Master of Science in Quantitative Finance (GPA 3.92). Specializing in financial modeling, valuation, SQL/Snowflake analytics, and strategic capital allocation.",
  keywords: [
    "Mitali Bardolia",
    "FP&A Analyst",
    "Quantitative Finance",
    "Financial Modeling",
    "Valuation",
    "Portfolio Analysis",
    "GEICO",
    "Capital Allocation",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-neutral-50 text-neutral-900 font-sans antialiased selection:bg-accent selection:text-white">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
