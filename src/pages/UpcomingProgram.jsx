// UpcomingProgram.jsx

import { motion } from "framer-motion";

const UpcomingProgram = () => {
  return (
    <section className="relative overflow-hidden bg-[#050816] py-24">

      {/* Glow */}
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#D4AF37]/10 blur-[140px]" />

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">

        <div className="
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
        ">

          {/* Inner Glow */}
          <div className="absolute top-[-120px] right-[-100px] w-[260px] h-[260px] bg-[#D4AF37]/10 blur-[120px] rounded-full"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            
          

{/* LEFT IMAGE */}
<motion.div
  initial={{ opacity: 0, x: -60 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
  className="relative flex justify-center order-1 lg:order-1"
>

  {/* Floating Animation */}
  <motion.div
    animate={{
      y: [0, -10, 0],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
    }}
    className="relative"
  >

    <img
      src="/images/program.png"
      alt="Upcoming Program"
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

            

            {/* RIGHT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="order-2 lg:order-2"
            >

              <p className="uppercase tracking-[5px] text-[#D4AF37] text-xs sm:text-sm mb-5">

                Upcoming Program

              </p>

              

<h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-8">

  <span className="text-white">
    Teacher Wellness
  </span>

  <span className="block text-[#D4AF37]">
    Reset Program
  </span>

</h2>

              <p className="text-gray-400 text-base sm:text-lg leading-[1.9] mb-10 max-w-xl">

                An interactive wellness experience designed for educators
                to pause, reflect, reset, and reconnect through meaningful
                conversations, practical strategies, and mindful activities.

              </p>

              {/* Quick Highlights */}
              <div className="space-y-4 mb-10">

                {[
                  "Interactive Wellness Activities",
                  "Mindfulness & Emotional Reset",
                  "Practical Reflection Strategies",
                  "Safe Space For Educators",
                ].map((item, index) => (

                  <div
                    key={index}
                    className="flex items-center gap-4"
                  >

                    <div className="w-2.5 h-2.5 rounded-full bg-[#D4AF37]"></div>

                    <p className="text-gray-200 text-sm sm:text-base">

                      {item}

                    </p>

                  </div>

                ))}

              </div>

              {/* CTA */}
              <div className="flex flex-wrap gap-5">

                <button className="
                  bg-[#D4AF37]
                  text-black
                  px-8
                  py-4
                  rounded-full
                  font-semibold
                  hover:scale-105
                  transition
                  duration-300
                  shadow-[0_0_30px_rgba(212,175,55,0.25)]
                ">

                  Enroll Now

                </button>


<button className="
  border
  border-white/20
  text-white
  px-8
  py-4
  rounded-full
  font-semibold
  hover:border-[#D4AF37]
  hover:text-[#D4AF37]
  transition
  duration-300
">

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

export default UpcomingProgram;