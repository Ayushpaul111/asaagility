"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    text: "Working with Jin was transformative. The design elevated our brand and user experience to new heights. Their attention to detail is unmatched.",
    author: "Alex Rivera",
    role: "CEO, GrowthLabs",
    avatar:
      "https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/3e3e1091-f8e8-4022-a02a-fa37a35c59a5_320w.jpg",
    rating: 5.0,
    rotation: -10,
    zIndex: 30,
  },
  {
    id: 2,
    text: "Jin's expertise in both UX and visual design made our project seamless. They delivered beyond expectations and on time every milestone.",
    author: "Nina Patel",
    role: "Director, PixelCraft",
    avatar:
      "https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e7074207-4b47-49d2-b86b-6ca1abd5d849_320w.jpg",
    rating: 5.0,
    rotation: -6,
    zIndex: 20,
  },
  {
    id: 3,
    text: "Exceptional designer with a strategic mindset. Jin helped us rethink our entire product experience from the ground up.",
    author: "Marcus Webb",
    role: "VP Product, Velocity",
    avatar:
      "https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/986db8ed-1c5d-42fb-8c1d-4b3716d2e317_320w.jpg",
    rating: 5.0,
    rotation: 0,
    zIndex: 10,
  },
];

const QuoteIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4 text-neutral-700"
  >
    <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
    <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
  </svg>
);

const StarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="text-amber-400"
  >
    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
  </svg>
);

export default function Reviews() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let animationId: number;
    const scrollSpeed = 1; // Pixels per frame

    const scroll = () => {
      if (!isPaused && container) {
        container.scrollLeft += scrollSpeed;

        // Calculate the width of one set of testimonials
        const cardWidth = 360 + 24; // card width + gap
        const singleSetWidth = cardWidth * testimonials.length;

        // Reset to start when we've scrolled past the first set
        if (container.scrollLeft >= singleSetWidth) {
          container.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isPaused]);

  return (
    <section className="pt-16 pb-16 sm:py-24">
      <div className="mb-12 text-center px-4">
        <p className="text-xs uppercase text-neutral-500 tracking-widest mb-2">
          Featured Reviews
        </p>
        <h2 className="text-3xl sm:text-4xl font-medium tracking-tighter">
          Client Highlights
        </h2>
      </div>

      {/* Desktop: Stacked cards */}
      <div className="hidden lg:flex relative items-center justify-center py-12 sm:py-20 min-h-[450px]">
        <div className="relative flex justify-center items-center h-full">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative w-[340px] h-[280px] -mx-[50px] transition-all duration-300 ease-out cursor-pointer"
              style={{
                transform:
                  hoveredId === testimonial.id
                    ? `rotate(${testimonial.rotation}deg) scale(1.05)`
                    : `rotate(${testimonial.rotation}deg) scale(1)`,
                zIndex: hoveredId === testimonial.id ? 40 : testimonial.zIndex,
              }}
              onMouseEnter={() => setHoveredId(testimonial.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Glass effect background */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/10 to-transparent border border-black/5 shadow-[0_25px_25px_rgba(0,0,0,0.1)] backdrop-blur-sm" />

              {/* Card content */}
              <div className="absolute inset-4 rounded-xl bg-white text-neutral-900 shadow-2xl ring-1 ring-neutral-200 overflow-hidden">
                <div className="p-6">
                  <div className="inline-flex items-center justify-center h-8 w-8 rounded-lg bg-neutral-100 ring-1 ring-neutral-200 mb-4">
                    <QuoteIcon />
                  </div>

                  <p className="text-sm leading-relaxed text-neutral-900 mb-4">
                    {testimonial.text}
                  </p>

                  <div className="pt-3 border-t border-neutral-200 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        width={24}
                        height={24}
                        className="h-6 w-6 rounded-full object-cover"
                      />
                      <div>
                        <div className="text-xs font-medium text-neutral-900">
                          {testimonial.author}
                        </div>
                        <div className="text-xs text-neutral-500">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1">
                      <StarIcon />
                      <span className="text-xs font-medium">
                        {testimonial.rating}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile/Tablet: Auto-scrolling horizontal carousel with fade edges */}
      <div className="lg:hidden relative overflow-hidden">
        {/* Left fade edge */}
        <div className="absolute left-0 top-0 bottom-4 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />

        {/* Right fade edge */}
        <div className="absolute right-0 top-0 bottom-4 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-scroll pb-4 scrollbar-hide pl-4"
          style={{ scrollBehavior: "auto" }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {/* Duplicate testimonials for seamless loop */}
          {[...testimonials, ...testimonials, ...testimonials].map(
            (testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="flex-shrink-0 w-[300px] sm:w-[360px]"
              >
                <div className="rounded-2xl bg-white text-neutral-900 shadow-lg hover:shadow-xl transition-shadow duration-300 ring-1 ring-neutral-100 p-6 h-full">
                  <div className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-neutral-50 ring-1 ring-neutral-200 mb-4">
                    <QuoteIcon />
                  </div>

                  <p className="text-sm leading-relaxed text-neutral-700 mb-6">
                    {testimonial.text}
                  </p>

                  <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        width={36}
                        height={36}
                        className="h-9 w-9 rounded-full object-cover ring-2 ring-neutral-100"
                      />
                      <div>
                        <div className="text-sm font-medium text-neutral-900">
                          {testimonial.author}
                        </div>
                        <div className="text-xs text-neutral-500">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1">
                      <StarIcon />
                      <span className="text-sm font-semibold text-neutral-900">
                        {testimonial.rating}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
