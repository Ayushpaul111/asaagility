import Hero from "../components/Hero";
import Features from "../components/Features";
import Coverage from "../components/Coverage";
import Reviews from "../components/Reviews";
import FAQ from "../components/FAQ";
import CtaBanner from "../components/CtaBanner";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Coverage />
      <Reviews />
      <FAQ />
      <CtaBanner />
    </main>
  );
}
