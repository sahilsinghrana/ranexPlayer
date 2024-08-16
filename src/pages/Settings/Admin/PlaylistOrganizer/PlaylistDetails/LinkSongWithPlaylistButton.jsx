import LinkSongWithPlaylist from "./LinkSong";

import DialogWithTitle from "../../../../../components/Dialog/DialogWithTitle";

import {useRef} from "react";

function LinkSongWithPlaylistButton({playlistId}) {
  const linkSongDialogRef = useRef();
  const openDialog = () => linkSongDialogRef.current.showModal();
  const closeDialog = () => linkSongDialogRef.current.close();
  return (
    <>
      <button
        onClick={linkSongDialogRef.current?.open ? closeDialog : openDialog}
        type="button"
        className="p-2"
      >
        + Add Song
      </button>
      <DialogWithTitle
        className="p-5 bg-zinc-950"
        classNameTitle="bg-transparent"
        title="Link Song"
        ref={linkSongDialogRef}
      >
        <LinkSongWithPlaylist playlistId={playlistId} />
      </DialogWithTitle>
    </>
  );
}

export default LinkSongWithPlaylistButton;
