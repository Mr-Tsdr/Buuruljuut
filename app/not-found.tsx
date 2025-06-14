import Link from "next/link"
import Footer from "@/components/footer"
import StickyHeader from "@/components/sticky-header"

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <StickyHeader />

      {/* Hero Section */}
      <section className="relative h-[300px] bg-[#0a1631] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: "url('/placeholder.svg?height=600&width=1600&text=Industrial+Sparks')",
          }}
        ></div>
        <div className="absolute inset-0 bg-[#0a1631] opacity-70"></div>

        <div className="container mx-auto px-4 md:px-8 relative z-10 h-full flex flex-col justify-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">404 Page</h1>
            <nav className="text-white text-lg">
              <Link href="/" className="hover:text-orange-500 transition-colors">
                Industrial
              </Link>
              <span className="mx-2">›</span>
              <span className="text-orange-500">404</span>
            </nav>
          </div>
        </div>
      </section>

      {/* 404 Content */}
      <section className="flex-1 bg-gray-50 py-16 relative overflow-hidden">
        {/* Decorative Lines */}
        <div className="absolute top-0 left-0 w-64 h-64">
          <svg viewBox="0 0 200 200" className="w-full h-full text-orange-500 opacity-20">
            <path d="M0,200 L200,0" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M0,180 L180,0" stroke="currentColor" strokeWidth="1" fill="none" />
          </svg>
        </div>
        <div className="absolute bottom-0 right-0 w-64 h-64 rotate-180">
          <svg viewBox="0 0 200 200" className="w-full h-full text-orange-500 opacity-20">
            <path d="M0,200 L200,0" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M0,180 L180,0" stroke="currentColor" strokeWidth="1" fill="none" />
          </svg>
        </div>

        <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
          {/* 404 Illustration */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              {/* Background Circle */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-96 h-96 border-2 border-dashed border-gray-300 rounded-full"></div>
              </div>

              {/* 404 Numbers */}
              <div className="relative z-10 py-16">
                <div className="text-9xl md:text-[12rem] font-bold text-orange-500 leading-none mb-4">404</div>
              </div>

              {/* Decorative Icons */}
              <div className="absolute inset-0 pointer-events-none">
                {/* Cloud icons */}
                <div className="absolute top-8 left-8">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                    />
                  </svg>
                </div>

                <div className="absolute top-12 right-12">
                  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                    />
                  </svg>
                </div>

                {/* Loading spinners */}
                <div className="absolute bottom-16 left-16">
                  <svg className="w-6 h-6 text-gray-400 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                </div>

                <div className="absolute bottom-8 right-8">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>

                {/* Network/connection icons */}
                <div className="absolute top-1/2 left-4">
                  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
                    />
                  </svg>
                </div>

                <div className="absolute top-1/2 right-4">
                  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Error Message */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Page Not Found</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
            Sorry, The Page your are looking for, could not be found.
          </p>

          {/* Go Home Button */}
          <Link
            href="/"
            className="bg-orange-500 text-white px-8 py-3 font-medium text-lg hover:bg-orange-600 transition-colors inline-block"
          >
            GO TO HOME
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
