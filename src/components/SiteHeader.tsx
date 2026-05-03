import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links: { to: "/" | "/work" | "/projects" | "/about" | "/contact"; label: string; exact?: boolean }[] = [
  { to: "/", label: "Index", exact: true },
  { to: "/work", label: "Work" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 glass border-b border-white/10">
      <div className="container-page flex items-center justify-between h-16">
        <Link
          to="/"
          className="flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <span className="grid size-8 place-items-center rounded-xl bg-accent text-accent-foreground font-serif font-bold text-sm leading-none">
            DP
          </span>
          <span className="font-serif text-lg tracking-tight uppercase">
            Damian Paries
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-9 text-xs font-medium uppercase tracking-[2px]">
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
                activeProps={{ className: "text-foreground" }}
                inactiveProps={{ className: "text-ink-soft" }}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
