import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Cell,
} from "recharts";
import CountUp from "react-countup";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "@/components/Reveal";

const chartData = [
  { year: "2021", value: 0 },
  { year: "2022", value: 75000 },
  { year: "2023", value: 500000 },
  { year: "2024", value: 500000 },
  { year: "2025", value: 500000 },
];

const stats = [
  { value: 50, suffix: "M+", label: "Views Generated" },
  { value: 500, suffix: "k+", label: "Followers Built" },
  { value: 3, suffix: "+", label: "Roles Held" },
  { value: 30, suffix: "%+", label: "Catalogue Growth" },
];

function formatYAxis(v: number) {
  if (v >= 1_000_000) return `${v / 1_000_000}M`;
  if (v >= 1_000) return `${v / 1_000}k`;
  return String(v);
}

function ChartTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-lg border border-rule bg-background/95 backdrop-blur px-3 py-2 text-xs shadow-lg">
      <p className="text-ink-soft">{label}</p>
      <p className="text-foreground font-serif text-base">
        {payload[0].value.toLocaleString()} followers
      </p>
    </div>
  );
}

export function StatsChart() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="container-page py-20" ref={ref}>
      <Reveal variant="up">
        <div className="rounded-2xl border border-rule bg-surface/60 backdrop-blur-sm overflow-hidden">
          <div className="grid md:grid-cols-[1fr_1.3fr] gap-0">
            {/* Left: Text */}
            <div className="p-8 md:p-10 flex flex-col justify-center border-b md:border-b-0 md:border-r border-rule">
              <p className="text-xs uppercase tracking-widest text-accent mb-4">Growth Metrics</p>
              <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-4">
                Building audiences and scaling brands.
              </h2>
              <p className="text-ink-soft text-sm leading-relaxed">
                From zero to 500k+ followers and 50M+ views across multiple niches.
                Real growth, organic reach, measurable results.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-3 mt-8">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-xl border border-rule/60 bg-background/40 p-4">
                    <p className="font-serif text-2xl md:text-3xl text-foreground">
                      {inView ? (
                        <CountUp
                          end={stat.value}
                          duration={1.5}
                          easingFn={(t, b, c, d) => {
                            // easeOutCubic
                            const tn = t / d - 1;
                            return c * (tn * tn * tn + 1) + b;
                          }}
                        />
                      ) : (
                        0
                      )}
                      <span>{stat.suffix}</span>
                    </p>
                    <p className="text-xs text-ink-soft mt-1 uppercase tracking-wider">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Chart */}
            <div className="relative p-6 md:p-8">
              <p className="text-xs uppercase tracking-widest text-ink-soft mb-2">Audience growth</p>
              <p className="font-serif text-xl text-foreground mb-6">2021 to 2025</p>
              <div className="h-64 md:h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="barFill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="oklch(0.85 0.17 90)" stopOpacity={0.95} />
                        <stop offset="100%" stopColor="oklch(0.85 0.17 90)" stopOpacity={0.35} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="oklch(1 0 0 / 0.08)" vertical={false} />
                    <XAxis
                      dataKey="year"
                      stroke="oklch(0.72 0.008 270)"
                      tick={{ fontSize: 12 }}
                      tickLine={false}
                      axisLine={{ stroke: "oklch(1 0 0 / 0.1)" }}
                    />
                    <YAxis
                      stroke="oklch(0.72 0.008 270)"
                      tick={{ fontSize: 11 }}
                      tickFormatter={formatYAxis}
                      tickLine={false}
                      axisLine={false}
                    />
                    <Tooltip content={<ChartTooltip />} cursor={{ fill: "oklch(1 0 0 / 0.04)" }} />
                    <Bar
                      dataKey="value"
                      fill="url(#barFill)"
                      radius={[8, 8, 0, 0]}
                      animationDuration={1600}
                      animationEasing="ease-out"
                    >
                      {chartData.map((_, i) => (
                        <Cell key={i} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
