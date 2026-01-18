import { Metadata } from "next";
import { Battery, Zap, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch for E-Rickshaw and E-Bike battery solutions. B2B distribution and dealer inquiries welcome.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen grid lg:grid-cols-[45%_55%] pt-10">
      {/* Left Section - Hero with Background */}
      <div className="relative min-h-screen flex items-center justify-center p-8 lg:p-16">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 to-teal-900/60 z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="relative z-20 max-w-xl">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-10 shadow-2xl">
            <h1 className="text-4xl lg:text-5xl font-serif font-normal text-gray-900 mb-6 leading-tight">
              Power your fleet with premium batteries
            </h1>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Partner with India's leading distributor of E-Rickshaw and E-Bike
              batteries. We supply reliable power solutions to dealers and
              businesses nationwide.
            </p>

            {/* Testimonial Box */}
            <div className="bg-orange-50 border-l-4 border-orange-200 rounded-lg p-6 mb-8">
              <p className="text-gray-800 mb-4 leading-relaxed">
                "Partnering with this distributor transformed our business.
                Reliable batteries, competitive pricing, and exceptional support
                have helped us grow to 50+ vehicles."
              </p>
              <div className="border-t border-orange-200 pt-4">
                <div className="font-semibold text-gray-900">Rajesh Kumar</div>
                <div className="text-sm text-gray-600">
                  Fleet Owner, Delhi NCR
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="text-center pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600 mb-4">
                Trusted by 500+ dealers across India
              </p>
              <div className="flex items-center justify-center gap-8 opacity-60">
                <Battery className="w-8 h-8 text-gray-400" />
                <Zap className="w-8 h-8 text-gray-400" />
                <TrendingUp className="w-8 h-8 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section - Form */}
      <div className="bg-white flex items-center justify-center p-8 lg:p-16">
        <div className="w-full max-w-lg">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="businessEmail"
                className="block text-sm font-semibold text-gray-900 mb-2"
              >
                Business Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="businessEmail"
                name="businessEmail"
                required
                placeholder="Business email address"
                className="w-full px-0 py-3 border-0 border-b-2 border-gray-300 focus:border-gray-900 focus:ring-0 outline-none transition text-gray-900 placeholder:text-gray-400"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-semibold text-gray-900 mb-2"
              >
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                placeholder="+91 98765 43210"
                className="w-full px-0 py-3 border-0 border-b-2 border-gray-300 focus:border-gray-900 focus:ring-0 outline-none transition text-gray-900 placeholder:text-gray-400"
              />
            </div>

            <div>
              <label
                htmlFor="businessType"
                className="block text-sm font-semibold text-gray-900 mb-2"
              >
                Business Type <span className="text-red-500">*</span>
              </label>
              <select
                id="businessType"
                name="businessType"
                required
                className="w-full px-0 py-3 border-0 border-b-2 border-gray-300 focus:border-gray-900 focus:ring-0 outline-none transition text-gray-900 bg-white appearance-none cursor-pointer"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath fill='none' stroke='%23666' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3E%3C/svg%3E")`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 0.5rem center",
                  backgroundSize: "1.5em 1.5em",
                }}
              >
                <option value="">Select business type</option>
                <option value="dealer">Dealer</option>
                <option value="distributor">Distributor</option>
                <option value="manufacturer">Manufacturer</option>
                <option value="fleet-owner">Fleet Owner</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="city"
                className="block text-sm font-semibold text-gray-900 mb-2"
              >
                City <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="city"
                name="city"
                required
                placeholder="Mumbai"
                className="w-full px-0 py-3 border-0 border-b-2 border-gray-300 focus:border-gray-900 focus:ring-0 outline-none transition text-gray-900 placeholder:text-gray-400"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-gray-900 mb-2"
              >
                Your Requirements
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                placeholder="Tell us about your battery requirements..."
                className="w-full px-0 py-3 border-0 border-b-2 border-gray-300 focus:border-gray-900 focus:ring-0 outline-none transition resize-none text-gray-900 placeholder:text-gray-400"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-4 px-6 rounded-lg transition duration-200 mt-8"
            >
              Next
            </button>

            <div className="flex items-start gap-3 pt-4">
              <input
                type="checkbox"
                id="updates"
                name="updates"
                className="mt-1 w-4 h-4 text-gray-900 border-gray-300 rounded focus:ring-gray-900"
              />
              <label
                htmlFor="updates"
                className="text-sm text-gray-600 leading-relaxed"
              >
                Get updates about upcoming product launches, dealer events, and
                industry insights.
              </label>
            </div>

            <div className="text-right text-sm text-gray-400 pt-4">
              Step 1/3
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
