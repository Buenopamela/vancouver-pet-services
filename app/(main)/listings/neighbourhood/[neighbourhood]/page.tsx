import { supabase } from '@/lib/supabase'
import ListingsClient from '@/components/ListingsClient'
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
      <ListingsClient listings={listings ?? []} neighborhoods={neighborhoods} />
    </div>
  )
}
