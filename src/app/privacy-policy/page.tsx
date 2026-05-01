import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | ASA Agility",
  description:
    "Learn how ASA Agility collects, uses, and protects your personal information when you use our website or purchase our lithium battery products.",
};

const sections = [
  {
    title: "Information We Collect",
    content: (
      <>
        <p className="mb-5">
          When you visit our website, submit an enquiry, or interact with us in
          connection with a purchase or service, we may collect the following:
        </p>
        <div className="space-y-0 divide-y divide-gray-100">
          {[
            {
              label: "Identity & Contact Details",
              text: "Your name, phone number, and email address — collected when you fill out our contact form, request a quote, or register interest in our products.",
            },
            {
              label: "Purchase & Warranty Information",
              text: "Details related to product orders, invoice records, warranty registrations, and any finance or EMI applications you submit.",
            },
            {
              label: "Communication Records",
              text: "Messages or enquiries you send us via the website, email, phone, or in-store visits.",
            },
            {
              label: "Technical & Usage Data",
              text: "Browser type, device type, pages visited, and time spent on the site — collected automatically to help us improve the website experience.",
            },
          ].map((item) => (
            <div key={item.label} className="flex gap-6 py-4">
              <span className="text-[#5C905E] font-semibold shrink-0 w-2">
                —
              </span>
              <p>
                <span className="font-medium text-gray-900">{item.label}:</span>{" "}
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    title: "How We Use Your Information",
    content: (
      <>
        <p className="mb-5">
          We use the information we collect only for legitimate business
          purposes:
        </p>
        <div className="space-y-0 divide-y divide-gray-100">
          {[
            "To respond to your product enquiries and provide after-sales support",
            "To process purchases, deliver products, and manage warranty claims",
            "To facilitate finance or EMI applications with our authorised lending partners",
            "To send you relevant updates about our products or services — only with your consent",
            "To improve our website, understand customer needs, and refine our offerings",
            "To comply with applicable legal and regulatory obligations under Indian law",
          ].map((item, i) => (
            <div key={i} className="flex gap-6 py-4">
              <span className="text-[#5C905E] font-semibold shrink-0 w-2">
                —
              </span>
              <p>{item}</p>
            </div>
          ))}
        </div>
        <p className="mt-5 text-gray-600 text-sm">
          We will never use your information for purposes unrelated to the
          service you engaged with us for.
        </p>
      </>
    ),
  },
  {
    title: "Sharing of Information",
    content: (
      <>
        <p className="mb-5">
          We do not sell, rent, or trade your personal information. We may share
          it only in the following limited circumstances:
        </p>
        <div className="space-y-0 divide-y divide-gray-100">
          {[
            {
              label: "Authorised Service Partners",
              text: "Finance companies, logistics partners, or warranty service providers who need your details to fulfil a service you requested. These parties are bound by confidentiality obligations.",
            },
            {
              label: "Legal Compliance",
              text: "When required to do so by applicable law, court order, or a valid request from a government authority.",
            },
            {
              label: "Business Protection",
              text: "To protect the rights, property, or safety of Asaagility, our customers, or the public where disclosure is necessary.",
            },
          ].map((item) => (
            <div key={item.label} className="flex gap-6 py-4">
              <span className="text-[#5C905E] font-semibold shrink-0 w-2">
                —
              </span>
              <p>
                <span className="font-medium text-gray-900">{item.label}:</span>{" "}
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    title: "Cookies & Analytics",
    content: (
      <p>
        Our website may use cookies — small text files stored on your device —
        to understand how visitors navigate the site and to improve your
        experience. We may also use third-party analytics tools (such as Google
        Analytics) that collect anonymised usage data. You can disable cookies
        through your browser settings at any time, though this may limit certain
        features of the website.
      </p>
    ),
  },
  {
    title: "Data Security",
    content: (
      <p>
        We take reasonable steps to protect your personal information from
        unauthorised access, loss, or misuse. However, no method of electronic
        transmission or storage is entirely secure. While we strive to protect
        your data, we cannot guarantee its absolute security and encourage you
        to contact us immediately if you suspect any unauthorised use of your
        information.
      </p>
    ),
  },
  {
    title: "Data Retention",
    content: (
      <p>
        We retain your personal information for as long as is necessary to
        deliver the service requested, honour our warranty obligations, or meet
        our legal and accounting requirements. Once data is no longer needed, it
        is securely deleted or anonymised. Purchase and warranty records may be
        retained for up to 5 years in accordance with applicable Indian
        commercial laws.
      </p>
    ),
  },
  {
    title: "Your Rights",
    content: (
      <>
        <p className="mb-5">
          You have the right to request access to, correction of, or deletion of
          the personal information we hold about you. You may also withdraw
          consent for marketing communications at any time. To exercise any of
          these rights, write to us at{" "}
          <a
            href="mailto:contact@asaagility.com"
            className="text-[#5C905E] hover:underline"
          >
            contact@asaagility.com
          </a>
          . We will respond within a reasonable timeframe.
        </p>
      </>
    ),
  },
  {
    title: "Third-Party Links",
    content: (
      <p>
        Our website may include links to third-party websites such as Google
        Maps or social media platforms. We are not responsible for the privacy
        practices of those sites and recommend reviewing their privacy policies
        before submitting any personal information.
      </p>
    ),
  },
  {
    title: "Changes to This Policy",
    content: (
      <p>
        We may revise this Privacy Policy from time to time to reflect changes
        in our practices or applicable law. Any updates will be posted on this
        page with a revised date. We encourage you to review this page
        periodically. Continued use of our website after changes are posted
        constitutes your acceptance of the updated policy.
      </p>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <section className="relative w-full min-h-screen px-6 md:px-12 lg:px-20 md:mt-24 mt-12 pb-24 max-w-300 mx-auto">
      <div className="max-w-300 mx-auto pt-12">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-4 animate-fade-in animation-delay-100">
          PRIVACY
          <br />
          POLICY
        </h1>
        <p className="text-gray-500 text-sm mb-16 animate-fade-in animation-delay-200">
          Last updated: May 1, 2026
        </p>

        <div className="max-w-3xl text-gray-700 text-sm md:text-base leading-relaxed">
          {/* Intro */}
          <div className="border-l-4 border-[#5C905E] pl-6 py-1 mb-12">
            <p>
              Asaagility (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is
              committed to protecting your privacy. This Privacy Policy
              describes how we handle personal information collected through{" "}
              <span className="text-[#5C905E] font-medium">asaagility.com</span>{" "}
              and through our store operations in Cooch Behar, West Bengal. By
              using our website or purchasing our products, you agree to the
              practices described here.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-12">
            {sections.map((section, index) => (
              <div key={section.title}>
                <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-5">
                  {index + 1}. {section.title}
                </h2>
                {section.content}
              </div>
            ))}
          </div>

          {/* Contact */}
          <div className="mt-12 pt-12 border-t border-gray-200">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
              Contact Us
            </h2>
            <p className="mb-4">
              For any privacy-related questions, requests, or concerns, please
              get in touch:
            </p>
            <div className="space-y-1">
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
