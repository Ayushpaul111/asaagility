import React from "react";

// const HighlightIcon: React.FC<{ src: string }> = ({ src }) => (
//   <div className="relative inline-block mb-4">
//     <div className="absolute -inset-2 rounded-full opacity-50 blur-lg"></div>
//     <div className="relative w-16 h-16 bg-white/70 backdrop-blur-sm rounded-full flex items-center justify-center shadow-inner-sm">
//       <img src={src} loading="lazy" width="32" height="32" alt="" />
//     </div>
//   </div>
// );

const Hero: React.FC = () => {
  return (
    <header className="relative py-20 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 relative">
        <div className="relative inline-block mb-8 animate-fade-in animation-delay-100">
          <div className="absolute -inset-2 rounded-full opacity-60 blur-md"></div>
          {/* <a
            href="#"
            className="relative bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-full px-4 py-1.5 text-sm text-gray-700/80 "
          >
            <strong>Trust Worthy</strong>
          </a> */}
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-gray-900 leading-tight animate-fade-in-up animation-delay-200">
          Batteries Feels
          <br />
          Trust Worthy
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-600 animate-fade-in-up animation-delay-300">
          Enjoy powerful batteries that are reliable, long-lasting, and
          efficient!
        </p>
      </div>

      {/* Video Section - 16:9 Responsive Window */}
      <div className="relative mt-6 md:mt-12 flex justify-center items-center px-4 sm:px-6 lg:px-8 animate-scale-in animation-delay-400">
        <div className="w-full max-w-5xl">
          {/* Video Container with Border */}
          <div className="relative inline-block w-full">
            <div className="absolute -inset-1 rounded-3xl opacity-60 blur-xl"></div>
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-2 shadow-2xl">
              {/* 16:9 Aspect Ratio Container */}
              <div
                className="relative w-full"
                style={{ paddingBottom: "56.25%" }}
              >
                <video
                  className="absolute top-0 left-0 w-full h-full rounded-2xl object-cover"
                  src="/sanaka-battery.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                >
                  The video is not supported by your browser.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 lg:mt-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="animate-fade-in-up animation-delay-500">
            <HighlightIcon src="https://cdn.prod.website-files.com/66797c2909f9ec0b1ff1a767/66798ff1d31f6059e7ca6963_comments.png" />
            <h3 className="text-xl font-semibold text-gray-900">
              Unlimited talk and text globally
            </h3>
          </div>
          <div className="animate-fade-in-up animation-delay-600">
            <HighlightIcon src="https://cdn.prod.website-files.com/66797c2909f9ec0b1ff1a767/66798ff0b92bca5977e4459c_world-pin.png" />
            <h3 className="text-xl font-semibold text-gray-900">
              Unlimited data in 180+ Countries
            </h3>
          </div>
          <div className="animate-fade-in-up animation-delay-600">
            <HighlightIcon src="https://cdn.prod.website-files.com/66797c2909f9ec0b1ff1a767/66798ff0b7c2691c406bee3c_event-create.png" />
            <h3 className="text-xl font-semibold text-gray-900">
              Cancel anytime
            </h3>
          </div>
        </div>
        <p className="text-center text-sm text-gray-500 mt-12">
          *Subject to our Play by the Rules policy
        </p>
      </div> */}
    </header>
  );
};

export default Hero;
