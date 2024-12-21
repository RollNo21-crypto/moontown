export interface BookingDetails {
  id: string;
  theater: {
    id: string;
    name: string;
    location: string;
  };
  date: string;
  slot: {
    startTime: string;
    endTime: string;
  };
  numberOfPeople: number;
  occasion: {
    type: string;
    names: Record<string, string>;
  };
  totalAmount: number;
  status: 'UPCOMING' | 'COMPLETED' | 'CANCELLED';
}

export interface BookingSummary {
  items: Array<{
    name: string;
    price: number;
  }>;
  subtotal: number;
  advanceAmount: number;
  balanceAmount: number;
}

export interface AddOn {
  id: string;
  name: string;
  price: number;
  image: string;
  category: 'CAKE' | 'DECORATION' | 'GIFT' | 'SERVICE';
  description?: string;
}

export interface Package {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  includes: string[];
}

export interface AddOnCategory {
  id: string;
  name: string;
  items: AddOn[];
}