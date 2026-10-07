import expenseTrackerImage from "../assets/projects/expense-tracker.png";

const projects = [
  {
    number: "01",
    title: "Cafe Booking Website",
    type: "Full Stack",
    description:
      "A modern cafe website concept with table booking, dining experiences, menu browsing, special offers and user-focused interactions.",
    technologies: ["React", "JavaScript", "Python", "Django"],
    github: "#",
    live: "#",
    gradient: "from-orange-500 to-pink-500",
    background: "bg-orange-50",
  },
  {
    number: "02",
    title: "Expense Tracker",
    type: "Web Application",
    description:
      "A Flask-based web application for adding, editing, viewing and deleting expense records with a responsive user interface.",
    technologies: ["Python", "Flask", "HTML", "CSS", "JavaScript"],
    image: expenseTrackerImage,
    github: "https://github.com/suhanisahu/Expense-Tracker-Flask",
    live: "#",
    gradient: "from-indigo-500 to-purple-500",
    background: "bg-indigo-50",
  },
  {
    number: "03",
    title: "Netflix-Style React UI",
    type: "Frontend",
    description:
      "A responsive entertainment-style frontend built with reusable React components and CSS, designed to work across different screen sizes.",
    technologies: ["React", "JavaScript", "CSS"],
    github: "#",
    live: "#",
    gradient: "from-red-500 to-purple-500",
    background: "bg-red-50",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-indigo-50 px-6 py-24 lg:py-32"
    >
      {/* Background Decorations */}
      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-purple-300/20 blur-3xl" />
      <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-pink-300/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl lg:px-10">
        {/* Heading */}
        <div className="mb-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
            Selected Work
          </p>

          <h2 className="max-w-3xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Projects I've{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              built and worked on.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            A selection of projects that reflect my development practice,
            technical learning and interest in building practical applications.
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-7">
          {projects.map((project) => (
            <article
              key={project.number}
              className={`group overflow-hidden rounded-3xl border border-white/80 ${project.background} shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl`}
            >
              <div className="grid lg:grid-cols-2">
                {/* Project Visual */}
                {project.image ? (
                  <div className="relative min-h-[300px] overflow-hidden bg-gray-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full min-h-[300px] w-full object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                    <div className="absolute left-6 top-6 rounded-full bg-white/90 px-4 py-2 text-sm font-bold text-gray-800 shadow-md backdrop-blur">
                      {project.number}
                    </div>
                  </div>
                ) : (
                  <div className="relative flex min-h-[300px] items-center justify-center overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-90`}
                    />

                    <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/20 blur-2xl" />
                    <div className="absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-white/20 blur-2xl" />

                    <span className="relative text-8xl font-bold text-white/90 transition duration-500 group-hover:scale-110">
                      {project.number}
                    </span>
                  </div>
                )}

                {/* Project Details */}
                <div className="flex flex-col justify-center p-7 sm:p-9 lg:p-10">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-bold text-indigo-500">
                      {project.number}
                    </span>

                    <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-gray-600 shadow-sm">
                      {project.type}
                    </span>
                  </div>

                  <h3 className="mt-4 text-2xl font-bold text-gray-900 sm:text-3xl">
                    {project.title}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-600">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-white bg-white/80 px-3 py-1.5 text-xs font-semibold text-gray-700 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="mt-7 flex flex-wrap gap-3">
                    {project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-gradient-to-r from-gray-900 to-gray-700 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                      >
                        GitHub →
                      </a>
                    )}

                    {project.live !== "#" && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-indigo-200 bg-white px-5 py-2.5 text-sm font-semibold text-indigo-700 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-indigo-400 hover:shadow-md"
                      >
                        Live Demo →
                      </a>
                    )}
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

export default Projects;