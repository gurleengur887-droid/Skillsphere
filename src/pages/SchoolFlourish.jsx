import React from "react";
import Navbar from "../components/Navbar";
import SchoolFlourishHero from "./SchoolFlourishHero";

import SchoolFlourishprocess from "./SchoolFlourishprocess";
import FlourishOverview from "./FlourishOverview";
import SchoolFlourishCTA from "./SchoolFlourishCTA";
function SchoolFlourish() {

  

  return (
    <>
      <Navbar />

      <SchoolFlourishHero />
        <SchoolFlourishprocess />
        <FlourishOverview/>
        <SchoolFlourishCTA />
     

    </>
  );
}

export default SchoolFlourish;