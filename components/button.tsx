import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "floating";
};

const variants = {
  primary:
    "bg-button-shine text-white shadow-glow hover:scale-[1.02] hover:shadow-[0_22px_50px_rgba(96,92,255,0.3)]",
  secondary:
    "bg-white/70 text-slate-700 shadow-pill ring-1 ring-slate-200/80 hover:scale-[1.02] hover:bg-white",
  floating:
    "bg-white/90 text-slate-900 shadow-soft ring-1 ring-slate-200/80 backdrop-blur hover:scale-[1.02] hover:shadow-pill",
};

export function Button({
  href,
  children,
  variant = "primary",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={[
        "inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-medium tracking-[-0.01em] transition-all duration-300",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500",
        variants[variant],
      ].join(" ")}
    >
      {children}
    </Link>
  );
}
