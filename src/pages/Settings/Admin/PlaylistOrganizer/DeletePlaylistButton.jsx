import axiosInstance from "../../../../helpers/axiosInstance";
import FETCH_KEYS from "../../../../utils/constants/fetchKeys";

import {TrashIcon} from "@radix-ui/react-icons";
import clsx from "clsx";
import {useState} from "react";
import {mutate} from "swr";

function DeletePlaylistButton({playlistId}) {
  const [loading, setLoading] = useState(false);
  function handleDelete(e) {
    e.preventDefault();
    setLoading(true);
    axiosInstance
      .delete(`/music/playlist/${playlistId}`)
      .then(() => {
        mutate(FETCH_KEYS.publicPlaylists);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <button disabled={loading} onClick={handleDelete} className="h-full m-2">
      <TrashIcon
        className={clsx("text-slate-200", {"animate-pulse": loading})}
      />
    </button>
  );
}

export default DeletePlaylistButton;
