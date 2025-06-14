"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { MessageCircle } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "Knowledge becomes a valued form of capital",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur is the adipiscing elit, sed do eiusmod tempor theres incididunt ut labore et.",
    image: "/placeholder.svg?height=300&width=400&text=Welding+Work",
    author: "Dustrial",
    date: "January 10, 2019",
    comments: 0,
    category: "Industry",
  },
  {
    id: 2,
    title: "The Most Successful Engineering that Contractor",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur is the adipiscing elit, sed do eiusmod tempor theres incididunt ut labore et.",
    image: "/placeholder.svg?height=300&width=400&text=Industrial+Tools",
    author: "Dustrial",
    date: "January 10, 2019",
    comments: 0,
    category: "Construction",
  },
  {
    id: 3,
    title: "Design and Materials As a Driver of Innovation",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur is the adipiscing elit, sed do eiusmod tempor theres incididunt ut labore et.",
    image: "/placeholder.svg?height=300&width=400&text=Precision+Welding",
    author: "Dustrial",
    date: "January 10, 2019",
    comments: 0,
    category: "Industry",
  },
  {
    id: 4,
    title: "Ensure plant and personal safety in hazardous",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur is the adipiscing elit, sed do eiusmod tempor theres incididunt ut labore et.",
    image: "/placeholder.svg?height=300&width=400&text=Industrial+Plant",
    author: "Dustrial",
    date: "January 10, 2019",
    comments: 0,
    category: "Production",
  },
]

export default function BlogGrid() {
  const [currentPage, setCurrentPage] = useState(1)

  return (
    <div>
      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {blogPosts.map((post) => (
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

      {/* Pagination */}
      <div className="flex justify-center">
        <div className="flex space-x-2">
          <button
            onClick={() => setCurrentPage(1)}
            className={`px-4 py-2 border ${
              currentPage === 1
                ? "bg-orange-500 text-white border-orange-500"
                : "bg-white text-gray-700 border-gray-300 hover:border-orange-500"
            } transition-colors`}
          >
            1
          </button>
          <button
            onClick={() => setCurrentPage(2)}
            className={`px-4 py-2 border ${
              currentPage === 2
                ? "bg-orange-500 text-white border-orange-500"
                : "bg-white text-gray-700 border-gray-300 hover:border-orange-500"
            } transition-colors`}
          >
            2
          </button>
        </div>
      </div>
    </div>
  )
}
