"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Search } from "lucide-react"

const popularPosts = [
  {
    id: 1,
    title: "The Most Successful Engineering Contractor",
    date: "January 10, 2019",
    image: "/placeholder.svg?height=60&width=80&text=Post+1",
  },
  {
    id: 2,
    title: "How to Integrate BIM Into Small Practices",
    date: "January 10, 2019",
    image: "/placeholder.svg?height=60&width=80&text=Post+2",
  },
  {
    id: 3,
    title: "Algorithm, construction and approximation concepts",
    date: "January 10, 2019",
    image: "/placeholder.svg?height=60&width=80&text=Post+3",
  },
  {
    id: 4,
    title: "Design and industry materials of Innovation",
    date: "January 10, 2019",
    image: "/placeholder.svg?height=60&width=80&text=Post+4",
  },
  {
    id: 5,
    title: "Ensure plant and personal safety in hazardous",
    date: "January 10, 2019",
    image: "/placeholder.svg?height=60&width=80&text=Post+5",
  },
]

const categories = [
  { name: "Agriculture", count: 2 },
  { name: "Construction", count: 2 },
  { name: "Industry", count: 4 },
  { name: "Production", count: 2 },
]

const tags = ["Bio", "Car", "Construction", "Daily", "Energy", "Finance", "Food", "Health", "Industry", "Power", "Ship"]

export default function BlogSidebar() {
  const [searchTerm, setSearchTerm] = useState("")
  const [consultationForm, setConsultationForm] = useState({
    name: "",
    email: "",
  })

  const handleConsultationSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Consultation form submitted:", consultationForm)
  }

  return (
    <div className="space-y-8">
      {/* Search */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 pr-12 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-orange-500">
            <Search size={20} />
          </button>
        </div>
      </div>

      {/* Popular Blog Posts */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Popular Blog Posts</h3>
        <div className="space-y-4">
          {popularPosts.map((post) => (
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
                  href={`/blog/${post.id}`}
                  className="text-gray-900 hover:text-orange-500 transition-colors text-sm font-medium leading-tight"
                >
                  {post.title}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Categories</h3>
        <div className="space-y-3">
          {categories.map((category) => (
            <div key={category.name} className="flex justify-between items-center">
              <Link
                href={`/blog/category/${category.name.toLowerCase()}`}
                className="text-gray-600 hover:text-orange-500 transition-colors"
              >
                {category.name}
              </Link>
              <span className="text-gray-400">({category.count})</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tags */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Link
              key={tag}
              href={`/blog/tag/${tag.toLowerCase()}`}
              className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded hover:bg-orange-500 hover:text-white transition-colors"
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>

      {/* Free Consultation */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Free Consultation</h3>
        <form onSubmit={handleConsultationSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            value={consultationForm.name}
            onChange={(e) => setConsultationForm({ ...consultationForm, name: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            value={consultationForm.email}
            onChange={(e) => setConsultationForm({ ...consultationForm, email: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            required
          />
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 font-medium hover:bg-orange-600 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}
