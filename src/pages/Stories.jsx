import React from 'react'
import { ScrollText } from 'lucide-react'

export default function Stories() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(147,197,253,0.08),transparent_60%)]" />
      <div className="relative container mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex items-start gap-4">
          <div className="mt-1 rounded-xl bg-white/10 border border-white/10 p-2 text-white">
            <ScrollText className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <h1 className="text-white text-3xl md:text-4xl font-extrabold mb-2">Hikayeler</h1>
            <p className="text-white/80 max-w-3xl">Başlangıç hikâyeleri, dallanan seçimler ve çoklu sonlar için zengin görselli bir rehber.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
