export const BOOKING_STEPS = {
  SEARCH: 1,
  THEATER: 2,
  DETAILS: 3,
  OCCASION: 4,
  ADDONS: 5,
  PAYMENT: 6
} as const;

export const PAYMENT_METHODS = {
  UPI: {
    id: 'upi',
    name: 'UPI Payment',
    description: 'Pay using Google Pay, PhonePe, or Paytm',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/UPI-Logo-vector.svg'
  },
  CARD: {
    id: 'card',
    name: 'Credit/Debit Card',
    description: 'Pay using Visa, Mastercard, or RuPay',
    icon: 'credit-card'
  },
  NET_BANKING: {
    id: 'netbanking',
    name: 'Net Banking',
    description: 'Pay using your bank account',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/NPCI_Logo.svg'
  }
} as const;

export const BOOKING_VALIDATION = {
  MIN_ADVANCE_HOURS: 24,
  MAX_ADVANCE_DAYS: 30,
  CANCELLATION_HOURS: 48,
  REFUND_PERCENTAGE: 100
} as const;