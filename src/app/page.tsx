import type { Metadata } from "next";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Compare from "../components/Compare";
import Reviews from "../components/Reviews";
import Faq from "../components/FAQ";
import CtaBanner from "../components/CtaBanner";

export const metadata: Metadata = {
  title: "ASA Agility | Lithium Battery for E-Rickshaw & E-Bike in Cooch Behar",
  description:
    "ASA Agility offers premium lithium batteries for e-rickshaw, e-loader, and e-bike in Cooch Behar, West Bengal. Trusted by 500+ dealers with fast approval finance options.",
  keywords: [
    "ASA Agility",
    "lithium battery Cooch Behar",
    "lithium battery for e-rickshaw",
    "toto battery",
    "e-bike battery",
    "e-loader battery",
    "Kamta battery",
    "Sanaka battery",
    "electric vehicle battery West Bengal",
    "lithium battery manufacturer",
  ],
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Compare />
      <Reviews />
      <Faq />
      <CtaBanner />
    </main>
  );
}
