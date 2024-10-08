import Button from "../../../components/Button/Button.jsx";
import axiosInstance from "../../../helpers/axiosInstance.js";
import {cleanSiteNamesFromString} from "../../../helpers/song.js";
import {getSongInfo} from "../../../helpers/songs.js";

import clsx from "clsx";
import {useState} from "react";

function Uploader() {
  const [songsAndMeta, setSongsAndMeta] = useState([]);
  const [loadingFiles, setLoadingFiles] = useState(false);
  const [uploading, setUploading] = useState([]);
  const [errors, setErrors] = useState([]);

  function onSongChoose(e) {
    const files = e.target.files || [];
    setLoadingFiles(true);
    import("../../../lib/MusicPlayer/mediaTags.js")
      .then(async ({readTags}) => {
        for (const file of files) {
          try {
            await readTags(file).then(
              ({title, artist, album, year, albumArt, bpm, genre}) => {
                const processedFile = {
                  title: cleanSiteNamesFromString(title),
                  artist: cleanSiteNamesFromString(artist),
                  album: cleanSiteNamesFromString(album),
                  year,
                  albumArt,
                  file,
                  bpm,
                  genre,
                };
                getSongInfo(processedFile.artist, processedFile.title)
                  .then((songInfo = {}) => {
                    processedFile.musicBrainz = songInfo.default;
                  })
                  .catch((err) => console.error(err))
                  .finally(() => {
                    setSongsAndMeta((p) => [...p, processedFile]);
                  });
              }
            );
          } catch (err) {
            console.log("Failed for", err);
          }
        }
      })
      .catch((err) => {
        console.log("failed to import readTags", err);
      })
      .finally(() => {
        setLoadingFiles(false);
      });
  }

  function handleUpload(e) {
    e.preventDefault();

    Promise.all(
      songsAndMeta.map(async (song, index) => {
        const formData = new FormData();
        formData.append(
          "meta",
          JSON.stringify({
            title: song.title,
            artist: song.artist,
            album: song.album,
            year: song.year,
            bpm: song.bpm,
            genre: song.genre,
            musicBrainz: song.musicBrainz,
          })
        );
        formData.append("file", song.file, song.file.name);
        setUploading((prev) => [...prev, index]);
        return axiosInstance
          .post("/music/song", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .catch((err) => {
            return {
              error: err?.response?.data || err,
            };
          })
          .finally(() => {
            setUploading((prev) => prev.filter((idx) => idx !== index));
          });
      })
    ).then((results) => {
      const errorIdxs = [];
      results.forEach((res, idx) => {
        if (res?.error) {
          errorIdxs.push(idx);
        }
      });
      setErrors(errorIdxs);
    });
  }
  return (
    <div className="m-4 text-sm rounded-lg bg-neutral-600/40">
      <h1 className="p-4 text-lg font-bold text-neutral-300">Upload Song</h1>
      <form
        onSubmit={handleUpload}
        className="flex flex-col items-center justify-center"
      >
        <input
          type="file"
          className="my-4 text-xs text-center rounded-md bg-neutral-600 max-w-40"
          onChange={onSongChoose}
          multiple
          accept=".mp3, .aac,.flac,.wav"
        />

        <ul className="overflow-y-auto max-h-[400px] my-4">
          {songsAndMeta.map((song, idx) => {
            return (
              <UploadedSongCard
                uploading={uploading.includes(idx)}
                hasError={errors.includes(idx)}
                key={song.title}
                song={song}
              />
            );
          })}
        </ul>
        <Button
          disabled={loadingFiles || !songsAndMeta.length || uploading.length}
          className={"m-2 mt-6 px-9"}
        >
          Upload
        </Button>
      </form>
    </div>
  );
}

export default Uploader;

function UploadedSongCard({song, uploading, hasError}) {
  const {artist, title, album, musicBrainz = {}} = song;
  return (
    <li
      key={title}
      className={clsx("flex m-2", {
        "bg-blue-800": uploading,
        "bg-red-800": hasError,
      })}
    >
      <img
        src={
          musicBrainz?.coverArt?.thumbnails?.small ||
          musicBrainz?.coverArt?.image
        }
        className="w-24 h-24"
      />
      <div className="ml-2 text-sm">
        <h5>{title}</h5>
        <h5 className="text-[9px] text-neutral-400">{title}</h5>
        <h5 className="text-xs text-neutral-300">{artist}</h5>
        <h5 className="text-[9px] text-neutral-400">{artist}</h5>
        <h5 className="text-xs text-neutral-300">{album}</h5>
        <h5 className="text-[9px] text-neutral-400">{album}</h5>
      </div>
    </li>
  );
}
