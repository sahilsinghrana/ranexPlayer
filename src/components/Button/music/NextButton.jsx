import Button from "../../Button/Button";

import {TrackNextIcon} from "@radix-ui/react-icons";

const NextButton = () => {
  return (
    <Button size="sm" rounded="full" className={"m-1 w-9 h-9"}>
      <TrackNextIcon />
    </Button>
  );
};

export default NextButton;
