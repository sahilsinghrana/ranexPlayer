import RouterErrorBoundary from "../pages/NotFound/RouterErrorBounday.jsx";
import {lazyWithRetry} from "../utils/reactLazy";

import {Routes, Route} from "react-router-dom";

const Layout = lazyWithRetry(() => import("../components/Layout"));
const Home = lazyWithRetry(() => import("../pages/Home/index.jsx"));
const LoginPage = lazyWithRetry(() => import("../pages/Login/index.jsx"));
const NotFoundPage = lazyWithRetry(() => import("../pages/NotFound/index.jsx"));
const NowPlaying = lazyWithRetry(() => import("../pages/NowPlaying"));
const ProfilePage = lazyWithRetry(() => import("../pages/Profile/index.jsx"));
const AccountSettings = lazyWithRetry(() =>
  import("../pages/Settings/AccountSettings.jsx")
);
const CloudIntegrations = lazyWithRetry(() =>
  import("../pages/Settings/CloudIntegrations.jsx")
);
const SettingsPage = lazyWithRetry(() => import("../pages/Settings/index.jsx"));
const ProfileSettings = lazyWithRetry(() =>
  import("../pages/Settings/ProfileSettings.jsx")
);
const SignUPPage = lazyWithRetry(() => import("../pages/SignUp/index.jsx"));

function AppRoutes() {
  return (
    <Routes>
      <Route errorElement={<RouterErrorBoundary />}>
        <Route Component={Layout}>
          <Route index={true} Component={Home} />
          <Route path="/now-playing" Component={NowPlaying} />
          <Route path="/profile" Component={ProfilePage} />
        </Route>
        <Route path="/login" Component={LoginPage} />
        <Route path="/signup" Component={SignUPPage} />
        <Route path="/settings" Component={SettingsPage}>
          <Route index={true} Component={ProfileSettings} />
          <Route path="profile" Component={ProfileSettings} />
          <Route path="cloudIntegrations" Component={CloudIntegrations} />
          <Route path="account" Component={AccountSettings} />
        </Route>
      </Route>
      <Route Component={Layout}>
        <Route path="*" Component={NotFoundPage} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
