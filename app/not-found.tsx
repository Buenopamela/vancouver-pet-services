import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="max-w-xl mx-auto px-6 py-32 text-center">
      <div className="text-6xl mb-6">🐾</div>
      <h1 className="text-3xl font-bold text-[#1E3A5F] mb-3">Page not found</h1>
      <p className="text-gray-500 mb-8">
        Looks like this page went on a walk and didn't come back.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link
          href="/"
          className="bg-[#1E3A5F] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#16305a] transition-colors"
        >
          Go home
        </Link>
        <Link
          href="/listings"
          className="bg-[#16A34A] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#15803d] transition-colors"
        >
          Browse services
        </Link>
      </div>
    </div>
  )
}
