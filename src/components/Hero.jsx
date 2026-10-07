import resume from "../assets/resume.pdf";
import profile from "../assets/photo.png";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 px-6 pt-24"
    >
      {/* Background Decorations */}
      <div className="absolute -left-24 top-32 h-72 w-72 rounded-full bg-purple-300/30 blur-3xl" />
      <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-blue-300/30 blur-3xl" />
      <div className="absolute right-1/3 top-20 h-32 w-32 rounded-full bg-pink-300/20 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-2 lg:px-10">

        {/* Left Content */}
        <div>

          {/* Open to Work */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-200 bg-white/80 px-4 py-2 shadow-sm backdrop-blur">
            <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
            <span className="text-sm font-medium text-green-700">
              Open to Work
            </span>
          </div>

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
            Hello, I'm
          </p>

          <h1 className="text-5xl font-bold leading-tight tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
            Suhani{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
              Sahu
            </span>
          </h1>

          <h2 className="mt-5 text-xl font-semibold text-gray-700 sm:text-2xl">
            Software Developer{" "}
            <span className="text-indigo-500">|</span> Python & React
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
            I'm an MCA graduate and aspiring Software Developer focused on
            building responsive, user-friendly web applications. I work with
            Python, Django, React.js, JavaScript, HTML, CSS and SQL.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">

            <a
              href="#projects"
              className="rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition duration-300 hover:-translate-y-1 hover:from-indigo-700 hover:to-purple-700"
            >
              View My Work →
            </a>

            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-indigo-200 bg-white/80 px-7 py-3.5 text-sm font-semibold text-indigo-700 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-indigo-400 hover:bg-white"
            >
              View Resume
            </a>

          </div>

          {/* Skills */}
          <div className="mt-10 flex flex-wrap gap-3">
            {["Python", "Django", "React", "JavaScript", "SQL"].map(
              (skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-indigo-100 bg-white/70 px-4 py-2 text-sm font-medium text-gray-600 shadow-sm"
                >
                  {skill}
                </span>
              )
            )}
          </div>

        </div>

        {/* Profile Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">

            {/* Glow */}
            <div className="absolute -inset-8 rounded-full bg-gradient-to-r from-indigo-400/30 via-purple-400/30 to-pink-400/30 blur-2xl" />

            {/* Outer Ring */}
            <div className="absolute -inset-5 rounded-full border-2 border-indigo-200" />

            {/* Image */}
            <div className="relative h-72 w-72 overflow-hidden rounded-full border-8 border-white bg-gray-100 shadow-2xl shadow-indigo-200 sm:h-96 sm:w-96">
              <img
                src={profile}
                alt="Suhani Sahu"
                className="h-full w-full object-cover"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;