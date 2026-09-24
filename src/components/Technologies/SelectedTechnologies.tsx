import type { Itechnology } from '../../types/technology';

interface SelectedTechnologiesProps {
  selectedStack: Itechnology[];
  onRemove: (id: string, name: string) => void;
  onRemoveAll: () => void;
}

const SelectedTechnologies = ({ selectedStack, onRemove, onRemoveAll }: SelectedTechnologiesProps) => {
  const isEmpty = selectedStack.length === 0;

  return (
    <div className="rounded-xl border border-gray-200 p-5 bg-white lg:sticky lg:top-6">
      <h3 className="font-semibold text-gray-900">Your Stack</h3>

      <p className="text-sm text-gray-400 mb-4">
        {isEmpty ? 'No technologies selected yet.' : `${selectedStack.length} Technology Selected`}
      </p>

      {isEmpty ? (
        <div className="border border-dashed border-gray-200 rounded-lg py-8 flex items-center justify-center">
          <p className="text-sm text-gray-400">Your stack is empty.</p>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {selectedStack.map((tech) => (
            <div
              key={tech.id}
              className="flex items-center justify-between border border-gray-100 rounded-lg px-3 py-2"
            >
              <div className="flex items-center gap-2">
                <img src={tech.icon} alt={tech.name} className="h-6 w-6" />
                <div>
                  <p className="text-sm font-medium text-gray-900">{tech.name}</p>
                  <p className="text-xs text-gray-400">{tech.category}</p>
                </div>
              </div>
              <button
                onClick={() => onRemove(tech.id, tech.name)}
                className="text-gray-400 hover:text-red-500 text-sm"
              >
                ✕
              </button>
            </div>
          ))}

          <button
            onClick={onRemoveAll}
            className="mt-2 w-full text-sm font-medium text-red-500 border border-red-200 rounded-lg py-2 hover:bg-red-50 transition-colors"
          >
            Remove All
          </button>
        </div>
      )}
    </div>
  );
};

export default SelectedTechnologies;