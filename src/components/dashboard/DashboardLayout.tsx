import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { DashboardSidebar } from './DashboardSidebar';
import { useAuthStore } from '../../store/authStore';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { user } = useAuthStore();

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Sidebar Toggle */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="fixed top-4 right-4 z-50 p-2 bg-white rounded-lg shadow-lg md:hidden"
      >
        {isSidebarOpen ? <X /> : <Menu />}
      </button>

      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-lg transform transition-transform duration-200 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0
      `}>
        <DashboardSidebar />
      </div>

      {/* Main Content */}
      <div className="md:ml-64 p-8">
        {children}
      </div>
    </div>
  );
}