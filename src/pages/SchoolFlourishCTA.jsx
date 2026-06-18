
import { motion } from "framer-motion";

const SchoolFlourishCTA = ({ setShowPopup }) => {
  return (
    <section className="relative overflow-hidden bg-[#050816] py-20 md:py-32">

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
            rounded-[32px] md:rounded-[40px]
p-7 sm:p-10 md:p-16
            border
            border-white/10
            bg-white/[0.03]
            backdrop-blur-3xl
            
        
            text-center
          "
        >

          {/* Inner Glows */}
          <div className="absolute top-[-100px] right-[-100px] w-[240px] h-[240px] bg-blue-500/10 blur-[120px] rounded-full"></div>

          <div className="absolute bottom-[-100px] left-[-100px] w-[240px] h-[240px] bg-[#D4AF37]/10 blur-[120px] rounded-full"></div>

          {/* Tag */}
          <p className="uppercase tracking-[3px] sm:tracking-[5px] text-[11px] sm:text-sm mb-6 md:mb-8">
            Start Your Flourish Journey
          </p>

          {/* Heading */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6 md:mb-8">

            Ready To Discover

            <span className="block text-[#D4AF37]">

              School Flourish Index?

            </span>

          </h2>

          {/* Subtitle */}
          <p className="text-blue-300 text-xs sm:text-sm md:text-base tracking-[2px] sm:tracking-[3px] uppercase mb-6 md:mb-8 leading-relaxed">

            Evidence-Based • Teacher Wellbeing • Leadership Culture

          </p>

          {/* Description */}
          <p className="max-w-3xl mx-auto text-gray-400 text-sm sm:text-base md:text-lg leading-8 mb-10 md:mb-14 px-1">

            Measure what matters. Strengthen educator wellbeing.
            Build healthier cultures and create lasting impact
            through our research-backed flourishing framework.

          </p>

          {/* Feature Pills */}

        <div
  className="
    grid
    grid-cols-2
    gap-3
    md:flex
    md:flex-wrap
    md:justify-center
    md:gap-4
    mb-10
    md:mb-14
  "
>

            {[
              "Evidence-Based",
              "Teacher Wellbeing",
              "Leadership Culture",
              "Thriving Schools"
            ].map((item) => (

              <div
                key={item}
className="
flex
items-center
justify-center
rounded-full
border
border-white/10
bg-white/[0.04]
px-3
py-2.5
text-[11px]
sm:text-sm
text-gray-300
"
              >

                ✦ {item}

              </div>

            ))}

          </div>

          {/* Begin Assessment Button */}

          <button
            onClick={() => setShowPopup(true)}
            className="
              group
              relative
              overflow-hidden

              rounded-full

              border
              border-[#D4AF37]

              bg-[#D4AF37]/10
w-full sm:w-auto
px-6 sm:px-8 md:px-10
py-4 md:py-5
text-base md:text-lg
              font-semibold

              text-[#D4AF37]

              transition-all
              duration-500

              hover:bg-[#D4AF37]
              hover:text-black

              hover:shadow-[0_20px_80px_rgba(212,175,55,0.35)]
            "
          >

            <span className="flex items-center justify-center gap-2 md:gap-3">

              Measure Your School Flourish Index

              <span
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              >
                →
              </span>

            </span>

          </button>

        </motion.div>

      </div>

    </section>
  );
};

export default SchoolFlourishCTA;

