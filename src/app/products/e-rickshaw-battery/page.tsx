import { Metadata } from "next";
import ProductDetail from "@/components/ProductDetail";

export const metadata: Metadata = {
  title: "E-Rickshaw Lithium Battery 60V 100Ah | ASA Agility",
  description:
    "High-performance 60V 100Ah lithium-ion battery for e-rickshaws. Long-lasting, fast-charging, and reliable with 3-year warranty. Designed for commercial use.",
  keywords: [
    "e-rickshaw battery",
    "electric rickshaw battery",
    "60v lithium battery",
    "100ah battery",
    "toto battery",
    "e-rickshaw battery Cooch Behar",
  ],
};

const ERickshawBattery = () => {
  return (
    <ProductDetail
      name="E-Rickshaw Lithium Battery"
      description="High-performance 60V 100Ah lithium-ion battery built for the demands of commercial e-rickshaw operations. Delivers exceptional range, rapid charging, and dependable power day after day."
      image="https://pelostudio-storyblok-assets.b-cdn.net/f/236077/2032x1947/c11df9dd29/borne.png/m/smart/filters:quality(70)"
      voltage="60V"
      capacity="100Ah"
      warranty={3}
      price={45000}
      specifications={[
        { label: "Battery Type", value: "Lithium-Ion (LiFePO4)" },
        { label: "Nominal Voltage", value: "60V" },
        { label: "Capacity", value: "100Ah" },
        { label: "Energy", value: "6 kWh" },
        { label: "Cycle Life", value: "2000+ cycles" },
        { label: "Charging Time", value: "4-5 hours" },
        { label: "Operating Temperature", value: "-10°C to 55°C" },
        { label: "Weight", value: "~28 kg" },
        { label: "Dimensions", value: "Standard e-rickshaw fit" },
        { label: "BMS Protection", value: "Advanced smart BMS" },
        { label: "Warranty", value: "3 years comprehensive" },
        { label: "Certification", value: "CE, RoHS, AIS-156 compliant" },
      ]}
      features={[
        "High capacity 100Ah — covers 80-120 km per charge for full-day operations",
        "Fast charging in 4-5 hours to minimize downtime between shifts",
        "2000+ cycle life ensures years of reliable commercial use",
        "60% lighter than lead-acid batteries — reduces vehicle load and wear",
        "Advanced BMS with overcharge, over-discharge, and short-circuit protection",
        "All-weather performance with rugged, waterproof enclosure",
        "Zero maintenance — no topping up water or acid checks",
        "Consistent power output with no voltage sag under heavy loads",
        "Eco-friendly — zero emissions and fully recyclable components",
      ]}
    />
  );
};

export default ERickshawBattery;
