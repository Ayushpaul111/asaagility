import React from "react";
import PopcornIcon from "./icons/PopcornIcon";

const Footer: React.FC = () => {
  return (
    <footer className="sticky bottom-0 z-0 bg-[#141414] text-gray-400 pt-16 lg:pt-24 rounded-t-3xl lg:rounded-t-[50px] bg-[url('https://cdn.prod.website-files.com/66797c2909f9ec0b1ff1a767/667e846c24ba851c63c4d965_dark-noise-2.png'),_linear-gradient(#393737,#1b1b1b)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="mb-6 inline-block">
              <PopcornIcon className="h-10 w-10" />
            </a>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">The Good</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Manifesto
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Research
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">The Boring</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Play by the Rules
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Privacy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">The Cool</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  X
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1200 178"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <text
              x="50%"
              y="80%"
              dominantBaseline="middle"
              textAnchor="middle"
              fontFamily="Arial, sans-serif"
              fontSize="170"
              fontWeight="bold"
              fill="white"
            >
              ASAAGILITY
            </text>
          </svg>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
