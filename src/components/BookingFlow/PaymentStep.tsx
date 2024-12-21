import { motion } from 'framer-motion';
import { ArrowLeft, CreditCard } from 'lucide-react';
import { useBookingStore } from '../../store/bookingStore';

export function PaymentStep() {
  const { 
    prevStep, 
    selectedTheater,
    selectedGroupType,
    selectedAddOns,
    selectedPackage,
    selectedCake 
  } = useBookingStore();

  const getTheaterPrice = () => {
    if (!selectedTheater || !selectedGroupType) return 0;
    const option = selectedTheater.capacityOptions.find(o => o.type === selectedGroupType);
    return option ? option.pricePerPerson * option.minPeople : 0;
  };

  const calculateTotal = () => {
    const theaterPrice = getTheaterPrice();
    const addOnsTotal = selectedAddOns.reduce((total, addon) => total + addon.price, 0);
    const packagePrice = selectedPackage?.price || 0;
    const cakePrice = selectedCake?.price || 0;
    return theaterPrice + addOnsTotal + packagePrice + cakePrice;
  };

  const total = calculateTotal();
  const advanceAmount = 750; // Fixed advance amount
  const balanceAmount = total - advanceAmount;

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      className="max-w-2xl mx-auto"
    >
      <div className="flex items-center space-x-4 mb-8">
        <button
          onClick={prevStep}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h2 className="text-2xl font-semibold">Complete Your Payment</h2>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="space-y-6">
          <div className="border-b pb-6">
            <h3 className="text-lg font-semibold mb-4">Payment Options</h3>
            <div className="space-y-4">
              {/* UPI Payment */}
              <button className="w-full flex items-center justify-between p-4 border rounded-lg hover:border-indigo-500">
                <div className="flex items-center">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/UPI-Logo-vector.svg" alt="UPI" className="w-8 h-8 mr-3" />
                  <span>UPI Payment</span>
                </div>
                <span className="text-sm text-gray-500">Google Pay, PhonePe, Paytm</span>
              </button>

              {/* Credit/Debit Card */}
              <button className="w-full flex items-center justify-between p-4 border rounded-lg hover:border-indigo-500">
                <div className="flex items-center">
                  <CreditCard className="w-6 h-6 mr-3" />
                  <span>Credit/Debit Card</span>
                </div>
                <span className="text-sm text-gray-500">Visa, Mastercard, RuPay</span>
              </button>

              {/* Net Banking */}
              <button className="w-full flex items-center justify-between p-4 border rounded-lg hover:border-indigo-500">
                <div className="flex items-center">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/c/cc/NPCI_Logo.svg" alt="Net Banking" className="w-8 h-8 mr-3" />
                  <span>Net Banking</span>
                </div>
                <span className="text-sm text-gray-500">All Indian Banks</span>
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Theater Charges</span>
              <span>₹{getTheaterPrice()}</span>
            </div>
            {selectedPackage && (
              <div className="flex justify-between">
                <span>{selectedPackage.name}</span>
                <span>₹{selectedPackage.price}</span>
              </div>
            )}
            {selectedCake && (
              <div className="flex justify-between">
                <span>{selectedCake.name}</span>
                <span>₹{selectedCake.price}</span>
              </div>
            )}
            {selectedAddOns.map((addon, index) => (
              <div key={index} className="flex justify-between text-sm">
                <span>{addon.name}</span>
                <span>₹{addon.price}</span>
              </div>
            ))}
            <div className="border-t pt-4">
              <div className="flex justify-between font-semibold">
                <span>Total Amount</span>
                <span>₹{total}</span>
              </div>
              <div className="flex justify-between text-sm mt-2">
                <span>Advance Payment (Required)</span>
                <span>₹{advanceAmount}</span>
              </div>
              <div className="flex justify-between text-sm mt-2">
                <span>Balance (Pay at Venue)</span>
                <span>₹{balanceAmount}</span>
              </div>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700"
          >
            Pay ₹{advanceAmount}
          </motion.button>

          <p className="text-sm text-gray-500 text-center">
            By clicking Pay, you agree to our terms and conditions
          </p>
        </div>
      </div>
    </motion.div>
  );
}