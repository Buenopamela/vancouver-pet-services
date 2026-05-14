import Link from 'next/link'

export default function Hero() {
  return (
    <section className="bg-[#1E3A5F] text-white px-6 py-20 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
          Find trusted pet services<br />
          <span className="text-[#16A34A]">in Vancouver</span>
        </h1>
        <p className="text-lg text-white/80 mb-8">
          Compare dog walkers, groomers &amp; pet sitters near you
        </p>
        <Link
          href="/listings"
          className="inline-block bg-[#16A34A] hover:bg-[#15803d] text-white font-semibold px-8 py-4 rounded-xl text-lg transition-colors"
        >
          Find services
        </Link>
      </div>
    </section>
  )
}
