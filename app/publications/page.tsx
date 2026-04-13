const publications = [
  {
    title:
      "Screening of electrospun PS/PCL scaffolds for three-dimensional triple negative breast cancer cell culture: impact of solvent, hydrophobicity, and setup orientation",
    authors:
      "Sira Auselle-Bosch, Marta Pardo, Marta Pareja, Emma Polonio-Alcala & Teresa Puig",
    file: "/Article1.pdf",
    downloadName: "Article1.pdf",
  },
];

export default function PublicationsPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-20 text-[#014b5c]">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#028aac]">
          Publications
        </p>

        <h1 className="mt-6 text-4xl font-semibold leading-tight text-[#028aac] md:text-6xl">
          Scientific Publications
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-[#216674]">
          A curated selection of SpinCulture3D research articles, presented in
          a clean format and ready for download.
        </p>

        <section className="mt-14 grid gap-8 md:max-w-3xl">
          {publications.map((publication) => (
            <article
              key={publication.file}
              className="flex min-h-[560px] flex-col justify-between rounded-[2rem] border border-[#b9e7f0] bg-white p-10 shadow-[0_20px_50px_rgba(2,138,172,0.10)]"
            >
              <div>
                <h2 className="text-3xl font-medium leading-[1.2] text-[#028aac]">
                  {publication.title}
                </h2>

                <p className="mt-10 text-lg leading-9 text-[#216674]">
                  {publication.authors}
                </p>
              </div>

              <div className="mt-12">
                <a
                  href={publication.file}
                  download={publication.downloadName}
                  className="inline-flex items-center rounded-full bg-[#028aac] px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-[#017792]"
                >
                  View Article
                </a>
              </div>
            </article>
          ))}
        </section>

        <a
          href="/"
          className="mt-12 inline-flex rounded-full border border-[#8ad5e5] px-6 py-3 text-sm font-semibold text-[#028aac] transition hover:bg-[#eefbfd]"
        >
          Back to homepage
        </a>
      </div>
    </main>
  );
}
