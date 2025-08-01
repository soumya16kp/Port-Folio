// Navbar.jsx
import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/60 border-b border-neon-cyan shadow-[0_2px_20px_#00f7ff50]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <span className="text-neon-pink">My</span>
          <span className="text-neon-cyan">Portfolio</span>
        </div>

        {/* Links */}
        <ul className="flex space-x-6 text-white font-medium tracking-wide">
          {["About", "Tech Stack", "Projects", "Education", "Contact"].map((item) => (
            <li key={item} className="hover:text-neon-cyan transition duration-300 cursor-pointer">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
