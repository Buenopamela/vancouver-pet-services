import Hero from '@/components/Hero'
import ListingCard from '@/components/ListingCard'
import { getFeaturedListings } from '@/lib/listings'
import Link from 'next/link'

export default function HomePage() {
  const featured = getFeaturedListings()

  return (
    <>
      <Hero />

      {/* Featured listings */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-[#1E3A5F]">Featured services</h2>
          <Link href="/listings" className="text-sm text-[#16A34A] font-medium hover:underline">
            View all →
          </Link>
        </div>
        {featured.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-gray-400">
            <p className="mb-4">No featured listings yet.</p>
            <Link href="/listings" className="text-[#16A34A] font-medium hover:underline">
              Browse all services →
            </Link>
          </div>
        )}
      </section>

      {/* How it works */}
      <section className="bg-white border-t border-gray-100 px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#1E3A5F] mb-12">How it works</h2>
          <div className="grid sm:grid-cols-3 gap-10">
            {[
              { step: '1', title: 'Search your area', desc: 'Filter by service type and neighbourhood to find the right match.' },
              { step: '2', title: 'Review the profile', desc: 'Check photos, services offered, price range, and area served.' },
              { step: '3', title: 'Request a quote', desc: 'Send a quick message and get a response directly from the provider.' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#16A34A] text-white font-bold text-xl flex items-center justify-center">
                  {step}
                </div>
                <h3 className="font-semibold text-[#1E3A5F]">{title}</h3>
                <p className="text-sm text-gray-500">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="bg-[#16A34A] text-white text-center px-6 py-12">
        <h2 className="text-2xl font-bold mb-3">Ready to find the perfect pet care?</h2>
        <p className="text-white/80 mb-6">Browse all dog walkers, groomers and pet sitters in Vancouver.</p>
        <Link
          href="/listings"
          className="inline-block bg-white text-[#16A34A] font-semibold px-8 py-3 rounded-xl hover:bg-gray-100 transition-colors"
        >
          Browse all services
        </Link>
      </section>
    </>
  )
}
