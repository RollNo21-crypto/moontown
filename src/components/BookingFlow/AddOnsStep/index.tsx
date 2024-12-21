import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import { useBookingStore } from '../../../store/bookingStore';
import { PACKAGES } from '../../../lib/constants';
import { CakeSelection } from './CakeSelection';
import { DecorationSelection } from './DecorationSelection';
import { GiftSelection } from './GiftSelection';
import { SpecialServices } from './SpecialServices';
import { BookingSummary } from '../BookingSummary';

type Category = 'PACKAGES' | 'CAKE' | 'DECORATION' | 'GIFTS' | 'SERVICES';

export function AddOnsStep() {
  const [category, setCategory] = useState<Category>('PACKAGES');
  const { prevStep, nextStep, selectedPackage, setPackage } = useBookingStore();

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      className="max-w-4xl mx-auto"
    >
      <div className="flex items-center space-x-4 mb-8">
        <button
          onClick={prevStep}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h2 className="text-2xl font-semibold">Customize Your Experience</h2>
      </div>

      <div className="flex space-x-4 mb-6 overflow-x-auto pb-2">
        <button
          onClick={() => setCategory('PACKAGES')}
          className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
            category === 'PACKAGES'
              ? 'bg-purple-900 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Celebration Packages
        </button>
        <button
          onClick={() => setCategory('CAKE')}
          className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
            category === 'CAKE'
              ? 'bg-purple-900 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Choose Cake
        </button>
        <button
          onClick={() => setCategory('DECORATION')}
          className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
            category === 'DECORATION'
              ? 'bg-purple-900 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Decorations
        </button>
        <button
          onClick={() => setCategory('GIFTS')}
          className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
            category === 'GIFTS'
              ? 'bg-purple-900 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Gifts
        </button>
        <button
          onClick={() => setCategory('SERVICES')}
          className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
            category === 'SERVICES'
              ? 'bg-purple-900 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Special Services
        </button>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        {category === 'PACKAGES' && (
          <div className="grid gap-6">
            {PACKAGES.map((pkg) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`bg-white p-6 rounded-lg shadow-md cursor-pointer border-2 transition-colors ${
                  selectedPackage?.id === pkg.id
                    ? 'border-indigo-600'
                    : 'border-transparent hover:border-indigo-200'
                }`}
                onClick={() => setPackage(selectedPackage?.id === pkg.id ? null : pkg)}
              >
                <div className="flex items-start gap-4">
                  <div className="w-24 h-24 rounded-lg overflow-hidden">
                    <img
                      src={pkg.image}
                      alt={pkg.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-semibold">{pkg.name}</h3>
                        <p className="text-gray-600 mt-1">{pkg.description}</p>
                      </div>
                      <div className="text-xl font-bold text-indigo-600">₹{pkg.price}</div>
                    </div>
                    <div className="mt-4 grid grid-cols-2 gap-2">
                      {pkg.includes.map((item, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-600">
                          <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
        {category === 'CAKE' && <CakeSelection />}
        {category === 'DECORATION' && <DecorationSelection />}
        {category === 'GIFTS' && <GiftSelection />}
        {category === 'SERVICES' && <SpecialServices />}
      </div>

      <div className="mt-6">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={nextStep}
          className="w-full py-3 bg-purple-900 text-white rounded-lg font-medium hover:bg-purple-800"
        >
          Continue to Next Step
        </motion.button>
      </div>
    </motion.div>
  );
}