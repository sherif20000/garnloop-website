import Link from "next/link";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-dark-950 border-t border-dark-700/50 mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Branding */}
          <div>
            <p className="text-lg font-bold text-text-primary mb-2">{site.shortName}</p>
            <p className="text-sm text-text-muted max-w-xs">
              A digital company that builds and operates lean internet products.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-sm font-semibold text-text-secondary mb-3 uppercase tracking-wider">
              Navigate
            </p>
            <ul className="space-y-2">
              {site.nav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-muted hover:text-text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="text-sm font-semibold text-text-secondary mb-3 uppercase tracking-wider">
              Legal
            </p>
            <ul className="space-y-2">
              {site.legalNav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-muted hover:text-text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-dark-700/50 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} {site.name} All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${site.email}`}
              className="text-xs text-text-muted hover:text-accent-400 transition-colors"
            >
              {site.email}
            </a>
            {site.social.linkedin && (
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-accent-400 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            )}
            {site.social.crunchbase && (
              <a
                href={site.social.crunchbase}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-accent-400 transition-colors"
                aria-label="Crunchbase"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21.6 0H2.4C1.08 0 0 1.08 0 2.4v19.2C0 22.92 1.08 24 2.4 24h19.2c1.32 0 2.4-1.08 2.4-2.4V2.4C24 1.08 22.92 0 21.6 0zM7.045 14.465c.345.69 1.035 1.14 1.83 1.14.6 0 1.155-.225 1.575-.645l1.335 1.08c-.69.795-1.71 1.29-2.91 1.29-2.085 0-3.78-1.695-3.78-3.78s1.695-3.78 3.78-3.78c1.2 0 2.22.495 2.91 1.29l-1.335 1.08c-.42-.42-.975-.645-1.575-.645-.795 0-1.485.45-1.83 1.14-.15.3-.24.645-.24 1.005s.09.705.24 1.005v.02zm9.69 0c.345.69 1.035 1.14 1.83 1.14.6 0 1.155-.225 1.575-.645l1.335 1.08c-.69.795-1.71 1.29-2.91 1.29-2.085 0-3.78-1.695-3.78-3.78s1.695-3.78 3.78-3.78c1.2 0 2.22.495 2.91 1.29l-1.335 1.08c-.42-.42-.975-.645-1.575-.645-.795 0-1.485.45-1.83 1.14-.15.3-.24.645-.24 1.005s.09.705.24 1.005v.02z" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
