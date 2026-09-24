"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export interface Photo {
  id: number;
  title: string;
  description?: string;
  imageUrl: string;
  /** e.g. "4/5" | "3/2" | "1/1" | "16/9" */
  aspectRatio: string;
}

interface GalleryImageProps {
  photo: Photo;
  /** staggered animation delay (ms) */
  delay?: number;
  /** click handler for lightbox */
  onClick?: () => void;
  /** Custom classes for grid layout */
  className?: string;
}

/**
 * GalleryImage — a single bento card with:
 *  - Intersection Observer scroll-reveal (fade-in-up)
 *  - Skeleton shimmer while the image loads
 *  - Grayscale-to-color transition on hover
 *  - Caption overlay on hover
 */
export default function GalleryImage({ photo, delay = 0, onClick, className = "" }: GalleryImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  /* ── Intersection Observer for scroll reveal ── */
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Apply delay so staggered items animate sequentially
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`group cursor-pointer overflow-hidden rounded-xl relative bg-black/5 dark:bg-white/5 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } transition-all duration-700 ease-out ${className}`}
      aria-label={photo.title}
      onClick={onClick}
    >
      {/* Skeleton shimmer shown while image is loading */}
      {!isLoaded && (
        <div className="skeleton absolute inset-0 rounded-sm" aria-hidden />
      )}

      {/* The photo itself */}
      <Image
        src={photo.imageUrl}
        alt={photo.title}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className={`
          object-cover
          transition-all duration-700 ease-in-out
          grayscale
          group-hover:grayscale-0
          group-hover:scale-[1.03]
          ${isLoaded ? "opacity-100" : "opacity-0"}
        `}
        onLoad={() => setIsLoaded(true)}
      />

      {/* Caption overlay — slides up on hover */}
      <div
        className="
          photo-caption
          absolute inset-x-0 bottom-0
          px-6 py-8
          bg-gradient-to-t from-black/80 via-black/40 to-transparent
          translate-y-4 opacity-0
          group-hover:translate-y-0 group-hover:opacity-100
          transition-all duration-500 ease-in-out
        "
        aria-hidden
      >
        <p className="text-sm font-medium tracking-[0.2em] uppercase text-white drop-shadow-md">
          {photo.title}
        </p>
      </div>
    </div>
  );
}
