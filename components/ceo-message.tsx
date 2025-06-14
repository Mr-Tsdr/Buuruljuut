"use client"

import { useState } from "react"
import { Play } from "lucide-react"

export default function CeoMessage() {
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlayVideo = () => {
    setIsPlaying(true)
  }

  return (
    <section className="bg-white">
      <div className="flex flex-col lg:flex-row">
        {/* Left side - Content */}
        <div className="w-full lg:w-1/2 p-8 md:p-16 flex items-center">
          <div className="max-w-lg">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 mr-3 flex items-center justify-center">
                <div className="w-full h-0.5 bg-gray-300 transform rotate-45"></div>
                <div className="w-full h-0.5 bg-gray-300 transform -rotate-45 mt-1"></div>
              </div>
              <p className="text-orange-500 font-medium">Dream Big</p>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1631] mb-6">Inspiring Solutions</h2>

            <p className="text-gray-600 mb-10">
              There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration
              in that some form by injected humour or randomised that words which don't look even slightly believable.
            </p>

            <div className="mb-2">
              <img
                src="/placeholder.svg?height=60&width=180&text=Signature"
                alt="CEO Signature"
                className="h-12 object-contain"
              />
            </div>

            <div>
              <h4 className="font-bold text-gray-900">Mark Nicholes</h4>
              <p className="text-orange-500">CEO & Founder</p>
            </div>
          </div>
        </div>

        {/* Right side - Video */}
        <div className="w-full lg:w-1/2 relative h-[400px] lg:h-auto">
          {isPlaying ? (
            <div className="absolute inset-0 bg-black">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Company Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <>
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/placeholder.svg?height=800&width=1200&text=Workshop+Image')",
                  filter: "brightness(0.7)",
                }}
              ></div>
              <button
                onClick={handlePlayVideo}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-orange-500 hover:bg-orange-600 transition-colors rounded-full w-16 h-16 flex items-center justify-center focus:outline-none"
                aria-label="Play video"
              >
                <Play size={24} className="text-white ml-1" />
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
