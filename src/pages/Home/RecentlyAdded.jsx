import SongCard from "../../components/Card/SongCard";
import HomeSectionLoader from "../../components/Loaders/HomeSectionLoader";
import {lazyWithRetry} from "../../utils/reactLazy";

import {Suspense} from "react";

const HomeSection = lazyWithRetry(() => import("./HomeSection"));

const HorizontalList = lazyWithRetry(() =>
  import("../../components/List/HorizontalList")
);

function RecentlyAdded() {
  return (
    <Suspense fallback={HomeSectionLoader}>
      <HomeSection title="Celestial catalog!">
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
    </Suspense>
  );
}

export default RecentlyAdded;
