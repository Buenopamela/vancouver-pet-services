import type { MetadataRoute } from 'next'
import { supabase } from '@/lib/supabase'

export const revalidate = 60

const BASE_URL = 'https://vancouverpetservices.ca'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { data: listings } = await supabase
    .from('listings')
    .select('slug, neighborhood')

  const rows = listings ?? []

  const listingUrls: MetadataRoute.Sitemap = rows.map(({ slug }) => ({
    url: `${BASE_URL}/listings/${slug}`,
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  const neighbourhoodUrls: MetadataRoute.Sitemap = [
    ...new Set(rows.map((l) => l.neighborhood as string)),
  ].map((name) => ({
    url: `${BASE_URL}/listings/neighbourhood/${name.toLowerCase().replace(/ /g, '-')}`,
    changeFrequency: 'weekly',
    priority: 0.9,
  }))

  return [
    {
      url: BASE_URL,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/listings`,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    ...listingUrls,
    ...neighbourhoodUrls,
  ]
}
