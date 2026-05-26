import { motion } from "framer-motion";

const BigNews = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-[#050816]">

      {/* Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#D4AF37]/10 blur-[160px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >

            <p className="uppercase tracking-[6px] text-[#D4AF37] text-sm mb-5">
              Featured Recognition
            </p>

            <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
              Big News
              <span className="text-[#D4AF37]"> For Skillsphere</span>
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed mb-10">
              Skillsphere continues to create impactful spaces for educator
              wellness, leadership transformation, and meaningful conversations
              that inspire schools and communities.
            </p>

            <button className="bg-[#D4AF37] text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition duration-300 shadow-[0_0_30px_rgba(212,175,55,0.35)]">
              Read Feature
            </button>

          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40, rotate: 2 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >

            <div className="absolute inset-0 bg-[#D4AF37]/10 blur-3xl rounded-[40px]" />

            <img
              src="/images/bignews.png"
              alt="Big News"
              className="relative rounded-[40px] border border-white/10 shadow-2xl hover:scale-[1.02] transition duration-500"
            />

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default BigNews;