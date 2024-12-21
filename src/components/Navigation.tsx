import { motion } from 'framer-motion';
import { Film, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useNavigationStore } from '../store/navigationStore';
import { useAuthStore } from '../store/authStore';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currentPage, setPage } = useNavigationStore();
  const { user, signOut } = useAuthStore();

  const publicNavItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Our Services' },
    { id: 'about', label: 'About Us' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact Us' },
  ] as const;

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-shrink-0 flex items-center cursor-pointer"
              onClick={() => setPage('home')}
            >
              <Film className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">PrivateTheater</span>
            </motion.div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {publicNavItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setPage(item.id)}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  currentPage === item.id
                    ? 'text-indigo-600 bg-indigo-50'
                    : 'text-gray-700 hover:text-indigo-600 hover:bg-indigo-50'
                }`}
              >
                {item.label}
              </motion.button>
            ))}
            {user ? (
              <div className="flex items-center space-x-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setPage('dashboard')}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                >
                  Dashboard
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    signOut();
                    setPage('home');
                  }}
                  className="px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100"
                >
                  Sign Out
                </motion.button>
              </div>
            ) : (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setPage('login')}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                Sign In
              </motion.button>
            )}
          </div>

          {/* Mobile Navigation Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {publicNavItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setPage(item.id);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                  currentPage === item.id
                    ? 'text-indigo-600 bg-indigo-50'
                    : 'text-gray-700 hover:text-indigo-600 hover:bg-indigo-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            {user ? (
              <>
                <button
                  onClick={() => {
                    setPage('dashboard');
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 bg-indigo-600 text-white rounded-md"
                >
                  Dashboard
                </button>
                <button
                  onClick={() => {
                    signOut();
                    setPage('home');
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 bg-red-50 text-red-600 rounded-md"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <button
                onClick={() => {
                  setPage('login');
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 bg-indigo-600 text-white rounded-md"
              >
                Sign In
              </button>
            )}
          </div>
        </motion.div>
      )}
    </nav>
  );
}