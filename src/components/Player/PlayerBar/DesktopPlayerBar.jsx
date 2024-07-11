import SeekBar from "./SeekBar";

import {currentPlayingAlbumArtColorsAtom} from "../../../store/atoms/playerAtom";
import {
  generateHslString,
  generateRgbCssString,
  getDarkerHslFromRgb,
  topToBottomGradientCssGenerator,
} from "../../../utils/imageHelpers";
import {lazyWithRetry} from "../../../utils/reactLazy";
import MoonLoader from "../../Loaders/MoonLoader";

import {useAtomValue} from "jotai";
import {Suspense} from "react";

const SongInfo = lazyWithRetry(() => import("./SongInfo"));
const PlayerControls = lazyWithRetry(() => import("./PlayerControls"));
const MediaOptions = lazyWithRetry(() => import("./MediaOptions"));

function DesktopPlayerBar() {
  const imageColors = useAtomValue(currentPlayingAlbumArtColorsAtom);
  const hslString = getDarkerHslFromRgb(
    imageColors.r,
    imageColors.g,
    imageColors.b
  );
  return (
    <div
      style={{
        backgroundColor: generateRgbCssString(
          imageColors.r,
          imageColors.g,
          imageColors.b
        ),
        background: topToBottomGradientCssGenerator(
          generateHslString(hslString[0], hslString[1], 12),
          generateHslString(hslString[0], hslString[1], 18)
        ),
      }}
      className="px-1 pb-3 place-content-center bg-neutral-950"
    >
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
  return (
    <div>
      <MoonLoader />
    </div>
  );
};
