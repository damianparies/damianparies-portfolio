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
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/75 border-b border-rule">
      <div className="container-page flex items-center justify-between h-16">
        <Link
          to="/"
          className="font-serif text-xl tracking-tight"
          onClick={() => setOpen(false)}
        >
          Damian Paries
          <span className="text-accent">.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.exact }}
              activeProps={{ className: "text-foreground" }}
              inactiveProps={{ className: "text-ink-soft" }}
              className="link-underline transition-colors hover:text-foreground"
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
