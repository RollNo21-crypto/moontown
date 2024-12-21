import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { CITIES } from '../lib/constants/cities';
import { useBookingStore } from '../store/bookingStore';

export function CitySelector() {
  const { selectedCity, setCity } = useBookingStore();

  return (
    <div className="flex justify-center">
      {CITIES.map((city) => (
        <motion.button
          key={city.id}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setCity(city)}
          className={`flex items-center px-6 py-3 rounded-full transition-colors ${
            selectedCity?.id === city.id
              ? 'bg-indigo-600 text-white'
              : 'bg-white text-gray-700 hover:bg-gray-50'
          } shadow-md`}
        >
          <MapPin className="w-4 h-4 mr-2" />
          {city.name}
        </motion.button>
      ))}
    </div>
  );
}