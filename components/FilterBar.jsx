'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { SERVICE_TYPES } from '@/lib/serviceTypes'

const fallbackTypes = Object.keys(SERVICE_TYPES)

export default function FilterBar({ neighborhoods, filters, onChange }) {
  const [activeTypes, setActiveTypes] = useState(fallbackTypes)

  useEffect(() => {
    supabase
      .from('listings')
      .select('service_type')
      .then(({ data, error }) => {
        if (error || !data) return
        const distinct = [...new Set(data.map((r) => r.service_type))].filter(
          (t) => t && SERVICE_TYPES[t]
        )
        if (distinct.length > 0) setActiveTypes(distinct)
      })
  }, [])

  return (
    <div className="flex flex-wrap gap-3 mb-8">
      <select
        value={filters.service_type}
        onChange={(e) => onChange({ ...filters, service_type: e.target.value })}
        className="border border-gray-200 rounded-lg px-4 py-2 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-[#16A34A]"
      >
        <option value="">All Services</option>
        {activeTypes.map((type) => (
          <option key={type} value={type}>
            {SERVICE_TYPES[type].label}
          </option>
        ))}
      </select>

      <select
        value={filters.neighborhood}
        onChange={(e) => onChange({ ...filters, neighborhood: e.target.value })}
        className="border border-gray-200 rounded-lg px-4 py-2 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-[#16A34A]"
      >
        <option value="">All Areas</option>
        {neighborhoods.map((n) => (
          <option key={n} value={n}>{n}</option>
        ))}
      </select>

      {(filters.service_type || filters.neighborhood) && (
        <button
          onClick={() => onChange({ service_type: '', neighborhood: '' })}
          className="text-sm text-gray-500 hover:text-gray-800 underline"
        >
          Clear filters
        </button>
      )}
    </div>
  )
}
