import {Suspense} from 'react';
import {lazy} from 'react';

const HomeSection = lazy(() => import('./HomeSection'));
const UserGreeting = lazy(() => import('./UserGreeting'));
const Card = lazy(() => import('../../components/Card'));
const HorizontalList = lazy(() =>
  import('../../components/List/HorizontalList')
);

const Home = () => {
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
        </div>
      </div>
    </Suspense>
  );
};

export default Home;
