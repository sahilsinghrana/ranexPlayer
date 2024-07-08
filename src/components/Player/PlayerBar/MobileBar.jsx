import SeekBar from "./SeekBar";

import {ChevronDownIcon} from "@radix-ui/react-icons";
import {lazy, Suspense} from "react";
import {useLocation, useNavigate, useSearchParams} from "react-router-dom";

const SongInfo = lazy(() => import("./SongInfo"));
const PlayerControls = lazy(() => import("./PlayerControls"));

function MobilePlayerBar() {
  const [searchParams] = useSearchParams();
  const playerView = searchParams.get("playerView");
  if (playerView === "full") {
    return <PlayerFull />;
  }
  return <MobileBarSmall />;
}

export default MobilePlayerBar;

const FallbackLoader = () => {
  return <div>...</div>;
};

function MobileBarSmall() {
  const location = useLocation();
  const navigate = useNavigate();
  console.log({
    location,
    navigate,
  });
  return (
    <div
      onClick={() => {
        if (!location.search.includes("playerView=full"))
          navigate(
            (location.pathname.at(-1) === "/"
              ? location.pathname.slice(0, location.pathname.length - 2)
              : location.pathname) +
              (location.search ? location.search + "&" : "?") +
              "playerView=full"
          );
      }}
      className="py-3 pt-5 pl-3 border border-b-neutral-600 border-neutral-950 bg-neutral-300 dark:bg-neutral-900"
    >
      <div className="grid w-full grid-cols-2 ">
        <Suspense fallback={<FallbackLoader />}>
          <SongInfo />
        </Suspense>
        <Suspense fallback={<FallbackLoader />}>
          <PlayerControls />
        </Suspense>
      </div>
    </div>
  );
}

function PlayerFull() {
  const location = useLocation();
  const navigate = useNavigate();

  console.log({
    location,
  });
  return (
    <div className="absolute top-0 grid w-full h-full grid-cols-1 bg-neutral-600">
      <div className="h-[10vh] p-6">
        <ChevronDownIcon
          height={"30px"}
          width={"30px"}
          onClick={() => {
            const searchParams = new URLSearchParams(location.search);
            searchParams.delete("playerView");
            navigate(location.pathname + searchParams.toString());
          }}
        />
      </div>
      <div className="h-[40vh] flex justify-center items-center">
        <img src="" alt="artwork" className="w-[40vh] h-[40vh] bg-black" />
      </div>
      <div className="flex flex-col items-center self-end w-full gap-6 p-4">
        <div className="flex justify-between w-full">
          <div>
            <h2 className="pl-1 text-lg font-bold">Song Name</h2>
            <h3 className="pl-1 text-md font-base">Artist</h3>
          </div>
        </div>
        <SeekBar />
        <PlayerControls />
      </div>
    </div>
  );
}
