import React from 'react'

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 border-t border-white/10">
      <div className="container mx-auto px-6 md:px-10 lg:px-16 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">© 2025 GF Visual Novel — Tüm hakları saklıdır.</p>
          <div className="flex items-center gap-4 text-white/70 text-sm">
            <a href="#characters" className="hover:text-white">Karakterler</a>
            <a href="#map" className="hover:text-white">Harita</a>
            <a href="#about" className="hover:text-white">Hakkında</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
