"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function CeoMessage() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsPlaying(true);
  };

  return (
    <section className="relative bg-white overflow-hidden">
      <div className="flex flex-col lg:flex-row items-stretch">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 px-6 md:px-12 lg:px-16 py-16 flex items-center"
        >
          <div className="max-w-lg">
            <div className="flex items-center mb-4">
              <div className="relative w-6 h-6 mr-2">
                <div className="absolute w-full h-0.5 bg-gray-400 rotate-45"></div>
                <div className="absolute w-full h-0.5 bg-gray-400 -rotate-45"></div>
              </div>
              <p className="text-orange-500 font-medium">Dream Big</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1631] mb-6">
              Inspiring Solutions
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              There are many variations of passages of Lorem Ipsum available but the majority 
              have suffered alteration in that some form by injected humour or randomised that 
              words which don`t look even slightly believable.
            </p>
            <div className="mb-3">
              <Image
                src="/images/bg2.jpeg"
                alt="CEO Signature"
                className="h-12 object-contain"
                width={200}
                height={200}
              />
            </div>
            <div>
              <h4 className="font-bold text-gray-900">Mark Nicholes</h4>
              <p className="text-orange-500">CEO & Founder</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT IMAGE + VIDEO */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="relative w-full lg:w-1/2 h-[400px] lg:h-auto flex items-center justify-center overflow-hidden"
        >
          <div className="relative w-full h-full">
            {isPlaying ? (
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Company Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <>
                <div
                  className="absolute inset-0 bg-cover bg-center clip-diagonal"
                  style={{
                    backgroundImage: "url('/images/workshop.jpg')",
                  }}
                ></div>
                <button
                  onClick={handlePlayVideo}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-orange-500 hover:bg-orange-600 transition-colors rounded-full w-16 h-16 flex items-center justify-center focus:outline-none shadow-lg"
                  aria-label="Play video"
                >
                  <Play size={28} className="text-white ml-1" />
                </button>
              </>
            )}
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .clip-diagonal {
          clip-path: polygon(10% 0, 100% 0, 100% 100%, 0% 100%);
        }
      `}</style>
    </section>
  );
}
