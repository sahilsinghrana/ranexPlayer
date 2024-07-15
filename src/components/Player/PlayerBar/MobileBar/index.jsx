import usePlayerFullView from "../../../../hooks/usePlayerFullVIew";
import {lazyWithRetry} from "../../../../utils/reactLazy";

import {memo} from "react";

const MobilePlayerFull = lazyWithRetry(() => import("./MobilePlayerFull"));
const MobileBarSmall = lazyWithRetry(() => import("./MobileBarSmall"));

function MobilePlayerBar() {
  const [isFull, toggleFullView] = usePlayerFullView();
  return isFull ? (
    <MobilePlayerFull toggleFullView={toggleFullView} />
  ) : (
    <MobileBarSmall toggleFullView={toggleFullView} />
  );
}

export default memo(MobilePlayerBar);
