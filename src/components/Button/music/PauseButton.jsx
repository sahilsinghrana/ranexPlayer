import Button from "../Button";

import {PauseIcon} from "@radix-ui/react-icons";

const PauseButton = ({onClick}) => {
  return (
    <Button
      type="primary"
      size="lg"
      rounded="full"
      className={"px-2 m-1 w-14 h-14 bg-neutral-300 text-red-950"}
      onClick={onClick}
    >
      <PauseIcon scale={3} height={30} width={30} />
    </Button>
  );
};

export default PauseButton;
