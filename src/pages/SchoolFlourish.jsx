import { useState } from "react";
import Navbar from "../components/Navbar";
import SchoolFlourishHero from "./SchoolFlourishHero";
import SchoolFlourishPopup from "./SchoolFlourishPopup";
import SchoolFlourishprocess from "./SchoolFlourishprocess";
import FlourishOverview from "./FlourishOverview";
import SchoolFlourishCTA from "./SchoolFlourishCTA";
function SchoolFlourish() {

  const [showPopup, setShowPopup] = useState(true);

  return (
    <>
      <Navbar />

      <SchoolFlourishHero />
        <SchoolFlourishprocess />
        <FlourishOverview/>
        <SchoolFlourishCTA />
      <SchoolFlourishPopup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
      />

    </>
  );
}

export default SchoolFlourish;