import { CheckIcon } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router';

interface JobCardProps {
  id: string;
  title: string;
  company: string;
  location: string;
  description: string;
}

function JobCard({ id, title, company, location, description }: JobCardProps) {
  const [isApplied, setIsApplied] = useState(false);

  const handleApplyClick = () => {
    setIsApplied(!isApplied);
  };

  return (
    <article
      className="flex flex-col sm:flex-row justify-between items-center border-b border-muted/25 last:border-b-0 px-5 py-4 gap-4 sm:gap-2"
      data-testid="job-card"
    >
      <div className="flex flex-col gap-2">
        <Link to={`/search/job/${id}`}>
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <p className="text-muted">
            {company} | {location}
          </p>
          <p className="text-white-gray">{description}</p>
        </Link>
      </div>
      <button
        className={`text-white flex items-center justify-center gap-2 px-5 py-2 rounded-md text-sm font-medium transition-all duration-300 w-full sm:w-auto ${
          isApplied
            ? 'bg-green-600'
            : 'bg-primary-hover hover:bg-primary-hover/80'
        }`}
        onClick={handleApplyClick}
        disabled={isApplied}
      >
        {isApplied ? (
          <>
            <CheckIcon className="w-4 h-4 text-white block sm:hidden" />
            <span>Aplicaste</span>
          </>
        ) : (
          'Aplicar'
        )}
      </button>
    </article>
  );
}

export default JobCard;
