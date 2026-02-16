import { Metadata } from "next";
import ProductDetail from "@/components/ProductDetail";

export const metadata: Metadata = {
  title: "E-Loader Lithium Battery 72V 120Ah | ASA Agility",
  description:
    "Heavy-duty 72V 120Ah lithium-ion battery for e-loaders and cargo vehicles. Maximum power, extended range, and rugged durability with 3-year warranty.",
  keywords: [
    "e-loader battery",
    "electric loader battery",
    "72v lithium battery",
    "120ah battery",
    "cargo vehicle battery",
    "e-loader battery Cooch Behar",
  ],
};

const ELoaderBattery = () => {
  return (
    <ProductDetail
      name="E-Loader Lithium Battery"
      description="Heavy-duty 72V 120Ah lithium-ion battery engineered for e-loaders and electric cargo vehicles. Built to handle demanding payloads with maximum range and uncompromising reliability."
      image="/ev-bike-battery.png"
      voltage="72V"
      capacity="120Ah"
      warranty={3}
      price={65000}
      specifications={[
        { label: "Battery Type", value: "Lithium-Ion (LiFePO4)" },
        { label: "Nominal Voltage", value: "72V" },
        { label: "Capacity", value: "120Ah" },
        { label: "Energy", value: "8.64 kWh" },
        { label: "Cycle Life", value: "2000+ cycles" },
        { label: "Charging Time", value: "5-6 hours" },
        { label: "Operating Temperature", value: "-10°C to 55°C" },
        { label: "Weight", value: "~35 kg" },
        { label: "Dimensions", value: "Standard e-loader fit" },
        { label: "BMS Protection", value: "Heavy-duty smart BMS" },
        { label: "Warranty", value: "3 years comprehensive" },
        { label: "Certification", value: "CE, RoHS, AIS-156 compliant" },
      ]}
      features={[
        "120Ah high capacity — supports 100-150 km range even under full cargo loads",
        "72V high-voltage architecture delivers powerful torque for heavy payloads",
        "2000+ cycle life built for rigorous daily commercial operations",
        "Significantly lighter than lead-acid equivalents — increases effective payload capacity",
        "Heavy-duty BMS with temperature management, overcharge, and short-circuit protection",
        "Industrial-grade waterproof and shock-resistant enclosure",
        "Zero maintenance — eliminates water topping and acid handling",
        "Stable voltage output maintains consistent performance under sustained heavy loads",
        "Eco-friendly and fully recyclable — meets all environmental compliance standards",
      ]}
    />
  );
};

export default ELoaderBattery;
