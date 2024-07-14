import player from "../../../lib/player";
import {currentSongAtom} from "../../../store/atoms/playerAtom";
import {debounce, formatTimeStampForSongDuration} from "../../../utils/helpers";

import {useAtom} from "jotai";
import {memo, useTransition} from "react";

const SeekBar = () => {
  return (
    <div className="w-full p-0 pt-2 m-0 ">
      <SeekInput />
      <SeekTimeLabels />
    </div>
  );
};

const SeekInput = memo(() => {
  const [, startTransition] = useTransition();
  const [currentSong] = useAtom(currentSongAtom);
  const meta = currentSong?.meta || {};
  function onInputChange(e) {
    startTransition(() => {
      debounce(player.seek, 10)(e.target.value);
    });
  }
  return (
    <>
      <input
        type="range"
        min={0}
        value={meta?.currentTime || 0}
        max={meta?.duration}
        className="w-full py-[1.4px] mx-1 my-0 cursor-grab active:cursor-grabbing accent-accent-8 seekbar bg-neutral-800"
        onChange={onInputChange}
      />
    </>
  );
});

const SeekTimeLabels = () => {
  const [currentSong] = useAtom(currentSongAtom);
  const meta = currentSong?.meta || {};
  return (
    <div className="flex justify-between w-full px-2 py-1 pb-0 my-1 text-xs text-neutral-100/70">
      <p>{formatTimeStampForSongDuration(meta?.currentTime)}</p>
      <p>{formatTimeStampForSongDuration(meta?.duration)}</p>
    </div>
  );
};

export default memo(SeekBar);
