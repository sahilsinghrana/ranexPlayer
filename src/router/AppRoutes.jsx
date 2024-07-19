import FullAppLoader from "../components/Loaders/FullAppLoader.jsx";
import RouterErrorBoundary from "../pages/NotFound/RouterErrorBounday.jsx";
import {sessionAtom} from "../store/atoms/authAtom.js";
import {lazyWithRetry} from "../utils/reactLazy";

import {useAtomValue} from "jotai";
import {Suspense} from "react";
import {Routes, Route, Outlet} from "react-router-dom";

const Layout = lazyWithRetry(() => import("../components/Layout"));
const Home = lazyWithRetry(() => import("../pages/Home/index.jsx"));
const LoginPage = lazyWithRetry(() => import("../pages/Login/index.jsx"));
const NotFoundPage = lazyWithRetry(() => import("../pages/NotFound/index.jsx"));
const NowPlaying = lazyWithRetry(() => import("../pages/NowPlaying"));
const ProfilePage = lazyWithRetry(() => import("../pages/Profile/index.jsx"));
const AccountSettings = lazyWithRetry(() =>
  import("../pages/Settings/AccountSettings.jsx")
);
const AdminPage = lazyWithRetry(() => import("../pages/Settings/Admin.jsx"));
const CloudIntegrations = lazyWithRetry(() =>
  import("../pages/Settings/CloudIntegrations.jsx")
);
const SettingsPage = lazyWithRetry(() => import("../pages/Settings/index.jsx"));
const ProfileSettings = lazyWithRetry(() =>
  import("../pages/Settings/ProfileSettings.jsx")
);
const SignUPPage = lazyWithRetry(() => import("../pages/SignUp/index.jsx"));
const FavoriteList = lazyWithRetry(() =>
  import("../components/Favorites/FavoriteList.jsx")
);

const PlaylistsPage = lazyWithRetry(() =>
  import("../pages/Playlists/index.jsx")
);
const PlaylistPage = lazyWithRetry(() =>
  import("../pages/Playlists/PlaylistPage.jsx")
);

function AppRoutes() {
  return (
    <Suspense fallback={<FullAppLoader />}>
      <Routes>
        <Route errorElement={<RouterErrorBoundary />}>
          <Route Component={Layout}>
            <Route index={true} Component={Home} />
            <Route path="/now-playing" Component={NowPlaying} />
            <Route path="/playlists">
              <Route index Component={PlaylistsPage} />
              <Route path=":id" Component={PlaylistPage} />
              <Route Component={PrivateRoute}>
                <Route path="favorites" Component={FavoriteList} />
              </Route>
            </Route>
            <Route Component={PrivateRoute}>
              <Route path="/profile" Component={ProfilePage} />
            </Route>
          </Route>
          <Route path="/login" Component={LoginPage} />
          <Route path="/signup" Component={SignUPPage} />
          <Route Component={PrivateRoute}>
            <Route path="/settings" Component={SettingsPage}>
              <Route index={true} Component={ProfileSettings} />
              <Route path="profile" Component={ProfileSettings} />
              <Route path="cloudIntegrations" Component={CloudIntegrations} />
              <Route path="account" Component={AccountSettings} />
              <Route path="admin" Component={AdminPage} />
            </Route>
          </Route>
        </Route>
        <Route Component={Layout}>
          <Route path="*" Component={NotFoundPage} />
        </Route>
      </Routes>
    </Suspense>
  );
}

function PrivateRoute() {
  const session = useAtomValue(sessionAtom);
  if (session) {
    return <Outlet />;
  }
  return <NotFoundPage />;
}

export default AppRoutes;
