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
        "m-1 w-14 h-14 bg-neutral-200 hover:bg-neutral-100 text-red-950 hover:text-red-800",
        className
      )}
      onClick={handlePause}
    >
      <PauseIcon scale={3} height={30} width={30} />
    </Button>
  );
};

export default PauseButton;
