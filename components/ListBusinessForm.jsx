'use client'

import { useState } from 'react'
import { trackClaimListing } from '@/lib/analytics'

const C = {
  dark: '#1C1917',
  green: '#16A34A',
  border: '#E7E5E4',
  muted: '#A8A29E',
  body: '#57534E',
  white: '#FFFFFF',
  bg: '#F9F6F1',
}

export default function ListBusinessForm() {
  const [status, setStatus] = useState('idle')

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    const data = new FormData(e.target)

    try {
      const res = await fetch(process.env.NEXT_PUBLIC_FORMSPREE_LIST_URL, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('success')
        e.target.reset()
        trackClaimListing('listing_page')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div style={{ textAlign: 'center', padding: '48px 0' }}>
        <div style={{ fontSize: 22, fontWeight: 800, color: C.white, marginBottom: 10 }}>
          We received your submission
        </div>
        <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 15 }}>
          We'll review your listing and be in touch within 2 business days.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: 'left', maxWidth: 560, margin: '0 auto' }}>
      <input type="hidden" name="_subject" value="New business listing submission" />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }} className="grid-cols-form">
        <div>
          <label style={labelStyle}>Business name</label>
          <input name="business_name" required placeholder="Happy Paws Walking" style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle}>Your name</label>
          <input name="contact_name" required placeholder="Jane Smith" style={inputStyle} />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }} className="grid-cols-form">
        <div>
          <label style={labelStyle}>Email</label>
          <input name="email" type="email" required placeholder="jane@email.com" style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle}>Phone</label>
          <input name="phone" type="tel" placeholder="604-555-0100" style={inputStyle} />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }} className="grid-cols-form">
        <div>
          <label style={labelStyle}>Service type</label>
          <select name="service_type" required style={inputStyle}>
            <option value="">Select...</option>
            <option>Dog Walking</option>
            <option>Pet Sitting</option>
            <option>Grooming</option>
            <option>Boarding</option>
            <option>Training</option>
            <option>Veterinary</option>
          </select>
        </div>
        <div>
          <label style={labelStyle}>Neighbourhood</label>
          <input name="neighbourhood" required placeholder="Kitsilano" style={inputStyle} />
        </div>
      </div>

      <div style={{ marginBottom: 24 }}>
        <label style={labelStyle}>Website (optional)</label>
        <input name="website" type="url" placeholder="https://yoursite.com" style={inputStyle} />
      </div>

      {status === 'error' && (
        <p style={{ color: '#F87171', fontSize: 13, marginBottom: 16 }}>Something went wrong. Please try again.</p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        style={{
          width: '100%', background: C.green, color: '#fff',
          padding: '14px', borderRadius: 10, border: 'none',
          fontWeight: 700, fontSize: 15, cursor: 'pointer',
          opacity: status === 'sending' ? 0.6 : 1,
        }}
      >
        {status === 'sending' ? 'Submitting...' : 'Submit your listing'}
      </button>
    </form>
  )
}

const labelStyle = {
  display: 'block',
  fontSize: 12,
  fontWeight: 600,
  color: 'rgba(255,255,255,0.6)',
  marginBottom: 6,
  letterSpacing: '0.03em',
  textTransform: 'uppercase',
}

const inputStyle = {
  width: '100%',
  background: 'rgba(255,255,255,0.08)',
  border: '1.5px solid rgba(255,255,255,0.15)',
  borderRadius: 8,
  padding: '10px 14px',
  fontSize: 14,
  color: '#fff',
  outline: 'none',
  boxSizing: 'border-box',
}
