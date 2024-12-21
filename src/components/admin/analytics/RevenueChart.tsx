import { motion } from 'framer-motion';
import { ArrowUp, ArrowDown } from 'lucide-react';

export function RevenueChart() {
  // Mock data - in real app, fetch from backend
  const monthlyRevenue = {
    current: 123500,
    previous: 98000,
    percentageChange: 26.02
  };

  const isPositiveGrowth = monthlyRevenue.percentageChange > 0;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Revenue Overview</h3>
      <div className="flex items-end justify-between mb-8">
        <div>
          <p className="text-sm text-gray-500">Total Revenue</p>
          <p className="text-3xl font-bold">₹{monthlyRevenue.current.toLocaleString()}</p>
        </div>
        <div className={`flex items-center ${
          isPositiveGrowth ? 'text-green-600' : 'text-red-600'
        }`}>
          {isPositiveGrowth ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
          <span className="ml-1">{Math.abs(monthlyRevenue.percentageChange)}%</span>
        </div>
      </div>
      
      {/* Mock Chart - Replace with actual chart library in production */}
      <div className="h-48 bg-gray-50 rounded-lg flex items-end p-4 space-x-2">
        {[65, 45, 75, 55, 85, 35, 95, 65, 75, 85, 95, 65].map((height, index) => (
          <motion.div
            key={index}
            initial={{ height: 0 }}
            animate={{ height: `${height}%` }}
            className="flex-1 bg-indigo-600 rounded-t-lg"
          />
        ))}
      </div>
      <div className="flex justify-between mt-2 text-xs text-gray-500">
        <span>Jan</span>
        <span>Feb</span>
        <span>Mar</span>
        <span>Apr</span>
        <span>May</span>
        <span>Jun</span>
        <span>Jul</span>
        <span>Aug</span>
        <span>Sep</span>
        <span>Oct</span>
        <span>Nov</span>
        <span>Dec</span>
      </div>
    </div>
  );
}