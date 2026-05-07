import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import portrait from "@/assets/damian-portrait.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Damian Paries" },
      {
        name: "description",
        content:
          "Damian Paries, Senior E-Commerce Copywriter, Website Administrator, and digital entrepreneur based in Cape Town, South Africa.",
      },
      { property: "og:title", content: "About — Damian Paries" },
      {
        property: "og:description",
        content:
          "The story behind the pages, partners, and projects.",
      },
      { property: "og:image", content: portrait },
      { property: "twitter:image", content: portrait },
    ],
  }),
  component: AboutPage,
});

const timeline = [
  {
    year: "2021",
    title: "First theme pages go live",
    body: "Started building niche social media theme pages as a part-time digital entrepreneur. Learned distribution, hooks, and retention by shipping daily.",
  },
  {
    year: "2022",
    title: "Audience compounds",
    body: "Scaled multiple pages to tens of thousands of followers. Began monetizing through digital products such as eBooks and habit trackers with zero inventory cost.",
  },
  {
    year: "2023",
    title: "Multi-stream revenue",
    body: "Ran 3+ income streams in parallel: digital products, physical merchandise shipped internationally, and selling built social media assets to buyers.",
  },
  {
    year: "2024",
    title: "Beds On Line",
    body: "Joined Beds On Line as E-Commerce Copywriter and Social Media Manager. Product listings, content creation, and working alongside the buying and marketing teams.",
  },
  {
    year: "2025",
    title: "Tafelberg Furnishers",
    body: "Promoted into a Senior E-Commerce Copywriter and Website Administrator role. Leading a team of 2 copywriters and growing the online catalogue by over 30%.",
  },
  {
    year: "2026",
    title: "Tafelberg Furnishers and Studying",
    body: "Currently serving as Senior E-Commerce Copywriter and Website Administrator at Tafelberg Furnishers while completing a Bachelor of Business Administration in Marketing Management at Stadio Higher Education.",
  },
];

const skills = [
  "Team Leadership",
  "E-Commerce Operations",
  "Copywriting and Editing",
  "Website Administration",
  "Social Media and Content",
  "Promotional Campaigns",
  "Workflow Coordination",
  "Customer-Focused Mindset",
];

const stack = [
  { group: "E-Commerce", items: ["WordPress", "Shopify", "StoreFront", "Gumroad", "Teespring"] },
  { group: "Content", items: ["Canva", "CapCut", "Picsart", "Grammarly", "InShot", "Loom"] },
  { group: "AI", items: ["ChatGPT", "Claude", "Midjourney", "ElevenLabs", "ManyChat", "Perplexity"] },
  { group: "Collaboration", items: ["Notion", "MS Teams", "Zoom", "Dropbox", "Excel"] },
];

function AboutPage() {
  return (
    <div>
      <section className="container-page pt-24 md:pt-32 pb-16">
        <p className="text-sm uppercase tracking-widest text-accent">About</p>
        <h1 className="mt-6 text-5xl md:text-7xl leading-[0.95] text-balance max-w-4xl">
          A creator who learned to operate, and an operator who never stopped creating.
        </h1>
      </section>

      <section className="container-page grid md:grid-cols-[2fr_3fr] gap-12 md:gap-20 pb-20 border-t border-rule pt-16">
        <Reveal variant="scale" className="md:sticky md:top-24 self-start">
          <div className="aspect-[4/5] overflow-hidden rounded-lg bg-surface border border-rule">
            <img
              src={portrait}
              alt="Portrait of Damian Paries"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <p className="mt-4 text-xs text-ink-soft">
            Cape Town, South Africa.
          </p>
        </Reveal>

        <div className="space-y-6 text-lg text-ink-soft text-pretty leading-relaxed">
          <Reveal variant="fade">
            <p>
              I'm <span className="text-foreground">Damian Paries</span>, a
              Senior E-Commerce Copywriter and Website Administrator at
              <span className="text-foreground"> Tafelberg Furnishers</span>,
              where I lead a small copywriting team, manage the online
              catalogue, and have grown it by over 30%.
            </p>
          </Reveal>
          <Reveal variant="fade" delay={100}>
            <p>
              Before that, I spent years quietly building social media theme
              pages on the side, scaling accounts to tens of thousands of
              followers and turning them into real revenue through digital
              products, physical merchandise shipped worldwide, and selling
              built pages to buyers.
            </p>
          </Reveal>
          <Reveal variant="fade" delay={200}>
            <p>
              Today I split my time between e-commerce work, a Bachelor of
              Business Administration in Marketing Management at Stadio Higher
              Education, and the projects I keep building on the side. I prefer
              long projects over loud ones, and measurable outcomes over vanity
              metrics.
            </p>
          </Reveal>
          <Reveal variant="up" delay={300}>
            <p className="text-foreground font-serif text-2xl pt-4 border-t border-rule">
              If you're building something interesting, I'd love to hear about it.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-page py-20 border-t border-rule">
        <Reveal>
          <h2 className="section-header text-3xl md:text-4xl mb-12">What I do well.</h2>
        </Reveal>
        <div className="flex flex-wrap gap-2">
          {skills.map((s, i) => (
            <Reveal key={s} variant="scale" delay={i * 40}>
              <span className="inline-flex items-center rounded-full border border-rule px-4 py-2 text-sm text-foreground bg-surface/50">
                {s}
              </span>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-page py-20 border-t border-rule">
        <Reveal>
          <h2 className="section-header text-3xl md:text-4xl mb-12">Tools I work with.</h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-8">
          {stack.map((g, i) => (
            <Reveal
              key={g.group}
              variant={i % 2 === 0 ? "left" : "right"}
              delay={i * 80}
              className="border-t border-rule pt-6"
            >
              <p className="text-sm uppercase tracking-widest text-accent">
                {g.group}
              </p>
              <p className="mt-3 text-lg text-ink-soft">
                {g.items.join(" · ")}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-page py-20 border-t border-rule">
        <h2 className="section-header text-3xl md:text-4xl mb-12">A short timeline.</h2>
        <ol className="space-y-0">
          {timeline.map((t, i) => (
            <Reveal
              as="li"
              key={t.year}
              variant={i % 2 === 0 ? "left" : "right"}
              delay={i * 100}
              className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-4 md:gap-12 py-8 border-t border-rule"
            >
              <span className="text-ink-soft text-sm">{t.year}</span>
              <div>
                <h3 className="font-serif text-2xl">{t.title}</h3>
                <p className="mt-2 text-ink-soft max-w-2xl">{t.body}</p>
              </div>
            </Reveal>
          ))}
          <li className="border-t border-rule" />
        </ol>
      </section>
    </div>
  );
}
