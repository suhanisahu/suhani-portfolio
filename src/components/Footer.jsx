function Footer() {
  return (
    <footer className="border-t border-white/10 bg-gray-950 px-6 py-8 text-gray-400">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between lg:px-10">

        <div>
          <p className="text-sm">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-white">Suhani Sahu</span>.
            All rights reserved.
          </p>

          <p className="mt-1 text-xs text-gray-500">
            Built with React.js & Tailwind CSS
          </p>
        </div>

        <a
          href="#home"
          className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-gray-300 transition duration-300 hover:-translate-y-1 hover:border-indigo-400/50 hover:bg-indigo-500/10 hover:text-white"
        >
          Back to top
          <span className="transition-transform duration-300 group-hover:-translate-y-1">
            ↑
          </span>
        </a>

      </div>
    </footer>
  );
}

export default Footer;