import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-50 select-none";

    const variants = {
      // Primary: Single focal point, professional emerald accent
      primary:
        "bg-accent text-accent-foreground hover:bg-accent-hover active:bg-accent-active shadow-subtle rounded-super-sm border border-transparent",
      // Secondary: Crisp light neutral with 1px border and superellipse curvature
      secondary:
        "bg-white text-neutral-800 hover:bg-neutral-100 hover:text-neutral-900 border border-neutral-200 active:bg-neutral-150 rounded-super-sm shadow-subtle",
      // Ghost: Subtle hover state
      ghost:
        "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded-super-sm",
      // Link: Clean text link in brand color with arrow
      link:
        "text-accent hover:text-accent-hover p-0 h-auto font-medium underline-offset-4 hover:underline",
    };

    const sizes = {
      sm: "h-9 px-4 text-xs gap-2",
      md: "h-11 px-5 text-sm gap-2",
      lg: "h-12 px-6 text-sm sm:text-base gap-2.5",
    };

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          variant !== "link" && sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
