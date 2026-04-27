import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Damian Paries" },
      {
        name: "description",
        content:
          "Damian Paries — operator, creator, and builder of social media brands. Five years growing audiences and shipping work with companies.",
      },
      { property: "og:title", content: "About — Damian Paries" },
      {
        property: "og:description",
        content:
          "The story behind the pages, partners, and projects.",
      },
    ],
  }),
  component: AboutPage,
});

const timeline = [
  {
    year: "2020",
    title: "First page goes live",
    body: "Started experimenting with niche theme pages. Learned distribution, hooks, and retention by shipping daily.",
  },
  {
    year: "2021",
    title: "Audience compounds",
    body: "Several pages crossed six figures of followers. Began testing monetization through shoutouts and affiliate offers.",
  },
  {
    year: "2022",
    title: "First brand partnerships",
    body: "Companies started reaching out. Built repeatable processes for managed campaigns and sponsored content.",
  },
  {
    year: "2023",
    title: "Operator mode",
    body: "Scaled to a network of pages across niches. Hired, automated, and turned the operation into a real business.",
  },
  {
    year: "2024 →",
    title: "Building for others",
    body: "Now consulting and partnering with brands and founders on growth, content systems, and digital products.",
  },
];

function AboutPage() {
  return (
    <div>
      <section className="container-page pt-20 md:pt-28 pb-16">
        <p className="text-sm uppercase tracking-widest text-accent">About</p>
        <h1 className="mt-6 text-5xl md:text-7xl leading-[0.95] text-balance max-w-4xl">
          A creator who learned to operate, and an operator who never stopped creating.
        </h1>
      </section>

      <section className="container-page grid md:grid-cols-[2fr_3fr] gap-12 md:gap-20 pb-20 border-t border-rule pt-16">
        <div className="md:sticky md:top-24 self-start">
          <div className="aspect-[4/5] rounded-lg bg-surface border border-rule flex items-center justify-center text-ink-soft text-sm">
            Portrait coming soon
          </div>
          <p className="mt-4 text-xs text-ink-soft">
            Photo placeholder — upload to replace.
          </p>
        </div>

        <div className="space-y-6 text-lg text-ink-soft text-pretty leading-relaxed">
          <p>
            I'm <span className="text-foreground">Damian Paries</span>. I build
            things on the internet — mostly audiences, sometimes products, and
            increasingly, the systems that make them grow without me.
          </p>
          <p>
            For the past few years I've been quietly building social media
            theme pages across multiple niches. What started as one account
            turned into a network: a few million followers, a portfolio of
            brand partnerships, and a small library of monetization playbooks
            that actually work.
          </p>
          <p>
            Alongside that, I've worked with companies — from early-stage
            founders to established brands — on content strategy, growth, and
            digital execution. I prefer long projects over loud ones, and
            measurable outcomes over vanity metrics.
          </p>
          <p className="text-foreground font-serif text-2xl pt-4 border-t border-rule">
            If you're building something interesting, I'd love to hear about it.
          </p>
        </div>
      </section>

      <section className="container-page py-20 border-t border-rule">
        <h2 className="text-3xl md:text-4xl mb-12">A short timeline.</h2>
        <ol className="space-y-0">
          {timeline.map((t) => (
            <li
              key={t.year}
              className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-4 md:gap-12 py-8 border-t border-rule"
            >
              <span className="text-ink-soft text-sm">{t.year}</span>
              <div>
                <h3 className="font-serif text-2xl">{t.title}</h3>
                <p className="mt-2 text-ink-soft max-w-2xl">{t.body}</p>
              </div>
            </li>
          ))}
          <li className="border-t border-rule" />
        </ol>
      </section>
    </div>
  );
}
