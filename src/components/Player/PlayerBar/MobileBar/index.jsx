import {lazyWithRetry} from "../../../../utils/reactLazy";

import {useState} from "react";

const MobilePlayerFull = lazyWithRetry(() => import("./MobilePlayerFull"));
const MobileBarSmall = lazyWithRetry(() => import("./MobileBarSmall"));

function MobilePlayerBar() {
  const [isFull, setIsFull] = useState(false);

  return isFull ? (
    <MobilePlayerFull setIsFull={setIsFull} />
  ) : (
    <MobileBarSmall setIsFull={setIsFull} />
  );
}

export default MobilePlayerBar;
