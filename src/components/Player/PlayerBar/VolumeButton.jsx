import player from "../../../lib/player";
import {playerVolumeAtom} from "../../../store/atoms/playerAtom";
import BaseButton from "../../Button/Button";

import {SpeakerLoudIcon} from "@radix-ui/react-icons";
import {useAtom} from "jotai";
import {useState, memo} from "react";

const VolumeButton = () => {
  const [showInput, setShowInput] = useState(false);
  const [currentVol] = useAtom(playerVolumeAtom);
  console.log("currentVol", currentVol);
  return (
    <div className="relative mx-1">
      {showInput && (
        <input
          type="range"
          className="absolute bottom-full range accent-accent-8"
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
          onBlur={() => setShowInput(false)}
          autoFocus
        />
      )}
      <BaseButton
        onClick={() => setShowInput((prev) => !prev)}
        className={
          "p-2 bg-elementBackground dark:bg-elementBackgroundDark text-white"
        }
      >
        <SpeakerLoudIcon />
      </BaseButton>
    </div>
  );
};

export default memo(VolumeButton);
