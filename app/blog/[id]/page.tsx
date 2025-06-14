import BlogPost from "@/components/blog-post"
import BlogSidebar from "@/components/blog-sidebar"
import Footer from "@/components/footer"
import StickyHeader from "@/components/sticky-header"

export default function BlogDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex flex-col min-h-screen">
      <StickyHeader />

      {/* Blog Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <BlogPost params={params} />
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
