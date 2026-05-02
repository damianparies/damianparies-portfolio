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
          "Damian Paries — Senior E-Commerce Copywriter, Website Administrator, and digital entrepreneur based in Cape Town.",
      },
    ],
  }),
  component: AboutPage,
});

const timeline = [
  { date: "December 2020", text: "Built NLE Choppa Instagram fan page from zero to 77,500 followers. Sold directly to the artist." },
  { date: "November 2021", text: "Launched NLE Choppa TikTok page. Grew to 200,000+ followers in 6 months. Sold to US jewelry company." },
  { date: "March 2022", text: "Acquired two Outer Banks fan pages. Scaled to 100,000+ combined followers. Launched Pogue Life international merchandise brand." },
  { date: "2023", text: "Built Master Hustle brand across Instagram, TikTok and YouTube. Published Mind Power ebook — 2,000+ copies sold worldwide. Sold brand to US buyer November 2024." },
  { date: "July 2025", text: "Founded Vault XI, a South African soccer jersey e-commerce brand. Built brand identity, website, and business cards independently." },
  { date: "February 2024", text: "Joined Beds Online as E-Commerce Copywriter and Social Media Manager." },
  { date: "March 2025", text: "Joined Tafelberg Furnishers as Senior E-Commerce Copywriter and Website Administrator." },
  { date: "2026", text: "Enrolled in BBA Marketing Management at Stadio Higher Education." },
];

const skills = [
  "Copywriting", "Content Strategy", "E-Commerce Operations", "Social Media Growth",
  "Team Leadership", "Digital Product Creation", "Campaign Planning", "WordPress",
  "Canva", "Shopify", "Gumroad", "Microsoft Office Suite", "AI Tools",
];

function AboutPage() {
  return (
    <div>
      <section className="container-page pt-20 md:pt-28 pb-16">
        <Reveal>
          <p className="section-label">About</p>
          <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl max-w-3xl">About Me</h1>
        </Reveal>
      </section>

      {/* Portrait + Bio */}
      <section className="container-page grid md:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr] gap-10 md:gap-16 pb-20">
        <Reveal className="self-start">
          <div className="aspect-[3/4] overflow-hidden rounded bg-surface border border-rule">
            <img
              src={portrait}
              alt="Portrait of Damian Paries"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </Reveal>

        <div className="space-y-5 text-base md:text-[17px] text-ink-soft leading-relaxed">
          <Reveal delay={100}>
            <p>
              I'm Damian Paries, a marketing and e-commerce professional based in
              Brackenfell, Cape Town. I started building digital properties at 17 —
              growing social media pages from zero to hundreds of thousands of
              followers, launching merchandise brands, and selling digital products
              globally. That operator mindset is what I bring to every role I take on.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <p>
              Since 2024 I've been working in corporate e-commerce — first at Beds
              Online as an E-Commerce Copywriter and Social Media Manager, and
              currently at Tafelberg Furnishers as a Senior E-Commerce Copywriter and
              Website Administrator, where I lead a copywriting team and manage the
              full online product catalogue.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p>
              I'm currently completing a Bachelor of Business Administration in
              Marketing Management at Stadio Higher Education, building the strategic
              foundation to match my hands-on experience.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="container-page py-16 border-t border-rule">
        <Reveal>
          <h2 className="text-2xl md:text-3xl mb-10">Journey So Far</h2>
        </Reveal>
        <ol className="relative border-l border-rule ml-3 md:ml-4 space-y-0">
          {timeline.map((t, i) => (
            <Reveal as="li" key={i} delay={i * 60} className="pl-8 pb-8 last:pb-0 relative">
              <span className="absolute left-0 top-1.5 -translate-x-1/2 size-2.5 rounded-full bg-navy" />
              <p className="text-xs font-medium uppercase tracking-wider text-navy">{t.date}</p>
              <p className="mt-1.5 text-ink-soft leading-relaxed">{t.text}</p>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* Skills */}
      <section className="container-page py-16 border-t border-rule">
        <Reveal>
          <h2 className="text-2xl md:text-3xl mb-8">Skills & Tools</h2>
        </Reveal>
        <Reveal delay={100}>
          <div className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <span
                key={s}
                className="inline-block rounded-full border border-rule px-4 py-1.5 text-sm text-foreground"
              >
                {s}
              </span>
            ))}
          </div>
        </Reveal>
      </section>
    </div>
  );
}
