import Button from "../../Button/Button";

import {TrackNextIcon} from "@radix-ui/react-icons";

const NextButton = () => {
  return (
    <Button
      size="sm"
      rounded="full"
      className={"m-1 w-9 h-9 bg-neutral-200 text-red-950"}
    >
      <TrackNextIcon />
    </Button>
  );
};

export default NextButton;
