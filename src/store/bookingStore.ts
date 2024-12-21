import { create } from 'zustand';
import type { City, Location, Theater, AddOn, Package, BookingSummary, TheaterGroupType, OccasionDetails, BookingDetails } from '../types';
import { theaterApi } from '../lib/api';

interface BookingState {
  // Selection state
  selectedCity: City | null;
  selectedLocation: Location | null;
  selectedDate: Date | null;
  selectedTheater: Theater | null;
  selectedSlot: string | null;
  selectedGroupType: TheaterGroupType | null;
  selectedPackage: Package | null;
  selectedAddOns: AddOn[];
  selectedCake: AddOn | null;
  occasion: OccasionDetails | null;
  
  // UI state
  step: number;
  isSearching: boolean;
  theaters: Theater[];
  upcomingBookings: BookingDetails[];
  pastBookings: BookingDetails[];
  
  // Actions
  setCity: (city: City) => void;
  setLocation: (location: Location) => void;
  setDate: (date: Date) => void;
  setSelectedTheater: (theater: Theater) => void;
  setSelectedSlot: (slotId: string) => void;
  setSelectedGroupType: (type: TheaterGroupType) => void;
  setPackage: (pkg: Package | null) => void;
  setOccasion: (occasion: OccasionDetails) => void;
  setCake: (cake: AddOn | null) => void;
  addAddOn: (addOn: AddOn) => void;
  removeAddOn: (addOnId: string) => void;
  getBookingSummary: () => BookingSummary;
  nextStep: () => void;
  prevStep: () => void;
  searchTheaters: () => Promise<void>;
  fetchBookings: () => Promise<void>;
  reset: () => void;
}

const initialState = {
  selectedCity: null,
  selectedLocation: null,
  selectedDate: null,
  selectedTheater: null,
  selectedSlot: null,
  selectedGroupType: null,
  selectedPackage: null,
  selectedAddOns: [],
  selectedCake: null,
  occasion: null,
  step: 1,
  isSearching: false,
  theaters: [],
  upcomingBookings: [],
  pastBookings: [],
};

export const useBookingStore = create<BookingState>((set, get) => ({
  ...initialState,

  setCity: (city) => set({ selectedCity: city, selectedLocation: null }),
  setLocation: (location) => set({ selectedLocation: location }),
  setDate: (date) => set({ selectedDate: date }),
  setSelectedTheater: (theater) => set({ selectedTheater: theater }),
  setSelectedSlot: (slotId) => set({ selectedSlot: slotId }),
  setSelectedGroupType: (type) => set({ selectedGroupType: type }),
  setPackage: (pkg) => set({ selectedPackage: pkg }),
  setOccasion: (occasion) => set({ occasion }),
  setCake: (cake) => set({ selectedCake: cake }),
  
  addAddOn: (addOn) => set((state) => ({
    selectedAddOns: [...state.selectedAddOns, addOn],
  })),
  
  removeAddOn: (addOnId) => set((state) => ({
    selectedAddOns: state.selectedAddOns.filter((addon) => addon.id !== addOnId),
  })),

  getBookingSummary: () => {
    const state = get();
    
    if (!state.selectedTheater) {
      return {
        subtotal: 0,
        advanceAmount: 0,
        balanceAmount: 0,
        items: []
      };
    }

    const items = [];

    // Add theater
    items.push({
      name: state.selectedTheater.name,
      price: state.selectedTheater.price
    });

    // Add package if selected
    if (state.selectedPackage) {
      items.push({
        name: state.selectedPackage.name,
        price: state.selectedPackage.price
      });
    }

    // Add cake if selected
    if (state.selectedCake) {
      items.push({
        name: state.selectedCake.name,
        price: state.selectedCake.price
      });
    }

    // Add other add-ons
    state.selectedAddOns.forEach(addon => {
      items.push({
        name: addon.name,
        price: addon.price
      });
    });

    // Calculate totals
    const subtotal = items.reduce((sum, item) => sum + item.price, 0);
    const advanceAmount = Math.min(750, subtotal * 0.3);
    const balanceAmount = subtotal - advanceAmount;

    return {
      items,
      subtotal,
      advanceAmount,
      balanceAmount
    };
  },

  nextStep: () => set((state) => ({ step: state.step + 1 })),
  prevStep: () => set((state) => ({ step: state.step - 1 })),

  searchTheaters: async () => {
    const { selectedCity, selectedLocation, selectedDate } = get();
    if (!selectedCity || !selectedLocation || !selectedDate) return;

    set({ isSearching: true });
    try {
      const theaters = await theaterApi.search(
        selectedCity.id,
        selectedLocation.id,
        selectedDate.toISOString()
      );
      set({ theaters, isSearching: false });
    } catch (error) {
      set({ isSearching: false });
      throw error;
    }
  },

  fetchBookings: async () => {
    // Mock data - replace with actual API call
    const mockBookings = [
      {
        id: '1',
        theater: {
          id: '1',
          name: 'Luxe Cinema',
          location: 'MG Road',
        },
        date: '2024-03-20',
        slot: {
          startTime: '3:00 PM',
          endTime: '6:00 PM',
        },
        numberOfPeople: 4,
        occasion: {
          type: 'BIRTHDAY',
          names: { birthdayPerson: 'John Doe' },
        },
        totalAmount: 2999,
        status: 'UPCOMING',
      },
      {
        id: '2',
        theater: {
          id: '2',
          name: 'Premier Screens',
          location: 'Indiranagar',
        },
        date: '2024-02-15',
        slot: {
          startTime: '7:00 PM',
          endTime: '10:00 PM',
        },
        numberOfPeople: 2,
        occasion: {
          type: 'ANNIVERSARY',
          names: { person1: 'Jane', person2: 'John' },
        },
        totalAmount: 1999,
        status: 'COMPLETED',
      },
    ];

    set({
      upcomingBookings: mockBookings.filter(b => b.status === 'UPCOMING'),
      pastBookings: mockBookings.filter(b => b.status === 'COMPLETED'),
    });
  },

  reset: () => set(initialState),
}));