import player from "../../../lib/player";
import {clsxWithMerge} from "../../../utils/utils";
import Button from "../../Button/Button";

import {TrackPreviousIcon} from "@radix-ui/react-icons";

const handlePrev = (e) => {
  e.stopPropagation();
  player.prev();
};

const PreviousButton = ({className}) => {
  return (
    <Button
      size="sm"
      rounded="full"
      className={clsxWithMerge(
        "w-8 h-8 p-2 bg-neutral-200 hover:bg-neutral-100 text-red-950 hover:text-red-800",
        className
      )}
      onClick={handlePrev}
    >
      <TrackPreviousIcon className="w-full h-full" />
    </Button>
  );
};

export default PreviousButton;
