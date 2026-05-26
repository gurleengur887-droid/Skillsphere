import { motion } from "framer-motion";

const MissionPoster = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-[#050816]">

      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#D4AF37]/10 blur-[140px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >

            <p className="uppercase tracking-[6px] text-[#D4AF37] text-sm mb-5">
              Our Mission
            </p>

            <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
              Creating
              <span className="text-[#D4AF37]"> Happy Teachers </span>
              For A Better Future
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed mb-10">
              Skillsphere is dedicated to empowering educators through
              transformational wellness programs, leadership conversations,
              and meaningful learning experiences that create thriving
              classrooms and inspired futures.
            </p>

            <div className="flex flex-wrap gap-4">

              <div className="border border-white/10 bg-white/5 px-5 py-3 rounded-full text-sm">
                Teacher Wellness
              </div>

              <div className="border border-white/10 bg-white/5 px-5 py-3 rounded-full text-sm">
                Leadership Growth
              </div>

              <div className="border border-white/10 bg-white/5 px-5 py-3 rounded-full text-sm">
                Emotional Wellbeing
              </div>

            </div>

          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >

            <div className="absolute inset-0 bg-[#D4AF37]/10 blur-3xl rounded-[40px]" />

            <img
              src="/images/missionposter.png"
              alt="Skillsphere Mission"
              className="relative rounded-[40px] border border-white/10 shadow-2xl hover:scale-[1.02] transition duration-500"
            />

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default MissionPoster;