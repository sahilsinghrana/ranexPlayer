import {currentPlayingAlbumArtColorsAtom} from "../../../../store/atoms/playerAtom";
import {
  generateHslString,
  generateRgbCssString,
  getDarkerHslFromRgb,
  leftToRightGradientCssGenerator,
} from "../../../../utils/imageHelpers";
import {lazyWithRetry} from "../../../../utils/reactLazy";

import {useAtomValue} from "jotai";

const SongInfo = lazyWithRetry(() => import("../SongInfo"));
const PlayerControlsSmall = lazyWithRetry(() =>
  import("../PlayerControlsSmall")
);

function MobileBarSmall({setIsFull}) {
  const imageColors = useAtomValue(currentPlayingAlbumArtColorsAtom);

  return (
    <div
      style={{
        backgroundColor: generateRgbCssString(
          imageColors.r,
          imageColors.g,
          imageColors.b
        ),
        background: leftToRightGradientCssGenerator(
          generateHslString(
            ...getDarkerHslFromRgb(imageColors.r, imageColors.g, imageColors.b)
          ),
          generateRgbCssString(imageColors.r, imageColors.g, imageColors.b),
          "1%"
        ),
      }}
      onClick={() => {
        setIsFull((prev) => !prev);
      }}
      className="px-3 py-2 bg-neutral-900"
    >
      <div className="flex justify-between w-full ">
        <SongInfo />
        <PlayerControlsSmall />
      </div>
    </div>
  );
}

export default MobileBarSmall;
