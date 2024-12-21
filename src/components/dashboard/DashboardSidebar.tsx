import { motion } from 'framer-motion';
import { 
  User, Calendar, Settings, CreditCard, 
  LogOut, Home as HomeIcon 
} from 'lucide-react';
import { useAuthStore } from '../../store/authStore';
import { useNavigationStore } from '../../store/navigationStore';

export function DashboardSidebar() {
  const { user, signOut } = useAuthStore();
  const { setPage } = useNavigationStore();

  const menuItems = [
    { icon: HomeIcon, label: 'Overview', page: 'dashboard' },
    { icon: Calendar, label: 'My Bookings', page: 'bookings' },
    { icon: User, label: 'Profile', page: 'profile' },
    { icon: CreditCard, label: 'Payments', page: 'payments' },
    { icon: Settings, label: 'Settings', page: 'settings' },
  ];

  return (
    <div className="h-full flex flex-col">
      {/* User Info */}
      <div className="p-6 border-b">
        <div className="flex items-center space-x-4">
          {user.avatarUrl ? (
            <img
              src={user.avatarUrl}
              alt={user.fullName}
              className="w-12 h-12 rounded-full"
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center">
              <span className="text-xl font-semibold text-indigo-600">
                {user.fullName?.[0] || user.email[0].toUpperCase()}
              </span>
            </div>
          )}
          <div>
            <h3 className="font-semibold">{user.fullName}</h3>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.page}>
              <motion.button
                whileHover={{ x: 4 }}
                onClick={() => setPage(item.page)}
                className="w-full flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-indigo-50 text-gray-700 hover:text-indigo-600"
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </motion.button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Logout */}
      <div className="p-4 border-t">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => {
            signOut();
            setPage('home');
          }}
          className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100"
        >
          <LogOut className="w-5 h-5" />
          <span>Sign Out</span>
        </motion.button>
      </div>
    </div>
  );
}