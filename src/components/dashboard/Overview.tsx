import { motion } from 'framer-motion';
import { Calendar, Clock, CreditCard, Users } from 'lucide-react';
import { useEffect } from 'react';
import { useBookingStore } from '../../store/bookingStore';

export function Overview() {
  const { upcomingBookings, fetchBookings } = useBookingStore();

  useEffect(() => {
    fetchBookings();
  }, [fetchBookings]);

  const stats = [
    { 
      icon: Calendar,
      label: 'Total Bookings',
      value: upcomingBookings?.length || 0,
      color: 'bg-blue-500'
    },
    { 
      icon: Clock,
      label: 'Hours Booked',
      value: (upcomingBookings?.length || 0) * 3,
      color: 'bg-green-500'
    },
    { 
      icon: CreditCard,
      label: 'Amount Spent',
      value: `₹${upcomingBookings?.reduce((sum, booking) => sum + booking.totalAmount, 0) || 0}`,
      color: 'bg-purple-500'
    },
    { 
      icon: Users,
      label: 'Total Guests',
      value: upcomingBookings?.reduce((sum, booking) => sum + booking.numberOfPeople, 0) || 0,
      color: 'bg-orange-500'
    },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Dashboard Overview</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center mb-4`}>
              <stat.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-gray-500 text-sm">{stat.label}</h3>
            <p className="text-2xl font-semibold mt-1">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
        {upcomingBookings && upcomingBookings.length > 0 ? (
          <div className="space-y-4">
            {upcomingBookings.slice(0, 3).map((booking) => (
              <div
                key={booking.id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div>
                  <h3 className="font-medium">{booking.theater.name}</h3>
                  <p className="text-sm text-gray-500">
                    {new Date(booking.date).toLocaleDateString()} at {booking.slot.startTime}
                  </p>
                </div>
                <span className="text-indigo-600 font-medium">₹{booking.totalAmount}</span>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No recent bookings</p>
        )}
      </div>
    </div>
  );
}