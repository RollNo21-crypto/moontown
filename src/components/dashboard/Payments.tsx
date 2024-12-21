import { motion } from 'framer-motion';
import { CreditCard, Download } from 'lucide-react';

export function Payments() {
  const transactions = [
    {
      id: '1',
      date: '2024-03-15',
      amount: 2999,
      status: 'COMPLETED',
      bookingId: 'BK001',
      paymentMethod: 'Credit Card',
    },
    {
      id: '2',
      date: '2024-03-10',
      amount: 1499,
      status: 'COMPLETED',
      bookingId: 'BK002',
      paymentMethod: 'UPI',
    },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Payment History</h1>

      {/* Payment Methods */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">Saved Payment Methods</h2>
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center space-x-4">
            <CreditCard className="w-6 h-6 text-gray-500" />
            <div>
              <p className="font-medium">•••• •••• •••• 4242</p>
              <p className="text-sm text-gray-500">Expires 12/25</p>
            </div>
          </div>
          <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">
            Default
          </span>
        </div>
      </div>

      {/* Transactions */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <motion.div
              key={transaction.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
            >
              <div>
                <p className="font-medium">Booking #{transaction.bookingId}</p>
                <p className="text-sm text-gray-500">
                  {new Date(transaction.date).toLocaleDateString()} • {transaction.paymentMethod}
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <span className="font-medium">₹{transaction.amount}</span>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 hover:bg-gray-200 rounded-full"
                >
                  <Download className="w-5 h-5 text-gray-500" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}