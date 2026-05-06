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
          </div>
        </div>
      </div>
    </footer>
  );
}
