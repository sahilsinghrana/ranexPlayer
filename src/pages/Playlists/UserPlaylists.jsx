import {getRandomMoonAndMusicImage} from "../../assets/images/moonAndMusic/moonAndMusicImages";
import {favoritesPlaylistCardImage} from "../../utils/constants/images";
import QuotePlaceholder from "../Home/QuotePlaceholder";

import {Link} from "react-router-dom";

function PlaylistsPage() {
  return (
    <div className="w-full tracking-wide">
      <h1 className="m-2 mx-4 text-2xl font-bold tracking-widest uppercase text-white/40">
        Library
      </h1>
      <ul className="mx-0 my-4 mt-2 sm:mx-4">
        <li>
          <PlaylistListCard
            name="Favorites"
            image={favoritesPlaylistCardImage}
          />
        </li>
        {Array.from({length: 5}).map((_, idx) => {
          return (
            <li key={idx}>
              <PlaylistListCard
                name={"Playlist " + idx + 1}
                image={getRandomMoonAndMusicImage()}
                userName="DiZi"
              />
            </li>
          );
        })}
      </ul>
      <QuotePlaceholder>
        It`s not the <span className="font-bold">end</span>; Sometimes, The{" "}
        <span className="font-bold">beginning</span> looks like this{" "}
        <span className="not-italic font-black opacity-1">😉</span>.
      </QuotePlaceholder>
      <div></div>
    </div>
  );
}

export default PlaylistsPage;

function PlaylistListCard({
  name = "",
  image = getRandomMoonAndMusicImage(),
  userName = "",
}) {
  return (
    <Link
      className="flex items-center gap-2 p-2 py-1 duration-75 rounded-md hover:bg-neutral-900"
      to="id123"
    >
      <img src={image} height={20} className="w-14 h-14" width={20} />
      <div>
        <p className="font-semibold text-neutral-300">{name}</p>
        <p className="text-sm text-neutral-400">{userName}</p>
      </div>
    </Link>
  );
}
