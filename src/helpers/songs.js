import axios from "axios";

export async function getSongInfo(artist, title) {
  try {
    const searchResponse = await getRecordingFromArtistAndTitle(artist, title);

    if (searchResponse.data.recordings.length === 0) {
      throw new Error("No recordings found for the given artist and title.");
    }

    const recording = searchResponse.data.recordings[0];
    const releaseID = recording.releases[0].id;

    const coverArtResponse = await getCoverArtFromReleaseId(releaseID);

    const result = {
      default: {
        artist: recording["artist-credit"][0].artist.name,
        title: recording.title,
        album: recording.releases[0].title,
        duration: recording.length,
        releaseDate: recording.releases[0].date,
        coverArt: coverArtResponse?.data?.images?.[0] || {},
        releaseID,
        recordingID: recording.id,
      },
      response: searchResponse,
      coverArtResponse: coverArtResponse?.data || {},
    };
    return result;
  } catch (error) {
    console.error("Error fetching song info:", error);
  }
}

function getRecordingFromArtistAndTitle(artist, title) {
  return axios.get("https://musicbrainz.org/ws/2/recording/", {
    params: {
      query: `artist:${artist} AND recording:${title}`,
      fmt: "json",
      limit: 5,
    },
  });
}

function getCoverArtFromReleaseId(releaseID) {
  return axios.get(`https://coverartarchive.org/release/${releaseID}`);
}
