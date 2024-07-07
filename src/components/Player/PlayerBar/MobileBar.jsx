import {lazy, Suspense} from "react";

const SongInfo = lazy(() => import("./SongInfo"));
const PlayerControls = lazy(() => import("./PlayerControls"));

function MobilePlayerBar() {
  return (
    <div className="py-3 pt-5 pl-3 border border-b-neutral-600 border-neutral-950 bg-neutral-300 dark:bg-neutral-900">
      <div className="grid w-full grid-cols-2 ">
        <Suspense fallback={<FallbackLoader />}>
          <SongInfo />
        </Suspense>
        <Suspense fallback={<FallbackLoader />}>
          <PlayerControls />
        </Suspense>
      </div>
    </div>
  );
}

export default MobilePlayerBar;

const FallbackLoader = () => {
  return <div>...</div>;
};
