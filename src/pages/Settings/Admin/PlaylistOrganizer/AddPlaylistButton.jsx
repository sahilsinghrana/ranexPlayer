import Button from "../../../../components/Button/Button";

import {PlusIcon} from "@radix-ui/react-icons";

function AddPlaylistButton({onClick}) {
  return (
    <Button onClick={onClick} className={"px-3 "}>
      <PlusIcon />
      &nbsp;ADD
    </Button>
  );
}

export default AddPlaylistButton;
