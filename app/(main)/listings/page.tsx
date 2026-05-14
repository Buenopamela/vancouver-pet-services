import { getListings, getNeighborhoods } from '@/lib/listings'
import ListingsClient from '@/components/ListingsClient'

export const metadata = {
  title: 'Pet Services in Vancouver — Dog Walkers, Groomers & Sitters | Vancouver Pet Services',
  description: 'Browse trusted dog walkers, groomers, and pet sitters in Vancouver, BC. Filter by neighbourhood and service type to find the right match near you.',
}

export default function ListingsPage() {
  const listings = getListings()
  const neighborhoods = getNeighborhoods()

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <ListingsClient listings={listings} neighborhoods={neighborhoods} />
    </div>
  )
}
