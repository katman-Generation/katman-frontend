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
          Welcome to <span className="text-yellow-400"> the world of KatmanHub</span>
        </h1>

        <p className="text-lg max-w-2xl mb-6">
          the place where gamers unite, tilent shines, dreams take flight and voices are heard.
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
            <h3 className="text-2xl font-bold mb-4">🎮 Gaming</h3>
            <p className="text-sm text-gray-200">
              Play your favorite ps5, xbox, pc, and vr games in our
              abusolutely epic gaming lounge.with also board games and pool games available.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-blue-900 p-8 rounded-xl text-center hover:scale-105 transition">
            <h3 className="text-2xl font-bold mb-4">🏆 Tournaments</h3>
            <p className="text-sm text-gray-200">
              we host a wide variety of tournaments for all games giving out amazing prizes to the winners.
              come show us wwhat you can do and take home the glory.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-blue-900 p-8 rounded-xl text-center hover:scale-105 transition">
            <h3 className="text-2xl font-bold mb-4">🛒 Shop & Merch</h3>
            <p className="text-sm text-gray-200">
              we stocked a variety of personalized home equipments, from tshirts, mugs, caps, met and more.
              all designed for our beloved gamers and fans.
            </p>
          </div>
          {/* Feature 4 */}
          <div className="bg-blue-900 p-8 rounded-xl text-center hover:scale-105 transition">
            <h3 className="text-2xl font-bold mb-4">Live Stream</h3>
            <p className="text-sm text-gray-200">
              we live stream all tournaments and special events on our
              platform so you can watch the action from anywhere. so if you looking for a place to stream 
              your our favorite games, activities and more, we got you covered.
            </p>
          </div>
          {/* Feature 5 */}
          <div className="bg-blue-900 p-8 rounded-xl text-center hover:scale-105 transition">
            <h3 className="text-2xl font-bold mb-4">Podcast</h3>
            <p className="text-sm text-gray-200">
              we host weekly podcast discussing our main topics here in katmanhub,
              and educating our community and reminding everyone about who we are as zimbabweans.
            </p>
          </div>
          {/* Feature 6 */}
          <div className="bg-blue-900 p-8 rounded-xl text-center hover:scale-105 transition">
            <h3 className="text-2xl font-bold mb-4">We Host Events</h3>
            <p className="text-sm text-gray-200">
              make your events memorable by hosting them at katmanhub.
              we have the perfect space and facilities for gaming parties, tournaments, and more.
            </p>
          </div>
          {/* Feature 7 */}
          <div className="bg-blue-900 p-8 rounded-xl text-center hover:scale-105 transition">
            <h3 className="text-2xl font-bold mb-4">photography</h3>
            <p className="text-sm text-gray-200">
              we offer professional photography services to capture your best gaming moments,
              events, and more. our skilled photographers know how to bring out the best in every shot.
              from birthdays, weddings, to gaming events, we got you covered.
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
                See a Tournament
            </button>

            <button className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-lg font-bold hover:bg-yellow-400 hover:text-blue-900 transition">
                Lean More About Us
            </button>
        </div>
      </section>

    </div>
  )
}

export default Home
