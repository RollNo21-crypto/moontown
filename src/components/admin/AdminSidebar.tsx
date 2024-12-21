import { motion } from 'framer-motion';
import { 
  Home, Users, Calendar, CreditCard, 
  Gift, Settings, LogOut 
} from 'lucide-react';
import { useNavigationStore } from '../../store/navigationStore';

const menuItems = [
  { icon: Home, label: 'Dashboard', page: 'admin-dashboard' },
  { icon: Calendar, label: 'Bookings', page: 'admin-bookings' },
  { icon: Users, label: 'Customers', page: 'admin-customers' },
  { icon: CreditCard, label: 'Payments', page: 'admin-payments' },
  { icon: Gift, label: 'Occasions', page: 'admin-occasions' },
  { icon: Settings, label: 'Settings', page: 'admin-settings' },
];

// Admin credentials (in a real app, this would be in a secure backend)
export const ADMIN_CREDENTIALS = {
  email: 'admin@privatetheater.com',
  password: 'Admin@123'
};

export function AdminSidebar() {
  const { setPage } = useNavigationStore();

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="p-6 border-b">
        <h1 className="text-xl font-bold text-gray-900">Admin Panel</h1>
        <p className="text-sm text-gray-500">Manage your theater business</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.page}>
              <motion.button
                whileHover={{ x: 4 }}
                onClick={() => setPage(item.page)}
                className="w-full flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-gray-100 text-gray-700"
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
          onClick={() => setPage('home')}
          className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100"
        >
          <LogOut className="w-5 h-5" />
          <span>Sign Out</span>
        </motion.button>
      </div>
    </div>
  );
}