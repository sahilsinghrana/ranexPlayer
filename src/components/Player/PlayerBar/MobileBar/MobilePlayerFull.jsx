import {
  currentPlayingAlbumArtColorsAtom,
  currentSongAtom,
} from "../../../../store/atoms/playerAtom";
import {
  generateRgbCssString,
  topToBottomGradientCssGenerator,
} from "../../../../utils/imageHelpers";
import {lazyWithRetry} from "../../../../utils/reactLazy";
import BaseButton from "../../../Button/Button";

import {ChevronDownIcon, ListBulletIcon} from "@radix-ui/react-icons";
import {useAtomValue} from "jotai";
import {Link} from "react-router-dom";

const PlayerControls = lazyWithRetry(() => import("../PlayerControls"));
const SeekBar = lazyWithRetry(() => import("../SeekBar"));
const NowPlayingAlbumArt = lazyWithRetry(() =>
  import("../../../AlbumArt/NowPlayingAlbumArt")
);

function MobilePlayerFull({toggleFullView}) {
  const imageColors = useAtomValue(currentPlayingAlbumArtColorsAtom);
  const currentSong = useAtomValue(currentSongAtom);

  return (
    <div
      style={{
        background: topToBottomGradientCssGenerator(
          generateRgbCssString(imageColors.r, imageColors.g, imageColors.b)
        ),
      }}
      className="absolute top-0 grid w-full h-[100dvh] grid-cols-1 bg-neutral-800 "
    >
      <div className="h-[10vh] p-6">
        <BaseButton type="trasparent" onClick={toggleFullView}>
          <ChevronDownIcon height={"30px"} width={"30px"} />
        </BaseButton>
      </div>
      <div className="h-[45vh] flex justify-center items-center">
        <NowPlayingAlbumArt size="lg" className="w-[42vh] h-[42vh] bg-black" />
      </div>
      <div className="flex flex-col items-center self-end w-full gap-6 p-4">
        <div className="flex justify-between w-full">
          <div>
            <h2 className="pl-1 text-lg font-bold">
              {currentSong?.meta?.title}
            </h2>
            <h3 className="pl-1 text-md font-base">
              {currentSong?.meta?.artist}
            </h3>
          </div>
        </div>
        <SeekBar />
        <div className=" mb-5 grid w-full grid-cols-[minmax(30px,_1fr)_5fr_minmax(30px,_1fr)] justify-center items-center">
          <div></div>
          <PlayerControls
            playPauseClass="h-16 p-3 w-16"
            prevNextClass="h-11 p-3 w-11"
            className="gap-2"
          />
          <div className="flex justify-end w-full ">
            <Link to={"/now-playing"} onClick={toggleFullView}>
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

export default MobilePlayerFull;
