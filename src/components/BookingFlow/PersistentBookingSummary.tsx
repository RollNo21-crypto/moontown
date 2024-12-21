import { motion } from 'framer-motion';
import { useBookingStore } from '../../store/bookingStore';

export function PersistentBookingSummary() {
  const { 
    selectedTheater,
    selectedGroupType,
    selectedCake,
    selectedAddOns,
    selectedPackage,
    occasion
  } = useBookingStore();

  const getTheaterPrice = () => {
    if (!selectedTheater || !selectedGroupType) return 0;
    const option = selectedTheater.capacityOptions.find(o => o.type === selectedGroupType);
    return option ? option.pricePerPerson * option.minPeople : 0;
  };

  const getAddOnsTotal = () => {
    return selectedAddOns.reduce((total, addon) => total + addon.price, 0);
  };

  const getCakePrice = () => selectedCake?.price || 0;
  const getPackagePrice = () => selectedPackage?.price || 0;

  const subtotal = getTheaterPrice() + getAddOnsTotal() + getCakePrice() + getPackagePrice();
  const advanceAmount = Math.min(750, subtotal * 0.3);
  const balanceAmount = subtotal - advanceAmount;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-6 rounded-lg shadow-lg sticky top-4"
    >
      <h3 className="text-lg font-semibold mb-6">Booking Summary</h3>
      
      <div className="space-y-4">
        {/* Theater Details */}
        {selectedTheater && selectedGroupType && (
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">
              Theater ({selectedGroupType.toLowerCase()})
              {selectedTheater.name && ` - ${selectedTheater.name}`}
            </span>
            <span className="font-medium">₹{getTheaterPrice()}</span>
          </div>
        )}

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

        {/* Occasion */}
        {occasion && (
          <div className="pt-2 border-t text-sm">
            <p className="text-gray-600">
              {occasion.type.charAt(0) + occasion.type.slice(1).toLowerCase()} Celebration
            </p>
          </div>
        )}

        {/* Totals */}
        <div className="pt-4 border-t">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-medium">₹{subtotal}</span>
          </div>
          
          <div className="flex justify-between text-sm mt-2">
            <span className="text-gray-600">Advance amount</span>
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