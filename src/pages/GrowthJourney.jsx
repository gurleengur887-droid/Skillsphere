import { motion } from "framer-motion";

const GrowthJourney = () => {
  return (
    <section className="relative overflow-hidden bg-[#050816] pb-24">

      {/* Glow */}
      <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-green-500/10 blur-[140px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">

        {/* Section Heading */}
        <div className="text-center mb-14">

          <p className="uppercase tracking-[5px] text-[#D4AF37] text-xs sm:text-sm mb-4">
            Also Coming Up
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Teacher Growth Journey
          </h2>

        </div>

        <div
          className="
            relative
            overflow-hidden
            rounded-[40px]
            border
            border-white/10
            bg-white/[0.03]
            backdrop-blur-3xl
            p-6
            sm:p-10
            lg:p-14
          "
        >

          <div className="absolute top-[-120px] left-[-100px] w-[260px] h-[260px] bg-green-500/10 blur-[120px] rounded-full"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative flex justify-center"
            >

              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              >

                <img
                  src="/images/program2.png"
                  alt="Teacher Growth Journey"
                  className="
                    w-full
                    max-w-[520px]
                    lg:max-w-[600px]
                    rounded-[30px]
                    shadow-2xl
                    border
                    border-white/10
                  "
                />

              </motion.div>

            </motion.div>

            {/* CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >

              <p className="uppercase tracking-[5px] text-green-400 text-xs sm:text-sm mb-5">
                Professional Development Workshop
              </p>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-8">

                <span className="text-white">
                  Teacher Growth
                </span>

                <span className="block text-green-400">
                  Journey
                </span>

              </h2>

              <p className="text-gray-400 text-base sm:text-lg leading-[1.9] mb-10 max-w-xl">

                A transformative workshop designed to help educators
                build self-leadership, strengthen their professional
                identity, explore growth opportunities, and create
                a practical roadmap for long-term success.

              </p>

              {/* Highlights */}
              <div className="space-y-4 mb-10">

                {[
                  "Personal Growth & Self Leadership",
                  "Personal Branding For Educators",
                  "Income Generation Opportunities",
                  "Networking & Community Building",
                  "Growth Action Planning",
                ].map((item, index) => (

                  <div
                    key={index}
                    className="flex items-center gap-4"
                  >

                    <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>

                    <p className="text-gray-200 text-sm sm:text-base">
                      {item}
                    </p>

                  </div>

                ))}

              </div>

              
              
              {/* Buttons */}
              <div className="flex flex-wrap gap-5">

                <button
                  onClick={() =>
                    window.open(
                      "https://forms.gle/YOUR_GOOGLE_FORM_LINK",
                      "_blank"
                    )
                  }
                  className="
                    bg-green-400
                    text-black
                    px-8
                    py-4
                    rounded-full
                    font-semibold
                    hover:scale-105
                    transition
                    duration-300
                  "
                >
                  Register Now
                </button>

                <button
                  onClick={() =>
                    window.open(
                      "https://wa.me/919779982614",
                      "_blank"
                    )
                  }
                  className="
                    border
                    border-white/20
                    text-white
                    px-8
                    py-4
                    rounded-full
                    font-semibold
                    hover:border-green-400
                    hover:text-green-400
                    transition
                    duration-300
                  "
                >
                  Contact Us
                </button>

              </div>

            </motion.div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default GrowthJourney;