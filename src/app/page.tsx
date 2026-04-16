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
                  viewBox="0 0 468 222.5"
                  className="h-9 w-auto"
                  aria-label="Stripe"
                >
                  <path
                    fill="currentColor"
                    className="text-text-muted"
                    d="M414 113.4c0-25.6-12.4-45.8-36.1-45.8-23.8 0-38.2 20.2-38.2 45.6 0 30.1 17 45.3 41.4 45.3 11.9 0 20.9-2.7 27.7-6.5v-20c-6.8 3.4-14.6 5.5-24.5 5.5-9.7 0-18.3-3.4-19.4-15.2h48.9c0-1.3.2-6.5.2-8.9zm-49.4-9.5c0-11.3 6.9-16 13.2-16 6.1 0 12.6 4.7 12.6 16h-25.8zM301.1 67.6c-9.8 0-16.1 4.6-19.6 7.8l-1.3-6.2h-22v116.6l25-5.3.1-28.3c3.6 2.6 8.9 6.3 17.7 6.3 17.9 0 34.2-14.4 34.2-46.1-.1-29-16.6-44.8-34.1-44.8zm-6 68.9c-5.9 0-9.4-2.1-11.8-4.7l-.1-37.1c2.6-2.9 6.2-4.9 11.9-4.9 9.1 0 15.4 10.2 15.4 23.3 0 13.4-6.2 23.4-15.4 23.4zM223.8 61.7l25.1-5.4V36l-25.1 5.3zM223.8 69.3h25.1v87.5h-25.1zM196.9 76.7l-1.6-7.4h-21.6v87.5h25V97.5c5.9-7.7 15.9-6.3 19-5.2v-23c-3.2-1.2-14.9-3.4-20.8 7.4zM146.9 47.6l-24.4 5.2-.1 80.1c0 14.8 11.1 25.7 25.9 25.7 8.2 0 14.2-1.5 17.5-3.3V135c-3.2 1.3-19 5.9-19-8.9V90.6h19V69.3h-19l.1-21.7zM79.3 94.7c0-3.9 3.2-5.4 8.5-5.4 7.6 0 17.2 2.3 24.8 6.4V72.2c-8.3-3.3-16.5-4.6-24.8-4.6C67.5 67.6 52 78.8 52 97.4c0 28.4 39.1 23.9 39.1 36.2 0 4.6-4 6.1-9.6 6.1-8.3 0-18.9-3.4-27.3-8v23.8c9.3 4 18.7 5.7 27.3 5.7 20.8 0 35.1-10.3 35.1-28.2-.1-30.8-39.3-25.3-39.3-37.3z"
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
