interface HeroCardProps {
  title: string;
  description: string;
}

function HeroCard({ title, description }: HeroCardProps) {
  return (
    <article className='bg-card rounded-lg p-8 text-center'>
      <h3 className='text-xl font-bold text-white'>{title}</h3>
      <p className='text-muted mt-4'>{description}</p>
    </article>
  );
}

export default HeroCard;
