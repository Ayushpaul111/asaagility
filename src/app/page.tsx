import Hero from "../components/Hero";
import Features from "../components/Features";
import Coverage from "../components/Coverage";
import Reviews from "../components/Reviews";
import Faq from "../components/FAQ";
import CtaBanner from "../components/CtaBanner";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Coverage />
      <Reviews />
      <Faq />
      <CtaBanner />
    </main>
  );
}
