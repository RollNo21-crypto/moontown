import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useBookingStore } from '../../../store/bookingStore';
import { DECORATION_ITEMS } from '../../../lib/constants';

export function DecorationSelection() {
  const { selectedAddOns, addAddOn, removeAddOn } = useBookingStore();

  return (
    <div className="space-y-6">
      {Object.entries(DECORATION_ITEMS).map(([key, item]) => (
        <motion.div
          key={key}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <ul className="mt-2 space-y-1">
                {item.includes.map((feature, index) => (
                  <li key={index} className="text-sm text-gray-600">• {feature}</li>
                ))}
              </ul>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-lg font-semibold text-indigo-600">₹{item.price}</span>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => removeAddOn(key)}
                  className="p-1 rounded-full hover:bg-gray-100"
                >
                  <Minus className="w-5 h-5" />
                </button>
                <span className="w-8 text-center">
                  {selectedAddOns.filter(addon => addon.id === key).length}
                </span>
                <button
                  onClick={() => addAddOn({ id: key, ...item })}
                  className="p-1 rounded-full hover:bg-gray-100"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}