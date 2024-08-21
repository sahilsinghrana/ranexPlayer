import DeletePlaylistButton from "./DeletePlaylistButton";

import {Link} from "react-router-dom";

function PlaylistCard({playlist = {}}) {
  const {title, id} = playlist;

  return (
    <li>
      <Link
        className="flex items-center justify-between w-full my-2 duration-75 cursor-pointer hover:bg-slate-950/75 bg-neutral-900/50"
        to={String(id)}
      >
        <p className="m-2">{title}</p>
        <DeletePlaylistButton playlistId={id} />
      </Link>
    </li>
  );
}

export default PlaylistCard;
