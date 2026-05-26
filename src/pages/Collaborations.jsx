// Collaborations.jsx

import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { FaInstagram } from "react-icons/fa";

const collaborations = [
  {
    logo: "/logos/centa.PNG",
    link: "https://instagram.com/",
    className: "w-[70px] sm:w-[90px] md:w-[110px]",
  },

  {
    logo: "/logos/CT_logo.PNG",
    link: "https://www.instagram.com/ctuniversityofficial?igsh=MWd1M2Jxc25yOGh6eA==",
    className: "w-[100px] sm:w-[140px] md:w-[200px]",
  },

  {
    logo: "/logos/educart.PNG",
    link: "https://www.instagram.com/educartbooks?igsh=MWN2ZnUxZDJpejlnaQ==",
    className: "w-[95px] sm:w-[130px] md:w-[190px]",
  },

  {
    logo: "/logos/F_logo.PNG",
    link: "https://www.instagram.com/finessefleet?igsh=MWdvb2IxYm1renpnYw==",
    className: "w-[90px] sm:w-[120px] md:w-[160px]",
  },

  {
    logo: "/logos/school.PNG",
    link: "https://www.instagram.com/ghpsloniroad07?igsh=MW82N2I2bXMyZHRlOA==",
    className: "w-[80px] sm:w-[110px] md:w-[130px]",
  },
];

const Collaborations = () => {
  return (
    <>
      <section className="relative overflow-hidden bg-[#050816] text-white pt-16 pb-20 sm:pb-24">

        {/* Background Glow */}
        <div className="absolute top-[-150px] left-[-100px] w-[500px] h-[500px] bg-[#D4AF37]/10 blur-[140px] rounded-full"></div>

        <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-blue-500/10 blur-[140px] rounded-full"></div>

        {/* Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 relative z-10">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >

            <p className="uppercase tracking-[4px] sm:tracking-[5px] text-[#D4AF37] text-[10px] sm:text-sm mb-4 sm:mb-5">
              Collaborations & Partnerships
            </p>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] max-w-5xl mx-auto mb-5 sm:mb-6">

              Collaborating With
              <span className="text-[#D4AF37]">
                {" "}Visionary Institutions
              </span>

            </h2>

            <p className="text-gray-400 text-sm sm:text-lg leading-relaxed max-w-2xl mx-auto px-2">

              Building meaningful partnerships with educational communities,
              institutions, and transformative learning platforms.

            </p>

          </motion.div>

          {/* LOGO STRIP */}
          <div className="relative mt-8 sm:mt-12">

            {/* Ambient Glow */}
            <div
              className="
                absolute
                left-1/2
                top-1/2
                -translate-x-1/2
                -translate-y-1/2
                w-[95%]
                sm:w-[90%]
                h-[55px]
                sm:h-[80px]
                bg-[#D4AF37]/10
                blur-[100px]
                rounded-full
              "
            ></div>

            {/* Floating Strip */}
            <div
              className="
                relative
                overflow-hidden
                rounded-[18px]
                sm:rounded-[22px]
                border
                border-white/10
                bg-gradient-to-r
                from-[#0B1120]/95
                via-[#111827]/95
                to-[#0B1120]/95
                backdrop-blur-xl
                rotate-0
                sm:rotate-[-1deg]
                shadow-[0_10px_40px_rgba(0,0,0,0.45)]
              "
            >

              {/* Animated Light Sweep */}
              <div
                className="
                  absolute
                  top-0
                  left-[-30%]
                  w-[30%]
                  h-full
                  bg-gradient-to-r
                  from-transparent
                  via-white/10
                  to-transparent
                  skew-x-[-20deg]
                  animate-[sweep_6s_linear_infinite]
                  z-10
                "
              ></div>

              {/* Top Beam */}
              <div
                className="
                  absolute
                  top-0
                  left-0
                  w-full
                  h-[2px]
                  bg-gradient-to-r
                  from-transparent
                  via-[#D4AF37]
                  to-transparent
                "
              ></div>

              {/* Bottom Beam */}
              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  w-full
                  h-[2px]
                  bg-gradient-to-r
                  from-transparent
                  via-blue-400/50
                  to-transparent
                "
              ></div>

              {/* Side Fades */}
              <div className="absolute left-0 top-0 h-full w-10 sm:w-24 bg-gradient-to-r from-[#0B1120] to-transparent z-20"></div>

              <div className="absolute right-0 top-0 h-full w-10 sm:w-24 bg-gradient-to-l from-[#0B1120] to-transparent z-20"></div>

              {/* Marquee */}
              <div className="relative py-[2px] sm:py-1">

                <Marquee
                  speed={45}
                  gradient={false}
                  pauseOnHover={true}
                  autoFill={true}
                >

                  {collaborations.map((brand, index) => (

                    <div
                      key={index}
                      className="
                        relative
                        mx-3
                        sm:mx-5
                        md:mx-7
                        flex
                        items-center
                        justify-center
                        group
                      "
                    >

                      {/* Logo */}
                      <img
                        src={brand.logo}
                        alt="brand"
                        className={`
                          relative
                          ${brand.className}
                          h-auto
                          object-contain
                          transition-all
                          duration-500
                          group-hover:scale-110
                          group-hover:-translate-y-1
                          drop-shadow-[0_0_25px_rgba(255,255,255,0.15)]
                        `}
                      />

                      {/* Instagram Icon */}
                      <a
                        href={brand.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          absolute
                          opacity-0
                          group-hover:opacity-100
                          transition
                          duration-300
                          bg-[#D4AF37]
                          text-black
                          p-2
                          sm:p-3
                          rounded-full
                          shadow-lg
                          z-30
                        "
                      >

                        <FaInstagram className="text-xs sm:text-lg" />

                      </a>

                    </div>

                  ))}

                </Marquee>

              </div>

            </div>

          </div>

        </div>

      </section>
    </>
  );
};

export default Collaborations;