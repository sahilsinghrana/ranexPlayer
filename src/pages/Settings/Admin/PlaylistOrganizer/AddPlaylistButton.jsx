import Button from "../../../../components/Button/Button";

import {PlusIcon} from "@radix-ui/react-icons";

function AddPlaylistButton({onClick}) {
  return (
    <Button onClick={onClick} className={"px-3 mt-2"}>
      <PlusIcon /> &ensp; Add
    </Button>
  );
}

export default AddPlaylistButton;
