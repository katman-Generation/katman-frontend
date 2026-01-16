import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/katmanGaming.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-900 px-6 py-4">
      <div className="flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="h-10 w-10 object-contain" />
          <span className="text-white font-bold text-xl">KatmanHub</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-white font-medium">
          <Link className="hover:text-yellow-400 transition" to="/">Home</Link>
          <Link className="hover:text-yellow-400 transition" to="/tournaments">Tournaments</Link>
          <Link className="hover:text-yellow-400 transition" to="/shop">Shop</Link>
          <Link className="hover:text-yellow-400 transition" to="/about">Who are we?</Link>
          <Link className="hover:text-yellow-400 transition" to="/contact">Get in touch</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-3xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-6 flex flex-col gap-4 text-white font-medium">
          <Link onClick={() => setMenuOpen(false)} to="/">Home</Link>
          <Link onClick={() => setMenuOpen(false)} to="/tournaments">Tournaments</Link>
          <Link onClick={() => setMenuOpen(false)} to="/shop">Shop</Link>
          <Link onClick={() => setMenuOpen(false)} to="/about">Who are we?</Link>
          <Link onClick={() => setMenuOpen(false)} to="/contact">Get in touch</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
