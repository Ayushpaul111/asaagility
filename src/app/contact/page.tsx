"use client";

import { useState, useEffect, SVGProps } from "react";
import {
  ERickshawIcon,
  ELoaderIcon,
  EBikeIcon,
  OtherIcon,
  CheckIcon,
  SuccessIcon,
  SpinnerIcon,
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  ClockIcon,
  ExternalLinkIcon,
} from "@/components/icons/ContactIcons";

type ProductType = "e-rickshaw" | "e-loader" | "e-bike" | "other";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  countryCode: string;
  phone: string;
  productType: ProductType | null;
  otherSpecification: string;
  message: string;
  agreeToPolicy: boolean;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  productType?: string;
  otherSpecification?: string;
  agreeToPolicy?: string;
}

interface IconProps extends SVGProps<SVGSVGElement> {
  className?: string;
}

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

// ============================================
// PRODUCT OPTIONS
// ============================================

const productOptions: Array<{
  id: ProductType;
  title: string;
  description: string;
  icon: React.FC<IconProps>;
}> = [
  {
    id: "e-rickshaw",
    title: "E-Rickshaw Battery",
    description: "High-capacity batteries for passenger e-rickshaws",
    icon: ERickshawIcon,
  },
  {
    id: "e-loader",
    title: "E-Loader Battery",
    description: "Heavy-duty batteries for cargo e-loaders",
    icon: ELoaderIcon,
  },
  {
    id: "e-bike",
    title: "E-Bike & Scooty Battery",
    description: "Lightweight batteries for two-wheelers",
    icon: EBikeIcon,
  },
  {
    id: "other",
    title: "Other Requirements",
    description: "Custom battery solutions for your needs",
    icon: OtherIcon,
  },
];

// ============================================
// COUNTRY CODES
// ============================================

const countryCodes = [
  { code: "+91", country: "IN", flag: "🇮🇳" },
  { code: "+880", country: "BD", flag: "🇧🇩" },
  { code: "+977", country: "NP", flag: "🇳🇵" },
];

// ============================================
// VALIDATION
// ============================================

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^[0-9]{10}$/;
  return phoneRegex.test(phone.replace(/\s/g, ""));
};

