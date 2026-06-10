import Navbar from "../components/Navbar";
import React from "react";


function Programs() {
 



  
  return (
    <>
      <Navbar />

     <section
  id="programs"
  className="
    relative
    pt-[140px]
    pb-20
    px-4
    sm:px-6
    md:px-12
    bg-[#050816]
    min-h-screen
    overflow-hidden
  "
>
        <div className="max-w-7xl mx-auto">

          {/* HEADING */}
          <div className="text-center mb-14 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
              Wellness Programs & Educator Resources
            </h2>

            <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
              Designed to help educators reset, recharge, and flourish —
              individually and institutionally.
            </p>
          </div>

          {/* FEATURED TOOLKIT */}
          <div className="relative overflow-hidden rounded-[28px] md:rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl mb-8 md:mb-10">

            <div className="grid lg:grid-cols-2 gap-8 md:gap-10 items-center p-5 sm:p-7 md:p-12">

              {/* TEXT */}
              <div>

                <span className="inline-block px-4 py-2 rounded-full bg-yellow-400/10 text-yellow-300 text-sm mb-5 border border-yellow-400/20">
                  Featured Wellness System
                </span>

                <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-5">
                  Teacher Wellness Toolkit
                </h3>

                <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-7">
                  A complete wellbeing system designed for educators
                  to reflect, recharge, and rise through guided wellness
                  tools and mindful habit-building resources.
                </p>

                <a
                  href="https://wa.me/919779982140"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-yellow-400 text-black font-semibold hover:scale-105 transition duration-300"
                >
                  Enquire Now
                </a>

              </div>

              {/* IMAGE */}
              <div className="w-full">
                <img
                  src="/images/toolkit.png"
                  alt="Teacher Wellness Toolkit"
                  className="w-full h-auto object-contain rounded-3xl"
                />
              </div>

            </div>
          </div>

          {/* PROGRAMS */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-10">

            {/* 7 DAY */}
            <div className="rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">

              <div className="p-3 sm:p-4">
                <img
                  src="/images/7_days.png"
                  alt="7 Day Wellness Reset"
                  className="w-full h-auto object-contain rounded-2xl"
                />
              </div>

              <div className="px-5 pb-6 sm:px-7 sm:pb-8">

                <h3 className="text-2xl font-bold text-white mb-4">
                  7 Day Wellness Reset
                </h3>

                <p className="text-gray-400 leading-relaxed mb-6 text-sm sm:text-base">
                  A focused 7-day guided wellness journey helping educators
                  reduce stress and reconnect with calm.
                </p>

                <a
                  href="https://wa.me/919779982140"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex px-6 py-3 rounded-full border border-yellow-400 text-yellow-300 hover:bg-yellow-400 hover:text-black transition duration-300"
                >
                  Get Details
                </a>

              </div>
            </div>

            {/* 21 DAY */}
            <div className="rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">

              <div className="p-3 sm:p-4">
                <img
                  src="/images/wellness_programs.png"
                  alt="21 Day Transform & Thrive"
                  className="w-full h-auto object-contain rounded-2xl"
                />
              </div>

              <div className="px-5 pb-6 sm:px-7 sm:pb-8">

                <h3 className="text-2xl font-bold text-white mb-4">
                  21 Day Transform & Thrive
                </h3>

                <p className="text-gray-400 leading-relaxed mb-6 text-sm sm:text-base">
                  A deeper emotional wellness experience designed to help
                  educators create sustainable wellbeing habits.
                </p>

                <a
                  href="https://wa.me/919779982140"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex px-6 py-3 rounded-full border border-yellow-400 text-yellow-300 hover:bg-yellow-400 hover:text-black transition duration-300"
                >
                  Explore Program
                </a>

              </div>
            </div>

          </div>
</div>
      {/* FREE RESOURCES */}
<section className="mt-20">

  {/* Heading */}
  <div className="text-center mb-14">

    <p className="uppercase tracking-[5px] text-[#C7D0B3] text-xs sm:text-sm mb-5">

      Free Educator Resources

    </p>

    <h2 className="text-4xl sm:text-5xl font-bold leading-tight text-white">

      Tools For Everyday
      <span className="text-[#C7D0B3]">

        {" "}Wellbeing

      </span>

    </h2>

  </div>

  {/* Burnout Tracker Card */}
  <div
    className="
      relative
      overflow-hidden
      rounded-[40px]
      border
      border-white/10
      bg-gradient-to-br
      from-[#0B1120]
      to-[#111827]
      backdrop-blur-3xl
      p-6
      sm:p-10
      max-w-5xl
      mx-auto
    "
  >

    {/* Glow */}
    <div className="absolute top-[-80px] right-[-80px] w-[220px] h-[220px] bg-[#C7D0B3]/10 blur-[100px] rounded-full"></div>

    {/* Badge */}
    <div className="flex justify-center mb-8">

      <span
        className="
          px-5
          py-2
          rounded-full
          border
          border-[#C7D0B3]/20
          bg-[#C7D0B3]/10
          text-[#D6D8C8]
          text-sm
        "
      >

        Weekly Reflection Resource

      </span>

    </div>

    {/* Title */}
    <h3 className="text-center text-3xl sm:text-5xl font-bold text-white leading-tight mb-5">

      Teacher Burnout
      <span className="block text-[#C7D0B3]">

        Self-Assessment Tracker

      </span>

    </h3>

    <p className="text-center text-gray-400 text-base sm:text-lg max-w-3xl mx-auto mb-12">

      A weekly wellness reflection tool designed to help educators
      recognize stress, monitor emotional wellbeing, and build
      healthier habits through mindful self-awareness.

    </p>

    {/* Image */}
    <div className="mb-12">

      <img
        src="/images/burnout.jpg"
        alt="Burnout Tracker"
        className="
          w-full
          max-w-3xl
          mx-auto
          rounded-[30px]
          border
          border-white/10
          shadow-2xl
        "
      />

    </div>

    {/* Features */}
    <div className="grid sm:grid-cols-2 gap-6 mb-12">

      {[
        "Weekly Burnout Score",
        "Emotional Reflection Prompts",
        "Progress Tracking",
        "Mini Reset Reminders",
      ].map((item, index) => (

        <div
          key={index}
          className="
            flex
            items-center
            gap-4
            rounded-2xl
            border
            border-white/10
            bg-white/[0.03]
            p-5
          "
        >

          <div className="w-3 h-3 rounded-full bg-[#C7D0B3]"></div>

          <p className="text-gray-200">

            {item}

          </p>

        </div>

      ))}

    </div>

    {/* Buttons */}
<div className="flex flex-wrap justify-center gap-5">

  {/* Download Tracker */}
  <a
    href="/images/burnout.jpg"
    download
    className="
      bg-[#C7D0B3]
      text-black
      px-8
      py-4
      rounded-full
      font-semibold
      hover:scale-105
      transition
      duration-300
      shadow-[0_0_30px_rgba(199,208,179,0.2)]
    "
  >
    Download Tracker
  </a>

  {/* Get Support */}
  <button
    onClick={() =>
      window.open(
        "https://wa.me/919779982140?text=Hi, I'd like support regarding teacher wellbeing and burnout management.",
        "_blank"
      )
    }
    className="
      border
      border-white/20
      text-white
      px-8
      py-4
      rounded-full
      font-semibold
      hover:border-[#C7D0B3]
      hover:text-[#C7D0B3]
      transition
      duration-300
    "
  >
    Get Support
  </button>

</div>

  </div>

</section>   
      </section>
    </>
  );
}

export default Programs;