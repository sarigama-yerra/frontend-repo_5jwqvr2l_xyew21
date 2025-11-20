import React, { useRef, useState } from 'react'

function Eye({ mouse, container }) {
  const socketRef = useRef(null)

  // Compute pupil offset towards mouse within a max radius
  const getOffset = () => {
    const max = 6 // px, how far the pupil can travel inside the eye
    if (!socketRef.current || !container.current || mouse.x === null) return { x: 0, y: 0 }

    const eyeRect = socketRef.current.getBoundingClientRect()
    const contRect = container.current.getBoundingClientRect()

    // Mouse position relative to viewport already; compute relative to eye center
    const eyeCenterX = eyeRect.left + eyeRect.width / 2
    const eyeCenterY = eyeRect.top + eyeRect.height / 2

    const dx = mouse.x - eyeCenterX
    const dy = mouse.y - eyeCenterY
    const dist = Math.hypot(dx, dy) || 1
    const nx = dx / dist
    const ny = dy / dist

    return { x: nx * max, y: ny * max }
  }

  const off = getOffset()

  return (
    <div ref={socketRef} className="relative h-6 w-6 rounded-full bg-white/95 shadow-inner overflow-hidden">
      <div
        className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-900 shadow"
        style={{ transform: `translate(calc(-50% + ${off.x}px), calc(-50% + ${off.y}px))` }}
      />
    </div>
  )
}

function CharacterCard({ name, color, mouse, container }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-4 sm:p-5">
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
      <div className="flex items-center gap-4">
        <div className={`relative h-16 w-16 shrink-0 rounded-xl`} style={{ background: color }}>
          {/* Face */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex items-center gap-2">
              <Eye mouse={mouse} container={container} />
              <Eye mouse={mouse} container={container} />
            </div>
          </div>
          {/* Subtle shine */}
          <div className="pointer-events-none absolute -top-6 -left-6 h-16 w-16 rounded-full bg-white/20 blur-xl" />
        </div>
        <div>
          <p className="text-sm text-white/60">Karakter</p>
          <h3 className="text-white font-semibold leading-tight">{name}</h3>
          <p className="text-xs text-white/60 mt-1">Bakışlar, imleci takip ediyor.</p>
        </div>
      </div>
    </div>
  )
}

export default function CharactersGaze() {
  const containerRef = useRef(null)
  const [mouse, setMouse] = useState({ x: null, y: null })

  const handleMouseMove = (e) => {
    setMouse({ x: e.clientX, y: e.clientY })
  }

  const handleMouseLeave = () => setMouse({ x: null, y: null })

  const characters = [
    { name: 'Dipper-esintili Araştırmacı', color: 'linear-gradient(135deg, #22d3ee 0%, #0ea5e9 100%)' },
    { name: 'Mabel-esintili İyimser', color: 'linear-gradient(135deg, #f472b6 0%, #a855f7 100%)' },
    { name: 'Gizemli Rehber', color: 'linear-gradient(135deg, #34d399 0%, #10b981 100%)' },
    { name: 'Orman Bekçisi', color: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)' }
  ]

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {characters.map((c, idx) => (
          <CharacterCard key={idx} name={c.name} color={c.color} mouse={mouse} container={containerRef} />
        ))}
      </div>
    </div>
  )
}
