import { useEffect, useState } from "react";

const Members = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const res = await fetch(
          "https://katmantech-production.up.railway.app/katmanhub/members/"
        );
        const data = await res.json();
        setMembers(data);
      } catch (err) {
        console.error("Failed to load members");
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  return (
    <div className="min-h-screen bg-blue-950 text-white px-6 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-400 mb-6">
          The Katmanhub Pack
        </h1>

        <p className="text-gray-300 max-w-2xl mb-12">
          These are the creatives, builders, and thinkers shaping Katmanhub.
          Each member contributes their skills, vision, and energy to the pack.
        </p>

        {/* Loading */}
        {loading && (
          <p className="text-gray-400">Loading members...</p>
        )}

        {/* Members Grid */}
        {!loading && members.length === 0 && (
          <p className="text-gray-400">
            No members to display yet. The pack is forming 🐺
          </p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member) => (
            <div
              key={member.id}
              className="bg-blue-900/80 rounded-2xl p-6 shadow-lg hover:scale-[1.02] transition"
            >
              {/* Avatar */}
              <div className="flex justify-center mb-4">
                <div className="w-28 h-28 rounded-full bg-blue-800 flex items-center justify-center text-4xl font-bold text-yellow-400">
                  {member.first_name[0]}
                  {member.surname[0]}
                </div>
              </div>

              {/* Name */}
              <h3 className="text-xl font-bold text-center mb-2">
                {member.first_name} {member.surname}
              </h3>

              {/* Passion */}
              <p className="text-sm text-gray-300 mb-3">
                <span className="text-white font-semibold">Passion:</span>{" "}
                {member.passion}
              </p>

              {/* Contribution */}
              <p className="text-sm text-gray-300">
                <span className="text-white font-semibold">Contribution:</span>{" "}
                {member.contribution}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Members;
