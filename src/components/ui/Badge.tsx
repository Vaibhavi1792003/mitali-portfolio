import * as React from "react";
import { cn } from "@/lib/utils";

export interface ChipProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "neutral" | "accent";
}

export function Chip({
  className,
  variant = "neutral",
  children,
  ...props
}: ChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-super-sm border transition-colors select-none",
        variant === "neutral" &&
          "border-neutral-200/90 bg-neutral-100/80 text-neutral-700 hover:bg-neutral-100",
        variant === "accent" &&
          "border-accent/25 bg-accent-subtle text-accent font-semibold",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

// Keep Badge as alias for Chip so backwards compatibility is maintained
export const Badge = Chip;
