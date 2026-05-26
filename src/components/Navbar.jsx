// Navbar.jsx

import { motion } from "framer-motion";
import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full fixed top-0 left-0 z-50 backdrop-blur-md bg-[#050816]/40 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex items-center justify-between">

        {/* Logo */}
        <div className="h-16 flex items-center">
          <img
            src="/logos/skillsphere.PNG"
            alt="SkillSphere Logo"
            className="w-[90px] object-contain"
          />
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-10 text-sm uppercase tracking-[3px] text-white/80">

          <Link
            to="/about"
            className="hover:text-[#D4AF37] transition duration-300"
          >
            About
          </Link>

          <Link
            to="/workshops"
            className="hover:text-[#D4AF37] transition duration-300"
          >
            Workshops
          </Link>

          <Link
            to="/podcast"
            className="hover:text-[#D4AF37] transition duration-300"
          >
            Podcasts
          </Link>

          <Link
            to="/contact"
            className="hover:text-[#D4AF37] transition duration-300"
          >
            Contact
          </Link>

        </div>

        {/* Desktop CTA */}
        <Link
          to="/contact"
          className="hidden md:block border border-[#D4AF37] text-[#D4AF37] px-6 py-3 rounded-full hover:bg-[#D4AF37] hover:text-black transition duration-300"
        >
          Collaborate
        </Link>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-white text-3xl cursor-pointer z-[60]"
          onClick={() => setMenuOpen(true)}
        >
          <HiMenuAlt3 />
        </button>

      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 z-40 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-screen w-[75%] bg-[#050816] border-l border-white/10 transform transition-transform duration-500 z-50 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >

        {/* Close Button */}
        <div className="flex justify-end p-6">
          <HiX
            className="text-white text-3xl cursor-pointer"
            onClick={() => setMenuOpen(false)}
          />
        </div>

        {/* Mobile Links */}
        <div className="flex flex-col items-start gap-8 px-8 mt-10 text-white uppercase tracking-[3px] text-sm">

          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="hover:text-[#D4AF37] transition duration-300"
          >
            About
          </Link>

          <Link
            to="/workshops"
            onClick={() => setMenuOpen(false)}
            className="hover:text-[#D4AF37] transition duration-300"
          >
            Workshops
          </Link>

          <Link
            to="/podcast"
            onClick={() => setMenuOpen(false)}
            className="hover:text-[#D4AF37] transition duration-300"
          >
            Podcasts
          </Link>

          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="hover:text-[#D4AF37] transition duration-300"
          >
            Contact
          </Link>

          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="border border-[#D4AF37] text-[#D4AF37] px-6 py-3 rounded-full mt-4 hover:bg-[#D4AF37] hover:text-black transition duration-300"
          >
            Collaborate
          </Link>

        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;