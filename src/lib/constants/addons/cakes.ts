// Cake categories and their prices
export const CAKE_CATEGORIES = {
  STANDARD: {
    price: 500,
    options: ['Chocolate', 'Black Forest', 'Butterscotch', 'Pineapple']
  },
  PREMIUM: {
    price: 600,
    options: ['Red Velvet Round', 'Irish Coffee']
  },
  SPECIAL: {
    price: 750,
    options: ['Red Velvet Heart']
  },
  LUXURY: {
    price: 800,
    options: ['Choco Truffle', 'DBC', 'Choco Oreo', 'Choco Chip Loaded']
  },
  EXCLUSIVE: {
    price: 1000,
    options: ['Kit Jar']
  }
} as const;

export const CAKES = [
  {
    id: 'chocolate-cake',
    name: 'Chocolate Cake',
    price: CAKE_CATEGORIES.STANDARD.price,
    category: 'STANDARD',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587',
    description: 'Classic chocolate cake with rich chocolate frosting'
  },
  // ... rest of the cakes with updated prices and categories
] as const;