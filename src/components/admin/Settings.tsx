import { motion } from 'framer-motion';
import { Save } from 'lucide-react';
import { useState } from 'react';

export function AdminSettings() {
  const [settings, setSettings] = useState({
    companyName: 'Private Theater',
    email: 'contact@privatetheater.com',
    phone: '+91 98765 43210',
    address: '123 Theater Street, Bangalore',
    maxBookingsPerSlot: 1,
    advanceBookingDays: 30,
    cancellationPolicy: '48 hours',
    refundPolicy: '100% refund if cancelled 48 hours before',
    maintenanceMode: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Save settings logic here
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">System Settings</h1>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleSubmit}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center gap-2"
        >
          <Save className="w-4 h-4" />
          Save Changes
        </motion.button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Company Information */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Company Information</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Company Name</label>
              <input
                type="text"
                value={settings.companyName}
                onChange={(e) => setSettings(prev => ({ ...prev, companyName: e.target.value }))}
                className="mt-1 block w-full px-3 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                value={settings.email}
                onChange={(e) => setSettings(prev => ({ ...prev, email: e.target.value }))}
                className="mt-1 block w-full px-3 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <input
                type="text"
                value={settings.phone}
                onChange={(e) => setSettings(prev => ({ ...prev, phone: e.target.value }))}
                className="mt-1 block w-full px-3 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Address</label>
              <textarea
                value={settings.address}
                onChange={(e) => setSettings(prev => ({ ...prev, address: e.target.value }))}
                rows={3}
                className="mt-1 block w-full px-3 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>
        </div>

        {/* Booking Settings */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Booking Settings</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Max Bookings Per Slot</label>
              <input
                type="number"
                value={settings.maxBookingsPerSlot}
                onChange={(e) => setSettings(prev => ({ ...prev, maxBookingsPerSlot: parseInt(e.target.value) }))}
                className="mt-1 block w-full px-3 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Advance Booking Days</label>
              <input
                type="number"
                value={settings.advanceBookingDays}
                onChange={(e) => setSettings(prev => ({ ...prev, advanceBookingDays: parseInt(e.target.value) }))}
                className="mt-1 block w-full px-3 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Cancellation Policy</label>
              <input
                type="text"
                value={settings.cancellationPolicy}
                onChange={(e) => setSettings(prev => ({ ...prev, cancellationPolicy: e.target.value }))}
                className="mt-1 block w-full px-3 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Refund Policy</label>
              <textarea
                value={settings.refundPolicy}
                onChange={(e) => setSettings(prev => ({ ...prev, refundPolicy: e.target.value }))}
                rows={3}
                className="mt-1 block w-full px-3 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>
        </div>

        {/* System Settings */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">System Settings</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="maintenanceMode"
                checked={settings.maintenanceMode}
                onChange={(e) => setSettings(prev => ({ ...prev, maintenanceMode: e.target.checked }))}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="maintenanceMode" className="ml-2 block text-sm text-gray-900">
                Enable Maintenance Mode
              </label>
            </div>
            {settings.maintenanceMode && (
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <div className="flex">
                  <div className="ml-3">
                    <p className="text-sm text-yellow-700">
                      Maintenance mode will prevent users from making new bookings. Existing bookings will not be affected.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Backup & Recovery */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Backup & Recovery</h2>
          <div className="space-y-4">
            <button className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 flex items-center justify-center gap-2">
              Download Database Backup
            </button>
            <button className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 flex items-center justify-center gap-2">
              Export System Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}