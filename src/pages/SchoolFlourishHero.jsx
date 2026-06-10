import { motion } from "framer-motion";

const SchoolFlourishHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#050816] pt-40 pb-32 px-5 sm:px-8 md:px-12">

      {/* Glows */}
      <div className="absolute top-[-120px] left-[-100px] w-[350px] h-[350px] bg-[#D4AF37]/10 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-[-100px] right-[-100px] w-[350px] h-[350px] bg-blue-500/10 blur-[140px] rounded-full"></div>

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="max-w-7xl mx-auto relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >

          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 text-[#D4AF37] mb-10">

            <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37]"></span>

            School Flourish Index

          </div>

          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold leading-[1.05] mb-8 text-white">

            Building
            <span className="block text-[#D4AF37]">
              Thriving Schools
            </span>

            <span className="block">
              Through Teacher Wellbeing
            </span>

          </h1>

          {/* Small Line */}
          <p className="uppercase tracking-[5px] text-blue-300 text-xs sm:text-sm mb-8">

            Measure • Understand • Flourish

          </p>

          {/* Description */}
          <p className="max-w-3xl mx-auto text-lg sm:text-xl text-gray-400 leading-relaxed mb-14">

            A research-backed framework designed to help schools
            strengthen teacher wellbeing, leadership practices,
            and school culture through meaningful insights and
            sustainable transformation.

          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-5">

            <button
              onClick={() =>
                window.open(
                  "https://wa.me/919779982614",
                  "_blank"
                )
              }
              className="
                bg-[#D4AF37]
                text-black
                px-9
                py-4
                rounded-full
                font-semibold
                hover:scale-105
                transition
                duration-300
                shadow-[0_0_30px_rgba(212,175,55,0.25)]
              "
            >
              Book Consultation
            </button>

            <button
              className="
                border
                border-white/20
                text-white
                px-9
                py-4
                rounded-full
                font-semibold
                hover:border-[#D4AF37]
                hover:text-[#D4AF37]
                transition
                duration-300
              "
            >
              Watch Overview
            </button>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default SchoolFlourishHero;