import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Damian Paries" },
      {
        name: "description",
        content: "Professional experience — Senior E-Commerce Copywriter at Tafelberg Furnishers and E-Commerce Copywriter at Beds Online.",
      },
    ],
  }),
  component: WorkPage,
});

const roles = [
  {
    company: "Tafelberg Furnishers (Pty) Ltd",
    role: "Senior E-Commerce Copywriter & Website Administrator",
    period: "March 2025 — Present",
    description:
      "Leading a team of two copywriters managing the full online product catalogue for one of South Africa's established furniture retailers. Grew the catalogue by over 30%, coordinated promotional campaigns across buying and marketing teams, managed the website backend, and liaised with external developers to improve workflow and customer experience.",
    tags: [
      "Catalogue grown 30%+",
      "Team of 2 managed",
      "Promotional campaigns executed",
      "Website backend administered",
      "Cross-departmental coordination",
    ],
  },
  {
    company: "Beds Online",
    role: "E-Commerce Copywriter & Social Media Manager",
    period: "February 2024 — February 2025",
    description:
      "Managed online product listings, social media content creation, and vendor relationships for a South African e-commerce furniture brand. Handled end-to-end product data entry, image editing, and cross-team collaboration with buying and marketing departments.",
    tags: [
      "Social media managed and grown",
      "Product catalogue maintained",
      "Vendor relationships built",
      "Cross-team collaboration",
    ],
  },
];

function WorkPage() {
  return (
    <div>
      <section className="container-page pt-20 md:pt-28 pb-16">
        <Reveal>
          <p className="section-label">Experience</p>
          <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl max-w-3xl">Professional Experience</h1>
        </Reveal>
      </section>

      <section className="container-page pb-20">
        <div className="grid md:grid-cols-2 gap-6">
          {roles.map((r, i) => (
            <Reveal key={r.company} delay={i * 120}>
              <div className="card-hover h-full border border-rule rounded-lg p-6 md:p-8 bg-background">
                <p className="section-label">{r.period}</p>
                <h2 className="mt-3 font-serif text-2xl md:text-[1.65rem] leading-tight">{r.company}</h2>
                <p className="mt-1 text-sm font-medium text-navy">{r.role}</p>
                <p className="mt-4 text-sm text-ink-soft leading-relaxed">{r.description}</p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {r.tags.map((t) => (
                    <span
                      key={t}
                      className="inline-block rounded-full bg-surface px-3 py-1 text-xs text-ink-soft"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={250}>
          <p className="mt-10 text-sm text-ink-soft italic">
            References available upon request.
          </p>
        </Reveal>
      </section>
    </div>
  );
}
