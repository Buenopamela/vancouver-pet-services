import { supabase } from '@/lib/supabase'
import ListingsClient from '@/components/ListingsClient'
import Link from 'next/link'

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
      <div className="mt-16 border-t border-gray-100 pt-10">
        <h2 className="text-lg font-semibold text-[#1E3A5F] mb-4">Browse by neighbourhood</h2>
        <div className="flex flex-wrap gap-2">
          {['Kitsilano','West End','Mount Pleasant','East Vancouver','North Vancouver','Burnaby','Richmond','Surrey','Coquitlam','Vancouver Downtown'].map((n) => (
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
    </div>
  )
}
