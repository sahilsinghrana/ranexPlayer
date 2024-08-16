import LinkSongWithPlaylistButton from "./LinkSongWithPlaylistButton";

import MoonLoader from "../../../../../components/Loaders/MoonLoader";
import DeletePlaylistButton from "../DeletePlaylistButton";

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
      <div className="flex justify-between">
        <h2 className="text-sm text-gray-400">
          Playlist: <b className="text-xl text-gray-100">{title}</b>{" "}
          <span className="text-xs">({playlistId}</span>)
        </h2>

        <ul className="flex list-style-none">
          <ActionItem>
            <LinkSongWithPlaylistButton />
          </ActionItem>
          <ActionItem>
            <DeletePlaylistButton playlistId={playlistId} />
          </ActionItem>
        </ul>
      </div>
    </div>
  );
}

export default PlaylistDetails;

function ActionItem({children}) {
  return (
    <li className="border m-1 border-gray-200/10 hover:border-gray-200/50">
      {children}
    </li>
  );
}
