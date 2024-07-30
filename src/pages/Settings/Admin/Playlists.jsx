import Button from "../../../components/Button/Button";
import DialogWithTitle from "../../../components/Dialog/DialogWithTitle";
import Input from "../../../components/Form/Input";

import {PlusIcon} from "@radix-ui/react-icons";
import {useRef} from "react";

function PlaylistOrganizer() {
  const dialogRef = useRef();
  return (
    <div className="mt-4">
      <div className="w-full m-3">
        <Input type="search" placeholder="🔎 search" />
        <Button
          onClick={() => {
            dialogRef.current.showModal();
          }}
          className={"px-5 float-right"}
        >
          <PlusIcon /> &ensp; Add
        </Button>
      </div>
      <DialogWithTitle
        onSubmit={() => dialogRef.current.close()}
        className="p-5 bg-zinc-950"
        classNameTitle="bg-transparent"
        title="Add Playlist"
        ref={dialogRef}
      >
        <AddPlaylist />
      </DialogWithTitle>
    </div>
  );
}

export default PlaylistOrganizer;

function AddPlaylist({onSubmit}) {
  function handleSubmit(e) {
    e.preventDefault();
    onSubmit && onSubmit();
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center gap-8 mt-4"
    >
      <Input
        className={"bg-slate-500/10 py-5 text-center text-2xl"}
        type="text"
        placeholder="Playlist Name"
        maxLength={20}
      />
      <Button className={"bg-slate-500/20 py-6"}>Submit</Button>
    </form>
  );
}
