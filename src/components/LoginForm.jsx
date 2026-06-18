import { useState } from "react";
import { supabase } from "../lib/supabase";

import {
  FiMail,
  FiLock,
  FiEye,
  FiEyeOff,
  FiArrowRight,
} from "react-icons/fi";

import {
  FaGoogle,
  FaApple,
  FaMicrosoft,
} from "react-icons/fa";

function LoginForm() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {

    const { error } =
      await supabase.auth.signInWithPassword({
        email,
        password,
      });

    if (error) {
      alert(error.message);
      return;
    }

    alert("Login successful!");

  };

  return (

    <div className="login-form">

      {/* Logo */}

      <div className="logo-section">

        <div className="logo-icon">
          🎓
        </div>

        <h2>
          Skill<span>Sphere</span>
        </h2>

      </div>


      {/* Heading */}

      <h1>
        Welcome Back
      </h1>

      <p className="subtitle">
        Sign in to continue your journey
      </p>


      {/* Email */}

      <div className="field">

        <label>
          Email Address
        </label>

        <div className="input-box">

          <FiMail className="input-icon" />

          <input
            type="email"
            placeholder="yourmail@example.com"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

        </div>

      </div>


      {/* Password */}

      <div className="field">

        <label>
          Password
        </label>

        <div className="input-box">

          <FiLock className="input-icon" />

          <input
            type={
              showPassword
                ? "text"
                : "password"
            }
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <button
            className="eye-btn"
            type="button"
            onClick={() =>
              setShowPassword(!showPassword)
            }
          >

            {
              showPassword
                ? <FiEyeOff />
                : <FiEye />
            }

          </button>

        </div>

      </div>


      {/* Row */}

      <div className="remember-row">

        <div>

          <input type="checkbox" />

          <span>
            Remember me
          </span>

        </div>

        <button className="forgot-btn">

          Forgot password?

        </button>

      </div>


      {/* Sign In */}

      <button
        className="login-btn"
        onClick={handleLogin}
      >

        Sign In

        <FiArrowRight />

      </button>


      {/* Divider */}

      <div className="divider">

        <span></span>

        <p>
          or
        </p>

        <span></span>

      </div>


      {/* Social */}

      <div className="socials">

        <button>
          <FaGoogle />
        </button>

        <button>
          <FaMicrosoft />
        </button>

        <button>
          <FaApple />
        </button>

      </div>


      <p className="bottom-text">

        Don't have an account?

        <span>
          Create Account
        </span>

      </p>

    </div>

  );
}

export default LoginForm;