import { useEffect, useState } from "react"
import api from "../api/axios";


function formatDate(dateString) {
  const date = new Date(dateString);

  return date.toLocaleString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function Tournaments() {
  const [tournaments, setTournaments] = useState([]);

  useEffect(() => {
    api.get("/katmangaming/tournaments/")
      .then((res) => {
        setTournaments(res.data);
      })
      .catch((err) => {
        console.error("failed to fetch tournaments", err);
      });
  }, []);

  return (
  <div className="min-h-screen bg-blue-900 text-white px-6 py-16">
    <h1 className="text-4xl font-bold text-center mb-12">
      Tournaments
    </h1>

    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {tournaments.map((tournament) => (
        <div
          key={tournament.id}
          className="bg-blue-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition flex flex-col justify-between"
        >
          {/* Header */}
          <div>
            <h2 className="text-2xl font-bold mb-1">
              {tournament.name}
            </h2>

            <p className="text-sm text-gray-300 mb-3">
              🎮 {tournament.game?.name}
            </p>

            {/* Dates */}
            <p className="text-sm text-gray-200 mb-1">
              📅 {formatDate(tournament.start_date)} – {formatDate(tournament.end_date)}
            </p>

            {/* Location */}
            {tournament.location && (
              <p className="text-sm text-gray-200 mb-1">
                📍 {tournament.location}
              </p>
            )}

            {/* Participants */}
            <p className="text-sm text-gray-200 mb-1">
              👥 Max Players: {tournament.max_participants}
            </p>

            {/* Entry Fee */}
            <p className="text-sm text-gray-200 mb-4">
              💰 Entry Fee:{" "}
              {tournament.entry_fee > 0 ? `$${tournament.entry_fee}` : "Free"}
            </p>

            {/* Rules Preview */}
            <p className="text-xs text-gray-300 line-clamp-3 mb-4">
              📜 {tournament.rules_text}
            </p>
          </div>

          {/* Footer */}
          <div className="mt-4">
            <span
              className={`block text-center py-2 rounded-lg font-bold text-sm ${
                tournament.status === "open"
                  ? "bg-green-500 text-white"
                  : tournament.status === "ongoing"
                  ? "bg-yellow-400 text-blue-900"
                  : tournament.status === "completed"
                  ? "bg-gray-500 text-white"
                  : "bg-blue-600 text-white"
              }`}
            >
              {tournament.status.toUpperCase()}
            </span>
          </div>
        </div>
      ))}
    </div>
  </div>
);
}

export default Tournaments
