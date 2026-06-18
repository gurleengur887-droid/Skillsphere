import { motion } from "framer-motion";

function OverlayPanel({ isSignUp, setIsSignUp }) {
  return (
    <motion.div
      animate={{
        x: isSignUp ? "100%" : "0%",
      }}
      transition={{
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      }}
      className="
      absolute
      top-0
      left-0
      w-1/2
      h-full
      z-20
      overflow-hidden
      "
    >
      <div
        className="
        relative
        h-full
        w-full
        bg-gradient-to-br
        from-[#D4AF37]
        via-[#C89A1D]
        to-[#9A7414]
        flex
        items-center
        justify-center
        px-10
        text-center
        "
      >
        {/* Glow */}
        <div className="absolute top-[-120px] right-[-80px] w-[300px] h-[300px] bg-white/20 rounded-full blur-[120px]" />

        <div className="relative z-10">

          <motion.div
            key={isSignUp}
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: .6,
            }}
          >

            <h1 className="text-5xl font-bold text-white mb-6 leading-tight">

              {isSignUp
                ? "Welcome Back!"
                : "Begin Your Journey"}

            </h1>

            <p className="text-white/90 text-lg leading-relaxed mb-10 max-w-sm mx-auto">

              {isSignUp
                ? "Already have an account? Sign in and continue your wellness journey."
                : "Create your account and start building healthier schools and thriving educators."}

            </p>

            <button
              onClick={() => setIsSignUp(!isSignUp)}
              className="
              px-10
              py-4
              rounded-full
              border-2
              border-white
              text-white
              font-semibold
              hover:bg-white
              hover:text-[#C89A1D]
              transition
              duration-300
              "
            >
              {isSignUp ? "SIGN IN" : "SIGN UP"}
            </button>

          </motion.div>

        </div>

      </div>
    </motion.div>
  );
}

export default OverlayPanel;