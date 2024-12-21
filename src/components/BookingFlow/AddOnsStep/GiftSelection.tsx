import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useBookingStore } from '../../../store/bookingStore';
import { GIFT_ITEMS } from '../../../lib/constants';

export function GiftSelection() {
  const { selectedAddOns, addAddOn, removeAddOn } = useBookingStore();

  return (
    <div className="space-y-8">
      {Object.entries(GIFT_ITEMS).map(([category, items]) => (
        <div key={category} className="space-y-4">
          <h3 className="text-lg font-semibold">{category.replace('_', ' ')}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {Object.entries(items).map(([key, item]) => (
              <motion.div
                key={key}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-4 rounded-lg shadow-md"
              >
                <h4 className="font-medium">{item.name}</h4>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-indigo-600 font-semibold">₹{item.price}</span>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => removeAddOn(key)}
                      className="p-1 rounded-full hover:bg-gray-100"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-6 text-center">
                      {selectedAddOns.filter(addon => addon.id === key).length}
                    </span>
                    <button
                      onClick={() => addAddOn({ id: key, ...item })}
                      className="p-1 rounded-full hover:bg-gray-100"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}