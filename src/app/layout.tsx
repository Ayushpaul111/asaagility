import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// import Preloader from "@/components/Preloader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default:
      "ASA Agility | Lithium Kamta Battery for E-Rickshaw & E-Bike in Cooch Behar",
    template: "%s | ASA Agility",
  },
  description:
    "ASA Agility is a leading lithium battery manufacturer and retailer in Cooch Behar, West Bengal. Premium batteries for e-rickshaw, e-loader, and e-bike with fast approval finance options.",
  keywords: [
    "ASA Agility",
    "lithium battery Cooch Behar",
    "lithium battery for e-rickshaw",
    "electric rickshaw battery West Bengal",
    "e-bike lithium battery",
    "e-loader battery",
    "lithium ion battery for electric vehicles",
    "lithium battery manufacturer India",
    "Kamta battery",
    "Sanaka battery",
    "60V lithium battery",
    "72V lithium battery",
    "toto battery Cooch Behar",
    "toto battery Dinhata",
    "toto battery matha bhanga",
    "toto battery Alipur",
    "toto battery Alipurduar",
  ],
  authors: [{ name: "ASA Agility" }],
  creator: "ASA Agility",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.asaagility.com",
  ),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    title:
      "ASA Agility | Lithium Battery for E-Rickshaw & E-Bike in Cooch Behar",
    description:
      "ASA Agility is a leading lithium battery manufacturer and retailer in Cooch Behar, West Bengal. Premium batteries for e-rickshaw, e-loader, and e-bike.",
    siteName: "ASA Agility - Kamta Battery",
  },
  twitter: {
    card: "summary_large_image",
    title: "ASA Agility | Lithium Battery for E-Rickshaw & E-Bike",
    description:
      "Premium lithium batteries for e-rickshaw, e-loader, and e-bike. Trusted manufacturer in Cooch Behar, West Bengal.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-black`}
      >
        {" "}
        {/* <Preloader /> */}
        <div className="bg-[#141414] ">
          {/* This wrapper is the "curtain" that contains all page content except the footer.
          It scrolls up to reveal the footer. */}
          <Navbar />
          <div className="relative z-10 bg-[#F7F7F7] text-gray-900 overflow-x-hidden rounded-b-3xl lg:rounded-b-[50px]">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
