import Link from 'next/link'

const neighbourhoods = [
  { slug: 'kitsilano', label: 'Kitsilano' },
  { slug: 'west-end', label: 'West End' },
  { slug: 'mount-pleasant', label: 'Mount Pleasant' },
  { slug: 'east-vancouver', label: 'East Vancouver' },
  { slug: 'north-vancouver', label: 'North Vancouver' },
  { slug: 'burnaby', label: 'Burnaby' },
  { slug: 'richmond', label: 'Richmond' },
  { slug: 'surrey', label: 'Surrey' },
  { slug: 'coquitlam', label: 'Coquitlam' },
  { slug: 'vancouver-downtown', label: 'Vancouver Downtown' },
]

export const metadata = {
  title: 'Pet Services by Neighbourhood in Vancouver | Vancouver Pet Services',
  description: 'Find trusted dog walkers, groomers, and pet sitters by neighbourhood in Vancouver and surrounding areas.',
}

export default function NeighbourhoodIndexPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-[#1E3A5F] mb-2">Browse by Neighbourhood</h1>
      <p className="text-gray-500 mb-10">Find trusted pet services near you in Vancouver and surrounding areas.</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {neighbourhoods.map(({ slug, label }) => (
          <Link
            key={slug}
            href={`/listings/neighbourhood/${slug}`}
            className="block bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow"
          >
            <h2 className="text-lg font-semibold text-[#1E3A5F]">{label}</h2>
            <p className="text-sm text-[#16A34A] mt-1">View pet services →</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
