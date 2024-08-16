import MoonLoader from "../../../../components/Loaders/MoonLoader";

import {useParams} from "react-router-dom";
import useSWR from "swr";

function PlaylistDetails() {
  const params = useParams();
  console.log({
    params,
  });

  const playlistId = params.playlistId;

  const {data = {}, error, isLoading} = useSWR(`/music/playlist/${playlistId}`);
  if (isLoading) return <MoonLoader />;

  console.log({
    data,
    error,
    isLoading,
  });

  const {title} = data.data || {};
  return (
    <div className="mt-4">
      <h2 className="text-sm text-gray-400">
        Playlist: <b className="text-xl text-gray-100">{title}</b>{" "}
        <span className="text-xs">({playlistId}</span>)
      </h2>
      <h3>{}</h3>
    </div>
  );
}

export default PlaylistDetails;
