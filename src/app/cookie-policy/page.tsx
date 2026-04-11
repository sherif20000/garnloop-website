import type { Metadata } from "next";
import LegalSection from "@/components/LegalSection";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "How GarnLoop uses cookies on this website.",
};

export default function CookiePolicyPage() {
  return (
    <div className="py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-text-primary mb-2">Cookie Policy</h1>
        <p className="text-sm text-text-muted mb-10">
          Effective Date: January 1, 2025 &middot; Last Updated: April 2026
        </p>

        <LegalSection title="1. What Are Cookies">
          <p>
            Cookies are small text files that are placed on your device when you visit a
            website. They are widely used to make websites work more efficiently, provide
            a better user experience, and give website owners useful information.
          </p>
        </LegalSection>

        <LegalSection title="2. Cookies We Use">
          <p>
            Our Site currently uses minimal cookies. The types of cookies we may use
            include:
          </p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>
              <strong>Essential Cookies:</strong> These are necessary for the Site to
              function properly. They enable basic functionality such as page navigation
              and security. The Site cannot function properly without these cookies.
            </li>
            <li>
              <strong>Analytics Cookies:</strong> If enabled in the future, these cookies
              help us understand how visitors interact with the Site by collecting and
              reporting information anonymously. We will update this policy accordingly.
            </li>
          </ul>
        </LegalSection>

        <LegalSection title="3. Third-Party Cookies">
          <p>
            At launch, our Site does not set third-party cookies. Our hosting provider
            (Vercel) may set essential cookies required for site delivery and performance.
            If we add analytics or other third-party services in the future, this section
            will be updated to reflect those changes.
          </p>
        </LegalSection>

        <LegalSection title="4. Managing Cookies">
          <p>
            Most web browsers allow you to control cookies through their settings. You can
            typically find these settings in the &quot;Options&quot; or
            &quot;Preferences&quot; menu of your browser. You can set your browser to:
          </p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Block all cookies</li>
            <li>Accept all cookies</li>
            <li>Notify you when a cookie is set</li>
            <li>Delete cookies when you close your browser</li>
          </ul>
          <p className="mt-2">
            Please note that blocking essential cookies may affect the functionality of
            the Site.
          </p>
        </LegalSection>

        <LegalSection title="5. Contact Us">
          <p>
            If you have questions about our use of cookies, please contact us at:{" "}
            <a
              href={`mailto:${site.email}`}
              className="text-accent-400 hover:underline"
            >
              {site.email}
            </a>
          </p>
        </LegalSection>
      </div>
    </div>
  );
}
