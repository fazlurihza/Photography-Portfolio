"use client";

import { useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";

const ROUTES = ["/", "/work", "/about", "/contact"];

export default function ScrollNavigator() {
  const router = useRouter();
  const pathname = usePathname();
  const isNavigating = useRef(false);

  useEffect(() => {
    // Reset navigating flag when pathname changes
    isNavigating.current = false;
  }, [pathname]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isNavigating.current) return;

      const currentIndex = ROUTES.indexOf(pathname);
      if (currentIndex === -1) return;

      // Check if we are at the top or bottom
      const isAtTop = window.scrollY <= 0;
      const isAtBottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 5;

      // Ensure a strong enough scroll intent
      if (e.deltaY > 30 && isAtBottom) {
        // Scroll down
        if (currentIndex < ROUTES.length - 1) {
          isNavigating.current = true;
          router.push(ROUTES[currentIndex + 1]);
        }
      } else if (e.deltaY < -30 && isAtTop) {
        // Scroll up
        if (currentIndex > 0) {
          isNavigating.current = true;
          router.push(ROUTES[currentIndex - 1]);
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [pathname, router]);

  // Touch support for mobile devices
  useEffect(() => {
    let touchStartY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isNavigating.current) return;

      const touchEndY = e.touches[0].clientY;
      const deltaY = touchStartY - touchEndY; // Positive is scroll down

      const currentIndex = ROUTES.indexOf(pathname);
      if (currentIndex === -1) return;

      const isAtTop = window.scrollY <= 0;
      const isAtBottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 5;

      // We use a threshold of 40px for touch intent
      if (deltaY > 40 && isAtBottom) {
        if (currentIndex < ROUTES.length - 1) {
          isNavigating.current = true;
          router.push(ROUTES[currentIndex + 1]);
        }
      } else if (deltaY < -40 && isAtTop) {
        if (currentIndex > 0) {
          isNavigating.current = true;
          router.push(ROUTES[currentIndex - 1]);
        }
      }
    };

    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [pathname, router]);

  return null;
}
