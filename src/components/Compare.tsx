"use client";

import { useState } from "react";

// ============================================
// TYPES
// ============================================

type VehicleType = "e-rickshaw" | "e-loader" | "e-bike" | "e-scooty";

interface Vehicle {
  id: VehicleType;
  name: string;
  subtitle: string;
}

interface PlanFeature {
  name: string;
  subtext?: string;
  economy: string | boolean;
  comfort: string | boolean;
  premium: string | boolean;
}

interface FeatureSection {
  title: string;
  features: PlanFeature[];
}

// ============================================
// DATA
// ============================================

const vehicles: Vehicle[] = [
  { id: "e-rickshaw", name: "E-Rickshaw", subtitle: "Passenger Vehicle" },
  { id: "e-loader", name: "E-Loader", subtitle: "Cargo Vehicle" },
  { id: "e-bike", name: "E-Bike", subtitle: "Two Wheeler" },
  { id: "e-scooty", name: "E-Scooty", subtitle: "Two Wheeler" },
];

const plans = [
  {
    name: "Economy",
    description: "Basic solution for daily commuters",
    buttonStyle: "outline" as const,
  },
  {
    name: "Comfort",
    description: "The best combination of price and performance",
    buttonStyle: "outline" as const,
  },
  {
    name: "Premium",
    description: "Complete solution with all features included",
    buttonStyle: "filled" as const,
  },
];

const featureSections: FeatureSection[] = [
  {
    title: "Battery Specifications",
    features: [
      {
        name: "Battery Capacity",
        economy: "48V 100Ah",
        comfort: "48V 120Ah",
        premium: "48V 150Ah",
      },
      {
        name: "Warranty Period",
        economy: "36 months",
        comfort: "48 months",
        premium: "60 months",
      },
      {
        name: "Cycle Life",
        economy: "1500 cycles",
        comfort: "2000 cycles",
        premium: "2500 cycles",
      },
      {
        name: "Fast Charging",
        subtext: "0-80% charge time",
        economy: false,
        comfort: "4 hours",
        premium: "3 hours",
      },
    ],
  },
  {
    title: "Smart Features",
    features: [
      {
        name: "GPS Tracking",
        economy: false,
        comfort: true,
        premium: true,
      },
      {
        name: "Bluetooth Connectivity",
        economy: false,
        comfort: true,
        premium: true,
      },
      {
        name: "Mobile App",
        subtext: "Real-time monitoring",
        economy: false,
        comfort: "Basic",
        premium: "Advanced",
      },
      {
        name: "Remote ON-OFF",
        economy: false,
        comfort: false,
        premium: true,
      },
      {
        name: "Anti-theft Alert",
        economy: false,
        comfort: false,
        premium: true,
      },
    ],
  },
  {
    title: "Support & Service",
    features: [
      {
        name: "On-site Support",
        economy: false,
        comfort: true,
        premium: true,
      },
      {
        name: "Replacement Guarantee",
        economy: "6 months",
        comfort: "12 months",
        premium: "24 months",
      },
      {
        name: "Free Health Checkup",
        subtext: "Per year",
        economy: "1 time",
        comfort: "2 times",
        premium: "4 times",
      },
    ],
  },
];

// ============================================
// VEHICLE ICONS (Simple line art style)
// ============================================

const ERickshawIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 200 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Body */}
    <rect
      x="30"
      y="25"
      width="100"
      height="45"
      rx="4"
      stroke="#9CA3AF"
      strokeWidth="1.5"
      fill="none"
    />
    {/* Roof */}
    <path
      d="M35 25V15C35 12 38 10 42 10H120C124 10 127 12 127 15V25"
      stroke="#9CA3AF"
      strokeWidth="1.5"
      fill="none"
    />
    {/* Windows */}
    <rect
      x="40"
      y="30"
      width="25"
      height="20"
      rx="2"
      stroke="#9CA3AF"
      strokeWidth="1"
      fill="none"
    />
    <rect
      x="70"
      y="30"
      width="25"
      height="20"
      rx="2"
      stroke="#9CA3AF"
      strokeWidth="1"
      fill="none"
    />
    <rect
      x="100"
      y="30"
      width="20"
      height="20"
      rx="2"
      stroke="#9CA3AF"
      strokeWidth="1"
      fill="none"
    />
    {/* Handle */}
    <path
      d="M130 40H160C165 40 168 43 168 48V60"
      stroke="#9CA3AF"
      strokeWidth="1.5"
      fill="none"
    />
    {/* Wheels */}
    <circle
      cx="50"
      cy="75"
      r="12"
      stroke="#9CA3AF"
      strokeWidth="1.5"
      fill="none"
    />
    <circle cx="50" cy="75" r="4" fill="#9CA3AF" />
    <circle
      cx="110"
      cy="75"
      r="12"
      stroke="#9CA3AF"
      strokeWidth="1.5"
      fill="none"
    />
    <circle cx="110" cy="75" r="4" fill="#9CA3AF" />
    <circle
      cx="168"
      cy="75"
      r="10"
      stroke="#9CA3AF"
      strokeWidth="1.5"
      fill="none"
    />
    <circle cx="168" cy="75" r="3" fill="#9CA3AF" />
  </svg>
);

const ELoaderIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 200 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Cargo bed */}
    <rect
      x="20"
      y="30"
      width="110"
      height="40"
      rx="3"
      stroke="#9CA3AF"
      strokeWidth="1.5"
      fill="none"
    />
    {/* Cargo lines */}
    <line x1="35" y1="45" x2="115" y2="45" stroke="#9CA3AF" strokeWidth="1" />
    <line x1="35" y1="55" x2="115" y2="55" stroke="#9CA3AF" strokeWidth="1" />
    {/* Cabin */}
    <path
      d="M130 35H155C162 35 168 41 168 48V70H130V35Z"
      stroke="#9CA3AF"
      strokeWidth="1.5"
      fill="none"
    />
    {/* Window */}
    <rect
      x="138"
      y="42"
      width="22"
      height="15"
      rx="2"
      stroke="#9CA3AF"
      strokeWidth="1"
      fill="none"
    />
    {/* Wheels */}
    <circle
      cx="50"
      cy="78"
      r="12"
      stroke="#9CA3AF"
      strokeWidth="1.5"
      fill="none"
    />
    <circle cx="50" cy="78" r="4" fill="#9CA3AF" />
    <circle
      cx="155"
      cy="78"
      r="12"
      stroke="#9CA3AF"
      strokeWidth="1.5"
      fill="none"
    />
    <circle cx="155" cy="78" r="4" fill="#9CA3AF" />
  </svg>
);

const EBikeIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 200 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Back wheel */}
    <circle
      cx="50"
      cy="65"
      r="22"
      stroke="#9CA3AF"
      strokeWidth="1.5"
      fill="none"
    />
    <circle
      cx="50"
      cy="65"
      r="8"
      stroke="#9CA3AF"
      strokeWidth="1"
      fill="none"
    />
    {/* Front wheel */}
    <circle
      cx="150"
      cy="65"
      r="22"
      stroke="#9CA3AF"
      strokeWidth="1.5"
      fill="none"
    />
    <circle
      cx="150"
      cy="65"
      r="8"
      stroke="#9CA3AF"
      strokeWidth="1"
      fill="none"
    />
    {/* Frame */}
    <path
      d="M50 65L85 35L120 35L150 65"
      stroke="#9CA3AF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M85 35L100 65L120 35"
      stroke="#9CA3AF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    {/* Seat */}
    <path
      d="M75 30H95"
      stroke="#9CA3AF"
      strokeWidth="4"
      strokeLinecap="round"
    />
    {/* Handle */}
    <path
      d="M120 35V22"
      stroke="#9CA3AF"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M112 18H128"
      stroke="#9CA3AF"
      strokeWidth="3"
      strokeLinecap="round"
    />
    {/* Battery */}
    <rect
      x="88"
      y="45"
      width="24"
      height="12"
      rx="2"
      fill="#9CA3AF"
      fillOpacity="0.3"
      stroke="#9CA3AF"
      strokeWidth="1"
    />
  </svg>
);

const EScootyIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 200 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Back wheel */}
    <circle
      cx="45"
      cy="70"
      r="18"
      stroke="#9CA3AF"
      strokeWidth="1.5"
      fill="none"
    />
    <circle cx="45" cy="70" r="6" fill="#9CA3AF" />
    {/* Front wheel */}
    <circle
      cx="155"
      cy="70"
      r="18"
      stroke="#9CA3AF"
      strokeWidth="1.5"
      fill="none"
    />
    <circle cx="155" cy="70" r="6" fill="#9CA3AF" />
    {/* Body */}
    <path
      d="M45 55C45 55 50 40 70 35H130C140 35 145 40 148 50L155 55"
      stroke="#9CA3AF"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
    />
    {/* Seat */}
    <path
      d="M60 35H100"
      stroke="#9CA3AF"
      strokeWidth="6"
      strokeLinecap="round"
    />
    {/* Front */}
    <path
      d="M148 50V25"
      stroke="#9CA3AF"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M140 20H156"
      stroke="#9CA3AF"
      strokeWidth="3"
      strokeLinecap="round"
    />
    {/* Footrest */}
    <path
      d="M70 55H130"
      stroke="#9CA3AF"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const vehicleIcons: Record<VehicleType, React.FC<{ className?: string }>> = {
  "e-rickshaw": ERickshawIcon,
  "e-loader": ELoaderIcon,
  "e-bike": EBikeIcon,
  "e-scooty": EScootyIcon,
};

