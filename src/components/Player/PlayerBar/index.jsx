import {Suspense} from 'react';
import {lazy} from 'react';

const SongInfo = lazy(() => import('./SongInfo'));
const PlayerControls = lazy(() => import('./PlayerControls'));
const MediaOptions = lazy(() => import('./MediaOptions'));

const PlayerBar = () => {
  return (
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
  );
};

export default PlayerBar;

const FallbackLoader = () => {
  return <div>...</div>;
};
