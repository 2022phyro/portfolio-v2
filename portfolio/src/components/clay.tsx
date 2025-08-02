import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";

// Core class with dynamic bg and shadow styles per variant
const glassButton = cva(
  "inline-flex items-center font-ml justify-center px-4 py-2 rounded-xl font-medium transition-all duration-300 ease-in-out backdrop-blur-md border",
  {
    variants: {
      variant: {
        primary:
          "bg-[rgba(67,118,108,0.15)] text-text-primary border-[rgba(67,118,108,0.4)] shadow-[0_4px_10px_rgba(67,118,108,0.2)] hover:shadow-[0_2px_6px_rgba(67,118,108,0.35)]",
        secondary:
          "bg-[rgba(162,214,204,0.2)] text-[var(--color-text-primary)] border-[rgba(162,214,204,0.35)] shadow-[0_4px_10px_rgba(162,214,204,0.2)] hover:shadow-[0_2px_6px_rgba(162,214,204,0.3)]",
        accent:
          "bg-[rgba(248,250,229,0.15)] text-[var(--color-text-primary)] border-[rgba(248,250,229,0.3)] shadow-[0_4px_10px_rgba(248,250,229,0.2)] hover:shadow-[0_2px_6px_rgba(248,250,229,0.3)]",
        surface:
          "bg-[rgba(215,204,200,0.2)] text-[var(--color-text-primary)] border-[rgba(215,204,200,0.3)] shadow-[0_4px_10px_rgba(215,204,200,0.2)] hover:shadow-[0_2px_6px_rgba(215,204,200,0.3)]",
        background:
          "bg-[rgba(241,248,233,0.2)] text-[var(--color-text-primary)] border-[rgba(241,248,233,0.3)] shadow-[0_4px_10px_rgba(189,225,189,0.2)] hover:shadow-[0_2px_6px_rgba(189,225,189,0.3)]",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

export interface GlassButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof glassButton> {}

const GlassButton = React.forwardRef<HTMLButtonElement, GlassButtonProps>(
  ({ variant, className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx(glassButton({ variant }), className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

GlassButton.displayName = "GlassButton";
export default GlassButton;
