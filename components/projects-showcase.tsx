"use client"

import { useState } from "react"
import Image from "next/image"

const projectCategories = ["View All", "Construction", "Industry", "Materials", "Mechanical", "Production"]

const projects = [
  {
    id: 1,
    title: "Metal Fabrication Project",
    category: "Production",
    image: "/placeholder.svg?height=300&width=400&text=Welding+Work",
  },
  {
    id: 2,
    title: "Heavy Equipment Operations",
    category: "Construction",
    image: "/placeholder.svg?height=300&width=400&text=Construction+Equipment",
  },
  {
    id: 3,
    title: "Industrial Welding",
    category: "Production",
    image: "/placeholder.svg?height=300&width=400&text=Welding+Sparks",
  },
  {
    id: 4,
    title: "Industrial Facility",
    category: "Industry",
    image: "/placeholder.svg?height=300&width=400&text=Industrial+Facility",
  },
  {
    id: 5,
    title: "Metal Cutting Operations",
    category: "Materials",
    image: "/placeholder.svg?height=300&width=400&text=Metal+Cutting",
  },
  {
    id: 6,
    title: "Precision Welding",
    category: "Mechanical",
    image: "/placeholder.svg?height=300&width=400&text=Precision+Welding",
  },
]

export default function ProjectsShowcase() {
  const [activeCategory, setActiveCategory] = useState("View All")

  const filteredProjects =
    activeCategory === "View All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-2">
            <div className="w-8 h-8 mr-3">
              <div className="w-full h-0.5 bg-gray-300 transform rotate-45"></div>
              <div className="w-full h-0.5 bg-gray-300 transform -rotate-45 mt-1"></div>
            </div>
            <p className="text-orange-500 font-medium">Latest</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Projects</h2>
        </div>

        {/* Filter Tabs */}
        <div className="bg-orange-500 rounded-lg p-1 mb-12 overflow-x-auto">
          <div className="flex space-x-1 min-w-max">
            {projectCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 font-medium transition-colors whitespace-nowrap ${
                  activeCategory === category
                    ? "bg-white text-orange-500 rounded-md"
                    : "text-white hover:bg-orange-400 rounded-md"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300"></div>

                {/* Overlay content */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center text-white">
                    <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                    <p className="text-sm text-orange-300">{project.category}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show message if no projects found */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  )
}
