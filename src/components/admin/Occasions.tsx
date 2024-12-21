import { motion } from 'framer-motion';
import { Search, Plus, Edit2, Trash2 } from 'lucide-react';
import { useState } from 'react';

// Mock occasions data
const occasions = [
  {
    id: 'O001',
    name: 'Birthday Celebration',
    bookings: 45,
    revenue: 125000,
    popularAddOns: ['Cake', 'Decoration', 'Photography'],
    status: 'Active'
  },
  // Add more mock occasions...
];

export function AdminOccasions() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredOccasions = occasions.filter(occasion =>
    occasion.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Occasion Management</h1>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Add New Occasion
        </motion.button>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search occasions..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Occasions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredOccasions.map((occasion) => (
          <motion.div
            key={occasion.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-semibold">{occasion.name}</h3>
              <div className="flex gap-2">
                <button className="p-1 hover:bg-gray-100 rounded">
                  <Edit2 className="w-4 h-4 text-gray-500" />
                </button>
                <button className="p-1 hover:bg-gray-100 rounded">
                  <Trash2 className="w-4 h-4 text-red-500" />
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Total Bookings</span>
                <span className="font-medium">{occasion.bookings}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Total Revenue</span>
                <span className="font-medium">₹{occasion.revenue}</span>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-sm text-gray-500 mb-2">Popular Add-ons:</p>
              <div className="flex flex-wrap gap-2">
                {occasion.popularAddOns.map((addon, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-indigo-50 text-indigo-600 rounded text-xs"
                  >
                    {addon}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-4 border-t">
              <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                occasion.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                {occasion.status}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}