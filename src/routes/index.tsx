import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Damian Paries — Builder, Operator, Creator" },
      {
        name: "description",
        content:
          "I build social media brands, grow audiences, and partner with companies on digital work.",
      },
      { property: "og:title", content: "Damian Paries — Builder, Operator, Creator" },
      {
        property: "og:description",
        content:
          "A selected archive of theme pages, audiences grown, and client work.",
      },
    ],
  }),
  component: Index,
});

const stats = [
  { value: "10M+", label: "Audience reached" },
  { value: "20+", label: "Theme pages built" },
  { value: "5+", label: "Years operating" },
  { value: "30+", label: "Brand partners" },
];

const featured = [
  {
    year: "2025",
    title: "Tafelberg Furnishers",
    role: "Senior Copywriter & Web Admin",
    href: "/work",
  },
  {
    year: "2024",
    title: "Beds On Line",
    role: "E-Commerce & Social Media",
    href: "/work",
  },
  {
    year: "2021–Present",
    title: "Master Hustle",
    role: "Founder & Operator",
    href: "/projects",
  },
];

function Index() {
  return (
    <div>
      {/* HERO */}
      <section className="container-page pt-20 md:pt-32 pb-20 md:pb-32">
        <p className="text-sm uppercase tracking-widest text-accent fade-in-up">
          Portfolio · Est. 2020
        </p>
        <h1 className="mt-6 text-5xl sm:text-6xl md:text-8xl leading-[0.95] text-balance fade-in-up">
          Building audiences,
          <br />
          brands, and the
          <br />
          quiet machines
          <br />
          <em className="text-gradient-accent not-italic">behind them.</em>
        </h1>

        <div className="mt-10 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <p className="max-w-xl text-lg text-ink-soft text-pretty fade-in-up">
            I'm Damian Paries — an operator and creator who has spent the past
            five years growing social media theme pages, monetizing audiences,
            and partnering with companies to ship sharp digital work.
          </p>
          <div className="flex gap-3">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm text-primary-foreground transition-opacity hover:opacity-90"
            >
              See the work <ArrowUpRight className="size-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-5 py-3 text-sm transition-colors hover:bg-foreground hover:text-background"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-rule bg-surface/60 backdrop-blur-sm">
        <div className="container-page grid grid-cols-2 md:grid-cols-4 divide-x divide-rule">
          {stats.map((s, i) => (
            <Reveal key={s.label} variant="scale" delay={i * 100} className="py-10 px-4 first:pl-0 text-center md:text-left">
              <p className="font-serif text-4xl md:text-5xl">{s.value}</p>
              <p className="mt-2 text-xs uppercase tracking-widest text-ink-soft">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FEATURED INDEX */}
      <section className="container-page py-20 md:py-32">
        <Reveal className="flex items-end justify-between mb-10">
          <div>
            <p className="text-sm uppercase tracking-widest text-ink-soft">
              Selected
            </p>
            <h2 className="section-header mt-2 text-4xl md:text-5xl">A working index.</h2>
          </div>
          <Link to="/projects" className="hidden md:inline-flex link-underline text-sm">
            View all →
          </Link>
        </Reveal>

        <ul>
          {featured.map((item, i) => (
            <Reveal as="li" key={i} variant="left" delay={i * 120}>
              <Link
                to={item.href}
                className="group grid grid-cols-[auto_1fr_auto] md:grid-cols-[80px_1fr_1fr_auto] gap-4 md:gap-8 items-center py-6 border-t border-rule transition-colors hover:bg-surface px-2 -mx-2 rounded-md"
              >
                <span className="text-ink-soft text-sm">{item.year}</span>
                <span className="font-serif text-2xl md:text-3xl">{item.title}</span>
                <span className="hidden md:block text-ink-soft text-sm">{item.role}</span>
                <ArrowUpRight className="size-5 text-ink-soft transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
              </Link>
            </Reveal>
          ))}
          <li className="border-t border-rule" />
        </ul>
      </section>

      {/* QUOTE / PHILOSOPHY */}
      <section className="container-page py-20 md:py-32 border-t border-rule">
        <Reveal as="blockquote" variant="blur" className="max-w-4xl">
          <p className="font-serif text-3xl md:text-5xl leading-tight text-balance">
            "Distribution is a craft. I treat every page, post, and product
            launch like a small <em className="text-accent not-italic">compounding bet</em> —
            built quietly, measured honestly."
          </p>
          <footer className="mt-8 text-sm text-ink-soft uppercase tracking-widest">
            — Damian Paries
          </footer>
        </Reveal>
      </section>
    </div>
  );
}
