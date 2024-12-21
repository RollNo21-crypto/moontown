import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Plus, Minus } from 'lucide-react';
import { useBookingStore } from '../../store/bookingStore';
import { 
  PACKAGES, 
  CAKES, 
  DECORATIONS, 
  GIFTS, 
  SPECIAL_SERVICES, 
  FOG_ENTRY 
} from '../../lib/constants/addons';

type Category = 'PACKAGES' | 'CAKES' | 'DECORATIONS' | 'GIFTS' | 'PHOTOGRAPHY' | 'FOG';

export function AddOnsStep() {
  const [category, setCategory] = useState<Category>('PACKAGES');
  const { 
    prevStep, 
    nextStep, 
    selectedAddOns, 
    addAddOn, 
    removeAddOn,
    selectedPackage,
    setPackage,
    selectedCake,
    setCake
  } = useBookingStore();

  const renderContent = () => {
    switch (category) {
      case 'PACKAGES':
        return (
          <div className="grid gap-6">
            {PACKAGES.map((pkg) => (
              <motion.div
                key={pkg.id}
                whileHover={{ scale: 1.02 }}
                className={`bg-white p-6 rounded-lg shadow-md cursor-pointer ${
                  selectedPackage?.id === pkg.id ? 'ring-2 ring-indigo-600' : ''
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
        );

      case 'CAKES':
        return (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {CAKES.map((cake) => (
              <motion.div
                key={cake.id}
                whileHover={{ scale: 1.02 }}
                className={`bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer ${
                  selectedCake?.id === cake.id ? 'ring-2 ring-indigo-600' : ''
                }`}
                onClick={() => setCake(selectedCake?.id === cake.id ? null : cake)}
              >
                <div className="aspect-square">
                  <img
                    src={cake.image}
                    alt={cake.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium">{cake.name}</h3>
                  <p className="text-indigo-600 font-semibold mt-1">₹{cake.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
        );

      case 'DECORATIONS':
        return (
          <div className="grid gap-6">
            {DECORATIONS.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-600 mt-1">Enhance your celebration</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-lg font-semibold text-indigo-600">₹{item.price}</span>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => removeAddOn(item.id)}
                        className="p-1 rounded-full hover:bg-gray-100"
                      >
                        <Minus className="w-5 h-5" />
                      </button>
                      <span className="w-8 text-center">
                        {selectedAddOns.filter(addon => addon.id === item.id).length}
                      </span>
                      <button
                        onClick={() => addAddOn(item)}
                        className="p-1 rounded-full hover:bg-gray-100"
                      >
                        <Plus className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        );

      case 'GIFTS':
        return (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {GIFTS.map((gift) => (
              <motion.div
                key={gift.id}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="aspect-square">
                  <img
                    src={gift.image}
                    alt={gift.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium">{gift.name}</h3>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-indigo-600 font-semibold">₹{gift.price}</span>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => removeAddOn(gift.id)}
                        className="p-1 rounded-full hover:bg-gray-100"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-6 text-center">
                        {selectedAddOns.filter(addon => addon.id === gift.id).length}
                      </span>
                      <button
                        onClick={() => addAddOn(gift)}
                        className="p-1 rounded-full hover:bg-gray-100"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        );

      case 'PHOTOGRAPHY':
        return (
          <div className="grid gap-6">
            {SPECIAL_SERVICES.map((service) => (
              <motion.div
                key={service.id}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold">{service.name}</h3>
                    <p className="text-gray-600 mt-1">{service.description}</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-lg font-semibold text-indigo-600">₹{service.price}</span>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => removeAddOn(service.id)}
                        className="p-1 rounded-full hover:bg-gray-100"
                      >
                        <Minus className="w-5 h-5" />
                      </button>
                      <span className="w-8 text-center">
                        {selectedAddOns.filter(addon => addon.id === service.id).length}
                      </span>
                      <button
                        onClick={() => addAddOn(service)}
                        className="p-1 rounded-full hover:bg-gray-100"
                      >
                        <Plus className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        );

      case 'FOG':
        return (
          <div className="grid gap-6">
            {FOG_ENTRY.map((fog) => (
              <motion.div
                key={fog.id}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold">{fog.name}</h3>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-lg font-semibold text-indigo-600">₹{fog.price}</span>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => removeAddOn(fog.id)}
                        className="p-1 rounded-full hover:bg-gray-100"
                      >
                        <Minus className="w-5 h-5" />
                      </button>
                      <span className="w-8 text-center">
                        {selectedAddOns.filter(addon => addon.id === fog.id).length}
                      </span>
                      <button
                        onClick={() => addAddOn(fog)}
                        className="p-1 rounded-full hover:bg-gray-100"
                      >
                        <Plus className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        );
    }
  };

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
        <h2 className="text-2xl font-semibold">Enhance Your Experience</h2>
      </div>

      <div className="flex space-x-4 mb-8 overflow-x-auto pb-2">
        {[
          { id: 'PACKAGES', label: 'Packages' },
          { id: 'CAKES', label: 'Cakes' },
          { id: 'DECORATIONS', label: 'Decorations' },
          { id: 'GIFTS', label: 'Gifts' },
          { id: 'PHOTOGRAPHY', label: 'Photography' },
          { id: 'FOG', label: 'Fog Entry' },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => setCategory(item.id as Category)}
            className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
              category === item.id
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="space-y-6">
        {renderContent()}
      </div>

      <motion.div className="flex justify-center mt-8">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={nextStep}
          className="px-8 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700"
        >
          Continue to Next Step
        </motion.button>
      </motion.div>
    </motion.div>
  );
}