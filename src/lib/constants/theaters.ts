export const THEATER_TYPES = {
  FAMILY: {
    id: 'family',
    name: 'Family Theater',
    price: 1599,
    capacity: { min: 8, max: 10 },
    description: 'Perfect for family celebrations',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba',
    features: [
      '3 Hours Duration',
      'Premium Sound System',
      'Comfortable Seating',
      'Private Ambiance'
    ]
  },
  GROUP: {
    id: 'group',
    name: 'Group Theater',
    price: 1599,
    capacity: { min: 6, max: 8 },
    description: 'Ideal for friend gatherings',
    image: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c',
    features: [
      '3 Hours Duration',
      'Premium Sound System',
      'Comfortable Seating',
      'Private Ambiance'
    ]
  },
  COUPLE: {
    id: 'couple',
    name: 'Couple Theater',
    price: 1111,
    capacity: { min: 2, max: 2 },
    description: 'Romantic setting for couples',
    image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1',
    features: [
      '3 Hours Duration',
      'Premium Sound System',
      'Couple Seating',
      'Private Ambiance'
    ]
  }
} as const;

export const TIME_SLOTS = [
  { id: '1', startTime: '9:30 AM', endTime: '12:30 PM' },
  { id: '2', startTime: '12:30 PM', endTime: '3:30 PM' },
  { id: '3', startTime: '3:30 PM', endTime: '6:30 PM' },
  { id: '4', startTime: '6:30 PM', endTime: '9:30 PM' },
  { id: '5', startTime: '9:30 PM', endTime: '12:30 AM' }
] as const;