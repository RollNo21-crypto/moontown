import { useEffect } from 'react';
import { useAuthStore } from '../../store/authStore';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { isLoading } = useAuthStore();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-indigo-600 border-t-transparent" />
      </div>
    );
  }

  return children;
}