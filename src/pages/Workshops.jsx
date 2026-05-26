import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Navbar from "../components/Navbar";

const workshops = [
  {
    title: "Empowering Teachers With Robotics and AI",
    image: "/images/workshop2.png",
    linkedin: "https://www.linkedin.com/posts/eshu-madaan-a2140282_stemeducation-roboticsineducation-teachertraining-activity-7410355532714139648-QD4X?utm_source=social_share_video_v2&utm_medium=android_app&rcm=ACoAABGAYzkB2_FoGv021O7KFOCQezER4SIsgQ0&utm_campaign=copy_link",
    description:
      "Interactive sessions focused on confidence building, leadership, and future readiness among students.",
  },

  {
    title: "Board Exam Preparation Workshop",
    image: "/images/workshop4.png",
    linkedin: "https://www.linkedin.com/posts/eshu-madaan-a2140282_exampreparation-studentsuccess-stressfreelearning-activity-7396801365320216576-fSzn?utm_source=social_share_video_v2&utm_medium=android_app&rcm=ACoAABGAYzkB2_FoGv021O7KFOCQezER4SIsgQ0&utm_campaign=copy_link",
    description:
      "Helping learners understand planning, discipline, and smarter academic approaches.",
  },

  {
    title: "Teacher Development Workshops",
    image: "/images/workshop5.png",
    linkedin: "https://www.linkedin.com/posts/eshu-madaan-a2140282_adolescenteducation-teacherempowerment-lifeskills-activity-7357723343015358464-2OnL?utm_source=social_share_video_v2&utm_medium=android_app&rcm=ACoAABGAYzkB2_FoGv021O7KFOCQezER4SIsgQ0&utm_campaign=copy_link",
    description:
      "Empowering educators through engaging discussions, mentorship, and modern teaching practices.",
  },

  {
    title: "Parent–Teacher–Teen Conversations",
    image: "/images/workshop6.jpg",
    linkedin: "https://www.linkedin.com/posts/eshu-madaan-a2140282_centa-educatordevelopment-parenting-activity-7393292471000190976-q4oN?utm_source=social_share_video_v2&utm_medium=android_app&rcm=ACoAABGAYzkB2_FoGv021O7KFOCQezER4SIsgQ0&utm_campaign=copy_link",
    description:
      "Creating healthier communication and stronger emotional understanding within learning communities.",
  },

  {
    title: "Professional Growth & Recognition",
    image: "/images/workshop7.png",
    linkedin: "https://www.linkedin.com/posts/eshu-madaan-a2140282_braingym-mentalmaths-21stcenturyskills-activity-7340789965791842305-s2ph?utm_source=social_share_video_v2&utm_medium=android_app&rcm=ACoAABGAYzkB2_FoGv021O7KFOCQezER4SIsgQ0&utm_campaign=copy_link",
    description:
      "Celebrating collaboration, impactful learning experiences, and educational leadership.",
  },

  {
    title: "Community Learning Initiatives",
    image: "/images/workshop11.png",
    linkedin: "https://www.linkedin.com/posts/eshu-madaan-a2140282_on-13-october-23-i-conducted-my-first-session-activity-7122124905373921280-8C_d?utm_source=social_share_video_v2&utm_medium=android_app&rcm=ACoAABGAYzkB2_FoGv021O7KFOCQezER4SIsgQ0&utm_campaign=copy_link( introduced plc in 10 schools of Maharashtra",
    description:
      "Building inclusive educational environments through workshops and collaborative programs.",
  },
];

