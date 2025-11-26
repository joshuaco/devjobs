import { ChevronDownIcon } from 'lucide-react';
import type { Filters } from '@/types/form-types';

interface JobFilterProps {
  selectName: string;
  selectId: string;
  selectValue: string;
  options?: string[];
  filters: Filters;
  onFiltersChange: (filters: Filters) => void;
}

function JobFilter({
  selectName,
  selectId,
  selectValue,
  options,
  filters,
  onFiltersChange
}: JobFilterProps) {
  return (
    <div className='relative inline-flex items-center w-full sm:w-auto'>
      <select
        name={`filter-${selectName}`}
        id={selectId}
        className='appearance-none bg-primary rounded-md px-3 py-2 text-white text-sm font-medium focus:outline-none focus:ring-1 focus:ring-primary-hover w-full pr-8'
        onChange={(e) =>
          onFiltersChange({ ...filters, [selectName]: e.target.value })
        }
      >
        <option value='all'>{selectValue}</option>
        {options?.map((option) => (
          <option key={option} value={option}>
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </option>
        ))}
      </select>
      <ChevronDownIcon className='pointer-events-none absolute right-2 h-4 w-4 text-white' />
    </div>
  );
}

export default JobFilter;
