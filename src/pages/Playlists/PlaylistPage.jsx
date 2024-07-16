import PlaylistSongsList from "./List";

import Button from "../../components/Button/Button";
import PlaylistCard from "../../components/Card/PlaylistCard";

import {
  ClockIcon,
  DotsVerticalIcon,
  PersonIcon,
  TimerIcon,
} from "@radix-ui/react-icons";

function PlaylistPage({playlistName = "Gold & Silver"}) {
  return (
    <div className="flex flex-col items-center w-full sm:items-start">
      <div className="flex text-center">
        <PlaylistCard size="mediumWide" playlistName={playlistName} />
        <div className="flex-col justify-between hidden h-full py-3 sm:flex text-neutral-300/70">
          <div>
            <h5 className="flex items-center font-semibold">
              <PersonIcon /> Sahil Rana
            </h5>
            <h6 className="flex items-center text-xs">
              <TimerIcon /> 1h30m
            </h6>
            <h6 className="flex items-center text-xs">
              <ClockIcon /> Last Updated : 23-12-2024
            </h6>
          </div>
          <div className="flex gap-2 mt-3">
            <Button className="w-36" type="secondary">
              Edit
            </Button>
            <Button className="w-36">Delete</Button>
          </div>
        </div>
      </div>
      <div className="w-[90%] sm:w-full sm:px-2">
        <div className="flex items-center justify-between w-full sm:hidden">
          <div className="flex gap-1 text-neutral-300/70">
            <h6 className="flex items-center text-xs">
              <TimerIcon /> 1h30m
            </h6>
            <h5 className="flex items-center font-semibold ">
              <PersonIcon /> Sahil Rana
            </h5>
          </div>
          <h5>
            <DotsVerticalIcon />
          </h5>
        </div>
        <PlaylistSongsList />
      </div>
    </div>
  );
}

export default PlaylistPage;