const validateForm = (data: FormData): FormErrors => {
  const errors: FormErrors = {};

  if (!data.firstName.trim()) {
    errors.firstName = "First name is required";
  }

  if (!data.lastName.trim()) {
    errors.lastName = "Last name is required";
  }

  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!validateEmail(data.email)) {
    errors.email = "Please enter a valid email address";
  }

  if (!data.phone.trim()) {
    errors.phone = "Phone number is required";
  } else if (!validatePhone(data.phone)) {
    errors.phone = "Please enter a valid 10-digit phone number";
  }

  if (!data.productType) {
    errors.productType = "Please select a product category";
  }

  if (data.productType === "other" && !data.otherSpecification.trim()) {
    errors.otherSpecification = "Please specify your requirements";
  }

  if (!data.agreeToPolicy) {
    errors.agreeToPolicy = "You must agree to the privacy policy";
  }

  return errors;
};

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "+91",
    phone: "",
    productType: null,
    otherSpecification: "",
    message: "",
    agreeToPolicy: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [touched, setTouched] = useState<Set<string>>(new Set());

  // Clear error when field is modified
  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      const newErrors = { ...errors };
      touched.forEach((field) => {
        const fieldKey = field as keyof FormErrors;
        if (newErrors[fieldKey]) {
          const value = formData[fieldKey as keyof FormData];
          if (value && typeof value === "string" && value.trim()) {
            delete newErrors[fieldKey];
          }
        }
      });
      setErrors(newErrors);
    }
  }, [formData, touched]);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    setTouched((prev) => new Set(prev).add(name));
  };

  const handleProductSelect = (productId: ProductType) => {
    setFormData((prev) => ({
      ...prev,
      productType: productId,
      otherSpecification: productId !== "other" ? "" : prev.otherSpecification,
    }));
    setTouched((prev) => new Set(prev).add("productType"));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      const firstErrorField = Object.keys(validationErrors)[0];
      const element = document.querySelector(`[name="${firstErrorField}"]`);
      if (element instanceof HTMLElement) {
        element.focus();
      }
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Form submitted:", formData);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      countryCode: "+91",
      phone: "",
      productType: null,
      otherSpecification: "",
      message: "",
      agreeToPolicy: false,
    });
    setErrors({});
    setIsSubmitted(false);
    setTouched(new Set());
  };

  // Success State
  if (isSubmitted) {
    return (
      <main className="min-h-screen bg-white flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center animate-[scale-in_0.3s_ease-out]">
            <SuccessIcon className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
            Thank You!
          </h1>
          <p className="text-gray-600 mb-2">
            Your inquiry has been successfully submitted.
          </p>
          <p className="text-gray-500 text-sm mb-8">
            Someone from our team will get back to you within 24-48 hours.
          </p>
          <button
            onClick={handleReset}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Submit Another Inquiry
          </button>
        </div>
        <style>{`
          @keyframes scale-in {
            from { transform: scale(0); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }
        `}</style>
      </main>
    );
  }

  return (
    <>
      <title>
        Contact Us - Lithium Battery Solutions | E-Rickshaw, E-Loader & E-Bike
        Batteries
      </title>
      <meta
        name="description"
        content="Get in touch with us for high-quality lithium batteries for E-Rickshaws, E-Loaders, E-Bikes and Scooties. Request a quote or inquire about our battery solutions."
      />

      <main className="min-h-screen max-w-[1400px] mx-auto mt-24">
        <div className="flex flex-col lg:flex-row min-h-screen">
          {/* Left Section - Form */}
          <section className="w-full lg:w-1/2 px-6 py-10 md:px-12 lg:px-16 xl:px-24 flex flex-col justify-center">
            <div className="max-w-lg mx-auto w-full">
              {/* Header */}
              <header className="mb-8">
                <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-2">
                  Get in touch
                </h1>
                <p className="text-gray-600">
                  Our friendly team would love to hear from you.
                </p>
              </header>

              {/* Form */}
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Name Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      First name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="First name"
                      aria-invalid={!!errors.firstName}
                      aria-describedby={
                        errors.firstName ? "firstName-error" : undefined
                      }
                      className={`w-full px-4 py-2.5 border rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow ${
                        errors.firstName ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.firstName && (
                      <p
                        id="firstName-error"
                        className="mt-1 text-sm text-red-600"
                      >
                        {errors.firstName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      Last name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Last name"
                      aria-invalid={!!errors.lastName}
                      aria-describedby={
                        errors.lastName ? "lastName-error" : undefined
                      }
                      className={`w-full px-4 py-2.5 border rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow ${
                        errors.lastName ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.lastName && (
                      <p
                        id="lastName-error"
                        className="mt-1 text-sm text-red-600"
                      >
                        {errors.lastName}
                      </p>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="you@company.com"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className={`w-full px-4 py-2.5 border rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1 text-sm text-red-600">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1.5"
                  >
                    Phone number
                  </label>
                  <div className="flex">
                    <select
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleInputChange}
                      className="flex-shrink-0 px-3 py-2.5 border border-r-0 border-gray-300 rounded-l-lg bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      aria-label="Country code"
                    >
                      {countryCodes.map((cc) => (
                        <option key={cc.code} value={cc.code}>
                          {cc.flag} {cc.code}
                        </option>
                      ))}
                    </select>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="1234567890"
                      aria-invalid={!!errors.phone}
                      aria-describedby={
                        errors.phone ? "phone-error" : undefined
                      }
                      className={`flex-1 px-4 py-2.5 border rounded-r-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow ${
                        errors.phone ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <p id="phone-error" className="mt-1 text-sm text-red-600">
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Product Selection */}
                <fieldset>
                  <legend className="block text-sm font-medium text-gray-700 mb-3">
                    What are you interested in?
                  </legend>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {productOptions.map((product) => {
                      const isSelected = formData.productType === product.id;
                      const Icon = product.icon;
                      return (
                        <button
                          key={product.id}
                          type="button"
                          onClick={() => handleProductSelect(product.id)}
                          aria-pressed={isSelected}
                          className={`relative p-4 rounded-xl border-2 text-left transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                            isSelected
                              ? "border-blue-600 bg-blue-50/50"
                              : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                          }`}
                        >
                          <div
                            className={`absolute top-3 right-3 w-5 h-5 rounded-full flex items-center justify-center transition-all ${
                              isSelected
                                ? "bg-blue-600"
                                : "border-2 border-gray-300"
                            }`}
                          >
                            {isSelected && (
                              <CheckIcon className="w-3 h-3 text-white" />
                            )}
                          </div>
                          <Icon className="w-12 h-12 mb-2" />
                          <h3 className="font-medium text-gray-900 text-sm">
                            {product.title}
                          </h3>
                          <p className="text-xs text-gray-500 mt-0.5 pr-6">
                            {product.description}
                          </p>
                        </button>
                      );
                    })}
                  </div>
                  {errors.productType && (
                    <p className="mt-2 text-sm text-red-600">
                      {errors.productType}
                    </p>
                  )}
                </fieldset>

                {/* Other Specification Field */}
                {formData.productType === "other" && (
                  <div className="animate-[fadeIn_0.2s_ease-out]">
                    <label
                      htmlFor="otherSpecification"
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      Please specify your requirements
                    </label>
                    <textarea
                      id="otherSpecification"
                      name="otherSpecification"
                      value={formData.otherSpecification}
                      onChange={handleInputChange}
                      placeholder="Describe your battery requirements..."
                      rows={3}
                      aria-invalid={!!errors.otherSpecification}
                      aria-describedby={
                        errors.otherSpecification
                          ? "otherSpec-error"
                          : undefined
                      }
                      className={`w-full px-4 py-2.5 border rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow resize-none ${
                        errors.otherSpecification
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                    />
                    {errors.otherSpecification && (
                      <p
                        id="otherSpec-error"
                        className="mt-1 text-sm text-red-600"
                      >
                        {errors.otherSpecification}
                      </p>
                    )}
                  </div>
                )}

                {/* Optional Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1.5"
                  >
                    Message{" "}
                    <span className="text-gray-400 font-normal">
                      (optional)
                    </span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us more about your requirements..."
                    rows={3}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow resize-none"
                  />
                </div>

                {/* Privacy Policy */}
                <div className="flex items-start gap-3">
                  <div className="flex items-center h-5 mt-0.5">
                    <input
                      type="checkbox"
                      id="agreeToPolicy"
                      name="agreeToPolicy"
                      checked={formData.agreeToPolicy}
                      onChange={handleInputChange}
                      aria-invalid={!!errors.agreeToPolicy}
                      aria-describedby={
                        errors.agreeToPolicy ? "policy-error" : undefined
                      }
                      className="w-4 h-4 border-gray-300 rounded text-blue-600 focus:ring-blue-500 cursor-pointer"
                    />
                  </div>
                  <label
                    htmlFor="agreeToPolicy"
                    className="text-sm text-gray-600 cursor-pointer"
                  >
                    You agree to our friendly{" "}
                    <a
                      href="/privacy-policy"
                      className="text-gray-900 underline underline-offset-2 hover:text-blue-600 transition-colors"
                    >
                      privacy policy
                    </a>
                    .
                  </label>
                </div>
                {errors.agreeToPolicy && (
                  <p id="policy-error" className="text-sm text-red-600 -mt-2">
                    {errors.agreeToPolicy}
                  </p>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-6 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <SpinnerIcon className="w-5 h-5 animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    "Get in touch"
                  )}
                </button>
              </form>
            </div>
          </section>

          {/* Right Section - Map & Store Info (Desktop) */}
          <aside className="hidden lg:flex lg:w-1/2 bg-gray-50 flex-col">
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
            <div className="bg-white border-t border-gray-200 p-6 xl:p-8">
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
                    <p className="text-sm text-gray-600">
                      {storeConfig.timings}
                    </p>
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
          <section className="lg:hidden bg-gray-50">
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
                    <p className="text-sm text-gray-600">
                      {storeConfig.timings}
                    </p>
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

        {/* Animation keyframes */}
        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-8px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </main>
    </>
  );
}
