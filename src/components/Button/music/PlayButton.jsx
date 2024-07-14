import player from "../../../lib/player";
import {clsxWithMerge} from "../../../utils/utils";
import Button from "../../Button/Button";

import {PlayIcon} from "@radix-ui/react-icons";

const handlePlay = (e) => {
  e.stopPropagation();
  player.play();
};
const PlayButton = ({className}) => {
  return (
    <Button
      type="primary"
      size="lg"
      rounded="full"
      className={clsxWithMerge(
        "w-12 h-12 p-2 bg-neutral-200 hover:bg-neutral-100 text-red-950 hover:text-red-800",
        className
      )}
      onClick={handlePlay}
    >
      <PlayIcon className="w-full h-full" />
    </Button>
  );
};

export default PlayButton;
