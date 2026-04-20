const publications = [
  {
    title:
      "Screening of electrospun PS/PCL scaffolds for three-dimensional triple negative breast cancer cell culture: impact of solvent, hydrophobicity, and setup orientation",
    authors:
      "Sira Auselle-Bosch, Marta Pardo, Marta Pareja, Emma Polonio-Alcala & Teresa Puig",
    file: "/Article1.pdf",
    downloadName: "Article1.pdf",
  },
  {
    title:
      "Elucidating the Role of FASN in Lung Cancer Stem Cells in Sensitive and Resistant EGFR-Mutated Non-Small Cell Lung Cancer Cells",
    authors:
      "Emma Polonio-Alcalá, Sira Ausellé-Bosch, Gerard Riesco-Llach, Pablo Novales, Lidia Feliu, Marta Planas, Joaquim Ciurana and Teresa Puig",
    file: "/Article2.pdf",
    downloadName: "Article2.pdf",
  },
  {
    title:
      "The solvent chosen for the manufacturing of electrospun polycaprolactone scaffolds influences cell behavior of lung cancer cells",
    authors:
      "Emma Polonio-Alcalá, Enric Casanova-Batlle, Teresa Puig and Joaquim Ciurana",
    file: "/Article3.pdf",
    downloadName: "Article3.pdf",
  },
  {
    title:
      "Fatty acid synthase as a feasible biomarker for triple negative breast cancer stem cell subpopulation cultured on electrospun scaffolds",
    authors:
      "Marc Rabionet, Emma Polonio-Alcalá, Joana Relat, Marc Yeste, Jennifer Sims-Mourtada, April M. Kloxin, Marta Planas, Lidia Feliu, Joaquim Ciurana and Teresa Puig",
    file: "/Article4.pdf",
    downloadName: "Article4.pdf",
  },
  {
    title:
      "Polycaprolactone Electrospun Scaffolds Produce an Enrichment of Lung Cancer Stem Cells in Sensitive and Resistant EGFRm Lung Adenocarcinoma",
    authors:
      "Emma Polonio-Alcalá, Marc Rabionet, Santiago Ruiz-Martínez, Sònia Palomeras, Rut Porta, Carmen Vásquez-Dongo, Joaquim Bosch-Barrera, Teresa Puig and Joaquim Ciurana",
    file: "/Article5.pdf",
    downloadName: "Article5.pdf",
  },
  {
    title:
      "Manufacture of PCL scaffolds through electrospinning technology to accommodate Triple Negative Breast Cancer cells Culture",
    authors: "Marc Rabionet, Teresa Puig and Joaquim Ciurana",
    file: "/Article6.pdf",
    downloadName: "Article6.pdf",
  },
  {
    title:
      "PLA Electrospun Scaffolds for Three-Dimensional Triple-Negative Breast Cancer Cell Culture",
    authors:
      "Emma Polonio-Alcalá, Marc Rabionet, Xavier Gallardo, David Angelats, Joaquim Ciurana, Santiago Ruiz-Martínez and Teresa Puig",
    file: "/Article7.pdf",
    downloadName: "Article7.pdf",
  },
  {
    title:
      "Electrospinning PCL Scaffolds Manufacture for Three-Dimensional Breast Cancer Cell Culture",
    authors: "Marc Rabionet, Marc Yeste, Teresa Puig and Joaquim Ciurana",
    file: "/Article8.pdf",
    downloadName: "Article8.pdf",
  },
  {
    title:
      "Electrospinning parameters selection to manufacture polycaprolactone scaffolds for three-dimensional breast cancer cell culture and enrichment",
    authors: "Marc Rabionet, Teresa Puig and Joaquim Ciurana",
    file: "/Article9.pdf",
    downloadName: "Article9.pdf",
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

        <section className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {publications.map((publication) => (
            <article
              key={publication.file}
              className="flex min-h-[520px] flex-col justify-between rounded-[2rem] border border-[#b9e7f0] bg-white p-10 shadow-[0_20px_50px_rgba(2,138,172,0.10)]"
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
