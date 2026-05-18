import { supabase } from '@/lib/supabase'
import LeadForm from '@/components/LeadForm'
import ClaimListingModal from '@/components/ClaimListingModal'
import Link from 'next/link'
import { notFound } from 'next/navigation'

const serviceLabels: Record<string, string> = {
  walker: 'Dog Walker',
  grooming: 'Dog Groomer',
  sitter: 'Pet Sitter',
  trainer: 'Dog Trainer',
  boarding: 'Dog Boarding',
  vet: 'Veterinarian',
}

const serviceColors: Record<string, string> = {
  walker: 'bg-blue-100 text-blue-800',
  grooming: 'bg-purple-100 text-purple-800',
  sitter: 'bg-amber-100 text-amber-800',
  trainer: 'bg-green-100 text-green-800',
  boarding: 'bg-orange-100 text-orange-800',
  vet: 'bg-sky-100 text-sky-800',
}

const serviceBanners: Record<string, string> = {
  walker: '/images/services/dog-walkers.jpg',
  grooming: '/images/services/groomers.jpg',
  sitter: '/images/services/pet-sitters.jpg',
  trainer: '/images/services/trainers.jpg',
  boarding: '/images/services/boarding.jpg',
  vet: '/images/services/vets.jpg',
}

const schemaTypes: Record<string, string> = {
  walker: 'LocalBusiness',
  grooming: 'LocalBusiness',
  sitter: 'LocalBusiness',
  trainer: 'LocalBusiness',
  boarding: 'LocalBusiness',
  vet: 'VeterinaryCare',
}

function serviceArea(neighborhood: string): string {
  if (neighborhood.toLowerCase().includes('vancouver')) return `Serving ${neighborhood}`
  return `Serving ${neighborhood}, Vancouver`
}

export async function generateStaticParams() {
  const { data: listings } = await supabase.from('listings').select('slug')
  return (listings ?? []).map((l) => ({ slug: l.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const { data: listing } = await supabase.from('listings').select('*').eq('slug', slug).single()
  if (!listing) return {}
  const serviceLabel = serviceLabels[listing.service_type] ?? listing.service_type
  return {
    title: `${listing.name} | ${serviceLabel} in ${listing.neighborhood}, Vancouver`,
    description: listing.description,
  }
}

export default async function ListingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const { data: listing } = await supabase
    .from('listings')
    .select('*')
    .eq('slug', slug)
    .single()
  if (!listing) notFound()

  const { name, service_type, neighborhood, price_range, description, image_url, image_position, contact_info, badges, testimonials } = listing
  const heroImage = image_url || serviceBanners[service_type]
  const serviceLabel = serviceLabels[service_type] ?? service_type

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': schemaTypes[service_type] ?? 'LocalBusiness',
    name,
    description,
    telephone: contact_info?.phone ?? undefined,
    email: contact_info?.email ?? undefined,
    areaServed: `${neighborhood}, Vancouver, BC`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Vancouver',
      addressRegion: 'BC',
      addressCountry: 'CA',
    },
    url: `https://vancouverpetservices.ca/listings/${slug}`,
    image: image_url ? `https://vancouverpetservices.ca${image_url}` : undefined,
    priceRange: price_range ?? undefined,
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />

      <Link href="/listings" className="text-sm text-[#16A34A] hover:underline mb-6 inline-block">
        ← Back to listings
      </Link>

      <div className="grid lg:grid-cols-5 gap-10">
        {/* Left column */}
        <div className="lg:col-span-3 space-y-6">
          <div className="rounded-2xl overflow-hidden aspect-video bg-gray-100">
            <img src={heroImage} alt={name} className="w-full h-full object-cover" style={{ objectPosition: image_url ? (image_position || 'center') : 'center' }} />
          </div>

          <div>
            <div className="flex flex-wrap items-start gap-3 mb-2">
              <h1 className="text-3xl font-bold text-[#1E3A5F]">{name}</h1>
              <span className={`text-sm font-medium px-3 py-1 rounded-full ${serviceColors[service_type]}`}>
                {serviceLabel}
              </span>
            </div>
            <p className="text-sm text-gray-500 mb-4">
              {serviceArea(neighborhood)}{price_range ? ` · ${price_range}` : ''}
            </p>

            <h2 className="text-base font-semibold text-[#1E3A5F] mb-2">About</h2>
            <p className="text-gray-700 leading-relaxed">{description}</p>
          </div>

          {badges?.length > 0 && (
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h2 className="font-semibold text-[#1E3A5F] mb-3">Services &amp; specialties</h2>
              <ul className="flex flex-wrap gap-2">
                {badges.map((badge: string) => (
                  <li key={badge} className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                    {badge}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <ClaimListingModal slug={slug} />

          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <h2 className="font-semibold text-[#1E3A5F] mb-3">Contact info</h2>
            <ul className="space-y-1 text-sm text-gray-600">
              {contact_info.email && (
                <li>
                  <span className="font-medium">Email: </span>
                  <a href={`mailto:${contact_info.email}`} className="text-[#16A34A] hover:underline">
                    {contact_info.email}
                  </a>
                </li>
              )}
              {contact_info.phone && (
                <li>
                  <span className="font-medium">Phone: </span>
                  <a href={`tel:${contact_info.phone}`} className="text-[#16A34A] hover:underline">
                    {contact_info.phone}
                  </a>
                </li>
              )}
              <li>
                <span className="font-medium">Service area: </span>
                {neighborhood}, Vancouver, BC
              </li>
            </ul>
          </div>

          {testimonials?.length > 0 && (
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h2 className="font-semibold text-[#1E3A5F] mb-4">What clients say</h2>
              <div className="space-y-4">
                {testimonials.map((t: { author: string; text: string }, i: number) => (
                  <div key={i} className="border-l-4 border-[#16A34A] pl-4">
                    <p className="text-gray-600 text-sm italic">"{t.text}"</p>
                    <p className="text-gray-400 text-xs mt-1 font-medium">— {t.author}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right column — lead form */}
        <div className="lg:col-span-2">
          <div className="lg:sticky lg:top-8">
            <LeadForm listingName={name} />
          </div>
        </div>
      </div>
    </div>
  )
}
