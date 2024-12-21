// Base theater prices per type
export const THEATER_PRICES = {
  FAMILY: 1599,  // Family theater base price
  FRIEND: 1599,  // Friend theater base price
  COUPLE: 1111,  // Couple theater base price
} as const;

// Package prices (includes theater + addons)
export const PACKAGE_PRICES = {
  FAMILY_GOLD: 2500,  // Family gold package
  FRIEND_GOLD: 2500,  // Friend gold package
  COUPLE_GOLD: 2000,  // Couple gold package
} as const;

// Duration and capacity limits
export const THEATER_CONFIGS = {
  FAMILY: {
    minPeople: 8,
    maxPeople: 10,
    duration: '3 hours'
  },
  FRIEND: {
    minPeople: 6,
    maxPeople: 8,
    duration: '3 hours'
  },
  COUPLE: {
    minPeople: 2,
    maxPeople: 2,
    duration: '3 hours'
  }
} as const;