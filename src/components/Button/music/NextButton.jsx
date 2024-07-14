import {clsxWithMerge} from "../../../utils/utils";
import Button from "../../Button/Button";

import {TrackNextIcon} from "@radix-ui/react-icons";

const NextButton = ({className}) => {
  return (
    <Button
      size="sm"
      rounded="full"
      className={clsxWithMerge(
        "w-8 h-8 p-2 bg-neutral-200 hover:bg-neutral-100 text-red-950 hover:text-red-800",
        className
      )}
    >
      <TrackNextIcon className="w-full h-full" />
    </Button>
  );
};

export default NextButton;
