import { createFileRoute } from "@tanstack/react-router";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { ProjectPageLayout } from "@/components/ProjectPageLayout";

export const Route = createFileRoute("/projects/tafelberg-furnishers")({
  head: () => ({
    meta: [
      { title: "Tafelberg Furnishers — Damian Paries" },
      { name: "description", content: "Senior E-Commerce Copywriter and Website Administrator at Tafelberg Furnishers." },
    ],
  }),
  component: TafelbergPage,
});

const data = [
  { month: "M1", products: 100 },
  { month: "M3", products: 200 },
  { month: "M6", products: 350 },
  { month: "M9", products: 450 },
  { month: "M12", products: 600 },
];

function TooltipBox({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-lg border border-rule bg-background/95 backdrop-blur px-3 py-2 text-xs shadow-lg">
      <p className="text-ink-soft">{label}</p>
      <p className="text-foreground font-serif text-base">{payload[0].value}+ products</p>
    </div>
  );
}

function Chart() {
  return (
    <div>
      <p className="text-xs uppercase tracking-widest text-accent mb-2">Catalogue Growth</p>
      <p className="font-serif text-xl mb-6">Products live across 12 months</p>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="tafFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="oklch(0.85 0.17 90)" stopOpacity={0.95} />
                <stop offset="100%" stopColor="oklch(0.85 0.17 90)" stopOpacity={0.3} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="oklch(1 0 0 / 0.07)" vertical={false} />
            <XAxis dataKey="month" stroke="oklch(0.72 0.008 270)" tick={{ fontSize: 12 }} tickLine={false} axisLine={{ stroke: "oklch(1 0 0 / 0.1)" }} />
            <YAxis stroke="oklch(0.72 0.008 270)" tick={{ fontSize: 11 }} tickLine={false} axisLine={false} />
            <Tooltip content={<TooltipBox />} cursor={{ fill: "oklch(1 0 0 / 0.04)" }} />
            <Bar dataKey="products" fill="url(#tafFill)" radius={[8, 8, 0, 0]} animationDuration={1800} animationEasing="ease-out" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

function TafelbergPage() {
  return (
    <ProjectPageLayout
      title="Tafelberg Furnishers"
      hero="Senior E-Commerce Copywriter and Website Administrator."
      whatIDid={[
        "Led a team of 2 copywriters, setting daily priorities and managing workflow across the catalogue.",
        "Grew the online product catalogue by over 30 percent through consistent listing creation and updates.",
        "Managed the retail website backend, identified and logged site errors, and liaised with external developers.",
        "Planned and executed promotional campaigns, coordinating pricing updates across buying and marketing teams.",
        "Created product artwork, promotional badges, and blog content to support SEO and sales performance.",
      ]}
      skills={["Copywriting", "Team Leadership", "Website Administration", "SEO", "Promotional Planning", "Workflow Coordination", "Vendor Liaison"]}
      tools={["WordPress", "MS Excel", "Canva", "Notion", "Grammarly", "Loom", "MS Teams"]}
      chart={<Chart />}
    />
  );
}
