import Link from "next/link"
import Footer from "@/components/footer"
import StickyHeader from "@/components/sticky-header"

export default function ConstructionPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <StickyHeader />

      {/* Hero Section */}
      <section className="relative h-[400px] bg-[#0a1631] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: "url('/placeholder.svg?height=800&width=1600&text=Construction+Engineering')",
          }}
        ></div>
        <div className="absolute inset-0 bg-[#0a1631] opacity-70"></div>

        <div className="container mx-auto px-4 md:px-8 relative z-10 h-full flex flex-col justify-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Construction & Engineering</h1>
            <nav className="text-white text-lg">
              <Link href="/" className="hover:text-orange-500 transition-colors">
                Industrial
              </Link>
              <span className="mx-2">›</span>
              <Link href="/services" className="hover:text-orange-500 transition-colors">
                Services
              </Link>
              <span className="mx-2">›</span>
              <span className="text-orange-500">Construction & Engineering</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Construction & Engineering Services</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Our construction and engineering division provides comprehensive solutions for complex industrial
              projects. With over 25 years of experience, we deliver exceptional results that meet the highest standards
              of quality, safety, and efficiency.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Our Expertise</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Industrial facility construction</li>
                  <li>• Structural engineering design</li>
                  <li>• Project management and planning</li>
                  <li>• Quality assurance and safety compliance</li>
                  <li>• Environmental impact assessment</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Key Benefits</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Experienced engineering team</li>
                  <li>• Advanced construction methodologies</li>
                  <li>• On-time project delivery</li>
                  <li>• Cost-effective solutions</li>
                  <li>• 24/7 support and maintenance</li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/contact"
                className="bg-orange-500 text-white px-8 py-3 font-medium hover:bg-orange-600 transition-colors inline-block"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
