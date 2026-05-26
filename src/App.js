import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Podcast from "./pages/Podcast";
import Workshops from "./pages/Workshops";
import Programs from "./pages/Programs";
import Footer from "./pages/Footer";

function App() {
  return (
    <HelmetProvider>

      <BrowserRouter>

        {/* GLOBAL SEO */}
        <Helmet>

          <title>
            SkillSphere | Empowering Educators & Transforming Learning
          </title>

          <meta
            name="description"
            content="SkillSphere empowers educators, schools, and leaders through transformational mentorship, wellbeing programs, leadership development, and impactful learning experiences."
          />

          <meta
            name="keywords"
            content="SkillSphere, educators, teacher mentorship, educational leadership, teacher wellbeing, schools, leadership workshops"
          />

          <meta
            property="og:title"
            content="SkillSphere | Empowering Educators & Transforming Learning"
          />

          <meta
            property="og:description"
            content="Empowering educators and transforming learning communities through mentorship, leadership, and wellbeing initiatives."
          />

          <meta
            property="og:image"
            content="https://skillspherebyesh.com/seo-banner.png"
          />

        </Helmet>

        <Routes>

          {/* HOME */}
          <Route
            path="/"
            element={
              <>
                <Helmet>
                  <title>
                    SkillSphere | Home
                  </title>

                  <meta
                    name="description"
                    content="Empowering educators through meaningful conversations, teacher wellness, leadership development, and impactful learning experiences."
                  />
                </Helmet>

                <Home />
              </>
            }
          />

          {/* ABOUT */}
          <Route
            path="/about"
            element={
              <>
                <Helmet>
                  <title>
                    About | SkillSphere
                  </title>

                  <meta
                    name="description"
                    content="Learn about SkillSphere’s mission to transform education through mentorship, educator wellbeing, leadership development, and future-focused learning."
                  />
                </Helmet>

                <About />
              </>
            }
          />

          {/* WORKSHOPS */}
          <Route
            path="/workshops"
            element={
              <>
                <Helmet>
                  <title>
                    Workshops | SkillSphere
                  </title>

                  <meta
                    name="description"
                    content="Explore SkillSphere workshops focused on educator wellbeing, leadership development, mentorship, and transformative educational experiences."
                  />
                </Helmet>

                <Workshops />
              </>
            }
          />

          {/* PROGRAMS */}
          <Route
            path="/programs"
            element={
              <>
                <Helmet>
                  <title>
                    Wellness Programs | SkillSphere
                  </title>

                  <meta
                    name="description"
                    content="Explore SkillSphere wellness programs, teacher reset journeys, educator wellbeing resources, and the School Flourish Index designed to help educators thrive."
                  />
                </Helmet>

                <Programs />
              </>
            }
          />

          {/* CONTACT */}
          <Route
            path="/contact"
            element={
              <>
                <Helmet>
                  <title>
                    Contact | SkillSphere
                  </title>

                  <meta
                    name="description"
                    content="Connect with SkillSphere for collaborations, educator programs, leadership workshops, podcasts, and transformative educational experiences."
                  />
                </Helmet>

                <Contact />
              </>
            }
          />

          {/* PODCAST */}
          <Route
            path="/podcast"
            element={
              <>
                <Helmet>
                  <title>
                    Podcasts | SkillSphere
                  </title>

                  <meta
                    name="description"
                    content="Explore inspiring SkillSphere podcast conversations with educators, leaders, and changemakers shaping the future of education."
                  />
                </Helmet>

                <Podcast />
              </>
            }
          />

        </Routes>

        <Footer />

      </BrowserRouter>

    </HelmetProvider>
  );
}

export default App;