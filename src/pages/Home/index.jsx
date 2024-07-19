import QuotePlaceholder from "./QuotePlaceholder";

import HomeSectionLoader from "../../components/Loaders/HomeSectionLoader";
import useIsUserLoggedIn from "../../hooks/useIsUserLoggedIn";
import {lazyWithRetry} from "../../utils/reactLazy";

import {Suspense} from "react";

const LoginAndUnlockTheSecrets = lazyWithRetry(() =>
  import("./LoginAndUnlockTheSecrets")
);
const PublicPlaylists = lazyWithRetry(() => import("./PublicPlaylists"));
const RecentlyAdded = lazyWithRetry(() => import("./RecentlyAdded"));
const UserRecents = lazyWithRetry(() => import("./UserRecents"));

const Home = () => {
  const isLoggedIn = useIsUserLoggedIn();
  return (
    <div className="relative w-full">
      <div className="h-full overflow-auto">
        {isLoggedIn && (
          <Suspense fallback={HomeSectionLoader}>
            <UserRecents />
          </Suspense>
        )}
        <QuotePlaceholder>
          <span className="font-normal">Moon`s</span> gentle melody. A{" "}
          <span className="font-bold">Symphony</span> of wonder.
        </QuotePlaceholder>
        <Suspense fallback={HomeSectionLoader}>
          <RecentlyAdded />
        </Suspense>

        {!isLoggedIn && (
          <Suspense fallback={HomeSectionLoader}>
            <LoginAndUnlockTheSecrets />
          </Suspense>
        )}
        <QuotePlaceholder>
          Get <span className="font-normal">Dwelved</span> in the soul of the{" "}
          <span className="font-bold">Sound</span>
          <br />
        </QuotePlaceholder>
        <Suspense fallback={HomeSectionLoader}>
          <PublicPlaylists />
        </Suspense>
      </div>
    </div>
  );
};

export default Home;
