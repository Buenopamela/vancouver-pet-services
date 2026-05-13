'use client'

const serviceLabels = {
  walker: 'Dog Walkers',
  grooming: 'Groomers',
  sitter: 'Pet Sitters',
  trainer: 'Dog Trainers',
}

export default function FilterBar({ neighborhoods, filters, onChange }) {
  return (
    <div className="flex flex-wrap gap-3 mb-8">
      <select
        value={filters.service_type}
        onChange={(e) => onChange({ ...filters, service_type: e.target.value })}
        className="border border-gray-200 rounded-lg px-4 py-2 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-[#16A34A]"
      >
        <option value="">All Services</option>
        {Object.entries(serviceLabels).map(([value, label]) => (
          <option key={value} value={value}>{label}</option>
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
