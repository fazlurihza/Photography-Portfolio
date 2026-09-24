export default function Footer() {
  return (
    <footer
      className="px-6 md:px-12 py-8 border-t mt-auto"
      style={{ borderColor: "var(--border)" }}
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
        <p
          className="text-[0.65rem] tracking-[0.25em] uppercase text-black/50 dark:text-white/50"
        >
          © {new Date().getFullYear()} LUMINA
        </p>
        <span className="hidden sm:inline-block text-black/30 dark:text-white/30 text-xs">|</span>
        <p
          className="text-[0.65rem] tracking-[0.25em] uppercase text-black/50 dark:text-white/50"
        >
          ALL RIGHTS RESERVED
        </p>
      </div>
    </footer>
  );
}
