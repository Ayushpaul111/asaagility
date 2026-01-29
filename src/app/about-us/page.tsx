const about = () => {
  const stats = [
    { number: "40+", label: "Years founded" },
    { number: "231", label: "Satisfied Clients" },
    { number: "32", label: "Awards Received" },
  ];
  return (
    <>
      <section className="relative w-full min-h-screen bg-[#f5f5f0] px-6 md:px-12 lg:px-20 pt-24 pb-16 max-w-300 mx-auto">
        {/* Header Navigation Hint */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2 text-center">
          <p className="text-[10px] md:text-xs tracking-[0.2em] text-gray-600 font-light">
            READY TO BRING YOU THE BEST
            <br />
            HONEST REAL IDEAS
          </p>
        </div>

        {/* Menu Button - Top Right */}
        <button className="absolute top-8 right-8 text-sm tracking-wider font-light hover:opacity-70 transition-opacity">
          MENU
        </button>

        {/* Main Content Container */}
        <div className="max-w-7xl mx-auto pt-12">
          {/* Large ABOUT US Heading */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight mb-16 md:mb-20">
            ABOUT US
          </h1>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Column - Images and CTA */}
            <div className="space-y-6">
              {/* Talk to Us Button */}
              <button className="group flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors mb-8">
                <span className="text-sm md:text-base font-light tracking-wide">
                  Talk to Us
                </span>
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
              </button>

              {/* Image Grid */}
              <div className="grid grid-cols-2 gap-4">
                {/* Small image - top left */}
                <div className="aspect-[4/5] bg-gray-300 rounded-sm overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop"
                    alt="Team member working"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Large image - spans right and bottom */}
                <div className="row-span-2 aspect-[4/5] bg-gray-300 rounded-sm overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=750&fit=crop"
                    alt="Team collaboration"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right Column - Philosophy Text */}
            <div className="lg:pt-32">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6 text-sm md:text-base">
                  At Artemis, we understand that it's not easy buying your home,
                  and it's not - it's the significant of your life's journey.
                  We're also prepared to understand the psychological aspects of
                  your client's emotions, and we assure you that we'll give you
                  exactly what you're looking for and to bring a better
                  experience for you.
                </p>

                <div className="mt-12">
                  <h2 className="text-3xl md:text-4xl font-normal mb-6">
                    <span className="text-green-600">
                      Transparency, integrity, and professionalism
                    </span>
                    <span className="text-gray-800">
                      {" "}
                      are the pillars of our business philosophy.
                    </span>
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    We prioritize clear communication and honest advice,
                    ensuring that you're empowered to make informed decisions
                    throughout your buying or selling process.
                  </p>
                </div>

                <p className="text-xs text-gray-500 mt-8">© Why choose us</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative w-full bg-[#f5f5f0] py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          {/* "Why choose us" text */}
          <p className="text-xs text-gray-500 mb-4">© Why choose us</p>

          {/* Horizontal Scroll Container for Mobile */}
          <div className="overflow-x-auto overflow-y-hidden -mx-6 md:mx-0">
            <div className="inline-flex md:grid md:grid-cols-4 border border-gray-300 bg-white min-w-max md:min-w-0 md:w-full">
              {/* Feature 01 - Large Card with Image (Takes 2 columns on desktop) */}
              <div className="md:col-span-2 bg-black text-white relative min-h-[350px] w-[85vw] md:w-auto border-r border-gray-300">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop"
                    alt="Modern architecture"
                    className="w-full h-full object-cover opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-8 md:p-10 lg:p-12 h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-4xl md:text-5xl font-light mb-3">
                      01.
                    </h3>
                    <h4 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">
                      Experienced Builder
                    </h4>
                    <p className="text-xs md:text-sm leading-relaxed text-gray-100 max-w-sm">
                      We pride ourselves on being seasoned experts in the art of
                      construction. With years of hands-on experience and a
                      portfolio of successful projects, our team of experienced
                      builders brings unparalleled skill, craftsmanship, and
                      attention to detail to every endeavor.
                    </p>
                  </div>

                  {/* Decorative Triangle Element */}
                  <div className="absolute bottom-0 right-0 w-40 h-40 md:w-48 md:h-48 opacity-80">
                    <svg viewBox="0 0 200 200" className="w-full h-full">
                      <defs>
                        <linearGradient
                          id="triangleGradient"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                          <stop
                            offset="0%"
                            style={{ stopColor: "#60a5fa", stopOpacity: 0.8 }}
                          />
                          <stop
                            offset="50%"
                            style={{ stopColor: "#f59e0b", stopOpacity: 0.8 }}
                          />
                          <stop
                            offset="100%"
                            style={{ stopColor: "#8b5cf6", stopOpacity: 0.8 }}
                          />
                        </linearGradient>
                      </defs>
                      <polygon
                        points="100,20 180,180 20,180"
                        fill="none"
                        stroke="url(#triangleGradient)"
                        strokeWidth="3"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Feature 02 */}
              <div className="bg-white p-8 md:p-10 border-r border-gray-300 flex flex-col justify-between min-h-[350px] w-[70vw] md:w-auto flex-shrink-0">
                <div>
                  <h3 className="text-4xl md:text-5xl font-light text-gray-900 mb-20 md:mb-32">
                    02.
                  </h3>
                  <h4 className="text-base md:text-lg font-normal text-gray-900">
                    Expert Market Knowledge.
                  </h4>
                </div>
              </div>

              {/* Feature 03 */}
              <div className="bg-white p-8 md:p-10 border-r border-gray-300 flex flex-col justify-between min-h-[350px] w-[70vw] md:w-auto flex-shrink-0">
                <div>
                  <h3 className="text-4xl md:text-5xl font-light text-gray-900 mb-20 md:mb-32">
                    03.
                  </h3>
                  <h4 className="text-base md:text-lg font-normal text-gray-900">
                    Unrivaled Customer Satisfaction.
                  </h4>
                </div>
              </div>

              {/* Feature 04
              <div className="bg-white p-8 md:p-10 flex flex-col justify-between min-h-[350px] w-[70vw] md:w-auto flex-shrink-0">
                <div>
                  <h3 className="text-4xl md:text-5xl font-light text-gray-900 mb-20 md:mb-32">
                    04.
                  </h3>
                  <h4 className="text-base md:text-lg font-normal text-gray-900">
                    Innovative Technology.
                  </h4>
                </div>
              </div> */}
            </div>

            {/* Scroll Hint for Mobile */}
            <div className="md:hidden flex items-center justify-center gap-2 mt-4 text-xs text-gray-400">
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
              <span>Swipe to see more</span>
            </div>
          </div>
        </div>
      </section>
      <section className="relative w-full bg-[#f5f5f0] px-6 md:px-12 lg:px-20 py-20 md:py-32">
        <div className="max-w-7xl mx-auto">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <h3 className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-4">
                  {stat.number}
                </h3>
                <p className="text-sm md:text-base text-gray-600 font-light tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="relative w-full bg-[#f5f5f0] px-6 md:px-12 lg:px-20 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-16 md:mb-24">
            Meet the{" "}
            <span className="relative inline-block">
              Founders
              {/* Blue underline */}
              <span className="absolute bottom-0 left-0 w-full h-2 md:h-3 bg-green-600"></span>
            </span>
          </h2>

          {/* Founder 01 - Viktor Sanjaya */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-20 md:mb-32">
            {/* Left - Number and Description */}
            <div className="flex gap-6 md:gap-8">
              <div className="flex-shrink-0">
                <h3 className="text-7xl md:text-8xl lg:text-9xl font-bold text-gray-900">
                  01
                </h3>
              </div>
              <div className="pt-4">
                <h4 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">
                  Viktor Sanjaya
                </h4>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  an{" "}
                  <span className="underline decoration-gray-400">
                    accomplished architect
                  </span>{" "}
                  driven by a vision to curate exceptional properties that
                  resonate with diverse client needs. Viktor's expertise in
                  design and sustainability ensures that each property embodies
                  the highest standards of excellence.
                </p>
              </div>
            </div>

            {/* Right - Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-md aspect-[3/4] bg-gray-300 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop"
                  alt="Viktor Sanjaya"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default about;
