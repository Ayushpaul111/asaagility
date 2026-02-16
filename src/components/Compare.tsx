"use client";

import { SVGProps } from "react";
import {
  ERickshawIcon,
  ELoaderIcon,
  EBikeIcon,
  OtherIcon,
} from "@/components/icons/ContactIcons";

// ============================================
// TYPES
// ============================================

interface IconProps extends SVGProps<SVGSVGElement> {
  className?: string;
}

interface VehicleOption {
  name: string;
  subtitle: string;
  icon: React.FC<IconProps>;
}

interface ComparisonFeature {
  category?: string;
  feature: string;
  subtext?: string;
  sanaka: string | boolean;
  normal: string | boolean;
}

// ============================================
// VEHICLE OPTIONS (Display Only)
// ============================================

const vehicleOptions: VehicleOption[] = [
  {
    name: "E-Rickshaw",
    subtitle: "Passenger Vehicle",
    icon: ERickshawIcon,
  },
  {
    name: "E-Loader",
    subtitle: "Cargo Vehicle",
    icon: ELoaderIcon,
  },
  {
    name: "E-Bike",
    subtitle: "Two Wheeler",
    icon: EBikeIcon,
  },
  {
    name: "E-Scooty",
    subtitle: "Two Wheeler",
    icon: OtherIcon,
  },
];

// ============================================
// COMPARISON DATA
// ============================================

const comparisonData: ComparisonFeature[] = [
  {
    category: "Specifications",
    feature: "No. of battery",
    sanaka: "Only 1",
    normal: "4 nos.",
  },
  {
    feature: "Weight",
    sanaka: "Only 48 kg",
    normal: "130 kg",
  },
  {
    feature: "Mileage",
    sanaka: "Up to 120 km",
    normal: "40 – 70 km",
  },
  {
    category: "Cost & Maintenance",
    feature: "Electric bills",
    subtext: "Per charge",
    sanaka: "Up to 6 units only",
    normal: "8 – 10 units",
  },
  {
    feature: "Warranty",
    sanaka: "60 months",
    normal: "6 – 18 months only",
  },
  {
    feature: "Maintenance",
    sanaka: '"Zero" maintenance',
    normal: "Rs. 50 per week",
  },
  {
    category: "Smart Features",
    feature: "GPS",
    sanaka: true,
    normal: false,
  },
  {
    feature: "Bluetooth",
    sanaka: true,
    normal: false,
  },
  {
    feature: "Remote ON-OFF",
    sanaka: true,
    normal: false,
  },
];

// ============================================
// ICON COMPONENTS
// ============================================

const CheckIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="currentColor">
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

const CrossIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="currentColor">
    <path
      fillRule="evenodd"
      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

const ArrowIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17 8l4 4m0 0l-4 4m4-4H3"
    />
  </svg>
);

// ============================================
// VALUE DISPLAY COMPONENT
// ============================================

const ValueDisplay = ({
  value,
  isHighlight,
  size = "normal",
}: {
  value: string | boolean;
  isHighlight?: boolean;
  size?: "small" | "normal";
}) => {
  const iconSize = size === "small" ? "w-3.5 h-3.5" : "w-4 h-4";
  const textSize = size === "small" ? "text-xs" : "text-xs sm:text-sm";
  const gap = size === "small" ? "gap-1" : "gap-1.5";

  if (typeof value === "boolean") {
    return value ? (
      <div className={`flex items-center ${gap}`}>
        <CheckIcon className={`${iconSize} text-green-600 flex-shrink-0`} />
        <span className={`text-gray-700 ${textSize}`}>Yes</span>
      </div>
    ) : (
      <div className={`flex items-center ${gap}`}>
        <CrossIcon className={`${iconSize} text-red-400 flex-shrink-0`} />
        <span className={`text-gray-400 ${textSize}`}>No</span>
      </div>
    );
  }

  return (
    <div className={`flex items-center ${gap}`}>
      {isHighlight && (
        <CheckIcon className={`${iconSize} text-green-600 flex-shrink-0`} />
      )}
      <span
        className={`${isHighlight ? "text-gray-900" : "text-gray-600"} ${textSize} leading-tight`}
      >
        {value}
      </span>
    </div>
  );
};

// ============================================
// MOBILE COMPARISON CARD
// ============================================

const MobileComparisonCard = ({ row }: { row: ComparisonFeature }) => (
  <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
    {/* Feature Header */}
    <div className="px-3 py-2.5 bg-gray-50 border-b border-gray-100">
      <span className="font-medium text-gray-900 text-sm">{row.feature}</span>
      {row.subtext && (
        <span className="text-xs text-gray-500 ml-1">({row.subtext})</span>
      )}
    </div>

    {/* Values Grid */}
    <div className="grid grid-cols-2 divide-x divide-gray-100">
      {/* Sanaka Value */}
      <div className="px-3 py-2.5 bg-blue-50/40">
        <div className="text-[10px] font-semibold text-blue-600 uppercase tracking-wider mb-1">
          Sanaka
        </div>
        <ValueDisplay value={row.sanaka} isHighlight size="small" />
      </div>

      {/* Normal Value */}
      <div className="px-3 py-2.5">
        <div className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-1">
          Normal
        </div>
        <ValueDisplay value={row.normal} size="small" />
      </div>
    </div>
  </div>
);

// ============================================
// VEHICLE CARD (Display Only)
// ============================================

