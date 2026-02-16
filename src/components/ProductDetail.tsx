"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useMemo } from "react";

interface Specification {
  label: string;
  value: string;
}

export interface ProductVariant {
  label: string;
  voltage: string;
  capacity: string;
  warranty: number;
  price: number;
}

interface ProductDetailProps {
  name: string;
  description: string;
  image: string;
  voltage: string;
  capacity: string;
  warranty: number;
  price: number;
  specifications: Specification[];
  features: string[];
  variants?: ProductVariant[];
}

const ProductDetail = ({
  name,
  description,
  image,
  voltage,
  capacity,
  warranty,
  price,
  specifications,
  features,
  variants,
}: ProductDetailProps) => {
  const [selectedVariantIndex, setSelectedVariantIndex] = useState<number>(-1);
  const hasVariants = variants && variants.length > 0;

  // Derive active display values from selected variant or fallback to base props
  const activeValues = useMemo(() => {
    if (hasVariants && selectedVariantIndex >= 0) {
      const v = variants[selectedVariantIndex];
      return {
        voltage: v.voltage,
        capacity: v.capacity,
        warranty: v.warranty,
        price: v.price,
      };
    }
    return { voltage, capacity, warranty, price };
  }, [
    hasVariants,
    selectedVariantIndex,
    variants,
    voltage,
    capacity,
    warranty,
    price,
  ]);

  // Price range for variants
  const priceRange = useMemo(() => {
    if (!hasVariants) return null;
    const prices = variants.map((v) => v.price);
    return { min: Math.min(...prices), max: Math.max(...prices) };
  }, [hasVariants, variants]);

  const displayPrice =
    hasVariants && selectedVariantIndex === -1 && priceRange
      ? `₹${priceRange.min.toLocaleString()} – ₹${priceRange.max.toLocaleString()}`
      : `₹${activeValues.price.toLocaleString()}`;

  const warrantyText =
    activeValues.warranty >= 12
      ? `${Math.floor(activeValues.warranty / 12)} year${Math.floor(activeValues.warranty / 12) > 1 ? "s" : ""}`
      : `${activeValues.warranty} month${activeValues.warranty > 1 ? "s" : ""}`;

  return (
    <div className="min-h-screen max-w-300 pt-32 mx-auto">
      {/* Navigation */}
      <div className="max-w-300 mx-auto px-6">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-black transition-colors text-sm uppercase tracking-wider"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M10 3L5 8L10 13" />
          </svg>
          <span>All Products</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-300 mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20 lg:pt-8 lg:pb-28">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left — Editorial Content */}
            <div className="space-y-10">
              <div className="space-y-6">
                <h1 className="text-[clamp(3rem,4vw,4rem)] font-extrabold tracking-tight leading-[0.9] text-black">
                  {name}
                </h1>
                <p className="text-lg text-black/60 max-w-lg">{description}</p>
              </div>

              {/* Variant Selector */}
              {hasVariants && (
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-black uppercase tracking-wider">
                    Options with Warranty
                  </label>
                  <div className="relative w-full max-w-sm">
                    <select
                      value={selectedVariantIndex}
                      onChange={(e) =>
                        setSelectedVariantIndex(Number(e.target.value))
                      }
                      className="w-full appearance-none border border-black/20 bg-white px-4 py-3.5 pr-10 text-sm font-medium text-black focus:outline-none focus:border-black transition-colors cursor-pointer"
                    >
                      <option value={-1}>Choose an option</option>
                      {variants.map((variant, index) => (
                        <option key={index} value={index}>
                          {variant.label}
                        </option>
                      ))}
                    </select>
                    <svg
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-black/40 pointer-events-none"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </div>
                </div>
              )}

              {/* Price Block */}
              <div className="space-y-2">
                <div className="inline-flex items-end gap-4">
                  <span className="text-5xl font-extrabold text-black">
                    {displayPrice}
                  </span>
                  {hasVariants == null && (
                    <span className="text-xs uppercase tracking-widest text-black/40 mb-1">
                      Starting
                    </span>
                  )}
                </div>

                <p className="text-sm text-black/50">
                  {warrantyText} comprehensive warranty included
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="tel:+919434338205"
                  className="px-8 py-4 bg-black text-white font-semibold hover:bg-black/90 transition"
                >
                  Call to Order
                </a>
                <a
                  href="https://wa.me/919434338205"
                  className="px-8 py-4 border border-black text-black font-semibold hover:bg-black/5 transition"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Right — Product Visual */}
            <div className="relative w-full h-130">
              <Image
                src={image}
                alt={name}
                fill
                className="object-contain"
                priority
              />

              {/* Floating Specs */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-full max-w-md">
                <div className="grid grid-cols-2 gap-4">
                  <div className="backdrop-blur-md bg-white/80 border border-black/10 rounded-xl p-5">
                    <div className="text-3xl font-bold text-black">
                      {activeValues.voltage}
                    </div>
                    <div className="text-xs uppercase tracking-widest text-black/40">
                      Voltage
                    </div>
                  </div>
                  <div className="backdrop-blur-md bg-white/80 border border-black/10 rounded-xl p-5">
                    <div className="text-3xl font-bold text-black">
                      {activeValues.capacity}
                    </div>
                    <div className="text-xs uppercase tracking-widest text-black/40">
                      Capacity
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <div className="border-t border-black/10">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 uppercase tracking-tight text-black">
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-black/10">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 hover:bg-black/2 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-1 h-12 bg-[#5C905E] shrink-0" />
                  <p className="text-black/80 leading-relaxed">{feature}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Technical Specifications */}
      <div className="border-t border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 uppercase tracking-tight text-black">
            Technical Specifications
          </h2>

          <div className="divide-y divide-black/10 rounded-xl overflow-hidden border border-black/10 bg-white">
            {specifications.map((spec, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-6 p-5 sm:p-6 hover:bg-black/[0.02] transition-colors"
              >
                <span className="text-xs sm:text-sm uppercase tracking-wider text-black/60">
                  {spec.label}
                </span>

                <span className="text-base sm:text-lg font-semibold text-black">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="border-t border-black/10">
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight text-black">
            Ready to upgrade?
          </h2>
          <p className="text-xl text-black/60 mt-6 max-w-2xl mx-auto">
            Contact our team for custom solutions and volume pricing
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <a
              href="tel:+919434338205"
              className="flex-1 bg-black text-white text-center py-4 font-semibold hover:bg-black/90 transition-colors"
            >
              Call Now
            </a>
            <a
              href="https://wa.me/919434338205"
              className="flex-1 border border-black/20 text-black text-center py-4 font-semibold hover:bg-black/5 transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
