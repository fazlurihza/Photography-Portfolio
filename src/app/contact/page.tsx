"use client";

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send an API request to a service like Formspree.
    alert("Thank you. Your message has been received.");
  };

  return (
    <main className="min-h-screen flex items-center justify-center pt-24 pb-16 px-6 md:px-12">
      <section
        aria-label="Contact Information and Form"
        className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24"
      >
        {/* ── Left Side: Contact Information ──────────────────────── */}
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <p
            className="text-[0.65rem] tracking-[0.35em] uppercase mb-4"
            style={{ color: "var(--text-muted)" }}
          >
            Inquiries
          </p>

          <h1 className="hero-title text-4xl sm:text-5xl lg:text-6xl mb-8 leading-tight opacity-90 text-black dark:text-white">
            Let&apos;s create <br />
            something <span style={{ color: "var(--accent)" }}>timeless</span>.
          </h1>

          <div className="space-y-10 mt-6 border-t pt-10" style={{ borderColor: "var(--border)" }}>
            {/* General Inquiries */}
            <div>
              <p
                className="text-[0.65rem] tracking-[0.3em] uppercase mb-2"
                style={{ color: "var(--text-muted)" }}
              >
                General Inquiries
              </p>
              <a
                href="mailto:hello@lumina.photo"
                className="text-sm font-light opacity-70 hover:opacity-100 transition-opacity duration-300 text-black dark:text-white"
              >
                hello@lumina.photo
              </a>
            </div>

            {/* Gallery Representation */}
            <div>
              <p
                className="text-[0.65rem] tracking-[0.3em] uppercase mb-2"
                style={{ color: "var(--text-muted)" }}
              >
                Gallery Representation
              </p>
              <p className="text-black/60 dark:text-white/60 font-light leading-relaxed">
                Lumina Arts Collective<br />
                Oslo, Norway<br />
                <span className="text-[0.6rem] tracking-[0.25em] uppercase text-black/40 dark:text-white/40 block mt-4 mb-2">Studio (By Appointment)</span>
                14 Fjord Avenue, Suite 2<br />
                Reykjavík, Iceland
              </p>
            </div>
          </div>
        </div>

        {/* ── Right Side: Contact Form ────────────────────────────── */}
        <div className="w-full lg:w-7/12 flex flex-col justify-center">
          <form onSubmit={handleSubmit} className="flex flex-col gap-10">
            {/* Name Input */}
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="text-[0.65rem] tracking-[0.3em] uppercase mb-3"
                style={{ color: "var(--text-muted)" }}
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                placeholder="John Doe"
                className="bg-transparent border-b outline-none text-sm font-light py-2 opacity-90 placeholder:opacity-30 transition-colors duration-300 focus:border-black/60 dark:focus:border-white/60 text-black dark:text-white"
                style={{ borderColor: "var(--border)" }}
              />
            </div>

            {/* Email Input */}
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-[0.65rem] tracking-[0.3em] uppercase mb-3"
                style={{ color: "var(--text-muted)" }}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                placeholder="john@example.com"
                className="bg-transparent border-b outline-none text-sm font-light py-2 opacity-90 placeholder:opacity-30 transition-colors duration-300 focus:border-black/60 dark:focus:border-white/60 text-black dark:text-white"
                style={{ borderColor: "var(--border)" }}
              />
            </div>

            {/* Message Input */}
            <div className="flex flex-col">
              <label
                htmlFor="message"
                className="text-[0.65rem] tracking-[0.3em] uppercase mb-3"
                style={{ color: "var(--text-muted)" }}
              >
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                placeholder="Tell me about your project..."
                className="bg-transparent border-b outline-none text-sm font-light py-2 opacity-90 placeholder:opacity-30 transition-colors duration-300 focus:border-black/60 dark:focus:border-white/60 resize-none text-black dark:text-white"
                style={{ borderColor: "var(--border)" }}
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-4 self-start text-xs tracking-[0.3em] uppercase border px-10 py-4 transition-all duration-300 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
              style={{
                borderColor: "var(--border)",
                color: "var(--text-primary)",
              }}
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
