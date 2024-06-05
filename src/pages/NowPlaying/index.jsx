import AlbumArt from "../../components/AlbumArt";

function NowPlaying() {
  return (
    <div className="block w-full pr-4 overflow-hidden ">
      <h1 className="sticky p-4 mb-3 font-sans text-5xl font-extrabold tracking-wide text-textPrimary dark:text-textPrimaryDark">
        Now Playing
      </h1>
      <NowPlayingList />
    </div>
  );
}

export default NowPlaying;

function NowPlayingList() {
  return (
    <ul className="flex-col justify-center w-full h-[90%] mx-2 px-4 pb-4 overflow-y-auto">
      {Array.from({length: 20}, (_, idx) => (
        <NowPlayingItem key={idx} name={idx} />
      ))}
    </ul>
  );
}

function NowPlayingItem({name}) {
  return (
    <li className="p-2 py-3 pl-6 m-2 my-3 rounded-lg bg-accentDark-6">
      <button className="flex items-center w-full">
        <AlbumArt />
        <div className="flex items-center justify-between w-full">
          <div className="ml-5 text-left ">
            <p className="text-xl font-bold ">Song {name}</p>
            <p className="text-sm font-bold ">Artist Name, Artist Name 2</p>
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
