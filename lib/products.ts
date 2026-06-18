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
      { quantity: "10 scaffolds", discount: "Base price", price: "15.00 EUR" },
      { quantity: "30 scaffolds", discount: "5% per unit", price: "40.00 EUR" },
      { quantity: "50 scaffolds", discount: "7.5% per unit", price: "65.00 EUR" },
      { quantity: "100 scaffolds", discount: "10% per unit", price: "125.00 EUR" },
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
      { quantity: "10 scaffolds", discount: "Base price", price: "10.00 EUR" },
      { quantity: "30 scaffolds", discount: "5% per unit", price: "27.50 EUR" },
      { quantity: "50 scaffolds", discount: "7.5% per unit", price: "45.00 EUR" },
      { quantity: "100 scaffolds", discount: "10% per unit", price: "90.00 EUR" },
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
      { quantity: "10 scaffolds", discount: "Base price", price: "7.50 EUR" },
      { quantity: "30 scaffolds", discount: "5% per unit", price: "15.00 EUR" },
      { quantity: "50 scaffolds", discount: "7.5% per unit", price: "25.00 EUR" },
      { quantity: "100 scaffolds", discount: "10% per unit", price: "50.00 EUR" },
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
      { quantity: "10 scaffolds", discount: "Base price", price: "7.50 EUR" },
      { quantity: "30 scaffolds", discount: "5% per unit", price: "15.00 EUR" },
      { quantity: "50 scaffolds", discount: "7.5% per unit", price: "25.00 EUR" },
      { quantity: "100 scaffolds", discount: "10% per unit", price: "50.00 EUR" },
    ],
  },
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
