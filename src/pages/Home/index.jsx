import {getRandomMoonAndMusicImage} from "../../assets/images/moonAndMusic/moonAndMusicImages";
import MoonLoader from "../../components/Loaders/MoonLoader";
import fetcher from "../../helpers/fetcher";
import {lazyWithRetry} from "../../utils/ReactLazy";

import {Suspense} from "react";
import useSWR from "swr";

const HomeSection = lazyWithRetry(() => import("./HomeSection"));
const UserGreeting = lazyWithRetry(() => import("./UserGreeting"));
const Card = lazyWithRetry(() => import("../../components/Card"));
const HorizontalList = lazyWithRetry(() =>
  import("../../components/List/HorizontalList")
);

const Home = () => {
  useSWR("/music/playlist", fetcher);

  return (
    <Suspense fallback={<MoonLoader />}>
      <div className="relative w-full">
        <div className="h-full overflow-auto">
          <UserGreeting />

          <HomeSection title="Playlists">
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

function PlaylistCard({playlistName, backgroundImage}) {
  return (
    <Card backgroundImage={backgroundImage || getRandomMoonAndMusicImage()}>
      <div className="flex items-end h-full bg-gradient-to-t from-neutral-900 via-neutral-500/50 to-neutral-300/0">
        <h5
          className="w-full m-3 text-xl font-bold uppercase  text-wrap text-neutral-50/80  drop-shadow-[0_1.2px_1.2px_#00000080]
"
        >
          {playlistName}
        </h5>
      </div>
    </Card>
  );
}
