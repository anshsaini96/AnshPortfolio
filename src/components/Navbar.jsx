import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-4 transition-all duration-300 ${
        scrolled
          ? "bg-white/70 backdrop-blur-lg border-b border-blue-100 shadow-md"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <NavLink
        to="/"
        className="w-10 h-10 rounded-lg bg-white flex items-center justify-center font-bold shadow-md"
      >
        <p className="bg-linear-to-r from-blue-500 via-cyan-400 to-blue-600 bg-clip-text text-transparent font-bold">
          AS
        </p>
      </NavLink>

      {/* Navigation */}
      <nav className="flex items-center text-lg gap-7 font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500"
              : "text-black hover:text-blue-400 transition-colors"
          }
        >
          About
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500"
              : "text-black hover:text-blue-400 transition-colors"
          }
        >
          Projects
        </NavLink>

        <a
          href="/AnshResume-1.pdf"
          download
          className="text-black hover:text-blue-400 transition-colors flex items-center gap-1"
        >
          Resume
          <span className="text-sm">↓</span>
        </a>
      </nav>
    </header>
  );
};

export default Navbar;