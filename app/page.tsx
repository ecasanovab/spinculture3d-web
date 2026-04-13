import Image from "next/image";

export default function Home() {
  return (
    <main id="top" className="bg-white text-[#014b5c]">
      <header className="sticky top-0 z-50 border-b border-[#b9e7f0] bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-6 py-4">
          <a href="#top" className="flex items-center">
            <Image
              src="/LLETRES_RETALLADES.png"
              alt="SpinCulture3D"
              width={270}
              height={54}
              className="h-11 w-auto object-contain"
              priority
            />
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-[#028aac] lg:flex">
            <a href="#top" className="transition hover:text-[#014b5c]">
              Home
            </a>
            <a href="#about" className="transition hover:text-[#014b5c]">
              About Us
            </a>
            <a href="#services" className="transition hover:text-[#014b5c]">
              Technology
            </a>
            <a href="#services" className="transition hover:text-[#014b5c]">
              Services
            </a>
            <a href="#about" className="transition hover:text-[#014b5c]">
              Products
            </a>

            <div className="group relative">
              <button
                type="button"
                className="flex items-center gap-2 transition hover:text-[#014b5c]"
              >
                More
                <span className="text-[10px]">▼</span>
              </button>

              <div className="invisible absolute left-0 top-full mt-3 w-44 rounded-2xl border border-[#b9e7f0] bg-white p-2 opacity-0 shadow-[0_18px_45px_rgba(2,138,172,0.12)] transition-all duration-200 group-hover:visible group-hover:opacity-100">
                <a
                  href="#team"
                  className="block rounded-xl px-4 py-2 text-sm text-[#028aac] transition hover:bg-[#eefbfd] hover:text-[#014b5c]"
                >
                  Team
                </a>
                <a
                  href="#"
                  className="mt-1 block rounded-xl px-4 py-2 text-sm text-[#028aac] transition hover:bg-[#eefbfd] hover:text-[#014b5c]"
                >
                  News
                </a>
              </div>
            </div>
          </nav>

          <a
            href="#contact"
            className="hidden rounded-2xl border-2 border-[#028aac] px-7 py-3 text-sm font-semibold text-[#028aac] transition hover:bg-[#eefbfd] lg:inline-flex"
          >
            Contact Us
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden text-white">
        <div className="absolute inset-0">
          <Image
            src="/IMATGE_FONS_LAYOUT.png"
            alt=""
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,138,172,0.88),rgba(2,138,172,0.72)),radial-gradient(circle_at_top_left,rgba(255,255,255,0.10),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(1,75,92,0.28),transparent_36%)]" />
        <div className="absolute -left-24 top-16 h-72 w-72 rounded-full border border-white/12" />
        <div className="absolute bottom-[-7rem] right-[-3rem] h-80 w-80 rounded-full border border-white/10" />
        <div className="absolute left-1/3 top-0 h-full w-px bg-white/10" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-20 lg:py-24">
          <div className="flex justify-center">
            <div className="max-w-4xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/70">
                Scientific design for living systems
              </p>

              <h1 className="mt-6 text-5xl font-semibold leading-[1.02] tracking-tight md:text-6xl xl:text-7xl">
                Advanced 3D structures for living systems.
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/80 md:text-xl">
                We design and develop innovative platforms inspired by
                biomaterials, electrospinning, and tissue engineering to
                support research and biomedical innovation.
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <a
                  href="#services"
                  className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#028aac] transition hover:bg-[#eefbfd]"
                >
                  Read about technology
                </a>

                <a
                  href="#contact"
                  className="rounded-full border border-white/35 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Contact us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="border-t border-[#b9e7f0] bg-[#f4fcfd] px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#028aac]">
            Services
          </p>

          <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-semibold md:text-4xl">What we do</h2>
              <p className="mt-4 max-w-2xl text-[#216674]">
                We combine material understanding, fabrication strategies, and
                scientific vision to create useful and elegant solutions.
              </p>
            </div>

            <a
              href="/publications"
              className="inline-flex min-w-[260px] items-center justify-center rounded-full bg-[#028aac] px-8 py-4 text-center text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-[#017792] md:min-w-[320px]"
            >
              Scientific Publications
            </a>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <article className="group rounded-3xl border border-[#b9e7f0] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="mb-6 h-10 w-10 rounded-2xl bg-[#eefbfd]" />
              <h3 className="text-xl font-semibold">Biomaterial platforms</h3>
              <p className="mt-4 leading-7 text-[#216674]">
                Development of advanced material-based platforms for research,
                testing, and biomedical innovation.
              </p>
            </article>

            <article className="group rounded-3xl border border-[#b9e7f0] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="mb-6 h-10 w-10 rounded-2xl bg-[#eefbfd]" />
              <h3 className="text-xl font-semibold">Electrospun structures</h3>
              <p className="mt-4 leading-7 text-[#216674]">
                Design of fibrous architectures inspired by the extracellular
                matrix for next-generation in vitro models.
              </p>
            </article>

            <article className="group rounded-3xl border border-[#b9e7f0] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="mb-6 h-10 w-10 rounded-2xl bg-[#eefbfd]" />
              <h3 className="text-xl font-semibold">3D fabrication</h3>
              <p className="mt-4 leading-7 text-[#216674]">
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
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#028aac]">
              About
            </p>

            <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-tight md:text-4xl">
              A scientific and design-driven approach to advanced biomedical
              structures
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#216674]">
              SpinCulture3D brings together material design, fabrication
              strategies, and biomedical vision to create meaningful tools for
              research and innovation.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#b9e7f0] bg-[#f4fcfd] p-8 md:p-10">
            <p className="text-lg leading-8 text-[#216674]">
              Our work is focused on bridging advanced manufacturing and living
              systems through elegant, functional, and research-oriented
              solutions.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white p-5">
                <p className="text-sm text-[#028aac]">Discipline</p>
                <p className="mt-2 font-semibold">Biofabrication</p>
              </div>

              <div className="rounded-2xl bg-white p-5">
                <p className="text-sm text-[#028aac]">Application</p>
                <p className="mt-2 font-semibold">Research tools</p>
              </div>

              <div className="rounded-2xl bg-white p-5">
                <p className="text-sm text-[#028aac]">Method</p>
                <p className="mt-2 font-semibold">Advanced fabrication</p>
              </div>

              <div className="rounded-2xl bg-white p-5">
                <p className="text-sm text-[#028aac]">Vision</p>
                <p className="mt-2 font-semibold">Translation and impact</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="team"
        className="border-t border-[#b9e7f0] bg-white px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#028aac]">
            Team
          </p>

          <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="text-3xl font-semibold md:text-4xl">
              The people behind SpinCulture3D
            </h2>
            <p className="max-w-2xl text-[#216674]">
              A multidisciplinary team combining biomedical engineering and
              biology to create meaningful tools for research and innovation.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <article className="rounded-[2rem] border border-[#b9e7f0] bg-[#f4fcfd] p-8 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-sm font-semibold text-[#028aac] shadow-sm">
                BE
              </div>
              <p className="mt-6 text-sm font-medium uppercase tracking-[0.18em] text-[#028aac]">
                Team Member
              </p>
              <h3 className="mt-3 text-2xl font-semibold">
                Biomedical Engineer
              </h3>
              <p className="mt-4 leading-7 text-[#216674]">
                Focused on the design and development of advanced biomedical
                structures, bridging fabrication strategies, translational
                thinking, and functional research applications.
              </p>
            </article>

            <article className="rounded-[2rem] border border-[#b9e7f0] bg-[#f4fcfd] p-8 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-sm font-semibold text-[#028aac] shadow-sm">
                BI
              </div>
              <p className="mt-6 text-sm font-medium uppercase tracking-[0.18em] text-[#028aac]">
                Team Member
              </p>
              <h3 className="mt-3 text-2xl font-semibold">Biologist</h3>
              <p className="mt-4 leading-7 text-[#216674]">
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
        className="border-t border-[#b9e7f0] bg-[#014b5c] px-6 py-24 text-white"
      >
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#98dbe8]">
            Contact
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight md:text-5xl">
            Let’s build something meaningful together
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#d8f2f7]">
            We are shaping the first version of SpinCulture3D. Get in touch to
            explore ideas, collaborations, or future opportunities.
          </p>

          <div className="mt-10">
            <a
              href="mailto:hello@spinculture3d.com"
              className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium text-[#014b5c] transition hover:bg-[#eefbfd]"
            >
              hello@spinculture3d.com
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#b9e7f0] bg-white px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-[#028aac] md:flex-row md:items-center md:justify-between">
          <p>© 2026 SpinCulture3D</p>
          <p>Built for biomaterials, biofabrication, and living systems.</p>
        </div>
      </footer>
    </main>
  );
}
