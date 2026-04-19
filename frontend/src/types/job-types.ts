type Job = {
  content: {
    about: string;
    description: string;
    requirements: string;
    responsibilities: string;
  };
  data: {
    technology: string[];
    modality: string;
    level: string;
  };
  description: string;
  company: string;
  id: string;
  title: string;
  location: string;
};

type Jobs = Job[];

export type { Job, Jobs };
