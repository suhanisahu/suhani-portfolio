const education = [
  {
    year: "2023 — 2025",
    degree: "Master of Computer Applications",
    institution: "Sri Sri University",
    detail: "CGPA: 8.35",
    icon: "🎓",
    gradient: "from-indigo-500 to-purple-500",
    badge: "bg-indigo-100 text-indigo-700",
  },
  {
    year: "2020 — 2023",
    degree: "Bachelor of Commerce",
    institution: "Utkal University",
    detail: "CGPA: 8.50",
    icon: "📚",
    gradient: "from-pink-500 to-orange-400",
    badge: "bg-pink-100 text-pink-700",
  },
];

function Education() {
  return (
    <section
      id="education"
      className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-pink-50 px-6 py-24 lg:py-32"
    >
      {/* Background Decorations */}
      <div className="absolute -left-20 top-20 h-64 w-64 rounded-full bg-indigo-300/20 blur-3xl" />
      <div className="absolute -right-20 bottom-10 h-64 w-64 rounded-full bg-pink-300/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl lg:px-10">
        {/* Heading */}
        <div className="mb-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
            Education
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            My academic{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent">
              journey.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            My educational background combines business knowledge with
            computer applications and software development.
          </p>
        </div>

        {/* Education Cards */}
        <div className="space-y-6">
          {education.map((item) => (
            <article
              key={item.degree}
              className="group relative overflow-hidden rounded-3xl border border-white bg-white/80 p-7 shadow-lg shadow-indigo-100/40 backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-9"
            >
              {/* Gradient Top Border */}
              <div
                className={`absolute left-0 top-0 h-1.5 w-full bg-gradient-to-r ${item.gradient}`}
              />

              <div className="grid gap-6 md:grid-cols-[180px_1fr] md:items-center">
                {/* Year */}
                <div>
                  <span
                    className={`inline-flex rounded-full px-4 py-2 text-sm font-semibold ${item.badge}`}
                  >
                    {item.year}
                  </span>
                </div>

                {/* Details */}
                <div className="flex items-start gap-5">
                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${item.gradient} text-2xl shadow-md transition duration-300 group-hover:scale-110`}
                  >
                    {item.icon}
                  </div>

                  <div>
                    <h3 className="text-xl font-bold leading-snug text-gray-900 sm:text-2xl">
                      {item.degree}
                    </h3>

                    <p className="mt-2 font-medium text-gray-600">
                      {item.institution}
                    </p>

                    <span className="mt-4 inline-flex items-center gap-2 rounded-lg bg-emerald-50 px-3 py-2 text-sm font-semibold text-emerald-700">
                      <span>✓</span>
                      {item.detail}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;