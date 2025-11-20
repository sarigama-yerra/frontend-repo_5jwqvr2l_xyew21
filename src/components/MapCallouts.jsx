import React from 'react'
import { motion } from 'framer-motion'

const callouts = [
  { key: 'town', title: 'Kasaba Meydanı', desc: 'Pazar, görev panosu ve zanaat atölyeleri burada.', x: '18%', y: '62%' },
  { key: 'forest', title: 'Sisli Orman', desc: 'Nadir bitkiler ve gizli patikalarla dolu.', x: '42%', y: '48%' },
  { key: 'mountain', title: 'Granit Sırtı', desc: 'Rüzgarlı zirveler ve antik işaretler.', x: '66%', y: '22%' },
  { key: 'shore', title: 'Mavi Kıyılar', desc: 'Balıkçı iskeleleri ve deniz mağaraları.', x: '78%', y: '68%' },
  { key: 'ruins', title: 'Yitik Harabeler', desc: 'Terk edilmiş sütunlar ve saklı geçitler.', x: '55%', y: '74%' },
  { key: 'fort', title: 'Batı Hisarı', desc: 'Surlarla çevrili bir ileri karakol.', x: '30%', y: '28%' },
]

export default function MapCallouts({ visibleKeys = [] }) {
  return (
    <div className="absolute inset-0 pointer-events-none select-none">
      {callouts.filter(c => visibleKeys.includes(c.key)).map((c) => (
        <motion.div
          key={c.key}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 220, damping: 20 }}
          className="absolute"
          style={{ left: c.x, top: c.y }}
        >
          <div className="relative -translate-x-1/2 -translate-y-full">
            <div className="pointer-events-auto backdrop-blur-xl bg-black/60 border border-white/10 rounded-xl p-3 shadow-lg">
              <div className="text-white font-semibold leading-tight">{c.title}</div>
              <div className="text-white/70 text-sm mt-0.5 max-w-[220px]">{c.desc}</div>
            </div>
            <div className="mx-auto w-px h-4 bg-white/30" />
            <div className="mx-auto w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_16px_#34d399]" />
          </div>
        </motion.div>
      ))}
    </div>
  )
}
