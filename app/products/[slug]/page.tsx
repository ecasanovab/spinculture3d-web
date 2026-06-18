import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlug, products } from "@/lib/products";

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps<"/products/[slug]">) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product not found | SpinCulture",
    };
  }

  return {
    title: `${product.name} specifications | SpinCulture`,
    description: `${product.name} technical specifications for biocompatible PCL electrospun scaffolds.`,
  };
}

export default async function ProductPage({
  params,
}: PageProps<"/products/[slug]">) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#f4fcfd] text-[#014b5c]">
      <section className="border-b border-[#b9e7f0] bg-white px-6 py-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <Link
            href="/#products"
            className="text-sm font-medium text-[#028aac] transition hover:text-[#014b5c]"
          >
            Back to products
          </Link>
          <Link
            href="/#contact"
            className="rounded-full border border-[#028aac] px-5 py-2 text-sm font-medium text-[#028aac] transition hover:bg-[#028aac] hover:text-white"
          >
            Contact us
          </Link>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div className="grid gap-5">
            <div className="overflow-hidden rounded-[2rem] border border-[#b9e7f0] bg-white p-4 shadow-sm">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-[#eefbfd]">
                <Image
                  src={product.image}
                  alt={`${product.name} electrospun cell culture platform`}
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-contain object-center"
                  priority
                />
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-[#b9e7f0] bg-white p-4 shadow-sm">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-[#eefbfd]">
                <Image
                  src={product.filamentImage}
                  alt={`${product.name} PCL electrospun filament morphology`}
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover object-center"
                />
              </div>
              <p className="px-2 pt-4 text-sm text-[#216674]">
                Representative PCL electrospun filament morphology. Scale bar:
                100 micrometers.
              </p>
            </div>

            <div className="rounded-[2rem] border border-[#8ad5e5] bg-[#014b5c] p-6 text-white shadow-sm">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#98dbe8]">
                R&amp;D collaboration offer
              </p>
              <h2 className="mt-3 text-2xl font-semibold leading-tight">
                Developing an R&amp;D project?
              </h2>
              <p className="mt-4 leading-7 text-[#d8f2f7]">
                Contact us if you are developing a research project. We are
                interested in collaborating with research groups through
                collaboration agreements.
              </p>
              <p className="mt-4 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-[#e7fbff]">
                Only 5 collaboration slots available.
              </p>
              <Link
                href="/#contact"
                className="mt-5 inline-flex rounded-full bg-white px-5 py-3 text-sm font-medium text-[#014b5c] transition hover:bg-[#eefbfd]"
              >
                Contact us
              </Link>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#028aac]">
              Technical sheet
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
              {product.name}
            </h1>
            <p className="mt-5 text-lg leading-8 text-[#216674] md:text-justify">
              Biocompatible PCL electrospun scaffold platform designed for
              advanced cell culture workflows in the {product.wells}.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-[#b9e7f0] bg-white p-6 shadow-sm">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#028aac]">
                  Material
                </p>
                <p className="mt-3 text-xl font-semibold">
                  Biocompatible PCL
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-[#b9e7f0] bg-white p-6 shadow-sm">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#028aac]">
                  Format
                </p>
                <p className="mt-3 text-xl font-semibold">{product.wells}</p>
              </div>

              <div className="rounded-[1.5rem] border border-[#b9e7f0] bg-white p-6 shadow-sm">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#028aac]">
                  Scaffold diameter
                </p>
                <p className="mt-3 text-xl font-semibold">
                  {product.scaffoldDiameter}
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-[#b9e7f0] bg-white p-6 shadow-sm">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#028aac]">
                  Sterility
                </p>
                <p className="mt-3 text-xl font-semibold">
                  Supplied non-sterile*
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-[#b9e7f0] bg-white p-6 shadow-sm">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#028aac]">
                  Supplied as
                </p>
                <div className="mt-3 flex min-h-28 flex-col justify-between gap-4 sm:flex-row sm:items-center">
                  <p className="text-xl font-semibold">Scaffolds only</p>
                  <span className="inline-flex h-28 w-28 shrink-0 items-center justify-center self-center rounded-full bg-[#eefbfd] px-4 text-center text-[0.64rem] font-semibold uppercase leading-4 tracking-[0.12em] text-[#028aac] sm:self-auto">
                    Compatible with laboratory standards
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-[1.5rem] border border-[#8ad5e5] bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-semibold">Pricing and packs</h2>
              <p className="mt-4 leading-8 text-[#216674] md:text-justify">
                Plates are not included; we ship the scaffolds only. Pack
                prices are listed below.
              </p>

              <div className="mt-6 overflow-hidden rounded-2xl border border-[#b9e7f0]">
                <div className="grid grid-cols-2 bg-[#eefbfd] px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#028aac]">
                  <p>Pack</p>
                  <p>Price</p>
                </div>
                {product.pricingPacks.map((pack) => (
                  <div
                    key={pack.quantity}
                    className="grid grid-cols-2 border-t border-[#d4eef4] px-5 py-4 text-sm text-[#216674]"
                  >
                    <p className="font-medium text-[#014b5c]">
                      {pack.quantity}
                    </p>
                    <p className="font-semibold text-[#014b5c]">
                      {pack.price}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-[#eefbfd] p-5">
                <p className="leading-7 text-[#216674]">
                  Interested in a pack? Send us a message through the contact
                  form and we will prepare a tailored quotation.
                </p>
                <Link
                  href="/#contact"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#028aac] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#017590]"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="M4 6h16v12H4z" />
                    <path d="m4 7 8 6 8-6" />
                  </svg>
                  Contact for quotation
                </Link>
              </div>
            </div>

            <div className="mt-8 rounded-[1.5rem] border border-[#8ad5e5] bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-semibold">
                *Sterilization protocol
              </h2>
              <p className="mt-4 leading-8 text-[#216674] md:text-justify">
                At this stage, scaffolds are not supplied sterile. On request,
                we provide an alcohol and UV-based sterilization protocol that
                has worked reliably in our workflow.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
