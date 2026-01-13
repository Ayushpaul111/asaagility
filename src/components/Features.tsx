import React from "react";

const Features: React.FC = () => {
  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-gray-900">
            A US number, with peace of mind.
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-lg text-gray-600">
            Get started in 72 Seconds. <br />
            Activate from anywhere worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Simple Card */}
          <div className="group bg-[#EBF6F2] rounded-3xl p-8 flex flex-col items-center text-center overflow-hidden">
            <div className="relative w-64 h-64 flex flex-col justify-center items-center mb-8">
              <div className="absolute text-gray-500/80 transition-all duration-300 group-hover:-translate-y-5 group-hover:scale-90 group-hover:opacity-10">
                Monthly fee
              </div>
              <div className="text-7xl font-bold text-gray-900 transition-all duration-300 group-hover:-translate-y-9 group-hover:scale-90 group-hover:opacity-10">
                $69
              </div>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/80 backdrop-blur-sm shadow-md rounded-full px-4 py-1.5 transition-transform duration-300 delay-100 group-hover:translate-y-0 translate-y-2">
                  Calls & Text
                </div>
                <div className="bg-white/80 backdrop-blur-sm shadow-md rounded-full px-4 py-1.5 transition-transform duration-300 delay-200 group-hover:translate-y-0 translate-y-2">
                  Unlimited Data
                </div>
                <div className="bg-white/80 backdrop-blur-sm shadow-md rounded-full px-4 py-1.5 transition-transform duration-300 delay-300 group-hover:translate-y-0 translate-y-2">
                  Roaming
                </div>
              </div>

              <div className="absolute bottom-10 rainbow-gradient rounded-full px-3 py-1 text-sm font-semibold flex items-center space-x-1 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block"
                >
                  <path
                    d="M13.3337 4.6665L6.00033 11.9998L2.66699 8.6665"
                    stroke="#1F2937"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>All inclusive</span>
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              Simple
            </h3>
            <p className="text-gray-600">
              A predictable phone plan without costly roaming fees.
            </p>
          </div>

          {/* Fast & Easy Card */}
          <div className="group bg-[#E5EFF8] rounded-3xl p-8 flex flex-col items-center text-center overflow-hidden">
            <div className="relative w-64 h-64 flex justify-center items-center mb-8">
              <img
                src="https://cdn.prod.website-files.com/66797c2909f9ec0b1ff1a767/6728fd1b5aa1f3d3e3de8706_popcorn-qr-code.png"
                alt="QR Code"
                className="w-40 h-40"
              />
              <div className="absolute inset-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-gray-700 rounded-tl-lg"></div>
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-gray-700 rounded-tr-lg"></div>
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-gray-700 rounded-bl-lg"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-gray-700 rounded-br-lg"></div>
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-green-400/70 -translate-y-1/2 scale-x-110 transform-gpu group-hover:animate-[scan_2s_ease-in-out_infinite]"></div>
                <style>{`@keyframes scan { 0% { top: 0%; } 100% { top: 100%; } }`}</style>
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              Fast & Easy
            </h3>
            <p className="text-gray-600">
              Get started in minutes. Just scan a QR code and you’re ready to
              go.
            </p>
          </div>

          {/* Expat Friendly Card */}
          <div className="group bg-[#F7F4FA] rounded-3xl p-8 flex flex-col items-center text-center overflow-hidden">
            <div className="relative w-64 h-64 flex justify-center items-center mb-8">
              {/* Back Left Card - Empty for visual effect */}
              <div className="absolute w-40 h-48 bg-white rounded-2xl shadow-lg transition-transform duration-300 group-hover:-translate-x-12 group-hover:-translate-y-8 group-hover:rotate-[-10deg]" />

              {/* Back Right Card - Empty for visual effect */}
              <div className="absolute w-40 h-48 bg-white rounded-2xl shadow-lg transition-transform duration-300 group-hover:translate-x-12 group-hover:-translate-y-8 group-hover:rotate-10`" />

              {/* Front Card - Only visible card with content */}
              <div className="absolute w-48 h-56 bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center justify-center z-10 transition-transform duration-300 group-hover:scale-110">
                <div className="w-14 h-14 bg-gray-900 rounded-xl flex items-center justify-center mb-4">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                    />
                  </svg>
                </div>
                <h4 className="text-base font-semibold text-gray-900 mb-1">
                  Loan Approval
                </h4>
                <h4 className="text-base font-semibold text-gray-900 mb-2">
                  Easy
                </h4>
                <p className="text-sm text-green-600 font-medium">✓ Approval</p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              Fast Loan Approval
            </h3>
            <p className="text-gray-600">
              Get approved for loans quickly with our streamlined process.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
