import Image from "next/image"
import Link from "next/link"

const footerLinks = {
  company: [
    { name: "About Company", href: "/about" },
    { name: "Latest Projects", href: "/projects" },
    { name: "Latest From Blog", href: "/blog" },
    { name: "Our Testimonials", href: "/testimonials" },
    { name: "Our Mission", href: "/mission" },
    { name: "Contact Us", href: "/contact" },
    { name: "Get a Quote", href: "/quote" },
  ],
  solutions: [
    { name: "Automotive Manufacturing", href: "/services/automotive" },
    { name: "Industrial Construction", href: "/services/construction" },
    { name: "Mechanical Engineering", href: "/services/mechanical" },
    { name: "Bridge Construction", href: "/services/bridge" },
    { name: "Petroleum and Gas", href: "/services/petroleum" },
    { name: "Oil & Gas Energy", href: "/services/oil-gas" },
    { name: "Sustainability", href: "/services/sustainability" },
  ],
  industries: [
    { name: "Electronic Materials", href: "/industries/electronics" },
    { name: "Gifts & Apparel", href: "/industries/gifts" },
    { name: "Auto Parts", href: "/industries/auto-parts" },
    { name: "Aero Space Services", href: "/industries/aerospace" },
    { name: "Power Systems", href: "/industries/power" },
    { name: "Building Management", href: "/industries/building" },
    { name: "Railway Infrastructure", href: "/industries/railway" },
  ],
}

const recentPosts = [
  {
    id: 1,
    title: "The Most Successful Engineering Contractor",
    date: "January 10, 2019",
    image: "/placeholder.svg?height=60&width=80&text=Post+1",
    href: "/blog/1",
  },
  {
    id: 2,
    title: "How to Integrate BIM Into Small Practices",
    date: "January 10, 2019",
    image: "/placeholder.svg?height=60&width=80&text=Post+2",
    href: "/blog/2",
  },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Top Section - Logo and Newsletter */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 md:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center mb-6 md:mb-0">
              <div className="flex items-center">
                <Image src="/images/logo.svg" alt="Logo" width={150} height={50} />
              </div>
            </Link>

            {/* Newsletter Signup */}
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                placeholder="Name"
                className="px-4 py-2 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="px-4 py-2 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button className="bg-orange-500 text-white px-6 py-2 font-medium hover:bg-orange-600 transition-colors">
                SIGN UP
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Our Company */}
          <div>
            <h3 className="text-lg font-bold mb-6">Our Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-orange-500 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Solutions */}
          <div>
            <h3 className="text-lg font-bold mb-6">Our Solutions</h3>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-orange-500 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Industries */}
          <div>
            <h3 className="text-lg font-bold mb-6">Our Industries</h3>
            <ul className="space-y-3">
              {footerLinks.industries.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-orange-500 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Posts */}
          <div>
            <h3 className="text-lg font-bold mb-6">Recent Post</h3>
            <div className="space-y-4">
              {recentPosts.map((post) => (
                <div key={post.id} className="flex space-x-3">
                  <div className="flex-shrink-0">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={80}
                      height={60}
                      className="object-cover rounded"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-orange-500 text-sm mb-1">{post.date}</p>
                    <Link
                      href={post.href}
                      className="text-gray-300 hover:text-white transition-colors text-sm leading-tight"
                    >
                      {post.title}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 md:px-8 py-4">
          <div className="text-center text-gray-400">
            <p>
              Copyrights © 2025 All Rights Reserved by <span className="text-orange-500 font-semibold">BUURULJUUT</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
