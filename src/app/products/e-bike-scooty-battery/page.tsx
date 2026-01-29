import { Metadata } from "next";
import ProductDetail from "@/components/ProductDetail";

export const metadata: Metadata = {
  title: "E-Bike & Scooty Lithium Battery 48V 30Ah | ASA Agility",
  description:
    "Compact 48V 30Ah lithium-ion battery for e-bikes and scooties. Lightweight, powerful, and reliable with 2-year warranty. Perfect for daily commuting.",
  keywords: [
    "e-bike battery",
    "scooty battery",
    "48v lithium battery",
    "30ah battery",
    "electric scooter battery Cooch Behar",
  ],
};

const EBikeBattery = () => {
  return (
    <ProductDetail
      name="E-Bike & Scooty Lithium Battery"
      description="Lightweight and efficient 48V 30Ah lithium-ion battery perfect for e-bikes and scooties. Ideal for daily commuting with excellent range and quick charging."
      image="https://ruchiragreenearth.com/img/e-rickshaw-battery.png"
      voltage="48V"
      capacity="30Ah"
      warranty={2}
      price={18000}
      specifications={[
        { label: "Battery Type", value: "Lithium-Ion (LiFePO4)" },
        { label: "Nominal Voltage", value: "48V" },
        { label: "Capacity", value: "30Ah" },
        { label: "Energy", value: "1.44 kWh" },
        { label: "Cycle Life", value: "1500+ cycles" },
        { label: "Charging Time", value: "3-4 hours" },
        { label: "Operating Temperature", value: "-10°C to 50°C" },
        { label: "Weight", value: "~8 kg" },
        { label: "Dimensions", value: "Compact, universal fit" },
        { label: "BMS Protection", value: "Smart monitoring system" },
        { label: "Warranty", value: "2 years comprehensive" },
        { label: "Certification", value: "CE, RoHS compliant" },
      ]}
      features={[
        "Ultra-lightweight design - easy to handle and install",
        "Quick charging in just 3-4 hours for minimal downtime",
        "Sufficient range for daily commuting needs (50-70 km per charge)",
        "Compact size fits most e-bike and scooty models",
        "Built-in smart BMS for safety and battery health",
        "All-weather performance with waterproof casing",
        "Long lifespan with 1500+ charge cycles",
        "Eco-friendly alternative to petrol scooters",
        "Virtually maintenance-free operation",
      ]}
    />
  );
};

export default EBikeBattery;
