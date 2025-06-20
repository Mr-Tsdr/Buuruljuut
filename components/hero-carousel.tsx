"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

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

const carouselData: CarouselSlide[] = [
  {
    id: 1,
    title: (
      <>
        <span className="text-orange-500">Монгол улсын</span>
        <br />
        эрчим хүчний шинэ эх үүсвэр
      </>
    ),
    description:
      "“Цэцэнс Майнинг энд Энержи” ХХК нь өөрийн эзэмшлийн ашигт малтмал ашиглалтын тусгай зөвшөөрөлтэй Бөөрөлжүүтийн талын хүрэн нүүрсний ордод түшиглэн “Бөөрөлжүүтийн 2x150 МВт-ын Цахилгаан станц, нүүрсний уурхайн цогц төсөл”-ийг 2011 оноос хойш үе шаттайгаар амжилттай хэрэгжүүлэн ажиллаж байна.",
    image: "/images/bg1.jpg",
    buttonText1: "Гүйцэтгэсэн төслүүд",
    buttonLink1: "/services",
    buttonText2: "Мэдээ мэдээлэл",
    buttonLink2: "/blog",
  },
  {
    id: 2,
    title: (
      <>
        <span className="text-orange-500">Бид</span> - Ирээдүйг
        <br />
        асаана.
      </>
    ),
    description:
      "Бөөрөлжүүтийн цахилгаан станц нь Төвийн бүсийн нэгдсэн сүлжээнд холбогдох бөгөөд одоо ашиглалтад байгаа эх үүсвэрүүдийн боломжит чадал 1101 бөгөөд төслийн эхний блок 150МВт-аар ашиглалтад ороход ТБНС-ний эрчим хүчний чадлыг 13.6%, 300МВт-аар ашиглалтад ороход 27.2%-иар нэмэгдүүлнэ.",
    image: "/images/bg3.jpg",
    buttonText1: "Бидний үйлчилгээ",
    buttonLink1: "/services",
    buttonText2: "Холбоо барих",
    buttonLink2: "/contact",
  },
  {
    id: 3,
    title: (
      <>
        <span className="text-orange-500">Оролцогч талуудын</span> & тэнцвэртэй харилцааг
        <br />
        эрхэмлэдэг.
      </>
    ),
    description:
      "Бид Эрчим хүчний тогтвортой экосистемийг хөгжүүлэх эрхэм зорилгоо хэрэгжүүлэхдээ нийгэм эдийн засгийн хөгжилд дорвитой хувь нэмрээ оруулах, хүрээлэн буй орчинд ээлтэй үйл ажиллагааг ёс зүйтэй, ил тод, нээлттэй засаглалаар хүргэхээр зорьж байна.",
    image: "/images/bg4.jpg",
    buttonText1: "Бидний тухай",
    buttonLink1: "/about",
    buttonText2: "Манай хамт олон",
    buttonLink2: "/team",
  },
]

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide()
    }, 7000) 

    return () => clearInterval(interval)
  }, [currentSlide])

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return

    setIsTransitioning(true)
    setCurrentSlide(index)

    setTimeout(() => {
      setIsTransitioning(false)
    }, 500)
  }

  const goToNextSlide = () => {
  setCurrentSlide((prev) => {
    const nextSlide = (prev + 1) % carouselData.length;
    return nextSlide;
  });
};

  return (
    <div className="relative h-[800px] bg-[#0a1631] overflow-hidden">
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
                  className="bg-orange-500 text-white px-6 py-3 font-medium hover:bg-orange-600 transition-colors rounded-sm"
                >
                  {slide.buttonText1}
                </Link>
                <Link
                  href={slide.buttonLink2}
                  className="border border-white text-white px-6 py-3 font-medium hover:bg-white hover:text-gray-800 transition-colors rounded-sm"
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
            onClick={() => goToSlide(index % carouselData.length)}
            className={cn(
              "transition-all duration-300 rounded-full focus:outline-none cursor-pointer",
              currentSlide === index ? "h-2 w-8 bg-orange-500" : "h-2 w-2 bg-white opacity-50 hover:opacity-75",
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
