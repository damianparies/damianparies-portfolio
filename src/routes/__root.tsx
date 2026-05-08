import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { AnimatedNavbar } from "@/components/AnimatedNavbar";
import { SiteFooter } from "@/components/SiteFooter";
import { ScrollProgress } from "@/components/ScrollProgress";
import { CustomCursor } from "@/components/CustomCursor";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center container-page">
      <div className="max-w-md text-center">
        <p className="text-accent text-sm uppercase tracking-widest">Error 404</p>
        <h1 className="mt-4 text-6xl md:text-7xl">Lost in the archive.</h1>
        <p className="mt-4 text-ink-soft">
          The page you're looking for doesn't exist or has moved.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm text-primary-foreground transition-opacity hover:opacity-90"
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
      { title: "Damian Paries - Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Damian Paries — building social media brands, growing audiences, and shipping work for companies.",
      },
      { name: "author", content: "Damian Paries" },
      { property: "og:title", content: "Damian Paries - Portfolio" },
      {
        property: "og:description",
        content:
          "A selected archive of theme pages, audiences grown, and client work.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Damian Paries - Portfolio" },
      { name: "description", content: "Showcase Studio is a modern, responsive portfolio website for displaying creative projects and professional work." },
      { property: "og:description", content: "Showcase Studio is a modern, responsive portfolio website for displaying creative projects and professional work." },
      { name: "twitter:description", content: "Showcase Studio is a modern, responsive portfolio website for displaying creative projects and professional work." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/86528108-e421-40db-ba74-a788ed9c9467/id-preview-5538faed--348d5014-e44d-41c2-b01f-5d98e6260236.lovable.app-1777363512516.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/86528108-e421-40db-ba74-a788ed9c9467/id-preview-5538faed--348d5014-e44d-41c2-b01f-5d98e6260236.lovable.app-1777363512516.png" },
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
      <ScrollProgress />
      <CustomCursor />
      <AnimatedNavbar />
      <main className="flex-1 pt-16">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
