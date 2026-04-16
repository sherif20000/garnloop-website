import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";
import PortfolioCard from "@/components/PortfolioCard";
import { site } from "@/data/site";
import { companies } from "@/data/portfolio";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--accent-500)_0%,_transparent_70%)] opacity-[0.07]" />
        <div className="relative max-w-4xl mx-auto px-6 text-center py-20">
          <FadeIn>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-text-primary leading-tight">
              {site.tagline}
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="mt-6 text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
              {site.description}
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/portfolio">View Our Portfolio</Button>
              <Button href="/about" variant="outline">
                Learn More
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Backed By */}
      <section className="py-12 border-t border-dark-700/50">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn>
            <div className="flex flex-col items-center gap-4">
              <p className="text-xs text-text-muted uppercase tracking-widest">
                Backed by
              </p>
              <a
                href="https://stripe.com/startups"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-50 hover:opacity-80 transition-opacity"
              >
                <svg
                  viewBox="0 0 60 25"
                  className="h-8 w-auto"
                  fill="currentColor"
                  aria-label="Stripe"
                >
                  <path
                    d="M59.64 14.28h-8.06c.19 1.93 1.6 2.55 3.2 2.55 1.64 0 2.96-.37 4.05-.95v3.32a12.3 12.3 0 0 1-4.56.85c-4.05 0-6.83-2.11-6.83-7.24 0-4.17 2.36-7.36 6.3-7.36 3.87 0 5.95 3.02 5.95 7.05 0 .65-.05 1.2-.05 1.78zm-4.14-5.78c0-.72-.36-2.72-2.42-2.72-1.78 0-2.36 1.58-2.49 2.72h4.91zM1.24 5.67c2.08-.83 4.03-1.22 5.82-1.22 3.59 0 5.33 1.72 5.33 5.14v8.73H8.88l-.36-1.46c-1.14 1.14-2.56 1.78-4.29 1.78-2.8 0-4.46-1.78-4.46-4.34 0-3.25 2.42-4.63 7.05-5.33l.6-.09c0-1.2-.43-1.78-1.86-1.78-1.18 0-2.92.47-4.32 1.14V5.67zm6.42 7.93c-2.17.36-3.02 1.02-3.02 2.24 0 .9.55 1.46 1.4 1.46.96 0 1.86-.55 2.49-1.2l.06-.06V13.3l-.93.3zM16.8.45h4.14v17.87H16.8V.45zm18.42 5.1c3.93 0 6.3 3.25 6.3 7.24 0 4.17-2.55 7.36-6.42 7.36-1.5 0-2.62-.47-3.56-1.34l-.36 1.02h-3.5V.45h4.14v6.12c.9-.72 2.04-1.02 3.4-1.02zm-1.2 10.98c1.78 0 2.86-1.58 2.86-3.71 0-2.08-1.02-3.59-2.8-3.59-1.02 0-1.86.47-2.43 1.14v5.28c.6.55 1.34.88 2.37.88zM42.94.45h4.14v17.87h-4.14V.45zm13.73 5.1c-1.78 0-2.86.72-3.56 1.34v-1.02h-4.14v12.45h4.14v-8.37c.6-.72 1.4-1.14 2.43-1.14.84 0 1.4.36 1.4 1.78v7.73h4.14v-8.73c0-3.42-1.74-5.14-4.41-5.04z"
                    className="text-text-muted"
                  />
                </svg>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center text-text-primary mb-4">
              What We Do
            </h2>
            <p className="text-center text-text-secondary max-w-xl mx-auto mb-14">
              We operate at the intersection of discovery, creation, and growth.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Discover",
                desc: "We identify underserved digital needs with real users and untapped potential.",
                icon: (
                  <svg className="w-8 h-8 text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21m-3.75 3H21" />
                  </svg>
                ),
              },
              {
                title: "Build",
                desc: "We create lean tools that solve specific problems simply and profitably.",
                icon: (
                  <svg className="w-8 h-8 text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.049.58.025 1.193-.14 1.743" />
                  </svg>
                ),
              },
              {
                title: "Scale",
                desc: "We grow products through organic distribution, not paid acquisition.",
                icon: (
                  <svg className="w-8 h-8 text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div className="bg-dark-800 border border-dark-700 rounded-xl p-6 h-full hover:border-dark-600 transition-colors">
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 lg:py-28 bg-dark-950">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center text-text-primary mb-4">
              Our Products
            </h2>
            <p className="text-center text-text-secondary max-w-xl mx-auto mb-14">
              Products we&apos;ve built and launched under the GarnLoop umbrella.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {companies.map((company, i) => (
              <FadeIn key={company.slug} delay={i * 0.1}>
                <PortfolioCard company={company} />
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.2}>
            <div className="mt-10 text-center">
              <Button href="/portfolio" variant="outline">
                View Full Portfolio
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              Interested in what we&apos;re building?
            </h2>
            <p className="text-text-secondary mb-8">
              Whether you&apos;d like to partner with us, explore a collaboration, or just want
              to learn more — we&apos;d love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/contact">Get in Touch</Button>
              <Button href="/about" variant="outline">
                Learn More
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "GarnLoop, Inc.",
            url: "https://garnloop.com",
            email: "Hello@garnloop.com",
            description:
              "Digital company that builds and operates lean internet products.",
          }),
        }}
      />
    </>
  );
}
