import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useBookingStore } from '../../../store/bookingStore';
import { SPECIAL_SERVICES, FOG_ENTRY } from '../../../lib/constants';

export function SpecialServices() {
  const { selectedAddOns, addAddOn, removeAddOn } = useBookingStore();

  return (
    <div className="space-y-8">
      {/* Photography & Videography */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Photography & Videography</h3>
        <div className="grid gap-4">
          {SPECIAL_SERVICES.map((service) => (
            <motion.div
              key={service.id}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">{service.name}</h4>
                  <p className="text-sm text-gray-600 mt-1">{service.description}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-lg font-semibold text-indigo-600">₹{service.price}</span>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => removeAddOn(service.id)}
                      className="p-1 rounded-full hover:bg-gray-100"
                    >
                      <Minus className="w-5 h-5" />
                    </button>
                    <span className="w-8 text-center">
                      {selectedAddOns.filter(addon => addon.id === service.id).length}
                    </span>
                    <button
                      onClick={() => addAddOn(service)}
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
      </div>

      {/* Fog Entry Options */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Fog Entry</h3>
        <div className="grid gap-4">
          {FOG_ENTRY.map((option) => (
            <motion.div
              key={option.id}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">{option.name}</h4>
                  <p className="text-sm text-gray-600 mt-1">{option.description}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-lg font-semibold text-indigo-600">₹{option.price}</span>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => removeAddOn(option.id)}
                      className="p-1 rounded-full hover:bg-gray-100"
                    >
                      <Minus className="w-5 h-5" />
                    </button>
                    <span className="w-8 text-center">
                      {selectedAddOns.filter(addon => addon.id === option.id).length}
                    </span>
                    <button
                      onClick={() => addAddOn(option)}
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
      </div>
    </div>
  );
}