const VehicleCard = ({ vehicle }: { vehicle: VehicleOption }) => {
  const Icon = vehicle.icon;
  return (
    <div className="p-3 sm:p-4 lg:p-5 rounded-xl border border-gray-200 bg-white text-center">
      <Icon className="w-full h-12 sm:h-16 lg:h-20 mb-2 sm:mb-3 opacity-80" />
      <h3 className="font-medium text-xs sm:text-sm lg:text-base text-gray-900">
        {vehicle.name}
      </h3>
      <p className="text-[10px] sm:text-xs lg:text-sm text-gray-500 mt-0.5">
        {vehicle.subtitle}
      </p>
    </div>
  );
};

// ============================================
// MAIN COMPONENT
// ============================================

export default function BatteryComparisonTable() {
  return (
    <section className="py-8 sm:py-12 lg:py-16 xl:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Card Container */}
        <div className="mb-12 text-center px-4">
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tighter">
            Advantages of Sanaka Lithium Battery
          </h2>
          <p className="text-xs uppercase text-neutral-500 tracking-widest mb-2">
            over Normal Acid Battery
          </p>
        </div>
        <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          {/* Vehicle Cards (Display Only) */}
          <div className="px-4 sm:px-6 lg:px-10 pb-6 sm:pb-8">
            <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:gap-4">
              {vehicleOptions.map((vehicle, index) => (
                <VehicleCard key={index} vehicle={vehicle} />
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200" />

          {/* ============================================
              MOBILE VIEW: Card Layout
              ============================================ */}
          <div className="md:hidden">
            {/* Mobile Column Headers */}
            <div className="grid grid-cols-2 bg-gray-50 border-b border-gray-200">
              <div className="px-4 py-3 text-center">
                <span className="text-sm font-semibold text-blue-600">
                  Sanaka Lithium
                </span>
              </div>
              <div className="px-4 py-3 text-center border-l border-gray-200">
                <span className="text-sm font-semibold text-gray-600">
                  Normal Acid
                </span>
              </div>
            </div>

            {/* Mobile Cards */}
            <div className="p-4 space-y-2">
              {comparisonData.map((row, index) => (
                <div key={index}>
                  {/* Category Label */}
                  {row.category && (
                    <div className="mt-4 mb-2 first:mt-0">
                      <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                        {row.category}
                      </span>
                    </div>
                  )}
                  <MobileComparisonCard row={row} />
                </div>
              ))}
            </div>

            {/* Mobile CTA */}
            <div className="p-4 pt-2 border-t border-gray-100">
              <a
                href="/contact"
                className="flex items-center justify-center gap-2 w-full py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-colors"
              >
                <span>Get a Quote</span>
                <ArrowIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* ============================================
              DESKTOP VIEW: Table Layout
              ============================================ */}
          <div className="hidden md:block">
            {/* Table Header */}
            <div className="grid grid-cols-3 bg-gray-50 border-b border-gray-200">
              <div className="px-6 lg:px-10 py-4 lg:py-5">
                <span className="text-sm font-medium text-gray-500">
                  Feature
                </span>
              </div>
              <div className="px-4 lg:px-6 py-4 lg:py-5 text-center border-l border-gray-200">
                <h3 className="text-lg lg:text-xl font-semibold text-blue-600">
                  Sanaka Lithium
                </h3>
                <p className="text-xs lg:text-sm text-gray-500 mt-0.5">
                  Advanced battery technology
                </p>
                <a
                  href="/contact"
                  className="inline-block mt-3 px-4 py-2 text-sm font-medium text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  Order a solution
                </a>
              </div>
              <div className="px-4 lg:px-6 py-4 lg:py-5 text-center border-l border-gray-200">
                <h3 className="text-lg lg:text-xl font-semibold text-gray-600">
                  Normal Acid
                </h3>
                <p className="text-xs lg:text-sm text-gray-500 mt-0.5">
                  Traditional lead-acid battery
                </p>
                <span className="inline-block mt-3 px-4 py-2 text-sm font-medium text-gray-400 border border-gray-300 rounded-lg cursor-not-allowed">
                  Legacy option
                </span>
              </div>
            </div>

            {/* Table Body */}
            <div>
              {comparisonData.map((row, index) => (
                <div key={index}>
                  {/* Category Header */}
                  {row.category && (
                    <div className="px-6 lg:px-10 py-3 bg-gray-50 border-b border-gray-100">
                      <span className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
                        {row.category}
                      </span>
                    </div>
                  )}

                  {/* Feature Row */}
                  <div className="grid grid-cols-3 border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                    {/* Feature Name */}
                    <div className="px-6 lg:px-10 py-4 flex flex-col justify-center">
                      <span className="text-gray-900 font-medium text-sm lg:text-base">
                        {row.feature}
                      </span>
                      {row.subtext && (
                        <span className="text-xs lg:text-sm text-gray-500 mt-0.5">
                          {row.subtext}
                        </span>
                      )}
                    </div>

                    {/* Sanaka Value */}
                    <div className="px-4 lg:px-6 py-4 flex items-center justify-center border-l border-gray-100 bg-blue-50/20">
                      <ValueDisplay value={row.sanaka} isHighlight />
                    </div>

                    {/* Normal Value */}
                    <div className="px-4 lg:px-6 py-4 flex items-center justify-center border-l border-gray-100">
                      <ValueDisplay value={row.normal} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop Footer */}
            <div className="px-6 lg:px-10 py-5 lg:py-6 bg-gray-50 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-sm text-gray-600 text-center sm:text-left">
                  Make the switch to Sanaka Lithium and experience the
                  difference.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Get a Quote
                  <ArrowIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
