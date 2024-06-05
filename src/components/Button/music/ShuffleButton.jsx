import Button from "../../Button/Button";

import {ShuffleIcon} from "@radix-ui/react-icons";

const ShuffleButton = () => {
  return (
    <Button className="dark:text-white text-black" type="icon">
      <ShuffleIcon />
    </Button>
  );
};

export default ShuffleButton;
