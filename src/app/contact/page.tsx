import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import {
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  ClockIcon,
  ExternalLinkIcon,
} from "@/components/icons/ContactIcons";

export const metadata: Metadata = {
  title:
    "Contact Us - Lithium Battery Solutions | E-Rickshaw, E-Loader & E-Bike Batteries",
  description:
    "Get in touch with us for high-quality lithium batteries for E-Rickshaws, E-Loaders, E-Bikes and Scooties. Request a quote or inquire about our battery solutions.",
};

// ============================================
// STORE LOCATION CONFIG - UPDATE THIS WITH YOUR ACTUAL DETAILS
// ============================================

const storeConfig = {
  name: "Asaagility",
  address: "123 Industrial Area, Phase 2",
  city: "Cooch Behar",
  state: "West Bangal",
  pincode: "736101",
  country: "India",
  phone: "+91 94343 38205",
  email: "contact@asaagility.com",
  timings: "Mon - Sat: 9:00 AM - 7:00 PM",
  // Replace this with your actual Google Maps embed URL
  // To get this: Go to Google Maps → Search your location → Click Share → Embed a map → Copy the src URL
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0761974968384!2d77.20659431508096!3d28.613939982422454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2daa9eb4d0b%3A0x717971125923e5d!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1635000000000!5m2!1sen!2sin",
  // Google Maps link for "Get Directions" button
  directionsUrl: "https://maps.google.com/?q=28.613939,77.209021",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen max-w-[1400px] mx-auto mt-10 md:mt-24">
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left Section - Form */}
        <section className="w-full lg:w-1/2 px-6 py-10 md:px-12 lg:px-16 xl:px-24 flex flex-col justify-center">
          <div className="max-w-lg mx-auto w-full">
            <ContactForm />
          </div>
        </section>

        {/* Right Section - Map & Store Info (Desktop) */}
        <aside className="hidden lg:flex lg:w-1/2 flex-col">
          {/* Map Container */}
          <div className="flex-1 relative min-h-[400px]">
            <iframe
              src={storeConfig.mapEmbedUrl}
              className="absolute inset-0 w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Store Location Map"
            />
          </div>

          {/* Store Info Card */}
          <div className="border-t border-gray-200 p-6 xl:p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              {storeConfig.name}
            </h2>

            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <MapPinIcon className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Address</p>
                  <p className="text-sm text-gray-600">
                    {storeConfig.address}
                    <br />
                    {storeConfig.city}, {storeConfig.state} -{" "}
                    {storeConfig.pincode}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <PhoneIcon className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Phone</p>
                  <a
                    href={`tel:${storeConfig.phone.replace(/\s/g, "")}`}
                    className="text-sm text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    {storeConfig.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <MailIcon className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Email</p>
                  <a
                    href={`mailto:${storeConfig.email}`}
                    className="text-sm text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    {storeConfig.email}
                  </a>
                </div>
              </div>

              {/* Timings */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <ClockIcon className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Business Hours
                  </p>
                  <p className="text-sm text-gray-600">{storeConfig.timings}</p>
                </div>
              </div>
            </div>

            {/* Get Directions Button */}
            <a
              href={storeConfig.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <span>Get Directions</span>
              <ExternalLinkIcon className="w-4 h-4" />
            </a>
          </div>
        </aside>

        {/* Mobile Map & Store Info Section */}
        <section className="lg:hidden ">
          {/* Map */}
          <div className="h-64 sm:h-80 relative">
            <iframe
              src={storeConfig.mapEmbedUrl}
              className="absolute inset-0 w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Store Location Map"
            />
          </div>

          {/* Store Info */}
          <div className="px-6 py-8">
            <div className="max-w-lg mx-auto">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                {storeConfig.name}
              </h2>

              <div className="space-y-3">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <MapPinIcon className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">
                      {storeConfig.address}, {storeConfig.city},{" "}
                      {storeConfig.state} - {storeConfig.pincode}
                    </p>
                  </div>
                </div>

                {/* Phone & Email in row */}
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <PhoneIcon className="w-4 h-4 text-blue-600" />
                    </div>
                    <a
                      href={`tel:${storeConfig.phone.replace(/\s/g, "")}`}
                      className="text-sm text-blue-600"
                    >
                      {storeConfig.phone}
                    </a>
                  </div>
                </div>

                {/* Timings */}
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <ClockIcon className="w-4 h-4 text-blue-600" />
                  </div>
                  <p className="text-sm text-gray-600">{storeConfig.timings}</p>
                </div>
              </div>

              {/* Get Directions Button */}
              <a
                href={storeConfig.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                <span>Get Directions</span>
                <ExternalLinkIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
