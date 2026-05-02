import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/ventures")({
  head: () => ({
    meta: [
      { title: "Digital Ventures — Damian Paries" },
      {
        name: "description",
        content: "Case studies of digital ventures built and exited by Damian Paries — fan pages, merchandise brands, digital products, and e-commerce.",
      },
    ],
  }),
  component: VenturesPage,
});

interface Venture {
  tag: string;
  heading: string;
  description: string;
  stats: string[];
  images: { src: string; label: string }[];
}

const ventures: Venture[] = [
  {
    tag: "Instagram & TikTok · December 2020 — 2022",
    heading: "NLE Choppa — Fan Page Growth & Exit",
    description:
      "Starting in December 2020, I built an NLE Choppa fan page on Instagram from zero to 77,500 followers — averaging between 4,000 and 10,000 new followers per month. During this period I received inbound paid promotion requests from jewelry brands, shoe companies, and music industry artists across the United States. The page was acquired directly by NLE Choppa to use for one of his artists. In parallel, I launched an NLE Choppa TikTok page in November 2021 which grew to over 200,000 followers and 1.7 million likes in approximately six months, accumulating tens of millions of views. The TikTok account was sold to a US jewelry company.",
    stats: [
      "77,500 Instagram followers at peak",
      "200,000+ TikTok followers in 6 months",
      "1.7M TikTok likes",
      "Tens of millions of views",
      "Sold to NLE Choppa directly",
      "Inbound paid brand deals secured",
    ],
    images: [
      { src: "", label: "Day 1 — 497 followers" },
      { src: "", label: "Peak — 77,500 followers" },
      { src: "", label: "TikTok — 200,300 followers" },
      { src: "", label: "TikTok growth curve — 215,918 followers" },
      { src: "", label: "Inbound collaboration request from RAPTV (7.9M followers)" },
      { src: "", label: "Inbound brand enquiry from AXE (verified brand, 216K followers)" },
    ],
  },
  {
    tag: "Merchandise Brand & Fan Pages · March 2022 — 2023",
    heading: "Pogue Life — Fan Pages, Merchandise & International Sales",
    description:
      "In March 2022 I acquired two Outer Banks fan pages and grew them into a combined audience exceeding 100,000 followers, achieving 3.9 million accounts reached in a single month at peak with 454,000 accounts engaged. One page was acquired for $350 USD at 61,500 followers and scaled to over 100,000 before being sold privately. Alongside the content operation, I launched Pogue Life — a fan merchandise brand designed and operated independently on Creator Spring. The product range included hoodies, t-shirts, slides, mugs, water bottles and accessories — all designed in-house and sold to customers internationally with orders fulfilled to buyers across the USA and beyond. The Outer Banks production team reached out directly during this period.",
    stats: [
      "100,000+ combined followers at peak",
      "3.9M accounts reached in 30 days",
      "454K accounts engaged",
      "Acquired at 61,500 followers for $350 — scaled to 100K+",
      "International merchandise sales",
      "Inbound outreach from Outer Banks production",
    ],
    images: [
      { src: "", label: "White hoodie lifestyle" },
      { src: "", label: "Pink hoodie lifestyle" },
      { src: "", label: "Black OBX 3 tee" },
      { src: "", label: "Blue hoodie product mockup" },
      { src: "", label: "P4L mug" },
      { src: "", label: "OBX slides product" },
      { src: "", label: "100,000 followers milestone" },
      { src: "", label: "3.9M reached, 454K engaged" },
      { src: "", label: '"I got the hoodie I love it so much"' },
      { src: "", label: "Acquired at 61K followers, scaled to 100K+" },
    ],
  },
  {
    tag: "Personal Brand & Digital Products · 2023 — November 2024",
    heading: "Master Hustle — Brand, Content & Digital Products",
    description:
      "Master Hustle was a money, wealth and mindset brand built entirely from scratch across Instagram, TikTok, and YouTube. Every piece of content was scripted, edited, and published independently. The Instagram page grew to 30,000 followers with individual reels reaching 3.1 million plays and 2.97 million accounts on a single video. Monthly reach peaked at 4.5 million accounts with 489,000 engaged. The TikTok account reached 6,455 followers with 623,000 video views, 92,000 likes, and 3,451 shares in a single 28-day period. The YouTube channel accumulated 259,000 views and 999 subscribers. Two digital products were created and sold globally through Gumroad: Mind Power, a self-development ebook that sold over 2,000 copies worldwide, and a Notion-based Habit Tracker. The entire brand was sold privately to a US buyer in November 2024.",
    stats: [
      "2,000+ ebook copies sold globally",
      "3.1M plays on a single reel",
      "2.97M accounts reached from one video",
      "4.5M Instagram accounts reached in 30 days",
      "623K TikTok video views in 28 days",
      "259K YouTube views",
      "Sold to US buyer November 2024",
    ],
    images: [
      { src: "", label: "Mind Power — ebook cover" },
      { src: "", label: "Mind Power — 3D mockup" },
      { src: "", label: "Notion Habit Tracker" },
      { src: "", label: "3.1M plays, 207K likes, 2.97M reach" },
      { src: "", label: "4.5M reached, 489K engaged" },
      { src: "", label: "623K video views, 92K likes, 3,451 shares" },
      { src: "", label: "Master Hustle — 30K followers" },
      { src: "", label: "YouTube — 175,500 views" },
    ],
  },
  {
    tag: "E-Commerce Brand · July — November 2025",
    heading: "Vault XI — Soccer Jersey E-Commerce Brand",
    description:
      "Vault XI was a South African soccer jersey e-commerce brand launched in July 2025. I built the entire brand independently — including the logo, tagline, business cards, and website. Operating under the tagline \"Where Legacy Meets Luxury\", the brand sourced and fulfilled soccer jersey orders across South Africa before closing in November 2025.",
    stats: [
      "Full brand built independently",
      "Logo, business cards and website designed in-house",
      "Orders fulfilled across South Africa",
      "July — November 2025",
    ],
    images: [
      { src: "", label: "Vault XI — business card with QR code" },
      { src: "", label: "Vault XI — mission statement" },
    ],
  },
];

