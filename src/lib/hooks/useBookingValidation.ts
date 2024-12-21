import { useState, useEffect } from 'react';
import { BOOKING_VALIDATION } from '../constants/booking';

export function useBookingValidation() {
  const [errors, setErrors] = useState<string[]>([]);

  const validateDate = (date: Date) => {
    const now = new Date();
    const minDate = new Date(now.getTime() + BOOKING_VALIDATION.MIN_ADVANCE_HOURS * 60 * 60 * 1000);
    const maxDate = new Date(now.getTime() + BOOKING_VALIDATION.MAX_ADVANCE_DAYS * 24 * 60 * 60 * 1000);

    if (date < minDate) {
      return `Booking must be at least ${BOOKING_VALIDATION.MIN_ADVANCE_HOURS} hours in advance`;
    }

    if (date > maxDate) {
      return `Booking cannot be more than ${BOOKING_VALIDATION.MAX_ADVANCE_DAYS} days in advance`;
    }

    return null;
  };

  const validateCapacity = (people: number, min: number, max: number) => {
    if (people < min || people > max) {
      return `Number of people must be between ${min} and ${max}`;
    }
    return null;
  };

  return {
    errors,
    validateDate,
    validateCapacity,
    clearErrors: () => setErrors([])
  };
}