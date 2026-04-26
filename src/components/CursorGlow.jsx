import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const glowRef = useRef(null)

  useEffect(() => {
    const glow = glowRef.current
    if (!glow) return

    let mouseX = -200, mouseY = -200
    let currentX = -200, currentY = -200
    let raf

    const onMove = e => { mouseX = e.clientX; mouseY = e.clientY }
    window.addEventListener('mousemove', onMove, { passive: true })

    const tick = () => {
      // Lerp towards mouse position for smooth lag
      currentX += (mouseX - currentX) * 0.1
      currentY += (mouseY - currentY) * 0.1
      glow.style.transform = `translate(${currentX - 200}px, ${currentY - 200}px)`
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div ref={glowRef} className="cursor-glow" aria-hidden="true" />
      <style>{`
        .cursor-glow {
          position: fixed;
          top: 0; left: 0;
          width: 400px; height: 400px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(240,160,171,0.18) 0%, transparent 70%);
          pointer-events: none;
          z-index: 9999;
          will-change: transform;
          transition: opacity 0.3s;
        }
        @media (hover: none) { .cursor-glow { display: none; } }
      `}</style>
    </>
  )
}
