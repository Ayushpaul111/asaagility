import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lithium Battery for E-Rickshaw | ASA Agility Cooch Behar",
  description:
    "Premium lithium-ion battery for e-rickshaws. 3-year warranty, fast charging, 2000+ cycles. Best e-rickshaw battery price in Cooch Behar. Free installation.",
  keywords: [
    "e-rickshaw battery 60v 100ah",
    "lithium battery for electric rickshaw",
    "toto battery Cooch Behar",
    "e-rickshaw battery price",
    "long life rickshaw battery",
  ],
  openGraph: {
    title: "E-Rickshaw Lithium Battery - ASA Agility",
    description:
      "High-performance lithium battery for e-rickshaws with 3-year warranty. 2000+ charge cycles.",
    images: ["/images/e-rickshaw-battery.jpg"],
  },
  alternates: {
    canonical: "/products/e-rickshaw-battery",
  },
};

const page = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Lithium Battery for E-Rickshaw",
    image:
      "https://pelostudio-storyblok-assets.b-cdn.net/f/236077/2032x1947/c11df9dd29/borne.png",
    description:
      "Premium lithium-ion battery for e-rickshaws with 3-year warranty and 2000+ charge cycles",
    brand: {
      "@type": "Brand",
      name: "ASA Agility",
    },
    offers: {
      "@type": "Offer",
      price: "45000",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "ASA Agility",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "127",
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://asaagility.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Products",
        item: "https://asaagility.com/products",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "E-Rickshaw Battery",
        item: "https://asaagility.com/products/e-rickshaw-battery",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <article className="bg-white min-h-screen pt-32">
        {/* Breadcrumb */}
        <nav className="max-w-300 mx-auto px-6 pt-24 pb-4">
          <ol className="flex items-center gap-2 text-sm text-black/60">
            <li>
              <Link href="/" className="hover:text-black">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/products" className="hover:text-black">
                Products & Services
              </Link>
            </li>
            <li>/</li>
            <li className="text-black font-medium">E-Rickshaw Battery</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="max-w-[1200px] mx-auto px-6 py-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Product Image */}
            <div className="relative">
              <div className="bg-[#DFFCF4] rounded-[40px] p-12 flex items-center justify-center">
                <img
                  src="https://pelostudio-storyblok-assets.b-cdn.net/f/236077/2032x1947/c11df9dd29/borne.png/m/smart/filters:quality(70)"
                  alt="lithium-ion battery for e-rickshaw with BMS protection"
                  className="w-full max-w-[400px] h-auto object-contain"
                  loading="eager"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#42F5C2] rounded-full w-24 h-24 flex items-center justify-center text-4xl">
                ⚡
              </div>
            </div>

            {/* Right - Product Info */}
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                E-Rickshaw Lithium Battery
              </h1>
              <p className="text-xl text-black/70 mt-4">
                High-performance lithium-ion battery designed for e-rickshaws in
                Cooch Behar
              </p>

              <div className="mt-8 flex items-baseline gap-4">
                <span className="text-5xl font-bold text-black">₹45,000</span>
                <span className="text-lg text-black/60 line-through">
                  ₹52,000
                </span>
                <span className="bg-[#42F5C2] px-3 py-1 rounded-full text-sm font-semibold">
                  Save 13%
                </span>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <button className="bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors">
                  Request Free Sample
                </button>
                <a
                  href="https://wa.me/919876543210?text=I'm interested in E-Rickshaw Battery"
                  className="bg-[#42F5C2] text-black px-8 py-4 rounded-full font-medium hover:bg-[#3DE5B5] transition-colors"
                >
                  Get Started
                </a>
              </div>

              {/* Quick Features */}
              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-2xl">
                  <div className="text-2xl font-bold text-black">3 Years</div>
                  <div className="text-sm text-black/60 mt-1">Warranty</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-2xl">
                  <div className="text-2xl font-bold text-black">2000+</div>
                  <div className="text-sm text-black/60 mt-1">Cycles</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-2xl">
                  <div className="text-2xl font-bold text-black">4-5 hrs</div>
                  <div className="text-sm text-black/60 mt-1">Charging</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specifications Table */}
        <section className="max-w-[1200px] mx-auto px-6 py-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Print & Design
          </h2>

          <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-black/60">
                    Specification
                  </th>
                  <th className="text-center px-6 py-4 text-sm font-semibold text-black/60">
                    Standard
                  </th>
                  <th className="text-center px-6 py-4 text-sm font-semibold text-black/60">
                    Premium
                  </th>
                  <th className="text-center px-6 py-4 text-sm font-semibold text-black/60">
                    Pro
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-5 font-medium">Voltage</td>
                  <td className="px-6 py-5 text-center">60V</td>
                  <td className="px-6 py-5 text-center">60V</td>
                  <td className="px-6 py-5 text-center">60V</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-5 font-medium">Capacity</td>
                  <td className="px-6 py-5 text-center">80Ah</td>
                  <td className="px-6 py-5 text-center">100Ah</td>
                  <td className="px-6 py-5 text-center">120Ah</td>
                </tr>
                <tr>
                  <td className="px-6 py-5 font-medium">Range per charge</td>
                  <td className="px-6 py-5 text-center">80-100 km</td>
                  <td className="px-6 py-5 text-center">100-120 km</td>
                  <td className="px-6 py-5 text-center">130-150 km</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-5 font-medium">Warranty</td>
                  <td className="px-6 py-5 text-center">2 Years</td>
                  <td className="px-6 py-5 text-center">3 Years</td>
                  <td className="px-6 py-5 text-center">5 Years</td>
                </tr>
                <tr>
                  <td className="px-6 py-5 font-medium">Price</td>
                  <td className="px-6 py-5 text-center font-bold">₹38,000</td>
                  <td className="px-6 py-5 text-center font-bold">₹45,000</td>
                  <td className="px-6 py-5 text-center font-bold">₹55,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 flex items-center gap-3 text-sm text-black/70">
            <span>✓ Everything included</span>
            <span>✓ Custom design available</span>
            <span>✓ Free installation in Cooch Behar</span>
          </div>
        </section>

        {/* Features Section */}
        <section className="max-w-[1200px] mx-auto px-6 py-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">
            Key Features
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-3xl">
              <div className="w-12 h-12 bg-[#42F5C2] rounded-full flex items-center justify-center text-2xl mb-4">
                🔋
              </div>
              <h3 className="text-xl font-semibold mb-2">Long Life Battery</h3>
              <p className="text-black/70">
                2000+ charge cycles with lithium-ion technology. Lasts 5x longer
                than lead-acid batteries.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-3xl">
              <div className="w-12 h-12 bg-[#42F5C2] rounded-full flex items-center justify-center text-2xl mb-4">
                ⚡
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Charging</h3>
              <p className="text-black/70">
                Full charge in just 4-5 hours. Advanced BMS for safe and
                efficient charging.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-3xl">
              <div className="w-12 h-12 bg-[#42F5C2] rounded-full flex items-center justify-center text-2xl mb-4">
                🌱
              </div>
              <h3 className="text-xl font-semibold mb-2">Eco-Friendly</h3>
              <p className="text-black/70">
                Zero emissions, recyclable components. Better for the
                environment and your business.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-3xl">
              <div className="w-12 h-12 bg-[#42F5C2] rounded-full flex items-center justify-center text-2xl mb-4">
                🛡️
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Built-in Protection
              </h3>
              <p className="text-black/70">
                Advanced BMS protects against overcharge, discharge,
                temperature, and short circuit.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-3xl">
              <div className="w-12 h-12 bg-[#42F5C2] rounded-full flex items-center justify-center text-2xl mb-4">
                💪
              </div>
              <h3 className="text-xl font-semibold mb-2">Lightweight Design</h3>
              <p className="text-black/70">
                50% lighter than traditional batteries. Improves vehicle
                efficiency and performance.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-3xl">
              <div className="w-12 h-12 bg-[#42F5C2] rounded-full flex items-center justify-center text-2xl mb-4">
                📱
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Monitoring</h3>
              <p className="text-black/70">
                Real-time battery status monitoring with mobile app connectivity
                (Premium & Pro models).
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-[1200px] mx-auto px-6 py-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <details className="bg-gray-50 rounded-3xl p-6 group">
              <summary className="text-xl font-semibold cursor-pointer list-none flex justify-between items-center">
                What is the lifespan of this e-rickshaw battery?
                <span className="text-2xl group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="mt-4 text-black/70">
                Our lithium-ion batteries are designed to last 2000+ charge
                cycles, which translates to approximately 5-7 years of regular
                use. This is significantly longer than traditional lead-acid
                batteries.
              </p>
            </details>

            <details className="bg-gray-50 rounded-3xl p-6 group">
              <summary className="text-xl font-semibold cursor-pointer list-none flex justify-between items-center">
                How long does it take to fully charge?
                <span className="text-2xl group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="mt-4 text-black/70">
                The battery takes 4-5 hours for a full charge with our
                recommended charger. Fast charging capability ensures minimal
                downtime for your e-rickshaw business.
              </p>
            </details>

            <details className="bg-gray-50 rounded-3xl p-6 group">
              <summary className="text-xl font-semibold cursor-pointer list-none flex justify-between items-center">
                Is installation included in Cooch Behar?
                <span className="text-2xl group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="mt-4 text-black/70">
                Yes, we provide free professional installation services in Cooch
                Behar and surrounding areas. Our technicians will ensure proper
                setup and explain maintenance procedures.
              </p>
            </details>

            <details className="bg-gray-50 rounded-3xl p-6 group">
              <summary className="text-xl font-semibold cursor-pointer list-none flex justify-between items-center">
                What warranty coverage is provided?
                <span className="text-2xl group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="mt-4 text-black/70">
                We offer comprehensive warranty coverage ranging from 2 to 5
                years depending on the model. Warranty covers manufacturing
                defects and battery performance issues.
              </p>
            </details>

            <details className="bg-gray-50 rounded-3xl p-6 group">
              <summary className="text-xl font-semibold cursor-pointer list-none flex justify-between items-center">
                Can I upgrade from lead-acid to lithium battery?
                <span className="text-2xl group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="mt-4 text-black/70">
                Absolutely! Our batteries are designed as drop-in replacements
                for lead-acid batteries. We'll help you with the conversion
                process and handle all technical aspects.
              </p>
            </details>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-[1200px] mx-auto px-6 py-20">
          <div className="bg-black rounded-[40px] px-12 py-16 text-center">
            <h2 className="text-4xl md:text-5xl font-light text-white">
              Ready to upgrade your e-rickshaw?
            </h2>
            <p className="text-xl text-white/80 mt-4 max-w-2xl mx-auto">
              Get in touch with our experts in Cooch Behar for personalized
              consultation and best pricing
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919876543210"
                className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-full text-base font-medium hover:bg-gray-100 transition-colors"
              >
                📞 Call: +91 98765 43210
              </a>
              <a
                href="https://wa.me/919876543210?text=I'm interested in E-Rickshaw Battery"
                className="inline-flex items-center justify-center gap-2 bg-[#42F5C2] text-black px-8 py-4 rounded-full text-base font-medium hover:bg-[#3DE5B5] transition-colors"
              >
                💬 WhatsApp Us
              </a>
            </div>
          </div>
        </section>
      </article>
    </>
  );
};

export default page;
