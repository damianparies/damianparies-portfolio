import { createFileRoute } from "@tanstack/react-router";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { ProjectPageLayout } from "@/components/ProjectPageLayout";

export const Route = createFileRoute("/projects/beds-on-line")({
  head: () => ({
    meta: [
      { title: "Beds On Line — Damian Paries" },
      { name: "description", content: "E-Commerce Copywriter and Social Media Manager at Beds On Line." },
    ],
  }),
  component: BedsPage,
});

const data = [
  { m: "Jan", v: 1200 }, { m: "Feb", v: 1800 }, { m: "Mar", v: 2600 },
  { m: "Apr", v: 3400 }, { m: "May", v: 4500 }, { m: "Jun", v: 5800 },
  { m: "Jul", v: 7100 }, { m: "Aug", v: 8800 }, { m: "Sep", v: 10500 },
  { m: "Oct", v: 12700 }, { m: "Nov", v: 15200 }, { m: "Dec", v: 18000 },
];

function TipBox({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-lg border border-rule bg-background/95 backdrop-blur px-3 py-2 text-xs shadow-lg">
      <p className="text-ink-soft">{label}</p>
      <p className="text-foreground font-serif text-base">{payload[0].value.toLocaleString()} engagements</p>
    </div>
  );
}

function Chart() {
  return (
    <div>
      <p className="text-xs uppercase tracking-widest text-accent mb-2">Social Engagement</p>
      <p className="font-serif text-xl mb-6">Monthly engagement growth</p>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="bolFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="oklch(0.85 0.17 90)" stopOpacity={0.55} />
                <stop offset="100%" stopColor="oklch(0.85 0.17 90)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="oklch(1 0 0 / 0.07)" vertical={false} />
            <XAxis dataKey="m" stroke="oklch(0.72 0.008 270)" tick={{ fontSize: 12 }} tickLine={false} axisLine={{ stroke: "oklch(1 0 0 / 0.1)" }} />
            <YAxis stroke="oklch(0.72 0.008 270)" tick={{ fontSize: 11 }} tickLine={false} axisLine={false} tickFormatter={(v: number) => v >= 1000 ? `${v / 1000}k` : `${v}`} />
            <Tooltip content={<TipBox />} cursor={{ stroke: "oklch(0.85 0.17 90 / 0.3)" }} />
            <Area type="monotone" dataKey="v" stroke="oklch(0.85 0.17 90)" strokeWidth={2.5} fill="url(#bolFill)" animationDuration={2500} animationEasing="ease-out" dot={{ r: 3, fill: "oklch(0.85 0.17 90)" }} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

function BedsPage() {
  return (
    <ProjectPageLayout
      title="Beds On Line"
      hero="E-Commerce Copywriter and Social Media Manager."
      whatIDid={[
        "Created and updated product listings across the e-commerce platform.",
        "Managed social media accounts on TikTok, Instagram, and Facebook.",
        "Sourced product data and images from vendors and handled all image editing and uploading.",
        "Liaised with buying and marketing teams to implement price changes and promotions.",
        "Provided customer service assistance and maintained internal documentation.",
      ]}
      skills={["E-Commerce Copywriting", "Social Media Management", "Content Creation", "Vendor Sourcing", "Customer Service", "Promotional Planning"]}
      tools={["WordPress", "Canva", "CapCut", "TikTok", "Instagram", "Facebook", "Notion"]}
      chart={<Chart />}
    />
  );
}
