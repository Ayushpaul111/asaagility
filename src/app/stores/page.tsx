import { Metadata } from "next";
import {
  MapPinIcon,
  PhoneIcon,
  ClockIcon,
  ExternalLinkIcon,
} from "@/components/icons/ContactIcons";

export const metadata: Metadata = {
  title: "Our Stores - ASA Agility | Lithium Battery Showrooms",
  description:
    "Visit our physical stores to experience our lithium battery solutions firsthand. Find your nearest ASA Agility showroom location, contact details, and directions.",
};

// ============================================
// STORES CONFIG - UPDATE WITH YOUR ACTUAL STORE DETAILS
// ============================================

const stores = [
  {
    id: "01",
    name: "ASA Agility – Main Showroom",
    address: "123 Industrial Area, Phase 2",
    city: "Cooch Behar",
    state: "West Bengal",
    pincode: "736101",
    phone: "+91 94343 38205",
    timings: "Mon – Sat: 9:00 AM – 7:00 PM",
    // Replace with your actual Google Maps directions URL
    directionsUrl: "https://maps.google.com/?q=26.3438,89.4458",
  },
  {
    id: "02",
    name: "ASA Agility – City Branch",
    address: "45 Market Road, Near Bus Stand",
    city: "Jalpaiguri",
    state: "West Bengal",
    pincode: "735101",
    phone: "+91 94343 38206",
    timings: "Mon – Sat: 10:00 AM – 6:30 PM",
    directionsUrl: "https://maps.google.com/?q=26.5435,88.7179",
  },
  {
    id: "03",
    name: "ASA Agility – Service Centre",
    address: "78 NH-31, Industrial Zone",
    city: "Siliguri",
    state: "West Bengal",
    pincode: "734001",
    phone: "+91 94343 38207",
    timings: "Mon – Sat: 9:00 AM – 6:00 PM",
    directionsUrl: "https://maps.google.com/?q=26.7271,88.3953",
  },
];

export default function StoresPage() {
  return (
    <>
      {/* ── Hero Section ── */}
      <section className="relative w-full min-h-[40vh] flex flex-col justify-end px-6 md:px-12 lg:px-20 md:mt-24 mt-12 pb-12 max-w-300 mx-auto">
        <div className="max-w-300 mx-auto w-full pt-12">
          <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">
            © Find Us Near You
          </p>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-6 animate-fade-in animation-delay-100">
            OUR STORES
          </h1>
          <p className="text-gray-600 text-sm md:text-base max-w-xl leading-relaxed animate-fade-in animation-delay-200">
            Visit any of our showrooms to experience our lithium battery
            solutions firsthand. Our expert team is ready to guide you to the
            perfect fit for your fleet.
          </p>
        </div>
      </section>

      {/* ── Stores Grid Section ── */}
      <section className="relative w-full bg-[#f5f5f0] px-6 md:px-12 lg:px-20 py-16 md:py-24">
        <div className="max-w-300 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {stores.map((store) => (
              <div
                key={store.id}
                className="group bg-white rounded-3xl p-7 flex flex-col gap-0 hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Top row: index + timings */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-semibold text-[#5C905E] bg-[#5C905E]/10 px-3 py-1 rounded-full tracking-widest uppercase">
                    {store.id}
                  </span>
                  <div className="flex items-center gap-1.5 text-gray-400">
                    <ClockIcon className="w-3.5 h-3.5" />
                    <span className="text-xs">{store.timings}</span>
                  </div>
                </div>

                {/* Location — hero text */}
                <div className="flex-1 mb-6">
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-none text-gray-900 mb-1 group-hover:text-[#5C905E] transition-colors duration-300">
                    {store.city}
                  </h2>
                  <p className="text-sm text-gray-400 font-medium">{store.state}</p>
                </div>

                {/* Divider */}
                <div className="h-px bg-gray-100 mb-5" />

                {/* Address row */}
                <div className="flex items-start gap-2.5 mb-6">
                  <MapPinIcon className="w-4 h-4 text-[#5C905E] mt-0.5 shrink-0" />
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {store.address}, {store.city} – {store.pincode}
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex gap-3">
                  <a
                    href={`tel:${store.phone.replace(/\s/g, "")}`}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3.5 bg-[#5C905E] text-white text-sm font-semibold rounded-2xl hover:bg-[#375f39] active:scale-[0.98] transition-all duration-200"
                  >
                    <PhoneIcon className="w-4 h-4" />
                    {store.phone}
                  </a>
                  <a
                    href={store.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Get directions"
                    className="w-12 h-12 inline-flex items-center justify-center bg-gray-100 text-gray-600 rounded-2xl hover:bg-gray-900 hover:text-white active:scale-[0.98] transition-all duration-200 shrink-0"
                  >
                    <ExternalLinkIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA Strip ── */}
      <section className="relative w-full bg-[#f5f5f0] px-6 md:px-12 lg:px-20 pb-16 md:pb-24">
        <div className="max-w-300 mx-auto">
          <div className="bg-black rounded-3xl px-8 py-10 md:px-12 md:py-14 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-xs text-white/50 uppercase tracking-widest mb-2">
                Can't visit in person?
              </p>
              <h3 className="text-2xl md:text-3xl font-semibold text-white">
                Book a consultation online.
              </h3>
            </div>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#5C905E] text-white text-sm font-semibold rounded-full hover:bg-[#375f39] transition-colors duration-200 whitespace-nowrap shrink-0"
            >
              Book Online
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
