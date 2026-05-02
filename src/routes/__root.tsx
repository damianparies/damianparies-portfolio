import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center container-page">
      <div className="max-w-md text-center">
        <p className="section-label">Error 404</p>
        <h1 className="mt-4 text-5xl md:text-6xl">Page not found.</h1>
        <p className="mt-4 text-ink-soft">
          The page you're looking for doesn't exist or has moved.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-85"
          >
            Back home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Damian Paries — Marketing Strategist & Growth Operator" },
      {
        name: "description",
        content:
          "Portfolio of Damian Paries — marketing strategist, growth operator, and digital builder. Senior E-Commerce Copywriter at Tafelberg Furnishers.",
      },
      { name: "author", content: "Damian Paries" },
      { property: "og:title", content: "Damian Paries — Marketing Strategist & Growth Operator" },
      {
        property: "og:description",
        content: "I build audiences, brands, and the systems behind them.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 pt-14">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
