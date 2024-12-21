import { PaymentDetails } from '../validation/booking';

export async function initializePayment(details: PaymentDetails) {
  // Mock payment initialization
  return {
    id: 'pay_' + Math.random().toString(36).substr(2, 9),
    amount: details.amount,
    currency: details.currency,
    status: 'created'
  };
}

export async function verifyPayment(paymentId: string) {
  // Mock payment verification
  return {
    id: paymentId,
    status: 'success',
    timestamp: new Date().toISOString()
  };
}