import type { Job } from '../../src/types/jobs.ts';

export const sampleJob: Omit<Job, 'id'> = {
  titulo: 'Frontend Developer',
  empresa: 'Acme Corp',
  ubicacion: 'Remote',
  descripcion: 'Build amazing UIs',
  data: {
    technology: ['React', 'TypeScript'],
    modalidad: 'Remoto',
    nivel: 'Senior',
  },
  content: {
    description: 'Full description here',
    responsibilities: 'Build components',
    requirements: '3+ years React',
    about: 'We are Acme Corp',
  },
};
