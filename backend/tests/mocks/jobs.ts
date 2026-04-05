import type { Job } from '../../src/types/jobs.ts';

export const sampleJob: Omit<Job, 'id'> = {
  title: 'Frontend Developer',
  company: 'Acme Corp',
  location: 'Remote',
  description: 'Build amazing UIs',
  data: {
    technology: ['React', 'TypeScript'],
    modality: 'Remoto',
    level: 'Senior',
  },
  content: {
    description: 'Full description here',
    responsibilities: 'Build components',
    requirements: '3+ years React',
    about: 'We are Acme Corp',
  },
};
