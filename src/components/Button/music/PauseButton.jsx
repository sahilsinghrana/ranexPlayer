import player from "../../../lib/player";
import {clsxWithMerge} from "../../../utils/utils";
import Button from "../Button";

import {PauseIcon} from "@radix-ui/react-icons";

const PauseButton = ({className}) => {
  const handlePause = (e) => {
    e.stopPropagation();
    player.pause();
  };

  return (
    <Button
      type="primary"
      size="lg"
      rounded="full"
      className={clsxWithMerge(
        "w-12 h-12 p-2 bg-neutral-200 hover:bg-neutral-100 text-red-950 hover:text-red-800",
        className
      )}
      onClick={handlePause}
    >
      <PauseIcon className="w-full h-full" />
    </Button>
  );
};

export default PauseButton;
