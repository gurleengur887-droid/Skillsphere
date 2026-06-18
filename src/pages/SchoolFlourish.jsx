
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import SchoolFlourishHero from "./SchoolFlourishHero";
import AssessmentPopup from "../components/AssessmentPopup";
import SchoolFlourishprocess from "./SchoolFlourishprocess";
import FlourishOverview from "./FlourishOverview";
import SchoolFlourishCTA from "./SchoolFlourishCTA";

function SchoolFlourish() {

  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <Navbar />

      <SchoolFlourishHero
  setShowPopup={setShowPopup}
/>

      <SchoolFlourishprocess />

      <FlourishOverview />

      <SchoolFlourishCTA
        setShowPopup={setShowPopup}
      />

      {showPopup && (

        <AssessmentPopup
          onClose={() => setShowPopup(false)}
        />

      )}

    </>
  );
}

export default SchoolFlourish;

