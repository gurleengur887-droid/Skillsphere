import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaPlay } from "react-icons/fa";

const SchoolFlourishPopup = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="
            fixed
            inset-0
            z-[999]
            bg-[#050816]/40
            backdrop-blur-3xl
            flex
            items-center
            justify-center
            p-5
          "
        >
          {/* Popup */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
            className="
              relative
              w-full
              max-w-4xl
              rounded-[40px]
              border
              border-white/10
              bg-[#0B1120]/95
              backdrop-blur-3xl
              overflow-hidden
              p-8
            "
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="
                absolute
                top-6
                right-6
                w-12
                h-12
                rounded-full
                bg-white/10
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

            {/* Video Placeholder */}
            <div
              className="
                aspect-video
                rounded-[28px]
                border
                border-white/10
                bg-white/5
                flex
                flex-col
                items-center
                justify-center
                text-center
              "
            >
              <div className="w-20 h-20 rounded-full bg-green-400/20 flex items-center justify-center mb-6">

                <FaPlay className="text-green-400 text-2xl ml-1" />

              </div>

              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                School Flourish Overview
              </h2>

              <p className="text-gray-400 max-w-xl">
                AI overview video will be added here.
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap justify-center gap-5 mt-10">

              <button
                onClick={() =>
                  window.open(
                    "https://wa.me/919779982614",
                    "_blank"
                  )
                }
                className="
                  bg-green-400
                  text-black
                  px-8
                  py-4
                  rounded-full
                  font-semibold
                  hover:scale-105
                  transition
                "
              >
                Book Free Consultation
              </button>

              <button
                onClick={onClose}
                className="
                  border
                  border-white/20
                  text-white
                  px-8
                  py-4
                  rounded-full
                  font-semibold
                  hover:border-green-400
                  hover:text-green-400
                  transition
                "
              >
                Explore Platform
              </button>

            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SchoolFlourishPopup;