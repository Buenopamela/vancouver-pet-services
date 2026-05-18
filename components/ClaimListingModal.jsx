'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import { trackClaimListing } from '@/lib/analytics'

export default function ClaimListingModal({ slug }) {
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    const { error } = await supabase
      .from('claim_requests')
      .insert({ listing_slug: slug, email })
    if (error) {
      setStatus('error')
    } else {
      trackClaimListing('listing_page')
      setStatus('success')
    }
  }

  function handleClose() {
    setOpen(false)
    setStatus('idle')
    setEmail('')
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="text-sm text-gray-400 hover:text-[#16A34A] transition-colors"
      >
        Is this your business? Claim this listing →
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4"
          onClick={(e) => { if (e.target === e.currentTarget) handleClose() }}
        >
          <div className="bg-white rounded-2xl p-8 w-full max-w-md shadow-xl relative">
            <button
              onClick={handleClose}
              aria-label="Close"
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl leading-none"
            >
              ×
            </button>

            <h2 className="text-xl font-bold text-[#1E3A5F] mb-1">Claim this listing</h2>
            <p className="text-gray-500 text-sm mb-6">
              Is this your business? Enter your email and we'll send you access to manage this profile.
            </p>

            {status === 'success' ? (
              <p className="text-[#16A34A] font-medium text-sm">
                Got it! We'll be in touch within 24 hours.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email address
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#16A34A]"
                  />
                </div>

                {status === 'error' && (
                  <p className="text-red-500 text-sm">
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-[#16A34A] hover:bg-[#15803d] disabled:opacity-60 text-white font-semibold py-2.5 rounded-xl transition-colors text-sm"
                >
                  {status === 'sending' ? 'Sending...' : 'Send claim request'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  )
}
