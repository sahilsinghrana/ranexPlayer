function NowPlaying() {
  return (
    <div className="block w-full">
      <h1 className="p-4 font-sans text-5xl font-extrabold tracking-wide text-textPrimary dark:text-textPrimaryDark">
        Now Playing
      </h1>
      <NowPlayingList />
    </div>
  );
}

export default NowPlaying;

function NowPlayingList() {
  return (
    <ul className="flex-col justify-center w-full overflow-y-auto ">
      {Array.from({length: 20}, (_, idx) => (
        <NowPlayingItem key={idx} name={idx} />
      ))}
    </ul>
  );
}

function NowPlayingItem({name}) {
  return (
    <li className="p-2 py-3 m-2 bg-elementBackground">
      <button>Song {name} </button>
    </li>
  );
}
