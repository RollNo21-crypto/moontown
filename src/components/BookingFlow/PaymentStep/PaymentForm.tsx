import { motion } from 'framer-motion';
import { CreditCard } from 'lucide-react';
import { useState } from 'react';
import { useBookingStore } from '../../../store/bookingStore';
import { PAYMENT_METHODS } from '../../../lib/constants/booking';
import { initializePayment, verifyPayment } from '../../../lib/payment/razorpay';

export function PaymentForm() {
  const [selectedMethod, setSelectedMethod] = useState<keyof typeof PAYMENT_METHODS>('UPI');
  const { getBookingSummary } = useBookingStore();
  const summary = getBookingSummary();

  const handlePayment = async () => {
    try {
      const payment = await initializePayment({
        method: selectedMethod.toLowerCase() as 'upi' | 'card' | 'netbanking',
        amount: summary.advanceAmount,
        currency: 'INR',
        description: 'Theater Booking Advance Payment'
      });

      // In a real app, we would handle the payment flow here
      const verification = await verifyPayment(payment.id);
      
      if (verification.status === 'success') {
        // Handle successful payment
      }
    } catch (error) {
      console.error('Payment failed:', error);
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-4">
        {Object.entries(PAYMENT_METHODS).map(([key, method]) => (
          <motion.button
            key={key}
            whileHover={{ scale: 1.02 }}
            onClick={() => setSelectedMethod(key as keyof typeof PAYMENT_METHODS)}
            className={`w-full flex items-center justify-between p-4 border rounded-lg ${
              selectedMethod === key ? 'border-indigo-600 bg-indigo-50' : 'hover:border-gray-300'
            }`}
          >
            <div className="flex items-center">
              {method.icon === 'credit-card' ? (
                <CreditCard className="w-6 h-6 mr-3" />
              ) : (
                <img src={method.icon} alt={method.name} className="w-8 h-8 mr-3" />
              )}
              <div>
                <p className="font-medium">{method.name}</p>
                <p className="text-sm text-gray-500">{method.description}</p>
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={handlePayment}
        className="w-full py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700"
      >
        Pay ₹{summary.advanceAmount}
      </motion.button>

      <p className="text-sm text-gray-500 text-center">
        By clicking Pay, you agree to our terms and conditions
      </p>
    </div>
  );
}