import { motion } from 'framer-motion';
import { useBookingStore } from '../../store/bookingStore';

export function BookingSummary() {
  const { 
    selectedTheater,
    selectedPackage,
    selectedCake,
    selectedAddOns,
  } = useBookingStore();

  if (!selectedTheater) return null;

  // Calculate totals
  const theaterPrice = selectedTheater.price;
  const packagePrice = selectedPackage?.price || 0;
  const cakePrice = selectedCake?.price || 0;
  const addOnsTotal = selectedAddOns.reduce((sum, addon) => sum + addon.price, 0);
  
  const subtotal = theaterPrice + packagePrice + cakePrice + addOnsTotal;
  const advanceAmount = Math.min(750, subtotal * 0.3); // 30% or max 750
  const balanceAmount = subtotal - advanceAmount;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-6 rounded-lg shadow-lg"
    >
      <h3 className="text-lg font-semibold mb-6">Booking Summary</h3>
      
      <div className="space-y-4">
        {/* Theater Charges */}
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">
            {selectedTheater.name}
            <span className="text-xs ml-1">
              ({selectedTheater.capacity.min}-{selectedTheater.capacity.max} people)
            </span>
          </span>
          <span className="font-medium">₹{theaterPrice}</span>
        </div>

        {/* Package */}
        {selectedPackage && (
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">{selectedPackage.name}</span>
            <span className="font-medium">₹{selectedPackage.price}</span>
          </div>
        )}

        {/* Cake */}
        {selectedCake && (
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">{selectedCake.name}</span>
            <span className="font-medium">₹{selectedCake.price}</span>
          </div>
        )}

        {/* Add-ons */}
        {selectedAddOns.map((addon, index) => (
          <div key={`${addon.id}-${index}`} className="flex justify-between text-sm">
            <span className="text-gray-600">{addon.name}</span>
            <span className="font-medium">₹{addon.price}</span>
          </div>
        ))}

        {/* Totals */}
        <div className="pt-4 border-t">
          <div className="flex justify-between text-sm font-medium">
            <span className="text-gray-600">Subtotal</span>
            <span>₹{subtotal}</span>
          </div>
          
          <div className="flex justify-between text-sm mt-2">
            <span className="text-gray-600">Advance amount (30%)</span>
            <span className="font-medium">₹{advanceAmount}</span>
          </div>
          
          <div className="flex justify-between text-sm mt-2">
            <span className="text-gray-600">Balance amount</span>
            <span className="font-medium">₹{balanceAmount}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}