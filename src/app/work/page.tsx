"use client";

import { useState } from "react";
import GalleryImage, { type Photo } from "@/components/GalleryImage";
import { photoGallery } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";

export default function WorkPage() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  // Close lightbox when clicking outside or pressing Escape
  const closeLightbox = () => setSelectedPhoto(null);

  return (
    <main className="pt-20">
      <section
        aria-label="Photography gallery"
        className="px-6 md:px-12 py-24 min-h-screen flex flex-col justify-center"
      >
        <div className="flex items-center gap-4 mb-10">
          <span
            className="block h-px flex-1"
            style={{ background: "var(--border)" }}
            aria-hidden
          />
          <p className="text-[0.65rem] tracking-[0.35em] uppercase text-black/20 dark:text-white/20">
            Selected Works
          </p>
          <span
            className="block h-px flex-1"
            style={{ background: "var(--border)" }}
            aria-hidden
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-[300px] md:auto-rows-[400px]">
          {photoGallery.map((photo, index) => {
            // Calculate bento span classes based on a repeating pattern of 6 items
            const getBentoClass = (i: number) => {
              const patternIndex = i % 6;
              switch (patternIndex) {
                case 0:
                  return "md:col-span-8 md:row-span-2"; // Large hero
                case 1:
                  return "md:col-span-4 md:row-span-1"; // Top right
                case 2:
                  return "md:col-span-4 md:row-span-1"; // Bottom right
                case 3:
                  return "md:col-span-4 md:row-span-1"; // Bottom row left
                case 4:
                  return "md:col-span-4 md:row-span-1"; // Bottom row middle
                case 5:
                  return "md:col-span-4 md:row-span-1"; // Bottom row right
                default:
                  return "md:col-span-4 md:row-span-1";
              }
            };

            return (
              <GalleryImage
                key={photo.id}
                photo={photo}
                delay={(index % 6) * 60}
                onClick={() => setSelectedPhoto(photo)}
                className={getBentoClass(index)}
              />
            );
          })}
        </div>
      </section>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/60 dark:bg-black/80 backdrop-blur-md"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 z-[110] p-2 text-white/70 hover:text-white transition-colors"
              onClick={closeLightbox}
              aria-label="Close Lightbox"
            >
              <X size={28} />
            </button>

            {/* Lightbox Content Container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ type: "tween", ease: [0.25, 0.1, 0.25, 1], duration: 0.4 }}
              className="relative flex flex-col md:flex-row bg-white dark:bg-[#111111] overflow-hidden max-w-6xl w-full max-h-[90vh] shadow-2xl rounded-2xl"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
              {/* Left Side: Large Image */}
              <div className="w-full md:w-2/3 h-[50vh] md:h-[90vh] relative bg-black/5 dark:bg-white/5">
                <Image
                  src={selectedPhoto.imageUrl}
                  alt={selectedPhoto.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 66vw"
                  className="object-contain"
                  priority
                />
              </div>

              {/* Right Side: Details & Description */}
              <div className="w-full md:w-1/3 flex flex-col justify-center p-8 md:p-12 border-t md:border-t-0 md:border-l border-black/5 dark:border-white/5">
                <p className="text-[0.65rem] tracking-[0.35em] uppercase mb-4 text-black/50 dark:text-white/50">
                  {selectedPhoto.aspectRatio} Aspect
                </p>
                <h2 className="hero-title text-3xl md:text-4xl text-black/90 dark:text-white/90 mb-6 leading-tight">
                  {selectedPhoto.title}
                </h2>
                <p className="text-sm font-light leading-relaxed text-black/70 dark:text-white/70">
                  {selectedPhoto.description || "No description provided."}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
