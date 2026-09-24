import type { Itechnology } from '../../types/technology';

const badgeColors: Record<string, string> = {
  Popular: 'bg-blue-50 text-blue-600',
  'Top SQL': 'bg-blue-50 text-blue-600',
  Essential: 'bg-blue-50 text-blue-600',
  Robust: 'bg-blue-50 text-blue-600',
  Containers: 'bg-blue-50 text-blue-600',

  Versatile: 'bg-green-50 text-green-600',
  Standard: 'bg-green-50 text-green-600',

  Fast: 'bg-orange-50 text-orange-600',
  Cache: 'bg-pink-50 text-pink-600',
  Ubiquitous: 'bg-yellow-50 text-yellow-700',
  Modern: 'bg-teal-50 text-teal-600',
};

interface TechnologyCardProps {
  tech: Itechnology;
  isSelected: boolean;
  onAdd: (tech: Itechnology) => void;
}

const TechnologyCard = ({ tech, isSelected, onAdd }: TechnologyCardProps) => {
  return (
    <div className="rounded-xl border border-gray-200 p-5 flex flex-col bg-white hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-3">
        <img src={tech.icon} alt={tech.name} className="h-8 w-8" />
        {tech.badge && (
         <span className={`text-xs font-medium px-2 py-1 rounded-full ${badgeColors[tech.badge] ?? 'bg-gray-50 text-gray-600'}`}>
            {tech.badge}
          </span>
        )}
      </div>

      <h3 className="font-semibold text-gray-900">{tech.name}</h3>
      <p className="mt-1 text-sm text-gray-500 flex-1">{tech.description}</p>
      <div className="border-t border-gray-100 my-4" />
    <div className="flex items-center gap-6 text-xs text-gray-500">
      <span className="bg-gray-100 px-2 py-1 rounded-md text-gray-600">{tech.category}</span>
      <span className="text-gray-500">{tech.difficulty}</span>
      <span className="flex items-center gap-1 ml-auto text-gray-900 font-medium">
        <span className="text-yellow-400">★</span> {tech.rating}
      </span>
    </div>

      <button
        onClick={() => onAdd(tech)}
        disabled={isSelected}
        className={`mt-4 w-full rounded-lg py-2 text-sm font-semibold transition-colors ${
          isSelected
            ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
            : 'bg-gray-900 text-white hover:bg-gray-800'
        }`}
      >
        {isSelected ? '✓ Added to Stack' : 'Add to Stack'}
      </button>
    </div>
  );
};

export default TechnologyCard;