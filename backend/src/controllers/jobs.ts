import jobs from '../data/jobs.json' with { type: 'json' };
import type { Request, Response } from 'express';
import type { JobQueryParams } from '../types/jobs.ts';

const getJobs = (req: Request, res: Response) => {
  const {
    search,
    experience,
    technology,
    location,
    limit = '10',
    offset = '0',
  } = req.query as JobQueryParams;

  let filteredJobs = jobs;

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

  return res.json({ data: filteredJobs, total });
};

const getJobById = (req: Request, res: Response) => {
  const { id } = req.params;

  // Invalid id format using RegExp
  if (
    !/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(
      id as string
    )
  ) {
    return res.status(400).json({
      message: 'Invalid job ID',
    });
  }

  const job = jobs.find((job) => job.id === (id as string));
  if (!job) {
    return res.status(404).json({
      message: 'Job not found',
    });
  }
  return res.json(job);
};

const createJob = (req: Request, res: Response) => {
  const { titulo, empresa, ubicacion, descripcion, data, content } = req.body;

  const newJob = {
    id: crypto.randomUUID(),
    titulo,
    empresa,
    ubicacion,
    descripcion,
    data,
    content,
  };

  jobs.push(newJob);
  return res.status(201).json(newJob);
};

export default { getJobs, getJobById, createJob };
