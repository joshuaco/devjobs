import { Router } from 'express';

const router = Router();

router.get('/', (_req, res) => {
  return res.json({
    jobs: [
      {
        id: 1,
        title: 'Software Engineer',
        description:
          'We are looking for a software engineer with 3 years of experience in React and Node.js',
        company: 'Google',
        location: 'Remote',
        salary: 100000,
      },
      {
        id: 2,
        title: 'Software Engineer',
        description:
          'We are looking for a software engineer with 3 years of experience in React and Node.js',
        company: 'Google',
        location: 'Remote',
        salary: 100000,
      },
    ],
  });
});

export default router;
