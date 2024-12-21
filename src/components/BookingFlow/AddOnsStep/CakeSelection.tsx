import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useBookingStore } from '../../../store/bookingStore';
import { CAKE_CATEGORIES, CAKES } from '../../../lib/constants';

export function CakeSelection() {
  const { selectedCake, setCake } = useBookingStore();

  return (
    <div className="space-y-6">
      {Object.entries(CAKE_CATEGORIES).map(([category, { price, options }]) => (
        <div key={category} className="space-y-4">
          <h3 className="text-lg font-semibold">{category} Cakes - ₹{price}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {options.map((cakeName) => {
              const cake = CAKES.find(c => c.name === cakeName);
              if (!cake) return null;

              return (
                <motion.div
                  key={cake.id}
                  whileHover={{ scale: 1.02 }}
                  className={`bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer ${
                    selectedCake?.id === cake.id ? 'ring-2 ring-indigo-600' : ''
                  }`}
                  onClick={() => setCake(selectedCake?.id === cake.id ? null : cake)}
                >
                  <div className="aspect-square">
                    <img
                      src={cake.image}
                      alt={cake.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-medium text-sm">{cake.name}</h4>
                    <p className="text-indigo-600 font-semibold mt-1">₹{cake.price}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}