function VenturesPage() {
  return (
    <div>
      <section className="container-page pt-20 md:pt-28 pb-16">
        <Reveal>
          <p className="section-label">Ventures</p>
          <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl max-w-3xl">Digital Ventures</h1>
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-6 max-w-2xl text-base md:text-lg text-ink-soft leading-relaxed">
            Before my corporate career, I built and exited multiple digital
            properties — learning audience growth, monetisation, and operations
            entirely by doing. Each venture below is a real case study with real
            numbers.
          </p>
        </Reveal>
      </section>

      <section className="container-page pb-20 space-y-16">
        {ventures.map((v, vi) => (
          <Reveal key={vi} delay={vi * 80}>
            <article className="border border-rule rounded-lg overflow-hidden">
              {/* Header */}
              <div className="p-6 md:p-8 border-b border-rule">
                <p className="section-label">{v.tag}</p>
                <h2 className="mt-3 font-serif text-2xl md:text-3xl">{v.heading}</h2>
              </div>

              {/* Body */}
              <div className="p-6 md:p-8">
                <p className="text-sm md:text-base text-ink-soft leading-relaxed max-w-3xl">
                  {v.description}
                </p>

                {/* Stats */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {v.stats.map((s) => (
                    <span
                      key={s}
                      className="inline-block rounded-full bg-surface px-3 py-1.5 text-xs font-medium text-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* Image Gallery Placeholder */}
                {v.images.length > 0 && (
                  <div className="mt-8">
                    <p className="text-xs uppercase tracking-wider text-ink-soft mb-3">Evidence & Screenshots</p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {v.images.map((img, ii) => (
                        <div
                          key={ii}
                          className="aspect-[4/3] rounded bg-surface border border-rule flex items-end p-3"
                        >
                          <p className="text-[11px] text-ink-soft leading-tight">{img.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </section>
    </div>
  );
}
