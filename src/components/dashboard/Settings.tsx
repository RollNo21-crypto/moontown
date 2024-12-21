import { motion } from 'framer-motion';
import { Bell, Lock, Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'react-hot-toast';

export function Settings() {
  const [showPassword, setShowPassword] = useState(false);
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    browser: true,
  });

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Password updated successfully');
  };

  const handleNotificationChange = (type: keyof typeof notifications) => {
    setNotifications(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
    toast.success('Notification settings updated');
  };

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Settings</h1>

      {/* Password Settings */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center space-x-2 mb-6">
          <Lock className="w-5 h-5 text-gray-500" />
          <h2 className="text-lg font-semibold">Password Settings</h2>
        </div>

        <form onSubmit={handlePasswordChange} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Current Password</label>
            <div className="relative mt-1">
              <input
                type={showPassword ? 'text' : 'password'}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-gray-500"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">New Password</label>
            <input
              type="password"
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Confirm New Password</label>
            <input
              type="password"
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          >
            Update Password
          </motion.button>
        </form>
      </div>

      {/* Notification Settings */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center space-x-2 mb-6">
          <Bell className="w-5 h-5 text-gray-500" />
          <h2 className="text-lg font-semibold">Notification Settings</h2>
        </div>

        <div className="space-y-4">
          {Object.entries(notifications).map(([key, value]) => (
            <div key={key} className="flex items-center justify-between">
              <div>
                <p className="font-medium capitalize">{key} Notifications</p>
                <p className="text-sm text-gray-500">
                  Receive notifications via {key}
                </p>
              </div>
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => handleNotificationChange(key as keyof typeof notifications)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  value ? 'bg-indigo-600' : 'bg-gray-200'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    value ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </motion.button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}