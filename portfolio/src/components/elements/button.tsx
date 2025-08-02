import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";
import React from "react";
import Link from "next/link";

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
    hoverContent: "bg-[linear-gradient(135deg,#2d5016,#4a7c59)]",
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
  "group inline-flex transition-all duration-300 overflow-visible p-1",
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
  href?: string;
  target?: string;
}

const ThreeDButton = React.forwardRef<HTMLButtonElement, Props>(
  ({ variant = "default", leaf, className, children, href, target, ...props }, ref) => {
    const borderRadius = leaf || "";
    const { inner, content, hoverContent, text } = gradients[variant as keyof typeof gradients];

    const buttonContent = (      <div
        className={clsx(
          "w-full h-full overflow-hidden p-1 transition-shadow duration-300 bg-red-500/20",
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
    );

    if (href) {
      const isExternal = href.startsWith('http') || href.startsWith('mailto') || target === '_blank';
      
      if (isExternal) {
        return (
          <a
            href={href}
            target={target}
            rel={target === '_blank' ? 'noopener noreferrer' : undefined}
            className={clsx(buttonStyles({ variant }), className, "group")}
          >
            {buttonContent}
          </a>
        );
      } else {
        return (
          <Link
            href={href}
            className={clsx(buttonStyles({ variant }), className, "group")}
          >
            {buttonContent}
          </Link>
        );
      }
    }

    return (
      <button
        ref={ref}
        className={clsx(buttonStyles({ variant }), className)}
        {...props}
      >
        {buttonContent}
      </button>
    );
  }
);

ThreeDButton.displayName = "ThreeDButton";
export default ThreeDButton;
