import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { useBookingStore } from '../../store/bookingStore';
import { THEATER_TYPES } from '../../lib/constants/theaters';

interface BookingDetailsForm {
  name: string;
  phone: string;
  email: string;
  numberOfPeople: number;
  decoration: 'Yes' | 'No';
  couponCode?: string;
}

export function DetailsStep() {
  const { prevStep, nextStep, selectedTheater } = useBookingStore();
  
  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<BookingDetailsForm>({
    defaultValues: {
      numberOfPeople: selectedTheater ? THEATER_TYPES[selectedTheater.id.toUpperCase()].capacity.min : 2
    }
  });

  if (!selectedTheater) {
    return (
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        className="text-center py-12"
      >
        <p className="text-gray-600">Please select a theater first</p>
        <button
          onClick={prevStep}
          className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
        >
          Go Back
        </button>
      </motion.div>
    );
  }

  const theaterType = THEATER_TYPES[selectedTheater.id.toUpperCase()];
  const numberOfPeople = watch('numberOfPeople') || theaterType.capacity.min;

  const onSubmit = (data: BookingDetailsForm) => {
    console.log(data);
    nextStep();
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      className="w-full max-w-2xl mx-auto"
    >
      {/* Overview Section */}
      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <h2 className="text-lg font-semibold mb-4">Booking Overview</h2>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-gray-600">Theater:</span>
            <span>{theaterType.name}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-600">Price:</span>
            <span>₹{theaterType.price}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-600">Capacity:</span>
            <span>{theaterType.capacity.min} - {theaterType.capacity.max} people</span>
          </div>
        </div>
      </div>

      {/* Booking Details Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Booking Name *
          </label>
          <input
            {...register('name', { required: 'Name is required' })}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter your name"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Number of people *
          </label>
          <input
            type="number"
            {...register('numberOfPeople')}
            min={theaterType.capacity.min}
            max={theaterType.capacity.max}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            WhatsApp Number *
          </label>
          <input
            {...register('phone', { 
              required: 'Phone number is required',
              pattern: {
                value: /^[0-9]{10}$/,
                message: 'Please enter a valid 10-digit phone number'
              }
            })}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter your WhatsApp number"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email ID *
          </label>
          <input
            {...register('email', { 
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Please enter a valid email address'
              }
            })}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Do you want decoration? *
          </label>
          <select
            {...register('decoration')}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="flex gap-4">
          <input
            {...register('couponCode')}
            className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter coupon code"
          />
          <button
            type="button"
            className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          >
            Apply
          </button>
        </div>

        <div className="flex justify-between pt-6">
          <button
            type="button"
            onClick={prevStep}
            className="px-6 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200"
          >
            Back
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          >
            Next Step
          </button>
        </div>
      </form>
    </motion.div>
  );
}