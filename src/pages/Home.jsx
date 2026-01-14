function Home() {
  return (
    <div className="text-white">
      {/* Hero Section */}
      <section
        className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-cover bg-center"
        style={{
            backgroundImage: "linear-gradient(rgba(3, 70, 148, 0.9), rgba(3, 70, 148, 0.9)), url('/src/assets/ChelseaFC.jpeg')",
        }}
      >
        <h1 className="text-5xl font-extrabold mb-4">
          Welcome to <span className="text-yellow-400">KatmanHub</span>
        </h1>

        <p className="text-lg max-w-2xl mb-6">
          The ultimate gaming lounge for tournaments, competitions,
          and community — built for true fans.
        </p>

        <button className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 transition">
          Join the Action
        </button>
      </section>

      {/* Features Section */}
      <section className="bg-blue-800 py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          What We Offer
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Feature 1 */}
          <div className="bg-blue-900 p-8 rounded-xl text-center hover:scale-105 transition">
            <h3 className="text-2xl font-bold mb-4">🎮 Gaming Lounge</h3>
            <p className="text-sm text-gray-200">
              High-end gaming setups, streaming rooms, and casual play
              for everyone.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-blue-900 p-8 rounded-xl text-center hover:scale-105 transition">
            <h3 className="text-2xl font-bold mb-4">🏆 Tournaments</h3>
            <p className="text-sm text-gray-200">
              Compete in online and physical tournaments across
              multiple games.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-blue-900 p-8 rounded-xl text-center hover:scale-105 transition">
            <h3 className="text-2xl font-bold mb-4">🛒 Shop & Merch</h3>
            <p className="text-sm text-gray-200">
              Custom shirts, caps, mugs, and gaming accessories
              designed for fans.
            </p>
          </div>

        </div>
      </section>
      {/* Call To Action Section */}
      <section className="bg-blue-900 py-20 px-6 text-center">
        <h2 className="text-4xl font-extrabold mb-6">
           Ready to Level Up Your Game?
        </h2>

        <p className="max-w-2xl mx-auto mb-10 text-gray-200">
          Join KatmanHub today and take part in competitive tournaments,
          premium gaming experiences, and exclusive community events.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-yellow-300 transition">
                Join a Tournament
            </button>

            <button className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-lg font-bold hover:bg-yellow-400 hover:text-blue-900 transition">
                Visit the Lounge
            </button>
        </div>
      </section>

    </div>
  )
}

export default Home
