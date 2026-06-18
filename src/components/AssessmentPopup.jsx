import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiArrowRight } from "react-icons/fi";
import { supabase } from "../lib/supabase";
import { useNavigate } from "react-router-dom";

function AssessmentPopup({ onClose }) {
const [step, setStep] = useState(1);

const [assessmentId, setAssessmentId] = useState("");
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");

const [loading, setLoading] = useState(false);
const [error, setError] = useState("");

const navigate = useNavigate();
const handleContinue = async () => {
  try {

    setLoading(true);
    setError("");

    // Validation

    if (!assessmentId.trim()) {
      setError("Please enter an Assessment ID");
      return;
    }

    if (!name.trim()) {
      setError("Please enter your name");
      return;
    }

    if (!email.trim()) {
      setError("Please enter your email address");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    // RPC call

    const { data, error: rpcError } = await supabase.rpc(
      "validate_assessment_code",
      {
        p_code: assessmentId.trim(),
        p_name: name,
        p_email: email,
        p_phone: phone
      }
    );

    if (rpcError || !data || data.length === 0) {
      setError("Invalid or unavailable Assessment ID");
      return;
    }

    const access = data[0];

    // Session storage

    sessionStorage.setItem(
      "assessment_access",
      JSON.stringify({
        code: access.code,
        user_type: access.user_type,
        form_type: access.form_type,
        organization_name: access.organization_name,
        google_form_url: access.google_form_url,
        name,
        email,
        phone
      })
    );

    navigate("/assessment");

  } catch (err) {

    console.error(err);

    setError(
      "Something went wrong. Please try again."
    );

  } finally {

    setLoading(false);

  }
};
return ( <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/70 px-5 backdrop-blur-md">


  {/* Atmosphere */}
  <div className="absolute inset-0 overflow-hidden">

    <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-[180px]" />

    <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-[#101827] blur-[180px]" />

    <div className="absolute right-0 top-1/3 h-[350px] w-[350px] rounded-full bg-white/[0.03] blur-[180px]" />

  </div>

  <div
    className="
      relative
      w-full
      max-w-xl
      max-h-[90vh]
overflow-y-auto
      overflow-hidden
      rounded-[32px] md:rounded-[48px]
      border
      border-white/[0.06]
      bg-[#08101F]/95
      px-6
      py-8
      shadow-[0_0_100px_rgba(0,0,0,0.8)]
      backdrop-blur-3xl
      md:px-10
    "
  >

    <button
      onClick={onClose}
      className="
        absolute
        right-6
        top-6
        md:right-8
         md:top-8
        text-gray-500
        transition
        hover:text-white
      "
    >
      <FiX size={20} />
    </button>

    <AnimatePresence mode="wait">

      {step === 1 && (
        <motion.div
          key="welcome"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.45 }}
          className="text-center"
        >

          <div className="mx-auto h-px w-32 bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />

          <h1 className="mt-12 text-4xl md:text-5xl font-bold tracking-tight text-white">
            School Flourish
          </h1>

          <p className="mx-auto mt-8 max-w-xl text-lg leading-9 text-gray-400">
            Understand the strengths and opportunities within your learning
            community through our evidence-based flourishing framework.
          </p>

          <div className="mx-auto mt-12 h-px w-32 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <button
            onClick={() => setStep(2)}
            className="
              mt-14
              h-16
              w-full
              rounded-[24px]
              border
              border-[#D4AF37]
              text-lg
              font-medium
              text-[#D4AF37]
              transition-all
              duration-300
              hover:bg-[#D4AF37]
              hover:text-[#050816]
            "
          >
            Measure Your School Flourish Index
          </button>

        </motion.div>
      )}

      {step === 2 && (
        <motion.div
          key="access"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Assessment Access
          </h2>

          <p className="mt-4 text-lg leading-7 text-gray-400">
            Enter the information provided by SkillSphere to begin your assessment.
          </p>

          <div className="mt-8 space-y-4">

            <input
              type="text"
              value={assessmentId}
              onChange={(e) => setAssessmentId(e.target.value)}
              placeholder="Assessment ID"
              className="
                h-14
                w-full
                rounded-[20px]
                border
                border-white/[0.06]
                bg-white/[0.025]
                px-5
                text-base
                text-white
                outline-none
                transition-all
                duration-300
                placeholder:text-gray-500
                focus:border-[#D4AF37]
                focus:shadow-[0_0_40px_rgba(212,175,55,0.12)]
              "
            />

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full Name"
              className="
                h-14
                w-full
                rounded-[20px]
                border
                border-white/[0.06]
                bg-white/[0.025]
                px-5
                text-base
                text-white
                outline-none
                transition-all
                duration-300
                placeholder:text-gray-500
                focus:border-[#D4AF37]
                focus:shadow-[0_0_40px_rgba(212,175,55,0.12)]
              "
            />

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className="
                h-14
                w-full
                rounded-[20px]
                border
                border-white/[0.06]
                bg-white/[0.025]
                px-5
                text-base
                text-white
                outline-none
                transition-all
                duration-300
                placeholder:text-gray-500
                focus:border-[#D4AF37]
                focus:shadow-[0_0_40px_rgba(212,175,55,0.12)]
              "
            />

            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Mobile Number (Optional)"
              className="
                h-14
                w-full
                rounded-[20px]
                border
                border-white/[0.06]
                bg-white/[0.025]
                px-5
                text-base
                text-white
                outline-none
                transition-all
                duration-300
                placeholder:text-gray-500
                focus:border-[#D4AF37]
                focus:shadow-[0_0_40px_rgba(212,175,55,0.12)]
              "
            />

          </div>

          {error && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-5 text-sm text-red-400"
            >
              {error}
            </motion.p>
          )}

          <div className="mt-8">

            <button
              onClick={handleContinue}
              disabled={loading}
              className="
                h-14
                w-full
                rounded-[20px]
                border
                border-[#D4AF37]
                text-base
                font-medium
                text-[#D4AF37]
                transition-all
                duration-300
                hover:bg-[#D4AF37]
                hover:text-[#050816]
                disabled:cursor-not-allowed
                disabled:opacity-50
              "
            >
              {loading ? (
                "Please wait..."
              ) : (
                <div className="flex items-center justify-center gap-3">
                  Continue
                  <FiArrowRight />
                </div>
              )}
            </button>

          </div>

        </motion.div>
      )}

    </AnimatePresence>

  </div>

</div>


);
}

export default AssessmentPopup;
