function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-br from-white via-indigo-50/50 to-purple-50 px-6 py-24 lg:py-32"
    >
      {/* Background Decorations */}
      <div className="absolute -left-20 top-20 h-56 w-56 rounded-full bg-indigo-200/30 blur-3xl" />
      <div className="absolute -right-20 bottom-10 h-64 w-64 rounded-full bg-pink-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl lg:px-10">

        {/* Heading */}
        <div className="mb-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
            About Me
          </p>

          <h2 className="max-w-3xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Building practical solutions{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              with technology.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            A quick introduction to my background, technical focus and
            approach to software development.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">

          {/* About Text */}
          <div className="rounded-3xl border border-white/80 bg-white/70 p-7 shadow-lg shadow-indigo-100/50 backdrop-blur sm:p-9">

            <p className="text-lg leading-8 text-gray-600">
              I am an MCA graduate with a background in commerce and a strong
              interest in software development. I enjoy learning new
              technologies and turning ideas into practical, responsive and
              user-friendly web applications.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              My current focus is Full Stack Python development, with hands-on
              learning in Python, Django, React.js, JavaScript, HTML, CSS,
              SQL and database fundamentals.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              I am looking for an entry-level software development opportunity
              where I can apply my technical skills, learn from experienced
              teams and contribute to real-world projects.
            </p>

          </div>

          {/* Highlights */}
          <div className="grid grid-cols-2 gap-5">

            <div className="group rounded-3xl border border-indigo-100 bg-white p-7 shadow-lg shadow-indigo-100/40 transition duration-300 hover:-translate-y-2 hover:border-indigo-200">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 text-xl">
                🎓
              </div>

              <p className="text-3xl font-bold text-gray-900">
                MCA
              </p>

              <p className="mt-2 text-sm text-gray-500">
                Computer Applications
              </p>
            </div>

            <div className="group rounded-3xl border border-purple-100 bg-white p-7 shadow-lg shadow-purple-100/40 transition duration-300 hover:-translate-y-2 hover:border-purple-200">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100 text-xl">
                🐍
              </div>

              <p className="text-3xl font-bold text-gray-900">
                Python
              </p>

              <p className="mt-2 text-sm text-gray-500">
                Full Stack Development
              </p>
            </div>

            <div className="group rounded-3xl border border-pink-100 bg-white p-7 shadow-lg shadow-pink-100/40 transition duration-300 hover:-translate-y-2 hover:border-pink-200">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-100 text-xl">
                ⚛️
              </div>

              <p className="text-3xl font-bold text-gray-900">
                React
              </p>

              <p className="mt-2 text-sm text-gray-500">
                Frontend Development
              </p>
            </div>

            <div className="group rounded-3xl border border-blue-100 bg-white p-7 shadow-lg shadow-blue-100/40 transition duration-300 hover:-translate-y-2 hover:border-blue-200">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-xl">
                🗄️
              </div>

              <p className="text-3xl font-bold text-gray-900">
                SQL
              </p>

              <p className="mt-2 text-sm text-gray-500">
                Database Fundamentals
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default About;