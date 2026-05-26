// Footer.jsx

import { motion } from "framer-motion";
import {
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaSpotify,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
  
    <footer className="relative overflow-hidden bg-[#03050F] text-white pt-24 pb-10">

      {/* Background Glow */}
      <div className="absolute top-[-100px] left-[-100px] w-[350px] h-[350px] bg-[#D4AF37]/10 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-[-120px] right-[-100px] w-[350px] h-[350px] bg-blue-500/10 blur-[120px] rounded-full"></div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 relative z-10">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 pb-16 border-b border-white/10">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >

            {/* Logo */}
            <img
              src="/logos/skillsphere.PNG"
              alt="SkillSphere Logo"
              className="w-[120px] mb-8"
            />

            {/* Text */}
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base max-w-md">

              Empowering educators through transformational conversations,
              leadership development, wellbeing initiatives, and future-focused
              learning experiences.

            </p>

          </motion.div>

          {/* CENTER LINKS */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:mx-auto"
          >

            <h3 className="text-xl font-semibold mb-8">
              Quick Links
            </h3>

            <div className="flex flex-col gap-5 text-gray-400">

              <a
                href="/"
                className="hover:text-[#D4AF37] transition duration-300"
              >
                Home
              </a>

              <a
                href="/about"
                className="hover:text-[#D4AF37] transition duration-300"
              >
                About
              </a>

              <a
                href="/podcast"
                className="hover:text-[#D4AF37] transition duration-300"
              >
                Podcasts
              </a>

                <a
                href="/workshops"
                className="hover:text-[#D4AF37] transition duration-300"
              >
                Workshops
              </a>

              <a
                href="/contact"
                className="hover:text-[#D4AF37] transition duration-300"
              >
                Contact
              </a>

            </div>

          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          >

            <h3 className="text-xl font-semibold mb-8">
              Connect With Us
            </h3>

            {/* Socials */}
            <div className="flex flex-wrap gap-4 mb-8">

              <a
                href="https://www.instagram.com/skillspherebyesh?igsh=MXU4a2Z0anFuMTQ4Ng=="
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-12
                  h-12
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  flex
                  items-center
                  justify-center
                  hover:bg-[#D4AF37]
                  hover:text-black
                  hover:-translate-y-1
                  transition-all
                  duration-300
                "
              >

                <FaInstagram />

              </a>

              <a
                href="https://www.instagram.com/skillspherebyesh?igsh=MXU4a2Z0anFuMTQ4Ng==https://www.instagram.com/skillspherebyesh?igsh=MXU4a2Z0anFuMTQ4Ng=="
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-12
                  h-12
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  flex
                  items-center
                  justify-center
                  hover:bg-[#D4AF37]
                  hover:text-black
                  hover:-translate-y-1
                  transition-all
                  duration-300
                "
              >

                <FaLinkedinIn />

              </a>

              <a
                href="https://www.youtube.com/@EshuMadaan"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-12
                  h-12
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  flex
                  items-center
                  justify-center
                  hover:bg-[#D4AF37]
                  hover:text-black
                  hover:-translate-y-1
                  transition-all
                  duration-300
                "
              >

                <FaYoutube />

              </a>

              <a
                href="https://spotify.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-12
                  h-12
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  flex
                  items-center
                  justify-center
                  hover:bg-[#D4AF37]
                  hover:text-black
                  hover:-translate-y-1
                  transition-all
                  duration-300
                "
              >

                <FaSpotify />

              </a>

            </div>

            {/* Email */}
            <p className="text-gray-400 text-sm sm:text-base">
              hello@skillsphere.com
            </p>

          </motion.div>

        </div>

        {/* BOTTOM */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">

          {/* Copyright */}
          <p className="text-gray-500 text-sm text-center sm:text-left">

            © 2026 SkillSphere. All rights reserved.

          </p>

          {/* Scroll To Top */}
          <button
            onClick={scrollToTop}
            className="
              group
              w-12
              h-12
              rounded-full
              border
              border-white/10
              bg-white/5
              flex
              items-center
              justify-center
              hover:bg-[#D4AF37]
              hover:text-black
              transition-all
              duration-300
            "
          >

            <FaArrowUp className="group-hover:-translate-y-1 transition duration-300" />

          </button>

        </div>

      </div>

    </footer>
    </>
  );
};

export default Footer;