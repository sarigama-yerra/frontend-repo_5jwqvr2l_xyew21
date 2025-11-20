import React, { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { Map, Loader2, RotateCw, Move, ZoomIn, ZoomOut } from 'lucide-react'
import MapLegend from '../components/MapLegend'
import MapCallouts from '../components/MapCallouts'

export default function WorldMap() {
  const [active, setActive] = useState(['town', 'forest', 'mountain', 'shore', 'ruins', 'fort'])
  const [isLoaded, setIsLoaded] = useState(false)
  const [hint, setHint] = useState(true)

  const toggleKey = (key) => {
    setActive((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    )
  }

  const allOn = () => setActive(['town', 'forest', 'mountain', 'shore', 'ruins', 'fort'])
  const allOff = () => setActive([])

  const header = useMemo(() => (
    <div className="px-6 md:px-0 flex items-start gap-4">
      <div className="mt-1 rounded-xl bg-white/10 border border-white/10 p-2 text-white">
        <Map className="w-5 h-5" />
      </div>
      <div className="flex-1">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="px-0 md:px-6 text-white text-3xl md:text-4xl font-extrabold mb-2"
        >
          Dünya Haritası
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.5 }}
          className="px-0 md:px-6 text-white/80 max-w-3xl mb-4"
        >
          Etkileşimli 3D harita: kasaba merkezinden ormanlara kadar önemli bölgeleri gez. Filtrele, incele ve işaretlemeleri aç/kapat.
        </motion.p>
      </div>
    </div>
  ), [])

  return (
    <section className="relative py-16 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,197,94,0.08),transparent_60%)]" />
      <div className="relative container mx-auto px-0 md:px-10 lg:px-16">
        {header}

        <div className="mt-4 md:mt-6 px-6 md:px-0">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <MapLegend activeKeys={active} onToggle={toggleKey} />
            <div className="flex gap-2">
              <button onClick={allOn} className="px-3 py-1.5 text-sm rounded-xl bg-white/10 border border-white/10 text-white/80 hover:text-white hover:bg-white/15 transition">Hepsini Aç</button>
              <button onClick={allOff} className="px-3 py-1.5 text-sm rounded-xl bg-white/10 border border-white/10 text-white/80 hover:text-white hover:bg-white/15 transition">Hepsini Kapat</button>
            </div>
          </div>
        </div>

        <div className="mt-4 md:mt-6 rounded-2xl overflow-hidden border border-white/10 bg-black/40 relative">
          {/* 3D Canvas */}
          <div className="h-[60vh] md:h-[68vh] w-full relative">
            {!isLoaded && (
              <div className="absolute inset-0 grid place-items-center bg-gradient-to-b from-slate-950/60 to-slate-900/40">
                <div className="flex flex-col items-center gap-3 text-white/80">
                  <Loader2 className="w-6 h-6 animate-spin" />
                  <span className="text-sm">3D sahne yükleniyor…</span>
                </div>
              </div>
            )}
            <Spline
              onLoad={() => setIsLoaded(true)}
              scene="https://prod.spline.design/atN3lqky4IzF-KEP/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            {/* Callouts overlay */}
            <MapCallouts visibleKeys={active} />

            {/* Interaction hints */}
            {hint && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2"
              >
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/40 backdrop-blur-xl px-3 py-2 text-white/80">
                  <div className="flex items-center gap-1.5"><Move className="w-4 h-4" /><span className="text-xs">Sürükle</span></div>
                  <div className="flex items-center gap-1.5"><ZoomIn className="w-4 h-4" /><span className="text-xs">Yakınlaş</span></div>
                  <div className="flex items-center gap-1.5"><ZoomOut className="w-4 h-4" /><span className="text-xs">Uzaklaş</span></div>
                </div>
              </motion.div>
            )}

            {/* Floating controls */}
            <div className="absolute top-4 right-4 flex flex-col gap-2">
              <button onClick={() => setHint((h) => !h)} className="px-3 py-2 rounded-xl bg-white/10 border border-white/10 text-white/80 hover:bg-white/15">İpuçlarını {hint ? 'Gizle' : 'Göster'}</button>
              <button onClick={() => setIsLoaded(false)} className="px-3 py-2 rounded-xl bg-white/10 border border-white/10 text-white/80 hover:bg-white/15 inline-flex items-center gap-2">
                <RotateCw className="w-4 h-4" />
                <span>Yeniden Yükle</span>
              </button>
            </div>
          </div>
        </div>

        {/* Below map: contextual info */}
        <div className="px-6 md:px-0">
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <div className="text-white font-semibold mb-1">Katmanlar</div>
              <div className="text-white/70 text-sm">Bölgeleri filtreleyerek gezintiyi sadeleştir. Arazi yapısı ve işaretlemeler üst üste gösterilir.</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <div className="text-white font-semibold mb-1">Keşif İpuçları</div>
              <div className="text-white/70 text-sm">Dağ geçitleri ve orman içleri gizli bağlantılar sunabilir. İşaretlere dikkat et.</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <div className="text-white font-semibold mb-1">Performans</div>
              <div className="text-white/70 text-sm">3D sahne düşük güçlü cihazlarda daha uzun sürede açılabilir. İşaretlemeleri azaltmak yardımcı olur.</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
