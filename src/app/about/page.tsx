import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about GarnLoop's mission, philosophy, and the team behind our portfolio.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-text-primary tracking-tight">
              About GarnLoop
            </h1>
            <p className="mt-4 text-lg text-text-secondary max-w-xl mx-auto">
              A digital company built for the long game.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-dark-950">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-2xl font-bold text-text-primary mb-6">Our Story</h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                GarnLoop was founded with a simple conviction: the internet is full of
                underserved needs hiding in plain sight. Most companies chase the same
                crowded markets with oversized teams and overengineered products. We take
                the opposite approach.
              </p>
              <p>
                We identify specific, overlooked digital problems — and build lean tools
                that solve them permanently. No bloated roadmaps. No vanity metrics. Just
                products that work, generate revenue, and compound over time.
              </p>
              <p>
                GarnLoop operates a portfolio of independent internet products across
                content distribution, wellness, and lifestyle verticals. Each product
                runs with minimal overhead and maximum focus, backed by shared
                infrastructure and strategic oversight.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-2xl font-bold text-text-primary text-center mb-14">
              Our Philosophy
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Lean by Design",
                desc: "No bloated teams. Each product runs with minimal overhead, maximum ownership, and a bias for shipping.",
              },
              {
                title: "Profit First",
                desc: "We build for revenue from day one, not vanity metrics. Sustainable business models aren't optional — they're the starting point.",
              },
              {
                title: "Permanent Value",
                desc: "We don't flip. We build products that compound over years, creating lasting value for users and the company alike.",
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div className="bg-dark-800 border border-dark-700 rounded-xl p-6 h-full">
                  <h3 className="text-lg font-semibold text-accent-400 mb-3">
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

      {/* Founder */}
      <section className="py-16 bg-dark-950">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-2xl font-bold text-text-primary mb-6">Leadership</h2>
            <div className="bg-dark-800 border border-dark-700 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-text-primary">
                {site.founder.name}
              </h3>
              <p className="text-sm text-accent-400 mb-3">{site.founder.title}</p>
              <p className="text-sm text-text-secondary leading-relaxed">
                {site.founder.bio}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Verticals */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-2xl font-bold text-text-primary mb-6">
              Verticals We Operate In
            </h2>
            <p className="text-text-secondary mb-10 max-w-xl mx-auto">
              We focus on three verticals where we see the strongest opportunities for
              lean, profitable digital products.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                title: "Content Distribution",
                desc: "Tools that help creators and publishers distribute content across channels efficiently.",
              },
              {
                title: "Wellness",
                desc: "Digital products that support health, self-care, and personal well-being.",
              },
              {
                title: "Lifestyle",
                desc: "Platforms that enhance everyday life through smart, simple digital experiences.",
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div className="flex flex-col h-full bg-dark-800 border border-dark-700 rounded-xl p-5">
                  <h3 className="text-sm font-semibold text-accent-400 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-text-secondary leading-relaxed flex-1">
                    {item.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
