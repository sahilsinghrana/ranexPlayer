import player from "../../../lib/player";
import {currentSongAtom, playerStore} from "../../../store/atoms/playerAtom";
import {formatTimeStampForSongDuration} from "../../../utils/helpers";

import {Provider, useAtom} from "jotai";
import {Suspense} from "react";
import {lazy} from "react";

const SongInfo = lazy(() => import("./SongInfo"));
const PlayerControls = lazy(() => import("./PlayerControls"));
const MediaOptions = lazy(() => import("./MediaOptions"));

const PlayerBar = () => {
  return (
    <Provider store={playerStore} min={0}>
      <div className="px-4 py-3  bg-subtleBackground dark:bg-subtleBackgroundDark">
        <SeekBar />
        <div className="grid items-center w-full grid-cols-3 ">
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
    </Provider>
  );
};

export default PlayerBar;

const FallbackLoader = () => {
  return <div>...</div>;
};

const SeekBar = () => {
  const [currentSong] = useAtom(currentSongAtom);
  const meta = currentSong?.meta || {};

  return (
    <div className="w-full">
      <input
        type="range"
        min={0}
        value={meta?.currentTime}
        max={meta?.duration}
        className="w-full mx-1 py-0 my-0"
        onChange={(e) => player.seek(e.target.value)}
      />
      <div className="flex w-full justify-between px-2 text-sm py-0">
        <p>{formatTimeStampForSongDuration(meta?.currentTime)}</p>
        <p>{formatTimeStampForSongDuration(meta?.duration)}</p>
      </div>
    </div>
  );
};
