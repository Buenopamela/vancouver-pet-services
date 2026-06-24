import { supabase } from '@/lib/supabase'
import ListingsClient from '@/components/ListingsClient'
import NeighbourhoodBrowser from '@/components/NeighbourhoodBrowser'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export const revalidate = 60

const neighbourhoodLabels: Record<string, string> = {
  'kitsilano': 'Kitsilano',
  'west-end': 'West End',
  'mount-pleasant': 'Mount Pleasant',
  'east-vancouver': 'East Vancouver',
  'north-vancouver': 'North Vancouver',
  'burnaby': 'Burnaby',
  'richmond': 'Richmond',
  'surrey': 'Surrey',
  'coquitlam': 'Coquitlam',
  'vancouver-downtown': 'Vancouver Downtown',
}

const neighbourhoodIntros: Partial<Record<string, string[]>> = {
  burnaby: [
    "Burnaby is one of the most pet-friendly cities in Metro Vancouver, and it shows. From the dog-loving crowds at Central Park to the off-leash trails winding around Burnaby Lake, this is a city built for daily walks, weekend adventures, and a strong local pet care community. Whether you're in a high-rise near Metrotown or a house in North Burnaby, finding the right dog walker, groomer, or pet sitter shouldn't take more effort than finding a good coffee shop.",
    "If you're searching for a dog walker in Burnaby, you're in good company — this is a city of walkers. Central Park offers wide paved paths and shaded forest trails that suit dogs of any energy level, while Deer Lake Park gives you a quieter, more scenic loop with water access dogs tend to love. Burnaby Lake Regional Park is the go-to for longer walks and trail running with your dog, with enough distance to tire out even the most energetic breeds.",
    "For grooming, Burnaby's spread-out layout means most residents have a salon within a short drive, whether you're near Brentwood, Metrotown, or Edmonds. A good Burnaby dog groomer does more than a wash and trim — they should ask about your dog's coat type, any skin sensitivities, and how your dog handles the dryer and table before you ever book. That conversation tells you more about quality than any star rating.",
    "Pet sitting and boarding searches spike around long weekends and summer travel season here, and for good reason — Burnaby's mix of families and commuting professionals means a lot of households need reliable, flexible coverage. The best Burnaby pet sitters offer in-home visits or overnight stays so your dog or cat keeps their routine instead of adjusting to a new environment on top of missing you.",
    "Burnaby is also home to several well-regarded dog trainers, which matters in a city with this much shared green space. Whether you're working on leash manners for Central Park's busy paths or recall training for off-leash time at Burnaby Lake, a trainer who understands the local terrain and typical dog-traffic patterns can get you results faster than generic advice.",
    "Veterinary care in Burnaby ranges from full-service animal hospitals to smaller neighbourhood clinics, and many residents choose based on which one feels least stressful for their pet, not just proximity. If your dog gets anxious at the vet, ask in advance about low-stress handling techniques — more Burnaby clinics are offering this than you'd expect.",
    "When you're comparing pet care providers anywhere in Burnaby, a few things matter more than a polished website: Are they insured? Do they communicate clearly and promptly? Will they handle your dog's specific size, breed, or temperament with real experience, not just willingness? A provider who answers these without hesitation is usually the safer bet.",
    "Burnaby isn't one neighbourhood, it's several, and that matters for pet care. South Burnaby residents near Metrotown often want walkers who can handle dense foot traffic and busy sidewalks. North Burnaby and Burnaby Heights owners tend to have larger yards but still rely heavily on dog walkers for midday breaks during work hours. Knowing your dog's actual day-to-day environment helps you pick a provider who's used to it.",
    "A few local realities worth knowing: Burnaby's off-leash areas are clearly designated and enforced, so check signage at parks like Robert Burnaby Park before letting your dog run free. Summer heat on Burnaby's paved trails can be brutal on paw pads by mid-afternoon, so early morning or evening walks are the safer call between June and September.",
    "Vancouver Pet Services exists to make finding trusted Burnaby pet care simple — no cold-calling five groomers to find one with availability, no guessing which dog walker actually covers your part of the city. Browse our Burnaby listings to find local, vetted providers across walking, grooming, sitting, boarding, training, and veterinary care, all in one place. If you run a pet care business in Burnaby, we'd love to have you listed too.",
  ],
  kitsilano: [
    "Kitsilano is one of Vancouver's most iconic dog neighbourhoods, and it's not hard to see why. Kits Beach, Hadden Park, and Jericho Beach give dogs near-constant access to sand, water, and open space, while the walkable streets around West 4th Avenue make daily life with a dog genuinely easy. It's a neighbourhood where you'll see almost as many leashes as bikes, and the local pet care scene reflects that.",
    "If you're looking for a dog walker in Kitsilano, the neighbourhood's geography works in your favour — everything from Kits Beach to Vanier Park is walkable, which means many local walkers build routes that mix beach time with neighbourhood streets. For condo and apartment dwellers especially, a midday walker who can reliably get your dog outside and moving makes a real difference in behaviour and energy levels by evening.",
    "Grooming in Kitsilano tends to cluster around West 4th and West Broadway, where small, owner-run salons are common. A Kitsilano dog groomer who knows the neighbourhood will also understand the realities of beach-going dogs — sandy, salty coats that need proper rinsing and drying, not just a quick brush-through.",
    "Pet sitting and boarding demand in Kitsilano is high, largely because of the neighbourhood's density. With so many residents in condos and apartments rather than houses, a trustworthy sitter who can do in-home visits or overnight stays is often more valuable here than a boarding kennel across town. We're actively growing our Kitsilano listings in this category — if you know a great local sitter, let us know, or check back as new providers get added.",
    "Dog training searches in Kitsilano often centre on leash manners and recall, which makes sense given how much off-leash beach time is on offer at Kits Beach and Jericho. This is a category we're still building out locally, but the demand is clearly there for trainers who understand beach-and-park training environments specifically, not just basic obedience in a studio.",
    "For veterinary care, Kitsilano residents have access to several clinics along West Broadway and 4th Avenue, many of which are well used to the neighbourhood's high dog density and the bumps, scrapes, and sandy ear infections that come with a beach-heavy lifestyle.",
    "No matter the service, the same basics apply when choosing a Kitsilano pet care provider: insurance, clear communication, and real experience with your dog's specific needs. In a neighbourhood this walkable and this dog-dense, word of mouth travels fast, so a provider with a strong local reputation is usually worth the extra question or two before booking.",
    "Kitsilano's character changes block by block. Closer to Kits Beach and Cornwall Avenue, you'll find a younger, very dog-social crowd, while the quieter streets near West Broadway tend to suit owners looking for calmer, lower-key walking routes. Either way, most of Kitsilano sits within easy reach of at least one off-leash area, which shapes a lot of local pet care habits.",
    "A few things worth knowing if you're new to the neighbourhood: Kits Beach has designated off-leash hours in the early morning and evening, outside of which dogs need to be leashed. Pavement along West 4th can get surprisingly hot in summer afternoons, so beach walks are often the better midday option for paw safety.",
    "Vancouver Pet Services is building out Kitsilano's pet care directory neighbourhood by neighbourhood, starting with trusted local walkers and groomers and expanding into sitting, boarding, and training as we verify more providers. Browse our current Kitsilano listings, and if you're a pet care provider in the area, especially a sitter or trainer, we'd love to have you be one of the first listed.",
  ],
}

