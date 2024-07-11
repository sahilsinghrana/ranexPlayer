import {currentPlayingAlbumArtColorsAtom} from "../../../../store/atoms/playerAtom";
import {
  generateHslString,
  generateRgbCssString,
  getDarkerHslFromRgb,
  leftToRightGradientCssGenerator,
} from "../../../../utils/imageHelpers";
import {lazyWithRetry} from "../../../../utils/reactLazy";
import MoonLoader from "../../../Loaders/MoonLoader";

import {useAtomValue} from "jotai";
import {Suspense} from "react";
import {useLocation, useNavigate} from "react-router-dom";

const SongInfo = lazyWithRetry(() => import("../SongInfo"));
const PlayerControlsSmall = lazyWithRetry(() =>
  import("../PlayerControlsSmall")
);

function MobileBarSmall() {
  const location = useLocation();
  const navigate = useNavigate();
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
        if (!location.search.includes("playerView=full"))
          navigate(
            (location.pathname.at(-1) === "/"
              ? location.pathname.slice(0, location.pathname.length - 2)
              : location.pathname) +
              (location.search ? location.search + "&" : "?") +
              "playerView=full"
          );
      }}
      className="px-3 py-2 bg-neutral-900"
    >
      <div className="flex justify-between w-full ">
        <Suspense fallback={<FallbackLoader />}>
          <SongInfo />
        </Suspense>
        <Suspense fallback={<FallbackLoader />}>
          <PlayerControlsSmall />
        </Suspense>
      </div>
    </div>
  );
}

export default MobileBarSmall;

const FallbackLoader = () => {
  return (
    <div>
      <MoonLoader />
    </div>
  );
};
