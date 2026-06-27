import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/images/logo.png";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
  { name: "Testimonials", href: "#testimonials" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll to add blur effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Animation variants
  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const linkVariants = {
    closed: { opacity: 0, y: 20 },
    open: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 + i * 0.1,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500{
        scrolled
          ? "bg-cream/90 backdrop-blur-xl shadow-lg shadow-primary/5 py-4 border-b border-white/50"
          : "bg-transparent py-6 md:py-8"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Brand Logo */}
        <a
          href="#"
          className="flex items-center gap-2 transition-transform duration-300 hover:scale-105 active:scale-95 shrink-0"
        >
          <img
            src={logo}
            alt="The Dream Flower Logo"
            className="h-10 md:h-12 w-auto object-contain rounded-md"
            style={{
              filter: scrolled
                ? "none"
                : "drop-shadow(0px 2px 4px rgba(0,0,0,0.3))",
            }}
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-10 shrink-0">
          <ul className="flex space-x-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className={`text-xs tracking-[0.2em] uppercase transition-colors hover:text-accent font-medium ${
                    scrolled
                      ? "text-dark/80 hover:text-primary"
                      : "text-cream/90"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#booking"
            className={`inline-flex items-center justify-center px-7 py-2.5 rounded-full font-body text-xs tracking-widest uppercase transition-all duration-300 ease-out shadow-md hover:-translate-y-1 hover:scale-[1.02] active:scale-95 ${
              scrolled
                ? "bg-primary text-cream shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
                : "bg-cream/10 backdrop-blur-md border border-cream/30 text-cream hover:bg-cream hover:text-primary"
            }`}
          >
            Book Now
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`lg:hidden flex items-center justify-center shrink-0 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 relative z-[100] focus:outline-none transition-transform active:scale-95 ${
            scrolled || isOpen ? "text-primary bg-cream/80" : "text-white"
          }`}
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 bg-cream z-40 flex flex-col justify-center items-center h-screen"
          >
            <ul className="flex flex-col items-center space-y-8">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.name}
                  custom={i}
                  variants={linkVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                >
                  <a
                    href={link.href}
                    onClick={toggleMenu}
                    className="font-heading text-4xl text-primary hover:text-accent transition-colors"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
              <motion.li
                custom={navLinks.length}
                variants={linkVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="pt-4"
              >
                <a
                  href="#booking"
                  onClick={toggleMenu}
                  className="px-8 py-3 bg-primary text-cream rounded-full text-lg tracking-wider uppercase hover:bg-dark transition-colors"
                >
                  Book Now
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
