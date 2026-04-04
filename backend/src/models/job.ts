import jobs from '../data/jobs.json' with { type: 'json' };
import type { Job, JobQueryParams } from '../types/jobs.ts';

const typedJobs = jobs as Job[];

const getJobs = (params: JobQueryParams) => {
  const {
    search,
    experience,
    technology,
    location,
    limit = '10',
    offset = '0',
  } = params;

  let filteredJobs = typedJobs;

  const limitNumber = parseInt(limit);
  const offsetNumber = parseInt(offset);

  if (search) {
    const searchTerm = search.toLowerCase();

    filteredJobs = filteredJobs.filter(
      (job) =>
        job.titulo.toLowerCase().includes(searchTerm) ||
        job.descripcion.toLowerCase().includes(searchTerm)
    );
  }

  if (experience) {
    filteredJobs = filteredJobs.filter((job) => job.data.nivel === experience);
  }

  if (technology) {
    filteredJobs = filteredJobs.filter((job) =>
      job.data.technology.includes(technology)
    );
  }

  if (location) {
    filteredJobs = filteredJobs.filter((job) => job.data.modalidad === location);
  }

  const total = filteredJobs.length;

  filteredJobs = filteredJobs.slice(offsetNumber, offsetNumber + limitNumber);

  return { data: filteredJobs, total };
};

const getJobById = (id: string): Job | null => {
  return typedJobs.find((job) => job.id === id) || null;
};

const createJob = (jobData: Omit<Job, 'id'>): Job => {
  const newJob: Job = {
    id: crypto.randomUUID(),
    ...jobData,
  };

  typedJobs.push(newJob);
  return newJob;
};

const updateJob = (id: string, jobData: Partial<Job>): Job | null => {
  const jobIndex = typedJobs.findIndex((job) => job.id === id);
  if (jobIndex === -1) {
    throw new Error('Job not found');
  }

  typedJobs[jobIndex] = { ...typedJobs[jobIndex], ...jobData } as Job;
  return typedJobs[jobIndex];
};

const deleteJob = (id: string) => {
  const jobIndex = typedJobs.findIndex((job) => job.id === id);
  if (jobIndex === -1) {
    return null;
  }
  const deletedJob = typedJobs.splice(jobIndex, 1);
  return deletedJob;
};

export default { getJobs, getJobById, createJob, updateJob, deleteJob };
