import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from '../assets/logo.png'; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <NavLink to="/" className="flex items-center space-x-2">
          <img src={logo} alt="HealthTrack Logo" className="w-8 h-8" />
          <span className="text-lg font-bold">HealthTrack</span>
        </NavLink>

        <div className="hidden md:flex space-x-6">
          <NavLink to="/" className={({ isActive }) => isActive ? "underline" : ""}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "underline" : ""}>About</NavLink>
          <NavLink to="/features" className={({ isActive }) => isActive ? "underline" : ""}>Features</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "underline" : ""}>Contact</NavLink>
          <NavLink to="/dynamic" className={({ isActive }) => isActive ? "underline" : ""}>Daily Logs</NavLink>
        </div>

        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden mt-2 space-y-2 px-2">
          <NavLink to="/" onClick={() => setIsOpen(false)} className="block">Home</NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)} className="block">About</NavLink>
          <NavLink to="/features" onClick={() => setIsOpen(false)} className="block">Features</NavLink>
          <NavLink to="/contact" onClick={() => setIsOpen(false)} className="block">Contact</NavLink>
          <NavLink to="/dynamic" onClick={() => setIsOpen(false)} className="block">Daily Logs</NavLink>
        </div>
      )}
    </nav>
  );
}
