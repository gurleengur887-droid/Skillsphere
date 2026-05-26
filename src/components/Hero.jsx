// Hero.jsx

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#050816] text-white flex items-center">

      {/* Gradient Glow */}
      <div className="absolute top-[-150px] left-[-100px] w-[500px] h-[500px] bg-[#D4AF37]/10 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-blue-500/10 blur-[140px] rounded-full"></div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 pt-32 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-10 items-center relative z-10">

        {/* Left Content */}
        <div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="uppercase tracking-[4px] sm:tracking-[6px] text-[#D4AF37] text-xs sm:text-sm mb-6"
          >
            Teacher Wellness • Leadership • Podcasts
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] sm:leading-[1.1] mb-8"
          >
            Empowering
            <span className="block text-[#D4AF37]">
              Educators
            </span>
            Through Meaningful Conversations
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl mb-10"
          >
            Leadership workshops, educator wellness programs, and impactful
            podcast conversations designed to inspire schools, teachers,
            and future changemakers.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4 }}
            className="flex flex-col sm:flex-row gap-5"
          >
            <Link to="/programs" className="bg-[#D4AF37] text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition duration-300 shadow-[0_0_30px_rgba(212,175,55,0.35)]">
              Explore Programs
            </Link>

            <a
                href="https://www.youtube.com/@EshuMadaan" className="border border-white/20 px-8 py-4 rounded-full hover:border-[#D4AF37] hover:text-[#D4AF37] transition duration-300">
              Watch Podcasts
            </ a>
          </motion.div>

        </div>

        {/* Right Side Premium Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 60 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="relative flex justify-center lg:justify-end"
        >

          <div className="relative w-full max-w-sm sm:max-w-md">

            {/* Glow */}
            <div className="absolute inset-0 bg-[#D4AF37]/20 blur-3xl rounded-[40px]"></div>

            {/* Card */}
            <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-[40px] p-5 sm:p-8 overflow-hidden shadow-2xl">

              <img
                src="/images/founder3.jpeg"
                alt="Founder"
                className="w-full h-[400px] sm:h-[500px] object-cover rounded-[30px]"
              />

              <div className="absolute bottom-5 sm:bottom-8 left-5 sm:left-8 right-5 sm:right-8 backdrop-blur-lg bg-black/40 border border-white/10 rounded-2xl p-4 sm:p-5">
                <h3 className="text-xl sm:text-2xl font-semibold mb-2">
                  Inspiring Educator Communities
                </h3>

                <p className="text-xs sm:text-sm text-gray-300">
                  Building impactful conversations around leadership,
                  emotional wellness, and education transformation.
                </p>
              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default Hero;