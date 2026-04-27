import { createFileRoute } from "@tanstack/react-router";
import { TrendingUp, Users, DollarSign } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects & Theme Pages — Damian Paries" },
      {
        name: "description",
        content:
          "Selected social media theme pages and personal projects — what they are, how they grew, and how they were monetized.",
      },
      { property: "og:title", content: "Projects & Theme Pages — Damian Paries" },
      {
        property: "og:description",
        content:
          "Case studies on building, growing, and monetizing social media audiences.",
      },
    ],
  }),
  component: ProjectsPage,
});

const projects = [
  {
    name: "Project One",
    niche: "Lifestyle / Aesthetic",
    followers: "850K",
    growth: "0 → 850K in 14 months",
    revenue: "5-figure monthly",
    summary:
      "A curated visual page built on consistent posting, format experimentation, and a tight content pillar system. Monetized through brand deals, page promotion, and an affiliate funnel.",
    tags: ["Instagram", "Curation", "Brand Deals"],
  },
  {
    name: "Project Two",
    niche: "Motivation / Mindset",
    followers: "1.2M",
    growth: "Acquired & scaled 3x",
    revenue: "Digital products",
    summary:
      "Acquired underperforming and rebuilt the entire content engine. Introduced a digital product funnel that turned the page into a real business — not just a placeholder for shoutouts.",
    tags: ["Acquisition", "Funnels", "Digital Products"],
  },
  {
    name: "Project Three",
    niche: "Niche Sports",
    followers: "420K",
    growth: "Built from zero",
    revenue: "Sponsorships",
    summary:
      "A specialist page in an underserved niche. Less competition, deeper engagement, and partnerships with brands that other accounts in the space couldn't access.",
    tags: ["TikTok", "Reels", "Sponsorship"],
  },
  {
    name: "Project Four",
    niche: "Multi-platform Brand",
    followers: "2M+ combined",
    growth: "Distributed system",
    revenue: "Recurring partnerships",
    summary:
      "A coordinated network of accounts across platforms feeding a single brand identity. Built playbooks, hired operators, and turned content production into a repeatable workflow.",
    tags: ["Network", "Operations", "Systems"],
  },
];

function ProjectsPage() {
  return (
    <div>
      <section className="container-page pt-20 md:pt-28 pb-16">
        <p className="text-sm uppercase tracking-widest text-accent">Projects</p>
        <h1 className="mt-6 text-5xl md:text-7xl leading-[0.95] text-balance max-w-4xl">
          Pages I built. Audiences I grew. Money they made.
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-ink-soft text-pretty">
          A selected look at the social media properties I've built and operated
          over the past five years. Names withheld where partners prefer
          discretion — happy to share more in a private conversation.
        </p>
      </section>

      <section className="container-page pb-24 space-y-16 md:space-y-24">
        {projects.map((p, i) => (
          <Reveal
            as="article"
            key={p.name}
            className="grid md:grid-cols-[1fr_1.2fr] gap-8 md:gap-12 pt-12 border-t border-rule"
          >
            {/* Visual placeholder */}
            <div className="aspect-[4/5] md:aspect-auto md:min-h-[400px] rounded-lg bg-surface border border-rule flex flex-col items-center justify-center text-ink-soft">
              <span className="font-serif text-7xl text-foreground/10">
                0{i + 1}
              </span>
              <span className="text-xs uppercase tracking-widest mt-2">
                Image placeholder
              </span>
            </div>

            <div className="flex flex-col">
              <p className="text-xs uppercase tracking-widest text-accent">
                {p.niche}
              </p>
              <h2 className="mt-3 text-4xl md:text-5xl">{p.name}</h2>

              <div className="mt-6 grid grid-cols-3 gap-4 py-6 border-y border-rule">
                <Metric icon={<Users className="size-4" />} label="Followers" value={p.followers} />
                <Metric icon={<TrendingUp className="size-4" />} label="Growth" value={p.growth} />
                <Metric icon={<DollarSign className="size-4" />} label="Revenue" value={p.revenue} />
              </div>

              <p className="mt-6 text-ink-soft text-pretty leading-relaxed">
                {p.summary}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full border border-rule text-ink-soft"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </section>
    </div>
  );
}

function Metric({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div>
      <div className="flex items-center gap-1.5 text-ink-soft text-xs uppercase tracking-widest">
        {icon}
        {label}
      </div>
      <p className="mt-2 font-serif text-lg md:text-xl leading-tight">{value}</p>
    </div>
  );
}
