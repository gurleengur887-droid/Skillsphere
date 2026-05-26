// Podcast.jsx

import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Helmet } from "react-helmet-async";
import {
  FaInstagram,
  FaSpotify,
  FaYoutube,
} from "react-icons/fa";

import Navbar from "../components/Navbar";

const podcastData = [
  {
    episode: "Episode 01",

    title: "Redefining Educator Leadership",

    description:
      "A meaningful conversation around resilience, growth, and transformational leadership in modern education.",

    guest: "Gurpreet Kaur Chandok",

    handle: "@gkchandok",

    instagram: "https://instagram.com/gkchandok/",

    youtube: "https://youtu.be/Y3bNVWyo4vE?si=Fw3omFJmk9XobWW5",

    spotify: "https://spotify.com/",

    image: "/images/podcast1.JPEG",
  },

  {
    episode: "Episode 02",

    title: "Building Emotionally Strong Classrooms",

    description:
      "Exploring educator wellbeing, emotional resilience, and creating impactful learning environments.",

    guest: "Nishant Singh Lakra",

    handle: "@nishi_ism",

    instagram: "https://instagram.com/nishi_ism/",

    youtube: "https://youtube.com/",

    spotify: "https://spotify.com/",

    image: "/images/podcast2.JPEG",
  },

  {
    episode: "Episode 03",

    title: "Purpose-Driven Educational Transformation",

    description:
      "Visionary insights into leadership, innovation, and future-focused educational growth.",

    guest: "Bandana Sethi",

    handle: "@bandana.sethi.18",

    instagram: "https://www.instagram.com/bandana.sethi.18?igsh=NmQ2b25lbmQxbGg2",

    youtube: "https://youtu.be/lyNgqddwEBo?si=ENvv4r2ohK8R1eGW",

    spotify: "https://spotify.com/",

    image: "/images/podcast3.JPEG",
  },
  {
  episode: "Episode 04",

  title: "The Future Of Conscious Education",

  description:
    "A deep conversation on mindful leadership, future-ready learning, and building emotionally empowered educational communities.",

  guest: "Alka Patta",

  handle: "@alkapatta",

  instagram: "https://instagram.com/alkapatta/",

  youtube: "https://youtube.com/",

  spotify: "https://spotify.com/",

  image: "/images/podcast4.png",
},
];

const Podcast = () => {
  return (
    <>
    <Helmet>

  <title>
    Podcasts | SkillSphere
  </title>

  <meta
    name="description"
    content="Explore inspiring SkillSphere podcast conversations on educator wellbeing, leadership, emotional resilience, and transformational learning with visionary guests."
  />

  <meta
    name="keywords"
    content="SkillSphere podcast, educator leadership, teacher wellness, educational transformation, leadership conversations, podcasts"
  />

  <meta
    property="og:title"
    content="Podcasts | SkillSphere"
  />

  <meta
    property="og:description"
    content="Meaningful podcast conversations around leadership, educator wellbeing, transformation, and future-focused learning."
  />
<link
  rel="canonical"
  href="https://skillspherebyesh.com/podcast"
/>
  <meta
    property="og:image"
    content="https://skillspherebyesh.com/seo-banner.png"
  />

</Helmet>
      <Navbar />

      <section className="relative overflow-hidden bg-[#050816] text-white pt-36 pb-28 px-5 sm:px-8 md:px-12">

        {/* Background Glow */}
        <div className="absolute top-[-150px] left-[-100px] w-[500px] h-[500px] bg-[#D4AF37]/10 blur-[140px] rounded-full"></div>

        <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-blue-500/10 blur-[140px] rounded-full"></div>

        {/* Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]" />

        <div className="max-w-7xl mx-auto relative z-10">

          {/* HERO */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-32"
          >

            <p className="uppercase tracking-[5px] text-[#D4AF37] text-xs sm:text-sm mb-5">
              Podcast Conversations
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] max-w-6xl mx-auto mb-8">

              Conversations That
              <span className="text-[#D4AF37]">
                {" "}Inspire Educators
              </span>

            </h1>

            <p className="text-gray-400 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto mb-10">

              Exploring leadership, transformation, educator wellbeing,
              and meaningful conversations with inspiring personalities.

            </p>

            {/* Top CTA */}
            <div className="flex flex-wrap justify-center gap-5">

              <a
                href="https://www.youtube.com/@EshuMadaan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-red-500/10 border border-red-500/20 px-8 py-4 rounded-full hover:bg-red-500/20 transition duration-300"
              >

                <FaYoutube className="text-red-400 text-xl" />

                Watch Episodes

              </a>

              <a
                href="https://spotify.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-green-500/10 border border-green-500/20 px-8 py-4 rounded-full hover:bg-green-500/20 transition duration-300"
              >

                <FaSpotify className="text-green-400 text-xl" />

                Listen on Spotify

              </a>

            </div>

          </motion.div>

          {/* PODCAST EPISODES */}
          <div className="flex flex-col gap-32">

            {podcastData.map((podcast, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >

                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center ${
                    index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >

                  {/* IMAGE SIDE */}
                  <Tilt
                    glareEnable={true}
                    glareMaxOpacity={0.08}
                    scale={1.01}
                    transitionSpeed={1500}
                    tiltMaxAngleX={5}
                    tiltMaxAngleY={5}
                  >

                    <div className="group relative overflow-hidden rounded-[36px] border border-white/10">

                      {/* Image */}
                     <img
  src={podcast.image}
  alt={podcast.title}
  className="w-full h-[320px] sm:h-[420px] lg:h-[500px] object-contain lg:object-cover bg-[#0B1120] transition duration-[2000ms] group-hover:scale-105"
/>

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/90 via-transparent to-transparent"></div>

                    </div>

                  </Tilt>

                  {/* CONTENT SIDE */}
                  <div>

                    {/* Episode */}
                    <p className="uppercase tracking-[5px] text-[#D4AF37] text-xs sm:text-sm mb-5">

                      {podcast.episode}

                    </p>

                    {/* Title */}
                    <h2 className="text-4xl sm:text-5xl font-bold leading-[1.1] mb-8">

                      {podcast.title}

                    </h2>

                    {/* Description */}
                    <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-2xl">

                      {podcast.description}

                    </p>

                    {/* Guest */}
                    <div className="flex flex-wrap items-center gap-5 mb-10">

                      <div className="px-5 py-3 rounded-full bg-white/5 border border-white/10 text-white">

                        {podcast.guest}

                      </div>

                      {/* Insta */}
                      <a
                        href={podcast.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-5 py-3 rounded-full bg-white/5 border border-white/10 hover:border-[#D4AF37]/40 hover:text-[#D4AF37] transition duration-300"
                      >

                        <FaInstagram />

                        {podcast.handle}

                      </a>

                    </div>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-5">

                      {/* YouTube */}
                      <a
                        href={podcast.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 bg-red-500/10 border border-red-500/20 px-8 py-4 rounded-full hover:bg-red-500/20 transition duration-300"
                      >

                        <FaYoutube className="text-red-400 text-xl" />

                        Watch Episode

                      </a>

                      {/* Spotify */}
                      <a
                        href={podcast.spotify}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 bg-green-500/10 border border-green-500/20 px-8 py-4 rounded-full hover:bg-green-500/20 transition duration-300"
                      >

                        <FaSpotify className="text-green-400 text-xl" />

                        Listen on Spotify

                      </a>

                    </div>

                  </div>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>
    </>
  );
};

export default Podcast;