import {getRandomBWMoonAndMusicImage} from "../../assets/images/moonAndMusic/moonAndMusicImages";
import MoonLoader from "../../components/Loaders/MoonLoader";
// import fetcher from "../../helpers/fetcher";
import {lazyWithRetry} from "../../utils/reactLazy";

import {Suspense} from "react";
import {Link} from "react-router-dom";
// import useSWR from "swr";

const HomeSection = lazyWithRetry(() => import("./HomeSection"));
const UserGreeting = lazyWithRetry(() => import("./UserGreeting"));
const PlaylistCard = lazyWithRetry(() =>
  import("../../components/Card/PlaylistCard")
);
const HorizontalList = lazyWithRetry(() =>
  import("../../components/List/HorizontalList")
);

const Home = () => {
  // useSWR("/music/playlist", fetcher);

  return (
    <Suspense fallback={<MoonLoader />}>
      <div className="relative w-full">
        <div className="h-full overflow-auto">
          <UserGreeting />

          <HomeSection title="Lists Curated by YOU!">
            <HorizontalList>
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
              <Link to="/playlists/123">
                <li>
                  <PlaylistCard size="adaptive" playlistName="Gold & Silver" />
                </li>
              </Link>
              <li>
                <Link to="/playlists">
                  <PlaylistCard
                    size="adaptive"
                    playlistName="View More"
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
            </HorizontalList>
          </HomeSection>
        </div>
      </div>
    </Suspense>
  );
};

export default Home;
