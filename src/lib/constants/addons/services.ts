// Special services pricing
export const SERVICES = {
  PHOTOGRAPHY: {
    BASIC: {
      id: 'photo-video-basic',
      name: 'Photography & Videography - 30 min',
      price: 699,
      includes: [
        '30 pictures',
        '15 candid pics',
        '30 sec Instagram reels',
        'Spot edit'
      ]
    }
  },
  FOG_ENTRY: {
    ONE_POT: { price: 300, pots: 1 },
    TWO_POTS: { price: 500, pots: 2 },
    THREE_POTS: { price: 700, pots: 3 },
    FOUR_POTS: { price: 900, pots: 4 },
    GRAND: { price: 1599, pots: 10 }
  }
} as const;