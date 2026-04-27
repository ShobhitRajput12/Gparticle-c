import Link from "next/link";

export function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="text-sm font-semibold tracking-[-0.03em] text-slate-950 sm:text-base"
        >
          GParticle
        </Link>

        <div className="absolute left-1/2 hidden -translate-x-1/2 sm:block">
          <Link
            href="#research"
            className="inline-flex items-center rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-slate-600 shadow-pill backdrop-blur transition-all duration-300 hover:scale-[1.02] hover:bg-white"
          >
            New Research <span className="ml-2 text-sm normal-case">&rarr;</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
