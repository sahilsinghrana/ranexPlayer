import Input from "../../../../../components/Form/Input";
import axiosInstance from "../../../../../helpers/axiosInstance";
import FETCH_KEYS from "../../../../../utils/constants/fetchKeys";

import {useState} from "react";
import useSWR from "swr";

function LinkSongWithPlaylist({playlistId}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [linking, setLinking] = useState([]);

  const {data, isPending, error} = useSWR(
    FETCH_KEYS.searchSong + "/?q=" + searchQuery
  );

  const songs = data?.data?.songs || [];

  console.log({
    data,
    isPending,
    error,
  });

  function handleLinkSongWithPlaylist(songId) {
    setLinking([...linking, songId]);
    axiosInstance
      .post(FETCH_KEYS.linkSongWithPlaylist + "/" + playlistId + "/" + songId)
      .then((res) => {})
      .finally(() => {
        setLinking((prev) => prev.filter((id) => id !== songId));
      });
  }
  return (
    <div>
      <Input
        type="search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {/* display list of songs */}
      <div className="flex flex-col">
        {songs.map((song) => (
          <button
            onClick={() => handleLinkSongWithPlaylist(song.songId)}
            key={song.songId}
          >
            <h3>{song.title}</h3>
            <p className="text-xs text-gray-500">{song.artist}</p>
          </button>
        ))}
      </div>
    </div>
  );
}

export default LinkSongWithPlaylist;
