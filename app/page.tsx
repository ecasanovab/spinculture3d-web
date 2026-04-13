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
            <a href="#technology" className="transition hover:text-[#014b5c]">
              Technology
            </a>
            <a href="#services" className="transition hover:text-[#014b5c]">
              Services
            </a>
            <a href="#products" className="transition hover:text-[#014b5c]">
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
                  href="#news"
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
                  href="#technology"
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

      <section id="about" className="relative overflow-hidden px-6 py-24">
        <div className="absolute inset-0">
          <Image
            src="/foto_treballant.jpg"
            alt=""
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.78),rgba(244,252,253,0.72))]" />

        <div className="relative mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#028aac]">
              About Us
            </p>

            <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-tight md:text-4xl">
              About SpinCulture
            </h2>

            <div className="mt-6 space-y-6 text-lg leading-8 text-[#216674] md:text-justify">
              <p>
                At SpinCulture, our mission is to help move{" "}
                <strong>cell culture beyond traditional 2D systems</strong> and
                make 3D culture more accessible, scalable, and affordable. More
                importantly, we aim to establish the{" "}
                <strong>SpinCulture concept</strong>: a new approach to cell
                culture built around electrospinning-based technologies and
                fibrous 3D environments that better reflect physiological
                conditions.
              </p>

              <div className="flex justify-center py-2">
                <Image
                  src="/LOGO SOL.png"
                  alt="SpinCulture logo"
                  width={760}
                  height={760}
                  className="h-[28rem] w-auto object-contain opacity-95"
                />
              </div>

              <p>
                Our work began with the goal of developing improved cancer
                models and supporting future drug screening with patient-derived
                cells. Over time, we have shown that cells cultured on our
                scaffolds behave in a more physiologically relevant way,
                highlighting the value of this platform as an intermediate step
                between conventional 2D culture and animal models. Today, our
                vision is to expand SpinCulture across many different cell
                culture applications, helping drive more{" "}
                <strong>predictive, ethical, and widely accessible research</strong>.
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#b9e7f0] bg-white/78 p-8 backdrop-blur-[2px] md:p-10">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#028aac]">
              Vision
            </p>

            <h3 className="mt-4 text-3xl font-semibold leading-tight text-[#014b5c] md:text-4xl">
              A new step in cell culture: SpinCulture.
            </h3>

            <p className="mt-6 text-lg leading-8 text-[#216674] md:text-justify">
              SpinCulture is conceived as a bridge between conventional 2D
              culture and more complex biological models, enabling more
              relevant, scalable, and accessible in vitro research
              environments.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="flex h-full flex-col rounded-2xl bg-white/90 p-5">
                <p className="text-base font-medium text-[#014b5c]">Approach</p>
                <div className="mt-4 overflow-hidden rounded-xl">
                  <Image
                    src="/SEM_image_cropped.png"
                    alt="Approach"
                    width={600}
                    height={420}
                    className="h-44 w-full object-cover"
                  />
                </div>
                <p className="mt-4 text-xl leading-8 text-[#014b5c]">
                  Electrospinning based 3D culture
                </p>
              </div>

              <div className="flex h-full flex-col rounded-2xl bg-white/90 p-5">
                <p className="text-base font-medium text-[#014b5c]">Focus</p>
                <div className="mt-4 overflow-hidden rounded-xl">
                  <Image
                    src="/Confocal_image.jpg"
                    alt="Focus"
                    width={600}
                    height={420}
                    className="h-44 w-full object-cover"
                  />
                </div>
                <p className="mt-4 text-xl leading-8 text-[#014b5c]">
                  Physiological relevance
                </p>
              </div>

              <div className="flex h-full flex-col rounded-2xl bg-white/90 p-5">
                <p className="text-base font-medium text-[#014b5c]">Goal</p>
                <div className="mt-4 overflow-hidden rounded-xl">
                  <Image
                    src="/Predictive_research_models_image.png"
                    alt="Goal"
                    width={600}
                    height={420}
                    className="h-44 w-full object-cover"
                  />
                </div>
                <p className="mt-4 text-xl leading-8 text-[#014b5c]">
                  Predictive research models
                </p>
              </div>

              <div className="flex h-full flex-col rounded-2xl bg-white/90 p-5">
                <p className="text-base font-medium text-[#014b5c]">Impact</p>
                <div className="mt-4 flex min-h-[176px] items-center justify-center overflow-hidden rounded-xl bg-[#f8fdfe] p-2">
                  <Image
                    src="/Reduce_animal_testing_image_cropped.png"
                    alt="Impact"
                    width={600}
                    height={420}
                    className="h-auto w-full object-contain"
                  />
                </div>
                <p className="mt-4 text-xl leading-8 text-[#014b5c]">
                  Reduce Animal model
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="technology"
        className="border-t border-[#b9e7f0] bg-[#f4fcfd] px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#028aac]">
            Technology
          </p>

          <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-semibold md:text-4xl">What we do</h2>
              <div className="mt-4 max-w-4xl space-y-5 text-[#216674] md:text-justify">
                <p>
                  <strong>
                    SpinCulture&apos;s technology is based on electrospinning
                    as a platform for generating advanced fibrous structures
                    for applications in bioengineering and biomedical
                    research.
                  </strong>
                </p>
                <p>
                  Electrospinning is a manufacturing technology that enables
                  the production of ultrafine fibers from polymer-based
                  materials. It enables us to generate structures with high
                  surface area and controllable morphology, making it
                  interesting for advanced cell culture systems.
                </p>
                <p>
                  Our technology is focused on a novel electrospinning machine
                  which allows the design of structures that provide a
                  microenvironment aligned with the needs of each application,
                  with particular attention to architecture, reproducibility,
                  and functional performance.
                </p>
              </div>
            </div>

            <div className="flex justify-center md:min-w-[360px] md:self-center">
              <a
                href="/publications"
                className="inline-flex min-w-[260px] items-center justify-center rounded-full bg-[#028aac] px-8 py-4 text-center text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-[#017792] md:min-w-[320px]"
              >
                Scientific Publications
              </a>
            </div>
          </div>

          <div className="mt-16 rounded-[2rem] border border-[#b9e7f0] bg-white p-8 shadow-sm md:p-10">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#028aac]">
              Key advantages
            </p>

            <div className="mt-8 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
              <article className="rounded-3xl border border-[#d7f2f7] bg-[#f8fdfe] p-6 text-center">
                <div className="mx-auto mb-5 flex h-18 w-18 items-center justify-center overflow-hidden rounded-2xl bg-white">
                  <Image
                    src="/Controled_Structure.png"
                    alt="Controlled fibrous architecture icon"
                    width={68}
                    height={68}
                    className="h-17 w-17 object-contain"
                  />
                </div>
                <h3 className="text-lg font-bold text-[#028aac]">
                  Controlled Fibrous Architecture
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#216674]">
                  Structures with tunable morphology and structural features.
                </p>
              </article>

              <article className="rounded-3xl border border-[#d7f2f7] bg-[#f8fdfe] p-6 text-center">
                <div className="mx-auto mb-5 flex h-18 w-18 items-center justify-center overflow-hidden rounded-2xl bg-white">
                  <Image
                    src="/Specific_Area.png"
                    alt="High surface area icon"
                    width={68}
                    height={68}
                    className="h-17 w-17 object-contain"
                  />
                </div>
                <h3 className="text-lg font-bold text-[#028aac]">
                  High Surface Area
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#216674]">
                  Designed to provide a large interaction area for advanced
                  applications.
                </p>
              </article>

              <article className="rounded-3xl border border-[#d7f2f7] bg-[#f8fdfe] p-6 text-center">
                <div className="mx-auto mb-5 flex h-18 w-18 items-center justify-center overflow-hidden rounded-2xl bg-white">
                  <Image
                    src="/Material_Versatility.png"
                    alt="Material versatility icon"
                    width={68}
                    height={68}
                    className="h-17 w-17 object-contain"
                  />
                </div>
                <h3 className="text-lg font-bold text-[#028aac]">
                  Material Versatility
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#216674]">
                  Compatible with different materials and application-driven
                  design needs.
                </p>
              </article>

              <article className="rounded-3xl border border-[#d7f2f7] bg-[#f8fdfe] p-6 text-center">
                <div className="mx-auto mb-5 flex h-18 w-18 items-center justify-center overflow-hidden rounded-2xl bg-white">
                  <Image
                    src="/Costumisable_solu.png"
                    alt="Customizable solutions icon"
                    width={68}
                    height={68}
                    className="h-17 w-17 object-contain"
                  />
                </div>
                <h3 className="text-lg font-bold text-[#028aac]">
                  Customizable Solutions
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#216674]">
                  Structures can be tailored in composition, architecture and
                  function depending on the target application.
                </p>
              </article>
            </div>
          </div>

          <div className="mt-16">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#028aac]">
              Applications
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <article className="rounded-3xl border border-[#b9e7f0] bg-white p-8 shadow-sm">
                <h3 className="text-xl font-semibold">Advanced Cell Culture</h3>
                <p className="mt-4 leading-7 text-[#216674] md:text-justify">
                  Fibrous structures designed to support more representative and
                  functional cell culture environments.
                </p>
              </article>

              <article className="rounded-3xl border border-[#b9e7f0] bg-white p-8 shadow-sm">
                <h3 className="text-xl font-semibold">
                  Validated Across Cell Models
                </h3>
                <p className="mt-4 leading-7 text-[#216674] md:text-justify">
                  Our platform has been validated across different cell lines,
                  enabling the development of in vitro models for breast and
                  lung cancer, adipocytes, hepatoma, etc.
                </p>
              </article>

              <article className="rounded-3xl border border-[#b9e7f0] bg-white p-8 shadow-sm">
                <h3 className="text-xl font-semibold">Drug Screening Support</h3>
                <p className="mt-4 leading-7 text-[#216674] md:text-justify">
                  Engineered systems that can contribute to more reliable
                  preclinical testing environments.
                </p>
              </article>

              <article className="rounded-3xl border border-[#b9e7f0] bg-white p-8 shadow-sm">
                <h3 className="text-xl font-semibold">
                  Customizable R&amp;D Platforms
                </h3>
                <p className="mt-4 leading-7 text-[#216674] md:text-justify">
                  Flexible solutions designed to support customizable studies
                  for validation, testing, and applied bioengineering research.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="relative overflow-hidden border-t border-[#b9e7f0] px-6 py-24"
      >
        <div className="absolute inset-0">
          <Image
            src="/foto_plaques_100.jpg"
            alt=""
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.80),rgba(244,252,253,0.74))]" />

        <div className="relative mx-auto max-w-6xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#028aac]">
            Services
          </p>

          <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-semibold md:text-4xl">
                Services in definition
              </h2>
              <p className="mt-4 max-w-2xl text-[#216674] md:text-justify">
                This section is reserved for service lines that will be defined
                in more detail soon. For now, the layout stays ready so the
                browsing order already matches the final structure.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <article className="rounded-3xl border border-[#b9e7f0] bg-white/82 p-8 backdrop-blur-[2px]">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#028aac]">
                Consulting
              </p>
              <p className="mt-4 leading-7 text-[#216674] md:text-justify">
                Placeholder for scientific advisory, development strategy, and
                technical guidance.
              </p>
            </article>

            <article className="rounded-3xl border border-[#b9e7f0] bg-white/82 p-8 backdrop-blur-[2px]">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#028aac]">
                Development
              </p>
              <p className="mt-4 leading-7 text-[#216674] md:text-justify">
                Placeholder for tailored platform development and experimental
                implementation.
              </p>
            </article>

            <article className="rounded-3xl border border-[#b9e7f0] bg-white/82 p-8 backdrop-blur-[2px]">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#028aac]">
                Collaboration
              </p>
              <p className="mt-4 leading-7 text-[#216674] md:text-justify">
                Placeholder for research partnerships, pilot projects, and
                translational opportunities.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section
        id="products"
        className="border-t border-[#b9e7f0] bg-[#f4fcfd] px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#028aac]">
            Products
          </p>

          <div className="mt-4">
            <h2 className="text-3xl font-semibold md:text-4xl">
              Product section coming soon
            </h2>
            <p className="mt-4 max-w-2xl text-[#216674] md:text-justify">
              This area is intentionally reserved for future product
              definitions, prototypes, and structured offers.
            </p>
          </div>

          <div className="mt-12 rounded-[2rem] border border-dashed border-[#8ad5e5] bg-white p-10">
            <p className="max-w-3xl text-lg leading-8 text-[#216674] md:text-justify">
              Once products are defined, this section can host catalog cards,
              scientific platform summaries, downloadable materials, or direct
              links to individual product pages.
            </p>
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
            <p className="max-w-2xl text-[#216674] md:text-justify">
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
              <p className="mt-4 leading-7 text-[#216674] md:text-justify">
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
              <p className="mt-4 leading-7 text-[#216674] md:text-justify">
                Bringing expertise in living systems, cellular environments, and
                biological relevance to ensure each platform is grounded in real
                scientific and experimental needs.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="news" className="border-t border-[#b9e7f0] bg-white px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#028aac]">
            News
          </p>

          <div className="mt-4 rounded-[2rem] border border-[#b9e7f0] bg-[#f4fcfd] p-8 md:p-10">
            <h2 className="text-3xl font-semibold md:text-4xl">
              Updates section in preparation
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#216674] md:text-justify">
              This placeholder keeps the site structure ready for future news,
              announcements, milestones, and scientific updates.
            </p>
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
            Let's build something meaningful together
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#d8f2f7] md:text-justify">
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
