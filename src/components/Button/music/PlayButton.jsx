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
        "m-1 w-14 h-14 bg-neutral-200 hover:bg-neutral-100 text-red-950 hover:text-red-800",
        className
      )}
      onClick={handlePlay}
    >
      <PlayIcon scale={3} height={30} width={30} />
    </Button>
  );
};

export default PlayButton;
