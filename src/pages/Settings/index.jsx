import Header from "../../components/Layout/Header";

import {Link, Outlet} from "react-router-dom";

function SettingsPage() {
  return (
    <div className="p-3">
      <Header />
      <div>
        <h1>Settings</h1>
      </div>
      <div className="grid grid-cols-[minmax(300px,_1fr)_5fr]">
        <SettingsSidebar />
        <Outlet />
      </div>
    </div>
  );
}

export default SettingsPage;

function SettingsSidebar() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/settings/profile">Profile</Link>
        </li>
        <li>
          <Link to="/settings/account">Account</Link>
        </li>
        <li>
          <Link to="/settings/cloudIntegrations">Integrations</Link>
        </li>
      </ul>
    </div>
  );
}
