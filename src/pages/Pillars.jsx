// Pillars.jsx

import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import {
  FaChalkboardTeacher,
  FaSchool,
  FaUserTie,
} from "react-icons/fa";

const pillarsData = [
  {
    icon: <FaChalkboardTeacher />,
    title: "Teachers",
    points: [
      "Wellness-focused mentorship",
      "Emotional resilience support",
      "Leadership confidence building",
      "Transformational learning experiences",
    ],
  },

  {
    icon: <FaSchool />,
    title: "Schools",
    points: [
      "Educator wellbeing initiatives",
      "Collaborative leadership workshops",
      "Healthy learning ecosystem development",
      "Future-focused educational growth",
    ],
  },

  {
    icon: <FaUserTie />,
    title: "Leaders",
    points: [
      "Vision-driven leadership guidance",
      "Purpose-focused growth strategies",
      "Meaningful community building",
      "Impactful communication & transformation",
    ],
  },
];
const Pillars = () => {
  return (
    <>
    <section
      id="pillars"
      className="relative overflow-hidden bg-[#050816] text-white py-28 sm:py-36 px-5 sm:px-8 md:px-12"
    >

      {/* Background Glow */}
      <div className="absolute top-[-150px] left-[-100px] w-[500px] h-[500px] bg-[#D4AF37]/10 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-blue-500/10 blur-[140px] rounded-full"></div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >

          <p className="uppercase tracking-[5px] text-[#D4AF37] text-xs sm:text-sm mb-5">
            Our Core Pillars
          </p>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] max-w-5xl mx-auto mb-8">
            Creating Impact Across
            <span className="text-[#D4AF37]">
              {" "}Educators, Institutions & Leaders
            </span>
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
            Meaningful transformation through mentorship, wellness,
            leadership, and future-focused educational experiences.
          </p>

        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 lg:gap-12 items-stretch">

          {pillarsData.map((pillar, index) => (

            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 120,
                scale: 0.85,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 1,
                delay: index * 0.2,
                type: "spring",
              }}
              viewport={{ once: true }}
              className="h-full"
            >

              <Tilt
                glareEnable={true}
                glareMaxOpacity={0.06}
                scale={1.02}
                transitionSpeed={1500}
                tiltMaxAngleX={8}
                tiltMaxAngleY={8}
                className="h-full"
              >

                <div className="group relative h-full backdrop-blur-2xl bg-white/5 border border-white/10 rounded-[36px] p-8 sm:p-10 overflow-hidden hover:border-[#D4AF37]/30 transition duration-500 flex flex-col">

                  {/* Card Glow */}
                  <div className="absolute top-[-80px] right-[-80px] w-[180px] h-[180px] bg-[#D4AF37]/5 rounded-full blur-[100px]"></div>

                  {/* Top Row */}
                  <div className="flex items-center gap-5 mb-10">

                    {/* Icon */}
                    <div className="w-16 h-16 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] text-2xl transition duration-500 group-hover:scale-105 group-hover:bg-[#D4AF37]/15">

                      {pillar.icon}

                    </div>

                    {/* Title */}
                    <h3 className="text-3xl font-bold">
                      {pillar.title}
                    </h3>

                  </div>

                  {/* Bullet Points */}
                  <ul className="space-y-5 flex-1">

                    {pillar.points.map((point, i) => (

                      <li
                        key={i}
                        className="flex items-start gap-4 text-gray-300 leading-relaxed"
                      >

                        {/* Bullet */}
                        <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-[11px] opacity-80"></div>

                        <span className="text-base sm:text-lg">
                          {point}
                        </span>

                      </li>

                    ))}

                  </ul>

                </div>

              </Tilt>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
    </>
  );
};

export default Pillars;