import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-rule">
      <div className="container-page py-12 grid gap-8 md:grid-cols-3 text-sm">
        <div>
          <p className="font-serif text-lg">Damian Paries</p>
          <p className="text-ink-soft mt-2 max-w-xs">
            Building audiences, brands, and digital products since 2020.
          </p>
          {/* Brand badges */}
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="inline-flex items-center rounded-full border border-rule px-3 py-1 text-xs text-ink-soft">Tafelberg Furnishers</span>
            <span className="inline-flex items-center rounded-full border border-rule px-3 py-1 text-xs text-ink-soft">Beds On Line</span>
            <span className="inline-flex items-center rounded-full border border-rule px-3 py-1 text-xs text-ink-soft">Master Hustle</span>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-ink-soft uppercase tracking-widest text-xs mb-1">Navigate</p>
          <Link to="/" className="link-underline w-fit">Home</Link>
          <Link to="/work" className="link-underline w-fit">Work</Link>
          <Link to="/projects" className="link-underline w-fit">Projects</Link>
          <Link to="/gallery" className="link-underline w-fit">Gallery</Link>
          <Link to="/about" className="link-underline w-fit">About</Link>
          <Link to="/contact" className="link-underline w-fit">Contact</Link>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-ink-soft uppercase tracking-widest text-xs mb-1">Elsewhere</p>
          <a href="https://www.linkedin.com/in/damianparies/" target="_blank" rel="noopener noreferrer" className="link-underline w-fit">LinkedIn</a>
          <a href="https://instagram.com/damianparies" target="_blank" rel="noopener noreferrer" className="link-underline w-fit">Instagram</a>
          <a href="mailto:damianparies@gmail.com" className="link-underline w-fit">Email</a>
        </div>
      </div>
      <div className="container-page pb-8 flex justify-between text-xs text-ink-soft">
        <span>© 2025 Damian Paries. All rights reserved.</span>
      </div>
    </footer>
  );
}
