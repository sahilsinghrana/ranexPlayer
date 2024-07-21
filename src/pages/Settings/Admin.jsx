import Button from "../../components/Button/Button";
import axiosInstance from "../../helpers/axiosInstance.js";
import {cleanSiteNamesFromString} from "../../helpers/song.js";
import useUserProfile from "../../hooks/fetch/useUserProfile";
import {fileReaderPromise} from "../../utils/helpers.js";
import NotFoundPage from "../NotFound";

import {useState} from "react";

function AdminPage() {
  const {user} = useUserProfile();
  const [songsAndMeta, setSongsAndMeta] = useState([]);
  const [loadingFiles, setLoadingFiles] = useState(false);
  if (!user?.iam) {
    return <NotFoundPage />;
  }

  function onSongChoose(e) {
    const files = e.target.files || [];
    setLoadingFiles(true);
    import("../../lib/MusicPlayer/mediaTags.js")
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

                fileReaderPromise(albumArt.pictureData)
                  .then((pictureUrl) => {
                    processedFile.pictureUrl = pictureUrl;
                    return processedFile;
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
    const formData = new FormData();

    songsAndMeta.forEach((song, idx) => {
      const key = `song${idx}`;
      function appendToForm(subKey, ...params) {
        formData.append(key.concat(subKey ? "." : "", subKey), ...params);
      }
      appendToForm(
        "meta",
        JSON.stringify({
          title: song.title,
          artist: song.artist,
          album: song.album,
          year: song.year,
          bpm: song.bpm,
          genre: song.genre,
        })
      );
      appendToForm("", song.albumArt.pictureData, song.title + ".jpg");
      appendToForm("", song.file, song.file.name);
    });
    console.log({
      formData,
    });
    axiosInstance
      .post("/music/song", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log({
          res,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  console.log({
    songsAndMeta,
  });
  return (
    <div>
      <div className="p-4 m-4 rounded-lg bg-neutral-600/40 ">
        <h1 className="text-xl font-bold text-neutral-300">Upload Song</h1>
        <form
          onSubmit={handleUpload}
          className="flex flex-col items-center justify-center m-2"
        >
          <input
            type="file"
            className="px-2 py-4 text-center rounded-md bg-neutral-600"
            onChange={onSongChoose}
            multiple
            accept=".mp3, .aac,.flac,.wav"
          />

          <ul className="overflow-y-scroll max-h-[400px] my-4">
            {songsAndMeta.map((song) => {
              return (
                <li key={song.title} className="flex m-2">
                  <img src={song.pictureUrl} className="w-16 h-16" />
                  <div className="ml-2 text-sm">
                    <h5>{song.title}</h5>
                    <h5 className="text-xs text-neutral-300">{song.artist}</h5>
                    <h5 className="text-xs text-neutral-300">{song.album}</h5>
                  </div>
                </li>
              );
            })}
          </ul>
          <Button
            disabled={loadingFiles || !songsAndMeta.length}
            className={"m-2 mt-6 px-9"}
          >
            Upload
          </Button>
        </form>
      </div>
    </div>
  );
}

export default AdminPage;
