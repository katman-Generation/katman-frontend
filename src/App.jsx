import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Tournaments from './pages/Tournaments'
import Shop from './pages/Shop'
import About from './pages/About'
import Join from './pages/Join'
import Members from './pages/Members'
import Tech from './pages/tech'
import Contact from './pages/contact'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tournaments" element={<Tournaments />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/join" element={<Join />} />
        <Route path="/members" element={<Members />} />
        <Route path="/tech" element={<Tech />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
