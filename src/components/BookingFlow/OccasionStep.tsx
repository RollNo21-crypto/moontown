import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import { useBookingStore } from '../../store/bookingStore';
import { BookingSummary } from './BookingSummary';
import { occasions } from '../../lib/occasions';
import type { OccasionType } from '../../types/occasion';

export function OccasionStep() {
  const { prevStep, nextStep, setOccasion } = useBookingStore();
  const [selectedType, setSelectedType] = useState<OccasionType | null>(null);
  const [names, setNames] = useState<Record<string, string>>({});
  const [specialRequests, setSpecialRequests] = useState('');

  const selectedOccasion = occasions.find(o => o.type === selectedType);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedType && Object.keys(names).length > 0) {
      setOccasion({ 
        type: selectedType, 
        names,
        specialRequests: specialRequests.trim() 
      });
      nextStep();
    }
  };

  const isFormValid = selectedType && 
    selectedOccasion?.fields.every(field => 
      field.required ? names[field.key]?.trim() : true
    );

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
        <h2 className="text-2xl font-semibold">Select Your Occasion</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {occasions.map((occasion) => (
              <motion.button
                key={occasion.type}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedType(occasion.type)}
                className={`p-4 rounded-lg border-2 transition-colors ${
                  selectedType === occasion.type
                    ? 'border-purple-900 bg-purple-50'
                    : 'border-gray-200 hover:border-purple-200'
                }`}
              >
                <div className="aspect-square mb-2 overflow-hidden rounded-lg">
                  <img 
                    src={occasion.image} 
                    alt={occasion.label} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm font-medium text-center">{occasion.label}</p>
              </motion.button>
            ))}
          </div>

          {selectedOccasion && (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              onSubmit={handleSubmit}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-lg font-semibold mb-4">
                Enter {selectedOccasion.label} Details
              </h3>
              
              <div className="space-y-4">
                {selectedOccasion.fields.map((field) => (
                  <div key={field.key}>
                    <label 
                      htmlFor={field.key}
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      {field.label}
                      {field.required && <span className="text-red-500">*</span>}
                    </label>
                    <input
                      type="text"
                      id={field.key}
                      value={names[field.key] || ''}
                      onChange={(e) => setNames(prev => ({
                        ...prev,
                        [field.key]: e.target.value
                      }))}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-900"
                      required={field.required}
                    />
                  </div>
                ))}

                <div>
                  <label 
                    htmlFor="specialRequests"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Special Requests
                  </label>
                  <textarea
                    id="specialRequests"
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    rows={4}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-900"
                    placeholder="Any special requests or requirements?"
                  />
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={!isFormValid}
                className={`w-full mt-6 py-3 rounded-lg font-medium ${
                  isFormValid
                    ? 'bg-purple-900 text-white hover:bg-purple-800'
                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                }`}
              >
                Continue to Next Step
              </motion.button>
            </motion.form>
          )}
        </div>

        <div className="lg:col-span-1">
          <BookingSummary />
        </div>
      </div>
    </motion.div>
  );
}