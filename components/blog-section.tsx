"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, MessageCircle } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "The Most Successful Engineering Contractor",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur is the adipiscing elit, sed do eiusmod tempor theres incididunt ut labore",
    image: "/placeholder.svg?height=300&width=400&text=Modern+Building",
    author: "Dustrial",
    date: "January 10, 2019",
    comments: 3,
  },
  {
    id: 2,
    title: "How to Integrate BIM Into Small Practices",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur is the adipiscing elit, sed do eiusmod tempor theres incididunt ut labore",
    image: "/placeholder.svg?height=300&width=400&text=Industrial+Site",
    author: "Dustrial",
    date: "January 10, 2019",
    comments: 0,
  },
  {
    id: 3,
    title: "Design and Industry materials of Innovation",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur is the adipiscing elit, sed do eiusmod tempor theres incididunt ut labore",
    image: "/placeholder.svg?height=300&width=400&text=Innovation+Lab",
    author: "Dustrial",
    date: "January 10, 2019",
    comments: 0,
  },
  {
    id: 4,
    title: "Future of Industrial Automation",
    excerpt:
      "Exploring the latest trends in industrial automation and how they're reshaping manufacturing processes worldwide.",
    image: "/placeholder.svg?height=300&width=400&text=Automation",
    author: "Dustrial",
    date: "January 15, 2019",
    comments: 5,
  },
  {
    id: 5,
    title: "Sustainable Manufacturing Practices",
    excerpt:
      "Implementing eco-friendly solutions in industrial operations to reduce environmental impact and improve efficiency.",
    image: "/placeholder.svg?height=300&width=400&text=Sustainability",
    author: "Dustrial",
    date: "January 20, 2019",
    comments: 2,
  },
]

const clientLogos = [
  { name: "OAK", logo: "/placeholder.svg?height=60&width=120&text=OAK" },
  { name: "Christopher Willis", logo: "/placeholder.svg?height=60&width=120&text=CW" },
  { name: "Behr", logo: "/placeholder.svg?height=60&width=120&text=BEHR" },
  { name: "BLB", logo: "/placeholder.svg?height=60&width=120&text=BLB" },
  { name: "Capillon", logo: "/placeholder.svg?height=60&width=120&text=CAPILLON" },
]

export default function BlogSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const postsPerPage = 3

  const nextPosts = () => {
    setCurrentIndex((prevIndex) => (prevIndex + postsPerPage >= blogPosts.length ? 0 : prevIndex + postsPerPage))
  }

  const prevPosts = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - postsPerPage < 0 ? Math.max(0, blogPosts.length - postsPerPage) : prevIndex - postsPerPage,
    )
  }

  const currentPosts = blogPosts.slice(currentIndex, currentIndex + postsPerPage)

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 mr-3">
                <div className="w-full h-0.5 bg-gray-300 transform rotate-45"></div>
                <div className="w-full h-0.5 bg-gray-300 transform -rotate-45 mt-1"></div>
              </div>
              <p className="text-orange-500 font-medium">Latest News</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">From Blog</h2>
          </div>

          {/* Navigation Arrows */}
          <div className="flex space-x-2">
            <button
              onClick={prevPosts}
              className="p-2 border border-gray-300 hover:border-orange-500 hover:text-orange-500 transition-colors"
              aria-label="Previous posts"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextPosts}
              className="p-2 border border-gray-300 hover:border-orange-500 hover:text-orange-500 transition-colors"
              aria-label="Next posts"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {currentPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span>By {post.author}</span>
                  <span className="mx-2">•</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-orange-500 transition-colors">
                  <Link href={`/blog/${post.id}`}>{post.title}</Link>
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <Link
                    href={`/blog/${post.id}`}
                    className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
                  >
                    View Details
                  </Link>
                  <div className="flex items-center text-gray-500">
                    <MessageCircle size={16} className="mr-1" />
                    <span className="text-sm">Comments: {post.comments}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Client Logos */}
        <div className="border-t pt-12">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {clientLogos.map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity"
              >
                <Image
                  src={client.logo || "/placeholder.svg"}
                  alt={client.name}
                  width={120}
                  height={60}
                  className="h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
