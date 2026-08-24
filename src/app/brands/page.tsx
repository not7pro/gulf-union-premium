import BrandsPortfolio from "./BrandsPortfolio";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Brands — 7 Premium Beverage Brands",
  description: "Explore Gulf Union Foods' portfolio: Original®, KLASSE, COBRA, Captain, Splash, Ori, and Al Qobtan — juices, energy drinks, sparkling beverages, and more.",
  alternates: { canonical: "/brands" },
};

export default function Brands() {
  return (
    <main>
      <BrandsPortfolio />
    </main>
  );
}
