import { useState } from "react";
import { supabase } from "../lib/supabase";
import { useNavigate } from "react-router-dom";

function AdminLogin() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) {

      alert(error.message);
      return;

    }

    navigate("/skillsphere-admin");

  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-[#050816]">

      <div className="w-full max-w-md rounded-[32px] border border-white/10 bg-white/[0.03] p-8">

        <h1 className="text-4xl font-bold text-white">
          Admin Login
        </h1>

        <input
          className="mt-8 h-14 w-full rounded-2xl bg-white/5 px-5 text-white"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          className="mt-4 h-14 w-full rounded-2xl bg-white/5 px-5 text-white"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button
          onClick={login}
          className="mt-8 h-14 w-full rounded-2xl bg-[#D4AF37] font-semibold text-[#050816]"
        >
          Login
        </button>

      </div>

    </div>

  );

}

export default AdminLogin;