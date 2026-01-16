import React from "react";
import hero from "../assets/about/wolve.jpeg";
import podcast from "../assets/about/pocast2.webp";
import film from "../assets/about/film2.jpeg";
import tech from "../assets/about/coder1.webp";
import gaming from "../assets/about/tourna2.jpg";

function About() {
  return (
    <div className="min-h-screen bg-blue-900 text-white">

      {/* Hero */}
      <div className="relative h-[75vh] flex items-center justify-center">
        <img
          src={hero}
          alt="KatmanHub vision"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative text-center px-6 max-w-4xl">
          <h1 className="text-5xl font-extrabold mb-6">
            🐺 KatmanHub
          </h1>
          <p className="text-xl text-gray-200 leading-relaxed">
            KatmanHub is an entertainment and technology hub built to unlock
            talent, protect culture, and create opportunities for Zimbabweans
            through creativity, media, gaming, and innovation.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20 space-y-28">

        {/* Why */}
        <section className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-yellow-400">
            Why KatmanHub Exists
          </h2>
          <p className="text-lg text-gray-200 leading-relaxed">
            Zimbabwe is full of raw talent — creators, gamers, developers,
            storytellers — but many lack access, platforms, mentorship, and
            visibility. KatmanHub exists to bridge that gap.
            <br /><br />
            We are building a space where talent is discovered, nurtured,
            showcased, and monetized — while staying true to who we are
            culturally.
          </p>
        </section>

        {/* Podcast */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <img src={podcast} alt="Podcast" className="rounded-xl shadow-lg" />
          <div>
            <h2 className="text-3xl font-bold mb-4 text-yellow-400">🎙 Podcasts</h2>
            <p className="text-gray-200 text-lg leading-relaxed">
              Podcasts are our starting point — a way to tell stories, spark
              conversations, and give a voice to thinkers, artists, innovators,
              and everyday people.
              <br /><br />
              Through dialogue, we educate, inspire, and preserve African
              narratives while connecting local voices to global audiences.
            </p>
          </div>
        </section>

        {/* Film */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-yellow-400">🎬 Film & Animation</h2>
            <p className="text-gray-200 text-lg leading-relaxed">
              Our future vision includes film production, animation, and
              documentaries that reflect African realities, dreams, and history.
              <br /><br />
              KatmanHub aims to develop filmmakers and animators who can compete
              globally while telling stories rooted in Zimbabwean identity.
            </p>
          </div>
          <img src={film} alt="Film and animation" className="rounded-xl shadow-lg" />
        </section>

        {/* Technology */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <img src={tech} alt="Technology" className="rounded-xl shadow-lg" />
          <div>
            <h2 className="text-3xl font-bold mb-4 text-yellow-400">💻 Technology</h2>
            <p className="text-gray-200 text-lg leading-relaxed">
              Technology is the backbone of our future.
              <br /><br />
              We aim to educate, build, and innovate — creating digital products,
              platforms, and solutions that empower young people and contribute
              to Zimbabwe’s economic growth.
            </p>
          </div>
        </section>

        {/* Gaming */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-yellow-400">🎮 Gaming</h2>
            <p className="text-gray-200 text-lg leading-relaxed">
              Gaming is more than entertainment — it is community, competition,
              creativity, and opportunity.
              <br /><br />
              From tournaments today to developing our own games tomorrow,
              KatmanHub aims to grow a strong African gaming ecosystem.
            </p>
          </div>
          <img src={gaming} alt="Gaming" className="rounded-xl shadow-lg" />
        </section>
        {/* Values */}
        <section className="text-center max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-yellow-400">
            Our Core Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            <div className="bg-blue-800 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">🐺 Unity</h3>
              <p className="text-gray-200 leading-relaxed">
                We are a pack. No lone wolves.
                Collaboration, respect, and shared success define how we build and grow
                together.
              </p>
            </div>

            <div className="bg-blue-800 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">🇿🇼 Culture & Identity</h3>
              <p className="text-gray-200 leading-relaxed">
                Our culture is our foundation.
                We tell African stories authentically and proudly, preserving identity
                while sharing it with the world.
              </p>
            </div>

            <div className="bg-blue-800 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">🎯 Excellence</h3>
              <p className="text-gray-200 leading-relaxed">
                We believe in discipline, consistency, and high standards.
                Talent matters, but commitment and quality define success.
              </p>
            </div>

            <div className="bg-blue-800 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">🌱 Growth</h3>
              <p className="text-gray-200 leading-relaxed">
                KatmanHub exists to create opportunities.
                We invest in learning, mentorship, and long-term growth for our pack.
              </p>
            </div>

            <div className="bg-blue-800 p-8 rounded-xl shadow-lg md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">⚡ Innovation & Courage</h3>
              <p className="text-gray-200 leading-relaxed">
                We are not afraid to dream big or start small.
                Innovation, experimentation, and bold thinking drive everything we do.
              </p>
            </div>

          </div>
        </section>

        {/* Join */}
        <section className="text-center pt-20 max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Join the Pack 🐺</h2>
          <p className="text-lg text-gray-200 leading-relaxed">
            KatmanHub is not just a platform — it is a pack of wolves.
            <br /><br />
            Creators, gamers, developers, filmmakers, storytellers, dreamers —
            if you have talent and vision, there is a place for you here.
            Together, we build. Together, we rise. Together, we put Zimbabwe on
            the map.
          </p>
        </section>

      </div>
    </div>
  );
}

export default About;

