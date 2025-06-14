"use client"

import type React from "react"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { useTranslation } from "@/hooks/use-translation"

interface CarouselSlide {
  id: number
  title: React.ReactNode
  description: string
  image: string
  buttonText1: string
  buttonLink1: string
  buttonText2: string
  buttonLink2: string
}

export default function TranslatedHeroCarousel() {
  const { t } = useTranslation()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const carouselData: CarouselSlide[] = [
    {
      id: 1,
      title: (
        <>
          <span className="text-orange-500">Dustrial</span> - {t.hero.title.split(" - ")[1] || "Solutions"}
          <br />
          {t.hero.subtitle}
        </>
      ),
      description: t.hero.description,
      image: "/placeholder.svg?height=1080&width=1920&text=Industrial+Site+1",
      buttonText1: t.hero.ourServices,
      buttonLink1: "/services",
      buttonText2: t.hero.contactUs,
      buttonLink2: "/contact",
    },
    {
      id: 2,
      title: (
        <>
          <span className="text-orange-500">Expert Engineers</span>
          <br />
          For Your Industrial Needs
        </>
      ),
      description:
        "We provide comprehensive industrial solutions with a team of experienced professionals dedicated to excellence and innovation in every project we undertake.",
      image: "/placeholder.svg?height=1080&width=1920&text=Industrial+Site+2",
      buttonText1: "OUR PROJECTS",
      buttonLink1: "/projects",
      buttonText2: "GET A QUOTE",
      buttonLink2: "/quote",
    },
    {
      id: 3,
      title: (
        <>
          <span className="text-orange-500">Quality</span> & Safety
          <br />
          Our Top Priorities
        </>
      ),
      description:
        "With decades of experience in the industrial sector, we maintain the highest standards of quality and safety in all our operations and services.",
      image: "/placeholder.svg?height=1080&width=1920&text=Industrial+Site+3",
      buttonText1: "ABOUT US",
      buttonLink1: "/about",
      buttonText2: "OUR TEAM",
      buttonLink2: "/team",
    },
  ]

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning || index === currentSlide) return

    setIsTransitioning(true)
    setCurrentSlide(index)

    setTimeout(() => {
      setIsTransitioning(false)
    }, 500)
  }, [isTransitioning, currentSlide])

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      const nextSlide = (currentSlide + 1) % carouselData.length
      goToSlide(nextSlide)
    }, 7000)

    return () => clearInterval(interval)
  }, [currentSlide, carouselData.length, goToSlide])

  return (
    <div className="relative h-[600px] bg-[#0a1631] overflow-hidden">
      {carouselData.map((slide, index) => (
        <div
          key={slide.id}
          className={cn(
            "absolute inset-0 transition-opacity duration-500 ease-in-out",
            currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0",
          )}
        >
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={`Industrial slide ${index + 1}`}
            fill
            className="object-cover opacity-40"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-[#0a1631] opacity-70"></div>

          <div className="container mx-auto px-4 md:px-8 relative z-10 h-full flex flex-col justify-center">
            <div className="max-w-3xl">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">{slide.title}</h2>
              <p className="text-white text-lg mb-8 opacity-90">{slide.description}</p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href={slide.buttonLink1}
                  className="bg-orange-500 text-white px-6 py-3 font-medium hover:bg-orange-600 transition-colors"
                >
                  {slide.buttonText1}
                </Link>
                <Link
                  href={slide.buttonLink2}
                  className="border border-white text-white px-6 py-3 font-medium hover:bg-white hover:text-gray-800 transition-colors"
                >
                  {slide.buttonText2}
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Pagination Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {carouselData.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "transition-all duration-300 rounded-full focus:outline-none",
              currentSlide === index ? "h-2 w-8 bg-orange-500" : "h-2 w-2 bg-white opacity-50 hover:opacity-75",
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
