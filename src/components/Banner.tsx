import bannerImage from '../assets/banner-stack.png';

const Banner = () => {
  return (
    <div className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-10">
      
      <div className="flex-1 max-w-xl">
        <h1 className="text-5xl font-extrabold leading-tight text-gray-900">
          Build Your Ideal{' '}
          <span className="bg-(image:--gradient-brand) bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>

        <p className="mt-5 text-gray-500 text-base leading-relaxed">
          Explore frontend, backend, database, and tooling options,<br />
          compare them side by side, and put together the stack that fits your <br />
          next project.
        </p>

        <div className="mt-8 flex items-center gap-4">
          <button className="rounded-lg bg-(image:--gradient-brand) px-6 py-3 text-sm font-semibold text-white hover:opacity-90 transition-opacity">
            Explore Technologies
          </button>
          <button className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
            Learn More
          </button>
        </div>
      </div>

      
      <div className="flex-1 flex justify-center">
        <img src={bannerImage} alt="Development stack illustration" className="w-full max-w-md" />
      </div>
    </div>
  );
};

export default Banner;