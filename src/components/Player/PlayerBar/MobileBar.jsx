import PlayerControlsSmall from "./PlayerControlsSmall";
import SeekBar from "./SeekBar";

import {currentPlayingAlbumArtColorsAtom} from "../../../store/atoms/playerAtom";
import {
  generateHslString,
  generateRgbCssString,
  getDarkerHslFromRgb,
  leftToRightGradientCssGenerator,
  topToBottomGradientCssGenerator,
} from "../../../utils/imageHelpers";
import NowPlayingAlbumArt from "../../AlbumArt/NowPlayingAlbumArt";
import MoonLoader from "../../Loaders/MoonLoader";

import {ChevronDownIcon, ListBulletIcon} from "@radix-ui/react-icons";
import {useAtomValue} from "jotai";
import {lazy, Suspense} from "react";
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

const SongInfo = lazy(() => import("./SongInfo"));
const PlayerControls = lazy(() => import("./PlayerControls"));

function MobilePlayerBar() {
  const [searchParams] = useSearchParams();
  const playerView = searchParams.get("playerView");
  if (playerView === "full") {
    return <PlayerFull />;
  }
  return <MobileBarSmall />;
}

export default MobilePlayerBar;

const FallbackLoader = () => {
  return (
    <div>
      <MoonLoader />
    </div>
  );
};

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

function PlayerFull() {
  const navigate = useNavigate();
  const imageColors = useAtomValue(currentPlayingAlbumArtColorsAtom);
  const [h, s, l] = getDarkerHslFromRgb(
    imageColors.r,
    imageColors.g,
    imageColors.b
  );
  return (
    <div
      style={{
        background: topToBottomGradientCssGenerator(
          generateRgbCssString(imageColors.r, imageColors.g, imageColors.b)
        ),
        backgroundColor: generateHslString(h, s, l),
      }}
      className="absolute top-0 grid w-full h-screen grid-cols-1 bg-neutral-600"
    >
      <div className="h-[10vh] p-6">
        <ChevronDownIcon
          height={"30px"}
          width={"30px"}
          onClick={() => {
            // const searchParams = new URLSearchParams(location.search);
            // searchParams.delete("playerView");
            // navigate(location.pathname + searchParams.toString());
            navigate(-1);
          }}
        />
      </div>
      <div className="h-[40vh] flex justify-center items-center">
        {/* <img src="" alt="artwork" className="w-[40vh] h-[40vh] bg-black" /> */}
        <NowPlayingAlbumArt className="w-[40vh] h-[40vh] bg-black" />
      </div>
      <div className="flex flex-col items-center self-end w-full gap-6 p-4">
        <div className="flex justify-between w-full">
          <div>
            <h2 className="pl-1 text-lg font-bold">Song Name</h2>
            <h3 className="pl-1 text-md font-base">Artist</h3>
          </div>
        </div>
        <SeekBar />
        <div className="grid w-full grid-cols-[minmax(30px,_1fr)_5fr_minmax(30px,_1fr)] justify-center items-center">
          <div></div>
          <PlayerControls />
          <div className="flex justify-end w-full">
            <Link to={"/now-playing"}>
              <div className="p-2 mx-1 text-white cursor-pointer ">
                <ListBulletIcon className="w-[22px] h-[22px]" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
