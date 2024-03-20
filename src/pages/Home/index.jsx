import {useState} from 'react';
import {useEffect} from 'react';
import {Suspense} from 'react';
import {lazy} from 'react';

const HomeSection = lazy(() => import('./HomeSection'));
const UserGreeting = lazy(() => import('./UserGreeting'));
const Card = lazy(() => import('../../components/Card'));
const HorizontalList = lazy(() =>
  import('../../components/List/HorizontalList')
);
const PlayerBar = lazy(() => import('../../components/Player/PlayerBar'));

const Home = () => {
  const [song, setSong] = useState();

  console.log({
    song,
  });

  useEffect(() => {
    if (song) {
      song.play();
    }
  }, [song]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="relative w-full">
        <div className="h-full overflow-auto">
          <UserGreeting />
          <HomeSection title="Playlists">
            <HorizontalList>
              <li>
                <Card>Playlist Card</Card>
              </li>
              <li>
                <Card>Playlist Card2</Card>
              </li>
              <li>
                <Card>Playlist Card3</Card>
              </li>
            </HorizontalList>
          </HomeSection>
          <HomeSection title="Songs">
            <HorizontalList>
              <li>
                <Card>
                  Song1aa
                  <button
                    className="p-4 text-white bg-red-400 "
                    onClick={() => {
                      // fetch('/music/Bed.mp3')
                      //   .then((res) => {
                      //     return res.blob();
                      //   })
                      //   .then((resBlob) => {
                      //     console.log(resBlob);
                      //     const songFile = new File(resBlob);
                      //     const audioEl = new Audio()
                      //     setSong(songFile);
                      //   })
                      //   .catch((err) => {
                      //     console.log(err);
                      //   });
                      const audioEl = new Audio('/music/Bed.mp3');
                      setSong(audioEl);
                    }}
                  >
                    play
                  </button>
                </Card>
              </li>
              <li>
                <Card>Song 2</Card>
              </li>
              <li>
                <Card>Song 3</Card>
              </li>
            </HorizontalList>
          </HomeSection>
          <HomeSection title="Hot right now">
            <HorizontalList>
              <li>
                <Card>Song1</Card>
              </li>
              <li>
                <Card>Song 2</Card>
              </li>
              <li>
                <Card>Song 3</Card>
              </li>
            </HorizontalList>
          </HomeSection>
        </div>
        <PlayerBar />
      </div>
    </Suspense>
  );
};

export default Home;
