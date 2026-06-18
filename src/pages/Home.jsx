import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Pillars from "../pages/Pillars";
import Collaborations from "./Collaborations";
import Impact from "./Impact";
import Testimonials from "./Testimonials";
import TeacherWellnessPopup from "../components/TeacherWellnessPopup";
const Home = () => {
  const [showWellnessPopup, setShowWellnessPopup] = useState(false);
  useEffect(() => {

  const timer = setTimeout(() => {

    setShowWellnessPopup(true);

  }, 6000);

  return () => clearTimeout(timer);

}, []);
  return (
    <>

      {/* SEO */}
      <Helmet>

        <title>
          SkillSphere | Empowering Educators Through Meaningful Conversations
        </title>

        <meta
          name="description"
          content="SkillSphere empowers educators, schools, and leaders through teacher wellness programs, impactful podcasts, leadership workshops, and transformational learning experiences."
        />

        <meta
          name="keywords"
          content="SkillSphere, educators, teacher wellness, educational leadership, podcasts, schools, leadership workshops, teacher mentorship"
        />
<link
  rel="canonical"
  href="https://skillspherebyesh.com/home"
/>
        <meta
          property="og:title"
          content="SkillSphere | Empowering Educators"
        />

        <meta
          property="og:description"
          content="Transforming educational communities through meaningful conversations, leadership development, and wellbeing initiatives."
        />

        <meta
          property="og:image"
    content="https://skillspherebyesh.com/seo-banner.png"
          
        />

      </Helmet>

      <div className="bg-[#050816] text-white overflow-hidden">

        <Navbar />

        <Hero />

        <Pillars />

        <Collaborations />

        <Testimonials />
        
        <Impact />
          
      </div>
{
  showWellnessPopup && (
    <TeacherWellnessPopup
      onClose={() =>
        setShowWellnessPopup(false)
      }
    />
  )
}
    </>
    
  );
};

export default Home;