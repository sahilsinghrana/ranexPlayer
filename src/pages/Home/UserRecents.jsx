import QuotePlaceholder from "./QuotePlaceholder";

import favoritePlaylistImage from "../../assets/images/favoritePlaylist.webp";
import {getRandomBWMoonAndMusicImage} from "../../assets/images/moonAndMusic/moonAndMusicImages";
import HomeSectionLoader from "../../components/Loaders/HomeSectionLoader";
import fetcher from "../../helpers/fetcher";
import useIsUserLoggedIn from "../../hooks/useIsUserLoggedIn";
import {lazyWithRetry} from "../../utils/reactLazy";

import {Suspense} from "react";
import {Link} from "react-router-dom";
import useSWR from "swr/immutable";

const HomeSection = lazyWithRetry(() => import("./HomeSection"));
const PlaylistCard = lazyWithRetry(() =>
  import("../../components/Card/PlaylistCard")
);
const HorizontalList = lazyWithRetry(() =>
  import("../../components/List/HorizontalList")
);

function UserRecents() {
  const isLoggedIn = useIsUserLoggedIn();

  if (!isLoggedIn) {
    return null;
  }
  return (
    <Suspense fallback={HomeSectionLoader}>
      <UserList />
    </Suspense>
  );
}

export default UserRecents;

function UserList() {
  // const userPlaylistData = useSWR("/user/playlist", fetcher);
  const {data} = useSWR("/music/playlist", fetcher);
  console.log({
    playlistData: data?.data?.data,
  });
  return (
    <>
      <QuotePlaceholder>
        Through the <span className="font-normal">EARS</span>, into the{" "}
        <span className="font-normal">HEAD</span>, reminiscing the{" "}
        <span className="font-normal">SOUL</span>
      </QuotePlaceholder>
      <HomeSection>
        <HorizontalList>
          <Link to="/playlists/favorites">
            <li>
              <PlaylistCard
                size="smallWide"
                backgroundImage={favoritePlaylistImage}
                className="object-scale-down object-center"
                playlistName="Favourites"
              />
            </li>
          </Link>

          {data?.data?.data?.map((playlist) => {
            return (
              <li key={playlist.id}>
                <Link to={`/playlists/${playlist.id}`}>
                  <PlaylistCard
                    size="smallWide"
                    playlistName={playlist.title}
                  />
                </Link>
              </li>
            );
          })}
          <li>
            <Link to="/playlists">
              <PlaylistCard
                size="smallWide"
                playlistName="View More+"
                backgroundImage={getRandomBWMoonAndMusicImage()}
              />
            </Link>
          </li>
        </HorizontalList>
      </HomeSection>
    </>
  );
}
