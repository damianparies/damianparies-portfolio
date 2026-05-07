import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Damian Paries" },
      {
        name: "description",
        content:
          "Selected projects across brand identity, content strategy, lifestyle, automotive, and music by Damian Paries.",
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
    category: "Brand Identity and E-Commerce",
    description:
      "End-to-end brand content for Vault XI, a premium sportswear label. Handled product copywriting, social media content, business card design, and e-commerce visuals positioning the brand around luxury streetwear.",
    tags: ["Copywriting", "Brand Identity", "E-Commerce"],
    image:
      "https://res.cloudinary.com/dpylvnjuj/image/upload/w_800,q_auto,f_auto/v1777824340/IMG_6493_eaftjc.jpg",
    details: {
      tools: ["Canva", "Grammarly", "Instagram"],
      outcomes: "Positioned the brand as a premium streetwear label through cohesive visual identity and sharp product copy.",
    },
  },
  {
    name: "MASTER HUSTLE",
    category: "Social Media and Content Strategy",
    description:
      "Built and managed the Master Hustle brand across social platforms. Created scroll-stopping content, grew the audience through consistent format systems, and monetized through digital products and brand partnerships.",
    tags: ["Social Media", "Content Strategy", "Growth"],
    image:
      "https://res.cloudinary.com/dpylvnjuj/image/upload/w_800,q_auto,f_auto/v1777824350/IMG_1421_otcccy.png",
    details: {
      tools: ["Canva", "CapCut", "TikTok", "Instagram", "Gumroad"],
      outcomes: "Scaled to hundreds of thousands of followers and generated five-figure revenue through digital products and merchandise.",
    },
  },
  {
    name: "OUTERBANKS",
    category: "Lifestyle Content and Photography",
    description:
      "Visual content creation and curation for the Outerbanks lifestyle brand. Built a cohesive aesthetic across photo content, optimised for engagement and brand deal opportunities.",
    tags: ["Content Creation", "Photography", "Lifestyle"],
    image:
      "https://res.cloudinary.com/dpylvnjuj/image/upload/w_800,q_auto,f_auto/v1777824204/IMG_0620_oni3c3.png",
    details: {
      tools: ["Canva", "Picsart", "Instagram"],
      outcomes: "Created a recognisable visual identity that attracted brand partnership enquiries.",
    },
  },
  {
    name: "LUSSO AUTO",
    category: "Automotive Brand Content",
    description:
      "Content and copywriting work for Lusso Auto, a premium automotive brand. Focused on aspirational visual storytelling and brand positioning for a high-end audience.",
    tags: ["Copywriting", "Automotive", "Brand Content"],
    image:
      "https://res.cloudinary.com/dpylvnjuj/image/upload/w_800,q_auto,f_auto/v1777824258/IMG_2601_tgdpfx.png",
    details: {
      tools: ["Canva", "Grammarly", "Instagram"],
      outcomes: "Elevated the brand's digital presence through aspirational storytelling aligned with a luxury audience.",
    },
  },
  {
    name: "NLE CHOPPA",
    category: "Artist and Music Content",
    description:
      "Social media content and visual assets for NLE Choppa's digital presence. Created fan-facing content optimised for reach and engagement across Instagram and TikTok.",
    tags: ["Music", "Social Media", "Content"],
    image:
      "https://res.cloudinary.com/dpylvnjuj/image/upload/w_800,q_auto,f_auto/v1777824011/IMG_7302_llthxh.png",
    details: {
      tools: ["Canva", "CapCut", "TikTok", "Instagram"],
      outcomes: "Produced high-engagement content optimised for algorithmic reach across music and entertainment niches.",
    },
  },
];

function ProjectsPage() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div>
      <section className="container-page pt-24 md:pt-32 pb-16">
        <p className="text-sm uppercase tracking-widest text-accent">Projects</p>
        <h1 className="mt-6 text-5xl md:text-7xl leading-[0.95] text-balance max-w-4xl">
          Pages I built. Audiences I grew. Brands I shaped.
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-ink-soft text-pretty">
          A selected look at real projects I have worked on, from brand identity
          and e-commerce to social media content and creative direction.
        </p>
      </section>

      <section className="container-page pb-24 space-y-16 md:space-y-24">
        {projects.map((p, i) => (
          <Reveal
            as="article"
            key={p.name}
            variant={i % 2 === 0 ? "left" : "right"}
            className="lift grid md:grid-cols-[1fr_1.2fr] gap-8 md:gap-12 pt-12 border-t border-rule rounded-2xl bg-surface/40 p-6 md:p-8 border cursor-pointer"
          >
            <div
              className="aspect-[4/5] md:aspect-auto md:min-h-[400px] rounded-lg bg-surface border border-rule overflow-hidden"
              onClick={() => setSelected(i)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && setSelected(i)}
            >
              <img
                src={p.image}
                alt={p.name}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="flex flex-col" onClick={() => setSelected(i)} role="button" tabIndex={0} onKeyDown={(e) => e.key === "Enter" && setSelected(i)}>
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

              <p className="mt-4 text-xs text-accent uppercase tracking-widest">Click to view details →</p>
            </div>
          </Reveal>
        ))}
      </section>

      {/* PROJECT DETAIL MODAL */}
      {selected !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setSelected(null)}>
          <div className="absolute inset-0 bg-background/80 backdrop-blur-md" />
          <div
            className="relative z-10 max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-2xl border border-rule bg-surface p-6 md:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 p-2 rounded-full border border-rule hover:bg-background transition-colors"
            >
              <X className="size-5" />
            </button>

            <div className="flex items-center justify-between mb-4">
              <button
                onClick={() => setSelected(selected > 0 ? selected - 1 : projects.length - 1)}
                className="p-2 rounded-full border border-rule hover:bg-background transition-colors"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                onClick={() => setSelected(selected < projects.length - 1 ? selected + 1 : 0)}
                className="p-2 rounded-full border border-rule hover:bg-background transition-colors"
              >
                <ChevronRight className="size-5" />
              </button>
            </div>

            <div className="aspect-video rounded-lg overflow-hidden mb-6 bg-background border border-rule">
              <img
                src={projects[selected].image}
                alt={projects[selected].name}
                className="h-full w-full object-cover"
              />
            </div>

            <p className="text-xs uppercase tracking-widest text-accent">{projects[selected].category}</p>
            <h2 className="mt-2 font-serif text-4xl">{projects[selected].name}</h2>
            <p className="mt-4 text-ink-soft leading-relaxed">{projects[selected].description}</p>

            <div className="mt-6 grid sm:grid-cols-2 gap-6">
              <div>
                <p className="text-xs uppercase tracking-widest text-ink-soft mb-2">Tools Used</p>
                <div className="flex flex-wrap gap-2">
                  {projects[selected].details.tools.map((t) => (
                    <span key={t} className="text-xs px-3 py-1 rounded-full border border-rule text-foreground">{t}</span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-ink-soft mb-2">Outcomes</p>
                <p className="text-sm text-ink-soft">{projects[selected].details.outcomes}</p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {projects[selected].tags.map((t) => (
                <span key={t} className="text-xs px-3 py-1 rounded-full border border-accent/40 text-accent">{t}</span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
