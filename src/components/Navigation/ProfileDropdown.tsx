import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { User, Settings, LogOut, Calendar, CreditCard } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';
import { useNavigationStore } from '../../store/navigationStore';

export function ProfileDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, signOut } = useAuthStore();
  const { setPage } = useNavigationStore();

  const menuItems = [
    { icon: User, label: 'Profile', page: 'profile' },
    { icon: Calendar, label: 'My Bookings', page: 'bookings' },
    { icon: CreditCard, label: 'Payments', page: 'payments' },
    { icon: Settings, label: 'Settings', page: 'settings' },
  ];

  const handleMenuClick = (page: string) => {
    setPage(page);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 focus:outline-none"
      >
        {user?.avatarUrl ? (
          <img
            src={user.avatarUrl}
            alt={user.fullName}
            className="w-8 h-8 rounded-full"
          />
        ) : (
          <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
            <span className="text-sm font-semibold text-indigo-600">
              {user?.fullName?.[0] || user?.email[0].toUpperCase()}
            </span>
          </div>
        )}
        <span className="hidden md:block font-medium">{user?.fullName}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-50"
          >
            {menuItems.map((item) => (
              <motion.button
                key={item.page}
                whileHover={{ x: 4 }}
                onClick={() => handleMenuClick(item.page)}
                className="w-full flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50"
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </motion.button>
            ))}
            <div className="border-t my-1" />
            <motion.button
              whileHover={{ x: 4 }}
              onClick={() => {
                signOut();
                setPage('home');
                setIsOpen(false);
              }}
              className="w-full flex items-center space-x-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50"
            >
              <LogOut className="w-4 h-4" />
              <span>Sign Out</span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}