import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, Linkedin, Instagram, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Damian Paries" },
      {
        name: "description",
        content:
          "Get in touch with Damian Paries — email, phone, LinkedIn, or Instagram.",
      },
      { property: "og:title", content: "Contact — Damian Paries" },
      {
        property: "og:description",
        content: "Reach out about partnerships, projects, or collaboration.",
      },
    ],
  }),
  component: ContactPage,
});

const channels = [
  {
    label: "Email",
    value: "damianparies@gmail.com",
    href: "mailto:damianparies@gmail.com",
    icon: Mail,
    note: "Best for proposals, briefs, and longer notes.",
  },
  {
    label: "Phone",
    value: "+27 66 207 7888",
    href: "tel:+27662077888",
    icon: Phone,
    note: "Local: 066 207 7888 · International: +27 66 207 7888",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/damianparies",
    href: "https://www.linkedin.com/in/damianparies/",
    icon: Linkedin,
    note: "Connect for work history and partnerships.",
  },
  {
    label: "Instagram",
    value: "@damianparies",
    href: "https://www.instagram.com/damianparies/",
    icon: Instagram,
    note: "Behind the scenes of the pages and projects.",
  },
];

function ContactPage() {
  return (
    <div>
      <section className="container-page pt-20 md:pt-28 pb-16">
        <Reveal variant="fade">
          <p className="text-sm uppercase tracking-widest text-accent">Contact</p>
        </Reveal>
        <Reveal variant="up" delay={80}>
          <h1 className="mt-6 text-5xl md:text-7xl leading-[0.95] text-balance max-w-4xl">
            Let's build something <em className="text-gradient-accent not-italic">worth building.</em>
          </h1>
        </Reveal>
        <Reveal variant="up" delay={160}>
          <p className="mt-8 max-w-2xl text-lg text-ink-soft text-pretty">
            Whether you're a brand looking for distribution, a founder building
            something new, or a creator who wants to compare notes — pick
            whichever channel works for you. I read every message.
          </p>
        </Reveal>
      </section>

      <section className="container-page pb-24 border-t border-rule pt-16">
        <ul className="grid md:grid-cols-2 gap-px bg-rule rounded-lg overflow-hidden">
          {channels.map((c, i) => {
            const Icon = c.icon;
            const external = c.href.startsWith("http");
            return (
              <Reveal
                as="li"
                key={c.label}
                variant="blur"
                delay={i * 100}
                className="bg-background"
              >
                <a
                  href={c.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="lift group block h-full p-8 md:p-10"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex size-10 items-center justify-center rounded-full border border-rule text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent">
                        <Icon className="size-4" />
                      </span>
                      <span className="text-xs uppercase tracking-widest text-ink-soft">
                        {c.label}
                      </span>
                    </div>
                    <ArrowUpRight className="size-5 text-ink-soft transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                  </div>
                  <p className="mt-6 font-serif text-2xl md:text-3xl break-words">
                    {c.value}
                  </p>
                  <p className="mt-3 text-sm text-ink-soft">{c.note}</p>
                </a>
              </Reveal>
            );
          })}
        </ul>

        <Reveal variant="fade" delay={200}>
          <p className="mt-10 text-sm text-ink-soft">
            Currently based in South Africa · Available remotely worldwide ·
            Open to select projects in 2026.
          </p>
        </Reveal>
      </section>
    </div>
  );
}
