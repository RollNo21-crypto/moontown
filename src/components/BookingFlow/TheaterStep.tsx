import { motion } from 'framer-motion';
import { ArrowLeft, Users, Clock, Check } from 'lucide-react';
import { useBookingStore } from '../../store/bookingStore';
import { THEATER_TYPES, TIME_SLOTS } from '../../lib/constants/theaters';

// Mock availability data - in a real app, this would come from an API
const MOCK_AVAILABILITY = {
  family: {
    '1': true,  // 9:30 AM
    '2': true,  // 12:30 PM
    '3': false, // 3:30 PM
    '4': true,  // 6:30 PM
    '5': true   // 9:30 PM
  },
  group: {
    '1': false, // 9:30 AM
    '2': true,  // 12:30 PM
    '3': true,  // 3:30 PM
    '4': true,  // 6:30 PM
    '5': false  // 9:30 PM
  },
  couple: {
    '1': true,  // 9:30 AM
    '2': true,  // 12:30 PM
    '3': true,  // 3:30 PM
    '4': false, // 6:30 PM
    '5': true   // 9:30 PM
  }
};

export function TheaterStep() {
  const { 
    prevStep, 
    nextStep, 
    selectedTheater,
    selectedSlot,
    setSelectedTheater,
    setSelectedSlot
  } = useBookingStore();

  const handleTheaterSelect = (theater: typeof THEATER_TYPES.FAMILY) => {
    setSelectedTheater(theater);
    setSelectedSlot(null); // Reset slot when theater changes
  };

  const canContinue = selectedTheater && selectedSlot;

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      className="max-w-4xl mx-auto"
    >
      {/* Header with Back Button */}
      <div className="flex items-center space-x-4 mb-8">
        <button
          onClick={prevStep}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h2 className="text-2xl font-semibold">Select Your Theater</h2>
      </div>

      {/* Theater Selection */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {Object.values(THEATER_TYPES).map((theater) => (
          <motion.div
            key={theater.id}
            whileHover={{ scale: 1.02 }}
            className={`bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer ${
              selectedTheater?.id === theater.id ? 'ring-2 ring-indigo-600' : ''
            }`}
            onClick={() => handleTheaterSelect(theater)}
          >
            <div className="h-48 overflow-hidden">
              <img
                src={theater.image}
                alt={theater.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{theater.name}</h3>
                  <p className="text-gray-600 text-sm">{theater.description}</p>
                </div>
                <span className="text-lg font-bold text-indigo-600">₹{theater.price}</span>
              </div>
              
              <div className="flex items-center text-sm text-gray-600 mb-2">
                <Users className="w-4 h-4 mr-2" />
                <span>{theater.capacity.min === theater.capacity.max 
                  ? `${theater.capacity.min} people`
                  : `${theater.capacity.min}-${theater.capacity.max} people`}
                </span>
              </div>

              <div className="space-y-2 mt-4">
                {theater.features.map((feature, index) => (
                  <div key={index} className="flex items-center text-sm text-gray-600">
                    <Check className="w-4 h-4 mr-2 text-green-500" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Time Slots */}
      {selectedTheater && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-6 rounded-lg shadow-lg"
        >
          <div className="flex items-center mb-4">
            <Clock className="w-5 h-5 text-gray-500 mr-2" />
            <h3 className="text-lg font-semibold">Select Time Slot</h3>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {TIME_SLOTS.map((slot) => {
              const isAvailable = MOCK_AVAILABILITY[selectedTheater.id][slot.id];
              
              return (
                <button
                  key={slot.id}
                  onClick={() => isAvailable && setSelectedSlot(slot.id)}
                  disabled={!isAvailable}
                  className={`p-4 rounded-lg text-center transition-colors ${
                    !isAvailable
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : selectedSlot === slot.id
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <div className="text-sm font-medium">{slot.startTime}</div>
                  <div className="text-xs opacity-75">to</div>
                  <div className="text-sm font-medium">{slot.endTime}</div>
                </button>
              );
            })}
          </div>
        </motion.div>
      )}

      {/* Continue Button */}
      {canContinue && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center mt-8"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={nextStep}
            className="px-8 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700"
          >
            Continue to Next Step
          </motion.button>
        </motion.div>
      )}
    </motion.div>
  );
}