import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with GarnLoop, Inc.",
};

export default function ContactPage() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-14">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-text-primary tracking-tight">
              Get in Touch
            </h1>
            <p className="mt-4 text-lg text-text-secondary max-w-xl mx-auto">
              We&apos;d love to hear from you — whether you&apos;d like to partner with us,
              explore a collaboration, or just want to say hello.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="bg-dark-800 border border-dark-700 rounded-xl p-8 text-center">
            <p className="text-sm text-text-muted uppercase tracking-wider mb-2">
              Email us at
            </p>
            <a
              href={`mailto:${site.email}`}
              className="text-2xl sm:text-3xl font-semibold text-accent-400 hover:text-accent-300 transition-colors"
            >
              {site.email}
            </a>
            <div className="mt-8 pt-6 border-t border-dark-700">
              <p className="text-sm text-text-muted">
                {site.name} &mdash; United States
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mt-12 text-center">
            <p className="text-sm text-text-muted">
              We typically respond within 1&ndash;2 business days.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
