import BrandsPortfolio from "./BrandsPortfolio";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Brands | Gulf Union Foods",
  description: "Explore Gulf Union Foods' portfolio of beverage brands.",
};

export default function Brands() {
  return (
    <main>
      <BrandsPortfolio />
    </main>
  );
}
