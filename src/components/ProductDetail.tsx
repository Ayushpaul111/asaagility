import Link from "next/link";

interface Specification {
  label: string;
  value: string;
}

interface ProductDetailProps {
  name: string;
  description: string;
  image: string;
  voltage: string;
  capacity: string;
  warranty: number;
  price: number;
  specifications: Specification[];
  features: string[];
}

const ProductDetail = ({
  name,
  description,
  image,
  voltage,
  capacity,
  warranty,
  price,
  specifications,
  features,
}: ProductDetailProps) => {
  return (
    <div className="min-h-screen max-w-300 pt-32">
      {/* Navigation */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-black transition-colors text-sm uppercase tracking-wider"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M10 3L5 8L10 13" />
          </svg>
          <span>All Products</span>
        </Link>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-16 items-start">
          {/* Left - Product Info (2 cols) */}
          <div className="lg:col-span-2">
            <div className="sticky top-24">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95] text-black">
                {name}
              </h1>
              <p className="text-lg text-gray-600 mt-6 leading-relaxed">
                {description}
              </p>

              {/* Price Section */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-baseline gap-3">
                  <span className="text-5xl font-bold text-black">
                    ₹{price.toLocaleString()}
                  </span>
                  <span className="text-gray-400 text-sm uppercase tracking-wider">
                    starting
                  </span>
                </div>
                <p className="text-gray-600 mt-3 text-sm">
                  Includes {warranty} year comprehensive warranty
                </p>
              </div>

              {/* CTAs */}
              <div className="mt-8 space-y-3">
                <a
                  href="tel:+919876543210"
                  className="block w-full bg-black text-white text-center py-4 font-semibold hover:bg-gray-800 transition-colors"
                >
                  Call to Order
                </a>
                <a
                  href="https://wa.me/919876543210"
                  className="block w-full border-2 border-black text-black text-center py-4 font-semibold hover:bg-gray-50 transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Right - Product Image & Specs (3 cols) */}
          <div className="lg:col-span-3">
            {/* Image */}
            <div className="relative border border-gray-200 p-12 md:p-16 mb-8">
              <img
                src={image}
                alt={name}
                className="w-full h-[400px] md:h-[500px] object-contain"
              />
            </div>

            {/* Quick Specs Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="border border-gray-300 p-6">
                <div className="text-4xl md:text-5xl font-bold mb-2 text-black">
                  {voltage}
                </div>
                <div className="text-gray-400 text-xs uppercase tracking-wider">
                  Voltage
                </div>
              </div>
              <div className="bg-black/[0.02] border border-black/10 p-6">
                <div className="text-4xl md:text-5xl font-bold mb-2 text-black">
                  {capacity}
                </div>
                <div className="text-black/40 text-xs uppercase tracking-wider">
                  Capacity
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="border-t border-black/10">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 uppercase tracking-tight text-black">
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-black/10">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 hover:bg-black/[0.02] transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-1 h-12 bg-[#5C905E] flex-shrink-0" />
                  <p className="text-black/80 leading-relaxed">{feature}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Technical Specifications */}
      <div className="border-t border-black/10">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 uppercase tracking-tight text-black">
            Technical Specifications
          </h2>
          <div className="space-y-px bg-black/10">
            {specifications.map((spec, index) => (
              <div
                key={index}
                className="bg-white p-6 flex justify-between items-center hover:bg-black/[0.02] transition-colors"
              >
                <span className="text-black/60 uppercase text-sm tracking-wider">
                  {spec.label}
                </span>
                <span className="font-semibold text-lg text-black">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="border-t border-black/10">
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight text-black">
            Ready to upgrade?
          </h2>
          <p className="text-xl text-black/60 mt-6 max-w-2xl mx-auto">
            Contact our team for custom solutions and volume pricing
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <a
              href="tel:+919876543210"
              className="flex-1 bg-black text-white text-center py-4 font-semibold hover:bg-black/90 transition-colors"
            >
              Call Now
            </a>
            <a
              href="https://wa.me/919876543210"
              className="flex-1 border border-black/20 text-black text-center py-4 font-semibold hover:bg-black/5 transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
