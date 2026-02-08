import { useState } from "react";

const Join = () => {
  const [agreed, setAgreed] = useState(false);
  const [formData, setFormData] = useState({
    first_name: "",
    surname: "",
    email: "",
    phone_number: "",
    date_of_birth: "",
    passion: "",
    contribution: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "https://katmantech-production.up.railway.app/katmanhub/members/join/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (!res.ok) {
        throw new Error("Submission failed");
      }

      alert("Welcome to the Katmanhub pack 🐺 We’ll be in touch.");
    } catch (err) {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="text-white px-6 py-12 max-w-4xl mx-auto">
      {/* 🎥 Video Placeholder */}
      <div className="w-full h-64 md:h-96 bg-blue-900 rounded-xl flex items-center justify-center mb-10">
        <p className="text-gray-300 text-center px-4">
          🎬 Video coming soon  
          <br />
          A short message from Katmanhub explaining the vision and the pack
        </p>
      </div>

      {/* 🧭 Intro */}
      <h1 className="text-4xl font-extrabold mb-6 text-yellow-400">
        Join the Katmanhub Pack
      </h1>

      <p className="text-gray-300 mb-4">
        Katmanhub is <span className="text-white font-semibold">not recruiting employees</span>.
        We are building a creative ecosystem — a space where passionate people
        come together to create, learn, collaborate, and grow.
      </p>

      <p className="text-gray-300 mb-6">
        Everyone who applies will be interviewed. If there is alignment, a
        personalized agreement will be prepared based on your contribution,
        commitment, and vision.
      </p>

      {/* 🎯 Who This Is For */}
      <div className="bg-blue-900 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">We’re looking for people passionate about:</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-200">
          <li>• Tech & Software</li>
          <li>• Gaming & Streaming</li>
          <li>• Audio & Music</li>
          <li>• Acting & Modeling</li>
          <li>• Dance & Fashion</li>
          <li>• Writing novels, scripts & magazines</li>
          <li>• Photography & Videography</li>
          <li>• Creative entrepreneurship</li>
        </ul>
      </div>

      {/* ⚠️ Agreement */}
      <div className="mb-8">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            className="mt-1"
            checked={agreed}
            onChange={() => setAgreed(!agreed)}
          />
          <span className="text-gray-300">
            I understand that Katmanhub is a creative hub, not an employer, and
            that participation is based on collaboration, contribution, and
            mutual agreement.
          </span>
        </label>
      </div>

      {/* 📝 Form */}
      {agreed && (
        <form onSubmit={handleSubmit} className="space-y-4 bg-blue-900 p-6 rounded-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="first_name"
              placeholder="First Name"
              onChange={handleChange}
              required
              className="p-3 text-black rounded"
            />
            <input
              name="surname"
              placeholder="Surname"
              onChange={handleChange}
              required
              className="p-3 text-black rounded"
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            required
            className="w-full p-3 text-black rounded"
          />

          <input
            name="phone_number"
            placeholder="Phone Number"
            onChange={handleChange}
            className="w-full p-3 text-black rounded"
          />

          <input
            type="date"
            name="date_of_birth"
            onChange={handleChange}
            className="w-full p-3 text-black rounded"
          />

          <textarea
            name="passion"
            placeholder="What are you passionate about?"
            onChange={handleChange}
            required
            className="w-full p-3 text-black rounded"
          />

          <textarea
            name="contribution"
            placeholder="How would you like to contribute to Katmanhub?"
            onChange={handleChange}
            required
            className="w-full p-3 text-black rounded"
          />

          <button
            type="submit"
            className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 transition"
          >
            Submit Application
          </button>
        </form>
      )}
    </div>
  );
};

export default Join;
