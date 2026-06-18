
import { motion } from "framer-motion";
import { FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function TeacherWellnessPopup({ onClose }) {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 sm:px-5">

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="
          relative
          w-full
          max-w-lg
          rounded-[28px]
          bg-[#F8F3E8]
          p-6
          sm:p-8
          md:p-10
          shadow-2xl
        "
      >

        {/* Close Button */}
        <button
          onClick={onClose}
          className="
            absolute
            right-5
            top-5
            text-gray-400
            transition
            hover:text-black
          "
        >
          <FiX size={20} />
        </button>

        {/* Tag */}
        <p
          className="
            uppercase
            tracking-[3px]
            text-[10px]
            sm:text-xs
            text-[#D4AF37]
            mb-4
          "
        >
          A little something for teachers
        </p>

        {/* Heading */}
        <h2
          className="
            text-3xl
            sm:text-4xl
            font-bold
            leading-tight
            text-[#1E293B]
          "
        >
          Teacher Wellbeing
          <span className="block">
            Resources
          </span>
        </h2>

        {/* Description */}
        <p
          className="
            mt-5
            text-sm
            sm:text-base
            text-gray-600
            leading-7
          "
        >
          We've created simple wellbeing resources to help
          educators recharge, reflect and flourish.
        </p>

        {/* Resource List */}
        <div className="mt-8 space-y-6">

          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-[#1E293B]">
               7-Day Starter Kit
            </h3>

            <p className="mt-2 text-sm sm:text-base text-gray-500 leading-7">
              Small daily practices for busy educators.
            </p>
          </div>

          <div className="border-t border-gray-200"></div>

          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-[#1E293B]">
               21-Day Flourish Journey
            </h3>

            <p className="mt-2 text-sm sm:text-base text-gray-500 leading-7">
              Build sustainable wellbeing habits and routines.
            </p>
          </div>

        </div>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">

          <button
            onClick={() => {
              navigate("/programs");
              onClose();
            }}
            className="
              w-full
              sm:w-auto
              rounded-full
              bg-[#1E293B]
              px-8
              py-4
              text-sm
              sm:text-base
              font-medium
              text-white
              transition
              hover:bg-black
            "
          >
            Explore Resources →
          </button>

          <button
            onClick={onClose}
            className="
              text-sm
              sm:text-base
              text-gray-500
              transition
              hover:text-black
            "
          >
            Later
          </button>

        </div>

      </motion.div>

    </div>
  );
}

export default TeacherWellnessPopup;

