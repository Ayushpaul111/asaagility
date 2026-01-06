import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
    default: "ASA Agility",
    template: "%s | ASA Agility",
  },
  description: "Welcome to ASA Agility - Your description here",
  keywords: [
    "Lithium battery",
    "Lithium battery for bikes",
    "Lithium battery for e-rickshaw",
    "ASA Agility",
    "Lithium battery for bikes",
    "Lithium battery in coochbehar",
    "toto battery in coochbehar",
    "electric rickshaw battery in coochbehar",
    "lithium ion battery for electric vehicles",
    "lithium battery manufacturer",
  ],
  authors: [{ name: "ASA Agility" }],
  creator: "ASA Agility",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.asaagility.com"
  ),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "ASA Agility",
    description:
      "One stop solution for all your lithium battery for bikes and e-rickshaw.",
    siteName: "ASA Agility",
  },
  twitter: {
    card: "summary_large_image",
    title: "ASA Agility",
    description:
      "One stop solution for all your lithium battery for bikes and e-rickshaw.",
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
  verification: {
    google: "your-google-verification-code",
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
        <div className="bg-[#141414]">
          {/* This wrapper is the "curtain" that contains all page content except the footer.
          It scrolls up to reveal the footer. */}
          <Navbar />
          <div className="relative z-10 bg-[#F7F7F7] overflow-x-hidden rounded-b-3xl lg:rounded-b-[50px]">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
