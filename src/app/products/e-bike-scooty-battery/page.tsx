import { Metadata } from "next";
import ProductDetail from "@/components/ProductDetail";
import type { ProductVariant } from "@/components/ProductDetail";

export const metadata: Metadata = {
  title:
    "Lithium Battery Packs – Rockcell & Rockbuzz | 60V & 72V | 6Ah to 48Ah | ASA Agility",
  description:
    "Premium-grade Lithium Battery Packs by Rockcell & Rockbuzz – available in 60V & 72V variants, ranging from 6Ah to 48Ah. Built for electric vehicles and power backup systems. Backed by up to 48 months warranty.",
  keywords: [
    "e-bike battery",
    "scooty battery",
    "rockcell battery",
    "rockbuzz battery",
    "72v lithium battery",
    "60v lithium battery",
    "electric scooter battery Cooch Behar",
  ],
};

const EBikeBattery = () => {
  return (
    <ProductDetail
      name="Lithium Battery Packs – Rockcell & Rockbuzz"
      description="Premium-grade Lithium Battery Packs by Rockcell & Rockbuzz – available in 60V & 72V variants, ranging from 6Ah to 48Ah. Built for electric vehicles and power backup systems. Backed by up to 48 months warranty and reliable after-sales service."
      image="/ev-bike-battery.png"
      voltage="48V - 60V"
      capacity="23Ah to 72Ah"
      warranty={24}
      price={14000}
      specifications={[
        { label: "Battery Type", value: "Lithium-Ion (LiFePO4)" },
        { label: "Voltage Options", value: "48V to 60V" },
        { label: "Capacity Range", value: "23Ah – 42Ah / 23Ah – 72Ah" },
        { label: "Cycle Life", value: "1500+ cycles" },
        { label: "Charging Time", value: "3-5 hours" },
        { label: "Operating Temperature", value: "-10°C to 50°C" },
        { label: "BMS Protection", value: "Smart monitoring system" },
        { label: "Warranty", value: "Up to 42 months" },
      ]}
      features={[
        "Available in 60V & 72V configurations for versatile compatibility",
        "Multiple capacity options from 28Ah to 48Ah to match your needs",
        "Up to 42 months warranty for long-term peace of mind",
        "Quick charging in 3-5 hours for minimal downtime",
        "Built-in smart BMS for safety and battery health",
        "All-weather performance with waterproof casing",
        "Long lifespan with 1500+ charge cycles",
        "Eco-friendly alternative to lead-acid batteries",
        "Virtually maintenance-free operation",
      ]}
    />
  );
};

export default EBikeBattery;
