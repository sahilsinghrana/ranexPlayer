import AddPlaylist from "./AddPlaylist";
import AddPlaylistButton from "./AddPlaylistButton";
import PlaylistList from "./PlaylistList";

import DialogWithTitle from "../../../../components/Dialog/DialogWithTitle";
import Input from "../../../../components/Form/Input";

import {useRef} from "react";

function PlaylistOrganizer() {
  const dialogRef = useRef();
  return (
    <div className="mt-4">
      <div className="flex justify-between flex-wrap ">
        <Input type="search" placeholder="🔎 search" />
        <div className="justify-self-end ">
          <AddPlaylistButton
            onClick={() => {
              dialogRef.current.showModal();
            }}
          />
        </div>
      </div>
      <DialogWithTitle
        className="p-5 bg-zinc-950"
        classNameTitle="bg-transparent"
        title="Add Playlist"
        ref={dialogRef}
      >
        <AddPlaylist onSubmit={() => dialogRef.current.close()} />
      </DialogWithTitle>
      <PlaylistList />
    </div>
  );
}

export default PlaylistOrganizer;
