import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

function ProtectedRoute({ children }) {

  const [session, setSession] = useState(undefined);

  useEffect(() => {

    const getSession = async () => {

      const { data } = await supabase.auth.getSession();

      setSession(data.session);

    };

    getSession();

  }, []);

  if (session === undefined) {

    return (
      <div className="min-h-screen flex items-center justify-center bg-[#050816] text-white">
        Loading...
      </div>
    );

  }

  return session
    ? children
    : <Navigate to="/skillsphere-admin-login" replace />;

}

export default ProtectedRoute;