import Button from "../../../../components/Button/Button";
import DialogWithTitle from "../../../../components/Dialog/DialogWithTitle";
import Input from "../../../../components/Form/Input";
import MoonLoader from "../../../../components/Loaders/MoonLoader";
import axiosInstance from "../../../../helpers/axiosInstance";
import FETCH_KEYS from "../../../../utils/constants/fetchKeys";

import {PlusIcon, TrashIcon} from "@radix-ui/react-icons";
import clsx from "clsx";
import {useRef, useState} from "react";
import useSWR, {mutate} from "swr";

function PlaylistOrganizer() {
  const dialogRef = useRef();
  return (
    <div className="mt-4">
      <div className="w-full m-3">
        <Input type="search" placeholder="🔎 search" />
        <Button
          onClick={() => {
            dialogRef.current.showModal();
          }}
          className={"px-5 float-right"}
        >
          <PlusIcon /> &ensp; Add
        </Button>
      </div>
      <DialogWithTitle
        className="p-5 bg-zinc-950"
        classNameTitle="bg-transparent"
        title="Add Playlist"
        ref={dialogRef}
      >
        <AddPlaylist onSubmit={() => dialogRef.current.close()} />
      </DialogWithTitle>
      <PlaylistList />
    </div>
  );
}

export default PlaylistOrganizer;

const INITIAL_ADD_PLAYLIST_STATE = {playlistName: ""};
function AddPlaylist({onSubmit}) {
  const [formData, setFormData] = useState(INITIAL_ADD_PLAYLIST_STATE);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  function handleInputChange(e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();

    if (!formData.playlistName) return;

    setLoading(true);
    axiosInstance
      .post("/music/playlist", {
        playlistName: formData.playlistName,
      })
      .then((res) => {
        if (res.data?.responseCode !== 1) throw new Error(res.data?.message);
        setFormData(INITIAL_ADD_PLAYLIST_STATE);
        mutate(FETCH_KEYS.publicPlaylists);
        setError();
        onSubmit && onSubmit(res);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center gap-8 mt-4"
    >
      <div>
        <Input
          className={"bg-slate-500/10 py-4 text-center text-xl"}
          type="text"
          name="playlistName"
          value={formData.playlistName}
          placeholder="Playlist Name"
          maxLength={20}
          minLength={1}
          onChange={handleInputChange}
          required
        />
        {error && <p className="text-sm text-red-700 text-wrap">{error}</p>}
      </div>
      <Button disabled={loading} loading={loading} className={"py-6"}>
        Submit
      </Button>
    </form>
  );
}

function PlaylistList() {
  const {data: playlists, isLoading: playlistsLoading} = useSWR(
    FETCH_KEYS.publicPlaylists
  );
  return (
    <div>
      {playlistsLoading && <MoonLoader />}
      <ul>
        {Array.isArray(playlists?.data) &&
          playlists.data.map((pl) => (
            <PlaylistCard key={pl.id} playlist={pl} />
          ))}
      </ul>
    </div>
  );
}

function PlaylistCard({playlist = {}}) {
  const {title, id} = playlist;
  return (
    <li className="flex items-center justify-between w-full my-1 duration-75 cursor-pointer hover:bg-slate-950/75 bg-neutral-900/50">
      <p className="m-2">{title}</p>
      <DeletePlaylistButton playlistId={id} />
    </li>
  );
}

function DeletePlaylistButton({playlistId}) {
  const [loading, setLoading] = useState(false);
  function handleDelete(e) {
    e.preventDefault();
    setLoading(true);
    axiosInstance
      .delete(`/music/playlist/${playlistId}`)
      .then(() => {
        mutate(FETCH_KEYS.publicPlaylists);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <button disabled={loading} onClick={handleDelete} className="h-full m-2">
      <TrashIcon
        className={clsx("text-slate-200", {"animate-pulse": loading})}
      />
    </button>
  );
}
