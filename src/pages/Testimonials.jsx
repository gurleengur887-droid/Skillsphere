// Testimonials.jsx

import { useState } from "react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import Marquee from "react-fast-marquee";

import {
  FaQuoteLeft,
  FaPlay,
  FaTimes,
} from "react-icons/fa";

import Navbar from "../components/Navbar";

const testimonials = [
  {
    message:
      "Hi Eshu, thanks for the wonderful workshop today on Teachers’ Wellness. You didn’t just talk about wellness — you gave us actual tools of reset we could use right away.",

    name: "Prati Ma'am",

    role: "Teacher",
  },

  {
    message:
      "Eshu Ma’am, it was a wonderful Wellness Session. Your techniques to channelise the stress into good energy were brilliant.",

    name: "Jagjeet Singh",

    role: "Principal",
  },

  {
    message:
      "The Teacher Wellness Reset workshop by Eshu Madaan was truly refreshing and insightful. Her engaging and inspiring approach made the workshop meaningful and motivating.",

    name: "Radha Ma'am",

    role: "Educator",
  },

  {
    message:
      "Thank you for conducting such a wonderful Teacher Wellness Reset Program. The workshop was very engaging, interactive, and insightful.",

    name: "Saiyyada Ma'am",

    role: "Educator",
  },

  {
  name: "Dr Pankaj Jain",
  role: "CT University",
  message:
    "We extend our heartfelt gratitude to Eshu Madaan for delivering an insightful session on Unlocking Your Potential at CT University. Your valuable knowledge and interactive approach truly inspired students and helped them understand the importance of soft skills in shaping their future careers.",
},
];

const videos = [
  {
    video: "/videos/testimonial2.mp4",

    title: "Principal • GD Goenka School Sector 50 Noida",
  },

  {
    video: "/videos/testimonial1.mp4",

    title: "HM • GD Goenka School Noida",
  },
];

