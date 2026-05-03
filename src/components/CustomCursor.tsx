import { useEffect, useRef } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot) return;

    const isFinePointer =
      typeof window !== "undefined" &&
      window.matchMedia("(hover: hover) and (pointer: fine) and (min-width: 1024px)").matches;
    if (!isFinePointer) return;

    let raf = 0;
    let x = 0, y = 0;

    function onMove(e: MouseEvent) {
      x = e.clientX; y = e.clientY;
      if (!raf) {
        raf = requestAnimationFrame(() => {
          if (dot) dot.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
          raf = 0;
        });
      }
    }

    function onOver(e: MouseEvent) {
      const t = e.target as HTMLElement | null;
      if (!dot || !t) return;
      const interactive = t.closest("a, button, [role='button'], input, textarea, select, label");
      if (interactive) {
        dot.style.width = "44px";
        dot.style.height = "44px";
        dot.style.backgroundColor = "oklch(0.85 0.17 90 / 0.2)";
      } else {
        dot.style.width = "24px";
        dot.style.height = "24px";
        dot.style.backgroundColor = "transparent";
      }
    }

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={dotRef} aria-hidden className="cursor-dot" />;
}
