import React from 'react'
import { TreePine, Building2, Mountain, Waves, Landmark, Castle, Compass, MapPin } from 'lucide-react'

const legendItems = [
  { key: 'town', label: 'Kasaba', icon: Building2, color: 'bg-emerald-500/20 text-emerald-300 border-emerald-400/30' },
  { key: 'forest', label: 'Orman', icon: TreePine, color: 'bg-green-500/20 text-green-300 border-green-400/30' },
  { key: 'mountain', label: 'Dağ', icon: Mountain, color: 'bg-slate-500/20 text-slate-200 border-slate-400/30' },
  { key: 'shore', label: 'Kıyı', icon: Waves, color: 'bg-cyan-500/20 text-cyan-300 border-cyan-400/30' },
  { key: 'ruins', label: 'Harabe', icon: Landmark, color: 'bg-amber-500/20 text-amber-300 border-amber-400/30' },
  { key: 'fort', label: 'Hisar', icon: Castle, color: 'bg-purple-500/20 text-purple-300 border-purple-400/30' },
]

export default function MapLegend({ activeKeys = [], onToggle = () => {} }) {
  return (
    <div className="backdrop-blur-xl bg-black/30 border border-white/10 rounded-2xl p-3 md:p-4 flex flex-wrap gap-2 items-center">
      <div className="hidden md:flex items-center gap-2 text-white/60 text-xs uppercase tracking-wide">
        <Compass className="w-4 h-4" />
        <span>Bölgeler</span>
      </div>
      {legendItems.map(({ key, label, icon: Icon, color }) => {
        const active = activeKeys.includes(key)
        return (
          <button
            key={key}
            onClick={() => onToggle(key)}
            className={`group inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border transition-all ${active ? color + ' ring-1 ring-white/30 shadow-[0_0_20px_rgba(255,255,255,0.06)]' : 'bg-white/[0.04] text-white/70 border-white/10 hover:bg-white/[0.08] hover:text-white'}`}
            aria-pressed={active}
          >
            <Icon className="w-4 h-4" />
            <span className="text-sm font-medium">{label}</span>
          </button>
        )
      })}
      <div className="ml-auto flex items-center gap-2 text-white/60 text-xs">
        <MapPin className="w-4 h-4" />
        <span className="hidden sm:inline">Etkileşimli bölgeler</span>
      </div>
    </div>
  )
}
