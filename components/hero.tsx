import { Button } from "@/components/button";

export function Hero() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-hero-wash">
      <section className="mx-auto flex min-h-screen w-full max-w-7xl items-center justify-center px-6 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
          <div className="mb-8 inline-flex items-center rounded-full border border-slate-200/80 bg-white/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500 shadow-pill backdrop-blur sm:hidden">
            New Research <span className="ml-2 text-sm normal-case">&rarr;</span>
          </div>

          <p className="mb-6 text-sm font-medium uppercase tracking-[0.32em] text-slate-400">
            AI Infrastructure
          </p>

          <h1 className="max-w-4xl text-4xl font-semibold tracking-[-0.06em] text-slate-950 sm:text-6xl lg:text-7xl lg:leading-[1.02]">
            Making every device an AI-native device.
          </h1>

          <p className="mt-7 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            We are building the fundamental infrastructure to run complex
            models and advanced AI workloads seamlessly across everyday
            computing environments.
          </p>

          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row">
            <Button href="#research">Read our research &rarr;</Button>
            <Button href="#about" variant="secondary">
              About us
            </Button>
          </div>
        </div>
      </section>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white/60 to-transparent" />

      <div className="fixed bottom-6 right-6 z-30 sm:bottom-8 sm:right-8">
        <Button href="#playground" variant="floating">
          Playground &rarr;
        </Button>
      </div>
    </main>
  );
}
