import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { mockUsers } from '../lib/auth/mockUser';

interface User {
  id: string;
  email: string;
  fullName: string | null;
  avatarUrl: string | null;
  googleId?: string | null;
}

interface AuthState {
  user: User | null;
  isLoading: boolean;
  signInWithEmail: (email: string, password: string) => Promise<void>;
  signUpWithEmail: (email: string, password: string, fullName: string) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signOut: () => void;
  updateProfile: (data: Partial<User>) => Promise<void>;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isLoading: false,

      signInWithEmail: async (email, password) => {
        set({ isLoading: true });
        try {
          // Mock authentication
          const mockUser = mockUsers.find(u => u.email === email);
          if (!mockUser) throw new Error('Invalid credentials');
          
          set({ user: mockUser, isLoading: false });
        } catch (error) {
          set({ isLoading: false });
          throw error;
        }
      },

      signUpWithEmail: async (email, password, fullName) => {
        set({ isLoading: true });
        try {
          // Mock sign up
          const newUser = {
            id: String(mockUsers.length + 1),
            email,
            fullName,
            avatarUrl: null
          };
          set({ user: newUser, isLoading: false });
        } catch (error) {
          set({ isLoading: false });
          throw error;
        }
      },

      signInWithGoogle: async () => {
        set({ isLoading: true });
        try {
          // Mock Google sign in
          const mockGoogleUser = {
            id: 'google-123',
            email: 'user@gmail.com',
            fullName: 'Google User',
            avatarUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80',
            googleId: '123456789'
          };
          set({ user: mockGoogleUser, isLoading: false });
        } catch (error) {
          set({ isLoading: false });
          throw error;
        }
      },

      signOut: () => {
        set({ user: null });
      },

      updateProfile: async (data) => {
        set((state) => ({
          user: state.user ? { ...state.user, ...data } : null
        }));
      }
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({ user: state.user }),
    }
  )
);