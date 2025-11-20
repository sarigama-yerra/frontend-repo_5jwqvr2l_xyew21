import React from 'react'
import { Sparkles } from 'lucide-react'

export default function Vibe() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.08),transparent_60%)]" />
      <div className="relative container mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex items-start gap-4">
          <div className="mt-1 rounded-xl bg-white/10 border border-white/10 p-2 text-white">
            <Sparkles className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <h1 className="text-white text-3xl md:text-4xl font-extrabold mb-2">Ton ve Atmosfer</h1>
            <p className="text-white/80 max-w-3xl">Neon parıltılar, duman dokuları ve loş geçişler ile oluşturulmuş bir sanat yönergesi. Renk paletleri ve tipografi örnekleri burada.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
