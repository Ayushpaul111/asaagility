import React from "react";

const HighlightIcon: React.FC<{ src: string }> = ({ src }) => (
  <div className="relative inline-block mb-4">
    <div className="absolute -inset-2 rainbow-gradient rounded-full opacity-50 blur-lg"></div>
    <div className="relative w-16 h-16 bg-white/70 backdrop-blur-sm rounded-full flex items-center justify-center shadow-inner-sm">
      <img src={src} loading="lazy" width="32" height="32" alt="" />
    </div>
  </div>
);

const Hero: React.FC = () => {
  return (
    <header className="relative py-20 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 relative">
        <div className="relative inline-block mb-8">
          <div className="absolute -inset-2 rainbow-gradient rounded-full opacity-60 blur-md"></div>
          <a
            href="#"
            className="relative bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-full px-4 py-1.5 text-sm font-semibold"
          >
            <strong>Now live in Alpha!</strong>
          </a>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-gray-900 leading-tight">
          One global plan.
          <br />
          No hassle.
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-600">
          Enjoy unlimited global service for $69/mo. No roaming fees, or
          headaches.
        </p>
        <div className="mt-10">
          <a href="#" className="relative inline-block text-center group">
            <div className="absolute inset-0 rainbow-gradient rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
            <div className="relative bg-gray-900 text-white rounded-full px-8 py-4 text-lg font-semibold">
              <strong>Sign up</strong>
            </div>
          </a>
        </div>
      </div>

      <div className="relative mt-16 md:mt-24 h-[400px] md:h-[600px] lg:h-[700px] flex justify-center items-center">
        <img
          src="https://cdn.prod.website-files.com/66797c2909f9ec0b1ff1a767/6679868f8f787328c7395186_hero-portal-bg.webp"
          alt="Portal background"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] max-w-[95vw] h-auto object-contain"
        />
        <div className="absolute w-full h-full flex justify-center items-start">
          <img
            src="https://cdn.prod.website-files.com/66797c2909f9ec0b1ff1a767/67333b7ca78c01247bae7864_popcorn-home-2.webp"
            alt="Phone mockup 1"
            className="absolute w-40 sm:w-56 md:w-72 lg:w-80 h-auto transform -rotate-10 -translate-x-10 sm:-translate-x-20 transition-transform duration-500 ease-out"
          />
          <img
            src="https://cdn.prod.website-files.com/66797c2909f9ec0b1ff1a767/67333b7eacae214c3722869c_popcorn-inbox-2.webp"
            alt="Phone mockup 2"
            className="absolute w-40 sm:w-56 md:w-72 lg:w-80 h-auto transform rotate-12 translate-x-10 sm:translate-x-20 transition-transform duration-500 ease-out"
          />
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 lg:mt-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div>
            <HighlightIcon src="https://cdn.prod.website-files.com/66797c2909f9ec0b1ff1a767/66798ff1d31f6059e7ca6963_comments.png" />
            <h3 className="text-xl font-semibold text-gray-900">
              Unlimited talk and text globally
            </h3>
          </div>
          <div>
            <HighlightIcon src="https://cdn.prod.website-files.com/66797c2909f9ec0b1ff1a767/66798ff0b92bca5977e4459c_world-pin.png" />
            <h3 className="text-xl font-semibold text-gray-900">
              Unlimited data in 180+ Countries
            </h3>
          </div>
          <div>
            <HighlightIcon src="https://cdn.prod.website-files.com/66797c2909f9ec0b1ff1a767/66798ff0b7c2691c406bee3c_event-create.png" />
            <h3 className="text-xl font-semibold text-gray-900">
              Cancel anytime
            </h3>
          </div>
        </div>
        <p className="text-center text-sm text-gray-500 mt-12">
          *Subject to our Play by the Rules policy
        </p>
      </div>
    </header>
  );
};

export default Hero;
