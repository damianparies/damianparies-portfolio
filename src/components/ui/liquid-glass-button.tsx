import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const liquidbuttonVariants = cva(
  "inline-flex items-center transition-transform justify-center cursor-pointer gap-2 whitespace-nowrap font-medium duration-300 hover:scale-105 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none text-foreground",
  {
    variants: {
      variant: {
        default: "",
        outline: "",
        ghost: "",
      },
      size: {
        default: "h-10 px-5 text-sm",
        sm: "h-9 px-4 text-xs",
        lg: "h-11 px-6 text-sm",
        xl: "h-12 px-8 text-base",
        xxl: "h-14 px-10 text-base",
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
    <svg className="absolute inset-0 w-0 h-0 pointer-events-none" aria-hidden="true">
      <defs>
        <filter id="container-glass" x="-20%" y="-20%" width="140%" height="140%" colorInterpolationFilters="sRGB">
          <feTurbulence type="fractalNoise" baseFrequency="0.02 0.04" numOctaves="2" seed="92" result="noise" />
          <feGaussianBlur in="noise" stdDeviation="2" result="blurredNoise" />
          <feDisplacementMap in="SourceGraphic" in2="blurredNoise" scale="60" xChannelSelector="R" yChannelSelector="B" result="displaced" />
          <feGaussianBlur in="displaced" stdDeviation="0.4" result="finalBlur" />
          <feComposite in="finalBlur" in2="SourceAlpha" operator="in" result="composited" />
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
          "relative isolate rounded-full"
        )}
        style={{
          boxShadow:
            "inset 0 0 0 1px rgba(255,255,255,0.18), inset 1.5px 1.5px 0px -1px rgba(255,255,255,0.55), inset -1.5px -1.5px 0px -1px rgba(255,255,255,0.4), inset 0 -6px 12px -6px rgba(255,255,255,0.25), inset 0 6px 12px -6px rgba(255,255,255,0.15), 0 6px 24px -6px rgba(0,0,0,0.45), 0 1px 2px rgba(0,0,0,0.3)",
        }}
        {...props}
      >
        {/* Liquid glass refraction layer */}
        <span
          aria-hidden
          className="absolute inset-0 -z-10 rounded-full overflow-hidden"
          style={{
            backdropFilter: "url(#container-glass) blur(2px)",
            WebkitBackdropFilter: "blur(2px)",
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.04) 50%, rgba(255,255,255,0.10) 100%)",
          }}
        />
        {/* Top sheen */}
        <span
          aria-hidden
          className="absolute inset-x-2 top-0 h-1/2 rounded-full bg-gradient-to-b from-white/25 via-white/5 to-transparent pointer-events-none"
        />
        {/* Bottom inner shadow */}
        <span
          aria-hidden
          className="absolute inset-x-2 bottom-0 h-1/3 rounded-full bg-gradient-to-t from-black/20 to-transparent pointer-events-none"
        />
        {/* Content */}
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
      </Comp>
    </>
  );
}
