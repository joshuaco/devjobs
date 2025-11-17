import JobFilter from './job-filter';

function JobFilters() {
  return (
    <div className='grid grid-cols-2 sm:flex gap-3 items-center'>
      <JobFilter
        selectName='technology'
        selectId='technology'
        selectValue='Tecnología'
      />
      <JobFilter selectName='location' selectId='location' selectValue='Ubicación' />
      <JobFilter
        selectName='contract'
        selectId='contract'
        selectValue='Tipo de contrato'
      />
      <JobFilter
        selectName='experience'
        selectId='experience'
        selectValue='Experiencia'
      />
    </div>
  );
}

export default JobFilters;
