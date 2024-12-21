import { motion } from 'framer-motion';
import type { OccasionOption } from '../../../types/occasion';

interface OccasionFormProps {
  occasion: OccasionOption;
  names: Record<string, string>;
  specialRequests: string;
  onNamesChange: (key: string, value: string) => void;
  onSpecialRequestsChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  isValid: boolean;
}

export function OccasionForm({
  occasion,
  names,
  specialRequests,
  onNamesChange,
  onSpecialRequestsChange,
  onSubmit,
  isValid,
}: OccasionFormProps) {
  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={onSubmit}
      className="bg-white p-6 rounded-lg shadow-lg"
    >
      <h3 className="text-lg font-semibold mb-4">
        Enter {occasion.label} Details
      </h3>
      
      <div className="space-y-4">
        {occasion.fields.map((field) => (
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
              onChange={(e) => onNamesChange(field.key, e.target.value)}
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
            onChange={(e) => onSpecialRequestsChange(e.target.value)}
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
        disabled={!isValid}
        className={`w-full mt-6 py-3 rounded-lg font-medium ${
          isValid
            ? 'bg-purple-900 text-white hover:bg-purple-800'
            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
        }`}
      >
        Continue to Next Step
      </motion.button>
    </motion.form>
  );
}