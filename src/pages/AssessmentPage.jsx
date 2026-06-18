import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AssessmentPage() {

  const navigate = useNavigate();

  useEffect(() => {

    const access = JSON.parse(
      sessionStorage.getItem("assessment_access")
    );

    if (!access) {
      navigate("/school-flourish");
      return;
    }

    setTimeout(() => {

      window.location.href = access.google_form_url;

    }, 2000);

  }, [navigate]);

  return (

    <div className="min-h-screen bg-[#050816] flex items-center justify-center px-6">

      <div className="
        w-full
        max-w-xl
        rounded-[40px]
        border border-white/10
        bg-[#08101F]/90
        p-10
        text-center
        backdrop-blur-3xl
      ">

        <h1 className="text-4xl font-bold text-white">
          School Flourish
        </h1>

        <p className="mt-6 text-gray-400 leading-8">

          Preparing your assessment...

        </p>

        <div className="mt-10 flex justify-center">

          <div className="
            h-12
            w-12
            rounded-full
            border-4
            border-[#D4AF37]/20
            border-t-[#D4AF37]
            animate-spin
          " />

        </div>

      </div>

    </div>

  );
}

export default AssessmentPage;