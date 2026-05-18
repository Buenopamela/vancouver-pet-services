'use client'

import { useState } from 'react'

export default function ListYourBusinessPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch(process.env.NEXT_PUBLIC_FORMSPREE_LIST_URL!, {
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
    <div className="max-w-2xl mx-auto px-6 py-16">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-[#1E3A5F] mb-3">List your business</h1>
        <p className="text-gray-500">
          Get discovered by pet owners in Vancouver. Listing is free during our launch phase.
        </p>
      </div>

      <div className="bg-[#1E3A5F] text-white rounded-2xl p-6 sm:p-8">
        {status === 'success' ? (
          <div className="text-center py-8">
            <div className="text-5xl mb-4">🐾</div>
            <p className="text-xl font-semibold text-[#16A34A]">Application received!</p>
            <p className="text-white/70 text-sm mt-2">
              We'll review your listing and be in touch within 48 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="hidden" name="_subject" value="New business listing application" />

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1 text-white/80">Business name</label>
                <input
                  type="text"
                  name="business_name"
                  required
                  placeholder="Happy Paws Dog Walking"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#16A34A]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-white/80">Service type</label>
                <select
                  name="service_type"
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#16A34A]"
                >
                  <option value="" className="text-gray-800">Select...</option>
                  <option value="Dog Walking" className="text-gray-800">Dog Walking</option>
                  <option value="Pet Sitting" className="text-gray-800">Pet Sitting</option>
                  <option value="Grooming" className="text-gray-800">Grooming</option>
                </select>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1 text-white/80">Neighbourhood</label>
                <input
                  type="text"
                  name="neighborhood"
                  required
                  placeholder="Kitsilano"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#16A34A]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-white/80">Price range</label>
                <input
                  type="text"
                  name="price_range"
                  required
                  placeholder="$20–$30/walk"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#16A34A]"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1 text-white/80">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@yourbusiness.ca"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#16A34A]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-white/80">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="604-555-0000"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#16A34A]"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-white/80">Description</label>
              <textarea
                name="description"
                required
                rows={4}
                placeholder="Tell pet owners what makes your service special..."
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#16A34A] resize-none"
              />
            </div>

            {status === 'error' && (
              <p className="text-red-400 text-sm">Something went wrong. Please try again.</p>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full bg-[#16A34A] hover:bg-[#15803d] disabled:opacity-60 text-white font-semibold py-3 rounded-xl transition-colors"
            >
              {status === 'sending' ? 'Submitting...' : 'Submit application'}
            </button>

            <p className="text-white/50 text-xs text-center">
              Free during launch. We'll review and add your listing within 48 hours.
            </p>
          </form>
        )}
      </div>
    </div>
  )
}
