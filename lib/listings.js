import listings from '../data/listings.json'

export function getListings() {
  return listings
}

export function getListingBySlug(slug) {
  return listings.find((l) => l.slug === slug) || null
}

export function getFeaturedListings() {
  return listings.filter((l) => l.featured)
}

export function getNeighborhoods() {
  return [...new Set(listings.map((l) => l.neighborhood))].sort()
}

export function getServiceTypes() {
  return [...new Set(listings.map((l) => l.service_type))].sort()
}
