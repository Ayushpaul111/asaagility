import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lithium Batteries for E-Rickshaw, E-Loader & E-Bikes | ASA Agility",
  description:
    "Premium lithium-ion batteries for e-rickshaws, e-loaders, and e-bikes. High performance, long-lasting, eco-friendly battery solutions in Cooch Behar.",
  keywords: [
    "lithium battery for e-rickshaw",
    "e-bike lithium battery",
    "e-loader battery",
    "electric rickshaw battery",
    "scooty battery",
    "lithium ion battery Cooch Behar",
    "toto battery",
  ],
};

const ProductCard = ({
  title,
  image,
  specs,
  warranty,
  pricing,
  slug,
  index,
}: any) => {
  const isEven = index % 2 === 0;

  return (
    <Link href={`/products/${slug}`}>
      <div
        className={`group cursor-pointer ${
          isEven ? "md:flex-row" : "md:flex-row-reverse"
        } flex flex-col md:flex gap-8 items-center py-16 border-b border-black/10 hover:bg-black/[0.01] transition-all`}
      >
        {/* Image Side */}
        <div className="md:w-1/2">
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-black/[0.02] to-transparent" />
            <img
              src={image}
              alt={title}
              className="w-full h-[400px] object-contain transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Content Side */}
        <div className="md:w-1/2 space-y-6">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-2 group-hover:translate-x-2 transition-transform">
              {title}
            </h2>
            <div className="w-16 h-1 bg-black" />
          </div>

          {/* Specs Grid */}
          <div className="grid grid-cols-3 gap-4">
            <div className="border border-black/10 p-4">
              <div className="text-2xl font-bold mb-1">{specs.voltage}</div>
              <div className="text-xs text-black/60 uppercase">Voltage</div>
            </div>
            <div className="border border-black/10 p-4">
              <div className="text-2xl font-bold mb-1">{specs.capacity}</div>
              <div className="text-xs text-black/60 uppercase">Capacity</div>
            </div>
            <div className="border border-black/10 p-4">
              <div className="text-2xl font-bold mb-1">{warranty}Y</div>
              <div className="text-xs text-black/60 uppercase">Warranty</div>
            </div>
          </div>

          {/* Pricing */}
          <div className="flex items-baseline gap-3">
            <span className="text-4xl font-bold">
              ₹{pricing.toLocaleString()}
            </span>
            <span className="text-black/40 uppercase text-sm">
              starting price
            </span>
          </div>

          {/* CTA */}
          <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider group-hover:gap-4 transition-all">
            <span>View Details</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M7 3L14 10L7 17" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
};

const Products = () => {
  const products = [
    {
      title: "E-Rickshaw",
      image:
        "https://pelostudio-storyblok-assets.b-cdn.net/f/236077/2032x1947/c11df9dd29/borne.png/m/smart/filters:quality(70)",
      specs: { voltage: "60V", capacity: "100Ah" },
      warranty: 3,
      pricing: 45000,
      slug: "e-rickshaw-battery",
    },
    {
      title: "E-Loader",
      image:
        "https://pelostudio-storyblok-assets.b-cdn.net/f/236077/2032x1947/c11df9dd29/borne.png/m/smart/filters:quality(70)",
      specs: { voltage: "72V", capacity: "120Ah" },
      warranty: 3,
      pricing: 65000,
      slug: "e-loader-battery",
    },
    {
      title: "E-Bike & Scooty",
      image:
        "https://pelostudio-storyblok-assets.b-cdn.net/f/236077/2032x1947/c11df9dd29/borne.png/m/smart/filters:quality(70)",
      specs: { voltage: "48V", capacity: "30Ah" },
      warranty: 2,
      pricing: 18000,
      slug: "e-bike-scooty-battery",
    },
  ];

  return (
    <section className="min-h-screen">
      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl">
          <div className="text-sm uppercase tracking-widest text-black/40 mb-6">
            Our Products
          </div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-8">
            Power Your Future
          </h1>
          <p className="text-xl text-black/60 leading-relaxed max-w-2xl">
            Industrial-grade lithium batteries engineered for performance,
            reliability, and longevity. Built for the demands of modern electric
            mobility.
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-6">
        {products.map((product, index) => (
          <ProductCard key={product.slug} {...product} index={index} />
        ))}
      </div>

      {/* Footer CTA */}
      <div className="max-w-7xl mx-auto px-6 py-32">
        <div className="border-t border-black/10 pt-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
                Need expert guidance?
              </h2>
              <p className="text-lg text-black/60">
                Our team helps you choose the perfect battery solution for your
                specific needs and budget.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+919876543210"
                className="flex-1 bg-black text-white text-center py-5 font-semibold hover:bg-black/90 transition-colors"
              >
                Call Now
              </a>
              <a
                href="https://wa.me/919876543210"
                className="flex-1 border-2 border-black text-black text-center py-5 font-semibold hover:bg-black hover:text-white transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
