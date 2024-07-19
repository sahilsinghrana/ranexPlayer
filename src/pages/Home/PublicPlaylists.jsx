import HomeSectionLoader from "../../components/Loaders/HomeSectionLoader";
import {lazyWithRetry} from "../../utils/reactLazy";

import {Suspense} from "react";
const HorizontalList = lazyWithRetry(() =>
  import("../../components/List/HorizontalList")
);

const HomeSection = lazyWithRetry(() => import("./HomeSection"));

const PlaylistCard = lazyWithRetry(() =>
  import("../../components/Card/PlaylistCard")
);

function PublicPlaylists() {
  return (
    <Suspense fallback={HomeSectionLoader}>
      <HomeSection title="Breach the void!">
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
    </Suspense>
  );
}

export default PublicPlaylists;
