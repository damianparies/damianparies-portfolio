import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { BrandMarquee } from "@/components/BrandMarquee";
import { StatsChart } from "@/components/StatsChart";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Damian Paries — Builder, Operator, Creator" },
      {
        name: "description",
        content:
          "I build social media brands, grow audiences, and partner with companies on digital work.",
      },
      { property: "og:title", content: "Damian Paries — Builder, Operator, Creator" },
      {
        property: "og:description",
        content:
          "A selected archive of theme pages, audiences grown, and client work.",
      },
    ],
  }),
  component: Index,
});

const featured = [
  {
    year: "2025",
    title: "Tafelberg Furnishers",
    role: "Senior E-Commerce Copywriter and Web Administrator",
    href: "/work",
  },
  {
    year: "2024",
    title: "Beds On Line",
    role: "E-Commerce Copywriter and Social Media Manager",
    href: "/work",
  },
  {
    year: "2021–2023",
    title: "Self-Employed",
    role: "Social Media Entrepreneur and Digital Marketer",
    href: "/projects",
  },
];

const phoneHighlights = [
  { label: "Online Catalogue Growth", value: "30%+" },
  { label: "Social Followers Built", value: "500k+" },
  { label: "Total Views Generated", value: "50M+" },
  { label: "Brands Partnered With", value: "30+" },
  { label: "Theme Pages Built", value: "20+" },
];

function Index() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["audiences", "brands", "content", "systems", "growth"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTitleNumber(titleNumber === titles.length - 1 ? 0 : titleNumber + 1);
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div>
      {/* HERO */}
      <section className="container-page pt-28 md:pt-40 pb-20 md:pb-32">
        <div className="flex flex-col items-center text-center gap-8">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-rule bg-surface/60 backdrop-blur-sm px-4 py-1.5 text-xs text-ink-soft uppercase tracking-widest">
              Builder, Operator, Creator
            </span>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="text-5xl sm:text-6xl md:text-8xl leading-[0.95] font-serif tracking-tight fade-in-up">
              Building
              <span className="relative inline-flex w-full justify-center overflow-hidden text-accent md:pb-4 md:pt-1" style={{ height: "1.2em" }}>
                <AnimatePresence mode="wait">
                  {titles.map((title, index) =>
                    index === titleNumber ? (
                      <motion.span
                        key={title}
                        className="absolute font-serif italic"
                        initial={{ opacity: 0, y: -40 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 40 }}
                        transition={{ type: "spring", stiffness: 100, damping: 15 }}
                      >
                        {title}
                      </motion.span>
                    ) : null
                  )}
                </AnimatePresence>
              </span>
              <br className="hidden md:block" />
              from scratch.
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-ink-soft text-pretty fade-in-up">
              I'm Damian Paries, a Senior E-Commerce Copywriter and Website Administrator based in Cape Town. I lead catalogue operations at Tafelberg Furnishers, manage a team of copywriters, and keep the digital side of a growing retail brand running cleanly. Before stepping into this role, I spent several years building social media audiences entirely from scratch, reaching over 500 000 followers and 50 million views across different niches.
            </p>
          </div>

          <div className="flex gap-4 flex-wrap justify-center fade-in-up">
            <Link to="/work">
              <LiquidButton size="xl">
                See the work <ArrowUpRight className="size-4" />
              </LiquidButton>
            </Link>
            <Link to="/contact">
              <LiquidButton variant="outline" size="xl">
                Get in touch
              </LiquidButton>
            </Link>
          </div>
        </div>
      </section>

      {/* CURRENTLY */}
      <section className="container-page pb-20">
        <Reveal variant="up">
          <div className="rounded-2xl border border-rule bg-surface/60 backdrop-blur-sm p-8 md:p-10">
            <p className="text-xs uppercase tracking-widest text-accent mb-6">Currently</p>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <p className="text-xs text-ink-soft uppercase tracking-wider">Role</p>
                <p className="mt-1 text-foreground text-sm">Senior E-Commerce Copywriter and Web Administrator</p>
              </div>
              <div>
                <p className="text-xs text-ink-soft uppercase tracking-wider">Company</p>
                <p className="mt-1 text-foreground text-sm">Tafelberg Furnishers (Pty) Ltd</p>
              </div>
              <div>
                <p className="text-xs text-ink-soft uppercase tracking-wider">Studying</p>
                <p className="mt-1 text-foreground text-sm">Bachelor of Business Administration in Marketing Management, Stadio Higher Education</p>
              </div>
              <div>
                <p className="text-xs text-ink-soft uppercase tracking-wider">Based in</p>
                <p className="mt-1 text-foreground text-sm">Cape Town, South Africa</p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* BRAND MARQUEE */}
      <BrandMarquee />

      {/* STATS CHART */}
      <StatsChart />

      {/* FEATURED INDEX */}
      <section className="container-page py-20 md:py-32">
        <Reveal className="flex items-end justify-between mb-10">
          <div>
            <p className="text-sm uppercase tracking-widest text-ink-soft">
              Selected
            </p>
            <h2 className="section-header mt-2 text-4xl md:text-5xl">A working index.</h2>
          </div>
          <Link to="/projects" className="hidden md:inline-flex link-underline text-sm">
            View all →
          </Link>
        </Reveal>

        <ul>
          {featured.map((item, i) => (
            <Reveal as="li" key={i} variant="left" delay={i * 120}>
              <Link
                to={item.href}
                className="group grid grid-cols-[auto_1fr_auto] md:grid-cols-[80px_1fr_1fr_auto] gap-4 md:gap-8 items-center py-6 border-t border-rule transition-colors hover:bg-surface px-2 -mx-2 rounded-md"
              >
                <span className="text-ink-soft text-sm">{item.year}</span>
                <span className="font-serif text-2xl md:text-3xl">{item.title}</span>
                <span className="hidden md:block text-ink-soft text-sm">{item.role}</span>
                <ArrowUpRight className="size-5 text-ink-soft transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
              </Link>
            </Reveal>
          ))}
          <li className="border-t border-rule" />
        </ul>

        {/* PHONE MOCKUP */}
        <div className="mt-16 flex justify-center">
          <Reveal variant="up" delay={200}>
            <div className="phone-mockup">
              <div className="phone-notch" />
              <div className="phone-screen">
                <p className="text-xs uppercase tracking-widest text-accent mb-4">Work Highlights</p>
                <div className="space-y-3">
                  {phoneHighlights.map((h) => (
                    <div key={h.label} className="flex items-center justify-between border-b border-rule/50 pb-2">
                      <span className="text-xs text-ink-soft">{h.label}</span>
                      <span className="font-serif text-lg text-foreground">{h.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* QUOTE */}
      <section className="container-page py-20 md:py-32 border-t border-rule">
        <Reveal as="blockquote" variant="blur" className="max-w-4xl">
          <p className="font-serif text-3xl md:text-5xl leading-tight text-balance">
            "Good copy moves product. Good systems move teams. I have spent the last few years doing both."
          </p>
          <footer className="mt-8 text-sm text-ink-soft uppercase tracking-widest">
            Damian Paries
          </footer>
        </Reveal>
      </section>
    </div>
  );
}
