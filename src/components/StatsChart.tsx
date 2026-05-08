import { AreaChart, Area, ResponsiveContainer } from "recharts";
import CountUp from "react-countup";
import { Reveal } from "@/components/Reveal";

const data = [
  { month: "Jan", value: 50 },
  { month: "Feb", value: 120 },
  { month: "Mar", value: 200 },
  { month: "Apr", value: 300 },
  { month: "May", value: 400 },
  { month: "Jun", value: 500 },
];

const stats = [
  { value: 50, suffix: "M+", label: "Views Generated" },
  { value: 500, suffix: "k+", label: "Followers Built" },
  { value: 3, suffix: "+", label: "Roles Held" },
  { value: 30, suffix: "%+", label: "Catalogue Growth" },
];

export function StatsChart() {
  return (
    <section className="container-page py-20">
      <Reveal variant="up">
        <div className="rounded-2xl border border-rule bg-surface/60 backdrop-blur-sm overflow-hidden">
          <div className="grid md:grid-cols-[1fr_1.2fr] gap-0">
            {/* Left: Text */}
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <p className="text-xs uppercase tracking-widest text-accent mb-4">Growth Metrics</p>
              <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-4">
                Building audiences and scaling brands.
              </h2>
              <p className="text-ink-soft text-sm leading-relaxed">
                From zero to 500k+ followers and 50M+ views across multiple niches.
                Real growth, organic reach, measurable results.
              </p>
            </div>

            {/* Right: Chart + Stats */}
            <div className="relative p-6 md:p-8">
              {/* Chart */}
              <div className="h-40 md:h-48 mb-6">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data}>
                    <defs>
                      <linearGradient id="statsGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="oklch(0.85 0.17 90)" stopOpacity={0.4} />
                        <stop offset="100%" stopColor="oklch(0.85 0.17 90)" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke="oklch(0.85 0.17 90)"
                      strokeWidth={2}
                      fill="url(#statsGradient)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-xl border border-rule/50 bg-background/50 p-4 text-center">
                    <p className="font-serif text-2xl md:text-3xl text-foreground">
                      <CountUp end={stat.value} duration={2.5} enableScrollSpy scrollSpyOnce />
                      {stat.suffix}
                    </p>
                    <p className="text-xs text-ink-soft mt-1 uppercase tracking-wider">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
