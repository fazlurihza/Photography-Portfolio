"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide if scrolling down and past 100px, show if scrolling up
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setIsScrolled(currentScrollY > 50);
      lastScrollY.current = currentScrollY;
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 px-6 md:px-12 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        isScrolled
          ? "backdrop-blur-md bg-white/70 dark:bg-black/70 border-b border-black/5 dark:border-white/5 py-4"
          : "py-8"
      }`}
    >
      <div className="w-full flex justify-between items-center">
        {/* Brand */}
        <Link
          href="/"
          className="hero-title text-lg text-[var(--accent)] dark:text-white/90 tracking-widest select-none hover:opacity-80 transition-opacity"
        >
          Lumina
        </Link>

        {/* Navigation & Theme Toggle */}
        <div className="flex items-center gap-6 md:gap-8">
          <ul className="flex items-center gap-6 md:gap-8">
            {["Work", "About", "Contact"].map((item) => {
              const route = `/${item.toLowerCase()}`;
              const isActive = pathname === route;
              return (
                <li key={item}>
                  <Link
                    href={route}
                    className={`nav-link text-xs font-light tracking-[0.25em] uppercase transition-colors duration-300 ${
                      isActive
                        ? "text-black dark:text-white"
                        : "text-black/50 dark:text-white/50 hover:text-black/90 dark:hover:text-white/90"
                    }`}
                  >
                    {item}
                  </Link>
                </li>
              );
            })}
          </ul>
          
          {/* Theme Toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-1 text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
