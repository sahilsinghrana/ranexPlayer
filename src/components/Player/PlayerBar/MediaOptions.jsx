import PlaylistLinkButton from "./PlaylistLinkButton";
import VolumeButton from "./VolumeButton";

import {memo} from "react";

const MediaOptions = () => {
  return (
    <div className="inline-flex items-center justify-self-end">
      <PlaylistLinkButton />
      <VolumeButton />
    </div>
  );
};

export default memo(MediaOptions);
