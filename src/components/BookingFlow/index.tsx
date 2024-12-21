import { AnimatePresence } from 'framer-motion';
import { useBookingStore } from '../../store/bookingStore';
import { SearchStep } from './SearchStep';
import { TheaterStep } from './TheaterStep';
import { DetailsStep } from './DetailsStep';
import { OccasionStep } from './OccasionStep';
import { AddOnsStep } from './AddOnsStep';
import { PaymentStep } from './PaymentStep';
import { ProgressBar } from '../ProgressBar';
import { BookingSummary } from './BookingSummary';

export function BookingFlow() {
  const step = useBookingStore((state) => state.step);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <ProgressBar currentStep={step} totalSteps={6} />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              {step === 1 && <SearchStep />}
              {step === 2 && <TheaterStep />}
              {step === 3 && <DetailsStep />}
              {step === 4 && <OccasionStep />}
              {step === 5 && <AddOnsStep />}
              {step === 6 && <PaymentStep />}
            </AnimatePresence>
          </div>
          
          {step > 1 && (
            <div className="lg:col-span-1">
              <BookingSummary />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}