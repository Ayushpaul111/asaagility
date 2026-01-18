import Link from "next/link";

const CtaBanner: React.FC = () => {
  return (
    <section className="py-10 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl lg:rounded-[40px] overflow-hidden">
          <div className="flex flex-col lg:grid lg:grid-cols-2">
            {/* Left Side */}
            <div className="relative order-1 bg-gradient-to-br from-[#E7F3FF] to-[#D5E8FF] p-8 sm:p-12 lg:p-16 flex items-center justify-center lg:justify-end grainy">
              <div className="relative z-10 lg:max-w-md w-full text-center lg:text-left">
                <h3 className="text-4xl md:text-5xl font-bold tracking-tighter text-gray-900">
                  Get powered in minutes
                </h3>
                <ul className="mt-8 space-y-3">
                  <li className="bg-white/30 backdrop-blur-sm rounded-xl p-4 flex items-center text-left">
                    <span className="w-6 text-lg font-bold text-gray-700 mr-3">
                      1
                    </span>
                    <span className="text-lg text-gray-800">
                      Choose your battery
                    </span>
                  </li>
                  <li className="bg-white/30 backdrop-blur-sm rounded-xl p-4 flex items-center text-left">
                    <span className="w-6 text-lg font-bold text-gray-700 mr-3">
                      2
                    </span>
                    <span className="text-lg text-gray-800">
                      Quick installation
                    </span>
                  </li>
                  <li className="bg-white/30 backdrop-blur-sm rounded-xl p-4 flex items-center text-left">
                    <span className="w-6 text-lg font-bold text-gray-700 mr-3">
                      3
                    </span>
                    <span className="text-lg text-gray-800">
                      Power on & go!
                    </span>
                  </li>
                </ul>
                <div className="mt-6 inline-flex items-center space-x-2 text-black bg-linear-to-r from-green-200 to-yellow-100 rounded-full px-4 py-2 text-sm shadow-sm">
                  <span>Fast. Safe. Reliable.</span>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.5 13.75C10.9518 13.75 13.75 10.9518 13.75 7.5C13.75 4.04822 10.9518 1.25 7.5 1.25C4.04822 1.25 1.25 4.04822 1.25 7.5C1.25 10.9518 4.04822 13.75 7.5 13.75Z"
                      stroke="#1F2937"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5 7.5L6.875 9.375L10 6.25"
                      stroke="#1F2937"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Phone on Mobile */}
            <div className="order-2 lg:hidden bg-[#1C1C1C] flex justify-center items-center bg-[url('https://cdn.prod.website-files.com/66797c2909f9ec0b1ff1a767/667e846c24ba851c63c4d965_dark-noise-2.png'),_linear-gradient(#393737)]">
              <img
                src="https://cdn.prod.website-files.com/66797c2909f9ec0b1ff1a767/67333b7ca78c01247bae7864_popcorn-home-2.webp"
                alt="Phone in banner"
                className="w-64 drop-shadow-2xl -mt-16 -mb-8 z-10"
              />
            </div>

            {/* Right Side */}
            <div className="relative order-3 bg-[#1C1C1C] text-white p-8 sm:p-12 lg:p-16 flex flex-col items-center justify-center lg:justify-start  bg-[url('https://cdn.prod.website-files.com/66797c2909f9ec0b1ff1a767/667e846c24ba851c63c4d965_dark-noise-2.png'),_linear-gradient(#393737,#1b1b1b)]">
              <div className="relative z-10 lg:max-w-md w-full text-center lg:text-right">
                <h3 className="text-4xl md:text-5xl font-bold tracking-tighter">
                  One battery,
                  <br />
                  fair price.
                </h3>
                <div className="text-8xl font-bold my-4">₹₹₹</div>
                <div className="font-semibold">Best value guaranteed</div>
                <div className="mt-8">
                  <Link
                    href="/contact"
                    className="relative inline-block text-center group"
                  >
                    <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
                    <div className="relative bg-white text-black rounded-full px-8 py-4 text-lg font-semibold">
                      <strong>Book now</strong>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Phone on Desktop */}
          <div className="hidden lg:flex absolute inset-0 justify-center items-center pointer-events-none z-20">
            <img
              src="https://pelostudio-storyblok-assets.b-cdn.net/f/236077/2032x1947/c11df9dd29/borne.png/m/smart/filters:quality(70)"
              alt="Phone in banner"
              className="w-130 h-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