export async function generateStaticParams() {
  return Object.keys(neighbourhoodLabels).map((neighbourhood) => ({ neighbourhood }))
}

export async function generateMetadata({ params }: { params: Promise<{ neighbourhood: string }> }) {
  const { neighbourhood } = await params
  const label = neighbourhoodLabels[neighbourhood]
  if (!label) return {}
  const { data: listings } = await supabase
    .from('listings')
    .select('*')
    .eq('neighborhood', label)
  const hasListings = (listings ?? []).length > 0
  return {
    title: `Pet Services in ${label} — Dog Walkers, Groomers & Sitters | Vancouver Pet Services`,
    description: `Find trusted dog walkers, groomers, pet sitters and trainers in ${label}. Browse verified local pet care providers near you.`,
    robots: hasListings ? { index: true, follow: true } : { index: false, follow: false },
  }
}

export default async function NeighbourhoodPage({ params }: { params: Promise<{ neighbourhood: string }> }) {
  const { neighbourhood } = await params
  const label = neighbourhoodLabels[neighbourhood]
  if (!label) notFound()

  const { data: listings } = await supabase
    .from('listings')
    .select('*')
    .eq('neighborhood', label)

  const neighborhoods = [...new Set((listings ?? []).map((l) => l.neighborhood))].sort()

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <Link href="/listings" className="text-sm text-[#16A34A] hover:underline mb-6 inline-block">
        ← All Vancouver pet services
      </Link>
      <ListingsClient listings={listings ?? []} neighborhoods={neighborhoods} location={label} intro={neighbourhoodIntros[neighbourhood]} />
      <NeighbourhoodBrowser />
    </div>
  )
}
