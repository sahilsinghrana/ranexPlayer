import {clsxWithMerge} from "../../../utils/utils";
import Button from "../../Button/Button";

import {TrackPreviousIcon} from "@radix-ui/react-icons";

const PreviousButton = ({className}) => {
  return (
    <Button
      size="sm"
      rounded="full"
      className={clsxWithMerge(
        "m-1 w-9 h-9  bg-neutral-200 hover:bg-neutral-100 text-red-950 hover:text-red-800",
        className
      )}
    >
      <TrackPreviousIcon />
    </Button>
  );
};

export default PreviousButton;
