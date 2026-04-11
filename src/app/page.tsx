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
