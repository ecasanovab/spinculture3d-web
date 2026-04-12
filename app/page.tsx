import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white text-neutral-900">
      <header className="sticky top-0 z-50 border-b border-neutral-200/80 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="text-lg font-semibold tracking-tight">
            SpinCulture3D
          </a>

          <nav className="hidden items-center gap-8 text-sm text-neutral-600 md:flex">
            <a href="#services" className="transition hover:text-black">
              Services
            </a>
            <a href="#team" className="transition hover:text-black">
              Team
            </a>
            <a href="#about" className="transition hover:text-black">
              About
            </a>
            <a href="#contact" className="transition hover:text-black">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-neutral-200/80">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.06),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.04),transparent_28%)]" />

        <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-neutral-500">
                Scientific design for living systems
              </p>

              <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-[1.02] tracking-tight md:text-6xl lg:text-7xl">
                Advanced 3D structures for living systems.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600 md:text-xl">
                We design and develop innovative platforms inspired by
                biomaterials, electrospinning, and tissue engineering to
                support research and biomedical innovation.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:opacity-85"
                >
                  Contact us
                </a>

                <a
                  href="#services"
                  className="rounded-full border border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-900 transition hover:bg-neutral-100"
                >
                  Explore services
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl border border-neutral-200 bg-white/80 p-5 shadow-[0_12px_35px_rgba(15,23,42,0.06)] backdrop-blur">
                  <p className="text-sm text-neutral-500">Focus</p>
                  <p className="mt-2 text-base font-semibold leading-6">
                    Research-driven platforms
                  </p>
                </div>

                <div className="rounded-3xl border border-neutral-200 bg-white/80 p-5 shadow-[0_12px_35px_rgba(15,23,42,0.06)] backdrop-blur">
                  <p className="text-sm text-neutral-500">Approach</p>
                  <p className="mt-2 text-base font-semibold leading-6">
                    Design, fabrication and translation
                  </p>
                </div>

                <div className="rounded-3xl border border-neutral-200 bg-white/80 p-5 shadow-[0_12px_35px_rgba(15,23,42,0.06)] backdrop-blur">
                  <p className="text-sm text-neutral-500">Scope</p>
                  <p className="mt-2 text-base font-semibold leading-6">
                    Biomedical innovation and advanced models
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-8 rounded-[2.5rem] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.92),rgba(245,245,245,0.35)_60%,transparent)] blur-2xl" />

              <div className="relative rounded-[2rem] border border-neutral-200 bg-white/85 p-6 shadow-[0_24px_70px_rgba(15,23,42,0.08)] backdrop-blur md:p-8">
                <div className="rounded-[1.75rem] border border-neutral-200 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(246,246,246,0.92))] px-6 py-10 sm:px-10">
                  <div className="flex min-h-[360px] flex-col justify-between">
                    <div className="flex items-start justify-between gap-6">
                      <div>
                        <p className="text-sm font-medium text-neutral-500">
                          SpinCulture3D
                        </p>
                        <p className="mt-2 max-w-xs text-sm leading-6 text-neutral-600">
                          Premium scientific platforms bridging biofabrication,
                          material intelligence, and translational research.
                        </p>
                      </div>

                      <div className="hidden rounded-full border border-neutral-200 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-neutral-500 sm:block">
                        Biomaterials
                      </div>
                    </div>

                    <div className="flex justify-center py-8">
                      <Image
                        src="/LOGO_VERTICAL .png"
                        alt="SpinCulture3D logo"
                        width={500}
                        height={500}
                        className="h-56 w-auto object-contain md:h-64"
                        priority
                      />
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                      <div className="rounded-2xl border border-neutral-200 bg-white/85 p-4">
                        <p className="text-xs uppercase tracking-[0.24em] text-neutral-500">
                          Expertise
                        </p>
                        <p className="mt-2 text-sm font-medium leading-6 text-neutral-700">
                          Electrospun structures, advanced fabrication, and 3D
                          biological models.
                        </p>
                      </div>

                      <div className="rounded-2xl border border-neutral-200 bg-white/85 p-4">
                        <p className="text-xs uppercase tracking-[0.24em] text-neutral-500">
                          Outcome
                        </p>
                        <p className="mt-2 text-sm font-medium leading-6 text-neutral-700">
                          Elegant research tools designed for clarity,
                          performance, and impact.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="border-t border-neutral-200 bg-neutral-50 px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
            Services
          </p>

          <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="text-3xl font-semibold md:text-4xl">What we do</h2>
            <p className="max-w-2xl text-neutral-600">
              We combine material understanding, fabrication strategies, and
              scientific vision to create useful and elegant solutions.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <article className="group rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="mb-6 h-10 w-10 rounded-2xl bg-neutral-100" />
              <h3 className="text-xl font-semibold">Biomaterial platforms</h3>
              <p className="mt-4 leading-7 text-neutral-600">
                Development of advanced material-based platforms for research,
                testing, and biomedical innovation.
              </p>
            </article>

            <article className="group rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="mb-6 h-10 w-10 rounded-2xl bg-neutral-100" />
              <h3 className="text-xl font-semibold">Electrospun structures</h3>
              <p className="mt-4 leading-7 text-neutral-600">
                Design of fibrous architectures inspired by the extracellular
                matrix for next-generation in vitro models.
              </p>
            </article>

            <article className="group rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="mb-6 h-10 w-10 rounded-2xl bg-neutral-100" />
              <h3 className="text-xl font-semibold">3D fabrication</h3>
              <p className="mt-4 leading-7 text-neutral-600">
                Exploration of additive manufacturing strategies for functional
                structures, prototypes, and translational applications.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="about" className="px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
              About
            </p>

            <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-tight md:text-4xl">
              A scientific and design-driven approach to advanced biomedical
              structures
            </h2>

            <p className="mt-6 text-lg leading-8 text-neutral-600">
              SpinCulture3D brings together material design, fabrication
              strategies, and biomedical vision to create meaningful tools for
              research and innovation.
            </p>
          </div>

          <div className="rounded-[2rem] border border-neutral-200 bg-neutral-50 p-8 md:p-10">
            <p className="text-lg leading-8 text-neutral-700">
              Our work is focused on bridging advanced manufacturing and living
              systems through elegant, functional, and research-oriented
              solutions.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white p-5">
                <p className="text-sm text-neutral-500">Discipline</p>
                <p className="mt-2 font-semibold">Biofabrication</p>
              </div>

              <div className="rounded-2xl bg-white p-5">
                <p className="text-sm text-neutral-500">Application</p>
                <p className="mt-2 font-semibold">Research tools</p>
              </div>

              <div className="rounded-2xl bg-white p-5">
                <p className="text-sm text-neutral-500">Method</p>
                <p className="mt-2 font-semibold">Advanced fabrication</p>
              </div>

              <div className="rounded-2xl bg-white p-5">
                <p className="text-sm text-neutral-500">Vision</p>
                <p className="mt-2 font-semibold">Translation and impact</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="team"
        className="border-t border-neutral-200 bg-white px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
            Team
          </p>

          <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="text-3xl font-semibold md:text-4xl">
              The people behind SpinCulture3D
            </h2>
            <p className="max-w-2xl text-neutral-600">
              A multidisciplinary team combining biomedical engineering and
              biology to create meaningful tools for research and innovation.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <article className="rounded-[2rem] border border-neutral-200 bg-neutral-50 p-8 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-sm font-semibold text-neutral-700 shadow-sm">
                BE
              </div>
              <p className="mt-6 text-sm font-medium uppercase tracking-[0.18em] text-neutral-500">
                Team Member
              </p>
              <h3 className="mt-3 text-2xl font-semibold">
                Biomedical Engineer
              </h3>
              <p className="mt-4 leading-7 text-neutral-600">
                Focused on the design and development of advanced biomedical
                structures, bridging fabrication strategies, translational
                thinking, and functional research applications.
              </p>
            </article>

            <article className="rounded-[2rem] border border-neutral-200 bg-neutral-50 p-8 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-sm font-semibold text-neutral-700 shadow-sm">
                BI
              </div>
              <p className="mt-6 text-sm font-medium uppercase tracking-[0.18em] text-neutral-500">
                Team Member
              </p>
              <h3 className="mt-3 text-2xl font-semibold">Biologist</h3>
              <p className="mt-4 leading-7 text-neutral-600">
                Bringing expertise in living systems, cellular environments, and
                biological relevance to ensure each platform is grounded in real
                scientific and experimental needs.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="border-t border-neutral-200 bg-neutral-950 px-6 py-24 text-white"
      >
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/60">
            Contact
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight md:text-5xl">
            Let’s build something meaningful together
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
            We are shaping the first version of SpinCulture3D. Get in touch to
            explore ideas, collaborations, or future opportunities.
          </p>

          <div className="mt-10">
            <a
              href="mailto:hello@spinculture3d.com"
              className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:opacity-90"
            >
              hello@spinculture3d.com
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-neutral-200 bg-white px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-neutral-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 SpinCulture3D</p>
          <p>Built for biomaterials, biofabrication, and living systems.</p>
        </div>
      </footer>
    </main>
  );
}
