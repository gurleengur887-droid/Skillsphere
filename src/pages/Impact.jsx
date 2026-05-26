// Impact.jsx

import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  FaSchool,
  FaChalkboardTeacher,
  FaUsers,
  FaAward,
} from "react-icons/fa";

const impactData = [
  {
    icon: <FaUsers />,
    number: 219,
    suffix: "K+",
    title: "Educators Reached",
  },

  {
    icon: <FaAward />,
    number: 14,
    suffix: "+",
    title: "Years Of Experience",
  },

  {
    icon: <FaChalkboardTeacher />,
    number: 10,
    suffix: "K+",
    title: "Teachers Trained",
  },

  {
    icon: <FaSchool />,
    number: 100,
    suffix: "K+",
    title: "Schools Impacted Pan India",
  },
];

const Impact = () => {
  return (
    <>
    <section className="relative overflow-hidden bg-[#050816] text-white py-24 sm:py-32">

      {/* Background Glow */}
      <div className="absolute top-[-120px] left-[-100px] w-[400px] h-[400px] bg-[#D4AF37]/10 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-[-120px] right-[-100px] w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full"></div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >

          <p className="uppercase tracking-[4px] sm:tracking-[5px] text-[#D4AF37] text-[10px] sm:text-sm mb-4 sm:mb-5">
            Our Impact
          </p>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] max-w-5xl mx-auto mb-6">

            Transforming
            <span className="text-[#D4AF37]">
              {" "}Educational Communities
            </span>

          </h2>

          <p className="text-gray-400 text-sm sm:text-lg leading-relaxed max-w-3xl mx-auto px-2">

            Empowering educators, schools, and leaders through
            impactful learning experiences, mentorship, and wellbeing initiatives.

          </p>

        </motion.div>

        {/* Impact Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8">

          {impactData.map((item, index) => (

            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 120,
                scale: 0.7,
                rotate: -4,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
                rotate: 0,
              }}
              transition={{
                duration: 1,
                delay: index * 0.15,
                type: "spring",
                stiffness: 90,
              }}
              viewport={{ once: true }}
              className="
                group
                relative
                overflow-hidden
                rounded-[28px]
                border
                border-white/10
                bg-gradient-to-b
                from-white/5
                to-white/[0.02]
                backdrop-blur-xl
                p-6
                sm:p-8
                hover:border-[#D4AF37]/40
                transition-all
                duration-500
                hover:-translate-y-2
                hover:shadow-[0_20px_60px_rgba(212,175,55,0.12)]
              "
            >

              {/* Animated Glow */}
              <div className="
                absolute
                top-[-70px]
                right-[-70px]
                w-[160px]
                h-[160px]
                bg-[#D4AF37]/10
                blur-[90px]
                rounded-full
                animate-pulse
              "></div>

              {/* Floating Blur */}
              <div className="
                absolute
                bottom-[-60px]
                left-[-60px]
                w-[120px]
                h-[120px]
                bg-blue-500/10
                blur-[80px]
                rounded-full
              "></div>

              {/* Icon */}
              <motion.div
                whileHover={{
                  rotate: 8,
                  scale: 1.1,
                }}
                className="
                  relative
                  w-14
                  h-14
                  sm:w-16
                  sm:h-16
                  rounded-2xl
                  bg-[#D4AF37]/10
                  border
                  border-[#D4AF37]/20
                  flex
                  items-center
                  justify-center
                  text-[#D4AF37]
                  text-2xl
                  mb-6
                  transition-all
                  duration-500
                "
              >

                {item.icon}

              </motion.div>

              {/* Number */}
              <motion.h3
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                }}
                viewport={{ once: true }}
                className="text-3xl sm:text-5xl font-bold mb-3 text-white"
              >

                <CountUp
                  end={item.number}
                  duration={3}
                  enableScrollSpy
                  scrollSpyOnce
                />

                {item.suffix}

              </motion.h3>

              {/* Title */}
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">

                {item.title}

              </p>

              {/* Hover Beam */}
              <div className="
                absolute
                bottom-0
                left-0
                h-[2px]
                w-0
                bg-gradient-to-r
                from-[#D4AF37]
                to-yellow-300
                transition-all
                duration-700
                group-hover:w-full
              "></div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
    </>
  );
};

export default Impact;