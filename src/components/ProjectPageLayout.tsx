import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";

export interface ProjectPageProps {
  title: string;
  hero: string;
  whatIDid: string[];
  skills: string[];
  tools: string[];
  chart: ReactNode;
  galleryCount?: number;
}

export function ProjectPageLayout({
  title, hero, whatIDid, skills, tools, chart, galleryCount = 4,
}: ProjectPageProps) {
  return (
    <div>
      <section className="container-page pt-24 md:pt-32 pb-12">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm text-ink-soft hover:text-foreground transition-colors"
        >
          <ArrowLeft className="size-4" /> Back to Projects
        </Link>
        <p className="mt-8 text-sm uppercase tracking-widest text-accent">Project</p>
        <h1 className="mt-4 text-5xl md:text-7xl font-serif leading-[0.95] text-balance max-w-4xl">
          {title}
        </h1>
        <p className="mt-6 text-lg md:text-xl text-ink-soft max-w-2xl text-pretty">
          {hero}
        </p>
      </section>

      <section className="container-page py-12 grid gap-12 md:grid-cols-2">
        <Reveal variant="left">
          <div className="rounded-2xl border border-rule bg-surface/40 p-8">
            <p className="text-xs uppercase tracking-widest text-accent mb-4">What I Did</p>
            <ul className="space-y-3">
              {whatIDid.map((item, i) => (
                <li key={i} className="flex gap-3 text-ink-soft leading-relaxed">
                  <span className="text-accent mt-1.5 size-1.5 rounded-full bg-accent shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal variant="right" className="space-y-8">
          <div>
            <p className="text-xs uppercase tracking-widest text-accent mb-3">Skills Used</p>
            <div className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <span key={s} className="text-xs px-3 py-1.5 rounded-full border border-rule bg-surface/40 text-foreground">
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-accent mb-3">Platforms & Tools</p>
            <div className="flex flex-wrap gap-2">
              {tools.map((t) => (
                <span key={t} className="text-xs px-3 py-1.5 rounded-full border border-accent/30 bg-accent/5 text-accent">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="container-page py-12">
        <Reveal variant="up">
          <div className="rounded-2xl border border-rule bg-surface/40 p-6 md:p-8">
            {chart}
          </div>
        </Reveal>
      </section>

      <section className="container-page py-12 pb-24">
        <Reveal>
          <p className="text-xs uppercase tracking-widest text-accent mb-6">Gallery</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {Array.from({ length: galleryCount }).map((_, i) => (
              <div
                key={i}
                className="aspect-[4/5] rounded-xl border border-dashed border-rule bg-surface/30 flex items-center justify-center"
              >
                <span className="text-xs text-ink-soft uppercase tracking-widest">
                  Image coming soon
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>
    </div>
  );
}
