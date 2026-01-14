import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Tournaments from './pages/Tournaments'
import Shop from './pages/Shop'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tournaments" element={<Tournaments />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </>
  )
}

export default App
