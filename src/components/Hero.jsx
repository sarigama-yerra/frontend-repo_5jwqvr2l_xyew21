import React from 'react'
import Spline from '@splinetool/react-spline'
import { Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative h-[88vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/atN3lqky4IzF-KEP/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 md:px-10 lg:px-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur px-3 py-1 text-white/90 mb-4">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs tracking-wide">Gravity Falls esintili görsel roman</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.35)] leading-tight">
              Gizemli kasabaya hoş geldin
            </h1>
            <p className="mt-4 text-white/90 md:text-lg max-w-xl">
              Karakterlerin geçmişlerini keşfet, sırları çöz ve kendi seçimlerinle hikâyeyi şekillendir. Oyun evrenine ait tüm bilgiler tek bir yerde.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#characters" className="px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-medium transition-colors">Karakterleri Keşfet</a>
              <a href="#map" className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium transition-colors">Dünya Haritası</a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-slate-950/90" />
    </section>
  )
}
