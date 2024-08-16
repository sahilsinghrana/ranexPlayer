import Button from "../../../../components/Button/Button";

import {PlusIcon} from "@radix-ui/react-icons";

function AddPlaylistButton({onClick}) {
  return (
    <Button onClick={onClick} className={"px-5 float-right"}>
      <PlusIcon /> &ensp; Add
    </Button>
  );
}

export default AddPlaylistButton;
