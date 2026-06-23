'use client'

import { trackWebsiteClick } from '@/lib/analytics'

export default function VisitWebsiteButton({ website, businessName }) {
  return (
    <a
      href={website}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWebsiteClick(businessName)}
      className="block w-full text-center bg-[#16A34A] hover:bg-[#15803d] text-white font-semibold py-4 rounded-2xl transition-colors text-lg"
    >
      Visit Website →
    </a>
  )
}
