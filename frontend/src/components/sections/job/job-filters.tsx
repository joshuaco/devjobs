import JobFilter from './job-filter';
import jobData from '@/data.json';

function JobFilters() {
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
      />
      <JobFilter
        selectName='location'
        selectId='location'
        selectValue='Ubicación'
        options={locations}
      />
      <JobFilter
        selectName='contract'
        selectId='contract'
        selectValue='Tipo de contrato'
      />
      <JobFilter
        selectName='experience'
        selectId='experience'
        selectValue='Experiencia'
        options={experiences}
      />
    </div>
  );
}

export default JobFilters;
