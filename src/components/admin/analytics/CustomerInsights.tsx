import { motion } from 'framer-motion';
import { Users, UserPlus, UserMinus, Repeat } from 'lucide-react';

export function CustomerInsights() {
  // Mock data - replace with real data in production
  const insights = {
    totalCustomers: 1234,
    newCustomers: 45,
    returningCustomers: 78,
    churnRate: '2.3%'
  };

  const metrics = [
    {
      icon: Users,
      label: 'Total Customers',
      value: insights.totalCustomers,
      color: 'bg-blue-50 text-blue-600'
    },
    {
      icon: UserPlus,
      label: 'New Customers',
      value: insights.newCustomers,
      color: 'bg-green-50 text-green-600'
    },
    {
      icon: Repeat,
      label: 'Returning Customers',
      value: insights.returningCustomers,
      color: 'bg-purple-50 text-purple-600'
    },
    {
      icon: UserMinus,
      label: 'Churn Rate',
      value: insights.churnRate,
      color: 'bg-red-50 text-red-600'
    }
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Customer Insights</h3>
      <div className="grid grid-cols-2 gap-4">
        {metrics.map((metric, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-4 rounded-lg bg-gray-50"
          >
            <div className={`w-8 h-8 ${metric.color} rounded-lg flex items-center justify-center mb-2`}>
              <metric.icon className="w-5 h-5" />
            </div>
            <p className="text-sm text-gray-500">{metric.label}</p>
            <p className="text-xl font-semibold">{metric.value}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}