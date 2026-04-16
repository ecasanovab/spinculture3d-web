"use client";

import Image from "next/image";
import { useRef } from "react";

export default function Home() {
  const servicesCarouselRef = useRef<HTMLDivElement | null>(null);

  const scrollServices = (direction: "prev" | "next") => {
    const container = servicesCarouselRef.current;

    if (!container) {
      return;
    }

    const firstCard = container.firstElementChild as HTMLElement | null;

    if (!firstCard) {
      return;
    }

    const styles = window.getComputedStyle(container);
    const gapValue = styles.columnGap || styles.gap || "0";
    const gap = Number.parseFloat(gapValue);
    const step = firstCard.offsetWidth + (Number.isNaN(gap) ? 0 : gap);
    const maxScroll = container.scrollWidth - container.clientWidth;
    const cardCount = container.children.length;
    const currentIndex = Math.round(container.scrollLeft / Math.max(step, 1));

    if (direction === "next") {
      const targetIndex = currentIndex >= cardCount - 1 ? 0 : currentIndex + 1;
      container.scrollTo({ left: targetIndex * step, behavior: "smooth" });
      return;
    }

    const targetIndex =
      container.scrollLeft <= step * 0.35
        ? Math.max(cardCount - 1, 0)
        : Math.max(currentIndex - 1, 0);

    container.scrollTo({
      left: targetIndex >= cardCount - 1 ? maxScroll : targetIndex * step,
      behavior: "smooth",
    });
  };

  return (
    <main id="top" className="bg-white text-[#014b5c]">
      <input
        id="advanced-factories-popup"
        type="checkbox"
        defaultChecked
        className="peer sr-only"
      />

      <div className="pointer-events-none fixed inset-0 z-[120] flex items-center justify-center bg-[#014b5c]/52 px-5 py-6 opacity-0 transition duration-300 peer-checked:pointer-events-auto peer-checked:opacity-100 sm:px-4">
        <div className="relative grid max-h-[88vh] w-full max-w-[22rem] gap-0 overflow-hidden overflow-y-auto rounded-[1.9rem] border border-[#98dbe8] bg-white shadow-[0_30px_90px_rgba(1,75,92,0.32)] sm:max-h-[90vh] sm:max-w-[28rem] lg:max-h-none lg:max-w-4xl lg:grid-cols-[1.05fr_0.95fr]">
          <div className="order-2 flex flex-col justify-center px-5 py-6 sm:px-8 sm:py-8 lg:order-1 lg:px-10 lg:py-10">
            <p className="text-sm font-medium uppercase tracking-[0.28em] text-[#028aac]">
              Latest News
            </p>

            <h2 className="mt-3 max-w-xl text-[2rem] font-semibold leading-[1.08] text-[#014b5c] sm:text-4xl">
              SpinCulture will be at Advanced Factories at the XarFA stand
            </h2>

            <p className="mt-4 text-[13px] font-medium uppercase tracking-[0.18em] text-[#028aac] sm:text-sm">
              May 5 to May 7, 2026
            </p>

            <p className="mt-4 max-w-xl text-[15px] leading-7 text-[#336a77] md:text-justify">
              Visit us during Advanced Factories to discover how SpinCulture is
              building electrospun fibrous platforms for advanced cell culture,
              bioengineering, and translational research.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="/news/advanced-factories-xarfa"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#028aac] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#017996]"
              >
                Read news
              </a>

              <label
                htmlFor="advanced-factories-popup"
                className="inline-flex min-h-12 cursor-pointer items-center justify-center rounded-full border border-[#028aac] px-6 py-3 text-sm font-semibold text-[#028aac] transition hover:bg-[#eefbfd]"
              >
                Continue to website
              </label>
            </div>
          </div>

          <div className="relative order-1 min-h-[150px] bg-[#dff5fa] sm:min-h-[210px] lg:order-2 lg:min-h-full">
            <Image
              src="/Advanced_Factories.png"
              alt="Advanced Factories"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 40vw"
              priority
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,138,172,0.06),rgba(1,75,92,0.16))]" />
          </div>

          <label
            htmlFor="advanced-factories-popup"
            className="absolute right-3 top-3 z-10 inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/80 bg-white/96 text-xl font-light text-[#014b5c] shadow-sm transition hover:bg-[#eefbfd] sm:right-4 sm:top-4"
            aria-label="Close popup"
          >
            ×
          </label>
        </div>
      </div>

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

          <details className="relative lg:hidden">
            <summary className="flex h-12 w-12 cursor-pointer list-none items-center justify-center rounded-2xl border border-[#b9e7f0] bg-white text-[#028aac] shadow-sm transition hover:bg-[#eefbfd] [&::-webkit-details-marker]:hidden">
              <span className="sr-only">Open navigation menu</span>
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </svg>
            </summary>

            <div className="absolute right-0 top-[calc(100%+0.85rem)] z-50 w-[min(84vw,20rem)] overflow-hidden rounded-[1.6rem] border border-[#b9e7f0] bg-white p-3 shadow-[0_24px_55px_rgba(2,138,172,0.18)]">
              <div className="rounded-[1.2rem] bg-[#f4fcfd] p-3">
                <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#028aac]">
                  Navigate
                </p>

                <div className="mt-3 grid gap-2">
                  <a
                    href="#top"
                    className="rounded-xl bg-white px-4 py-3 text-sm font-medium text-[#028aac] transition hover:bg-[#eefbfd]"
                  >
                    Home
                  </a>
                  <a
                    href="#about"
                    className="rounded-xl bg-white px-4 py-3 text-sm font-medium text-[#028aac] transition hover:bg-[#eefbfd]"
                  >
                    About Us
                  </a>
                  <a
                    href="#technology"
                    className="rounded-xl bg-white px-4 py-3 text-sm font-medium text-[#028aac] transition hover:bg-[#eefbfd]"
                  >
                    Technology
                  </a>
                  <a
                    href="#services"
                    className="rounded-xl bg-white px-4 py-3 text-sm font-medium text-[#028aac] transition hover:bg-[#eefbfd]"
                  >
                    Services
                  </a>
                  <a
                    href="#products"
                    className="rounded-xl bg-white px-4 py-3 text-sm font-medium text-[#028aac] transition hover:bg-[#eefbfd]"
                  >
                    Products
                  </a>
                  <a
                    href="#team"
                    className="rounded-xl bg-white px-4 py-3 text-sm font-medium text-[#028aac] transition hover:bg-[#eefbfd]"
                  >
                    Team
                  </a>
                  <a
                    href="#news"
                    className="rounded-xl bg-white px-4 py-3 text-sm font-medium text-[#028aac] transition hover:bg-[#eefbfd]"
                  >
                    News
                  </a>
                  <a
                    href="#contact"
                    className="rounded-xl bg-[#028aac] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#017996]"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </details>

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

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="flex h-full flex-col rounded-2xl bg-white/90 p-5">
                <p className="text-base font-medium text-[#014b5c]">Approach</p>
                <div className="mt-4 overflow-hidden rounded-xl">
                  <Image
                    src="/SEM_image_cropped.png"
                    alt="Approach"
                    width={600}
                    height={420}
                    className="h-56 w-full object-cover sm:h-44 md:h-52"
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
                    className="h-56 w-full object-cover sm:h-44 md:h-52"
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
                    className="h-56 w-full object-cover sm:h-44 md:h-52"
                  />
                </div>
                <p className="mt-4 text-xl leading-8 text-[#014b5c]">
                  Predictive research models
                </p>
              </div>

              <div className="flex h-full flex-col rounded-2xl bg-white/90 p-5">
                <p className="text-base font-medium text-[#014b5c]">Impact</p>
                <div className="mt-4 flex min-h-[224px] items-center justify-center overflow-hidden rounded-xl bg-[#f8fdfe] p-4 sm:min-h-[176px] md:min-h-[208px]">
                  <Image
                    src="/Reduce_animal_testing_image_cropped.png"
                    alt="Impact"
                    width={600}
                    height={420}
                    className="mx-auto h-auto max-h-[180px] w-full object-contain sm:max-h-[130px] md:max-h-[165px]"
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
                Services tailored to your research and development needs
              </h2>
              <div className="mt-4 max-w-4xl space-y-5 text-[#216674] md:text-justify">
                <p>
                  At SpinCulture, we provide development services based on
                  electrospun fibrous platforms for bioengineering, advanced
                  cell culture, drug delivery, environmental applications, and
                  customized in vitro studies.
                </p>

                <p>
                  We work with researchers, innovators, and companies seeking
                  representative, adaptable, and application-oriented fibrous
                  systems. Our experience includes the development of
                  electrospun membranes for heavy metal capture, drug delivery
                  systems, and cell-related applications, allowing us to
                  approach each project with a broad and versatile perspective.
                </p>

                <p>
                  Because electrospinning enables the creation of specific,
                  complex, and reproducible geometries, our technology can be
                  adapted to a wide range of needs wherever controlled fibrous
                  architectures can add value.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-14">
            <div className="mb-5 flex items-center justify-between gap-4">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#028aac]">
                Swipe or scroll
              </p>
              <p className="text-sm text-[#4d8a97]">
                Explore our services
              </p>
            </div>

            <div className="relative">
              <button
                type="button"
                onClick={() => scrollServices("prev")}
                className="absolute left-0 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#b9e7f0] bg-white/92 text-[#028aac] shadow-sm transition hover:bg-[#eefbfd]"
                aria-label="Previous service"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>

              <button
                type="button"
                onClick={() => scrollServices("next")}
                className="absolute right-0 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#b9e7f0] bg-white/92 text-[#028aac] shadow-sm transition hover:bg-[#eefbfd]"
                aria-label="Next service"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>

              <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-[linear-gradient(90deg,rgba(255,255,255,0.92),rgba(255,255,255,0))]" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-[linear-gradient(270deg,rgba(244,252,253,0.9),rgba(244,252,253,0))]" />

              <div
                ref={servicesCarouselRef}
                className="flex gap-6 overflow-x-auto px-14 pb-4 [scrollbar-width:none] snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden"
              >
                <article className="min-w-[290px] snap-start rounded-3xl border border-[#b9e7f0] bg-white/86 p-8 shadow-sm backdrop-blur-[2px] sm:min-w-[340px] lg:min-w-[360px]">
                  <h3 className="text-2xl font-semibold">
                    Custom Platform Design
                  </h3>
                  <p className="mt-4 leading-7 text-[#216674] md:text-justify">
                    We design electrospun fibrous platforms tailored to specific
                    biological, technical, and research needs. This includes the
                    definition of material strategy, structural concept, and
                    application-oriented design criteria to create solutions adapted
                    to the intended use.
                  </p>
                </article>

                <article className="min-w-[290px] snap-start rounded-3xl border border-[#b9e7f0] bg-white/86 p-8 shadow-sm backdrop-blur-[2px] sm:min-w-[340px] lg:min-w-[360px]">
                  <h3 className="text-2xl font-semibold">
                    In Vitro Model Development
                  </h3>
                  <p className="mt-4 leading-7 text-[#216674] md:text-justify">
                    We support the development of advanced in vitro platforms based
                    on fibrous structures. These systems can provide more relevant
                    environments for cell culture, disease modelling, and
                    biologically oriented research.
                  </p>
                </article>

                <article className="min-w-[290px] snap-start rounded-3xl border border-[#b9e7f0] bg-white/86 p-8 shadow-sm backdrop-blur-[2px] sm:min-w-[340px] lg:min-w-[360px]">
                  <h3 className="text-2xl font-semibold">
                    Drug Delivery and Functional Membranes
                  </h3>
                  <p className="mt-4 leading-7 text-[#216674] md:text-justify">
                    We develop electrospun systems for applications beyond cell
                    culture, including drug delivery approaches and membranes
                    designed for functional performance, such as heavy metal
                    capture.
                  </p>
                </article>

                <article className="min-w-[290px] snap-start rounded-3xl border border-[#b9e7f0] bg-white/86 p-8 shadow-sm backdrop-blur-[2px] sm:min-w-[340px] lg:min-w-[360px]">
                  <h3 className="text-2xl font-semibold">
                    Customized Studies and Validation
                  </h3>
                  <p className="mt-4 leading-7 text-[#216674] md:text-justify">
                    We develop customizable studies adapted to each research
                    question. Our ability to create reproducible and
                    application-specific structures allows us to support tailored
                    validation, comparative studies, and experimental development.
                  </p>
                </article>

                <article className="min-w-[290px] snap-start rounded-3xl border border-[#b9e7f0] bg-white/86 p-8 shadow-sm backdrop-blur-[2px] sm:min-w-[340px] lg:min-w-[360px]">
                  <h3 className="text-2xl font-semibold">
                    R&amp;D Collaboration Services
                  </h3>
                  <p className="mt-4 leading-7 text-[#216674] md:text-justify">
                    We collaborate on applied research and innovation projects
                    involving electrospun systems and advanced fibrous platforms.
                    We do not see ourselves as external providers only, but as
                    active collaborators who get involved in each project with the
                    aim of making these technologies accessible and useful across
                    different fields.
                  </p>
                </article>
              </div>
            </div>
          </div>

          <div className="mt-14 rounded-[2rem] border border-[#b9e7f0] bg-white/86 p-8 shadow-sm backdrop-blur-[2px] md:p-10">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#028aac]">
              How can we help you?
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              <div className="rounded-2xl bg-[#f4fcfd] px-5 py-4 font-medium text-[#014b5c]">
                Technology consultation
              </div>
              <div className="rounded-2xl bg-[#f4fcfd] px-5 py-4 font-medium text-[#014b5c]">
                Electrospun platform design
              </div>
              <div className="rounded-2xl bg-[#f4fcfd] px-5 py-4 font-medium text-[#014b5c]">
                In vitro model development
              </div>
              <div className="rounded-2xl bg-[#f4fcfd] px-5 py-4 font-medium text-[#014b5c]">
                Drug delivery system design
              </div>
              <div className="rounded-2xl bg-[#f4fcfd] px-5 py-4 font-medium text-[#014b5c]">
                Functional membrane development
              </div>
              <div className="rounded-2xl bg-[#f4fcfd] px-5 py-4 font-medium text-[#014b5c]">
                Customized studies and validation
              </div>
              <div className="rounded-2xl bg-[#f4fcfd] px-5 py-4 font-medium text-[#014b5c] md:col-span-2 xl:col-span-3">
                Tailored R&amp;D collaborations
              </div>
            </div>
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

          <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-semibold md:text-4xl">
                Latest updates from SpinCulture
              </h2>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-[#216674] md:text-justify">
                Discover milestones, events, and activities that connect
                SpinCulture with the broader innovation and research ecosystem.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-10 md:grid-cols-2 xl:grid-cols-3">
            <a
              href="/news/advanced-factories-xarfa"
              className="group block transition hover:-translate-y-1"
            >
              <div className="overflow-hidden rounded-[1.75rem] bg-[#028aac]">
                <Image
                  src="/Advanced_Factories.png"
                  alt="Advanced Factories event"
                  width={900}
                  height={520}
                  className="h-64 w-full bg-[#f4fcfd] object-contain"
                />
              </div>

              <div className="pt-6">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#028aac]">
                  Event news
                </p>

                <h3 className="mt-4 text-2xl font-medium leading-[1.2] text-[#028aac] md:text-3xl">
                  SpinCulture will be at Advanced Factories at the XarFA stand
                </h3>

                <p className="mt-5 leading-8 text-[#216674] md:text-justify">
                  Meet us at Advanced Factories as part of the XarFA stand and
                  discover how SpinCulture is contributing to advanced
                  fibrous-platform innovation for research and development.
                </p>

                <p className="mt-6 text-base text-[#9aa9b6]">
                  May 5 to May 7, 2026
                </p>
              </div>
            </a>
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



