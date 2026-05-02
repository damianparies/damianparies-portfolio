import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Download } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Damian Paries — Marketing Strategist. Growth Operator. Digital Builder." },
      {
        name: "description",
        content:
          "I build audiences, brands, and the systems behind them — from zero-follower pages to millions in reach.",
      },
    ],
  }),
  component: HomePage,
});

const stats = [
  { value: "10M+", label: "Total Reach Built" },
  { value: "5", label: "Digital Ventures Launched" },
  { value: "4 Years", label: "Corporate E-Commerce Experience" },
];

function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section className="container-page pt-20 md:pt-32 pb-16 md:pb-24">
        <Reveal>
          <h1 className="text-4xl sm:text-5xl md:text-[3.5rem] lg:text-[4rem] leading-[1.1] max-w-3xl text-balance">
            Marketing Strategist.
            <br />
            Growth Operator.
            <br />
            Digital Builder.
          </h1>
        </Reveal>

        <Reveal delay={100}>
          <p className="mt-8 max-w-2xl text-base md:text-lg text-ink-soft leading-relaxed text-pretty">
            I build audiences, brands, and the systems behind them — from
            zero-follower pages to millions in reach. Currently Senior
            E-Commerce Copywriter and Website Administrator at Tafelberg
            Furnishers, studying Marketing Management at Stadio Higher Education.
          </p>
        </Reveal>

        {/* Stats */}
        <Reveal delay={200}>
          <div className="mt-10 flex flex-wrap gap-8 md:gap-12">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-serif text-3xl md:text-4xl">{s.value}</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-ink-soft">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Buttons */}
        <Reveal delay={300}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 rounded bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-85"
            >
              View My Work <ArrowRight className="size-4" />
            </Link>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded border border-foreground/20 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-foreground hover:text-background"
            >
              <Download className="size-4" />
              Download CV
            </a>
          </div>
        </Reveal>

        <Reveal delay={400}>
          <p className="mt-6 text-sm text-ink-soft italic">
            "Distribution is a craft. Audiences are built quietly, measured honestly."
          </p>
        </Reveal>

        <Reveal delay={450}>
          <span className="mt-4 inline-block rounded-full border border-navy/30 bg-navy/5 px-3 py-1 text-xs font-medium text-navy">
            Currently open to opportunities
          </span>
        </Reveal>
      </section>
    </div>
  );
}
