import { useState } from "react";

const Join = () => {
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);

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
    setLoading(true);

    try {
      const res = await fetch(
        "https://katmantech-production.up.railway.app/katmanhub/members/join/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (!res.ok) throw new Error("Submission failed");

      alert("Welcome to the Katmanhub pack 🐺 We’ll be in touch.");
      setAgreed(false);
    } catch (err) {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-blue-950 text-white px-6 py-16">
      <div className="max-w-4xl mx-auto">

        {/* 🎥 Video Placeholder */}
        <div className="w-full h-64 md:h-96 bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl flex items-center justify-center mb-12 shadow-lg">
          <p className="text-gray-300 text-center px-6">
            🎬 <span className="font-semibold text-white">Video coming soon</span>
            <br />
            A short message from Katmanhub explaining the vision, the pack,
            and how we build together.
          </p>
        </div>

        {/* 🧭 Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-400 mb-6">
          Join the Katmanhub Pack
        </h1>

        {/* 📝 Intro */}
        <div className="space-y-4 text-gray-300 text-lg mb-10">
          <p>
            Katmanhub is <span className="text-white font-semibold">not hiring employees</span>.
            We are building a creative ecosystem — a place where passionate
            people come together to create, learn, experiment, and grow.
          </p>

          <p>
            Everyone who joins the pack will be interviewed. If there is
            alignment, a <span className="text-white font-semibold">personalized agreement</span>{" "}
            will be prepared based on your contribution, commitment, and vision.
          </p>
        </div>

        {/* 🎯 Focus Areas */}
        <div className="bg-blue-900/80 rounded-2xl p-8 mb-12 shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-white">
            We’re building with people passionate about:
          </h2>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-200">
            <li>• Tech & Software</li>
            <li>• Gaming & Streaming</li>
            <li>• Audio, Music & Podcasts</li>
            <li>• Acting & Modeling</li>
            <li>• Dance & Fashion</li>
            <li>• Writing (novels, scripts, magazines)</li>
            <li>• Photography & Videography</li>
            <li>• Creative Entrepreneurship</li>
          </ul>
        </div>

        {/* ⚠️ Agreement */}
        <div className="mb-10 bg-blue-900/60 p-6 rounded-xl border border-blue-800">
          <label className="flex gap-4 cursor-pointer">
            <input
              type="checkbox"
              className="mt-1 w-5 h-5 accent-yellow-400"
              checked={agreed}
              onChange={() => setAgreed(!agreed)}
            />
            <span className="text-gray-300">
              I understand that Katmanhub is a creative hub, not an employer,
              and participation is based on collaboration, contribution,
              and mutual agreement.
            </span>
          </label>
        </div>

        {/* 📝 Application Form */}
        {agreed && (
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-blue-900/90 backdrop-blur p-8 rounded-2xl shadow-lg"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                name="first_name"
                placeholder="First Name"
                onChange={handleChange}
                required
                className="p-3 rounded bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <input
                name="surname"
                placeholder="Surname"
                onChange={handleChange}
                required
                className="p-3 rounded bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={handleChange}
              required
              className="w-full p-3 rounded bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />

            <input
              name="phone_number"
              placeholder="Phone Number"
              onChange={handleChange}
              className="w-full p-3 rounded bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />

            <input
              type="date"
              name="date_of_birth"
              onChange={handleChange}
              className="w-full p-3 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />

            <textarea
              name="passion"
              placeholder="What are you passionate about?"
              onChange={handleChange}
              required
              rows={3}
              className="w-full p-3 rounded bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />

            <textarea
              name="contribution"
              placeholder="How would you like to contribute to Katmanhub?"
              onChange={handleChange}
              required
              rows={4}
              className="w-full p-3 rounded bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full md:w-auto bg-yellow-400 text-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-yellow-300 transition disabled:opacity-60"
            >
              {loading ? "Submitting..." : "Submit Application"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Join;
