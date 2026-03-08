import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" }
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollToSection = (id) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-[10000] transition-all duration-500 ${
        scrolled ? "glass py-3" : "py-6"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">

        <a href="#" className="font-display text-xl font-bold gradient-text">
          dotspace
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed top-[50px] left-4 right-4 z-[10000] glass rounded-xl overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  type="button"
                  onClick={() => scrollToSection(link.href)}
                  className="text-left text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.nav>
  );
};

export default Navbar;