import MoonLoader from "./MoonLoader";

function PlayerLoader() {
  return (
    <div className="flex items-center justify-between w-full h-full px-3 py-2 bg-neutral-900">
      <div className="animate-pulse flex items-center">
        <div className="h-16 bg-gray-600 rounded-md dark:bg-gray-700 w-16"></div>
        <div className="ml-2">
          <div className="animate-pulse h-2.5 bg-gray-600 rounded-full dark:bg-gray-700 mb-4 w-20"></div>
          <div className="animate-pulse h-2.5 bg-gray-600 rounded-full dark:bg-gray-700 w-20"></div>
        </div>
      </div>
      <MoonLoader />
      <div className="w-20" />
    </div>
  );
}

export default PlayerLoader;
