import axiosInstance from "../../../helpers/axiosInstance";
import FETCH_KEYS from "../../../utils/constants/fetchKeys";

import {TrashIcon} from "@radix-ui/react-icons";
import clsx from "clsx";
import {useState} from "react";
import useSWR, {mutate} from "swr";

function SongOrganizer() {
  const {data} = useSWR(FETCH_KEYS.publicSongs);
  console.log({
    songData: data,
  });
  return (
    <div>
      <ul>
        {Array.isArray(data?.data?.songs) &&
          data?.data?.songs.map((song) => (
            <SongCard key={song.id} song={song} />
          ))}
      </ul>
    </div>
  );
}

export default SongOrganizer;

function SongCard({song = {}}) {
  const {title, coverArt = {}} = song;
  return (
    <li className="flex items-center justify-between my-2 bg-zinc-900/40">
      <div className="flex items-center">
        <img src={coverArt.image} height={40} width={40} />
        <p className="ml-1">{title}</p>
      </div>
      <div>
        <DeleteSongButton songId={song.songId} />
      </div>
    </li>
  );
}

function DeleteSongButton({songId}) {
  const [loading, setLoading] = useState(false);
  function handleDelete(e) {
    e.preventDefault();
    setLoading(true);
    axiosInstance
      .delete(FETCH_KEYS.publicSongs + `/${songId}`)
      .then(() => {
        mutate(FETCH_KEYS.publicSongs);
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
