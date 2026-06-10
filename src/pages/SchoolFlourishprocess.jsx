import { motion } from "framer-motion";

const steps = [
  {
    image: "/images/flourish1.png",
    title: "Happy Teachers. Happy Futures.",
    desc:
      "School Flourish™ helps schools create environments where educators thrive and students flourish.",
  },

  {
    image: "/images/flourish2.png",
    title: "We Assess What Matters",
    desc:
      "Teacher wellbeing, school culture, leadership practices, professional growth, and the learning environment.",
  },

  {
    image: "/images/flourish3.png",
    title: "Data-Driven School Flourish Report",
    desc:
      "Receive meaningful insights, strengths, growth opportunities, and strategic recommendations.",
  },

  {
    image: "/images/flourish4.png",
    title: "Parameters We Work On",
    desc:
      "Leadership effectiveness, collaboration, wellbeing, innovation, engagement, and positive school climate.",
  },

  {
    image: "/images/flourish5.png",
    title: "Measure. Monitor. Improve.",
    desc:
      "Transformation should be measurable. Track growth and continuously strengthen your school culture.",
  },
];

const SchoolFlourishprocess = () => {
  return (
    <section className="relative overflow-hidden bg-[#050816] py-24">

      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Heading */}
       <div className="text-center mb-24">

  <p className="
    uppercase
    tracking-[5px]
    text-[#D4AF37]
    text-xs
    sm:text-sm
    mb-5
  ">
    The School Flourish Journey
  </p>

  <h2 className="
    text-4xl
    sm:text-6xl
    font-bold
    text-white
    leading-tight
  ">

    A Framework Designed
    <span className="block text-[#D4AF37]">

      To Help Schools Flourish

    </span>

  </h2>

</div>

        {steps.map((step, index) => (

          <div
            key={index}
            className="
              grid
              lg:grid-cols-2
              gap-16
              items-center
              mb-28
            "
          >

            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className={index % 2 !== 0 ? "lg:order-2" : ""}
            >

              <img
                src={step.image}
                alt={step.title}
                className="
  w-full
  rounded-[36px]
  border
  border-white/10
  shadow-[0_30px_100px_rgba(0,0,0,0.45)]
  hover:scale-[1.02]
  transition-all
  duration-500
"
              />

            </motion.div>

       {/* CONTENT */}
<motion.div
  initial={{ opacity: 0, x: index % 2 === 0 ? 80 : -80 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
>

  {/* Step Number */}
  <div className="flex items-center gap-5 mb-10">

    <div
      className="
        text-6xl
        sm:text-8xl
        font-bold
        text-[#D4AF37]/30
        leading-none
      "
    >
      0{index + 1}
    </div>

    <div className="h-[1px] flex-1 bg-gradient-to-r from-[#D4AF37] to-transparent"></div>

  </div>

  {/* Title */}
  <h3
    className="
      text-3xl
      sm:text-5xl
      font-bold
      text-white
      leading-tight
      mb-8
    "
  >
    {step.title}
  </h3>

  {/* Description */}
  <p
    className="
      text-gray-400
      text-lg
      leading-[1.9]
      max-w-xl
    "
  >
    {step.desc}
  </p>

</motion.div>

          </div>

        ))}

      </div>

    </section>
  );
};

export default SchoolFlourishprocess;