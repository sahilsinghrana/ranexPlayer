import VolumeButton from "./VolumeButton";

import {ListBulletIcon} from "@radix-ui/react-icons";
import {memo} from "react";
import {Link} from "react-router-dom";

const MediaOptions = () => {
  return (
    <div className="inline-flex items-center place-self-end">
      <div className="p-2 mx-1 text-white cursor-pointer bg-elementBackground dark:bg-elementBackgroundDark">
        <Link to="/now-playing">
          <ListBulletIcon />
        </Link>
      </div>
      <VolumeButton />
    </div>
  );
};

export default memo(MediaOptions);
