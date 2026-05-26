import { motion } from "framer-motion";
import { Newspaper } from "lucide-react";

const MediaCoverage = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-[#050816]">

      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-[#D4AF37]/10 blur-[140px]" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <div className="inline-flex items-center gap-2 border border-[#D4AF37]/20 bg-[#D4AF37]/5 px-5 py-2 rounded-full mb-6">

            <Newspaper className="w-4 h-4 text-[#D4AF37]" />

            <span className="text-[#D4AF37] text-sm tracking-[3px] uppercase">
              Press & Recognition
            </span>

          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">

            Featured In
            <span className="text-[#D4AF37]">
              {" "}Educational Media
            </span>

          </h2>

        </motion.div>

        {/* Creative Layout */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative bg-white/[0.03] border border-white/10 rounded-[40px] p-6 md:p-10 backdrop-blur-xl overflow-hidden"
        >

          {/* Background Glow */}
          <div className="absolute -top-20 -right-20 w-[250px] h-[250px] bg-[#D4AF37]/10 blur-[120px] rounded-full" />

          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-center relative z-10">

            {/* LEFT CONTENT */}
            <div>

              <p className="uppercase tracking-[4px] text-[#D4AF37] text-sm mb-5">
                Newspaper Coverage
              </p>

              <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">

                Spotlighting Educator
                <span className="text-[#D4AF37]">
                  {" "}Wellbeing
                </span>

              </h3>

              <p className="text-gray-300 text-lg leading-relaxed mb-8">

                Eshu Madaan’s educator wellness initiatives and
                transformational workshops have been recognized across
                educational and regional media for creating meaningful
                impact in teacher wellbeing, leadership, and emotional
                resilience.

              </p>

              {/* Small Stats */}
              <div className="flex gap-8 flex-wrap">

                <div>

                  <h4 className="text-3xl font-bold text-[#D4AF37]">
                    100+
                  </h4>

                  <p className="text-gray-400 text-sm">
                    Educators Reached
                  </p>

                </div>

                <div>

                  <h4 className="text-3xl font-bold text-[#D4AF37]">
                    20+
                  </h4>

                  <p className="text-gray-400 text-sm">
                    Sessions Conducted
                  </p>

                </div>

              </div>

            </div>

            {/* RIGHT IMAGE */}
           {/* RIGHT IMAGE */}
<div className="relative flex justify-center">

  <div className="relative w-full max-w-[280px] sm:max-w-[320px]">

    {/* Soft Glow */}
    <div className="absolute inset-0 bg-[#D4AF37]/10 blur-2xl rounded-[24px]" />

    {/* Newspaper */}
    <div className="
      relative
      bg-white
      rounded-[24px]
      p-3
      shadow-2xl
      hover:scale-[1.02]
      transition-all
      duration-500
    ">

      <img
        src="/images/publicity.png"
        alt="Media Coverage"
        className="
          w-full
          h-auto
          rounded-[16px]
          object-cover
        "
      />

    </div>

  </div>

</div>
          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default MediaCoverage;