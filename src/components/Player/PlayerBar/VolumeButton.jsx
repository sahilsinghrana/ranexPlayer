import player from "../../../lib/player";
import {playerVolumeAtom} from "../../../store/atoms/playerAtom";
import BaseButton from "../../Button/Button";

import {SpeakerLoudIcon} from "@radix-ui/react-icons";
import {useAtom} from "jotai";
import {useState, memo, useEffect, useRef} from "react";

let outerClick;
const VolumeButton = () => {
  const [showInput, setShowInput] = useState(false);
  const [currentVol] = useAtom(playerVolumeAtom);

  const buttonRef = useRef();

  useEffect(() => {
    outerClick = function () {
      document.addEventListener("mousedown", (e) => {
        if (buttonRef.current && !buttonRef.current.contains(e.target))
          setShowInput(false);
      });
    };
    outerClick();
    return () => document.removeEventListener("mousedown", outerClick);
  }, [buttonRef]);

  return (
    <div ref={buttonRef} className="relative mx-1">
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
          onChange={(e) => {
            player.changeVolume(e.target.value);
          }}
          autoFocus
        />
      )}
      <BaseButton
        onClick={() => setShowInput((prev) => !prev)}
        className={
          "h-[30px] w-[30px] bg-neutral-200 hover:bg-neutral-300 text-red-950 hover:text-red-900"
        }
      >
        <SpeakerLoudIcon />
      </BaseButton>
    </div>
  );
};

export default memo(VolumeButton);
