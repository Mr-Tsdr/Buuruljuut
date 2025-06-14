"use client"

import Link from "next/link"
import { useState, useEffect, useRef } from "react"

export default function CtaSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-16 bg-[#0a1631] relative overflow-hidden">
      {/* Animated background elements */}
      <div
        className={`absolute top-0 left-0 w-64 h-64 rounded-full bg-blue-700 opacity-0 transition-all duration-1500 ease-out ${
          isVisible ? "opacity-10 translate-x-0" : "opacity-0 -translate-x-full"
        }`}
        style={{
          filter: "blur(80px)",
          transformOrigin: "center center",
          animationName: isVisible ? "pulse" : "none",
          animationDuration: "8s",
          animationIterationCount: "infinite",
          animationDirection: "alternate",
        }}
      ></div>

      <div
        className={`absolute bottom-0 right-0 w-96 h-96 rounded-full bg-orange-500 opacity-0 transition-all duration-1500 ease-out ${
          isVisible ? "opacity-10 translate-x-0" : "opacity-0 translate-x-full"
        }`}
        style={{
          filter: "blur(100px)",
          transformOrigin: "center center",
          animationName: isVisible ? "pulse" : "none",
          animationDuration: "10s",
          animationIterationCount: "infinite",
          animationDirection: "alternate-reverse",
          animationDelay: "1s",
        }}
      ></div>

      <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
        <h2
          className={`text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          25+ years of experiences for give you better results.
        </h2>
        <p
          className={`text-white text-lg opacity-90 mb-8 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          There are many variations of passages of Lorem Ipsum but majority have suffered alteration form by injected
          humour or randomised words.
        </p>
        <Link
          href="/about"
          className={`bg-orange-500 text-white px-8 py-4 font-medium text-lg hover:bg-orange-600 transition-all duration-500 inline-block rounded-sm ${
            isVisible ? "opacity-100 translate-y-0 hover:shadow-lg hover:-translate-y-1" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          Бидний тухай
        </Link>
      </div>

      {/* Add animation keyframes */}
      <style jsx>{`
        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.2);
          }
        }
      `}</style>
    </section>
  )
}
