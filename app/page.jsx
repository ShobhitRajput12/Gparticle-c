import Galaxy from "@/components/Galaxy";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <Galaxy />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,158,203,0.13),transparent_28%),radial-gradient(circle_at_78%_28%,rgba(76,111,255,0.15),transparent_32%),linear-gradient(90deg,rgba(0,0,0,0.52)_0%,rgba(0,0,0,0.26)_40%,rgba(0,0,0,0.08)_100%)]" />

      <section className="relative z-10 flex min-h-screen flex-col px-6 py-6 sm:px-8 lg:px-12">
        <header className="flex items-start justify-between gap-6">
          <a
            href="/"
            className="pointer-events-auto inline-flex items-center text-lg font-semibold tracking-[-0.03em] text-white sm:text-xl"
          >
            Gparticle
          </a>

          <nav className="hidden items-center gap-6 text-sm text-white/60 md:flex">
            <a className="pointer-events-auto transition-colors duration-300 hover:text-white" href="#research">
              Research
            </a>
            <a className="pointer-events-auto transition-colors duration-300 hover:text-white" href="#radar">
              Radar
            </a>
            <a className="pointer-events-auto transition-colors duration-300 hover:text-white" href="#docs">
              Docs
            </a>
            <a className="pointer-events-auto transition-colors duration-300 hover:text-white" href="#blog">
              Blog
            </a>
            <a className="pointer-events-auto transition-colors duration-300 hover:text-white" href="#download">
              Download App
            </a>
            <a className="pointer-events-auto transition-colors duration-300 hover:text-white" href="#about">
              About
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#login"
              className="pointer-events-auto inline-flex items-center rounded-full border border-white/14 bg-white/[0.04] px-4 py-2 text-sm font-medium text-white/78 backdrop-blur-sm transition-all duration-300 hover:border-white/28 hover:bg-white/[0.08] hover:text-white"
            >
              Login
            </a>
            <a
              href="#demo"
              className="pointer-events-auto inline-flex items-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:bg-white/90"
            >
              Book a Demo
            </a>
          </div>
        </header>

        <div className="flex flex-1 items-center justify-center">
          <div className="max-w-5xl py-16 text-center sm:py-20 lg:py-24">
            <p
              id="research"
              className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/5 px-7 py-3 text-[0.95rem] font-semibold tracking-[-0.03em] text-cyan-100 shadow-[0_0_30px_rgba(34,211,238,0.12)]"
            >
              <span className="mr-3 h-2.5 w-2.5 rounded-full bg-cyan-400" />
              Backed by Y Combinator
            </p>

            <h1 className="mx-auto mt-10 max-w-5xl text-[3.6rem] font-semibold leading-[0.92] tracking-[-0.075em] text-white sm:text-[5.4rem] lg:text-[6.1rem]">
              Making every device an AI-native device.
            </h1>

            <p className="mx-auto mt-10 max-w-4xl text-[1.12rem] leading-8 text-white/72 sm:text-[1.28rem]">
              We research and build inference engines from the metal up -
              custom kernels, operator fusion, unified memory optimization.
              For the hardware you already own.
            </p>

            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#research"
                className="pointer-events-auto inline-flex min-w-[272px] items-center justify-center rounded-full bg-white px-10 py-5 text-[1rem] font-semibold text-slate-950 transition-all duration-300 hover:bg-white/90"
              >
                Read our research <span className="ml-2">&rarr;</span>
              </a>
              <a
                href="#about"
                className="pointer-events-auto inline-flex items-center justify-center rounded-full border border-transparent px-4 py-3 text-[1rem] font-semibold text-white/78 transition-colors duration-300 hover:text-white"
              >
                About us
              </a>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/70 to-transparent" />

        <div className="fixed bottom-6 right-6 z-20 sm:bottom-8 sm:right-8">
          <a
            href="#playground"
            className="pointer-events-auto inline-flex items-center rounded-full bg-white px-6 py-3 text-base font-semibold text-slate-950 shadow-[0_10px_30px_rgba(255,255,255,0.18)] transition-all duration-300 hover:bg-white/90"
          >
            Playground
          </a>
        </div>
      </section>
    </main>
  );
}
