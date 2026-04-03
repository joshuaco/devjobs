export type JobData = {
  technology: string[];
  modalidad: string;
  nivel: string;
};

export type JobContent = {
  description: string;
  responsibilities: string;
  requirements: string;
  about: string;
};

export type Job = {
  id: string;
  titulo: string;
  empresa: string;
  ubicacion: string;
  descripcion: string;
  data: JobData;
  content: JobContent;
};

export type JobQueryParams = {
  search?: string;
  experience?: string;
  technology?: string;
  location?: string;
  limit: string;
  offset: string;
};
