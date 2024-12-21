import { z } from 'zod';

export const bookingDetailsSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^[0-9]{10}$/, 'Invalid phone number'),
  numberOfPeople: z.number().min(2).max(10),
  decoration: z.enum(['Yes', 'No']),
  couponCode: z.string().optional()
});

export const paymentSchema = z.object({
  method: z.enum(['upi', 'card', 'netbanking']),
  amount: z.number().min(1),
  currency: z.literal('INR'),
  description: z.string()
});

export type BookingDetails = z.infer<typeof bookingDetailsSchema>;
export type PaymentDetails = z.infer<typeof paymentSchema>;