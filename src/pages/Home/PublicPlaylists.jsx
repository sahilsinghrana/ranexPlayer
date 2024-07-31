import HomeSectionLoader from "../../components/Loaders/HomeSectionLoader";
import FETCH_KEYS from "../../utils/constants/fetchKeys";
import {lazyWithRetry} from "../../utils/reactLazy";

import {Suspense} from "react";
import useSWR from "swr";
const HorizontalList = lazyWithRetry(() =>
  import("../../components/List/HorizontalList")
);

const HomeSection = lazyWithRetry(() => import("./HomeSection"));

const PlaylistCard = lazyWithRetry(() =>
  import("../../components/Card/PlaylistCard")
);

function PublicPlaylists() {
  const {data, isLoading} = useSWR(FETCH_KEYS.publicPlaylists);

  return (
    <Suspense fallback={<HomeSectionLoader />}>
      <HomeSection title="Breach the void!">
        <HorizontalList>
          {isLoading && <HomeSectionLoader />}
          {data?.data?.map((playlist) => {
            return (
              <li key={playlist.id}>
                <PlaylistCard playlistName={playlist.title} />
              </li>
            );
          })}
          <li>
            <PlaylistCard playlistName={"Soulful"} />
          </li>
          <li>
            <PlaylistCard playlistName={"Rock & Roll"} />
          </li>
          <li>
            <PlaylistCard playlistName={"Time Travel"} />
          </li>
          <li>
            <PlaylistCard playlistName={"You & I"} />
          </li>
        </HorizontalList>
      </HomeSection>
    </Suspense>
  );
}

export default PublicPlaylists;
