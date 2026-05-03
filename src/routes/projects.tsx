import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Damian Paries" },
      {
        name: "description",
        content:
          "Selected projects — brand identity, social media, content creation, and creative work by Damian Paries.",
      },
      { property: "og:title", content: "Projects — Damian Paries" },
      {
        property: "og:description",
        content:
          "Real projects across brand identity, content strategy, lifestyle, automotive, and music.",
      },
    ],
  }),
  component: ProjectsPage,
});

const projects = [
  {
    name: "VAULT XI",
    category: "Brand Identity & E-Commerce",
    description:
      "End-to-end brand content for Vault XI, a premium sportswear label. Handled product copywriting, social media content, business card design, and e-commerce visuals positioning the brand around luxury streetwear.",
    tags: ["Copywriting", "Brand Identity", "E-Commerce"],
    image:
      "https://res.cloudinary.com/dpylvnjuj/image/upload/w_800,q_auto,f_auto/v1777824340/IMG_6493_eaftjc.jpg",
  },
  {
    name: "MASTER HUSTLE",
    category: "Social Media & Content Strategy",
    description:
      "Built and managed the Master Hustle brand across social platforms. Created scroll-stopping content, grew the audience through consistent format systems, and monetized through digital products and brand partnerships.",
    tags: ["Social Media", "Content Strategy", "Growth"],
    image:
      "https://res.cloudinary.com/dpylvnjuj/image/upload/w_800,q_auto,f_auto/v1777824350/IMG_1421_otcccy.png",
  },
  {
    name: "OUTERBANKS",
    category: "Lifestyle Content & Photography",
    description:
      "Visual content creation and curation for the Outerbanks lifestyle brand. Built a cohesive aesthetic across photo content, optimised for engagement and brand deal opportunities.",
    tags: ["Content Creation", "Photography", "Lifestyle"],
    image:
      "https://res.cloudinary.com/dpylvnjuj/image/upload/w_800,q_auto,f_auto/v1777824204/IMG_0620_oni3c3.png",
  },
  {
    name: "LUSSO AUTO",
    category: "Automotive Brand Content",
    description:
      "Content and copywriting work for Lusso Auto, a premium automotive brand. Focused on aspirational visual storytelling and brand positioning for a high-end audience.",
    tags: ["Copywriting", "Automotive", "Brand Content"],
    image:
      "https://res.cloudinary.com/dpylvnjuj/image/upload/w_800,q_auto,f_auto/v1777824258/IMG_2601_tgdpfx.png",
  },
  {
    name: "NLE CHOPPA",
    category: "Artist & Music Content",
    description:
      "Social media content and visual assets for NLE Choppa's digital presence. Created fan-facing content optimised for reach and engagement across Instagram and TikTok.",
    tags: ["Music", "Social Media", "Content"],
    image:
      "https://res.cloudinary.com/dpylvnjuj/image/upload/w_800,q_auto,f_auto/v1777824011/IMG_7302_llthxh.png",
  },
];

function ProjectsPage() {
  return (
    <div>
      <section className="container-page pt-20 md:pt-28 pb-16">
        <p className="text-sm uppercase tracking-widest text-accent">Projects</p>
        <h1 className="mt-6 text-5xl md:text-7xl leading-[0.95] text-balance max-w-4xl">
          Pages I built. Audiences I grew. Brands I shaped.
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-ink-soft text-pretty">
          A selected look at real projects I've worked on — from brand identity
          and e-commerce to social media content and creative direction.
        </p>
      </section>

      <section className="container-page pb-24 space-y-16 md:space-y-24">
        {projects.map((p, i) => (
          <Reveal
            as="article"
            key={p.name}
            variant={i % 2 === 0 ? "left" : "right"}
            className="lift grid md:grid-cols-[1fr_1.2fr] gap-8 md:gap-12 pt-12 border-t border-rule rounded-2xl bg-surface/40 p-6 md:p-8 border"
          >
            <div className="aspect-[4/5] md:aspect-auto md:min-h-[400px] rounded-lg bg-surface border border-rule overflow-hidden">
              <img
                src={p.image}
                alt={p.name}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="flex flex-col">
              <p className="text-xs uppercase tracking-widest text-accent">
                {p.category}
              </p>
              <h2 className="mt-3 text-4xl md:text-5xl">{p.name}</h2>

              <p className="mt-6 text-ink-soft text-pretty leading-relaxed">
                {p.description}
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
