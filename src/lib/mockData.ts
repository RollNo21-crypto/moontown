import type { City, Theater, AddOn, Package, AddOnCategory } from '../types';

// Cities and Locations
export const cities: City[] = [
  {
    id: '1',
    name: 'Bangalore',
    locations: [
      { id: '1', name: 'MG Road' },
      { id: '2', name: 'Koramangala' },
      { id: '3', name: 'Banashankari' },
      { id: '4', name: 'Indiranagar' },
      { id: '5', name: 'Whitefield' },
    ],
  },
];

// Theater data
export const theaters: Theater[] = [
  {
    id: '1',
    name: 'Luxe Cinema',
    location: 'MG Road, Bangalore',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80',
    slots: [
      { id: '1', startTime: '9:30 AM', endTime: '12:30 PM', available: true },
      { id: '2', startTime: '12:30 PM', endTime: '3:30 PM', available: true },
      { id: '3', startTime: '3:30 PM', endTime: '6:30 PM', available: true },
      { id: '4', startTime: '6:30 PM', endTime: '9:30 PM', available: true },
      { id: '5', startTime: '9:30 PM', endTime: '12:30 AM', available: true },
    ],
    capacityOptions: [
      { type: 'COUPLE', minPeople: 2, maxPeople: 2, pricePerPerson: 1500 },
      { type: 'FAMILY', minPeople: 8, maxPeople: 10, pricePerPerson: 1000 },
      { type: 'GROUP', minPeople: 6, maxPeople: 8, pricePerPerson: 800 }
    ],
    amenities: ['4K Projection', 'Dolby Atmos', 'Recliner Seats'],
    description: 'Premium theater experience with state-of-the-art facilities',
  },
  {
    id: '2',
    name: 'Premier Screens',
    location: 'Koramangala, Bangalore',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&q=80',
    slots: [
      { id: '1', startTime: '9:30 AM', endTime: '12:30 PM', available: true },
      { id: '2', startTime: '12:30 PM', endTime: '3:30 PM', available: false },
      { id: '3', startTime: '3:30 PM', endTime: '6:30 PM', available: true },
      { id: '4', startTime: '6:30 PM', endTime: '9:30 PM', available: true },
      { id: '5', startTime: '9:30 PM', endTime: '12:30 AM', available: true },
    ],
    capacityOptions: [
      { type: 'COUPLE', minPeople: 2, maxPeople: 2, pricePerPerson: 1400 },
      { type: 'FAMILY', minPeople: 8, maxPeople: 10, pricePerPerson: 900 },
      { type: 'GROUP', minPeople: 6, maxPeople: 8, pricePerPerson: 750 }
    ],
    amenities: ['4K Projection', 'Dolby Sound', 'Premium Seating'],
    description: 'Luxury cinema experience in the heart of Koramangala',
  },
  {
    id: '3',
    name: 'Royal Cinema',
    location: 'Indiranagar, Bangalore',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&q=80',
    slots: [
      { id: '1', startTime: '9:30 AM', endTime: '12:30 PM', available: true },
      { id: '2', startTime: '12:30 PM', endTime: '3:30 PM', available: true },
      { id: '3', startTime: '3:30 PM', endTime: '6:30 PM', available: false },
      { id: '4', startTime: '6:30 PM', endTime: '9:30 PM', available: true },
      { id: '5', startTime: '9:30 PM', endTime: '12:30 AM', available: true },
    ],
    capacityOptions: [
      { type: 'COUPLE', minPeople: 2, maxPeople: 2, pricePerPerson: 1600 },
      { type: 'FAMILY', minPeople: 8, maxPeople: 10, pricePerPerson: 1100 },
      { type: 'GROUP', minPeople: 6, maxPeople: 8, pricePerPerson: 850 }
    ],
    amenities: ['8K Projection', 'Dolby Atmos', 'Luxury Recliners', 'Butler Service'],
    description: 'Ultra-premium cinema experience with personalized service',
  }
];

// Cakes
export const cakes: AddOn[] = [
  {
    id: 'cake-1',
    name: 'Classic Chocolate',
    price: 599,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80',
    category: 'CAKE',
    description: 'Rich chocolate cake with chocolate ganache',
  },
  {
    id: 'cake-2',
    name: 'Red Velvet',
    price: 699,
    image: 'https://images.unsplash.com/photo-1586788680434-30d324b2d46f?auto=format&fit=crop&q=80',
    category: 'CAKE',
    description: 'Classic red velvet with cream cheese frosting',
  },
  {
    id: 'cake-3',
    name: 'Premium Fruit',
    price: 799,
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&q=80',
    category: 'CAKE',
    description: 'Fresh fruit cake with whipped cream',
  },
  {
    id: 'cake-4',
    name: 'Black Forest',
    price: 849,
    image: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&q=80',
    category: 'CAKE',
    description: 'Classic Black Forest with cherry toppings',
  },
  {
    id: 'cake-5',
    name: 'Butterscotch',
    price: 749,
    image: 'https://images.unsplash.com/photo-1542826438-bd32f43d626f?auto=format&fit=crop&q=80',
    category: 'CAKE',
    description: 'Butterscotch cake with caramel drizzle',
  }
];

