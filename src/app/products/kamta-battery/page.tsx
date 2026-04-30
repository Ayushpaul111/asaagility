import { Metadata } from "next";
import ProductDetail from "@/components/ProductDetail";
import type { ProductVariant } from "@/components/ProductDetail";

export const metadata: Metadata = {
  title: "Kamta E-Rickshaw/E- Lithium Battery",
  description:
    "High-performance best lithium-ion battery for e-rickshaws. Long-lasting, fast-charging, and reliable with 5-year warranty. Designed for commercial use.",
  keywords: [
    "kamta battery",
    "totor battery",
    "sosta totor battery",
    "e-rickshaw battery",
    "electric rickshaw battery",
    "60v lithium battery",
    "100ah battery",
    "toto battery",
    "e-rickshaw battery Cooch Behar",
  ],
};

const variants: ProductVariant[] = [
  {
    label: "52.3v-105ah-60month",
    voltage: "52.3V",
    capacity: "105Ah",
    warranty: 60,
    price: 67000,
    discount: 57000,
  },
  {
    label: "52.3v-135ah-60month",
    voltage: "52.3V",
    capacity: "135Ah",
    warranty: 60,
    price: 72000,
    discount: 62000,
  },
  {
    label: "72v-150ah-60month",
    voltage: "52.3V",
    capacity: "150Ah",
    warranty: 60,
    price: 82000,
    discount: 70000,
  },
];

const ERickshawBattery = () => {
  return (
    <ProductDetail
      name="Kamta E-Rickshaw/E-loader Lithium Battery"
      description=""
      image="/sanaka-battery-e-rickshaw.png"
      voltage="62.2V"
      capacity="105Ah-150Ah"
      warranty={5}
      price={57000}
      variants={variants}
      specifications={[
        { label: "Battery Type", value: "Lithium-Ion (LiFePO4)" },
        { label: "Nominal Voltage", value: "62.2V" },
        { label: "Capacity", value: "105Ah-150Ah" },
        { label: "Cycle Life", value: "3500+ cycles" },
        { label: "Charging Time", value: "4-5 hours" },
        { label: "Operating Temperature", value: "-10°C to 55°C" },
        { label: "Weight", value: "~48 kg" },
        { label: "Dimensions", value: "Standard e-rickshaw and loader fit" },
        { label: "BMS Protection", value: "Advanced smart BMS" },
        { label: "Warranty", value: "5 years comprehensive" },
      ]}
      features={[
        "High capacity 105Ah-150Ah — covers 80-150 km per charge for full-day operations",
        "Fast charging in 4-5 hours to minimize downtime between shifts",
        "3500+ cycle life ensures years of reliable commercial use",
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
