import {lazyWithRetry} from "../../../../utils/ReactLazy";
import MoonLoader from "../../../Loaders/MoonLoader";

import {Suspense} from "react";
import {useSearchParams} from "react-router-dom";

const MobilePlayerFull = lazyWithRetry(() => import("./MobilePlayerFull"));
const MobileBarSmall = lazyWithRetry(() => import("./MobileBarSmall"));

function MobilePlayerBar() {
  const [searchParams] = useSearchParams();
  const playerView = searchParams.get("playerView");

  return (
    <Suspense fallback={<MoonLoader />}>
      {playerView === "full" ? <MobilePlayerFull /> : <MobileBarSmall />}
    </Suspense>
  );
}

export default MobilePlayerBar;
