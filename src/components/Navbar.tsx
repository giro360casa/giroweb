import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import giroLogoHorizontal from "@/assets/giro-logo-horizontal.png";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Websites", href: "/websites" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Technology", href: "#technology" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (href: string) => {
    setIsOpen(false);

    if (href.startsWith("#")) {
      // Handle hash/section navigation
      if (location.pathname !== "/") {
        // Navigate to home first, then scroll to section
        navigate("/");
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      } else {
        // Already on home, just scroll to section
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
      // Handle regular route navigation
      navigate(href);
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
    } else {
      // Already on home, scroll to top
      const element = document.querySelector("#hero");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="/" onClick={handleLogoClick} className="font-heading text-2xl font-bold tracking-tight cursor-pointer">
          <img 
            src={giroLogoHorizontal} 
            alt="GIRO 360 Logo" 
            className="h-32 w-auto"
          />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavigation(link.href)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors bg-none border-none p-0 cursor-pointer"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavigation("#contact")}
            className="px-5 py-2 rounded-lg bg-red-600 text-white text-sm font-semibold hover:bg-red-700 transition-colors cursor-pointer border-none"
          >
            Get a Quote
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-card border-b border-border overflow-hidden"
          >
            <div className="flex flex-col gap-4 p-6">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavigation(link.href)}
                  className="text-muted-foreground hover:text-primary transition-colors text-left bg-none border-none p-0 cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNavigation("#contact")}
                className="px-5 py-2 rounded-lg bg-red-600 text-white text-sm font-semibold text-center cursor-pointer border-none"
              >
                Get a Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
