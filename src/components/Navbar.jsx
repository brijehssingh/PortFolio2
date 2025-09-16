import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const linkClass = ({ isActive }) =>
  "px-4 py-2 rounded-lg font-medium transition-colors duration-200 " +
  (isActive
    ? "bg-primary text-primary-content"
    : "hover:bg-base-200 text-base-content");

export default function Navbar() {
  return (
    <div className="navbar bg-base-100/80 backdrop-blur sticky top-0 z-50 shadow-sm">
      {/* Left side */}
      <div className="navbar-start">
        {/* Mobile dropdown */}
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li><NavLink to="/projects" className={linkClass}>Projects</NavLink></li>
            <li><NavLink to="/about" className={linkClass}>About</NavLink></li>
            <li><NavLink to="/contact" className={linkClass}>Contact</NavLink></li>
          </ul>
        </div>

        {/* Brand */}
        <Link
          to="/"
          className="btn btn-ghost normal-case text-xl font-bold tracking-wide hover:text-primary transition-colors"
        >
          Brijesh<span className="text-primary ml-1">Portfolio</span>
        </Link>
      </div>

      {/* Center links (desktop) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-2">
          <li><NavLink to="/projects" className={linkClass}>Projects</NavLink></li>
          <li><NavLink to="/about" className={linkClass}>About</NavLink></li>
          <li><NavLink to="/contact" className={linkClass}>Contact</NavLink></li>
        </ul>
      </div>

      {/* Right side */}
      <div className="navbar-end gap-3">
       <a
  href="/resume.pdf"
  target="_blank"
  rel="noreferrer"
  className="btn btn-primary"
>
  Download Resume
</a>
        <ThemeToggle />
      </div>
    </div>
  );
}
