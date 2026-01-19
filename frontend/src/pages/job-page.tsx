import { useJob } from '@/features/jobs/hooks/useJob';
import { useParams } from 'react-router';

function JobPage() {
  const { id } = useParams();
  const { job, isLoading } = useJob(id!);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!job) {
    return <div>Job not found</div>;
  }

  return (
    <>
      <div>
        <h1>{job.content.description}</h1>
      </div>
    </>
  );
}

export default JobPage;
