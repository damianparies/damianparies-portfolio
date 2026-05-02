import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Download } from "lucide-react";

const links: { to: "/" | "/work" | "/ventures" | "/about" | "/contact"; label: string; exact?: boolean }[] = [
  { to: "/", label: "Home", exact: true },
  { to: "/about", label: "About" },
  { to: "/work", label: "Work" },
  { to: "/ventures", label: "Ventures" },
  { to: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-rule">
      <div className="container-page flex items-center justify-between h-14">
        <Link
          to="/"
          className="font-serif text-lg tracking-tight"
          onClick={() => setOpen(false)}
        >
          Damian Paries
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-7 text-[13px] font-medium uppercase tracking-[1.5px]">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.exact }}
                activeProps={{ className: "text-foreground", "data-status": "active" } as never}
                inactiveProps={{ className: "text-ink-soft" }}
                className="nav-link transition-colors hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <a
            href="#"
            className="inline-flex items-center gap-1.5 rounded bg-primary px-3.5 py-1.5 text-xs font-medium text-primary-foreground uppercase tracking-wider transition-opacity hover:opacity-85"
          >
            <Download className="size-3" />
            CV
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          className="md:hidden p-2 -mr-2"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-rule bg-background">
          <div className="container-page py-4 flex flex-col gap-4 text-base">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.exact }}
                activeProps={{ className: "text-foreground font-medium" }}
                inactiveProps={{ className: "text-ink-soft" }}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <a
              href="#"
              className="inline-flex items-center gap-1.5 w-fit rounded bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
            >
              <Download className="size-3.5" />
              Download CV
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