function Workshops() {
  return (
    <>
      <Navbar />

      <div className="bg-[#020817] text-white overflow-hidden">

        {/* HERO SECTION */}
        <section className="relative min-h-screen flex items-center pt-32">

          <div className="absolute inset-0">
            <img
              src="/images/workshop9.png"
              alt="Workshops Hero"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/70" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-28">

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="uppercase tracking-[0.4em] text-[#D4AF37] text-sm mb-6"
            >
              Workshops & Educational Experiences
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-5xl md:text-7xl font-bold leading-tight max-w-4xl"
            >
              Transforming Learning Through Meaningful Conversations
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mt-8 text-lg text-gray-300 max-w-2xl leading-relaxed"
            >
              From teacher wellbeing and leadership programs to student mentorship
              and collaborative learning experiences — every workshop is designed
              to inspire growth, confidence, and transformation.
            </motion.p>

          </div>
        </section>

        {/* FEATURED WORKSHOP */}
        <section className="py-20 lg:py-28 px-6 lg:px-12">

          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">

            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <img
                src="/images/workshop10.png"
                alt="Featured Workshop"
                className="rounded-[32px] shadow-2xl border border-white/10"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >

              <p className="uppercase tracking-[0.4em] text-[#D4AF37] text-sm mb-5">
                Featured Workshop
              </p>

              <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
                Eduthon 2026 – Empowering Future-Focused Educators
              </h2>

              <p className="text-gray-300 text-lg leading-relaxed mb-10">
                An inspiring gathering of educators, school leaders, and
                changemakers focused on innovation, collaboration, and
                transformative learning experiences.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 mb-10">

                <div className="bg-white/5 border border-white/10 rounded-3xl p-5">
                  ✔ Educator Summit
                </div>

                <div className="bg-white/5 border border-white/10 rounded-3xl p-5">
                  ✔ Leadership Conversations
                </div>

                <div className="bg-white/5 border border-white/10 rounded-3xl p-5">
                  ✔ Collaborative Learning
                </div>

                <div className="bg-white/5 border border-white/10 rounded-3xl p-5">
                  ✔ Nationwide Participation
                </div>

              </div>

              <a
                href="https://www.linkedin.com/posts/eshu-madaan-a2140282_eduthon-2024-khel-khel-mein-was-an-outstanding-activity-7235940377780736000-KJS0?utm_source=social_share_video_v2&utm_medium=android_app&rcm=ACoAABGAYzkB2_FoGv021O7KFOCQezER4SIsgQ0&utm_campaign=copy_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-300 px-6 sm:px-7 py-3 sm:py-4 rounded-full font-medium text-sm sm:text-base"
              >
                View Workshop Highlights
                <ArrowUpRight size={18} />
              </a>

            </motion.div>
          </div>
        </section>

        {/* WORKSHOP GRID */}
        <section className="py-10 px-6 lg:px-12">

          <div className="max-w-7xl mx-auto">

            <div className="mb-16 text-center">

              <p className="uppercase tracking-[0.4em] text-[#D4AF37] text-sm mb-4">
                Experiences
              </p>

              <h2 className="text-4xl md:text-6xl font-bold">
                Workshops That Inspire Growth
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">

              {workshops.map((workshop, index) => (

                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 70 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group bg-white/5 border border-white/10 rounded-[28px] overflow-hidden hover:border-[#D4AF37]/40 transition-all duration-500 flex flex-col"
                >

                  <div className="bg-[#0B1120] p-3 sm:p-4">

                    <img
                      src={workshop.image}
                      alt={workshop.title}
                      className="w-full h-[240px] sm:h-[280px] object-contain rounded-2xl group-hover:scale-[1.02] transition-transform duration-500"
                    />

                  </div>

                  <div className="p-5 sm:p-7 flex flex-col flex-grow">

                    <h3 className="text-xl sm:text-2xl font-semibold mb-4 leading-snug">
                      {workshop.title}
                    </h3>

                    <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                      {workshop.description}
                    </p>

                    <div className="mt-6 pt-5 border-t border-white/10">

                      <a
                        href={workshop.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[#D4AF37] font-medium hover:gap-3 transition-all duration-300 text-sm sm:text-base"
                      >
                        View LinkedIn Post
                        <ArrowUpRight size={16} />
                      </a>

                    </div>

                  </div>

                </motion.div>

              ))}

            </div>
          </div>
        </section>

        {/* PRINCIPAL MEET */}
        <section className="py-20 lg:py-28 px-6 lg:px-12">

          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">

            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <img
                src="/images/workshop8.png"
                alt="Principal Meet"
                className="rounded-[32px] shadow-2xl border border-white/10"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >

              <p className="uppercase tracking-[0.4em] text-[#D4AF37] text-sm mb-5">
                Collaborations
              </p>

              <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
                Leadership & School Collaborations
              </h2>

              <p className="text-gray-300 text-lg leading-relaxed">
                Building meaningful connections with school leaders and educational
                institutions to create impactful learning experiences, teacher
                empowerment initiatives, and future-focused educational programs.
              </p>

            </motion.div>

          </div>
        </section>

        {/* CLOSING SECTION */}
        <section className="relative min-h-[90vh] flex items-center">

          <div className="absolute inset-0">
            <img
              src="/images/workshop1.png"
              alt="Closing"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/75" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-28">

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-7xl font-bold leading-tight max-w-4xl"
            >
              Transforming Learning Through Meaningful Conversations
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mt-8 text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed"
            >
              Every workshop, mentorship session, and collaboration is designed to
              create stronger educators, healthier classrooms, and future-ready
              learning communities.
            </motion.p>

            <div className="flex flex-wrap gap-4 sm:gap-5 mt-10">

              <a
                href="https://www.instagram.com/skillspherebyesh?igsh=MXU4a2Z0anFuMTQ4Ng==https://www.instagram.com/skillspherebyesh?igsh=MXU4a2Z0anFuMTQ4Ng=="
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#D4AF37] hover:bg-[#c49f22] text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base"
              >
                Explore More Workshops
              </a>

              <a
                href="/contact"
                className="border border-white text-white hover:bg-white hover:text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base"
              >
                Collaborate With Us
              </a>

            </div>

            <p className="mt-16 text-xl sm:text-2xl md:text-3xl italic text-gray-300 max-w-3xl">
              “When educators grow, entire communities evolve.”
            </p>

          </div>
        </section>

      </div>
    </>
  );
}

export default Workshops;