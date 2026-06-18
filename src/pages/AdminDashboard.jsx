import { useState } from "react";
import { useEffect } from "react";
import { supabase } from "../lib/supabase";
function AdminDashboard() {

  const [organizationName, setOrganizationName] = useState("");
  const [userType, setUserType] = useState("school");
  const [assessmentType, setAssessmentType] = useState("main");
  const [maxUses, setMaxUses] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [googleFormUrl, setGoogleFormUrl] = useState("");
const [generatedCode, setGeneratedCode] = useState("");
const [loading, setLoading] = useState(false);
const [codes, setCodes] = useState([]);
const [search, setSearch] = useState("");
const fetchCodes = async () => {

  const { data, error } = await supabase
    .from("access_codes")
    .select("*")
    .order("created_at", { ascending: false });

  if (!error) {

    setCodes(data);

  }

};
useEffect(() => {

  fetchCodes();

}, []);
const generateAssessmentCode = async () => {

  try {

    setLoading(true);

    // Prefix

    let prefix = "";

    if (userType === "school") {

      prefix = organizationName
        .trim()
        .split(" ")[0]
        .toUpperCase();

    } else {

      prefix = "IND";

    }

    // MAIN or X

    const typeCode =
      assessmentType === "main"
        ? "MAIN"
        : "X";

    // Random suffix

    const randomPart = Math.random()
      .toString(36)
      .substring(2, 6)
      .toUpperCase();

    const code =
      `${prefix}-${typeCode}-${randomPart}`;

    // Insert into Supabase

   const { data, error } = await supabase
  .from("access_codes")
  .insert([
    {
      code,
      user_type: userType,
      form_type: assessmentType,
      organization_name: organizationName,
      google_form_url: googleFormUrl,
      max_uses: Number(maxUses),
      expires_at: expiryDate || null,
      active: true,
      current_uses: 0
    }
  ])
  .select();

console.log("Inserted row:", data);
console.log("Error:", error);

    if (error) {

      alert(error.message);

      return;

    }

    setGeneratedCode(code);
fetchCodes();
  } finally {

    setLoading(false);

  }

};
const deactivateCode = async (id) => {

  const { error } = await supabase
    .from("access_codes")
    .update({
      active: false
    })
    .eq("id", id);

  if (error) {

    alert(error.message);
    return;

  }

  fetchCodes();

};


const reactivateCode = async (id) => {

  const { error } = await supabase
    .from("access_codes")
    .update({
      active: true
    })
    .eq("id", id);

  if (error) {

    alert(error.message);
    return;

  }

  fetchCodes();

};
const deleteCode = async (id) => {

  const confirmed = window.confirm(
    "Delete this code permanently?"
  );

  if (!confirmed) return;

  await supabase
    .from("access_codes")
    .delete()
    .eq("id", id);

  fetchCodes();

};
  return (
    <div className="min-h-screen bg-[#050816] text-white px-6 py-12">

      <div className="mx-auto max-w-3xl">

        <h1 className="text-5xl font-bold">
          SkillSphere Admin
        </h1>

        <p className="mt-3 text-gray-400">
          Assessment Code Generator
        </p>

        <div
          className="
            mt-12
            rounded-[32px]
            border border-white/10
            bg-white/[0.03]
            p-8
            backdrop-blur-3xl
          "
        >

          {/* Organization Name */}

          <div>
            <label className="text-sm text-gray-400">
              Organization Name
            </label>

            <input
              type="text"
              value={organizationName}
              onChange={(e) =>
                setOrganizationName(e.target.value)
              }
              placeholder="Delhi Public School"
              className="
                mt-3
                h-14
                w-full
                rounded-2xl
                border border-white/10
                bg-white/5
                px-5
                outline-none
              "
            />
          </div>

          {/* User Type */}

          <div className="mt-6">

            <label className="text-sm text-gray-400">
              User Type
            </label>

            <select
  value={userType}
  onChange={(e) => setUserType(e.target.value)}
  className="
    mt-3
    h-14
    w-full
    rounded-2xl
    border border-white/10
    bg-white/5
    px-5
    text-white
    outline-none
    appearance-none
  "
>
  <option value="school" className="bg-[#08101F] text-white">
    School
  </option>

  <option value="individual" className="bg-[#08101F] text-white">
    Individual
  </option>
</select>

          </div>

          {/* Assessment Type */}

          <div className="mt-6">

            <label className="text-sm text-gray-400">
              Assessment Type
            </label>
<select
  value={assessmentType}
  onChange={(e) => setAssessmentType(e.target.value)}
  className="
    mt-3
    h-14
    w-full
    rounded-2xl
    border border-white/10
    bg-white/5
    px-5
    text-white
    outline-none
    appearance-none
  "
>
  <option value="main" className="bg-[#08101F] text-white">
    Main
  </option>

  <option value="demo" className="bg-[#08101F] text-white">
    Demo
  </option>
</select>
          </div>

          {/* Max Uses */}

          <div className="mt-6">

            <label className="text-sm text-gray-400">
              Max Uses
            </label>

            <input
              type="number"
              value={maxUses}
              onChange={(e) =>
                setMaxUses(e.target.value)
              }
              placeholder="100"
              className="
                mt-3
                h-14
                w-full
                rounded-2xl
                border border-white/10
                bg-white/5
                px-5
                outline-none
              "
            />

          </div>

          {/* Expiry Date */}

          <div className="mt-6">

            <label className="text-sm text-gray-400">
              Expiry Date (Optional)
            </label>

            <input
              type="date"
              value={expiryDate}
              onChange={(e) =>
                setExpiryDate(e.target.value)
              }
              className="
                mt-3
                h-14
                w-full
                rounded-2xl
                border border-white/10
                bg-white/5
                px-5
                outline-none
              "
            />

          </div>

          {/* Google Form URL */}

          <div className="mt-6">

            <label className="text-sm text-gray-400">
              Google Form URL
            </label>

            <input
              type="text"
              value={googleFormUrl}
              onChange={(e) =>
                setGoogleFormUrl(e.target.value)
              }
              placeholder="https://forms.gle/..."
              className="
                mt-3
                h-14
                w-full
                rounded-2xl
                border border-white/10
                bg-white/5
                px-5
                outline-none
              "
            />

          </div>

          {/* Generate Button */}

          <button
  onClick={generateAssessmentCode}
  disabled={loading}
  className="
    mt-10
    h-14
    w-full
    rounded-2xl
    bg-[#D4AF37]
    font-semibold
    text-[#050816]
  "
>
  {loading
    ? "Generating..."
    : "Generate Assessment Code"}
</button>
{
generatedCode && (

<div
className="
mt-8
rounded-2xl
border border-green-500/30
bg-green-500/10
p-6
"
>

<p className="text-gray-400">
Generated Code
</p>

<h2 className="mt-3 text-3xl font-bold text-green-400">
{generatedCode}
</h2>

</div>

)
}
<div className="mt-16">

  <h2 className="text-3xl font-bold">
    Active Codes
  </h2>

  <input
    type="text"
    placeholder="Search codes..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="
      mt-6
      h-14
      w-full
      rounded-2xl
      border border-white/10
      bg-white/5
      px-5
      outline-none
    "
  />

</div>
<div className="mt-8 space-y-4">

{
codes
.filter(
(code) =>
code.code
.toLowerCase()
.includes(search.toLowerCase())
)
.map((code) => (

<div
key={code.id}
className="
rounded-3xl
border border-white/10
bg-white/[0.03]
p-6
"
>

<div className="flex items-center justify-between">

<div>

<h3 className="text-2xl font-bold">
{code.code}
</h3>

<p className="mt-2 text-gray-400">
{code.organization_name}
</p>
<p className="mt-1 text-sm text-gray-500">

Created:

{
new Date(
code.created_at
).toLocaleDateString()
}

</p>
<div className="mt-4 flex flex-wrap gap-3">

  <span
   className={`
rounded-full
px-3
py-1
text-xs

${
code.user_type === "school"
?
"bg-sky-500/20 text-sky-400"
:
"bg-pink-500/20 text-pink-400"
}
`}
  >
    {code.user_type}
  </span>

  <span
   className={`
rounded-full
px-3
py-1
text-xs

${
code.form_type === "main"
?
"bg-emerald-500/20 text-emerald-400"
:
"bg-purple-500/20 text-purple-400"
}
`}
  >
    {code.form_type}
  </span>

  <span
    className="
      rounded-full
      bg-yellow-500/20
      px-3
      py-1
      text-xs
      text-yellow-400
    "
  >
    {code.current_uses} / {code.max_uses}
    {
code.expires_at && (

<span
className="
rounded-full
bg-orange-500/20
px-3
py-1
text-xs
text-orange-400
"
>
Expires:
{
new Date(
code.expires_at
).toLocaleDateString()
}
</span>

)
}
  </span>

</div>
</div>

<div className="flex flex-wrap items-center gap-3">

  {/* Copy */}

  <button
    onClick={() => {
      navigator.clipboard.writeText(code.code);
      alert("Code copied!");
    }}
    className="
      rounded-xl
      border border-white/10
      px-4
      py-2
      text-sm
      transition
      hover:bg-white/10
    "
  >
    Copy
  </button>

  {/* Activate / Deactivate */}

  {
    code.active ? (

      <button
        onClick={() =>
          deactivateCode(code.id)
        }
        className="
          rounded-xl
          bg-red-500/20
          px-4
          py-2
          text-sm
          text-red-400
        "
      >
        Deactivate
      </button>

    ) : (

      <button
        onClick={() =>
          reactivateCode(code.id)
        }
        className="
          rounded-xl
          bg-green-500/20
          px-4
          py-2
          text-sm
          text-green-400
        "
      >
        Activate
      </button>

    )
  }

  {/* Delete */}

  <button
    onClick={() =>
      deleteCode(code.id)
    }
    className="
      rounded-xl
      bg-red-900/20
      px-4
      py-2
      text-sm
      text-red-500
    "
  >
    Delete
  </button>

</div>
</div>

</div>

))
}

</div>

        </div>

      </div>

    </div>
  );
}

export default AdminDashboard;