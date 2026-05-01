import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | ASA Agility",
  description:
    "Read the terms and conditions governing the use of ASA Agility's website and purchase of our lithium battery products.",
};

const terms = [
  {
    label: "a",
    text: '"Customer" refers to any individual or entity interested in booking or purchasing products/services offered by Asaagility through its official website.',
  },
  {
    label: "b",
    text: "If the Customer is making a booking or purchase on behalf of another individual, the necessary details of such person must be provided. Relevant identification or supporting documents may be required at the time of service delivery or onboarding, as specified by Asaagility or its authorized representatives.",
  },
  {
    label: "c",
    text: "In case the Customer wishes to book or purchase multiple Asaagility products/services, the booking or purchase process must be completed separately for each item. One product/service is permitted per booking.",
  },
  {
    label: "d",
    text: "The online booking and purchase facility is provided solely for the convenience of Customers.",
  },
  {
    label: "e",
    text: "The information provided by the Customer will be used by Asaagility and its authorized representatives for communication, service delivery, and related purposes.",
  },
  {
    label: "f",
    text: "Customers are advised to carefully review the latest specifications, features, and details of Asaagility's products/services available on the official website before making a selection. Availability of specific offerings may vary and is subject to change.",
  },
  {
    label: "g",
    text: "Pricing applicable to any product/service will be as per the rate at the time of invoicing. Prices are subject to change without prior notice, and Asaagility is not obligated to inform Customers in advance.",
  },
  {
    label: "h",
    text: "All necessary formalities related to the purchase or onboarding of Asaagility products/services shall be completed as per the company's process, which may include verification, documentation, or other requirements.",
  },
  {
    label: "i",
    text: "The completion of service delivery is subject to fulfillment of applicable legal and regulatory requirements and submission of necessary documents. Failure to comply may result in cancellation of the booking and forfeiture of any paid amount, as per company policy.",
  },
  {
    label: "j",
    text: "All parties agree to comply with applicable laws, including the provisions of the Information Technology Act, 2000, and any amendments thereto.",
  },
  {
    label: "k",
    text: "The Terms of Use and Privacy Policy available on Asaagility's official website shall form an integral part of these Terms & Conditions.",
  },
  {
    label: "l",
    text: "By proceeding with any booking or purchase, the Customer acknowledges that they have read, understood, and agreed to these Terms & Conditions.",
  },
];

export default function TermsAndConditionsPage() {
  return (
    <section className="relative w-full min-h-screen px-6 md:px-12 lg:px-20 md:mt-24 mt-12 pb-24 max-w-300 mx-auto">
      <div className="max-w-300 mx-auto pt-12">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-4 animate-fade-in animation-delay-100">
          TERMS &amp;
          <br />
          CONDITIONS
        </h1>
        <p className="text-gray-500 text-sm mb-16 animate-fade-in animation-delay-200">
          Last updated: May 1, 2026
        </p>

        <div className="max-w-3xl space-y-12 text-gray-700 text-sm md:text-base leading-relaxed">
          {/* Governing Law */}
          <div className="border-l-4 border-[#5C905E] pl-6 py-1">
            <p className="text-gray-700">
              These Terms shall be governed by and construed in accordance with
              the laws of India. Any disputes arising out of or relating to the
              use of this website shall be subject to the exclusive jurisdiction
              of the competent courts at{" "}
              <span className="font-medium text-gray-900">
                Coochbehar, West Bengal
              </span>
              .
            </p>
          </div>

          {/* General Terms */}
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-8">
              General Terms &amp; Conditions
            </h2>
            <div className="space-y-0 divide-y divide-gray-100">
              {terms.map((item) => (
                <div key={item.label} className="flex gap-6 py-5">
                  <span className="text-[#5C905E] font-semibold text-base shrink-0 w-5">
                    {item.label}.
                  </span>
                  <p className="text-gray-700">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
              Contact Us
            </h2>
            <p>
              For any questions regarding these terms, please reach out to us:
            </p>
            <div className="mt-4 space-y-1">
              <p>
                <span className="font-medium text-gray-900">Email:</span>{" "}
                <a
                  href="mailto:contact@asaagility.com"
                  className="text-[#5C905E] hover:underline"
                >
                  contact@asaagility.com
                </a>
              </p>
              <p>
                <span className="font-medium text-gray-900">Phone:</span>{" "}
                <a
                  href="tel:+919434338205"
                  className="text-[#5C905E] hover:underline"
                >
                  +91 94343 38205
                </a>
              </p>
              <p>
                <span className="font-medium text-gray-900">Address:</span>{" "}
                Silver Jubilee Rd, near Shani Mandir, Cooch Behar, West Bengal —
                736101
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
