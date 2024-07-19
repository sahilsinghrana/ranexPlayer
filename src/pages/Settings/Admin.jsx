import Button from "../../components/Button/Button";
import useUserProfile from "../../hooks/fetch/useUserProfile";
import {fileReaderPromise} from "../../utils/helpers.js";
import NotFoundPage from "../NotFound";

import {useState} from "react";

function AdminPage() {
  const {user} = useUserProfile();

  if (!user?.iam) {
    return <NotFoundPage />;
  }

  const [songsAndMeta, setSongsAndMeta] = useState([]);

  function onSongChoose(e) {
    const files = e.target.files || [];

    import("../../lib/MusicPlayer/mediaTags.js")
      .then(async ({readTags}) => {
        for (const file of files) {
          readTags(file).then(({title, artist, album, year, albumArt}) => {
            fileReaderPromise(albumArt.pictureData).then((pictureUrl) => {
              setSongsAndMeta((p) => [
                ...p,
                {
                  title,
                  artist,
                  album,
                  year,
                  albumArt,
                  pictureUrl,
                },
              ]);
            });
          });
        }
      })
      .catch((err) => {
        console.log("failed to read", err);
      })
      // .then((data) => {
      //   console.log(data);
      //   const albumArt = data?.albumArt?.pictureData;
      //   if (albumArt) {
      //     const fr = new FileReader();
      //     fr.readAsDataURL(albumArt);
      //     fr.onload = () => {
      //       setPictureData(fr.result);
      //     };
      //   }
      // })
      .catch((err) => {
        console.log("Failed to load jsmediatags", err);
      });
  }
  console.log({
    songsAndMeta,
  });
  return (
    <div>
      <div className="p-4 m-4 rounded-lg bg-neutral-600/40 ">
        <h1 className="text-xl font-bold text-neutral-300">Upload Song</h1>
        <form className="flex flex-col items-center justify-center m-2">
          <input
            type="file"
            className="px-2 py-4 text-center rounded-md bg-neutral-600"
            onChange={onSongChoose}
            multiple
          />
          <Button className={"m-2 mt-6 px-9"}>Upload</Button>
        </form>
        <ul className="overflow-y-scroll max-h-[400px]">
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
      </div>
    </div>
  );
}

export default AdminPage;
