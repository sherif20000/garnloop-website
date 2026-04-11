import { ReactNode } from "react";

export default function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mb-8">
      <h2 className="text-lg font-semibold text-text-primary mb-3">{title}</h2>
      <div className="text-sm text-text-secondary leading-relaxed space-y-3">
        {children}
      </div>
    </section>
  );
}
