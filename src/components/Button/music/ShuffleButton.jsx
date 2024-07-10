import Button from "../../Button/Button";

import {ShuffleIcon} from "@radix-ui/react-icons";

const ShuffleButton = () => {
  return (
    <Button className="text-white" type="icon">
      <ShuffleIcon />
    </Button>
  );
};

export default ShuffleButton;
