import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work Experience — Damian Paries" },
      {
        name: "description",
        content:
          "Professional experience — e-commerce, copywriting, social media, and brand partnerships.",
      },
      { property: "og:title", content: "Work Experience — Damian Paries" },
      {
        property: "og:description",
        content:
          "A look at the companies and brands I've worked with.",
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
  {
    name: "Tafelberg Furnishers",
    scope: "Senior E-Commerce Copywriter & Website Administrator. Led a team of 2 copywriters, grew the online catalogue by over 30%, and managed all promotional campaigns and website backend.",
    year: "2025–Present",
  },
  {
    name: "Beds On Line",
    scope: "E-Commerce Copywriter & Social Media Manager. Product listings, content creation, and cross-team collaboration with buying and marketing departments.",
    year: "2024",
  },
  {
    name: "Master Hustle",
    scope: "Founder & Operator. Built and monetised a multi-platform social media brand generating five-figure revenue through digital products, merchandise, and brand partnerships.",
    year: "2021–Present",
  },
  {
    name: "Vault XI",
    scope: "Brand Content Partner. Copywriting, product content, and visual brand strategy for a premium sportswear label.",
    year: "",
  },
  {
    name: "Lusso Auto",
    scope: "Content & Copywriting. Aspirational brand storytelling for a high-end automotive brand.",
    year: "",
  },
  {
    name: "NLE Choppa",
    scope: "Social Media Content. Fan-facing content and digital assets across Instagram and TikTok.",
    year: "",
  },
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
          roles.
        </p>
      </section>

      <section className="container-page py-16 border-t border-rule">
        <h2 className="section-header text-3xl md:text-4xl mb-12">
          What I do
        </h2>
        <div className="grid md:grid-cols-2 gap-px bg-rule">
          {services.map((s, i) => (
            <Reveal key={s.title} variant="scale" delay={i * 100} className="bg-background p-8 md:p-10 lift">
              <h3 className="font-serif text-2xl md:text-3xl">{s.title}</h3>
              <p className="mt-3 text-ink-soft text-pretty leading-relaxed">
                {s.body}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-page py-16 border-t border-rule">
        <h2 className="section-header text-3xl md:text-4xl mb-12">
          Experience
        </h2>
        <ul>
          {clients.map((c, i) => (
            <Reveal
              as="li"
              key={c.name}
              variant="left"
              delay={i * 80}
              className="grid grid-cols-1 md:grid-cols-[200px_1fr_auto] gap-2 md:gap-8 items-baseline py-6 border-t border-rule"
            >
              <span className="font-serif text-2xl md:text-3xl">{c.name}</span>
              <span className="text-ink-soft text-sm md:text-base">{c.scope}</span>
              {c.year && <span className="text-ink-soft text-sm">{c.year}</span>}
            </Reveal>
          ))}
          <li className="border-t border-rule" />
        </ul>
      </section>
    </div>
  );
}
