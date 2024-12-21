import { create } from 'zustand';

type Page = 'home' | 'services' | 'about' | 'gallery' | 'contact' | 'login' |
            'dashboard' | 'profile' | 'bookings' | 'payments' | 'settings' |
            'admin-dashboard' | 'admin-bookings' | 'admin-customers' | 'admin-payments' | 
            'admin-occasions' | 'admin-settings';

interface NavigationState {
  currentPage: Page;
  setPage: (page: Page) => void;
}

export const useNavigationStore = create<NavigationState>((set) => ({
  currentPage: 'home',
  setPage: (page) => set({ currentPage: page }),
}));