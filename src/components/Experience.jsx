const experience = [
  {
    period: "Training",
    role: "Full Stack Python Trainee",
    company: "Besant Technologies",
    description:
      "Completed practical training focused on Python, Django, frontend development, databases and full-stack web development.",
    icon: "🐍",
    gradient: "from-indigo-500 to-purple-500",
    badge: "bg-indigo-100 text-indigo-700",
  },
  {
    period: "Training",
    role: "Frontend Developer Intern",
    company: "IBM CSRBox",
    description:
      "Worked on practical frontend development tasks and strengthened skills in building responsive web interfaces.",
    icon: "💻",
    gradient: "from-blue-500 to-cyan-400",
    badge: "bg-blue-100 text-blue-700",
  },
  {
    period: "Training",
    role: "Web Development Intern",
    company: "InternPe",
    description:
      "Completed web development exercises and practical tasks to strengthen core programming and frontend development skills.",
    icon: "🌐",
    gradient: "from-emerald-500 to-teal-400",
    badge: "bg-emerald-100 text-emerald-700",
  },
  {
    period: "Training",
    role: "Web Development Intern",
    company: "Prodigy InfoTech",
    description:
      "Worked on web development tasks and projects while improving practical programming and frontend development skills.",
    icon: "⚡",
    gradient: "from-pink-500 to-orange-400",
    badge: "bg-pink-100 text-pink-700",
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-gradient-to-br from-white via-purple-50/50 to-blue-50 px-6 py-24 lg:py-32"
    >
      {/* Background Decorations */}
      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl" />
      <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-purple-300/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl lg:px-10">
        {/* Heading */}
        <div className="mb-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
            Experience
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Training &{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              practical experience.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            Practical training and internship experience that helped me
            develop my technical, development and problem-solving skills.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {experience.map((item) => (
            <article
              key={`${item.role}-${item.company}`}
              className="group relative overflow-hidden rounded-3xl border border-white bg-white/80 p-7 shadow-lg shadow-indigo-100/30 backdrop-blur transition duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-9"
            >
              {/* Gradient Top Border */}
              <div
                className={`absolute left-0 top-0 h-1.5 w-full bg-gradient-to-r ${item.gradient}`}
              />

              <div className="grid gap-6 md:grid-cols-[150px_1fr] md:items-start">
                {/* Period */}
                <div>
                  <span
                    className={`inline-flex rounded-full px-4 py-2 text-sm font-semibold ${item.badge}`}
                  >
                    {item.period}
                  </span>
                </div>

                {/* Details */}
                <div className="flex gap-5">
                  {/* Icon */}
                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${item.gradient} text-2xl shadow-md transition duration-300 group-hover:scale-110`}
                  >
                    {item.icon}
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
                      {item.role}
                    </h3>

                    <p className="mt-1 font-semibold text-indigo-600">
                      {item.company}
                    </p>

                    <p className="mt-4 max-w-3xl leading-7 text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Circle */}
              <div
                className={`absolute -bottom-16 -right-16 h-36 w-36 rounded-full bg-gradient-to-r ${item.gradient} opacity-5 transition duration-500 group-hover:scale-150`}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;