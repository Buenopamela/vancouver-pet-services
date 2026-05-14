'use client'

import { useState } from 'react'
import { trackLeadFormSubmit } from '@/lib/analytics'

export default function LeadForm({ listingName }) {
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    const form = e.target
    const data = new FormData(form)

    try {
      const res = await fetch(process.env.NEXT_PUBLIC_FORMSPREE_URL, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
        trackLeadFormSubmit(listingName)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div id="lead-form" className="bg-[#1E3A5F] text-white rounded-2xl p-6 sm:p-8">
      <h2 className="text-2xl font-bold mb-1">Request a quote</h2>
      <p className="text-white/70 text-sm mb-6">
        Send a message to <strong>{listingName}</strong>
      </p>

      {status === 'success' ? (
        <div className="bg-[#16A34A]/20 border border-[#16A34A] rounded-xl p-6 text-center">
          <p className="text-lg font-semibold text-[#16A34A]">Request sent!</p>
          <p className="text-white/70 text-sm mt-1">They will get back to you shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="hidden" name="listing" value={listingName} />

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1 text-white/80">Your name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Jane Smith"
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#16A34A]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-white/80">Email</label>
              <input
                type="email"
                name="email"
                required
                placeholder="jane@email.com"
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#16A34A]"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1 text-white/80">Your neighbourhood</label>
              <input
                type="text"
                name="location"
                required
                placeholder="Kitsilano"
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#16A34A]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-white/80">Pet type</label>
              <input
                type="text"
                name="pet_type"
                required
                placeholder="Dog, Cat..."
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#16A34A]"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1 text-white/80">Service needed</label>
              <select
                name="service"
                required
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#16A34A]"
              >
                <option value="" className="text-gray-800">Select...</option>
                <option value="Dog Walking" className="text-gray-800">Dog Walking</option>
                <option value="Pet Sitting" className="text-gray-800">Pet Sitting</option>
                <option value="Grooming" className="text-gray-800">Grooming</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-white/80">Date needed</label>
              <input
                type="date"
                name="date"
                required
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#16A34A]"
              />
            </div>
          </div>

          {status === 'error' && (
            <p className="text-red-400 text-sm">Something went wrong. Please try again.</p>
          )}

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full bg-[#16A34A] hover:bg-[#15803d] disabled:opacity-60 text-white font-semibold py-3 rounded-xl transition-colors"
          >
            {status === 'sending' ? 'Sending...' : 'Send request'}
          </button>
        </form>
      )}
    </div>
  )
}
