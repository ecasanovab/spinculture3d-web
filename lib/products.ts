export type Product = {
  name: string;
  slug: string;
  wells: string;
  scaffoldDiameter: string;
  image: string;
  filamentImage: string;
  pricingPacks: {
    quantity: string;
    discount: string;
    price: string;
  }[];
};

export const products: Product[] = [
  {
    name: "SpinWell-6",
    slug: "spinwell-6",
    wells: "6-well format",
    scaffoldDiameter: "30 mm",
    image: "/producte_6wells_homogeneitzada.png",
    filamentImage: "/6-well_filaments.png",
    pricingPacks: [
      { quantity: "10 scaffolds", discount: "Base price", price: "Upon request" },
      { quantity: "30 scaffolds", discount: "5% per unit", price: "Upon request" },
      { quantity: "50 scaffolds", discount: "7.5% per unit", price: "Upon request" },
      { quantity: "100 scaffolds", discount: "10% per unit", price: "Upon request" },
    ],
  },
  {
    name: "SpinWell-12",
    slug: "spinwell-12",
    wells: "12-well format",
    scaffoldDiameter: "17 mm",
    image: "/producte_12wells.png",
    filamentImage: "/12-well_filaments.png",
    pricingPacks: [
      { quantity: "10 scaffolds", discount: "Base price", price: "Upon request" },
      { quantity: "30 scaffolds", discount: "5% per unit", price: "Upon request" },
      { quantity: "50 scaffolds", discount: "7.5% per unit", price: "Upon request" },
      { quantity: "100 scaffolds", discount: "10% per unit", price: "Upon request" },
    ],
  },
  {
    name: "SpinWell-24",
    slug: "spinwell-24",
    wells: "24-well format",
    scaffoldDiameter: "13 mm",
    image: "/producte_24wells.png",
    filamentImage: "/12-well_filaments.png",
    pricingPacks: [
      { quantity: "10 scaffolds", discount: "Base price", price: "Upon request" },
      { quantity: "30 scaffolds", discount: "5% per unit", price: "Upon request" },
      { quantity: "50 scaffolds", discount: "7.5% per unit", price: "Upon request" },
      { quantity: "100 scaffolds", discount: "10% per unit", price: "Upon request" },
    ],
  },
  {
    name: "SpinWell-48",
    slug: "spinwell-48",
    wells: "48-well format",
    scaffoldDiameter: "10 mm",
    image: "/producte_48wells.png",
    filamentImage: "/48-well_filaments.png",
    pricingPacks: [
      { quantity: "10 scaffolds", discount: "Base price", price: "Upon request" },
      { quantity: "30 scaffolds", discount: "5% per unit", price: "Upon request" },
      { quantity: "50 scaffolds", discount: "7.5% per unit", price: "Upon request" },
      { quantity: "100 scaffolds", discount: "10% per unit", price: "Upon request" },
    ],
  },
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
