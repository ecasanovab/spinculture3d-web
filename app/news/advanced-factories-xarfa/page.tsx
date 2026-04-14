import Image from "next/image";

export default function AdvancedFactoriesNewsPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-20 text-[#014b5c]">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#028aac]">
          News
        </p>

        <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
          SpinCulture will be at Advanced Factories at the XarFA stand
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-[#216674] md:text-justify">
          SpinCulture will take part in Advanced Factories as part of the XarFA
          stand, where we will share our vision on electrospinning-based
          fibrous platforms and their potential for advanced research and
          development applications.
        </p>

        <p className="mt-6 text-base font-medium text-[#028aac]">
          May 5 to May 7, 2026
        </p>

        <div className="mt-10 overflow-hidden rounded-[2rem] bg-[#f4fcfd]">
          <Image
            src="/Advanced_Factories.png"
            alt="Advanced Factories event"
            width={1200}
            height={720}
            className="h-72 w-full object-contain md:h-96"
          />
        </div>

        <div className="mt-10 space-y-6 text-lg leading-8 text-[#216674] md:text-justify">
          <p>
            This event represents an opportunity to connect with researchers,
            innovators, and industry professionals interested in advanced
            manufacturing, bioengineering, and next-generation technological
            solutions.
          </p>

          <p>
            At the XarFA stand, we will present the SpinCulture approach and
            explain how electrospinning can be used to generate representative,
            reproducible, and application-oriented fibrous systems for a broad
            range of research and development contexts.
          </p>

          <p>
            We look forward to meeting collaborators, partners, and visitors
            who want to explore how these technologies can support new projects
            in cell culture, functional materials, and innovation-driven
            development.
          </p>
        </div>

        <a
          href="/#news"
          className="mt-10 inline-flex rounded-full border border-[#8ad5e5] px-6 py-3 text-sm font-semibold text-[#028aac] transition hover:bg-[#eefbfd]"
        >
          Back to news
        </a>
      </div>
    </main>
  );
}
