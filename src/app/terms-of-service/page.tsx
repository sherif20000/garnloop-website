import type { Metadata } from "next";
import LegalSection from "@/components/LegalSection";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms and conditions for using the GarnLoop website.",
};

export default function TermsOfServicePage() {
  return (
    <div className="py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-text-primary mb-2">Terms of Service</h1>
        <p className="text-sm text-text-muted mb-10">
          Effective Date: January 1, 2025 &middot; Last Updated: April 2026
        </p>

        <LegalSection title="1. Acceptance of Terms">
          <p>
            By accessing or using the website located at {site.url} (the
            &quot;Site&quot;), you agree to be bound by these Terms of Service
            (&quot;Terms&quot;). If you do not agree to these Terms, please do not use the
            Site.
          </p>
        </LegalSection>

        <LegalSection title="2. Description of Service">
          <p>
            {site.name} is a digital company. This Site is informational in
            nature and provides information about our company, portfolio, and services. We
            reserve the right to modify, suspend, or discontinue any aspect of the Site at
            any time.
          </p>
        </LegalSection>

        <LegalSection title="3. Intellectual Property">
          <p>
            All content on this Site, including but not limited to text, graphics, logos,
            images, and software, is the property of {site.name} or its licensors and is
            protected by United States and international copyright, trademark, and other
            intellectual property laws. You may not reproduce, distribute, modify, or
            create derivative works from any content without our prior written consent.
          </p>
        </LegalSection>

        <LegalSection title="4. User Conduct">
          <p>You agree not to:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Use the Site for any unlawful purpose</li>
            <li>Attempt to gain unauthorized access to any part of the Site</li>
            <li>
              Use automated tools (scrapers, bots) to access or collect data from the Site
              without our permission
            </li>
            <li>Interfere with or disrupt the Site or its infrastructure</li>
            <li>Impersonate any person or entity</li>
          </ul>
        </LegalSection>

        <LegalSection title="5. Third-Party Links">
          <p>
            Our Site may contain links to third-party websites. These links are provided
            for convenience only. We do not endorse, control, or assume responsibility for
            the content or practices of any third-party sites. Visiting linked sites is at
            your own risk.
          </p>
        </LegalSection>

        <LegalSection title="6. Disclaimer of Warranties">
          <p>
            The Site is provided on an &quot;as is&quot; and &quot;as available&quot;
            basis, without warranties of any kind, either express or implied, including
            but not limited to implied warranties of merchantability, fitness for a
            particular purpose, and non-infringement. We do not warrant that the Site will
            be uninterrupted, error-free, or secure.
          </p>
        </LegalSection>

        <LegalSection title="7. Limitation of Liability">
          <p>
            To the fullest extent permitted by applicable law, {site.name} shall not be
            liable for any indirect, incidental, special, consequential, or punitive
            damages, or any loss of profits or revenues, whether incurred directly or
            indirectly, or any loss of data, use, goodwill, or other intangible losses,
            arising out of or in connection with your use of the Site.
          </p>
        </LegalSection>

        <LegalSection title="8. Governing Law">
          <p>
            These Terms shall be governed by and construed in accordance with the laws of
            the State of {site.incorporationState}, United States, without regard to its
            conflict of law provisions. Any legal action or proceeding arising under these
            Terms shall be brought exclusively in the courts located in{" "}
            {site.incorporationState}.
          </p>
        </LegalSection>

        <LegalSection title="9. Changes to Terms">
          <p>
            We reserve the right to modify these Terms at any time. Changes will be
            effective upon posting to this page with an updated date. Your continued use
            of the Site after changes are posted constitutes your acceptance of the
            revised Terms.
          </p>
        </LegalSection>

        <LegalSection title="10. Contact">
          <p>
            If you have questions about these Terms, please contact us at:{" "}
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
