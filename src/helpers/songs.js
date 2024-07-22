import axios from "axios";

const addSongInfoToCache = (artist, title, info) => {
  if (!artist || !title || !info) return;
  localStorage.setItem(
    encodeURIComponent(artist) + encodeURIComponent(title),
    JSON.stringify(info)
  );
};
const getSongInfoFromCache = (artist, title) => {
  const info = localStorage.getItem(
    encodeURIComponent(artist) + encodeURIComponent(title)
  );
  try {
    return JSON.parse(info);
  } catch (err) {
    console.log(err);
    return {};
  }
};

// Function to get song info from MusicBrainz
export async function getSongInfo(artist, title) {
  const infoInCache = getSongInfoFromCache(artist, title);
  if (infoInCache) return infoInCache;
  await (async () =>
    new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 500)
    ))();

  try {
    // Search for recordings by artist and title
    const searchResponse = await axios.get(
      "https://musicbrainz.org/ws/2/recording/",
      {
        params: {
          query: `artist:${artist} AND recording:${title}`,
          fmt: "json",
          limit: 1, // Limit the number of results to 1
        },
      }
    );

    // Check if recordings were found
    if (searchResponse.data.recordings.length === 0) {
      throw new Error("No recordings found for the given artist and title.");
    }

    const recording = searchResponse.data.recordings[0];
    const releaseID = recording.releases[0].id;

    // Get the cover art from the Cover Art Archive
    const coverArtResponse = await axios
      .get(`https://coverartarchive.org/release/${releaseID}`)
      .catch((err) => {
        console.error("cover art not found", err);
      });

    // Prepare the final result
    const result = {
      artist: recording["artist-credit"][0].artist.name,
      title: recording.title,
      album: recording.releases[0].title,
      duration: recording.length,
      releaseDate: recording.releases[0].date,
      coverArt: coverArtResponse?.data?.images?.[0]
        ? coverArtResponse.data.images[0].image
        : null,
    };
    addSongInfoToCache(artist, title, result);
    return result;
  } catch (error) {
    console.error("Error fetching song info:", error);
  }
}
