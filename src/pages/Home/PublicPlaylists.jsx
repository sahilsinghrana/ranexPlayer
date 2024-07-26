import HomeSectionLoader from "../../components/Loaders/HomeSectionLoader";
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
  const {data, isLoading} = useSWR("/music/playlist");

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
        </HorizontalList>
      </HomeSection>
    </Suspense>
  );
}

export default PublicPlaylists;
