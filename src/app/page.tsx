import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section
        aria-label="Hero introduction"
        className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-12 text-center"
      >
        {/* Radial gradient ambient glow */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 60%, rgba(201,169,110,0.06) 0%, transparent 100%)",
          }}
          aria-hidden
        />

        <div className="max-w-7xl mx-auto h-full flex flex-col justify-center items-center relative">
          <p className="mb-4 text-[0.65rem] font-light tracking-[0.4em] uppercase text-black/40 dark:text-white/30 z-10">
            Ayesha Zafasha
          </p>
          <h1 className="hero-title text-6xl sm:text-8xl md:text-[8vw] leading-none text-black/90 dark:text-white/90 mb-6 z-10">
            Light <br />
            <span style={{ color: "var(--accent)" }}>&amp;</span> Shadow
          </h1>
          <p className="max-w-sm text-sm font-light leading-relaxed tracking-wide text-black/50 dark:text-white/40 z-10">
            A cinematic photography portfolio showcasing volcanic landscapes,
            foggy forests, and cascading waterfalls.
          </p>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-10" aria-hidden>
          <span className="text-[0.6rem] tracking-[0.3em] uppercase text-black/30 dark:text-white/20">
            Scroll
          </span>
          <div
            className="w-px h-16 overflow-hidden bg-black/10 dark:bg-white/10"
          >
            <div
              className="w-px h-1/2 bg-black/50 dark:bg-white/50"
              style={{
                animation: "fadeInUp 2s ease-in-out infinite",
              }}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
