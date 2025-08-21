export default function Navbar() {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  const sections = [
    { name: "About", id: "about" },
    { name: "Tech Stack", id: "techstack" },
    { name: "Projects", id: "projects" },
    { name: "Education", id: "education" },
    { name: "Contact", id: "contact" },
  ];

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
            {sections.map((item) => (
              <li
                key={item.id}
                className="hover:text-neon-cyan hover:drop-shadow-[0_0_8px_#00ffff] transition duration-300 cursor-pointer"
                onClick={() => scrollToSection(item.id)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}
