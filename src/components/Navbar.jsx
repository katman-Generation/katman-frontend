import { Link } from 'react-router-dom'
import logo from '../assets/katmanGaming.png'

function Navbar() {
  return (
    <nav className="bg-blue-900 px-6 py-4 flex items-center justify-between">

      <div className="flex items-center gap-3">
        <img src={logo} alt="Logo" className="h-10 w-10 object-contain" />
        <span className="text-white font-bold text-xl">KatmanHub</span>
      </div>

      <div className="flex gap-8 text-white font-medium">
        <Link className="hover:text-yellow-400 transition" to="/">Home</Link>
        <Link className="hover:text-yellow-400 transition" to="/tournaments">Tournaments</Link>
        <Link className="hover:text-yellow-400 transition" to="/shop">Shop</Link>
        <Link className="hover:text-yellow-400 transition" to="/about">Who are we?</Link>
        <Link className="hover:text-yellow-400 transition" to="/">get intouch</Link>
      </div>

    </nav>
  )
}

export default Navbar
