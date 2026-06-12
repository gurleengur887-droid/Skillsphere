import { motion } from "framer-motion";

const WellBeingDiagnosticPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-[9999]
        bg-black/60
        backdrop-blur-md
        overflow-y-auto
        flex
        items-start
        justify-center
        px-4
        pt-10
        pb-6
      "
    >
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.9,
          y: 30,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
        className="
          relative
          w-full
          max-w-3xl
          rounded-[32px]
          sm:rounded-[40px]
          border
          border-white/10
          bg-[#243244]
          p-6
          sm:p-10
          shadow-2xl
          overflow-hidden
        "
      >
        {/* Glows */}
        <div className="absolute top-[-100px] right-[-80px] w-[220px] h-[220px] bg-[#D4AF37]/20 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-[-100px] left-[-80px] w-[180px] h-[180px] bg-blue-400/10 blur-[120px] rounded-full"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="
            absolute
            top-4
            right-4
            text-2xl
            text-gray-400
            hover:text-[#D4AF37]
            transition
            z-20
          "
        >
          ×
        </button>

        {/* Heading */}
        <div className="relative z-10 text-center mt-4">
          <p
            className="
              uppercase
              tracking-[4px]
              text-[#D4AF37]
              text-xs
              sm:text-sm
              mb-5
            "
          >
            WELLNESS REFLECTION HUB
          </p>

          <h2
            className="
              text-3xl
              sm:text-5xl
              font-bold
              leading-[1.15]
              mb-5
              text-white
            "
          >
            Understand Your

            <span className="block text-[#D4AF37]">
              Wellbeing Journey
            </span>
          </h2>

          <p
            className="
              text-gray-300
              text-sm
              sm:text-lg
              leading-relaxed
              max-w-2xl
              mx-auto
              mb-8
            "
          >
            Explore evidence-based resources designed to help educators
            understand stress, burnout and emotional wellbeing.
          </p>
        </div>

        {/* Cards */}
        <div className="relative z-10 grid md:grid-cols-2 gap-4">

          {/* Teachers */}
          <button
            onClick={() =>
              window.open("/pdf/burnout-audit.pdf", "_blank")
            }
            className="
              h-[140px]
              sm:h-[160px]
              rounded-[28px]
              border
              border-[#D4AF37]/30
              bg-white/10
              px-5
              py-4
              flex
              flex-col
              justify-center
              items-center
              text-center
              hover:border-[#D4AF37]
              hover:-translate-y-1
              transition-all
              duration-300
            "
          >
            <h3 className="text-xl sm:text-2xl font-bold text-[#D4AF37] mb-3">
              For Teachers
            </h3>

            <p className="text-gray-200 leading-relaxed text-sm sm:text-base">
              Download the Teacher Burnout Reflection Guide.
            </p>
          </button>

          {/* Leaders */}
          <div
            className="
              h-[140px]
              sm:h-[160px]
              rounded-[28px]
              border
              border-white/20
              bg-white/10
              px-5
              py-4
              flex
              flex-col
              justify-center
              items-center
              text-center
            "
          >
            <h3 className="text-xl sm:text-2xl font-bold text-[#D4AF37] mb-3">
              For Leaders
            </h3>

            <p className="text-gray-300 text-sm sm:text-base">
              Coming Soon
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="relative z-10 mt-8 text-center">
          <p className="text-gray-300 text-sm sm:text-lg leading-relaxed">
            Your wellbeing matters.
            <br />

            <span className="text-[#D4AF37]">
              Not just surviving. Flourishing.
            </span>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default WellBeingDiagnosticPopup;