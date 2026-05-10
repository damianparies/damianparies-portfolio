import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

const AnimatedNavLink = ({ to, children, onClick }: { to: string; children: React.ReactNode; onClick?: () => void }) => {
  return (
    <Link
      to={to as any}
      onClick={onClick}
      className="relative overflow-hidden inline-flex items-start h-5 group text-sm"
    >
      <motion.span
        className="flex flex-col text-ink-soft group-hover:text-foreground transition-colors"
        whileHover={{ y: -20 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <span className="h-5 flex items-center">{children}</span>
        <span className="h-5 flex items-center text-accent">{children}</span>
      </motion.span>
    </Link>
  );
};

const links = [
  { to: "/", label: "Home" },
  { to: "/work", label: "Work" },
  { to: "/projects", label: "Projects" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function AnimatedNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [headerShapeClass, setHeaderShapeClass] = useState("rounded-full");
  const shapeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (shapeTimeoutRef.current) clearTimeout(shapeTimeoutRef.current);
    if (isOpen) {
      setHeaderShapeClass("rounded-xl");
    } else {
      shapeTimeoutRef.current = setTimeout(() => setHeaderShapeClass("rounded-full"), 300);
    }
    return () => { if (shapeTimeoutRef.current) clearTimeout(shapeTimeoutRef.current); };
  }, [isOpen]);

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl">
      <motion.div
        layout
        className={cn(
          "border border-white/10 bg-background/70 backdrop-blur-2xl shadow-2xl transition-[border-radius] duration-300",
          headerShapeClass
        )}
      >
        {/* Main bar */}
        <div className="flex items-center justify-between px-5 py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5" onClick={() => setIsOpen(false)}>
            <span className="grid size-8 place-items-center rounded-xl bg-accent text-accent-foreground font-serif font-bold text-sm leading-none">
              DP
            </span>
            <span className="font-serif text-base tracking-tight uppercase text-foreground">
              Damian Paries
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <AnimatedNavLink key={l.to} to={l.to}>{l.label}</AnimatedNavLink>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-4 py-2 text-sm font-medium transition-transform hover:scale-105"
            >
              Get In Touch
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button className="md:hidden p-2 -mr-2 text-foreground" onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
            )}
          </button>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden border-t border-white/10"
            >
              <div className="px-5 py-4 flex flex-col gap-3">
                {links.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to as any}
                    className="text-sm text-ink-soft hover:text-foreground transition-colors py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    {l.label}
                  </Link>
                ))}
                <div className="pt-2 flex gap-2">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center rounded-full bg-accent text-accent-foreground px-4 py-2 text-sm font-medium w-full"
                    onClick={() => setIsOpen(false)}
                  >
                    Get In Touch
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
}
