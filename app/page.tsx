export default function Home() {
  return (
    <main className="bg-white text-neutral-900">
      <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="text-lg font-semibold tracking-tight">
            SpinCulture3D
          </a>

          <nav className="hidden gap-6 text-sm text-neutral-600 md:flex">
            <a href="#services" className="transition hover:text-black">
              Services
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

      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-20">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
          SpinCulture3D
        </p>

        <h1 className="max-w-4xl text-5xl font-semibold leading-tight md:text-7xl">
          Advanced 3D structures for living systems.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
          We design and develop innovative platforms inspired by biomaterials,
          electrospinning, and tissue engineering to support research and
          biomedical innovation.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
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
      </section>

      <section
        id="services"
        className="border-t border-neutral-200 bg-neutral-50 px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
            Services
          </p>

          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
            What we do
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <article className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold">Biomaterial platforms</h3>
              <p className="mt-4 text-neutral-600">
                Development of advanced material-based platforms for research,
                testing, and biomedical innovation.
              </p>
            </article>

            <article className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold">Electrospun structures</h3>
              <p className="mt-4 text-neutral-600">
                Design of fibrous architectures inspired by the extracellular
                matrix for next-generation in vitro models.
              </p>
            </article>

            <article className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold">3D fabrication</h3>
              <p className="mt-4 text-neutral-600">
                Exploration of additive manufacturing strategies for functional
                structures, prototypes, and translational applications.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="about" className="px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
              About
            </p>

            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              A scientific and design-driven approach
            </h2>

            <p className="mt-6 text-lg leading-8 text-neutral-600">
              SpinCulture3D brings together material design, fabrication
              strategies, and biomedical vision to create meaningful tools for
              research and innovation.
            </p>
          </div>

          <div className="rounded-3xl bg-neutral-100 p-8">
            <p className="text-neutral-700">
              Our work is focused on bridging advanced manufacturing and living
              systems through elegant, functional, and research-oriented
              solutions.
            </p>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="border-t border-neutral-200 px-6 py-24"
      >
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
            Contact
          </p>

          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
            Let’s build something meaningful
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
            We are shaping the first version of SpinCulture3D. Get in touch to
            explore ideas, collaborations, or future opportunities.
          </p>

          <div className="mt-8">
            <a
              href="mailto:hello@spinculture3d.com"
              className="text-lg font-medium underline underline-offset-4"
            >
              hello@spinculture3d.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}