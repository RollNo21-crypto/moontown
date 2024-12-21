import { motion } from 'framer-motion';
import { Calendar, Users, Clock } from 'lucide-react';

export function BookingTrends() {
  // Mock data - replace with real data in production
  const trends = [
    {
      icon: Calendar,
      label: 'Most Popular Day',
      value: 'Saturday',
      change: '+15%'
    },
    {
      icon: Clock,
      label: 'Peak Hours',
      value: '6:30 PM - 9:30 PM',
      change: '+25%'
    },
    {
      icon: Users,
      label: 'Popular Package',
      value: 'Family Gold',
      change: '+30%'
    }
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Booking Trends</h3>
      <div className="grid gap-6">
        {trends.map((trend, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center justify-between"
          >
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-indigo-50 rounded-lg">
                <trend.icon className="w-5 h-5 text-indigo-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">{trend.label}</p>
                <p className="font-semibold">{trend.value}</p>
              </div>
            </div>
            <span className="text-green-600 text-sm font-medium">{trend.change}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}