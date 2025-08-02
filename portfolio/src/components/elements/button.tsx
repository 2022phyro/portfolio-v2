import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";
import React from "react";

// Gradients for each variant
const gradients = {
  default: {
    inner: "bg-[linear-gradient(to_top,#ececec,#fff)]",
    content: "bg-[linear-gradient(#f4f4f4,#fefefe)]",
    hoverContent: "bg-[linear-gradient(#e2e2e2,#fefefe)]",
    text: "text-primary group-hover:text-primary",
  },
  brand: {
    inner: "bg-[linear-gradient(to_top,#43766c,#dce8e6)]",
    content: "bg-[linear-gradient(135deg,#43766c_0%,#a2d6cc_100%)]",
    hoverContent: "bg-[linear-gradient(#2d5016,#1e3a0f)]",
    text: "text-accent group-hover:text-bg",
  },
  accent: {
    inner: "bg-[linear-gradient(to_top,#fbbf24,#e3be96)]",
    content: "bg-[linear-gradient(#f59e42,#fbbf24)]",
    hoverContent: "bg-[linear-gradient(#f59e42,#fbbf24_80%)]",
    text: "text-white group-hover:text-yellow-100",
  },
  secondary: {
    inner: "bg-[linear-gradient(to_top,#e0e7ef,#cfd8dc)]",
    content: "bg-[linear-gradient(#b0bec5,#eceff1)]",
    hoverContent: "bg-[linear-gradient(#b0bec5,#cfd8dc)]",
    text: "text-secondary-foreground ",
  },
};

const baseGradient = "bg-transparent";

const buttonStyles = cva(
  "group inline-flex transition-all duration-300 overflow-visible p-1 bg-red-500",
  {
    variants: {
      variant: {
        default: baseGradient,
        brand: baseGradient,
        accent: baseGradient,
        secondary: baseGradient,
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface Props
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {
  leaf?: string;
}

const ThreeDButton = React.forwardRef<HTMLButtonElement, Props>(
  ({ variant = "default", leaf, className, children, ...props }, ref) => {
    const borderRadius = leaf || "";
    const { inner, content, hoverContent, text } = gradients[variant as keyof typeof gradients];

    return (
      <button
        ref={ref}
        className={clsx(buttonStyles({ variant }), className)}
        {...props}
      >
        <div
          className={clsx(
            "w-full h-full overflow-hidden p-1 transition-shadow duration-300 bg-transparent",
            borderRadius,
            "shadow-[0_0_1px_rgba(0,0,0,0.07),0_0_1px_rgba(0,0,0,0.05),0_3px_3px_rgba(0,0,0,0.25),0_1px_3px_rgba(0,0,0,0.12)]",
            inner,
            "group-hover:cursor-pointer",
            "group-active:shadow-none"
          )}
        >
          <div
            className={clsx(
              "w-full h-full inline-flex items-center justify-center overflow-hidden transition-colors duration-200",
              borderRadius,
              content,
              `group-active:${hoverContent}`,
              text,
              "px-4 py-2 font-medium text-md"
            )}
          >
            {children}
          </div>
        </div>
      </button>
    );
  }
);

ThreeDButton.displayName = "ThreeDButton";
export default ThreeDButton;
