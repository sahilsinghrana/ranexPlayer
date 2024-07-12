import {lazyWithRetry} from "../../../utils/reactLazy";

import {memo} from "react";

const PlaylistLinkButton = lazyWithRetry(() => import("./PlaylistLinkButton"));
const VolumeButton = lazyWithRetry(() => import("./VolumeButton"));

const MediaOptions = () => {
  return (
    <div className="inline-flex items-center justify-self-end">
      <PlaylistLinkButton />
      <VolumeButton />
    </div>
  );
};

export default memo(MediaOptions);
