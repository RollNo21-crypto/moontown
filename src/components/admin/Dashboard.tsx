import { motion } from 'framer-motion';
import { RevenueChart } from './analytics/RevenueChart';
import { BookingTrends } from './analytics/BookingTrends';
import { CustomerInsights } from './analytics/CustomerInsights';

export function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dashboard Overview</h1>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
        >
          Download Report
        </motion.button>
      </div>

      {/* Analytics Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <RevenueChart />
        <CustomerInsights />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <BookingTrends />
        
        {/* Quick Actions */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
          <div className="grid gap-4">
            {[
              'View Today\'s Bookings',
              'Manage Theater Availability',
              'Update Package Prices',
              'View Customer Feedback'
            ].map((action, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full text-left px-4 py-3 bg-gray-50 rounded-lg hover:bg-gray-100"
              >
                {action}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
        <div className="space-y-4">
          {[
            { action: 'New Booking', user: 'John Doe', time: '5 minutes ago' },
            { action: 'Payment Received', user: 'Sarah Smith', time: '15 minutes ago' },
            { action: 'Package Updated', user: 'Admin', time: '1 hour ago' },
            { action: 'Customer Feedback', user: 'Mike Johnson', time: '2 hours ago' }
          ].map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
            >
              <div>
                <p className="font-medium">{activity.action}</p>
                <p className="text-sm text-gray-500">by {activity.user}</p>
              </div>
              <span className="text-sm text-gray-500">{activity.time}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}