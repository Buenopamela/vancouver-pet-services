import { supabase } from '@/lib/supabase'
import ListingsClient from '@/components/ListingsClient'

export const metadata = {
  title: 'Pet Services in Vancouver — Dog Walkers, Groomers & Sitters | Vancouver Pet Services',
  description: 'Browse trusted dog walkers, groomers, and pet sitters in Vancouver, BC. Filter by neighbourhood and service type to find the right match near you.',
}

export default async function ListingsPage() {
  const { data: listings } = await supabase.from('listings').select('*')
  const neighborhoods = [...new Set((listings ?? []).map((l) => l.neighborhood))].sort()

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <ListingsClient listings={listings ?? []} neighborhoods={neighborhoods} />
    </div>
  )
}
