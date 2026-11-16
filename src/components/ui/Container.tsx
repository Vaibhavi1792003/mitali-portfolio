import * as React from "react";
import { cn } from "@/lib/utils";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "default" | "narrow" | "wide";
}

export function Container({
  className,
  size = "default",
  children,
  ...props
}: ContainerProps) {
  const maxWidths = {
    narrow: "max-w-3xl",
    default: "max-w-4xl",
    wide: "max-w-5xl",
  };

  return (
    <div
      className={cn(
        "mx-auto w-full px-5 sm:px-8",
        maxWidths[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("space-y-2 mb-8 sm:mb-10", className)}>
      {eyebrow && (
        <span className="text-xs font-semibold uppercase tracking-wider text-accent block">
          {eyebrow}
        </span>
      )}
      <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-neutral-900">
        {title}
      </h2>
      {description && (
        <p className="text-sm text-neutral-500 max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
