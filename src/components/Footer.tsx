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
          <a
            href={`mailto:${site.email}`}
            className="text-xs text-text-muted hover:text-accent-400 transition-colors"
          >
            {site.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
