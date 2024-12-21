import type { Package } from '../types';

export const packages: Package[] = [
  {
    id: 'gold',
    name: 'Gold Package',
    price: 9999,
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80',
    description: 'Premium celebration package with luxury amenities',
    includes: [
      'Premium Decoration with Flower Wall',
      '2-hour Professional Photography',
      'Premium Cake (2 kg)',
      'Welcome Drinks',
      'Gourmet Snacks for all guests',
      'Fog Entry',
      'LED Name Display',
      'Digital Memory Book'
    ]
  },
  {
    id: 'silver',
    name: 'Silver Package',
    price: 6999,
    image: 'https://images.unsplash.com/photo-1464349153735-7db50ed83c84?auto=format&fit=crop&q=80',
    description: 'Enhanced celebration package with premium features',
    includes: [
      'Standard Decoration with Balloons',
      '1-hour Professional Photography',
      'Standard Cake (1.5 kg)',
      'Welcome Drinks',
      'Basic Snacks Package',
      'Basic LED Setup'
    ]
  },
  {
    id: 'platinum',
    name: 'Platinum Package',
    price: 14999,
    image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80',
    description: 'Ultra-luxury celebration package with exclusive features',
    includes: [
      'Luxury Theme Decoration',
      '3-hour Photography & Videography',
      'Premium Designer Cake (3 kg)',
      'Welcome Drinks & Mocktails',
      'Premium Food & Beverages',
      'Fog Entry with Special Effects',
      'Custom LED Wall Display',
      'Live Music (2 hours)',
      'Professional Event Coordinator',
      'Premium Photo Album & Video Edit'
    ]
  }
];