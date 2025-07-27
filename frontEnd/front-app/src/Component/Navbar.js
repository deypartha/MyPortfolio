import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev); // ✅ FIXED

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = { threshold: 0.6 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));

    const handleInitialScroll = () => {
      const scrollY = window.scrollY;
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const top = rect.top + scrollY;
        const height = section.offsetHeight;
        if (
          scrollY >= top - window.innerHeight * 0.4 &&
          scrollY < top + height - window.innerHeight * 0.4
        ) {
          setActiveSection(section.id);
        }
      });
    };

    handleInitialScroll();
    window.addEventListener("scroll", handleInitialScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleInitialScroll);
    };
  }, []);

  return (
    <div className="fixed top-5 z-50 w-full flex justify-center animate-fadeIn">
      <nav className="bg-sky-700 bg-opacity-80 px-6 py-3 rounded-full shadow-lg backdrop-blur-lg w-[90%] max-w-5xl flex items-center justify-between">
        {/* Logo */}
        <div className="text-white font-bold text-xl">Partha Dey</div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 text-lg font-medium">
          {navItems.map(({ label, id }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`relative px-2 py-1 group transition duration-300 ${
                  activeSection === id ? "text-lime-400" : "text-white"
                }`}
              >
                {label}
                {/* Underline on hover */}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-pink-500 transition-all duration-300 origin-left
                  group-hover:w-full ${
                    activeSection === id ? "w-full" : "w-0"
                  }`}
                ></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="text-white md:hidden focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="absolute top-16 right-6 bg-neutral-900 rounded-xl shadow-lg p-4 w-48 md:hidden">
            <ul className="flex flex-col gap-4 text-white">
              {navItems.map(({ label, id }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={() => setIsOpen(false)}
                    className={`block transition font-medium ${
                      activeSection === id
                        ? "text-pink-400"
                        : "hover:text-pink-500"
                    }`}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
