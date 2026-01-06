import { X } from 'lucide-react';
import type { Filters } from '@/types/form-types';

interface JobFilterPillProps {
  filters: Filters;
  onRemoveFilter: (filterKey: keyof Filters) => void;
  onClearAll: () => void;
}

const filterLabels: Record<keyof Filters, string> = {
  technology: 'Tecnología',
  location: 'Ubicación',
  experience: 'Experiencia'
};

function JobFilterPill({ filters, onRemoveFilter, onClearAll }: JobFilterPillProps) {
  const activeFilters = Object.entries(filters).filter(
    ([, value]) => value !== ''
  ) as [keyof Filters, string][];

  // Don't render anything if no filters are active
  if (activeFilters.length === 0) return null;

  return (
    <div className='flex flex-wrap items-center gap-2'>
      {activeFilters.map(([key, value]) => (
        <button
          key={key}
          type='button'
          onClick={() => onRemoveFilter(key)}
          className='inline-flex items-center gap-1.5 bg-primary/80 hover:bg-primary text-white text-sm px-3 py-1.5 rounded-full transition-colors group'
        >
          <span className='text-muted text-xs'>{filterLabels[key]}:</span>
          <span className='font-medium'>{value}</span>
          <X className='w-3.5 h-3.5 text-muted group-hover:text-white transition-colors' />
        </button>
      ))}

      <button
        type='button'
        onClick={onClearAll}
        className='text-sm text-muted hover:text-white transition-colors underline underline-offset-2'
      >
        Limpiar todo
      </button>
    </div>
  );
}

export default JobFilterPill;
