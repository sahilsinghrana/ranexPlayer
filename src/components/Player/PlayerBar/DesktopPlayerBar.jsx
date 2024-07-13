import SeekBar from "./SeekBar";

import {currentPlayingAlbumArtColorsAtom} from "../../../store/atoms/playerAtom";
import {
  generateHslString,
  generateRgbCssString,
  getDarkerHslFromRgb,
  topToBottomGradientCssGenerator,
} from "../../../utils/imageHelpers";
import {lazyWithRetry} from "../../../utils/reactLazy";

import {useAtomValue} from "jotai";

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
      className="px-2 pb-3 sm:px-4 place-content-center bg-neutral-950"
    >
      <SeekBar />
      <div className="grid w-full grid-cols-3 ">
        <SongInfo />
        <PlayerControls />
        <MediaOptions />
      </div>
    </div>
  );
}

export default DesktopPlayerBar;
