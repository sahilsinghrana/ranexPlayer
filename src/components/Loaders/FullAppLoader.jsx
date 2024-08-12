import MoonEclipseLoader from "./MoonEclipseLoader";

const FullAppLoader = () => {
  return (
    <div className="flex items-center justify-center w-screen h-[100dvh] text-5xl font-extrabold text-white opacity-70 bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900">
      <MoonEclipseLoader />
    </div>
  );
};

export default FullAppLoader;
