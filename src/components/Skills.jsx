const skillGroups = [
  {
    title: "Frontend Development",
    description: "Creating responsive and user-friendly interfaces.",
    skills: ["HTML", "CSS", "JavaScript", "React.js"],
    gradient: "from-blue-500 to-cyan-400",
    bg: "bg-blue-50",
    border: "border-blue-100",
  },
  {
    title: "Backend Development",
    description: "Building application logic and web backends.",
    skills: ["Python", "Django", "Flask"],
    gradient: "from-indigo-500 to-purple-500",
    bg: "bg-indigo-50",
    border: "border-indigo-100",
  },
  {
    title: "Database",
    description: "Working with databases and data management.",
    skills: ["SQL", "MySQL", "DBMS"],
    gradient: "from-emerald-500 to-teal-400",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
  },
  {
    title: "Tools & Technologies",
    description: "Development tools and additional technical exposure.",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "AWS Fundamentals",
      "Linux",
      "Generative AI",
      "Cybersecurity",
    ],
    gradient: "from-pink-500 to-orange-400",
    bg: "bg-pink-50",
    border: "border-pink-100",
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-white px-6 py-24 lg:py-32"
    >
      {/* Background Decorations */}
      <div className="absolute -right-24 top-20 h-72 w-72 rounded-full bg-purple-200/30 blur-3xl" />
      <div className="absolute -left-24 bottom-10 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl lg:px-10">

        {/* Heading */}
        <div className="mb-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
            Skills
          </p>

          <h2 className="max-w-3xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Technologies I{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              work with.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            A combination of frontend, backend, database and development tools
            that I use while building and learning modern web applications.
          </p>
        </div>

        {/* Skill Cards */}
        <div className="grid gap-6 sm:grid-cols-2">

          {skillGroups.map((group) => (
            <div
              key={group.title}
              className={`group relative overflow-hidden rounded-3xl border ${group.border} ${group.bg} p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-8`}
            >
              {/* Top Gradient Line */}
              <div
                className={`absolute left-0 top-0 h-1 w-full bg-gradient-to-r ${group.gradient}`}
              />

              <h3 className="text-xl font-bold text-gray-900">
                {group.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                {group.description}
              </p>

              {/* Skills */}
              <div className="mt-6 flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white bg-white/80 px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Decorative Circle */}
              <div
                className={`absolute -bottom-12 -right-12 h-28 w-28 rounded-full bg-gradient-to-r ${group.gradient} opacity-10 transition duration-500 group-hover:scale-150`}
              />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;