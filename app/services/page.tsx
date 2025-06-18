import ServicesGrid from "@/components/services-grid"
import Footer from "@/components/footer"
import StickyHeader from "@/components/sticky-header"
import Link from "next/link"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <StickyHeader />

      {/* Hero Section */}
      <section className="relative h-[400px] bg-[#0a1631] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: "url('/images/bg5.jpg')",
          }}
        ></div>
        <div className="absolute inset-0 bg-[#0a1631] opacity-70"></div>

        <div className="container mx-auto px-4 md:px-8 relative z-10 h-full flex flex-col justify-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Бидний үйлчилгээ</h1>
            <nav className="text-white text-lg">
              <Link href="/" className="hover:text-orange-500 transition-colors">
                Нүүр хуудас
              </Link>
              <span className="mx-2">›</span>
              <span className="text-orange-500">Үйлчилгээ</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <ServicesGrid />

      {/* Footer */}
      <Footer />
    </div>
  )
}
