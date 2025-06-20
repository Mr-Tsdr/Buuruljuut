"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";

export default function CeoMessage() {
  /* ----------------------------- state & helpers ---------------------------- */
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  /* ESC-key close */
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  /* ------------------------------- component -------------------------------- */
  return (
    <section className="relative overflow-hidden bg-white">
      {/* container */}
      <div className="mx-auto flex max-w-7xl flex-col lg:flex-row">
        {/* LEFT ---------------------------------------------------------------- */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex w-full items-center px-6 py-16 sm:px-12 lg:w-1/2 lg:px-16"
        >
          <div className="max-w-lg">
            <div className="mb-4 flex items-center space-x-2">
              <Play className="h-6 w-6 text-orange-500" />
              <p className="font-medium text-orange-500">Том мөрөөдөл</p>
            </div>

            <h2 className="mb-6 text-4xl font-extrabold tracking-tight text-[#0a1631] sm:text-5xl">
              Бөөрөлжүүт
            </h2>

            <p className="leading-relaxed text-gray-600">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form by injected
              humour or randomised words which do not look even slightly
              believable.
            </p>
          </div>
        </motion.div>

        {/* RIGHT -------------------------------------------------------------- */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
          viewport={{ once: true }}
          /*  ▼▼▼ gradient fallback while the JPG loads ▼▼▼  */
          className="relative flex h-[340px] w-full items-center justify-center
                     overflow-hidden sm:h-[420px] lg:h-auto lg:w-1/2
                     bg-gradient-to-br from-[#0a1631] via-[#112044] to-[#14264a] animate-gradient"
        >
          {/* clipped background image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/images/workshop.jpg')",
              WebkitClipPath: "polygon(38% 0, 100% 0, 100% 100%, 62% 100%)",
              clipPath: "polygon(38% 0, 100% 0, 100% 100%, 62% 100%)",
            }}
          >
            {/* dark overlay for readability */}
            <div className="h-full w-full bg-gradient-to-r from-black/50 to-black/0" />
          </div>

          {/* play button */}
          <motion.button
            onClick={() => setOpen(true)}
            whileTap={{ scale: 0.9 }}
            className="relative z-10 flex h-20 w-20 items-center justify-center
                       rounded-full bg-orange-500 text-white shadow-lg outline-none
                       ring-4 ring-white/40 transition hover:bg-orange-600
                       focus-visible:ring-4 focus-visible:ring-orange-400"
            aria-label="Play company video"
          >
            <Play size={30} className="ml-1" />
            {/* idle pulse */}
            <motion.span
              animate={{ scale: [1, 1.3, 1], opacity: [0.8, 0, 0.8] }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="absolute inset-0 -z-10 rounded-full bg-orange-500"
            />
          </motion.button>
        </motion.div>
      </div>

      {/* MODAL --------------------------------------------------------------- */}
      <AnimatePresence>{open && <VideoModal close={close} />}</AnimatePresence>
    </section>
  );
}

/* ============================== VideoModal ================================ */

type ModalProps = { close: () => void };

function VideoModal({ close }: ModalProps) {
  const backdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) close();
  };

  /* YouTube embed setup */
  const YT_ID = "DHCUwTQI-I4";
  const START_AT = 3;
  const PARAMS =
    `autoplay=1&start=${START_AT}&rel=0&modestbranding=1&playsinline=1`;

  return (
    <motion.div
      key="backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 md:p-8"
      onClick={backdropClick}
      role="dialog"
      aria-modal="true"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        key="modal"
        className="relative w-full max-w-5xl overflow-hidden rounded-lg shadow-xl"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <div className="aspect-[16/9]">
          <iframe
            className="h-full w-full rounded-lg"
            src={`https://www.youtube-nocookie.com/embed/${YT_ID}?${PARAMS}`}
            title="Company video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          />
        </div>

        {/* close button */}
        <button
          onClick={close}
          aria-label="Close video"
          className="group absolute right-3 top-3 flex h-9 w-9 items-center
                     justify-center rounded-full bg-white/90 text-gray-800
                     backdrop-blur hover:bg-white"
        >
          <X size={22} />
          <span className="sr-only">Close</span>
        </button>
      </motion.div>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/* OPTIONAL: put this in your global stylesheet (e.g. globals.css)            */
/* to get a very subtle animated gradient shift. Remove if you prefer static. */
 /*
@keyframes gradientShift {
  0%, 100% { background-position: 0% 50%; }
  50%      { background-position: 100% 50%; }
}
.animate-gradient {
  background-size: 200% 200%;
  animation: gradientShift 8s ease-in-out infinite;
}
*/
