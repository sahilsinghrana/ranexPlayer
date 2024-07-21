import SongCard from "../../components/Card/SongCard";
import HomeSectionLoader from "../../components/Loaders/HomeSectionLoader";
import {lazyWithRetry} from "../../utils/reactLazy";

import {Suspense} from "react";
import useSWR from "swr";

const HomeSection = lazyWithRetry(() => import("./HomeSection"));

const HorizontalList = lazyWithRetry(() =>
  import("../../components/List/HorizontalList")
);

function RecentlyAdded() {
  const {data} = useSWR("/music/song");

  return (
    <Suspense fallback={<HomeSectionLoader />}>
      <HomeSection title="Celestial catalog!">
        <HorizontalList className="gap-3 mb-2 sm:px-3">
          {data?.data?.songs?.map((song) => {
            return (
              <li key={song?.title}>
                <SongCard artist={song.artist} title={song?.title} />
              </li>
            );
          })}
          <li>
            <SongCard artist="Hardwell" title="Spaceman" />
          </li>
          <li>
            <SongCard artist="AP Dhillon" title="Majhail" />
          </li>
        </HorizontalList>
      </HomeSection>
    </Suspense>
  );
}

export default RecentlyAdded;
