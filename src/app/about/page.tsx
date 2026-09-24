import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="flex flex-col md:flex-row min-h-screen">
      {/* ── Left Side: Sticky Image ──────────────────────────────── */}
      <section
        className="w-full md:w-1/2 h-[50vh] md:h-screen relative md:sticky md:top-0"
        aria-label="Portrait of Ayesha Zafasha"
      >
        <Image
          src="/ayesha.jpg"
          alt="Ayesha Zafasha — Landscape Photographer"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
          priority
        />

        {/* Subtle gradient to blend into background */}
        <div
          className="absolute inset-0 pointer-events-none bg-gradient-to-t md:bg-gradient-to-r from-transparent via-transparent to-[var(--bg)] md:via-[var(--bg)]/20 md:to-[var(--bg)]"
          aria-hidden
        />

        <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 flex items-center gap-1.5 z-10 bg-white/40 dark:bg-black/40 backdrop-blur-md px-4 py-2 border border-black/10 dark:border-white/10 rounded-sm">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
          <span className="text-[0.6rem] font-medium tracking-widest uppercase text-black/80 dark:text-white/80">
            Available for assignments
          </span>
        </div>
      </section>

      {/* ── Right Side: Scrollable Bio ────────────────────────────────────────────── */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center py-16 px-6 md:px-16 lg:px-24">
        <p
          className="text-[0.65rem] tracking-[0.35em] uppercase mb-6"
          style={{ color: "var(--text-muted)" }}
        >
          Biography
        </p>

        <h2 className="hero-title text-4xl sm:text-5xl lg:text-6xl text-black/90 dark:text-white/90 mb-8 leading-tight">
          Chasing the <br />
          <span style={{ color: "var(--accent)" }}>sublime</span>.
        </h2>

        <div className="space-y-6 text-sm font-light leading-loose text-black/60 dark:text-white/45 mb-12">
          <p>
            I am a landscape and nature photographer drawn to the extremes —
            the edge of a caldera at golden hour, the blue silence of a
            rainforest at dawn, the violence of a waterfall in full flood.
            Every frame is a quiet obsession with transience.
          </p>
          <p>
            Based between Reykjavík and Kyoto, I have spent the last decade
            traversing volcanic archipelagos, ancient cedar forests, and
            glacial river systems. My work has been exhibited in galleries
            across Oslo, Tokyo, and São Paulo.
          </p>
          <p>
            I seek the impossible light. The brief moments when weather, time,
            and geography align perfectly. My approach is entirely immersive—often
            spending weeks in isolation to capture a single frame that conveys
            the raw, untamed spirit of our natural world.
          </p>
        </div>

        {/* Stats Grid */}
        <div
          className="grid grid-cols-3 gap-6 mb-12 pt-8 border-t"
          style={{ borderColor: "var(--border)" }}
        >
          {[
            { value: "12+", label: "Years" },
            { value: "38", label: "Countries" },
            { value: "200K", label: "Followers" },
          ].map(({ value, label }) => (
            <div key={label}>
              <p
                className="hero-title text-3xl mb-1"
                style={{ color: "var(--accent)" }}
              >
                {value}
              </p>
              <p
                className="text-[0.6rem] tracking-[0.3em] uppercase"
                style={{ color: "var(--text-muted)" }}
              >
                {label}
              </p>
            </div>
          ))}
        </div>

        {/* Selected Clients / Awards */}
        <div className="mb-12">
          <p
            className="text-[0.6rem] tracking-[0.3em] uppercase mb-4"
            style={{ color: "var(--text-muted)" }}
          >
            Featured In
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "National Geographic",
              "Monocle",
              "Sony World Awards",
              "Lensculture",
            ].map((tag) => (
              <span
                key={tag}
                className="text-[0.6rem] tracking-[0.2em] uppercase px-3 py-1.5 rounded-sm transition-colors duration-300 hover:border-black/40 dark:hover:border-white/40 text-black/60 dark:text-white/60 hover:text-black/80 dark:hover:text-white/80 cursor-default"
                style={{
                  border: "1px solid var(--border)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6">
          {[
            {
              label: "Instagram",
              href: "#",
              icon: (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              ),
            },
            {
              label: "500px",
              href: "#",
              icon: (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M9.2 8.4c-.5.5-.8 1.2-.8 1.9s.3 1.4.8 1.9.9.8 1.9.8 1.4-.3 1.9-.8.8-1.2.8-1.9-.3-1.4-.8-1.9S12.1 7.6 11.1 7.6s-1.4.3-1.9.8zm6.6 6.9C14.5 16.6 12.9 17.3 11 17.3c-1.8 0-3.4-.7-4.7-1.9-1.2-1.3-1.9-2.9-1.9-4.7s.7-3.5 1.9-4.7C7.6 4.8 9.2 4.1 11 4.1c1.8 0 3.5.7 4.7 1.9 1.3 1.2 1.9 2.9 1.9 4.7.1 1.8-.6 3.5-1.8 4.6zM11 0C4.9 0 0 4.9 0 11s4.9 11 11 11 11-4.9 11-11S17.1 0 11 0z" />
                </svg>
              ),
            },
            {
              label: "Behance",
              href: "#",
              icon: (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029H23.7zM15.971 10.8c-.232 1.554 1.168 1.901 2.34 1.901 1.198 0 2.007-.58 2.007-1.901h-4.347zm-8.04-5.327c1.404 0 2.469.47 2.469 2.059 0 .848-.428 1.425-1.109 1.827 1.015.334 1.618 1.016 1.618 2.218 0 1.886-1.356 2.72-3.3 2.72H1.94V5.473h5.991zm-.69 3.481c.837 0 1.304-.41 1.304-1.104 0-.715-.438-1.074-1.27-1.074H4.31v2.178h2.93zm.234 3.776c.922 0 1.431-.438 1.431-1.241 0-.779-.531-1.183-1.463-1.183H4.31v2.424h3.165z" />
                </svg>
              ),
            },
          ].map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="nav-link flex items-center gap-2 transition-colors duration-300 text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white"
            >
              {icon}
              <span className="text-[0.65rem] tracking-[0.2em] uppercase">
                {label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
