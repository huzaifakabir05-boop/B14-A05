import { use, useState } from 'react';
import type { Itechnology } from '../../types/technology';
import SelectedTechnologies from './SelectedTechnologies';
import TechnologyCard from './TechnologyCard';
import { toast } from 'react-toastify';

interface TechnologiesProps {
  technologiesPromise: Promise<Itechnology[]>;
}

const Technologies = ({ technologiesPromise }: TechnologiesProps) => {
  const technologies = use(technologiesPromise);
  const [selectedStack, setSelectedStack] = useState<Itechnology[]>([]);

  const handleAddToStack = (tech: Itechnology) => {
    const alreadyExists = selectedStack.some((item) => item.id === tech.id);
    if (alreadyExists) {
      toast.warning(`${tech.name} is already in your stack!`);
      return;
    }
    setSelectedStack((prev) => [...prev, tech]);
    toast.success(`${tech.name} added to your stack!`);
  };

  const handleRemove = (id: string, name: string) => {
      
    setSelectedStack((prev) => prev.filter((item) => item.id !== id));
    toast.info(`${name} removed from your stack.`);
  };

  const handleRemoveAll = () => {
    setSelectedStack([]);
    toast.info('All technologies removed from your stack.');
  };

  return (
    <div className="container mx-auto px-6 py-10">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900">
          Explore the <span className="text-pink-600">Technologies</span>
        </h2>
        <p className="mt-1 text-gray-500">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech) => (
            <TechnologyCard
              key={tech.id}
              tech={tech}
              isSelected={selectedStack.some((item) => item.id === tech.id)}
              onAdd={handleAddToStack}
            />
          ))}
        </div>

        <SelectedTechnologies
          selectedStack={selectedStack}
          onRemove={handleRemove}
          onRemoveAll={handleRemoveAll}
        />
      </div>
    </div>
  );
};

export default Technologies;



