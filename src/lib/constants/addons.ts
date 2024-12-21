// Theater Pricing
export const THEATER_PRICES = {
  FAMILY: 1599,
  FRIEND: 1599,
  COUPLE: 1111,
} as const;

// Package Pricing
export const PACKAGES = [
  {
    id: 'family-gold',
    name: 'Family Gold Package',
    price: 2500,
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
    price: 2500,
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
    price: 2000,
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

// Cakes
export const CAKES = [
  {
    id: 'chocolate-cake',
    name: 'Chocolate Cake',
    price: 500,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587',
  },
  {
    id: 'black-forest',
    name: 'Black Forest Cake',
    price: 500,
    image: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d',
  },
  {
    id: 'butterscotch',
    name: 'Butterscotch Cake',
    price: 500,
    image: 'https://images.unsplash.com/photo-1542826438-bd32f43d626f',
  },
  {
    id: 'pineapple',
    name: 'Pineapple Cake',
    price: 500,
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187',
  },
  {
    id: 'red-velvet-round',
    name: 'Red Velvet Round Cake',
    price: 600,
    image: 'https://images.unsplash.com/photo-1586788680434-30d324b2d46f',
  },
  {
    id: 'irish-coffee',
    name: 'Irish Coffee Cake',
    price: 600,
    image: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d',
  },
  {
    id: 'red-velvet-heart',
    name: 'Red Velvet Heart Cake',
    price: 750,
    image: 'https://images.unsplash.com/photo-1586788680434-30d324b2d46f',
  },
  {
    id: 'choco-truffle',
    name: 'Choco Truffle Cake',
    price: 800,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587',
  },
  {
    id: 'dbc',
    name: 'DBC Cake',
    price: 800,
    image: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d',
  },
  {
    id: 'choco-oreo',
    name: 'Choco Oreo Cake',
    price: 800,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587',
  },
  {
    id: 'choco-chip',
    name: 'Choco Chip Loaded Cake',
    price: 800,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587',
  },
  {
    id: 'kit-jar',
    name: 'Kit Jar Cake',
    price: 1000,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587',
  },
] as const;

// Decorations
export const DECORATIONS = [
  {
    id: 'basic-decor',
    name: 'Basic Decoration',
    price: 500,
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d',
  },
  {
    id: 'candle-path',
    name: 'Candle Path',
    price: 300,
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552',
  },
  {
    id: 'led-number',
    name: 'LED Number',
    price: 100,
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3',
  },
] as const;

// Gifts
export const GIFTS = [
  {
    id: 'heart-pillow',
    name: 'Small Heart Pillow',
    price: 200,
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48',
  },
  {
    id: 'event-sash',
    name: 'Event Sash',
    price: 100,
    image: 'https://images.unsplash.com/photo-1596139881732-944fd85b3dd9',
  },
  {
    id: 'crown',
    name: 'Crown',
    price: 150,
    image: 'https://images.unsplash.com/photo-1596139881732-944fd85b3dd9',
  },
  {
    id: 'bouquet-7',
    name: 'Bouquet 7 Roses',
    price: 350,
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed',
  },
  {
    id: 'bouquet-10',
    name: 'Bouquet 10 Roses',
    price: 450,
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed',
  },
  {
    id: 'luxury-bouquet',
    name: 'Luxury Bouquet 10 Roses',
    price: 500,
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed',
  },
] as const;

// Special Services
export const SPECIAL_SERVICES = [
  {
    id: 'photo-video',
    name: 'Photography & Videography',
    price: 699,
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32',
    description: '30 min - 30 pictures, 15 candid pics & 30 sec Instagram reels with spot edit',
  },
] as const;

// Fog Entry
export const FOG_ENTRY = [
  {
    id: 'fog-1',
    name: '1 Pot Fog Entry',
    price: 300,
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed',
  },
  {
    id: 'fog-2',
    name: '2 Pots Fog Entry',
    price: 500,
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed',
  },
  {
    id: 'fog-3',
    name: '3 Pots Fog Entry',
    price: 700,
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed',
  },
  {
    id: 'fog-4',
    name: '4 Pots Fog Entry',
    price: 900,
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed',
  },
  {
    id: 'fog-grand',
    name: 'Grand Fog Entry (10 Pots)',
    price: 1599,
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed',
  },
] as const;