import SongCard from "../../components/Card/SongCard";
import HomeSectionLoader from "../../components/Loaders/HomeSectionLoader";
import player from "../../lib/player";
import {playerStateAtom, playerStates} from "../../store/atoms/playerAtom";
import {lazyWithRetry} from "../../utils/reactLazy";

import {useAtomValue} from "jotai";
import {Suspense, useEffect} from "react";
import useSWR from "swr";

const HomeSection = lazyWithRetry(() => import("./HomeSection"));

const HorizontalList = lazyWithRetry(() =>
  import("../../components/List/HorizontalList")
);

function RecentlyAdded() {
  const {data, isLoading} = useSWR("/music/song");
  const songs = data?.data?.songs;
  const playerState = useAtomValue(playerStateAtom);
  useEffect(() => {
    if (playerState === playerStates.INITIALIZED && songs?.length) {
      const firstSong = songs[0];
      player.load(firstSong?.path, {
        title: firstSong.title,
        artist: firstSong.artist,
        albumArtSrc:
          firstSong.coverArt.thumbnails.small ||
          firstSong.coverArt.thumbnails.large,
        songId: firstSong.songId,
      });
    }
  }, [playerState, songs]);
  return (
    <Suspense fallback={<HomeSectionLoader />}>
      <HomeSection title="Celestial catalog!">
        <HorizontalList className="gap-3 mb-2 sm:px-3">
          {isLoading && <HomeSectionLoader />}
          {data?.data?.songs?.map((song) => {
            return (
              <li key={song?.songId}>
                <SongCard
                  albumArtSrc={
                    song.coverArt.thumbnails.small ||
                    song.coverArt.thumbnails.large
                  }
                  songId={song?.songId}
                  path={song?.path}
                  artist={song?.artist}
                  title={song?.title}
                />
              </li>
            );
          })}
        </HorizontalList>
      </HomeSection>
    </Suspense>
  );
}

export default RecentlyAdded;
