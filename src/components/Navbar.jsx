import React from 'react'
import { Menu } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40 px-4 py-3">
          <Link to="/" className="flex items-center gap-2 text-white font-semibold">
            <span className="inline-block h-8 w-8 rounded-lg bg-emerald-500"></span>
            GF Visual Novel
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-white/80">
            <Link to="/about" className="hover:text-white">Hakkında</Link>
            <Link to="/characters" className="hover:text-white">Karakterler</Link>
            <Link to="/stories" className="hover:text-white">Hikayeler</Link>
            <Link to="/map" className="hover:text-white">Harita</Link>
            <Link to="/systems" className="hover:text-white">Sistemler</Link>
            <Link to="/vibe" className="hover:text-white">Atmosfer</Link>
          </nav>
          <button className="md:hidden text-white/80" aria-label="Menu">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  )
}
