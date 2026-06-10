import { motion } from "framer-motion";

const SchoolFlourishCTA = () => {
  return (
    <section className="relative overflow-hidden bg-[#050816] py-32">

      {/* Background Glow */}
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#D4AF37]/10 blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="
            relative
            overflow-hidden
            rounded-[40px]
            border
            border-white/10
            bg-white/[0.03]
            backdrop-blur-3xl
            p-10
            sm:p-16
            text-center
          "
        >

          {/* Inner Glows */}
          <div className="absolute top-[-100px] right-[-100px] w-[240px] h-[240px] bg-blue-500/10 blur-[120px] rounded-full"></div>

          <div className="absolute bottom-[-100px] left-[-100px] w-[240px] h-[240px] bg-[#D4AF37]/10 blur-[120px] rounded-full"></div>

          {/* Tag */}
          <p className="uppercase tracking-[5px] text-[#D4AF37] text-xs sm:text-sm mb-8">

            Start Your Flourish Journey

          </p>

          {/* Heading */}
          <h2 className="text-4xl sm:text-6xl font-bold text-white leading-[1.1] mb-8">

            Ready To Build
            <span className="block text-[#D4AF37]">

              Thriving Schools?

            </span>

          </h2>

          {/* Quote */}
          <p className="text-blue-300 text-sm sm:text-base tracking-[3px] uppercase mb-8">

            Happy Teachers • Healthy Cultures • Thriving Schools

          </p>

          {/* Description */}
          <p className="max-w-3xl mx-auto text-gray-400 text-base sm:text-lg leading-relaxed mb-14">

            Measure what matters. Strengthen educator wellbeing.
            Create lasting impact through a research-backed framework
            designed for schools that aspire to flourish.

          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-5">

            {/* Consultation */}
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
              Book Free Consultation
            </button>

            <button
  onClick={() =>
    window.open(
      "/pdf/flourish-ppt.pdf",
      "_blank"
    )
  }
  className="
    border
    border-[#D4AF37]
    text-[#D4AF37]
    px-9
    py-4
    rounded-full
    font-semibold
    hover:bg-[#D4AF37]
    hover:text-black
    transition
    duration-300
  "
>
  Explore Framework
</button>
          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default SchoolFlourishCTA;