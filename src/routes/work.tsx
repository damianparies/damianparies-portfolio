import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work Experience — Damian Paries" },
      {
        name: "description",
        content:
          "Professional experience in e-commerce, copywriting, social media, and brand partnerships.",
      },
      { property: "og:title", content: "Work Experience — Damian Paries" },
      {
        property: "og:description",
        content:
          "A look at the companies and brands I have worked with.",
      },
    ],
  }),
  component: WorkPage,
});

const services = [
  {
    title: "E-Commerce Copywriting",
    body: "Writing product descriptions, promotional content, and blog posts that drive conversions and support SEO performance across a live retail platform.",
  },
  {
    title: "Website Administration",
    body: "Managing the backend of a retail website, coordinating with developers, identifying and logging site errors, and continuously improving the customer experience online.",
  },
  {
    title: "Team Leadership and Workflow",
    body: "Leading a copywriting team by setting daily priorities, managing deadlines, coordinating with buying and marketing teams, and keeping catalogue output accurate and on time.",
  },
  {
    title: "Campaign and Promotional Planning",
    body: "Planning and executing promotional campaigns across pricing, catalogue, and web, working across multiple departments to get things live and running smoothly.",
  },
  {
    title: "Digital Marketing and Audience Growth",
    body: "Building social media audiences from zero using organic content strategy, trend research, and consistent execution across platforms including TikTok and Instagram.",
  },
];

const history = [
  {
    company: "Tafelberg Furnishers (Pty) Ltd",
    role: "Senior E-Commerce Copywriter and Website Administrator",
    period: "March 2025 to Present",
    body: "Led a team of 2 copywriters, grew the online product catalogue by over 30%, managed the retail website backend, coordinated with developers and suppliers, planned and executed promotional campaigns, and maintained catalogue accuracy across buying and marketing teams.",
  },
  {
    company: "Beds On Line",
    role: "E-Commerce Copywriter and Social Media Manager",
    period: "February 2024 to February 2025",
    body: "Created and updated product listings, managed social media across TikTok, Instagram, and Facebook, sourced product data from vendors, handled image editing and uploading, and liaised with buying and marketing teams on pricing and promotions.",
  },
  {
    company: "Self-Employed",
    role: "Social Media Entrepreneur and Digital Marketer",
    period: "2021 to 2023",
    body: "Grew multiple social media theme pages from zero, reaching over 500 000 followers and 50 million views across different niches. Created and sold digital products including eBooks and a habit tracker. Shipped physical merchandise internationally. Built and sold social media pages to buyers in the USA and elsewhere. Managed end-to-end fulfilment independently.",
  },
];

function WorkPage() {
  return (
    <div>
      <section className="container-page pt-24 md:pt-32 pb-16">
        <p className="text-sm uppercase tracking-widest text-accent">Work</p>
        <h1 className="mt-6 text-5xl md:text-7xl leading-[0.95] text-balance max-w-4xl">
          Places I have worked, roles I have held, and the things I built along the way.
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-ink-soft text-pretty">
          A short list of the kind of work I take on, and a real archive of
          past roles. Engagements range from one-off campaigns to long-term
          positions.
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
          Work history
        </h2>
        <div className="space-y-6">
          {history.map((h, i) => (
            <Reveal
              key={h.company}
              variant="left"
              delay={i * 120}
              className="rounded-2xl border border-rule bg-surface/50 backdrop-blur-sm p-6 md:p-8 lift"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 md:gap-6 mb-4">
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl text-foreground">{h.company}</h3>
                  <p className="mt-1 text-accent text-sm uppercase tracking-widest">{h.role}</p>
                </div>
                <span className="inline-flex items-center rounded-full border border-rule px-3 py-1 text-xs text-ink-soft whitespace-nowrap self-start">
                  {h.period}
                </span>
              </div>
              <p className="text-ink-soft text-pretty leading-relaxed">{h.body}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
