interface HeroCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

function HeroCard({ title, description, icon }: HeroCardProps) {
  return (
    <article className='bg-card rounded-lg p-8 text-center hover:bg-primary-dark transition-all duration-300'>
      <div className='flex justify-center items-center mb-4 bg-primary-dark rounded-full p-4 w-16 h-16 mx-auto'>
        {icon}
      </div>
      <h3 className='text-xl font-bold text-white'>{title}</h3>
      <p className='text-muted mt-4'>{description}</p>
    </article>
  );
}

export default HeroCard;
