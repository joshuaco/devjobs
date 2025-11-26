import type { Filters } from '@/types/form-types';
import JobFilter from './job-filter';
import jobData from '@/data.json';

interface JobFiltersProps {
  onFiltersChange: (filters: Filters) => void;
  filters: Filters;
}

function JobFilters({ onFiltersChange, filters }: JobFiltersProps) {
  const technologies = Array.from(
    new Set(jobData.map((job) => job.data.technology))
  );
  const locations = Array.from(new Set(jobData.map((job) => job.data.modalidad)));
  const experiences = Array.from(new Set(jobData.map((job) => job.data.nivel)));

  return (
    <div className='grid grid-cols-2 sm:flex gap-3 items-center'>
      <JobFilter
        selectName='technology'
        selectId='technology'
        selectValue='Tecnología'
        options={technologies}
        filters={filters}
        onFiltersChange={onFiltersChange}
      />
      <JobFilter
        selectName='location'
        selectId='location'
        selectValue='Ubicación'
        options={locations}
        filters={filters}
        onFiltersChange={onFiltersChange}
      />
      <JobFilter
        selectName='contract'
        selectId='contract'
        selectValue='Tipo de contrato'
        filters={filters}
        onFiltersChange={onFiltersChange}
      />
      <JobFilter
        selectName='experience'
        selectId='experience'
        selectValue='Experiencia'
        options={experiences}
        filters={filters}
        onFiltersChange={onFiltersChange}
      />
    </div>
  );
}

export default JobFilters;
