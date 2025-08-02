import React from "react";
import clsx from "clsx";

type TextGradientProps = {
  children: React.ReactNode;
  from: string; // e.g. 'from-green-400'
  to: string;   // e.g. 'to-emerald-600'
  direction?: string; // e.g. 'bg-gradient-to-r', 'bg-gradient-to-t', etc.
  className?: string;
};

export const TextGradient = ({
  children,
  from,
  to,
  direction = "bg-gradient-to-r",
  className,
}: TextGradientProps) => {
  return (
    <span
      className={clsx(
        "bg-clip-text text-transparent",
        direction,
        from,
        to,
        className
      )}
    >
      {children}
    </span>
  );
};
