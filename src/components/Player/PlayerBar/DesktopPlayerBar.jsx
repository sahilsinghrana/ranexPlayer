import SeekBar from "./SeekBar";

import {Suspense} from "react";
import {lazy} from "react";

const SongInfo = lazy(() => import("./SongInfo"));
const PlayerControls = lazy(() => import("./PlayerControls"));
const MediaOptions = lazy(() => import("./MediaOptions"));

function DesktopPlayerBar() {
  return (
    <div className="px-4 py-3 place-content-center bg-subtleBackground dark:bg-subtleBackgroundDark">
      <SeekBar />
      <div className="grid w-full grid-cols-3 ">
        <Suspense fallback={<FallbackLoader />}>
          <SongInfo />
        </Suspense>
        <Suspense fallback={<FallbackLoader />}>
          <PlayerControls />
        </Suspense>
        <Suspense fallback={<FallbackLoader />}>
          <MediaOptions />
        </Suspense>
      </div>
    </div>
  );
}

export default DesktopPlayerBar;

const FallbackLoader = () => {
  return <div>...</div>;
};
