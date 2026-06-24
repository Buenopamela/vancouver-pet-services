'use client'

import { useState } from 'react'

export default function EmailCapture() {
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
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6">
      <h2 className="font-semibold text-[#1E3A5F] mb-1">Stay in the loop</h2>
      <p className="text-sm text-gray-500 mb-4">Get notified about top pet services in Vancouver.</p>

      {status === 'success' ? (
        <p className="text-sm text-[#16A34A] font-medium">You&apos;re on the list!</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="email"
            name="email"
            required
            placeholder="you@email.com"
            className="flex-1 min-w-0 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#16A34A]"
          />
          <button
            type="submit"
            disabled={status === 'sending'}
            className="bg-[#1E3A5F] hover:bg-[#16304d] disabled:opacity-60 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors shrink-0"
          >
            {status === 'sending' ? '...' : 'Notify me'}
          </button>
        </form>
      )}
      {status === 'error' && (
        <p className="text-red-500 text-xs mt-2">Something went wrong. Please try again.</p>
      )}
    </div>
  )
}
