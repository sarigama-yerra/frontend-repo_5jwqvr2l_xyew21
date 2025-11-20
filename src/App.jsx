import React from 'react'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Characters from './pages/Characters'
import Stories from './pages/Stories'
import WorldMap from './pages/Map'
import Systems from './pages/Systems'
import Vibe from './pages/Vibe'

function Layout() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <main className="pt-20">{/* space for fixed navbar */}
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}> 
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/map" element={<WorldMap />} />
          <Route path="/systems" element={<Systems />} />
          <Route path="/vibe" element={<Vibe />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
