import LinkSongWithPlaylistButton from "./LinkSongWithPlaylistButton";

import MoonLoader from "../../../../../components/Loaders/MoonLoader";
import FETCH_KEYS from "../../../../../utils/constants/fetchKeys";
import {convertToHttps} from "../../../../../utils/helpers";
import DeletePlaylistButton from "../DeletePlaylistButton";

import {TrashIcon} from "@radix-ui/react-icons";
import {useParams} from "react-router-dom";
import useSWR from "swr";

function PlaylistDetails() {
  const params = useParams();

  const playlistId = params.playlistId;

  const {data = {}, error, isLoading} = useSWR(`/music/playlist/${playlistId}`);
  const {data: playlistSongsData = {}} = useSWR(
    FETCH_KEYS.playlistSongs + "/" + playlistId
  );
  console.log({
    data,
    playlistSongsData,
  });
  if (isLoading) return <MoonLoader />;

  const {title} = data.data || {};
  const songs = playlistSongsData.data || [];

  return (
    <div className="mt-4">
      <div className="flex items-center justify-between">
        <h2 className="text-sm text-gray-400">
          Playlist: <b className="text-xl text-gray-100">{title}</b>{" "}
          <span className="text-xs">({playlistId}</span>)
        </h2>

        <ul className="flex list-style-none">
          <ActionItem>
            <LinkSongWithPlaylistButton playlistId={playlistId} />
          </ActionItem>
          <ActionItem>
            <DeletePlaylistButton playlistId={playlistId} />
          </ActionItem>
        </ul>
      </div>
      {error && (
        <pre className="text-red-500">{JSON.stringify(error, null, 2)}</pre>
      )}
      <ul>
        {songs.map(({songs}) => (
          <li
            className="flex justify-between p-2 px-3 m-1 bg-slate-900"
            key={songs.songId}
          >
            <div className="flex items-center gap-2">
              <img
                className="w-12 h-12"
                src={convertToHttps(
                  songs.musicbrainz.coverArt.thumbnails.small ||
                    songs.musicbrainz.coverArt.thumbnails.large ||
                    songs.musicbrainz.coverArt.image
                )}
                alt=""
              />
              <div>
                <p className="text-sm text-gray-200">{songs.title}</p>{" "}
                <p className="text-xs text-gray-400 ">{songs.artist}</p>
              </div>
            </div>
            <button>
              <TrashIcon />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PlaylistDetails;

function ActionItem({children}) {
  return (
    <li className="m-1 border border-gray-200/10 hover:border-gray-200/50">
      {children}
    </li>
  );
}
