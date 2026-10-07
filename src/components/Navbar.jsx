// import { Menu, X } from "lucide-react";
// import { useState } from "react";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const menuItems = [
//     { name: "Home", href: "#home" },
//     { name: "About", href: "#about" },
//     { name: "Skills", href: "#skills" },
//     { name: "Projects", href: "#projects" },
//     { name: "Experience", href: "#experience" },
//     { name: "Contact", href: "#contact" },
//   ];

//   return (
//     <nav className="fixed top-0 left-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-100">
//       <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">

//         {/* Logo */}
//         <a
//           href="#home"
//           className="text-2xl font-bold tracking-tight text-gray-900"
//         >
//           Suhani<span className="text-gray-400">.</span>
//         </a>

//         {/* Desktop Menu */}
//         <div className="hidden items-center gap-8 md:flex">
//           {menuItems.map((item) => (
//             <a
//               key={item.name}
//               href={item.href}
//               className="text-sm font-medium text-gray-600 transition hover:text-black"
//             >
//               {item.name}
//             </a>
//           ))}

//           <a
//             href="#contact"
//             className="rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800"
//           >
//             Let's Talk
//           </a>
//         </div>

//         {/* Mobile Button */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="md:hidden"
//           aria-label="Toggle menu"
//         >
//           {isOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="border-t border-gray-100 bg-white px-6 py-5 md:hidden">
//           <div className="flex flex-col gap-5">
//             {menuItems.map((item) => (
//               <a
//                 key={item.name}
//                 href={item.href}
//                 onClick={() => setIsOpen(false)}
//                 className="text-sm font-medium text-gray-700"
//               >
//                 {item.name}
//               </a>
//             ))}

//             <a
//               href="#contact"
//               onClick={() => setIsOpen(false)}
//               className="w-fit rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white"
//             >
//               Let's Talk
//             </a>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }

// export default Navbar;

import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-gray-200/70 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">

        {/* Logo */}
        <a
          href="#home"
          onClick={handleLinkClick}
          className="text-2xl font-bold tracking-tight text-gray-900"
        >
          Suhani
          <span className="bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent">
            .
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-600 transition duration-200 hover:text-indigo-600"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            className="rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-indigo-200 transition duration-300 hover:-translate-y-0.5 hover:from-indigo-700 hover:to-purple-700"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm transition hover:border-indigo-300 hover:text-indigo-600 md:hidden"
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-gray-200 bg-white px-6 py-5 shadow-lg md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-4">

            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="rounded-xl px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-indigo-50 hover:text-indigo-600"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={handleLinkClick}
              className="rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-3 text-center text-sm font-semibold text-white"
            >
              Let's Talk
            </a>

          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;