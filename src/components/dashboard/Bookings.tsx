import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import { useBookingStore } from '../../store/bookingStore';

export function Bookings() {
  const { upcomingBookings, pastBookings } = useBookingStore();

  const BookingCard = ({ booking }: { booking: any }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-6 rounded-lg shadow-md"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-semibold text-lg">{booking.theater.name}</h3>
          <p className="text-gray-500">{booking.occasion.type}</p>
        </div>
        <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">
          {booking.status}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center space-x-2 text-gray-600">
          <Calendar className="w-4 h-4" />
          <span>{new Date(booking.date).toLocaleDateString()}</span>
        </div>
        <div className="flex items-center space-x-2 text-gray-600">
          <Clock className="w-4 h-4" />
          <span>{booking.slot.startTime} - {booking.slot.endTime}</span>
        </div>
        <div className="flex items-center space-x-2 text-gray-600">
          <MapPin className="w-4 h-4" />
          <span>{booking.theater.location}</span>
        </div>
        <div className="flex items-center space-x-2 text-gray-600">
          <Users className="w-4 h-4" />
          <span>{booking.numberOfPeople} people</span>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Total Amount</span>
          <span className="font-semibold">₹{booking.totalAmount}</span>
        </div>
      </div>

      {booking.status === 'UPCOMING' && (
        <div className="mt-4 flex space-x-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          >
            View Details
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100"
          >
            Cancel Booking
          </motion.button>
        </div>
      )}
    </motion.div>
  );

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">My Bookings</h1>

      {/* Upcoming Bookings */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Upcoming Bookings</h2>
        {upcomingBookings.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2">
            {upcomingBookings.map((booking) => (
              <BookingCard key={booking.id} booking={booking} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No upcoming bookings</p>
        )}
      </div>

      {/* Past Bookings */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Past Bookings</h2>
        {pastBookings.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2">
            {pastBookings.map((booking) => (
              <BookingCard key={booking.id} booking={booking} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No past bookings</p>
        )}
      </div>
    </div>
  );
}