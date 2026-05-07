'use client'

import { useState, useMemo } from 'react'
import ListingCard from '@/components/ListingCard'
import FilterBar from '@/components/FilterBar'

export default function ListingsClient({ listings, neighborhoods }) {
  const [filters, setFilters] = useState({ service_type: '', neighborhood: '' })

  const filtered = useMemo(() => {
    return listings.filter((l) => {
      if (filters.service_type && l.service_type !== filters.service_type) return false
      if (filters.neighborhood && l.neighborhood !== filters.neighborhood) return false
      return true
    })
  }, [filters, listings])

  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#1E3A5F] mb-1">Pet services in Vancouver</h1>
        <p className="text-gray-500">{filtered.length} service{filtered.length !== 1 ? 's' : ''} found</p>
      </div>

      <FilterBar neighborhoods={neighborhoods} filters={filters} onChange={setFilters} />

      {filtered.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          <p className="text-lg">No services found for those filters.</p>
          <button
            onClick={() => setFilters({ service_type: '', neighborhood: '' })}
            className="mt-4 text-[#16A34A] underline text-sm"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      )}
    </>
  )
}
