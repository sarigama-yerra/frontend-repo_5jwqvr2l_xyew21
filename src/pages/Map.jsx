import React from 'react'
import Spline from '@splinetool/react-spline'
import { Map } from 'lucide-react'

export default function WorldMap() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,197,94,0.08),transparent_60%)]" />
      <div className="relative container mx-auto px-0 md:px-10 lg:px-16">
        <div className="px-6 md:px-0 flex items-start gap-4">
          <div className="mt-1 rounded-xl bg-white/10 border border-white/10 p-2 text-white">
            <Map className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <h1 className="px-0 md:px-6 text-white text-3xl md:text-4xl font-extrabold mb-4">Dünya Haritası</h1>
            <p className="px-0 md:px-6 text-white/80 max-w-3xl mb-6">Etkileşimli 3D harita: kasaba merkezinden ormanlara kadar önemli bölgeleri gez.</p>
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-black/30">
              <div className="h-[55vh] w-full">
                <Spline scene="https://prod.spline.design/atN3lqky4IzF-KEP/scene.splinecode" style={{ width: '100%', height: '100%' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
