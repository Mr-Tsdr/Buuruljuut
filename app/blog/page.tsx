import BlogGrid from "@/components/blog-grid"
import BlogSidebar from "@/components/blog-sidebar"
import Footer from "@/components/footer"
import StickyHeader from "@/components/sticky-header"
import Link from "next/link"

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <StickyHeader />

      {/* Hero Section */}
      <section className="relative h-[400px] bg-[#0a1631] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: "url('/placeholder.svg?height=800&width=1600&text=Industrial+Welding')",
          }}
        ></div>
        <div className="absolute inset-0 bg-[#0a1631] opacity-70"></div>

        <div className="container mx-auto px-4 md:px-8 relative z-10 h-full flex flex-col justify-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Blog</h1>
            <nav className="text-white text-lg">
              <Link href="/" className="hover:text-orange-500 transition-colors">
                Industrial
              </Link>
              <span className="mx-2">›</span>
              <span className="text-orange-500">Blog</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <BlogGrid />
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
