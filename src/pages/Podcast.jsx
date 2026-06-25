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

    spotify: "https://open.spotify.com/episode/3ERytwMSEhs5hpc8DipnnJ?si=tS9TTxdXQP-LmEIT-BZicA",

    image: "/images/podcast1.JPEG",
  },

  {
    episode: "Episode 02",

    title: "Building Emotionally Strong Classrooms",

    description:
      "Exploring educator wellbeing, emotional resilience, and creating impactful learning environments.",

    guest: "Hariom Prasad Chourasia",

    handle: "@baccho_ka_dost_",

    instagram: "https://www.instagram.com/baccho_ka_dost_?igsh=MWg5MGQzYTc5YWdzZA==",

    youtube: "https://youtu.be/diOZ_zY_gEI?si=M52B76ylTX876t4a",

    spotify: "https://open.spotify.com/episode/6dwDbWyGgdzVUQQWBcl9kB?si=T2lDPMjRRCm2W0hoy0oh8w",

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

    spotify: "https://open.spotify.com/episode/5XrCdhRgDemj63arVCShzj?si=hRuchyygS12axkZSpziMlg",

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
  {
  episode: "Episode 05",

  title: "From Gurus to classrooms",

  description: "Exploring timeless wisdom from Baba Farid Ji, Guru Nanak Dev Ji, and the Mahabharata while discussing how education, values, and respect for teachers have evolved in today's world.",

  guest: "Jaswinder Singh",

  handle: "@jaswins_lab_on_wheels",

  instagram: "https://www.instagram.com/jaswins_lab_on_wheels?igsh=MTN2MWZ0enVtbDJibA==",

  youtube: "https://youtu.be/eqHC2bNAljk?si=STyMADnEAdJfrY0c",

  spotify: "https://open.spotify.com/episode/40zebZOscknqL5HFpOyctd?si=SlS61gBzQgS45LAtiDnTaQ",

  image: "/images/podcast5.jpeg",
},
 {
  episode: "Episode 06",

  title: "Teacher Happiness & Mental Wellbeing",

  description: "Exploring the challenges teachers face today and discussing practical ways to nurture mental health, resilience, work-life balance, and overall wellbeing in education.",

  guest: " Dr. Bhavana Kulshrestha",

  handle: "@dr_bhavana_kulshrestha",

  instagram: "https://www.instagram.com/dr_bhavana_kulshrestha?igsh=Y2F2cng1cHE5MmFx",

  youtube: "https://youtu.be/jGPuZYo1NVw?si=xiSs8ulbFhFNnC7U",

  spotify: "https://open.spotify.com/episode/5n4uYJyO4zTOfoRKVCC7pk?si=Fw3UHK18SpuGYkZaQfj4FQ",

  image: "/images/podcast6.png",
},
 {
  episode: "Episode 07",

  title: "Teacher Happiness & Mental Wellbeing",

  description: "Exploring the challenges teachers face today and discussing practical ways to nurture mental health, resilience, work-life balance, and overall wellbeing in education.",

  guest: " S. Gurr Sewak Singh",

  handle: "@gurr_sewak",

  instagram: "https://www.instagram.com/gurr_sewakk?igsh=MXVodm9mcm1pejN3Zg==",

  youtube: "https://youtu.be/",

  spotify: "https://open.spotify.com/",

  image: "/images/podcast7.png",
},
{
  episode: "Episode 08",

  title: "Teachers shape lives not just report cards",

  description: "In this episode, we explore the lasting impact educators have beyond the classroom. From nurturing emotional wellbeing to inspiring lifelong learning, we discuss how teachers shape individuals, families, and entire communities.",

  guest: "Nishant Singh Lakra",

  handle: "@nishi_ism",

  instagram: "https://instagram.com/nishi_ism/",

  youtube: "https://youtu.be/1cle0COiMBw?si=ZONtkRGs8Osb23Hz",

  spotify: "https://open.spotify.com/",

  image: "/images/podcast8.JPEG",
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
                href="https://open.spotify.com/show/033eoKZw6oJcyrn9LbeX8p?si=xpMy8-VeTSWd-9OmEPPkNw"
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
        <div className="flex flex-col gap-20 md:gap-28">

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
 className="
w-full
h-[260px]
sm:h-[340px]
md:h-[420px]
lg:h-[500px]
object-cover
rounded-[36px]
"
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
                    <h2 className="
text-3xl
sm:text-4xl
lg:text-5xl
font-bold
leading-tight
">

                      {podcast.title}

                    </h2>

                    {/* Description */}
                    <p
  className="
    mt-6
    lg:mt-8
    text-gray-400
    text-base
    sm:text-lg
    leading-8
    mb-10
    max-w-2xl
  "
>
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
                   <div className="flex flex-col sm:flex-row gap-4">

                      {/* YouTube */}
                      <a
                        href={podcast.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                      className="
flex
items-center
justify-center
gap-3
w-full
sm:w-auto
bg-red-500/10
border
border-red-500/20
px-7
py-4
rounded-full
hover:bg-red-500/20
transition
duration-300
"
                      >

                        <FaYoutube className="text-red-400 text-xl" />

                        Watch Episode

                      </a>

                      {/* Spotify */}
                      <a
                        href={podcast.spotify}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
flex
items-center
justify-center
gap-3
w-full
sm:w-auto
bg-green-500/10
border
border-green-500/20
px-7
py-4
rounded-full
hover:bg-green-500/20
transition
duration-300
"
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