import SongCard from "../../components/Card/SongCard";
import HomeSectionLoader from "../../components/Loaders/HomeSectionLoader";
import player from "../../lib/player";
import {playerStateAtom, playerStates} from "../../store/atoms/playerAtom";
import FETCH_KEYS from "../../utils/constants/fetchKeys";
import {lazyWithRetry} from "../../utils/reactLazy";

import {useAtomValue} from "jotai";
import {Suspense, useEffect} from "react";
import useSWR from "swr";

const HomeSection = lazyWithRetry(() => import("./HomeSection"));

const HorizontalList = lazyWithRetry(() =>
  import("../../components/List/HorizontalList")
);

function RecentlyAdded() {
  const {data, isLoading} = useSWR(FETCH_KEYS.publicSongs);
  const songs = data?.data?.songs;
  const playerState = useAtomValue(playerStateAtom);
  useEffect(() => {
    if (playerState === playerStates.INITIALIZED && songs?.length) {
      const firstSong = songs[0];
      player.load(firstSong?.path, firstSong);
    }
  }, [playerState, songs]);
  return (
    <Suspense fallback={<HomeSectionLoader />}>
      <HomeSection title="Celestial catalog!">
        <HorizontalList className="gap-3 mb-2 sm:px-3">
          {data?.data?.songs?.map((song) => {
            return (
              <li key={song?.songId}>
                <SongCard song={song} />
              </li>
            );
          })}
          <li>
            <SongCard
              song={{
                artist: "Europe",
                title: "In My Time",
              }}
            />
          </li>
          <li>
            <SongCard
              song={{
                artist: "Hardwell",
                title: "Spaceman",
              }}
            />
          </li>
          <li>
            <SongCard
              song={{
                artist: "AP Dhillon",
                title: "Majhail",
              }}
            />
          </li>
          {isLoading && <HomeSectionLoader />}
        </HorizontalList>
      </HomeSection>
    </Suspense>
  );
}

export default RecentlyAdded;
