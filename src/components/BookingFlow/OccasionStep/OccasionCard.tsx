import { motion } from 'framer-motion';
import type { OccasionOption } from '../../../types/occasion';

interface OccasionCardProps {
  occasion: OccasionOption;
  isSelected: boolean;
  onSelect: (type: OccasionOption['type']) => void;
}

export function OccasionCard({ occasion, isSelected, onSelect }: OccasionCardProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onSelect(occasion.type)}
      className={`p-4 rounded-lg border-2 transition-colors ${
        isSelected
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
  );
}