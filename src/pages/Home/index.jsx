import favoritePlaylistImage from "../../assets/images/favoritePlaylist.webp";
import {getRandomBWMoonAndMusicImage} from "../../assets/images/moonAndMusic/moonAndMusicImages";
import SongCard from "../../components/Card/SongCard";
import MoonLoader from "../../components/Loaders/MoonLoader";
import fetcher from "../../helpers/fetcher";
import {lazyWithRetry} from "../../utils/reactLazy";

import {Suspense} from "react";
import {Link} from "react-router-dom";
import useSWR from "swr/immutable";

const HomeSection = lazyWithRetry(() => import("./HomeSection"));
const UserGreeting = lazyWithRetry(() => import("./UserGreeting"));
const PlaylistCard = lazyWithRetry(() =>
  import("../../components/Card/PlaylistCard")
);
const HorizontalList = lazyWithRetry(() =>
  import("../../components/List/HorizontalList")
);

const Home = () => {
  const playlistData = useSWR("/music/playlist", fetcher);
  console.log(playlistData);
  const userPlaylistData = useSWR("/user/playlist", fetcher);
  console.log(userPlaylistData);
  return (
    <Suspense fallback={<MoonLoader />}>
      <div className="relative w-full">
        <div className="h-full overflow-auto">
          <UserGreeting />

          <HomeSection>
            <HorizontalList>
              <Link to="/playlists/favorites">
                <li>
                  <PlaylistCard
                    size="adaptive"
                    backgroundImage={favoritePlaylistImage}
                    className="object-scale-down object-center"
                    playlistName="Favourites"
                  />
                </li>
              </Link>
              <li>
                <Link to="/playlists/24">
                  <PlaylistCard size="adaptive" playlistName="Soothing" />
                </Link>
              </li>
              <Link to="/playlists/24">
                <li>
                  <PlaylistCard size="adaptive" playlistName="Soulful" />
                </li>
              </Link>
              <li>
                <Link to="/playlists">
                  <PlaylistCard
                    size="adaptive"
                    playlistName="View More+"
                    backgroundImage={getRandomBWMoonAndMusicImage()}
                  />
                </Link>
              </li>
            </HorizontalList>
          </HomeSection>
          <h2 className="py-2 text-xs italic font-light tracking-wide text-center text-white opacity-60">
            Get <span className="font-normal">Dwelved</span> in the soul of the{" "}
            <span className="font-bold">Sound</span>
            <br />
          </h2>
          <HomeSection title="Lists Curated by US!">
            <HorizontalList>
              <li>
                <PlaylistCard playlistName="Soothing" />
              </li>
              <li>
                <PlaylistCard playlistName="Soulful" />
              </li>
              <li>
                <PlaylistCard playlistName="Gold & Silver" />
              </li>
              <li>
                <PlaylistCard playlistName="Rock the Party!" />
              </li>
            </HorizontalList>
          </HomeSection>
          <HomeSection title="Recently Added!">
            <HorizontalList className="gap-3 mb-2 sm:px-3">
              <li>
                <SongCard artist="Europe" title="In my time" />
              </li>
              <li>
                <SongCard artist="Hardwell" title="Spaceman" />
              </li>
              <li>
                <SongCard artist="AP Dhillon" title="Majhail" />
              </li>
              <li>
                <SongCard artist="KK" title="Tujhe Sochta hu" />
              </li>
            </HorizontalList>
          </HomeSection>
        </div>
      </div>
    </Suspense>
  );
};

export default Home;
