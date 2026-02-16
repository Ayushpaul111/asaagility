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

const variants: ProductVariant[] = [
  {
    label: "72v-28ah-24month",
    voltage: "72V",
    capacity: "28Ah",
    warranty: 24,
    price: 18216,
  },
  {
    label: "72v-32ah-24month",
    voltage: "72V",
    capacity: "32Ah",
    warranty: 24,
    price: 20424,
  },
  {
    label: "72v-35ah-24month",
    voltage: "72V",
    capacity: "35Ah",
    warranty: 24,
    price: 21780,
  },
  {
    label: "72v-40ah-24month",
    voltage: "72V",
    capacity: "40Ah",
    warranty: 24,
    price: 24800,
  },
  {
    label: "72v-45ah-24month",
    voltage: "72V",
    capacity: "45Ah",
    warranty: 24,
    price: 27000,
  },
  {
    label: "60v-35ah-24month",
    voltage: "60V",
    capacity: "35Ah",
    warranty: 24,
    price: 19500,
  },
  {
    label: "60v-40ah-24month",
    voltage: "60V",
    capacity: "40Ah",
    warranty: 24,
    price: 22000,
  },
  {
    label: "60v-45ah-24month",
    voltage: "60V",
    capacity: "45Ah",
    warranty: 24,
    price: 24500,
  },
  {
    label: "60v-36ah-42month",
    voltage: "60V",
    capacity: "36Ah",
    warranty: 42,
    price: 26800,
  },
  {
    label: "60v-42ah-42month",
    voltage: "60V",
    capacity: "42Ah",
    warranty: 42,
    price: 29500,
  },
  {
    label: "60v-48ah-42month",
    voltage: "60V",
    capacity: "48Ah",
    warranty: 42,
    price: 32400,
  },
  {
    label: "72v-32ah-42month",
    voltage: "72V",
    capacity: "32Ah",
    warranty: 42,
    price: 28600,
  },
  {
    label: "72v-36ah-42month",
    voltage: "72V",
    capacity: "36Ah",
    warranty: 42,
    price: 31200,
  },
  {
    label: "72v-40ah-42month",
    voltage: "72V",
    capacity: "40Ah",
    warranty: 42,
    price: 34880,
  },
];

const EBikeBattery = () => {
  return (
    <ProductDetail
      name="Lithium Battery Packs – Rockcell & Rockbuzz"
      description="Premium-grade Lithium Battery Packs by Rockcell & Rockbuzz – available in 60V & 72V variants, ranging from 6Ah to 48Ah. Built for electric vehicles and power backup systems. Backed by up to 48 months warranty and reliable after-sales service."
      image="/ev-bike-battery.png"
      voltage="60V / 72V"
      capacity="6Ah – 48Ah"
      warranty={24}
      price={18216}
      variants={variants}
      specifications={[
        { label: "Battery Type", value: "Lithium-Ion (LiFePO4)" },
        { label: "Voltage Options", value: "60V / 72V" },
        { label: "Capacity Range", value: "28Ah – 48Ah" },
        { label: "Cycle Life", value: "1500+ cycles" },
        { label: "Charging Time", value: "3-5 hours" },
        { label: "Operating Temperature", value: "-10°C to 50°C" },
        { label: "BMS Protection", value: "Smart monitoring system" },
        { label: "Warranty", value: "Up to 42 months" },
        { label: "Certification", value: "CE, RoHS compliant" },
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
