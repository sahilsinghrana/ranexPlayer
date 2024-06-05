import player from "../../../lib/player";
import {playerVolumeAtom} from "../../../store/atoms/playerAtom";

import {SpeakerLoudIcon, ListBulletIcon} from "@radix-ui/react-icons";
import {useAtom} from "jotai";
import {useState} from "react";
import {Link} from "react-router-dom";

const MediaOptions = () => {
  return (
    <div className="flex justify-end">
      <div className="p-2 mx-1 cursor-pointer bg-elementBackground dark:bg-elementBackgroundDark">
        <Link to="/now-playing">
          <ListBulletIcon />
        </Link>
      </div>
      <div className="p-2 mx-1 cursor-pointer bg-elementBackground dark:bg-elementBackgroundDark">
        <VolumeButton />
      </div>
    </div>
  );
};

export default MediaOptions;

const VolumeButton = () => {
  const [showInput, setShowInput] = useState(false);
  const [currentVol] = useAtom(playerVolumeAtom);
  console.log("currentVol", currentVol);
  return (
    <div className="relative">
      {showInput && (
        <input
          type="range"
          className="absolute bottom-6 range accent-red-500"
          value={currentVol}
          min={0}
          max={1}
          step={0.01}
          style={{
            writingMode: "vertical-lr",
            direction: "rtl",
            appearance: "slider-vertical",
            width: "16px",
            verticalAlign: "bottom",
          }}
          onChange={(e) => player.changeVolume(e.target.value)}
        />
      )}
      <SpeakerLoudIcon onClick={() => setShowInput((prev) => !prev)} />
    </div>
  );
};
