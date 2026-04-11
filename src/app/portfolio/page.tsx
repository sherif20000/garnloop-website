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
              Products we&apos;ve built and launched.
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

    </>
  );
}
