import SeekBar from "./SeekBar";

import {currentPlayingAlbumArtColorsAtom} from "../../../store/atoms/playerAtom";
import {
  generateHslString,
  generateRgbCssString,
  getDarkerHslFromRgb,
  topToBottomGradientCssGenerator,
} from "../../../utils/imageHelpers";

import {useAtomValue} from "jotai";
import {Suspense} from "react";
import {lazy} from "react";

const SongInfo = lazy(() => import("./SongInfo"));
const PlayerControls = lazy(() => import("./PlayerControls"));
const MediaOptions = lazy(() => import("./MediaOptions"));

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
  return <div>...</div>;
};
