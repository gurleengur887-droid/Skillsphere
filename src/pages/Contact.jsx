// Contact.jsx

import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import UpcomingProgram from "./UpcomingProgram";
import {
  FiMail,
  FiPhone,
} from "react-icons/fi";

import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";

import { Helmet } from "react-helmet-async";

import emailjs from "@emailjs/browser";

import { useRef, useState } from "react";

const Contact = () => {

  const form = useRef();

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState("");

  const sendEmail = (e) => {

    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(
        "service_bciyq3h",
        "template_9034jfs",
        form.current,
        "FAcJ6mWB_Mqr0om9-"
      )

      .then(
        () => {

          setLoading(false);

          setSuccess("Message sent successfully!");

          form.current.reset();

        },

        () => {

          setLoading(false);

          setSuccess("Something went wrong. Please try again.");

        }
      );
  };

  return (
    <>
      <Helmet>

        <title>
          Contact | SkillSphere
        </title>

        <meta
          name="description"
          content="Connect with SkillSphere for educator wellness programs, leadership workshops, podcasts, collaborations, and transformative learning experiences."
        />

        <link
          rel="canonical"
          href="https://skillspherebyesh.com/contact"
        />

        <meta
          name="keywords"
          content="SkillSphere contact, educator wellness, teacher workshops, educational leadership, podcasts, collaborations"
        />

        <meta
          property="og:title"
          content="Contact | SkillSphere"
        />

        <meta
          property="og:description"
          content="Let’s collaborate to create meaningful educational impact through mentorship, wellbeing, and leadership initiatives."
        />

        <meta
          property="og:image"
          content="https://skillspherebyesh.com/seo-banner.png"
        />

      </Helmet>

      <section
        id="contact"
        className="relative overflow-hidden bg-gradient-to-b from-[#050816] via-[#07101f] to-[#050816] text-white py-24 sm:py-32 px-5 sm:px-8 md:px-12"
      >

        {/* Ambient Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">

          <div className="absolute top-[10%] left-[5%] w-[260px] h-[260px] bg-[#D4AF37]/20 rounded-full blur-[100px] animate-[float_8s_ease-in-out_infinite]"></div>

          <div className="absolute bottom-[10%] right-[8%] w-[320px] h-[320px] bg-blue-500/20 rounded-full blur-[120px] animate-[float_10s_ease-in-out_infinite]"></div>

        </div>

        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >

            {/* Label */}
            <p className="uppercase tracking-[5px] text-[#D4AF37] text-xs sm:text-sm mb-5">
              Contact & Collaborations
            </p>

            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] mb-8">
              Let’s Create
              <span className="block text-[#D4AF37]">
                Meaningful Impact
              </span>
              Together
            </h2>

            {/* Description */}
            <p className="text-gray-300 text-lg leading-relaxed max-w-xl mb-10">
              Whether it’s educator wellness programs, leadership workshops,
              podcasts, or meaningful collaborations — let’s connect and create
              transformative learning experiences together.
            </p>

            {/* Contact Details */}
            <div className="flex flex-col gap-5 mb-10">

              {/* Email */}
              <a
                href="mailto:eshu@skillspherebyesh.com"
                className="flex items-center gap-4 text-gray-300 hover:text-[#D4AF37] transition duration-300"
              >
                <div className="w-12 h-12 rounded-full backdrop-blur-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <FiMail className="text-xl" />
                </div>

                <span>eshu@skillspherebyesh.com</span>
              </a>

              {/* Phone */}
              <a
                href="tel:+919779982140"
                className="flex items-center gap-4 text-gray-300 hover:text-[#D4AF37] transition duration-300"
              >
                <div className="w-12 h-12 rounded-full backdrop-blur-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <FiPhone className="text-xl" />
                </div>

                <span>+91 97799-82140</span>
              </a>

            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-5">

              {/* Instagram */}
              <a
                href="https://www.instagram.com/skillspherebyesh"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full backdrop-blur-xl bg-white/5 border border-white/10 flex items-center justify-center hover:border-[#D4AF37]/50 hover:text-[#D4AF37] transition duration-300"
              >
                <FaInstagram className="text-xl" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full backdrop-blur-xl bg-white/5 border border-white/10 flex items-center justify-center hover:border-[#D4AF37]/50 hover:text-[#D4AF37] transition duration-300"
              >
                <FaLinkedinIn className="text-xl" />
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full backdrop-blur-xl bg-white/5 border border-white/10 flex items-center justify-center hover:border-[#D4AF37]/50 hover:text-[#D4AF37] transition duration-300"
              >
                <FaFacebookF className="text-xl" />
              </a>

            </div>

          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-[32px] p-8 sm:p-10 shadow-2xl"
          >

            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-6"
            >

              {/* Name */}
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none text-white placeholder:text-gray-500 focus:border-[#D4AF37]/50 transition duration-300"
              />

              {/* Email */}
              <input
                type="email"
                name="email"
                required
                placeholder="Your Email"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none text-white placeholder:text-gray-500 focus:border-[#D4AF37]/50 transition duration-300"
              />

              {/* Organization */}
              <input
                type="text"
                name="organization"
                placeholder="Organization / School"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none text-white placeholder:text-gray-500 focus:border-[#D4AF37]/50 transition duration-300"
              />

              {/* Message */}
              <textarea
                rows="6"
                name="message"
                required
                placeholder="Tell us about your collaboration or workshop requirement..."
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none text-white placeholder:text-gray-500 focus:border-[#D4AF37]/50 transition duration-300 resize-none"
              ></textarea>

              {/* Button */}
              <button
                type="submit"
                disabled={loading}
                className="bg-[#D4AF37] text-black px-8 py-4 rounded-full font-semibold hover:scale-[1.02] transition duration-300 shadow-[0_0_30px_rgba(212,175,55,0.35)] disabled:opacity-70"
              >
                {
                  loading
                    ? "Sending..."
                    : "Send Message"
                }
              </button>

              {/* Success Message */}
              {
                success && (
                  <p className="text-center text-sm text-[#D4AF37]">
                    {success}
                  </p>
                )
              }

            </form>

          </motion.div>

        </div>

        <Navbar />

      </section>

      <UpcomingProgram />

    </>
  );
};

export default Contact;