import { motion } from "framer-motion";

function flourishOverview() {
  return (
    <section className="relative overflow-hidden bg-[#050816] py-24">

      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="uppercase tracking-[5px] text-green-400 text-xs sm:text-sm mb-5">
            School Flourish Framework
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold text-white">

            The Science Behind
            <span className="text-green-400">
              {" "}School Flourish
            </span>

          </h2>

        </div>

        {/* Poster Container */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="
            overflow-hidden
            rounded-[32px]
            border
            border-white/10
            bg-white/[0.03]
            backdrop-blur-3xl
            shadow-2xl
          "
        >

          <img
            src="/images/flourish.png"
            alt="School Flourish Overview"
            className="w-full h-auto object-contain"
          />

        </motion.div>

      </div>

    </section>
  );
}

export default flourishOverview;