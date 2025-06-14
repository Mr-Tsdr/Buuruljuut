"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    title: "Good Experiences",
    content:
      "There are many variations of passages of at Lorem Ipsum that available but the majority the have suffered alteration at There are many variations of passages of Lorem Ipsum available a but the majority have suffered.",
    name: "Henry Steinbeck",
    rating: 4,
  },
  {
    id: 2,
    title: "Helpful Support",
    content:
      "There are many variations of passages of at Lorem Ipsum that available but the majority the have suffered alteration at There are many variations of passages of Lorem Ipsum available a but the majority have suffered.",
    name: "Belly Marison",
    rating: 5,
  },
  {
    id: 3,
    title: "Professional Service",
    content:
      "Outstanding work quality and professional approach. The team delivered exactly what we needed on time and within budget. Highly recommend their services for any industrial project.",
    name: "John Anderson",
    rating: 5,
  },
  {
    id: 4,
    title: "Excellent Results",
    content:
      "The technical expertise and attention to detail exceeded our expectations. Their innovative solutions helped us improve our operational efficiency significantly.",
    name: "Sarah Mitchell",
    rating: 4,
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [scrollY, setScrollY] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setScrollY(window.scrollY)
          if (!isVisible) setIsVisible(true)
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Check initial position

    return () => window.removeEventListener("scroll", handleScroll)
  }, [isVisible])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 2 >= testimonials.length ? 0 : prevIndex + 2))
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 2 < 0 ? Math.max(0, testimonials.length - 2) : prevIndex - 2))
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star key={index} size={16} className={index < rating ? "text-orange-500 fill-orange-500" : "text-gray-400"} />
    ))
  }

  const currentTestimonials = testimonials.slice(currentIndex, currentIndex + 2)

  return (
    <section ref={sectionRef} className="relative py-16 bg-[#0a1631] overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 transition-transform duration-1000"
        style={{
          backgroundImage: "url('/placeholder.svg?height=800&width=1600&text=Industrial+Background')",
          transform: `translateY(${isVisible ? scrollY * 0.05 : 0}px) scale(${isVisible ? 1.05 : 1})`,
          transition: "opacity 1.2s ease-out, transform 0.3s ease-out",
          opacity: isVisible ? 0.2 : 0,
        }}
      ></div>

      <div
        className={`container mx-auto px-4 md:px-8 relative z-10 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
      >
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-2">
            <div className="w-8 h-8 mr-3">
              <div className="w-full h-0.5 bg-gray-400 transform rotate-45"></div>
              <div className="w-full h-0.5 bg-gray-400 transform -rotate-45 mt-1"></div>
            </div>
            <p className="text-orange-500 font-medium">Testimonial</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">What Clients Say</h2>
        </div>

        {/* Testimonials Container */}
        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {currentTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-blue-900 bg-opacity-80 backdrop-blur-sm p-8 rounded-lg border border-blue-800"
              >
                <h3 className="text-xl font-bold text-white mb-4">{testimonial.title}</h3>
                <p className="text-gray-300 leading-relaxed mb-6">{testimonial.content}</p>
                <div className="flex items-center justify-between">
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <div className="flex space-x-1">{renderStars(testimonial.rating)}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 flex flex-col space-y-2">
            <button
              onClick={prevTestimonial}
              className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded transition-colors"
              aria-label="Previous testimonials"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextTestimonial}
              className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded transition-colors"
              aria-label="Next testimonials"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: Math.ceil(testimonials.length / 2) }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * 2)}
              className={`w-2 h-2 rounded-full transition-colors ${
                Math.floor(currentIndex / 2) === index ? "bg-orange-500" : "bg-gray-400"
              }`}
              aria-label={`Go to testimonial set ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