const Testimonials = () => {

  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <>
      <Navbar />

      <section className="relative overflow-hidden bg-[#050816] text-white pt-32 pb-32">

        {/* Glow */}
        <div className="absolute top-[-150px] left-[-120px] w-[500px] h-[500px] bg-[#D4AF37]/10 blur-[140px] rounded-full"></div>

        <div className="absolute bottom-[-180px] right-[-120px] w-[500px] h-[500px] bg-blue-500/10 blur-[140px] rounded-full"></div>

        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]" />

        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 relative z-10">

          {/* HERO */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-28"
          >

            <p className="uppercase tracking-[5px] text-[#D4AF37] text-xs sm:text-sm mb-5">
              Testimonials • Experiences • Impact
            </p>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] max-w-6xl mx-auto mb-8">

              Stories Of
              <span className="text-[#D4AF37]">
                {" "}Impact
              </span>

            </h1>

            <p className="text-gray-400 text-base sm:text-xl leading-relaxed max-w-3xl mx-auto">

              Reflections, experiences, and meaningful moments shared by
              educators and institutions.

            </p>

          </motion.div>

          {/* TESTIMONIALS */}
          <div className="
            relative
            mb-40
            rounded-[42px]
            border
            border-white/10
            bg-white/[0.03]
            backdrop-blur-3xl
            py-14
            overflow-hidden
          ">

            <div className="text-center mb-14 px-4">

              <h2 className="text-3xl sm:text-5xl font-bold mb-5">

                What Educators
                <span className="text-[#D4AF37]">
                  {" "}Shared
                </span>

              </h2>

              <p className="text-gray-400 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed">

                Real reflections from impactful workshops and meaningful
                educational conversations.

              </p>

            </div>

            {/* Slider */}
            <Marquee
              speed={35}
              gradient={false}
              pauseOnHover={true}
              autoFill={true}
            >

              {testimonials.map((item, index) => (

                <div
                  key={index}
                  className="
                    mx-4
                    w-[260px]
                    sm:w-[310px]
                    min-h-[270px]
                    rounded-[30px]
                    border
                    border-white/10
                    bg-[#091020]/90
                    backdrop-blur-xl
                    p-6
                    flex
                    flex-col
                    justify-between
                    hover:-translate-y-2
                    hover:border-[#D4AF37]/30
                    transition-all
                    duration-500
                  "
                >

                  {/* Typing Dots */}
                  <div className="flex gap-2 mb-5">

                    <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>

                    <span className="w-2 h-2 rounded-full bg-[#D4AF37]/80 animate-pulse delay-100"></span>

                    <span className="w-2 h-2 rounded-full bg-[#D4AF37]/60 animate-pulse delay-200"></span>

                  </div>

                  {/* Quote */}
                  <FaQuoteLeft className="text-[#D4AF37] text-xl mb-4" />

                  {/* Message */}
                  <p className="
                    text-gray-300
                    text-[14px]
                    leading-[1.7]
                    mb-6
                    flex-1
                  ">

                    {item.message}

                  </p>

                  {/* Bottom */}
                  <div className="pt-4 border-t border-white/10">

                    <h3 className="text-xl font-semibold mb-1">

                      {item.name}

                    </h3>

                    <p className="text-gray-500 text-sm">

                      {item.role}

                    </p>

                  </div>

                </div>

              ))}

            </Marquee>

          </div>

          {/* QUOTE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative py-28 text-center mb-40"
          >

            <FaQuoteLeft className="text-[#D4AF37] text-5xl mx-auto mb-10 opacity-80" />

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.2] max-w-5xl mx-auto">

              “Transformation begins when educators feel
              <span className="text-[#D4AF37]">
                {" "}heard, valued & empowered.
              </span>”

            </h2>

          </motion.div>

          {/* VIDEOS */}
          <div className="mb-40">

            <div className="text-center mb-20">

              <h2 className="text-3xl sm:text-5xl font-bold mb-6">

                Real
                <span className="text-[#D4AF37]">
                  {" "}Voices
                </span>

              </h2>

              <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">

                Genuine reflections shared by educational leaders and educators.

              </p>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

              {videos.map((item, index) => (

                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1,
                    delay: index * 0.2,
                  }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                  onClick={() => setActiveVideo(item.video)}
                >

                  <div className="
                    relative
                    overflow-hidden
                    rounded-[40px]
                    border
                    border-white/10
                    bg-white/[0.03]
                  ">

                    {/* Video */}
                    <video
                      src={item.video}
                      muted
                      playsInline
                      className="
                        w-full
                        h-[420px]
                        sm:h-[520px]
                        object-cover
                        group-hover:scale-105
                        transition-all
                        duration-700
                      "
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/70 to-transparent"></div>

                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">

                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="
                          w-20
                          h-20
                          rounded-full
                          bg-white/10
                          backdrop-blur-xl
                          border
                          border-white/10
                          flex
                          items-center
                          justify-center
                        "
                      >

                        <FaPlay className="text-white text-xl ml-1" />

                      </motion.div>

                    </div>

                    {/* Title */}
                    <div className="absolute bottom-8 left-8 right-8">

                      <h3 className="text-xl font-semibold leading-snug">

                        {item.title}

                      </h3>

                    </div>

                  </div>

                </motion.div>

              ))}

            </div>

          </div>

          {/* NEWSLETTER */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >

            <div className="
              grid
              grid-cols-1
              lg:grid-cols-2
              gap-16
              items-center
            ">

              {/* CONTENT */}
              <motion.div
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >

                <p className="uppercase tracking-[5px] text-[#D4AF37] text-xs sm:text-sm mb-6">

                  Featured Recognition

                </p>

                <h2 className="text-4xl sm:text-6xl font-bold leading-[1.1] mb-8">

                  Educational
                  <span className="text-[#D4AF37]">
                    {" "}Spotlight
                  </span>

                </h2>

                <p className="text-gray-400 text-lg leading-[2] mb-10 max-w-xl">

                  Recognized for meaningful contributions toward educator
                  wellness, leadership development, and transformational
                  educational experiences.

                </p>

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

                  Explore Feature

                </button>

              </motion.div>

              {/* IMAGE */}
              <motion.div
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="flex justify-center"
              >

                <img
                  src="/images/newsletter.png"
                  alt="newsletter"
                  className="
                    w-full
                    max-w-[430px]
                    rounded-[24px]
                    shadow-2xl
                    hover:scale-[1.02]
                    transition-all
                    duration-700
                  "
                />

              </motion.div>

            </div>

          </motion.div>

        </div>

        {/* VIDEO MODAL */}
        <AnimatePresence>

          {activeVideo && (

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="
                fixed
                inset-0
                z-[999]
                backdrop-blur-3xl
                bg-[#050816]/30
                flex
                items-center
                justify-center
                p-4
              "
            >

              {/* Close */}
              <button
                onClick={() => setActiveVideo(null)}
                className="
                  absolute
                  top-6
                  right-6
                  w-12
                  h-12
                  rounded-full
                  bg-white/10
                  backdrop-blur-xl
                  border
                  border-white/10
                  flex
                  items-center
                  justify-center
                  hover:bg-white/20
                  transition
                "
              >

                <FaTimes className="text-white" />

              </button>

              {/* Video */}
              <motion.video
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.4 }}
                src={activeVideo}
                controls
                autoPlay
                className="
                  h-[90vh]
                  w-auto
                  object-contain
                  rounded-[24px]
                "
              />

            </motion.div>

          )}

        </AnimatePresence>

      </section>
    </>
  );
};

export default Testimonials;