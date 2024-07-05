import VolumeButton from "./VolumeButton";

import {ListBulletIcon} from "@radix-ui/react-icons";
import {memo} from "react";
import {Link} from "react-router-dom";

const MediaOptions = () => {
  return (
    <div className="inline-flex items-center place-self-end">
      <Link to="/now-playing">
        <div className="p-2 mx-1 text-white bg-black cursor-pointer dark:text-black dark:bg-white">
          <ListBulletIcon />
        </div>
      </Link>
      <VolumeButton />
    </div>
  );
};

export default memo(MediaOptions);
