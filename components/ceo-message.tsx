"use client";
import { motion } from "framer-motion";
import { Play, X } from "lucide-react";
import { useState } from "react";

export default function CeoMessage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePlayVideo = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="relative bg-white overflow-hidden">
      <div className="flex flex-col lg:flex-row items-stretch">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 px-6 md:px-12 lg:px-16 py-16 flex items-center"
        >
          <div className="max-w-lg">
            <div className="flex items-center mb-4">
              <div className="relative w-6 h-6 mr-2">
                <Play className="absolute top-0 left-0 w-6 h-6 text-orange-500" />
              </div>
              <p className="text-orange-500 font-medium">Том мөрөөдөл</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1631] mb-6">
              Бөөрөлжүүт
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              There are many variations of passages of Lorem Ipsum available but the majority
              have suffered alteration in that some form by injected humour or randomised that
              words which don&apos;t look even slightly believable.
            </p>
          </div>
        </motion.div>

        {/* RIGHT IMAGE + PLAY BUTTON */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="relative w-full lg:w-1/2 h-[400px] lg:h-auto flex items-center justify-center overflow-hidden"
        >
          <div
            className="absolute inset-0"
            style={{
              clipPath: "polygon(40% 0, 100% 0, 100% 100%, 60% 100%)",
              backgroundImage:
                "linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0)), url('/images/workshop.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          ></div>

          <motion.button
            onClick={handlePlayVideo}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative z-10 bg-orange-500 hover:bg-orange-600 transition-all rounded-full w-16 h-16 flex items-center justify-center focus:outline-none shadow-lg"
            aria-label="Play video"
          >
            <Play size={28} className="text-white ml-1" />
          </motion.button>
        </motion.div>
      </div>

      {/* VIDEO MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="relative w-full max-w-5xl aspect-video">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="Company Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 bg-white rounded-full p-1 shadow hover:bg-gray-200"
              aria-label="Close video"
            >
              <X size={20} className="text-gray-800" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
