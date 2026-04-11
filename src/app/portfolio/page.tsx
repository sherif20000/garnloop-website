import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import PortfolioCard from "@/components/PortfolioCard";
import { companies } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Explore the companies and products in the GarnLoop portfolio.",
};

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-text-primary tracking-tight">
              Our Portfolio
            </h1>
            <p className="mt-4 text-lg text-text-secondary max-w-xl mx-auto">
              Products we&apos;ve built and acquired.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="pb-20 lg:pb-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companies.map((company, i) => (
              <FadeIn key={company.slug} delay={i * 0.1}>
                <PortfolioCard company={company} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* What We Look For */}
      <section className="py-20 lg:py-28 bg-dark-950">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-2xl font-bold text-text-primary mb-6">
              What We Look For
            </h2>
            <p className="text-text-secondary mb-8 leading-relaxed">
              We&apos;re always looking for digital products that align with our
              philosophy. If you&apos;ve built something that fits, we&apos;d love to
              talk.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Profitable or near-profitable SaaS or digital tools",
                "Lean operations with low overhead",
                "Clear product-market fit with real users",
                "Content distribution, wellness, or lifestyle verticals",
                "Founders looking for a long-term home, not a quick flip",
                "Revenue between $1K–$50K MRR",
              ].map((item, i) => (
                <FadeIn key={i} delay={i * 0.05}>
                  <div className="flex items-start gap-3 bg-dark-800 border border-dark-700 rounded-lg p-4">
                    <svg
                      className="w-5 h-5 text-accent-400 mt-0.5 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    <span className="text-sm text-text-secondary">{item}</span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
