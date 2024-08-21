import PlaylistCard from "./PlaylistCard";

import MoonLoader from "../../../../components/Loaders/MoonLoader";
import FETCH_KEYS from "../../../../utils/constants/fetchKeys";

import useSWR from "swr";

function PlaylistList() {
  const {data: playlists, isLoading: playlistsLoading} = useSWR(
    FETCH_KEYS.publicPlaylists
  );
  return (
    <div className="my-4 mt-6">
      {playlistsLoading && <MoonLoader />}
      <ul>
        {Array.isArray(playlists?.data) &&
          playlists.data.map((pl) => (
            <PlaylistCard key={pl.id} playlist={pl} />
          ))}
      </ul>
    </div>
  );
}

export default PlaylistList;
