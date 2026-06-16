import Link from 'next/link'

const NEIGHBOURHOODS = [
  'Kitsilano',
  'West End',
  'Mount Pleasant',
  'East Vancouver',
  'North Vancouver',
  'Burnaby',
  'Richmond',
  'Surrey',
  'Coquitlam',
  'Vancouver Downtown',
]

export default function NeighbourhoodBrowser() {
  return (
    <div className="mt-16 border-t border-gray-100 pt-10">
      <h2 className="text-lg font-semibold text-[#1E3A5F] mb-4">Browse by neighbourhood</h2>
      <div className="flex flex-wrap gap-2">
        {NEIGHBOURHOODS.map((n) => (
          <Link
            key={n}
            href={`/listings/neighbourhood/${n.toLowerCase().replace(/ /g, '-')}`}
            className="text-sm border border-gray-200 rounded-full px-4 py-1.5 text-gray-600 hover:border-[#16A34A] hover:text-[#16A34A] transition-colors"
          >
            {n}
          </Link>
        ))}
      </div>
    </div>
  )
}
