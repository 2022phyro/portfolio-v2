import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";
import React from "react";

const baseGradient = "linear-gradient(#f5f5f5,#f5f5f5_50%,#fff)";
const brandGradient = "linear-gradient(#43766c,#43766c_50%,#5b8a7c)";
const brandInnerGradient = "linear-gradient(to_top,#43766e,#5b8a7c)";
const brandContentGradient = "linear-gradient(#f8fae5,#f4f5f2)";
const brandHoverContentGradient = "linear-gradient(#43766c,#5b8a7c)";
const innerGradient = "linear-gradient(to_top,#ececec,#fff)";
const contentGradient = "linear-gradient(#f4f4f4,#fefefe)";
const hoverContentGradient = "linear-gradient(#e2e2e2,#fefefe)";

const buttonStyles = cva(
  "group inline-flex transition-all duration-300 overflow-visible p-1",
  {
    variants: {
      variant: {
        default: `bg-[${baseGradient}]`,
        brand: `bg-[${brandGradient}]`,
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
  ({ variant, leaf, className, children, ...props }, ref) => {
    const borderRadius = leaf || "";
    
    return (
      <button
        ref={ref}
        className={clsx(buttonStyles({ variant }), className)}
        {...props}
      >
        <div
          className={clsx(
            `w-full h-full overflow-hidden p-1 transition-shadow duration-300`,
            borderRadius,
            `shadow-[0_0_1px_rgba(0,0,0,0.07),0_0_1px_rgba(0,0,0,0.05),0_3px_3px_rgba(0,0,0,0.25),0_1px_3px_rgba(0,0,0,0.12)]`,
            `bg-[${innerGradient}]`,
            `group-hover:cursor-pointer`,
            `group-active:shadow-none`
          )}
        >
          <div
            className={clsx(
              `w-full h-full inline-flex items-center justify-center overflow-hidden transition-colors duration-200`,
              borderRadius,
              `bg-[${contentGradient}] group-active:bg-[${hoverContentGradient}]`,
              `text-primary group-hover:text-primary`,
              `px-4 py-2 font-medium text-md`
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
