import Link from 'next/link'

const serviceLabels = {
  walker: 'Dog Walker',
  grooming: 'Grooming',
  sitter: 'Pet Sitter',
  trainer: 'Dog Trainer',
  boarding: 'Boarding',
  vet: 'Veterinarian',
}

const serviceColors = {
  walker: 'bg-blue-100 text-blue-800',
  grooming: 'bg-purple-100 text-purple-800',
  sitter: 'bg-amber-100 text-amber-800',
  trainer: 'bg-green-100 text-green-800',
  boarding: 'bg-orange-100 text-orange-800',
  vet: 'bg-sky-100 text-sky-800',
}

const serviceBanners = {
  walker: '/images/services/dog-walkers.jpg',
  grooming: '/images/services/groomers.jpg',
  sitter: '/images/services/pet-sitters.jpg',
  trainer: '/images/services/trainers.jpg',
  boarding: '/images/services/boarding.jpg',
  vet: '/images/services/vets.jpg',
}

export default function ListingCard({ listing }) {
  const { slug, name, service_type, neighborhood, price_range, description, image_url, image_position } = listing
  const cardImage = image_url || serviceBanners[service_type]

  return (
    <Link href={`/listings/${slug}`} className="group block bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
      <div className="aspect-video overflow-hidden bg-gray-100">
        <img
          src={cardImage}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          style={{ objectPosition: image_url ? (image_position || 'center') : 'center' }}
        />
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-semibold text-[#1E3A5F] text-lg leading-tight">{name}</h3>
          <span className={`text-xs font-medium px-2 py-1 rounded-full shrink-0 ${serviceColors[service_type]}`}>
            {serviceLabels[service_type]}
          </span>
        </div>
        <p className="text-sm text-gray-500 mb-3">{neighborhood} · {price_range}</p>
        <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
        {listing.badges?.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {listing.badges.slice(0, 3).map((badge) => (
              <span key={badge} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                {badge}
              </span>
            ))}
          </div>
        )}
        <span className="inline-block mt-4 text-sm font-medium text-[#16A34A] group-hover:underline">
          View profile →
        </span>
      </div>
    </Link>
  )
}
