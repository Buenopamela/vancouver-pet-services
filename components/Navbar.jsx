'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-[#1E3A5F] text-white px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight" onClick={() => setOpen(false)}>
          <span className="text-[#16A34A]">Vancouver</span> Pet Services
        </Link>

        {/* Desktop nav */}
        <div className="hidden sm:flex items-center gap-4">
          <Link href="/listings" className="text-sm text-white/80 hover:text-white transition-colors">
            Browse services
          </Link>
          <Link
            href="/list-your-business"
            className="text-sm border border-white/40 hover:border-white px-4 py-2 rounded-lg transition-colors"
          >
            List your business
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-200 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-opacity duration-200 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-200 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="sm:hidden mt-4 pt-4 border-t border-white/20 flex flex-col gap-3">
          <Link
            href="/listings"
            className="text-sm text-white/80 hover:text-white transition-colors"
            onClick={() => setOpen(false)}
          >
            Browse services
          </Link>
          <Link
            href="/list-your-business"
            className="text-sm border border-white/40 hover:border-white px-4 py-2 rounded-lg transition-colors text-center"
            onClick={() => setOpen(false)}
          >
            List your business
          </Link>
        </div>
      )}
    </nav>
  )
}
