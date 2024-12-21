import { THEATER_PRICES, PACKAGE_PRICES } from './pricing';

export const PACKAGES = [
  {
    id: 'family-gold',
    name: 'Family Gold Package',
    price: PACKAGE_PRICES.FAMILY_GOLD,
    basePrice: THEATER_PRICES.FAMILY,
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745',
    description: 'Complete family celebration package',
    includes: [
      '3 Hour Theatre',
      'Decoration',
      'Photography & videography (with edit)',
      'Fog entry (4 pots)',
      'Cake not included'
    ]
  },
  {
    id: 'friend-gold',
    name: 'Friend Gold Package',
    price: PACKAGE_PRICES.FRIEND_GOLD,
    basePrice: THEATER_PRICES.FRIEND,
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac',
    description: 'Complete friend celebration package',
    includes: [
      '3 Hour Theatre',
      'Decoration',
      'Photography & videography (with edit)',
      'Fog entry (4 pots)',
      'Cake not included'
    ]
  },
  {
    id: 'couple-gold',
    name: 'Couple Gold Package',
    price: PACKAGE_PRICES.COUPLE_GOLD,
    basePrice: THEATER_PRICES.COUPLE,
    image: 'https://images.unsplash.com/photo-1596436889106-be35e843f974',
    description: 'Complete couple celebration package',
    includes: [
      '3 Hour Theatre',
      'Decoration',
      'Photography & videography (with edit)',
      'Fog entry (4 pots)',
      'Cake not included'
    ]
  }
] as const;