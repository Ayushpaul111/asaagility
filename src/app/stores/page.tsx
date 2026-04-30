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
    name: "Dankuni Branch",
    address: "Opp. IRC, Delhi Road, Pandankuni",
    city: "Dankuni, Hooghly",
    state: "West Bengal",
    pincode: "",
    phone: "+91 92396 38205",
    timings: "Mon - Sat: 9:00 AM - 7:00 PM",
    directionsUrl: "https://maps.google.com/?q=Dankuni+Hooghly",
  },
  {
    id: "02",
    name: "Dharmatala Branch",
    address: "6 S.N. Road, New Dharmatala",
    city: "Cooch Behar",
    state: "West Bengal",
    pincode: "",
    phone: "+91 92396 38205",
    timings: "Mon - Sat: 9:00 AM - 7:00 PM",
    directionsUrl: "https://maps.google.com/?q=New+Dharmatala+Cooch+Behar",
  },
  {
    id: "03",
    name: "Tufanganj Branch",
    address: "Ila Devi Road, Tufanganj",
    city: "Cooch Behar",
    state: "West Bengal",
    pincode: "",
    phone: "+91 92396 38205",
    timings: "Mon - Sat: 9:00 AM - 7:00 PM",
    directionsUrl: "https://maps.google.com/?q=Tufanganj+Cooch+Behar",
  },
  {
    id: "04",
    name: "Dinhata Branch",
    address: "College Para, Dinhata",
    city: "Cooch Behar",
    state: "West Bengal",
    pincode: "",
    phone: "+91 92396 38205",
    timings: "Mon - Sat: 9:00 AM - 7:00 PM",
    directionsUrl: "https://maps.google.com/?q=Dinhata+Cooch+Behar",
  },
  {
    id: "05",
    name: "Mathabhanga Branch",
    address: "Main Road, Mathabhanga",
    city: "Cooch Behar",
    state: "West Bengal",
    pincode: "",
    phone: "+91 92396 38205",
    timings: "Mon - Sat: 9:00 AM - 7:00 PM",
    directionsUrl: "https://maps.google.com/?q=Mathabhanga+Cooch+Behar",
  },
  {
    id: "06",
    name: "Baneswar Branch",
    address: "Baneswar Chowpati, Baneswar",
    city: "Cooch Behar",
    state: "West Bengal",
    pincode: "",
    phone: "+91 92396 38205",
    timings: "Mon - Sat: 9:00 AM - 7:00 PM",
    directionsUrl: "https://maps.google.com/?q=Baneswari+Cooch+Behar",
  },
  {
    id: "07",
    name: "Alipurduar Branch",
    address: "Beltala, Alipurduar",
    city: "Alipurduar",
    state: "West Bengal",
    pincode: "",
    phone: "+91 92396 38205",
    timings: "Mon - Sat: 9:00 AM - 7:00 PM",
    directionsUrl: "https://maps.google.com/?q=Beltala+Alipurduar",
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

      {/* ── Main Branch Banner ── */}
      <section className="relative w-full bg-[#f5f5f0] px-6 md:px-12 lg:px-20 pt-16 md:pt-24 pb-6">
        <div className="max-w-300 mx-auto">
          <div className="relative bg-blue-950 rounded-3xl overflow-hidden px-8 py-10 md:px-14 md:py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            {/* Background accent */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[#5C905E]/20 blur-3xl" />
              <div className="absolute bottom-0 left-1/3 w-48 h-48 rounded-full bg-[#5C905E]/10 blur-2xl" />
            </div>

            {/* Left: label + name + address */}
            <div className="relative z-10">
              <span className="inline-block text-xs font-semibold text-[#5C905E] bg-[#5C905E]/15 px-3 py-1 rounded-full tracking-widest uppercase mb-4">
                Main Branch
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-2">
                {stores[0].name}
              </h2>
              <p className="text-white/50 text-sm mb-1">
                {stores[0].address}, {stores[0].city} – {stores[0].pincode}
              </p>
              <div className="flex items-center gap-4 mt-4 flex-wrap">
                <div className="flex items-center gap-1.5 text-white/40 text-xs">
                  <ClockIcon className="w-3.5 h-3.5" />
                  {stores[0].timings}
                </div>
                <div className="flex items-center gap-1.5 text-white/40 text-xs">
                  <MapPinIcon className="w-3.5 h-3.5" />
                  {stores[0].city}, {stores[0].state}
                </div>
              </div>
            </div>

            {/* Right: CTAs */}
            <div className="relative z-10 flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href={`tel:${stores[0].phone.replace(/\s/g, "")}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#5C905E] text-white text-sm font-semibold rounded-full hover:bg-[#375f39] active:scale-[0.98] transition-all duration-200 whitespace-nowrap"
              >
                <PhoneIcon className="w-4 h-4" />
                {stores[0].phone}
              </a>
              <a
                href={stores[0].directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/10 text-white text-sm font-semibold rounded-full hover:bg-white/20 active:scale-[0.98] transition-all duration-200 whitespace-nowrap"
              >
                <ExternalLinkIcon className="w-4 h-4" />
                Get Directions
              </a>
            </div>
          </div>
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
                    {store.name}
                  </h2>
                  <p className="text-sm text-gray-400 font-medium">
                    {store.city}
                  </p>
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
