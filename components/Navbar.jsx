'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header style={{ background: '#F9F6F1', borderBottom: '1px solid #E7E5E4', position: 'sticky', top: 0, zIndex: 50 }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 32px', height: 72, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Wordmark */}
        <Link href="/" onClick={() => setOpen(false)} style={{ textDecoration: 'none', lineHeight: 1.1 }}>
          <div style={{ fontSize: 22, fontWeight: 900, letterSpacing: '-1px', color: '#1C1917' }}>VPS</div>
          <div style={{ fontSize: 10, fontWeight: 500, color: '#A8A29E', letterSpacing: '0.04em', textTransform: 'uppercase' }}>Vancouver Pet Services</div>
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', gap: 28, alignItems: 'center' }} className="hidden sm:flex">
          <Link href="/listings" style={{ fontSize: 14, color: '#57534E', textDecoration: 'none', fontWeight: 500 }}>Browse</Link>
          <Link href="/list-your-business" style={{ fontSize: 14, color: '#57534E', textDecoration: 'none', fontWeight: 500 }}>List your business</Link>
          <Link href="/listings" style={{
            fontSize: 13, fontWeight: 700, color: '#fff',
            background: '#16A34A', padding: '8px 16px',
            borderRadius: 7, textDecoration: 'none',
            whiteSpace: 'nowrap'
          }}>
            Find services
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          style={{ background: 'none', border: 'none', cursor: 'pointer' }}
        >
          <span style={{ display: 'block', width: 24, height: 2, background: '#1C1917', transition: 'transform 0.2s', transform: open ? 'rotate(45deg) translateY(8px)' : 'none' }} />
          <span style={{ display: 'block', width: 24, height: 2, background: '#1C1917', transition: 'opacity 0.2s', opacity: open ? 0 : 1 }} />
          <span style={{ display: 'block', width: 24, height: 2, background: '#1C1917', transition: 'transform 0.2s', transform: open ? 'rotate(-45deg) translateY(-8px)' : 'none' }} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ borderTop: '1px solid #E7E5E4', padding: '16px 32px', display: 'flex', flexDirection: 'column', gap: 16, background: '#F9F6F1' }} className="sm:hidden">
          <Link href="/listings" onClick={() => setOpen(false)} style={{ fontSize: 15, color: '#1C1917', textDecoration: 'none', fontWeight: 500 }}>Browse services</Link>
          <Link href="/list-your-business" onClick={() => setOpen(false)} style={{ fontSize: 15, color: '#1C1917', textDecoration: 'none', fontWeight: 500 }}>List your business</Link>
          <Link href="/listings" onClick={() => setOpen(false)} style={{
            fontSize: 14, fontWeight: 700, color: '#fff',
            background: '#16A34A', padding: '10px 16px',
            borderRadius: 7, textDecoration: 'none', textAlign: 'center'
          }}>
            Find services
          </Link>
        </div>
      )}
    </header>
  )
}
