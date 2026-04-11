import type { Metadata } from "next";
import LegalSection from "@/components/LegalSection";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How GarnLoop collects, uses, and protects your data.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-text-primary mb-2">Privacy Policy</h1>
        <p className="text-sm text-text-muted mb-10">
          Effective Date: January 1, 2025 &middot; Last Updated: April 2026
        </p>

        <LegalSection title="1. Introduction">
          <p>
            {site.name} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the
            website located at {site.url} (the &quot;Site&quot;). This Privacy Policy
            describes how we collect, use, disclose, and protect your personal information
            when you visit our Site.
          </p>
        </LegalSection>

        <LegalSection title="2. Information We Collect">
          <p>We may collect the following types of information:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>
              <strong>Personal Information:</strong> Name and email address if you contact
              us directly.
            </li>
            <li>
              <strong>Usage Data:</strong> Information about how you access and use the
              Site, including your IP address, browser type, operating system, referring
              URLs, pages viewed, and access times.
            </li>
            <li>
              <strong>Cookies and Similar Technologies:</strong> We may use cookies and
              similar tracking technologies to collect information. See our Cookie Policy
              for details.
            </li>
          </ul>
        </LegalSection>

        <LegalSection title="3. How We Use Your Information">
          <p>We use the information we collect to:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Respond to your inquiries and communications</li>
            <li>Operate, maintain, and improve our Site</li>
            <li>Monitor and analyze usage patterns and trends</li>
            <li>Protect against fraud and unauthorized access</li>
            <li>Comply with legal obligations</li>
          </ul>
        </LegalSection>

        <LegalSection title="4. Sharing of Information">
          <p>
            We do not sell, trade, or rent your personal information to third parties. We
            may share information with:
          </p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>
              <strong>Service Providers:</strong> Third-party vendors who assist in
              operating our Site (e.g., hosting providers).
            </li>
            <li>
              <strong>Legal Requirements:</strong> When required by law, regulation, or
              legal process.
            </li>
            <li>
              <strong>Business Transfers:</strong> In connection with a merger,
              acquisition, or sale of assets.
            </li>
          </ul>
        </LegalSection>

        <LegalSection title="5. Cookies and Tracking">
          <p>
            Our Site may use cookies and similar technologies to enhance your experience.
            For detailed information about the cookies we use and your choices, please
            refer to our{" "}
            <a href="/cookie-policy" className="text-accent-400 hover:underline">
              Cookie Policy
            </a>
            .
          </p>
        </LegalSection>

        <LegalSection title="6. Third-Party Services">
          <p>
            Our Site is hosted on Vercel. We may use analytics services in the future to
            help us understand Site usage. These third-party services may collect
            information in accordance with their own privacy policies.
          </p>
        </LegalSection>

        <LegalSection title="7. Data Retention">
          <p>
            We retain personal information only for as long as necessary to fulfill the
            purposes for which it was collected, or as required by applicable law. Usage
            data is generally retained for a shorter period unless used to strengthen
            security or improve our Site.
          </p>
        </LegalSection>

        <LegalSection title="8. Your Rights">
          <p>
            Depending on your location, you may have certain rights regarding your
            personal information, including:
          </p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>
              <strong>Right to Know:</strong> Request information about the personal data
              we collect and how it is used.
            </li>
            <li>
              <strong>Right to Delete:</strong> Request deletion of your personal data.
            </li>
            <li>
              <strong>Right to Opt-Out:</strong> We do not sell personal data. If this
              changes, we will provide an opt-out mechanism.
            </li>
            <li>
              <strong>Right to Non-Discrimination:</strong> We will not discriminate
              against you for exercising your privacy rights.
            </li>
          </ul>
          <p className="mt-2">
            These rights may apply under the California Consumer Privacy Act (CCPA),
            Virginia Consumer Data Protection Act (VCDPA), Colorado Privacy Act (CPA),
            Connecticut Data Privacy Act (CTDPA), and other applicable US state privacy
            laws.
          </p>
          <p className="mt-2">
            To exercise any of these rights, please contact us at{" "}
            <a
              href={`mailto:${site.email}`}
              className="text-accent-400 hover:underline"
            >
              {site.email}
            </a>
            .
          </p>
        </LegalSection>

        <LegalSection title="9. Children's Privacy">
          <p>
            Our Site is not directed at individuals under the age of 13. We do not
            knowingly collect personal information from children under 13. If we become
            aware that we have collected such information, we will take steps to delete
            it.
          </p>
        </LegalSection>

        <LegalSection title="10. Changes to This Policy">
          <p>
            We may update this Privacy Policy from time to time. Any changes will be
            posted on this page with an updated effective date. We encourage you to review
            this policy periodically.
          </p>
        </LegalSection>

        <LegalSection title="11. Contact Us">
          <p>
            If you have questions about this Privacy Policy, please contact us at:{" "}
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
