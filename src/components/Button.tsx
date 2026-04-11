import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "outline";
  className?: string;
  external?: boolean;
}

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  external = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium text-sm transition-all duration-200 cursor-pointer";
  const variants = {
    primary:
      "bg-accent-500 text-white hover:bg-accent-400 shadow-lg shadow-accent-500/20",
    outline:
      "border border-dark-600 text-text-primary hover:border-accent-500 hover:text-accent-400",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href && external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <button className={classes}>{children}</button>;
}
