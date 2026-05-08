import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const liquidbuttonVariants = cva(
  "inline-flex items-center transition-colors justify-center cursor-pointer gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none",
  {
    variants: {
      variant: {
        default: "bg-transparent hover:scale-105 duration-300 transition text-primary",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 text-xs gap-1.5 px-4",
        lg: "h-10 rounded-md px-6",
        xl: "h-12 rounded-md px-8",
        xxl: "h-14 rounded-md px-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "xl",
    },
  }
);

function GlassFilter() {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
      <defs>
        <filter id="liquid-glass-filter" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="3" seed="2" result="noise" />
          <feGaussianBlur in="noise" stdDeviation="3" result="blurredNoise" />
          <feDisplacementMap in="SourceGraphic" in2="blurredNoise" scale="12" xChannelSelector="R" yChannelSelector="G" result="displaced" />
          <feGaussianBlur in="displaced" stdDeviation="0.5" result="finalBlur" />
          <feMerge><feMergeNode in="finalBlur" /></feMerge>
        </filter>
      </defs>
    </svg>
  );
}

export function LiquidButton({
  className,
  variant,
  size,
  asChild = false,
  children,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof liquidbuttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <>
      <GlassFilter />
      <Comp
        className={cn(
          liquidbuttonVariants({ variant, size, className }),
          "relative group"
        )}
        {...props}
      >
        {/* Glass background */}
        <span
          className="absolute inset-0 rounded-full border border-white/20 bg-white/5 backdrop-blur-md"
          style={{ filter: "url(#liquid-glass-filter)" }}
        />
        {/* Shine */}
        <span className="absolute inset-0 rounded-full bg-gradient-to-b from-white/15 via-transparent to-transparent opacity-80" />
        {/* Content */}
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
      </Comp>
    </>
  );
}
