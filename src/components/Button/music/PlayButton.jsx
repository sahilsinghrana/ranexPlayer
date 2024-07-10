import Button from "../../Button/Button";

import {PlayIcon} from "@radix-ui/react-icons";

const PlayButton = ({onClick}) => {
  return (
    <Button
      type="primary"
      size="lg"
      rounded="full"
      className={" px-2 m-1 w-14 h-14 bg-neutral-200 text-red-950"}
      onClick={onClick}
    >
      <PlayIcon scale={3} height={30} width={30} />
    </Button>
  );
};

export default PlayButton;
