type Job = {
  content: {
    about: string;
    description: string;
    requirements: string;
    responsibilities: string;
  };
  data: {
    technology: string[];
    modalidad: string;
    nivel: string;
  };
  descripcion: string;
  empresa: string;
  id: string;
  titulo: string;
  ubicacion: string;
};

type Jobs = Job[];

export type { Job, Jobs };
