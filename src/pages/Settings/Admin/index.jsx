import PlaylistOrganizer from "./PlaylistOrganizer/index.jsx";
import PlaylistDetails from "./PlaylistOrganizer/PlaylistDetails/index.jsx";
import Organizer from "./SongOrganizer.jsx";
import Uploader from "./Uploader.jsx";

import TabLink from "../../../components/TabLink/index.jsx";
import useUserProfile from "../../../hooks/fetch/useUserProfile.js";
import NotFoundPage from "../../NotFound/index.jsx";

import {Route, Routes} from "react-router-dom";

function AdminPage() {
  const {user} = useUserProfile();

  if (!user?.iam) {
    return <NotFoundPage />;
  }

  return (
    <div>
      <div className="flex flex-wrap gap-1 m-0 mb-2 sm:gap-0">
        <TabLink to="/settings/admin/uploader">Uploader</TabLink>
        <TabLink to="/settings/admin/organizer">Organizer</TabLink>
        <TabLink to="/settings/admin/playlists">Playlists</TabLink>
      </div>
      <Routes>
        <Route
          index
          element={
            <div className="flex items-center justify-center w-full h-80">
              <h1 className="text-2xl font-extrabold tracking-wider text-gray-300 uppercase">
                Let`s Tweak the mood!
              </h1>
            </div>
          }
        />
        <Route path="/uploader" Component={Uploader} />
        <Route path="/organizer" Component={Organizer} />
        <Route path="/playlists">
          <Route Component={PlaylistOrganizer} index />
          <Route Component={PlaylistDetails} path=":playlistId" />
        </Route>
      </Routes>
    </div>
  );
}

export default AdminPage;
