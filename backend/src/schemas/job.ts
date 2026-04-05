import { z } from 'zod';

const JobModality = {
  REMOTE: 'Remoto',
  HYBRID: 'Híbrido',
  PRESENTIAL: 'Presencial',
} as const;

const JobLevel = {
  JUNIOR: 'Junior',
  MID_LEVEL: 'Mid-Level',
  SENIOR: 'Senior',
} as const;

const JobLevelEnum = z.enum([JobLevel.JUNIOR, JobLevel.MID_LEVEL, JobLevel.SENIOR]);

const JobModalityEnum = z.enum([
  JobModality.REMOTE,
  JobModality.HYBRID,
  JobModality.PRESENTIAL,
]);

export const JobContentSchema = z.object({
  description: z.string(),
  responsibilities: z.string(),
  requirements: z.string(),
  about: z.string(),
});

export const JobDataSchema = z.object({
  technology: z.array(z.string()),
  modality: JobModalityEnum,
  level: JobLevelEnum,
});

export const JobSchema = z.object({
  id: z.uuid(),
  title: z.string().min(5),
  company: z.string().min(3),
  location: z.string().min(3),
  description: z.string().optional().default(''),
  data: JobDataSchema,
  content: JobContentSchema,
});

export const NewJobSchema = JobSchema.omit({ id: true });

export function validateNewJob(input: unknown) {
  return NewJobSchema.safeParse(input);
}

export function validatePartialJob(input: unknown) {
  return JobSchema.partial()
    .transform((data) =>
      Object.fromEntries(Object.entries(data).filter(([, v]) => v !== undefined))
    )
    .safeParse(input);
}
