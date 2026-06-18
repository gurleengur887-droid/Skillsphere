import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { supabase } from "../lib/supabase";

function SignupForm() {

  const [role, setRole] = useState("teacher");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [city, setCity] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSignup = async () => {

    try {

      const { data, error } =
        await supabase.auth.signUp({
          email,
          password,
        });

      if (error) {
        alert(error.message);
        return;
      }

      const authUser = data.user;

      const { error: dbError } =
        await supabase
          .from("users")
          .insert([
            {
              auth_id: authUser.id,
              name,
              email,
              role,
              has_submitted: false,
            },
          ]);

      if (dbError) {
        alert(dbError.message);
        return;
      }

      alert("Account created successfully!");

    } catch (err) {

      console.log(err);

    }

  };

  return (

    <div className="login-form">

      <h1>

        Create Account

      </h1>

      <p className="subtitle">

        Join SkillSphere and begin your journey.

      </p>


      <div className="field">

        <label>

          Role

        </label>

        <div className="input-box">

          <select
            value={role}
            onChange={(e) =>
              setRole(e.target.value)
            }
          >

            <option value="teacher">

              Teacher

            </option>

            <option value="school_admin">

              School Admin

            </option>

            <option value="individual">

              Individual

            </option>

          </select>

        </div>

      </div>


      <div className="field">

        <label>

          Full Name

        </label>

        <div className="input-box">

          <input
            type="text"
            value={name}
            placeholder="John Doe"
            onChange={(e) =>
              setName(e.target.value)
            }
          />

        </div>

      </div>


      <div className="field">

        <label>

          Email

        </label>

        <div className="input-box">

          <input
            type="email"
            value={email}
            placeholder="yourmail@example.com"
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

        </div>

      </div>


      <div className="field">

        <label>

          Password

        </label>

        <div className="input-box">

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
              setShowPassword(
                !showPassword
              )
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


      <button
        className="login-btn"
        onClick={handleSignup}
      >

        Create Account

      </button>

    </div>

  );

}

export default SignupForm;