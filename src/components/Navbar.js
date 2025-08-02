import React from "react";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 backdrop-blur-md">
      <nav className=" border-b-4 border-neon-cyan/70 shadow-[0_20px_20px_#00ffff20]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-4xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">
              PortFolio
            </span>
          </div>
          <ul className="flex space-x-6 text-lg white font-medium tracking-wide">
            {["About", "Tech Stack", "Projects", "Education", "Contact"].map((item) => (
              <li
                key={item}
                className="hover:text-neon-cyan hover:drop-shadow-[0_0_8px_#00ffff] transition duration-300 cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}