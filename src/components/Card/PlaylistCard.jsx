import Card from "./index";

import {getRandomMoonAndMusicImage} from "../../assets/images/moonAndMusic/moonAndMusicImages";
import {clsxWithMerge} from "../../utils/utils";

import {cva} from "class-variance-authority";
import {memo} from "react";

const playlistCard = cva("w-[40vw] h-[40vw]", {
  variants: {
    size: {
      small: "max-w-36 max-h-20 text-md",
      medium: "max-w-40 max-h-40 text-lg",
      adaptive: "max-w-36 max-h-20 text-md sm:max-w-40 sm:max-h-40 sm:text-lg",
      mediumWide:
        "max-w-full sm:max-w-80 w-[90vw] max-h-44 min-h-40 text-xl sm:text-2xl",
    },
  },
  defaultVariants: {
    size: "medium",
  },
});

function PlaylistCard({
  playlistName,
  backgroundImage = getRandomMoonAndMusicImage(),
  size,
  className,
}) {
  return (
    <Card
      className={clsxWithMerge(playlistCard({size}), className)}
      backgroundImage={backgroundImage}
    >
      <div className="flex items-end h-full bg-gradient-to-t from-neutral-900 via-neutral-500/30 to-neutral-300/0">
        <h5 className="w-full m-2 font-bold uppercase text-wrap text-neutral-50/80  drop-shadow-[0_1.2px_1.2px_#00000080]">
          {playlistName}
        </h5>
      </div>
    </Card>
  );
}

export default memo(PlaylistCard);