// Decorations
export const decorations: AddOn[] = [
  {
    id: 'decor-1',
    name: 'Balloon Arch',
    price: 999,
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80',
    category: 'DECORATION',
    description: 'Elegant balloon arch with custom colors',
  },
  {
    id: 'decor-2',
    name: 'Flower Wall',
    price: 1499,
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80',
    category: 'DECORATION',
    description: 'Beautiful flower wall backdrop',
  },
  {
    id: 'decor-3',
    name: 'LED Setup',
    price: 799,
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80',
    category: 'DECORATION',
    description: 'Ambient LED lighting setup',
  },
  {
    id: 'decor-4',
    name: 'Premium Theme',
    price: 2499,
    image: 'https://images.unsplash.com/photo-1464047736614-af63643285bf?auto=format&fit=crop&q=80',
    category: 'DECORATION',
    description: 'Complete themed decoration setup',
  },
  {
    id: 'decor-5',
    name: 'Romantic Setup',
    price: 1999,
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80',
    category: 'DECORATION',
    description: 'Romantic decoration with roses and candles',
  }
];

// Packages
export const packages: Package[] = [
  {
    id: 'pkg-1',
    name: 'Birthday Special',
    price: 2999,
    image: 'https://images.unsplash.com/photo-1464349153735-7db50ed83c84?auto=format&fit=crop&q=80',
    description: 'Complete birthday celebration package',
    includes: [
      'Classic Chocolate Cake',
      'Balloon Decorations',
      'Birthday Banner',
      'Party Poppers',
      'Customized Playlist',
    ],
  },
  {
    id: 'pkg-2',
    name: 'Anniversary Romance',
    price: 3999,
    image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80',
    description: 'Romantic anniversary celebration package',
    includes: [
      'Red Velvet Cake',
      'Rose Petals',
      'Champagne Setup',
      'Mood Lighting',
      'Couple Photoshoot',
    ],
  },
  {
    id: 'pkg-3',
    name: 'Premium Celebration',
    price: 5999,
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80',
    description: 'Luxury celebration package with all premium amenities',
    includes: [
      'Premium Cake of Choice',
      'Complete Venue Decoration',
      'Professional Photography',
      'Gourmet Dining',
      'Personalized Service',
      'Digital Memory Book',
    ],
  }
];

// Add-on Categories
export const addOnCategories: AddOnCategory[] = [
  {
    id: 'CAKE',
    name: 'Celebration Cakes',
    items: cakes,
  },
  {
    id: 'DECORATION',
    name: 'Decorations',
    items: decorations,
  },
  {
    id: 'PHOTOGRAPHY',
    name: 'Photography Services',
    items: [
      {
        id: 'photo-1',
        name: 'Professional Photography',
        price: 1999,
        image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80',
        category: 'PHOTOGRAPHY',
        description: '2-hour professional photoshoot with edited photos',
      },
      {
        id: 'photo-2',
        name: 'Videography',
        price: 2999,
        image: 'https://images.unsplash.com/photo-1585557288338-f4e4c667b534?auto=format&fit=crop&q=80',
        category: 'PHOTOGRAPHY',
        description: 'Event videography with edited highlights',
      },
      {
        id: 'photo-3',
        name: 'Premium Package',
        price: 4999,
        image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&q=80',
        category: 'PHOTOGRAPHY',
        description: 'Complete photo and video coverage with same-day preview',
      }
    ],
  },
  {
    id: 'ENTERTAINMENT',
    name: 'Entertainment',
    items: [
      {
        id: 'ent-1',
        name: 'Live Music',
        price: 2999,
        image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80',
        category: 'ENTERTAINMENT',
        description: '2-hour live music performance',
      },
      {
        id: 'ent-2',
        name: 'DJ Setup',
        price: 3999,
        image: 'https://images.unsplash.com/photo-1571266028243-e4bb35f0a8b7?auto=format&fit=crop&q=80',
        category: 'ENTERTAINMENT',
        description: 'Professional DJ with sound system',
      }
    ],
  },
  {
    id: 'GIFT',
    name: 'Special Gifts',
    items: [
      {
        id: 'gift-1',
        name: 'Premium Gift Hamper',
        price: 1499,
        image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80',
        category: 'GIFT',
        description: 'Luxury gift hamper with chocolates and goodies',
      },
      {
        id: 'gift-2',
        name: 'Customized Frame',
        price: 999,
        image: 'https://images.unsplash.com/photo-1596139881732-944fd85b3dd9?auto=format&fit=crop&q=80',
        category: 'GIFT',
        description: 'Personalized photo frame with your message',
      },
      {
        id: 'gift-3',
        name: 'Luxury Watch',
        price: 4999,
        image: 'https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?auto=format&fit=crop&q=80',
        category: 'GIFT',
        description: 'Premium branded watch with gift wrapping',
      }
    ],
  }
];