import { createFileRoute } from "@tanstack/react-router";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { ProjectPageLayout } from "@/components/ProjectPageLayout";

export const Route = createFileRoute("/projects/social-media-entrepreneur")({
  head: () => ({
    meta: [
      { title: "Social Media Entrepreneur — Damian Paries" },
      { name: "description", content: "Self-Employed Social Media Entrepreneur and Digital Marketer." },
    ],
  }),
  component: SocialPage,
});

const data = [
  { y: "2021", v: 0 },
  { y: "2022", v: 75000 },
  { y: "2023", v: 300000 },
  { y: "End 2023", v: 500000 },
];

function TipBox({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-lg border border-rule bg-background/95 backdrop-blur px-3 py-2 text-xs shadow-lg">
      <p className="text-ink-soft">{label}</p>
      <p className="text-foreground font-serif text-base">{payload[0].value.toLocaleString()} followers</p>
    </div>
  );
}

function Chart() {
  return (
    <div>
      <p className="text-xs uppercase tracking-widest text-accent mb-2">Cumulative Audience</p>
      <p className="font-serif text-xl mb-6">Followers grown across niches</p>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="smFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="oklch(0.85 0.17 90)" stopOpacity={0.6} />
                <stop offset="100%" stopColor="oklch(0.85 0.17 90)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="oklch(1 0 0 / 0.07)" vertical={false} />
            <XAxis dataKey="y" stroke="oklch(0.72 0.008 270)" tick={{ fontSize: 12 }} tickLine={false} axisLine={{ stroke: "oklch(1 0 0 / 0.1)" }} />
            <YAxis stroke="oklch(0.72 0.008 270)" tick={{ fontSize: 11 }} tickLine={false} axisLine={false} tickFormatter={(v: number) => v >= 1000 ? `${v / 1000}k` : `${v}`} />
            <Tooltip content={<TipBox />} cursor={{ stroke: "oklch(0.85 0.17 90 / 0.3)" }} />
            <Area type="monotone" dataKey="v" stroke="oklch(0.85 0.17 90)" strokeWidth={2.5} fill="url(#smFill)" animationDuration={2500} animationEasing="ease-out" dot={{ r: 4, fill: "oklch(0.85 0.17 90)", stroke: "oklch(0.16 0.005 270)", strokeWidth: 2 }} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

function SocialPage() {
  return (
    <ProjectPageLayout
      title="Social Media & Digital Marketing"
      hero="Self-Employed Social Media Entrepreneur and Digital Marketer."
      whatIDid={[
        "Grew multiple social media theme pages from zero to tens of thousands of followers across Instagram and TikTok while remaining completely faceless.",
        "Scaled one TikTok page from 0 to 200 000 followers in 8 months and sold it to a jewellery company in the USA.",
        "Generated over 500 000 total followers and approximately 50 million views annually across different niches.",
        "Created and sold digital products including eBooks and a habit tracker with zero inventory cost.",
        "Shipped physical merchandise to customers across multiple countries, managing end-to-end fulfilment independently.",
        "Built email lists and executed campaigns driving consistent traffic and repeat sales.",
      ]}
      skills={["Audience Growth", "Content Strategy", "Digital Product Creation", "E-Commerce Fulfilment", "Email Marketing", "Trend Research", "Asset Sales"]}
      tools={["TikTok", "Instagram", "Gumroad", "Teespring", "Shopify", "Canva", "CapCut", "Beacons", "Bitly"]}
      chart={<Chart />}
    />
  );
}
