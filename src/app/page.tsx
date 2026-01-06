"use client";
import { useState, useEffect } from "react";
import Header from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Coverage from "../components/Coverage";
import Reviews from "../components/Reviews";
import FAQ from "../components/FAQ";
import CtaBanner from "../components/CtaBanner";
import Footer from "../components/Footer";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set isScrolled to true if user scrolls down more than 50px
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="bg-[#141414]">
      {/* This wrapper is the "curtain" that contains all page content except the footer.
          It scrolls up to reveal the footer. */}
      <div className="relative z-10 bg-[#F7F7F7] overflow-x-hidden rounded-b-3xl lg:rounded-b-[50px]">
        <Header isScrolled={isScrolled} />
        <main>
          <Hero />
          <Features />
          <Coverage />
          <Reviews />
          <FAQ />
          <CtaBanner />
        </main>
      </div>
      <Footer />
    </div>
  );
}
