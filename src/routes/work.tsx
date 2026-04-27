import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Client Work — Damian Paries" },
      {
        name: "description",
        content:
          "Selected client work — partnerships, campaigns, and digital projects with companies and founders.",
      },
      { property: "og:title", content: "Client Work — Damian Paries" },
      {
        property: "og:description",
        content:
          "A look at the brands and companies I've partnered with.",
      },
    ],
  }),
  component: WorkPage,
});

const services = [
  {
    title: "Audience Growth",
    body: "Building distribution from zero — formats, hooks, posting cadence, and the systems behind them.",
  },
  {
    title: "Content Strategy",
    body: "Translating a brand's positioning into a content engine that actually compounds over time.",
  },
  {
    title: "Brand Partnerships",
    body: "Connecting brands to creator audiences through campaigns built for performance, not vanity.",
  },
  {
    title: "Operations & Systems",
    body: "Turning ad-hoc content production into a documented, repeatable, hire-able workflow.",
  },
];

const clients = [
  { name: "Client A", scope: "Multi-month growth retainer", year: "2024" },
  { name: "Client B", scope: "Launch campaign — 3.2M reach", year: "2024" },
  { name: "Client C", scope: "Content system & playbooks", year: "2023" },
  { name: "Client D", scope: "Acquisition & rebuild", year: "2023" },
  { name: "Client E", scope: "Sponsored series, 6 episodes", year: "2022" },
  { name: "Client F", scope: "Founder personal brand", year: "2022" },
];

function WorkPage() {
  return (
    <div>
      <section className="container-page pt-20 md:pt-28 pb-16">
        <p className="text-sm uppercase tracking-widest text-accent">Work</p>
        <h1 className="mt-6 text-5xl md:text-7xl leading-[0.95] text-balance max-w-4xl">
          Companies I've helped grow, ship, and tell their story.
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-ink-soft text-pretty">
          A short list of the kind of work I take on, and a selected archive of
          past partners. Engagements range from one-off campaigns to long-term
          growth retainers.
        </p>
      </section>

      <section className="container-page py-16 border-t border-rule">
        <h2 className="text-sm uppercase tracking-widest text-ink-soft mb-10">
          What I do
        </h2>
        <div className="grid md:grid-cols-2 gap-px bg-rule">
          {services.map((s) => (
            <div key={s.title} className="bg-background p-8 md:p-10">
              <h3 className="font-serif text-2xl md:text-3xl">{s.title}</h3>
              <p className="mt-3 text-ink-soft text-pretty leading-relaxed">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page py-16 border-t border-rule">
        <h2 className="text-sm uppercase tracking-widest text-ink-soft mb-10">
          Selected clients
        </h2>
        <ul>
          {clients.map((c) => (
            <li
              key={c.name}
              className="grid grid-cols-[1fr_auto] md:grid-cols-[200px_1fr_auto] gap-4 md:gap-8 items-baseline py-6 border-t border-rule"
            >
              <span className="font-serif text-2xl md:text-3xl">{c.name}</span>
              <span className="hidden md:block text-ink-soft">{c.scope}</span>
              <span className="text-ink-soft text-sm">{c.year}</span>
              <span className="md:hidden col-span-2 text-ink-soft text-sm -mt-3">
                {c.scope}
              </span>
            </li>
          ))}
          <li className="border-t border-rule" />
        </ul>
        <p className="mt-8 text-sm text-ink-soft italic">
          Specific names available on request — many partnerships are under NDA.
        </p>
      </section>
    </div>
  );
}