// ============================================
// HELPER COMPONENTS
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

const renderCellValue = (value: string | boolean) => {
  if (typeof value === "boolean") {
    return value ? (
      <div className="flex items-center justify-center gap-1.5">
        <CheckIcon className="w-4 h-4 text-blue-600" />
      </div>
    ) : (
      <div className="flex items-center justify-center">
        <CrossIcon className="w-4 h-4 text-gray-300" />
      </div>
    );
  }
  return (
    <div className="flex items-center justify-center gap-1.5">
      <CheckIcon className="w-4 h-4 text-blue-600" />
      <span className="text-gray-700">{value}</span>
    </div>
  );
};

// ============================================
// MAIN COMPONENT
// ============================================

export default function PackageSolutions() {
  const [selectedVehicle, setSelectedVehicle] =
    useState<VehicleType>("e-rickshaw");

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Main Card */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          {/* Header Section */}
          <div className="p-8 pb-6">
            <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-8">
              Package solutions for your fleet
            </h1>

            {/* Vehicle Selection Tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {vehicles.map((vehicle) => {
                const Icon = vehicleIcons[vehicle.id];
                const isSelected = selectedVehicle === vehicle.id;
                return (
                  <button
                    key={vehicle.id}
                    onClick={() => setSelectedVehicle(vehicle.id)}
                    className={`relative p-4 rounded-xl border-2 transition-all duration-200 text-left ${
                      isSelected
                        ? "border-blue-600 bg-white"
                        : "border-gray-200 bg-white hover:border-gray-300"
                    }`}
                  >
                    {/* Vehicle Illustration */}
                    <div className="h-20 flex items-center justify-center mb-3">
                      <Icon className="w-full h-full max-w-[160px]" />
                    </div>
                    {/* Vehicle Name */}
                    <h3
                      className={`font-medium text-sm ${
                        isSelected ? "text-blue-600" : "text-gray-900"
                      }`}
                    >
                      {vehicle.name}
                    </h3>
                    <p className="text-xs text-gray-500 mt-0.5">
                      {vehicle.subtitle}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Pricing Table Section */}
          <div className="border-t border-gray-200">
            {/* Plan Headers */}
            <div className="grid grid-cols-4 border-b border-gray-200">
              {/* Equipment Label */}
              <div className="px-6 py-6 flex items-end">
                <span className="text-sm font-medium text-gray-500">
                  Equipment
                </span>
              </div>

              {/* Plan Columns */}
              {plans.map((plan, index) => (
                <div
                  key={plan.name}
                  className={`px-4 py-6 text-center ${
                    index < plans.length - 1 ? "border-r border-gray-100" : ""
                  }`}
                >
                  <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4 min-h-[40px]">
                    {plan.description}
                  </p>
                  <button
                    className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      plan.buttonStyle === "filled"
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "border border-gray-300 text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    Order a solution
                  </button>
                </div>
              ))}
            </div>

            {/* Feature Sections */}
            {featureSections.map((section) => (
              <div key={section.title}>
                {/* Section Title */}
                <div className="grid grid-cols-4 bg-gray-50 border-b border-gray-200">
                  <div className="px-6 py-3 col-span-4">
                    <span className="text-sm font-semibold text-gray-700">
                      {section.title}
                    </span>
                  </div>
                </div>

                {/* Features */}
                {section.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="grid grid-cols-4 border-b border-gray-100 hover:bg-gray-50 transition-colors"
                  >
                    {/* Feature Name */}
                    <div className="px-6 py-4 flex flex-col justify-center">
                      <span className="text-sm text-gray-900">
                        {feature.name}
                      </span>
                      {feature.subtext && (
                        <span className="text-xs text-gray-500 mt-0.5">
                          {feature.subtext}
                        </span>
                      )}
                    </div>

                    {/* Economy Value */}
                    <div className="px-4 py-4 flex items-center justify-center border-l border-gray-100">
                      {renderCellValue(feature.economy)}
                    </div>

                    {/* Comfort Value */}
                    <div className="px-4 py-4 flex items-center justify-center border-l border-gray-100">
                      {renderCellValue(feature.comfort)}
                    </div>

                    {/* Premium Value */}
                    <div className="px-4 py-4 flex items-center justify-center border-l border-gray-100">
                      {renderCellValue(feature.premium)}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
