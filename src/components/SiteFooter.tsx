import { Link } from "@tanstack/react-router";
import { Meteors } from "@/components/ui/meteors";
import { Linkedin, Mail, Instagram } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="relative mt-32 overflow-hidden border-t border-rule bg-background">
      {/* Meteors background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <Meteors number={25} />
      </div>
      {/* Subtle ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-64 w-[80%] rounded-full"
        style={{ background: "radial-gradient(ellipse at center, oklch(0.85 0.17 90 / 0.10), transparent 70%)" }}
      />

      <div className="relative z-10 container-page py-16 grid gap-10 md:grid-cols-2 text-sm">
        {/* Left */}
        <div>
          <p className="font-serif text-2xl text-foreground">Damian Paries</p>
          <p className="text-ink-soft mt-3 max-w-sm leading-relaxed">
            Building audiences, brands, and digital products from Cape Town.
            Available for select copywriting, content, and e-commerce work.
          </p>
          <a
            href="mailto:damianparies@gmail.com"
            className="mt-5 inline-flex items-center gap-2 text-foreground link-underline w-fit"
          >
            <Mail className="size-4 text-accent" />
            damianparies@gmail.com
          </a>
        </div>

        {/* Right */}
        <div className="grid grid-cols-2 gap-6 md:justify-self-end">
          <div className="flex flex-col gap-2">
            <p className="text-ink-soft uppercase tracking-widest text-xs mb-2">Navigate</p>
            <Link to="/" className="link-underline w-fit">Home</Link>
            <Link to="/work" className="link-underline w-fit">Work</Link>
            <Link to="/projects" className="link-underline w-fit">Projects</Link>
            <Link to="/about" className="link-underline w-fit">About</Link>
            <Link to="/contact" className="link-underline w-fit">Contact</Link>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-ink-soft uppercase tracking-widest text-xs mb-2">Elsewhere</p>
            <a href="https://www.linkedin.com/in/damianparies/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 link-underline w-fit">
              <Linkedin className="size-3.5" /> LinkedIn
            </a>
            <a href="https://instagram.com/damianparies" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 link-underline w-fit">
              <Instagram className="size-3.5" /> Instagram
            </a>
            <a href="mailto:damianparies@gmail.com" className="inline-flex items-center gap-2 link-underline w-fit">
              <Mail className="size-3.5" /> Email
            </a>
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-rule">
        <div className="container-page py-6 text-center text-xs text-ink-soft">
          © {new Date().getFullYear()} Damian Paries. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
