import React, { useState } from "react";
import PopcornIcon from "./icons/PopcornIcon";
import PopcornWordmark from "./icons/PopcornWordmark";

const CtaButton: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => (
  <a
    href="#"
    className={`relative inline-block text-center group ${className}`}
  >
    <div className="absolute inset-0 rainbow-gradient rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
    <div className="relative bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-full px-5 py-2.5 text-black font-semibold">
      {children}
    </div>
  </a>
);

const Header: React.FC<{ isScrolled: boolean }> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const headerContainerClasses = `
        mx-auto transition-all duration-500 ease-in-out
        ${
          isScrolled
            ? "max-w-md rounded-full bg-white/80 backdrop-blur-xl shadow-lg border border-gray-200/50 mt-2"
            : "max-w-none rounded-none bg-white/80 backdrop-blur-lg border-b border-gray-200/80"
        }
    `;

  return (
    <header className="sticky top-0 z-50">
      <div className={headerContainerClasses}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <a href="#" className="flex items-center space-x-2">
                <PopcornIcon className="h-8 w-8" />
                {/* Wordmark disappears in docked mode */}
                <PopcornWordmark
                  className={`h-6 hidden sm:block transition-all duration-300 ease-in-out ${
                    isScrolled ? "w-0 opacity-0" : "w-auto opacity-100"
                  }`}
                />
              </a>
              {/* Nav links disappear in docked mode */}
              <div
                className={`hidden md:block ml-10 transition-all duration-300 ease-in-out ${
                  isScrolled
                    ? "opacity-0 scale-95 pointer-events-none"
                    : "opacity-100 scale-100"
                }`}
              >
                <div className="flex items-baseline space-x-4">
                  <a
                    href="#"
                    className="text-gray-600 hover:text-black px-3 py-2 rounded-md text-base font-medium"
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-black px-3 py-2 rounded-md text-base font-medium"
                  >
                    Manifesto
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-black px-3 py-2 rounded-md text-base font-medium"
                  >
                    Research
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-black px-3 py-2 rounded-md text-base font-medium"
                  >
                    Careers
                  </a>
                </div>
              </div>
            </div>
            <div
              className={`hidden md:block transition-transform duration-300 ease-in-out ${
                isScrolled ? "scale-90" : "scale-100"
              }`}
            >
              <CtaButton>
                <strong>Sign up</strong>
              </CtaButton>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-black focus:outline-none"
                aria-controls="mobile-menu"
              >
                <span className="sr-only">Open main menu</span>
                <div className="w-6 h-6 relative">
                  <span
                    className={`block absolute h-0.5 w-full bg-current transform transition duration-500 ease-in-out ${
                      isMenuOpen ? "rotate-45 top-2.5" : "top-1"
                    }`}
                  ></span>
                  <span
                    className={`block absolute h-0.5 w-full bg-current transform transition duration-500 ease-in-out ${
                      isMenuOpen ? "opacity-0" : ""
                    } top-2.5`}
                  ></span>
                  <span
                    className={`block absolute h-0.5 w-full bg-current transform transition duration-500 ease-in-out ${
                      isMenuOpen ? "-rotate-45 top-2.5" : "top-4"
                    }`}
                  ></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu that adapts to scrolled state */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-500 ease-in-out ${
          isMenuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className={`${isScrolled ? "pt-2 pb-4" : ""}`}>
          <div
            className={`${
              isScrolled
                ? "mx-4 bg-white/80 backdrop-blur-xl shadow-lg rounded-2xl border border-gray-200/50"
                : "bg-white/90 backdrop-blur-lg"
            }`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
              <a
                href="#"
                className="text-gray-600 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
              >
                Manifesto
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
              >
                Research
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
              >
                Careers
              </a>
              <div className="pt-4">
                <CtaButton>
                  <strong>Sign up</strong>
                </CtaButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
