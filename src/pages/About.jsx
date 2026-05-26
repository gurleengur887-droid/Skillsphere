// About.jsx
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import Featured from "./Featured";
import MissionPoster from "./MissionPoster";
import MediaCoverage from "./MediaCoverage";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <>
      <Helmet>

        <title>
          About | SkillSphere
        </title>

        <meta
          name="description"
          content="Learn about SkillSphere’s mission to empower educators through mentorship, leadership development, teacher wellbeing, and transformational learning experiences."
        />

        <link
          rel="canonical"
          href="https://skillspherebyesh.com/about"
        />

        <meta
          name="keywords"
          content="SkillSphere About, educator wellbeing, teacher leadership, mentorship, educational transformation, Eshu"
        />

        <meta
          property="og:title"
          content="About | SkillSphere"
        />

        <meta
          property="og:description"
          content="Empowering educators through wellness, leadership, mentorship, and meaningful educational impact."
        />

        <meta
          property="og:image"
          content="https://skillspherebyesh.com/seo-banner.png"
        />

      </Helmet>

      <section
        id="about"
        className="relative w-full overflow-hidden bg-[#050816] text-white py-24 sm:py-32 px-5 sm:px-8 md:px-12"
      >

        {/* Glow Effects */}
        <div className="absolute top-0 left-[-120px] w-[320px] h-[320px] bg-[#D4AF37]/10 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-0 right-[-120px] w-[320px] h-[320px] bg-blue-500/10 blur-[120px] rounded-full"></div>

        {/* Floating Ambient Lights */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">

          <div className="absolute top-[8%] left-[10%] w-[220px] h-[220px] bg-[#D4AF37]/20 rounded-full blur-[90px] animate-[float_8s_ease-in-out_infinite]"></div>

          <div className="absolute top-[35%] right-[12%] w-[280px] h-[280px] bg-blue-500/20 rounded-full blur-[110px] animate-[float_10s_ease-in-out_infinite]"></div>

          <div className="absolute bottom-[12%] left-[25%] w-[180px] h-[180px] bg-white/10 rounded-full blur-[80px] animate-[float_7s_ease-in-out_infinite]"></div>

          <div className="absolute bottom-[5%] right-[18%] w-[250px] h-[250px] bg-[#D4AF37]/10 rounded-full blur-[100px] animate-[float_12s_ease-in-out_infinite]"></div>

        </div>

        <div className="max-w-7xl mx-auto relative z-10">

          {/* TOP SECTION */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

            {/* Founder Image */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative flex justify-center"
            >

              <div className="absolute inset-0 bg-[#D4AF37]/10 blur-3xl rounded-full"></div>

              <img
                src="/images/founder.JPEG"
                alt="Founder"
                className="relative w-full max-w-sm sm:max-w-md lg:max-w-md h-[500px] sm:h-[550px] object-cover rounded-[32px] shadow-2xl"
              />

            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >

              <p className="uppercase tracking-[5px] text-[#D4AF37] text-xs sm:text-sm mb-5">
                About The Founder
              </p>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] mb-8">
                Empowering
                <span className="block text-[#D4AF37]">
                  Educators
                </span>
                Through Wellness & Leadership
              </h2>

              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl">
                I’m Eshu — educator, mentor, and founder of Skillsphere —
                dedicated to helping teachers rediscover confidence,
                clarity, resilience, and meaningful leadership.
              </p>

            </motion.div>

          </div>

          {/* FEATURED */}
          <Featured />

          {/* MISSION POSTER */}
          <MissionPoster />

         <MediaCoverage />

<div className="mt-24">

  {/* Heading */}
  <div className="text-center mb-14">

    <p className="uppercase tracking-[5px] text-[#D4AF37] text-xs sm:text-sm mb-5">
      What We Focus On
    </p>

    <h2 className="text-4xl sm:text-5xl font-bold leading-tight">

      Creating Meaningful
      <span className="text-[#D4AF37]">
        {" "}Educator Experiences
      </span>

    </h2>

  </div>

  {/* Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

    {/* Card 1 */}
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="
        backdrop-blur-xl
        bg-white/5
        border
        border-white/10
        rounded-[28px]
        p-8
        hover:border-[#D4AF37]/40
        hover:-translate-y-2
        transition-all
        duration-300
      "
    >

      <p className="uppercase tracking-[4px] text-[#D4AF37] text-xs mb-5">
        Focus Area 01
      </p>

      <h3 className="text-[#D4AF37] text-2xl font-semibold mb-4">
        Mentorship
      </h3>

      <p className="text-gray-400 leading-relaxed">
        One-on-one guidance and transformational conversations designed
        to support personal and professional educator growth.
      </p>

    </motion.div>

    {/* Card 2 */}
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
      className="
        backdrop-blur-xl
        bg-white/5
        border
        border-white/10
        rounded-[28px]
        p-8
        hover:border-[#D4AF37]/40
        hover:-translate-y-2
        transition-all
        duration-300
      "
    >

      <p className="uppercase tracking-[4px] text-[#D4AF37] text-xs mb-5">
        Focus Area 02
      </p>

      <h3 className="text-[#D4AF37] text-2xl font-semibold mb-4">
        Wellness
      </h3>

      <p className="text-gray-400 leading-relaxed">
        Programs focused on emotional wellbeing, resilience,
        mindfulness, and creating healthier learning environments.
      </p>

    </motion.div>

    {/* Card 3 */}
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.4 }}
      viewport={{ once: true }}
      className="
        backdrop-blur-xl
        bg-white/5
        border
        border-white/10
        rounded-[28px]
        p-8
        hover:border-[#D4AF37]/40
        hover:-translate-y-2
        transition-all
        duration-300
      "
    >

      <p className="uppercase tracking-[4px] text-[#D4AF37] text-xs mb-5">
        Focus Area 03
      </p>

      <h3 className="text-[#D4AF37] text-2xl font-semibold mb-4">
        Leadership
      </h3>

      <p className="text-gray-400 leading-relaxed">
        Helping educators lead with confidence, clarity,
        purpose, and meaningful long-term impact.
      </p>

    </motion.div>

  </div>

</div>
        </div>

      </section>

      <Navbar />
    </>
  );
};

export default About;