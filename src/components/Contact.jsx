function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600 px-6 py-24 text-white lg:py-32"
    >
      {/* Background Decorations */}
      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl" />
      <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-pink-300/20 blur-3xl" />
      <div className="absolute left-1/2 top-1/3 h-40 w-40 -translate-x-1/2 rounded-full bg-purple-300/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl lg:px-10">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-24">

          {/* Left Side */}
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-200">
              Contact
            </p>

            <h2 className="max-w-xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Let's build something{" "}
              <span className="text-pink-200">together.</span>
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-indigo-100">
              I am open to entry-level software development opportunities,
              internships and projects where I can learn, contribute and grow.
            </p>

            <a
              href="mailto:suhanisahu66@gmail.com"
              className="mt-8 inline-flex items-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-indigo-700 shadow-xl transition duration-300 hover:-translate-y-1 hover:bg-indigo-50 hover:shadow-2xl"
            >
              Send me an email →
            </a>
          </div>

          {/* Right Side */}
          <div className="grid gap-5 sm:grid-cols-2">

            {/* Location */}
            <div className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/15">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-xl">
                📍
              </div>

              <p className="text-sm font-medium text-indigo-200">
                Location
              </p>

              <p className="mt-2 text-lg font-semibold text-white">
                Odisha, India
              </p>
            </div>

            {/* Email */}
            <div className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/15">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-xl">
                ✉️
              </div>

              <p className="text-sm font-medium text-indigo-200">
                Email
              </p>

              <a
                href="mailto:suhanisahu66@gmail.com"
                className="mt-2 block break-all text-sm font-semibold text-white transition hover:text-pink-200"
              >
                suhanisahu66@gmail.com
              </a>
            </div>

            {/* LinkedIn */}
            <div className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/15">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-xl">
                💼
              </div>

              <p className="text-sm font-medium text-indigo-200">
                LinkedIn
              </p>

              <a
                href="https://www.linkedin.com/in/suhani-sahu-178b66287"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block break-all text-sm font-semibold text-white transition hover:text-pink-200"
              >
                suhani-sahu-178b66287
              </a>
            </div>

            {/* GitHub */}
            <div className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/15">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-xl">
                💻
              </div>

              <p className="text-sm font-medium text-indigo-200">
                GitHub
              </p>

              <a
                href="https://github.com/suhanisahu"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block break-all text-sm font-semibold text-white transition hover:text-pink-200"
              >
                github.com/suhanisahu
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;