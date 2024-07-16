import RandomAlbumArt from "../../components/AlbumArt/RandomAlbumArt";

function PlaylistSongsList() {
  return (
    <ul className="flex-col w-full h-full pb-2">
      {Array.from({length: 20}, (_, idx) => (
        <PlaylistSongItem key={idx} name={idx} />
      ))}
    </ul>
  );
}

export default PlaylistSongsList;

function PlaylistSongItem({name}) {
  return (
    <li className="p-1 m-1 text-sm duration-75 rounded-lg bg-neutral-900/50 hover:bg-neutral-950/60 hover:outline-1 outline-neutral-400/50 hover:outline">
      <div className="flex items-center w-full">
        <RandomAlbumArt />
        <div className="flex items-center justify-between w-full">
          <div className="ml-3 text-left ">
            <p className="text-base font-semibold ">Song {name}</p>
            <p className="text-xs text-neutral-300/60">Artist Name</p>
          </div>
          <p className="pr-2 text-neutral-300/60">Album Name</p>
        </div>
      </div>
    </li>
  );
}
