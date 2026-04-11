import { PortfolioCompany } from "@/data/portfolio";

export default function PortfolioCard({ company }: { company: PortfolioCompany }) {
  return (
    <a
      href={company.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-dark-800 border border-dark-700 rounded-xl p-6 hover:border-accent-500/50 hover:-translate-y-1 transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg font-semibold text-text-primary group-hover:text-accent-400 transition-colors">
          {company.name}
        </h3>
        <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-accent-500/10 text-accent-400 border border-accent-500/20">
          {company.status}
        </span>
      </div>
      <p className="text-sm text-accent-300 mb-2">{company.tagline}</p>
      <p className="text-sm text-text-secondary leading-relaxed mb-4">
        {company.description}
      </p>
      <div className="flex items-center justify-between">
        <span className="text-xs text-text-muted bg-dark-700 px-3 py-1 rounded-full">
          {company.category}
        </span>
        <span className="text-xs text-text-muted">{company.year}</span>
      </div>
    </a>
  );
}
