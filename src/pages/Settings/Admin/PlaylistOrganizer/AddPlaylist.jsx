import Button from "../../../../components/Button/Button";
import Input from "../../../../components/Form/Input";
import axiosInstance from "../../../../helpers/axiosInstance";
import FETCH_KEYS from "../../../../utils/constants/fetchKeys";

import {useState} from "react";
import {mutate} from "swr";

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

export default AddPlaylist;
