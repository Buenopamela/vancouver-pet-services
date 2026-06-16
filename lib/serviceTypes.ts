export type ServiceTypeConfig = {
  label: string
  color: string
  banner: string
  schemaType: string
}

export const SERVICE_TYPES: Record<string, ServiceTypeConfig> = {
  walker: {
    label: 'Dog Walker',
    color: 'bg-blue-100 text-blue-800',
    banner: '/images/services/dog-walkers.jpg',
    schemaType: 'LocalBusiness',
  },
  grooming: {
    label: 'Grooming',
    color: 'bg-purple-100 text-purple-800',
    banner: '/images/services/groomers.jpg',
    schemaType: 'LocalBusiness',
  },
  sitter: {
    label: 'Pet Sitter',
    color: 'bg-amber-100 text-amber-800',
    banner: '/images/services/pet-sitters.jpg',
    schemaType: 'LocalBusiness',
  },
  trainer: {
    label: 'Dog Trainer',
    color: 'bg-green-100 text-green-800',
    banner: '/images/services/trainers.jpg',
    schemaType: 'LocalBusiness',
  },
  boarding: {
    label: 'Boarding',
    color: 'bg-orange-100 text-orange-800',
    banner: '/images/services/boarding.jpg',
    schemaType: 'LocalBusiness',
  },
  vet: {
    label: 'Veterinarian',
    color: 'bg-sky-100 text-sky-800',
    banner: '/images/services/vets.jpg',
    schemaType: 'VeterinaryCare',
  },
  photography: {
    label: 'Pet Photography',
    color: 'bg-green-100 text-green-800',
    banner: '/images/services/pet-photography.png',
    schemaType: 'ProfessionalService',
  },
  supplies: {
    label: 'Pet Supplies',
    color: 'bg-blue-100 text-blue-800',
    banner: '/images/services/pet-supplies.png',
    schemaType: 'Store',
  },
}
