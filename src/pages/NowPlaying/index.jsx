import AlbumArt from "../../components/AlbumArt";

function NowPlaying() {
  return (
    <div className="block w-full overflow-hidden sm:pr-4 ">
      <h1 className="m-2 text-xl tracking-widest uppercase sm:text-2xl sm:m-3 text-neutral-300/80">
        Now Playing
      </h1>
      <NowPlayingList />
    </div>
  );
}

export default NowPlaying;

function NowPlayingList() {
  return (
    <ul className="flex-col justify-center w-full h-[90%] sm:mx-2 sm:px-4 sm:pr-3 pb-4 overflow-y-auto">
      {Array.from({length: 20}, (_, idx) => (
        <NowPlayingItem key={idx} name={idx} />
      ))}
    </ul>
  );
}

function NowPlayingItem({name}) {
  return (
    <li className="p-2 m-2 text-sm rounded-lg sm:pl-4 bg-neutral-900 hover:bg-neutral-950 hover:outline-1 outline-neutral-400/50 hover:outline">
      <button className="flex items-center w-full">
        <AlbumArt />
        <div className="flex items-center justify-between w-full">
          <div className="ml-3 text-left ">
            <p className="text-base font-bold ">Song {name}</p>
            <p className="text-xs text-neutral-300/60">Artist Name</p>
          </div>
          <p>Album Name</p>
          <p>3:55</p>
          <div>
            <button className="p-3 mr-2 font-extrabold">X</button>
          </div>
        </div>
      </button>
    </li>
  );
}
