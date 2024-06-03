import player from "../../../lib/player";
import {currentSongAtom, playerStore} from "../../../store/atoms/playerAtom";

import {Provider, useAtom} from "jotai";
import {Suspense} from "react";
import {lazy} from "react";

const SongInfo = lazy(() => import("./SongInfo"));
const PlayerControls = lazy(() => import("./PlayerControls"));
const MediaOptions = lazy(() => import("./MediaOptions"));

const PlayerBar = () => {
  return (
    <Provider store={playerStore} min={0}>
      <SeekBar />
      <div className="bottom-0 grid items-center w-full grid-cols-3 px-4 py-3 justify-self-end bg-subtleBackground dark:bg-subtleBackgroundDark">
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
        className="w-full h-6 "
        onChange={(e) => player.seek(e.target.value)}
      />
      <div className="flex w-full justify-between">
        <p>{Number(meta?.currentTime).toFixed(0)}</p>
        <p>{Number(meta?.duration).toFixed(0)}</p>
      </div>
    </div>
  );
};
