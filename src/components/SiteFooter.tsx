import { Linkedin, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-rule mt-24">
      <div className="container-page py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-ink-soft">
        <p>© 2026 Damian Paries · Built to show, not tell.</p>
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/damianparies/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-foreground transition-colors"
          >
            <Linkedin className="size-4" />
          </a>
          <a
            href="mailto:damianparies@gmail.com"
            aria-label="Email"
            className="hover:text-foreground transition-colors"
          >
            <Mail className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
