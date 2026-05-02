import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Linkedin, Download } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { useState, type FormEvent } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Damian Paries" },
      {
        name: "description",
        content: "Get in touch with Damian Paries — email, phone, or LinkedIn. Open to marketing and e-commerce roles.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div>
      <section className="container-page pt-20 md:pt-28 pb-16">
        <Reveal>
          <p className="section-label">Contact</p>
          <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl max-w-3xl">Get In Touch</h1>
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-6 max-w-xl text-base text-ink-soft leading-relaxed">
            Open to marketing, e-commerce, and digital strategy roles — remote or Cape Town based.
          </p>
        </Reveal>
      </section>

      <section className="container-page pb-20 grid md:grid-cols-[1fr_1.2fr] gap-12 md:gap-16">
        {/* Contact Info */}
        <div>
          <Reveal>
            <div className="space-y-6">
              <ContactItem
                icon={<Mail className="size-4" />}
                label="Email"
                value="damianparies@gmail.com"
                href="mailto:damianparies@gmail.com"
              />
              <ContactItem
                icon={<Phone className="size-4" />}
                label="Phone"
                value="+27 66 207 7888"
                href="tel:+27662077888"
              />
              <ContactItem
                icon={<MapPin className="size-4" />}
                label="Location"
                value="Brackenfell, Cape Town, South Africa"
              />
              <ContactItem
                icon={<Linkedin className="size-4" />}
                label="LinkedIn"
                value="linkedin.com/in/damianparies"
                href="https://www.linkedin.com/in/damianparies/"
                external
              />
            </div>
          </Reveal>

          <Reveal delay={150}>
            <a
              href="#"
              className="mt-8 inline-flex items-center gap-2 rounded bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-85"
            >
              <Download className="size-4" />
              Download CV
            </a>
          </Reveal>
        </div>

        {/* Contact Form */}
        <Reveal delay={100}>
          <div className="border border-rule rounded-lg p-6 md:p-8">
            {submitted ? (
              <div className="py-12 text-center">
                <p className="font-serif text-2xl">Thank you.</p>
                <p className="mt-2 text-sm text-ink-soft">
                  I'll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1.5">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    className="w-full rounded border border-rule bg-transparent px-3 py-2 text-sm outline-none focus:border-navy focus:ring-1 focus:ring-navy transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1.5">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="w-full rounded border border-rule bg-transparent px-3 py-2 text-sm outline-none focus:border-navy focus:ring-1 focus:ring-navy transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    className="w-full rounded border border-rule bg-transparent px-3 py-2 text-sm outline-none focus:border-navy focus:ring-1 focus:ring-navy transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="rounded bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-85"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </section>
    </div>
  );
}

function ContactItem({
  icon,
  label,
  value,
  href,
  external,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  const content = (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 text-navy">{icon}</span>
      <div>
        <p className="text-xs uppercase tracking-wider text-ink-soft">{label}</p>
        <p className="mt-0.5 text-sm font-medium">{value}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="block hover:opacity-75 transition-opacity"
      >
        {content}
      </a>
    );
  }

  return content;
}
