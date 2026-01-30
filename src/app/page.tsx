import Hero from "../components/Hero";
import Features from "../components/Features";
import Compare from "../components/Compare";
import Reviews from "../components/Reviews";
import Faq from "../components/FAQ";
import CtaBanner from "../components/CtaBanner";

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
