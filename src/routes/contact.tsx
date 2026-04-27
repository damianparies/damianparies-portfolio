import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, Mail } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Damian Paries" },
      {
        name: "description",
        content:
          "Get in touch with Damian Paries for partnerships, growth work, or just to say hello.",
      },
      { property: "og:title", content: "Contact — Damian Paries" },
      {
        property: "og:description",
        content: "Reach out about partnerships, projects, or collaboration.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div>
      <section className="container-page pt-20 md:pt-28 pb-16">
        <p className="text-sm uppercase tracking-widest text-accent">Contact</p>
        <h1 className="mt-6 text-5xl md:text-7xl leading-[0.95] text-balance max-w-4xl">
          Let's build something worth building.
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-ink-soft text-pretty">
          Whether you're a brand looking for distribution, a founder building
          something new, or a creator who wants to compare notes — I read every
          message.
        </p>
      </section>

      <section className="container-page pb-24 grid md:grid-cols-[1.2fr_1fr] gap-12 md:gap-20 border-t border-rule pt-16">
        {/* Form */}
        <div>
          {submitted ? (
            <div className="rounded-lg border border-rule bg-surface p-10">
              <h2 className="font-serif text-3xl">Thanks — message received.</h2>
              <p className="mt-3 text-ink-soft">
                I'll get back to you within a few days. In the meantime, feel
                free to follow along on social.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <Field label="Your name" name="name" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Company (optional)" name="company" />
              <div>
                <label className="block text-xs uppercase tracking-widest text-ink-soft mb-2">
                  How can I help?
                </label>
                <textarea
                  required
                  rows={6}
                  name="message"
                  className="w-full bg-transparent border-b border-rule py-3 focus:border-foreground focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about the project…"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground transition-opacity hover:opacity-90"
              >
                Send message <ArrowUpRight className="size-4" />
              </button>
            </form>
          )}
        </div>

        {/* Direct */}
        <div className="space-y-10">
          <div>
            <p className="text-xs uppercase tracking-widest text-ink-soft mb-3">
              Or email directly
            </p>
            <a
              href="mailto:hello@damianparies.com"
              className="inline-flex items-center gap-2 font-serif text-2xl md:text-3xl link-underline"
            >
              <Mail className="size-5" />
              hello@damianparies.com
            </a>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-ink-soft mb-3">
              Find me on
            </p>
            <ul className="space-y-2 text-lg">
              <li><a href="#" className="link-underline">Instagram →</a></li>
              <li><a href="#" className="link-underline">TikTok →</a></li>
              <li><a href="#" className="link-underline">X / Twitter →</a></li>
              <li><a href="#" className="link-underline">LinkedIn →</a></li>
            </ul>
          </div>

          <div className="pt-6 border-t border-rule text-sm text-ink-soft">
            Currently based remote · Open to select projects in 2025.
          </div>
        </div>
      </section>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-widest text-ink-soft mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full bg-transparent border-b border-rule py-3 focus:border-foreground focus:outline-none transition-colors"
      />
    </div>
  );
}
